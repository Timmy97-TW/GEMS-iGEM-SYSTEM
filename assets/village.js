// iGEM Village: a hand-drawn map of the 2027 team system. All content comes from data.js.
// Two stacked SVGs: `world` is static and repainted only when the month changes; `life` holds
// everything that moves, so walking villagers never repaint the buildings.
window.Village = (() => {
  const SVGNS = "http://www.w3.org/2000/svg";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const NARROW = () => innerWidth <= 700;

  let lang = "zh";
  const L = o => (o && typeof o === "object" ? o[lang] : o) || "";
  const t = k => T[lang][k] || "";

  const R = Object.fromEntries(PEOPLE.roles.map(r => [r.code, r]));
  const B = Object.fromEntries(VILLAGE_BUILDINGS.map(b => [b.id, b]));
  const D = Object.fromEntries(VILLAGE_DISTRICTS.map(d => [d.id, d]));
  const dColor = id => (D[id].c === "ink" ? "#56606e" : `var(--${D[id].c})`);
  // A role's home is the first building that names it as its own (not a function building).
  const HOME = { "全隊": "gallery" };
  VILLAGE_BUILDINGS.forEach(b => { if (!b.fn) b.roles.forEach(c => { HOME[c] = HOME[c] || b.id; }); });
  // Hand-offs from people.json, plus the Lab-to-figure step from this site's Run flow, which
  // people.json leaves implicit ("LAB → FCT, FIG → XCK").
  const HANDOFFS = [...PEOPLE.handoffs, {
    a: "LAB", b: "FIG", ids: "R → F", site: 1, m: [5, 6, 7, 8, 9, 10],
    what: { zh: "有結果的 Run，要做成圖 F", en: "A Run with results, to become figure F" },
    how: { zh: "有新結果時", en: "When there is a new result" }
  }];
  const roleName = c => (c === "全隊" ? (lang === "zh" ? "全隊" : "Everyone") : L(R[c].name));

  const Y0 = Date.UTC(2026, 10, 1), DAY = 864e5, SPAN = 394;
  const yday = d => (Date.parse(d + "T00:00:00Z") - Y0) / DAY;
  const monthOf = day => { const x = new Date(Y0 + Math.floor(day) * DAY); return (x.getUTCFullYear() - 2026) * 12 + x.getUTCMonth() - 10; };
  const monthStart = i => (Date.UTC(2026, 10 + i, 1) - Y0) / DAY;
  const EVENTS = VILLAGE_EVENTS.map(e => ({ ...e, day: yday(e.d) }));
  const CRUNCH0 = yday("2027-08-28"), CRUNCH1 = yday("2027-10-13"), TRIP0 = yday("2027-10-26"), TRIP1 = yday("2027-11-03");

  const S = { day: monthStart(5), month: 5, playing: false, mode: "map", labels: false, sel: null, q: "", hits: null, district: null, seen: false, lastEv: null, week: null, role: null };

  // ---------- art kit ---------- local coords: (0,0) is the front-bottom-left corner, y goes up as negative.
  const DX = .55, DY = .38;
  let lights = [];
  const num = n => Math.round(n * 10) / 10;
  const poly = (pts, cls, extra = "") => `<polygon class="${cls}" points="${pts.map(p => p.map(num).join(",")).join(" ")}" ${extra}/>`;
  const rect = (x, y, w, h, cls, extra = "") => `<rect class="${cls}" x="${num(x)}" y="${num(y)}" width="${num(w)}" height="${num(h)}" ${extra}/>`;
  const line = (x1, y1, x2, y2, cls = "kl") => `<line class="${cls}" x1="${num(x1)}" y1="${num(y1)}" x2="${num(x2)}" y2="${num(y2)}"/>`;
  const circ = (x, y, r, cls, extra = "") => `<circle class="${cls}" cx="${num(x)}" cy="${num(y)}" r="${num(r)}" ${extra}/>`;
  const txt = (x, y, s, size, cls = "tk") => `<text class="${cls}" x="${num(x)}" y="${num(y)}" font-size="${size}" text-anchor="middle">${esc(s)}</text>`;
  const shadow = (w, d) => poly([[-4, 2], [w + 3, 3], [w + d * DX + 12, -d * DY + 8], [w + d * DX, -d * DY - 2]], "shd");
  const sideWall = (w, h, d, cls = "ws") => poly([[w, 0], [w + d * DX, -d * DY], [w + d * DX, -h - d * DY], [w, -h]], cls);
  const front = (w, h, cls = "wf") => rect(0, -h, w, h, cls);
  const flatTop = (w, h, d, cls = "ro") => poly([[0, -h], [w, -h], [w + d * DX, -h - d * DY], [d * DX, -h - d * DY]], cls);
  const win = (x, y, w, h, lv = 1, round) => {
    lights.push(`<rect class="wl l${lv}" x="${num(x)}" y="${num(y)}" width="${num(w)}" height="${num(h)}" rx="${round ? w / 2 : 1.5}"/>`);
    return `<rect class="wo" x="${num(x)}" y="${num(y)}" width="${num(w)}" height="${num(h)}" rx="${round ? w / 2 : 1.5}"/>`;
  };
  const sideWin = (w, xo, yy, s, lv = 2) => {
    const a = w + xo, b = a + s, dy = (xo) * DY / DX, dyb = (xo + s) * DY / DX;
    const pts = [[a, yy - dy], [b, yy - dyb], [b, yy - dyb - s * 1.25], [a, yy - dy - s * 1.25]];
    lights.push(`<polygon class="wl l${lv}" points="${pts.map(p => p.map(num).join(",")).join(" ")}"/>`);
    return poly(pts, "wo");
  };
  const door = (x, w = 13, h = 22, cls = "dr") => rect(x, -h, w, h, cls, 'rx="1.5"') + circ(x + w - 3, -h / 2, 1, "kn");
  const gable = (w, h, d, r) =>
    sideWall(w, h, d) +
    poly([[w, -h], [w + d * DX, -h - d * DY], [w / 2 + d * DX, -h - r - d * DY], [w / 2, -h - r]], "ro") +
    poly([[-3, -h + 2], [w / 2, -h - r - 2], [w / 2 + 1, -h - r + 5], [0, -h + 7]], "rd") +
    poly([[0, 0], [w, 0], [w, -h], [w / 2, -h - r], [0, -h]], "wf");
  const stripes = (x, y, w, n, h = 8) => {
    let s = "";
    for (let i = 0; i < n; i++) s += rect(x + i * w / n, y, w / n, h, i % 2 ? "aw2" : "ac");
    return s;
  };
  const crate = (x, y = 0, s = 11) => rect(x, y - s, s, s, "cr") + line(x, y - s, x + s, y) + line(x + s, y - s, x, y);
  const hanging = (x, y, label, size = 10) => line(x + 7, y - 10, x + 7, y - 6) + rect(x, y - 6, 14, 12, "sg", 'rx="2"') + txt(x + 7, y + 3.5, label, size);
  const lamp = (x, y) => line(x, 0, x, y) + circ(x, y - 2, 2.6, "lp");

  const ART = {
    lab() {
      const w = 130, h = 62, d = 52;
      let s = shadow(w, d) + sideWall(w, h, d) + front(w, h) + flatTop(w, h, d, "ro") + rect(-2, -h - 3, w + 4, 6, "ac", 'rx="1"');
      for (let i = 0; i < 5; i++) { s += win(10 + i * 23 + (i > 1 ? 8 : 0), -50, 14, 15, i % 3 + 1); s += i !== 2 ? win(10 + i * 23 + (i > 1 ? 8 : 0), -28, 14, 15, (i + 1) % 3 + 1) : ""; }
      s += door(57, 16, 24) + sideWin(w, 7, -24, 9) + sideWin(w, 18, -24, 9, 3);
      s += `<path class="pi" d="M28,${-h - 12} v-14 h12 v8 M92,${-h - 16} v-16 h-10"/>` + circ(40, -h - 19, 3, "ac") + circ(82, -h - 32, 2.5, "ac");
      s += rect(60, -h - 22, 26, 12, "ws") + `<path class="kl" d="M108,-${h + 4} v-8 l6,-5 l6,5 v8"/>`;
      s += `<g transform="translate(66,-38)"><path class="sgw" d="M3,-8 h6 v5 l4,8 q1,3 -2,3 h-10 q-3,0 -2,-3 l4,-8z"/></g>`;
      return s;
    },
    wethouse() {
      const w = 88, h = 48, d = 44;
      return shadow(w, d) + rect(w * .72, -h - 26, 9, 22, "br") + gable(w, h, d, 26) + win(10, -38, 15, 15, 1) + win(w - 25, -38, 15, 15, 2) + win(w / 2 - 6, -h - 14, 12, 12, 3, 1) + door(w / 2 - 7) + sideWin(w, 8, -22, 11) + hanging(w - 8, -18, "W", 8);
    },
    safety() {
      const w = 46, h = 38, d = 30;
      return shadow(w, d) + gable(w, h, d, 18) + door(16, 13, 22) + win(4, -32, 9, 9, 1) + win(33, -32, 9, 9, 2) +
        `<polygon class="hz" points="23,${-h - 12} 15,${-h + 1} 31,${-h + 1}"/>` + txt(23, -h - 1, "!", 10, "tkb") +
        circ(w + 12, -24, 6, "lb", 'fill="none"') + line(w + 12, -18, w + 12, 0);
    },
    store() {
      const w = 72, h = 34, d = 42;
      let s = shadow(w, d) + sideWall(w, h, d) + poly([[w, -h], [w + d * DX, -h - d * DY], [w * .72 + d * DX, -h - 16 - d * DY], [w * .72, -h - 16]], "ro") + poly([[w * .72, -h - 16], [w * .72 + d * DX, -h - 16 - d * DY], [w * .28 + d * DX, -h - 20 - d * DY], [w * .28, -h - 20]], "ro");
      s += poly([[0, 0], [w, 0], [w, -h], [w * .72, -h - 16], [w * .28, -h - 20], [0, -h]], "wb");
      s += rect(23, -28, 26, 28, "dr") + line(23, -28, 49, 0, "kw") + line(49, -28, 23, 0, "kw") + win(32, -h - 12, 8, 7, 2);
      return s + crate(-14) + crate(-6, -11, 9) + crate(w + 18, 2);
    },
    orders() {
      const w = 72, h = 36, d = 34;
      return shadow(w, d) + sideWall(w, h, d) + front(w, h) + flatTop(w, h, d) + stripes(-3, -h + 2, w + 6, 8) + win(8, -22, 22, 13, 2) + door(46, 13, 22) +
        rect(w + 14, -18, 11, 18, "ac", 'rx="4"') + rect(-16, -12, 14, 12, "cr") + rect(-14, -22, 11, 10, "cr") + line(-16, -6, -2, -6);
    },
    registry() {
      const w = 90, h = 46, d = 42;
      let s = shadow(w, d) + sideWall(w, h, d) + flatTop(w, h, d) + front(w, h);
      s += poly([[-4, -h], [w + 4, -h], [w / 2, -h - 18]], "ac") + circ(w / 2, -h - 6, 3, "wf");
      [10, 30, 56, 76].forEach(x => { s += rect(x, -h + 4, 5, h - 4, "wb"); });
      return s + rect(39, -30, 13, 30, "dr") + win(17, -30, 10, 12, 1) + win(63, -30, 10, 12, 2) + rect(-6, -3, w + 12, 3, "wb");
    },
    dryhouse() {
      const w = 84, h = 50, d = 44;
      return shadow(w, d) + gable(w, h, d, 24) + win(9, -38, 16, 14, 1) + win(w - 25, -38, 16, 14, 2) + win(w / 2 - 6, -h - 11, 12, 10, 3) + door(w / 2 - 7) + sideWin(w, 9, -22, 11) +
        line(w / 2 + 20, -h - 14, w / 2 + 20, -h - 38) + `<path class="kl" d="M${w / 2 + 12},${-h - 34} h16 M${w / 2 + 14},${-h - 28} h12"/>` +
        rect(-20, -30, 16, 22, "bb") + line(-18, 0, -18, -8) + line(-6, 0, -6, -8) + `<path class="cv" d="M-18,-13 q5,-14 12,-11"/>`;
    },
    compute() {
      const w = 56, h = 36, d = 34;
      let s = shadow(w, d) + sideWall(w, h, d) + front(w, h, "wd") + flatTop(w, h, d, "ro");
      for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) s += win(7 + c * 11, -30 + r * 9, 7, 5, ((r + c) % 3) + 1);
      return s + rect(16, -3, 22, 3, "ac") + `<path class="pi" d="M${w},-8 q10,8 22,-2"/>` + circ(w + 24, -11, 3, "ac");
    },
    library() {
      const w = 76, h = 54, d = 40;
      let s = shadow(w, d) + sideWall(w, h, d) + flatTop(w, h, d) + front(w, h) + rect(-2, -h - 2, w + 4, 5, "ac");
      [8, 30, 53].forEach((x, i) => { lights.push(`<rect class="wl l${i + 1}" x="${x}" y="-42" width="13" height="24" rx="6.5"/>`); s += rect(x, -42, 13, 24, "wo", 'rx="6.5"'); });
      s += door(31, 13, 15) + `<g transform="translate(${w + 12},0)">` + rect(0, -8, 16, 4, "aw2") + rect(1, -12, 14, 4, "ac") + rect(2, -4, 13, 4, "bk") + "</g>";
      return s;
    },
    tasks() {
      const w = 84, d = 36, h = 34;
      let s = poly([[-6, 2], [w + 4, 2], [w + d * DX + 6, -d * DY], [d * DX - 2, -d * DY]], "pv");
      [[0, 0], [w, 0], [d * DX, -d * DY], [w + d * DX, -d * DY]].forEach(([x, y]) => { s += line(x, y, x, y - h, "kp"); });
      for (let i = 0; i < 6; i++) s += line(i * w / 5, -h, i * w / 5 + d * DX, -h - d * DY, "kr");
      s += poly([[0, -h], [w, -h], [w + 2, -h + 3], [2, -h + 3]], "ac");
      s += rect(16, -15, 54, 4, "bk") + line(22, -11, 22, 0) + line(64, -11, 64, 0);
      [20, 32, 44, 56].forEach((x, i) => { s += rect(x, -21, 8, 6, i % 2 ? "aw2" : "ac"); });
      return s;
    },
    hwhouse() {
      const w = 102, h = 42, d = 46;
      let s = shadow(w, d) + sideWall(w, h, d) + front(w, h) + flatTop(w, h, d, "wd");
      for (let i = 0; i < 3; i++) {
        const x = i * 34;
        s += poly([[x, -h], [x, -h - 20], [x + 34, -h], [x + 34 + d * DX, -h - d * DY], [x + d * DX, -h - 20 - d * DY]], "ro");
        s += poly([[x, -h], [x, -h - 20], [x + 34, -h]], "ac");
      }
      for (let i = 0; i < 3; i++) s += win(9 + i * 21, -32, 14, 14, i + 1);
      s += rect(70, -30, 24, 30, "dr") + line(70, -20, 94, -20, "kw") + line(70, -10, 94, -10, "kw");
      s += `<g class="gear" transform="translate(${w + 16},-14)">` + circ(0, 0, 10, "sg") + circ(0, 0, 3.5, "ac") + Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return line(10 * Math.cos(a), 10 * Math.sin(a), 14 * Math.cos(a), 14 * Math.sin(a), "kg"); }).join("") + "</g>";
      return s;
    },
    testshed() {
      const w = 68, h = 32, d = 36;
      return shadow(w, d) + sideWall(w, h, d) + poly([[0, -h], [w, -h + 6], [w + d * DX, -h + 6 - d * DY], [d * DX, -h - d * DY]], "ro") + poly([[0, 0], [w, 0], [w, -h + 6], [0, -h]], "wb") +
        win(8, -24, 15, 12, 2) + door(38, 16, 20) + line(10, -h, 10, -h - 26) + `<path class="wf" stroke="currentColor" d="M2,${-h - 26} a10,10 0 0 0 16,0 z"/>` + circ(10, -h - 30, 1.5, "ac");
    },
    hphouse() {
      const w = 90, h = 46, d = 44;
      return shadow(w, d) + gable(w, h, d, 26) + win(9, -36, 15, 15, 2) + win(w - 24, -36, 15, 15, 1) + win(w / 2 - 6, -h - 13, 12, 12, 3, 1) + door(w / 2 - 7) +
        poly([[w / 2 - 22, -28], [w / 2 + 22, -28], [w / 2 + 26, -22], [w / 2 - 26, -22]], "ac") + line(w / 2 - 22, -22, w / 2 - 22, 0) + line(w / 2 + 22, -22, w / 2 + 22, 0) + rect(6, -19, 21, 5, "fl") + sideWin(w, 8, -22, 11) +
        `<path class="sg" d="M${w - 8},${-h - 10} h24 a4,4 0 0 1 4,4 v10 a4,4 0 0 1 -4,4 h-14 l-6,6 v-6 h-4 a4,4 0 0 1 -4,-4 v-10 a4,4 0 0 1 4,-4z" transform="translate(4,-2)"/>` + txt(w + 8, -h - 1, "…", 12);
    },
    consent() {
      const w = 62, h = 38, d = 32;
      return shadow(w, d) + sideWall(w, h, d) + front(w, h) + flatTop(w, h, d) + stripes(-3, -h, w + 6, 6, 7) + win(7, -25, 20, 11, 2) + door(39, 13, 22) + rect(w + 8, -24, 13, 17, "sg", 'rx="1.5"') + line(w + 11, -18, w + 18, -18) + line(w + 11, -14, w + 18, -14) + line(w + 14, -7, w + 14, 0) + rect(w + 12, -26, 5, 3, "ac");
    },
    school() {
      const w = 92, h = 44, d = 44;
      return shadow(w, d) + gable(w, h, d, 22) + win(8, -34, 18, 14, 1) + win(w - 26, -34, 18, 14, 2) + door(w / 2 - 7) + sideWin(w, 8, -20, 11) +
        rect(w / 2 - 7, -h - 36, 14, 16, "wf") + poly([[w / 2 - 10, -h - 36], [w / 2, -h - 48], [w / 2 + 10, -h - 36]], "ac") + circ(w / 2, -h - 27, 3.4, "bl") + rect(14, -12, 14, 8, "bb");
    },
    stage() {
      const w = 116, d = 34;
      let s = shadow(w, d) + rect(0, -14, w, 14, "wb") + poly([[0, -14], [w, -14], [w + d * DX, -14 - d * DY], [d * DX, -14 - d * DY]], "pl") + sideWall(w, 14, d);
      s += line(d * DX, -14 - d * DY, d * DX, -74, "kp") + line(w + d * DX, -14 - d * DY, w + d * DX, -74, "kp") + rect(d * DX - 3, -78, w + 6, 10, "ac");
      s += `<path class="cu" d="M${d * DX},-68 q6,24 2,42 h-2 z M${w + d * DX},-68 q-6,24 -2,42 h2 z"/>`;
      for (let i = 0; i < 7; i++) s += poly([[d * DX + 4 + i * 15, -68], [d * DX + 16 + i * 15, -68], [d * DX + 10 + i * 15, -60]], i % 2 ? "aw2" : "ac");
      return s + lamp(-12, 40) + lamp(w + 34, 44);
    },
    notice() {
      return shadow(30, 8) + line(3, 0, 3, -36, "kp") + line(29, 0, 29, -36, "kp") + rect(-2, -38, 36, 26, "bk") + rect(2, -35, 12, 9, "wf") + rect(17, -33, 11, 8, "aw2") + rect(5, -24, 9, 8, "ac") + rect(18, -23, 12, 8, "wf") + poly([[-4, -38], [16, -48], [36, -38]], "ro");
    },
    wikihall() {
      const w = 190, h = 92, d = 62;
      let s = shadow(w, d) + sideWall(w, h, d) + flatTop(w, h, d) + front(w, h);
      for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) { if (r === 2 && (c === 3 || c === 4)) continue; s += win(10 + c * 22.2, -h + 8 + r * 26, 12, 18, ((r * 2 + c) % 3) + 1); }
      for (let i = 0; i < 3; i++) s += sideWin(w, 7 + i * 10, -50, 7) + sideWin(w, 7 + i * 10, -24, 7, 3);
      // tower
      s += `<g transform="translate(62,${-h})">` + sideWall(62, 44, 34) + front(62, 44) + win(9, -36, 12, 26, 2) + win(25, -36, 12, 26, 3) + win(41, -36, 12, 26, 1) +
        poly([[62, -44], [62 + 34 * DX, -44 - 34 * DY], [31 + 34 * DX, -70 - 34 * DY], [31, -70]], "ro") + poly([[-4, -42], [31, -72], [33, -66], [0, -38]], "rd") + poly([[0, -44], [62, -44], [31, -70]], "ac") + txt(31, -48, "W", 15, "tkw") + line(31, -70, 31, -88) + poly([[31, -88], [47, -83], [31, -78]], "ac") + "</g>";
      s += rect(-2, -h - 2, w + 4, 6, "ac");
      s += poly([[73, 0], [117, 0], [124, 10], [66, 10]], "st") + poly([[66, 10], [124, 10], [130, 18], [60, 18]], "st") + rect(82, -28, 26, 28, "dr") + line(95, -28, 95, 0, "kw");
      return s;
    },
    facts() {
      const w = 94, h = 58, d = 42;
      let s = shadow(w, d) + sideWall(w, h, d) + flatTop(w, h, d) + front(w, h) + rect(-2, -h - 2, w + 4, 5, "ac");
      for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) { if (r === 3 && (c === 2 || c === 3)) continue; s += rect(6 + c * 14, -h + 7 + r * 12, 12, 10, "dw", 'rx="1"') + rect(10 + c * 14, -h + 11 + r * 12, 4, 1.6, "ac"); }
      s += door(40, 14, 12);
      for (let i = 0; i < 3; i++) s += win(9 + i * 28, -h + 9 + i * 12, 8, 6, i + 1);
      return s;
    },
    figures() {
      const w = 92, h = 44, d = 44;
      let s = shadow(w, d) + sideWall(w, h, d) + poly([[0, -h], [w, -h], [w + d * DX, -h - d * DY - 8], [d * DX, -h - d * DY - 8]], "gl") + front(w, h);
      s += win(8, -34, 20, 18, 2) + win(36, -34, 20, 18, 1) + door(66, 13, 24) + rect(-2, -h - 2, w + 4, 4, "ac");
      s += `<g transform="translate(-26,0)">` + line(4, 0, 12, -34) + line(20, 0, 12, -34) + rect(0, -32, 24, 20, "sg") + rect(4, -21, 4, 7, "ac") + rect(10, -26, 4, 12, "aw2") + rect(16, -18, 4, 4, "ac") + "</g>";
      return s;
    },
    credits() {
      const w = 112, h = 44, d = 40;
      let s = shadow(w, d) + sideWall(w, h, d) + flatTop(w, h, d) + front(w, h) + rect(-3, -h - 3, w + 6, 7, "ac");
      for (let i = 0; i < 6; i++) s += rect(6 + i * 19, -h + 6, 5, h - 6, "wb");
      s += win(13, -28, 11, 14, 1) + win(89, -28, 11, 14, 2) + door(50, 13, 24);
      s += `<path class="sgw" d="M30,${-h + 6} h52 v14 l-26,6 l-26,-6z"/>` + txt(56, -h + 18, "★★★", 8);
      return s;
    },
    translate() {
      const w = 54, h = 36, d = 30;
      return shadow(w, d) + sideWall(w, h, d) + rect(0, -h, w / 2, h, "wf") + rect(w / 2, -h, w / 2, h, "wb") + flatTop(w, h, d) + txt(14, -20, "中", 14) + txt(41, -20, "En", 13) + line(w / 2, -h, w / 2, 0) + door(20, 13, 15);
    },
    pagerow() {
      let s = "";
      const n = 13, w = 19, shift = [0, -3, 2, -2, 1, -3, 0, 2, -2, 0, -3, 1, -1];
      s += poly([[-4, 3], [n * w + 4, 3], [n * w + 16, -8], [8, -8]], "shd");
      for (let i = 0; i < n; i++) {
        const h = 24 + (i % 3) * 3;
        s += `<g transform="translate(${i * w},0)">` + poly([[0, 0], [w - 1, 0], [w - 1, -h], [(w - 1) / 2, -h - 10 - shift[i]], [0, -h]], i % 2 ? "wf" : "wb") + poly([[-1, -h + 1], [(w - 1) / 2, -h - 11 - shift[i]], [w, -h + 1], [w - 1, -h + 3], [(w - 1) / 2, -h - 8 - shift[i]], [0, -h + 3]], "ac") + win(5, -h + 5, 8, 7, (i % 3) + 1) + rect(6, -10, 6, 10, "dr", 'rx="1"') + "</g>";
      }
      return s;
    },
    qabank() {
      const w = 50, h = 74, d = 32;
      return shadow(w, d) + sideWall(w, h, d) + front(w, h) + poly([[-5, -h], [w + d * DX + 5, -h - d * DY + 2], [(w + d * DX) / 2, -h - 44]], "ro") + poly([[-5, -h], [w * .6, -h + 3], [(w + d * DX) / 2, -h - 44]], "ac") + circ(25, -h + 18, 11, "sg") + txt(25, -h + 24, "?", 16, "tkb") + win(18, -36, 14, 10, 2) + door(18, 14, 20) + sideWin(w, 7, -44, 8);
    },
    art() {
      const w = 92, h = 42, d = 44;
      let s = shadow(w, d) + gable(w, h, d, 24) + poly([[w / 2 + 2, -h - 22], [w - 4, -h + 1], [w - 4 + d * DX * .6, -h + 1 - d * DY * .6], [w / 2 + 2 + d * DX * .6, -h - 22 - d * DY * .6]], "gl");
      s += win(8, -32, 18, 16, 2) + win(w - 26, -32, 18, 16, 1) + door(w / 2 - 7) + sideWin(w, 8, -20, 11);
      s += `<g transform="translate(-14,-16)"><path class="sg" d="M0,8 c-10,-2 -10,-16 2,-18 c10,-2 18,4 16,12 c-1,4 -5,4 -8,3 c-3,-1 -5,1 -5,3 z"/>` + circ(2, -4, 2, "ac") + circ(8, -6, 2, "aw2") + circ(13, -2, 2, "bk") + "</g>" + rect(w + 26, -9, 8, 9, "ac") + rect(w + 35, -7, 7, 7, "aw2");
      return s;
    },
    gallery() {
      const w = 122;
      let s = `<ellipse class="pv" cx="${w / 2}" cy="-14" rx="${w / 2 + 12}" ry="24"/>`;
      [[4, -4], [38, 2], [84, 2], [100, -22], [8, -30]].forEach(([x, y], i) => {
        s += `<g transform="translate(${x},${y})">` + line(3, 0, 3, -14) + line(18, 0, 18, -14) + rect(-3, -34, 27, 22, "sg") + rect(0, -31, 21, 16, i % 2 ? "ph2" : "ph1") + `<path class="kl" d="M1,-17 l6,-7 l5,5 l3,-3 l5,5"/>` + "</g>";
      });
      s += `<g transform="translate(54,-26)">` + line(0, 0, 0, -30, "kp") + line(26, 0, 26, -30, "kp") + poly([[-8, -28], [13, -44], [34, -28]], "ac") + "</g>";
      return s;
    },
    darkroom() {
      const w = 72, h = 36, d = 40;
      let s = shadow(w, d) + sideWall(w, h, d, "wds") + front(w, h, "wd") + flatTop(w, h, d) + rect(-2, -h - 2, w + 4, 4, "ac");
      s += rect(29, -26, 14, 26, "dr") + circ(36, -31, 3.5, "red") + rect(w * .7, -h - 22 - 6, 10, 18, "br");
      lights.push(`<circle class="wl l1 redglow" cx="36" cy="-31" r="4.2"/>`);
      s += line(w + 8, -8, w + 8, -34) + line(w + 34, -16, w + 34, -40) + `<path class="kl" d="M${w + 8},-33 L${w + 34},-39" fill="none"/>`;
      [0, 1, 2].forEach(i => { const x = w + 12 + i * 7; s += rect(x, -33 - i * 1.6, 5, 7, "ph1"); });
      return s;
    },
    archive() {
      const w = 112, h = 44, d = 44;
      let s = shadow(w, d) + sideWall(w, h, d) + poly([[w, -h], [w + d * DX, -h - d * DY], [w * .74 + d * DX, -h - 18 - d * DY], [w * .74, -h - 18]], "ro") + poly([[w * .74, -h - 18], [w * .74 + d * DX, -h - 18 - d * DY], [w * .26 + d * DX, -h - 22 - d * DY], [w * .26, -h - 22]], "ro");
      s += poly([[0, 0], [w, 0], [w, -h], [w * .74, -h - 18], [w * .26, -h - 22], [0, -h]], "wf");
      for (let i = 0; i < 4; i++) s += win(8 + i * 25, -36, 17, 13, i % 3 + 1);
      s += door(w / 2 - 7, 14, 18) + circ(w / 2, -h - 8, 8, "sg") + circ(w / 2, -h - 8, 2, "ac");
      [0, 1, 2, 3, 4, 5].forEach(i => { const a = i * Math.PI / 3; s += circ(w / 2 + 5 * Math.cos(a), -h - 8 + 5 * Math.sin(a), 1.2, "ac"); });
      return s + crate(-13, 0, 10);
    },
    video() {
      const w = 80, h = 44, d = 40;
      let s = shadow(w, d) + sideWall(w, h, d) + flatTop(w, h, d) + front(w, h) + win(7, -34, 18, 14, 2) + door(52, 14, 26);
      s += `<g transform="translate(26,${-h - 14})">` + rect(0, -2, 26, 16, "sg") + poly([[0, -2], [26, -2], [29, -9], [3, -9]], "bb") + line(8, -9, 5, -2, "kw") + line(16, -9, 13, -2, "kw") + "</g>";
      s += `<g transform="translate(${w + 16},0)">` + line(0, 0, 7, -20) + line(14, 0, 7, -20) + line(7, 0, 7, -20) + rect(-1, -30, 16, 10, "bb") + circ(16, -25, 3.4, "sg") + "</g>";
      return s;
    },
    hub() {
      let s = `<ellipse class="pv" cx="25" cy="2" rx="62" ry="24"/>`;
      s += `<ellipse class="ston" cx="25" cy="0" rx="24" ry="10"/><rect class="ston" x="1" y="-14" width="48" height="14"/><ellipse class="wat" cx="25" cy="-14" rx="24" ry="10"/>`;
      s += line(5, -14, 5, -50, "kp") + line(45, -14, 45, -50, "kp") + poly([[-5, -48], [25, -68], [55, -48], [45, -46], [25, -60], [5, -46]], "ac") + line(5, -38, 45, -38, "kr") + line(25, -38, 25, -22) + rect(20, -22, 10, 8, "cr");
      return s;
    },
    clock() {
      const w = 46, h = 118, d = 30;
      return shadow(w, d) + sideWall(w, h, d) + front(w, h) + poly([[-4, -h], [w + d * DX + 3, -h - d * DY], [(w + d * DX) / 2, -h - 56]], "ro") + poly([[-4, -h], [w * .66, -h + 2], [(w + d * DX) / 2, -h - 56]], "ac") +
        circ(23, -h + 22, 15, "sg") + `<g id="vg-clock" transform="translate(23,${-h + 22})"><line class="hand" x2="0" y2="-10"/><line class="hand2" x2="7" y2="4"/></g>` + circ(23, -h + 22, 1.5, "ac") +
        win(16, -66, 14, 20, 2) + win(16, -38, 14, 12, 1) + door(16, 14, 22) + sideWin(w, 6, -70, 8);
    },
    post() {
      const w = 76, h = 44, d = 40;
      return shadow(w, d) + sideWall(w, h, d) + flatTop(w, h, d) + front(w, h) + rect(-2, -h - 2, w + 4, 4, "ac") + win(7, -32, 18, 14, 1) + door(50, 14, 26) + line(30, -h - 2, 30, -h - 34) + poly([[30, -h - 34], [54, -h - 28], [30, -h - 20]], "ac") + rect(w + 16, -18, 13, 18, "ac", 'rx="6"') + rect(w + 19, -13, 7, 2, "wf");
    },
    pi() {
      const w = 56, h = 32, d = 34;
      return shadow(w, d) + gable(w, h, d, 18) + win(6, -24, 11, 11, 1) + door(30, 12, 20) + `<path class="fence" d="M-14,0 v-9 M-8,0 v-9 M-2,0 v-9 M-16,-5 h16"/>` + lamp(w + 22, 24);
    },
    teach() {
      const w = 104, h = 44, d = 40;
      let s = shadow(w, d) + sideWall(w, h, d) + flatTop(w, h, d, "wd") + front(w, h);
      for (let i = 0; i < 4; i++) s += poly([[i * 26, -h], [i * 26 + 13, -h - 16], [(i + 1) * 26, -h]], "ac");
      for (let i = 0; i < 4; i++) s += i === 2 ? door(i * 26 + 7) : win(i * 26 + 6, -32, 14, 16, i % 3 + 1);
      return s + sideWin(w, 8, -22, 10);
    },
    sign() {
      const w = 64, h = 44, d = 36;
      return shadow(w, d) + sideWall(w, h, d) + flatTop(w, h, d) + front(w, h) + rect(-2, -h - 2, w + 4, 4, "ac") + win(7, -32, 13, 15, 2) + win(44, -32, 13, 15, 1) + door(25, 14, 26) + `<g transform="translate(${w + 12},-10)">` + rect(-7, 4, 14, 5, "ac") + rect(-3, -6, 6, 10, "bb") + circ(0, -9, 4, "bb") + "</g>";
    },
    care() {
      const w = 70, h = 36, d = 38;
      return shadow(w, d) + gable(w, h, d, 18) + win(7, -27, 13, 13, 1) + win(50, -27, 13, 13, 2) + door(28, 14, 22) + `<path class="ac" d="M${w / 2},${-h - 3} c-5,-7 -11,0 0,7 c11,-7 5,-14 0,-7z"/>` + lamp(-12, 26);
    },
    opsoffice() {
      const w = 70, h = 52, d = 38;
      return shadow(w, d) + sideWall(w, h, d) + flatTop(w, h, d) + front(w, h) + rect(-2, -h - 2, w + 4, 4, "ac") + win(7, -44, 13, 12, 1) + win(28, -44, 13, 12, 2) + win(49, -44, 13, 12, 3) + win(7, -24, 13, 12, 2) + win(49, -24, 13, 12, 1) + door(28, 14, 22) + line(14, -h - 2, 14, -h - 20) + circ(14, -h - 22, 2, "ac") + rect(w * .6, -h - 12, 18, 10, "wb");
    },
    devbench() {
      const w = 56, h = 30, d = 34;
      return shadow(w, d) + sideWall(w, h, d) + poly([[0, -h], [w, -h + 5], [w + d * DX, -h + 5 - d * DY], [d * DX, -h - d * DY]], "ro") + poly([[0, 0], [w, 0], [w, -h + 5], [0, -h]], "wb") + win(7, -23, 13, 11, 2) + door(32, 13, 20) + rect(w + 12, -12, 24, 3, "bk") + line(w + 15, -9, w + 15, 0) + line(w + 33, -9, w + 33, 0);
    },
    station() {
      const w = 120, h = 36, d = 26;
      let s = rect(-46, 2, w + 110, 7, "pl") + shadow(w, d) + sideWall(w, h, d) + front(w, h) + flatTop(w, h, d, "ro") + win(10, -26, 16, 14, 1) + door(53) + win(92, -26, 16, 14, 2);
      s += rect(-40, -h - 6, w + 96, 6, "ac") + line(-36, -h, -36, 2, "kp") + line(w + 48, -h, w + 48, 2, "kp");
      s += rect(38, -h - 24, 44, 16, "sg", 'rx="2"') + txt(60, -h - 12, "PARIS", 11, "tkb");
      return s;
    }
  };
  const cottage = (lit, empty) => {
    const w = 56, h = 32, d = 34;
    return (empty ? "" : shadow(w, d)) + gable(w, h, d, 19) + win(6, -24, 11, 11, lit) + win(39, -24, 11, 11, (lit % 3) + 1) + door(21, 13, 20) + (empty ? "" : line(w + 14, 0, w + 14, -26) + `<path class="lant" d="M${w + 14},-26 h8 v4"/>` + rect(w + 19, -22, 7, 9, "ac", 'rx="2"'));
  };
  ART.advwet = () => cottage(1); ART.advdry = () => cottage(2); ART.advhp = () => cottage(3); ART.advcross = () => cottage(1); ART.advlead = () => cottage(2, true);

  // [x, y] of the front-bottom-left corner, footprint width, door offset, hit box.
  const POS = {
    lab: [70, 395, 130, 65], wethouse: [245, 395, 88, 44], safety: [385, 395, 46, 23], store: [475, 395, 72, 36], orders: [110, 268, 72, 52], registry: [290, 268, 90, 45],
    dryhouse: [62, 600, 84, 42], compute: [192, 600, 56, 27], library: [62, 498, 76, 38], tasks: [204, 498, 84, 42],
    hwhouse: [372, 600, 102, 82], testshed: [386, 498, 68, 46],
    hphouse: [70, 868, 90, 45], consent: [196, 868, 62, 46], school: [352, 868, 92, 46], stage: [490, 868, 116, 58], notice: [628, 868, 30, 16],
    wikihall: [1178, 582, 190, 95], facts: [1218, 395, 94, 47], figures: [1168, 756, 92, 73], credits: [1408, 582, 112, 56], translate: [1352, 395, 54, 27], pagerow: [1296, 756, 247, 120], qabank: [1140, 395, 50, 25], art: [1440, 395, 92, 46],
    gallery: [676, 868, 122, 62], darkroom: [832, 868, 72, 36], archive: [944, 868, 112, 56], video: [1088, 868, 80, 66],
    hub: [770, 545, 50, 25], clock: [772, 268, 46, 23], post: [745, 395, 76, 64], pi: [618, 268, 56, 36], teach: [596, 395, 104, 52], sign: [858, 395, 64, 39], care: [876, 268, 70, 49], opsoffice: [958, 395, 70, 49], devbench: [980, 268, 56, 27],
    advwet: [1150, 232, 56, 34], advdry: [1238, 226, 56, 34], advhp: [1326, 232, 56, 34], advcross: [1414, 226, 56, 34], advlead: [1502, 232, 56, 34],
    station: [1296, 950, 120, 60]
  };
  const door0 = id => { const p = POS[id]; return [p[0] + p[3], p[1] + 4]; };

  // Streets. Doors snap to the nearest street, so a villager always leaves through its own door.
  const STREETS = [
    [[50, 410], [240, 410], [372, 410], [560, 410], [724, 410], [842, 410], [1040, 410], [1126, 420], [1320, 420], [1558, 420]], // upper street, east bridge
    [[100, 288], [240, 288], [372, 288], [240, 288]], [[240, 288], [240, 410]], [[372, 288], [372, 410]],
    [[640, 288], [724, 288], [842, 288], [1010, 288]], [[724, 288], [724, 410]], [[842, 288], [842, 410]],
    [[60, 620], [176, 620], [350, 620], [560, 620], [798, 620], [1022, 620], [1126, 604], [1270, 604], [1558, 604]], // mid street
    [[240, 410], [176, 522], [176, 620]], [[92, 522], [176, 522], [250, 522]], [[372, 410], [350, 522], [350, 620]], [[350, 522], [420, 522]], [[560, 410], [560, 620]],
    [[798, 410], [798, 620]],
    [[1126, 420], [1126, 604], [1126, 780]], [[1558, 420], [1558, 604], [1558, 780]], [[1126, 780], [1212, 780], [1420, 780], [1558, 780]],
    [[1126, 262], [1126, 420]], [[1126, 262], [1320, 262], [1530, 262]],
    [[60, 888], [326, 888], [640, 888], [798, 888], [1000, 888], [1128, 888], [1356, 888]], // low street
    [[326, 620], [326, 888]], [[798, 620], [798, 888]], [[1126, 780], [1128, 888]], [[1356, 888], [1356, 954]]
  ];

  // Graph: nodes keyed "x,y".
  const G = {};
  const key = p => p[0] + "," + p[1];
  const link = (a, b) => { const ka = key(a), kb = key(b); (G[ka] = G[ka] || { p: a, n: {} }); (G[kb] = G[kb] || { p: b, n: {} }); const dd = Math.hypot(a[0] - b[0], a[1] - b[1]); G[ka].n[kb] = dd; G[kb].n[ka] = dd; };
  const unlink = (a, b) => { delete G[key(a)].n[key(b)]; delete G[key(b)].n[key(a)]; };
  STREETS.forEach(s => { for (let i = 1; i < s.length; i++) link(s[i - 1], s[i]); });
  const DOORS = {};
  function attach(id) {
    const d = door0(id); let best = null;
    const seen = new Set();
    Object.values(G).forEach(n => Object.keys(n.n).forEach(k => {
      const e = [key(n.p), k].sort().join("|"); if (seen.has(e)) return; seen.add(e);
      const a = n.p, b = G[k].p, dx = b[0] - a[0], dy = b[1] - a[1], l2 = dx * dx + dy * dy || 1;
      const u = Math.max(0, Math.min(1, ((d[0] - a[0]) * dx + (d[1] - a[1]) * dy) / l2));
      const q = [Math.round(a[0] + u * dx), Math.round(a[1] + u * dy)], dist = Math.hypot(q[0] - d[0], q[1] - d[1]);
      // Prefer streets below the door: buildings face south.
      const score = dist + (q[1] < d[1] - 6 ? 200 : 0);
      if (!best || score < best.score) best = { score, q, a, b };
    }));
    if (key(best.q) !== key(best.a) && key(best.q) !== key(best.b)) { unlink(best.a, best.b); link(best.a, best.q); link(best.q, best.b); }
    link(d, best.q);
    DOORS[id] = d;
  }
  Object.keys(POS).forEach(attach);

  function route(a, b) {
    const s = key(DOORS[a]), g = key(DOORS[b]), dist = { [s]: 0 }, prev = {}, Q = new Set(Object.keys(G));
    while (Q.size) {
      let u = null, m = Infinity; Q.forEach(k => { const v = dist[k] === undefined ? Infinity : dist[k]; if (v < m) { m = v; u = k; } });
      if (u === null || u === g) break; Q.delete(u);
      Object.entries(G[u].n).forEach(([k, w]) => { if (Q.has(k) && (dist[k] === undefined || dist[u] + w < dist[k])) { dist[k] = dist[u] + w; prev[k] = u; } });
    }
    const pts = []; let c = g; while (c) { pts.unshift(G[c].p); c = prev[c]; }
    return pts;
  }

  // ---------- scenery ----------
  const RIVER = "M-20,722 C150,694 300,752 500,722 S760,690 930,700 S1062,690 1072,600 S1056,420 1086,300 S1122,160 1160,120";
  function tree(x, y, kind, seed) {
    if (kind === 0) return `<g transform="translate(${x},${y})">` + line(0, 0, 0, -12, "tr") + `<circle class="lf" cx="0" cy="-22" r="13"/><circle class="lf2" cx="-5" cy="-24" r="5.5"/>` + (seed % 2 ? `<circle class="bl1" cx="5" cy="-28" r="2"/><circle class="bl1" cx="-7" cy="-17" r="2"/><circle class="bl1" cx="7" cy="-18" r="1.6"/>` : "") + "</g>";
    if (kind === 1) return `<g transform="translate(${x},${y})">` + line(0, 0, 0, -8, "tr") + `<path class="lf" d="M0,-40 C9,-28 9,-14 0,-6 C-9,-14 -9,-28 0,-40z"/><path class="lf2" d="M-2,-32 C-5,-24 -5,-16 -2,-10 C-3,-18 -3,-26 -2,-32z"/></g>`;
    if (kind === 2) return `<g transform="translate(${x},${y})"><path class="tr" d="M0,0 q3,-16 -1,-30" fill="none"/><path class="lf" d="M-1,-30 q-14,-5 -18,4 q10,-3 18,-4 M-1,-30 q14,-6 18,3 q-10,-2 -18,-3 M-1,-30 q-7,-12 -16,-9 q9,2 16,9 M-1,-30 q8,-12 16,-8 q-9,1 -16,8"/></g>`;
    return `<g transform="translate(${x},${y})">` + [-5, 0, 5].map((o, i) => `<path class="tr2" d="M${o},0 q${o * .5},-16 ${o * 1.2},-${28 + i * 5}" fill="none"/><path class="lf" d="M${o * 1.2},-${28 + i * 5} q6,2 9,-3 q-6,-3 -9,3z M${o},-14 q-6,1 -9,-3 q6,-3 9,3z"/>`).join("") + "</g>";
  }
  const TREES = [
    [40, 250, 0], [230, 250, 1], [420, 250, 0], [520, 290, 1], [60, 345, 3], [565, 345, 2], [30, 480, 1], [300, 470, 0], [20, 590, 2], [310, 585, 1], [500, 470, 0], [530, 590, 3], [490, 530, 1],
    [610, 480, 0], [650, 560, 3], [700, 470, 1], [920, 490, 0], [960, 570, 2], [880, 590, 1], [1000, 480, 3], [580, 330, 1], [700, 255, 0], [840, 250, 1], [1050, 340, 2],
    [1125, 130, 1], [1230, 150, 0], [1345, 120, 1], [1470, 130, 0], [1570, 170, 1], [1580, 330, 0], [1585, 500, 1], [1120, 690, 3], [1400, 690, 0], [1500, 690, 1], [1270, 690, 2], [1585, 700, 3],
    [30, 790, 0], [180, 790, 1], [310, 790, 3], [470, 790, 0], [610, 780, 2], [680, 770, 1], [930, 775, 0], [1040, 775, 3],
    [24, 950, 2], [180, 960, 0], [320, 950, 3], [470, 960, 1], [610, 955, 0], [760, 955, 2], [900, 950, 0], [1040, 960, 1], [1160, 950, 3]
  ];
  const MOUNT = [
    { c: "m3", d: "M0,120 C120,70 220,100 340,66 S560,90 690,52 S930,92 1060,58 S1320,88 1440,50 S1560,74 1600,64 V190 H0Z" },
    { c: "m2", d: "M0,150 C140,110 260,136 400,104 S660,132 800,102 S1080,134 1210,98 S1480,126 1600,100 V200 H0Z" }
  ];
  const PLOTS = {
    wet: "M34,206 C150,186 430,192 574,204 C590,262 584,372 574,436 C400,444 180,444 34,438 C26,372 28,272 34,206Z",
    dry: "M30,452 C120,444 240,446 322,450 C330,520 330,590 322,650 C230,656 110,658 30,652 C22,590 22,520 30,452Z",
    hw: "M336,452 C400,446 480,446 548,452 C556,520 556,590 548,650 C480,656 400,656 336,650 C330,590 330,520 336,452Z",
    hp: "M30,772 C180,758 480,760 662,772 C672,830 670,900 662,916 C480,924 180,926 30,916 C22,870 22,810 30,772Z",
    wiki: "M1110,306 C1250,292 1450,296 1584,306 C1594,450 1594,660 1584,802 C1450,812 1250,812 1110,802 C1102,660 1102,450 1110,306Z",
    media: "M668,772 C820,756 1050,760 1180,772 C1190,830 1190,900 1180,916 C1050,924 820,924 668,916 C660,870 660,810 668,772Z",
    ops: "M586,206 C720,190 900,190 1040,206 C1050,262 1046,372 1036,436 C1000,440 950,442 898,500 C884,600 880,620 874,636 C810,646 730,646 672,636 C668,600 660,510 590,440 C578,372 578,270 586,206Z",
    adv: "M1136,172 C1260,160 1450,160 1578,172 C1586,206 1586,244 1578,280 C1450,288 1260,288 1136,280 C1128,246 1128,206 1136,172Z"
  };
  const LABELS = { wet: [214, 176], dry: [130, 428], hw: [470, 428], hp: [230, 742], wiki: [1250, 288], media: [840, 742], ops: [700, 176], adv: [1250, 146] };

  function chipSVG(x, y, s, c, big) {
    const size = big ? 19 : 15, w = [...s].reduce((a, ch) => a + (ch.charCodeAt(0) > 255 ? size : size * .5), 0) + (big ? 36 : 20);
    return `<g class="${big ? "dl" : "tag"}" transform="translate(${num(x - w / 2)},${num(y)})"><rect class="tagb" width="${num(w)}" height="${big ? 30 : 24}" rx="${big ? 15 : 12}"/>${big ? `<circle cx="16" cy="15" r="5" fill="${c}"/>` : ""}<text class="tagt" x="${big ? 27 : 10}" y="${big ? 21 : 17}" font-size="${size}">${esc(s)}</text></g>`;
  }

  function seatPeople(b, footW) {
    const out = []; let i = 0;
    b.roles.forEach(c => {
      const r = R[c]; if (!r || b.fn) return;
      const n = Math.min((r.seats || 0) + (r.sec || 0), 13);
      for (let k = 0; k < n && i < 13; k++, i++) out.push(`<use class="${r.kind === "s2" ? "sp2" : "sp"}" href="#vg-person" x="${i * 8 - 2}" y="9"/>`);
    });
    return out.join("");
  }

  function buildWorld() {
    lights = [];
    const lightsOut = [];
    const items = [];
    TREES.forEach(([x, y, k], i) => items.push({ y, s: tree(x, y, k, i) }));
    VILLAGE_BUILDINGS.forEach((b, idx) => {
      const [x, y, w] = POS[b.id];
      lights = [];
      const art = ART[b.id]();
      const cls = `b${b.id === "advlead" ? " b--empty" : ""}`;
      const label = `${L(b.name)}. ${L(D[b.d].name)}.${b.roles.length && !b.fn ? " " + b.roles.map(roleName).join(", ") : ""}`;
      items.push({ y, s: `<g class="${cls}" data-b="${b.id}" role="button" tabindex="${idx === 0 ? 0 : -1}" aria-label="${esc(label)}" transform="translate(${x},${y})" style="--c:${dColor(b.d)}"><rect class="hit" x="${-22}" y="${-(POS[b.id][3] ? hitH(b.id) : 60)}" width="${w + 54}" height="${hitH(b.id) + 16}" rx="10"/>${art}${seatPeople(b, w)}</g>` });
      lightsOut.push(`<g class="li" data-li="${b.id}" transform="translate(${x},${y})">${lights.join("")}</g>`);
    });
    items.sort((a, b) => a.y - b.y);
    const roads = STREETS.map(s => `M${s.map(p => p.join(",")).join(" L")}`).join(" ");
    const spurs = Object.keys(DOORS).map(id => { const d = DOORS[id], nb = Object.keys(G[key(d)].n)[0]; return nb ? `M${d.join(",")} L${G[nb].p.join(",")}` : ""; }).join(" ");
    const hedge = Object.entries(PLOTS).map(([id, d]) => `<path class="plot" d="${d}" style="--c:${dColor(id)}"/>`).join("");
    const bridges = [[326, 700], [798, 702], [1072, 410], [1072, 612]].map(([x, y], i) => `<g transform="translate(${x},${y})${i > 1 ? " rotate(90)" : ""}"><rect class="brd" x="-15" y="-34" width="30" height="68" rx="4"/>${[-24, -12, 0, 12, 24].map(o => `<line class="kb" x1="-15" x2="15" y1="${o}" y2="${o}"/>`).join("")}<line class="kl" x1="-15" x2="-15" y1="-34" y2="34"/><line class="kl" x1="15" x2="15" y1="-34" y2="34"/></g>`).join("");
    const dLabels = VILLAGE_DISTRICTS.map(d => `<g data-dl="${d.id}">${chipSVG(LABELS[d.id][0], LABELS[d.id][1], L(d.name), dColor(d.id), true)}</g>`).join("");
    const bTags = VILLAGE_BUILDINGS.map(b => { const [x, y, w] = POS[b.id]; return `<g class="tagw" data-tag="${b.id}">${chipSVG(x + w / 2 + 6, y - tagUp(b.id), L(b.name), "", false)}</g>`; }).join("");
    const world = `
      <defs><g id="vg-person"><circle class="pH" cx="3" cy="-11" r="2.6"/><path class="pB" d="M0,0 v-6 a3,3 0 0 1 6,0 v6z"/></g>
        <linearGradient id="vg-sky" x1="0" x2="0" y1="0" y2="1"><stop offset="0" class="sk1"/><stop offset="1" class="sk2"/></linearGradient></defs>
      <rect class="sky" width="1600" height="200" fill="url(#vg-sky)"/>
      <circle class="sun" id="vg-sun" cx="240" cy="70" r="26"/>
      <g class="stars">${Array.from({ length: 46 }, (_, i) => `<circle cx="${(i * 137) % 1590 + 5}" cy="${(i * 53) % 98 + 6}" r="${i % 3 === 0 ? 1.8 : 1.1}"/>`).join("")}</g>
      ${MOUNT.map(m => `<path class="${m.c}" d="${m.d}"/>`).join("")}
      <g class="eiffel" transform="translate(1320,76)"><path d="M0,28 L8,-6 L10,-30 L11,-44 L12,-30 L14,-6 L22,28 L17,28 L14,14 L8,14 L5,28Z M7,0 h8 M9,-16 h4"/></g>
      <path class="ground" d="M0,172 C200,150 420,176 640,158 S1100,172 1300,152 S1520,160 1600,152 V1000 H0Z"/>
      ${hedge}
      <path class="river" d="${RIVER}"/><path class="river2" d="${RIVER}"/>
      <path class="road" d="${roads}"/><path class="road2" d="${roads}"/><path class="spur" d="${spurs}"/>
      ${bridges}
      <g class="rail"><line x1="1090" y1="964" x2="1620" y2="964"/><line x1="1090" y1="970" x2="1620" y2="970"/>${Array.from({ length: 28 }, (_, i) => `<line class="tie" x1="${1094 + i * 20}" y1="961" x2="${1094 + i * 20}" y2="973"/>`).join("")}</g>
      <g class="lanterns">${[[150, 416], [320, 416], [480, 416], [660, 416], [900, 416], [430, 626], [660, 626], [900, 626], [1200, 610], [1420, 610], [200, 894], [520, 894], [860, 894]].map(([x, y]) => `<g transform="translate(${x},${y})"><line class="kl" y2="-46"/><ellipse class="ac2" cy="-40" rx="5" ry="6.5"/></g>`).join("")}</g>
      ${items.map(i => i.s).join("")}
      <rect class="night" width="1600" height="1000"/>
      ${lightsOut.join("")}
      ${bTags}${dLabels}`;
    return world;
  }
  function hitH(id) { return { wikihall: 180, clock: 176, qabank: 126, lab: 112, stage: 88, hub: 76, dryhouse: 110 }[id] || 88; }
  function tagUp(id) { return hitH(id) + 26; }

  const LIFE_DEFS = `<defs><radialGradient id="vg-halo"><stop offset="0" stop-color="#ffd777" stop-opacity=".72"/><stop offset=".55" stop-color="#ffc24d" stop-opacity=".26"/><stop offset="1" stop-color="#ffc24d" stop-opacity="0"/></radialGradient></defs>`;
  function buildLife() {
    const ripples = [[120, 716], [270, 730], [440, 730], [620, 708], [850, 700], [1020, 672], [1070, 520], [1078, 360], [1104, 240]].map(([x, y], i) => `<path class="rip" style="animation-delay:${-i * .7}s" transform="translate(${x},${y})" d="M-11,0 q5,-3 11,0 t11,0"/>`).join("");
    const clouds = [[140, 50, 1], [640, 34, .8], [1180, 58, 1.15]].map(([x, y, s], i) => `<g class="cloud" style="animation-duration:${90 + i * 40}s;animation-delay:${-i * 30}s"><path transform="translate(${x},${y}) scale(${s})" d="M0,16 a11,11 0 0 1 8,-20 a15,15 0 0 1 28,-3 a12,12 0 0 1 18,7 a9,9 0 0 1 2,16z"/></g>`).join("");
    const smoke = [["lab", 92, 300, 0], ["hwhouse", 400, 526, 1], ["wethouse", 317, 325, 2], ["darkroom", 887, 803, 3]].map(([b, x, y, i]) => `<g class="smoke" data-smoke="${b}" transform="translate(${x},${y})">${[0, 1, 2].map(k => `<circle r="${3 + k}" style="animation-delay:${-(k + i) * .8}s"/>`).join("")}</g>`).join("");
    const fx = {
      petal: Array.from({ length: 22 }, (_, i) => `<path class="pt" style="left:0;animation-delay:${-i * .73}s;--dx:${40 + (i % 5) * 20}px;--x:${(i * 73) % 1600}px" d="M0,0 q3,-3 6,0 q-3,3 -6,0z"/>`).join(""),
      rain: Array.from({ length: 46 }, (_, i) => `<line class="rn" style="animation-delay:${-(i * .23) % 1}s;--x:${(i * 71) % 1600}px;--y:${(i * 37) % 300}px" x1="0" y1="0" x2="-4" y2="14"/>`).join(""),
      fly: Array.from({ length: 16 }, (_, i) => `<circle class="ff" r="2.2" style="animation-delay:${-i * .6}s;--x:${(i * 197) % 1560 + 20}px;--y:${(i * 131) % 700 + 240}px"/>`).join(""),
      leaf: Array.from({ length: 16 }, (_, i) => `<path class="pt lv" style="animation-delay:${-i * .97}s;--dx:${60 + (i % 4) * 26}px;--x:${(i * 101) % 1600}px" d="M0,0 q4,-4 8,0 q-4,4 -8,0z"/>`).join("")
    };
    return `${LIFE_DEFS}
      <g class="ripples">${ripples}</g>
      <g class="clouds">${clouds}</g>
      <g id="vg-smokes">${smoke}</g>
      <circle class="halo" id="vg-halo-c" cx="1272" cy="510" r="210" fill="url(#vg-halo)"/>
      <g class="fx" id="vg-fx-petal">${fx.petal}</g><g class="fx" id="vg-fx-rain">${fx.rain}</g><g class="fx" id="vg-fx-fly">${fx.fly}</g><g class="fx" id="vg-fx-leaf">${fx.leaf}</g>
      <g id="vg-routes"></g>
      <g id="vg-train" transform="translate(1400,962)"><g class="trainb">
        <rect class="tc" x="0" y="-22" width="44" height="22" rx="4"/><rect class="tw" x="6" y="-18" width="12" height="9" rx="1"/><rect class="tw" x="24" y="-18" width="12" height="9" rx="1"/>
        <rect class="tc tc2" x="48" y="-22" width="44" height="22" rx="4"/><rect class="tw" x="54" y="-18" width="12" height="9" rx="1"/><rect class="tw" x="72" y="-18" width="12" height="9" rx="1"/>
        <path class="tc" d="M96,-22 h22 q14,0 18,22 h-40z"/><rect class="tw" x="104" y="-18" width="12" height="9" rx="1"/>
        <circle class="tk0" cx="14" cy="2" r="3"/><circle class="tk0" cx="34" cy="2" r="3"/><circle class="tk0" cx="60" cy="2" r="3"/><circle class="tk0" cx="82" cy="2" r="3"/><circle class="tk0" cx="108" cy="2" r="3"/><circle class="tk0" cx="124" cy="2" r="3"/></g></g>
      <g id="vg-flags"></g>
      <g id="vg-burst"></g>
      <g id="vg-cat" class="cat" role="button" tabindex="-1" aria-label="${esc(lang === "zh" ? "村貓" : "The village cat")}"><rect class="hit" x="-14" y="-16" width="40" height="24"/><path class="catb" d="M0,0 q-2,-11 8,-11 q8,0 9,5 l4,-1 v-4 l2,3 l2,-3 v5 q2,6 -5,7 h-20z"/><path class="catt" d="M0,-2 q-8,-1 -6,-9"/></g>
      <g id="vg-walkers"></g>
      <g id="vg-ring"></g>`;
  }

  // ---------- season ----------
  const SEASON = [
    /* Nov */ { g: "#ece8d6", lf: "#c9a252", lf2: "#b5863c", bl: "#d98b4a", s1: "#dfe9ef", s2: "#f4efe2", n: 0, fx: "leaf" },
    /* Dec */ { g: "#e9ecdf", lf: "#7fa58d", lf2: "#6c937c", bl: "#c9d7cb", s1: "#d5e2ea", s2: "#eef1ea", n: .04 },
    /* Jan */ { g: "#e6ebe0", lf: "#769c88", lf2: "#648b76", bl: "#c9d7cb", s1: "#d0dee8", s2: "#ecf0ea", n: .06 },
    /* Feb */ { g: "#e8eee0", lf: "#7fae85", lf2: "#6a9b72", bl: "#f4a7b9", s1: "#dbe7ef", s2: "#f6efe9", n: .03, fx: "petal", lantern: 1 },
    /* Mar */ { g: "#e7f0db", lf: "#86bb7a", lf2: "#6fa668", bl: "#ff9fb8", s1: "#d6ebf7", s2: "#f4f6ea", n: 0, fx: "petal" },
    /* Apr */ { g: "#e4f0d3", lf: "#74b56b", lf2: "#5ea25a", bl: "#ffb7c9", s1: "#d4ecfa", s2: "#f3f7e8", n: 0 },
    /* May */ { g: "#deeec9", lf: "#62aa5c", lf2: "#4f9650", bl: "#f4d35e", s1: "#cfe9fb", s2: "#f1f7e4", n: 0 },
    /* Jun */ { g: "#d9e9c8", lf: "#4f9a58", lf2: "#3f864b", bl: "#d7e3f4", s1: "#b9ccd9", s2: "#dce6e4", n: .1, fx: "rain" },
    /* Jul */ { g: "#dfeac0", lf: "#519f55", lf2: "#3f8a48", bl: "#ffd25a", s1: "#bfe6fb", s2: "#fbf2d6", n: 0 },
    /* Aug */ { g: "#e2e9bb", lf: "#58a058", lf2: "#478b4a", bl: "#ffd25a", s1: "#c9e6f7", s2: "#fde8c9", n: .05, fx: "fly" },
    /* Sep */ { g: "#d9e0bf", lf: "#6a9c56", lf2: "#578a4b", bl: "#f0b45b", s1: "#2b3a67", s2: "#a56f7c", n: .4, fx: "fly", stars: 1 },
    /* Oct */ { g: "#d9d7b8", lf: "#b6964c", lf2: "#a07f3f", bl: "#e69a4a", s1: "#1b2650", s2: "#5a4a72", n: .52, stars: 1 },
    /* Nov */ { g: "#e9e4d0", lf: "#c7a556", lf2: "#b08a40", bl: "#d98b4a", s1: "#dde7ee", s2: "#f4eee0", n: .02, fx: "leaf" }
  ];

  function nightAt(day, m) {
    if (day >= CRUNCH0 && day < CRUNCH0 + 4) return .28;
    if (day >= TRIP1 - .001 && m === 12) return .02;
    return SEASON[m].n;
  }
  function heatOf(b, m, day) {
    if (day >= TRIP0 && day < TRIP1) return b.id === "station" ? 3 : 0;
    if (b.id === "wikihall" && day >= CRUNCH0 && day <= CRUNCH1) return 3;
    const roles = (b.heat || b.roles).map(c => R[c]).filter(Boolean);
    if (!roles.length) return 1;
    const mk = PEOPLE.months[m];
    let top = 0, peak = false;
    roles.forEach(r => { const h = r.hrs[m] * (r.kind === "a" ? .5 : 1); if (h > top) top = h; if ((r.nodes || {})[mk]) peak = true; });
    let lv = top === 0 ? 0 : top < 1.25 ? 1 : top < 2.75 ? 2 : 3;
    if (peak && lv && lv < 3) lv++;
    return lv;
  }

  function applySeason() {
    const m = S.month, s = SEASON[m], root = $("#vg-root");
    if (!root) return;
    const st = root.style;
    st.setProperty("--vg-ground", s.g); st.setProperty("--vg-leaf", s.lf); st.setProperty("--vg-leaf2", s.lf2); st.setProperty("--vg-bloom", s.bl);
    st.setProperty("--vg-sky1", s.s1); st.setProperty("--vg-sky2", s.s2); st.setProperty("--vg-night", nightAt(S.day, m));
    root.classList.toggle("is-stars", !!s.stars);
    root.classList.toggle("is-lantern", !!s.lantern);
    const crunch = S.day >= CRUNCH0 && S.day <= CRUNCH1, trip = S.day >= TRIP0 && S.day < TRIP1;
    root.classList.toggle("is-crunch", crunch);
    root.classList.toggle("is-trip", trip);
    root.classList.toggle("is-dark", s.n > .3 || crunch);
    ["petal", "rain", "fly", "leaf"].forEach(k => { const g = $("#vg-fx-" + k); if (g) g.classList.toggle("on", s.fx === k && !trip); });
    const heat = {};
    VILLAGE_BUILDINGS.forEach(b => {
      const lv = heatOf(b, m, S.day); heat[b.id] = lv;
      const li = $(`[data-li="${b.id}"]`), el = $(`[data-b="${b.id}"]`);
      if (li) li.setAttribute("class", `li h${lv}`);
      if (el) el.classList.toggle("is-idle", lv === 0);
    });
    $$("#vg-smokes [data-smoke]").forEach(g => g.classList.toggle("on", (heat[g.dataset.smoke] || 0) >= 2));
    // The sun swings across the sky and sets into the crunch.
    const sun = $("#vg-sun");
    if (sun) { sun.setAttribute("cx", 180 + (S.day / SPAN) * 1240); sun.setAttribute("cy", 120 - Math.sin(S.day / SPAN * Math.PI) * 74); }
    const clock = $("#vg-clock");
    if (clock) clock.setAttribute("transform", `translate(23,-96) rotate(${(S.day / SPAN) * 360})`);
    updateStatus(); updateFlags(); updateTrain();
    if (S.mode === "list") renderList();
    if (S.sel) renderPanel();
  }

  function updateTrain() {
    const g = $("#vg-train"); if (!g) return;
    let x = 1400;
    if (S.day >= TRIP0 && S.day < TRIP1) x = 1760;
    else if (S.day >= TRIP0 - 1.5 && S.day < TRIP0) x = 1400 + (S.day - (TRIP0 - 1.5)) / 1.5 * 360;
    g.setAttribute("transform", `translate(${x},962)`);
  }

  function updateFlags() {
    const g = $("#vg-flags"); if (!g) return;
    const live = EVENTS.filter(e => S.day >= e.day - .5 && S.day < e.day + 12);
    g.innerHTML = live.map(e => {
      const [x, y, w] = POS[e.b];
      return `<g transform="translate(${x + w / 2},${y - hitH(e.b) + 2})" class="flag"><line class="kl" y1="0" y2="-26"/><path class="flagp" d="M0,-26 l22,5 l-22,6z"/></g>`;
    }).join("");
  }

  function fmtDate(day) {
    const x = new Date(Y0 + Math.floor(day) * DAY);
    return lang === "zh" ? `${x.getUTCFullYear()} 年 ${x.getUTCMonth() + 1} 月 ${x.getUTCDate()} 日` : x.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  }
  const monthLabel = i => { const x = new Date(Date.UTC(2026, 10 + i, 1)); return lang === "zh" ? `${x.getUTCMonth() + 1}月` : x.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" }); };

  function updateStatus() {
    const el = $("#vg-now"); if (!el) return;
    const m = S.month, l = PEOPLE.load[m], day = S.day;
    const phase = YEAR_BANDS.find(b => (b.kind === "phase" || b.kind === "crunch" || b.kind === "trip") && yday(b.s) <= day && day <= yday(b.e));
    const others = YEAR_BANDS.filter(b => b.now && b !== phase && yday(b.s) <= day && day <= yday(b.e));
    const ev = EVENTS.filter(e => day >= e.day - .5 && day < e.day + 12).pop();
    const trip = day >= TRIP0 && day < TRIP1;
    el.innerHTML = `<b class="vg__date">${esc(fmtDate(day))}</b>
      <span class="vg__pills">${phase ? `<em class="${phase.kind === "crunch" ? "is-crunch" : phase.kind === "trip" ? "is-trip" : ""}">${esc(L(phase.n))}</em>` : ""}${others.slice(0, 1).map(b => `<em class="is-soft">${esc(L(b.now))}</em>`).join("")}</span>
      <span class="vg__load"><i style="--u:${Math.round(l.u * 100)}%"></i>${esc(t("vg.load"))} <b>${l.h}</b> / ${l.cap} ${esc(t("vg.loadh"))} · ${esc(t("vg.est"))}</span>
      ${trip ? `<span class="vg__ev">${esc(t("vg.quiet"))}</span>` : ev ? `<button class="vg__ev" data-evb="${ev.b}"><code>${ev.n}</code>${esc(L(ev.t))}</button>` : ""}`;
    const b = $("[data-evb]", el); if (b) b.addEventListener("click", () => select({ type: "b", id: b.dataset.evb }));
    const rg = $("#vg-range");
    if (rg) { if (+rg.value !== Math.floor(day)) rg.value = Math.floor(day); rg.setAttribute("aria-valuetext", fmtDate(day)); }
    const fill = $("#vg-fill"); if (fill) fill.style.width = `${day / SPAN * 100}%`;
  }

  // ---------- villagers ----------
  const GROUP_C = { wet: "var(--teal)", dry: "var(--green)", hw: "var(--orange)", hp: "var(--indigo)", wiki: "var(--blue)", media: "var(--pink)", ops: "#56606e", adv: "var(--gold)", staff: "#3a4250" };
  const HAT = code => {
    if (["PHO", "MDL", "VID"].includes(code)) return "cam";
    if (["ART", "FIG"].includes(code)) return "beret";
    if (["HWL", "SFT", "LAB", "WL", "INV"].includes(code)) return "hard";
    if (R[code] && R[code].kind === "a") return "lantern";
    if (R[code] && R[code].kind === "i") return "top";
    return "cap";
  };
  function villagerSVG(code) {
    const c = code === "全隊" ? "var(--pink)" : GROUP_C[R[code].group];
    const hat = code === "全隊" ? "cap" : HAT(code);
    const hats = {
      cap: `<path class="vh" d="M-5.5,-23 a5.5,5 0 0 1 11,0 h3 v1.8 h-14z"/>`,
      beret: `<path class="vh" d="M-6.5,-22 q0,-6 7,-6 q7,0 6,5 q-6,2 -13,1z"/>`,
      hard: `<path class="vh" d="M-6.5,-22 a6.5,6.5 0 0 1 13,0 v1.4 h-13z"/><rect class="vg0" x="-2" y="-28.6" width="4" height="2.2" rx="1"/>`,
      top: `<rect class="vh" x="-4.5" y="-31" width="9" height="8" rx="1"/><rect class="vh" x="-7" y="-23.6" width="14" height="2" rx="1"/>`,
      cam: `<path class="vh" d="M-5.5,-23 a5.5,5 0 0 1 11,0 v1 h-11z"/><rect class="bbk" x="-3" y="-10" width="7" height="5" rx="1"/><circle class="vg0" cx=".5" cy="-7.5" r="1.4"/>`,
      lantern: `<path class="vh" d="M-5.5,-23 a5.5,5 0 0 1 11,0 v1 h-11z"/><line class="kv" x1="-5" y1="-10" x2="-9" y2="-5"/><rect class="lnt" x="-11.5" y="-5" width="5" height="6" rx="1.4"/>`
    };
    return `<g class="v__b" style="--vc:${c}">
      <ellipse class="vs" cx="0" cy="1" rx="7" ry="2.4"/>
      <line class="leg l1" x1="-2" y1="-5" x2="-2" y2="0"/><line class="leg l2" x1="2" y1="-5" x2="2" y2="0"/>
      <path class="vb" d="M-5.5,-4 v-6 q0,-5 5.5,-5 q5.5,0 5.5,5 v6z"/>
      <circle class="vf" cx="0" cy="-20" r="5.2"/>
      ${hats[hat]}
      <g class="v__doc"><rect class="dc" x="4" y="-13" width="9" height="11" rx="1"/><text class="dct" x="8.5" y="-4.6" font-size="7.5" text-anchor="middle"></text></g>
    </g><rect class="hit" x="-14" y="-32" width="32" height="38"/>`;
  }

  let walkers = [], vid = 0, raf = 0, lastT = 0, visible = false, tick = 0;
  const activeHandoffs = m => {
    if (S.day >= TRIP0 && S.day < TRIP1) return [];
    return HANDOFFS.filter(h => {
      if (h.m && !h.m.includes(m)) return false;
      const a = h.a === "全隊" ? m >= 1 : R[h.a].hrs[m] > 0, b = R[h.b].hrs[m] > 0;
      return a && b && (HOME[h.a] !== HOME[h.b]);
    });
  };
  const featured = h => (h.a === "全隊" || (h.a === "PHO" && h.b === "MDL") || h.site || h.a === "IFV" ? 3 : 1);
  function weighted(list, m) {
    let tot = 0; const ws = list.map(h => { const w = featured(h) * (.6 + (h.a === "全隊" ? 1 : Math.min(3, R[h.a].hrs[m]))); tot += w; return w; });
    let r = Math.random() * tot; for (let i = 0; i < list.length; i++) { r -= ws[i]; if (r <= 0) return list[i]; } return list[0];
  }
  const docLetter = h => { const s = typeof h.ids === "string" ? h.ids : "≡"; const m = s.match(/→ ?([A-Z]+)/) || s.match(/^([A-Z]{1,3})/); return s === "gallery" ? "M" : (m ? m[1].slice(0, 1) : "≡"); };
  function spawn(h, chain = 0) {
    const m = S.month, layer = $("#vg-walkers");
    if (!layer) return null;
    const pts = route(HOME[h.a], HOME[h.b]);
    if (pts.length < 2) return null;
    const lens = []; let total = 0;
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); lens.push(l); total += l; }
    const g = document.createElementNS(SVGNS, "g");
    g.setAttribute("class", "v");
    g.setAttribute("role", "button");
    g.innerHTML = villagerSVG(h.a);
    $(".dct", g).textContent = docLetter(h);
    const w = { id: ++vid, h, pts, lens, total, s: 0, speed: 46 + Math.random() * 18, g, chain, wait: 0, x: pts[0][0], y: pts[0][1] };
    g.addEventListener("click", ev => { ev.stopPropagation(); select({ type: "v", id: w.id }); });
    layer.appendChild(g);
    walkers.push(w);
    placeWalker(w);
    return w;
  }
  function placeWalker(w) {
    let s = w.s, i = 0;
    while (i < w.lens.length - 1 && s > w.lens[i]) { s -= w.lens[i]; i++; }
    const a = w.pts[i], b = w.pts[i + 1], u = w.lens[i] ? s / w.lens[i] : 0;
    w.x = a[0] + (b[0] - a[0]) * u; w.y = a[1] + (b[1] - a[1]) * u;
    const dir = b[0] < a[0] - .5 ? -1 : 1;
    const bob = REDUCE ? 0 : Math.abs(Math.sin(w.s * .22)) * 1.4;
    w.g.setAttribute("transform", `translate(${num(w.x)},${num(w.y - bob)}) scale(${dir * 1.28},1.28)`);
  }
  const wantWalkers = () => {
    if (S.week) return 0;
    const l = PEOPLE.load[S.month].u, base = 3 + Math.round(l * 15);
    return Math.min(base, NARROW() ? 8 : 15);
  };
  function refill() {
    const list = activeHandoffs(S.month);
    if (!list.length) return;
    let guard = 0;
    while (walkers.length < wantWalkers() && guard++ < 24) spawn(weighted(list, S.month));
  }
  function retire(w) { w.g.remove(); walkers = walkers.filter(x => x !== w); if (S.sel && S.sel.type === "v" && S.sel.id === w.id) { S.sel = { type: "b", id: HOME[w.h.b] }; renderPanel(); paintSel(); } }
  function arrive(w) {
    const list = activeHandoffs(S.month).filter(h => h.a === w.h.b);
    const next = w.chain < 4 && list.length && Math.random() < .72 ? list[Math.floor(Math.random() * list.length)] : null;
    retire(w);
    if (next) spawn(next, w.chain + 1);
    refill();
    renderRoad();
  }
  function frame(now) {
    raf = 0;
    if (!visible || document.hidden || S.mode !== "map") return;
    const dt = Math.min(now - lastT, 120) / 1000; lastT = now;
    if (S.playing && !S.week) {
      const before = S.day;
      S.day = Math.min(SPAN, S.day + dt * 6);
      stepDay(before, S.day);
      if (S.day >= SPAN) stopPlay();
    }
    tick++;
    if (!(NARROW() && tick % 2)) {
      const mul = NARROW() ? 2 : 1;
      walkers.slice().forEach(w => {
        w.s += w.speed * dt * mul * (S.playing ? 1.6 : 1);
        if (w.s >= w.total) { w.s = w.total; if (w.hero) { heroArrived(w); } else arrive(w); return; }
        placeWalker(w);
      });
      if (S.sel && S.sel.type === "v") paintRing();
      moveCat(now);
    }
    raf = requestAnimationFrame(frame);
  }
  function startLoop() {
    if (REDUCE || raf || !visible || document.hidden || S.mode !== "map") return;
    lastT = performance.now();
    raf = requestAnimationFrame(frame);
  }
  function stopLoop() { cancelAnimationFrame(raf); raf = 0; }

  function layoutStatic() {
    // Reduced motion: villagers stand still mid-route, a fixed picture of this month's hand-offs.
    $("#vg-walkers").innerHTML = ""; walkers = [];
    const list = activeHandoffs(S.month).slice().sort((a, b) => featured(b) - featured(a));
    list.slice(0, wantWalkers()).forEach((h, i) => { const w = spawn(h); if (w) { w.s = w.total * (.32 + (i % 5) * .09); placeWalker(w); } });
    renderRoad();
  }
  function resetWalkers() {
    $("#vg-walkers").innerHTML = ""; walkers = [];
    if (REDUCE) { layoutStatic(); return; }
    refill();
    walkers.forEach((w, i) => { w.s = w.total * ((i * .37) % .9); placeWalker(w); });
    renderRoad();
  }

  let catX = 1262, catDir = 1, catNext = 0, catSt = 0;
  function moveCat(now) {
    const g = $("#vg-cat"); if (!g) return;
    const crunch = S.day >= CRUNCH0 && S.day <= CRUNCH1;
    if (crunch) { g.setAttribute("transform", "translate(1234,600)"); g.classList.add("is-sleep"); return; }
    g.classList.remove("is-sleep");
    if (now > catNext) { catNext = now + 3000 + Math.random() * 5000; catSt = Math.random() < .6 ? 0 : 1; catDir = Math.random() < .5 ? 1 : -1; }
    if (catSt) catX = Math.max(640, Math.min(1000, catX + catDir * .5));
    else if (catX > 1000) catX = 760;
    g.setAttribute("transform", `translate(${num(catX)},588) scale(${catDir},1)`);
  }

  function stepDay(a, b) {
    const m = monthOf(b);
    EVENTS.forEach(e => { if (e.day > a && e.day <= b) fireEvent(e); });
    if (m !== S.month) {
      S.month = m;
      applySeason();
      if (REDUCE) layoutStatic(); else { walkers.filter(w => !w.hero && !activeHandoffs(m).includes(w.h)).slice(0, 6).forEach(retire); refill(); renderRoad(); }
    } else if (Math.floor(a) !== Math.floor(b)) {
      const crossing = [CRUNCH0, TRIP0, TRIP1, CRUNCH1].some(d => a < d && b >= d);
      if (crossing) { applySeason(); if (b >= TRIP0 && a < TRIP0) { walkers.slice().forEach(retire); } else refill(); }
      else { updateStatus(); updateFlags(); updateTrain(); const c = $("#vg-clock"); if (c) c.setAttribute("transform", `translate(23,-96) rotate(${(b / SPAN) * 360})`); }
    }
  }
  function fireEvent(e) {
    if (!e.big || REDUCE) return;
    const g = $("#vg-burst"), [x, y, w] = POS[e.b]; if (!g) return;
    const cols = ["var(--pink)", "var(--orange)", "var(--blue)", "var(--green)", "var(--purple)"];
    g.insertAdjacentHTML("beforeend", `<g class="burst" transform="translate(${x + w / 2},${y - hitH(e.b) + 6})">${Array.from({ length: 14 }, (_, i) => { const a = (i / 14) * 6.283; return `<rect width="5" height="8" rx="1" fill="${cols[i % 5]}" style="--tx:${Math.round(Math.cos(a) * 62)}px;--ty:${Math.round(Math.sin(a) * 50 - 18)}px;--r:${i * 47}deg"/>`; }).join("")}</g>`);
    setTimeout(() => { const b = g.firstElementChild; if (b) b.remove(); }, 1600);
  }

  // ---------- selection and panels ----------
  function select(sel) {
    S.sel = sel; if (sel && sel.type === "b") S.role = null;
    paintSel(); renderPanel();
    const card = $("#vg-panel");
    if (card) card.classList.add("is-open");
    if (innerWidth <= 900 && card && S.mode === "map" && sel) card.scrollIntoView({ block: "nearest", behavior: REDUCE ? "auto" : "smooth" });
  }
  function selBuilding() { return S.sel && S.sel.type === "b" ? S.sel.id : null; }
  function paintSel() {
    const id = selBuilding();
    $$("#vg-world .b").forEach(b => b.classList.toggle("is-sel", b.dataset.b === id));
    $$("#vg-world .tagw").forEach(tg => tg.classList.toggle("on", tg.dataset.tag === id || (S.hits && S.hits.has(tg.dataset.tag))));
    const panel = $("#vg-panel");
    if (panel && id && innerWidth > 900) panel.classList.toggle("is-left", POS[id][0] > 900);
    if (panel && S.sel && S.sel.type !== "b" && innerWidth > 900) { const w = walkers.find(x => x.id === S.sel.id); panel.classList.toggle("is-left", !!w && w.x > 900); }
    paintRoutes(); paintRing();
    $$("#vg-road button").forEach(b => b.classList.toggle("is-sel", !!S.sel && S.sel.type === "v" && +b.dataset.v === S.sel.id));
  }
  function arc(a, b) {
    const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2 - Math.min(90, Math.hypot(a[0] - b[0], a[1] - b[1]) * .22);
    return `M${a[0]},${a[1]} Q${num(mx)},${num(my)} ${b[0]},${b[1]}`;
  }
  function paintRoutes() {
    const g = $("#vg-routes"); if (!g) return;
    const id = selBuilding();
    if (!id) { g.innerHTML = ""; return; }
    const b = B[id], codes = S.role ? [S.role] : (b.fn ? [] : b.roles), seenK = new Set();
    let out = "";
    HANDOFFS.forEach(h => {
      const from = codes.includes(h.a) || (id === "gallery" && h.a === "全隊"), to = codes.includes(h.b);
      if (!from && !to) return;
      const k = HOME[h.a] + HOME[h.b]; if (seenK.has(k) || HOME[h.a] === HOME[h.b]) return; seenK.add(k);
      out += `<path class="rt ${from ? "rt--out" : "rt--in"}" d="${arc(DOORS[HOME[h.a]], DOORS[HOME[h.b]])}"/>`;
    });
    g.innerHTML = out;
  }
  function paintRing() {
    const g = $("#vg-ring"); if (!g) return;
    if (S.sel && S.sel.type === "v") { const w = walkers.find(x => x.id === S.sel.id); g.innerHTML = w ? `<circle class="ring" cx="${num(w.x)}" cy="${num(w.y - 15)}" r="28"/>` : ""; } else g.innerHTML = "";
  }

  function fileChips(r) {
    const list = [...(r.tabs || []), ...(r.folders || [])];
    return list.length ? `<div class="vp__files">${list.map(f => `<code>${esc(f)}</code>`).join("")}</div>` : `<span class="vp__dim">${esc(t("vg.nofile"))}</span>`;
  }
  function hoursBar(r) {
    const max = Math.max(5, ...r.hrs);
    return `<span class="spark" aria-hidden="true">${r.hrs.map((h, i) => `<i class="${i === S.month ? "is-now" : ""}" style="height:${Math.max(h ? 12 : 3, h / max * 100)}%"></i>`).join("")}</span>`;
  }
  function roleBlock(r) {
    const mk = PEOPLE.months[S.month], h = r.hrs[S.month], nodes = (r.nodes || {})[mk] || [];
    const nodeLine = nodes.map(n => { const tl = TIMELINE.find(x => x.n === n); return `<li><code>${n}</code> ${esc(tl ? L(tl.t) : "")}</li>`; }).join("");
    const out = HANDOFFS.filter(x => x.a === r.code), inn = HANDOFFS.filter(x => x.b === r.code);
    const hand = (x, code) => { const hb = HOME[code]; return `<button class="vp__h" data-go="${hb}" data-gr="${code}"><b>${esc(roleName(code))}</b><span>${esc(L(x.what))}${x.how ? " · " + esc(L(x.how)) : ""}</span></button>`; };
    return `<p class="vp__own">${esc(L(r.own))}</p>
      <div class="vp__sec"><h5>${esc(t("vg.thismonth"))} · ${esc(monthLabel(S.month))}</h5>
        <p class="vp__hrs">${hoursBar(r)}<span><b>${h}</b> ${esc(t("ppl.h"))}</span></p>
        ${h ? `<ul class="vp__list">${r.week.map(w => `<li>${esc(L(w))}</li>`).join("")}${nodeLine}</ul>` : `<p class="vp__dim">${esc(t("vg.rest"))} ${esc(L(r.when))}</p>${nodeLine ? `<ul class="vp__list">${nodeLine}</ul>` : ""}`}</div>
      ${out.length ? `<div class="vp__sec"><h5>${esc(t("vg.handto"))}</h5>${out.map(x => hand(x, x.b)).join("")}</div>` : ""}
      ${inn.length ? `<div class="vp__sec"><h5>${esc(t("vg.from"))}</h5>${inn.map(x => hand(x, x.a)).join("")}</div>` : ""}
      <div class="vp__sec"><h5>${esc(t("vg.file"))}</h5>${fileChips(r)}</div>
      <div class="vp__row"><span>${esc(t("vg.backup"))}</span><b>${esc(typeof r.backup === "string" && R[r.backup] ? L(R[r.backup].name) : L(r.backup))}</b></div>
      ${r.peak.length ? `<div class="vp__row"><span>${esc(t("ppl.peak"))}</span><b>${r.peak.map(p => esc(L(p))).join("、")}</b></div>` : ""}
      ${r.note ? `<p class="vp__note">${esc(L(r.note))}</p>` : ""}
      ${r.rhythm.length ? `<button class="vp__week" data-week="${r.code}">${esc(t("vg.week"))}</button>` : ""}`;
  }
  const seatText = r => r.kind === "s2" ? `${t("ppl.sec")} ×${r.sec}` : r.kind === "i" ? `${t("ppl.func")} ×${r.seats}` : `×${r.seats} ${lang === "zh" ? t("vg.seats") : ""}`.trim();
  function renderPanel() {
    const p = $("#vg-panel-in"); if (!p) return;
    const close = `<button class="vp__x" data-close aria-label="${esc(t("vg.weekclose"))}"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13"/></svg></button>`;
    if (!S.sel) { p.innerHTML = `<p class="vp__hint">${esc(t("vg.hint"))}</p>`; $("#vg-panel").classList.remove("is-open"); return; }
    $("#vg-panel").style.setProperty("--c", "var(--accent)");
    if (S.sel.type === "cat") { p.innerHTML = `${close}<div class="panel__head"><span class="panel__kind">${esc(t("vg.eyebrow"))}</span><h3>${lang === "zh" ? "村貓" : "The cat"}</h3></div><p class="vp__own">${esc(L(VILLAGE_CAT))}</p>`; wire(p); return; }
    if (S.sel.type === "v") {
      const w = walkers.find(x => x.id === S.sel.id);
      if (!w) { S.sel = null; return renderPanel(); }
      const h = w.h, code = h.a === "全隊" ? h.b : h.a, r = R[code];
      $("#vg-panel").style.setProperty("--c", GROUP_C[r.group]);
      p.innerHTML = `${close}<div class="panel__head"><span class="panel__kind">${esc(t("vg.road"))}</span><h3>${esc(roleName(h.a))}</h3></div>
        <p class="vp__own">${h.a === "全隊" ? "" : esc(L(r.own))}</p>
        <div class="vp__row"><span>${esc(t("vg.carry"))}</span><b>${esc(L(h.what))}${typeof h.ids === "string" ? ` · <code>${esc(h.ids)}</code>` : ""}</b></div>
        <div class="vp__row"><span>${esc(t("vg.fromb"))}</span><b><button class="vp__link" data-go="${HOME[h.a]}">${esc(L(B[HOME[h.a]].name))}</button></b></div>
        <div class="vp__row"><span>${esc(t("vg.goto"))}</span><b><button class="vp__link" data-go="${HOME[h.b]}">${esc(L(B[HOME[h.b]].name))}</button> · ${esc(roleName(h.b))}</b></div>
        <div class="vp__row"><span>${esc(t("vg.cadence"))}</span><b>${esc(L(h.how))}</b></div>
        ${h.a === "全隊" ? "" : `<div class="vp__sec"><h5>${esc(t("vg.file"))}</h5>${fileChips(r)}</div>`}`;
      wire(p); return;
    }
    const b = B[S.sel.id], d = D[b.d];
    $("#vg-panel").style.setProperty("--c", dColor(b.d));
    const roles = b.fn ? [] : b.roles.map(c => R[c]);
    const cur = S.role && b.roles.includes(S.role) ? R[S.role] : roles[0];
    const tabs = roles.length > 1 ? `<div class="vp__tabs">${roles.map(r => `<button data-role="${r.code}" aria-pressed="${r === cur}">${esc(L(r.name))}</button>`).join("")}</div>` : "";
    p.innerHTML = `${close}<div class="panel__head"><span class="panel__kind">${esc(L(d.name))}${b.fn ? " · " + esc(t("vg.fn")) : ""}</span><h3>${esc(L(b.name))}</h3>${cur ? `<span class="vp__seat"><code>${cur.code}</code> ${esc(L(cur.name))} ${esc(seatText(cur))}</span>` : ""}</div>
      ${b.fn ? `<p class="vp__own">${esc(L(b.fn))}</p><div class="vp__sec"><h5>${esc(t("vg.file"))}</h5><div class="vp__files">${b.files.map(f => `<code>${esc(f)}</code>`).join("")}</div></div>` : ""}
      ${b.id === "gallery" ? `<a class="vp__week" href="system.html#photo">${esc(t("ph.see"))}</a>` : ""}
      ${b.fn && b.roles.length ? `<div class="vp__sec"><h5>${esc(t("vg.handto"))}</h5>${b.roles.map(c => `<button class="vp__h" data-go="${HOME[c]}"><b>${esc(L(R[c].name))}</b><span>${esc(L(R[c].own))}</span></button>`).join("")}</div>` : ""}
      ${tabs}${cur ? roleBlock(cur) : ""}
      ${b.id === "darkroom" ? `<a class="vp__week vp__week--2" href="system.html#photo">${esc(t("ph.see"))}</a>` : ""}`;
    wire(p);
  }
  function wire(p) {
    $$("[data-close]", p).forEach(x => x.addEventListener("click", () => { S.sel = null; paintSel(); renderPanel(); const f = $("#vg-world .b[tabindex='0']"); if (f && S.mode === "map") f.focus({ preventScroll: true }); }));
    $$("[data-go]", p).forEach(x => x.addEventListener("click", () => { S.sel = { type: "b", id: x.dataset.go }; S.role = x.dataset.gr && R[x.dataset.gr] ? x.dataset.gr : null; paintSel(); renderPanel(); }));
    $$("[data-role]", p).forEach(x => x.addEventListener("click", () => { S.role = x.dataset.role; paintRoutes(); renderPanel(); }));
    $$("[data-week]", p).forEach(x => x.addEventListener("click", () => startWeek(x.dataset.week)));
  }

  function renderRoad() {
    const el = $("#vg-road"); if (!el) return;
    if (!walkers.filter(w => !w.hero).length) { el.innerHTML = `<span class="vp__dim">${esc(t("vg.roadnone"))}</span>`; return; }
    el.innerHTML = walkers.filter(w => !w.hero).slice(0, NARROW() ? 5 : 8).map(w => `<button data-v="${w.id}" style="--c:${w.h.a === "全隊" ? "var(--pink)" : GROUP_C[R[w.h.a].group]}"><i></i><b>${esc(typeof w.h.ids === "string" ? w.h.ids : "≡")}</b> ${esc(roleName(w.h.a))} → ${esc(roleName(w.h.b))}</button>`).join("");
    $$("button", el).forEach(b => b.addEventListener("click", () => select({ type: "v", id: +b.dataset.v })));
  }

  // ---------- week in the life ----------
  const DAYS = ["週一", "週二", "週三", "週四", "週五", "週六", "週日"];
  function dayIndex(z) { const i = DAYS.findIndex(d => z.startsWith(d)); return i; }
  function weekPlan(code) {
    const r = R[code], slots = DAYS.map(() => []), other = [];
    r.rhythm.forEach(x => { const zh = x.day.zh || x.day, i = dayIndex(zh); (i >= 0 ? slots[i] : other).push(x); });
    const steps = [];
    slots.forEach((list, i) => list.forEach(x => {
      const dn = DAYS[i];
      const h = HANDOFFS.find(y => y.a === code && (y.how.zh || "").includes(dn));
      const usesHub = (r.tabs || []).some(tb => tb.startsWith("Hub."));
      steps.push({ i, x, to: h ? HOME[h.b] : usesHub && i !== 5 ? "hub" : HOME[code], via: h ? h : null });
    }));
    return { r, slots, other, steps };
  }
  function startWeek(code) {
    stopPlay();
    const plan = weekPlan(code);
    S.week = { code, plan, step: -1, running: false, loc: HOME[code] };
    walkers.slice().forEach(w => retire(w));
    renderWeek();
  }
  function endWeek() {
    S.week = null; $("#vg-week").innerHTML = ""; $("#vg-week").hidden = true;
    walkers.slice().forEach(w => retire(w));
    resetWalkers();
  }
  function renderWeek() {
    const el = $("#vg-week"), w = S.week; if (!el) return;
    if (!w) { el.hidden = true; return; }
    el.hidden = false;
    const r = w.plan.r, names = lang === "zh" ? DAYS : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const cur = w.plan.steps[w.step];
    el.innerHTML = `<div class="vw__top"><h4>${esc(L(r.name))}${esc(t("vg.weekof"))}</h4>
        <div class="vw__btns">${w.plan.steps.length ? `<button class="vp__week" id="vg-week-go">${esc(t("vg.weekplay"))}</button>` : ""}<button class="vp__week vp__week--2" id="vg-week-x">${esc(t("vg.weekclose"))}</button></div></div>
      <ol class="vw__days">${w.plan.slots.map((list, i) => `<li class="${cur && cur.i === i ? "is-now" : ""}${list.length ? " has" : ""}"><b>${names[i]}</b>${list.map(x => `<span>${esc(L(x.duty))}<small>${x.min} ${esc(t("vg.wmin"))}</small></span>`).join("")}</li>`).join("")}</ol>
      ${w.plan.other.length ? `<p class="vw__other"><b>${esc(t("vg.other"))}</b> ${w.plan.other.map(x => `${esc(L(x.day))}: ${esc(L(x.duty))} (${x.min} ${esc(t("vg.wmin"))})`).join("；")}</p>` : ""}
      <p class="vw__note">${esc(t("vg.weeknote"))}</p>`;
    const go = $("#vg-week-go"); if (go) go.addEventListener("click", walkWeek);
    $("#vg-week-x").addEventListener("click", endWeek);
    if (innerWidth <= 900 && w.step < 0) el.scrollIntoView({ block: "nearest", behavior: REDUCE ? "auto" : "smooth" });
  }
  function walkWeek() {
    const w = S.week; if (!w) return;
    w.step = -1; w.loc = HOME[w.code]; nextWeekStep();
  }
  function nextWeekStep() {
    const w = S.week; if (!w) return;
    w.step++;
    if (w.step >= w.plan.steps.length) { w.step = -1; renderWeek(); return; }
    renderWeek();
    const st = w.plan.steps[w.step];
    if (REDUCE || st.to === w.loc || S.mode !== "map") { w.loc = st.to; setTimeout(nextWeekStep, 1400); return; }
    const h = st.via || { a: w.code, b: w.code, what: st.x.duty, how: st.x.day, ids: "≡" };
    const pts = route(w.loc, st.to);
    const lens = []; let total = 0;
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); lens.push(l); total += l; }
    const g = document.createElementNS(SVGNS, "g");
    g.setAttribute("class", "v v--hero"); g.innerHTML = villagerSVG(w.code); $(".dct", g).textContent = docLetter(h);
    $("#vg-walkers").appendChild(g);
    const hero = { id: ++vid, h, pts, lens, total, s: 0, speed: 150, g, hero: true, x: pts[0][0], y: pts[0][1], to: st.to };
    walkers.push(hero); placeWalker(hero); startLoop();
  }
  function heroArrived(h) { h.g.remove(); walkers = walkers.filter(x => x !== h); if (S.week) { S.week.loc = h.to; setTimeout(nextWeekStep, 500); } }

  // ---------- find my job ----------
  function search(q, codes) {
    S.q = q;
    const box = $("#vg-results"), root = $("#vg-root");
    const needle = q.trim().toLowerCase();
    let matches = [];
    if (codes) matches = codes.map(c => R[c]);
    else if (needle) {
      matches = PEOPLE.roles.filter(r => [r.code, r.name.zh, r.name.en, L(r.own), r.own.zh, r.own.en, ...r.week.flatMap(w => [w.zh, w.en]), ...r.fit.flatMap(w => [w.zh, w.en]), ...r.tabs, ...r.folders].join(" ").toLowerCase().includes(needle));
    }
    const hits = new Set(); matches.forEach(r => { if (HOME[r.code]) hits.add(HOME[r.code]); });
    if (needle) VILLAGE_BUILDINGS.forEach(b => { if ([b.name.zh, b.name.en, ...(b.files || [])].join(" ").toLowerCase().includes(needle)) hits.add(b.id); });
    S.hits = needle || codes ? hits : null;
    root.classList.toggle("has-q", !!S.hits);
    $$("#vg-world .b").forEach(b => b.classList.toggle("is-hit", !!S.hits && S.hits.has(b.dataset.b)));
    paintSel();
    if (!S.hits) { box.innerHTML = ""; return; }
    box.innerHTML = matches.length || hits.size ? [...hits].slice(0, 12).map(id => {
      const b = B[id], rs = matches.filter(r => HOME[r.code] === id);
      return `<button data-res="${id}" style="--c:${dColor(b.d)}"><i></i>${esc(rs.length ? rs.map(r => L(r.name)).join("、") : L(b.name))}<small>${esc(L(b.name))}</small></button>`;
    }).join("") : `<span class="vp__dim">${esc(t("ppl.none"))}</span>`;
    $$("[data-res]", box).forEach(x => x.addEventListener("click", () => { select({ type: "b", id: x.dataset.res }); scrollToB(x.dataset.res); }));
    if (hits.size === 1) scrollToB([...hits][0]);
  }
  function scrollToB(id) {
    const st = $("#vg-stage"), sv = $("#vg-world"); if (!st || !sv || st.scrollWidth <= st.clientWidth + 2) return;
    const [x, y] = POS[id], s = sv.clientWidth / 1600;
    st.scrollTo({ left: x * s - st.clientWidth / 2 + 40, top: y * s - st.clientHeight / 2, behavior: REDUCE ? "auto" : "smooth" });
  }

  // ---------- list alternative ----------
  function renderList() {
    const el = $("#vg-list"); if (!el) return;
    const th = T[lang]["vg.th"], m = S.month;
    el.innerHTML = `<p class="vp__dim">${esc(t("vg.listsub"))}</p>
      ${VILLAGE_DISTRICTS.map(d => `<section class="vl"><h4 style="--c:${dColor(d.id)}"><i></i>${esc(L(d.name))}<small>${esc(L(d.blurb))}</small></h4>
        <div class="dmwrap"><table class="dm dm--small"><thead><tr>${th.slice(1).map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>
        ${VILLAGE_BUILDINGS.filter(b => b.d === d.id).map(b => {
          const lv = heatOf(b, m, S.day), roles = b.fn ? [] : b.roles.map(c => R[c]);
          const hours = roles.map(r => r.hrs[m]).reduce((a, x) => Math.max(a, x), 0);
          return `<tr><td class="dm__duty" data-label="${esc(th[1])}"><button class="vl__b" data-lb="${b.id}">${esc(L(b.name))}</button></td>
            <td data-label="${esc(th[2])}">${b.fn ? esc(t("vg.fn")) : roles.map(r => esc(L(r.name))).join("、")}</td>
            <td data-label="${esc(th[3])}"><span class="vl__lv vl__lv--${lv}">${"●".repeat(lv)}${"○".repeat(3 - lv)}</span>${roles.length ? ` ${hours} ${esc(t("ppl.h"))}` : ""}</td></tr>`;
        }).join("")}</tbody></table></div></section>`).join("")}
      <section class="vl"><h4>${esc(t("vg.events"))}</h4><ol class="vl__ev">${EVENTS.map(e => `<li class="${e.day <= S.day ? "is-past" : ""}"><button data-jump="${e.day}"><code>${e.n}</code>${esc(L(e.t))}</button></li>`).join("")}</ol></section>`;
    $$("[data-lb]", el).forEach(b => b.addEventListener("click", () => select({ type: "b", id: b.dataset.lb })));
    $$("[data-jump]", el).forEach(b => b.addEventListener("click", () => jump(+b.dataset.jump)));
  }
  function jump(day) { stopPlay(); const before = S.day; S.day = Math.max(0, Math.min(SPAN, day)); const m = monthOf(S.day); const chg = m !== S.month; S.month = m; applySeason(); if (chg || (before < TRIP0) !== (S.day < TRIP0)) resetWalkers(); }

  // ---------- controls ----------
  let playTimer = 0;
  function play() {
    if (S.day >= SPAN) S.day = 0;
    S.playing = true; $("#vg-play").classList.add("is-playing"); $("#vg-play").setAttribute("aria-label", t("vg.pause"));
    if (REDUCE || S.mode === "list") {
      clearInterval(playTimer);
      playTimer = setInterval(() => { const n = monthOf(S.day) + 1; if (n > 12) return stopPlay(); jump(monthStart(n)); S.playing = true; $("#vg-play").classList.add("is-playing"); }, 1600);
      return;
    }
    startLoop();
  }
  function stopPlay() { S.playing = false; clearInterval(playTimer); const p = $("#vg-play"); if (p) { p.classList.remove("is-playing"); p.setAttribute("aria-label", t("vg.play")); } }
  const prevMonth = () => { const m = monthOf(S.day), st = monthStart(m); jump(S.day - st > 1 ? st : monthStart(Math.max(0, m - 1))); };
  const nextMonth = () => jump(monthStart(Math.min(12, monthOf(S.day) + 1)));

  function setMode(mode) {
    S.mode = mode;
    $("#vg-map").hidden = mode !== "map"; $("#vg-list").hidden = mode !== "list";
    $$("#vg-mode button").forEach(b => b.setAttribute("aria-selected", b.dataset.mode === mode));
    if (mode === "list") { stopLoop(); renderList(); } else startLoop();
  }

  function moveFocus(from, key) {
    const [x0, y0] = POS[from]; let best = null, bs = Infinity;
    Object.keys(POS).forEach(id => {
      if (id === from) return;
      const dx = POS[id][0] - x0, dy = POS[id][1] - y0;
      const ok = (key === "ArrowRight" && dx > 10) || (key === "ArrowLeft" && dx < -10) || (key === "ArrowDown" && dy > 10) || (key === "ArrowUp" && dy < -10);
      if (!ok) return;
      const cross = key === "ArrowLeft" || key === "ArrowRight" ? Math.abs(dy) * 2.4 + Math.abs(dx) : Math.abs(dx) * 2.4 + Math.abs(dy);
      if (cross < bs) { bs = cross; best = id; }
    });
    return best;
  }
  function focusB(id) {
    $$("#vg-world .b").forEach(b => b.setAttribute("tabindex", b.dataset.b === id ? 0 : -1));
    const el = $(`#vg-world [data-b="${id}"]`); if (el) { el.focus({ preventScroll: true }); scrollToB(id); }
  }

  function renderShell() {
    const root = $("#vg-root");
    root.innerHTML = `
      <a class="vg__skip" href="#vg-list-a">${esc(t("vg.skip"))}</a>
      <div class="vg__top">
        <div class="vg__ctl">
          <div class="flow__ctl">
            <button id="vg-prev" class="ctl" aria-label="${esc(t("vg.prev"))}"><svg viewBox="0 0 16 16"><path d="M10 3 5 8l5 5"/></svg></button>
            <button id="vg-play" class="ctl ctl--main" aria-label="${esc(t("vg.play"))}"><svg viewBox="0 0 16 16" class="i-play"><path d="M5 3v10l8-5z"/></svg><svg viewBox="0 0 16 16" class="i-pause"><path d="M5 3v10M11 3v10"/></svg></button>
            <button id="vg-next" class="ctl" aria-label="${esc(t("vg.next"))}"><svg viewBox="0 0 16 16"><path d="m6 3 5 5-5 5"/></svg></button>
          </div>
          <div class="vg__now" id="vg-now" aria-live="off"></div>
          <div class="seg vg__mode" id="vg-mode" role="tablist"><button role="tab" data-mode="map">${esc(t("vg.map"))}</button><button role="tab" data-mode="list" id="vg-list-a">${esc(t("vg.list"))}</button></div>
        </div>
        <div class="vg__scrub">
          <div class="vg__track"><i id="vg-fill"></i>${EVENTS.map(e => `<b class="${e.big ? "big" : ""}" style="left:${e.day / SPAN * 100}%" title="${esc(L(e.t))}"></b>`).join("")}</div>
          <input type="range" id="vg-range" min="0" max="${SPAN}" step="1" value="${Math.floor(S.day)}" aria-label="${esc(t("vg.month"))}">
          <div class="vg__months" aria-hidden="true">${PEOPLE.months.map((_, i) => `<span style="left:${monthStart(i) / SPAN * 100}%">${esc(monthLabel(i))}</span>`).join("")}</div>
        </div>
      </div>
      <div class="vg__find">
        <label class="vg__findl" for="vg-q">${esc(t("vg.find"))}</label>
        <input id="vg-q" type="search" placeholder="${esc(t("vg.findph"))}" autocomplete="off" value="${esc(S.q)}">
        <div class="vg__chips">${VILLAGE_FIND.map((f, i) => `<button data-find="${i}">${esc(L(f))}</button>`).join("")}</div>
        <div class="vg__results" id="vg-results" aria-live="polite"></div>
      </div>
      <div id="vg-map">
        <div class="vg__body">
          <div class="vg__stage" id="vg-stage" role="group" aria-label="${esc(t("vg.mapl"))}">
            <div class="vg__canvas">
              <svg id="vg-world" class="vg__world" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid meet">${buildWorld()}</svg>
              <svg id="vg-life" class="vg__life" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid meet" aria-hidden="false">${buildLife()}</svg>
            </div>
          </div>
          <aside class="vg__panel" id="vg-panel" aria-live="polite"><div id="vg-panel-in"></div></aside>
        </div>
        <div class="vg__under">
          <div class="vg__jump"><span>${esc(t("vg.jump"))}</span>${VILLAGE_DISTRICTS.map(d => `<button data-dist="${d.id}" style="--c:${dColor(d.id)}"><i></i>${esc(L(d.name))}</button>`).join("")}
            <button class="vg__lbl" id="vg-labels" aria-pressed="${S.labels}">${esc(t("vg.labels"))}</button></div>
          <div class="vg__roadw"><h5>${esc(t("vg.road"))}</h5><div class="vg__road" id="vg-road"></div></div>
        </div>
      </div>
      <div id="vg-list" class="vg__listw" hidden></div>
      <div class="vg__week" id="vg-week" hidden></div>`;

    $("#vg-prev").addEventListener("click", prevMonth);
    $("#vg-next").addEventListener("click", nextMonth);
    $("#vg-play").addEventListener("click", () => (S.playing ? stopPlay() : play()));
    const rg = $("#vg-range");
    rg.addEventListener("input", () => jump(+rg.value));
    rg.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") { e.preventDefault(); prevMonth(); }
      if (e.key === "ArrowRight" || e.key === "ArrowUp") { e.preventDefault(); nextMonth(); }
    });
    $$("#vg-mode button").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
    $("#vg-q").addEventListener("input", e => { $$("[data-find]").forEach(x => x.setAttribute("aria-pressed", "false")); search(e.target.value); });
    $$("[data-find]").forEach(b => b.addEventListener("click", () => {
      const f = VILLAGE_FIND[+b.dataset.find], on = b.getAttribute("aria-pressed") === "true";
      $$("[data-find]").forEach(x => x.setAttribute("aria-pressed", "false"));
      $("#vg-q").value = "";
      if (on) search(""); else { b.setAttribute("aria-pressed", "true"); search("", f.q); }
    }));
    $("#vg-labels").addEventListener("click", e => { S.labels = !S.labels; e.currentTarget.setAttribute("aria-pressed", S.labels); $("#vg-root").classList.toggle("show-tags", S.labels); });
    $$("[data-dist]").forEach(b => b.addEventListener("click", () => {
      const id = b.dataset.dist, same = S.district === id; S.district = same ? null : id;
      $$("[data-dist]").forEach(x => x.setAttribute("aria-pressed", x.dataset.dist === S.district));
      $$("#vg-world .b").forEach(el => el.classList.toggle("is-dist", !!S.district && B[el.dataset.b].d === S.district));
      $("#vg-root").classList.toggle("has-dist", !!S.district);
      const first = VILLAGE_BUILDINGS.find(x => x.d === id); if (!same && first) scrollToB(first.id);
    }));
    const world = $("#vg-world");
    world.addEventListener("click", e => { const g = e.target.closest(".b"); if (g) { select({ type: "b", id: g.dataset.b }); $$("#vg-world .b").forEach(b => b.setAttribute("tabindex", b === g ? 0 : -1)); } });
    world.addEventListener("keydown", e => {
      const g = e.target.closest(".b"); if (!g) return;
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select({ type: "b", id: g.dataset.b }); return; }
      if (e.key.startsWith("Arrow")) { e.preventDefault(); const n = moveFocus(g.dataset.b, e.key); if (n) focusB(n); }
    });
    // The life layer sits on top, so hits that are not on a villager must fall through to the world.
    const cat = $("#vg-cat");
    if (cat) cat.addEventListener("click", () => select({ type: "cat" }));
    $("#vg-root").classList.toggle("show-tags", S.labels);
    moveCatInit();
    if (NARROW()) { const st = $("#vg-stage"); st.scrollTop = 110; }
  }
  function moveCatInit() { const g = $("#vg-cat"); if (g) g.setAttribute("transform", `translate(${catX > 1000 ? 760 : catX},588)`); if (catX > 1000) catX = 760; }

  // ---------- public ----------
  function render(l) {
    lang = l;
    if (!$("#vg-root")) return;
    renderShell();
    setMode(S.mode);
    applySeason();
    resetWalkers();
    paintSel(); renderPanel();
    if (S.week) { const code = S.week.code; S.week.plan = weekPlan(code); renderWeek(); }
    if (S.q) search(S.q);
    attachObserver();
  }
  let observed = false;
  function attachObserver() {
    if (observed || !("IntersectionObserver" in window)) { if (!("IntersectionObserver" in window)) { visible = true; startLoop(); } return; }
    observed = true;
    new IntersectionObserver(es => es.forEach(e => {
      visible = e.isIntersecting;
      $("#vg-root").classList.toggle("is-off", !visible);
      if (visible) startLoop(); else stopLoop();
    }), { threshold: .05 }).observe($("#vg-root"));
    document.addEventListener("visibilitychange", () => { if (document.hidden) stopLoop(); else startLoop(); });
  }
  function focusRole(code) {
    setMode("map");
    const id = HOME[code]; if (!id) return;
    select({ type: "b", id }); S.role = code; renderPanel(); paintRoutes();
    $("#village").scrollIntoView({ behavior: REDUCE ? "auto" : "smooth" });
    scrollToB(id);
  }
  return { render, focusRole, select, _state: S, _walkers: () => walkers, _jump: jump };
})();
