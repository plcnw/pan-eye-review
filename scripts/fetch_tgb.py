from __future__ import annotations

import argparse
import gzip
import html
import json
import re
import sys
import urllib.request
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

from lxml import html as lxml_html


BLOG_URL = "https://www.tgb.cn/blog/5894557"
TIMEZONE = ZoneInfo("Asia/Shanghai")
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/141.0 Safari/537.36"
)


def fetch(url: str) -> str:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "text/html,application/xhtml+xml",
            "Accept-Language": "zh-CN,zh;q=0.9",
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        payload = response.read()
        if response.headers.get("Content-Encoding") == "gzip":
            payload = gzip.decompress(payload)
        encoding = response.headers.get_content_charset() or "utf-8"
    return payload.decode(encoding, errors="replace")


def text_content(element) -> str:
    serialized = lxml_html.tostring(element, method="html", encoding="unicode")
    serialized = re.sub(r"<br\s*/?>", "\n", serialized, flags=re.IGNORECASE)
    serialized = re.sub(
        r"</(?:div|p|li|h[1-6])>", "\n", serialized, flags=re.IGNORECASE
    )
    raw = html.unescape(lxml_html.fromstring(serialized).text_content()).replace(
        "\r", ""
    )
    lines = [re.sub(r"[ \t]+", " ", line).strip() for line in raw.splitlines()]
    return "\n".join(line for line in lines if line)


def find_daily_post(page_html: str, target_date: str) -> dict[str, str]:
    document = lxml_html.fromstring(page_html)
    candidates: list[dict[str, str]] = []

    for row in document.xpath('//div[contains(@class, "article_tittle")]'):
        links = row.xpath('.//a[starts-with(@href, "/a/")]')
        dates = [
            value.strip()
            for value in row.xpath(
                './/div[contains(@class, "tittle_fbshijian")]/text()'
            )
        ]
        if not links or not dates:
            continue
        published_date = dates[0]
        candidates.append(
            {
                "title": (links[0].get("title") or links[0].text_content()).strip(),
                "url": "https://www.tgb.cn" + links[0].get("href"),
                "date": published_date,
            }
        )

    matches = [item for item in candidates if item["date"] == target_date]
    if not matches:
        available = ", ".join(item["date"] for item in candidates[:5])
        raise RuntimeError(
            f"没有找到 {target_date} 的主帖。最近可见日期：{available or '无'}"
        )
    return matches[0]


def parse_article(page_html: str) -> dict[str, str | list[str]]:
    document = lxml_html.fromstring(page_html)
    title_node = document.xpath(
        '//*[@id="stockTitle" or contains(@class, "stockTitle")]'
    )
    body_nodes = document.xpath(
        '//*[@id="first" or contains(concat(" ", normalize-space(@class), " "), " article-text ")]'
    )
    if not body_nodes:
        raise RuntimeError("无法定位文章正文容器")

    title = text_content(title_node[0]) if title_node else ""
    body = text_content(body_nodes[0])
    whole_text = text_content(document)
    timestamp_match = re.search(
        r"淘股吧原创\s+(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2})", whole_text
    )
    if not timestamp_match:
        raise RuntimeError("无法识别文章发表时间")

    lines = body.splitlines()
    return {
        "title": title or lines[0] if lines else "未命名复盘",
        "publishedAt": timestamp_match.group(1).replace("  ", "T"),
        "rawText": body,
        "lines": lines,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="抓取延边刺客指定日期的复盘主帖")
    parser.add_argument(
        "--date",
        default=datetime.now(TIMEZONE).date().isoformat(),
        help="交易日，格式 YYYY-MM-DD；默认使用上海时区的当天",
    )
    parser.add_argument(
        "--output-dir",
        default=str(Path(__file__).resolve().parent.parent / "data" / "raw"),
        help="原文 JSON 保存目录",
    )
    args = parser.parse_args()

    blog_html = fetch(BLOG_URL)
    post = find_daily_post(blog_html, args.date)
    article_html = fetch(post["url"])
    article = parse_article(article_html)

    if not str(article["publishedAt"]).startswith(args.date):
        raise RuntimeError(
            f"文章详情页发表时间 {article['publishedAt']} 与目标日期 {args.date} 不一致"
        )

    record = {
        "author": "延边刺客",
        "blogUrl": BLOG_URL,
        "sourceUrl": post["url"],
        "listTitle": post["title"],
        "fetchedAt": datetime.now(TIMEZONE).isoformat(timespec="seconds"),
        **article,
    }

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    output_path = output_dir / f"{args.date}.json"
    output_path.write_text(
        json.dumps(record, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(output_path)
    print(f"{record['publishedAt']} · {len(record['lines'])} lines")


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(1)
