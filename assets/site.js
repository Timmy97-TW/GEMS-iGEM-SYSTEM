// Shared page shell and the parts of the site that depend on today's date.
// Loads after data.js and updates.js, before app.js. Nav items live here, once.
window.SITE = (() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const PAGE = document.body.dataset.page;

  Object.assign(T.zh, {
    "site.home": "今天", "site.system": "系統", "site.time": "時程", "site.people": "角色", "site.advisors": "Advisor", "site.research": "Research", "site.updates": "更新",
    "title.home": "GEMS iGEM 2027", "title.system": "系統全貌", "title.time": "時程", "title.people": "角色", "title.advisors": "Advisor 計畫", "title.research": "Research", "title.updates": "更新紀錄",
    "home.intro": "GEMS Taiwan 2027 iGEM 隊的工作系統：誰，在什麼時候，把什麼放在哪裡。",
    "home.proposal": "提案，待 PI 確認。",
    "site.students": "學生歷程", "title.students": "學生歷程", "door.students": "學生歷程", "door.students.who": "學生、家長與老師", "door.count.dims": "個面向", "door.students.d": "記下每位學生做了什麼，也記下變成什麼樣的人：承擔與幫忙、面對失敗、開口。最後成為家長和學生都看得到的年鑑。", "home.d": "天", "home.cta": "看系統全貌（約 10 分鐘）", "home.cta2": "看全年時程", "home.next": "下一個節點", "home.days": "天後", "home.today": "今天", "home.after": "接著", "home.allnodes": "看完整時程",
    "home.phase": "目前階段", "home.phase.build": "系統建置", "home.phase.gap": "階段之間", "home.phase.end": "賽季結束",
    "home.none": "這一季的節點都走完了。",
    "home.pass": "通過條件",
    "home.year": "這一年走到哪裡", "home.year.gate": "內部關卡", "home.year.deadline": "iGEM 截止（? 為推估）",
    "home.updates": "最新更新", "home.updates.all": "全部更新",
    "home.where": "你要找什麼",
    "home.chain": "整套系統只靠三件事撐住", "home.chain.ids": "一件事只有一個 ID", "home.chain.gates": "重要的事用關卡擋", "home.chain.more": "看系統全貌",
    "home.chain.ids.d": "檔案、表格和 wiki 都用 ID 互相引用，所以每個數字都追得回來源。",
    "home.chain.gates.d": "沒過關卡就不能往下走，靠規則擋，不靠人提醒。",
    "home.chain.pi": "PI 只看例外", "home.chain.pi.d": "AI 每週從 Hub 算出該處理的事。判斷仍由老師做。",
    "door.system": "系統全貌", "door.system.d": "第一次看這套系統，從這裡開始：為什麼要做、規則、架構、Drive、流程、文件年表和村莊。", "door.system.who": "想看全貌的人",
    "door.time": "時程", "door.time.d": "從 iGEM 截止日往回排的全年節點，每個節點都有通過條件和負責人。", "door.time.who": "全隊，每週",
    "door.people": "角色", "door.people.d": "每個席位負責什麼、每週做什麼、要花多少時間。席位不是指派。", "door.people.who": "學生與老師",
    "door.advisors": "Advisor 計畫", "door.advisors.d": "五個階段、每月底線、每份產出放哪裡、Advisor 和老師各負責什麼。", "door.advisors.who": "Advisor 與老師",
    "door.research": "Research", "door.research.d": "一個問題怎麼變成一張卡、一份結論、一個決定，以及這些文件在系統裡的位置。", "door.research.who": "所有做研究的人",
    "door.count.folders": "個資料夾", "door.count.docs": "份文件", "door.count.nodes": "個節點", "door.count.roles": "種角色", "door.count.stages": "個階段", "door.count.rules": "條規則",
    "vg.home": "想逛逛，就走進村莊",
    "sub.brief": "怎麼看", "sub.why": "為什麼", "sub.rules": "規則", "sub.arch": "架構", "sub.drive": "Drive", "sub.flow": "流程", "sub.year": "文件年表", "sub.std": "標準", "sub.village": "村莊",
    "sub.overview": "概要", "sub.stages": "五個階段", "sub.month": "每個月", "sub.output": "一份產出", "sub.docs": "文件", "sub.map": "放哪裡", "sub.roles": "角色", "sub.tbd": "待決定",
    "sub.res.why": "為什麼", "sub.res.structure": "結構", "sub.res.flow": "流程", "sub.res.case": "實例", "sub.res.docs": "文件系統", "sub.res.when": "時間與人", "sub.res.rules": "規則",
    "sys.h1": "一套系統。<br>五個交付物。",
    "sys.lede": "2026 年花在找檔案、對數字、重做頁面的時間，2027 年還給研究。這一頁把整套系統從頭講一次。",
    "brief.h": "十分鐘看完", "brief.sub": "依序往下讀，或直接跳到想看的部分。",
    "brief.why": "2026 年實際壞在哪裡，以及哪些東西值得留下。",
    "brief.rules": "七條規則、三道硬關卡、ID 體系、五層工具和 Hub 分頁。",
    "brief.arch": "資料從哪裡進來、存在哪裡、變成哪個交付物。點任何一格看規則。",
    "brief.drive": "每個資料夾放什麼、誰能改、從 2026 哪裡來。",
    "brief.flow": "跟著一份檔案走過整個系統，每一步都看得到誰做、放哪裡。",
    "brief.year": "每份文件在哪一天誕生、誰讀、餵給誰。",
    "brief.std": "照片、事實表和 wiki 的共同標準。",
    "brief.village": "同一套系統畫成村莊：每個角色住哪裡、每週走去哪裡、彼此交什麼。",
    "time.nodes": "所有節點", "time.nodes.sub": "已過的節點會變淡，下一個節點會標出來。", "time.filter.all": "全部", "time.filter.deadline": "iGEM 截止", "time.filter.gate": "內部關卡", "time.filter.adv": "Advisor",
    "time.nextflag": "下一個", "time.days": "天後", "time.past": "已過", "time.th.pass": "通過條件", "time.th.owner": "負責", "time.th.ok": "驗收",
    "upd.eyebrow": "更新紀錄", "upd.h1": "這套系統<br>每天改了什麼。", "upd.lede": "系統和網站的變更都記在這裡，最新的在最上面。個人進度與隊內細節不放在這個公開網站。",
    "upd.all": "全部", "upd.tag.system": "系統", "upd.tag.schedule": "時程", "upd.tag.advisor": "Advisor", "upd.tag.research": "Research", "upd.tag.site": "網站", "upd.none": "這個分類還沒有更新。", "upd.last": "最後更新",
    "adv.h1": "從參與者，<br>到 advisor。",
    "adv.glance.stages": "個階段，每階段都有具名產出", "adv.glance.month": "實體時數底線，每月", "adv.glance.who": "位 advisor（估計，依實際簽署）", "adv.glance.span": "任期開始",
    "adv.bound": "Advisor 負責什麼", "adv.bound.sub": "判斷責任在 instructor。Advisor 留下紀錄，但不是放行關卡。",
    "adv.bound.do": "Advisor 做", "adv.bound.do.d": "在自己的具名範圍內帶隊員、留下審查意見、每月交月報，並把會做的事寫成隊員能獨立照做的文件。",
    "adv.bound.inst": "Instructor 做", "adv.bound.inst.d": "確認範圍、確認月報、主持階段驗收、寫書面結果。任何放行判斷都由 instructor 負責。",
    "adv.bound.see": "誰看得到", "adv.bound.see.d": "學生看得到 advisor 的產出。驗收結果只放在老師專用的 Ops，不經過 AI。",
    "adv.month.h": "每個月的底線", "adv.output.h": "跟著一份 advisor 產出走一次", "adv.output.sub": "從確認範圍到驗收，每一步看得到誰做、檔案放哪裡、Hub 哪一列更新。",
    "adv.docs.h": "Advisor 的一年文件", "adv.docs.sub": "只看 Advisor 這條泳道，以及它對齊的 iGEM 截止與內部關卡。點任何一份，看規則和位置。",
    "adv.roles.h": "Advisor 的角色", "adv.roles.sub": "席位是提案，不是指派。時數都是估算。",
    "adv.detail": "個別驗收結果和同意書全文不放在公開網站。正式規則以 2027 Advisor 參與同意書為準。",
    "res.h1": "一個問題，<br>走到一個決定。",
    "res.flow.h": "跟著一題研究走一次", "res.flow.sub": "研究不是另一套系統。旁邊兩個分頁是它接下去的地方：題目怎麼定，實驗怎麼做。",
    "res.docs.h": "研究在文件系統裡的位置", "res.docs.sub": "研究檔案住在 15 Research，定題和實驗文件接在後面。下面的 Drive 和年表與「系統全貌」是同一份。",
    "res.year.h": "研究接到哪些文件", "res.year.sub": "拖動時間軸，看題目、訓練、實驗和 wiki 的文件依序誕生。",
    "foot.pages": "頁面",
    "site.hub": "專案中心", "home.hub.k": "學生每天從這裡開始", "home.hub.t": "2027 專案中心", "home.hub.d": "本週目標、里程碑、作業、負責人、貢獻和所有連結。這個網站講系統為什麼這樣設計，專案中心講今天要做什麼。", "home.hub.go": "打開專案中心",
    "door.hub": "2027 專案中心", "door.hub.who": "全隊，每天", "door.hub.d": "這週的目標、要交的作業、遇到問題問誰、每個資料夾和表的連結。和這裡用同一份節點與席位。", "door.count.pages": "個頁面"
  });
  Object.assign(T.en, {
    "site.home": "Today", "site.system": "System", "site.time": "Schedule", "site.people": "Roles", "site.advisors": "Advisors", "site.research": "Research", "site.updates": "Updates",
    "title.home": "GEMS iGEM 2027", "title.system": "The system", "title.time": "Schedule", "title.people": "Roles", "title.advisors": "Advisor programme", "title.research": "Research", "title.updates": "Updates",
    "home.intro": "How the GEMS Taiwan 2027 iGEM team works: who puts what where, and when.",
    "home.proposal": "A proposal, awaiting the PI.",
    "site.students": "Journeys", "title.students": "Student journeys", "door.students": "Student journeys", "door.students.who": "Students, families and instructors", "door.count.dims": "areas", "door.students.d": "What each student did and who they became: owning and helping, facing failure, finding a voice. It ends as a yearbook families and students can read.", "home.d": "d", "home.cta": "See the whole system (about 10 min)", "home.cta2": "See the year’s schedule", "home.next": "Next node", "home.days": "days", "home.today": "Today", "home.after": "Then", "home.allnodes": "See the full schedule",
    "home.phase": "Current phase", "home.phase.build": "Building the system", "home.phase.gap": "Between phases", "home.phase.end": "Season over",
    "home.none": "Every node this season has passed.",
    "home.pass": "To pass",
    "home.year": "Where we are in the year", "home.year.gate": "Internal gates", "home.year.deadline": "iGEM deadlines (? = estimate)",
    "home.updates": "Latest updates", "home.updates.all": "All updates",
    "home.where": "What are you looking for?",
    "home.chain": "Three ideas hold the system up", "home.chain.ids": "One thing, one ID", "home.chain.gates": "Gates, not reminders", "home.chain.more": "See the whole system",
    "home.chain.ids.d": "Files, sheets and the wiki cite each other by ID, so every number traces back to its source.",
    "home.chain.gates.d": "Work cannot move on until it clears the gate. The rule holds it, not someone remembering.",
    "home.chain.pi": "The PI sees exceptions", "home.chain.pi.d": "AI works out from the Hub what needs attention each week. Instructors still make the calls.",
    "door.system": "The system", "door.system.d": "Start here if this is your first look: why it exists, the rules, architecture, Drive, flow, document year and village.", "door.system.who": "Anyone who wants the whole picture",
    "door.time": "Schedule", "door.time.d": "The year's nodes, planned back from the iGEM deadlines, each with a pass condition and an owner.", "door.time.who": "The team, weekly",
    "door.people": "Roles", "door.people.d": "What each seat owns, does each week and costs in time. Seats are not assignments.", "door.people.who": "Students and instructors",
    "door.advisors": "Advisor programme", "door.advisors.d": "Five stages, the monthly floor, where each output goes, and who is responsible for what.", "door.advisors.who": "Advisors and instructors",
    "door.research": "Research", "door.research.d": "How a question becomes a card, a conclusion and a decision, and where those documents sit in the system.", "door.research.who": "Everyone doing research",
    "door.count.folders": "folders", "door.count.docs": "documents", "door.count.nodes": "nodes", "door.count.roles": "roles", "door.count.stages": "stages", "door.count.rules": "rules",
    "vg.home": "Or just walk around the village",
    "sub.brief": "Start", "sub.why": "Why", "sub.rules": "Rules", "sub.arch": "Architecture", "sub.drive": "Drive", "sub.flow": "Flow", "sub.year": "Document year", "sub.std": "Standards", "sub.village": "Village",
    "sub.overview": "Overview", "sub.stages": "Stages", "sub.month": "Monthly", "sub.output": "One output", "sub.docs": "Documents", "sub.map": "Where", "sub.roles": "Roles", "sub.tbd": "To decide",
    "sub.res.why": "Why", "sub.res.structure": "Structure", "sub.res.flow": "Flow", "sub.res.case": "Example", "sub.res.docs": "Documents", "sub.res.when": "When and who", "sub.res.rules": "Rules",
    "sys.h1": "One system.<br>Five deliverables.",
    "sys.lede": "The time 2026 spent finding files, reconciling numbers and rebuilding pages goes back to research in 2027. This page walks through the whole system.",
    "brief.h": "Ten minutes, start to finish", "brief.sub": "Read down in order, or jump to what you need.",
    "brief.why": "What actually broke in 2026, and what was worth keeping.",
    "brief.rules": "Seven rules, three hard gates, the ID system, five layers of tools and the Hub tabs.",
    "brief.arch": "Where information enters, where it lives and which deliverable it becomes. Click any box for its rules.",
    "brief.drive": "What each folder holds, who can edit it and where it came from in 2026.",
    "brief.flow": "Follow one file through the system and see who acts and where it goes at each step.",
    "brief.year": "The day each document is born, who reads it and what it feeds.",
    "brief.std": "Shared standards for photos, facts and the wiki.",
    "brief.village": "The same system drawn as a village: where each role lives, where it walks each week and what it hands over.",
    "time.nodes": "All nodes", "time.nodes.sub": "Past nodes fade and the next one is marked.", "time.filter.all": "All", "time.filter.deadline": "iGEM deadlines", "time.filter.gate": "Internal gates", "time.filter.adv": "Advisors",
    "time.nextflag": "Next", "time.days": "days", "time.past": "Past", "time.th.pass": "To pass", "time.th.owner": "Owner", "time.th.ok": "Accepts",
    "upd.eyebrow": "Updates", "upd.h1": "What changed<br>in the system.", "upd.lede": "Changes to the system and this site, newest first. Individual progress and team details stay off this public site.",
    "upd.all": "All", "upd.tag.system": "System", "upd.tag.schedule": "Schedule", "upd.tag.advisor": "Advisors", "upd.tag.research": "Research", "upd.tag.site": "Site", "upd.none": "No updates in this category yet.", "upd.last": "Last updated",
    "adv.h1": "From participant<br>to advisor.",
    "adv.glance.stages": "stages, each with a named output", "adv.glance.month": "on-site floor, each month", "adv.glance.who": "advisors (an estimate, pending signatures)", "adv.glance.span": "term begins",
    "adv.bound": "What an advisor is responsible for", "adv.bound.sub": "Judgement rests with the instructor. An advisor leaves a record but is not a gate.",
    "adv.bound.do": "Advisors", "adv.bound.do.d": "Coach members within a named scope, leave review comments, send a monthly report, and write what they know into documents members can follow alone.",
    "adv.bound.inst": "Instructors", "adv.bound.inst.d": "Agree the scope, confirm reports, run stage reviews and write the results. Every go-ahead is the instructor's call.",
    "adv.bound.see": "Who can see what", "adv.bound.see.d": "Students can see advisor outputs. Review results stay in the instructor-only Ops and never pass through AI.",
    "adv.month.h": "The monthly floor", "adv.output.h": "Follow one advisor output", "adv.output.sub": "From agreeing the scope to the review: who acts, where the file goes and which Hub row updates.",
    "adv.docs.h": "An advisor's year of documents", "adv.docs.sub": "Just the Advisor lane, with the iGEM deadlines and internal gates it lines up with. Click any item for its rules and location.",
    "adv.roles.h": "Advisor roles", "adv.roles.sub": "Seats are proposals, not assignments. Hours are estimates.",
    "adv.detail": "Individual review results and the full consent form are not on this public site. The 2027 Advisor consent form is the authority on the rules.",
    "res.h1": "From a question<br>to a decision.",
    "res.flow.h": "Follow one research question", "res.flow.sub": "Research is not a separate system. The other two tabs are where it leads: choosing the topic and running the work.",
    "res.docs.h": "Where research sits in the documents", "res.docs.sub": "Research files live in 15 Research, and the topic and lab documents follow from them. This Drive and year chart are the same ones as on the system page.",
    "res.year.h": "The documents research feeds", "res.year.sub": "Drag the timeline to see topic, training, lab and wiki documents appear in order.",
    "foot.pages": "Pages",
    "site.hub": "Project Hub", "home.hub.k": "Where students start each day", "home.hub.t": "2027 Project Hub", "home.hub.d": "Weekly goals, milestones, homework, owners, credits and every link. This site explains why the system is built this way; the hub says what to do today.", "home.hub.go": "Open the Project Hub",
    "door.hub": "2027 Project Hub", "door.hub.who": "The team, daily", "door.hub.d": "This week’s goals, homework due, who to ask, and a link to every folder and sheet. It runs on the same nodes and seats as this site.", "door.count.pages": "pages"
  });

  // ---------- shell ----------
  const NAV = [
    ["home", "index.html"], ["system", "system.html"], ["time", "timeline.html"], ["people", "people.html"], ["students", "students.html"],
    ["advisors", "advisors.html"], ["research", "research.html"], ["updates", "updates.html"]
  ];
  // The Project Hub is a separate site for daily use; this site links to it from every page.
  const HUB = "https://timmy97-tw.github.io/GEMS-iGEM-2027-Hub/";
  const MARK = `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#1d1d1f"/><circle cx="11" cy="16" r="3" fill="#ff9500"/><circle cx="21" cy="10" r="3" fill="#0071e3"/><circle cx="21" cy="22" r="3" fill="#34c759"/></svg>`;
  $("#nav").innerHTML = `<div class="nav__in">
    <a class="nav__brand" href="index.html">${MARK}<span>GEMS iGEM 2027</span></a>
    <nav class="nav__links" aria-label="Pages">${NAV.map(([k, h]) => `<a href="${h}" data-i18n="site.${k}"${k === PAGE ? ' aria-current="page"' : ""}></a>`).join("")}<a class="nav__hub" href="${HUB}"><span data-i18n="site.hub"></span> ↗</a></nav>
    <div class="lang" role="group" aria-label="Language"><button data-lang="zh">中</button><button data-lang="en">EN</button></div>
  </div>`;
  const foot = $("#foot");
  if (foot) foot.innerHTML = `<div class="foot__in"><nav aria-label="Pages">${NAV.map(([k, h]) => `<a href="${h}" data-i18n="site.${k}"></a>`).join("")}<a href="${HUB}"><span data-i18n="site.hub"></span> ↗</a></nav><p data-i18n="foot.line"></p></div>`;

  // Links to the old single page keep working.
  if (PAGE === "home" && location.hash) {
    const h = location.hash.slice(1);
    const to = h === "people" ? "people.html" : h === "timeline" ? "timeline.html" : h === "research" ? "research.html"
      : h === "advisor" || h.startsWith("adv-") ? `advisors.html${h === "advisor" ? "" : "#" + h}`
      : /^(problems|audit|system|architecture|depth|year|flow|photo|facts|standards)$/.test(h) || h.startsWith("flow-") ? `system.html#${h}` : null;
    if (to) location.replace(to);
  }

  // ---------- dates ----------
  const DAY = 864e5;
  const now = new Date(Date.now() + 8 * 36e5); // Taipei
  const TODAY = now.toISOString().slice(0, 10);
  const diff = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / DAY);
  let lang = "zh";
  const L = o => (o && typeof o === "object" ? o[lang] : o) || "";
  const t = k => T[lang][k] || "";
  const longDate = d => {
    const x = new Date(d + "T00:00:00Z");
    return lang === "zh"
      ? `${x.getUTCFullYear()} 年 ${x.getUTCMonth() + 1} 月 ${x.getUTCDate()} 日　週${"日一二三四五六"[x.getUTCDay()]}`
      : x.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  };
  const shortDate = d => {
    const x = new Date(d + "T00:00:00Z");
    return lang === "zh" ? `${x.getUTCMonth() + 1}/${x.getUTCDate()}` : x.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
  };
  const nodeDate = m => (m.dl ? L(m.dl) : shortDate(m.date));
  const NODES = TIMELINE.filter(m => m.n).slice().sort((a, b) => a.date.localeCompare(b.date));
  const upcoming = () => NODES.filter(m => m.date >= TODAY);
  const phaseNow = () => {
    const bands = YEAR_BANDS.filter(b => ["phase", "crunch", "trip"].includes(b.kind));
    const hit = bands.find(b => TODAY >= b.s && TODAY <= b.e);
    if (hit) return L(hit.n);
    if (TODAY < bands[0].s) return t("home.phase.build");
    return TODAY > bands.reduce((a, b) => (b.e > a ? b.e : a), "") ? t("home.phase.end") : t("home.phase.gap");
  };

  // ---------- home ----------
  function renderHome() {
    const up = upcoming(), next = up[0];
    $("#today-date").textContent = longDate(TODAY);
    $("#today-phase").innerHTML = `<span>${esc(t("home.phase"))}</span><b>${esc(phaseNow())}</b>`;
    if (next) {
      const n = diff(TODAY, next.date);
      $("#today-next").innerHTML = `
        <p class="today__label">${esc(t("home.next"))} · ${esc(next.n)}</p>
        <div class="today__count">${n === 0 ? `<b>${esc(t("home.today"))}</b>` : `<b>${n}</b><span>${esc(t("home.days"))}</span>`}</div>
        <h2 class="today__title">${esc(L(next.t))}</h2>
        <p class="today__date2">${esc(nodeDate(next))}${next.pass ? `　·　${esc(t("home.pass"))}：${esc(L(next.pass))}` : ""}</p>`;
      $("#today-after").innerHTML = `<h2 class="today__label">${esc(t("home.after"))}</h2><ol class="after">${up.slice(1, 6).map(m => `
        <li class="after__i after__i--${m.lane}"><a href="timeline.html#n-${esc(m.n)}"><time>${esc(nodeDate(m))}</time><span>${esc(L(m.t))}</span><small>${diff(TODAY, m.date)} ${esc(t("home.d"))}</small></a></li>`).join("")}</ol>
        <a class="more" href="timeline.html">${esc(t("home.allnodes"))} <span aria-hidden="true">→</span></a>`;
    } else {
      $("#today-next").innerHTML = `<h2 class="today__title">${esc(t("home.none"))}</h2>`;
      $("#today-after").innerHTML = "";
    }
    renderRibbon();
    $("#home-updates").innerHTML = UPDATES.slice(0, 4).map(updateRow).join("");
    $("#home-doors").innerHTML = doors().map(d => `
      <a class="door" href="${d.href}" style="--c:var(--${d.c})">
        <span class="door__who">${esc(t(`door.${d.k}.who`))}</span>
        <h3>${esc(t(`door.${d.k}`))}</h3>
        <p>${esc(t(`door.${d.k}.d`))}</p>
        <span class="door__n"><b>${d.n}</b> ${esc(t(d.unit))}</span>
        <span class="door__go" aria-hidden="true">→</span>
      </a>`).join("");
  }
  const doors = () => [
    { k: "hub", href: HUB, c: "teal", n: 9, unit: "door.count.pages" }, // 9 = pages in the hub's nav
    { k: "system", href: "system.html", c: "blue", n: DRIVE.length, unit: "door.count.folders" },
    { k: "time", href: "timeline.html", c: "orange", n: NODES.length, unit: "door.count.nodes" },
    { k: "people", href: "people.html", c: "green", n: PEOPLE.roles.length, unit: "door.count.roles" },
    { k: "students", href: "students.html", c: "pink", n: 8, unit: "door.count.dims" }, // 8 = FACETS in journey.js
    { k: "advisors", href: "advisors.html", c: "gold", n: ADV_STAGES.length, unit: "door.count.stages" },
    { k: "research", href: "research.html", c: "purple", n: RESEARCH_RULES.length, unit: "door.count.rules" }
  ];

  const R0 = "2026-11-01", R1 = "2027-12-01";
  const rx = d => (diff(R0, d) / diff(R0, R1)) * 100;
  function renderRibbon() {
    const months = Array.from({ length: 13 }, (_, i) => {
      const x = new Date(Date.UTC(2026, 10 + i, 1));
      const iso = x.toISOString().slice(0, 10);
      const label = lang === "zh" ? `${x.getUTCMonth() + 1}月` : x.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" });
      return `<span style="left:${rx(iso)}%">${label}</span>`;
    }).join("");
    const bands = YEAR_BANDS.filter(b => ["phase", "crunch", "trip"].includes(b.kind)).map(b =>
      `<span class="rb__band rb__band--${b.kind}${TODAY >= b.s && TODAY <= b.e ? " is-now" : ""}" style="left:${rx(b.s)}%;width:${rx(b.e) - rx(b.s)}%" title="${esc(L(b.n))}"><em>${esc(L(b.n))}</em></span>`).join("");
    const dot = m => `<a class="rb__dot${m.date < TODAY ? " is-past" : ""}" href="timeline.html#n-${esc(m.n)}" style="left:${rx(m.date)}%" title="${esc(nodeDate(m))} ${esc(L(m.t))}" aria-label="${esc(nodeDate(m))} ${esc(L(m.t))}"></a>`;
    const inRange = TODAY >= R0 && TODAY <= R1;
    $("#ribbon").innerHTML = `<div class="rb__in">
      <div class="rb__months">${months}</div>
      <div class="rb__bands">${bands}</div>
      <div class="rb__row rb__row--deadline"><small>${esc(t("home.year.deadline"))}</small>${NODES.filter(m => m.lane === "deadline").map(dot).join("")}</div>
      <div class="rb__row rb__row--gate"><small>${esc(t("home.year.gate"))}</small>${NODES.filter(m => m.lane === "gate").map(dot).join("")}</div>
      ${inRange ? `<div class="rb__today" style="left:${rx(TODAY)}%"><span>${esc(t("home.today"))}</span></div>` : ""}
    </div>`;
  }

  // ---------- updates ----------
  const updateRow = u => `<li class="upd"><time datetime="${u.d}">${esc(shortDate(u.d))}</time><span class="upd__tag upd__tag--${u.tag}">${esc(t("upd.tag." + u.tag))}</span><p>${esc(L(u.t))}</p></li>`;
  let updFilter = "all";
  function renderUpdates() {
    const tags = ["all", ...new Set(UPDATES.map(u => u.tag))];
    $("#upd-last").textContent = `${t("upd.last")}：${longDate(UPDATES[0].d)}`;
    $("#upd-tabs").innerHTML = tags.map(k => `<button data-k="${k}" aria-pressed="${updFilter === k}">${esc(k === "all" ? t("upd.all") : t("upd.tag." + k))}</button>`).join("");
    $$("#upd-tabs button").forEach(b => b.addEventListener("click", () => { updFilter = b.dataset.k; renderUpdates(); }));
    const list = UPDATES.filter(u => updFilter === "all" || u.tag === updFilter);
    const days = [...new Set(list.map(u => u.d))];
    $("#upd-list").innerHTML = list.length ? days.map(d => `<section class="updday"><h2>${esc(longDate(d))}</h2><ul>${list.filter(u => u.d === d).map(u =>
      `<li class="upd upd--full"><span class="upd__tag upd__tag--${u.tag}">${esc(t("upd.tag." + u.tag))}</span><p>${esc(L(u.t))}</p></li>`).join("")}</ul></section>`).join("") : `<p class="note">${esc(t("upd.none"))}</p>`;
  }

  // ---------- all nodes ----------
  let nodeFilter = "all";
  function renderNodes() {
    $("#node-tabs").innerHTML = ["all", "deadline", "gate", "adv"].map(k => `<button data-k="${k}" aria-pressed="${nodeFilter === k}">${esc(t("time.filter." + k))}</button>`).join("");
    $$("#node-tabs button").forEach(b => b.addEventListener("click", () => { nodeFilter = b.dataset.k; renderNodes(); }));
    const nextN = (upcoming()[0] || {}).n;
    const list = NODES.filter(m => nodeFilter === "all" || m.lane === nodeFilter);
    const months = [...new Set(list.map(m => m.date.slice(0, 7)))];
    $("#node-list").innerHTML = months.map(mo => {
      const x = new Date(mo + "-01T00:00:00Z");
      const head = lang === "zh" ? `${x.getUTCFullYear()} 年 ${x.getUTCMonth() + 1} 月` : x.toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
      return `<section class="nm"><h3>${esc(head)}</h3><ol>${list.filter(m => m.date.slice(0, 7) === mo).map(m => {
        const past = m.date < TODAY, isNext = m.n === nextN;
        return `<li class="nrow nrow--${m.lane}${past ? " is-past" : ""}${isNext ? " is-next" : ""}" id="n-${esc(m.n)}">
          <div class="nrow__when"><time>${esc(nodeDate(m))}</time><code>${esc(m.n)}</code></div>
          <div class="nrow__body"><h4>${esc(L(m.t))}${isNext ? `<em>${esc(t("time.nextflag"))} · ${diff(TODAY, m.date)} ${esc(t("time.days"))}</em>` : ""}</h4>
            ${L(m.pass) ? `<p><b>${esc(t("time.th.pass"))}</b>${esc(L(m.pass))}</p>` : ""}
            ${L(m.d) ? `<p class="nrow__d">${esc(L(m.d))}</p>` : ""}
            ${m.owner ? `<small>${esc(t("time.th.owner"))} ${esc(L(m.owner))}${m.ok ? `　${esc(t("time.th.ok"))} ${esc(L(m.ok))}` : ""}</small>` : ""}
          </div></li>`;
      }).join("")}</ol></section>`;
    }).join("");
  }

  // ---------- page heads with counted facts ----------
  function renderSystemBrief() {
    $("#sys-stats").innerHTML = [
      ["≈30", t("stat.people")], [ID_SYSTEM.length, t("stat.streams")], [GATES.length, t("stat.registers")], [NODES.length, t("stat.deadlines")]
    ].map(([n, l]) => `<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("");
    const items = [["architecture", "sub.arch", "brief.arch"], ["flow", "sub.flow", "brief.flow"], ["depth", "sub.drive", "brief.drive"], ["year", "sub.year", "brief.year"],
      ["village", "sub.village", "brief.village"], ["system", "sub.rules", "brief.rules"], ["problems", "sub.why", "brief.why"], ["photo", "sub.std", "brief.std"]];
    $("#brief-list").innerHTML = items.map(([id, n, d], i) => `<li><a href="#${id}"><span class="brief__n">${i + 1}</span><b>${esc(t(n))}</b><p>${esc(t(d))}</p></a></li>`).join("");
  }
  function renderAdvGlance() {
    $("#adv-glance").innerHTML = [
      [ADV_STAGES.length, t("adv.glance.stages")], [L(ADV_FLOOR[0].n), t("adv.glance.month")], ["≈10", t("adv.glance.who")], [shortDate(ADV_STAGES[0].start), t("adv.glance.span")]
    ].map(([n, l]) => `<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("");
    $("#adv-bound").innerHTML = ["do", "inst", "see"].map(k => `<div class="acard"><h3>${esc(t("adv.bound." + k))}</h3><p class="acard__note">${esc(t("adv.bound." + k + ".d"))}</p></div>`).join("");
  }

  // ---------- subnav: highlights the section in view ----------
  function spy() {
    const links = $$(".subnav a");
    if (!links.length || !("IntersectionObserver" in window)) return;
    const targets = links.map(a => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
    const seen = new Map();
    const paint = () => {
      const cur = targets.filter(s => seen.get(s)).pop() || targets[0];
      links.forEach(a => {
        const on = a.getAttribute("href") === `#${cur.id}`;
        if (on && a.getAttribute("aria-current") !== "true") {
          const box = a.parentElement;
          box.scrollTo({ left: a.offsetLeft - box.clientWidth / 2 + a.offsetWidth / 2, behavior: "smooth" });
        }
        a.setAttribute("aria-current", on);
      });
    };
    const io = new IntersectionObserver(es => { es.forEach(e => seen.set(e.target, e.isIntersecting)); paint(); }, { rootMargin: "-25% 0px -70% 0px" });
    targets.forEach(s => io.observe(s));
  }

  function render(l) {
    lang = l;
    document.title = PAGE === "home" ? `${t("title.home")}` : `${t("title." + PAGE)} · GEMS iGEM 2027`;
    if ($("#today-next")) renderHome();
    if ($("#upd-list")) renderUpdates();
    if ($("#node-list")) renderNodes();
    if ($("#sys-stats")) renderSystemBrief();
    if ($("#adv-glance")) renderAdvGlance();
    if (window.JOURNEY) window.JOURNEY.render(l);
  }

  spy();
  // Node rows and other late content do not exist when the browser first looks for the anchor.
  addEventListener("load", () => {
    const h = location.hash.slice(1);
    if (h && !h.startsWith("flow-")) { const el = document.getElementById(h); if (el) el.scrollIntoView({ behavior: "instant", block: "start" }); }
  }, { once: true });

  return { render };
})();
