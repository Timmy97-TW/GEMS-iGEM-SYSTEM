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

  const state = { node: "t-facts", hover: null, folder: "d31", role: null, mark: Math.max(0, TIMELINE.findIndex(m => m.key === "freeze")) };
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- language ----------
  function applyStatic() {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    $$("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    $$(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  }

  function renderAll() {
    applyStatic();
    renderProblems();
    renderAudit();
    renderSystem();
    renderGraph();
    renderDepth();
    renderYear();
    renderFlow();
    renderPeople();
    renderAdvisor();
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

  // ---------- audit ----------
  function renderAudit() {
    const nf = n => n.toLocaleString("en-US");
    $("#astats").innerHTML = AUDIT.stats.map((s, i) => `
      <div class="astat reveal" style="--d:${(i % 4) * 50}ms"><b>${esc(s.n)}</b><span>${esc(L(s.t))}</span></div>`).join("");
    const max = Math.max(...AUDIT.photos.map(p => p.n)), total = AUDIT.photos.reduce((a, p) => a + p.n, 0);
    $("#aphotos").innerHTML = AUDIT.photos.map(p => `
      <div class="bar"><span class="bar__k">${esc(p.k)}</span><span class="bar__t"><i style="width:${p.n / max * 100}%"></i></span><span class="bar__n">${nf(p.n)}</span></div>`).join("") +
      `<p class="acard__note"><b>${nf(total)}</b> ${esc(t("audit.photos.note"))}</p>`;
    const gb = AUDIT.size.reduce((a, x) => a + x.gb, 0);
    $("#asize").innerHTML = `<div class="stack">${AUDIT.size.map(x => `<i style="flex:${x.gb};background:var(--${x.c})"></i>`).join("")}</div>
      <ul class="legend">${AUDIT.size.map(x => `<li><i style="background:var(--${x.c})"></i>${esc(L(x.k))}<b>${x.gb} GB</b></li>`).join("")}</ul>`;
    $("#ahw").innerHTML = AUDIT.hw.map(h => `<li>${esc(h)}</li>`).join("");
    $("#akeep").innerHTML = AUDIT.keep.map(k => `<li>${esc(L(k))}</li>`).join("");
  }

  // ---------- system: principles, gates, IDs, layers, Hub tabs ----------
  function simpleTable(th, rows, monoFirst) {
    return `<div class="dmwrap"><table class="dm dm--small"><thead><tr>${th.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>
      ${rows.map(r => `<tr>${r.map((c, i) => `<td data-label="${esc(th[i])}"${i === 0 ? ' class="dm__duty"' : ""}>${i === 0 && monoFirst ? `<code>${esc(L(c))}</code>` : esc(L(c))}</td>`).join("")}</tr>`).join("")}
    </tbody></table></div>`;
  }

  function renderSystem() {
    $("#sys-lessons").innerHTML = LESSONS.map(x => `<div class="acard"><h3>${esc(L(x.t))}</h3><p class="acard__note">${esc(L(x.d))}</p></div>`).join("");
    $("#sys-rules").innerHTML = PRINCIPLES.map((x, i) => `<li><span class="sysrules__n">${i + 1}</span><div><h4>${esc(L(x.t))}</h4><p>${esc(L(x.d))}</p></div></li>`).join("");
    $("#sys-gates").innerHTML = GATES.map(g => `<div class="sysgate"><span class="sysgate__id">${esc(g.ids)}</span><h4>${esc(L(g.t))}</h4>
      <p>${esc(L(g.rule))}</p><dl><dt>${esc(t("sys.gate.who"))}</dt><dd>${esc(L(g.who))}</dd><dt>${esc(t("sys.gate.why"))}</dt><dd>${esc(L(g.why))}</dd></dl></div>`).join("");
    $("#sys-chains").innerHTML = ID_CHAINS.map(c => `<div class="syschain"><span>${esc(L(c.name))}</span>${c.ids.map(x => `<code>${esc(x)}</code>`).join('<i aria-hidden="true">→</i>')}</div>`).join("");
    $("#sys-ids").innerHTML = simpleTable(t("sys.ids.th"), ID_SYSTEM, true);
    $("#sys-layers").innerHTML = simpleTable(t("sys.layers.th"), SYS_LAYERS.map(x => [x.name, x.tool, x.put, x.not]));
    $("#sys-hub").innerHTML = simpleTable(t("sys.hub.th"), HUB_TABS.map(x => [x.tab, x.reader, x.when, x.why]));
    $("#sys-replaced").innerHTML = simpleTable(t("sys.replaced.th"), REPLACED.map(x => [x.old, x.now]));
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
      body = row(t("lbl.deadline"), n.due + (lang === "zh" ? "（推估，以 iGEM 公布為準）" : " (estimate until iGEM announces)")) + row(t("lbl.feeds"), feeds) + row(t("lbl.rule"), L(n.rule));
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
    $("#template").innerHTML = TEAM_TEMPLATE.map(x => `<span>${esc(x)}</span>`).join("");
    $("#states").innerHTML = STATES.map(s => `<li><b>${esc(L(s.name))}</b><span>${esc(L(s.d))}</span></li>`).join("");

    const group = d => DRIVE.filter(f => f.drive === d).map(f => `
      <li><button class="tree__f${f.id === state.folder ? " is-sel" : ""}" data-folder="${f.id}">
        <svg viewBox="0 0 20 16" aria-hidden="true"><path d="M1 3a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z"/></svg>
        <span>${esc(f.name)}</span></button>
        ${f.kids && f.id === state.folder ? `<ul class="tree__kids">${f.kids.map(k => `<li>${esc(k)}</li>`).join("")}</ul>` : ""}
      </li>`).join("");
    $("#tree").innerHTML = `<li class="tree__drive">GEMS iGEM 2027</li>${group("team")}<li class="tree__drive tree__drive--ops">GEMS 2027 Ops</li>${group("ops")}<li class="tree__drive tree__drive--ops">${lang === "zh" ? "Drive 以外" : "Outside Drive"}</li>${group("out")}`;
    $$("#tree .tree__f").forEach(b => b.addEventListener("click", () => { state.folder = b.dataset.folder; renderDepth(); }));
    const f = DRIVE.find(x => x.id === state.folder);
    const driveName = { team: "GEMS iGEM 2027", ops: "GEMS 2027 Ops", out: lang === "zh" ? "Drive 以外" : "Outside Drive" }[f.drive];
    $("#tree-panel").innerHTML = `<div class="panel__head"><span class="panel__kind">${esc(driveName)}</span><h3>${esc(f.name)}</h3></div>
      <dl>${row(t("lbl.holds"), L(f.holds))}${row(t("lbl.edit"), L(f.edit))}${row(t("lbl.rule"), L(f.rule))}</dl>
      ${f.from ? `<div class="from"><span>${esc(t("lbl.from"))}</span><ul>${f.from.map(x => `<li>${esc(L(x))}</li>`).join("")}</ul></div>` : ""}`;
  }

  // ---------- the year of documents ----------
  const DAY = 864e5, Y0 = Date.UTC(2026, 10, 1), YSPAN = 394;
  const yday = d => (Date.parse(d + "T00:00:00Z") - Y0) / DAY;
  const YITEMS = YEAR_ITEMS.map(i => ({ ...i, day: yday(i.d), endDay: (i.end || i.e) ? yday(i.end || i.e) : null })).sort((a, b) => a.day - b.day);
  const YBY = Object.fromEntries(YITEMS.map(i => [i.id, i]));
  const YIN = {}; YITEMS.forEach(i => (i.feeds || []).forEach(f => (YIN[f] = YIN[f] || []).push(i.id)));
  const YEDGES = YITEMS.flatMap(i => (i.feeds || []).map(f => [i.id, f]));
  const YDOCS = YITEMS.filter(i => i.lane !== "igem" && i.lane !== "gate");
  const YCOLOR = Object.fromEntries(YEAR_LANES.map(l => [l.id, l.c]));
  YCOLOR.igem = "ink"; YCOLOR.gate = "orange";
  const yr = { t: reduce ? YSPAN : 4, playing: false, seen: false, sel: null, last: 0, raf: 0, timer: 0, ppd: 5.2, lbl: 128, userUntil: 0, lastDay: -1 };
  const yx = d => yr.lbl + d * yr.ppd;

  // Dates: zh "10/6–13", en "6–13 Oct". Estimates get a ?.
  function yRange(it) {
    if (it.dl && typeof it.dl === "object") return L(it.dl);
    const a = new Date(Y0 + it.day * DAY), e = it.e ? new Date(Y0 + yday(it.e) * DAY) : null;
    const M = x => x.getUTCMonth(), D = x => x.getUTCDate();
    const mon = x => x.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" });
    let s;
    if (lang === "zh") s = !e ? `${M(a) + 1}/${D(a)}` : M(a) === M(e) ? `${M(a) + 1}/${D(a)}–${D(e)}` : `${M(a) + 1}/${D(a)}–${M(e) + 1}/${D(e)}`;
    else s = !e ? `${D(a)} ${mon(a)}` : M(a) === M(e) ? `${D(a)}–${D(e)} ${mon(a)}` : `${D(a)} ${mon(a)}–${D(e)} ${mon(e)}`;
    return s + (it.est ? "?" : "");
  }
  const yDayLabel = d => {
    const x = new Date(Y0 + Math.round(d) * DAY);
    return lang === "zh" ? `${x.getUTCFullYear()} 年 ${x.getUTCMonth() + 1} 月 ${x.getUTCDate()} 日`
      : x.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  };

  function yChip(it) {
    const strip = it.lane === "igem" || it.lane === "gate";
    const hard = it.gate === "k" || it.gate === "f" || it.gate === "file";
    const cls = ["yd", strip ? "yd--strip" : "", it.gate ? "yd--gate" : "", hard ? "yd--hard" : "", it.est ? "yd--est" : ""].join(" ");
    const pre = strip ? `<em>${esc(yRange(it))}</em>` : it.idp ? `<code>${esc(it.idp)}</code>` : "";
    return `<button class="${cls}" data-yd="${it.id}" style="left:${yx(it.day)}px;--c:var(--${YCOLOR[it.lane]})"><i></i>${pre}<span>${esc(L(it.n))}</span></button>`;
  }
  const yTail = it => it.endDay !== null ? `<b class="yd__tail" data-tail="${it.id}" style="left:${yx(it.day)}px;--c:var(--${YCOLOR[it.lane]})"><span>${esc(L(it.n))}</span></b>` : "";

  function renderYear() {
    const months = Array.from({ length: 13 }, (_, i) => {
      const d = Date.UTC(2026, 10 + i, 1), x = new Date(d);
      const label = lang === "zh" ? `${x.getUTCMonth() + 1}月` : x.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" });
      return `<span style="left:${yx((d - Y0) / DAY)}px">${label}${x.getUTCMonth() === 0 ? `<small>2027</small>` : ""}</span>`;
    }).join("");
    const bx = b => `left:${yx(yday(b.s))}px;width:${(yday(b.e) - yday(b.s)) * yr.ppd}px`;
    const shades = YEAR_BANDS.filter(b => b.shade).map(b => `<div class="yr__shade yr__shade--${b.kind}" style="${bx(b)}"></div>`).join("");
    const todayD = (Date.now() - Y0) / DAY;
    const today = todayD >= 0 && todayD <= YSPAN ? `<div class="yr__today" style="left:${yx(todayD)}px"><span>${esc(t("year.today"))}</span></div>` : "";
    const stripLane = (id, name, inner) => `<div class="yl yl--strip yl--${id}"><span class="yl__name">${esc(name)}</span>${inner}</div>`;
    const docs = lane => YITEMS.filter(i => i.lane === lane);

    $("#yr-in").style.width = `${yx(YSPAN) + 150}px`;
    $("#yr-in").innerHTML = `${shades}${today}
      <svg class="yr__links" id="yr-links" aria-hidden="true"></svg>
      <div class="yr__axis" id="yr-axis"><span class="yl__name yl__name--axis"></span>${months}<div class="yr__head" id="yr-head"><b></b></div></div>
      ${stripLane("phase", t("year.phase"), YEAR_BANDS.filter(b => b.kind === "phase" || b.kind === "crunch" || b.kind === "trip").map(b => `<span class="ybar ybar--${b.kind}" style="${bx(b)}"><em>${esc(L(b.n))}</em></span>`).join(""))}
      ${stripLane("cal", t("year.cal"), YEAR_BANDS.filter(b => b.kind === "break" || b.kind === "exam").map(b => `<span class="ybar ybar--${b.kind}" style="${bx(b)}"><em>${esc(L(b.n))}</em></span>`).join("") +
        YEAR_TICKS.map(k => `<span class="ytick${k.n === "SAT" ? "" : " ytick--h"}" style="left:${yx(yday(k.d))}px"><em>${esc(L(k.n))}</em></span>`).join(""))}
      ${stripLane("igem", t("year.igem"), docs("igem").map(i => yTail(i) + yChip(i)).join(""))}
      ${stripLane("gate", t("year.gate"), docs("gate").map(i => yTail(i) + yChip(i)).join(""))}
      ${YEAR_LANES.map(l => `<div class="yl yl--${l.id}" style="--c:var(--${l.c})"><span class="yl__name">${esc(L(l.name))}</span>${docs(l.id).map(i => yTail(i) + yChip(i)).join("")}</div>`).join("")}
      <div class="yr__line" id="yr-line"></div>`;

    const pm = (kind, b) => `<i class="ymini--${kind}" style="left:${yday(b.s) / YSPAN * 100}%;width:${(yday(b.e) - yday(b.s)) / YSPAN * 100}%"></i>`;
    $("#yr-mini").innerHTML = YEAR_BANDS.map(b => pm(b.kind, b)).join("") +
      YITEMS.filter(i => i.lane === "gate" && i.id !== "g-file").map(i => `<b style="left:${i.day / YSPAN * 100}%"></b>`).join("");
    $("#yr-legend").innerHTML = `
      <span><i class="yk yk--hard"></i>${esc(t("year.legend.hard"))}</span>
      <span><i class="yk yk--node"></i>${esc(t("year.legend.node"))}</span>
      <span><i class="yk yk--est"></i>${esc(t("year.legend.est"))}</span>
      <span><i class="yk yk--break"></i>${esc(t("year.cal"))}</span>
      <span><i class="yk yk--crunch"></i>${esc(zh("衝刺模式", "Crunch mode"))}</span>`;

    $("#yr-prev").setAttribute("aria-label", t("year.prev"));
    $("#yr-next").setAttribute("aria-label", t("year.next"));
    $("#yr-play").setAttribute("aria-label", t(yr.playing ? "year.pause" : "year.play"));
    $("#yr-range").setAttribute("aria-label", t("year.scrub"));

    $$("#yr-in [data-yd]").forEach(b => b.addEventListener("click", () => ySelect(b.dataset.yd, false)));
    const axis = $("#yr-axis");
    const fromX = e => (e.clientX - $("#yr-in").getBoundingClientRect().left - yr.lbl) / yr.ppd;
    axis.addEventListener("pointerdown", e => {
      axis.setPointerCapture(e.pointerId); stopYear(); yr.drag = true; ySet(fromX(e), true); e.preventDefault();
    });
    axis.addEventListener("pointermove", e => { if (yr.drag) ySet(fromX(e), true); });
    const end = () => { yr.drag = false; };
    axis.addEventListener("pointerup", end); axis.addEventListener("pointercancel", end);

    yr.lastDay = -1;
    layoutYear();
    renderYearPanel();
  }

  // Stack chips into rows inside each lane, then draw the feed links.
  function layoutYear() {
    const inn = $("#yr-in");
    if (!inn || !$("#yr-links")) return;
    const narrow = innerWidth <= 600;
    const lbl = narrow ? 74 : 128;
    if (lbl !== yr.lbl) {
      yr.lbl = lbl;
      inn.style.setProperty("--yr-lbl", lbl + "px");
      return renderYear();
    }
    inn.style.setProperty("--yr-lbl", lbl + "px");
    const RH = 26;
    $$(".yl", inn).forEach(lane => {
      const rows = [];
      $$(".yd", lane).forEach(b => {
        const x = yx(YBY[b.dataset.yd].day), w = b.offsetWidth;
        let r = rows.findIndex(end => end + 8 <= x);
        if (r === -1) { rows.push(0); r = rows.length - 1; }
        rows[r] = x + w;
        b.style.top = `${r * RH + 5}px`;
        const tail = $(`[data-tail="${b.dataset.yd}"]`, lane);
        if (tail) tail.style.top = `${r * RH + 5}px`;
      });
      if (lane.classList.contains("yl--phase")) { lane.style.height = "34px"; return; }
      if (lane.classList.contains("yl--cal")) { lane.style.height = "66px"; return; }
      lane.style.height = `${Math.max(rows.length, 1) * RH + 10}px`;
    });
    const box = inn.getBoundingClientRect();
    const svg = $("#yr-links");
    svg.setAttribute("width", box.width); svg.setAttribute("height", box.height);
    svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
    const rect = id => { const r = $(`[data-yd="${id}"]`, inn).getBoundingClientRect(); return { l: r.left - box.left, r: r.right - box.left, m: (r.top + r.bottom) / 2 - box.top }; };
    svg.innerHTML = YEDGES.map(([a, b]) => {
      const A = rect(a), B = rect(b);
      const x1 = A.r, y1 = A.m, x2 = Math.max(B.l, 0), y2 = B.m;
      const dx = Math.max(Math.abs(x2 - x1) / 2, 34);
      return `<path pathLength="1" data-a="${a}" data-b="${b}" style="--c:var(--${YCOLOR[YBY[a].lane]})" d="M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}"/>`;
    }).join("");
    yr.lastDay = -1;
    paintYear(true);
  }

  function paintYear(force) {
    const inn = $("#yr-in"), t0 = yr.t;
    $("#yr-line").style.left = `${yx(t0)}px`;
    $("#yr-head").style.left = `${yx(t0)}px`;
    const dayInt = Math.floor(t0);
    if (+$("#yr-range").value !== dayInt) $("#yr-range").value = dayInt;
    if (!force && dayInt === yr.lastDay) return;
    yr.lastDay = dayInt;

    $$("[data-yd]", inn).forEach(b => {
      const it = YBY[b.dataset.yd], born = it.day <= t0, was = b.classList.contains("is-born");
      if (born !== was) b.classList.toggle("is-born", born);
      b.tabIndex = born ? 0 : -1;
    });
    $$("[data-tail]", inn).forEach(el => {
      const it = YBY[el.dataset.tail];
      el.style.width = `${Math.max(0, Math.min(t0, it.endDay) - it.day) * yr.ppd}px`;
      el.classList.toggle("is-live", it.day <= t0);
    });
    const rel = yr.sel ? new Set([yr.sel, ...(YBY[yr.sel].feeds || []), ...(YIN[yr.sel] || [])]) : null;
    $$("#yr-links path").forEach(p => {
      const a = YBY[p.dataset.a], b = YBY[p.dataset.b];
      p.classList.toggle("is-on", a.day <= t0 && b.day <= t0);
      p.classList.toggle("is-sel", !!yr.sel && (p.dataset.a === yr.sel || p.dataset.b === yr.sel));
    });
    inn.classList.toggle("has-sel", !!yr.sel);
    $$("[data-yd]", inn).forEach(b => {
      b.classList.toggle("is-sel", b.dataset.yd === yr.sel);
      b.classList.toggle("is-rel", !!rel && rel.has(b.dataset.yd));
    });

    const count = YDOCS.filter(i => i.day <= t0).length;
    const nows = YEAR_BANDS.filter(b => b.now && yday(b.s) <= t0 && t0 <= yday(b.e));
    const phase = YEAR_BANDS.find(b => b.kind === "phase" && yday(b.s) <= t0 && t0 <= yday(b.e));
    const latest = YDOCS.filter(i => i.day <= t0).pop();
    $("#yr-now").innerHTML = `<b class="yr__date">${esc(yDayLabel(t0))}</b>
      <span class="yr__count"><b>${count}</b> / ${YDOCS.length} ${esc(t("year.count"))}</span>
      <span class="yr__pills">${phase ? `<em class="is-phase">${esc(L(phase.n))}</em>` : ""}${nows.map(b => `<em class="is-${b.kind}">${esc(L(b.now))}</em>`).join("")}</span>
      ${latest ? `<button class="yr__latest" data-latest="${latest.id}"><small>${esc(t("year.latest"))}</small>${esc(L(latest.n))}${(latest.feeds || []).length ? ` → ${latest.feeds.slice(0, 2).map(f => esc(L(YBY[f].n))).join("、")}` : ""}</button>` : ""}`;
    const lb = $("[data-latest]", $("#yr-now"));
    if (lb) lb.addEventListener("click", () => ySelect(lb.dataset.latest, false));
    $("#yr-head b").textContent = lang === "zh"
      ? `${new Date(Y0 + dayInt * DAY).getUTCMonth() + 1}/${new Date(Y0 + dayInt * DAY).getUTCDate()}`
      : new Date(Y0 + dayInt * DAY).toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
  }

  function yFollow() {
    const s = $("#yr-scroll");
    if (performance.now() < yr.userUntil) return;
    s.scrollLeft = yx(yr.t) - s.clientWidth * .55;
  }
  function ySet(d, follow) {
    yr.t = Math.max(0, Math.min(YSPAN, d));
    paintYear();
    if (follow) { yr.userUntil = 0; yFollow(); }
  }

  function yFrame(now) {
    if (!yr.playing) return;
    const dt = Math.min(now - yr.last, 400); yr.last = now;
    yr.t += dt / 1000 * 8;
    if (yr.t >= YSPAN) { yr.t = YSPAN; paintYear(); yFollow(); stopYear(); return; }
    paintYear(); yFollow();
    yr.raf = requestAnimationFrame(yFrame);
  }
  function yMonthStart(d, dir) {
    const x = new Date(Y0 + Math.floor(d) * DAY);
    const m = Date.UTC(x.getUTCFullYear(), x.getUTCMonth() + (dir > 0 ? 1 : (x.getUTCDate() > 1 ? 0 : -1)), 1);
    return (m - Y0) / DAY;
  }
  function playYear() {
    if (yr.t >= YSPAN) yr.t = 0;
    yr.playing = true; yr.seen = true; yr.userUntil = 0;
    $("#yr-play").classList.add("is-playing"); $("#yr-play").setAttribute("aria-label", t("year.pause"));
    if (reduce) {
      // No tween under reduced motion: a month at a time, only because the viewer asked.
      clearInterval(yr.timer);
      yr.timer = setInterval(() => {
        const n = yMonthStart(yr.t, 1);
        ySet(n, true);
        if (n >= YSPAN) stopYear();
      }, 1500);
      return;
    }
    yr.last = performance.now();
    cancelAnimationFrame(yr.raf); yr.raf = requestAnimationFrame(yFrame);
  }
  function stopYear() {
    yr.playing = false;
    clearInterval(yr.timer); cancelAnimationFrame(yr.raf);
    $("#yr-play").classList.remove("is-playing"); $("#yr-play").setAttribute("aria-label", t("year.play"));
  }

  function ySelect(id, jump) {
    stopYear(); yr.seen = true;
    yr.sel = id;
    const it = YBY[id];
    if (it.day > yr.t) yr.t = it.day;
    yr.lastDay = -1; paintYear(true);
    if (jump) { const s = $("#yr-scroll"); s.scrollLeft = yx(it.day) - s.clientWidth * .4; }
    renderYearPanel();
    if (innerWidth < 860) $("#yr-panel").scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
  }

  function renderYearPanel() {
    const p = $("#yr-panel");
    if (!yr.sel) { p.innerHTML = `<p class="panel__p">${esc(t("year.hint"))}</p>`; return; }
    const it = YBY[yr.sel];
    const laneName = it.lane === "igem" ? t("year.igem") : it.lane === "gate" ? t("year.gate") : L(YEAR_LANES.find(l => l.id === it.lane).name);
    const link = id => `<button class="ylink" data-go="${id}" style="--c:var(--${YCOLOR[YBY[id].lane]})"><i></i>${esc(L(YBY[id].n))}</button>`;
    const inn = YIN[it.id] || [], out = it.feeds || [];
    const until = it.end ? fmt(it.end) : "";
    p.innerHTML = `<div class="panel__head" style="--c:var(--${YCOLOR[it.lane]})">
        <span class="panel__kind">${esc(laneName)} · ${esc(yRange(it))}${it.node ? ` · ${esc(it.node)}` : ""}${it.idp ? ` · ID ${esc(it.idp)}` : ""}</span>
        <h3>${esc(L(it.n))}</h3></div>
      <dl>${row(t("year.rule"), L(it.rule))}
        ${it.gate ? rowHTML(t("year.gatek"), `<span class="ygate${it.gate === "node" ? "" : " ygate--hard"}">${esc(t("year.gate." + it.gate))}</span>`) : ""}
        ${row(t("year.owner"), L(it.who))}${row(t("year.reader"), L(it.reads))}
        ${it.tpl ? rowHTML(t("year.tpl"), esc(L(it.tpl))) : ""}
        ${it.loc ? rowHTML(t("year.loc"), `<code>${esc(L(it.loc))}</code>`) : ""}
        ${until ? row(t("year.until"), until) : ""}
        ${inn.length ? rowHTML(t("year.from"), `<div class="ylinks">${inn.map(link).join("")}</div>`) : ""}
        ${out.length ? rowHTML(t("year.to"), `<div class="ylinks">${out.map(link).join("")}</div>`) : ""}
      </dl>`;
    $$("[data-go]", p).forEach(b => b.addEventListener("click", () => ySelect(b.dataset.go, true)));
  }

  $("#yr-play").addEventListener("click", () => (yr.playing ? stopYear() : playYear()));
  $("#yr-prev").addEventListener("click", () => { stopYear(); yr.seen = true; ySet(yMonthStart(yr.t, -1), true); });
  $("#yr-next").addEventListener("click", () => { stopYear(); yr.seen = true; ySet(Math.min(YSPAN, yMonthStart(yr.t, 1)), true); });
  $("#yr-range").addEventListener("input", e => { stopYear(); yr.seen = true; ySet(+e.target.value, true); });
  ["pointerdown", "wheel", "touchstart"].forEach(ev => $("#yr-scroll").addEventListener(ev, e => {
    if (!e.target.closest("#yr-axis")) yr.userUntil = performance.now() + 3000;
  }, { passive: true }));
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting && !yr.seen && !reduce) playYear();
      if (!e.isIntersecting && yr.playing) stopYear();
    }), { threshold: 0.25 }).observe($("#yr-scroll"));
  }

  // ---------- flow ----------
  const roleById = Object.fromEntries([...ROLES, ...FLOW_CAST].map(r => [r.id, r]));
  const tierName = { s: () => t("ppl.students"), a: () => t("ppl.advisors"), i: () => t("ppl.staff") };
  const flow = { sc: 0, step: 0, playing: false, seen: false, timer: null };
  const STEP_MS = 3800;

  function renderFlow() {
    $("#flow-tabs").innerHTML = SCENARIOS.map((s, i) => `
      <button role="tab" data-sc="${i}" aria-selected="${i === flow.sc}" style="--c:var(--${s.color})"><i></i>${esc(L(s.name))}</button>`).join("");
    $$("#flow-tabs button").forEach(b => b.addEventListener("click", () => { stopFlow(); goFlow(+b.dataset.sc, 0); }));

    const board = $("#board");
    $$(".tile", board).forEach(n => n.remove());
    board.insertAdjacentHTML("beforeend", FLOW_TILES.map(tl => `
      <div class="tile${tl.out ? " tile--out" : ""}${tl.gate ? " tile--gate" : ""}" data-tile="${tl.id}"${tl.span ? ` style="--span:${tl.span}"` : ""}>
        <span class="tile__name">${esc(L(tl.name))}</span>
        ${tl.owners ? `<span class="tile__owners">${tl.owners.map(o => `<span class="chip" data-role="${o}" style="--c:var(--${roleById[o].color})"><i></i>${esc(L(roleById[o].name))}</span>`).join("")}</span>` : ""}
      </div>`).join(""));

    $("#flow-prev").setAttribute("aria-label", t("flow.prev"));
    $("#flow-next").setAttribute("aria-label", t("flow.next"));
    paintFlow(false);
  }

  function goFlow(sc, step) {
    flow.sc = sc; flow.step = step;
    $$("#flow-tabs button").forEach(b => b.setAttribute("aria-selected", +b.dataset.sc === sc));
    paintFlow(true);
  }

  function tileCenter(id) {
    const board = $("#board"), el = $(`[data-tile="${id}"]`, board);
    const b = board.getBoundingClientRect(), r = el.getBoundingClientRect();
    // Anchor at the tile's top-right so the token never covers its name or owners.
    return [r.right - b.left - 26, r.top - b.top + 26];
  }

  function paintFlow(animate) {
    const sc = SCENARIOS[flow.sc], steps = sc.steps, cur = steps[flow.step];
    const visited = steps.slice(0, flow.step + 1).map(s => s.at);

    $$("#board .tile").forEach(el => {
      const id = el.dataset.tile;
      el.classList.toggle("is-now", id === cur.at);
      el.classList.toggle("is-past", id !== cur.at && visited.includes(id));
      el.classList.toggle("is-path", steps.some(s => s.at === id));
      el.classList.toggle("is-blocked", id === cur.at && !!(cur.gate && cur.gate.block));
      el.classList.toggle("is-passed", id === cur.at && !!(cur.gate && !cur.gate.block));
      $$(".chip", el).forEach(c => c.classList.toggle("is-act", id === cur.at && c.dataset.role === cur.who));
    });

    const board = $("#board");
    board.style.setProperty("--sc", `var(--${sc.color})`);
    const pts = [];
    visited.forEach(id => { const p = tileCenter(id); const last = pts[pts.length - 1]; if (!last || last[0] !== p[0] || last[1] !== p[1]) pts.push(p); });
    const bb = board.getBoundingClientRect();
    $("#board-trail").setAttribute("viewBox", `0 0 ${bb.width} ${bb.height}`);
    $("#board-trail").innerHTML = pts.length > 1
      ? `<polyline points="${pts.map(p => p.join(",")).join(" ")}"/>` + pts.slice(0, -1).map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="4"/>`).join("")
      : "";

    const [x, y] = tileCenter(cur.at);
    const tok = $("#token");
    tok.classList.toggle("no-anim", !animate);
    tok.style.transform = `translate(${x}px, ${y}px)`;
    tok.classList.toggle("is-blocked", !!(cur.gate && cur.gate.block));
    tok.innerHTML = cur.gate && cur.gate.block
      ? `<svg viewBox="0 0 16 16" class="tok-x" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13"/></svg>`
      : `<svg viewBox="0 0 16 20" aria-hidden="true"><path d="M2 1h8l4 4v14H2z"/><path d="M10 1v4h4" fill="none"/></svg>`;
    tok.classList.remove("pop"); void tok.offsetWidth; tok.classList.add("pop");

    renderFlowPanel();
  }

  function renderFlowPanel() {
    const sc = SCENARIOS[flow.sc], steps = sc.steps, cur = steps[flow.step];
    const r = roleById[cur.who];
    const cells = {}; let fresh = {};
    steps.slice(0, flow.step + 1).forEach((s, i) => { if (s.row) Object.entries(s.row).forEach(([k, v]) => { cells[k] = v; if (i === flow.step) fresh[k] = 1; }); });
    const cols = L(sc.cols);
    let stateIx = -1; steps.slice(0, flow.step + 1).forEach(s => { if (s.state !== undefined) stateIx = s.state; });

    $("#fpanel").innerHTML = `
      <div class="fpanel__top">
        <span class="fpanel__count">${esc(t("flow.step"))} ${flow.step + 1} / ${steps.length}</span>
        <span class="fpanel__dots">${steps.map((_, i) => `<button data-step="${i}" class="${i === flow.step ? "is-on" : i < flow.step ? "is-past" : ""}" aria-label="${t("flow.step")} ${i + 1}"></button>`).join("")}</span>
      </div>
      ${cur.gate ? `<p class="fgate${cur.gate.block ? " is-blocked" : " is-passed"}"><b>${esc(t(cur.gate.block ? "flow.blocked" : "flow.passed"))}</b>${esc(t("year.gate." + cur.gate.g))}</p>` : ""}
      <p class="fpanel__act">${esc(L(cur.act))}</p>
      <div class="fpanel__who" style="--c:var(--${r.color})"><i></i><span><b>${esc(L(r.name))}</b><small>${esc(tierName[r.tier]())}</small></span></div>
      <div class="fpanel__kv"><span>${esc(t("flow.file"))}</span><code>${esc(cur.file)}</code></div>
      ${stateIx >= 0 ? `<div class="fpanel__kv"><span>${esc(t("flow.state"))}</span><span class="pills">${STATES.map((s, i) => `<em class="${i === stateIx ? "is-on" : i < stateIx ? "is-past" : ""}">${esc(L(s.name))}</em>`).join("")}</span></div>` : ""}
      <div class="sheet">
        <div class="sheet__name"><svg viewBox="0 0 16 16" aria-hidden="true"><rect x="1" y="1" width="14" height="14" rx="2"/><path d="M1 6h14M1 11h14M6 1v14"/></svg>Hub / ${esc(L(sc.register))}</div>
        <div class="sheet__grid" style="--n:${cols.length}">
          ${cols.map(c => `<span class="sheet__h">${esc(c)}</span>`).join("")}
          ${cols.map((_, i) => `<span class="sheet__c${fresh[i] ? " is-new" : ""}">${cells[i] !== undefined ? esc(L(cells[i])) : ""}</span>`).join("")}
        </div>
      </div>`;
    $$("#fpanel .fpanel__dots button").forEach(b => b.addEventListener("click", () => { stopFlow(); goFlow(flow.sc, +b.dataset.step); }));
  }

  function stepFlow(d) {
    const n = SCENARIOS[flow.sc].steps.length;
    let s = flow.step + d, sc = flow.sc;
    if (s >= n) { sc = (sc + 1) % SCENARIOS.length; s = 0; }
    if (s < 0) { sc = (sc - 1 + SCENARIOS.length) % SCENARIOS.length; s = SCENARIOS[sc].steps.length - 1; }
    goFlow(sc, s);
  }
  function playFlow() {
    flow.playing = true; $("#flow-play").classList.add("is-playing"); $("#flow-play").setAttribute("aria-label", t("flow.pause"));
    clearInterval(flow.timer); flow.timer = setInterval(() => stepFlow(1), STEP_MS);
  }
  function stopFlow() {
    flow.playing = false; flow.seen = true; $("#flow-play").classList.remove("is-playing"); $("#flow-play").setAttribute("aria-label", t("flow.play"));
    clearInterval(flow.timer);
  }
  $("#flow-play").addEventListener("click", () => (flow.playing ? stopFlow() : playFlow()));
  $("#flow-prev").addEventListener("click", () => { stopFlow(); stepFlow(-1); });
  $("#flow-next").addEventListener("click", () => { stopFlow(); stepFlow(1); });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting && !flow.seen && !reduce) { flow.seen = true; playFlow(); }
      if (!e.isIntersecting && flow.playing) stopFlow();
    }), { threshold: 0.35 }).observe($("#board"));
  }

  // ---------- people ----------
  function renderPeople() {
    const tiers = [["s", t("ppl.students"), "≈28"], ["a", t("ppl.advisors"), "5–10"], ["i", t("ppl.staff"), "12"]];
    $("#crowd").innerHTML = tiers.map(([tier, name, n]) => {
      const dots = ROLES.filter(r => r.tier === tier).flatMap(r =>
        Array.from({ length: r.count }, () => `<i data-role="${r.id}" style="--c:var(--${r.color})"></i>`)).join("");
      return `<div class="crowd__g"><div class="crowd__dots">${dots}</div><p><b>${n}</b> ${esc(name)}</p></div>`;
    }).join("");
    $("#roles").innerHTML = tiers.map(([tier, name]) => `
      <div class="roles__tier"><h4>${esc(name)}</h4><div class="roles__grid">
      ${ROLES.filter(r => r.tier === tier).map(r => `
        <button class="role${state.role === r.id ? " is-sel" : ""}" data-role="${r.id}" style="--c:var(--${r.color})">
          <span class="role__top"><span class="role__name">${esc(L(r.name))}</span><span class="role__n">${typeof r.countLabel === "object" ? esc(L(r.countLabel)) : `×${r.countLabel || r.count}`}</span></span>
          ${r.proposed ? `<span class="role__tag"><a href="#adv-tbd">${esc(t("proposed"))}</a></span>` : ""}
          <span class="role__d">${esc(L(r.d))}</span>
          <span class="role__h">${r.hrsLabel ? esc(L(r.hrsLabel)) : `${esc(t("lbl.time"))} ${r.hrs}`}</span>
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
  const T0 = new Date("2026-11-01"), T1 = new Date("2027-12-01");
  const pct = d => ((new Date(d) - T0) / (T1 - T0)) * 100;
  const fmt = d => {
    const x = new Date(d);
    return lang === "zh" ? `${x.getUTCMonth() + 1}月${x.getUTCDate()}日`
      : x.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
  };

  function firstSaturdays() {
    const out = [];
    for (let m = 0; m < 11; m++) {
      const d = new Date(Date.UTC(2027, m, 1));
      while (d.getUTCDay() !== 6) d.setUTCDate(d.getUTCDate() + 1);
      out.push(d.toISOString().slice(0, 10));
    }
    return out;
  }

  function monthsHTML() {
    return Array.from({ length: 13 }, (_, i) => {
      const d = new Date(2026, 10 + i, 1);
      const label = lang === "zh" ? `${d.getMonth() + 1}月` : d.toLocaleDateString("en-GB", { month: "short" });
      return `<span style="left:${pct(d)}%">${label}</span>`;
    }).join("");
  }

  function renderTimeline() {
    const months = monthsHTML();

    const lanes = ["deadline", "gate"].map(lane => {
      const items = TIMELINE.map((m, i) => ({ ...m, i })).filter(m => m.lane === lane);
      return `<div class="tl__lane tl__lane--${lane}" style="--rows:1">
        <span class="tl__lname">${esc(t("lane." + lane))}</span>
        ${items.map(m => `<button class="tl__m${state.mark === m.i ? " is-sel" : ""}" data-mark="${m.i}" style="left:${pct(m.date)}%;--row:0">
          <i></i><span><em>${m.dl ? esc(L(m.dl)) : fmt(m.date)}</em>${esc(L(m.t))}</span></button>`).join("")}
      </div>`;
    }).join("");

    const advItems = TIMELINE.map((m, i) => ({ ...m, i })).filter(m => m.lane === "adv");
    const advLane = `<div class="tl__lane tl__lane--adv" style="--rows:1">
      <span class="tl__lname">${esc(t("lane.adv"))}</span>
      ${ADV_STAGES.map((s, i) => `<a class="tl__bar" href="#advisor" data-stage="${i}" style="left:${pct(s.start)}%;width:${pct(s.after || s.end) - pct(s.start)}%;--shade:${s.shade}">${s.id} ${esc(L(s.role))}</a>`).join("")}
      ${advItems.map(m => `<button class="tl__m${state.mark === m.i ? " is-sel" : ""}" data-mark="${m.i}" style="left:${pct(m.date)}%;--row:0">
        <i></i><span><em>${esc(L(m.dl))}</em>${esc(L(m.t))}</span></button>`).join("")}
    </div>`;

    const school = `<div class="tl__lane tl__lane--school" style="--rows:1">
      <span class="tl__lname">${esc(t("lane.school"))}</span>
      ${YEAR_BANDS.filter(b => b.kind === "break" || b.kind === "exam").map(b => `<span class="tl__sb tl__sb--${b.kind}" style="left:${pct(b.s)}%;width:${pct(b.e) - pct(b.s)}%"><em>${esc(L(b.n))}</em></span>`).join("")}
      <span class="tl__sb tl__sb--crunch" style="left:${pct("2027-08-28")}%;width:${pct("2027-10-13") - pct("2027-08-28")}%"><em>${esc(zh("衝刺模式", "Crunch mode"))}</em></span>
    </div>`;

    const ritual = `<div class="tl__lane tl__lane--ritual" style="--rows:1">
      <span class="tl__lname">${esc(t("lane.ritual"))}</span>
      ${firstSaturdays().map(d => `<b class="tl__tick" style="left:${pct(d)}%" title="${fmt(d)}"></b>`).join("")}
      <span class="tl__rtext">${RITUALS.map(r => esc(L(r.t))).join("　·　")}</span>
    </div>`;

    $("#tl").innerHTML = `<div class="tl__in"><div class="tl__months">${months}</div>${lanes}${advLane}${school}${ritual}</div>`;
    $("#time-tbd").innerHTML = SCHED_TBD.map(x => `<li>${esc(L(x))}</li>`).join("");
    layoutTimeline();
    $$("#tl .tl__m").forEach(b => b.addEventListener("click", () => {
      state.mark = +b.dataset.mark;
      $$("#tl .tl__m").forEach(x => x.classList.toggle("is-sel", x === b));
      renderMark();
    }));
    $$("#tl .tl__bar").forEach(a => a.addEventListener("click", () => { adv.stage = +a.dataset.stage; renderAdvisor(); }));
    renderMark();
  }

  // Stack labels into rows by their measured width; labels near the right edge sit left of their dot.
  function layoutTimeline() {
    $$("#tl .tl__lane--deadline, #tl .tl__lane--gate, #tl .tl__lane--adv").forEach(lane => {
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
    $("#tl-panel").innerHTML = `<div class="panel__head panel__head--${m.lane}"><span class="panel__kind">${esc(lane)} · ${m.dl ? esc(L(m.dl)) : `${fmt(m.date)} ${year}`}</span>
      <h3>${esc(L(m.t))}</h3></div>${L(m.d) ? `<p class="panel__p">${esc(L(m.d))}</p>` : ""}
      ${m.pass ? `<dl>${row(t("time.pass"), L(m.pass))}${row(t("time.owner"), L(m.owner))}${row(t("time.ok"), L(m.ok))}</dl>` : ""}`;
  }

  // ---------- advisor ----------
  const adv = { stage: 0, node: "review", view: "instructor", row: 0, n: 8 };
  const tbdLabel = () => (lang === "zh" ? "待決定" : "TBD");
  // Escaped text, with [T3] turned into a link to the decision list and newlines kept.
  const tx = v => esc(L(v)).replace(/\[T(\d+)\]/g, (_, n) => `<a class="tbd" href="#adv-tbd">${tbdLabel()} ${n}</a>`).replace(/\n/g, "<br>");
  const rowHTML = (label, html) => `<div class="kv"><dt>${esc(label)}</dt><dd>${html}</dd></div>`;
  const zh = (a, b) => (lang === "zh" ? a : b);

  function renderAdvisor() {
    $("#adv-floor").innerHTML = ADV_FLOOR.map(f => `<div class="astat"><b>${esc(L(f.n))}</b><span>${esc(L(f.d))}</span></div>`).join("");
    renderAdvStages();
    renderAdvMap();
    $("#adv-tree").textContent = ADV_TREE;
    renderAdvState();
    renderAdvMakeup();
    renderAdvStrike();
    renderAdvHub();
    renderAdvSchema();
    renderAdvVis();
    renderAdvLoad();
    $("#adv-tbd-list").innerHTML = ADV_TBD.map(x => `<li>${esc(L(x))}</li>`).join("");
  }

  function renderAdvStages() {
    const marks = [
      ...["freeze", "jamboree", "roster"].map(k => TIMELINE.find(m => m.key === k))
    ];
    $("#adv-track").innerHTML = `<div class="advtrack__in">
      <div class="tl__months">${monthsHTML()}</div>
      <div class="advtrack__bars">${ADV_STAGES.map((s, i) => `
        <button class="tl__bar${adv.stage === i ? " is-sel" : ""}" data-stage="${i}" style="left:${pct(s.start)}%;width:${pct(s.end) - pct(s.start)}%;--shade:${s.shade}">${s.id}</button>
        ${s.after ? `<span class="tl__bar tl__bar--after" style="left:${pct(s.end)}%;width:${pct(s.after) - pct(s.end)}%;--shade:${s.shade}"></span>` : ""}`).join("")}</div>
      <div class="advtrack__marks">${marks.map(m => `<span class="${pct(m.date) > 90 ? "is-flip" : ""}" style="left:${pct(m.date)}%"><i></i>${esc(L(m.t))}</span>`).join("")}</div>
    </div>`;
    $("#adv-stages").innerHTML = ADV_STAGES.map((s, i) => `
      <button class="advstage${adv.stage === i ? " is-sel" : ""}" data-stage="${i}" style="--shade:${s.shade}">
        <span class="advstage__d">${esc(L(s.dates))}</span>
        <span class="advstage__n">${i + 1} ${esc(L(s.name))}</span>
        <span class="advstage__r">${esc(L(s.role))}</span>
      </button>`).join("");
    $$("#adv-track [data-stage], #adv-stages [data-stage]").forEach(b => b.addEventListener("click", () => { adv.stage = +b.dataset.stage; renderAdvStages(); }));
    const s = ADV_STAGES[adv.stage];
    $("#adv-stage-panel").innerHTML = `<div class="panel__head" style="--c:var(--teal)">
        <span class="panel__kind">${zh("階段", "Stage")} ${adv.stage + 1} · ${esc(L(s.dates))}</span>
        <h3>${esc(L(s.name))} · ${esc(L(s.role))}</h3></div>
      <dl>
        ${rowHTML(zh("團隊在做什麼", "What the team does"), tx(s.team))}
        ${rowHTML(zh("具名產出", "Named output"), tx(s.output))}
        ${rowHTML(zh("通過標準", "Pass standard"), tx(s.pass))}
        ${rowHTML(zh("補件期限", "Make-up due"), tx(s.makeup))}
        ${rowHTML(zh("放哪裡", "Goes in"), `<code>60 Advisors/A01/${esc(s.folder)}</code>`)}
        ${s.extra ? rowHTML(zh("另外", "Also"), tx(s.extra)) : ""}
      </dl>`;
  }

  function renderAdvMap() {
    const cols = [["duty", "duty"], ["loc", "loc"], ["file", "file"], ["tpl", "tpl"], ["who", "who"], ["ver", "ver"], ["due", "due"], ["row", "row"]];
    const mono = { loc: 1, file: 1, row: 1 };
    const cell = (r, k) => `<td data-label="${esc(t("adv.th." + k))}"${k === "duty" ? ' class="dm__duty"' : ""}>${mono[k] ? `<code>${tx(r[k])}</code>` : tx(r[k])}</td>`;
    $("#adv-map").innerHTML = `<div class="dmwrap"><table class="dm"><thead><tr>${cols.map(([k]) => `<th>${esc(t("adv.th." + k))}</th>`).join("")}</tr></thead>
      ${ADV_MAP_GROUPS.map(g => `<tbody><tr class="dm__g"><th colspan="${cols.length}">${esc(L(g.name))}</th></tr>
        ${ADV_MAP.filter(r => r.g === g.id).map(r => `<tr>${cols.map(([k]) => cell(r, k)).join("")}</tr>`).join("")}</tbody>`).join("")}
    </table></div>`;
  }

  function renderAdvState() {
    const arrow = lbl => `<span class="fsm__arrow">${lbl ? `<em>${esc(L(lbl))}</em>` : ""}<svg viewBox="0 0 24 10" aria-hidden="true"><path d="M0 5h22M18 1l4 4-4 4"/></svg></span>`;
    $("#adv-state").innerHTML = ADV_STATE_LANES.map(l => `<div class="fsm"><h4>${esc(L(l.name))}</h4><div class="fsm__row">
      ${l.nodes.map((n, i) => `<button class="fsm__n${n.tbd ? " is-tbd" : ""}${n.end ? " is-end" : ""}${adv.node === n.id ? " is-sel" : ""}" data-node="${n.id}">${esc(L(n.t))}</button>${i < l.nodes.length - 1 ? arrow(n.to) : ""}`).join("")}
    </div></div>`).join("");
    $$("#adv-state [data-node]").forEach(b => b.addEventListener("click", () => { adv.node = b.dataset.node; renderAdvState(); }));
    const node = ADV_STATE_LANES.flatMap(l => l.nodes).find(n => n.id === adv.node);
    $("#adv-state-panel").innerHTML = `<div class="panel__head" style="--c:var(--accent)"><h3>${esc(L(node.t))}</h3></div><p class="panel__p">${tx(ADV_STATE_INFO[adv.node].d)}</p>`;
  }

  function renderAdvMakeup() {
    const th = t("adv.makeup.th");
    $("#adv-makeup").innerHTML = `<div class="dmwrap"><table class="dm dm--small"><thead><tr>${th.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>
      ${ADV_MAKEUP.map(m => `<tr><td data-label="${esc(th[0])}" class="dm__duty">${m.s}</td><td data-label="${esc(th[1])}">${tx(m.end)}</td><td data-label="${esc(th[2])}">${tx(m.due)}</td><td data-label="${esc(th[3])}">${tx(m.s === "S5" ? ADV_MAKEUP_FAIL5 : ADV_MAKEUP_FAIL)}</td></tr>`).join("")}
    </tbody></table></div>`;
  }

  function renderAdvStrike() {
    const box = (k, cls) => `<div class="acard ${cls}"><h3>${esc(t("adv.strike." + k))}</h3><ul class="advlist">${ADV_STRIKE[k].map(x => `<li>${tx(x)}</li>`).join("")}</ul></div>`;
    $("#adv-strike").innerHTML = box("on", "") + box("off", "") + box("how", "acard--wide");
  }

  const HUB_VIEWS = [["instructor", { zh: "Instructor", en: "Instructor" }], ["self", { zh: "Advisor A 本人", en: "Advisor A (self)" }], ["team", { zh: "2027 隊員", en: "2027 team" }]];

  function renderAdvHub() {
    $("#adv-hub-tabs").innerHTML = HUB_VIEWS.map(([id, n]) => `<button role="tab" data-view="${id}" aria-selected="${adv.view === id}">${esc(L(n))}</button>`).join("");
    $$("#adv-hub-tabs button").forEach(b => b.addEventListener("click", () => {
      adv.view = b.dataset.view;
      if (adv.view === "self") adv.row = 0;
      renderAdvHub();
    }));
    const th = t("adv.hub.th");
    const full = adv.view !== "team";
    const rows = ADV_SAMPLE.map((r, i) => ({ ...r, i })).filter(r => adv.view !== "self" || r.i === 0);
    const glyph = { pass: ["✓", "is-pass"], now: ["●", "is-now"], fix: [zh("補", "M"), "is-fix"], fail: ["✗", "is-fail"], "": ["·", ""] };
    const rep = r => ({ ok: zh("已確認", "Confirmed"), due: zh("待確認", "To confirm"), late: zh("逾期 6 天", "6 days late") }[r.rep]);
    const head = [th.name, th.group, th.scope, ...(full ? [th.stages, th.hours, th.rate, th.report, th.strikes] : []), th.latest];
    $("#adv-hub").innerHTML = `${adv.view === "instructor" ? `<p class="hub__queue">${esc(t("adv.hub.queue"))}</p>` : ""}
      <div class="hubscroll"><table class="hubt"><thead><tr>${head.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>
      ${rows.map(r => `<tr class="${adv.row === r.i ? "is-sel" : ""}" data-row="${r.i}">
        <td><button data-row="${r.i}">${esc(r.name)}</button>${full && r.sup ? `<small>Supporting list</small>` : ""}</td>
        <td>${r.group}</td><td>${esc(L(r.scope))}</td>
        ${full ? `<td class="hubt__st">${r.st.map(x => `<i class="${glyph[x][1]}">${glyph[x][0]}</i>`).join("")}</td>
        <td class="${r.h < 8 ? "is-warn" : ""}">${r.h} / 8 h</td>
        <td class="${r.rate < 50 ? "is-warn" : ""}">${r.rate}%</td>
        <td class="${r.rep === "late" ? "is-warn" : ""}">${rep(r)}</td>
        <td>${r.strikes} / 3</td>` : ""}
        <td><code>${esc(r.latest.f)}</code> <small>${r.latest.d}</small></td>
      </tr>`).join("")}
      </tbody></table></div>
      <p class="hub__note">${full ? esc(t("adv.hub.legend")) + "　" : ""}${esc(t("adv.hub.pick"))}</p>`;
    $$("#adv-hub tr[data-row]").forEach(tr => tr.addEventListener("click", () => { adv.row = +tr.dataset.row; renderAdvHub(); }));
    const r = ADV_SAMPLE[adv.row];
    const check = (ok, label) => `<li class="${ok ? "is-ok" : "is-miss"}">${esc(label)}</li>`;
    $("#adv-hub-panel").innerHTML = `<div class="panel__head" style="--c:var(--gold)"><span class="panel__kind">${zh("示範資料", "Sample data")} · ${zh("2027 年 5 月", "May 2027")}</span><h3>${esc(r.name)}</h3></div>
      <dl>${rowHTML(th.scope, esc(L(r.scope)))}
      ${rowHTML(th.latest, `<code>${esc(r.latest.f)}</code>`)}
      ${full ? rowHTML(zh("本月底線", "Floor this month"), `<ul class="hubcheck">
        ${check(r.h >= 8, zh(`實體 ${r.h} / 8 小時`, `On site ${r.h} / 8 hours`))}
        ${check(r.sessions >= 2, zh(`組別會議 ${r.sessions} 次（至少 2）`, `Group meetings ${r.sessions} (at least 2)`))}
        ${check(r.rate >= 50, zh(`累計出席率 ${r.rate}%（至少 50%）`, `Attendance to date ${r.rate}% (at least 50%)`))}
        ${check(r.self, zh("自主會議紀錄", "Self-run meeting minutes"))}
        ${check(r.meet, zh("Advisor 月會", "Advisor meeting"))}
        ${check(r.rep !== "late", zh(`月報：${rep(r)}`, `Report: ${rep(r)}`))}
      </ul>`) : rowHTML(zh("其他欄位", "Other columns"), esc(zh("隊員看不到狀態、時數與 strike。", "The team does not see status, hours or strikes.")))}
      </dl>`;
  }

  function renderAdvSchema() {
    $("#adv-schema").innerHTML = ADV_SCHEMA.map(x => `<div class="acard"><h3><code>${esc(x.t)}</code></h3><p class="acard__note">${esc(L(x.k))}</p><p class="advschema__c">${esc(x.c)}</p></div>`).join("");
  }

  function renderAdvVis() {
    const mark = { y: "●", s: "○", w: zh("書面", "Written"), n: "–" };
    $("#adv-vis").innerHTML = `<div class="hubscroll"><table class="hubt hubt--vis"><thead><tr><th></th>${ADV_VIS_COLS.map(c => `<th>${esc(L(c))}</th>`).join("")}</tr></thead><tbody>
      ${ADV_VIS.map(r => `<tr><td>${esc(L(r.f))}</td>${[...r.v].map(c => `<td class="v-${c}">${mark[c]}</td>`).join("")}</tr>`).join("")}
    </tbody></table></div>`;
  }

  function renderAdvLoad() {
    $("#adv-load-tabs").innerHTML = [5, 8, 10].map(n => `<button role="tab" data-n="${n}" aria-selected="${adv.n === n}">${n} ${zh("位 advisor", "advisors")}</button>`).join("");
    $$("#adv-load-tabs button").forEach(b => b.addEventListener("click", () => { adv.n = +b.dataset.n; renderAdvLoad(); }));
    const th = t("adv.load.th");
    const rows = ADV_LOAD.map(x => { const c = x.count(adv.n); return { t: x.t, c, min: x.min, h: c * x.min / 60 }; });
    const total = rows.reduce((a, x) => a + x.h, 0);
    const n1 = v => (Math.round(v * 10) / 10).toString();
    $("#adv-load").innerHTML = `<div class="dmwrap"><table class="dm dm--small"><thead><tr>${th.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>
      ${rows.map(r => `<tr><td data-label="${esc(th[0])}" class="dm__duty">${esc(L(r.t))}</td><td data-label="${esc(th[1])}">${r.c}</td><td data-label="${esc(th[2])}">${r.min} ${zh("分鐘", "min")}</td><td data-label="${esc(th[3])}">${n1(r.h)} h</td></tr>`).join("")}
    </tbody></table></div>
    <div class="advload">
      <div class="astat"><b>${n1(total)} h</b><span>${esc(t("adv.load.total"))}</span></div>
      <div class="astat"><b>${n1(total / 52 / 2)} h</b><span>${esc(t("adv.load.week"))}</span></div>
      <div class="astat"><b>${n1(adv.n * 30 / 60)} h</b><span>${esc(t("adv.load.peak"))}</span></div>
    </div>`;
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
  addEventListener("resize", () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(() => { drawLines(); paintGraph(); layoutTimeline(); paintFlow(false); layoutYear(); }); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { drawLines(); paintGraph(); layoutTimeline(); paintFlow(false); layoutYear(); });

  // Hero and section intros fade up too.
  $$(".hero > *, .sec .eyebrow, .sec .headline, .sec .lede").forEach(e => e.classList.add("reveal"));
  renderAll();
})();
