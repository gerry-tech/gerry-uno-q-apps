function esc(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getAppId() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || "";
}

function localize(v) {
  if (!v) return "";
  if (typeof v === "string") return v;
  return v.en || Object.values(v)[0] || "";
}

function slot(label, value) {
  return `<div class="info-slot"><span class="tiny">${esc(label)}</span><strong>${esc(value || "—")}</strong></div>`;
}

function renderCodePreview(app) {
  const cpp = app.codePreviewCpp || "// C++ preview not available";
  const py = app.codePreviewPy || "# Python preview not available";

  return `
    <section class="code-panel">
      <div class="code-head-row">
        <div class="code-head">Code Preview</div>
        <div class="lang-switch">
          <button class="lang-code-btn active" data-code-lang="cpp" type="button">C++</button>
          <button class="lang-code-btn" data-code-lang="py" type="button">Python</button>
        </div>
      </div>
      <pre><code id="codePreviewBox">${esc(cpp)}</code></pre>
    </section>
  `;
}

function wireCodeSwitch(app) {
  const codeBox = document.getElementById("codePreviewBox");
  if (!codeBox) return;

  document.querySelectorAll(".lang-code-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.codeLang;
      const code = lang === "py" ? (app.codePreviewPy || "# Python preview not available") : (app.codePreviewCpp || "// C++ preview not available");
      codeBox.textContent = code;
      document.querySelectorAll(".lang-code-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

function renderApp(app) {
  const root = document.getElementById("appDetail");
  if (!app) {
    root.innerHTML = `<div class="empty-wrap"><p class="empty">App not found.</p></div>`;
    return;
  }

  const tags = (app.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
  const desc = localize(app.desc);
  const requires = localize(app.requires);

  root.innerHTML = `
    <header class="app-main-head">
      <div class="thumb app-hero-thumb">${app.preview ? `<img src="${esc(app.preview)}" alt="${esc(app.title)}">` : ""}</div>
      <h1>${esc(app.title)}</h1>
      <p class="meta">${esc(desc)}</p>
      <div class="tags">${tags}</div>
    </header>

    <section class="app-actions-vertical">
      ${app.zip ? `<a class="btn primary" href="${esc(app.zip)}" target="_blank" rel="noreferrer">Download ZIP</a>` : ""}
      ${app.demo ? `<a class="btn" href="${esc(app.demo)}" target="_blank" rel="noreferrer">Watch demo</a>` : ""}
      <a class="btn" href="index.html#app=${encodeURIComponent(app.id)}">Open in store</a>
    </section>

    <section class="info-slots-grid">
      ${slot("Components", requires)}
      ${slot("Estimated build", app.estTime)}
      ${slot("Complexity", app.complexity)}
      ${slot("Pins / IO", app.pins)}
      ${slot("Release date", (app.date || "").replaceAll("-", "/"))}
      ${slot("Downloads", Number(app.downloads || 0).toLocaleString("en-US"))}
    </section>

    ${renderCodePreview(app)}
  `;

  wireCodeSwitch(app);
}

function renderRelated(current) {
  const grid = document.getElementById("relatedGrid");
  const related = APPS.filter((a) => a.id !== current.id)
    .filter((a) => (a.tags || []).some((tag) => (current.tags || []).includes(tag)))
    .slice(0, 3);

  if (!related.length) {
    grid.innerHTML = `<div class="empty-wrap"><p class="empty">No related apps yet.</p></div>`;
    return;
  }

  grid.innerHTML = related.map((a) => `
    <article class="card related-card" data-app-id="${esc(a.id)}">
      <div class="thumb">${a.preview ? `<img src="${esc(a.preview)}" alt="${esc(a.title)}">` : ""}</div>
      <div class="content">
        <h3>${esc(a.title)}</h3>
        <p class="meta">${esc(localize(a.desc))}</p>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".related-card").forEach((el) => {
    el.addEventListener("click", () => {
      window.location.href = `app.html?id=${encodeURIComponent(el.dataset.appId)}`;
    });
  });
}

function init() {
  const id = getAppId();
  const app = APPS.find((a) => a.id === id);
  renderApp(app);
  if (app) renderRelated(app);
}

init();
