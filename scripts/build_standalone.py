import argparse
import json
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
    '  <script src="app-daily.js"></script>\n',
    f"  <script>\n{review_data}\n  </script>\n"
    f"  <script>\n{market_data}\n  </script>\n"
    f"  <script>\n{history_data}\n  </script>\n"
    f"  <script>\n{screen_data}\n  </script>\n"
    f"  <script>\n{sector_data}\n  </script>\n"
    f"  <script>\n{calendar_data_js}\n  </script>\n"
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
