import argparse
import json
import re
import shutil
from pathlib import Path


root = Path(__file__).resolve().parent.parent
output = root.parent / "pan-eye-standalone.html"
parser = argparse.ArgumentParser(description="生成可离线打开的单文件版本")
parser.add_argument(
    "--date",
    default=max(path.stem for path in (root / "data" / "review").glob("*.json")),
    help="当前构建日期，默认取最新结构化复盘",
)
args = parser.parse_args()

archive_dir = root / "archive"
archive_dir.mkdir(parents=True, exist_ok=True)
shutil.copy2(output, archive_dir / f"{args.date}.html") if output.exists() else None
available_dates = sorted(
    {path.stem for path in archive_dir.glob("*.html")} | {args.date}
)
calendar_data = (
    "window.AVAILABLE_DATES = "
    + json.dumps(available_dates, ensure_ascii=False)
    + ";\n"
)
(root / "calendar-data.js").write_text(calendar_data, encoding="utf-8")

html = (root / "index.html").read_text(encoding="utf-8")
css = (root / "styles.css").read_text(encoding="utf-8")
review_data = (root / "review-data.js").read_text(encoding="utf-8")
market_data = (root / "market-data.js").read_text(encoding="utf-8")
history_data = (root / "history-data.js").read_text(encoding="utf-8")
screen_data = (root / "screen-data.js").read_text(encoding="utf-8")
sector_data = (root / "sector-data.js").read_text(encoding="utf-8")
calendar_data_js = (root / "calendar-data.js").read_text(encoding="utf-8")
refresh_config_js = (root / "refresh-config.js").read_text(encoding="utf-8")
daily_js = (root / "app-daily.js").read_text(encoding="utf-8")

html = html.replace(
    '  <link rel="icon" href="favicon.svg" type="image/svg+xml">\n',
    "",
)
html = html.replace(
    '  <link rel="manifest" href="manifest.webmanifest">\n',
    "",
)
html = html.replace(
    '  <link rel="stylesheet" href="styles.css">\n',
    f"  <style>\n{css}\n  </style>\n",
)
html = html.replace(
    '  <script src="review-data.js"></script>\n'
    '  <script src="market-data.js"></script>\n'
    '  <script src="history-data.js"></script>\n'
    '  <script src="screen-data.js"></script>\n'
    '  <script src="sector-data.js"></script>\n'
    '  <script src="calendar-data.js"></script>\n'
    '  <script src="refresh-config.js"></script>\n'
    '  <script src="app-daily.js"></script>\n',
    f"  <script>\n{review_data}\n  </script>\n"
    f"  <script>\n{market_data}\n  </script>\n"
    f"  <script>\n{history_data}\n  </script>\n"
    f"  <script>\n{screen_data}\n  </script>\n"
    f"  <script>\n{sector_data}\n  </script>\n"
    f"  <script>\n{calendar_data_js}\n  </script>\n"
    f"  <script>\n{refresh_config_js}\n  </script>\n"
    f"  <script>\n{daily_js}\n  </script>\n",
)

output.write_text(html, encoding="utf-8")
shutil.copy2(output, archive_dir / f"{args.date}.html")
site_dir = root / "docs"
site_archive_dir = site_dir / "archive"
site_archive_dir.mkdir(parents=True, exist_ok=True)
online_html = html.replace(
    "</head>",
    '  <link rel="icon" href="favicon.svg" type="image/svg+xml">\n'
    '  <link rel="manifest" href="manifest.webmanifest">\n'
    "</head>",
)
(site_dir / "index.html").write_text(online_html, encoding="utf-8")
for date_file in archive_dir.glob("*.html"):
    shutil.copy2(date_file, site_archive_dir / date_file.name)

# Historical snapshots are intentionally immutable for their review content,
# but their calendar index must include dates published after the snapshot.
calendar_pattern = re.compile(
    r"window\.AVAILABLE_DATES\s*=\s*\[[^\]]*\];"
)

placeholder_patterns = [
    (
        re.compile(r'(<span id="breadcrumbDate">)[^<]*(</span>)'),
        r"\1--.--\2",
    ),
    (
        re.compile(r'(<span id="calendarDateLabel">)[^<]*(</span>)'),
        r"\1--.--\2",
    ),
    (
        re.compile(r'(<strong id="calendarMonthLabel">)[^<]*(</strong>)'),
        r"\1加载中\2",
    ),
    (
        re.compile(r'(<span id="headerDate">)[^<]*(</span>)'),
        r"\1复盘加载中\2",
    ),
    (
        re.compile(r'(<span id="publishedAt">)[^<]*(</span>)'),
        r"\1加载中\2",
    ),
    (
        re.compile(r'(<span class="paper-date" id="paperDate">)[^<]*(</span>)'),
        r"\1--.--\2",
    ),
    (
        re.compile(r'(<h2 id="paperTitle">)[^<]*(</h2>)'),
        r"\1复盘加载中\2",
    ),
]

online_index_path = site_dir / "index.html"
online_index = online_index_path.read_text(encoding="utf-8")
for pattern, replacement in placeholder_patterns:
    online_index = pattern.sub(replacement, online_index, count=1)
online_index_path.write_text(online_index, encoding="utf-8")

if output.exists():
    standalone_html = output.read_text(encoding="utf-8")
    for pattern, replacement in placeholder_patterns:
        standalone_html = pattern.sub(replacement, standalone_html, count=1)
    output.write_text(standalone_html, encoding="utf-8")

legacy_calendar_style = """
<style id="legacy-archive-calendar-style">
.legacy-calendar { position: relative; }
.legacy-calendar summary {
  min-height: 36px; padding: 0 13px; border: 1px solid var(--line);
  border-radius: 10px; background: rgba(255, 255, 255, 0.025);
  color: var(--muted-strong); display: inline-flex; align-items: center;
  gap: 7px; font-size: 11px; cursor: pointer; list-style: none;
}
.legacy-calendar summary::-webkit-details-marker { display: none; }
.legacy-calendar summary span {
  color: var(--muted); font-family: ui-monospace, "Cascadia Code", monospace;
  font-size: 9px;
}
.legacy-calendar[open] summary {
  color: var(--white); border-color: var(--line-strong);
  background: rgba(255, 255, 255, 0.05);
}
.legacy-calendar-menu {
  position: absolute; z-index: 50; top: calc(100% + 8px); right: 0;
  width: 178px; padding: 8px; border: 1px solid var(--line-strong);
  border-radius: 12px; background: #151d19;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42);
}
.legacy-calendar-menu a,
.legacy-calendar-menu span {
  min-height: 34px; padding: 0 10px; border-radius: 8px;
  display: flex; align-items: center; justify-content: space-between;
  color: var(--muted-strong); font-size: 10px; text-decoration: none;
}
.legacy-calendar-menu a:hover { color: var(--white); background: rgba(255,255,255,.045); }
.legacy-calendar-menu span { color: var(--gold); background: var(--gold-soft); }
@media (max-width: 620px) {
  .legacy-calendar-menu { position: fixed; top: 72px; right: 14px; left: 14px; width: auto; }
}
</style>
"""

for archive_file in [
    *archive_dir.glob("*.html"),
    *site_archive_dir.glob("*.html"),
]:
    archive_html = archive_file.read_text(encoding="utf-8")
    for pattern, replacement in placeholder_patterns:
        archive_html = pattern.sub(replacement, archive_html, count=1)
    refreshed_html, replacements = calendar_pattern.subn(
        calendar_data.strip(),
        archive_html,
        count=1,
    )
    if replacements:
        archive_file.write_text(refreshed_html, encoding="utf-8")
    else:
        archive_html = re.sub(
            r'<style id="legacy-archive-calendar-style">[\s\S]*?</style>',
            "",
            archive_html,
            count=1,
        )
        archive_html = re.sub(
            r'<details class="legacy-calendar">[\s\S]*?</details>',
            "",
            archive_html,
            count=1,
        )
        page_links = "".join(
            (
                f'<span>{date[5:7]}月{date[8:10]}日 · 当前</span>'
                if date == archive_file.stem
                else f'<a href="{date}.html">{date[5:7]}月{date[8:10]}日</a>'
            )
            for date in available_dates
        )
        page_calendar = (
            '<details class="legacy-calendar">'
            f"<summary>日历 <span>{archive_file.stem[5:7]}.{archive_file.stem[8:10]}</span></summary>"
            f'<div class="legacy-calendar-menu">{page_links}</div>'
            "</details>"
        )
        archive_html = archive_html.replace(
            "</head>",
            legacy_calendar_style + "</head>",
            1,
        )
        archive_html, inserted = re.subn(
            r'(<div class="top-actions">)([\s\S]*?)(</div>)',
            rf"\1\2{page_calendar}\3",
            archive_html,
            count=1,
        )
        if inserted:
            archive_file.write_text(archive_html, encoding="utf-8")
        else:
            print(f"WARNING: calendar navigation could not be added to {archive_file}")

(site_dir / "_headers").write_text(
    "/*\n"
    "  X-Content-Type-Options: nosniff\n"
    "  Referrer-Policy: strict-origin-when-cross-origin\n"
    "  X-Frame-Options: SAMEORIGIN\n",
    encoding="utf-8",
)
(site_dir / "robots.txt").write_text(
    "User-agent: *\nDisallow: /\n",
    encoding="utf-8",
)
(site_dir / "manifest.webmanifest").write_text(
    json.dumps(
        {
            "name": "盘眼 · 短线复盘",
            "short_name": "盘眼",
            "start_url": "./",
            "scope": "./",
            "display": "standalone",
            "background_color": "#0b100e",
            "theme_color": "#0b100e",
            "icons": [
                {
                    "src": "favicon.svg",
                    "sizes": "any",
                    "type": "image/svg+xml",
                }
            ],
        },
        ensure_ascii=False,
        indent=2,
    ),
    encoding="utf-8",
)
shutil.copy2(root / "favicon.svg", site_dir / "favicon.svg")
print(output)
print(site_dir)
