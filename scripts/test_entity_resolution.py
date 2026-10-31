from __future__ import annotations

import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from entity_resolution import resolve_entities


LEXICON = {
    "terms": [
        {"term": "900", "type": "fixed_alias", "resolution": "上海九百"},
        {"term": "S", "type": "dynamic_stock_group"},
    ]
}


class EntityResolutionTests(unittest.TestCase):
    def test_unique_market_alias_resolves(self) -> None:
        review = {
            "themes": [],
            "ladder": [],
            "qualities": [],
            "crossReferences": ["天鹅"],
            "questions": [],
            "dossiers": {"天鹅股份": {"flags": []}},
        }
        market = {
            "stocks": [
                {
                    "name": "天鹅股份",
                    "requestedName": "天鹅",
                    "apiName": "天鹅股份",
                    "matchType": "prefix",
                    "alternatives": [{"name": "天鹅股份", "code": "603029"}],
                }
            ]
        }
        result = resolve_entities(review, {"sectors": []}, market, LEXICON)
        mention = result["mentions"]["天鹅"]
        self.assertEqual(mention["status"], "resolved")
        self.assertEqual(mention["canonical"], "天鹅股份")

    def test_context_disambiguates_qingdao(self) -> None:
        review = {
            "themes": [{"name": "消费", "stocks": ["青岛食品"]}],
            "ladder": [
                {
                    "level": 5,
                    "stocks": [{"name": "青岛食品"}],
                }
            ],
            "qualities": [{"name": "青岛食品"}],
            "crossReferences": ["青岛"],
            "questions": [],
            "dossiers": {"青岛食品": {"flags": []}},
        }
        market = {
            "stocks": [
                {
                    "name": "青岛食品",
                    "requestedName": "青岛",
                    "apiName": "青岛食品",
                    "matchType": "prefix",
                    "changePercent": 10.0,
                    "inFloatCapRange": True,
                    "alternatives": [
                        {"name": "青岛食品", "code": "001219"},
                        {"name": "青岛啤酒", "code": "600600"},
                    ],
                }
            ]
        }
        result = resolve_entities(review, {"sectors": []}, market, LEXICON)
        mention = result["mentions"]["青岛"]
        self.assertEqual(mention["status"], "resolved")
        self.assertEqual(mention["canonical"], "青岛食品")
        self.assertGreaterEqual(mention["confidence"], 0.85)

    def test_qingdao_without_context_stays_ambiguous(self) -> None:
        review = {
            "themes": [],
            "ladder": [],
            "qualities": [],
            "crossReferences": ["青岛"],
            "questions": [],
            "dossiers": {},
        }
        market = {
            "stocks": [
                {
                    "name": "青岛食品",
                    "requestedName": "青岛",
                    "apiName": "青岛食品",
                    "matchType": "prefix",
                    "alternatives": [
                        {"name": "青岛食品", "code": "001219"},
                        {"name": "青岛啤酒", "code": "600600"},
                    ],
                }
            ]
        }
        result = resolve_entities(review, {"sectors": []}, market, LEXICON)
        mention = result["mentions"]["青岛"]
        self.assertEqual(mention["status"], "ambiguous")
        self.assertIsNone(mention["canonical"])
        self.assertEqual(
            {candidate["name"] for candidate in mention["candidates"]},
            {"青岛食品", "青岛啤酒"},
        )

    def test_dynamic_group_and_fixed_alias(self) -> None:
        review = {
            "themes": [],
            "ladder": [],
            "qualities": [],
            "crossReferences": ["S", "900"],
            "questions": [],
            "dossiers": {},
        }
        result = resolve_entities(
            review, {"sectors": []}, {"stocks": []}, LEXICON
        )
        self.assertEqual(result["mentions"]["S"]["status"], "group")
        self.assertEqual(result["mentions"]["900"]["status"], "resolved")
        self.assertEqual(result["mentions"]["900"]["canonical"], "上海九百")

    def test_theme_reference_is_not_reported_as_stock_error(self) -> None:
        review = {
            "themes": [{"name": "机器人", "stocks": ["山东矿机"]}],
            "ladder": [],
            "qualities": [],
            "crossReferences": [],
            "questions": [{"related": ["机器人"]}],
            "dossiers": {"山东矿机": {"flags": []}},
        }
        result = resolve_entities(
            review, {"sectors": []}, {"stocks": []}, LEXICON
        )
        self.assertEqual(result["mentions"]["机器人"]["status"], "theme")
        self.assertNotIn("机器人", result["unresolved"])


if __name__ == "__main__":
    unittest.main()
