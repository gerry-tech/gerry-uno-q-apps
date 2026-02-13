function uniq(arr) { return [...new Set(arr)].sort((a,b)=>a.localeCompare(b)); }

function render(apps) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  if (!apps.length) {
    grid.innerHTML = `<p>Nessuna app trovata.</p>`;
    return;
  }

  for (const a of apps) {
    const el = document.createElement("div");
    el.className = "card";

    const tags = (a.tags || []).map(t => `<span class="tag">${t}</span>`).join("");
    const req = a.requires ? `Componenti: ${a.requires}` : "";

    el.innerHTML = `
      <div class="thumb">
  ${a.preview
    ? `<img src="${a.preview}" alt="Preview ${a.title}" loading="lazy">`
    : `<span>${a.thumbText || "Preview"}</span>`
  }
</div>
      <div class="content">
        <h3>${a.title}</h3>
        <p class="meta">${a.desc || ""}</p>
        <div class="tags">${tags}</div>
        <p class="meta">${req}</p>
        <div class="btns">
          <a class="btn primary" href="${a.zip}" target="_blank" rel="noreferrer">Download ZIP</a>
          ${a.demo ? `<a class="btn" href="${a.demo}" target="_blank" rel="noreferrer">Demo</a>` : ""}
        </div>
      </div>
    `;
    grid.appendChild(el);
  }
}

function setupFilters(allApps) {
  const q = document.getElementById("q");
  const tag = document.getElementById("tag");

  const allTags = uniq(allApps.flatMap(a => a.tags || []));
  for (const t of allTags) {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    tag.appendChild(opt);
  }

  function apply() {
    const query = q.value.trim().toLowerCase();
    const t = tag.value;

    const filtered = allApps.filter(a => {
      const hay = `${a.title} ${a.desc || ""} ${(a.tags||[]).join(" ")} ${a.requires||""}`.toLowerCase();
      const okQ = !query || hay.includes(query);
      const okT = !t || (a.tags || []).includes(t);
      return okQ && okT;
    });

    render(filtered);
  }

  q.addEventListener("input", apply);
  tag.addEventListener("change", apply);
  apply();
}

setupFilters(APPS);
