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

archive_calendar_style = """
<style id="archive-calendar-style">
body.has-archive-calendar .top-actions > .calendar-control { display: none !important; }
.archive-calendar-control { position: relative; }
.archive-calendar-trigger > span {
  color: var(--muted); font-family: ui-monospace, "Cascadia Code", monospace;
  font-size: 9px;
}
.archive-calendar-popover {
  position: absolute; z-index: 50; top: calc(100% + 9px); right: 0;
  width: 286px; padding: 12px; border: 1px solid var(--line-strong);
  border-radius: 13px; background: #151d19;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42);
}
.archive-calendar-head {
  display: flex; align-items: center; justify-content: space-between;
  gap: 8px; padding: 2px 2px 10px; border-bottom: 1px solid var(--line);
}
.archive-calendar-head > button {
  width: 26px; height: 26px; padding: 0; border-radius: 7px;
}
.archive-calendar-head strong {
  color: var(--white); font-family: var(--serif); font-size: 14px;
  font-weight: 500;
}
.archive-calendar-week,
.archive-calendar-grid {
  display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px;
}
.archive-calendar-week { margin: 10px 0 5px; }
.archive-calendar-week span {
  color: var(--muted); font-size: 8px; text-align: center;
}
.archive-calendar-day {
  aspect-ratio: 1; min-width: 0; padding: 0; border-radius: 7px;
  border: 1px solid transparent; background: transparent;
  color: var(--muted); font-size: 9px;
}
.archive-calendar-day.is-available {
  color: var(--muted-strong); border-color: var(--line);
  background: rgba(255, 255, 255, 0.025); cursor: pointer;
}
.archive-calendar-day.is-available:hover {
  color: var(--white); border-color: var(--line-strong);
}
.archive-calendar-day.is-current {
  color: #1a0d0a; border-color: var(--red); background: var(--red);
}
.archive-calendar-day:disabled { opacity: 0.45; }
.archive-calendar-day.is-empty { visibility: hidden; }
@media (max-width: 620px) {
  .archive-calendar-popover {
    position: fixed; top: 72px; right: 14px; left: 14px; width: auto;
    max-height: calc(100vh - 86px); overflow-y: auto;
  }
}
</style>
"""


def add_body_class(document: str, class_name: str) -> str:
    def replace_body(match: re.Match[str]) -> str:
        attrs = match.group(1)
        class_match = re.search(r'class=(["\'])(.*?)\1', attrs)
        if class_match:
            classes = class_match.group(2).split()
            if class_name not in classes:
                classes.append(class_name)
            attrs = (
                attrs[: class_match.start()]
                + f'class="{ " ".join(classes) }"'
                + attrs[class_match.end() :]
            )
        else:
            attrs += f' class="{class_name}"'
        return f"<body{attrs}>"

    return re.sub(r"<body([^>]*)>", replace_body, document, count=1, flags=re.I)


for archive_file in [
    *archive_dir.glob("*.html"),
    *site_archive_dir.glob("*.html"),
]:
    archive_html = archive_file.read_text(encoding="utf-8")
    for pattern, replacement in placeholder_patterns:
        archive_html = pattern.sub(replacement, archive_html, count=1)

    archive_html = calendar_pattern.sub(
        calendar_data.strip(),
        archive_html,
        count=1,
    )

    has_month_navigation = (
        'id="calendarPrev"' in archive_html
        and 'id="calendarNext"' in archive_html
    )
    if has_month_navigation:
        archive_file.write_text(archive_html, encoding="utf-8")
        continue

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
    archive_html = re.sub(
        r'<style id="archive-calendar-style">[\s\S]*?</style>',
        "",
        archive_html,
        count=1,
    )
    archive_html = re.sub(
        r'<div class="archive-calendar-control"[\s\S]*?</div>\s*</div>\s*</div>',
        "",
        archive_html,
        count=1,
    )
    archive_html = re.sub(
        r'<script id="archive-calendar-script">[\s\S]*?</script>',
        "",
        archive_html,
        count=1,
    )
    archive_html = add_body_class(archive_html, "has-archive-calendar")

    current_date = archive_file.stem
    current_label = f"{current_date[5:7]}.{current_date[8:10]}"
    page_control = f"""
<div class="archive-calendar-control">
  <button class="quiet-button archive-calendar-trigger" id="archiveCalendarButton" type="button" aria-expanded="false">
    日历 <span>{current_label}</span>
  </button>
  <div class="archive-calendar-popover" id="archiveCalendarPopover" hidden>
    <div class="archive-calendar-head">
      <button type="button" id="archiveCalendarPrev" aria-label="上个月">‹</button>
      <strong id="archiveCalendarMonth">加载中</strong>
      <button type="button" id="archiveCalendarNext" aria-label="下个月">›</button>
    </div>
    <div class="archive-calendar-week" aria-hidden="true">
      <span>一</span><span>二</span><span>三</span><span>四</span>
      <span>五</span><span>六</span><span>日</span>
    </div>
    <div class="archive-calendar-grid" id="archiveCalendarGrid"></div>
  </div>
</div>
"""
    dates_json = json.dumps(available_dates, ensure_ascii=False)
    page_script = f"""
<script id="archive-calendar-script">
(() => {{
  const dates = {dates_json};
  const current = "{current_date}";
  const button = document.getElementById("archiveCalendarButton");
  const popover = document.getElementById("archiveCalendarPopover");
  const grid = document.getElementById("archiveCalendarGrid");
  const label = document.getElementById("archiveCalendarMonth");
  let year = Number(current.slice(0, 4));
  let month = Number(current.slice(5, 7));

  const close = () => {{
    popover.hidden = true;
    button.setAttribute("aria-expanded", "false");
  }};

  const render = () => {{
    label.textContent = `${{year}}年${{month}}月`;
    const first = new Date(year, month - 1, 1);
    const offset = (first.getDay() + 6) % 7;
    const days = new Date(year, month, 0).getDate();
    const cells = Array.from({{ length: offset }}, () => '<span class="archive-calendar-day is-empty"></span>');
    for (let day = 1; day <= days; day += 1) {{
      const date = `${{year}}-${{String(month).padStart(2, "0")}}-${{String(day).padStart(2, "0")}}`;
      const available = dates.includes(date);
      const classes = [
        "archive-calendar-day",
        available ? "is-available" : "",
        date === current ? "is-current" : ""
      ].filter(Boolean).join(" ");
      cells.push(`<button class="${{classes}}" type="button" data-date="${{date}}" ${{available ? "" : "disabled"}}>${{day}}</button>`);
    }}
    grid.innerHTML = cells.join("");
  }};

  button.addEventListener("click", () => {{
    const opening = popover.hidden;
    popover.hidden = !opening;
    button.setAttribute("aria-expanded", String(opening));
  }});
  document.getElementById("archiveCalendarPrev").addEventListener("click", () => {{
    const previous = new Date(year, month - 2, 1);
    year = previous.getFullYear();
    month = previous.getMonth() + 1;
    render();
  }});
  document.getElementById("archiveCalendarNext").addEventListener("click", () => {{
    const next = new Date(year, month, 1);
    year = next.getFullYear();
    month = next.getMonth() + 1;
    render();
  }});
  grid.addEventListener("click", (event) => {{
    const day = event.target.closest("[data-date]");
    if (!day || day.disabled) return;
    window.location.href = `${{day.dataset.date}}.html`;
  }});
  document.addEventListener("click", (event) => {{
    if (!popover.hidden && !event.target.closest(".archive-calendar-control")) close();
  }});
  document.addEventListener("keydown", (event) => {{
    if (event.key === "Escape" && !popover.hidden) close();
  }});
  render();
}})();
</script>
"""
    archive_html = archive_html.replace(
        "</head>",
        archive_calendar_style + "</head>",
        1,
    )
    old_calendar_match = re.search(
        r'<div[^>]*class="[^"]*calendar-control[^"]*"[^>]*>',
        archive_html,
        flags=re.I,
    )
    if old_calendar_match:
        archive_html = (
            archive_html[: old_calendar_match.start()]
            + page_control
            + archive_html[old_calendar_match.start() :]
        )
        inserted = True
    else:
        top_actions_start = archive_html.find('<div class="top-actions">')
        top_actions_end = archive_html.find("</div>", top_actions_start)
        inserted = top_actions_start >= 0 and top_actions_end >= 0
        if inserted:
            archive_html = (
                archive_html[:top_actions_end]
                + page_control
                + archive_html[top_actions_end:]
            )
    if inserted:
        archive_html = archive_html.replace("</body>", page_script + "</body>", 1)
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
