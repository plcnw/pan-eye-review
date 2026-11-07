(() => {
  const STORAGE_KEY = "pan-eye-opportunities-v2";
  const LEGACY_STORAGE_KEY = "pan-eye-opportunities-v1";
  const SELECTED_KEY = "pan-eye-opportunities-selected-v2";
  const LEGACY_SELECTED_KEY = "pan-eye-opportunities-selected-v1";
  const root = document.getElementById("view-opportunities");
  if (!root) return;

  const review = window.REVIEW_DATA || { meta: {}, themes: [], ladder: [] };
  const screen = window.SCREEN_DATA || null;
  const sectors = window.SECTOR_DATA?.sectors || [];
  const poolDate = screen?.date || review.meta?.date || "";

  const eventList = document.getElementById("opportunityEventList");
  const emptyState = document.getElementById("opportunityEmpty");
  const editor = document.getElementById("opportunityEditor");
  const eventTitleHeading = document.getElementById("opportunityEventHeading");
  const eventContext = document.getElementById("opportunityEventContext");
  const eventStocksRoot = document.getElementById("opportunityEventStocks");
  const saveState = document.getElementById("opportunitySaveState");
  const opportunityCount = document.getElementById("opportunityCount");
  const cardsRoot = document.getElementById("opportunityCards");
  const importInput = document.getElementById("opportunityImportInput");
  const poolPanel = document.getElementById("opportunityPoolPanel");
  const poolList = document.getElementById("opportunityPoolList");
  const poolSearch = document.getElementById("opportunityPoolSearch");
  const poolSelectedRoot = document.getElementById("opportunityPoolSelected");
  const poolSelectedCount = document.getElementById("opportunityPoolSelectedCount");
  const createFromPoolButton = document.getElementById("opportunityCreateFromPool");
  const verificationQueue = document.getElementById("opportunityVerificationQueue");
  const pendingCount = document.getElementById("opportunityPendingCount");

  const escaped = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const uid = (prefix) =>
    `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

  const shanghaiDate = () => {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());
    const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    return `${value.year}-${value.month}-${value.day}`;
  };

  const formatSavedAt = (value) => {
    if (!value) return "尚未保存";
    return `已保存 ${new Date(value).toLocaleString("zh-CN", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    })}`;
  };

  const normalizeNameList = (value) => {
    if (Array.isArray(value)) return value.map(String).filter(Boolean);
    return String(value || "")
      .split(/[、,，\s]+/)
      .map((name) => name.trim())
      .filter(Boolean);
  };

  const sectorsForStock = (name) => {
    const result = [];
    for (const sector of sectors) {
      if ((sector.members || []).includes(name)) result.push(sector.name);
    }
    for (const theme of review.themes || []) {
      if ((theme.stocks || []).includes(name)) result.push(theme.name);
    }
    return [...new Set(result)];
  };

  const buildLimitUpPool = () => {
    const byName = new Map();
    const add = (stock, overrides = {}) => {
      const name = String(stock?.name || "").trim();
      if (!name) return;
      const existing = byName.get(name) || { name };
      const stockSectors = sectorsForStock(name);
      byName.set(name, {
        ...existing,
        ...stock,
        ...overrides,
        name,
        boardHeight:
          overrides.boardHeight ?? stock?.boardHeight ?? existing.boardHeight ?? 1,
        sectors: [...new Set([
          ...(existing.sectors || []),
          ...stockSectors,
          ...(overrides.sectors || [])
        ])]
      });
    };

    for (const stock of [
      ...(screen?.candidates || []),
      ...(screen?.hardExcluded || []),
      ...(screen?.exceptions || [])
    ]) {
      add(stock);
    }
    for (const level of review.ladder || []) {
      for (const stock of level.stocks || []) {
        add(stock, { boardHeight: Number(level.level) || 1, role: stock.role || "" });
      }
    }
    for (const theme of review.themes || []) {
      for (const name of theme.stocks || []) {
        add({ name, boardHeight: 1, sector: theme.name });
      }
    }

    return [...byName.values()].sort((a, b) => {
      const boardDiff = (b.boardHeight || 0) - (a.boardHeight || 0);
      return boardDiff || a.name.localeCompare(b.name, "zh-CN");
    });
  };

  const limitUpPool = buildLimitUpPool();
  const poolByName = new Map(limitUpPool.map((stock) => [stock.name, stock]));

  const shortNames = (names, limit = 3) => {
    const values = names.filter(Boolean);
    if (values.length <= limit) return values.join(" / ");
    return `${values.slice(0, limit).join(" / ")} 等${values.length}只`;
  };

  const suggestTitle = (stocks) => {
    const names = stocks.map((stock) => stock.name);
    const heights = stocks.map((stock) => Number(stock.boardHeight) || 1);
    const maxHeight = Math.max(...heights, 1);
    const sameHeight = new Set(heights).size === 1;
    if (stocks.length === 1) {
      return `${stocks[0].name} · ${maxHeight}板高度路径`;
    }
    if (sameHeight && stocks.length > 1) {
      return `${shortNames(names)} · ${maxHeight}板同身位竞争`;
    }
    return `${shortNames(names)} · 涨停结构推演`;
  };

  const buildEventContext = (stocks) => {
    const groups = stocks.map(
      (stock) =>
        `${stock.name}${stock.boardHeight ? ` ${stock.boardHeight}板` : ""}${
          stock.sectors?.[0] ? `（${stock.sectors[0]}）` : ""
        }`
    );
    const relatedSectors = [...new Set(stocks.flatMap((stock) => stock.sectors || []))];
    return `${poolDate} 涨停池：${groups.join("、")}${
      relatedSectors.length ? `。相关方向：${relatedSectors.join("、")}` : ""
    }。`;
  };

  const normalizeOpportunity = (item = {}) => {
    const status = ["pending", "confirmed", "invalid"].includes(item.status)
      ? item.status
      : "pending";
    return {
      id: item.id || uid("path"),
      template: String(item.template || "free"),
      name: String(item.name || ""),
      logic: String(item.logic || ""),
      targets: String(item.targets || ""),
      trigger: String(item.trigger || ""),
      invalidation: String(item.invalidation || ""),
      notes: String(item.notes || ""),
      status,
      verification: String(item.verification || ""),
      verifiedAt: item.verifiedAt || "",
      createdAt: item.createdAt || new Date().toISOString(),
      updatedAt: item.updatedAt || item.createdAt || new Date().toISOString()
    };
  };

  const normalizeEvent = (item = {}) => {
    const names = normalizeNameList(
      item.selectedStocks?.map?.((stock) => stock.name) || item.stocks
    );
    const selectedStocks = (
      Array.isArray(item.selectedStocks) && item.selectedStocks.length
        ? item.selectedStocks
        : names.map((name) => poolByName.get(name) || { name, boardHeight: 1, sectors: [] })
    ).map((stock) => ({
      name: String(stock.name || ""),
      code: String(stock.code || ""),
      boardHeight: Number(stock.boardHeight) || 1,
      sectors: Array.isArray(stock.sectors) ? stock.sectors : []
    }));
    const fallbackTitle = selectedStocks.length
      ? suggestTitle(selectedStocks)
      : "未命名涨停事件";
    return {
      id: item.id || uid("event"),
      title: String(item.title || fallbackTitle),
      sourceDate: String(item.sourceDate || item.date || poolDate || shanghaiDate()).slice(0, 10),
      context: String(item.context || item.background || buildEventContext(selectedStocks)),
      selectedStocks,
      opportunities: Array.isArray(item.opportunities)
        ? item.opportunities.map(normalizeOpportunity)
        : [],
      createdAt: item.createdAt || new Date().toISOString(),
      updatedAt: item.updatedAt || item.createdAt || new Date().toISOString()
    };
  };

  const loadState = () => {
    try {
      const current = localStorage.getItem(STORAGE_KEY);
      const legacy = current ? null : localStorage.getItem(LEGACY_STORAGE_KEY);
      const parsed = JSON.parse(current || legacy || "{}");
      return {
        version: 2,
        events: Array.isArray(parsed.events) ? parsed.events.map(normalizeEvent) : []
      };
    } catch {
      return { version: 2, events: [] };
    }
  };

  let state = loadState();
  let selectedId =
    localStorage.getItem(SELECTED_KEY) ||
    localStorage.getItem(LEGACY_SELECTED_KEY);
  const expanded = new Set();
  let saveTimer = null;
  let lastStorageError = "";
  let poolFilter = "all";
  const selectedPool = new Set();

  if (!state.events.some((event) => event.id === selectedId)) {
    selectedId = state.events[0]?.id || null;
  }

  const selectedEvent = () =>
    state.events.find((event) => event.id === selectedId) || null;

  const setSaveState = (message, saved = false) => {
    saveState.textContent = message;
    saveState.classList.toggle("is-saved", saved);
  };

  const touchEvent = (event) => {
    event.updatedAt = new Date().toISOString();
  };

  const persist = ({ refreshList = true, refreshQueue = true } = {}) => {
    window.clearTimeout(saveTimer);
    saveTimer = null;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      if (selectedId) localStorage.setItem(SELECTED_KEY, selectedId);
      else localStorage.removeItem(SELECTED_KEY);
      lastStorageError = "";
      const now = selectedEvent()?.updatedAt;
      setSaveState(formatSavedAt(now), true);
    } catch {
      lastStorageError = "浏览器存储不可用，请先导出备份";
      setSaveState(lastStorageError, false);
    }
    if (refreshList) renderHistory();
    if (refreshQueue) renderVerificationQueue();
  };

  const scheduleSave = () => {
    setSaveState("正在保存…", false);
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => persist(), 260);
  };

  const sortedEvents = () =>
    [...state.events].sort((a, b) => {
      const byDate = b.sourceDate.localeCompare(a.sourceDate);
      return byDate || b.updatedAt.localeCompare(a.updatedAt);
    });

  const statusCounts = (event) => ({
    pending: event.opportunities.filter((item) => item.status === "pending").length,
    confirmed: event.opportunities.filter((item) => item.status === "confirmed").length,
    invalid: event.opportunities.filter((item) => item.status === "invalid").length
  });

  const renderHistory = () => {
    const events = sortedEvents();
    if (!events.length) {
      eventList.innerHTML = '<p class="opportunity-event-empty">还没有涨停路径。先从今日涨停池选出一组结构事件。</p>';
      return;
    }
    eventList.innerHTML = events.map((event) => {
      const counts = statusCounts(event);
      return `
        <button class="opportunity-event-item ${event.id === selectedId ? "is-active" : ""}"
          type="button" data-opportunity-event="${escaped(event.id)}">
          <span class="opportunity-event-item-top">
            <span>${escaped(event.sourceDate)}</span>
            <em>${counts.pending} 待验证 · ${counts.confirmed} 兑现</em>
          </span>
          <strong>${escaped(event.title)}</strong>
          <p>${escaped(event.selectedStocks.map((stock) => stock.name).join(" / ") || "未选择标的")}</p>
        </button>
      `;
    }).join("");
  };

  const renderVerificationQueue = () => {
    const today = shanghaiDate();
    const pendingItems = sortedEvents().flatMap((event) => {
      if (event.sourceDate >= today) return [];
      return event.opportunities
        .filter((item) => item.status === "pending")
        .map((item) => ({ event, item }));
    });
    pendingCount.textContent = `${pendingItems.length} 条待验证`;
    if (!pendingItems.length) {
      verificationQueue.innerHTML = '<p class="opportunity-verification-empty">没有跨日待验证路径。今天新建的路径，明日起会进入这里。</p>';
      return;
    }
    const grouped = new Map();
    for (const entry of pendingItems) {
      const group = grouped.get(entry.event.id) || { event: entry.event, items: [] };
      group.items.push(entry.item);
      grouped.set(entry.event.id, group);
    }
    verificationQueue.innerHTML = [...grouped.values()].slice(0, 6).map(({ event, items }) => `
      <button class="opportunity-verification-item" type="button"
        data-verification-event="${escaped(event.id)}">
        <span>
          <span>${escaped(event.sourceDate)} · ${escaped(event.title)}</span>
          <em>${items.length} 条</em>
        </span>
        <strong>${escaped(items.map((item) => item.name || "未命名路径").join(" / "))}</strong>
      </button>
    `).join("");
  };

  const fieldValue = (value) => `value="${escaped(value || "")}"`;
  const textValue = (text) => escaped(text || "");

  const statusLabel = (status) =>
    status === "confirmed" ? "已兑现" : status === "invalid" ? "已失效" : "待验证";

  const renderOpportunityCard = (opportunity, index) => {
    const isExpanded = expanded.has(opportunity.id);
    return `
      <article class="opportunity-card ${isExpanded ? "is-expanded" : ""}"
        data-opportunity-id="${escaped(opportunity.id)}">
        <header class="opportunity-card-head">
          <button class="opportunity-card-toggle" type="button"
            data-opportunity-toggle="${escaped(opportunity.id)}"
            aria-expanded="${isExpanded}">
            <span class="opportunity-card-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="opportunity-card-summary">
              <strong>${escaped(opportunity.name || "未命名路径")}</strong>
              <span>${escaped(opportunity.targets || "尚未填写观察对象")}</span>
            </span>
            <span class="opportunity-path-status is-${escaped(opportunity.status)}">
              ${statusLabel(opportunity.status)}
            </span>
            <span class="opportunity-card-chevron" aria-hidden="true">⌄</span>
          </button>
          <button class="opportunity-delete-card" type="button"
            data-opportunity-delete="${escaped(opportunity.id)}"
            aria-label="删除这条路径">×</button>
        </header>
        <div class="opportunity-card-body" ${isExpanded ? "" : "hidden"}>
          <div class="opportunity-chain-stage">01 · 路径假设</div>
          <div class="opportunity-fields">
            <label class="opportunity-field">
              <span>路径名称</span>
              <input type="text" data-opportunity-field="name"
                ${fieldValue(opportunity.name)}
                placeholder="例如：晋级票高度延续">
            </label>
            <label class="opportunity-field">
              <span>推演逻辑</span>
              <textarea rows="4" data-opportunity-field="logic"
                placeholder="为什么这个涨停结构可能产生这种交易路径？">${textValue(opportunity.logic)}</textarea>
            </label>
          </div>

          <div class="opportunity-chain-stage">02 · 观察与证伪</div>
          <div class="opportunity-fields">
            <label class="opportunity-field">
              <span>观察对象</span>
              <textarea rows="2" data-opportunity-field="targets"
                placeholder="股票、板块、同身位竞争者或市场指标">${textValue(opportunity.targets)}</textarea>
            </label>
            <div class="opportunity-condition-grid">
              <label class="opportunity-field">
                <span>成立条件</span>
                <textarea rows="3" data-opportunity-field="trigger"
                  placeholder="出现什么盘面现象，说明路径正在兑现？">${textValue(opportunity.trigger)}</textarea>
              </label>
              <label class="opportunity-field">
                <span>失效条件</span>
                <textarea rows="3" data-opportunity-field="invalidation"
                  placeholder="出现什么现象，说明路径不成立？">${textValue(opportunity.invalidation)}</textarea>
              </label>
            </div>
          </div>

          <div class="opportunity-chain-stage is-verify">03 · 次日验证</div>
          <div class="opportunity-verification-editor">
            <div class="opportunity-status-controls" role="group" aria-label="路径验证状态">
              ${[
                ["pending", "待验证"],
                ["confirmed", "已兑现"],
                ["invalid", "已失效"]
              ].map(([status, label]) => `
                <button type="button" data-opportunity-status="${status}"
                  class="${opportunity.status === status ? "is-active" : ""}"
                  data-status="${status}">${label}</button>
              `).join("")}
            </div>
            <label class="opportunity-field">
              <span>实际盘面结果</span>
              <textarea rows="3" data-opportunity-field="verification"
                placeholder="第二天实际发生了什么？哪条逻辑被盘面确认，哪条被证伪？">${textValue(opportunity.verification)}</textarea>
            </label>
            ${opportunity.verifiedAt ? `<small class="opportunity-verified-at">最后验证：${escaped(formatSavedAt(opportunity.verifiedAt))}</small>` : ""}
          </div>

          <div class="opportunity-chain-stage">04 · 补充思考</div>
          <label class="opportunity-field">
            <span>复盘补充</span>
            <textarea rows="3" data-opportunity-field="notes"
              placeholder="还有什么需要继续跟踪？">${textValue(opportunity.notes)}</textarea>
          </label>
        </div>
      </article>
    `;
  };

  const renderEditor = () => {
    const event = selectedEvent();
    emptyState.hidden = Boolean(event);
    editor.hidden = !event;
    if (!event) return;

    eventTitleHeading.textContent = event.title;
    eventContext.textContent = event.context;
    eventStocksRoot.innerHTML = event.selectedStocks.map((stock) => `
      <span class="opportunity-event-stock">
        <strong>${escaped(stock.name)}</strong>
        <span>${escaped(stock.code || "")}</span>
        <em>${stock.boardHeight}板${stock.sectors?.[0] ? ` · ${escaped(stock.sectors[0])}` : ""}</em>
      </span>
    `).join("");
    const counts = statusCounts(event);
    opportunityCount.textContent =
      `${event.opportunities.length} 条路径 · ${counts.pending} 待验证 / ${counts.confirmed} 兑现 / ${counts.invalid} 失效`;
    setSaveState(
      lastStorageError || formatSavedAt(event.updatedAt),
      !lastStorageError
    );
    cardsRoot.innerHTML = event.opportunities.length
      ? event.opportunities.map(renderOpportunityCard).join("")
      : '<div class="opportunity-card-empty">这个事件还没有路径。用上方模板快速建立，也可以添加自由路径。</div>';
  };

  const renderAll = () => {
    renderHistory();
    renderVerificationQueue();
    renderEditor();
  };

  const renderPool = () => {
    const term = poolSearch.value.trim().toLowerCase();
    const filtered = limitUpPool.filter((stock) => {
      const matchesTerm =
        !term ||
        stock.name.toLowerCase().includes(term) ||
        String(stock.code || "").includes(term);
      const board = Number(stock.boardHeight) || 1;
      const matchesFilter =
        poolFilter === "all" ||
        (poolFilter === "first" && board === 1) ||
        (poolFilter === "second" && board >= 2) ||
        (poolFilter === "high" && board >= 3);
      return matchesTerm && matchesFilter;
    });

    poolList.innerHTML = filtered.length
      ? filtered.map((stock) => `
          <button class="opportunity-pool-stock ${selectedPool.has(stock.name) ? "is-selected" : ""}"
            type="button" data-pool-stock="${escaped(stock.name)}">
            <strong>${escaped(stock.name)}</strong>
            <span>
              <span>${escaped(stock.code || "")}</span>
              <em>${stock.boardHeight}板${stock.sectors?.[0] ? ` · ${escaped(stock.sectors[0])}` : ""}</em>
            </span>
          </button>
        `).join("")
      : '<p class="opportunity-pool-empty">没有符合条件的涨停股。</p>';
    renderPoolSelected();
  };

  const renderPoolSelected = () => {
    const chosen = [...selectedPool]
      .map((name) => poolByName.get(name))
      .filter(Boolean);
    poolSelectedCount.textContent = String(chosen.length);
    poolSelectedRoot.innerHTML = chosen
      .map((stock) => `<span>${escaped(stock.name)} · ${stock.boardHeight}板</span>`)
      .join("");
    createFromPoolButton.disabled = chosen.length === 0;
  };

  const openPool = () => {
    selectedPool.clear();
    poolSearch.value = "";
    poolFilter = "all";
    document.querySelectorAll("[data-pool-filter]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.poolFilter === "all");
    });
    poolPanel.hidden = false;
    renderPool();
    requestAnimationFrame(() => {
      poolPanel.scrollIntoView({ block: "start", behavior: "smooth" });
      poolSearch.focus();
    });
  };

  const closePool = () => {
    poolPanel.hidden = true;
  };

  const desiredPeers = (event) => {
    const selectedNames = new Set(event.selectedStocks.map((stock) => stock.name));
    const maxBoard = Math.max(...event.selectedStocks.map((stock) => stock.boardHeight), 1);
    return limitUpPool
      .filter(
        (stock) =>
          stock.boardHeight === maxBoard &&
          (selectedNames.has(stock.name) || stock.boardHeight >= 2)
      )
      .map((stock) => stock.name);
  };

  const desiredSectorTargets = (event) => {
    const targetSectors = new Set(event.selectedStocks.flatMap((stock) => stock.sectors || []));
    return limitUpPool
      .filter((stock) => (stock.sectors || []).some((sector) => targetSectors.has(sector)))
      .map((stock) => stock.name);
  };

  const templateOpportunity = (template, event) => {
    const selectedNames = event.selectedStocks.map((stock) => stock.name);
    const maxBoard = Math.max(...event.selectedStocks.map((stock) => stock.boardHeight), 1);
    const configs = {
      core: {
        name: "核心高度延续",
        targets: selectedNames.join("、"),
        logic: "",
        trigger: "",
        invalidation: ""
      },
      peer: {
        name: "同身位竞争",
        targets: desiredPeers(event).join("、"),
        logic: "",
        trigger: "",
        invalidation: ""
      },
      sector: {
        name: "板块扩散与补涨",
        targets: desiredSectorTargets(event).slice(0, 20).join("、"),
        logic: "",
        trigger: "",
        invalidation: ""
      },
      repair: {
        name: "分歧后的修复",
        targets: selectedNames.join("、"),
        logic: "",
        trigger: "",
        invalidation: ""
      },
      emotion: {
        name: "市场情绪传导",
        targets: `最高板 ${maxBoard} 板 / 同身位溢价 / 断板反馈`,
        logic: "",
        trigger: "",
        invalidation: ""
      },
      free: {
        name: "",
        targets: "",
        logic: "",
        trigger: "",
        invalidation: ""
      }
    };
    const config = configs[template] || configs.free;
    const now = new Date().toISOString();
    return normalizeOpportunity({
      id: uid("path"),
      template,
      ...config,
      status: "pending",
      createdAt: now,
      updatedAt: now
    });
  };

  const addPath = (template = "free") => {
    const event = selectedEvent();
    if (!event) return;
    const opportunity = templateOpportunity(template, event);
    event.opportunities.push(opportunity);
    expanded.add(opportunity.id);
    touchEvent(event);
    persist({ refreshList: false });
    renderHistory();
    renderEditor();
    requestAnimationFrame(() => {
      const card = [...cardsRoot.querySelectorAll("[data-opportunity-id]")]
        .find((item) => item.dataset.opportunityId === opportunity.id);
      card?.querySelector('[data-opportunity-field="name"]')?.focus();
      card?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  };

  const createEventFromPool = () => {
    const selectedStocks = [...selectedPool]
      .map((name) => poolByName.get(name))
      .filter(Boolean)
      .map((stock) => ({
        name: stock.name,
        code: stock.code || "",
        boardHeight: Number(stock.boardHeight) || 1,
        sectors: stock.sectors || []
      }));
    if (!selectedStocks.length) return;

    const timestamp = new Date().toISOString();
    const event = normalizeEvent({
      id: uid("event"),
      title: suggestTitle(selectedStocks),
      sourceDate: poolDate || shanghaiDate(),
      context: buildEventContext(selectedStocks),
      selectedStocks,
      opportunities: [],
      createdAt: timestamp,
      updatedAt: timestamp
    });
    const initialTemplate =
      selectedStocks.length > 1 &&
      new Set(selectedStocks.map((stock) => stock.boardHeight)).size === 1
        ? "peer"
        : "core";
    event.opportunities.push(templateOpportunity(initialTemplate, event));
    state.events.unshift(event);
    selectedId = event.id;
    expanded.clear();
    expanded.add(event.opportunities[0].id);
    persist({ refreshList: false, refreshQueue: false });
    closePool();
    renderAll();
  };

  const deleteOpportunity = (id) => {
    const event = selectedEvent();
    if (!event) return;
    const target = event.opportunities.find((item) => item.id === id);
    if (!target) return;
    if (!window.confirm(`删除路径“${target.name || "未命名路径"}”？其他路径不会受到影响。`)) {
      return;
    }
    event.opportunities = event.opportunities.filter((item) => item.id !== id);
    expanded.delete(id);
    touchEvent(event);
    persist({ refreshList: false });
    renderHistory();
    renderEditor();
  };

  const deleteEvent = () => {
    const event = selectedEvent();
    if (!event) return;
    if (!window.confirm(`删除事件“${event.title}”及其全部路径？`)) return;
    state.events = state.events.filter((item) => item.id !== event.id);
    selectedId = sortedEvents()[0]?.id || null;
    expanded.clear();
    persist({ refreshList: false });
    renderAll();
  };

  const updateOpportunityField = (card, field, value) => {
    const event = selectedEvent();
    if (!event || !field) return;
    const opportunity = event.opportunities.find(
      (item) => item.id === card?.dataset.opportunityId
    );
    if (!opportunity || !(field in opportunity)) return;
    opportunity[field] = value;
    opportunity.updatedAt = new Date().toISOString();
    touchEvent(event);
    if (field === "name") {
      card.querySelector(".opportunity-card-summary strong").textContent =
        value || "未命名路径";
    }
    if (field === "targets") {
      card.querySelector(".opportunity-card-summary span").textContent =
        value || "尚未填写观察对象";
    }
    scheduleSave();
  };

  const updateStatus = (id, status) => {
    const event = selectedEvent();
    if (!event) return;
    const opportunity = event.opportunities.find((item) => item.id === id);
    if (!opportunity) return;
    opportunity.status = status;
    opportunity.verifiedAt = new Date().toISOString();
    opportunity.updatedAt = opportunity.verifiedAt;
    touchEvent(event);
    persist({ refreshList: false });
    renderHistory();
    renderVerificationQueue();
    renderEditor();
  };

  const exportData = () => {
    const payload = {
      version: 2,
      exportedAt: new Date().toISOString(),
      events: state.events
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `pan-eye-opportunities-${shanghaiDate()}.json`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
    setSaveState("备份已导出", true);
  };

  const importData = async (file) => {
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      const incoming = Array.isArray(parsed.events) ? parsed.events : [];
      if (!incoming.length) throw new Error("文件中没有事件");
      if (!window.confirm(`导入 ${incoming.length} 个事件并替换当前记录？`)) return;
      state = { version: 2, events: incoming.map(normalizeEvent) };
      selectedId = sortedEvents()[0]?.id || null;
      expanded.clear();
      persist({ refreshList: false });
      renderAll();
      setSaveState("备份已导入", true);
    } catch (error) {
      setSaveState(
        `导入失败：${error instanceof Error ? error.message : "文件格式错误"}`,
        false
      );
    } finally {
      importInput.value = "";
    }
  };

  document.getElementById("opportunityNewEvent").addEventListener("click", openPool);
  document.getElementById("opportunityEmptyNew").addEventListener("click", openPool);
  document.getElementById("opportunityPoolClose").addEventListener("click", closePool);
  document.getElementById("opportunityCreateFromPool").addEventListener(
    "click",
    createEventFromPool
  );
  document.getElementById("opportunityAddCard").addEventListener("click", () =>
    addPath("free")
  );
  document.getElementById("opportunityDeleteEvent").addEventListener("click", deleteEvent);
  document.getElementById("opportunityExport").addEventListener("click", exportData);
  document.getElementById("opportunityImport").addEventListener("click", () => {
    importInput.click();
  });
  importInput.addEventListener("change", () => importData(importInput.files?.[0]));

  poolSearch.addEventListener("input", renderPool);
  document.querySelectorAll("[data-pool-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      poolFilter = button.dataset.poolFilter;
      document.querySelectorAll("[data-pool-filter]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      renderPool();
    });
  });
  poolList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-pool-stock]");
    if (!button) return;
    const name = button.dataset.poolStock;
    if (selectedPool.has(name)) selectedPool.delete(name);
    else selectedPool.add(name);
    renderPool();
  });

  eventList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-opportunity-event]");
    if (!button) return;
    selectedId = button.dataset.opportunityEvent;
    expanded.clear();
    localStorage.setItem(SELECTED_KEY, selectedId);
    renderAll();
  });

  verificationQueue.addEventListener("click", (event) => {
    const button = event.target.closest("[data-verification-event]");
    if (!button) return;
    selectedId = button.dataset.verificationEvent;
    const target = selectedEvent();
    expanded.clear();
    target?.opportunities
      .filter((item) => item.status === "pending")
      .forEach((item) => expanded.add(item.id));
    localStorage.setItem(SELECTED_KEY, selectedId);
    renderAll();
    editor.scrollIntoView({ block: "start", behavior: "smooth" });
  });

  document.getElementById("opportunityPathTemplates").addEventListener("click", (event) => {
    const button = event.target.closest("[data-path-template]");
    if (button) addPath(button.dataset.pathTemplate);
  });

  cardsRoot.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-opportunity-toggle]");
    if (toggle) {
      const id = toggle.dataset.opportunityToggle;
      if (expanded.has(id)) expanded.delete(id);
      else expanded.add(id);
      renderEditor();
      return;
    }
    const statusButton = event.target.closest("[data-opportunity-status]");
    if (statusButton) {
      const card = statusButton.closest("[data-opportunity-id]");
      updateStatus(card.dataset.opportunityId, statusButton.dataset.opportunityStatus);
      return;
    }
    const remove = event.target.closest("[data-opportunity-delete]");
    if (remove) deleteOpportunity(remove.dataset.opportunityDelete);
  });

  editor.addEventListener("input", (event) => {
    const opportunityField = event.target.closest("[data-opportunity-field]");
    if (!opportunityField) return;
    updateOpportunityField(
      opportunityField.closest("[data-opportunity-id]"),
      opportunityField.dataset.opportunityField,
      opportunityField.value
    );
  });

  editor.addEventListener("change", () => persist());
  window.addEventListener("beforeunload", () => {
    if (saveTimer) persist({ refreshList: false, refreshQueue: false });
  });

  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY) return;
    state = loadState();
    if (!state.events.some((item) => item.id === selectedId)) {
      selectedId = state.events[0]?.id || null;
    }
    renderAll();
  });

  document.getElementById("opportunityPoolDate").textContent =
    `${poolDate || "今日"} 涨停池 · 已抓取 ${limitUpPool.length} 只`;
  renderAll();

  const requestedView =
    new URLSearchParams(window.location.search).get("view") ||
    window.location.hash.replace(/^#/, "");
  if (requestedView === "opportunities") {
    requestAnimationFrame(() => {
      document.querySelector('[data-view="opportunities"]')?.click();
    });
  }
})();
