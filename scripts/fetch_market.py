from __future__ import annotations

import argparse
import concurrent.futures
import json
import sys
import time
import urllib.parse
import urllib.request
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo


TIMEZONE = ZoneInfo("Asia/Shanghai")
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36"
)
SEARCH_URL = "https://searchapi.eastmoney.com/api/suggest/get"
TENCENT_QUOTE_URL = "https://qt.gtimg.cn/q="


def get_json(url: str) -> dict:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    last_error: Exception | None = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=20) as response:
                return json.loads(response.read().decode("utf-8"))
        except Exception as exc:
            last_error = exc
            time.sleep(0.35 * (attempt + 1))
    raise RuntimeError(f"请求失败：{url}") from last_error


def resolve_stock(name: str) -> dict | None:
    query = urllib.parse.urlencode({"input": name, "type": "14"})
    payload = get_json(f"{SEARCH_URL}?{query}")
    rows = payload.get("QuotationCodeTable", {}).get("Data") or []
    stocks = [row for row in rows if row.get("Classify") == "AStock"]
    if not stocks:
        return None

    exact = [row for row in stocks if row.get("Name") == name]
    prefix = [row for row in stocks if str(row.get("Name", "")).startswith(name)]
    selected = (exact or prefix or stocks)[0]
    return {
        "name": selected.get("Name"),
        "code": selected.get("Code"),
        "quoteId": selected.get("QuoteID"),
        "matchType": "exact" if exact else "prefix" if prefix else "search",
        "alternatives": [
            {"name": row.get("Name"), "code": row.get("Code")}
            for row in stocks[:8]
            if row.get("Name") and row.get("Code")
        ],
    }


def tencent_symbol(code: str) -> str:
    if code.startswith(("6", "9")):
        return "sh" + code
    if code.startswith(("4", "8")):
        return "bj" + code
    return "sz" + code


def fetch_tencent_quotes(symbols: list[str]) -> dict[str, dict]:
    if not symbols:
        return {}
    request = urllib.request.Request(
        TENCENT_QUOTE_URL + ",".join(symbols), headers={"User-Agent": USER_AGENT}
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        text = response.read().decode("gbk", errors="replace")

    quotes: dict[str, dict] = {}
    for line in text.splitlines():
        if "=" not in line:
            continue
        variable, value = line.split("=", 1)
        symbol = variable.removeprefix("v_").strip()
        fields = value.strip().strip(";").strip('"').split("~")
        if len(fields) < 46:
            continue

        def number(index: int) -> float | None:
            try:
                return round(float(fields[index]), 2)
            except (ValueError, IndexError):
                return None

        float_cap_yi = number(44)
        quotes[symbol[2:]] = {
            "apiName": fields[1],
            "price": number(3),
            "previousClose": number(4),
            "changePercent": number(32),
            "turnoverRate": number(38),
            "totalMarketCapYi": number(45),
            "floatMarketCapYi": float_cap_yi,
            "inFloatCapRange": (
                None
                if float_cap_yi is None
                else 30 <= float_cap_yi <= 250
            ),
            "quoteTime": fields[30],
        }
    return quotes


def unique_names(review: dict) -> list[str]:
    names: list[str] = []
    for theme in review.get("themes", []):
        names.extend(theme.get("stocks", []))
    for level in review.get("ladder", []):
        names.extend(stock["name"] for stock in level.get("stocks", []))
    names.extend(item.get("name") for item in review.get("qualities", []))
    names.extend(review.get("crossReferences", []))
    names.extend((review.get("dossiers") or {}).keys())
    return list(dict.fromkeys(name for name in names if name))


def main() -> None:
    parser = argparse.ArgumentParser(description="为复盘股票补充免费行情快照")
    parser.add_argument("--date", required=True, help="复盘日期，格式 YYYY-MM-DD")
    parser.add_argument(
        "--root",
        default=str(Path(__file__).resolve().parent.parent),
        help="盘眼项目目录",
    )
    args = parser.parse_args()

    root = Path(args.root)
    review_path = root / "data" / "review" / f"{args.date}.json"
    if not review_path.exists():
        raise RuntimeError(f"缺少结构化复盘：{review_path}")
    review = json.loads(review_path.read_text(encoding="utf-8"))
    names = unique_names(review)

    resolved: list[dict] = []
    unmatched: list[str] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as executor:
        futures = {executor.submit(resolve_stock, name): name for name in names}
        for future in concurrent.futures.as_completed(futures):
            name = futures[future]
            try:
                result = future.result()
            except Exception:
                result = None
            if result:
                result["requestedName"] = name
                resolved.append(result)
            else:
                unmatched.append(name)

    symbols = [tencent_symbol(stock["code"]) for stock in resolved]
    tencent_quotes = fetch_tencent_quotes(symbols)
    quoted: list[dict] = []
    for stock in resolved:
        quote = tencent_quotes.get(stock["code"])
        if not quote:
            quote = {
                "apiName": stock["name"],
                "price": None,
                "changePercent": None,
                "turnoverRate": None,
                "totalMarketCapYi": None,
                "floatMarketCapYi": None,
                "inFloatCapRange": None,
                "error": "quote_failed",
            }
        quoted.append({**stock, **quote})

    quoted.sort(key=lambda item: item["requestedName"])
    indices = []
    for name, code, symbol in (
        ("上证指数", "000001", "sh000001"),
        ("深证成指", "399001", "sz399001"),
        ("创业板指", "399006", "sz399006"),
    ):
        try:
            quote = fetch_tencent_quotes([symbol]).get(code)
            if quote:
                indices.append({**quote, "name": name, "code": code})
        except Exception:
            pass

    record = {
        "date": args.date,
        "capturedAt": datetime.now(TIMEZONE).isoformat(timespec="seconds"),
        "source": "东方财富公开行情接口",
        "note": "免费行情快照；主力资金字段未使用，市值单位为亿元。",
        "floatMarketCapRangeYi": [30, 250],
        "indices": indices,
        "stocks": quoted,
        "unmatched": unmatched,
    }

    market_dir = root / "data" / "market"
    market_dir.mkdir(parents=True, exist_ok=True)
    (market_dir / f"{args.date}.json").write_text(
        json.dumps(record, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (root / "market-data.js").write_text(
        "window.MARKET_DATA = "
        + json.dumps(record, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(root / "market-data.js")
    print(
        f"matched={len(quoted)} unmatched={len(unmatched)} "
        f"in_range={sum(item.get('inFloatCapRange') is True for item in quoted)}"
    )


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)
