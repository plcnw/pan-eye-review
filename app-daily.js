const review = window.REVIEW_DATA;
const sourceUrl = review.meta.sourceUrl;
const stockDossiers = review.dossiers;
const marketSnapshot = window.MARKET_DATA || null;
const marketByStock = new Map(
  (marketSnapshot?.stocks || []).map((stock) => [stock.requestedName, stock])
);
const marketByCode = new Map(
  (marketSnapshot?.stocks || []).map((stock) => [stock.code, stock])
);
const historySnapshot = window.HISTORY_DATA || null;
const historyByStock = new Map();
(historySnapshot?.stocks || []).forEach((stock) => {
  const market = marketByCode.get(stock.code);
  [stock.name, stock.apiName, stock.requestedName, market?.requestedName].filter(Boolean).forEach((name) => {
    historyByStock.set(name, stock);
  });
});
const screenSnapshot = window.SCREEN_DATA || null;
const sectorSnapshot = window.SECTOR_DATA || null;
const screenedStocks = [
  ...(screenSnapshot?.candidates || []),
  ...(screenSnapshot?.hardExcluded || [])
];
const screenedByStock = new Map(
  screenedStocks.map((stock) => [stock.name, stock])
);

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setText(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value;
}

document.title = `${review.meta.title} · 盘眼`;
setText("#breadcrumbDate", review.meta.date.replaceAll("-", "."));
setText("#sidebarPublishedAt", `${review.meta.publishedAt} · ${review.meta.author}`);
setText("#headerDate", `${review.meta.date.replaceAll("-", ".")} · 收盘复盘`);
setText("#publishedAt", `${review.meta.publishedAt} 已抓取`);
setText("#reviewSummary", review.meta.summary);
setText("#headerAuthor", review.meta.author);
setText("#paperDate", `${review.meta.date.replaceAll("-", ".")} · ${review.meta.publishedAt}`);
setText("#paperTitle", review.meta.title);
setText("#paperAuthor", review.meta.author);
const ladderStockCount = review.ladder.reduce((total, level) => total + level.stocks.length, 0);
const highestBoard = review.ladder[0].level;
const lowestBoard = review.ladder[review.ladder.length - 1].level;
setText("#ladderCount", `${ladderStockCount} 只 · ${highestBoard}板至${lowestBoard}板`);
setText("#ladderRisk", `原文列出${review.ladder.map((level) => level.label).join("、")}；最高高度为${highestBoard}板。`);

function signedPercent(value) {
  if (value == null) return "—";
  return `${Number(value) > 0 ? "+" : ""}${Number(value).toFixed(2)}%`;
}

function marketFor(name) {
  return marketByStock.get(name) || screenedByStock.get(name) || null;
}

function historyFor(name) {
  return historyByStock.get(name) || null;
}

function historyFlag(name) {
  const history = historyFor(name);
  if (!history) return '<span class="history-flag">历史行情未取得</span>';
  if (!history.hasSuspectedAKill) return '<span class="history-flag">近两年未见疑似 A 杀</span>';
  return `<span class="history-flag is-suspected">疑似 A 杀 ${history.events.length} 次</span>`;
}

function marketLine(name) {
  const market = marketFor(name);
  if (!market) return '<span class="stock-market is-unavailable">行情待接入</span>';
  const changeClass = Number(market.changePercent) >= 0 ? "is-up" : "is-down";
  const rangeClass = market.inFloatCapRange ? "is-in-range" : "is-out-range";
  const rangeText = market.inFloatCapRange ? "范围内" : "超出范围";
  return `
    <span class="stock-market">
      <b>${escapeHtml(market.code)}</b>
      <span>${escapeHtml(market.price ?? "—")}</span>
      <em class="${changeClass}">${escapeHtml(signedPercent(market.changePercent))}</em>
      <span class="cap-tag ${rangeClass}" title="${escapeHtml(rangeText)}">流通 ${escapeHtml(market.floatMarketCapYi ?? "—")}亿</span>
    </span>
  `;
}

if (marketSnapshot?.indices?.length) {
  const inRangeCount = marketSnapshot.stocks.filter((stock) => stock.inFloatCapRange).length;
  const suspectedCount = historySnapshot?.stocks.filter((stock) => stock.hasSuspectedAKill).length || 0;
  $("#indexLine").innerHTML = `
    ${marketSnapshot.indices.map((index) => `
      <div class="index-item">
        <span>${escapeHtml(index.name)}</span>
        <strong>${escapeHtml(index.price ?? "—")}</strong>
        <em class="${Number(index.changePercent) >= 0 ? "is-up" : "is-down"}">${escapeHtml(signedPercent(index.changePercent))}</em>
      </div>
    `).join("")}
    <div class="index-coverage">
      <span>文章股票</span>
      <strong>${inRangeCount} / ${marketSnapshot.stocks.length}</strong>
      <small>市值范围内 · ${suspectedCount} 只有 A 杀历史提示</small>
    </div>
  `;
}

function updateIndexCoverage(viewName) {
  const coverage = $(".index-coverage");
  if (!coverage || !marketSnapshot) return;
  if (viewName === "screen" && screenSnapshot) {
    coverage.innerHTML = `
      <span>涨停结构</span>
      <strong>${screenSnapshot.capPassCount} / ${screenSnapshot.limitUpCount}</strong>
      <small>通过流通市值 30–250 亿</small>
    `;
    return;
  }
  if (viewName === "sector" && sectorSnapshot) {
    const widest = [...sectorSnapshot.sectors].sort((a, b) => b.count - a.count)[0];
    coverage.innerHTML = `
      <span>板块宽度</span>
      <strong>${widest.count} 只</strong>
      <small>${escapeHtml(widest.name)} · 最高 ${sectorSnapshot.market.maxHeight} 板</small>
    `;
    return;
  }
  const inRangeCount = marketSnapshot.stocks.filter((stock) => stock.inFloatCapRange).length;
  const suspectedCount = historySnapshot?.stocks.filter((stock) => stock.hasSuspectedAKill).length || 0;
  coverage.innerHTML = `
    <span>文章股票</span>
    <strong>${inRangeCount} / ${marketSnapshot.stocks.length}</strong>
    <small>市值范围内 · ${suspectedCount} 只有 A 杀历史提示</small>
  `;
}

if (marketSnapshot) {
  setText(
    "#marketSource",
    `盘眼 · ${marketSnapshot.source} · 快照 ${marketSnapshot.capturedAt.slice(0, 16).replace("T", " ")}`
  );
}

$$(".js-source-link").forEach((link) => {
  link.href = sourceUrl;
});

const calendarButton = $("#calendarButton");
const calendarPopover = $("#calendarPopover");
const refreshButton = $("#refreshButton");
const refreshPopover = $("#refreshPopover");
const availableDates = window.AVAILABLE_DATES || [review.meta.date];
const [calendarYear, calendarMonth] = review.meta.date.split("-").map(Number);

function renderCalendar() {
  const monthDate = new Date(calendarYear, calendarMonth - 1, 1);
  const daysInMonth = new Date(calendarYear, calendarMonth, 0).getDate();
  const mondayOffset = (monthDate.getDay() + 6) % 7;
  setText(
    "#calendarMonthLabel",
    `${calendarYear}年${calendarMonth}月`
  );
  setText("#calendarDateLabel", review.meta.date.slice(5).replace("-", "."));

  const cells = Array.from({ length: mondayOffset }, () =>
    '<span class="calendar-day is-empty"></span>'
  );
  for (let day = 1; day <= daysInMonth; day += 1) {
    const dateValue = `${calendarYear}-${String(calendarMonth).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const available = availableDates.includes(dateValue);
    const current = dateValue === review.meta.date;
    const className = [
      "calendar-day",
      available ? "is-available" : "",
      current ? "is-current" : ""
    ].filter(Boolean).join(" ");
    cells.push(`
      <button class="${className}" type="button" data-calendar-date="${dateValue}" ${available ? "" : "disabled"}>
        ${day}
      </button>
    `);
  }
  $("#calendarGrid").innerHTML = cells.join("");
}

function closeCalendar() {
  calendarPopover.hidden = true;
  calendarButton.setAttribute("aria-expanded", "false");
}

function closeRefresh() {
  refreshPopover.hidden = true;
  refreshButton.setAttribute("aria-expanded", "false");
}

function positionMobilePopover(popover, trigger) {
  popover.classList.remove("is-mobile-anchored");
  popover.style.removeProperty("--mobile-popover-left");
  popover.style.removeProperty("--mobile-popover-top");
  popover.style.removeProperty("width");
  if (!window.matchMedia("(max-width: 620px)").matches) return;

  const rect = trigger.getBoundingClientRect();
  const maxWidth = popover === refreshPopover ? 246 : 286;
  const width = Math.min(maxWidth, window.innerWidth - 28);
  const centeredLeft = rect.left + rect.width / 2 - width / 2;
  const left = Math.max(14, Math.min(centeredLeft, window.innerWidth - width - 14));
  popover.style.setProperty("--mobile-popover-left", `${Math.round(left)}px`);
  popover.style.setProperty("--mobile-popover-top", `${Math.round(rect.bottom + 9)}px`);
  popover.style.width = `${Math.round(width)}px`;
  popover.classList.add("is-mobile-anchored");
}

calendarButton.addEventListener("click", () => {
  closeRefresh();
  const opening = calendarPopover.hidden;
  calendarPopover.hidden = !opening;
  if (opening) positionMobilePopover(calendarPopover, calendarButton);
  calendarButton.setAttribute("aria-expanded", String(opening));
});

refreshButton.addEventListener("click", () => {
  closeCalendar();
  const opening = refreshPopover.hidden;
  refreshPopover.hidden = !opening;
  if (opening) positionMobilePopover(refreshPopover, refreshButton);
  refreshButton.setAttribute("aria-expanded", String(opening));
});

window.addEventListener("resize", () => {
  if (!calendarPopover.hidden) positionMobilePopover(calendarPopover, calendarButton);
  if (!refreshPopover.hidden) positionMobilePopover(refreshPopover, refreshButton);
});

$$("[data-refresh-scope]").forEach((button) => {
  button.addEventListener("click", () => {
    window.open(
      "https://github.com/plcnw/pan-eye-review/actions/workflows/daily-review.yml",
      "_blank",
      "noopener"
    );
    closeRefresh();
  });
});

$("#reloadPage").addEventListener("click", () => window.location.reload());

$("#calendarClose").addEventListener("click", closeCalendar);
$("#calendarGrid").addEventListener("click", (event) => {
  const dateButton = event.target.closest("[data-calendar-date]");
  if (!dateButton) return;
  const selectedDate = dateButton.dataset.calendarDate;
  if (selectedDate === review.meta.date) {
    closeCalendar();
    return;
  }
  const inArchive = window.location.pathname.includes("/archive/");
  const archiveBase = inArchive
    ? ""
    : /pan-eye-standalone\.html$/.test(window.location.pathname)
      ? "pan-eye/archive/"
      : "archive/";
  window.location.href = `${archiveBase}${selectedDate}.html`;
});

document.addEventListener("click", (event) => {
  if (
    !calendarPopover.hidden &&
    !event.target.closest(".calendar-control")
  ) {
    closeCalendar();
  }
  if (
    !refreshPopover.hidden &&
    !event.target.closest(".refresh-control")
  ) {
    closeRefresh();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !calendarPopover.hidden) closeCalendar();
  if (event.key === "Escape" && !refreshPopover.hidden) closeRefresh();
});

renderCalendar();

$("#metricStrip").innerHTML = review.metrics.map((metric) => `
  <div class="metric-cell${metric.primary ? " is-primary" : ""}">
    <span>${escapeHtml(metric.label)}</span>
    <strong>${escapeHtml(metric.value)}</strong>
    <small>${escapeHtml(metric.detail)}</small>
  </div>
`).join("");

const viewButtons = $$("[data-view]");
const views = $$(".view");
const tabs = $$(".view-tab");
const viewOrder = ["today", "screen", "sector", "article", "questions"];

function switchView(viewName) {
  if (!viewOrder.includes(viewName)) return;

  views.forEach((view) => {
    const active = view.id === `view-${viewName}`;
    view.hidden = !active;
    view.classList.toggle("is-active", active);
  });

  tabs.forEach((tab) => {
    const active = tab.dataset.view === viewName;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });

  $$(".nav-item").forEach((item) => {
    const parentView = ["article", "questions"].includes(viewName)
      ? "today"
      : viewName;
    item.classList.toggle("is-active", item.dataset.view === parentView);
  });

  const activeView = $(`#view-${viewName}`);
  if (activeView) activeView.scrollIntoView({ block: "start", behavior: "smooth" });

  document.body.classList.toggle(
    "is-module-view",
    ["screen", "sector"].includes(viewName)
  );
  updateIndexCoverage(viewName);
  if (viewName === "screen" && screenSnapshot) {
    setText("#pageTitle", "全市场初筛");
    setText("#headerDate", `${review.meta.date.replaceAll("-", ".")} · 全市场`);
    setText(
      "#publishedAt",
      `${screenSnapshot.capturedAt.slice(11, 16)} 行情快照`
    );
    setText("#syncTitle", "全市场行情已同步");
    setText(
      "#sidebarPublishedAt",
      `${screenSnapshot.marketCount} 只 · ${screenSnapshot.capturedAt.slice(5, 10)}`
    );
    setText(
      "#reviewSummary",
      `扫描 ${screenSnapshot.marketCount} 只 A 股，保留 ${screenSnapshot.candidateCount} 只进入下一步观察。`
    );
  } else if (viewName === "sector" && sectorSnapshot) {
    setText("#pageTitle", "板块发酵");
    setText("#headerDate", `${review.meta.date.replaceAll("-", ".")} · 板块结构`);
    setText("#publishedAt", `${review.meta.publishedAt} 收盘数据`);
    setText("#syncTitle", "板块数据已同步");
    setText(
      "#sidebarPublishedAt",
      `${sectorSnapshot.sectors.length} 个板块 · 日内收盘`
    );
    setText(
      "#reviewSummary",
      `涨停 ${sectorSnapshot.market.limitUpCount} 只，最高 ${sectorSnapshot.market.maxHeight} 板；航天宽度第一，消费高度第一。`
    );
  } else {
    setText("#pageTitle", "刺大复盘");
    setText("#headerDate", `${review.meta.date.replaceAll("-", ".")} · 收盘复盘`);
    setText("#publishedAt", `${review.meta.publishedAt} 已抓取`);
    setText("#syncTitle", "今日原文已同步");
    setText("#sidebarPublishedAt", `${review.meta.publishedAt} · ${review.meta.author}`);
    setText("#reviewSummary", review.meta.summary);
  }
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

tabs.forEach((tab, index) => {
  tab.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    switchView(tabs[nextIndex].dataset.view);
  });
});

function findThemeStock(name) {
  for (const theme of review.themes) {
    if (theme.stocks.includes(name)) {
      return {
        level: "首板",
        brief: `原文首板方向：${theme.name}。`,
        flags: ["首板池", theme.name],
        mentions: [[theme.name, `${name}。${theme.notes.join(" ")}`]],
        related: theme.stocks.filter((stock) => stock !== name).slice(0, 4)
      };
    }
  }
  return null;
}

function getDossier(name) {
  if (stockDossiers[name]) return stockDossiers[name];
  if (findThemeStock(name)) return findThemeStock(name);

  const screened = screenedByStock.get(name);
  if (!screened) return null;
  const boardLabel =
    screened.boardHeight == null ? "历史待核验" : `${screened.boardHeight}板`;
  const excluded = screenSnapshot.hardExcluded.some((stock) => stock.name === name);
  const reasons = [
    `${boardLabel} · 流通市值 ${screened.floatMarketCapYi ?? "—"} 亿`,
    excluded
      ? "首板且近两年存在疑似 A 杀，命中硬性剔除"
      : screened.boardHeight >= 2
        ? "二板以上梯队例外，不因 A 杀历史自动否决"
        : "首板未命中 A 杀规则，保留观察"
  ];
  return {
    level: boardLabel,
    brief: reasons.join("；"),
    flags: ["全市场初筛", excluded ? "硬性剔除" : "保留", ...(screened.boardHeight >= 2 ? ["梯队例外"] : [])],
    mentions: [["筛选依据", reasons.join("；")]],
    related: []
  };
}

function mentionBadges(profile, context = "ladder") {
  const currentCategory = context === "quality" ? "气质股" : "梯队";
  const flags = profile.flags.filter((flag) => flag !== currentCategory && flag !== "梯队");
  return flags.map((flag) => {
    const extra = flag === "气质股" && profile.score ? ` ${profile.score}` : "";
    return `<span class="mention-badge" data-type="${escapeHtml(flag)}">${escapeHtml(flag)}${escapeHtml(extra)}</span>`;
  }).join("");
}

$("#ladderBoard").innerHTML = review.ladder.map((level) => `
  <section class="ladder-level compact-level">
    <div class="level-marker">
      <strong>${level.level}</strong>
      <span>${escapeHtml(level.label)}</span>
    </div>
    <div class="ladder-stock-grid compact-grid">
      ${level.stocks.map((stock) => {
        const profile = getDossier(stock.name);
        return `
          <button class="stock-node" type="button" data-stock="${escapeHtml(stock.name)}">
            <span class="stock-node-top">
              <strong>${escapeHtml(stock.name)}</strong>
              <span class="stock-role">${escapeHtml(stock.role)}</span>
            </span>
            <span class="stock-brief">${escapeHtml(profile?.brief || stock.note)}</span>
            ${marketLine(stock.name)}
            ${historyFlag(stock.name)}
            <span class="stock-badges">${profile ? mentionBadges(profile, "ladder") : ""}</span>
            <span class="stock-open">原帖全部提及 <i>↗</i></span>
          </button>
        `;
      }).join("")}
    </div>
  </section>
`).join("");

$("#qualityList").innerHTML = review.qualities.map((item) => {
  const profile = getDossier(item.name);
  return `
    <button class="quality-stock-card" type="button" data-stock="${escapeHtml(item.name)}">
      <span class="quality-stock-top">
        <span>
          <strong>${escapeHtml(item.name)}</strong>
          <em>${escapeHtml(profile.level)}</em>
        </span>
        <strong class="quality-number">${escapeHtml(item.score)}</strong>
      </span>
      <span class="quality-stock-quote">${escapeHtml(item.quote)}</span>
      <span class="quality-stock-aside">${escapeHtml(item.aside)}</span>
      ${marketLine(item.name)}
      ${historyFlag(item.name)}
      <span class="stock-badges">${mentionBadges(profile, "quality")}</span>
    </button>
  `;
}).join("");

$("#crossReference").innerHTML = review.crossReferences.map((name) => {
  const profile = getDossier(name);
  return `
    <button class="cross-stock" type="button" data-stock="${escapeHtml(name)}">
      <strong>${escapeHtml(name)}</strong>
      <span>${escapeHtml(profile.flags.join(" · "))}</span>
    </button>
  `;
}).join("");

$("#questionEntryText").textContent = `思考题里有${review.questions.flatMap((question) => question.related).filter((name, index, list) => list.indexOf(name) === index).slice(0, 5).join("、")}。`;

$("#originalArticle").innerHTML = `
  <section class="article-section" id="article-first">
    <h3>首板</h3>
    ${review.themes.map((theme) => `
      <div class="article-section" id="theme-${theme.id}">
        <h3>${escapeHtml(theme.name)}</h3>
        <p class="article-stocks">${theme.stocks.map((stock) => `<button class="stock stock-link" type="button" data-stock="${escapeHtml(stock)}">${escapeHtml(stock)}</button>`).join("，")}</p>
        <p class="article-note-label">首封时间</p>
        <div class="article-notes">${theme.notes.map((note) => `<p>${escapeHtml(note)}</p>`).join("")}</div>
      </div>
    `).join("")}
    <p class="article-note-label">首板总结</p>
    <div class="article-notes">${review.summary.map((note, index) => `<p>${index + 1}. ${escapeHtml(note)}</p>`).join("")}</div>
  </section>
  <hr class="article-divider">
  <section class="article-section" id="article-ladder">
    <h3>梯队晋级</h3>
    ${review.ladder.slice().reverse().map((level) => `
      <p class="article-note-label">${escapeHtml(level.label)}晋级</p>
      <div class="article-notes">
        ${level.stocks.map((stock) => `<p><button class="stock stock-link" type="button" data-stock="${escapeHtml(stock.name)}">${escapeHtml(stock.name)}</button>，${escapeHtml(stock.note)}</p>`).join("")}
      </div>
    `).join("")}
  </section>
  <hr class="article-divider">
  <section class="article-section" id="article-plan">
    <h3>观察计划</h3>
    <div class="article-notes">
      ${review.articleSections.observation.map((note, index) => `<p>${index + 1}. ${escapeHtml(note)}</p>`).join("")}
    </div>
  </section>
  <section class="article-section" id="article-high">
    <h3>高标情绪</h3>
    <div class="article-notes">
      ${review.articleSections.highSentiment.map((note, index) => `<p>${index + 1}. ${escapeHtml(note)}</p>`).join("")}
    </div>
  </section>
  <section class="article-section" id="article-auction">
    <h3>竞价最优解</h3>
    <div class="article-notes">
      ${review.articleSections.auction.map((note, index) => `<p>${index + 1}. ${escapeHtml(note)}</p>`).join("")}
    </div>
  </section>
  <section class="article-section" id="article-quality">
    <h3>气质股</h3>
    <div class="article-notes">
      ${review.articleSections.quality.map((note, index) => `<p>${index + 1}. ${escapeHtml(note)}</p>`).join("")}
    </div>
  </section>
  <section class="article-section" id="article-question">
    <h3>思考题</h3>
    <div class="article-notes">
      ${review.articleSections.questions.map((note, index) => `<p>${index + 1}. ${escapeHtml(note)}</p>`).join("")}
    </div>
  </section>
`;

$("#articleIndex").innerHTML = [
  ["article-first", "首板全景"],
  ["article-ladder", "梯队晋级"],
  ["article-plan", "观察计划"],
  ["article-high", "高标情绪"],
  ["article-auction", "竞价最优解"],
  ["article-quality", "气质股"],
  ["article-question", "思考题"]
].map(([id, label]) => `<a href="#${id}">${label}</a>`).join("");

$("#observationRibbon").innerHTML = review.observations.map((item, index) => `
  <div>
    <span>${escapeHtml(item.label || `观察 ${String(index + 1).padStart(2, "0")}`)}</span>
    <strong>${escapeHtml(item.title)}</strong>
  </div>
`).join("");

$("#questionsGrid").innerHTML = review.questions.map((question) => `
  <article class="question-card">
    <div class="question-meta">
      <span>${escapeHtml(question.label)}</span>
      <span>作者原问</span>
    </div>
    <h3>${escapeHtml(question.title)}</h3>
    <p>${escapeHtml(question.detail)}</p>
    <div class="related-stocks">
      <span>相关股票</span>
      ${question.related.map((name) => `<button type="button" data-stock="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join("")}
    </div>
    <label>
      <span class="sr-only">回答：${escapeHtml(question.title)}</span>
      <textarea rows="5" data-answer="${escapeHtml(question.id)}" placeholder="写下你的判断与证据…"></textarea>
    </label>
  </article>
`).join("");

function renderScreening(filter = "kept") {
  if (!screenSnapshot) return;

  const firstBoard = screenSnapshot.candidates.filter(
    (stock) => stock.boardHeight === 1
  );
  const exceptions = screenSnapshot.candidates.filter(
    (stock) => stock.boardHeight != null && stock.boardHeight >= 2
  );
  const allStocks = [
    ...screenSnapshot.candidates,
    ...screenSnapshot.hardExcluded
  ].sort(
    (a, b) =>
      (b.boardHeight || 0) - (a.boardHeight || 0) ||
      (b.amount || 0) - (a.amount || 0)
  );
  const filters = {
    kept: screenSnapshot.candidates,
    first: firstBoard,
    exception: exceptions,
    excluded: screenSnapshot.hardExcluded,
    all: allStocks
  };
  const labels = {
    kept: `保留 ${screenSnapshot.candidateCount} 只`,
    first: `首板候选 ${firstBoard.length} 只`,
    exception: `梯队例外 ${exceptions.length} 只`,
    excluded: `硬性剔除 ${screenSnapshot.hardExcludedCount} 只`,
    all: `全部通过市值初筛 ${screenSnapshot.capPassCount} 只`
  };
  const rows = filters[filter] || [];
  $("#screenCaption").textContent = labels[filter];
  $("#screenList").innerHTML = rows.map((stock) => {
    const excluded = screenSnapshot.hardExcluded.some(
      (item) => item.code === stock.code
    );
    const isException = stock.boardHeight != null && stock.boardHeight >= 2;
    const status = excluded ? "硬性剔除" : isException ? "梯队例外" : "保留";
    const reason = excluded
      ? `首板且有 ${stock.aKillEvents.length} 次疑似 A 杀`
      : isException
        ? `${stock.boardHeight} 板 · 不因历史 A 杀自动否决`
        : stock.hasSuspectedAKill == null
          ? "历史表现待核验"
          : "首板且未命中 A 杀规则";
    return `
      <button class="screen-row${excluded ? " is-excluded" : ""}" type="button" data-stock="${escapeHtml(stock.name)}">
        <span class="screen-stock-main">
          <strong>${escapeHtml(stock.name)}</strong>
          <small>${escapeHtml(stock.code)}</small>
        </span>
        <span class="screen-board">
          <b>${stock.boardHeight == null ? "?" : stock.boardHeight}</b>
          <small>板</small>
        </span>
        <span class="screen-quote">
          <strong>${escapeHtml(stock.price ?? "—")}</strong>
          <em class="${Number(stock.changePercent) >= 0 ? "is-up" : "is-down"}">${escapeHtml(signedPercent(stock.changePercent))}</em>
        </span>
        <span class="screen-cap">
          <strong>${escapeHtml(stock.floatMarketCapYi ?? "—")}</strong>
          <small>亿流通</small>
        </span>
        <span class="screen-status ${excluded ? "is-excluded" : isException ? "is-exception" : "is-kept"}">
          <strong>${status}</strong>
          <small>${escapeHtml(reason)}</small>
        </span>
        <span class="screen-open" aria-hidden="true">↗</span>
      </button>
    `;
  }).join("");

  $$(".screen-filter").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screenFilter === filter);
  });

  const failures = screenSnapshot.failures || [];
  $("#screenFailures").hidden = failures.length === 0;
  $("#screenFailures").innerHTML = failures.length
    ? `<strong>历史行情未完成 ${failures.length} 只</strong><p>${failures.map(escapeHtml).join("；")}</p>`
    : "";
}

if (screenSnapshot) {
  $("#screenSummary").innerHTML = [
    ["全市场", screenSnapshot.marketCount, "A 股快照"],
    ["涨停", screenSnapshot.limitUpCount, "当日收盘"],
    ["市值后", screenSnapshot.capPassCount, "30–250 亿"],
    ["保留", screenSnapshot.candidateCount, "进入下一步"],
    ["剔除", screenSnapshot.hardExcludedCount, "首板 + A 杀"]
  ].map(([label, value, detail], index) => `
    <div class="screen-metric${index === 3 ? " is-highlight" : ""}">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${detail}</small>
    </div>
  `).join("");

  $$(".screen-filter").forEach((button) => {
    button.addEventListener("click", () => renderScreening(button.dataset.screenFilter));
  });
  renderScreening("kept");
}

if (sectorSnapshot) {
  const widest = [...sectorSnapshot.sectors].sort((a, b) => b.count - a.count)[0];
  $("#sectorSummary").innerHTML = [
    ["涨停", sectorSnapshot.market.limitUpCount, "全市场"],
    ["首板", sectorSnapshot.market.firstBoardCount, "新发方向"],
    ["最高", `${sectorSnapshot.market.maxHeight}板`, "消费"],
    ["最宽", `${widest.count}只`, widest.name],
    ["覆盖", `${sectorSnapshot.market.articleCoveredLimitUps}/${sectorSnapshot.market.limitUpCount}`, "文章明确归类"]
  ].map(([label, value, detail], index) => `
    <div class="sector-metric${index === 3 ? " is-highlight" : ""}">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
      <small>${escapeHtml(detail)}</small>
    </div>
  `).join("");

  $("#funnelList").innerHTML = sectorSnapshot.ladderFunnel?.length
    ? sectorSnapshot.ladderFunnel.map((item) => `
        <div class="funnel-step">
          <span>${escapeHtml(item.from)} → ${escapeHtml(item.to)}</span>
          <strong>${item.promoted}<small> / ${item.base}</small></strong>
          <div class="funnel-track" aria-hidden="true">
            <i style="width:${Math.min(100, item.rate)}%"></i>
          </div>
          <em>${item.rate.toFixed(2)}%</em>
        </div>
      `).join("")
    : '<p class="funnel-empty">首次抓取尚无可对比的前一交易日，明日起自动计算晋级率。</p>';

  const maxSectorCount = Math.max(...sectorSnapshot.sectors.map((sector) => sector.count));
  $("#sectorList").innerHTML = sectorSnapshot.sectors.map((sector) => `
    <article class="sector-block tone-${escapeHtml(sector.tone)}">
      <header class="sector-block-head">
        <div>
          <span class="sector-stage">${escapeHtml(sector.stage)}</span>
          <h3>${escapeHtml(sector.name)}</h3>
        </div>
        <div class="sector-numbers">
          <strong>${sector.count}</strong>
          <span>${sector.firstBoardCount} 首板 · ${sector.maxHeight} 板高</span>
        </div>
      </header>
      <div class="sector-width-track" aria-hidden="true">
        <i style="width:${Math.round((sector.count / maxSectorCount) * 100)}%"></i>
      </div>
      <div class="sector-members">
        ${sector.members.map((name) => `<button type="button" data-stock="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join("")}
      </div>
      <div class="sector-evidence">
        <span>原文证据</span>
        <p>${escapeHtml(sector.evidence)}</p>
      </div>
      <div class="sector-next">
        <span>下一步观察</span>
        <p>${escapeHtml(sector.nextWatch)}</p>
      </div>
    </article>
  `).join("");
}

const annotationToggle = $("#annotationToggle");
annotationToggle.addEventListener("click", () => {
  const active = annotationToggle.getAttribute("aria-pressed") === "true";
  annotationToggle.setAttribute("aria-pressed", String(!active));
  document.body.classList.toggle("is-annotated", !active);
});

const drawer = $("#stockDrawer");
const drawerScrim = $("#drawerScrim");
const drawerContent = $("#drawerContent");
let previousFocus = null;
let currentDrawerStock = null;
let currentKlineWindow = 120;

function renderKline(stockName, windowSize = currentKlineWindow) {
  const history = historyFor(stockName);
  const chart = $("#klineChart");
  if (!history?.bars?.length || !chart) return;

  currentKlineWindow = windowSize;
  const bars = history.bars.slice(-windowSize);
  const width = Math.max(280, chart.clientWidth || 330);
  const height = 220;
  const left = 4;
  const right = 42;
  const top = 16;
  const priceHeight = 120;
  const volumeTop = 158;
  const volumeHeight = 34;
  const bottom = 20;
  const plotWidth = width - left - right;
  const step = plotWidth / Math.max(bars.length, 1);
  const candleWidth = Math.max(1, Math.min(5, step * 0.62));
  const highs = bars.map((bar) => bar.high);
  const lows = bars.map((bar) => bar.low);
  const maxPrice = Math.max(...highs);
  const minPrice = Math.min(...lows);
  const pricePadding = Math.max((maxPrice - minPrice) * 0.06, maxPrice * 0.005);
  const chartMax = maxPrice + pricePadding;
  const chartMin = minPrice - pricePadding;
  const priceRange = chartMax - chartMin || 1;
  const maxVolume = Math.max(...bars.map((bar) => bar.volume || 0), 1);
  const yPrice = (price) =>
    top + ((chartMax - price) / priceRange) * priceHeight;
  const xAt = (index) => left + index * step + step / 2;
  const eventDates = new Set(
    (history.events || []).map((event) => event.breakDate)
  );
  const eventsInWindow = bars.filter((bar) => eventDates.has(bar.date));
  let currentBoardHeight = 0;
  for (let index = bars.length - 1; index >= 0; index -= 1) {
    if (bars[index].changePercent >= history.limitThreshold) {
      currentBoardHeight += 1;
    } else {
      break;
    }
  }
  const boardStartIndex = bars.length - currentBoardHeight;
  const boardZoneX = boardStartIndex * step;
  const boardZoneWidth = Math.max(step * currentBoardHeight, step);

  const grid = [0, 0.5, 1].map((ratio) => {
    const y = top + ratio * priceHeight;
    const price = chartMax - ratio * priceRange;
    return `
      <line class="kline-grid" x1="${left}" x2="${left + plotWidth}" y1="${y}" y2="${y}"></line>
      <text class="kline-axis" x="${width - right + 5}" y="${y + 3}">${price.toFixed(2)}</text>
    `;
  }).join("");

  const candles = bars.map((bar, index) => {
    const x = xAt(index);
    const up = bar.close >= bar.open;
    const colorClass = up ? "is-up" : "is-down";
    const openY = yPrice(bar.open);
    const closeY = yPrice(bar.close);
    const highY = yPrice(bar.high);
    const lowY = yPrice(bar.low);
    const bodyTop = Math.min(openY, closeY);
    const bodyHeight = Math.max(1.2, Math.abs(closeY - openY));
    const volumeBarHeight = ((bar.volume || 0) / maxVolume) * volumeHeight;
    const isEvent = eventDates.has(bar.date);
    return `
      <g class="kline-candle ${colorClass}">
        <title>${escapeHtml(bar.date)} 开 ${bar.open.toFixed(2)} 高 ${bar.high.toFixed(2)} 低 ${bar.low.toFixed(2)} 收 ${bar.close.toFixed(2)} 涨跌 ${bar.changePercent.toFixed(2)}%</title>
        <line x1="${x}" x2="${x}" y1="${highY}" y2="${lowY}"></line>
        <rect x="${x - candleWidth / 2}" y="${bodyTop}" width="${candleWidth}" height="${bodyHeight}"></rect>
        <rect class="kline-volume ${colorClass}" x="${x - candleWidth / 2}" y="${volumeTop + volumeHeight - volumeBarHeight}" width="${candleWidth}" height="${volumeBarHeight}"></rect>
        ${isEvent ? `<circle class="kline-event" cx="${x}" cy="${top - 3}" r="3"></circle>` : ""}
      </g>
    `;
  }).join("");

  const labelIndexes = [...new Set([0, Math.floor(bars.length / 3), Math.floor((bars.length * 2) / 3), bars.length - 1])];
  const dateLabels = labelIndexes.map((index) => `
    <text class="kline-date" x="${xAt(index)}" y="${height - 5}" text-anchor="${index === 0 ? "start" : index === bars.length - 1 ? "end" : "middle"}">${barDateLabel(bars[index].date)}</text>
  `).join("");

  chart.innerHTML = `
    <svg class="kline-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(stockName)} 近 ${bars.length} 个交易日 K 线">
      <title>${escapeHtml(stockName)} K 线图</title>
      ${grid}
      ${currentBoardHeight ? `
        <rect class="kline-board-zone" x="${boardZoneX}" y="${top}" width="${boardZoneWidth}" height="${priceHeight}"></rect>
        <text class="kline-zone-label" x="${boardZoneX + 3}" y="${top + 10}">${currentBoardHeight}板</text>
      ` : ""}
      ${candles}
      ${dateLabels}
    </svg>
    <p class="kline-range-note">${eventsInWindow.length ? `当前区间标记 ${eventsInWindow.length} 次疑似 A 杀断板日。` : "当前显示区间没有 A 杀标记；历史命中记录见下方。"}</p>
  `;
  $$(".kline-ranges button").forEach((button) => {
    button.classList.toggle(
      "is-active",
      Number(button.dataset.klineWindow) === windowSize
    );
  });
}

function barDateLabel(value) {
  return value.slice(5);
}

function openDrawer(stockName) {
  const profile = getDossier(stockName);
  if (!profile) return;
  const market = marketFor(stockName);
  const history = historyFor(stockName);

  previousFocus = document.activeElement;
  currentDrawerStock = stockName;
  currentKlineWindow = 120;
  drawerContent.innerHTML = `
    <div class="drawer-title-row">
      <h2>${escapeHtml(stockName)}</h2>
      <span class="drawer-level">${escapeHtml(profile.level)}</span>
    </div>
    <p class="drawer-brief">${escapeHtml(profile.brief)}</p>
    <div class="drawer-flags">
      ${profile.flags.map((flag) => `<span>${escapeHtml(flag)}</span>`).join("")}
    </div>
    ${history?.bars?.length ? `
      <section class="kline-panel">
        <div class="kline-heading">
          <span class="drawer-label">日 K</span>
          <div class="kline-ranges" role="group" aria-label="K 线周期">
            <button type="button" data-kline-window="60">60 日</button>
            <button class="is-active" type="button" data-kline-window="120">120 日</button>
            <button type="button" data-kline-window="250">250 日</button>
          </div>
        </div>
        <div class="kline-chart" id="klineChart"></div>
        <p class="kline-legend"><span class="kline-event-dot"></span>红点标记历史疑似 A 杀断板日。前复权日线，仅供复盘。</p>
      </section>
    ` : ""}
    ${market ? `
      <div class="drawer-market">
        <div><span>代码</span><strong>${escapeHtml(market.code)}</strong></div>
        <div><span>收盘</span><strong>${escapeHtml(market.price ?? "—")}</strong></div>
        <div><span>涨跌幅</span><strong class="${Number(market.changePercent) >= 0 ? "is-up" : "is-down"}">${escapeHtml(signedPercent(market.changePercent))}</strong></div>
        <div><span>换手率</span><strong>${escapeHtml(market.turnoverRate ?? "—")}%</strong></div>
        <div><span>流通市值</span><strong>${escapeHtml(market.floatMarketCapYi ?? "—")}亿</strong></div>
        <div><span>硬筛范围</span><strong class="${market.inFloatCapRange ? "is-in-range" : "is-out-range"}">${market.inFloatCapRange ? "符合 30–250 亿" : "超出 30–250 亿"}</strong></div>
      </div>
    ` : ""}
    <section class="drawer-history">
      <div class="drawer-history-heading">
        <span class="drawer-label">近两年历史行为</span>
        ${historyFlag(stockName)}
      </div>
      ${history?.events?.length ? `
        <div class="history-events">
          ${history.events.map((event) => `
            <article>
              <strong>${escapeHtml(event.runStart)} → ${escapeHtml(event.breakDate)}</strong>
              <span>${event.runLength} 连板后断板</span>
              <p>${event.evidence.map(escapeHtml).join("；")}</p>
            </article>
          `).join("")}
        </div>
      ` : `<p class="history-empty">${history ? "当前规则未命中疑似 A 杀。" : "历史行情暂未取得。"}</p>`}
      <small>仅为日线模式识别；二板以上不会据此自动剔除。</small>
    </section>
    <div class="drawer-mentions">
      ${profile.mentions.map(([section, text]) => `
        <section class="drawer-mention">
          <span>${escapeHtml(section)}</span>
          <p>${escapeHtml(text)}</p>
        </section>
      `).join("")}
    </div>
    ${profile.related?.length ? `
      <div class="drawer-related">
        <span class="drawer-label">原文关联</span>
        <div>
          ${profile.related.map((name) => `<button type="button" data-stock="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join("")}
        </div>
      </div>
    ` : ""}
    <button class="drawer-teach-button" type="button" data-teach-stock="${escapeHtml(stockName)}">这里理解错了，教 AI</button>
    <a class="drawer-source js-source-link" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">回到本次复盘原文 ↗</a>
  `;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  drawerScrim.hidden = false;
  document.body.classList.add("drawer-open");
  $("#drawerClose").focus();
  if (history?.bars?.length) {
    requestAnimationFrame(() => renderKline(stockName, 120));
  }
}

function closeDrawer() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  drawerScrim.hidden = true;
  document.body.classList.remove("drawer-open");
  if (previousFocus instanceof HTMLElement) previousFocus.focus();
}

document.addEventListener("click", (event) => {
  const stockButton = event.target.closest("[data-stock]");
  if (stockButton) openDrawer(stockButton.dataset.stock);
});

$("#drawerClose").addEventListener("click", closeDrawer);
drawerScrim.addEventListener("click", closeDrawer);

const teachingDrawer = $("#teachingDrawer");
const teachingScrim = $("#teachingScrim");
const teachingForm = $("#teachingForm");
const teachingContext = $("#teachingContext");
const teachingCorrection = $("#teachingCorrection");
const teachingTerm = $("#teachingTerm");
const teachingType = $("#teachingType");
const teachingScope = $("#teachingScope");
const teachingStatus = $("#teachingStatus");
const learnedRuleList = $("#learnedRuleList");
const teachingStorageKey = "pan-eye-ai-teaching-v1";
let teachingPreviousFocus = null;
let learnedRules = [];

function loadLearnedRules() {
  try {
    const parsed = JSON.parse(localStorage.getItem(teachingStorageKey) || "[]");
    learnedRules = Array.isArray(parsed) ? parsed : [];
  } catch {
    learnedRules = [];
  }
}

function renderLearnedRules() {
  if (!learnedRules.length) {
    learnedRuleList.innerHTML = '<p class="learned-rules-empty">还没有校准记录。AI 误解时可以在这里直接告诉它。</p>';
    return;
  }

  learnedRuleList.innerHTML = learnedRules.map((rule) => `
    <article class="learned-rule">
      <div class="learned-rule-top">
        <strong>${escapeHtml(rule.term || "未命名词条")}</strong>
        <span>${escapeHtml(rule.type)} · ${escapeHtml(rule.scope)}</span>
      </div>
      <p>${escapeHtml(rule.correction)}</p>
      ${rule.context ? `<small>原误解：${escapeHtml(rule.context)}</small>` : ""}
      <button type="button" data-remove-teaching="${escapeHtml(rule.id)}">删除这条校准</button>
    </article>
  `).join("");
}

function openTeaching(prefill = {}) {
  if (drawer.classList.contains("is-open")) closeDrawer();
  teachingPreviousFocus = document.activeElement;
  if (prefill.term) teachingTerm.value = prefill.term;
  if (prefill.context) teachingContext.value = prefill.context;
  if (prefill.type) teachingType.value = prefill.type;
  teachingDrawer.classList.add("is-open");
  teachingDrawer.setAttribute("aria-hidden", "false");
  teachingScrim.hidden = false;
  document.body.classList.add("drawer-open");
  teachingCorrection.focus();
}

function closeTeaching() {
  teachingDrawer.classList.remove("is-open");
  teachingDrawer.setAttribute("aria-hidden", "true");
  teachingScrim.hidden = true;
  document.body.classList.remove("drawer-open");
  if (teachingPreviousFocus instanceof HTMLElement) teachingPreviousFocus.focus();
}

function exportTeachingContext() {
  const payload = {
    version: 1,
    purpose: "AI 解析短线复盘时的用户校准规则",
    article: {
      author: review.meta.author,
      date: review.meta.date,
      url: sourceUrl
    },
    exportedAt: new Date().toISOString(),
    rules: learnedRules
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `pan-eye-ai-teaching-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  teachingStatus.textContent = "校准上下文已导出";
}

$("#teachAiButton").addEventListener("click", () => openTeaching());
$("#teachingClose").addEventListener("click", closeTeaching);
teachingScrim.addEventListener("click", closeTeaching);
$("#exportTeaching").addEventListener("click", exportTeachingContext);

document.addEventListener("click", (event) => {
  const teachButton = event.target.closest("[data-teach-stock]");
  if (teachButton) {
    const stockName = teachButton.dataset.teachStock;
    const profile = getDossier(stockName);
    openTeaching({ term: stockName, type: "个股评价", context: profile?.brief || "" });
  }

  const removeButton = event.target.closest("[data-remove-teaching]");
  if (removeButton) {
    learnedRules = learnedRules.filter((rule) => rule.id !== removeButton.dataset.removeTeaching);
    localStorage.setItem(teachingStorageKey, JSON.stringify(learnedRules));
    renderLearnedRules();
    teachingStatus.textContent = "已删除这条校准";
  }

  const rangeButton = event.target.closest("[data-kline-window]");
  if (rangeButton && currentDrawerStock) {
    const range = Number(rangeButton.dataset.klineWindow);
    $$(".kline-ranges button").forEach((button) => {
      button.classList.toggle("is-active", button === rangeButton);
    });
    renderKline(currentDrawerStock, range);
  }
});

teachingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const correction = teachingCorrection.value.trim();
  if (!correction) {
    teachingStatus.textContent = "请先写出 AI 应该怎样理解";
    teachingCorrection.focus();
    return;
  }

  learnedRules.unshift({
    id: `teach-${Date.now()}`,
    term: teachingTerm.value.trim(),
    type: teachingType.value,
    scope: teachingScope.value,
    context: teachingContext.value.trim(),
    correction,
    articleUrl: sourceUrl,
    createdAt: new Date().toISOString()
  });
  localStorage.setItem(teachingStorageKey, JSON.stringify(learnedRules));
  renderLearnedRules();
  teachingForm.reset();
  teachingStatus.textContent = "已保存为 AI 校准记忆";
  teachingTerm.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (teachingDrawer.classList.contains("is-open")) {
    closeTeaching();
  } else if (drawer.classList.contains("is-open")) {
    closeDrawer();
  }
});

loadLearnedRules();
renderLearnedRules();

const answerFields = $$("[data-answer]");
const answerStorageKey = `pan-eye-questions-${review.meta.date}`;
const saveStatus = $("#saveStatus");

function loadAnswers() {
  try {
    const saved = JSON.parse(localStorage.getItem(answerStorageKey) || "{}");
    answerFields.forEach((field) => {
      field.value = saved.answers?.[field.dataset.answer] || "";
    });
    if (saved.savedAt) {
      saveStatus.textContent = `已保存 ${new Date(saved.savedAt).toLocaleString("zh-CN", { hour12: false })}`;
    }
  } catch {
    saveStatus.textContent = "本地记录读取失败";
  }
}

loadAnswers();

$("#saveAnswers").addEventListener("click", () => {
  const answers = Object.fromEntries(answerFields.map((field) => [field.dataset.answer, field.value]));
  const savedAt = new Date().toISOString();
  localStorage.setItem(answerStorageKey, JSON.stringify({ answers, savedAt }));
  saveStatus.textContent = `已保存 ${new Date(savedAt).toLocaleString("zh-CN", { hour12: false })}`;
});
