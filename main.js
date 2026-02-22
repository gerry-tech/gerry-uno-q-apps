function uniq(arr) {
  return [...new Set(arr)].sort((a, b) => a.localeCompare(b));
}

function escapeHtml(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const I18N = {
  en: {
    kicker: "Arduino UNO Q • Community Hub",
    hero_title: "UNO Q APPS STORE",
    hero_sub: "A professional, international app catalog for Arduino UNO Q with curated ZIP projects and real community builds.",
    join_discord: "Join Our Discord",
    pill_zip: "Ready ZIPs",
    pill_web: "Web UI",
    pill_matrix: "Matrix",
    pill_servo: "Servo",
    note_label: "Note:",
    note_text: "Independent project, not affiliated with Arduino.",
    channel_desc: "Arduino UNO Q tutorials from beginner to pro, hands-on electronics, and community apps.",
    go_channel: "Go to channel",
    repo_github: "GitHub Repo",
    stat_apps: "Apps",
    stat_downloads: "Downloads",
    stat_featured: "Featured",
    stat_favorites: "Favorites",
    search_ph: "Search (e.g. matrix, web, servo)...",
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
    section_title: "Available apps",
    updated_recently: "Recently updated",
    footer_send_app: "Want to submit an app? Open an Issue on the repo with description + ZIP attached.",
    footer_disclaimer: "Arduino® is a registered trademark. This website is independent and not affiliated with Arduino.",
    empty: "No apps found.",
    empty_hint: "Try removing filters or searching another keyword.",
    requires: "Components",
    demo: "Demo",
    download_zip: "Download ZIP",
    copy_link: "Copy link",
    copied: "Link copied to clipboard",
    new_video: "NEW VIDEO",
    watch_now: "Watch now",
    channel: "Channel",
    days_ago: "days ago",
    result_count: "Showing {shown} of {total} apps",
    quick_all: "All",
    quick_beginner: "Beginner",
    quick_intermediate: "Intermediate",
    quick_web: "Web",
    quick_matrix: "Matrix",
    quick_new: "New",
    submit_app: "Submit your app",
    submit_app_now: "Send app now"
  },
  it: {
    kicker: "Arduino UNO Q • Hub Community",
    hero_title: "UNO Q APPS STORE",
    hero_sub: "Catalogo professionale e internazionale di app per Arduino UNO Q, con ZIP curati e progetti reali della community.",
    join_discord: "Unisciti al nostro Discord",
    pill_zip: "ZIP pronti",
    pill_web: "Web UI",
    pill_matrix: "Matrix",
    pill_servo: "Servo",
    note_label: "Nota:",
    note_text: "Progetto indipendente, non affiliato ad Arduino.",
    channel_desc: "Tutorial Arduino UNO Q da beginner a pro, elettronica pratica e app community.",
    go_channel: "Vai al canale",
    repo_github: "Repo GitHub",
    stat_apps: "App",
    stat_downloads: "Download",
    stat_featured: "In evidenza",
    stat_favorites: "Preferite",
    search_ph: "Cerca (es. matrix, web, servo)...",
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
    section_title: "App disponibili",
    updated_recently: "Aggiornate di recente",
    footer_send_app: "Vuoi pubblicare una app? Apri una Issue sul repo con descrizione + ZIP allegato.",
    footer_disclaimer: "Arduino® è un marchio registrato. Questo sito è indipendente e non affiliato ad Arduino.",
    empty: "Nessuna app trovata.",
    empty_hint: "Prova a rimuovere alcuni filtri o cercare un termine diverso.",
    requires: "Componenti",
    demo: "Demo",
    download_zip: "Scarica ZIP",
    copy_link: "Copia link",
    copied: "Link copiato negli appunti",
    new_video: "NUOVO VIDEO",
    watch_now: "Guarda ora",
    channel: "Canale",
    days_ago: "giorni fa",
    result_count: "Visualizzate {shown} app su {total}",
    quick_all: "Tutte",
    quick_beginner: "Principiante",
    quick_intermediate: "Intermedio",
    quick_web: "Web",
    quick_matrix: "Matrix",
    quick_new: "Nuove",
    submit_app: "Invia la tua app",
    submit_app_now: "Invia app ora"
  }
};

const LATEST_VIDEO = {
  title: "RGB LED Controlled by 3 Potentiometers",
  url: "https://www.youtube.com/watch?v=RBAsdje4Yrw",
  date: "2026-02-22",
  showForDays: 7
};

const QUICK_FILTERS = [
  { id: "all", label: "quick_all", apply: () => resetQuickFilters() },
  { id: "beginner", label: "quick_beginner", apply: () => document.getElementById("level").value = "beginner" },
  { id: "intermediate", label: "quick_intermediate", apply: () => document.getElementById("level").value = "intermediate" },
  { id: "web", label: "quick_web", apply: () => document.getElementById("tag").value = "web" },
  { id: "matrix", label: "quick_matrix", apply: () => document.getElementById("tag").value = "matrix" },
  { id: "new", label: "quick_new", apply: () => document.getElementById("sort").value = "new" }
];

const state = {
  lang: localStorage.getItem("unoq_lang") || "en",
  totalApps: 0,
  shownApps: 0,
  favorites: new Set(JSON.parse(localStorage.getItem("unoq_favorites") || "[]"))
};

function tr(key) {
  return I18N[state.lang]?.[key] || I18N.en[key] || key;
}

function localizeValue(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[state.lang] || value.en || Object.values(value)[0] || "";
}

function saveFavorites() {
  localStorage.setItem("unoq_favorites", JSON.stringify([...state.favorites]));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1700);
}

function applyI18nText() {
  document.documentElement.lang = state.lang;
  document.title = tr("hero_title");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = tr(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", tr(el.dataset.i18nPlaceholder));
  });

  const enBtn = document.getElementById("langEN");
  const itBtn = document.getElementById("langIT");
  enBtn.setAttribute("aria-pressed", String(state.lang === "en"));
  itBtn.setAttribute("aria-pressed", String(state.lang === "it"));
  enBtn.classList.toggle("active", state.lang === "en");
  itBtn.classList.toggle("active", state.lang === "it");
}

function setupVideoPing() {
  const box = document.getElementById("videoPing");
  if (!box || !LATEST_VIDEO?.url || !LATEST_VIDEO?.date) return;

  const today = new Date();
  const videoDate = new Date(`${LATEST_VIDEO.date}T00:00:00`);
  if (Number.isNaN(videoDate.getTime())) return;

  const diffDays = Math.floor((today - videoDate) / (1000 * 60 * 60 * 24));
  const showFor = Number(LATEST_VIDEO.showForDays ?? 3);
  if (diffDays < 0 || diffDays > showFor) return;

  box.innerHTML = `
    <div class="label">
      <div class="pulse">${tr("new_video")}</div>
      <div class="tiny">${diffDays} ${tr("days_ago")}</div>
    </div>
    <p class="video-title">${escapeHtml(LATEST_VIDEO.title)}</p>
    <div class="video-actions">
      <a class="btn primary" href="${LATEST_VIDEO.url}" target="_blank" rel="noreferrer">${tr("watch_now")}</a>
      <a class="btn" href="https://www.youtube.com/channel/UCjXdbreXXKrvXyU1SvKOJqw" target="_blank" rel="noreferrer">${tr("channel")}</a>
    </div>
  `;
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

function render(apps) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  state.shownApps = apps.length;
  document.getElementById("resultCount").textContent = tr("result_count")
    .replace("{shown}", String(state.shownApps))
    .replace("{total}", String(state.totalApps));

  if (!apps.length) {
    grid.innerHTML = `<div class="empty-wrap"><p class="empty">${tr("empty")}</p><p class="tiny">${tr("empty_hint")}</p></div>`;
    return;
  }

  for (const a of apps) {
    const isFav = state.favorites.has(a.id);
    const el = document.createElement("article");
    el.className = "card";
    el.dataset.zip = a.zip || "";

    const badge = a.badge ? `<div class="badge">${escapeHtml(a.badge)}</div>` : "";
    const tags = (a.tags || []).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    const req = localizeValue(a.requires) ? `${tr("requires")}: ${escapeHtml(localizeValue(a.requires))}` : "";
    const thumb = a.preview
      ? `<img src="${escapeHtml(a.preview)}" alt="Preview ${escapeHtml(a.title)}" loading="lazy">`
      : `<span>${escapeHtml(a.thumbText || "Preview")}</span>`;

    el.innerHTML = `
      ${badge}
      <button class="icon-btn favorite-btn ${isFav ? "active" : ""}" data-action="favorite" data-id="${escapeHtml(a.id)}" aria-label="favorite">★</button>
      <button class="icon-btn share-btn" data-action="share" data-id="${escapeHtml(a.id)}" aria-label="share">↗</button>
      <div class="thumb">${thumb}</div>
      <div class="content">
        <h3 title="${escapeHtml(a.title)}">${escapeHtml(a.title)}${a.new ? '<span class="new-mini">NEW</span>' : ""}</h3>
        <p class="meta">${escapeHtml(localizeValue(a.desc))}</p>
        <div class="tags">${tags}</div>
        ${req ? `<p class="meta">${req}</p>` : ""}
        <div class="meta-row tiny">${(a.date || "").replaceAll("-", "/")} · ${Number(a.downloads || 0).toLocaleString(state.lang === "it" ? "it-IT" : "en-US")}</div>
        <div class="btns">
          ${a.zip ? `<a class="btn primary" href="${escapeHtml(a.zip)}" target="_blank" rel="noreferrer">${tr("download_zip")}</a>` : ""}
          ${a.demo ? `<a class="btn" href="${escapeHtml(a.demo)}" target="_blank" rel="noreferrer">${tr("demo")}</a>` : ""}
          <button class="btn copy-btn" data-action="copy" data-id="${escapeHtml(a.id)}">${tr("copy_link")}</button>
        </div>
      </div>
    `;

    grid.appendChild(el);
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
  container.innerHTML = QUICK_FILTERS.map((f) => `
    <button type="button" class="quick-chip" data-chip="${f.id}">${tr(f.label)}</button>
  `).join("");

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

    const allTags = uniq(allApps.flatMap((a) => a.tags || []));
    for (const t of allTags) {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      tag.appendChild(opt);
    }
    tag.value = current;
  }

  function apply() {
    const query = q.value.trim().toLowerCase();
    const t = tag.value;
    const l = level.value;

    const filtered = allApps.filter((a) => {
      const hay = `${a.title} ${localizeValue(a.desc)} ${(a.tags || []).join(" ")} ${localizeValue(a.requires)}`.toLowerCase();
      const okQ = !query || hay.includes(query);
      const okT = !t || (a.tags || []).includes(t);
      const okL = !l || (a.level || "") === l;
      const okF = !featuredOnly.checked || Boolean(a.featured);
      const okFav = !favoritesOnly.checked || state.favorites.has(a.id);
      return okQ && okT && okL && okF && okFav;
    });

    render(sortApps(filtered, sort.value));
  }

  buildTagOptions();
  [q, tag, level, sort, featuredOnly, favoritesOnly].forEach((node) => {
    node.addEventListener(node === q ? "input" : "change", apply);
  });

  setupQuickFilters(apply);

  return { apply, buildTagOptions };
}

function setupLanguage(onChange) {
  document.getElementById("langEN").addEventListener("click", () => {
    state.lang = "en";
    localStorage.setItem("unoq_lang", state.lang);
    onChange();
  });

  document.getElementById("langIT").addEventListener("click", () => {
    state.lang = "it";
    localStorage.setItem("unoq_lang", state.lang);
    onChange();
  });
}

function appUrlForId(id) {
  return `${window.location.origin}${window.location.pathname}#app=${encodeURIComponent(id)}`;
}

function setupCardActions(apps, refresh) {
  document.addEventListener("click", async (e) => {
    const actionBtn = e.target.closest("[data-action]");
    if (actionBtn) {
      e.preventDefault();
      e.stopPropagation();
      const action = actionBtn.dataset.action;
      const id = actionBtn.dataset.id;
      const app = apps.find((a) => a.id === id);
      if (!app) return;

      if (action === "favorite") {
        if (state.favorites.has(id)) state.favorites.delete(id);
        else state.favorites.add(id);
        saveFavorites();
        updateStats(apps);
        refresh();
        return;
      }

      const url = appUrlForId(id);
      if (action === "copy" || action === "share") {
        try {
          if (navigator.share && action === "share") {
            await navigator.share({ title: app.title, url });
          } else {
            await navigator.clipboard.writeText(url);
            showToast(tr("copied"));
          }
        } catch {
          // No-op: user cancelled share dialog or clipboard blocked
        }
      }
      return;
    }

    if (e.target.closest("a")) return;
    const card = e.target.closest(".card");
    if (!card) return;

    const zip = card.dataset.zip;
    if (!zip) return;
    window.open(new URL(zip, window.location.href).href, "_blank", "noopener");
  });
}

function focusHashApp(apps) {
  const hash = window.location.hash;
  const match = hash.match(/app=([^&]+)/);
  if (!match) return;
  const id = decodeURIComponent(match[1]);
  const app = apps.find((a) => a.id === id);
  if (!app) return;
  const q = document.getElementById("q");
  q.value = app.title;
}

function init() {
  if (typeof APPS === "undefined") {
    console.error("APPS is undefined: check apps/apps.js import path.");
    return;
  }

  state.totalApps = APPS.length;
  const filters = setupFilters(APPS);
  const refresh = () => {
    applyI18nText();
    setupVideoPing();
    filters.buildTagOptions();
    filters.apply();
    updateStats(APPS);
    setupQuickFilters(filters.apply);
  };

  setupLanguage(refresh);
  setupCardActions(APPS, filters.apply);

  focusHashApp(APPS);
  refresh();
}

init();
