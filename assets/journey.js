// Student journey page: what a year changes in a person, how that is recorded, three worked
// years (Wet, Dry, HP) and the yearbook. All three students are invented. Real records never
// go on this public site; they stay in the private Drive and reach only the student, the
// family and the team. Counters and yearbooks are computed from the lists below.
window.JOURNEY = (() => {
  Object.assign(T.zh, {
    "site.students": "學生歷程", "title.students": "學生歷程",
    "sub.jy.top": "概要", "sub.jy.heard": "真正的成長", "sub.jy.own": "承擔與幫忙", "sub.jy.how": "怎麼記", "sub.jy.case": "三位學生的一年", "sub.jy.book": "年鑑", "sub.jy.who": "誰看得到",
    "jy.eyebrow": "學生歷程",
    "jy.h1": "記下做了什麼，<br>也記下變成什麼樣的人。",
    "jy.lede": "PCR 做了幾次、頁面寫了幾節，都留得下來。但一年真正改變一個學生的，是第一次接下不會的事、第一次沒有重做而是回頭想、第一次開口問陌生人。這一頁講我們怎麼把這些也留下來。",
    "jy.cta": "看三位學生的一年",
    "jy.tag": "提案 · 依核心版規格 · 範例學生是虛構的",
    "jy.heard.eyebrow": "真正的成長",
    "jy.heard.h": "2026 的學生，<br>寫下來的不是 PCR。",
    "jy.heard.sub": "讀完 2026 隊員頁的感言，大家都花了很多小時在實驗和電腦前，但最後寫的幾乎都是下面這八件事。所以這八件事就是我們要記的成長。它們不打分數，只留下看得到的時刻。",
    "jy.heard.link": "讀 2026 隊員頁",
    "jy.heard.th": ["面向", "2026 的學生怎麼說（改寫）", "2027 從哪裡看得到"],
    "jy.own.eyebrow": "承擔與幫忙",
    "jy.own.h": "幫忙也算數。<br>但承擔是另一回事。",
    "jy.own.sub": "2026 隊員頁把每位學生和任務的關係分成兩種。這個區分比任何職稱都誠實，因為一個人可能沒有頭銜，卻扛起了一條線。",
    "jy.own.ownT": "承擔", "jy.own.ownD": "這件事的主要貢獻者，做到的超過幫忙。",
    "jy.own.helpT": "幫忙", "jy.own.helpD": "出了力，而且真的造成差別。",
    "jy.own.ask": "老師和任務負責人判斷承擔時問三個問題",
    "jy.own.fix": "2027 要改的地方",
    "jy.how.eyebrow": "怎麼記",
    "jy.how.h": "兩層紀錄，<br>都在當下留下。",
    "jy.how.sub": "表面那一層是做事時本來就要留的紀錄。深的那一層只多四個很小的動作，因為成長要靠當時寫下的話才記得住，年底回想是寫不出來的。",
    "jy.how.layer1": "做了什麼", "jy.how.layer1d": "本來就要留，學生幾乎不用多花時間。",
    "jy.how.layer2": "變成什麼樣的人", "jy.how.layer2d": "四個小動作，一年合計學生約多花 1 小時（估計）。",
    "jy.how.more": "看九類紀錄的完整來源",
    "jy.th": ["面向", "記下什麼", "從哪裡來", "誰記"],
    "jy.rules.h": "幾條不變的原則",
    "jy.case.eyebrow": "三位學生的一年",
    "jy.case.h": "同樣一年，三種長大的方式。",
    "jy.case.sub": "三位都是虛構的學生，題目和編號只是示範。按播放看一年怎麼累積；點圓點看那筆紀錄，以及學生當時寫下的話。",
    "jy.play": "播放", "jy.pause": "暫停", "jy.scrub": "拖動時間軸",
    "jy.facet.all": "全部", "jy.facet.label": "只看一種成長",
    "jy.c.cards": "閱讀卡", "jy.c.checks": "查核別人的圖與數字", "jy.c.thanks": "被同伴提到幫了忙", "jy.c.lab": "Lab 時數", "jy.c.att": "出席率",
    "jy.hint": "點時間軸上的圓點，看那筆紀錄。",
    "jy.src": "來源", "jy.by": "誰記", "jy.vis": "誰看得到", "jy.vis.all": "本人、家長、全隊", "jy.vis.self": "只有本人、家長和老師",
    "jy.said": "當時寫下的話",
    "jy.legend.tick": "一筆日常紀錄", "jy.legend.event": "重要紀錄", "jy.legend.priv": "只給本人與家長", "jy.legend.absent": "缺席",
    "jy.done": "這一年走完了。下面是這些紀錄產生的年鑑。",
    "jy.book.eyebrow": "年鑑",
    "jy.book.h": "每個人一頁，<br>先讀到人，再讀到數字。",
    "jy.book.sub": "年鑑由上面同一份紀錄產生。切換學生和版本，看本人與家長、以及全隊與其他家長各看到什麼。",
    "jy.view.self": "本人與家長版", "jy.view.team": "全隊年鑑版", "jy.print": "列印或存成 PDF",
    "jy.yb.title": "GEMS iGEM 2027 年鑑", "jy.yb.fake": "虛構範例",
    "jy.yb.shot1": "肖像", "jy.yb.shot2": "工作中", "jy.yb.shot3": "最好笑的一張",
    "jy.yb.words": "自己寫的感言", "jy.yb.turns": "這一年的轉折", "jy.yb.tasks": "承擔與幫忙", "jy.yb.own": "承擔", "jy.yb.help": "幫忙",
    "jy.yb.letters": "寫給自己的前兩段", "jy.yb.growth": "同一欄，年初和年中以後", "jy.yb.before": "年初", "jy.yb.after": "年中以後",
    "jy.yb.cycle": "親手走完的研究循環", "jy.yb.peers": "同伴寫下的", "jy.yb.teacher": "老師看見的一刻", "jy.yb.oral": "三次口試", "jy.yb.leave": "出席明細", "jy.yb.nums": "這一年的數字",
    "jy.yb.sign": "以上內容均來自 2027 賽季的紀錄，每一項都有編號可查，感言由學生本人撰寫。指導老師確認後署名。",
    "jy.yb.signline": "指導老師署名　＿＿＿＿＿＿＿＿",
    "jy.yb.onlyself": "只在本人與家長版",
    "jy.who.eyebrow": "誰看得到",
    "jy.who.h": "公開事實與感言，<br>保護寫給自己的話。",
    "jy.who.sub": "學生都是未成年人，所以每一類紀錄都事先訂好誰能看。本頁是虛構範例；真實的歷程與年鑑放在隊內，不會放上這個公開網站。",
    "jy.who.th": ["內容", "學生本人", "家長", "全隊與其他家長", "老師"],
    "jy.who.yes": "看得到", "jy.who.no": "—",
    "jy.who.note": "出席率、Lab 時數和肖像進全隊年鑑，已由 PI 確認。其他項目是提案。範圍會在入隊時告知學生與家長。"
  });
  Object.assign(T.en, {
    "site.students": "Journeys", "title.students": "Student journeys",
    "sub.jy.top": "Overview", "sub.jy.heard": "Real growth", "sub.jy.own": "Own or help", "sub.jy.how": "How", "sub.jy.case": "Three students' years", "sub.jy.book": "Yearbook", "sub.jy.who": "Who sees it",
    "jy.eyebrow": "Student journeys",
    "jy.h1": "We record what they did,<br>and who they became.",
    "jy.lede": "PCR counts and wiki sections are easy to keep. What changes a student in a year is the first time they take on something they cannot do, stop and think instead of repeating, or ask a stranger a question. This page shows how we keep those too.",
    "jy.cta": "See three students' years",
    "jy.tag": "Proposal · Based on the core spec · The example students are invented",
    "jy.heard.eyebrow": "Real growth",
    "jy.heard.h": "What 2026 students wrote<br>was not about PCR.",
    "jy.heard.sub": "The 2026 team page is full of students who spent long hours at the bench and the computer. What they chose to write about was almost always these eight things, so these are the growth we record. They get no score, only moments that can be seen.",
    "jy.heard.link": "Read the 2026 team page",
    "jy.heard.th": ["Area", "What 2026 students said (paraphrased)", "Where it shows in 2027"],
    "jy.own.eyebrow": "Own or help",
    "jy.own.h": "Helping counts.<br>Owning is something else.",
    "jy.own.sub": "The 2026 team page splits each student's link to a task into two kinds. This is more honest than any title, because someone with no title may have carried a whole line of work.",
    "jy.own.ownT": "Owner", "jy.own.ownD": "Main contributor to the task, showed ownership beyond helping.",
    "jy.own.helpT": "Helper", "jy.own.helpD": "Contributed to helping and made a difference.",
    "jy.own.ask": "Three questions instructors and task leads ask",
    "jy.own.fix": "What changes in 2027",
    "jy.how.eyebrow": "How",
    "jy.how.h": "Two layers of record,<br>both kept at the time.",
    "jy.how.sub": "The surface layer is what the work already leaves behind. The deeper layer adds four small acts, because growth is only remembered through what was written then. It cannot be recalled in November.",
    "jy.how.layer1": "What they did", "jy.how.layer1d": "Recorded anyway, at almost no extra student time.",
    "jy.how.layer2": "Who they became", "jy.how.layer2d": "Four small acts, about one extra student hour across the year (estimate).",
    "jy.how.more": "See the full sources for all nine records",
    "jy.th": ["Area", "What is recorded", "Where it comes from", "Who records it"],
    "jy.rules.h": "Principles that do not change",
    "jy.case.eyebrow": "Three students' years",
    "jy.case.h": "The same year, three ways of growing.",
    "jy.case.sub": "All three are invented, and the projects and IDs are illustrative. Press play to watch a year build up. Click a dot to see the record and what the student wrote at the time.",
    "jy.play": "Play", "jy.pause": "Pause", "jy.scrub": "Drag the timeline",
    "jy.facet.all": "All", "jy.facet.label": "Show one kind of growth",
    "jy.c.cards": "Reading cards", "jy.c.checks": "Others' figures and facts checked", "jy.c.thanks": "Named by peers as helping", "jy.c.lab": "Lab hours", "jy.c.att": "Attendance",
    "jy.hint": "Click a dot on the timeline to see that record.",
    "jy.src": "Source", "jy.by": "Recorded by", "jy.vis": "Visible to", "jy.vis.all": "Student, family, team", "jy.vis.self": "Student, family and instructors only",
    "jy.said": "Written at the time",
    "jy.legend.tick": "Everyday record", "jy.legend.event": "Key record", "jy.legend.priv": "Student and family only", "jy.legend.absent": "Absent",
    "jy.done": "That's the year. Below is the yearbook those records produce.",
    "jy.book.eyebrow": "Yearbook",
    "jy.book.h": "One page each.<br>You meet the person before the numbers.",
    "jy.book.sub": "The yearbook comes from the same records above. Switch student and version to see what the student and family see, and what the team and other families see.",
    "jy.view.self": "Student and family", "jy.view.team": "Team yearbook", "jy.print": "Print or save as PDF",
    "jy.yb.title": "GEMS iGEM 2027 Yearbook", "jy.yb.fake": "Invented example",
    "jy.yb.shot1": "Portrait", "jy.yb.shot2": "At work", "jy.yb.shot3": "The funny one",
    "jy.yb.words": "In their own words", "jy.yb.turns": "Turning points", "jy.yb.tasks": "Owned and helped", "jy.yb.own": "Owned", "jy.yb.help": "Helped",
    "jy.yb.letters": "The two earlier notes to self", "jy.yb.growth": "The same field, early and later", "jy.yb.before": "Early in the year", "jy.yb.after": "Later on",
    "jy.yb.cycle": "A research cycle, start to finish", "jy.yb.peers": "What peers wrote", "jy.yb.teacher": "A moment an instructor saw", "jy.yb.oral": "Three oral checks", "jy.yb.leave": "Attendance detail", "jy.yb.nums": "The year in numbers",
    "jy.yb.sign": "Everything here comes from records of the 2027 season, each with an ID that can be checked. The words are the student's own. Signed by a supervising instructor after review.",
    "jy.yb.signline": "Supervising instructor ____________",
    "jy.yb.onlyself": "Student and family version only",
    "jy.who.eyebrow": "Who sees it",
    "jy.who.h": "Facts and final words are shared.<br>Notes to self are protected.",
    "jy.who.sub": "Students are minors, so who can see each kind of record is set in advance. This page is an invented example; real journeys and yearbooks stay inside the team and never appear on this public site.",
    "jy.who.th": ["Content", "Student", "Family", "Team and other families", "Instructors"],
    "jy.who.yes": "Yes", "jy.who.no": "—",
    "jy.who.note": "Attendance, lab hours and portraits in the team yearbook are confirmed by the PI. The rest is a proposal. Students and families are told the scope when they join."
  });

  // ---------- the eight kinds of growth ----------
  const FACETS = [
    { id: "step", c: "orange", n: { zh: "承擔", en: "Stepping up" }, s: { zh: "隊伍需要時，接下一件自己從沒做過的事，最後那件事成了自己的。", en: "When the team needed it, taking on something never done before until it became their own." }, w: { zh: "Attribution 從幫忙變承擔的日期；自願接下的 Tasks", en: "The date Attribution moves from helper to owner; Tasks taken on voluntarily" } },
    { id: "fail", c: "pink", n: { zh: "面對失敗", en: "Facing failure" }, s: { zh: "沒有條帶時不再直接重做，先回頭想哪裡錯；犯了錯也照實說，再站出來。", en: "No band, and instead of repeating, going back to work out why; owning a mistake and stepping up again." }, w: { zh: "Runs 的「結果和預期差在哪」與偏差；失敗後的下一筆", en: "The 'differs from expected' and deviation fields in Runs; the next record after a failure" } },
    { id: "think", c: "purple", n: { zh: "獨立思考", en: "Thinking alone" }, s: { zh: "從每一步都要確認，到能自己規劃試驗；幾小時的工作作廢後，開始質疑自己的假設。", en: "From checking every step to planning trials alone; after hours of work were scrapped, questioning their own assumptions." }, w: { zh: "Runs 的預期欄；自己提出的實驗；閱讀卡判斷「反對」；Decisions 的反對或疑慮", en: "Expectations in Runs; self-proposed experiments; 'against' judgements on cards; objections in Decisions" } },
    { id: "voice", c: "indigo", n: { zh: "開口", en: "Finding a voice" }, s: { zh: "很害羞、很內向，後來能對教授和專家講清楚專案，被問倒也撐得住。", en: "Shy and introverted, later explaining the project to professors and experts, and holding up when stumped." }, w: { zh: "Interactions；QA 與三次 Mock；口試", en: "Interactions; QA and the three mocks; oral checks" } },
    { id: "see", c: "green", n: { zh: "看見別人", en: "Seeing people" }, s: { zh: "走出實驗室見到真正受影響的人之後，專案從一份作業變成想幫上忙的事。", en: "After leaving the lab and meeting the people affected, the project stopped being an assignment and became something worth doing for them." }, w: { zh: "Interactions 的「學到什麼」與「專案因此改了什麼」", en: "'What we learned' and 'what changed' in Interactions" } },
    { id: "link", c: "teal", n: { zh: "連結", en: "Connecting" }, s: { zh: "開始看懂每個人的工作怎麼接在一起，也發現專案最容易斷在人和人之間。", en: "Starting to see how each person's work joins up, and that projects break most easily between people." }, w: { zh: "查核別人的工作；「這週誰幫了我」；工作被別組接著用", en: "Checking others' work; 'who helped me this week'; work other groups built on" } },
    { id: "hold", c: "blue", n: { zh: "撐住", en: "Holding on" }, s: { zh: "課業和隊上一起扛，曾經抓不到平衡；放棄暑假，也學會耐心。", en: "Carrying school and the team together, struggling for balance at first; giving up summer and learning patience." }, w: { zh: "出席與 Lab 時數的曲線；低潮之後回來的那一週", en: "The curve of attendance and lab hours; the week they came back after a low" } },
    { id: "self", c: "gold", n: { zh: "找到自己", en: "Finding themselves" }, s: { zh: "以為自己懶，原來只是還沒遇到值得的事；無意間照顧植物，發現了真正喜歡的東西。", en: "Thought they were lazy and had just not found what was worth it; happened to tend plants and found what they loved." }, w: { zh: "三段自述；每月一句；換組的紀錄", en: "The three notes; one line a month; a change of group" } }
  ];
  const FACET = Object.fromEntries(FACETS.map(f => [f.id, f]));

  const OWN_ASK = [
    { zh: "沒有這個人，這件事會不會停？", en: "Without this person, would the work stop?" },
    { zh: "下一步是這個人自己提出來的嗎？", en: "Did this person propose the next step themselves?" },
    { zh: "事情卡住的時候，是誰在扛？", en: "When it got stuck, who carried it?" }
  ];
  const OWN_FIX = [
    { t: { zh: "每個階段都更新", en: "Updated every stage" }, d: { zh: "2026 到十月才定誰是 owner，還一度有爭議。2027 從 3/13 起，每個階段依紀錄更新一次，學生隨時看得到。", en: "In 2026 ownership was settled in late October and was disputed for a while. From 13 Mar 2027 it is updated each stage from the records, and students can always see it." } },
    { t: { zh: "幫忙可以變成承擔", en: "Helping can become owning" }, d: { zh: "從幫忙變承擔的那一天會記下來。這一天往往就是一個學生的轉折。", en: "The day someone moves from helper to owner is recorded. It is often that student's turning point." } },
    { t: { zh: "沒有頭銜也看得到", en: "Visible without a title" }, d: { zh: "職稱只有少數人有。承擔和幫忙每個人都有，年鑑上也放在職稱前面。", en: "Few people have titles. Everyone has things they owned and helped, and the yearbook shows those first." } }
  ];
  const LAYER1 = [
    { zh: "週六收尾用手機填：閱讀卡、實驗、每週回報", en: "Saturday close-out on a phone: reading cards, experiments, weekly check-in" },
    { zh: "打卡機記 Lab 時數", en: "The fingerprint clock logs lab hours" },
    { zh: "表上的欄位記下查核人、作者、頁面負責人", en: "Sheet columns record checkers, authors and page owners" },
    { zh: "每個階段更新一次承擔與幫忙", en: "Owned and helped are updated each stage" }
  ];
  const LAYER2 = [
    { when: { zh: "每週 · 可空白", en: "Weekly · optional" }, t: { zh: "這週誰幫了我", en: "Who helped me this week" }, d: { zh: "寫下一個人和一件事。累積下來，就是同伴眼中的你。", en: "One person and one thing. Over a year this is how peers saw you." } },
    { when: { zh: "每月第一個週六 · 可空白", en: "First Saturday monthly · optional" }, t: { zh: "這個月我第一次……", en: "This month, for the first time…" }, d: { zh: "每週回報多一句：第一次做到什麼，或改變了什麼想法。", en: "One more line in the check-in: something done for the first time, or a changed mind." } },
    { when: "11/29 · 8/14 · 11/27", t: { zh: "寫給自己的三段", en: "Three notes to self" }, d: { zh: "我為什麼來、我怕什麼；這一年最難的一刻；最後的感言。第三段就是 Wiki 隊員頁和年鑑上的感言。", en: "Why I came and what I fear; the hardest moment so far; the final words, which become the wiki team page and yearbook entry." } },
    { when: { zh: "每階段 · 老師", en: "Each stage · instructor" }, t: { zh: "老師看見的一刻", en: "A moment an instructor saw" }, d: { zh: "每位學生每個階段最多一句：具體看到了什麼。只寫事情，不寫評語或分數。", en: "At most one line per student per stage: what was actually seen. A moment, not a comment or a score." } }
  ];
  const DIMS = [
    { c: "purple", t: { zh: "研究", en: "Research" }, what: { zh: "閱讀卡、負責的研究問題、被決定引用的卡", en: "Reading cards, research questions owned, cards cited by a decision" }, from: "Papers · Questions · Decisions", who: { zh: "學生，表單", en: "Student, by form" } },
    { c: "teal", t: { zh: "實驗與模型", en: "Lab and models" }, what: { zh: "每筆的預期與結果，失敗和偏差也算", en: "Expectation and result for each, failures and deviations included" }, from: "Runs", who: { zh: "學生，表單", en: "Student, by form" } },
    { c: "blue", t: { zh: "Lab 投入", en: "Lab time" }, what: { zh: "Extra lab hour 的開始與離開時間", en: "Start and leaving time of extra lab hours" }, from: { zh: "打卡機 CSV → LabHours", en: "Clock CSV → LabHours" }, who: { zh: "打卡機；每月匯入", en: "The clock; imported monthly" } },
    { c: "gray", t: { zh: "出席", en: "Attendance" }, what: { zh: "到場、請假、缺席，分開顯示", en: "Present, leave and absent, shown separately" }, from: "CheckIns · Calendar", who: { zh: "學生，每週回報", en: "Student, weekly check-in" } },
    { c: "orange", t: { zh: "承擔與幫忙", en: "Owned and helped" }, what: { zh: "每條任務線誰承擔、誰幫忙、從哪一天開始、依據是什麼", en: "Who owned or helped each line of work, from when, and on what evidence" }, from: "Attribution", who: { zh: "任務負責人提，老師確認", en: "Task lead proposes, instructor confirms" } },
    { c: "pink", t: { zh: "跨組合作", en: "Across teams" }, what: { zh: "查核別人的圖與數字、回答的評審題、帶小組、同伴寫下的話", en: "Checking others' figures and facts, judging questions answered, leading a group, what peers wrote" }, from: "Figures · Facts · QA · Roster · CheckIns", who: { zh: "表上的欄位；同伴", en: "Sheet columns; peers" } },
    { c: "indigo", t: { zh: "影像、美術與寫作", en: "Media and writing" }, what: { zh: "精選照片、影片工作、畫的圖、負責的頁面", en: "Selected photos, video work, figures drawn, pages owned" }, from: "Media · Figures · Pages", who: { zh: "各負責人；作者", en: "Owners; authors" } },
    { c: "green", t: { zh: "對外與教育", en: "Outreach" }, what: { zh: "訪談、活動與教學，以及專案因此改了什麼", en: "Interviews, events and teaching, and what changed in the project" }, from: "Interactions", who: { zh: "學生，表單", en: "Student, by form" } },
    { c: "gold", t: { zh: "成長", en: "Growth" }, what: { zh: "研究循環卡、三次口試、三段自述、每月一句、老師看見的一刻", en: "Cycle card, three oral checks, three notes, one line a month, a moment an instructor saw" }, from: { zh: "成長檔 · Assessment · CheckIns", en: "Growth file · Assessment · CheckIns" }, who: { zh: "學生；老師", en: "Student; instructor" } }
  ];
  const PRINCIPLES = [
    { zh: "成長不打分，也不排名。年鑑留下時刻和原話，讀的人自己感受。", en: "Growth gets no score and no ranking. The yearbook keeps moments and original words, and readers feel the rest." },
    { zh: "失敗和低潮照實記下，它們常常就是轉折，不會扣分。", en: "Failures and low points are recorded as they happened. They are often the turning point, and they cost nothing." },
    { zh: "感言一定是學生自己寫的，AI 不代寫。AI 只匯出事實清單。", en: "The words are always the student's own. AI never writes them; it only exports the list of facts." },
    { zh: "每個事實都連得回一筆有編號的紀錄，由老師確認後署名。", en: "Every fact links to a record with an ID, reviewed and signed by an instructor." }
  ];
  const WHO_ROWS = [
    [{ zh: "肖像與照片", en: "Portrait and photos" }, 1, 1, 1, 1],
    [{ zh: "最後的感言", en: "The final words" }, 1, 1, 1, 1],
    [{ zh: "承擔與幫忙、貢獻事件", en: "Owned and helped, contributions" }, 1, 1, 1, 1],
    [{ zh: "轉折時刻與學生當時的話（學生同意的）", en: "Turning points and words from the time (with the student's agreement)" }, 1, 1, 1, 1],
    [{ zh: "累計數量、出席率與 Lab 時數", en: "Totals, attendance and lab hours" }, 1, 1, 1, 1],
    [{ zh: "研究循環卡；同伴的話（不具名）", en: "Cycle card; peers' words (unnamed)" }, 1, 1, 1, 1],
    [{ zh: "寫給自己的前兩段", en: "The first two notes to self" }, 1, 1, 0, 1],
    [{ zh: "老師看見的一刻；三次口試；請假類別", en: "Moments instructors saw; oral checks; leave categories" }, 1, 1, 0, 1],
    [{ zh: "老師的評語與內部紀錄", en: "Instructor comments and internal records" }, 0, 0, 0, 1]
  ];

  // ---------- calendar helpers ----------
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
  const EARLY_CARDS = [...each("2026-11-29", "2026-12-20", [0]), "2026-12-26", ...each("2027-01-09", "2027-01-30", [6]), "2027-02-14", "2027-02-20", "2027-02-27", "2027-03-06"];
  const STAGE_BAR = [
    ["2026-11-29", "2026-12-25", { zh: "線上", en: "Online" }], ["2026-12-26", "2027-01-30", { zh: "定題", en: "Topic" }], ["2027-02-13", "2027-03-07", { zh: "訓練", en: "Training" }],
    ["2027-03-13", "2027-06-11", { zh: "任務組", en: "Task groups" }], ["2027-06-12", "2027-08-27", { zh: "Wiki 與暑假", en: "Wiki, summer" }], ["2027-08-28", "2027-10-13", { zh: "衝刺", en: "Crunch" }], ["2027-10-14", "2027-11-27", { zh: "Jamboree", en: "Jamboree" }]
  ];
  const stu = { zh: "學生，表單", en: "Student, by form" }, tch = { zh: "老師", en: "Instructor" }, sys = { zh: "表上的欄位", en: "A sheet column" }, lead = { zh: "任務負責人，老師確認", en: "Task lead, confirmed by instructor" }, scr = { zh: "會議書記", en: "Meeting scribe" };

  // ---------- three invented students ----------
  const STUDENTS = [
    {
      id: "wet", track: "Wet", c: "teal", mark: "禾", markEn: "H",
      name: { zh: "小禾", en: "Ho" }, role: { zh: "Wet 組 · 高一", en: "Wet group · first year of high school" },
      arc: { zh: "進來時覺得自己沒有毅力，也不敢說「我覺得這樣不對」。這一年的故事是一次沒有條帶的 gel，和之後每一次回頭想。", en: "Arrived sure they had no staying power and afraid to say 'I think this is wrong'. Their year is a gel with no band, and every time they went back to think after it." },
      work: { zh: "實驗", en: "Experiments" }, workLane: { zh: "實驗", en: "Lab" },
      leave: { "2027-01-02": "other", "2027-05-08": "exam", "2027-05-15": "exam" }, absent: ["2027-06-05", "2027-10-02"],
      cards: [...EARLY_CARDS, "2027-03-27", "2027-04-17", "2027-05-22", "2027-06-12", "2027-06-26", "2027-07-17", "2027-07-31", "2027-08-14"],
      works: [...each("2027-03-20", "2027-06-26", [6]).filter(d => !["2027-05-08", "2027-05-15", "2027-06-05"].includes(d)), ...each("2027-07-06", "2027-08-10", [2, 4]), ...each("2027-08-14", "2027-09-11", [6])],
      checks: [["2027-07-03", 3], ["2027-08-07", 4], ["2027-09-04", 5], ["2027-09-11", 2]],
      thanks: ["2027-02-20", "2027-03-13", "2027-04-17", "2027-05-22", "2027-06-26", "2027-07-08", "2027-07-22", "2027-08-05", "2027-08-21", "2027-09-11", "2027-09-25"],
      lab: [["2027-03-31", 6], ["2027-04-30", 9], ["2027-05-31", 4], ["2027-06-30", 12], ["2027-07-31", 38], ["2027-08-31", 30], ["2027-09-30", 18]],
      own: ["Lab Notebook", "Cloning"], help: ["Education", "Video", "Art"],
      events: [
        { d: "2026-11-29", l: "research", t: { zh: "第一張閱讀卡", en: "First reading card" }, x: { zh: "讀一篇綜述，花了 85 分鐘。一句重點寫成了摘要，判斷選「僅背景」。", en: "A review article, 85 minutes. The key point came out as a summary; the judgement was 'background only'." }, s: "Papers · L0007", by: stu },
        { d: "2027-01-02", l: "cross", f: "voice", t: { zh: "第一次當小組長", en: "First month leading a small group" }, x: { zh: "輪到帶 C 組一個月：計時、私下問沒交的同學一句。", en: "C group's turn for a month: keeping time and quietly checking in with anyone who had not submitted." }, q: { zh: "這個月我第一次開口問別人「你還好嗎」，比想像中難。", en: "This month, for the first time, I asked someone 'are you OK'. It was harder than I expected." }, s: "Roster · CheckIns", by: stu },
        { d: "2027-03-06", l: "turn", p: 1, f: "think", t: { zh: "第一次口試", en: "First oral check" }, x: { zh: "講訓練實驗的目的時，老師提示兩次才講完。", en: "Explaining the purpose of a training experiment took two prompts." }, s: "Assessment", by: tch },
        { d: "2027-03-20", l: "work", t: { zh: "第一筆實驗", en: "First experiment" }, x: { zh: "預期只寫了一句：「看有沒有條帶。」", en: "The expectation was one line: 'See if there is a band.'" }, s: "Runs · R0012", by: stu },
        { d: "2027-04-03", l: "own", f: "step", t: { zh: "開始幫忙 Lab Notebook", en: "Starts helping on Lab Notebook" }, x: { zh: "組內沒人想整理筆記，主動說可以先做。", en: "Nobody in the group wanted to tidy the notebook, so they offered to start." }, s: "Attribution", by: lead },
        { d: "2027-04-17", l: "work", f: "fail", t: { zh: "沒有條帶的那一天", en: "The day there was no band" }, x: { zh: "步驟都照做了還是沒有條帶。這次沒有直接重做：回去看質體圖、算預期大小、核對引子位置，再和同學討論。", en: "Every step followed, still no band. This time no immediate repeat: back to the plasmid map, working out the expected size, checking primer positions, then talking it through." }, q: { zh: "這個月我第一次沒有馬上重做，而是先問自己為什麼。", en: "This month, for the first time, I did not just redo it. I asked myself why first." }, s: "Runs · R0031", by: stu },
        { d: "2027-05-22", l: "cross", f: "link", t: { zh: "數據被 Dry 組使用", en: "Dry group builds on their data" }, x: { zh: "Dry 組的模型用小禾的量測校正，決議裡寫明來源。", en: "The Dry group calibrated its model on Ho's measurements, and the decision names the source." }, s: "Decisions · D0044 ← R0102", by: scr },
        { d: "2027-06-12", l: "writing", t: { zh: "第一節 Wiki", en: "First wiki section" }, x: { zh: "負責結果頁的一節，先寫出骨架。", en: "Owns one section of the results page and drafts its outline." }, s: "Pages", by: { zh: "頁面負責人", en: "Page owner" } },
        { d: "2027-06-26", l: "own", f: "step", t: { zh: "Lab Notebook 從幫忙變承擔", en: "Lab Notebook: helper becomes owner" }, x: { zh: "格式是小禾定的，大家有問題都來問。階段更新時改成承擔。", en: "Ho set the format and everyone came to Ho with questions, so the stage update made them owner." }, s: "Attribution", by: lead },
        { d: "2027-07-08", l: "work", f: "think", t: { zh: "第一個自己提出的實驗", en: "First self-proposed experiment" }, x: { zh: "從上週的失敗提出新問題，預期寫了數值範圍和理由。", en: "Proposed a new question from last week's failure, with an expected range and the reason for it." }, q: { zh: "這個月我第一次提出的實驗不是老師給的。", en: "This month, for the first time, the experiment I proposed did not come from an instructor." }, s: "Runs · R0188", by: stu },
        { d: "2027-07-17", l: "research", f: "think", t: { zh: "一張改變做法的卡", en: "A card that changed the method" }, x: { zh: "一句重點直接寫出該不該換方法和原因，判斷選「反對」。任務負責人把它列為全組必讀。", en: "The key point says whether to change method and why, judged 'against'. The task lead marked it for the whole group." }, s: "Papers · L0198", by: stu },
        { d: "2027-07-31", l: "presence", f: "hold", t: { zh: "這個月 38 小時在 Lab", en: "38 lab hours this month" }, x: { zh: "打卡機的紀錄。放棄了原本的暑假計畫。", en: "From the fingerprint clock. The original summer plans went." }, q: { zh: "以前我以為自己很懶。現在週末會自己想來。", en: "I used to think I was lazy. Now I want to come in on weekends." }, s: "LabHours", by: { zh: "打卡機", en: "The clock" } },
        { d: "2027-08-07", l: "turn", f: "think", t: { zh: "完成研究循環", en: "Research cycle finished" }, x: { zh: "親手走完提問、設計、數據和結論，老師確認。", en: "Took a question through design, data and conclusion, confirmed by an instructor." }, s: { zh: "研究循環卡 · R0241", en: "Cycle card · R0241" }, by: tch },
        { d: "2027-08-14", l: "turn", p: 1, f: "think", t: { zh: "第三次口試", en: "Third oral check" }, x: { zh: "不看稿講完為什麼做、預期什麼、結果代表什麼。", en: "Explained why, what was expected and what it meant, without notes." }, s: "Assessment", by: tch },
        { d: "2027-08-21", l: "media", f: "self", t: { zh: "手繪流程圖進 Wiki", en: "Hand-drawn diagram reaches the wiki" }, x: { zh: "發現自己喜歡把複雜的實驗畫清楚。圖的作者記在紀錄裡。", en: "Found they enjoy drawing a complicated experiment clearly. Authorship is on the figure's record." }, s: "Figures · F0031", by: { zh: "圖的作者", en: "Figure author" } },
        { d: "2027-09-11", l: "cross", f: "voice", t: { zh: "第一次全隊 mock", en: "First full-team mock" }, x: { zh: "負責回答 4 題，被問倒 1 題，當晚把它補進題庫。", en: "Answered 4 questions, was stumped by 1, and added it to the bank that night." }, s: "QA", by: sys },
        { d: "2027-11-27", l: "turn", t: { zh: "年鑑完成", en: "Yearbook finished" }, x: { zh: "老師和學生看過事實清單，學生寫完感言，老師署名。", en: "Instructor and student reviewed the facts, the student finished their words, the instructor signed." }, s: { zh: "個人研究紀錄", en: "Personal research record" }, by: tch }
      ],
      letters: [
        { d: "11/29", en: "29 Nov", t: { zh: "我來是因為生物課很有趣。我怕我撐不完，也怕大家都比我厲害。", en: "I came because biology class was interesting. I am afraid I won't last, and that everyone is better than me." } },
        { d: "8/14", en: "14 Aug", t: { zh: "最難的是四月那片沒有條帶的 gel。我盯著它很久，後來發現比起重做，我更想知道為什麼。", en: "The hardest was the gel with no band in April. I stared at it for a long time, and found I wanted to know why more than I wanted to redo it." } }
      ],
      words: { zh: "年初讀一篇論文要一個半小時，也不敢說我不同意。後來我最記得的不是成功的那幾次，是四月那片什麼都沒有的 gel。我以前覺得自己沒有毅力，現在才知道，只是以前沒有遇到一件想知道答案的事。", en: "At the start one paper took an hour and a half, and I never dared to disagree. What I remember now is not the successes but that empty gel in April. I used to think I had no staying power. I had just never met a question I wanted answered." },
      pairs: [
        { t: { zh: "閱讀卡的一句重點", en: "A reading card's key point" }, a: { zh: "「這篇在講啟動子怎麼影響表現量。」", en: "'This paper is about how promoters affect expression.'" }, b: { zh: "「我們不該用這個啟動子，它在低溫下幾乎不表現，而我們的情境正是低溫。」", en: "'We should not use this promoter: it barely expresses at low temperature, which is exactly our setting.'" }, s: "L0007 → L0198" },
        { t: { zh: "實驗前寫的預期", en: "The expectation before an experiment" }, a: { zh: "「看有沒有條帶。」", en: "'See if there is a band.'" }, b: { zh: "「預期條帶約 1.2 kb。如果更短，代表上週那段沒接上，下一步就要換引子。」", en: "'Expect a band near 1.2 kb. Shorter means last week's piece did not ligate, so the next step is new primers.'" }, s: "R0012 → R0188" }
      ],
      cycle: { zh: "問題：低溫下換啟動子，表現量會不會比較穩定？預期：會提高。數據：R0241（3 次重複）。結論：只有一種條件提高，和預期部分不同。下一步：換條件再測一次。兩人一組完成。", en: "Question: does changing the promoter steady expression at low temperature? Expected: yes. Data: R0241 (3 replicates). Conclusion: only one condition improved, partly unlike the expectation. Next: test a new condition. Done as a pair." },
      peers: [{ zh: "「小禾教我怎麼看 gel，我第一次自己判斷。」", en: "'Ho showed me how to read a gel, and I judged one myself for the first time.'" }, { zh: "「星期六實驗卡住，小禾留下來陪我重做一次。」", en: "'My experiment got stuck on Saturday, and Ho stayed to redo it with me.'" }, { zh: "「小禾查核時抓到我圖上的單位寫錯。」", en: "'While checking, Ho caught a wrong unit on my figure.'" }],
      teacher: { zh: "四月那天，小禾沒有來問我怎麼辦，而是拿著質體圖來問我：「這樣算對嗎？」", en: "That day in April, Ho did not ask me what to do. They brought the plasmid map and asked: 'Is this reasoning right?'" },
      oral: [{ d: "3/6", en: "6 Mar", t: { zh: "老師提示兩次才講完實驗目的", en: "Needed two prompts to explain the purpose" } }, { d: "4/24", en: "24 Apr", t: { zh: "能講目的和預期，結果的意義要提示", en: "Could give purpose and expectation; needed a prompt on meaning" } }, { d: "8/14", en: "14 Aug", t: { zh: "不看稿講完為什麼、預期什麼、結果代表什麼", en: "Explained why, what was expected and what it meant, without notes" } }]
    },
    {
      id: "dry", track: "Dry", c: "blue", mark: "哲", markEn: "Z",
      name: { zh: "阿哲", en: "Zhe" }, role: { zh: "Dry 組 · 高二", en: "Dry group · second year of high school" },
      arc: { zh: "進來時程式很強，覺得生物只是要處理的資料。這一年的故事是一個作廢的模型，和第一次走進實驗室問人。", en: "Arrived strong at code, treating biology as data to process. Their year is a model that had to be thrown away, and the first walk into the lab to ask someone." },
      work: { zh: "模型測試", en: "Model tests" }, workLane: { zh: "模型", en: "Models" },
      leave: { "2026-12-26": "other", "2027-03-06": "exam", "2027-06-05": "exam", "2027-10-09": "exam" }, absent: ["2027-02-27"],
      cards: [...EARLY_CARDS.filter(d => d !== "2027-02-27"), "2027-03-20", "2027-04-10", "2027-05-01", "2027-06-19", "2027-07-24", "2027-08-21"],
      works: [...each("2027-03-27", "2027-06-26", [6]).filter((d, i) => i % 2 === 0), ...each("2027-07-06", "2027-08-10", [4]), ...each("2027-08-14", "2027-09-25", [6])],
      checks: [["2027-07-03", 4], ["2027-08-07", 6], ["2027-09-04", 6], ["2027-09-18", 3]],
      thanks: ["2027-04-24", "2027-06-12", "2027-07-15", "2027-08-05", "2027-08-28", "2027-09-11", "2027-09-25"],
      lab: [["2027-05-31", 2], ["2027-07-31", 8], ["2027-08-31", 4]],
      own: ["Model", "Software"], help: ["Hardware", "Wiki", "Education"],
      events: [
        { d: "2026-11-29", l: "research", t: { zh: "第一張閱讀卡", en: "First reading card" }, x: { zh: "選了一篇建模的論文，一句重點全是方法名稱。", en: "Chose a modelling paper. The key point was all method names." }, s: "Papers · L0011", by: stu },
        { d: "2027-02-20", l: "cross", f: "self", t: { zh: "第一次拿 pipette", en: "First time with a pipette" }, x: { zh: "訓練週末和 Wet 組一起上。手一直抖，做了三次才對。", en: "A training weekend alongside the Wet group. Hands shaking, and it took three tries." }, q: { zh: "這個月我第一次知道那些數字是有人一滴一滴做出來的。", en: "This month, for the first time, I understood those numbers are made drop by drop, by someone." }, s: "Training · CheckIns", by: stu },
        { d: "2027-02-27", l: "presence", f: "hold", p: 1, t: { zh: "第一次缺席，小組長問了一句", en: "First absence, and the group lead asks" }, x: { zh: "連假那週沒來，也沒有請假。小組長私下問一句，下週就回來了。", en: "Missed a long-weekend session without notice. The group lead quietly asked, and they were back next week." }, s: "CheckIns", by: { zh: "學生；小組長", en: "Student; group lead" } },
        { d: "2027-03-27", l: "own", f: "step", t: { zh: "開始承擔 Model", en: "Starts owning Model" }, x: { zh: "三月分組時自己提出要負責這條線，並寫下第一版要回答的問題。", en: "At the March grouping they asked to own this line, and wrote the first question it must answer." }, s: "Attribution", by: lead },
        { d: "2027-04-10", l: "work", t: { zh: "第一版模型", en: "First version of the model" }, x: { zh: "跑得很漂亮的曲線。預期欄寫的是「和文獻一致」。", en: "A beautiful curve. The expectation read 'matches the literature'." }, s: "Runs · R0058", by: stu },
        { d: "2027-05-22", l: "work", f: "fail", t: { zh: "模型作廢", en: "The model is thrown out" }, x: { zh: "Wet 組拿真實數據來比，差了十倍。兩個月的參數假設都要重來。把這件事照實寫進紀錄，也在週會上講了。", en: "The Wet group compared real data and it was ten times off. Two months of assumptions had to go. They recorded it as it was and said so at the group meeting." }, q: { zh: "這個月我第一次承認我根本不懂我在模擬的東西。", en: "This month, for the first time, I admitted I did not understand the thing I was modelling." }, s: "Runs · R0102 · Decisions · D0044", by: stu },
        { d: "2027-05-29", l: "cross", f: "link", t: { zh: "第一次走進實驗室問人", en: "First walk into the lab to ask" }, x: { zh: "跟 Wet 組借一個下午，看同學怎麼量，把每個步驟的誤差抄下來。之後每週都去。", en: "Borrowed an afternoon from the Wet group to watch how they measure and noted each step's error. Went back every week after." }, s: "CheckIns · Runs · R0117", by: stu },
        { d: "2027-06-19", l: "cross", f: "voice", t: { zh: "期中 review 被專家問倒", en: "Stumped by an expert at the mid-year review" }, x: { zh: "專家問這個假設憑什麼成立，答不出來。把問題寫進 Decisions，兩週後帶著答案回信。", en: "An expert asked what justified an assumption, and they had no answer. They put the question in Decisions and wrote back two weeks later with one." }, q: { zh: "被問倒比我想的好過。對方後來回信說這樣問才對。", en: "Being stumped was easier than I thought. The expert wrote back that this was the right question." }, s: "Decisions · D0061", by: scr },
        { d: "2027-07-15", l: "turn", f: "think", t: { zh: "自己提出換模型", en: "Proposes a different model" }, x: { zh: "第二版從實驗能量到的東西往回推，不再從漂亮的方程式開始。", en: "Version two works back from what the lab can measure, no longer starting from an elegant equation." }, s: "Runs · R0176", by: stu },
        { d: "2027-07-29", l: "media", t: { zh: "幫 Promotion Video 做動畫", en: "Animation for the Promotion Video" }, x: { zh: "把模型做成 20 秒動畫，第一次想「外行人看得懂嗎」。", en: "Turned the model into a 20-second animation, and first asked whether an outsider could follow it." }, s: "Attribution", by: { zh: "Video 負責人", en: "Video owner" } },
        { d: "2027-08-07", l: "turn", f: "think", t: { zh: "完成研究循環", en: "Research cycle finished" }, x: { zh: "用第二版預測一個條件，請 Wet 組驗證，預測對了方向。", en: "Used version two to predict a condition and asked the Wet group to test it. The direction was right." }, s: { zh: "研究循環卡 · R0211", en: "Cycle card · R0211" }, by: tch },
        { d: "2027-08-14", l: "turn", p: 1, f: "voice", t: { zh: "第三次口試", en: "Third oral check" }, x: { zh: "不看稿講清楚模型的假設、哪裡不確定、為什麼還是可以用。", en: "Explained the model's assumptions, what is uncertain and why it is still useful, without notes." }, s: "Assessment", by: tch },
        { d: "2027-08-28", l: "writing", t: { zh: "Model 頁第一次寫給非專業的人", en: "Model page written for non-specialists" }, x: { zh: "把頁面開頭改寫三次，請 HP 組同學讀，讀懂了才過。", en: "Rewrote the opening three times and asked an HP student to read it. It passed when they understood it." }, s: "Pages · Figures · F0044", by: { zh: "頁面負責人", en: "Page owner" } },
        { d: "2027-09-18", l: "own", f: "step", t: { zh: "接下 Software 這條線", en: "Takes on Software" }, x: { zh: "原本沒人負責。凍結前自己接下來，把模型整理成別人能用的工具。", en: "Nobody owned it. They took it on before the freeze and turned the model into a tool others can use." }, s: "Attribution", by: lead },
        { d: "2027-10-16", l: "cross", f: "link", t: { zh: "第二次 Mock：替 Wet 組回答", en: "Second mock: answers for the Wet group" }, x: { zh: "評審問實驗細節，是阿哲接的題，因為這半年一直在實驗室旁邊。", en: "Judges asked about bench detail and Zhe took the question, having spent six months beside the lab." }, s: "QA · Mock", by: sys },
        { d: "2027-11-27", l: "turn", t: { zh: "年鑑完成", en: "Yearbook finished" }, x: { zh: "老師和學生看過事實清單，學生寫完感言，老師署名。", en: "Instructor and student reviewed the facts, the student finished their words, the instructor signed." }, s: { zh: "個人研究紀錄", en: "Personal research record" }, by: tch }
      ],
      letters: [
        { d: "11/29", en: "29 Nov", t: { zh: "我來是想用程式解決真的問題。我怕生物太多要背，也不太想和別人一起做事。", en: "I came to use code on a real problem. I am afraid of how much biology there is to memorise, and I don't much like working with others." } },
        { d: "8/14", en: "14 Aug", t: { zh: "最難的是五月模型作廢。我花了兩個月證明一件不存在的事。那之後我每週都去實驗室。", en: "The hardest was May, when the model went. I had spent two months proving something that was not there. After that I went to the lab every week." } }
      ],
      words: { zh: "我以前覺得團隊是拖慢我的東西。五月模型作廢那天，是 Wet 組的同學拿數據來給我看，也是同學教我每個數字背後有多少誤差。現在我知道系統最容易壞的地方不在程式裡，在人和人之間。", en: "I used to think teams slowed me down. The day the model went in May, it was the Wet group who showed me the data, and who taught me how much error sits behind each number. I know now that systems break most easily not in the code but between people." },
      pairs: [
        { t: { zh: "閱讀卡的一句重點", en: "A reading card's key point" }, a: { zh: "「本文使用常微分方程與貝氏校正。」", en: "'This paper uses ODEs and Bayesian calibration.'" }, b: { zh: "「這篇的參數是在 37°C 量的，我們不能直接用，要請 Wet 組在我們的條件量一次。」", en: "'Their parameters were measured at 37°C. We cannot reuse them: the Wet group needs to measure in our conditions.'" }, s: "L0011 → L0233" },
        { t: { zh: "模型測試前寫的預期", en: "The expectation before a model test" }, a: { zh: "「和文獻一致。」", en: "'Matches the literature.'" }, b: { zh: "「如果這個假設對，溫度降 5 度時訊號應該掉一半；掉太多代表還少了一個步驟。」", en: "'If this assumption holds, a 5-degree drop should halve the signal. A bigger drop means a step is missing.'" }, s: "R0058 → R0176" }
      ],
      cycle: { zh: "問題：第二版模型能不能預測沒測過的條件？預期：方向對，數值差 30% 內。數據：R0211 與 Wet 組的 R0224。結論：方向對，數值差 45%。下一步：補一個降解項。兩人一組，和 Wet 組同學合作。", en: "Question: can version two predict an untested condition? Expected: right direction, within 30%. Data: R0211 and the Wet group's R0224. Conclusion: right direction, 45% off. Next: add a degradation term. Done as a pair with a Wet student." },
      peers: [{ zh: "「阿哲每週都來問我怎麼量，現在我們的表格兩組都看得懂。」", en: "'Zhe came every week to ask how I measure, and now both groups can read our sheet.'" }, { zh: "「我不懂模型，阿哲畫了三次圖給我看，直到我懂。」", en: "'I don't get models. Zhe drew it three times until I did.'" }, { zh: "「凍結前沒人接 Software，阿哲自己說我來。」", en: "'Nobody took Software before the freeze. Zhe just said I'll do it.'" }],
      teacher: { zh: "模型作廢那週的週會，阿哲第一個開口，說：「是我的假設錯了。」沒有人要求這樣說。", en: "At the group meeting the week the model went, Zhe spoke first and said: 'My assumption was wrong.' Nobody asked them to." },
      oral: [{ d: "3/6", en: "6 Mar", t: { zh: "能講方法，講不出為什麼選這個方法", en: "Could describe the method, not why it was chosen" } }, { d: "4/24", en: "24 Apr", t: { zh: "能講為什麼，假設的限制要提示", en: "Could say why; needed a prompt on the limits of the assumptions" } }, { d: "8/14", en: "14 Aug", t: { zh: "不看稿講清楚假設、不確定在哪、為什麼還能用", en: "Explained assumptions, uncertainty and why it is still useful, without notes" } }]
    },
    {
      id: "hp", track: "HP", c: "indigo", mark: "恩", markEn: "Y",
      name: { zh: "語恩", en: "Yu-en" }, role: { zh: "HP 組 · 高一", en: "HP group · first year of high school" },
      arc: { zh: "進來時很害羞，連發訊息問同學都要想很久，而 HP 的工作偏偏就是找人說話。這一年的故事是一封沒有回音的信，和一個改變專案的受訪者。", en: "Arrived shy, needing a long time to message even a classmate, in a group whose whole job is talking to people. Their year is an email nobody answered, and one interviewee who changed the project." },
      work: { zh: "對外互動", en: "Interactions" }, workLane: { zh: "對外", en: "Outreach" },
      leave: { "2027-01-16": "exam", "2027-03-20": "exam", "2027-05-22": "exam", "2027-06-12": "exam", "2027-09-18": "other" }, absent: ["2027-04-10", "2027-04-17"],
      cards: [...EARLY_CARDS.filter(d => d !== "2027-01-16"), "2027-03-27", "2027-05-01", "2027-06-05", "2027-07-10", "2027-08-07"],
      works: ["2027-03-27", "2027-05-01", "2027-05-08", "2027-05-29", "2027-06-19", "2027-07-03", "2027-07-10", "2027-07-20", "2027-07-31", "2027-08-05", "2027-08-14", "2027-08-21", "2027-09-04", "2027-09-11", "2027-09-25", "2027-10-09"],
      checks: [["2027-08-07", 2], ["2027-09-04", 4], ["2027-09-11", 3]],
      thanks: ["2027-03-13", "2027-05-29", "2027-07-10", "2027-07-31", "2027-08-21", "2027-09-11", "2027-09-25", "2027-10-02", "2027-10-16"],
      lab: [["2027-07-31", 5], ["2027-08-31", 2]],
      own: ["Education", "Outreach"], help: ["Entrepreneurship", "Video", "Lab"],
      events: [
        { d: "2026-11-29", l: "research", t: { zh: "第一張閱讀卡", en: "First reading card" }, x: { zh: "讀一份政府報告。小組輪講時聲音很小，講了 40 秒。", en: "A government report. In the small-group round their voice was quiet, and it lasted 40 seconds." }, s: "Papers · L0009", by: stu },
        { d: "2027-03-27", l: "work", f: "voice", t: { zh: "第一封邀訪信，沒有回音", en: "First interview email, no reply" }, x: { zh: "改了五次才敢寄。兩週沒有回音，以為是自己寫得不好。", en: "Rewrote it five times before daring to send. No reply for two weeks, and they assumed they had written it badly." }, q: { zh: "這個月我第一次寫信給不認識的大人。", en: "This month, for the first time, I wrote to an adult I do not know." }, s: "Interactions · I0004", by: stu },
        { d: "2027-04-17", l: "presence", p: 1, f: "hold", t: { zh: "連兩週沒來，老師約談", en: "Two weeks missing, and a talk with an instructor" }, x: { zh: "段考加上信一直沒有回音，開始不想來。小組長先問一句，老師再約談：不是催，是問發生什麼事。下一週就回來了。", en: "Exams, plus emails going unanswered, and they stopped wanting to come. The group lead asked first, then an instructor talked with them, asking what had happened rather than pushing. They were back the next week." }, q: { zh: "我以為沒來也沒人會發現。結果有人問我。", en: "I thought nobody would notice if I stopped coming. Someone asked." }, s: { zh: "CheckIns · 老師的內部紀錄", en: "CheckIns · instructor records" }, by: tch },
        { d: "2027-05-01", l: "own", f: "step", t: { zh: "開始幫忙 Education", en: "Starts helping on Education" }, x: { zh: "組長問誰能先做國中教案，舉了手。", en: "The lead asked who could start the junior high lesson, and they raised a hand." }, s: "Attribution", by: lead },
        { d: "2027-05-29", l: "work", f: "voice", t: { zh: "第一次訪談，手在抖", en: "First interview, shaking hands" }, x: { zh: "和同學一起訪談。訪綱全部照唸，但受訪者答應了第二次。", en: "An interview with a classmate. They read the questions word for word, but the interviewee agreed to a second meeting." }, s: "Interactions · I0011", by: stu },
        { d: "2027-06-19", l: "work", f: "see", t: { zh: "一句話改了專案的方向", en: "One sentence changes the project" }, x: { zh: "第一線使用者說：「你們做的我們買不起，也不會用。」語恩把這句話帶回週會，專案因此改了使用情境。", en: "A front-line user said: 'We can't afford what you are making, and we wouldn't know how to use it.' Yu-en brought that to the meeting, and the project changed its use case." }, q: { zh: "這個月我第一次覺得這個專案是為了某個真的人。", en: "This month, for the first time, this project felt like it was for a real person." }, s: "Interactions · I0017 → D0058", by: stu },
        { d: "2027-07-10", l: "media", t: { zh: "Promotion Video 的受訪片段", en: "Interview scenes for the Promotion Video" }, x: { zh: "負責約受訪者並確認同意，畫面裡的人都有同意紀錄。", en: "Arranged interviewees and confirmed consent. Everyone on camera has a consent record." }, s: "Attribution · Consent", by: { zh: "Video 負責人", en: "Video owner" } },
        { d: "2027-07-22", l: "cross", f: "link", t: { zh: "進實驗室學一個下午", en: "An afternoon learning in the lab" }, x: { zh: "為了能對外解釋實驗，請 Wet 組教基本操作，也幫同學把說明改成外行人懂的話。", en: "To explain the work outside, they asked the Wet group to teach the basics, and helped put the explanations into plain words." }, s: "LabHours · CheckIns", by: stu },
        { d: "2027-07-31", l: "own", f: "step", t: { zh: "Education 從幫忙變承擔", en: "Education: helper becomes owner" }, x: { zh: "三份教案都是語恩主導，階段更新時改成承擔。", en: "Yu-en led all three lesson plans, so the stage update made them owner." }, s: "Attribution", by: lead },
        { d: "2027-08-07", l: "turn", f: "think", t: { zh: "完成研究循環：一份問卷研究", en: "Research cycle finished: a survey study" }, x: { zh: "問教完一堂課後學生的想法有沒有改變。結果和預期相反，照實寫下來。", en: "Asked whether a lesson changed students' views. The result went against the expectation, and they wrote it up as it was." }, s: { zh: "研究循環卡 · I0024", en: "Cycle card · I0024" }, by: tch },
        { d: "2027-08-14", l: "turn", p: 1, f: "voice", t: { zh: "第三次口試", en: "Third oral check" }, x: { zh: "不看稿講完問卷為什麼這樣設計、結果代表什麼，沒有低頭。", en: "Explained the survey design and what the result meant without notes, and looked up the whole time." }, s: "Assessment", by: tch },
        { d: "2027-09-11", l: "writing", t: { zh: "HP 頁把受訪者的話放進去", en: "HP page carries interviewees' words" }, x: { zh: "每一句引述都核對過同意，並寫清楚專案因此改了什麼。", en: "Every quote was checked against consent, and the page says what changed because of it." }, s: "Pages · Consent", by: { zh: "頁面負責人", en: "Page owner" } },
        { d: "2027-09-25", l: "cross", f: "voice", t: { zh: "主持公開活動", en: "Hosts a public event" }, x: { zh: "站在台上開場，帶 40 位來賓。結束後同組同學說幾乎認不出來。", en: "Opened the event on stage and led 40 guests. A groupmate said afterwards they barely recognised them." }, q: { zh: "這個月我第一次是拿麥克風的那個人。", en: "This month, for the first time, I was the one holding the microphone." }, s: "Interactions · I0031", by: stu },
        { d: "2027-10-16", l: "cross", f: "see", t: { zh: "Mock：講那位受訪者的故事", en: "Mock: telling the interviewee's story" }, x: { zh: "評審問專案為什麼改方向，語恩講了六月那句話。", en: "Judges asked why the project changed direction, and Yu-en told them what was said in June." }, s: "QA · Mock", by: sys },
        { d: "2027-11-27", l: "turn", t: { zh: "年鑑完成", en: "Yearbook finished" }, x: { zh: "老師和學生看過事實清單，學生寫完感言，老師署名。", en: "Instructor and student reviewed the facts, the student finished their words, the instructor signed." }, s: { zh: "個人研究紀錄", en: "Personal research record" }, by: tch }
      ],
      letters: [
        { d: "11/29", en: "29 Nov", t: { zh: "我來是因為喜歡生物。我被分到要找人說話的組其實很怕，我連在班上舉手都不太敢。", en: "I came because I like biology. Honestly I am scared of a group that has to talk to people. I hardly dare raise my hand in class." } },
        { d: "8/14", en: "14 Aug", t: { zh: "最難的是四月，信都沒有回音，我不想來了。那時有人問我還好嗎。如果沒有人問，我應該就不會回來。", en: "The hardest was April: no emails answered, and I stopped wanting to come. Then someone asked if I was OK. If nobody had asked, I don't think I would have come back." } }
      ],
      words: { zh: "我還是很怕站上去，只是現在知道怕也可以做。六月有人跟我說「你們做的我們買不起」，那句話我記到現在，那天之後這個專案對我來說有了一張臉。謝謝四月那個問我還好嗎的人。", en: "I am still scared to stand up there. I just know now you can do it scared. In June someone told me 'we can't afford what you are making', and I still remember it. After that day this project had a face. Thank you to whoever asked if I was OK in April." },
      pairs: [
        { t: { zh: "互動後寫的「我們學到什麼」", en: "'What we learned' after an interaction" }, a: { zh: "「受訪者覺得我們的專案很有趣。」", en: "'The interviewee thought our project was interesting.'" }, b: { zh: "「對方買不起，也不會用。所以問題不是效果不夠好，是我們一開始就想錯了使用情境。」", en: "'They can't afford it and wouldn't know how to use it. So the issue isn't performance. We had the use case wrong from the start.'" }, s: "I0011 → I0017" },
        { t: { zh: "小組輪講", en: "The small-group round" }, a: { zh: "40 秒，聲音很小，唸完手機上的字。", en: "40 seconds, a quiet voice, reading off a phone." }, b: { zh: "不看稿講 3 分鐘，還多問了同學一個問題。", en: "3 minutes without notes, and then a question back to a classmate." }, s: "CheckIns · QA" }
      ],
      cycle: { zh: "問題：一堂課能不能改變國中生對這個議題的想法？預期：課後支持度會提高。數據：I0024 的前後測問卷。結論：支持度沒有明顯提高，但提問變多。下一步：改用問題開場。兩人一組完成。", en: "Question: can one lesson change how junior high students see this issue? Expected: support rises. Data: the pre- and post-surveys in I0024. Conclusion: no clear rise in support, but more questions asked. Next: open with a question. Done as a pair." },
      peers: [{ zh: "「語恩每次訪談前都幫我把問題再順一次。」", en: "'Yu-en went through the questions with me before every interview.'" }, { zh: "「語恩把我的實驗講得連我媽都聽懂。」", en: "'Yu-en explained my experiment so that even my mum got it.'" }, { zh: "「活動那天我緊張到不行，語恩一直在旁邊。」", en: "'I was so nervous on event day, and Yu-en stayed next to me.'" }],
      teacher: { zh: "公開活動那天開場前，語恩的手還在抖。然後語恩走上台，沒有拿稿。", en: "Before the public event opened, Yu-en's hands were still shaking. Then Yu-en walked on stage without notes." },
      oral: [{ d: "3/6", en: "6 Mar", t: { zh: "看著筆記講，聲音很小", en: "Read from notes, in a quiet voice" } }, { d: "4/24", en: "24 Apr", t: { zh: "能講為什麼要做這次訪談，不太敢看老師", en: "Could say why the interview mattered; found it hard to look up" } }, { d: "8/14", en: "14 Aug", t: { zh: "不看稿講完問卷的設計與結果代表什麼", en: "Explained the survey design and meaning, without notes" } }]
    }
  ];
  const TASK_C = { "Cloning": "pink", "Lab Notebook": "gold", "Education": "orange", "Video": "purple", "Art": "pink", "Model": "blue", "Software": "indigo", "Hardware": "teal", "Wiki": "gray", "Outreach": "green", "Entrepreneurship": "purple", "Lab": "teal" };
  const LANES = [
    { id: "own", c: "orange", n: { zh: "承擔", en: "Ownership" } },
    { id: "work", c: "teal", n: null },
    { id: "research", c: "purple", n: { zh: "閱讀", en: "Reading" } },
    { id: "cross", c: "blue", n: { zh: "跨組與開口", en: "Across, aloud" } },
    { id: "media", c: "pink", n: { zh: "影像美術", en: "Video, art" } },
    { id: "writing", c: "indigo", n: { zh: "寫作", en: "Writing" } },
    { id: "presence", c: "gray", n: { zh: "出席", en: "Attendance" } },
    { id: "turn", c: "gold", n: { zh: "階段", en: "Milestones" } }
  ];

  // ---------- rendering ----------
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "zh";
  const L = o => (o && typeof o === "object" ? o[lang] : o) || "";
  const t = k => T[lang][k] || "";
  const S = { p: 0, day: 0, sel: null, playing: false, seen: false, raf: 0, last: 0, view: "self", facet: null, drawn: -1 };
  const P = () => STUDENTS[S.p];
  const pct = n => (n / SPAN) * 100;
  const color = c => `var(--${c === "gray" ? "ink-3" : c})`;
  const fmt = s => {
    const x = new Date(s + "T00:00:00Z");
    return lang === "zh" ? `${x.getUTCFullYear()}/${x.getUTCMonth() + 1}/${x.getUTCDate()}` : x.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
  };
  const fmtS = s => {
    const x = new Date(s + "T00:00:00Z");
    return lang === "zh" ? `${x.getUTCMonth() + 1}/${x.getUTCDate()}` : x.toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
  };
  const upTo = (list, n) => list.filter(d => dayOf(d) <= n);
  function totals(p, n) {
    const sess = upTo(SESSIONS, n);
    const leave = sess.filter(d => p.leave[d]), absent = sess.filter(d => p.absent.includes(d));
    return {
      cards: upTo(p.cards, n).length, work: upTo(p.works, n).length,
      checks: p.checks.filter(([d]) => dayOf(d) <= n).reduce((a, [, c]) => a + c, 0), thanks: upTo(p.thanks, n).length,
      lab: p.lab.filter(([d]) => dayOf(d) <= n).reduce((a, [, h]) => a + h, 0),
      att: sess.length ? Math.round(((sess.length - leave.length - absent.length) / sess.length) * 100) : 0,
      sessions: sess.length, leave: leave.length, exam: leave.filter(d => p.leave[d] === "exam").length, absent: absent.length
    };
  }
  const facetChip = id => `<span class="jy-f" style="--c:${color(FACET[id].c)}">${esc(L(FACET[id].n))}</span>`;
  const tile = (label, v) => `<div class="jy-c"><b>${v}</b><span>${esc(label)}</span></div>`;

  function renderStatic() {
    const hth = t("jy.heard.th");
    $("#jy-heard-t").innerHTML = `<div class="jy-rows">${FACETS.map(f => `<article class="jy-rowf" style="--c:${color(f.c)}">
      <h3><i></i>${esc(L(f.n))}</h3><p class="jy-rowf__s">${esc(L(f.s))}</p><p class="jy-rowf__w"><span>${esc(hth[2])}</span>${esc(L(f.w))}</p></article>`).join("")}</div>`;
    $("#jy-demo").innerHTML = `<div class="jy-defs">
      <div><span class="jy-pill jy-pill--own" style="--c:var(--orange)"><i></i>Cloning</span><h3>${esc(t("jy.own.ownT"))}</h3><p>${esc(t("jy.own.ownD"))}</p></div>
      <div><span class="jy-pill" style="--c:var(--orange)">Cloning</span><h3>${esc(t("jy.own.helpT"))}</h3><p>${esc(t("jy.own.helpD"))}</p></div></div>`;
    $("#jy-ask").innerHTML = OWN_ASK.map((x, i) => `<li><span class="jy-n">${i + 1}</span><p>${esc(L(x))}</p></li>`).join("");
    $("#jy-fix").innerHTML = OWN_FIX.map(x => `<li><h4>${esc(L(x.t))}</h4><p>${esc(L(x.d))}</p></li>`).join("");
    $("#jy-l1").innerHTML = LAYER1.map(x => `<li>${esc(L(x))}</li>`).join("");
    $("#jy-l2").innerHTML = LAYER2.map(x => `<li><span class="jy-when">${esc(L(x.when))}</span><h4>${esc(L(x.t))}</h4><p>${esc(L(x.d))}</p></li>`).join("");
    const th = t("jy.th");
    $("#jy-dims").innerHTML = `<div class="dmwrap"><table class="dm dm--small jy-dims"><thead><tr>${th.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${DIMS.map(x => `<tr>
      <td data-label="${esc(th[0])}" class="dm__duty"><i class="jy-dot" style="--c:${color(x.c)}"></i>${esc(L(x.t))}</td>
      <td data-label="${esc(th[1])}">${esc(L(x.what))}</td><td data-label="${esc(th[2])}"><code>${esc(L(x.from))}</code></td>
      <td data-label="${esc(th[3])}">${esc(L(x.who))}</td></tr>`).join("")}</tbody></table></div>`;
    $("#jy-trust").innerHTML = PRINCIPLES.map(x => `<li>${esc(L(x))}</li>`).join("");
    const wth = t("jy.who.th");
    $("#jy-who").innerHTML = `<div class="dmwrap"><table class="dm dm--small jy-whot"><thead><tr>${wth.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${WHO_ROWS.map(r => `<tr><td data-label="${esc(wth[0])}" class="dm__duty">${esc(L(r[0]))}</td>${r.slice(1).map((v, i) => `<td data-label="${esc(wth[i + 1])}" class="${v ? "jy-yes" : "jy-no"}">${esc(t(v ? "jy.who.yes" : "jy.who.no"))}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }

  function studentTabs(sel) {
    $(sel).innerHTML = STUDENTS.map((p, i) => `<button role="tab" aria-selected="${S.p === i}" data-p="${i}" style="--c:${color(p.c)}"><i></i>${esc(p.track)} · ${esc(L(p.name))}</button>`).join("");
    $$(`${sel} button`).forEach(b => b.addEventListener("click", () => pick(+b.dataset.p, sel === "#jy-students")));
  }
  function pick(i, autoplay) {
    stop();
    S.p = i; S.sel = null; S.facet = null; S.day = REDUCE ? SPAN : 0;
    renderCase();
    renderBook();
    if (autoplay && !REDUCE) play(); else if (!REDUCE) { S.day = SPAN; paint(true); }
  }

  function renderCase() {
    const p = P();
    studentTabs("#jy-students");
    $("#jy-arc").innerHTML = `<div class="jy-tile" style="--c:${color(p.c)}">${esc(lang === "zh" ? p.mark : p.markEn)}</div><div><h3>${esc(L(p.name))}<small>${esc(L(p.role))}</small></h3><p>${esc(L(p.arc))}</p></div>`;
    renderChart();
    renderFacets();
  }
  function renderFacets() {
    const used = FACETS.filter(f => P().events.some(e => e.f === f.id));
    $("#jy-facets").innerHTML = `<span class="jy-facets__l">${esc(t("jy.facet.label"))}</span>` + [`<button aria-pressed="${!S.facet}" data-f="">${esc(t("jy.facet.all"))}</button>`,
      ...used.map(f => `<button aria-pressed="${S.facet === f.id}" data-f="${f.id}" style="--c:${color(f.c)}"><i></i>${esc(L(f.n))}</button>`)].join("");
    $$("#jy-facets button").forEach(b => b.addEventListener("click", () => {
      stop();
      S.facet = b.dataset.f || null;
      if (S.facet) { S.day = SPAN; S.sel = P().events.findIndex(e => e.f === S.facet); }
      renderFacets(); paint(true);
    }));
  }
  function renderChart() {
    const p = P();
    const months = Array.from({ length: 13 }, (_, i) => {
      const x = new Date(Date.UTC(2026, 11 + i, 1)); const n = dayOf(iso(x));
      if (n > SPAN) return "";
      const lab = lang === "zh" ? `${x.getUTCMonth() + 1}月` : x.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" });
      return `<span style="left:${pct(n)}%">${lab}</span>`;
    }).join("");
    const tick = (d, cls = "") => `<i class="jy-t ${cls}" data-d="${dayOf(d)}" style="left:${pct(dayOf(d))}%"></i>`;
    const ticks = {
      own: "", media: "", writing: "", turn: "",
      work: p.works.map(d => tick(d)).join(""), research: p.cards.map(d => tick(d)).join(""),
      cross: [...p.thanks.map(d => tick(d)), ...p.checks.map(([d]) => tick(d))].join(""),
      presence: SESSIONS.map(d => tick(d, p.leave[d] ? "jy-t--leave" : p.absent.includes(d) ? "jy-t--absent" : "")).join("")
    };
    $("#jy-chart").innerHTML = `<div class="jy-in">
      <div class="jy-row jy-row--axis"><span class="jy-lab"></span><div class="jy-tr jy-months">${months}</div></div>
      <div class="jy-row jy-row--stage"><span class="jy-lab"></span><div class="jy-tr">${STAGE_BAR.map(([a, b, n]) => `<span class="jy-st" style="left:${pct(dayOf(a))}%;width:${pct(dayOf(b)) - pct(dayOf(a))}%" title="${esc(L(n))}"><em>${esc(L(n))}</em></span>`).join("")}</div></div>
      ${LANES.map(l => `<div class="jy-row" style="--c:${color(l.id === "work" ? p.c : l.c)}"><span class="jy-lab">${esc(l.id === "work" ? L(p.workLane) : L(l.n))}</span><div class="jy-tr">${ticks[l.id]}${p.events.map((e, i) => e.l === l.id ? `<button class="jy-e${e.p ? " jy-e--p" : ""}" data-i="${i}" data-d="${dayOf(e.d)}" style="left:${pct(dayOf(e.d))}%${e.f ? `;--c:${color(FACET[e.f].c)}` : ""}" aria-label="${esc(fmtS(e.d))} ${esc(L(e.t))}" title="${esc(fmtS(e.d))} ${esc(L(e.t))}"></button>` : "").join("")}</div></div>`).join("")}
      <div class="jy-head" id="jy-head"></div>
    </div>`;
    $("#jy-legend").innerHTML = `<span><i class="jy-t jy-t--k"></i>${esc(t("jy.legend.tick"))}</span><span><i class="jy-e jy-e--k"></i>${esc(t("jy.legend.event"))}</span><span><i class="jy-e jy-e--k jy-e--p"></i>${esc(t("jy.legend.priv"))}</span><span><i class="jy-t jy-t--k jy-t--absent"></i>${esc(t("jy.legend.absent"))}</span>`;
    $$("#jy-chart .jy-e").forEach(b => b.addEventListener("click", () => { stop(); S.sel = +b.dataset.i; S.day = Math.max(S.day, +b.dataset.d); paint(true); }));
    $("#jy-range").setAttribute("aria-label", t("jy.scrub"));
    $("#jy-range").max = SPAN;
    S.drawn = -1;
    paint(true);
  }
  function paint(force) {
    const n = Math.floor(S.day), p = P();
    if (n === S.drawn && !force) return;
    S.drawn = n;
    $$("#jy-chart [data-d]").forEach(el => el.classList.toggle("on", +el.dataset.d <= n));
    const tr = $(".jy-in .jy-row:nth-child(3) .jy-tr");
    $("#jy-head").style.left = `${tr.offsetLeft + tr.offsetWidth * (n / SPAN)}px`;
    $("#jy-range").value = n;
    $("#jy-date").textContent = fmt(dateOf(n));
    const st = STAGE_BAR.find(([a, b]) => n >= dayOf(a) && n <= dayOf(b));
    $("#jy-stage").textContent = st ? L(st[2]) : "";
    const c = totals(p, n);
    $("#jy-counters").innerHTML = [[t("jy.c.cards"), c.cards], [L(p.work), c.work], [t("jy.c.checks"), c.checks], [t("jy.c.thanks"), c.thanks], [t("jy.c.lab"), `${c.lab}<small> h</small>`], [t("jy.c.att"), `${c.att}<small>%</small>`]].map(([l, v]) => tile(l, v)).join("");
    const latest = S.playing || S.sel === null ? p.events.map((e, i) => [dayOf(e.d), i]).filter(([d]) => d <= n).pop() : null;
    const idx = S.playing ? (latest ? latest[1] : null) : S.sel;
    renderDetail(idx, n);
    $("#jy-chart").classList.toggle("is-filter", !!S.facet);
    $$("#jy-chart .jy-e").forEach(b => {
      b.classList.toggle("is-sel", +b.dataset.i === idx);
      b.classList.toggle("is-match", !!S.facet && p.events[+b.dataset.i].f === S.facet);
    });
    $("#jy-play").setAttribute("aria-label", t(S.playing ? "jy.pause" : "jy.play"));
    $("#jy-play").innerHTML = S.playing ? `<svg viewBox="0 0 16 16"><path d="M5 3v10M11 3v10"/></svg>` : `<svg viewBox="0 0 16 16"><path d="M5 3v10l8-5z"/></svg>`;
  }
  function renderDetail(i, n) {
    const box = $("#jy-detail");
    const done = n >= SPAN ? `<p class="jy-done">${esc(t("jy.done"))} <a href="#jy-book-sec">↓</a></p>` : "";
    const key = `${S.p}|${i}|${!!done}|${lang}`;
    if (box.dataset.key === key) return;
    box.dataset.key = key;
    if (i === null || i === undefined || i < 0) { box.innerHTML = `<p class="jy-hintp">${esc(t("jy.hint"))}</p>`; return; }
    const e = P().events[i], lane = LANES.find(l => l.id === e.l), c = e.f ? FACET[e.f].c : (e.l === "work" ? P().c : lane.c);
    box.innerHTML = `<div class="jy-d" style="--c:${color(c)}">
      <div class="jy-d__main"><p class="jy-d__k">${esc(fmt(e.d))}</p><h3>${esc(L(e.t))}</h3><p class="jy-d__x">${esc(L(e.x))}</p>
      ${e.q ? `<blockquote class="jy-q"><span>${esc(t("jy.said"))}</span>${esc(L(e.q))}</blockquote>` : ""}</div>
      <div class="jy-d__side">${e.f ? facetChip(e.f) : ""}<dl><div><dt>${esc(t("jy.src"))}</dt><dd><code>${esc(L(e.s))}</code></dd></div><div><dt>${esc(t("jy.by"))}</dt><dd>${esc(L(e.by))}</dd></div>
      <div><dt>${esc(t("jy.vis"))}</dt><dd>${esc(t(e.p ? "jy.vis.self" : "jy.vis.all"))}</dd></div></dl></div></div>${done}`;
  }

  // ---------- yearbook ----------
  function renderBook() {
    const p = P(), c = totals(p, SPAN), self = S.view === "self";
    studentTabs("#jy-book-students");
    $("#jy-views").innerHTML = ["self", "team"].map(v => `<button role="tab" aria-selected="${S.view === v}" data-v="${v}">${esc(t("jy.view." + v))}</button>`).join("");
    $$("#jy-views button").forEach(b => b.addEventListener("click", () => { S.view = b.dataset.v; renderBook(); }));
    const turns = p.events.filter(e => e.f && (self || !e.p));
    const nums = [[t("jy.c.cards"), c.cards], [L(p.work), c.work], [t("jy.c.checks"), c.checks], [t("jy.c.thanks"), c.thanks], [t("jy.c.lab"), `${c.lab} h`], [t("jy.c.att"), `${c.att}%`]];
    const pill = (name, own) => `<span class="jy-pill${own ? " jy-pill--own" : ""}" style="--c:${color(TASK_C[name] || "ink-3")}">${own ? "<i></i>" : ""}${esc(name)}</span>`;
    const mark = esc(lang === "zh" ? p.mark : p.markEn);
    $("#jy-book").innerHTML = `
      <header class="yb__head" style="--c:${color(p.c)}">
        <div class="yb__shots">${["shot1", "shot2", "shot3"].map((k, i) => `<figure class="yb__shot yb__shot--${i + 1}"><div>${i === 0 ? mark : ""}</div><figcaption>${esc(t("jy.yb." + k))}</figcaption></figure>`).join("")}</div>
        <div class="yb__id"><p class="yb__kicker">${esc(t("jy.yb.title"))}</p>
          <h3>${esc(L(p.name))}<em>${esc(t("jy.yb.fake"))}</em></h3><p class="yb__role">${esc(L(p.role))}</p>
          <div class="yb__pills"><span class="yb__pl">${esc(t("jy.yb.own"))}</span>${p.own.map(x => pill(x, true)).join("")}</div>
          <div class="yb__pills"><span class="yb__pl">${esc(t("jy.yb.help"))}</span>${p.help.map(x => pill(x, false)).join("")}</div>
        </div>
      </header>
      <section class="yb__sec yb__words"><h4>${esc(t("jy.yb.words"))}</h4><p>${esc(L(p.words))}</p></section>
      <section class="yb__sec"><h4>${esc(t("jy.yb.turns"))}</h4><ol class="yb__turns">${turns.map(e => `<li><time>${esc(fmtS(e.d))}</time><div>${facetChip(e.f)}<b>${esc(L(e.t))}</b>${e.q ? `<blockquote>${esc(L(e.q))}</blockquote>` : ""}</div></li>`).join("")}</ol></section>
      <section class="yb__sec"><h4>${esc(t("jy.yb.growth"))}</h4>${p.pairs.map(x => `<div class="yb__pair"><h5>${esc(L(x.t))}<code>${esc(x.s)}</code></h5><div><figure><figcaption>${esc(t("jy.yb.before"))}</figcaption><blockquote>${esc(L(x.a))}</blockquote></figure><figure><figcaption>${esc(t("jy.yb.after"))}</figcaption><blockquote>${esc(L(x.b))}</blockquote></figure></div></div>`).join("")}</section>
      <section class="yb__sec"><h4>${esc(t("jy.yb.peers"))}</h4><ul class="yb__peers">${p.peers.map(x => `<li>${esc(L(x))}</li>`).join("")}</ul></section>
      <section class="yb__sec"><h4>${esc(t("jy.yb.cycle"))}</h4><p>${esc(L(p.cycle))}</p></section>
      ${self ? `<section class="yb__sec yb__sec--self"><span class="yb__only">${esc(t("jy.yb.onlyself"))}</span>
        <h4>${esc(t("jy.yb.teacher"))}</h4><blockquote class="yb__teacher">${esc(L(p.teacher))}</blockquote>
        <h4>${esc(t("jy.yb.letters"))}</h4><ol class="yb__oral">${p.letters.map(o => `<li><time>${esc(lang === "zh" ? o.d : o.en)}</time><span>${esc(L(o.t))}</span></li>`).join("")}</ol>
        <h4>${esc(t("jy.yb.oral"))}</h4><ol class="yb__oral">${p.oral.map(o => `<li><time>${esc(lang === "zh" ? o.d : o.en)}</time><span>${esc(L(o.t))}</span></li>`).join("")}</ol>
        <h4>${esc(t("jy.yb.leave"))}</h4><p>${lang === "zh" ? `排定 ${c.sessions} 次，到場 ${c.sessions - c.leave - c.absent} 次，請假 ${c.leave} 次（其中考試 ${c.exam} 次），缺席 ${c.absent} 次。` : `${c.sessions} scheduled, ${c.sessions - c.leave - c.absent} present, ${c.leave} on leave (${c.exam} for exams), ${c.absent} absent.`}</p></section>` : ""}
      <section class="yb__sec"><h4>${esc(t("jy.yb.nums"))}</h4><div class="yb__nums">${nums.map(([l, v]) => `<div><b>${v}</b><span>${esc(l)}</span></div>`).join("")}</div></section>
      <footer class="yb__foot"><p>${esc(t("jy.yb.sign"))}</p><p class="yb__sign">${esc(t("jy.yb.signline"))}</p></footer>`;
  }

  // ---------- playback ----------
  const SPEED = SPAN / 34000; // the whole year in about 34 s
  function frame(now) {
    if (!S.playing) return;
    S.day = Math.min(SPAN, S.day + (now - S.last) * SPEED); S.last = now;
    paint();
    if (S.day >= SPAN) { stop(); S.sel = P().events.length - 1; paint(true); return; }
    S.raf = requestAnimationFrame(frame);
  }
  function play() {
    if (S.day >= SPAN) S.day = 0;
    S.playing = true; S.seen = true; S.sel = null; S.last = performance.now();
    if (S.facet) { S.facet = null; renderFacets(); }
    paint(true);
    S.raf = requestAnimationFrame(frame);
  }
  function stop() { S.playing = false; cancelAnimationFrame(S.raf); if ($("#jy-play") && $(".jy-in")) paint(true); }

  let bound = false;
  function bind() {
    if (bound) return; bound = true;
    $("#jy-play").addEventListener("click", () => (S.playing ? stop() : play()));
    $("#jy-range").addEventListener("input", e => { const v = +e.target.value; stop(); S.seen = true; S.sel = null; S.day = v; paint(true); });
    $("#jy-print").addEventListener("click", () => window.print());
    addEventListener("resize", () => { if ($(".jy-in")) paint(true); });
    if (REDUCE) { S.day = SPAN; S.sel = P().events.length - 1; return; }
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
    renderCase();
    renderBook();
    $("#jy-print").textContent = t("jy.print");
  }
  return { render, _state: S, _totals: totals, _span: SPAN, _students: STUDENTS, _facets: FACETS, _pick: pick };
})();
