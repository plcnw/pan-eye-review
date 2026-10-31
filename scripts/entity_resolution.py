from __future__ import annotations

from collections import defaultdict
from typing import Iterable


FIXED_ALIAS = "fixed_alias"
GROUP_TYPES = {"dynamic_stock_group", "sector_metaphor"}


def _stock_name(item: dict) -> str:
    return str(item.get("name") or "").strip()


def collect_context(
    review: dict, sector: dict, previous_review: dict | None
) -> dict[str, dict]:
    context: dict[str, dict] = defaultdict(
        lambda: {
            "ladder_height": 0,
            "quality": False,
            "theme": False,
            "dossier": False,
            "sector": False,
            "previous_ladder_height": 0,
        }
    )
    for level in review.get("ladder", []):
        try:
            height = int(level.get("level") or 0)
        except (TypeError, ValueError):
            height = 0
        for stock in level.get("stocks", []):
            name = _stock_name(stock)
            if name:
                context[name]["ladder_height"] = max(
                    context[name]["ladder_height"], height
                )
    for item in review.get("qualities", []):
        name = _stock_name(item)
        if name:
            context[name]["quality"] = True
    for theme in review.get("themes", []):
        for name in theme.get("stocks", []):
            if name:
                context[name]["theme"] = True
    for name in review.get("dossiers", {}):
        context[name]["dossier"] = True
    for item in sector.get("sectors", []):
        for name in item.get("members", []):
            if name:
                context[name]["sector"] = True
    for level in (previous_review or {}).get("ladder", []):
        try:
            height = int(level.get("level") or 0)
        except (TypeError, ValueError):
            height = 0
        for stock in level.get("stocks", []):
            name = _stock_name(stock)
            if name:
                context[name]["previous_ladder_height"] = max(
                    context[name]["previous_ladder_height"], height
                )
    return context


def collect_mentions(review: dict) -> list[str]:
    names: list[str] = []
    for theme in review.get("themes", []):
        names.extend(theme.get("stocks", []))
    for level in review.get("ladder", []):
        names.extend(_stock_name(stock) for stock in level.get("stocks", []))
    names.extend(_stock_name(item) for item in review.get("qualities", []))
    names.extend(review.get("crossReferences", []))
    for question in review.get("questions", []):
        names.extend(question.get("related", []))
    names.extend((review.get("dossiers") or {}).keys())
    return list(dict.fromkeys(name.strip() for name in names if name and name.strip()))


def collect_canonical_names(review: dict) -> set[str]:
    names = set((review.get("dossiers") or {}).keys())
    for theme in review.get("themes", []):
        names.update(theme.get("stocks", []))
    for level in review.get("ladder", []):
        names.update(_stock_name(stock) for stock in level.get("stocks", []))
    names.update(_stock_name(item) for item in review.get("qualities", []))
    return {name.strip() for name in names if name and name.strip()}


def _alias_candidates(
    mention: str,
    known_names: Iterable[str],
    market_aliases: dict[str, set[str]],
) -> set[str]:
    candidates = set(market_aliases.get(mention, set()))
    for name in known_names:
        if name == mention:
            candidates.add(name)
        elif len(mention) >= 2 and name.startswith(mention):
            candidates.add(name)
    return candidates


def _context_score(
    name: str,
    mention: str,
    context: dict[str, dict],
    market_by_name: dict[str, dict],
) -> tuple[int, list[str]]:
    item = context.get(name, {})
    score = 0
    basis: list[str] = []
    if name == mention:
        score += 50
        basis.append("名称完全一致")
    height = int(item.get("ladder_height") or 0)
    if height:
        score += 55 + height * 5
        basis.append(f"当日{height}板梯队")
    previous_height = int(item.get("previous_ladder_height") or 0)
    if previous_height:
        score += 25 + previous_height * 5
        basis.append(f"前日{previous_height}板梯队")
    if item.get("quality"):
        score += 45
        basis.append("气质股")
    if item.get("theme"):
        score += 20
        basis.append("首板方向")
    if item.get("sector"):
        score += 15
        basis.append("板块成员")
    if item.get("dossier"):
        score += 8
        basis.append("已有统一档案")

    market = market_by_name.get(name, {})
    change = market.get("changePercent")
    try:
        if change is not None and float(change) >= 9.5:
            score += 15
            basis.append("当日涨停/接近涨停")
    except (TypeError, ValueError):
        pass
    if market.get("inFloatCapRange") is True:
        score += 3
        basis.append("流通市值在筛选区间")
    return score, basis


def resolve_entities(
    review: dict,
    sector: dict,
    market: dict,
    lexicon: dict,
    previous_review: dict | None = None,
) -> dict:
    known_names = collect_canonical_names(review)
    market_by_name: dict[str, dict] = {}
    market_aliases: dict[str, set[str]] = defaultdict(set)
    for stock in market.get("stocks", []):
        canonical = _stock_name(stock)
        if not canonical:
            continue
        market_by_name.setdefault(canonical, stock)
        known_names.add(canonical)
        requested_name = str(stock.get("requestedName") or "").strip()
        if stock.get("matchType") != "exact":
            for alternative in stock.get("alternatives", []):
                alternative_name = str(alternative.get("name") or "").strip()
                if not alternative_name:
                    continue
                known_names.add(alternative_name)
                market_by_name.setdefault(alternative_name, alternative)
                if requested_name:
                    market_aliases[requested_name].add(alternative_name)
        for alias in (stock.get("requestedName"), stock.get("apiName")):
            if alias:
                market_aliases[str(alias)].add(canonical)

    fixed_aliases: dict[str, str] = {}
    group_types: dict[str, str] = {}
    for term in lexicon.get("terms", []):
        value = str(term.get("term") or "").strip()
        if not value:
            continue
        if term.get("type") == FIXED_ALIAS:
            fixed_aliases[value] = str(term.get("resolution") or "").strip()
        elif term.get("type") in GROUP_TYPES:
            group_types[value] = str(term.get("type"))

    context = collect_context(review, sector, previous_review)
    theme_terms = {
        str(theme.get("name") or "").strip()
        for theme in review.get("themes", [])
    }
    theme_terms.update(
        str(item.get("name") or "").strip()
        for item in sector.get("sectors", [])
    )
    theme_terms.discard("")
    resolutions: dict[str, dict] = {}
    for mention in collect_mentions(review):
        if mention in theme_terms:
            resolutions[mention] = {
                "raw": mention,
                "canonical": None,
                "status": "theme",
                "confidence": 0,
                "basis": ["原文板块方向，不是单一股票"],
                "candidates": [],
            }
            continue
        if mention in group_types:
            candidates = sorted(_alias_candidates(mention, known_names, market_aliases))
            resolutions[mention] = {
                "raw": mention,
                "canonical": None,
                "status": "group",
                "confidence": 0,
                "basis": ["动态股票池或板块隐喻"],
                "candidates": [
                    {"name": name, "code": market_by_name.get(name, {}).get("code")}
                    for name in candidates
                ],
            }
            continue

        candidates = _alias_candidates(mention, known_names, market_aliases)
        fixed = fixed_aliases.get(mention)
        if fixed:
            candidates.add(fixed)
            known_names.add(fixed)
        if not candidates:
            resolutions[mention] = {
                "raw": mention,
                "canonical": None,
                "status": "unresolved",
                "confidence": 0,
                "basis": ["没有唯一行情或结构化实体匹配"],
                "candidates": [],
            }
            continue

        scored = []
        for name in candidates:
            score, basis = _context_score(name, mention, context, market_by_name)
            if fixed == name:
                score += 80
                basis.insert(0, "固定别名")
            scored.append(
                {
                    "name": name,
                    "code": market_by_name.get(name, {}).get("code"),
                    "score": score,
                    "basis": basis,
                }
            )
        scored.sort(key=lambda item: (-item["score"], item["name"]))
        top = scored[0]
        runner_up = scored[1] if len(scored) > 1 else None
        gap = top["score"] - (runner_up["score"] if runner_up else 0)
        resolved = len(scored) == 1 or (
            top["score"] >= 35 and gap >= 15
        )
        confidence = (
            min(0.99, 0.72 + gap / 100)
            if resolved
            else min(0.79, 0.45 + top["score"] / 200)
        )
        resolutions[mention] = {
            "raw": mention,
            "canonical": top["name"] if resolved else None,
            "status": "resolved" if resolved else "ambiguous",
            "confidence": round(confidence, 2),
            "basis": top["basis"] or ["行情简称匹配"],
            "candidates": scored,
        }

    return {
        "version": 1,
        "mentions": resolutions,
        "unresolved": [
            name
            for name, item in resolutions.items()
            if item["status"] in {"unresolved", "ambiguous"}
        ],
    }


def apply_entity_resolution(
    review: dict, entity_resolution: dict, sector: dict | None = None
) -> None:
    review["entityResolution"] = entity_resolution
