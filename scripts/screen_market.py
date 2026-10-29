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

from fetch_history import find_a_kill_events, limit_threshold, tencent_symbol


TIMEZONE = ZoneInfo("Asia/Shanghai")
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36"
)
SINA_LIST_URL = (
    "https://vip.stock.finance.sina.com.cn/quotes_service/api/json_v2.php/"
    "Market_Center.getHQNodeData"
)
TENCENT_KLINE_URL = "https://web.ifzq.gtimg.cn/appstock/app/fqkline/get"


def get_bytes(url: str, referer: str | None = None) -> bytes:
    headers = {"User-Agent": USER_AGENT}
    if referer:
        headers["Referer"] = referer
    request = urllib.request.Request(url, headers=headers)
    last_error: Exception | None = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                return response.read()
        except Exception as exc:
            last_error = exc
            time.sleep(0.4 * (attempt + 1))
    raise RuntimeError(f"请求失败：{url}") from last_error


def fetch_page(page: int, page_size: int = 100) -> list[dict]:
    params = {
        "page": page,
        "num": page_size,
        "sort": "symbol",
        "asc": 1,
        "node": "hs_a",
        "symbol": "",
        "_s_r_a": "page",
    }
    payload = get_bytes(
        f"{SINA_LIST_URL}?{urllib.parse.urlencode(params)}",
        referer="https://finance.sina.com.cn/",
    )
    data = json.loads(payload.decode("utf-8"))
    return data if isinstance(data, list) else []


def normalize_quote(row: dict) -> dict:
    code = row.get("code") or ""
    name = row.get("name") or ""
    float_cap_yi = (
        round(float(row["nmc"]) / 10_000, 2)
        if row.get("nmc") not in (None, "")
        else None
    )
    total_cap_yi = (
        round(float(row["mktcap"]) / 10_000, 2)
        if row.get("mktcap") not in (None, "")
        else None
    )
    return {
        "symbol": row.get("symbol"),
        "code": code,
        "name": name,
        "price": float(row["trade"]) if row.get("trade") else None,
        "changePercent": (
            float(row["changepercent"]) if row.get("changepercent") else None
        ),
        "turnoverRate": (
            float(row["turnoverratio"]) if row.get("turnoverratio") else None
        ),
        "amount": float(row["amount"]) if row.get("amount") else None,
        "floatMarketCapYi": float_cap_yi,
        "totalMarketCapYi": total_cap_yi,
    }


def fetch_full_market() -> list[dict]:
    results: list[dict] = []
    seen: set[str] = set()
    page = 1
    while page <= 70:
        rows = fetch_page(page)
        if not rows:
            break
        for row in rows:
            normalized = normalize_quote(row)
            if normalized["symbol"] and normalized["symbol"] not in seen:
                seen.add(normalized["symbol"])
                results.append(normalized)
        if len(rows) < 100:
            break
        page += 1
        time.sleep(0.08)
    return results


def fetch_candidate_history(stock: dict, date_text: str) -> dict:
    symbol = tencent_symbol(stock["code"])
    payload = json.loads(
        get_bytes(f"{TENCENT_KLINE_URL}?param={symbol},day,,,520,qfq").decode(
            "utf-8"
        )
    )
    data = (payload.get("data") or {}).get(symbol) or {}
    rows = data.get("qfqday") or data.get("day") or []
    bars: list[dict] = []
    previous_close = None
    for fields in rows:
        if fields[0] > date_text:
            continue
        close_price = float(fields[2])
        change_percent = (
            0.0
            if previous_close in (None, 0)
            else (close_price / previous_close - 1) * 100
        )
        bars.append(
            {
                "date": fields[0],
                "open": float(fields[1]),
                "close": close_price,
                "high": float(fields[3]),
                "low": float(fields[4]),
                "volume": float(fields[5]),
                "changePercent": round(change_percent, 2),
            }
        )
        previous_close = close_price

    threshold = limit_threshold(stock["code"], stock["name"])
    board_height = 0
    for bar in reversed(bars):
        if bar["changePercent"] >= threshold:
            board_height += 1
        else:
            break
    events = find_a_kill_events(bars, threshold)
    return {
        **stock,
        "lookbackDays": len(bars),
        "boardHeight": board_height,
        "limitThreshold": threshold,
        "aKillEvents": events,
        "hasSuspectedAKill": bool(events),
        "historySource": "live",
    }


def enrich_from_cached_history(stock: dict, cached: dict) -> dict:
    bars = cached.get("bars") or []
    threshold = limit_threshold(stock["code"], stock["name"])
    board_height = 0
    for bar in reversed(bars):
        if bar["changePercent"] >= threshold:
            board_height += 1
        else:
            break
    events = find_a_kill_events(bars, threshold)
    return {
        **stock,
        "lookbackDays": len(bars),
        "boardHeight": board_height,
        "limitThreshold": threshold,
        "aKillEvents": events,
        "hasSuspectedAKill": bool(events),
        "historySource": "cached",
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="全 A 股硬筛与首板 A 杀排除")
    parser.add_argument("--date", required=True, help="交易日，格式 YYYY-MM-DD")
    parser.add_argument(
        "--root",
        default=str(Path(__file__).resolve().parent.parent),
        help="盘眼项目目录",
    )
    args = parser.parse_args()

    full_market = fetch_full_market()
    limit_up = [
        stock
        for stock in full_market
        if stock["changePercent"] is not None
        and stock["changePercent"] >= limit_threshold(stock["code"], stock["name"])
    ]
    cap_pass = [
        stock
        for stock in limit_up
        if stock["floatMarketCapYi"] is not None
        and 30 <= stock["floatMarketCapYi"] <= 250
    ]

    history_path = Path(args.root) / "data" / "history" / f"{args.date}.json"
    cached_history = {}
    if history_path.exists():
        history_record = json.loads(history_path.read_text(encoding="utf-8"))
        cached_history = {
            stock["code"]: stock for stock in history_record.get("stocks", [])
        }

    enriched: list[dict] = []
    failures: list[str] = []
    missing = []
    for stock in cap_pass:
        cached = cached_history.get(stock["code"])
        if cached and cached.get("bars"):
            enriched.append(enrich_from_cached_history(stock, cached))
        else:
            missing.append(stock)

    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:
        future_map = {
            executor.submit(fetch_candidate_history, stock, args.date): stock
            for stock in missing
        }
        for future in concurrent.futures.as_completed(future_map):
            stock = future_map[future]
            try:
                enriched.append(future.result())
            except Exception as exc:
                failures.append(f"{stock['name']}: {exc}")
                enriched.append(
                    {
                        **stock,
                        "lookbackDays": 0,
                        "boardHeight": None,
                        "aKillEvents": [],
                        "hasSuspectedAKill": None,
                    }
                )

    hard_excluded = [
        stock
        for stock in enriched
        if stock["boardHeight"] == 1 and stock["hasSuspectedAKill"] is True
    ]
    regular_candidates = [
        stock
        for stock in enriched
        if stock["boardHeight"] is not None
        and stock not in hard_excluded
    ]
    exceptions = [
        stock
        for stock in regular_candidates
        if stock["boardHeight"] is not None and stock["boardHeight"] >= 2
    ]

    regular_candidates.sort(
        key=lambda item: (
            -(item["boardHeight"] or 0),
            -(item["changePercent"] or 0),
            -(item["amount"] or 0),
        )
    )
    hard_excluded.sort(key=lambda item: -(item["amount"] or 0))

    record = {
        "date": args.date,
        "capturedAt": datetime.now(TIMEZONE).isoformat(timespec="seconds"),
        "source": "新浪 A 股行情与腾讯历史日线",
        "marketCount": len(full_market),
        "limitUpCount": len(limit_up),
        "capPassCount": len(cap_pass),
        "hardExcludedCount": len(hard_excluded),
        "candidateCount": len(regular_candidates),
        "exceptionCount": len(exceptions),
        "rules": {
            "floatMarketCapYi": [30, 250],
            "aKillScope": "仅当前首板",
            "aKillMethod": "连续至少两个涨停后，断板日下跌超过5%、高开后盘中回落超过5%，或断板后两日累计下跌超过8%。",
            "resonance": "分钟级共振尚未接入，当前仅保留二板以上梯队例外。",
        },
        "candidates": regular_candidates,
        "hardExcluded": hard_excluded,
        "exceptions": exceptions,
        "failures": failures,
    }

    output_dir = Path(args.root) / "data" / "screen"
    output_dir.mkdir(parents=True, exist_ok=True)
    (output_dir / f"{args.date}.json").write_text(
        json.dumps(record, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (Path(args.root) / "screen-data.js").write_text(
        "window.SCREEN_DATA = "
        + json.dumps(record, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(Path(args.root) / "screen-data.js")
    print(
        f"market={record['marketCount']} limit_up={record['limitUpCount']} "
        f"cap_pass={record['capPassCount']} kept={record['candidateCount']} "
        f"excluded={record['hardExcludedCount']} failed={len(failures)}"
    )


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)
