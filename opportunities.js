(() => {
  const STORAGE_KEY = "pan-eye-opportunities-v1";
  const SELECTED_KEY = "pan-eye-opportunities-selected-v1";
  const root = document.getElementById("view-opportunities");
  if (!root) return;

  const eventList = document.getElementById("opportunityEventList");
  const emptyState = document.getElementById("opportunityEmpty");
  const editor = document.getElementById("opportunityEditor");
  const eventTitleHeading = document.getElementById("opportunityEventHeading");
  const saveState = document.getElementById("opportunitySaveState");
  const opportunityCount = document.getElementById("opportunityCount");
  const cardsRoot = document.getElementById("opportunityCards");
  const importInput = document.getElementById("opportunityImportInput");

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

  const normalizeOpportunity = (item = {}) => ({
    id: item.id || uid("opportunity"),
    name: String(item.name || ""),
    logic: String(item.logic || ""),
    targets: String(item.targets || ""),
    trigger: String(item.trigger || ""),
    invalidation: String(item.invalidation || ""),
    notes: String(item.notes || ""),
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt || item.createdAt || new Date().toISOString()
  });

  const normalizeEvent = (item = {}) => ({
    id: item.id || uid("event"),
    title: String(item.title || ""),
    date: String(item.date || shanghaiDate()).slice(0, 10),
    background: String(item.background || ""),
    stocks: Array.isArray(item.stocks) ? item.stocks.join("、") : String(item.stocks || ""),
    sectors: Array.isArray(item.sectors) ? item.sectors.join("、") : String(item.sectors || ""),
    opportunities: Array.isArray(item.opportunities)
      ? item.opportunities.map(normalizeOpportunity)
      : [],
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt || item.createdAt || new Date().toISOString()
  });

  const loadState = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        version: 1,
        events: Array.isArray(parsed.events) ? parsed.events.map(normalizeEvent) : []
      };
    } catch {
      return { version: 1, events: [] };
    }
  };

  let state = loadState();
  let selectedId = localStorage.getItem(SELECTED_KEY);
  const expanded = new Set();
  let saveTimer = null;
  let lastStorageError = "";

  if (!state.events.some((event) => event.id === selectedId)) {
    selectedId = state.events[0]?.id || null;
  }

  const selectedEvent = () =>
    state.events.find((event) => event.id === selectedId) || null;

  const setSaveState = (message, saved = false) => {
    saveState.textContent = message;
    saveState.classList.toggle("is-saved", saved);
  };

  const persist = ({ refreshList = true } = {}) => {
    window.clearTimeout(saveTimer);
    saveTimer = null;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      if (selectedId) localStorage.setItem(SELECTED_KEY, selectedId);
      else localStorage.removeItem(SELECTED_KEY);
      lastStorageError = "";
      const now = state.events.find((event) => event.id === selectedId)?.updatedAt;
      setSaveState(formatSavedAt(now), true);
    } catch {
      lastStorageError = "浏览器存储不可用，请先导出备份";
      setSaveState(lastStorageError, false);
    }
    if (refreshList) renderHistory();
  };

  const scheduleSave = () => {
    setSaveState("正在保存…", false);
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(() => persist(), 260);
  };

  const touchEvent = (event) => {
    event.updatedAt = new Date().toISOString();
  };

  const sortedEvents = () =>
    [...state.events].sort((a, b) => {
      const byDate = b.date.localeCompare(a.date);
      return byDate || b.updatedAt.localeCompare(a.updatedAt);
    });

  const renderHistory = () => {
    const events = sortedEvents();
    if (!events.length) {
      eventList.innerHTML = '<p class="opportunity-event-empty">还没有推演事件。<br>从一次晋级竞争、断板或板块异动开始记录。</p>';
      return;
    }

    eventList.innerHTML = events.map((event) => `
      <button class="opportunity-event-item ${event.id === selectedId ? "is-active" : ""}"
        type="button" data-opportunity-event="${escaped(event.id)}">
        <span class="opportunity-event-item-top">
          <span>${escaped(event.date)}</span>
          <em>${event.opportunities.length} 个方向</em>
        </span>
        <strong>${escaped(event.title || "未命名事件")}</strong>
        <p>${escaped(event.background || "尚无事件背景")}</p>
      </button>
    `).join("");
  };

  const fieldValue = (name, value) => `value="${escaped(value || "")}"`;
  const textValue = (text) => escaped(text || "");

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
              <strong>${escaped(opportunity.name || "未命名机会")}</strong>
              <span>${escaped(opportunity.targets || "尚未填写观察对象")}</span>
            </span>
            <span class="opportunity-card-chevron" aria-hidden="true">⌄</span>
          </button>
          <button class="opportunity-delete-card" type="button"
            data-opportunity-delete="${escaped(opportunity.id)}"
            aria-label="删除这条机会">×</button>
        </header>
        <div class="opportunity-card-body" ${isExpanded ? "" : "hidden"}>
          <div class="opportunity-fields">
            <label class="opportunity-field">
              <span>机会名称</span>
              <input type="text" data-opportunity-field="name"
                ${fieldValue("name", opportunity.name)}
                placeholder="例如：观察晋级票的高度延续">
            </label>
            <label class="opportunity-field">
              <span>推演逻辑</span>
              <textarea rows="4" data-opportunity-field="logic"
                placeholder="为什么这个市场事件可能产生这种机会？">${textValue(opportunity.logic)}</textarea>
            </label>
            <label class="opportunity-field">
              <span>观察对象</span>
              <textarea rows="2" data-opportunity-field="targets"
                placeholder="股票、板块、同身位竞争者或市场指标">${textValue(opportunity.targets)}</textarea>
            </label>
            <div class="opportunity-condition-grid">
              <label class="opportunity-field">
                <span>成立条件</span>
                <textarea rows="3" data-opportunity-field="trigger"
                  placeholder="出现什么盘面现象，说明逻辑正在兑现？">${textValue(opportunity.trigger)}</textarea>
              </label>
              <label class="opportunity-field">
                <span>失效条件</span>
                <textarea rows="3" data-opportunity-field="invalidation"
                  placeholder="出现什么现象，说明原逻辑不再成立？">${textValue(opportunity.invalidation)}</textarea>
              </label>
            </div>
            <label class="opportunity-field">
              <span>补充思考</span>
              <textarea rows="3" data-opportunity-field="notes"
                placeholder="后续盘面观察、竞价表现或需要验证的细节">${textValue(opportunity.notes)}</textarea>
            </label>
          </div>
        </div>
      </article>
    `;
  };

  const renderEditor = () => {
    const event = selectedEvent();
    emptyState.hidden = Boolean(event);
    editor.hidden = !event;
    if (!event) return;

    eventTitleHeading.textContent = event.title || "未命名事件";
    document.getElementById("opportunityEventTitle").value = event.title;
    document.getElementById("opportunityEventDate").value = event.date;
    document.getElementById("opportunityEventBackground").value = event.background;
    document.getElementById("opportunityEventStocks").value = event.stocks;
    document.getElementById("opportunityEventSectors").value = event.sectors;
    opportunityCount.textContent = `${event.opportunities.length} 个机会方向`;
    setSaveState(
      lastStorageError || formatSavedAt(event.updatedAt),
      !lastStorageError
    );

    cardsRoot.innerHTML = event.opportunities.length
      ? event.opportunities.map(renderOpportunityCard).join("")
      : '<div class="opportunity-card-empty">这个事件还没有机会方向。点击“新增机会”，从一个观察角度开始推演。</div>';
  };

  const renderAll = () => {
    renderHistory();
    renderEditor();
  };

  const createEvent = () => {
    const timestamp = new Date().toISOString();
    const event = normalizeEvent({
      id: uid("event"),
      title: "",
      date: shanghaiDate(),
      background: "",
      stocks: "",
      sectors: "",
      opportunities: [],
      createdAt: timestamp,
      updatedAt: timestamp
    });
    state.events.unshift(event);
    selectedId = event.id;
    expanded.clear();
    persist({ refreshList: false });
    renderAll();
    requestAnimationFrame(() => {
      document.getElementById("opportunityEventTitle").focus();
    });
  };

  const addOpportunity = () => {
    const event = selectedEvent();
    if (!event) return;
    const timestamp = new Date().toISOString();
    const opportunity = normalizeOpportunity({
      id: uid("opportunity"),
      createdAt: timestamp,
      updatedAt: timestamp
    });
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

  const deleteOpportunity = (id) => {
    const event = selectedEvent();
    if (!event) return;
    const target = event.opportunities.find((item) => item.id === id);
    if (!target) return;
    const confirmed = window.confirm(
      `删除“${target.name || "未命名机会"}”？同一事件下的其他机会不会受到影响。`
    );
    if (!confirmed) return;
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
    if (!window.confirm(`删除事件“${event.title || "未命名事件"}”及其全部机会推演？`)) {
      return;
    }
    state.events = state.events.filter((item) => item.id !== event.id);
    selectedId = sortedEvents()[0]?.id || null;
    expanded.clear();
    persist({ refreshList: false });
    renderAll();
  };

  const updateEventField = (field, value) => {
    const event = selectedEvent();
    if (!event || !(field in event)) return;
    event[field] = value;
    touchEvent(event);
    if (field === "title") eventTitleHeading.textContent = value || "未命名事件";
    scheduleSave();
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
        value || "未命名机会";
    }
    if (field === "targets") {
      card.querySelector(".opportunity-card-summary span").textContent =
        value || "尚未填写观察对象";
    }
    scheduleSave();
  };

  const exportData = () => {
    const payload = {
      version: 1,
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
      state = { version: 1, events: incoming.map(normalizeEvent) };
      selectedId = sortedEvents()[0]?.id || null;
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

  document.getElementById("opportunityNewEvent").addEventListener("click", createEvent);
  document.getElementById("opportunityEmptyNew").addEventListener("click", createEvent);
  document.getElementById("opportunityAddCard").addEventListener("click", addOpportunity);
  document.getElementById("opportunityDeleteEvent").addEventListener("click", deleteEvent);
  document.getElementById("opportunityExport").addEventListener("click", exportData);
  document.getElementById("opportunityImport").addEventListener("click", () => {
    importInput.click();
  });
  importInput.addEventListener("change", () => importData(importInput.files?.[0]));

  eventList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-opportunity-event]");
    if (!button) return;
    selectedId = button.dataset.opportunityEvent;
    expanded.clear();
    localStorage.setItem(SELECTED_KEY, selectedId);
    renderAll();
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
    const remove = event.target.closest("[data-opportunity-delete]");
    if (remove) deleteOpportunity(remove.dataset.opportunityDelete);
  });

  editor.addEventListener("input", (event) => {
    const eventField = event.target.closest("[data-event-field]");
    if (eventField) {
      updateEventField(eventField.dataset.eventField, eventField.value);
      return;
    }
    const opportunityField = event.target.closest("[data-opportunity-field]");
    if (opportunityField) {
      updateOpportunityField(
        opportunityField.closest("[data-opportunity-id]"),
        opportunityField.dataset.opportunityField,
        opportunityField.value
      );
    }
  });

  editor.addEventListener("change", () => persist());
  window.addEventListener("beforeunload", () => {
    if (saveTimer) persist({ refreshList: false });
  });

  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY) return;
    state = loadState();
    if (!state.events.some((item) => item.id === selectedId)) {
      selectedId = state.events[0]?.id || null;
    }
    renderAll();
  });

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
