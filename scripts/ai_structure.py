from __future__ import annotations

import argparse
import json
import os
import re
import sys
import urllib.request
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo


TIMEZONE = ZoneInfo("Asia/Shanghai")

SYSTEM_PROMPT = """
你是 A 股超短线复盘解析器。你的任务是把博主原文转换为结构化 JSON，
供“盘眼”应用展示。必须遵守以下规则：

1. 原文事实、作者判断、待验证问题必须分开，不能把推测写成事实。
2. 所有个股观点必须保留可直接回溯的原文语句。
3. 同一只股票只建立一个 dossier，所有相关栏目放入 mentions。
4. “900”等固定别名按内部知识解析；“S”是动态股票名称首字母池。
5. 药箱、气质股、敌对、身位等术语只用于理解，不能擅自补充原文没有的股票。
6. A 杀、资金流、涨跌、封单等客观信息若原文没有，不得虚构。
7. 板块成员必须来自原文明确归类；同一股票可以同时属于多个交易关系，但必须保留原文依据。
8. 没有数字评分的“气质股”使用“—”，不能自行编造分数。
9. 必须输出合法 JSON，不要 Markdown 代码块，不要任何 JSON 之外的解释。

输出结构必须为：
{
  "review": {
    "meta": {
      "title": "文章标题",
      "author": "作者",
      "date": "YYYY-MM-DD",
      "publishedAt": "HH:MM",
      "sourceUrl": "URL",
      "summary": "一句仅基于原文的结构判断"
    },
    "metrics": [{"label": "首板", "value": 0, "detail": "说明", "primary": true}],
    "themes": [{"id": "英文id", "name": "板块", "stocks": [], "notes": []}],
    "summary": ["首板总结原文"],
    "ladder": [{"level": 2, "label": "二板", "stocks": [{"name": "", "role": "", "note": ""}]}],
    "qualities": [{"name": "", "score": "—", "quote": "", "aside": ""}],
    "crossReferences": ["非梯队但被原文点评的股票"],
    "observations": [{"label": "观察 01", "title": ""}],
    "articleSections": {
      "observation": [],
      "highSentiment": [],
      "auction": [],
      "quality": [],
      "questions": []
    },
    "questions": [{"id": "英文id", "label": "思考题 01", "title": "", "detail": "", "related": []}],
    "dossiers": {
      "股票名": {
        "level": "板数或关联类型",
        "brief": "仅概括原文",
        "flags": ["梯队", "气质股", "观察计划"],
        "mentions": [["栏目", "原文语句"]],
        "related": ["关联股票"]
      }
    }
  },
  "sector": {
    "date": "YYYY-MM-DD",
    "market": {
      "limitUpCount": 0,
      "firstBoardCount": 0,
      "maxHeight": 0,
      "articleCoveredLimitUps": 0
    },
    "ladderFunnel": [],
    "sectors": [{
      "id": "英文id",
      "name": "板块",
      "stage": "启动/发酵/分歧/退潮/轮动",
      "count": 0,
      "firstBoardCount": 0,
      "maxHeight": 1,
      "tone": "active/strong/mixed/rotation/risk/weak",
      "members": [],
      "evidence": "原文依据",
      "nextWatch": "由原文判断整理出的观察条件"
    }]
  }
}
""".strip()


def extract_json(text: str) -> dict:
    cleaned = text.strip()
    fence = re.match(r"^```(?:json)?\s*(.*?)\s*```$", cleaned, re.DOTALL)
    if fence:
        cleaned = fence.group(1)
    return json.loads(cleaned)


def call_model(endpoint: str, api_key: str, model: str, article: dict, lexicon: dict) -> dict:
    previous_path = Path(article["_root"]) / "data" / "review" / f"{article['previousDate']}.json"
    previous = None
    if previous_path.exists():
        previous = json.loads(previous_path.read_text(encoding="utf-8"))

    user_content = {
        "date": article["date"],
        "previousDayReview": previous,
        "article": {
            "title": article["title"],
            "publishedAt": article["publishedAt"],
            "sourceUrl": article["sourceUrl"],
            "rawText": article["rawText"],
        },
        "internalLexicon": lexicon,
    }
    payload = {
        "model": model,
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {
                "role": "user",
                "content": json.dumps(user_content, ensure_ascii=False, indent=2),
            },
        ],
        "temperature": 0.1,
        "max_tokens": 16000,
        "response_format": {"type": "json_object"},
    }
    request = urllib.request.Request(
        endpoint,
        data=json.dumps(payload, ensure_ascii=False).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "User-Agent": "pan-eye-daily/1.0",
        },
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=180) as response:
        result = json.loads(response.read().decode("utf-8"))
    content = result["choices"][0]["message"]["content"]
    return extract_json(content)


def validate(review: dict, sector: dict) -> None:
    required_review = [
        "meta",
        "metrics",
        "themes",
        "summary",
        "ladder",
        "qualities",
        "crossReferences",
        "observations",
        "articleSections",
        "questions",
        "dossiers",
    ]
    missing = [key for key in required_review if key not in review]
    if missing:
        raise RuntimeError(f"AI 输出缺少 review 字段：{', '.join(missing)}")
    if not sector.get("sectors"):
        raise RuntimeError("AI 输出缺少 sector.sectors")


def main() -> None:
    parser = argparse.ArgumentParser(description="调用 AI 将复盘原文结构化为盘眼数据")
    parser.add_argument("--date", required=True)
    parser.add_argument(
        "--root",
        default=str(Path(__file__).resolve().parent.parent),
        help="盘眼项目目录",
    )
    args = parser.parse_args()

    root = Path(args.root)
    raw_path = root / "data" / "raw" / f"{args.date}.json"
    if not raw_path.exists():
        raise RuntimeError(f"缺少原文快照：{raw_path}")

    api_key = os.getenv("AI_API_KEY")
    api_url = os.getenv("AI_API_URL")
    model = os.getenv("AI_MODEL")
    if not api_key or not api_url or not model:
        raise RuntimeError("请设置 AI_API_KEY、AI_API_URL 和 AI_MODEL")

    raw = json.loads(raw_path.read_text(encoding="utf-8"))
    raw["_root"] = str(root)
    raw["date"] = args.date
    review_dates = sorted(
        path.stem
        for path in (root / "data" / "review").glob("*.json")
        if path.stem < args.date
    )
    raw["previousDate"] = review_dates[-1] if review_dates else ""

    lexicon = json.loads(
        (root / "knowledge" / "short-line-lexicon.json").read_text(encoding="utf-8")
    )
    endpoint = (
        api_url
        if api_url.rstrip("/").endswith("/chat/completions")
        else api_url.rstrip("/") + "/chat/completions"
    )
    result = call_model(endpoint, api_key, model, raw, lexicon)
    review = result["review"]
    sector = result["sector"]
    validate(review, sector)

    review["meta"].update(
        {
            "author": raw.get("author", "延边刺客"),
            "date": args.date,
            "publishedAt": raw["publishedAt"][11:16],
            "sourceUrl": raw["sourceUrl"],
        }
    )
    sector["date"] = args.date
    sector["capturedAt"] = datetime.now(TIMEZONE).isoformat(timespec="seconds")

    review_dir = root / "data" / "review"
    sector_dir = root / "data" / "sector"
    response_dir = root / "data" / "ai"
    for directory in (review_dir, sector_dir, response_dir):
        directory.mkdir(parents=True, exist_ok=True)
    (review_dir / f"{args.date}.json").write_text(
        json.dumps(review, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (sector_dir / f"{args.date}.json").write_text(
        json.dumps(sector, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (response_dir / f"{args.date}.json").write_text(
        json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (root / "sector-data.js").write_text(
        "window.SECTOR_DATA = "
        + json.dumps(sector, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(review_dir / f"{args.date}.json")
    print(sector_dir / f"{args.date}.json")


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)
