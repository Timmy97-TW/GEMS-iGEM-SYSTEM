(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  let lang = store.get("lang") === "en" ? "en" : "zh";
  const L = o => (o && typeof o === "object" ? o[lang] : o) || "";
  const t = k => T[lang][k] || "";
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const state = { node: "factsheet", hover: null, folder: "d01", role: null, mark: 0 };

  // ---------- language ----------
  function applyStatic() {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    $$("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    $$(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  }

  function renderAll() {
    applyStatic();
    renderProblems();
    renderGraph();
    renderDepth();
    renderPeople();
    renderTimeline();
    renderFacts();
    renderStandards();
    observeReveal();
  }

  // ---------- problems ----------
  function renderProblems() {
    $("#problems-list").innerHTML = PROBLEMS.map((p, i) => `
      <li class="reveal" style="--d:${(i % 3) * 60}ms">
        <span class="problems__n">${String(i + 1).padStart(2, "0")}</span>
        <h4>${esc(L(p.t))}</h4>
        <p>${esc(L(p.d))}</p>
      </li>`).join("");
  }

  // ---------- architecture graph ----------
  const byId = {};
  STREAMS.forEach(n => (byId[n.id] = { ...n, kind: "stream" }));
  REGISTERS.forEach(n => (byId[n.id] = { ...n, kind: "register" }));
  DELIVERABLES.forEach(n => (byId[n.id] = { ...n, kind: "deliverable" }));
  const edges = [];
  STREAMS.forEach(s => s.to.forEach(r => edges.push([s.id, r])));
  REGISTERS.forEach(r => r.to.forEach(d => edges.push([r.id, d])));
  const regColor = {};
  STREAMS.forEach(s => s.to.forEach(r => { if (!regColor[r]) regColor[r] = s.color; }));
  const colorOf = id => byId[id].color || regColor[id] || "ink";

  function related(id) {
    const set = new Set([id]);
    const up = x => edges.forEach(([a, b]) => { if (b === x && !set.has(a)) { set.add(a); up(a); } });
    const down = x => edges.forEach(([a, b]) => { if (a === x && !set.has(b)) { set.add(b); down(b); } });
    up(id); down(id);
    return set;
  }

  function nodeHTML(n) {
    const sub = n.kind === "deliverable" ? `<small>${esc(t("lbl.deadline"))} ${n.due}</small>` : "";
    return `<button class="node node--${n.kind}" data-node="${n.id}" style="--c:var(--${colorOf(n.id)})">
      <span class="node__dot"></span><span class="node__name">${esc(L(n.name))}</span>${sub}</button>`;
  }

  function renderGraph() {
    $("#col-streams").innerHTML = STREAMS.map(n => nodeHTML(byId[n.id])).join("");
    $("#col-registers").innerHTML = REGISTERS.map(n => nodeHTML(byId[n.id])).join("");
    $("#col-deliverables").innerHTML = DELIVERABLES.map(n => nodeHTML(byId[n.id])).join("");
    $$("#graph .node").forEach(b => {
      b.addEventListener("click", () => {
        state.node = b.dataset.node; paintGraph(); renderPanel();
        if (innerWidth < 860) $("#graph-panel").scrollIntoView({ block: "nearest", behavior: "smooth" });
      });
      b.addEventListener("mouseenter", () => { state.hover = b.dataset.node; paintGraph(); });
      b.addEventListener("mouseleave", () => { state.hover = null; paintGraph(); });
    });
    requestAnimationFrame(() => { drawLines(); paintGraph(); });
    renderPanel();
  }

  function paintGraph() {
    const focus = state.hover || state.node;
    const rel = related(focus);
    $$("#graph .node").forEach(b => {
      b.classList.toggle("is-on", rel.has(b.dataset.node));
      b.classList.toggle("is-sel", b.dataset.node === state.node);
    });
    $$("#graph-lines path").forEach(p => p.classList.toggle("is-on", rel.has(p.dataset.a) && rel.has(p.dataset.b)));
  }

  function drawLines() {
    const svg = $("#graph-lines"), g = $("#graph");
    const box = g.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
    if (window.innerWidth < 860) { svg.innerHTML = ""; return; }
    svg.innerHTML = edges.map(([a, b]) => {
      const ea = $(`[data-node="${a}"]`, g).getBoundingClientRect();
      const eb = $(`[data-node="${b}"]`, g).getBoundingClientRect();
      const x1 = ea.right - box.left, y1 = ea.top + ea.height / 2 - box.top;
      const x2 = eb.left - box.left, y2 = eb.top + eb.height / 2 - box.top;
      const mx = (x1 + x2) / 2;
      return `<path data-a="${a}" data-b="${b}" style="--c:var(--${colorOf(a)})" d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}"/>`;
    }).join("");
  }

  function row(label, val) { return val ? `<div class="kv"><dt>${esc(label)}</dt><dd>${esc(val)}</dd></div>` : ""; }

  function renderPanel() {
    const n = byId[state.node];
    let body = "";
    if (n.kind === "stream") {
      body = row(t("lbl.intake"), L(n.intake)) + row(t("lbl.steward"), L(n.steward)) + row(t("lbl.rule"), L(n.rule));
    } else if (n.kind === "register") {
      body = row(t("lbl.fields"), L(n.fields)) + row(t("lbl.output"), L(n.output));
    } else {
      const feeds = edges.filter(([, b]) => b === n.id).map(([a]) => L(byId[a].name)).join(" · ");
      body = row(t("lbl.deadline"), n.due + (lang === "zh" ? "（2026 參考）" : " (2026 reference)")) + row(t("lbl.feeds"), feeds) + row(t("lbl.rule"), L(n.rule));
    }
    const kindLabel = { stream: t("arch.col.streams"), register: t("arch.col.registers"), deliverable: t("arch.col.deliverables") }[n.kind];
    $("#graph-panel").innerHTML = `<div class="panel__head" style="--c:var(--${colorOf(n.id)})">
      <span class="panel__kind">${esc(kindLabel)}</span><h3>${esc(L(n.name))}</h3></div><dl>${body}</dl>`;
  }

  // ---------- depth ----------
  function renderDepth() {
    $("#layers").innerHTML = LAYERS.map((l, i) => `
      <div class="layer reveal" style="--i:${i};--d:${i * 90}ms"><span class="layer__n">${l.n}</span>
        <div><h4>${esc(L(l.name))}</h4><p>${esc(L(l.d))}</p></div></div>`).join("");
    $("#states").innerHTML = STATES.map(s => `<li><b>${esc(L(s.name))}</b><span>${esc(L(s.d))}</span></li>`).join("");

    const group = d => DRIVE.filter(f => f.drive === d).map(f => `
      <li><button class="tree__f${f.id === state.folder ? " is-sel" : ""}" data-folder="${f.id}">
        <svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 3a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z"/></svg>
        <span>${esc(f.name)}</span></button>
        ${f.kids && f.id === state.folder ? `<ul class="tree__kids">${f.kids.map(k => `<li>${esc(k)}</li>`).join("")}</ul>` : ""}
      </li>`).join("");
    $("#tree").innerHTML = `<li class="tree__drive">ReLEAF 2027</li>${group("team")}<li class="tree__drive tree__drive--ops">ReLEAF Ops</li>${group("ops")}`;
    $$("#tree .tree__f").forEach(b => b.addEventListener("click", () => { state.folder = b.dataset.folder; renderDepth(); }));
    const f = DRIVE.find(x => x.id === state.folder);
    $("#tree-panel").innerHTML = `<div class="panel__head"><span class="panel__kind">${f.drive === "ops" ? "ReLEAF Ops" : "ReLEAF 2027"}</span><h3>${esc(f.name)}</h3></div>
      <dl>${row(t("lbl.holds"), L(f.holds))}${row(t("lbl.edit"), L(f.edit))}${row(t("lbl.rule"), L(f.rule))}</dl>`;
  }

  // ---------- people ----------
  function renderPeople() {
    const tiers = [["s", t("ppl.students"), "30"], ["a", t("ppl.advisors"), "5–10"], ["i", t("ppl.staff"), "12"]];
    $("#crowd").innerHTML = tiers.map(([tier, name, n]) => {
      const dots = ROLES.filter(r => r.tier === tier).flatMap(r =>
        Array.from({ length: r.count }, () => `<i data-role="${r.id}" style="--c:var(--${r.color})"></i>`)).join("");
      return `<div class="crowd__g"><div class="crowd__dots">${dots}</div><p><b>${n}</b> ${esc(name)}</p></div>`;
    }).join("");
    $("#roles").innerHTML = tiers.map(([tier, name]) => `
      <div class="roles__tier"><h4>${esc(name)}</h4><div class="roles__grid">
      ${ROLES.filter(r => r.tier === tier).map(r => `
        <button class="role${state.role === r.id ? " is-sel" : ""}" data-role="${r.id}" style="--c:var(--${r.color})">
          <span class="role__top"><span class="role__name">${esc(L(r.name))}</span><span class="role__n">×${r.count}</span></span>
          <span class="role__d">${esc(L(r.d))}</span>
          <span class="role__h">${esc(t("lbl.time"))} ${r.hrs}</span>
        </button>`).join("")}</div></div>`).join("");
    $$("#roles .role").forEach(b => b.addEventListener("click", () => {
      state.role = state.role === b.dataset.role ? null : b.dataset.role;
      paintPeople();
    }));
    paintPeople();
  }

  function paintPeople() {
    $("#crowd").classList.toggle("has-sel", !!state.role);
    $$("#crowd i").forEach(d => d.classList.toggle("is-on", d.dataset.role === state.role));
    $$("#roles .role").forEach(b => b.classList.toggle("is-sel", b.dataset.role === state.role));
  }

  // ---------- timeline ----------
  const T0 = new Date("2026-12-01"), T1 = new Date("2027-12-01");
  const pct = d => ((new Date(d) - T0) / (T1 - T0)) * 100;
  const fmt = d => {
    const x = new Date(d);
    return lang === "zh" ? `${x.getMonth() + 1}月${x.getDate()}日`
      : x.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  };

  function lastSaturdays() {
    const out = [];
    for (let m = 0; m < 12; m++) {
      const d = new Date(2026, 11 + m + 1, 0);
      while (d.getDay() !== 6) d.setDate(d.getDate() - 1);
      out.push(d.toISOString().slice(0, 10));
    }
    return out;
  }

  function renderTimeline() {
    const months = Array.from({ length: 12 }, (_, i) => {
      const d = new Date(2026, 11 + i, 1);
      const label = lang === "zh" ? `${d.getMonth() + 1}月` : d.toLocaleDateString("en-GB", { month: "short" });
      return `<span style="left:${pct(d)}%">${label}</span>`;
    }).join("");

    const lanes = ["deadline", "gate"].map(lane => {
      const items = TIMELINE.map((m, i) => ({ ...m, i })).filter(m => m.lane === lane);
      return `<div class="tl__lane tl__lane--${lane}" style="--rows:1">
        <span class="tl__lname">${esc(t("lane." + lane))}</span>
        ${items.map(m => `<button class="tl__m${state.mark === m.i ? " is-sel" : ""}" data-mark="${m.i}" style="left:${pct(m.date)}%;--row:0">
          <i></i><span><em>${fmt(m.date)}</em>${esc(L(m.t))}</span></button>`).join("")}
      </div>`;
    }).join("");

    const ritual = `<div class="tl__lane tl__lane--ritual" style="--rows:1">
      <span class="tl__lname">${esc(t("lane.ritual"))}</span>
      ${lastSaturdays().map(d => `<b class="tl__tick" style="left:${pct(d)}%" title="${fmt(d)}"></b>`).join("")}
      <span class="tl__rtext">${RITUALS.map(r => esc(L(r.t))).join("　·　")}</span>
    </div>`;

    $("#tl").innerHTML = `<div class="tl__in"><div class="tl__months">${months}</div>${lanes}${ritual}</div>`;
    layoutTimeline();
    $$("#tl .tl__m").forEach(b => b.addEventListener("click", () => {
      state.mark = +b.dataset.mark;
      $$("#tl .tl__m").forEach(x => x.classList.toggle("is-sel", x === b));
      renderMark();
    }));
    renderMark();
  }

  // Stack labels into rows by their measured width; labels near the right edge sit left of their dot.
  function layoutTimeline() {
    $$("#tl .tl__lane--deadline, #tl .tl__lane--gate").forEach(lane => {
      const W = lane.clientWidth, gap = 14;
      const rows = [];
      $$(".tl__m", lane).forEach(b => {
        b.classList.remove("is-flip");
        const x = parseFloat(b.style.left) / 100 * W;
        const w = b.querySelector("span").offsetWidth + 20;
        const flip = x + w > W + 30;
        b.classList.toggle("is-flip", flip);
        const a = flip ? x - w : x - 6, z = flip ? x + 6 : x + w;
        let r = rows.findIndex(row => row.every(([p, q]) => z + gap < p || a > q + gap));
        if (r === -1) { rows.push([]); r = rows.length - 1; }
        rows[r].push([a, z]);
        b.style.setProperty("--row", r);
      });
      lane.style.setProperty("--rows", Math.max(rows.length, 1));
    });
  }

  function renderMark() {
    const m = TIMELINE[state.mark];
    const lane = t("lane." + m.lane);
    const x = new Date(m.date);
    const year = x.getFullYear();
    $("#tl-panel").innerHTML = `<div class="panel__head panel__head--${m.lane}"><span class="panel__kind">${esc(lane)} · ${fmt(m.date)} ${year}</span>
      <h3>${esc(L(m.t))}</h3></div>${L(m.d) ? `<p class="panel__p">${esc(L(m.d))}</p>` : ""}`;
  }

  // ---------- facts ----------
  function renderFacts() {
    $("#facttypes").innerHTML = FACT_TYPES.map((f, i) => `
      <div class="ftype reveal" style="--d:${i * 60}ms"><h4>${esc(L(f.t))}</h4>
        <p class="ftype__ex">${esc(L(f.ex))}</p><p class="ftype__l">${esc(L(f.l))}</p></div>`).join("");
    $("#lint").innerHTML = `<span class="c-dim">$ wiki check --facts registers/facts.csv</span>\n` +
      LINT.map(l => `<span class="c-${l.k}">${l.k === "ok" ? "✓" : "✗"}</span> <span class="c-dim">${esc(l.s)}</span>  ${esc(L(l.m))}`).join("\n");
  }

  // ---------- standards ----------
  function renderStandards() {
    $("#stds").innerHTML = STANDARDS.map((s, i) => `
      <div class="std reveal" style="--d:${(i % 4) * 60}ms"><span class="std__n">${i + 1}</span><h4>${esc(L(s.t))}</h4>
        <p class="std__now"><b>${t("std.now")}</b>${esc(L(s.now))}</p>
        <p class="std__next"><b>${t("std.next")}</b>${esc(L(s.next))}</p></div>`).join("");
  }

  // ---------- motion ----------
  let io;
  function observeReveal() {
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach(e => e.classList.add("in")); return; }
    io = io || new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    $$(".reveal:not(.in)").forEach(e => io.observe(e));
  }

  // ---------- boot ----------
  $$(".lang button").forEach(b => b.addEventListener("click", () => {
    lang = b.dataset.lang; store.set("lang", lang); renderAll();
  }));
  const nav = $("#nav");
  addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 8), { passive: true });
  let rz;
  addEventListener("resize", () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(() => { drawLines(); paintGraph(); layoutTimeline(); }); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { drawLines(); paintGraph(); layoutTimeline(); });

  // Hero and section intros fade up too.
  $$(".hero > *, .sec .eyebrow, .sec .headline, .sec .lede").forEach(e => e.classList.add("reveal"));
  renderAll();
})();
