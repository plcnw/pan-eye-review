from __future__ import annotations

import argparse
import concurrent.futures
import json
import sys
import time
import urllib.request
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo


TIMEZONE = ZoneInfo("Asia/Shanghai")
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0 Safari/537.36"
)
KLINE_URL = "https://web.ifzq.gtimg.cn/appstock/app/fqkline/get"


def get_json(url: str) -> dict:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    last_error: Exception | None = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                return json.loads(response.read().decode("utf-8"))
        except Exception as exc:
            last_error = exc
            time.sleep(0.45 * (attempt + 1))
    raise RuntimeError(f"请求失败：{url}") from last_error


def limit_threshold(code: str, name: str) -> float:
    if "ST" in name.upper():
        return 4.5
    if code.startswith(("300", "301", "688", "689")):
        return 19.5
    if code.startswith(("4", "8", "92")):
        return 29.5
    return 9.5


def tencent_symbol(code: str) -> str:
    if code.startswith(("6", "9")):
        return "sh" + code
    if code.startswith(("4", "8")):
        return "bj" + code
    return "sz" + code


def fetch_history(stock: dict, end_date: str) -> dict:
    symbol = tencent_symbol(stock["code"])
    payload = get_json(f"{KLINE_URL}?param={symbol},day,,,520,qfq")
    data = (payload.get("data") or {}).get(symbol) or {}
    rows = data.get("qfqday") or data.get("day")
    if not rows:
        raise RuntimeError("没有历史行情")

    bars = []
    previous_close = None
    for fields in rows:
        if fields[0] > end_date:
            continue
        open_price = float(fields[1])
        close_price = float(fields[2])
        change_percent = (
            0.0
            if previous_close in (None, 0)
            else (close_price / previous_close - 1) * 100
        )
        bars.append(
            {
                "date": fields[0],
                "open": open_price,
                "close": close_price,
                "high": float(fields[3]),
                "low": float(fields[4]),
                "volume": float(fields[5]),
                "changePercent": round(change_percent, 2),
            }
        )
        previous_close = close_price

    threshold = limit_threshold(stock["code"], stock.get("apiName") or stock["name"])
    events = find_a_kill_events(bars, threshold)
    return {
        "name": stock["name"],
        "requestedName": stock.get("requestedName") or stock["name"],
        "apiName": stock.get("apiName"),
        "code": stock["code"],
        "quoteId": stock["quoteId"],
        "lookbackDays": len(bars),
        "limitThreshold": threshold,
        "events": events,
        "hasSuspectedAKill": bool(events),
        "bars": bars,
    }


def find_a_kill_events(bars: list[dict], threshold: float) -> list[dict]:
    events: list[dict] = []
    index = 0
    while index < len(bars):
        if bars[index]["changePercent"] < threshold:
            index += 1
            continue

        start = index
        while index < len(bars) and bars[index]["changePercent"] >= threshold:
            index += 1
        run_length = index - start
        if run_length < 2 or index >= len(bars):
            continue

        run_end = index - 1
        next_bar = bars[index]
        previous_close = bars[run_end]["close"]
        gap = (next_bar["open"] / previous_close - 1) * 100
        open_to_close = (next_bar["close"] / next_bar["open"] - 1) * 100
        next_two = bars[index : index + 2]
        two_day_drop = (
            (next_two[-1]["close"] / previous_close - 1) * 100
            if next_two
            else next_bar["changePercent"]
        )
        high_open_dump = gap >= 2 and open_to_close <= -5
        sudden_drop = next_bar["changePercent"] <= -5
        continuation = len(next_two) == 2 and two_day_drop <= -8

        if high_open_dump or sudden_drop or continuation:
            evidence = []
            if high_open_dump:
                evidence.append(f"断板日高开 {gap:.2f}% 后盘中回落 {open_to_close:.2f}%")
            if sudden_drop:
                evidence.append(f"断板当日下跌 {next_bar['changePercent']:.2f}%")
            if continuation:
                evidence.append(f"断板后两日累计下跌 {two_day_drop:.2f}%")
            events.append(
                {
                    "runStart": bars[start]["date"],
                    "runEnd": bars[run_end]["date"],
                    "runLength": run_length,
                    "breakDate": next_bar["date"],
                    "evidence": evidence,
                    "confidence": "high" if continuation or high_open_dump else "medium",
                }
            )

    return events[-3:]


def main() -> None:
    parser = argparse.ArgumentParser(description="识别连续涨停后的疑似 A 杀行为")
    parser.add_argument("--date", required=True, help="复盘日期，格式 YYYY-MM-DD")
    parser.add_argument(
        "--root",
        default=str(Path(__file__).resolve().parent.parent),
        help="盘眼项目目录",
    )
    args = parser.parse_args()

    root = Path(args.root)
    market_path = root / "data" / "market" / f"{args.date}.json"
    if not market_path.exists():
        raise RuntimeError(f"缺少行情快照：{market_path}")
    market = json.loads(market_path.read_text(encoding="utf-8"))

    results: list[dict] = []
    failures: list[str] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as executor:
        future_map = {
            executor.submit(fetch_history, stock, args.date): stock
            for stock in market["stocks"]
        }
        for future in concurrent.futures.as_completed(future_map):
            stock = future_map[future]
            try:
                results.append(future.result())
            except Exception as exc:
                failures.append(f"{stock['name']}: {exc}")

    results.sort(key=lambda item: item["name"])
    record = {
        "date": args.date,
        "capturedAt": datetime.now(TIMEZONE).isoformat(timespec="seconds"),
        "source": "腾讯历史日线（前复权）",
        "method": "连续至少两个涨停后，断板日下跌超过5%、高开后盘中回落超过5%，或断板后两日累计下跌超过8%。结果仅作为疑似证据。",
        "stocks": results,
        "failures": failures,
    }

    history_dir = root / "data" / "history"
    history_dir.mkdir(parents=True, exist_ok=True)
    (history_dir / f"{args.date}.json").write_text(
        json.dumps(record, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (root / "history-data.js").write_text(
        "window.HISTORY_DATA = "
        + json.dumps(record, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(root / "history-data.js")
    print(
        f"matched={len(results)} suspected={sum(item['hasSuspectedAKill'] for item in results)} "
        f"failed={len(failures)}"
    )


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)
