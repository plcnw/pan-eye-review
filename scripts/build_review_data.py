from __future__ import annotations

import argparse
import json
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser(description="把结构化复盘 JSON 同步到前端数据文件")
    parser.add_argument("--date", required=True, help="复盘日期，格式 YYYY-MM-DD")
    parser.add_argument(
        "--root",
        default=str(Path(__file__).resolve().parent.parent),
        help="盘眼项目目录",
    )
    args = parser.parse_args()

    root = Path(args.root)
    source = root / "data" / "review" / f"{args.date}.json"
    target = root / "review-data.js"
    review = json.loads(source.read_text(encoding="utf-8"))
    target.write_text(
        "window.REVIEW_DATA = "
        + json.dumps(review, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(target)


if __name__ == "__main__":
    main()
