// Student journey page: what can be recorded, how, one worked year, and the yearbook.
// The student here is invented. Real records never go on this public site; they stay in the
// private Drive and reach only the student, the family and the team.
// Counters and the yearbook are computed from the lists below, so they cannot disagree.
window.JOURNEY = (() => {
  Object.assign(T.zh, {
    "site.students": "學生歷程", "title.students": "學生歷程",
    "door.students": "學生歷程", "door.students.who": "學生、家長與老師", "door.count.dims": "個面向",
    "door.students.d": "每位學生一整年的貢獻、付出與成長怎麼被記下來，最後成為家長和學生都看得到的年鑑。",
    "sub.jy.top": "概要", "sub.jy.what": "能記什麼", "sub.jy.how": "怎麼記", "sub.jy.case": "一位學生的一年", "sub.jy.book": "年鑑", "sub.jy.who": "誰看得到",
    "jy.eyebrow": "學生歷程",
    "jy.h1": "每位學生的一年，<br>都留得下來。",
    "jy.lede": "研究、實驗、跨組合作、影像與美術、出席和成長，都在做事的當下留下紀錄。學生不必年底回想，年鑑直接從這些紀錄產生。",
    "jy.cta": "直接看一位學生的一年",
    "jy.tag": "提案 · 依核心版規格 · 範例學生是虛構的",
    "jy.fact1": "個面向", "jy.fact1d": "研究、實驗、合作、影像、寫作、出席等",
    "jy.fact2": "張表單", "jy.fact2d": "學生在做事當下用手機填，平時用到的只有這幾張",
    "jy.fact3": "道確認", "jy.fact3d": "3/6、4/24、8/14，老師和學生一起看歷程",
    "jy.fact4": "本年鑑", "jy.fact4d": "11/27 由紀錄產生，老師署名",
    "jy.what.eyebrow": "能記什麼",
    "jy.what.h": "九個面向，<br>每一項都查得到來源。",
    "jy.what.sub": "這些紀錄大多本來就要留。研究、實驗和出席是做事的一部分，年鑑只是把它們依人整理起來。",
    "jy.th": ["面向", "記下什麼", "從哪裡來", "誰記", "學生多花的時間"],
    "jy.collab.h": "合作能力怎麼記",
    "jy.collab.p": "合作不打分數。我們記三種別人也看得到的事實，年鑑呈現事實，讓讀的人自己判斷。",
    "jy.not.h": "刻意不記的",
    "jy.how.eyebrow": "怎麼記",
    "jy.how.h": "在當下記一次，<br>年底就不用補。",
    "jy.how.sub": "2026 靠學生事後回填的表幾乎都是空的。所以這裡的紀錄都發生在現場，每一筆都帶著人名和編號。",
    "jy.rules.h": "這份紀錄為什麼可信",
    "jy.case.eyebrow": "一位學生的一年",
    "jy.case.h": "小禾的 2027。",
    "jy.case.sub": "小禾是虛構的高一學生，題目和編號也都是示範用。按播放，看一年的紀錄怎麼累積；點任何一個圓點，看那筆紀錄和它的來源。",
    "jy.play": "播放", "jy.pause": "暫停", "jy.scrub": "拖動時間軸",
    "jy.c.cards": "閱讀卡", "jy.c.runs": "實驗", "jy.c.checks": "查核別人的圖與數字", "jy.c.thanks": "被同伴提到幫了忙", "jy.c.lab": "Lab 時數", "jy.c.att": "出席率",
    "jy.hint": "點時間軸上的圓點，看那筆紀錄。",
    "jy.src": "來源", "jy.by": "誰記", "jy.vis": "誰看得到", "jy.vis.all": "本人、家長、全隊", "jy.vis.self": "只有本人、家長和老師",
    "jy.legend.tick": "一筆日常紀錄", "jy.legend.event": "重要紀錄，可點", "jy.legend.leave": "請假", "jy.legend.absent": "缺席",
    "jy.done": "這一年走完了。下面是這些紀錄產生的年鑑。",
    "jy.book.eyebrow": "年鑑",
    "jy.book.h": "同一份紀錄，<br>印成一本年鑑。",
    "jy.book.sub": "每位學生一頁，全隊合成一本。數字和事件都由上面的時間軸算出來。切換兩個版本，看本人與家長、以及全隊各看到什麼。",
    "jy.view.self": "本人與家長版", "jy.view.team": "全隊年鑑版", "jy.print": "列印或存成 PDF",
    "jy.yb.title": "GEMS iGEM 2027 年鑑", "jy.yb.name": "小禾", "jy.yb.fake": "虛構範例", "jy.yb.role": "Wet 組 · 2027 隊員",
    "jy.yb.did": "這一年做過的事", "jy.yb.growth": "看得見的成長", "jy.yb.cycle": "親手走完的研究循環", "jy.yb.peers": "同伴寫下的", "jy.yb.self": "自己寫的一段", "jy.yb.oral": "三次口試", "jy.yb.leave": "出席明細",
    "jy.yb.before": "年初", "jy.yb.after": "年中以後",
    "jy.yb.sign": "以上內容均來自 2027 賽季的紀錄，每一項都有編號可查。指導老師確認後署名。",
    "jy.yb.signline": "指導老師署名　＿＿＿＿＿＿＿＿",
    "jy.yb.onlyself": "只在本人與家長版",
    "jy.who.eyebrow": "誰看得到",
    "jy.who.h": "公開事實，<br>保護評語。",
    "jy.who.sub": "學生都是未成年人，所以每一類紀錄都事先訂好誰能看。本頁是虛構範例；真實的歷程與年鑑放在隊內，不會放上這個公開網站。",
    "jy.who.th": ["內容", "學生本人", "家長", "全隊與其他家長", "老師"],
    "jy.who.yes": "看得到", "jy.who.no": "—",
    "jy.who.note": "這張表是提案。公開給其他家長的範圍、肖像是否進年鑑，要由 PI 定案，並在入隊時告知學生與家長。"
  });
  Object.assign(T.en, {
    "site.students": "Journeys", "title.students": "Student journeys",
    "door.students": "Student journeys", "door.students.who": "Students, families and instructors", "door.count.dims": "areas",
    "door.students.d": "How each student's contribution, effort and growth are recorded across the year, and become a yearbook families and students can read.",
    "sub.jy.top": "Overview", "sub.jy.what": "What", "sub.jy.how": "How", "sub.jy.case": "One student's year", "sub.jy.book": "Yearbook", "sub.jy.who": "Who sees it",
    "jy.eyebrow": "Student journeys",
    "jy.h1": "Every student's year<br>stays on record.",
    "jy.lede": "Research, lab work, help across teams, video and art, attendance and growth are recorded as the work happens. Nobody has to remember it in November: the yearbook comes straight from those records.",
    "jy.cta": "Jump to one student's year",
    "jy.tag": "Proposal · Based on the core spec · The example student is invented",
    "jy.fact1": "areas", "jy.fact1d": "Research, lab, collaboration, media, writing, attendance and more",
    "jy.fact2": "forms", "jy.fact2d": "Filled on a phone during the work; these are the only ones students use day to day",
    "jy.fact3": "reviews", "jy.fact3d": "6 Mar, 24 Apr, 14 Aug: instructor and student read the record together",
    "jy.fact4": "yearbook", "jy.fact4d": "Generated on 27 Nov and signed by an instructor",
    "jy.what.eyebrow": "What",
    "jy.what.h": "Nine areas,<br>each traceable to a source.",
    "jy.what.sub": "Most of this has to be recorded anyway. Research, lab work and attendance are part of doing the work; the yearbook only gathers them by person.",
    "jy.th": ["Area", "What is recorded", "Where it comes from", "Who records it", "Extra student time"],
    "jy.collab.h": "How collaboration is recorded",
    "jy.collab.p": "Collaboration gets no score. We record three kinds of fact other people can see, and the yearbook lets readers judge for themselves.",
    "jy.not.h": "Deliberately not recorded",
    "jy.how.eyebrow": "How",
    "jy.how.h": "Recorded once, on the spot,<br>so nothing needs filling in later.",
    "jy.how.sub": "The sheets students filled in afterwards in 2026 ended up almost empty. So these records happen during the session, each with a name and an ID.",
    "jy.rules.h": "Why the record can be trusted",
    "jy.case.eyebrow": "One student's year",
    "jy.case.h": "Ho's 2027.",
    "jy.case.sub": "Ho is an invented first-year high school student, and the project and IDs are illustrative. Press play to watch a year of records build up. Click any dot to see that record and its source.",
    "jy.play": "Play", "jy.pause": "Pause", "jy.scrub": "Drag the timeline",
    "jy.c.cards": "Reading cards", "jy.c.runs": "Experiments", "jy.c.checks": "Others' figures and facts checked", "jy.c.thanks": "Named by peers as helping", "jy.c.lab": "Lab hours", "jy.c.att": "Attendance",
    "jy.hint": "Click a dot on the timeline to see that record.",
    "jy.src": "Source", "jy.by": "Recorded by", "jy.vis": "Visible to", "jy.vis.all": "Student, family, team", "jy.vis.self": "Student, family and instructors only",
    "jy.legend.tick": "Everyday record", "jy.legend.event": "Key record, clickable", "jy.legend.leave": "Leave", "jy.legend.absent": "Absent",
    "jy.done": "That's the year. Below is the yearbook those records produce.",
    "jy.book.eyebrow": "Yearbook",
    "jy.book.h": "The same records,<br>printed as a yearbook.",
    "jy.book.sub": "One page per student, bound into one book for the team. Every number and event is computed from the timeline above. Switch versions to see what the student and family see, and what the team sees.",
    "jy.view.self": "Student and family", "jy.view.team": "Team yearbook", "jy.print": "Print or save as PDF",
    "jy.yb.title": "GEMS iGEM 2027 Yearbook", "jy.yb.name": "Ho", "jy.yb.fake": "Invented example", "jy.yb.role": "Wet group · 2027 team member",
    "jy.yb.did": "What this year held", "jy.yb.growth": "Visible growth", "jy.yb.cycle": "A research cycle, start to finish", "jy.yb.peers": "What peers wrote", "jy.yb.self": "In their own words", "jy.yb.oral": "Three oral checks", "jy.yb.leave": "Attendance detail",
    "jy.yb.before": "Early in the year", "jy.yb.after": "Later on",
    "jy.yb.sign": "Everything here comes from records of the 2027 season, each with an ID that can be checked. Signed by a supervising instructor after review.",
    "jy.yb.signline": "Supervising instructor ____________",
    "jy.yb.onlyself": "Student and family version only",
    "jy.who.eyebrow": "Who sees it",
    "jy.who.h": "Facts are shared.<br>Comments are protected.",
    "jy.who.sub": "Students are minors, so who can see each kind of record is set in advance. This page is an invented example; real journeys and yearbooks stay inside the team and never appear on this public site.",
    "jy.who.th": ["Content", "Student", "Family", "Team and other families", "Instructors"],
    "jy.who.yes": "Yes", "jy.who.no": "—",
    "jy.who.note": "This table is a proposal. What other families can see, and whether portraits go in the yearbook, are for the PI to settle and to tell students and families when they join."
  });

  const DIMS = [
    { c: "purple", t: { zh: "研究", en: "Research" }, what: { zh: "閱讀卡、負責的研究問題、被決定引用的卡", en: "Reading cards, research questions owned, cards cited by a decision" }, from: "Papers · Questions · Decisions", who: { zh: "學生，表單", en: "Student, by form" }, cost: { zh: "本來就要交", en: "Already required" } },
    { c: "teal", t: { zh: "實驗", en: "Lab work" }, what: { zh: "每筆實驗的預期與結果，失敗和偏差也算", en: "Every experiment's expectation and result, failures and deviations included" }, from: "Runs", who: { zh: "學生，表單", en: "Student, by form" }, cost: { zh: "本來就要交", en: "Already required" } },
    { c: "blue", t: { zh: "Lab 投入", en: "Lab time" }, what: { zh: "Extra lab hour 的開始與離開時間", en: "Start and leaving time of extra lab hours" }, from: { zh: "打卡機 CSV → LabHours", en: "Fingerprint clock CSV → LabHours" }, who: { zh: "打卡機；每月匯入", en: "The clock; imported monthly" }, cost: { zh: "按一下指紋", en: "One fingerprint" } },
    { c: "gray", t: { zh: "出席", en: "Attendance" }, what: { zh: "到場、請假、缺席，分開顯示", en: "Present, leave and absent, shown separately" }, from: "CheckIns · Calendar", who: { zh: "學生，每週回報", en: "Student, weekly check-in" }, cost: { zh: "本來就要交", en: "Already required" } },
    { c: "orange", t: { zh: "跨組合作", en: "Across teams" }, what: { zh: "查核別人的圖與數字、回答的評審題、帶小組、同伴寫下的「誰幫了我」", en: "Checking others' figures and facts, judging questions answered, leading a small group, peers naming who helped" }, from: "Figures · Facts · QA · Roster · CheckIns", who: { zh: "表上的欄位；同伴", en: "Sheet columns; peers" }, cost: { zh: "每週回報多一題，約 15 秒", en: "One more check-in question, about 15 s" } },
    { c: "pink", t: { zh: "影像與美術", en: "Video and art" }, what: { zh: "精選照片、影片裡的工作、畫的圖", en: "Selected photos, work on videos, figures drawn" }, from: "Media · Figures · Attribution", who: { zh: "Media 負責人；圖的作者", en: "Media owner; figure author" }, cost: { zh: "無", en: "None" } },
    { c: "indigo", t: { zh: "寫作與 Wiki", en: "Writing and wiki" }, what: { zh: "負責的頁面與段落、查核與老師簽核", en: "Pages and sections owned, checks and instructor sign-off" }, from: "Pages · Attribution", who: { zh: "頁面負責人", en: "Page owner" }, cost: { zh: "本來就要做", en: "Already required" } },
    { c: "green", t: { zh: "對外與教育", en: "Outreach" }, what: { zh: "參與的訪談、活動與教學，以及專案因此改了什麼", en: "Interviews, events and teaching, and what changed in the project" }, from: "Interactions", who: { zh: "學生，表單", en: "Student, by form" }, cost: { zh: "本來就要交", en: "Already required" } },
    { c: "gold", t: { zh: "成長", en: "Growth" }, what: { zh: "研究循環卡、三次口試、同一欄位年初和年中以後的對照", en: "Research cycle card, three oral checks, the same field early and later in the year" }, from: { zh: "循環卡 · Assessment · Papers · Runs", en: "Cycle card · Assessment · Papers · Runs" }, who: { zh: "學生；老師", en: "Student; instructor" }, cost: { zh: "每人一張循環卡，可兩人一組", en: "One cycle card each, or one per pair" } }
  ];
  const COLLAB = [
    { t: { zh: "幫別人查核", en: "Checking others' work" }, d: { zh: "表上的查核人欄記下查過誰的圖和數字。查核人不可以是作者。", en: "The checker column records whose figures and facts they checked. A checker cannot be the author." } },
    { t: { zh: "同伴寫下的", en: "What peers write" }, d: { zh: "每週回報多一題「這週誰幫了我，幫了什麼」。累積下來就是同伴的具體紀錄。", en: "The weekly check-in adds one question: who helped me this week, and how. Over a year this becomes a specific record from peers." } },
    { t: { zh: "工作接得上別人", en: "Work others built on" }, d: { zh: "學生的卡被別人的決定引用，數據被別組的模型或頁面使用，這些都有編號。", en: "Their card is cited in a decision, or their data feeds another group's model or page. Each link has an ID." } }
  ];
  const NOTREC = [
    { zh: "態度分數或合作分數", en: "Attitude or collaboration scores" },
    { zh: "學生之間的排名", en: "Rankings between students" },
    { zh: "AI 對學生的評價", en: "Any assessment of a student by AI" },
    { zh: "請假原因的細節", en: "The details behind a leave" }
  ];
  const STEPS = [
    { when: { zh: "當場", en: "On the spot" }, t: { zh: "在現場留下紀錄", en: "Recorded during the session" }, d: { zh: "週六收尾 15 分鐘用手機填表單；進出實驗室按指紋。不必回家補。", en: "Forms are filled on a phone in the last 15 minutes on Saturday. A fingerprint logs lab time. Nothing to catch up on at home." } },
    { when: { zh: "每週自動", en: "Weekly, automatic" }, t: { zh: "依人歸檔", en: "Filed by person" }, d: { zh: "每筆紀錄都帶著人名和編號，所以每位學生的歷程是一個篩選，沒有人要另外整理。", en: "Every record has a name and an ID, so a student's journey is simply a filter. Nobody compiles it by hand." } },
    { when: "3/6 · 4/24 · 8/14", t: { zh: "老師和學生一起看", en: "Read together" }, d: { zh: "三次評量各加 3 分鐘口試。老師和學生一起看歷程，紀錄有錯當場更正。", en: "Each of the three assessments adds a 3-minute oral check. Instructor and student read the journey together and correct errors on the spot." } },
    { when: "11/27", t: { zh: "產生年鑑", en: "The yearbook" }, d: { zh: "系統匯出每人的事實清單，學生寫一段自己的話，老師確認後署名。", en: "The system exports each student's facts, the student adds a paragraph, and an instructor reviews and signs." } }
  ];
  const TRUST = [
    { zh: "每一項都連得回一筆有編號的紀錄，沒有來源的不進年鑑。", en: "Every item links back to a record with an ID. No source, no entry." },
    { zh: "失敗的實驗和請假都照實記下。失敗也是歷程的一部分，不扣分。", en: "Failed experiments and leave are recorded as they happened. Failure is part of the journey and costs nothing." },
    { zh: "每週只計一張閱讀卡，多交不會多算，灌水沒有意義。", en: "Only one reading card counts per week, so padding gains nothing." },
    { zh: "AI 只幫忙匯出事實清單，不評價學生。內容由老師確認並署名。", en: "AI only exports the list of facts and never assesses a student. An instructor reviews and signs." }
  ];
  const WHO_ROWS = [
    [{ zh: "貢獻事件與編號", en: "Contributions and IDs" }, 1, 1, 1, 1],
    [{ zh: "閱讀卡、實驗、查核的累計數量", en: "Totals of cards, experiments and checks" }, 1, 1, 1, 1],
    [{ zh: "出席率與 Lab 時數", en: "Attendance and lab hours" }, 1, 1, 1, 1],
    [{ zh: "研究循環卡", en: "Research cycle card" }, 1, 1, 1, 1],
    [{ zh: "同伴寫下的話（不具名）", en: "What peers wrote (unnamed)" }, 1, 1, 1, 1],
    [{ zh: "請假次數與類別", en: "Leave count and category" }, 1, 1, 0, 1],
    [{ zh: "三次口試的紀錄", en: "The three oral checks" }, 1, 1, 0, 1],
    [{ zh: "老師的評語與內部紀錄", en: "Instructor comments and internal records" }, 0, 0, 0, 1]
  ];

  // ---------- the invented year ----------
  const iso = d => d.toISOString().slice(0, 10);
  const D0 = Date.UTC(2026, 10, 29), D1 = Date.UTC(2027, 10, 27), DAY = 864e5, SPAN = Math.round((D1 - D0) / DAY);
  const dayOf = s => Math.round((Date.parse(s + "T00:00:00Z") - D0) / DAY);
  const dateOf = n => iso(new Date(D0 + n * DAY));
  const each = (a, b, days) => {
    const out = [];
    for (let n = dayOf(a); n <= dayOf(b); n++) if (days.includes(new Date(D0 + n * DAY).getUTCDay())) out.push(dateOf(n));
    return out;
  };
  const SESSIONS = ["2026-11-29", "2026-12-06", "2026-12-13", "2026-12-20", "2026-12-26",
    ...each("2027-01-02", "2027-01-30", [6]), ...each("2027-02-13", "2027-03-07", [6, 0]), ...each("2027-03-13", "2027-06-26", [6]),
    ...each("2027-07-01", "2027-08-10", [2, 4, 6]), ...each("2027-08-14", "2027-10-23", [6])];
  const LEAVE = { "2027-01-02": "other", "2027-05-08": "exam", "2027-05-15": "exam" };
  const ABSENT = ["2027-06-05", "2027-10-02"];
  const CARDS = [...each("2026-11-29", "2026-12-20", [0]), "2026-12-26", ...each("2027-01-09", "2027-01-30", [6]), "2027-02-14", "2027-02-20", "2027-02-27", "2027-03-06",
    "2027-03-27", "2027-04-17", "2027-05-22", "2027-06-12", "2027-06-26", "2027-07-17", "2027-07-31", "2027-08-14"];
  const NORUN = ["2027-05-08", "2027-05-15", "2027-06-05"];
  const RUNS = [...each("2027-03-20", "2027-06-26", [6]).filter(d => !NORUN.includes(d)), ...each("2027-07-06", "2027-08-10", [2, 4]), ...each("2027-08-14", "2027-09-11", [6])];
  const CHECKS = [["2027-07-03", 3], ["2027-08-07", 4], ["2027-09-04", 5], ["2027-09-11", 2]];
  const THANKS = ["2027-02-20", "2027-03-13", "2027-04-17", "2027-05-22", "2027-06-26", "2027-07-08", "2027-07-22", "2027-08-05", "2027-08-21", "2027-09-11", "2027-09-25"];
  const LAB = [["2027-03-31", 6], ["2027-04-30", 9], ["2027-05-31", 4], ["2027-06-30", 12], ["2027-07-31", 28], ["2027-08-31", 22], ["2027-09-30", 18]];

  const LANES = [
    { id: "research", c: "purple", n: { zh: "研究", en: "Research" } },
    { id: "lab", c: "teal", n: { zh: "實驗", en: "Lab" } },
    { id: "cross", c: "orange", n: { zh: "跨組合作", en: "Across teams" } },
    { id: "media", c: "pink", n: { zh: "影像與美術", en: "Video, art" } },
    { id: "writing", c: "indigo", n: { zh: "寫作", en: "Writing" } },
    { id: "presence", c: "gray", n: { zh: "出席", en: "Attendance" } },
    { id: "growth", c: "gold", n: { zh: "成長", en: "Growth" } }
  ];
  const STAGE_BAR = [
    ["2026-11-29", "2026-12-25", { zh: "線上", en: "Online" }], ["2026-12-26", "2027-01-30", { zh: "定題", en: "Topic" }], ["2027-02-13", "2027-03-07", { zh: "訓練", en: "Training" }],
    ["2027-03-13", "2027-06-11", { zh: "任務組", en: "Task groups" }], ["2027-06-12", "2027-08-27", { zh: "Wiki 與暑假", en: "Wiki, summer" }], ["2027-08-28", "2027-10-13", { zh: "衝刺", en: "Crunch" }], ["2027-10-14", "2027-11-27", { zh: "Jamboree", en: "Jamboree" }]
  ];
  const stu = { zh: "學生，表單", en: "Student, by form" }, tch = { zh: "老師", en: "Instructor" }, sys = { zh: "表上的欄位", en: "A sheet column" };
  const EVENTS = [
    { d: "2026-11-29", l: "research", t: { zh: "第一張閱讀卡", en: "First reading card" }, x: { zh: "讀一篇綜述，花了 85 分鐘。一句重點寫成了摘要，判斷選「僅背景」。", en: "A review article, 85 minutes. The key point came out as a summary; the judgement was 'background only'." }, s: "Papers · L0007", by: stu },
    { d: "2027-01-02", l: "cross", t: { zh: "第一次當小組長", en: "First month as small-group lead" }, x: { zh: "輪到帶 C 組一個月：計時、問沒交的同學一句。", en: "C group's turn for a month: keeping time and checking in with anyone who had not submitted." }, s: "Roster", by: sys },
    { d: "2027-01-23", l: "research", t: { zh: "一張卡進了定題討論", en: "A card reaches the topic debate" }, x: { zh: "這張卡指出一個法規限制，被寫進 Decision Record 的依據。", en: "Their card flagged a regulatory limit and was cited in the Decision Record." }, s: "Decisions · D0012 ← L0041", by: { zh: "會議書記", en: "Meeting scribe" } },
    { d: "2027-03-06", l: "growth", p: 1, t: { zh: "第一次口試", en: "First oral check" }, x: { zh: "講訓練實驗的目的時，老師提示兩次才講完。", en: "Explaining the purpose of a training experiment took two prompts from the instructor." }, s: "Assessment", by: tch },
    { d: "2027-03-06", l: "lab", t: { zh: "安全考通過", en: "Safety exam passed" }, x: { zh: "通過日登記在名單，才能進實驗室。", en: "The date goes on the roster; only then can the student enter the lab." }, s: "Roster", by: { zh: "Lab 老師", en: "Lab instructor" } },
    { d: "2027-03-20", l: "lab", t: { zh: "第一筆實驗", en: "First experiment" }, x: { zh: "預期只寫了一句：「看有沒有條帶。」", en: "The expectation was one line: 'See if there is a band.'" }, s: "Runs · R0012", by: stu },
    { d: "2027-04-10", l: "cross", t: { zh: "第一次對外教學", en: "First outreach lesson" }, x: { zh: "和 HP 組去國中帶一堂課，寫下學生問得最多的問題。", en: "Taught a junior high class with the HP group and noted the questions students asked most." }, s: "Interactions · I0019", by: stu },
    { d: "2027-04-17", l: "lab", t: { zh: "第一次失敗，照實記下", en: "First failure, recorded as it happened" }, x: { zh: "條帶位置不對。寫下和預期的差別，也寫下偏離 SOP 的地方。", en: "The band was in the wrong place. They wrote how it differed from the expectation and where they left the SOP." }, s: "Runs · R0031", by: stu },
    { d: "2027-04-24", l: "growth", p: 1, t: { zh: "第二次口試", en: "Second oral check" }, x: { zh: "能講目的和預期，結果代表什麼還要提示。", en: "Could give the purpose and expectation; needed a prompt on what the result meant." }, s: "Assessment", by: tch },
    { d: "2027-04-17", l: "growth", t: { zh: "循環卡寫好問題", en: "Cycle card: the question" }, x: { zh: "問題、預期和做法都寫好，和同組一位同學一起。", en: "Question, expectation and method written, together with a partner." }, s: { zh: "研究循環卡", en: "Research cycle card" }, by: stu },
    { d: "2027-05-22", l: "cross", t: { zh: "數據被 Dry 組使用", en: "Dry group uses their data" }, x: { zh: "Dry 組的模型用小禾的量測校正，決議裡寫明來源。", en: "The Dry group's model was calibrated on their measurements, and the decision names the source." }, s: "Decisions · D0044 ← R0102", by: { zh: "會議書記", en: "Meeting scribe" } },
    { d: "2027-06-12", l: "writing", t: { zh: "第一節 Wiki", en: "First wiki section" }, x: { zh: "負責結果頁的一節，先寫出骨架。", en: "Owns one section of the results page and drafts its outline." }, s: "Pages", by: { zh: "頁面負責人", en: "Page owner" } },
    { d: "2027-07-03", l: "writing", t: { zh: "第一個寫作日", en: "First writing day" }, x: { zh: "把這個月的數據整理成圖，並第一次查核別組的 3 筆。", en: "Turned the month's data into a figure, and checked 3 items from another group for the first time." }, s: "Figures · Facts", by: sys },
    { d: "2027-07-08", l: "lab", t: { zh: "第一個自己提出的實驗", en: "First self-proposed experiment" }, x: { zh: "從上週的失敗提出新問題，預期寫了數值範圍和理由。", en: "Proposed a new question from last week's failure, with an expected range and the reason for it." }, s: "Runs · R0188", by: stu },
    { d: "2027-07-10", l: "media", t: { zh: "Promotion Video 的實驗鏡頭", en: "Lab shots for the Promotion Video" }, x: { zh: "負責實驗室的鏡頭與示範動作，畫面裡的人都有同意紀錄。", en: "Filmed the lab scenes and demonstrations. Everyone on camera has a consent record." }, s: "Attribution · Media", by: { zh: "Video 負責人", en: "Video owner" } },
    { d: "2027-07-17", l: "research", t: { zh: "一張改變做法的卡", en: "A card that changed the method" }, x: { zh: "一句重點直接寫出該不該換方法和原因。組長把它列為建議全組閱讀。", en: "The key point says whether to change method and why. The lead marked it for the whole group." }, s: "Papers · L0198", by: stu },
    { d: "2027-08-14", l: "growth", p: 1, t: { zh: "第三次口試", en: "Third oral check" }, x: { zh: "不看稿講完為什麼做、預期什麼、結果代表什麼。", en: "Explained why, what was expected and what it meant, without notes." }, s: "Assessment", by: tch },
    { d: "2027-08-07", l: "growth", t: { zh: "完成研究循環", en: "Research cycle finished" }, x: { zh: "親手走完提問、設計、數據和結論，老師確認。", en: "Took a question through design, data and conclusion, confirmed by an instructor." }, s: { zh: "研究循環卡 · R0241", en: "Cycle card · R0241" }, by: tch },
    { d: "2027-08-21", l: "media", t: { zh: "手繪流程圖進 Wiki", en: "Hand-drawn diagram reaches the wiki" }, x: { zh: "畫了實驗流程圖，掃描後向量化，作者記在圖的紀錄裡。", en: "Drew the workflow diagram, scanned and vectorised it. Authorship is on the figure's record." }, s: "Figures · F0031", by: { zh: "圖的作者", en: "Figure author" } },
    { d: "2027-09-11", l: "cross", t: { zh: "第一次全隊 mock", en: "First full-team mock" }, x: { zh: "負責回答 4 題評審題，並把被問倒的題目補進題庫。", en: "Answered 4 judging questions and added the ones that stumped them to the bank." }, s: "QA", by: sys },
    { d: "2027-09-25", l: "writing", t: { zh: "頁面老師已簽", en: "Page signed by an instructor" }, x: { zh: "負責的段落裡，每張圖和每個數字都查得到來源。", en: "Every figure and number in their section traces to a source." }, s: "Pages", by: tch },
    { d: "2027-10-23", l: "cross", t: { zh: "第三次 Mock judging", en: "Third mock judging" }, x: { zh: "換到不熟的頁面回答問題，三次 mock 都有上場。", en: "Answered on a less familiar page and took part in all three mocks." }, s: "QA · Mock", by: sys },
    { d: "2027-11-27", l: "growth", t: { zh: "年鑑完成", en: "Yearbook finished" }, x: { zh: "老師和學生看過事實清單，學生寫一段自己的話，老師署名。", en: "Instructor and student reviewed the facts, the student wrote a paragraph, the instructor signed." }, s: { zh: "個人研究紀錄", en: "Personal research record" }, by: tch }
  ];
  const PAIRS = [
    { t: { zh: "閱讀卡的一句重點", en: "A reading card's key point" }, a: { zh: "「這篇在講啟動子怎麼影響表現量。」", en: "'This paper is about how promoters affect expression.'" }, b: { zh: "「我們不該用這個啟動子，它在低溫下幾乎不表現，而我們的情境正是低溫。」", en: "'We should not use this promoter: it barely expresses at low temperature, which is exactly our setting.'" }, s: "L0007 → L0198" },
    { t: { zh: "實驗前寫的預期", en: "The expectation written before an experiment" }, a: { zh: "「看有沒有條帶。」", en: "'See if there is a band.'" }, b: { zh: "「預期條帶約 1.2 kb。如果更短，代表上週那段沒接上，下一步就要換引子。」", en: "'Expect a band near 1.2 kb. Shorter means last week's piece did not ligate, so the next step is new primers.'" }, s: "R0012 → R0188" }
  ];
  const ORAL = [
    { d: "3/6", en: "6 Mar", t: { zh: "老師提示兩次才講完實驗目的", en: "Needed two prompts to explain the purpose" } },
    { d: "4/24", en: "24 Apr", t: { zh: "能講目的和預期，結果的意義要提示", en: "Could give purpose and expectation; needed a prompt on meaning" } },
    { d: "8/14", en: "14 Aug", t: { zh: "不看稿講完為什麼、預期什麼、結果代表什麼", en: "Explained why, what was expected and what it meant, without notes" } }
  ];
  const PEERS = [
    { zh: "「小禾教我怎麼看 gel，我第一次自己判斷。」", en: "'They showed me how to read a gel, and I judged one myself for the first time.'" },
    { zh: "「星期六實驗卡住，小禾留下來陪我重做一次。」", en: "'My experiment got stuck on Saturday, and they stayed to redo it with me.'" },
    { zh: "「小禾查核時抓到我圖上的單位寫錯。」", en: "'While checking, they caught a wrong unit on my figure.'" }
  ];
  const CYCLE = { zh: "問題：低溫下換啟動子，表現量會不會比較穩定？預期：會提高。數據：R0241（3 次重複）。結論：只有一種條件提高，和預期部分不同。下一步：換條件再測一次。兩人一組完成。", en: "Question: does changing the promoter steady expression at low temperature? Expected: yes. Data: R0241 (3 replicates). Conclusion: only one condition improved, partly unlike the expectation. Next: test again under a new condition. Done as a pair." };
  const SELF = { zh: "年初我連一篇論文都要讀一個半小時，也不敢說我不同意。到了七月，我會先問自己：讀完這篇，我們要改什麼？失敗的實驗教我最多。", en: "At the start a single paper took me an hour and a half, and I would not dare disagree with one. By July I asked first: what should we change after reading this? The failed experiments taught me most." };

  // ---------- rendering ----------
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "zh";
  const L = o => (o && typeof o === "object" ? o[lang] : o) || "";
  const t = k => T[lang][k] || "";
  const S = { day: 0, sel: null, playing: false, seen: false, raf: 0, last: 0, view: "self", drawn: -1 };
  const pct = n => (n / SPAN) * 100;
  const fmt = s => {
    const x = new Date(s + "T00:00:00Z");
    return lang === "zh" ? `${x.getUTCFullYear()}/${x.getUTCMonth() + 1}/${x.getUTCDate()}` : x.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  };
  const fmtS = s => {
    const x = new Date(s + "T00:00:00Z");
    return lang === "zh" ? `${x.getUTCMonth() + 1}/${x.getUTCDate()}` : x.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
  };
  const upTo = (list, n) => list.filter(d => dayOf(d) <= n);
  function totals(n) {
    const sess = upTo(SESSIONS, n);
    const leave = sess.filter(d => LEAVE[d]), absent = sess.filter(d => ABSENT.includes(d));
    return {
      cards: upTo(CARDS, n).length, runs: upTo(RUNS, n).length,
      checks: CHECKS.filter(([d]) => dayOf(d) <= n).reduce((a, [, c]) => a + c, 0), thanks: upTo(THANKS, n).length,
      lab: LAB.filter(([d]) => dayOf(d) <= n).reduce((a, [, h]) => a + h, 0),
      att: sess.length ? Math.round(((sess.length - leave.length - absent.length) / sess.length) * 100) : 0,
      sessions: sess.length, leave: leave.length, exam: leave.filter(d => LEAVE[d] === "exam").length, absent: absent.length
    };
  }
  const tile = (k, v) => `<div class="jy-c"><b data-c="${k}">${v}</b><span>${esc(t("jy.c." + k))}</span></div>`;

  function renderStatic() {
    const end = totals(SPAN);
    $("#jy-facts").innerHTML = [[DIMS.length, "1"], [4, "2"], [3, "3"], [1, "4"]].map(([n, k]) =>
      `<div><b>${n}</b><span><strong>${esc(t("jy.fact" + k))}</strong>${esc(t("jy.fact" + k + "d"))}</span></div>`).join("");
    const th = t("jy.th");
    $("#jy-dims").innerHTML = `<div class="dmwrap"><table class="dm dm--small jy-dims"><thead><tr>${th.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${DIMS.map(x => `<tr>
      <td data-label="${esc(th[0])}" class="dm__duty"><i class="jy-dot" style="--c:var(--${x.c})"></i>${esc(L(x.t))}</td>
      <td data-label="${esc(th[1])}">${esc(L(x.what))}</td><td data-label="${esc(th[2])}"><code>${esc(L(x.from))}</code></td>
      <td data-label="${esc(th[3])}">${esc(L(x.who))}</td><td data-label="${esc(th[4])}">${esc(L(x.cost))}</td></tr>`).join("")}</tbody></table></div>`;
    $("#jy-collab").innerHTML = COLLAB.map((x, i) => `<li><span class="jy-n">${i + 1}</span><div><h4>${esc(L(x.t))}</h4><p>${esc(L(x.d))}</p></div></li>`).join("");
    $("#jy-not").innerHTML = NOTREC.map(x => `<li>${esc(L(x))}</li>`).join("");
    $("#jy-steps").innerHTML = STEPS.map((x, i) => `<li><span class="jy-when">${esc(L(x.when))}</span><h4>${esc(L(x.t))}</h4><p>${esc(L(x.d))}</p>${i < STEPS.length - 1 ? `<svg class="jy-arrow" viewBox="0 0 24 10" aria-hidden="true"><path d="M0 5h22M18 1l4 4-4 4"/></svg>` : ""}</li>`).join("");
    $("#jy-trust").innerHTML = TRUST.map(x => `<li>${esc(L(x))}</li>`).join("");
    const wth = t("jy.who.th");
    $("#jy-who").innerHTML = `<div class="dmwrap"><table class="dm dm--small jy-whot"><thead><tr>${wth.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${WHO_ROWS.map(r => `<tr><td data-label="${esc(wth[0])}" class="dm__duty">${esc(L(r[0]))}</td>${r.slice(1).map((v, i) => `<td data-label="${esc(wth[i + 1])}" class="${v ? "jy-yes" : "jy-no"}">${esc(t(v ? "jy.who.yes" : "jy.who.no"))}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    return end;
  }

  function renderChart() {
    const months = Array.from({ length: 13 }, (_, i) => {
      const x = new Date(Date.UTC(2026, 11 + i, 1)); const n = dayOf(iso(x));
      if (n > SPAN) return "";
      const lab = lang === "zh" ? `${x.getUTCMonth() + 1}月` : x.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" });
      return `<span style="left:${pct(n)}%">${lab}</span>`;
    }).join("");
    const tick = (d, cls = "") => `<i class="jy-t ${cls}" data-d="${dayOf(d)}" style="left:${pct(dayOf(d))}%"></i>`;
    const ticks = {
      research: CARDS.map(d => tick(d)).join(""),
      lab: RUNS.map(d => tick(d)).join(""),
      cross: [...THANKS.map(d => tick(d)), ...CHECKS.map(([d]) => tick(d))].join(""),
      presence: SESSIONS.map(d => tick(d, LEAVE[d] ? "jy-t--leave" : ABSENT.includes(d) ? "jy-t--absent" : "")).join(""),
      media: "", writing: "", growth: ""
    };
    $("#jy-chart").innerHTML = `<div class="jy-in">
      <div class="jy-row jy-row--axis"><span class="jy-lab"></span><div class="jy-tr jy-months">${months}</div></div>
      <div class="jy-row jy-row--stage"><span class="jy-lab"></span><div class="jy-tr">${STAGE_BAR.map(([a, b, n]) => `<span class="jy-st" style="left:${pct(dayOf(a))}%;width:${pct(dayOf(b)) - pct(dayOf(a))}%" title="${esc(L(n))}"><em>${esc(L(n))}</em></span>`).join("")}</div></div>
      ${LANES.map(l => `<div class="jy-row" style="--c:var(--${l.c === "gray" ? "ink-3" : l.c})"><span class="jy-lab">${esc(L(l.n))}</span><div class="jy-tr">${ticks[l.id]}${EVENTS.map((e, i) => e.l === l.id ? `<button class="jy-e${e.p ? " jy-e--p" : ""}" data-i="${i}" data-d="${dayOf(e.d)}" style="left:${pct(dayOf(e.d))}%" aria-label="${esc(fmtS(e.d))} ${esc(L(e.t))}" title="${esc(fmtS(e.d))} ${esc(L(e.t))}"></button>` : "").join("")}</div></div>`).join("")}
      <div class="jy-head" id="jy-head"></div>
    </div>`;
    $("#jy-legend").innerHTML = `<span><i class="jy-t jy-t--k"></i>${esc(t("jy.legend.tick"))}</span><span><i class="jy-e jy-e--k"></i>${esc(t("jy.legend.event"))}</span><span><i class="jy-t jy-t--k jy-t--leave"></i>${esc(t("jy.legend.leave"))}</span><span><i class="jy-t jy-t--k jy-t--absent"></i>${esc(t("jy.legend.absent"))}</span>`;
    $$("#jy-chart .jy-e").forEach(b => b.addEventListener("click", () => { stop(); S.sel = +b.dataset.i; S.day = Math.max(S.day, +b.dataset.d); paint(true); }));
    $("#jy-range").setAttribute("aria-label", t("jy.scrub"));
    $("#jy-range").max = SPAN;
    S.drawn = -1;
    paint(true);
  }

  function paint(force) {
    const n = Math.floor(S.day);
    if (n === S.drawn && !force) return;
    S.drawn = n;
    $$("#jy-chart [data-d]").forEach(el => el.classList.toggle("on", +el.dataset.d <= n));
    const tr = $(".jy-in .jy-row:nth-child(3) .jy-tr");
    $("#jy-head").style.left = `${tr.offsetLeft + tr.offsetWidth * (n / SPAN)}px`;
    $("#jy-range").value = n;
    $("#jy-date").textContent = fmt(dateOf(n));
    const st = STAGE_BAR.find(([a, b]) => n >= dayOf(a) && n <= dayOf(b));
    $("#jy-stage").textContent = st ? L(st[2]) : "";
    const c = totals(n);
    $("#jy-counters").innerHTML = [["cards", c.cards], ["runs", c.runs], ["checks", c.checks], ["thanks", c.thanks], ["lab", `${c.lab}<small> h</small>`], ["att", `${c.att}<small>%</small>`]].map(([k, v]) => tile(k, v)).join("");
    // Follow the newest key record while playing; a clicked record stays put.
    const latest = S.playing || S.sel === null ? EVENTS.map((e, i) => [dayOf(e.d), i]).filter(([d]) => d <= n).pop() : null;
    const idx = S.playing ? (latest ? latest[1] : null) : S.sel;
    renderDetail(idx, n);
    $$("#jy-chart .jy-e").forEach(b => b.classList.toggle("is-sel", +b.dataset.i === idx));
    $("#jy-play").setAttribute("aria-label", t(S.playing ? "jy.pause" : "jy.play"));
    $("#jy-play").innerHTML = S.playing ? `<svg viewBox="0 0 16 16"><path d="M5 3v10M11 3v10"/></svg>` : `<svg viewBox="0 0 16 16"><path d="M5 3v10l8-5z"/></svg>`;
  }
  function renderDetail(i, n) {
    const p = $("#jy-detail");
    const done = n >= SPAN ? `<p class="jy-done">${esc(t("jy.done"))} <a href="#jy-book-sec">↓</a></p>` : "";
    if (i === null || i === undefined) { p.innerHTML = `<p class="jy-hintp">${esc(t("jy.hint"))}</p>`; return; }
    if (p.dataset.i === String(i) && p.dataset.done === String(!!done) && p.dataset.l === lang) return;
    p.dataset.i = i; p.dataset.done = !!done; p.dataset.l = lang;
    const e = EVENTS[i], lane = LANES.find(l => l.id === e.l);
    p.innerHTML = `<div class="jy-d" style="--c:var(--${lane.c === "gray" ? "ink-3" : lane.c})">
      <p class="jy-d__k">${esc(L(lane.n))} · ${esc(fmt(e.d))}</p><h3>${esc(L(e.t))}</h3><p class="jy-d__x">${esc(L(e.x))}</p>
      <dl><div><dt>${esc(t("jy.src"))}</dt><dd><code>${esc(L(e.s))}</code></dd></div><div><dt>${esc(t("jy.by"))}</dt><dd>${esc(L(e.by))}</dd></div>
      <div><dt>${esc(t("jy.vis"))}</dt><dd>${esc(t(e.p ? "jy.vis.self" : "jy.vis.all"))}</dd></div></dl></div>${done}`;
  }

  // ---------- yearbook ----------
  function renderBook() {
    const c = totals(SPAN), self = S.view === "self";
    $("#jy-views").innerHTML = ["self", "team"].map(v => `<button role="tab" aria-selected="${S.view === v}" data-v="${v}">${esc(t("jy.view." + v))}</button>`).join("");
    $$("#jy-views button").forEach(b => b.addEventListener("click", () => { S.view = b.dataset.v; renderBook(); }));
    const nums = [["cards", c.cards], ["runs", c.runs], ["checks", c.checks], ["thanks", c.thanks], ["lab", `${c.lab} h`], ["att", `${c.att}%`]];
    const groups = LANES.filter(l => l.id !== "presence").map(l => ({ l, ev: EVENTS.filter(e => e.l === l.id && !e.p) })).filter(g => g.ev.length);
    $("#jy-book").innerHTML = `
      <header class="yb__head">
        <p class="yb__kicker">${esc(t("jy.yb.title"))}</p>
        <h3>${esc(t("jy.yb.name"))}<em>${esc(t("jy.yb.fake"))}</em></h3>
        <p class="yb__role">${esc(t("jy.yb.role"))}</p>
      </header>
      <div class="yb__nums">${nums.map(([k, v]) => `<div><b>${v}</b><span>${esc(t("jy.c." + k))}</span></div>`).join("")}</div>
      <section class="yb__sec"><h4>${esc(t("jy.yb.did"))}</h4><div class="yb__groups">${groups.map(g => `<div><h5 style="--c:var(--${g.l.c})">${esc(L(g.l.n))}</h5><ul>${g.ev.map(e => `<li><time>${esc(fmtS(e.d))}</time><span>${esc(L(e.t))}</span></li>`).join("")}</ul></div>`).join("")}</div></section>
      <section class="yb__sec"><h4>${esc(t("jy.yb.growth"))}</h4>${PAIRS.map(p => `<div class="yb__pair"><h5>${esc(L(p.t))}<code>${esc(p.s)}</code></h5><div><figure><figcaption>${esc(t("jy.yb.before"))}</figcaption><blockquote>${esc(L(p.a))}</blockquote></figure><figure><figcaption>${esc(t("jy.yb.after"))}</figcaption><blockquote>${esc(L(p.b))}</blockquote></figure></div></div>`).join("")}</section>
      <section class="yb__sec"><h4>${esc(t("jy.yb.cycle"))}</h4><p>${esc(L(CYCLE))}</p></section>
      <section class="yb__sec"><h4>${esc(t("jy.yb.peers"))}</h4><ul class="yb__peers">${PEERS.map(x => `<li>${esc(L(x))}</li>`).join("")}</ul></section>
      ${self ? `<section class="yb__sec yb__sec--self"><span class="yb__only">${esc(t("jy.yb.onlyself"))}</span>
        <h4>${esc(t("jy.yb.oral"))}</h4><ol class="yb__oral">${ORAL.map(o => `<li><time>${esc(lang === "zh" ? o.d : o.en)}</time><span>${esc(L(o.t))}</span></li>`).join("")}</ol>
        <h4>${esc(t("jy.yb.leave"))}</h4><p>${lang === "zh" ? `排定 ${c.sessions} 次，到場 ${c.sessions - c.leave - c.absent} 次，請假 ${c.leave} 次（其中考試 ${c.exam} 次），缺席 ${c.absent} 次。` : `${c.sessions} scheduled, ${c.sessions - c.leave - c.absent} present, ${c.leave} on leave (${c.exam} for exams), ${c.absent} absent.`}</p></section>` : ""}
      <section class="yb__sec"><h4>${esc(t("jy.yb.self"))}</h4><p class="yb__self">${esc(L(SELF))}</p></section>
      <footer class="yb__foot"><p>${esc(t("jy.yb.sign"))}</p><p class="yb__sign">${esc(t("jy.yb.signline"))}</p></footer>`;
  }

  // ---------- playback ----------
  const SPEED = SPAN / 34000; // the whole year in about 34 s
  function frame(now) {
    if (!S.playing) return;
    S.day = Math.min(SPAN, S.day + (now - S.last) * SPEED); S.last = now;
    paint();
    if (S.day >= SPAN) { stop(); S.sel = EVENTS.length - 1; paint(true); return; }
    S.raf = requestAnimationFrame(frame);
  }
  function play() {
    if (S.day >= SPAN) S.day = 0;
    S.playing = true; S.seen = true; S.sel = null; S.last = performance.now();
    paint(true);
    S.raf = requestAnimationFrame(frame);
  }
  function stop() { S.playing = false; cancelAnimationFrame(S.raf); if ($("#jy-play")) paint(true); }

  let bound = false;
  function bind() {
    if (bound) return; bound = true;
    $("#jy-play").addEventListener("click", () => (S.playing ? stop() : play()));
    $("#jy-range").addEventListener("input", e => { const v = +e.target.value; stop(); S.seen = true; S.sel = null; S.day = v; paint(true); });
    $("#jy-print").addEventListener("click", () => window.print());
    addEventListener("resize", () => { if ($(".jy-in")) paint(true); });
    if (REDUCE) { S.day = SPAN; S.sel = EVENTS.length - 1; return; }
    if ("IntersectionObserver" in window) new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting && !S.seen) play();
      if (!e.isIntersecting && S.playing) stop();
    }), { threshold: .35 }).observe($("#jy-chart"));
  }
  function render(l) {
    lang = l;
    if (!$("#jy-chart")) return;
    bind();
    renderStatic();
    renderChart();
    renderBook();
    $("#jy-print").textContent = t("jy.print");
  }
  return { render, dims: DIMS.length, _state: S, _totals: totals, _span: SPAN };
})();
