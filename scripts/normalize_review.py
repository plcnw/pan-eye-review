from __future__ import annotations

import argparse
import json
import re
from pathlib import Path


def parse_first_board(lines: list[str]) -> list[dict]:
    try:
        start = lines.index("首板") + 1
        end = lines.index("首板总结")
    except ValueError as exc:
        raise RuntimeError("无法定位首板或首板总结") from exc

    themes: list[dict] = []
    current: dict | None = None
    in_notes = False

    def finish() -> None:
        nonlocal current
        if current and current["stocks"]:
            current["stocks"] = list(dict.fromkeys(current["stocks"]))
            themes.append(current)
        current = None

    for raw_line in lines[start:end]:
        line = raw_line.strip()
        if not line:
            continue
        if line == "——":
            finish()
            in_notes = False
            continue
        if current is None:
            current = {"name": line, "stocks": [], "notes": []}
            in_notes = False
            continue
        if line == "首封时间":
            in_notes = True
            continue
        if in_notes:
            current["notes"].append(line)
            continue
        if current["name"] == "其余形式独苗":
            parts = [part.strip() for part in line.split("，") if part.strip()]
            if parts:
                current["stocks"].append(parts[0])
                if len(parts) > 1:
                    current["notes"].append("，".join(parts[1:]))
        else:
            current["stocks"].extend(
                part.strip() for part in line.split("，") if part.strip()
            )
    finish()
    return themes


def board_number(level: dict) -> int:
    try:
        return int(level.get("level"))
    except (TypeError, ValueError):
        match = re.search(r"([一二三四五六七八九十]+)板", level.get("label", ""))
        mapping = {
            "一": 1,
            "二": 2,
            "三": 3,
            "四": 4,
            "五": 5,
            "六": 6,
            "七": 7,
            "八": 8,
            "九": 9,
            "十": 10,
        }
        return mapping.get(match.group(1), 0) if match else 0


def normalize(
    raw: dict,
    review: dict,
    sector: dict,
    market: dict,
    screen: dict,
    previous_review: dict | None,
) -> tuple[dict, dict]:
    parsed_themes = parse_first_board(raw["lines"])
    old_themes = {theme.get("name"): theme for theme in review.get("themes", [])}
    theme_ids = {
        "航天": "aerospace",
        "消费": "consumer",
        "冰雪": "ice",
        "物流": "logistics",
        "应用": "application",
        "机器人": "robot",
        "其余形式独苗": "single",
    }
    review["themes"] = [
        {
            "id": old_themes.get(theme["name"], {}).get("id")
            or theme_ids.get(theme["name"], f"theme-{index + 1}"),
            "name": theme["name"],
            "stocks": theme["stocks"],
            "notes": theme["notes"],
        }
        for index, theme in enumerate(parsed_themes)
    ]

    ladder = sorted(review.get("ladder", []), key=board_number, reverse=True)
    for level in ladder:
        value = board_number(level)
        level["level"] = value
        level["label"] = f"{value}板"
    review["ladder"] = ladder

    first_stocks = {
        stock for theme in review["themes"] for stock in theme.get("stocks", [])
    }
    ladder_names = {
        stock.get("name")
        for level in ladder
        for stock in level.get("stocks", [])
        if stock.get("name")
    }
    highest = max((board_number(level) for level in ladder), default=0)
    metrics = [{"label": "首板", "value": len(first_stocks), "detail": "文章首板名单去重", "primary": True}]
    for level in ladder:
        metrics.append(
            {
                "label": level["label"],
                "value": len(level.get("stocks", [])),
                "detail": "、".join(stock["name"] for stock in level.get("stocks", [])),
                "primary": False,
            }
        )
    review["metrics"] = metrics

    market_names = {
        stock.get("requestedName")
        for stock in market.get("stocks", [])
        if stock.get("requestedName")
    }
    cross_references = []
    for name in review.get("crossReferences", []):
        if not name or name in first_stocks or name in ladder_names:
            continue
        if name not in market_names:
            continue
        if name not in cross_references:
            cross_references.append(name)
    review["crossReferences"] = cross_references

    dossiers = review.setdefault("dossiers", {})
    for theme in review["themes"]:
        for name in theme["stocks"]:
            dossiers.setdefault(
                name,
                {
                    "level": "首板",
                    "brief": f"原文首板方向：{theme['name']}。",
                    "flags": ["首板池", theme["name"]],
                    "mentions": [[theme["name"], f"{name}。{' '.join(theme['notes'])}"]],
                    "related": [stock for stock in theme["stocks"] if stock != name][:4],
                },
            )

    sector["date"] = raw["publishedAt"][:10]
    sector["market"] = {
        "limitUpCount": screen.get("limitUpCount", 0),
        "firstBoardCount": len(first_stocks),
        "maxHeight": highest,
        "articleCoveredLimitUps": len(first_stocks)
        + sum(len(level.get("stocks", [])) for level in ladder),
    }

    funnel = []
    if previous_review:
        previous_by_name = {
            stock: 1
            for theme in previous_review.get("themes", [])
            for stock in theme.get("stocks", [])
        }
        for level in previous_review.get("ladder", []):
            for stock in level.get("stocks", []):
                previous_by_name[stock.get("name")] = board_number(level)
        current_by_name = {stock: 1 for stock in first_stocks}
        for level in ladder:
            for stock in level.get("stocks", []):
                current_by_name[stock.get("name")] = board_number(level)
        for base_level in sorted(set(previous_by_name.values())):
            base_names = [
                name for name, value in previous_by_name.items() if value == base_level
            ]
            promoted = [
                name
                for name in base_names
                if current_by_name.get(name, 0) > base_level
            ]
            funnel.append(
                {
                    "from": f"{base_level}板",
                    "to": f"{base_level + 1}板",
                    "base": len(base_names),
                    "promoted": len(promoted),
                    "rate": round(len(promoted) / len(base_names) * 100, 2)
                    if base_names
                    else 0,
                }
            )
    sector["ladderFunnel"] = funnel

    updated_sectors = []
    theme_by_name = {theme["name"]: theme for theme in review["themes"]}
    for item in sector.get("sectors", []):
        theme = theme_by_name.get(item.get("name"))
        if theme:
            item["firstBoardCount"] = len(theme["stocks"])
            item["count"] = len(set(item.get("members", []) + theme["stocks"]))
        updated_sectors.append(item)
    sector["sectors"] = updated_sectors
    return review, sector


def main() -> None:
    parser = argparse.ArgumentParser(description="校正 AI 复盘中的确定性字段")
    parser.add_argument("--date", required=True)
    parser.add_argument(
        "--root",
        default=str(Path(__file__).resolve().parent.parent),
        help="盘眼项目目录",
    )
    args = parser.parse_args()
    root = Path(args.root)

    raw = json.loads(
        (root / "data" / "raw" / f"{args.date}.json").read_text(encoding="utf-8")
    )
    review = json.loads(
        (root / "data" / "review" / f"{args.date}.json").read_text(encoding="utf-8")
    )
    sector = json.loads(
        (root / "data" / "sector" / f"{args.date}.json").read_text(encoding="utf-8")
    )
    screen = json.loads(
        (root / "data" / "screen" / f"{args.date}.json").read_text(encoding="utf-8")
    )
    market = json.loads(
        (root / "data" / "market" / f"{args.date}.json").read_text(encoding="utf-8")
    )
    previous_dates = sorted(
        path.stem
        for path in (root / "data" / "review").glob("*.json")
        if path.stem < args.date
    )
    previous = None
    if previous_dates:
        previous = json.loads(
            (root / "data" / "review" / f"{previous_dates[-1]}.json").read_text(
                encoding="utf-8"
            )
        )

    review, sector = normalize(raw, review, sector, market, screen, previous)
    (root / "data" / "review" / f"{args.date}.json").write_text(
        json.dumps(review, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (root / "data" / "sector" / f"{args.date}.json").write_text(
        json.dumps(sector, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (root / "sector-data.js").write_text(
        "window.SECTOR_DATA = "
        + json.dumps(sector, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(root / "data" / "review" / f"{args.date}.json")
    print(root / "data" / "sector" / f"{args.date}.json")


if __name__ == "__main__":
    main()
