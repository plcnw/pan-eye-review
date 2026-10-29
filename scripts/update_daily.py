from __future__ import annotations

import argparse
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo


TIMEZONE = ZoneInfo("Asia/Shanghai")


def run(script: Path, *args: str) -> None:
    command = [sys.executable, str(script), *args]
    print("+", " ".join(command), flush=True)
    subprocess.run(command, check=True)


def main() -> None:
    parser = argparse.ArgumentParser(description="执行盘眼每日 17:00 更新链路")
    parser.add_argument(
        "--date",
        default=datetime.now(TIMEZONE).date().isoformat(),
        help="目标日期，默认上海时区当天",
    )
    parser.add_argument(
        "--wait-retries",
        type=int,
        default=6,
        help="17:00 后文章尚未发布时的重试次数",
    )
    parser.add_argument(
        "--wait-seconds",
        type=int,
        default=300,
        help="每次重试间隔秒数",
    )
    args = parser.parse_args()

    root = Path(__file__).resolve().parent.parent
    scripts = root / "scripts"
    raw_path = root / "data" / "raw" / f"{args.date}.json"

    for attempt in range(max(1, args.wait_retries + 1)):
        try:
            run(
                scripts / "fetch_tgb.py",
                "--date",
                args.date,
                "--output-dir",
                str(root / "data" / "raw"),
            )
            break
        except subprocess.CalledProcessError:
            if attempt >= args.wait_retries:
                raise
            print(
                f"当日文章尚未可抓取，{args.wait_seconds} 秒后重试 "
                f"({attempt + 1}/{args.wait_retries})",
                flush=True,
            )
            time.sleep(args.wait_seconds)

    if not raw_path.exists():
        raise RuntimeError("抓取完成但没有生成原文快照")

    run(scripts / "ai_structure.py", "--date", args.date, "--root", str(root))
    run(scripts / "build_review_data.py", "--date", args.date, "--root", str(root))
    run(scripts / "fetch_market.py", "--date", args.date, "--root", str(root))
    run(scripts / "fetch_history.py", "--date", args.date, "--root", str(root))
    run(scripts / "screen_market.py", "--date", args.date, "--root", str(root))
    run(scripts / "build_standalone.py", "--date", args.date)

    print(f"每日复盘生成完成：{args.date}")


if __name__ == "__main__":
    main()
