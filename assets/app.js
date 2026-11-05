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

  const state = { node: "t-facts", hover: null, folder: (document.querySelector("#tree") && document.querySelector("#tree").dataset.folder) || "d31", role: null, mark: Math.max(0, TIMELINE.findIndex(m => m.key === "freeze")) };
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- language ----------
  function applyStatic() {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    $$("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    $$(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  }

  // Each page holds only some sections; a renderer runs when its root is on the page.
  function renderAll() {
    applyStatic();
    if (window.SITE) window.SITE.render(lang);
    [["#problems-list", renderProblems], ["#astats", renderAudit], ["#sys-lessons", renderSystem], ["#graph", renderGraph],
     ["#tree", renderDepth], ["#yr", renderYear], ["#board", renderFlow], ["#res-why", renderResearch], ["#ph-steps", renderPhoto],
     ["#ppl-list", renderPeople], ["#adv-roles", renderAdvRoles], ["#adv-floor", renderAdvisor], ["#tl", renderTimeline],
     ["#facttypes", renderFacts], ["#stds", renderStandards]].forEach(([root, fn]) => { if ($(root)) fn(); });
    renderVillage();
    observeReveal();
  }

  // The village is heavy, so it waits until the reader is close to it.
  let villageOn = false;
  function renderVillage() {
    const root = $("#vg-root");
    if (!root || !window.Village) return;
    if (villageOn) return window.Village.render(lang);
    const start = () => {
      if (villageOn) return;
      villageOn = true;
      window.Village.render(lang);
      const role = new URLSearchParams(location.search).get("role");
      if (role) window.Village.focusRole(role);
    };
    if (!("IntersectionObserver" in window) || location.search.includes("role=") || location.hash === "#village") return start();
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); start(); } }, { rootMargin: "800px 0px" });
    io.observe(root);
  }
  // Roles are drawn on the village, which lives on another page when this one has none.
  const goVillage = code => {
    if (window.Village && $("#vg-root")) return window.Village.focusRole(code);
    location.href = `system.html?role=${encodeURIComponent(code)}#village`;
  };

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
    if ($("#layers")) {
    $("#layers").innerHTML = LAYERS.map((l, i) => `
      <div class="layer reveal" style="--i:${i};--d:${i * 90}ms"><span class="layer__n">${l.n}</span>
        <div><h4>${esc(L(l.name))}</h4><p>${esc(L(l.d))}</p></div></div>`).join("");
    $("#template").innerHTML = TEAM_TEMPLATE.map(x => `<span>${esc(x)}</span>`).join("");
    $("#states").innerHTML = STATES.map(s => `<li><b>${esc(L(s.name))}</b><span>${esc(L(s.d))}</span></li>`).join("");
    }

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
  // <div id="yr" data-lanes="adv"> narrows the chart to those lanes, keeping the iGEM and gate strips.
  const YLANES = ($("#yr") && $("#yr").dataset.lanes || "").split(" ").filter(Boolean);
  const YKEEP = i => !YLANES.length || i.lane === "igem" || i.lane === "gate" || YLANES.includes(i.lane);
  const YSHOWN = new Set(YEAR_ITEMS.filter(YKEEP).map(i => i.id));
  const YITEMS = YEAR_ITEMS.filter(YKEEP).map(i => ({ ...i, feeds: (i.feeds || []).filter(f => YSHOWN.has(f)), day: yday(i.d), endDay: (i.end || i.e) ? yday(i.end || i.e) : null })).sort((a, b) => a.day - b.day);
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
      ${YEAR_LANES.filter(l => !YLANES.length || YLANES.includes(l.id)).map(l => `<div class="yl yl--${l.id}" style="--c:var(--${l.c})"><span class="yl__name">${esc(L(l.name))}</span>${docs(l.id).map(i => yTail(i) + yChip(i)).join("")}</div>`).join("")}
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
        ${it.id === "photo" ? rowHTML(t("nav.flow"), `<a class="ylink ylink--a" href="system.html#photo" style="--c:var(--pink)"><i></i>${esc(t("ph.see"))}</a>`) : ""}
        ${until ? row(t("year.until"), until) : ""}
        ${inn.length ? rowHTML(t("year.from"), `<div class="ylinks">${inn.map(link).join("")}</div>`) : ""}
        ${out.length ? rowHTML(t("year.to"), `<div class="ylinks">${out.map(link).join("")}</div>`) : ""}
      </dl>`;
    $$("[data-go]", p).forEach(b => b.addEventListener("click", () => ySelect(b.dataset.go, true)));
  }

  if ($("#yr")) {
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
  }

  // ---------- flow ----------
  const roleById = Object.fromEntries([...ROLES, ...FLOW_CAST].map(r => [r.id, r]));
  const tierName = { s: () => t("ppl.students"), a: () => t("ppl.advisors"), i: () => t("ppl.staff") };
  // <div id="flow-tabs" data-only="research run"> limits the tabs to those scenarios.
  const FLOW_ONLY = ($("#flow-tabs") && $("#flow-tabs").dataset.only || "").split(" ").filter(Boolean);
  const FLOW_SET = SCENARIOS.map((s, i) => i).filter(i => !FLOW_ONLY.length || FLOW_ONLY.includes(SCENARIOS[i].id));
  const flow = { sc: FLOW_SET[0], step: 0, playing: false, seen: false, timer: null };
  const STEP_MS = 3800;

  function renderFlow() {
    $("#flow-tabs").innerHTML = FLOW_SET.map(i => { const s = SCENARIOS[i]; return `
      <button role="tab" data-sc="${i}" aria-selected="${i === flow.sc}" style="--c:var(--${s.color})"><i></i>${esc(L(s.name))}</button>`; }).join("");
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
      const tl = FLOW_TILES.find(x => x.id === id);
      el.hidden = sc.focus ? !steps.some(s => s.at === id) : !!tl.only;
      el.classList.toggle("is-now", id === cur.at);
      el.classList.toggle("is-past", id !== cur.at && visited.includes(id));
      el.classList.toggle("is-path", steps.some(s => s.at === id));
      el.classList.toggle("is-blocked", id === cur.at && !!(cur.gate && cur.gate.block));
      el.classList.toggle("is-passed", id === cur.at && !!(cur.gate && !cur.gate.block));
      $$(".chip", el).forEach(c => c.classList.toggle("is-act", id === cur.at && c.dataset.role === cur.who));
    });

    const board = $("#board");
    board.classList.toggle("board--focus", !!sc.focus);
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
      ${cur.cost ? `<div class="fpanel__kv"><span>${esc(t("flow.cost"))}</span><span>${esc(L(cur.cost))}</span></div>` : ""}
      ${sc.id === "research" && flow.step === steps.length - 1 ? `<a class="ylink ylink--a" href="research.html" style="--c:var(--purple)"><i></i>${esc(t("res.see"))}</a>` : ""}
      ${cur.who === "photo" ? `<a class="ylink ylink--a" href="system.html#photo" style="--c:var(--pink)"><i></i>${esc(t("ph.see"))}</a>` : ""}
      ${stateIx >= 0 ? `<div class="fpanel__kv"><span>${esc(t("flow.state"))}</span><span class="pills">${STATES.map((s, i) => `<em class="${i === stateIx ? "is-on" : i < stateIx ? "is-past" : ""}">${esc(L(s.name))}</em>`).join("")}</span></div>` : ""}
      <div class="sheet">
        <div class="sheet__name"><svg viewBox="0 0 16 16" aria-hidden="true"><rect x="1" y="1" width="14" height="14" rx="2"/><path d="M1 6h14M1 11h14M6 1v14"/></svg>${esc(sc.book || "Hub")} / ${esc(L(sc.register))}</div>
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
    const at = FLOW_SET.indexOf(sc), len = FLOW_SET.length;
    if (s >= n) { sc = FLOW_SET[(at + 1) % len]; s = 0; }
    if (s < 0) { sc = FLOW_SET[(at - 1 + len) % len]; s = SCENARIOS[sc].steps.length - 1; }
    goFlow(sc, s);
  }
  function playFlow() {
    flow.playing = true; $("#flow-play").classList.add("is-playing"); $("#flow-play").setAttribute("aria-label", t("flow.pause"));
    clearTimeout(flow.timer);
    const tick = () => { flow.timer = setTimeout(() => { stepFlow(1); tick(); }, SCENARIOS[flow.sc].ms || STEP_MS); };
    tick();
  }
  function stopFlow() {
    flow.playing = false; flow.seen = true; $("#flow-play").classList.remove("is-playing"); $("#flow-play").setAttribute("aria-label", t("flow.play"));
    clearTimeout(flow.timer);
  }
  // #flow-research (or any scenario id) opens that tab at step 1, paused, so a presenter drives it.
  function openFlowFromHash(smooth) {
    const m = /^#flow-([a-z]+)$/.exec(location.hash);
    const i = m ? SCENARIOS.findIndex(s => s.id === m[1]) : -1;
    if (i < 0 || !$("#board") || !FLOW_SET.includes(i)) return;
    stopFlow(); goFlow(i, 0);
    $(".flow__bar").scrollIntoView({ block: "start", behavior: smooth ? "smooth" : "instant" });
  }
  addEventListener("hashchange", () => openFlowFromHash(true));
  if ($("#board")) {
  $$("[data-flow-jump]").forEach(a => a.addEventListener("click", e => {
    e.preventDefault();
    history.pushState(null, "", a.getAttribute("href"));
    openFlowFromHash(true);
  }));
  $("#flow-play").addEventListener("click", () => (flow.playing ? stopFlow() : playFlow()));
  $("#flow-prev").addEventListener("click", () => { stopFlow(); stepFlow(-1); });
  $("#flow-next").addEventListener("click", () => { stopFlow(); stepFlow(1); });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting && !flow.seen && !reduce) { flow.seen = true; playFlow(); }
      if (!e.isIntersecting && flow.playing) stopFlow();
    }), { threshold: 0.35 }).observe($("#board"));
  }
  }

  // ---------- people ----------
  const GROUPS = [
    ["media"], ["wiki"], ["wet"], ["dry"], ["hw"], ["hp"], ["ops"], ["adv"], ["staff"]
  ];
  const PCOLOR = { wet: "teal", dry: "green", hw: "orange", hp: "indigo", wiki: "blue", media: "pink", ops: "ink", adv: "gold", staff: "ink" };
  const groupName = g => g === "staff" ? t("ppl.staff") : L(VILLAGE_DISTRICTS.find(d => d.id === g).name);
  const hoursRange = r => {
    const on = r.hrs.filter(h => h > 0);
    if (!on.length) return "—";
    const lo = Math.min(...on), hi = Math.max(...on);
    return lo === hi ? `${hi}` : `${lo}–${hi}`;
  };
  const pp = { group: "media", q: "" };

  function renderPeople() {
    $("#ppl-tag").textContent = t("ppl.tag");
    const seatDots = (kind, cls) => PEOPLE.roles.filter(r => r.kind === kind).flatMap(r =>
      Array.from({ length: kind === "s2" ? r.sec : r.seats }, () => `<i class="${cls}" data-role="${r.code}" style="--c:var(--${PCOLOR[r.group]})"></i>`)).join("");
    const adults = Array.from({ length: 12 }, () => `<i class="seat seat--adult"></i>`).join("");
    $("#crowd").innerHTML = `
      <div class="crowd__g"><div class="crowd__dots">${seatDots("s", "seat")}</div><p><b>30</b> ${esc(t("ppl.primary"))}</p></div>
      <div class="crowd__g"><div class="crowd__dots">${seatDots("s2", "seat seat--sec")}</div><p><b>22</b> ${esc(t("ppl.secondary"))}</p></div>
      <div class="crowd__g"><div class="crowd__dots">${seatDots("a", "seat seat--adv")}</div><p><b>≈10</b> ${esc(t("ppl.adv"))}</p></div>
      <div class="crowd__g"><div class="crowd__dots">${adults}</div><p><b>12</b> ${esc(t("ppl.adults"))}</p></div>`;
    $("#ppl-rules").innerHTML = PEOPLE_RULES.map(x => `<div class="acard"><h3>${esc(L(x.t))}</h3><p class="acard__note">${esc(L(x.d))}</p></div>`).join("");
    $("#ppl-load").innerHTML = PEOPLE.load.map((l, i) => {
      const d = new Date(Date.UTC(2026, 10 + i, 1));
      const label = lang === "zh" ? `${d.getUTCMonth() + 1}月` : d.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" });
      return `<div class="pl__m${l.u >= .8 ? " is-hot" : ""}"><span class="pl__v">${Math.round(l.u * 100)}%</span><span class="pl__b"><i style="height:${Math.max(2, l.u * 100)}%"></i></span><span class="pl__k">${label}</span></div>`;
    }).join("");
    $("#ppl-tabs").innerHTML = [`<button data-g="all" aria-pressed="${pp.group === "all"}">${esc(t("ppl.all"))}</button>`, ...GROUPS.map(([g]) => `<button data-g="${g}" aria-pressed="${pp.group === g}" style="--c:var(--${PCOLOR[g]})"><i></i>${esc(groupName(g))}</button>`)].join("");
    $$("#ppl-tabs button").forEach(b => b.addEventListener("click", () => { pp.group = b.dataset.g; pp.q = ""; $("#ppl-q").value = ""; renderPeople(); }));
    const q = $("#ppl-q"); q.placeholder = t("ppl.search"); q.setAttribute("aria-label", t("ppl.search"));
    q.oninput = () => { pp.q = q.value; paintRoleList(); };
    $("#ppl-decided").innerHTML = PEOPLE_DECIDED.map(x => `<li>${esc(L(x))}</li>`).join("");
    $("#ppl-tbd").innerHTML = PEOPLE_TBD.map(x => `<li>${esc(L(x))}</li>`).join("");
    paintRoleList();
  }

  function roleCard(r) {
    const seat = r.kind === "s2" ? `${t("ppl.sec")} ×${r.sec}` : r.kind === "i" ? `${t("ppl.func")} ×${r.seats}` : r.code === "LAD" ? zh("可從缺", "may stay empty") : `×${r.seats}`;
    const max = Math.max(5, ...r.hrs);
    const spark = `<span class="spark" aria-hidden="true">${r.hrs.map(h => `<i style="height:${Math.max(h ? 12 : 3, h / max * 100)}%"></i>`).join("")}</span>`;
    const files = [...r.tabs, ...r.folders];
    const backup = typeof r.backup === "string" && PEOPLE.roles.some(x => x.code === r.backup) ? `<code>${esc(r.backup)}</code>` : esc(L(r.backup));
    return `<article class="rc" style="--c:var(--${PCOLOR[r.group]})" data-rc="${r.code}">
      <header class="rc__top"><code>${esc(r.code)}</code><h4>${esc(L(r.name))}</h4><span class="rc__n">${esc(seat)}</span></header>
      <p class="rc__own">${esc(L(r.own))}</p>
      <dl class="rc__d">
        <div><dt>${esc(t("ppl.week"))}</dt><dd>${r.week.map(w => esc(L(w))).join(zh("；", "; "))}</dd></div>
        <div><dt>${esc(t("ppl.time"))}</dt><dd class="rc__t">${spark}<span>${esc(hoursRange(r))} ${esc(t("ppl.h"))}</span></dd></div>
        ${r.peak.length ? `<div><dt>${esc(t("ppl.peak"))}</dt><dd>${r.peak.map(p => esc(L(p))).join(zh("、", ", "))}</dd></div>` : ""}
        <div><dt>${esc(t("ppl.backup"))}</dt><dd>${backup}</dd></div>
        <div><dt>${esc(t("ppl.when"))}</dt><dd>${esc(L(r.when))}</dd></div>
        ${files.length ? `<div><dt>${esc(t("ppl.file"))}</dt><dd class="rc__f">${files.slice(0, 4).map(f => `<code>${esc(f)}</code>`).join("")}${files.length > 4 ? `<small>+${files.length - 4}</small>` : ""}</dd></div>` : ""}
      </dl>
      ${r.note ? `<p class="rc__note">${esc(L(r.note))}</p>` : ""}
      <button class="rc__go" data-vg="${r.code}">${esc(t("ppl.inv"))}</button>
    </article>`;
  }

  function paintRoleList() {
    const needle = pp.q.trim().toLowerCase();
    const list = PEOPLE.roles.filter(r => {
      if (needle) return [r.code, r.name.zh, r.name.en, r.own.zh, r.own.en, ...r.week.flatMap(w => [w.zh, w.en]), ...r.fit.flatMap(w => [w.zh, w.en]), ...r.tabs, ...r.folders].join(" ").toLowerCase().includes(needle);
      return pp.group === "all" || r.group === pp.group;
    });
    const groups = needle || pp.group === "all" ? GROUPS.map(g => g[0]) : [pp.group];
    $("#ppl-list").innerHTML = list.length ? groups.map(g => {
      const rs = list.filter(r => r.group === g);
      if (!rs.length) return "";
      const blurb = g === "staff" ? zh("功能，不是席位。一位成人可兼多項；未列姓名。", "Functions, not seats. One adult can hold several; no names.") : g === "adv" ? zh("具名範圍每階段與 instructor 確認。下面是容量估算，不是席位。五個階段見 Student Advisor。", "Named scope is agreed with an instructor each stage. These are capacity estimates, not seats. The five stages are under Student Advisor.") : L(VILLAGE_DISTRICTS.find(d => d.id === g).blurb);
      return `<section class="rcg"><h4 class="rcg__h" style="--c:var(--${PCOLOR[g]})"><i></i>${esc(groupName(g))}<small>${esc(blurb)}</small></h4><div class="rcg__grid">${rs.map(roleCard).join("")}</div></section>`;
    }).join("") : `<p class="note">${esc(t("ppl.none"))}</p>`;
    $$("#ppl-list [data-vg]").forEach(b => b.addEventListener("click", () => goVillage(b.dataset.vg)));
  }

  // ---------- research: why, structure, dates, who, time, leads ----------
  function renderResearch() {
    $("#res-why").innerHTML = RESEARCH_WHY.map(x => `<div class="rs-stat"><b>${esc(L(x.n))}</b><h4>${esc(L(x.t))}</h4><p>${esc(L(x.d))}</p></div>`).join("");
    $("#res-chain").innerHTML = RESEARCH_CHAIN.map(x => `<article class="rs-link"><span class="rs-link__id">${x.id}</span><h4>${esc(x.name)}</h4><code>${esc(x.loc)}</code><p>${esc(L(x.d))}</p><small><b>${esc(t("res.reader"))}</b> ${esc(L(x.r))}</small></article>`).join("");
    $("#res-around").innerHTML = RESEARCH_AROUND.map(x => `<article class="rs-sat"><h4>${esc(L(x.name))}</h4><code>${esc(x.loc)}</code><p>${esc(L(x.d))}</p></article>`).join("");
    $("#res-dates").innerHTML = RESEARCH_DATES.map((x, i) => `<article class="rs-date" style="--c:var(--${x.c})"><header><b>${esc(lang === "zh" ? x.n : (i ? "29 Nov" : "25 Nov"))}</b><span>${esc(x.k)} · ${esc(L(x.t))}</span></header><ul>${x.items.map(y => `<li>${esc(L(y))}</li>`).join("")}</ul>${i ? "" : `<p class="rs-date__warn">${esc(t("res.dates.warn"))}</p>`}</article>`).join("");
    $("#res-miles").innerHTML = RESEARCH_MILES.map(x => `<li><b>${esc(L(x.d))}</b><span>${esc(x.n)}</span><p>${esc(L(x.t))}</p></li>`).join("");
    $("#res-who").innerHTML = simpleTable(t("res.who.th"), RESEARCH_WHO.map(x => [x.who, x.what, x.when, x.min]));
    $("#res-totals").innerHTML = RESEARCH_TOTALS.map(x => `<div><b>${esc(L(x.n))}</b><span>${esc(L(x.t))}</span></div>`).join("");
    $("#res-steps").innerHTML = simpleTable(t("res.steps.th"), RESEARCH_STEPS.map(x => [x.step, x.what, x.min, x.who]));
    $("#res-evidence").innerHTML = RESEARCH_EVIDENCE.map((x, i) => `<li><span class="sysrules__n">${i + 1}</span><div><h4>${esc(L(x.t))}</h4><p>${esc(L(x.d))}</p></div></li>`).join("");
    $("#res-fair").innerHTML = RESEARCH_FAIR.map(x => `<li>${esc(L(x))}</li>`).join("");
    $("#res-rules").innerHTML = RESEARCH_RULES.map((x, i) => `<li><span class="sysrules__n">${i + 1}</span><div><h4>${esc(L(x.t))}</h4><p>${esc(L(x.d))}</p></div></li>`).join("");
    $("#res-rights").innerHTML = RESEARCH_RIGHTS.map(x => `<li>${esc(L(x))}</li>`).join("");
  }

  // ---------- photo system ----------
  function renderPhoto() {
    $("#ph-steps").innerHTML = PHOTO.steps.map((s, i) => `<li><span class="ph__n">${i + 1}</span><div><h4>${esc(L(s.t))}</h4><small>${esc(L(s.who))}</small><p>${esc(L(s.d))}</p></div></li>`).join("");
    $("#ph-name").innerHTML = `<div class="ph__file" aria-label="20270513_WET_EPB_R0412_bench-setup_03_M0142_P007.jpg">${PHOTO.name.map((n, i) => `<button class="ph__seg" data-ph="${i}" aria-pressed="${i === ph.sel}">${esc(n.k)}</button>${i < PHOTO.name.length - 1 ? "<i>_</i>" : ""}`).join("")}<i>${esc(PHOTO.ext)}</i></div>
      <p class="ph__mean"><code>${esc(PHOTO.name[ph.sel].k)}</code> ${esc(L(PHOTO.name[ph.sel].t))}</p>`;
    $$("#ph-name [data-ph]").forEach(b => b.addEventListener("click", () => { ph.sel = +b.dataset.ph; renderPhoto(); }));
    $("#ph-home").innerHTML = PHOTO.homes.map(h => `<div class="kv"><dt>${esc(L(h.k))}</dt><dd><code>${esc(h.v)}</code></dd></div>`).join("");
    $("#ph-duty").innerHTML = PHOTO.duty.map(h => `<div class="kv"><dt>${esc(L(h.k))}</dt><dd>${esc(L(h.v))}</dd></div>`).join("");
    $("#ph-rules").innerHTML = PHOTO.rules.map(x => `<li>${esc(L(x))}</li>`).join("");
    const go = $("#ph-village");
    go.textContent = t("ph.village");
    go.onclick = () => goVillage("PHO");
  }
  const ph = { sel: 2 };

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
      ${ADV_STAGES.map((s, i) => `<a class="tl__bar" href="advisors.html" data-stage="${i}" style="left:${pct(s.start)}%;width:${pct(s.after || s.end) - pct(s.start)}%;--shade:${s.shade}">${s.id} ${esc(L(s.role))}</a>`).join("")}
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
  const adv = { stage: 0, node: "review", view: "instructor", row: 0, n: 10 };
  const tbdLabel = () => (lang === "zh" ? "待決定" : "TBD");
  // Escaped text, with [T3] turned into a link to the decision list and newlines kept.
  const tx = v => esc(L(v)).replace(/\[T(\d+)\]/g, (_, n) => `<a class="tbd" href="advisors.html#adv-tbd">${tbdLabel()} ${n}</a>`).replace(/\n/g, "<br>");
  const rowHTML = (label, html) => `<div class="kv"><dt>${esc(label)}</dt><dd>${html}</dd></div>`;
  const zh = (a, b) => (lang === "zh" ? a : b);

  function renderAdvisor() {
    $("#adv-floor").innerHTML = ADV_FLOOR.map(f => `<div class="astat"><b>${esc(L(f.n))}</b><span>${esc(L(f.d))}</span></div>`).join("");
    renderAdvStages();
    renderAdvMap();
    $("#adv-tree").textContent = ADV_TREE;
    renderAdvState();
    renderAdvLoad();
    // Keeps its position in the list, so a [Tn] reference still lands on item n.
    $("#adv-tbd-list").innerHTML = ADV_TBD.map((x, i) => x ? `<li value="${i + 1}">${esc(L(x))}</li>` : "").join("");
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

  function renderAdvRoles() {
    const rs = PEOPLE.roles.filter(r => r.group === "adv" || r.code === "IAV");
    $("#adv-roles").innerHTML = rs.map(roleCard).join("");
    $$("#adv-roles [data-vg]").forEach(b => b.addEventListener("click", () => goVillage(b.dataset.vg)));
  }

  function renderAdvLoad() {
    $("#adv-load-tabs").innerHTML = [10].map(n => `<button role="tab" data-n="${n}" aria-selected="${adv.n === n}">${n} ${zh("位 advisor", "advisors")}</button>`).join("");
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
  const relayout = () => {
    if ($("#graph")) { drawLines(); paintGraph(); }
    if ($("#tl")) layoutTimeline();
    if ($("#board")) paintFlow(false);
    if ($("#yr")) layoutYear();
  };
  addEventListener("resize", () => { cancelAnimationFrame(rz); rz = requestAnimationFrame(relayout); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);

  // Hero and section intros fade up too.
  $$(".hero > *, .sec .eyebrow, .sec .headline, .sec .lede").forEach(e => e.classList.add("reveal"));
  renderAll();
  openFlowFromHash(false);
  addEventListener("load", () => openFlowFromHash(false), { once: true });
})();
