function uniq(arr) { return [...new Set(arr)].sort((a, b) => a.localeCompare(b)); }
function escapeHtml(s) {
  return String(s ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

const I18N = {
  en: {
    kicker: "Arduino UNO Q • Community Hub",
    hero_title: "UNO Q APPS STORE",
    hero_sub: "A professional, international app catalog for Arduino UNO Q with curated ZIP projects and real community builds.",
    theme_switch: "Switch theme",
    note_label: "Note:",
    official_note: "This website is an independent community project and is not affiliated with Arduino®.",
    about_title: "About this project",
    about_desc_1: "I build practical Arduino UNO Q resources: tutorials, community app collections, and real examples you can import and test fast.",
    about_desc_2: "Goal: make electronics easier, more professional, and fun for beginner and advanced makers.",
    send_app_now: "Send App",
    boost_title: "Quick launch",
    boost_sub: "Jump into what matters most",
    join_discord: "Join Our Discord",
    subscribe_channel: "Subscribe",
    submit_app: "Submit your app",
    guide_btn: "Guide",
    live_now: "Live now:",
    spotlight_title: "Today Spotlight",
    spotlight_loading: "Loading top project...",
    roadmap_title: "Direct roadmap",
    roadmap_1: "Weekly featured build by community votes.",
    roadmap_2: "Live stream coding sessions with project breakdown.",
    roadmap_3: "Premium templates for dashboards and IoT UIs.",
    channel_desc: "Arduino UNO Q tutorials from beginner to pro, hands-on electronics, and community apps.",
    go_channel: "Go to channel",
    repo_github: "GitHub Repo",
    stat_apps: "Apps",
    stat_downloads: "Downloads",
    stat_featured: "Featured",
    stat_favorites: "Favorites",
    search_ph: "Search (e.g. matrix, web, servo)...",
    random_app: "Random app",
    share_store: "Share store",
    clear_filters: "Reset filters",
    all_tags: "All tags",
    all_levels: "All levels",
    level_beginner: "Beginner",
    level_intermediate: "Intermediate",
    level_advanced: "Advanced",
    sort_new: "Newest",
    sort_trending: "Trending",
    sort_downloads: "Most downloaded",
    sort_name: "Name A–Z",
    featured_only: "Featured only",
    favorites_only: "Favorites only",
    compact_mode: "Compact mode",
    compare_title: "Compare tray",
    clear_compare: "Clear",
    section_title: "Available apps",
    result_count: "Showing {shown} of {total} apps",
    empty: "No apps found.",
    empty_hint: "Try removing filters or searching another keyword.",
    requires: "Components",
    tap_to_open: "Open details",
    copied: "Copied to clipboard",
    random_redirect: "Opening random app...",
    compare_added: "Added to compare",
    compare_removed: "Removed from compare",
    guide_title: "How UNO Q APPS STORE works",
    close: "Close",
    guide_step_1: "Use search and filters to discover projects fast.",
    guide_step_2: "Open cards to read specs and switch code preview languages.",
    guide_step_3: "Use compare tray, favorites and random for quick exploration.",
    guide_step_4: "Join Discord and share your project to get featured.",
    new_video: "NEW VIDEO",
    watch_now: "Watch now",
    channel: "Channel",
    days_ago: "days ago"
  },
  it: {
    kicker: "Arduino UNO Q • Hub Community",
    hero_title: "UNO Q APPS STORE",
    hero_sub: "Catalogo professionale e internazionale di app per Arduino UNO Q con ZIP curati e progetti reali della community.",
    theme_switch: "Cambia tema",
    note_label: "Nota:",
    official_note: "Questo sito è un progetto community indipendente e non è affiliato ad Arduino®.",
    about_title: "Chi sono e progetto",
    about_desc_1: "Creo risorse pratiche per Arduino UNO Q: tutorial, raccolte app community ed esempi reali da importare subito.",
    about_desc_2: "Obiettivo: rendere l'elettronica più facile, professionale e divertente per maker beginner e avanzati.",
    send_app_now: "Invia App",
    boost_title: "Avvio rapido",
    boost_sub: "Vai subito sulle azioni principali",
    join_discord: "Unisciti al nostro Discord",
    subscribe_channel: "Iscriviti",
    submit_app: "Invia la tua app",
    guide_btn: "Guida",
    live_now: "Live ora:",
    spotlight_title: "Progetto del giorno",
    spotlight_loading: "Caricamento progetto top...",
    roadmap_title: "Roadmap diretta",
    roadmap_1: "Build in evidenza settimanale scelta dalla community.",
    roadmap_2: "Live coding con spiegazione completa del progetto.",
    roadmap_3: "Template premium per dashboard e interfacce IoT.",
    channel_desc: "Tutorial Arduino UNO Q da beginner a pro, elettronica pratica e app community.",
    go_channel: "Vai al canale",
    repo_github: "Repo GitHub",
    stat_apps: "App",
    stat_downloads: "Download",
    stat_featured: "In evidenza",
    stat_favorites: "Preferite",
    search_ph: "Cerca (es. matrix, web, servo)...",
    random_app: "App casuale",
    share_store: "Condividi store",
    clear_filters: "Reset filtri",
    all_tags: "Tutti i tag",
    all_levels: "Tutti i livelli",
    level_beginner: "Principiante",
    level_intermediate: "Intermedio",
    level_advanced: "Avanzato",
    sort_new: "Più recenti",
    sort_trending: "Trending",
    sort_downloads: "Più scaricate",
    sort_name: "Nome A–Z",
    featured_only: "Solo in evidenza",
    favorites_only: "Solo preferite",
    compact_mode: "Modalità compatta",
    compare_title: "Area confronto",
    clear_compare: "Pulisci",
    section_title: "App disponibili",
    result_count: "Visualizzate {shown} app su {total}",
    empty: "Nessuna app trovata.",
    empty_hint: "Prova a rimuovere alcuni filtri o cercare un termine diverso.",
    requires: "Componenti",
    tap_to_open: "Apri dettagli",
    copied: "Copiato negli appunti",
    random_redirect: "Apertura app casuale...",
    compare_added: "Aggiunta al confronto",
    compare_removed: "Rimossa dal confronto",
    guide_title: "Come funziona UNO Q APPS STORE",
    close: "Chiudi",
    guide_step_1: "Usa ricerca e filtri per trovare rapidamente i progetti.",
    guide_step_2: "Apri le card per leggere specifiche e cambiare linguaggio preview.",
    guide_step_3: "Usa confronto, preferiti e random per esplorare velocemente.",
    guide_step_4: "Unisciti a Discord e condividi il tuo progetto per andare in evidenza.",
    new_video: "NUOVO VIDEO",
    watch_now: "Guarda ora",
    channel: "Canale",
    days_ago: "giorni fa"
  }
};

const VIDEO_CHANNEL_ID = "UCjXdbreXXKrvXyU1SvKOJqw";
const LATEST_VIDEO_FALLBACK = { title: "MatrixAnimation", url: "https://www.youtube.com/watch?v=jkG8Zr1GLo0", date: "2026-02-14", showForDays: 14 };
const QUICK_FILTERS = [
  { id: "all", label: { en: "All", it: "Tutte" }, apply: () => resetQuickFilters() },
  { id: "beginner", label: { en: "Beginner", it: "Principiante" }, apply: () => document.getElementById("level").value = "beginner" },
  { id: "web", label: { en: "Web", it: "Web" }, apply: () => document.getElementById("tag").value = "web" },
  { id: "matrix", label: { en: "Matrix", it: "Matrix" }, apply: () => document.getElementById("tag").value = "matrix" },
  { id: "new", label: { en: "New", it: "Nuove" }, apply: () => document.getElementById("sort").value = "new" }
];

const state = {
  lang: localStorage.getItem("unoq_lang") || "en",
  favorites: new Set(JSON.parse(localStorage.getItem("unoq_favorites") || "[]")),
  compare: new Set(JSON.parse(localStorage.getItem("unoq_compare") || "[]")),
  totalApps: 0,
  shownApps: 0,
  video: LATEST_VIDEO_FALLBACK
};

function tr(key) { return I18N[state.lang]?.[key] || I18N.en[key] || key; }
function localizeValue(value) { if (!value) return ""; if (typeof value === "string") return value; return value[state.lang] || value.en || Object.values(value)[0] || ""; }
function saveSet(key, set) { localStorage.setItem(key, JSON.stringify([...set])); }

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1600);
}

function applyI18nText() {
  document.documentElement.lang = state.lang;
  document.title = tr("hero_title");
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.setAttribute("placeholder", tr(el.dataset.i18nPlaceholder)); });
  const guideList = document.getElementById("guideList");
  if (guideList) {
    guideList.innerHTML = ["guide_step_1", "guide_step_2", "guide_step_3", "guide_step_4"].map((k) => `<li>${escapeHtml(tr(k))}</li>`).join("");
  }

  const enBtn = document.getElementById("langEN");
  const itBtn = document.getElementById("langIT");
  enBtn.setAttribute("aria-pressed", String(state.lang === "en"));
  itBtn.setAttribute("aria-pressed", String(state.lang === "it"));
  enBtn.classList.toggle("active", state.lang === "en");
  itBtn.classList.toggle("active", state.lang === "it");

  renderCompareBar(APPS);
}

function setupVideoPing(videoData) {
  const box = document.getElementById("videoPing");
  if (!box || !videoData?.url || !videoData?.date) return;
  const diffDays = Math.floor((new Date() - new Date(`${videoData.date}T00:00:00`)) / 86400000);
  if (diffDays < 0 || diffDays > Number(videoData.showForDays || 14)) return;
  box.innerHTML = `<div class="label"><div class="pulse">${tr("new_video")}</div><div class="tiny">${diffDays} ${tr("days_ago")}</div></div><p class="tiny">${escapeHtml(videoData.title)}</p><div class="hero-cta-row"><a class="btn primary" href="${videoData.url}" target="_blank" rel="noreferrer">${tr("watch_now")}</a><a class="btn" href="https://www.youtube.com/channel/${VIDEO_CHANNEL_ID}" target="_blank" rel="noreferrer">${tr("channel")}</a></div>`;
  box.hidden = false;
}

function updateStats(apps) {
  const totalDownloads = apps.reduce((sum, app) => sum + Number(app.downloads || 0), 0);
  const featuredCount = apps.filter((app) => app.featured).length;
  document.getElementById("statApps").textContent = String(apps.length);
  document.getElementById("statDownloads").textContent = totalDownloads.toLocaleString(state.lang === "it" ? "it-IT" : "en-US");
  document.getElementById("statFeatured").textContent = String(featuredCount);
  document.getElementById("statFavorites").textContent = String(state.favorites.size);
}

function updateSpotlight(apps) {
  const box = document.getElementById("spotlightPick");
  if (!box || !apps.length) return;
  const top = [...apps].sort((a, b) => Number(b.downloads || 0) - Number(a.downloads || 0))[0];
  box.textContent = `${top.title} · ${Number(top.downloads || 0).toLocaleString(state.lang === "it" ? "it-IT" : "en-US")}`;
}

function renderCompareBar(apps) {
  const bar = document.getElementById("compareBar");
  const out = document.getElementById("compareList");
  if (!bar || !out) return;
  const list = [...state.compare].map((id) => apps.find((a) => a.id === id)?.title).filter(Boolean);
  if (!list.length) {
    bar.hidden = true;
    out.textContent = "";
    return;
  }
  bar.hidden = false;
  out.textContent = list.join(" • ");
}

function render(apps) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  state.shownApps = apps.length;
  document.getElementById("resultCount").textContent = tr("result_count").replace("{shown}", state.shownApps).replace("{total}", state.totalApps);

  if (!apps.length) {
    grid.innerHTML = `<div class="empty-wrap"><p>${tr("empty")}</p><p class="tiny">${tr("empty_hint")}</p></div>`;
    return;
  }

  for (const a of apps) {
    const isFav = state.favorites.has(a.id);
    const isCmp = state.compare.has(a.id);
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.appId = a.id || "";
    const tags = (a.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    const req = localizeValue(a.requires) ? `${tr("requires")}: ${escapeHtml(localizeValue(a.requires))}` : "";
    card.innerHTML = `
      <button class="icon-btn compare-btn ${isCmp ? "active" : ""}" data-action="compare" data-id="${escapeHtml(a.id)}" aria-label="compare">⇄</button>
      <button class="icon-btn share-btn" data-action="share" data-id="${escapeHtml(a.id)}" aria-label="share">↗</button>
      <button class="icon-btn favorite-btn ${isFav ? "active" : ""}" data-action="favorite" data-id="${escapeHtml(a.id)}" aria-label="favorite">★</button>
      <div class="thumb">${a.preview ? `<img src="${escapeHtml(a.preview)}" alt="Preview ${escapeHtml(a.title)}" loading="lazy">` : ""}</div>
      <div class="content">
        <h3>${escapeHtml(a.title)}${a.new ? '<span class="new-mini">NEW</span>' : ""}</h3>
        <p class="meta">${escapeHtml(localizeValue(a.desc))}</p>
        <div class="tags">${tags}</div>
        ${req ? `<p class="meta">${req}</p>` : ""}
        <p class="tiny">${(a.date || "").replaceAll("-", "/")} · ${Number(a.downloads || 0).toLocaleString(state.lang === "it" ? "it-IT" : "en-US")}</p>
        <p class="tiny">${tr("tap_to_open")}</p>
      </div>`;
    grid.appendChild(card);
  }
}

function sortApps(apps, mode) {
  const byDate = (a) => new Date(a.date || "1970-01-01").getTime();
  return [...apps].sort((a, b) => {
    if (mode === "downloads") return Number(b.downloads || 0) - Number(a.downloads || 0);
    if (mode === "trending") {
      const scoreA = Number(a.downloads || 0) + (a.new ? 250 : 0) + (a.featured ? 300 : 0);
      const scoreB = Number(b.downloads || 0) + (b.new ? 250 : 0) + (b.featured ? 300 : 0);
      return scoreB - scoreA;
    }
    if (mode === "name") return a.title.localeCompare(b.title);
    return byDate(b) - byDate(a);
  });
}

function resetQuickFilters() {
  document.getElementById("tag").value = "";
  document.getElementById("level").value = "";
  document.getElementById("sort").value = "new";
}

function setupQuickFilters(applyFilters) {
  const container = document.getElementById("quickFilters");
  container.innerHTML = QUICK_FILTERS.map((f) => `<button type="button" class="quick-chip" data-chip="${f.id}">${f.label[state.lang]}</button>`).join("");
  container.querySelectorAll(".quick-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      QUICK_FILTERS.find((f) => f.id === btn.dataset.chip)?.apply();
      container.querySelectorAll(".quick-chip").forEach((n) => n.classList.remove("active"));
      btn.classList.add("active");
      applyFilters();
    });
  });
  container.querySelector('[data-chip="all"]')?.classList.add("active");
}

function setupFilters(allApps) {
  const q = document.getElementById("q");
  const tag = document.getElementById("tag");
  const level = document.getElementById("level");
  const sort = document.getElementById("sort");
  const featuredOnly = document.getElementById("featuredOnly");
  const favoritesOnly = document.getElementById("favoritesOnly");

  function buildTagOptions() {
    const current = tag.value;
    tag.innerHTML = `<option value="">${tr("all_tags")}</option>`;
    for (const t of uniq(allApps.flatMap((a) => a.tags || []))) {
      const opt = document.createElement("option"); opt.value = t; opt.textContent = t; tag.appendChild(opt);
    }
    tag.value = current;
  }

  function apply() {
    const query = q.value.trim().toLowerCase();
    const t = tag.value;
    const l = level.value;
    const filtered = allApps.filter((a) => {
      const hay = `${a.title} ${localizeValue(a.desc)} ${(a.tags || []).join(" ")} ${localizeValue(a.requires)}`.toLowerCase();
      return (!query || hay.includes(query)) && (!t || (a.tags || []).includes(t)) && (!l || (a.level || "") === l) && (!featuredOnly.checked || a.featured) && (!favoritesOnly.checked || state.favorites.has(a.id));
    });
    render(sortApps(filtered, sort.value));
    renderCompareBar(allApps);
  }

  [q, tag, level, sort, featuredOnly, favoritesOnly].forEach((n) => n.addEventListener(n === q ? "input" : "change", apply));
  buildTagOptions();
  setupQuickFilters(apply);
  return { apply, buildTagOptions };
}

function setupLanguage(onChange) {
  document.getElementById("langEN").addEventListener("click", () => { state.lang = "en"; localStorage.setItem("unoq_lang", state.lang); onChange(); });
  document.getElementById("langIT").addEventListener("click", () => { state.lang = "it"; localStorage.setItem("unoq_lang", state.lang); onChange(); });
}

function setupCardActions(apps, refresh) {
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-action]");
    if (btn) {
      e.preventDefault(); e.stopPropagation();
      const { action, id } = btn.dataset;
      const app = apps.find((a) => a.id === id);
      if (!app) return;

      if (action === "favorite") {
        state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
        saveSet("unoq_favorites", state.favorites); updateStats(apps); refresh(); return;
      }

      if (action === "compare") {
        if (state.compare.has(id)) { state.compare.delete(id); showToast(tr("compare_removed")); }
        else { if (state.compare.size >= 3) state.compare.delete([...state.compare][0]); state.compare.add(id); showToast(tr("compare_added")); }
        saveSet("unoq_compare", state.compare); refresh(); return;
      }

      if (action === "share") {
        const url = `${window.location.origin}${window.location.pathname}#app=${encodeURIComponent(id)}`;
        try {
          if (navigator.share) await navigator.share({ title: app.title, url });
          else { await navigator.clipboard.writeText(url); showToast(tr("copied")); }
        } catch {}
      }
      return;
    }

    if (e.target.closest("a") || e.target.closest("button")) return;
    const card = e.target.closest(".card");
    if (!card?.dataset.appId) return;
    window.location.href = `app.html?id=${encodeURIComponent(card.dataset.appId)}`;
  });
}

function setupGuideModal() {
  const modal = document.getElementById("guideModal");
  document.getElementById("openGuide")?.addEventListener("click", () => modal?.showModal());
  document.getElementById("closeGuide")?.addEventListener("click", () => modal?.close());
}

function setupQolButtons(apps, apply) {
  document.getElementById("clearFilters")?.addEventListener("click", () => {
    document.getElementById("q").value = "";
    document.getElementById("featuredOnly").checked = false;
    document.getElementById("favoritesOnly").checked = false;
    resetQuickFilters();
    apply();
  });

  document.getElementById("randomApp")?.addEventListener("click", () => {
    if (!apps.length) return;
    const pick = apps[Math.floor(Math.random() * apps.length)];
    showToast(tr("random_redirect"));
    setTimeout(() => { window.location.href = `app.html?id=${encodeURIComponent(pick.id)}`; }, 180);
  });

  document.getElementById("shareStore")?.addEventListener("click", async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: "UNO Q APPS STORE", url });
      else { await navigator.clipboard.writeText(url); showToast(tr("copied")); }
    } catch {}
  });

  document.getElementById("boostRandom")?.addEventListener("click", () => {
    document.getElementById("randomApp")?.click();
  });
  document.getElementById("boostGuide")?.addEventListener("click", () => {
    document.getElementById("openGuide")?.click();
  });

  document.getElementById("compareClear")?.addEventListener("click", () => {
    state.compare.clear(); saveSet("unoq_compare", state.compare); apply();
  });

  const compact = document.getElementById("compactMode");
  if (compact) compact.addEventListener("change", () => document.body.classList.toggle("compact", compact.checked));

  const theme = document.getElementById("themeSwitch");
  if (theme) theme.addEventListener("click", () => document.body.classList.toggle("theme-cobalt"));

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
      e.preventDefault(); document.getElementById("q")?.focus();
    }
  });

  const backTop = document.getElementById("backToTop");
  if (backTop) {
    const onScroll = () => backTop.classList.toggle("show", window.scrollY > 280);
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
}

function setupLiveTicker(apps) {
  const out = document.getElementById("liveTickerText");
  if (!out || !apps.length) return;
  let i = 0;
  const top = [...apps].sort((a, b) => Number(b.downloads || 0) - Number(a.downloads || 0)).slice(0, 5);
  const tick = () => {
    const app = top[i % top.length];
    out.textContent = `${app.title} • ${Number(app.downloads || 0).toLocaleString(state.lang === "it" ? "it-IT" : "en-US")} downloads`;
    i += 1;
  };
  tick();
  clearInterval(setupLiveTicker.timer);
  setupLiveTicker.timer = setInterval(tick, 2200);
}

function init() {
  if (typeof APPS === "undefined") return;
  state.totalApps = APPS.length;
  const filters = setupFilters(APPS);

  const refresh = () => {
    applyI18nText();
    setupVideoPing(state.video);
    filters.buildTagOptions();
    filters.apply();
    updateStats(APPS);
    updateSpotlight(APPS);
    setupQuickFilters(filters.apply);
    setupLiveTicker(APPS);
  };

  setupLanguage(refresh);
  setupGuideModal();
  setupQolButtons(APPS, filters.apply);
  setupCardActions(APPS, filters.apply);

  refresh();
}

init();
