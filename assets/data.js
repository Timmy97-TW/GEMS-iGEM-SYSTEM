// All page content, in both languages. app.js renders from here.
const T = {
  zh: {
    "nav.problems": "問題", "nav.audit": "健檢", "nav.arch": "架構", "nav.depth": "結構",
    "nav.people": "人力", "nav.advisor": "Advisor", "nav.time": "時程", "nav.facts": "事實表", "nav.std": "標準化", "nav.flow": "流程",
    "flow.eyebrow": "流程",
    "flow.title": "一份檔案的一生。",
    "flow.sub": "跟著三個例子走一次：一張照片、一個數字、一張手繪。每一步都看得到它在哪個資料夾、誰經手、Hub 表多了什麼。",
    "flow.step": "步驟", "flow.who": "經手", "flow.file": "檔案", "flow.state": "狀態",
    "flow.prev": "上一步", "flow.next": "下一步", "flow.play": "播放", "flow.pause": "暫停",
    "flow.owners": "管理",
    "hero.eyebrow": "GEMS Taiwan · iGEM 2027",
    "hero.title": "一套系統。<br>五個交付物。",
    "hero.sub": "2026 年花在找檔案、對數字、重做頁面的時間，2027 年還給研究。",
    "stat.people": "人", "stat.streams": "條素材流", "stat.registers": "張 Hub 表", "stat.deadlines": "項 iGEM 交付",

    "prob.eyebrow": "2026 回顧",
    "prob.title": "今年的系統，<br>壞在哪裡。",
    "prob.sub": "十二件事，全部來自今年的 wiki 原始碼、Google Drive 和工作紀錄。",

    "audit.eyebrow": "2026 Drive 健檢",
    "audit.title": "16,191 個項目，<br>103 GB。",
    "audit.sub": "逐一讀過 2026 年共用資料夾的每個檔名、大小和日期，沒有打開任何檔案。",
    "audit.photos": "照片散在六個地方",
    "audit.photos.note": "張圖片。光是 Gallery 裡面就有三套分類方式。",
    "audit.size": "103 GB 裡面是什麼",
    "audit.hw": "Bioreactor 出現在四個地方",
    "audit.keep": "值得留下的做法",

    "arch.eyebrow": "架構",
    "arch.title": "五條素材流，<br>一張 Hub 表，<br>五個交付物。",
    "arch.sub": "素材只登記一次，在 Hub 表的對應分頁。交付物只引用 ID，不複製。",
    "arch.col.streams": "素材流", "arch.col.registers": "Hub 表分頁", "arch.col.deliverables": "交付物",
    "lbl.intake": "入口", "lbl.steward": "負責", "lbl.fields": "欄位", "lbl.output": "輸出",
    "lbl.rule": "規則", "lbl.feeds": "來源", "lbl.deadline": "截止",
    "lbl.edit": "可編輯", "lbl.holds": "內容", "lbl.time": "每週", "lbl.from": "2026 年的來源",

    "depth.eyebrow": "結構",
    "depth.title": "固定的骨架，<br>每年換的專案。",
    "depth.sub": "頂層資料夾每年都一樣。只有 Projects 底下的子資料夾跟著當年的題目換。",
    "depth.tree": "2027 Google Drive",
    "depth.states": "每份文件只有一個狀態欄，檔名不寫版本。審稿是一個動作，不是一個狀態；簽核的判斷責任在 instructor。",
    "depth.template": "四個隊伍資料夾，裡面都是同一套",

    "ppl.eyebrow": "人力",
    "ppl.title": "五十個人，<br>各顧一件事。",
    "ppl.sub": "13 個學生管理員：每條素材流有人顧，每個隊伍資料夾有人顧。instructor 做驗證、範本和 Advisor 驗收，其餘時間開發。",
    "ppl.students": "學生", "ppl.advisors": "學生 advisor", "ppl.staff": "Instructor 與 Ops",
    "ppl.note": "每週時數為估計值。30 個學生全部都是 page owner，各負責 1–2 頁 wiki。Advisor 的角色、時數與驗收負擔見 <a href=\"#advisor\">Advisor 計畫</a>。",

    "adv.eyebrow": "Advisor 計畫",
    "adv.title": "從參與者，<br>到 advisor。",
    "adv.sub": "2026 隊員在 2027 隊伍裡的下一步。時數只是底線，Team Roster 的資格來自每個階段經 instructor 驗收的實質產出。",
    "adv.source": "規則整理自 2027 Advisor 參與同意書 v3。資料夾、檔名、範本與表格欄位是系統提案。標為「待決定」的地方同意書沒有寫，要先定案才能運作。",
    "adv.floor": "每個月的底線",
    "adv.floor.note": "達到底線不等於通過考核。暑期集訓（7/1–8/10）的實體時數改為至少 6 天、48 小時，不另計每月實體時數。Wiki freeze 後維持每月 8 小時，並至少參加 2 次模擬 judging。離台就學後，實體時數可改以線上完成。",
    "adv.stages": "五個階段",
    "adv.stages.note": "時間軸與下方時程同一把尺。Freeze、Judging 依 2026 iGEM 時程為參考，以 iGEM 公布為準。",
    "adv.map": "每件事放哪裡",
    "adv.map.sub": "每位 advisor 只有兩個入口：自己的資料夾放檔案，一張 ADV-F1 表單交連結。Ops 硬碟學生看不到，所以由表單寫進 Advisor Register。A01 代表 advisor 編號。主責 instructor 的指派 <a class=\"tbd\" href=\"#adv-tbd\">待決定 11</a>",
    "adv.th.duty": "項目", "adv.th.loc": "存放或輸入位置", "adv.th.file": "檔名", "adv.th.tpl": "範本", "adv.th.who": "提交", "adv.th.ver": "驗證", "adv.th.due": "期限", "adv.th.row": "Register 列",
    "adv.tree": "一位 advisor 的資料夾",
    "adv.tree.note": "隊伍要用的成果（例如 101、wiki 章節）放在隊伍的家（31–34、50 Deliverables），S 資料夾只放 Drive 捷徑，並在表單交同一個連結。不複製。",
    "adv.state": "資格怎麼走",
    "adv.state.sub": "點任何一格看條件。虛線框表示有待決定的規則。",
    "adv.makeup": "補件期限", "adv.makeup.th": ["階段", "階段結束", "補件期限", "補件後仍未通過"],
    "adv.strike": "Strike", "adv.strike.on": "這些情況會記", "adv.strike.off": "這些情況不記", "adv.strike.how": "怎麼記",
    "adv.hub": "Project Hub 怎麼顯示",
    "adv.hub.sub": "未來的 Hub 從 Advisor Register 即時讀取，同一份資料依身分顯示不同欄位。這個公開網站不放真實資料。",
    "adv.hub.sample": "示範資料。Advisor A–E 不是真實的人，時間點假設在 2027 年 5 月。",
    "adv.hub.queue": "待處理：月報待確認 2 · 補件將到期 1 · strike 待雙簽 0",
    "adv.hub.th": { name: "Advisor", group: "組別", scope: "本階段具名範圍", stages: "S1–S5", hours: "本月實體", rate: "組別會議累計", report: "月報", strikes: "Strike", latest: "最新產出" },
    "adv.hub.legend": "✓ 通過　● 進行中　補 補件中　✗ 補件後未過　· 未開始",
    "adv.hub.pick": "點一列看這位 advisor 本月的底線。",
    "adv.schema": "來源表的欄位", "adv.schema.note": "Advisor Register 放在 ReLEAF Ops，一位 advisor、一個階段或一個月各一列。Hub 的 Advisors 分頁只用 IMPORTRANGE 帶公開欄位。",
    "adv.vis": "誰看得到什麼", "adv.vis.note": "這張表是提案，同意書只規定書面結果和 strike 要給學生與家長。● 可見　○ 只看摘要　書面：不經 Hub，由 GEMS 交付　– 看不到",
    "adv.load": "Instructor 的驗收負擔", "adv.load.sub": "次數來自同意書，每次分鐘數是估計值。週六到場指導、補件複審和 strike 處理不計入。",
    "adv.load.th": ["工作", "全年次數", "每次（估計）", "全年時數"],
    "adv.load.total": "全年合計", "adv.load.week": "兩位驗收 instructor 平均每人每週", "adv.load.peak": "階段結束時的尖峰（考核加書面）",
    "adv.tbd": "待決定", "adv.tbd.sub": "同意書沒有寫、系統運作又需要答案的地方。",

    "time.eyebrow": "時程",
    "time.title": "從截止日<br>往回排。",
    "time.sub": "日期以 2026 年 iGEM 時程為參考，2027 年公布後更新。",
    "lane.deadline": "iGEM 截止", "lane.gate": "素材到位", "lane.adv": "Advisor 階段", "lane.ritual": "固定節奏",

    "facts.eyebrow": "事實表",
    "facts.title": "每個事實，<br>只有一個家。",
    "facts.sub": "wiki、影片、展板、簡報都連到同一張表，不抄數字。建置時由腳本檢查每一頁。",
    "facts.lint": "建置檢查（示意）",

    "std.eyebrow": "Wiki 標準化",
    "std.title": "範本寫一次，<br>內容填一整年。",
    "std.sub": "instructor 一次寫好範本、轉換器和檢查腳本。學生只填 Google Docs 和 Hub 表，頁面由程式產生。",
    "std.now": "2026", "std.next": "2027",

    "foot.line": "GEMS Taiwan iGEM · 2027 系統設計草案 · 依 2026 年的經驗與 Drive 健檢整理"
  },
  en: {
    "nav.problems": "Problems", "nav.audit": "Audit", "nav.arch": "Architecture", "nav.depth": "Structure",
    "nav.people": "People", "nav.advisor": "Advisors", "nav.time": "Timeline", "nav.facts": "Facts", "nav.std": "Standards", "nav.flow": "Flow",
    "flow.eyebrow": "Flow",
    "flow.title": "The life of a file.",
    "flow.sub": "Follow three examples through the system: a photo, a number, a drawing. Each step shows the folder, the person, and what the Hub sheet gains.",
    "flow.step": "Step", "flow.who": "Handled by", "flow.file": "File", "flow.state": "State",
    "flow.prev": "Previous step", "flow.next": "Next step", "flow.play": "Play", "flow.pause": "Pause",
    "flow.owners": "Owners",
    "hero.eyebrow": "GEMS Taiwan · iGEM 2027",
    "hero.title": "One system.<br>Five deliverables.",
    "hero.sub": "The hours 2026 spent finding files, checking numbers and rebuilding pages go back to research in 2027.",
    "stat.people": "people", "stat.streams": "asset streams", "stat.registers": "Hub sheet", "stat.deadlines": "iGEM deliverables",

    "prob.eyebrow": "2026 in review",
    "prob.title": "Where this year’s<br>system broke.",
    "prob.sub": "Twelve problems, each taken from this year’s wiki source, Google Drive and work log.",

    "audit.eyebrow": "2026 Drive audit",
    "audit.title": "16,191 items.<br>103 GB.",
    "audit.sub": "Every name, size and date in the 2026 shared folder, read without opening a single file.",
    "audit.photos": "Photos lived in six places",
    "audit.photos.note": "images. Gallery alone used three different filing schemes.",
    "audit.size": "What the 103 GB is",
    "audit.hw": "The bioreactor lived in four places",
    "audit.keep": "Worth keeping",

    "arch.eyebrow": "Architecture",
    "arch.title": "Five streams.<br>One Hub sheet.<br>Five deliverables.",
    "arch.sub": "Every asset is logged once, on its tab of the Hub sheet. Deliverables cite IDs and never copy.",
    "arch.col.streams": "Streams", "arch.col.registers": "Hub sheet tabs", "arch.col.deliverables": "Deliverables",
    "lbl.intake": "Intake", "lbl.steward": "Owner", "lbl.fields": "Fields", "lbl.output": "Output",
    "lbl.rule": "Rule", "lbl.feeds": "Draws on", "lbl.deadline": "Due",
    "lbl.edit": "Edited by", "lbl.holds": "Holds", "lbl.time": "Per week", "lbl.from": "From 2026",

    "depth.eyebrow": "Structure",
    "depth.title": "A fixed skeleton.<br>Projects that change.",
    "depth.sub": "The top-level folders are the same every year. Only the subfolders under Projects change with the year’s topic.",
    "depth.tree": "2027 Google Drive",
    "depth.states": "Each document carries one status field. File names never carry a version. Review is an action, not a state, and the sign-off judgement stays with the instructor.",
    "depth.template": "All four team folders share one template",

    "ppl.eyebrow": "People",
    "ppl.title": "Fifty people.<br>Each owns one thing.",
    "ppl.sub": "Thirteen student stewards: one for every stream and every team folder. Instructors verify, keep templates and review advisors, and spend the rest of their time on development.",
    "ppl.students": "Students", "ppl.advisors": "Student advisors", "ppl.staff": "Instructors & Ops",
    "ppl.note": "Weekly hours are estimates. All 30 students are page owners, each responsible for one or two wiki pages. Advisor roles, hours and verification load are in the <a href=\"#advisor\">Advisor programme</a>.",

    "adv.eyebrow": "Advisor programme",
    "adv.title": "From participant<br>to advisor.",
    "adv.sub": "The next step for 2026 members on the 2027 team. Hours are only the floor; a Team Roster place comes from real output that an instructor has accepted at each stage.",
    "adv.source": "Rules are taken from the 2027 Advisor consent form, v3. Folders, file names, templates and register columns are the system’s proposal. Anything marked TBD is not in the form and has to be settled before this can run.",
    "adv.floor": "The monthly floor",
    "adv.floor.note": "Meeting the floor does not mean passing a review. During the summer intensive (1 Jul–10 Aug) the on-site floor becomes at least 6 days and 48 hours, with no separate monthly on-site hours. After wiki freeze: 8 hours a month and at least 2 mock judging sessions. After leaving Taiwan for school, on-site hours may be done online.",
    "adv.stages": "Five stages",
    "adv.stages.note": "The track uses the same scale as the timeline below. Freeze and Judging follow the 2026 iGEM calendar until iGEM announces 2027.",
    "adv.map": "Where everything goes",
    "adv.map.sub": "Each advisor has two entry points: their own folder for files, and one form, ADV-F1, for links. Students cannot see the Ops drive, so the form is what writes to the Advisor Register. A01 stands for the advisor ID. Assigning lead instructors: <a class=\"tbd\" href=\"#adv-tbd\">TBD 11</a>",
    "adv.th.duty": "Item", "adv.th.loc": "Stored or entered at", "adv.th.file": "File name", "adv.th.tpl": "Template", "adv.th.who": "Submits", "adv.th.ver": "Verifies", "adv.th.due": "Due", "adv.th.row": "Register row",
    "adv.tree": "One advisor’s folder",
    "adv.tree.note": "Work the team uses (a 101, a wiki section) lives in the team’s home (31–34, 50 Deliverables). The S folder holds a Drive shortcut and the form gets the same link. Nothing is copied.",
    "adv.state": "How qualification moves",
    "adv.state.sub": "Click any box for its conditions. A dashed box has a rule still to be decided.",
    "adv.makeup": "Make-up deadlines", "adv.makeup.th": ["Stage", "Stage ends", "Make-up due", "If it still fails"],
    "adv.strike": "Strikes", "adv.strike.on": "These count", "adv.strike.off": "These never count", "adv.strike.how": "How one is recorded",
    "adv.hub": "How the Project Hub shows it",
    "adv.hub.sub": "The future Hub reads the Advisor Register live and shows different columns to different people. This public site never holds real data.",
    "adv.hub.sample": "Sample data. Advisors A–E are not real people. The date is assumed to be May 2027.",
    "adv.hub.queue": "To do: 2 reports to confirm · 1 make-up nearly due · 0 strikes awaiting signatures",
    "adv.hub.th": { name: "Advisor", group: "Group", scope: "Named scope this stage", stages: "S1–S5", hours: "On-site this month", rate: "Group meetings to date", report: "Report", strikes: "Strikes", latest: "Latest output" },
    "adv.hub.legend": "✓ passed   ● in progress   M make-up   ✗ failed after make-up   · not started",
    "adv.hub.pick": "Click a row for this advisor’s floor this month.",
    "adv.schema": "Source register columns", "adv.schema.note": "The Advisor Register sits in ReLEAF Ops, with one row per advisor, per stage or per month. The Hub’s Advisors tab pulls public columns only, through IMPORTRANGE.",
    "adv.vis": "Who sees what", "adv.vis.note": "This table is a proposal. The form only requires written results and strikes to reach students and parents. ● visible   ○ summary only   Written: delivered by GEMS outside the Hub   – hidden",
    "adv.load": "Instructor verification load", "adv.load.sub": "Counts come from the form; minutes per item are estimates. Saturday supervision, make-up re-reviews and strike handling are not included.",
    "adv.load.th": ["Work", "A year", "Each (est.)", "Hours a year"],
    "adv.load.total": "Year total", "adv.load.week": "Average per week, each of two verifying instructors", "adv.load.peak": "Peak at each stage end (reviews and written results)",
    "adv.tbd": "To be decided", "adv.tbd.sub": "Where the form is silent and the system still needs an answer.",

    "time.eyebrow": "Timeline",
    "time.title": "Planned backwards<br>from the deadlines.",
    "time.sub": "Dates follow the 2026 iGEM calendar and will be updated when 2027 is announced.",
    "lane.deadline": "iGEM deadlines", "lane.gate": "Assets ready", "lane.adv": "Advisor stages", "lane.ritual": "Routines",

    "facts.eyebrow": "Fact sheet",
    "facts.title": "Every fact<br>has one home.",
    "facts.sub": "The wiki, the videos, the booth and the slides all link to one sheet and never copy a number. The build checks every page against it.",
    "facts.lint": "Build check (illustration)",

    "std.eyebrow": "Wiki standards",
    "std.title": "Write the template once.<br>Fill it all year.",
    "std.sub": "Instructors write the templates, converters and checks once. Students fill Google Docs and the Hub sheet, and the pages are generated.",
    "std.now": "2026", "std.next": "2027",

    "foot.line": "GEMS Taiwan iGEM · 2027 system design draft · drawn from the 2026 season and its Drive audit"
  }
};

const PROBLEMS = [
  { t: { zh: "找不到最新版", en: "Nobody knew which version was latest" },
    d: { zh: "同一份內容有多份副本，學生的 docx 一版一版寄來。", en: "The same content lived in several copies; student drafts arrived as one docx after another." } },
  { t: { zh: "資料夾依「誰做的」分", en: "Folders sorted by who made things" },
    d: { zh: "Bioreactor 出現在四個資料夾；硬體沒有自己的家，散在 Drylab、Wetlab 和 Research Integration。", en: "The bioreactor appears in four folders; hardware had no home and was split across Drylab, Wetlab and Research Integration." } },
  { t: { zh: "數字前後不一", en: "Numbers disagreed across pages" },
    d: { zh: "同一個數字抄進好幾頁；freeze 當天還發現一張圖的單位差了 1000 倍。", en: "One number was copied into several pages; on freeze day a chart was still found 1000× off." } },
  { t: { zh: "名稱沒有統一", en: "Names had no canon" },
    d: { zh: "BoPEP4、BoPep4、Bopep4 在 wiki 裡分別出現 265、257、22 次。", en: "BoPEP4, BoPep4 and Bopep4 appear 265, 257 and 22 times across the wiki." } },
  { t: { zh: "到十月才收斂", en: "Everything converged in October" },
    d: { zh: "wiki 的形狀最後才出現。每交一版新 docx，頁面就重做一次，全年超過 20 次。", en: "The wiki’s shape appeared last. Each new docx meant rebuilding a page, more than 20 times this year." } },
  { t: { zh: "每頁自己發明元件", en: "Every page invented its own parts" },
    d: { zh: "超過 15 種 figure 寫法、約 15 種 CSS 組合、23 段頁內樣式。", en: "Over 15 figure markups, about 15 stylesheet mixes and 23 inline style blocks." } },
  { t: { zh: "照片散在六個地方", en: "Photos lived in six places" },
    d: { zh: "4,173 張圖分散在 Gallery、Wiki Pages、Wetlab 等六處；Gallery 裡就有三套分類，八月還改過一次。", en: "4,173 images spread across Gallery, Wiki Pages, Wetlab and three more; Gallery alone had three schemes, one changed in August." } },
  { t: { zh: "圖沒有原檔", en: "Figures without masters" },
    d: { zh: "定稿時，有些圖找不到高解析度原檔。", en: "At sign-off, some figures had no high-resolution original." } },
  { t: { zh: "美術到位太晚", en: "Artwork arrived late" },
    d: { zh: "頁面先用佔位圖，學生的畫到十月才換上。", en: "Pages ran on placeholders until the students’ drawings arrived in October." } },
  { t: { zh: "影片腳本改到最後", en: "Video scripts changed to the end" },
    d: { zh: "presentation video 截止前十天，還在替換腳本段落。", en: "Ten days before the presentation video was due, script blocks were still being replaced." } },
  { t: { zh: "決策散在聊天裡", en: "Decisions lived in chat" },
    d: { zh: "新舊規格文件互相矛盾，沒有人標記哪一份已被取代。", en: "Old and new spec documents contradicted each other, and none was marked superseded." } },
  { t: { zh: "聊天紀錄難以保存", en: "Chat history was fragile" },
    d: { zh: "分成兩個 Discord 伺服器；匯出靠第三方工具；所有權沒有交接機制。", en: "Two Discord servers, exports through a third-party tool, and no handover of ownership." } }
];

// 2026 Drive audit, read from metadata only on 29 Oct 2026.
const AUDIT = {
  stats: [
    { n: "75 GB", t: { zh: "是影片，佔 73%", en: "is video, 73% of it" } },
    { n: "1,508", t: { zh: "個空資料夾", en: "empty folders" } },
    { n: "316", t: { zh: "份重複檔案，共 12.6 GB", en: "duplicate copies, 12.6 GB" } },
    { n: "447", t: { zh: "個檔名寫著 Copy of、(1)、final", en: "file names with Copy of, (1) or final" } },
    { n: "1,411", t: { zh: "個項目是 Python 虛擬環境", en: "items inside a Python virtual env" } },
    { n: "20", t: { zh: "個頂層資料夾從沒放過檔案", en: "top folders that never held a file" } },
    { n: "5", t: { zh: "種日期寫法", en: "date formats in folder names" } },
    { n: "10", t: { zh: "層最深的路徑", en: "levels in the deepest path" } }
  ],
  photos: [
    { k: "Gallery", n: 1560 }, { k: "Wiki Pages", n: 1399 }, { k: "1. Wetlab", n: 717 },
    { k: "2. Drylab", n: 193 }, { k: "Presentation Video", n: 155 }, { k: "3. Human Practice", n: 149 }
  ],
  size: [
    { k: { zh: "影片", en: "Video" }, gb: 75.0, c: "pink" },
    { k: { zh: "圖片", en: "Images" }, gb: 15.2, c: "orange" },
    { k: { zh: "模擬與資料", en: "Simulation & data" }, gb: 6.4, c: "blue" },
    { k: { zh: "其他", en: "Everything else" }, gb: 6.6, c: "gray" }
  ],
  hw: [
    "*Research Integration / Bioreactor",
    "1. Wetlab / Experiment Data / Bioreactor",
    "2. Drylab / CAD files / Bioreactor Models",
    "Presentation Video / #6 Hardware"
  ],
  keep: [
    { zh: "質體序列依 part 類型分：cds、promoter、rbs、terminator。", en: "Plasmid sequences filed by part type: cds, promoter, rbs, terminator." },
    { zh: "Presentation 素材依腳本段落編號：#1 開場到 #10 片尾。", en: "Presentation clips numbered by script section, #1 opening to #10 credits." },
    { zh: "濕實驗訓練與作業依日期命名。", en: "Wet-lab training and homework named by date." },
    { zh: "照片依月份歸檔，檔名帶日期與組別。", en: "Photos filed by month, names carrying date and team." }
  ]
};

// Architecture graph. Columns: streams -> Hub sheet tabs -> deliverables.
const STREAMS = [
  { id: "media", color: "orange", to: ["media"],
    name: { zh: "照片與影片", en: "Photos & footage" },
    intake: { zh: "Discord #photo-drop 或 Google 表單。上傳時只寫一句：誰、在做什麼。影片另有每月 shot list。", en: "Discord #photo-drop or a Google Form, one line on upload: who, doing what. Footage follows a monthly shot list." },
    steward: { zh: "素材管理員 ×2，每週 1.5 小時", en: "Media stewards ×2, 1.5 h a week" },
    rule: { zh: "只依月份歸檔。沒有肖像同意，不得用在任何交付物。剪完的原始影片移到 Archive。", en: "Filed by month only. No portrait consent, no use. Raw footage moves to Archive once edited." } },
  { id: "figures", color: "blue", to: ["figreg"],
    name: { zh: "圖表", en: "Figures" },
    intake: { zh: "共用的 matplotlib／Prism 樣式。繪圖程式放 GitHub，Drive 只放輸出的 SVG 與 PNG。", en: "One shared matplotlib/Prism style. Plotting code lives on GitHub; Drive keeps the SVG and PNG." },
    steward: { zh: "圖表編輯 ×2（濕、乾各一），每週 1 小時", en: "Figure editors ×2 (wet and dry), 1 h a week" },
    rule: { zh: "證據圖不得由 AI 生成。定稿前必須對照事實。", en: "Evidentiary figures are never AI-made, and are checked against the facts before sign-off." } },
  { id: "art", color: "purple", to: ["artreg"],
    name: { zh: "美術", en: "Art" },
    intake: { zh: "依 Hub 表美術分頁的需求清單作畫。手繪以 600 dpi 掃描，再向量化。", en: "Drawn to the art backlog on the Hub sheet. Hand drawings scanned at 600 dpi, then vectorised." },
    steward: { zh: "美術與設計 ×2，每週 2 小時", en: "Art & design leads ×2, 2 h a week" },
    rule: { zh: "品牌包與吉祥物設定稿在二月前完成。", en: "Brand kit and mascot sheet finished by February." } },
  { id: "facts", color: "green", to: ["factsheet"],
    name: { zh: "事實", en: "Facts" },
    intake: { zh: "任何人都可以提案，但必須附上來源連結。", en: "Anyone may propose a fact, with a link to its source." },
    steward: { zh: "事實與 Registry 管理員 ×2；instructor 簽核", en: "Facts & Registry stewards ×2; instructor signs off" },
    rule: { zh: "改一個已凍結的數字，要走審核並標記取代。", en: "Changing a frozen number goes through review and is marked superseded." } },
  { id: "records", color: "teal", to: ["parts", "factsheet"],
    name: { zh: "實驗紀錄", en: "Lab records" },
    intake: { zh: "四個隊伍資料夾的 Records 與 Data。固定範本，raw data 上傳後不可修改。", en: "Records and Data in the four team folders. Fixed templates; raw data is read-only once uploaded." },
    steward: { zh: "隊伍資料夾負責人 ×4", en: "Team folder owners ×4" },
    rule: { zh: "只能新增，不能改寫過去的紀錄。程式碼與虛擬環境一律不進 Drive。", en: "Append only. Code and virtual environments never go in Drive." } }
];

const REGISTERS = [
  { id: "media", to: ["promo", "wiki", "jamboree", "pres"],
    name: { zh: "素材分頁", en: "Media tab" },
    fields: { zh: "日期、組別、活動、主題、品質 1–3 星、肖像同意、用在哪裡、攝影者", en: "Date, team, event, theme, quality 1–3, portrait consent, used in, photographer" },
    output: { zh: "篩選即是最新圖庫。wiki 和影片引用照片的 ID，不再複製一份。", en: "A filter is the latest gallery. The wiki and videos cite photo IDs instead of copying." } },
  { id: "figreg", to: ["wiki", "jamboree", "registry", "pres"],
    name: { zh: "圖表分頁", en: "Figures tab" },
    fields: { zh: "圖 ID、原始資料、GitHub 程式、n 與統計、圖說、證據或示意、狀態、使用位置", en: "Figure ID, raw data, GitHub script, n and stats, caption, evidence or illustration, status, used in" },
    output: { zh: "wiki 的 figure 元件與圖說由這裡產生。", en: "Generates the wiki’s figure component and caption." } },
  { id: "artreg", to: ["promo", "wiki", "jamboree", "pres"],
    name: { zh: "美術分頁", en: "Art tab" },
    fields: { zh: "作品 ID、需求、作者、原檔、用途", en: "Artwork ID, backlog item, artist, master, use" },
    output: { zh: "Attributions Form 直接從這裡匯出。", en: "The Attributions Form exports straight from it." } },
  { id: "factsheet", to: ["promo", "wiki", "jamboree", "registry", "pres"],
    name: { zh: "事實分頁", en: "Facts tab" },
    fields: { zh: "ID、類型、陳述、數值、單位、條件、來源、驗證人、狀態、取代", en: "ID, type, statement, value, unit, conditions, source, verifier, status, supersedes" },
    output: { zh: "建置時自動檢查每一頁的數字與名稱。", en: "The build checks every number and name on every page." } },
  { id: "parts", to: ["registry", "wiki"],
    name: { zh: "Parts 分頁", en: "Parts tab" },
    fields: { zh: "BBa 編號、負責人、序列檔、圖 ID、發布狀態", en: "BBa ID, owner, sequence file, figure IDs, publication status" },
    output: { zh: "Registry 是唯一來源；wiki 的 parts 表由 API 產生。", en: "The Registry is the source; the wiki parts table comes from its API." } }
];

const DELIVERABLES = [
  { id: "promo", due: "8/12",
    name: { zh: "Promo Video", en: "Promo Video" },
    rule: { zh: "腳本、分鏡、shot list，每個鏡頭連到素材分頁的 ID。腳本 7/15 鎖定。", en: "Script, storyboard and shot list, each shot citing a media ID. Script locked 15 Jul." } },
  { id: "wiki", due: "10/21",
    name: { zh: "Wiki", en: "Wiki" },
    rule: { zh: "一頁一份 master doc，章節等於最終頁面的標題。只有 page owner 改，其他人留言。", en: "One master doc per page, sections equal to the final headings. Only the page owner edits; others comment." } },
  { id: "jamboree", due: "9/16",
    name: { zh: "Jamboree：展位、Stage Talk、評審", en: "Jamboree: booth, talk, judging" },
    rule: { zh: "主視覺與吉祥物 8/31 定稿。展板上的數字只取自事實分頁。", en: "Key visual and mascot final by 31 Aug. Every number on the booth comes from the Facts tab." } },
  { id: "registry", due: "10/21",
    name: { zh: "Parts Registry", en: "Parts Registry" },
    rule: { zh: "共用的說明寫在 collection 文件，不在每個 part 重複。", en: "Shared documentation lives in the collection, not on every part." } },
  { id: "pres", due: "10/28",
    name: { zh: "Presentation Video", en: "Presentation Video" },
    rule: { zh: "素材依腳本段落編號（沿用 2026 的 #1–#10）。腳本 10/7 鎖定。", en: "Clips numbered by script section (the 2026 #1–#10 habit). Script locked 7 Oct." } }
];

// The 2027 Drive. kids: subfolders. from: where the 2026 content came from.
const TEAM_TEMPLATE = ["SOP", "Records", "Data / Raw", "Data / Processed", "Literature", "Meetings", "Projects / 2027 …"];

const DRIVE = [
  { id: "d00", name: "00 Start Here", drive: "team", kind: "every",
    kids: ["Handbook", "Hub sheet", "Calendar", "Glossary", "Drive template"],
    holds: { zh: "新人手冊、Hub 表（所有分頁，含 Advisors 分頁）、行事曆、術語表、下一年的資料夾範本", en: "Handbook, the Hub sheet with all its tabs including Advisors, calendar, glossary, next year’s folder template" },
    edit: { zh: "Ops", en: "Ops" },
    rule: { zh: "頂層不放任何零散檔案。新人第一週只讀這裡。", en: "No loose files at the top. A newcomer’s first week starts here." },
    from: ["10 12 meeting notes", "Attendance sheets ×2", "(new)"] },
  { id: "d10", name: "10 Training", drive: "team", kind: "every",
    kids: ["YYYYMMDD Classes", "Recordings", "Lab reports", "Question bank"],
    holds: { zh: "課程投影片、錄影、作業與實驗報告、題庫", en: "Class slides, recordings, homework and lab reports, question bank" },
    edit: { zh: "Instructor；學生交作業", en: "Instructors; students hand in" },
    rule: { zh: "全部以 YYYYMMDD 開頭。", en: "Everything starts with YYYYMMDD." },
    from: ["0. Class Material", "Class Recordings", "1. Wetlab / Homework Discussion", "*Administration / Exam and Question Bank"] },
  { id: "d20", name: "20 Topic", drive: "team", kind: "every",
    kids: ["Proposals", "Top 5", "Final proposal"],
    holds: { zh: "十二月到一月的選題：個人提案、前五名、最終提案", en: "December to January topic selection: proposals, top five, final proposal" },
    edit: { zh: "全隊", en: "Everyone" },
    rule: { zh: "題目定案後整個資料夾凍結。", en: "Frozen as a whole once the topic is chosen." },
    from: ["*iGEM 2026 HW Submission", "*Research Integration（多半是空的）"] },
  { id: "d31", name: "31 Wetlab", drive: "team", kind: "team",
    kids: ["SOP", "Records", "Data", "Sequences", "Literature", "Meetings", "Projects"],
    holds: { zh: "協定、電子實驗紀錄、實驗資料、質體序列、文獻、會議", en: "Protocols, lab notebook, data, plasmid sequences, literature, meetings" },
    edit: { zh: "濕實驗隊；資料夾負責人 ×1", en: "Wet-lab team; folder owner ×1" },
    rule: { zh: "Sequences 沿用 2026 依 part 類型分的做法。", en: "Sequences keep the 2026 split by part type." },
    from: ["1. Wetlab", "Plasmid sequences", "Lab Reports / Electronic Lab Note", "Meeting with …（三個會議資料夾）"] },
  { id: "d32", name: "32 Drylab", drive: "team", kind: "team",
    kids: ["SOP", "Records", "Data", "Literature", "Meetings", "Projects"],
    holds: { zh: "模型、模擬、分析的紀錄與資料。程式碼只放連結。", en: "Records and data for models, simulations and analysis. Code is linked, not stored." },
    edit: { zh: "乾實驗隊；資料夾負責人 ×1", en: "Dry-lab team; folder owner ×1" },
    rule: { zh: "超過 1 GB 的模擬輸出壓縮成一個檔。.venv、__pycache__ 不進 Drive。", en: "Simulation output over 1 GB is zipped into one file. No .venv or __pycache__." },
    from: ["2. Drylab（Protectant Mutation、Drylab Data、Data Physicalization）", "4. Software（空的）"] },
  { id: "d33", name: "33 Hardware", drive: "team", kind: "team",
    kids: ["SOP", "Records", "Data", "Meetings", "Projects / 2027 <device> / CAD · Build · Test"],
    holds: { zh: "每個裝置一個專案資料夾：CAD、組裝文件、測試資料", en: "One project folder per device: CAD, build documents, test data" },
    edit: { zh: "硬體隊；資料夾負責人 ×1", en: "Hardware team; folder owner ×1" },
    rule: { zh: "裝置每年換，Hardware 資料夾每年都在。2026 的 Bioreactor 變成 Projects/2026 Bioreactor 後歸檔。", en: "Devices change, the Hardware folder stays. 2026’s bioreactor becomes Projects/2026 Bioreactor and is archived." },
    from: ["2. Drylab / CAD files", "2. Drylab / LPA、Hydroponic system", "1. Wetlab / Experiment Data / Bioreactor", "*Research Integration / Bioreactor"] },
  { id: "d34", name: "34 Human Practices", drive: "team", kind: "team",
    kids: ["SOP", "Records", "Education", "IHP", "Outreach", "Business", "Meetings", "Projects"],
    holds: { zh: "教育、整合式人文實踐、對外拜訪、商業、活動", en: "Education, integrated human practices, outreach visits, business, events" },
    edit: { zh: "HP 隊；資料夾負責人 ×1", en: "HP team; folder owner ×1" },
    rule: { zh: "會議錄音轉成文字稿後，錄音移到 Archive。", en: "Meeting recordings move to Archive once transcribed." },
    from: ["3. Human Practice", "Outreach slides"] },
  { id: "d40", name: "40 Media", drive: "team", kind: "every",
    kids: ["Photos / YYYY-MM", "Footage / YYYY-MM", "Figures", "Art & Brand", "Portraits"],
    holds: { zh: "全隊唯一的照片、影片素材、圖表、美術與品牌", en: "The team’s only home for photos, footage, figures, art and brand" },
    edit: { zh: "素材、圖表、美術管理員", en: "Media, figure and art stewards" },
    rule: { zh: "資料夾只分月份，其他分類都寫在 Hub 表。不預先開空的週資料夾。", en: "Folders by month only; every other dimension lives in the Hub sheet. No pre-made weekly folders." },
    from: ["Gallery（三套分類）", "Wiki Pages 裡的 1,399 張圖", "5. Art、Biorender（幾乎是空的）", "3. Human Practice / Team Gallery、Logo design"] },
  { id: "d50", name: "50 Deliverables", drive: "team", kind: "every",
    kids: ["Wiki", "Promo Video", "Presentation Video / #1–#10", "Jamboree", "Registry", "Forms"],
    holds: { zh: "每個交付物的 master doc、腳本與素材清單", en: "Each deliverable’s master doc, script and asset list" },
    edit: { zh: "交付物負責人、page owner", en: "Deliverable owners, page owners" },
    rule: { zh: "只引用 ID 與連結，不複製照片或數字。", en: "Cites IDs and links; never copies a photo or a number." },
    from: ["Wiki Pages", "6. Project Promotion Video", "Presentation Video", "Paris Prep", "Deliverables（2 個檔案）"] },
  { id: "d60", name: "60 Advisors", drive: "team", kind: "every",
    kids: ["_Templates", "_Advisor Meeting", "_Mock Judging", "A01 … / S1–S5 · Meetings · Reports"],
    holds: { zh: "每位 advisor 一個固定資料夾：五個階段的產出、自主會議紀錄、月報。範本與全體會議紀錄放在 _ 開頭的資料夾。", en: "One fixed folder per advisor: five stages of output, self-run meeting minutes, monthly reports. Templates and all-advisor records sit in the folders that start with _." },
    edit: { zh: "每位 advisor 只寫自己的資料夾；instructor", en: "Each advisor writes only their own folder; instructors" },
    rule: { zh: "資料夾只用 advisor 編號，不用姓名。隊伍要用的成果放隊伍的家，這裡只放捷徑。", en: "Folders use the advisor ID, never a name. Work the team uses lives in the team’s home; this folder holds a shortcut." },
    from: ["(new)"] },
  { id: "d90", name: "90 Archive", drive: "team", kind: "every",
    kids: ["Raw footage", "Frozen PDFs", "2026"],
    holds: { zh: "剪完的原始影片、凍結的 PDF、往年資料", en: "Raw footage after editing, frozen PDFs, past seasons" },
    edit: { zh: "唯讀；Ops 搬入", en: "Read only; Ops moves things in" },
    rule: { zh: "freeze 後跑一次 Drive 健檢，再把每份 master doc 匯出成 PDF。", en: "After freeze: run the Drive audit, then export every master doc as PDF." },
    from: ["Presentation Video / Not usable", "Gallery / Others（未標記）"] },
  { id: "ops", name: "ReLEAF Ops", drive: "ops", kind: "ops",
    kids: ["Finance", "Consent forms", "Official documents", "Instructor meetings", "Advisors"],
    holds: { zh: "財務、同意書、邀請函與票券、instructor 會議、advisor 考核文件", en: "Finance, consent forms, invitations and tickets, instructor meetings, advisor review papers" },
    edit: { zh: "Instructor 與 Ops", en: "Instructors & Ops" },
    rule: { zh: "獨立的共用雲端硬碟，學生看不到。", en: "A separate shared drive that students cannot see." },
    from: ["Official document", "*Administration"] },
  { id: "opsadv", name: "ReLEAF Ops / Advisors", drive: "ops", kind: "ops",
    kids: ["_Templates", "Advisor Register", "Clock-in", "Reviews / A01 …", "Strikes", "Roster", "Records"],
    holds: { zh: "考核的來源資料：Advisor Register、打卡匯出、書面結果、strike 紀錄、Roster 審核、證書與貢獻紀錄", en: "The source of record: Advisor Register, clock-in exports, written results, strike records, Roster review, certificates and contribution records" },
    edit: { zh: "Instructor 與 Ops", en: "Instructors & Ops" },
    rule: { zh: "編號與真實姓名的對照只在這裡。Hub 的 Advisors 分頁只帶公開欄位過去，不反向寫入。", en: "The map from ID to real name lives only here. The Hub’s Advisors tab pulls public columns one way and never writes back." },
    from: ["Advisors（空的）"] },
  { id: "git", name: "GitHub / GitLab", drive: "out", kind: "out",
    kids: ["digital-twin", "sensors", "docking", "wiki"],
    holds: { zh: "所有程式碼、分析腳本、韌體", en: "All code, analysis scripts, firmware" },
    edit: { zh: "乾實驗、硬體隊", en: "Dry-lab and hardware teams" },
    rule: { zh: "Drive 只放連結。2026 有 1,411 個虛擬環境檔案和 1,341 個空資料夾來自程式碼。", en: "Drive holds only links. In 2026, code brought 1,411 virtual-env items and 1,341 empty folders." },
    from: ["2. Drylab / Digital Twin", "2. Drylab / Stress Index / AIoT Sensors", "Docking scripts"] }
];

const LAYERS = [
  { n: "00–20", name: { zh: "每年都有", en: "Every year" }, d: { zh: "Start Here、Training、Topic、Media、Deliverables、Advisors、Archive。名稱和位置年年一樣。", en: "Start Here, Training, Topic, Media, Deliverables, Advisors, Archive. Same names, same places, every year." } },
  { n: "31–34", name: { zh: "四個隊伍", en: "Four teams" }, d: { zh: "Wetlab、Drylab、Hardware、HP。裡面同一套範本。", en: "Wet lab, dry lab, hardware, HP. One template inside each." } },
  { n: "Projects", name: { zh: "當年的題目", en: "This year’s topic" }, d: { zh: "Bioreactor、BoPEP4 這類只活一年的東西，只能放在隊伍的 Projects 底下。", en: "Things that live one season, like the bioreactor or BoPEP4, sit only under a team’s Projects." } }
];

const STATES = [
  { name: { zh: "草稿", en: "Draft" }, d: { zh: "任何人可改", en: "Anyone edits" } },
  { name: { zh: "定稿", en: "Final" }, d: { zh: "instructor 簽核；具名範圍內的 advisor 可先留審查紀錄", en: "Instructor signed; an advisor with named scope may leave review notes first" } },
  { name: { zh: "凍結", en: "Frozen" }, d: { zh: "匯出 PDF 進 Archive", en: "Exported to Archive as PDF" } }
];

// People. tier: s = student, a = advisor, i = instructor/ops. count = seats.
const ROLES = [
  { id: "photo", tier: "s", count: 2, color: "orange", hrs: "1.5 h",
    name: { zh: "素材管理員", en: "Media steward" },
    d: { zh: "照片與影片：改檔名、依月歸檔、填素材分頁、追肖像同意、每月 shot list。", en: "Photos and footage: rename, file by month, fill the Media tab, chase consent, monthly shot list." } },
  { id: "figure", tier: "s", count: 2, color: "blue", hrs: "1 h",
    name: { zh: "圖表編輯", en: "Figure editor" },
    d: { zh: "維護樣式範本、給圖 ID、確認原檔與圖說。", en: "Keep the style template, assign IDs, check masters and captions." } },
  { id: "art", tier: "s", count: 2, color: "purple", hrs: "2 h",
    name: { zh: "美術與設計", en: "Art & design lead" },
    d: { zh: "品牌包、吉祥物、美術需求清單、展板。", en: "Brand kit, mascot, art backlog, booth." } },
  { id: "fact", tier: "s", count: 2, color: "green", hrs: "1–3 h",
    name: { zh: "事實與 Registry", en: "Facts & Registry" },
    d: { zh: "一人管事實分頁與術語表，一人管 Parts 分頁與 Registry；九月起加重。", en: "One keeps the Facts tab and glossary, one the Parts tab and Registry; heavier from September." } },
  { id: "folder", tier: "s", count: 4, color: "teal", hrs: "0.5 h",
    name: { zh: "隊伍資料夾負責人", en: "Team folder owner" },
    d: { zh: "Wetlab、Drylab、Hardware、HP 各一位。每週日 15 分鐘清掃：檔名、位置、不放程式碼。", en: "One each for wet lab, dry lab, hardware, HP. A 15-minute Sunday sweep: names, places, no code." } },
  { id: "discord", tier: "s", count: 1, color: "indigo", hrs: "0.5 h",
    name: { zh: "Discord 版主", en: "Discord moderator" },
    d: { zh: "頻道秩序、每週匯出、決策轉進 Hub 表的決策分頁。", en: "Channel order, weekly export, decisions copied to the Hub sheet." } },
  { id: "owner", tier: "s", count: 17, color: "gray", hrs: "1 h",
    name: { zh: "Page owner", en: "Page owner" },
    d: { zh: "每人負責 1–2 頁 wiki 的 master doc。管理員也同時是 page owner。", en: "Each owns one or two wiki master docs. Stewards are page owners too." } },
  { id: "advisor", tier: "a", count: 8, countLabel: "5–10", color: "gold",
    hrsLabel: { zh: "平時每月約 13–15 小時，不含製作產出", en: "About 13–15 h a month, not counting output" },
    name: { zh: "Student Advisor", en: "Student Advisor" },
    d: { zh: "沒有固定席位。五個階段依序是探路者、制度建立者、TA、TA 加工作線負責人、把關者，每階段與 instructor 確認具名範圍。判斷責任在 instructor。", en: "No fixed seats. Five stages in turn: pathfinder, systems builder, TA, TA and workline lead, gatekeeper, with named scope agreed with an instructor before each. The judgement stays with the instructor." } },
  { id: "verify", tier: "i", count: 3, color: "ink", hrs: "1 h",
    name: { zh: "事實驗證", en: "Fact verification" },
    d: { zh: "濕實驗、乾實驗、硬體各一位，簽核事實與證據圖。", en: "One each for wet lab, dry lab and hardware; sign off facts and evidentiary figures." } },
  { id: "tmpl", tier: "i", count: 1, color: "ink", hrs: "2 h",
    name: { zh: "範本與腳本", en: "Templates & scripts" },
    d: { zh: "頁面範本、docs 轉 HTML、建置檢查、Drive 健檢。", en: "Page templates, Docs-to-HTML, build checks, the Drive audit." } },
  { id: "ops", tier: "i", count: 2, color: "ink", hrs: "1 h",
    name: { zh: "Ops", en: "Ops" },
    d: { zh: "Drive 與 Discord 所有權、同意書、財務、Archive。", en: "Drive and Discord ownership, consent forms, finance, Archive." } },
  { id: "advreview", tier: "i", count: 2, color: "ink", hrs: "≈1 h",
    name: { zh: "Advisor 驗收", en: "Advisor verification" },
    d: { zh: "確認範圍與月報、主持階段考核、寫書面結果、strike 雙簽。階段結束時有尖峰，人選待決定。", en: "Confirm scope and reports, run stage reviews, write results, co-sign strikes. Peaks at each stage end. Who serves is to be decided." } },
  { id: "dev", tier: "i", count: 4, color: "ink2", hrs: "0 h",
    name: { zh: "專心開發", en: "Development only" },
    d: { zh: "不分配管理職責。這就是整套系統的目的。", en: "No management duties. This is what the system is for." } }
];

// Timeline. Dates are 2026–27 season positions, using the 2026 iGEM calendar.
const TIMELINE = [
  { date: "2026-12-13", lane: "gate", t: { zh: "開季", en: "Kick-off" },
    d: { zh: "從 00 Start Here 的範本複製出整個 Drive；分派角色；Hub 表與 Discord 建好。", en: "The whole Drive copied from the template in 00 Start Here; roles assigned; Hub sheet and Discord set up." } },
  { date: "2027-01-30", lane: "gate", t: { zh: "題目定案", en: "Topic chosen" },
    d: { zh: "1/30 當天或之前決定唯一題目。20 Topic 凍結；各隊在 Projects 底下開當年的專案資料夾。", en: "One topic decided on or before 30 Jan. 20 Topic frozen; each team opens this year’s project folders under Projects." } },
  { date: "2027-01-31", lane: "gate", t: { zh: "master doc 全部開好", en: "All master docs open" },
    d: { zh: "每個交付物有骨架和評審標準；兩支影片各有一頁故事線。", en: "Every deliverable has a skeleton and its judging criteria; each video has a one-page story." } },
  { date: "2027-02-28", lane: "gate", t: { zh: "品牌包與吉祥物", en: "Brand kit & mascot" },
    d: { zh: "配色、字型、logo、吉祥物設定稿、插畫風格指南。", en: "Palette, type, logo, mascot sheet, illustration guide." } },
  { date: "2027-06-15", lane: "gate", t: { zh: "事實 v1", en: "Facts v1" },
    d: { zh: "專案描述定稿，核心事實已簽核。", en: "Project description final; core facts signed off." } },
  { date: "2027-06-24", lane: "deadline", t: { zh: "Village & Project Info", en: "Village & Project Info" },
    d: { zh: "取自事實 v1。", en: "Drawn from facts v1." } },
  { date: "2027-07-15", lane: "gate", t: { zh: "Promo 素材到位", en: "Promo assets in" },
    d: { zh: "照片與 B-roll 達到配額，腳本鎖定；每頁 wiki 內容七成。", en: "Photo and B-roll quotas met, script locked; every wiki page 70% written." } },
  { date: "2027-08-12", lane: "deadline", t: { zh: "Promo Video", en: "Promo Video" },
    d: { zh: "", en: "" } },
  { date: "2027-08-31", lane: "gate", t: { zh: "主視覺定稿", en: "Key visual final" },
    d: { zh: "吉祥物、主視覺、展板版面。", en: "Mascot, key visual, booth layout." } },
  { date: "2027-09-09", lane: "gate", t: { zh: "只修改，不新增", en: "Revise only" },
    d: { zh: "freeze 前六週，不再開新章節。", en: "Six weeks before freeze; no new sections." } },
  { date: "2027-09-16", lane: "deadline", t: { zh: "Expo Booth · Stage Talk", en: "Expo Booth · Stage Talk" },
    d: { zh: "", en: "" } },
  { date: "2027-09-30", lane: "gate", t: { zh: "圖定稿，事實凍結", en: "Figures final, facts frozen" },
    d: { zh: "之後改數字要走審核。", en: "Any later change goes through review." } },
  { date: "2027-10-07", lane: "deadline", t: { zh: "Safety Form", en: "Safety Form" },
    d: { zh: "同日：presentation 腳本鎖定。", en: "Same day: presentation script locked." } },
  { date: "2027-10-21", lane: "deadline", t: { zh: "Wiki freeze", en: "Wiki freeze" },
    d: { zh: "Wiki、Registry、Software、Judging Form、Attributions。", en: "Wiki, Registry, Software, Judging Form, Attributions." } },
  { date: "2027-10-28", lane: "deadline", t: { zh: "Presentation Video", en: "Presentation Video" },
    d: { zh: "", en: "" } },
  { date: "2027-11-01", lane: "gate", t: { zh: "健檢與交接", en: "Audit & handover" },
    d: { zh: "跑一次 Drive 健檢；master doc 匯出 PDF；Projects 移到 Archive；範本更新給下一屆。", en: "Run the Drive audit; export master docs as PDF; move Projects to Archive; update the template for next season." } },
  { date: "2027-11-13", lane: "deadline", t: { zh: "Judging Session", en: "Judging Session" },
    d: { zh: "", en: "" } },
  { date: "2026-11-30", lane: "adv", dl: { zh: "11 月底", en: "Late Nov" }, t: { zh: "Advisor 任期開始", en: "Advisor term starts" },
    d: { zh: "比全隊開季早約兩週。任期到 Jamboree 結束。", en: "About two weeks before team kick-off. The term runs to the end of the Jamboree." } },
  { date: "2027-07-01", lane: "adv", dl: { zh: "第 3 階段後", en: "After stage 3" }, t: { zh: "Lead Advisor", en: "Lead Advisor" },
    d: { zh: "Instructor 可依實際表現選出，名額不固定，也可以從缺。", en: "Instructors may choose one on actual performance. No fixed number, and it may stay empty." } },
  { date: "2027-08-31", lane: "adv", dl: { zh: "8 月底（預計）", en: "Late Aug (planned)" }, t: { zh: "Roster 審核", en: "Roster review" },
    d: { zh: "前四階段全部通過且未滿 3 個 strike，才登錄 iGEM 官方 Team Roster。", en: "All of stages 1–4 passed and fewer than 3 strikes, or no entry on the official iGEM Team Roster." } }
];

const RITUALS = [
  { t: { zh: "每週日：照片歸檔、隊伍資料夾 15 分鐘清掃、Discord 匯出", en: "Every Sunday: photos filed, 15-minute team folder sweep, Discord exported" } },
  { t: { zh: "每月最後一個週六：wiki 日", en: "Last Saturday of each month: wiki day" } }
];

const FACT_TYPES = [
  { t: { zh: "數據結果", en: "Results" }, ex: { zh: "ELISA 濃度、活性、生長曲線", en: "ELISA concentrations, activity, growth curves" },
    l: { zh: "一張圖差了 1000 倍，一組數字修了兩次。", en: "One chart 1000× off; one set of digits fixed twice." } },
  { t: { zh: "名稱與術語", en: "Names" }, ex: { zh: "BoPEP4、WB800、B. subtilis 斜體、ReLEAF", en: "BoPEP4, WB800, italic B. subtilis, ReLEAF" },
    l: { zh: "同一個胜肽三種寫法。", en: "One peptide, three spellings." } },
  { t: { zh: "規格", en: "Specs" }, ex: { zh: "感測器、反應器體積、pH 門檻", en: "Sensors, reactor volume, pH threshold" },
    l: { zh: "新舊兩份規格文件互相矛盾。", en: "Two spec documents contradicted each other." } },
  { t: { zh: "主張", en: "Claims" }, ex: { zh: "「已安裝，但未測試」「biostimulant，不是 protectant」", en: "“Fitted, never tested.” “A biostimulant, not a protectant.”" },
    l: { zh: "最貴的一類：每一條都曾經要開會裁決。", en: "The costliest kind: each one once needed a meeting." } },
  { t: { zh: "人與日期", en: "People & dates" }, ex: { zh: "合作夥伴、里程碑、誰做了什麼", en: "Partners, milestones, who did what" },
    l: { zh: "Milestones 與 Attributions 要重新整理一次。", en: "Milestones and Attributions had to be rebuilt." } }
];

const LINT = [
  { k: "bad", s: "engineering.html:212", m: { zh: "BoPep4 → BoPEP4", en: "BoPep4 → BoPEP4" } },
  { k: "bad", s: "results.html:88", m: { zh: "3.2 µg/mL 不在事實表", en: "3.2 µg/mL not in the fact sheet" } },
  { k: "bad", s: "hardware.html:40", m: { zh: "引用了已被取代的規格", en: "cites a superseded spec" } },
  { k: "ok", s: "68 pages", m: { zh: "其餘事實引用全部相符", en: "every other fact reference matches" } }
];

const STANDARDS = [
  { t: { zh: "頁面範本", en: "Page template" },
    now: { zh: "24 頁在年中才收斂成 banner + abstract。", en: "24 pages converged on banner + abstract mid-season." },
    next: { zh: "banner、abstract、章節、參考文獻、致謝，第一天固定。", en: "Banner, abstract, sections, references, thanks: fixed on day one." } },
  { t: { zh: "Figure 元件", en: "Figure component" },
    now: { zh: "超過 15 種寫法；圖說格式不一。", en: "Over 15 markups; captions in every style." },
    next: { zh: "一個元件；「Figure N. 標題。說明（n、統計）」由登錄表產生。", en: "One component; “Figure N. Title. Detail (n, stats)” from the register." } },
  { t: { zh: "設計系統", en: "Design system" },
    now: { zh: "約 15 種 CSS 組合、23 段頁內樣式。", en: "About 15 stylesheet mixes, 23 inline styles." },
    next: { zh: "一套 tokens 與元件，所有頁面載入同一組。", en: "One set of tokens and components on every page." } },
  { t: { zh: "資料表", en: "Data tables" },
    now: { zh: "Measurement 49 個、Engineering 30 個，全部手寫。", en: "49 on Measurement, 30 on Engineering, all hand-written." },
    next: { zh: "Sheet 匯出 CSV，自動變成表格。Parts 頁已經這樣做。", en: "Sheets to CSV to table. The Parts page already works this way." } },
  { t: { zh: "設計循環", en: "Engineering cycles" },
    now: { zh: "4 條軌道、25 次迭代畫在一張板上。", en: "Four tracks, 25 iterations on one board." },
    next: { zh: "一張循環登錄表，頁面由表產生。", en: "One cycle register; the page is generated." } },
  { t: { zh: "筆記本", en: "Notebooks" },
    now: { zh: "年底才從各種匯出整理成頁面。", en: "Assembled at season’s end from mixed exports." },
    next: { zh: "固定範本，腳本直接產生 notebook 頁面。", en: "Fixed templates; a script builds the notebook pages." } },
  { t: { zh: "參考文獻", en: "References" },
    now: { zh: "只有少數幾頁格式一致。", en: "Consistent on only a few pages." },
    next: { zh: "一個 Zotero 群組庫，一種引用格式。", en: "One Zotero group library, one citation style." } },
  { t: { zh: "雙語", en: "Bilingual pages" },
    now: { zh: "中英頁面是兩份手動同步的 HTML。", en: "Chinese and English pages were two hand-synced files." },
    next: { zh: "同一個來源，翻譯寫在欄位裡。", en: "One source with translation fields." } }
];

// Flow board: the places a file passes through, and who looks after each.
// owners are ROLES ids. out = a finished deliverable. span = grid columns.
const FLOW_TILES = [
  { id: "inbox", name: { zh: "Discord · 表單", en: "Discord · Form" }, owners: ["discord"] },
  { id: "teams", name: { zh: "31–34 隊伍資料夾", en: "31–34 Team folders" }, owners: ["folder", "owner"], span: 2 },
  { id: "git", name: { zh: "GitHub", en: "GitHub" }, owners: ["figure"] },
  { id: "d40", name: { zh: "40 Media", en: "40 Media" }, owners: ["photo", "figure", "art"] },
  { id: "hub", name: { zh: "00 Hub 表", en: "00 Hub sheet" }, owners: ["fact", "photo", "figure", "art"], span: 2 },
  { id: "ops", name: { zh: "ReLEAF Ops", en: "ReLEAF Ops" }, owners: ["ops"] },
  { id: "d50", name: { zh: "50 Deliverables", en: "50 Deliverables" }, owners: ["owner", "photo", "art", "fact"], span: 3 },
  { id: "d90", name: { zh: "90 Archive", en: "90 Archive" }, owners: ["ops"] },
  { id: "o-promo", out: true, name: { zh: "Promo Video", en: "Promo Video" } },
  { id: "o-wiki", out: true, name: { zh: "Wiki", en: "Wiki" } },
  { id: "o-jam", out: true, name: { zh: "Jamboree 展位", en: "Jamboree booth" } },
  { id: "o-attr", out: true, name: { zh: "Attributions", en: "Attributions" } }
];

// Three journeys. Each step: where the file is, who acts, what happens,
// the file's name at that moment, its state (0–2 = STATES), and Hub cells it fills.
const SCENARIOS = [
  { id: "photo", color: "orange",
    name: { zh: "一張照片", en: "A photo" },
    register: { zh: "素材分頁", en: "Media tab" },
    cols: { zh: ["ID", "日期", "組別", "品質", "同意", "用在"], en: ["ID", "Date", "Team", "Quality", "Consent", "Used in"] },
    steps: [
      { at: "inbox", who: "owner", file: "IMG_4821.HEIC",
        act: { zh: "實驗結束，學生把照片丟進 #photo-drop，只寫一句：「ELISA 上樣，3 人」。", en: "After the run, a student drops the photo in #photo-drop with one line: “ELISA plate loading, 3 people.”" } },
      { at: "d40", who: "photo", file: "40 Media/Photos/2027-03/20270314_Wet_ELISA.jpg",
        row: { 0: "P-0412", 1: "2027-03-14", 2: "Wet", 3: "★★★" },
        act: { zh: "週日，素材管理員改檔名、放進當月資料夾，在素材分頁登記一列。不必再選週資料夾。", en: "On Sunday the media steward renames it, files it in the month folder and logs one row. No weekly folder to pick." } },
      { at: "ops", who: "ops", file: "P-0412",
        row: { 4: "✓" },
        act: { zh: "對照 Ops 硬碟裡的同意書，三位學生都已同意。", en: "Checked against the consent forms in the Ops drive: all three agreed." } },
      { at: "d50", who: "photo", file: "Promo Video/Shot list → #14 = P-0412",
        row: { 5: "Promo" },
        act: { zh: "七月，篩選「實驗、三星、已同意」，在 shot list 第 14 格寫上 P-0412。照片本身不搬、不複製。", en: "In July, filter “lab, 3 stars, consented” and write P-0412 into shot #14. The photo is never moved or copied." } },
      { at: "o-promo", who: "photo", file: "ReLEAF_Promo_2027.mp4",
        act: { zh: "8/12，Promo Video 送出。2026 年 Gallery 和 Wiki Pages 之間有 45 組重複照片，這次一組都沒有。", en: "12 Aug: the promo goes in. In 2026, Gallery and Wiki Pages shared 45 duplicate photo sets; this time there are none." } }
    ] },
  { id: "number", color: "green",
    name: { zh: "一個數字", en: "A number" },
    register: { zh: "事實分頁", en: "Facts tab" },
    cols: { zh: ["ID", "陳述", "數值", "來源", "驗證"], en: ["ID", "Statement", "Value", "Source", "Verified"] },
    steps: [
      { at: "teams", who: "folder", file: "31 Wetlab/Records/20270502_ELISA_WL-0412", state: 0,
        act: { zh: "做完 ELISA，在 31 Wetlab 用固定範本寫紀錄 WL-0412，原始檔放進 Data/Raw，從此不可修改。", en: "After the ELISA, entry WL-0412 goes into 31 Wetlab on the fixed template, and the raw file into Data/Raw, read-only from then on." } },
      { at: "git", who: "figure", file: "analysis/elisa_wl0412.py", state: 0,
        act: { zh: "分析程式推上 GitHub。Drive 只留一個連結，不再有 .venv。", en: "The analysis script goes to GitHub. Drive keeps only a link; no more .venv." } },
      { at: "d40", who: "figure", file: "40 Media/Figures/F-WL-023.svg", state: 0,
        act: { zh: "圖表編輯用共用樣式輸出圖，給它 ID：F-WL-023。", en: "The figure editor exports it in the team style with an ID: F-WL-023." } },
      { at: "hub", who: "fact", file: "FACT-R-014", state: 0,
        row: { 0: "FACT-R-014", 1: { zh: "反應器上清液的目標蛋白濃度", en: "Target protein in reactor supernatant" }, 2: "3.4–6.5 µg/mL", 3: "WL-0412" },
        act: { zh: "事實管理員在事實分頁新增一筆，來源直接連到 WL-0412。", en: "The facts steward adds it to the Facts tab, its source linked to WL-0412." } },
      { at: "hub", who: "verify", file: "FACT-R-014", state: 1,
        row: { 4: { zh: "instructor ✓", en: "instructor ✓" } },
        act: { zh: "instructor 對照原始資料簽核。負責這條工作線的 advisor 可以先留下審查紀錄，判斷責任仍在 instructor。從此可以被引用。", en: "The instructor signs off against the raw data. An advisor who owns this track may leave review notes first; the judgement stays with the instructor. Now it can be cited." } },
      { at: "d50", who: "owner", file: "Wiki/Results — master doc", state: 1,
        act: { zh: "wiki 的 Results master doc 引用 FACT-R-014 和 F-WL-023，不抄數字。", en: "The wiki Results master doc cites FACT-R-014 and F-WL-023. It copies no number." } },
      { at: "o-wiki", who: "tmpl", file: "results.html", state: 2,
        act: { zh: "10/21 freeze，建置檢查通過。影片、展板、簡報用的也是同一個數字。", en: "21 Oct freeze; the build check passes. The videos, booth and slides use the same number." } }
    ] },
  { id: "art", color: "purple",
    name: { zh: "一張手繪", en: "A drawing" },
    register: { zh: "美術分頁", en: "Art tab" },
    cols: { zh: ["ID", "需求", "作者", "原檔", "用在"], en: ["ID", "Backlog item", "Artist", "Master", "Used in"] },
    steps: [
      { at: "hub", who: "art", file: "A-017", state: 0,
        row: { 0: "A-017", 1: { zh: "吉祥物：澆水，8/31 前", en: "Mascot watering, by 31 Aug" } },
        act: { zh: "美術分頁新增一項需求：吉祥物澆水的動作，展板用。", en: "A new item on the Art tab: the mascot watering, for the booth." } },
      { at: "d40", who: "owner", file: "40 Media/Art & Brand/WIP/A-017_sketch.jpg", state: 0,
        row: { 2: { zh: "學生 A", en: "Student A" } },
        act: { zh: "一位學生在 Art & Brand 的 WIP 畫草稿，美術負責人回饋兩輪。", en: "A student sketches in Art & Brand/WIP; the art lead gives two rounds of notes." } },
      { at: "d40", who: "art", file: "40 Media/Art & Brand/A-017.svg", state: 1,
        row: { 3: "SVG · 600 dpi" },
        act: { zh: "定稿後 600 dpi 掃描、向量化。草稿留在 WIP，不另存「final」。", en: "Once final, scanned at 600 dpi and vectorised. The sketch stays in WIP; nothing named “final”." } },
      { at: "d50", who: "art", file: "Jamboree/Booth layout → A-017", state: 1,
        row: { 4: { zh: "展板、wiki 頁首", en: "Booth, wiki header" } },
        act: { zh: "展板版面和 wiki 頁首都引用 A-017，不另存副本。", en: "The booth layout and a wiki header both cite A-017. No copies." } },
      { at: "o-jam", who: "art", file: "Booth_2027.pdf", state: 2,
        act: { zh: "9/16 展位送出。", en: "16 Sep: the booth goes in." } },
      { at: "o-attr", who: "ops", file: "Attributions ← Art tab", state: 2,
        act: { zh: "10/21 Attributions Form 直接從美術分頁匯出作者，一個名字都不會漏。", en: "21 Oct: the Attributions Form exports every artist from the Art tab. No name is missed." } }
    ] }
];

// ---------- Student Advisor programme ----------
// Rules follow the 2027 Advisor consent form v3. Folders, file names, templates and
// register columns are the system's proposal. [T3] renders as a link to ADV_TBD item 3.
const ADV_FLOOR = [
  { n: { zh: "8 小時", en: "8 hours" }, d: { zh: "實體到場，以週六為主，時間可彈性", en: "On site, mainly Saturdays, flexible" } },
  { n: { zh: "2 次", en: "2 times" }, d: { zh: "組別線上會議（每週一場）。全年出席率不低於 50%，以實際舉行場次的時數計算", en: "Weekly group meeting online. Yearly attendance at least 50%, by hours of meetings actually held" } },
  { n: { zh: "1 場", en: "1 meeting" }, d: { zh: "自己線上主持，1 小時以上，留下議程、出席者和會後結論", en: "Hosted online by the advisor, 1 hour or more, with agenda, attendees and conclusions kept" } },
  { n: { zh: "1 次", en: "1 time" }, d: { zh: "Advisor 月會，和 instructor 及其他 advisor 一起檢視進度", en: "Advisor monthly meeting, with instructors and the other advisors" } },
  { n: { zh: "1 份", en: "1 report" }, d: { zh: "月報，每月最後一日前主動提交：指導了誰、改了什麼、解決了什麼、下一步", en: "Monthly report, by the last day of the month: who was coached, what changed, what got solved, what is next" } }
];

const ADV_STAGES = [
  { id: "S1", folder: "S1 Topic", shade: 0, start: "2026-11-30", end: "2027-01-30",
    dates: { zh: "11 月底–1/30", en: "Late Nov–30 Jan" },
    name: { zh: "發展題目", en: "Develop the topic" }, role: { zh: "探路者", en: "Pathfinder" },
    team: { zh: "老師開發題目，並輔導學生自提的題目。1/30 當天或之前，與 2027 學生決定唯一題目。", en: "Instructors develop topics and coach student proposals. One topic is decided with the 2027 students on or before 30 Jan." },
    output: { zh: "至少 1 份候選題目研究報告：research potential、論文研究、past iGEM、novelty、special prize 與避雷；或與 instructor 進行前期研究或實驗。", en: "At least 1 candidate topic report: research potential, papers, past iGEM, novelty, special prizes and pitfalls; or early research or experiments with an instructor." },
    pass: { zh: "內容有可查證的來源，能當面說明，並實際影響了題目討論。", en: "Sources can be checked, the advisor can explain it in person, and it really shaped the topic discussion." },
    makeup: { zh: "第 2 階段結束前（3 月底）", en: "Before stage 2 ends (end of March)" } },
  { id: "S2", folder: "S2 Training", shade: 1, start: "2027-02-15", end: "2027-03-31",
    dates: { zh: "2 月中–3 月底", en: "Mid Feb–end of March" },
    name: { zh: "訓練與制度", en: "Training and systems" }, role: { zh: "制度建立者", en: "Systems builder" },
    team: { zh: "春節後密集訓練，research 並行：lab、wiki、data visualization and analysis、protein design、cross team communication and documentation。", en: "Intensive training after Lunar New Year alongside research: lab, wiki, data visualization and analysis, protein design, cross-team communication and documentation." },
    output: { zh: "至少 1 份 101（SOP 或 troubleshooting guide，例如 management、cloning、Registry、modeling、hardware、GIS），加上至少 1 場實體 workshop。", en: "At least 1 “101” (an SOP or troubleshooting guide, such as management, cloning, Registry, modeling, hardware, GIS), plus at least 1 in-person workshop." },
    pass: { zh: "隊員不靠 advisor，能照著文件獨立做到。", en: "Members can do it from the document alone, without the advisor." },
    makeup: { zh: "第 3 階段結束前（暑假前）", en: "Before stage 3 ends (before summer)" } },
  { id: "S3", folder: "S3 Design", shade: 2, start: "2027-04-01", end: "2027-06-30",
    dates: { zh: "4 月–暑假前", en: "April–before summer" },
    name: { zh: "設計與執行", en: "Design and execution" }, role: { zh: "TA", en: "TA" },
    team: { zh: "Wetlab：experimental、protein、sequence design、cloning。Drylab：定調 novelty、protein design、codon optimization、新 software tool、wiki updating。HP：cross team management、outreach、email writing、team logo、main style、color template、design management。", en: "Wet lab: experimental, protein and sequence design, cloning. Dry lab: setting the novelty, protein design, codon optimization, new software tools, wiki updates. HP: cross-team management, outreach, email writing, logo, main style, colour template, design management." },
    output: { zh: "主導至少 1 項 task 或 research track，並主持或參與設計討論，留下具體的審查紀錄。判斷責任仍在 instructor。", en: "Lead at least 1 task or research track, host or join design discussions, and leave a concrete review record. The judgement stays with the instructor." },
    pass: { zh: "有紀錄顯示隊伍的設計或做法因此改變。", en: "A record shows the team’s design or practice changed because of it." },
    makeup: { zh: "第 4 階段結束前（8/10）", en: "Before stage 4 ends (10 Aug)" },
    extra: { zh: "考核時也參考隊員回饋 [T13]。階段結束後可選出 Lead Advisor。", en: "The review also draws on member feedback [T13]. A Lead Advisor may be chosen after this stage." } },
  { id: "S4", folder: "S4 Workline", shade: 3, start: "2027-07-01", end: "2027-08-10",
    dates: { zh: "7/1–8/10", en: "1 Jul–10 Aug" },
    name: { zh: "暑期集訓", en: "Summer intensive" }, role: { zh: "TA，工作線負責人", en: "TA and workline lead" },
    team: { zh: "週二、四、六 9:00–17:00 全隊集訓。開始製作與撰寫 wiki，提升 scientific writing，整理 data，完成 promotion video。", en: "Whole-team sessions Tue, Thu, Sat, 9:00–17:00. Wiki writing starts, scientific writing improves, data gets organised, the promotion video gets finished." },
    output: { zh: "實質認領並主導 1 條工作線，例如 wiki 單一 task 的 draft 與 review、一組關鍵數據圖表的標準化，或 video script。", en: "Claim and lead 1 workline, such as the draft and review of one wiki task, standardising a set of key data figures, or the video script." },
    pass: { zh: "成果被隊伍採用，advisor 能當面說明自己主導的部分。", en: "The team adopts the result, and the advisor can explain in person the part they led." },
    makeup: { zh: "8 月底 Roster 審核前", en: "Before the late-August Roster review" } },
  { id: "S5", folder: "S5 Convergence", shade: 4, start: "2027-08-31", end: "2027-10-21", after: "2027-11-13",
    dates: { zh: "8 月底–10 月中 freeze；freeze 後 3–4 週", en: "Late Aug–mid-Oct freeze; then 3–4 weeks" },
    name: { zh: "收斂與 Jamboree 準備", en: "Converge and prepare for Jamboree" }, role: { zh: "把關者", en: "Gatekeeper" },
    team: { zh: "收斂成果、整理 data、改寫 wiki、debug，完成 wiki 和 presentation video。Freeze 後進行 judging prep 與 booth prep。", en: "Converge results, organise data, rewrite the wiki, debug, finish the wiki and presentation video. Judging and booth prep after freeze." },
    output: { zh: "Freeze 前認領一份具名 checklist（頁面、data 或 debug 範圍），在最後衝刺期和全隊一起工作到完成。Freeze 後至少參加 2 次模擬 judging，協助 final presentation。", en: "Before freeze, claim a named checklist (pages, data or debug scope) and work with the team until done. After freeze, join at least 2 mock judging sessions and help with the final presentation." },
    pass: { zh: "責任範圍在 freeze 前全數核對完成。未完成自己的範圍，或在全隊衝刺時干擾工作，不算通過。", en: "The whole scope is checked before freeze. An unfinished scope, or disrupting the team’s final push, does not pass." },
    makeup: { zh: "Jamboree 前", en: "Before the Jamboree" },
    extra: { zh: "階段結束日與補件內容待釐清 [T3] [T4]。", en: "The stage’s end date and what can be made up are unsettled [T3] [T4]." } }
];

// Map of every recurring and stage duty. g: group heading.
const ADV_MAP_GROUPS = [
  { id: "stage", name: { zh: "階段產出", en: "Stage output" } },
  { id: "month", name: { zh: "每月節奏", en: "Monthly rhythm" } },
  { id: "review", name: { zh: "考核與資格", en: "Review and qualification" } },
  { id: "close", name: { zh: "結案", en: "Close-out" } }
];
const INSTR = { zh: "主責 instructor", en: "Lead instructor" };
const ADVR = { zh: "Advisor", en: "Advisor" };
const ADV_MAP = [
  { g: "stage", duty: { zh: "具名範圍確認（每階段）", en: "Named scope (every stage)" }, loc: "60 Advisors/A01/S1–S5", file: "A01_S1_Scope", tpl: "ADV-T0 Scope Card",
    who: ADVR, ver: INSTR, due: { zh: "該階段開始前", en: "Before the stage starts" }, row: "ADV_STAGE · A01-S1 · scope" },
  { g: "stage", duty: { zh: "S1 候選題目研究報告", en: "S1 candidate topic report" }, loc: "60 Advisors/A01/S1 Topic", file: "A01_S1_TopicReport_<topic>", tpl: "ADV-T1 Topic Report",
    who: ADVR, ver: INSTR, due: { zh: "1/30", en: "30 Jan" }, row: "ADV_STAGE · A01-S1 · output_link" },
  { g: "stage", duty: { zh: "S2 101 與實體 workshop", en: "S2 101 and in-person workshop" }, loc: "60 Advisors/A01/S2 Training", file: "A01_S2_101_<subject>\nYYYYMMDD_A01_S2_Workshop", tpl: "ADV-T2 101 Guide\nADV-T2W Workshop Record",
    who: ADVR, ver: INSTR, due: { zh: "3 月底", en: "End of March" }, row: "ADV_STAGE · A01-S2 · output_link" },
  { g: "stage", duty: { zh: "S3 主導項目與審查紀錄", en: "S3 led task and review record" }, loc: "60 Advisors/A01/S3 Design", file: "A01_S3_ReviewLog_<task>", tpl: "ADV-T3 Review Log",
    who: ADVR, ver: INSTR, due: { zh: "暑假前", en: "Before summer" }, row: "ADV_STAGE · A01-S3 · output_link" },
  { g: "stage", duty: { zh: "S4 工作線", en: "S4 workline" }, loc: "60 Advisors/A01/S4 Workline", file: "A01_S4_Workline_<name>", tpl: "ADV-T4 Workline Brief",
    who: ADVR, ver: INSTR, due: { zh: "8/10", en: "10 Aug" }, row: "ADV_STAGE · A01-S4 · output_link" },
  { g: "stage", duty: { zh: "S5 具名 freeze checklist", en: "S5 named freeze checklist" }, loc: "60 Advisors/A01/S5 Convergence", file: "A01_S5_FreezeChecklist_<scope>", tpl: "ADV-T5 Freeze Checklist",
    who: ADVR, ver: INSTR, due: { zh: "Wiki freeze 前", en: "Before wiki freeze" }, row: "ADV_STAGE · A01-S5 · output_link" },
  { g: "stage", duty: { zh: "S5 模擬 judging（至少 2 次）", en: "S5 mock judging (at least 2)" }, loc: "60 Advisors/_Mock Judging", file: "YYYYMMDD_MockJudging", tpl: "ADV-T5J Mock Judging Sheet",
    who: { zh: "Instructor 記出席", en: "Instructor logs attendance" }, ver: INSTR, due: { zh: "Freeze 後、Jamboree 前", en: "After freeze, before Jamboree" }, row: "ADV_STAGE · A01-S5 · mock_judging_n" },
  { g: "month", duty: { zh: "實體時數（每月 8 小時）", en: "On-site hours (8 a month)" }, loc: "GEMS 打卡 → ReLEAF Ops/Advisors/Clock-in [T1]", file: "YYYYMM_ClockIn", tpl: { zh: "打卡匯出，不用範本", en: "Clock-in export, no template" },
    who: { zh: "Advisor 打卡，Ops 匯出 [T1]", en: "Advisor clocks in, Ops exports [T1]" }, ver: INSTR, due: { zh: "每月；不足可補到階段結束 [T5]", en: "Monthly; shortfall can be made up by stage end [T5]" }, row: "ADV_MONTH · A01-2027-03 · hours_onsite" },
  { g: "month", duty: { zh: "線上時數（離台就學後）", en: "Online hours (after leaving Taiwan)" }, loc: { zh: "ADV-F1 表單，填法待決定 [T2]", en: "ADV-F1 form, method to be decided [T2]" }, file: { zh: "不產生檔案", en: "No file" }, tpl: "ADV-F1",
    who: ADVR, ver: INSTR, due: { zh: "同上", en: "As above" }, row: "ADV_MONTH · A01-2027-09 · hours_online" },
  { g: "month", duty: { zh: "暑期時數（至少 6 天、48 小時）", en: "Summer hours (at least 6 days, 48 hours)" }, loc: "GEMS 打卡 → ReLEAF Ops/Advisors/Clock-in [T1]", file: "2027-SUMMER_ClockIn", tpl: { zh: "打卡匯出，不用範本", en: "Clock-in export, no template" },
    who: { zh: "Advisor 打卡，Ops 匯出 [T1]", en: "Advisor clocks in, Ops exports [T1]" }, ver: INSTR, due: "8/10", row: "ADV_MONTH · A01-2027-SUMMER · days, hours_onsite" },
  { g: "month", duty: { zh: "組別會議（每月至少 2 次，全年 50%）", en: "Group meetings (2 a month, 50% for the year)" }, loc: "GEMS 打卡 → ReLEAF Ops/Advisors/Clock-in [T1]", file: "YYYYMM_GroupMeeting_<Wet|Dry|HP>", tpl: { zh: "打卡匯出加場次表", en: "Clock-in export and session list" },
    who: { zh: "Advisor 打卡；組別 instructor 登記場次與時數", en: "Advisor clocks in; the group’s instructor logs sessions and hours" }, ver: INSTR, due: { zh: "每月結算 [T9]", en: "Totalled monthly [T9]" }, row: "ADV_MONTH · A01-2027-03 · group_h_attended, group_h_held" },
  { g: "month", duty: { zh: "自主會議（每月 1 場，1 小時以上）", en: "Self-run meeting (1 a month, 1 hour or more)" }, loc: "60 Advisors/A01/Meetings", file: "YYYYMMDD_A01_SelfRun", tpl: { zh: "ADV-T6 Meeting Minutes（議程、出席者、會後結論）", en: "ADV-T6 Meeting Minutes (agenda, attendees, conclusions)" },
    who: ADVR, ver: { zh: "主責 instructor，隨月報確認", en: "Lead instructor, with the report" }, due: { zh: "當月內", en: "Within the month" }, row: "ADV_MONTH · A01-2027-03 · selfrun_link" },
  { g: "month", duty: { zh: "Advisor 月會（每月 1 次）", en: "Advisor monthly meeting (1 a month)" }, loc: "60 Advisors/_Advisor Meeting", file: "YYYYMM_AdvisorMeeting", tpl: "ADV-T7 Advisor Meeting",
    who: { zh: "Instructor 記出席與決議", en: "Instructor logs attendance and decisions" }, ver: { zh: "Instructor", en: "Instructor" }, due: { zh: "每月", en: "Monthly" }, row: "ADV_MONTH · A01-2027-03 · advisor_meeting" },
  { g: "month", duty: { zh: "月報", en: "Monthly report" }, loc: "60 Advisors/A01/Reports", file: "YYYYMM_A01_MonthlyReport", tpl: { zh: "ADV-T8 Monthly Report（指導了誰、改了什麼、解決了什麼、下一步）", en: "ADV-T8 Monthly Report (coached, changed, solved, next)" },
    who: ADVR, ver: INSTR, due: { zh: "每月最後一日前；逾期超過兩週直接記 1 個 strike [T10]", en: "By the last day of the month; over two weeks late is 1 strike [T10]" }, row: "ADV_MONTH · A01-2027-03 · report_link, report_at" },
  { g: "review", duty: { zh: "階段考核與書面結果", en: "Stage review and written result" }, loc: "ReLEAF Ops/Advisors/Reviews/A01", file: "A01_S1_ReviewResult", tpl: "ADV-T9 Stage Result",
    who: { zh: "Advisor 當面說明並回答提問；instructor 寫結果", en: "Advisor explains in person and takes questions; instructor writes the result" }, ver: { zh: "主責 instructor；書面交學生與家長", en: "Lead instructor; written result goes to student and parents" }, due: { zh: "每階段結束時，可在月會進行 [T18]", en: "At each stage end, may be at the monthly meeting [T18]" }, row: "ADV_STAGE · A01-S1 · result, written_link" },
  { g: "review", duty: { zh: "補件（一次）", en: "Make-up (one)" }, loc: "60 Advisors/A01/S1 Topic", file: "A01_S1_Makeup_<topic>", tpl: { zh: "沿用該階段範本", en: "That stage’s template" },
    who: ADVR, ver: INSTR, due: { zh: "見補件期限表", en: "See the make-up table" }, row: "ADV_STAGE · A01-S1 · makeup_link, makeup_result" },
  { g: "review", duty: { zh: "改善期限與 strike 紀錄", en: "Improvement notice and strike record" }, loc: "ReLEAF Ops/Advisors/Strikes", file: "A01_Notice_YYYYMMDD\nA01_Strike01_YYYYMMDD", tpl: "ADV-T10 Strike Record",
    who: { zh: "Instructor", en: "Instructor" }, ver: { zh: "兩位 instructor 共同簽署，寫明原因，告知家長", en: "Two instructors co-sign, state the cause, tell the parents" }, due: { zh: "改善期限到期時 [T12]；月報逾期超過兩週時", en: "When the deadline passes [T12]; when a report is over two weeks late" }, row: "ADV_STRIKE · ST-01 → ADV_STATE · strikes" },
  { g: "review", duty: { zh: "Lead Advisor 選任", en: "Lead Advisor selection" }, loc: "ReLEAF Ops/Advisors/Roster", file: "2027_LeadAdvisor", tpl: "ADV-T12 Lead Advisor Note",
    who: { zh: "Instructor", en: "Instructor" }, ver: { zh: "Instructor（名額不固定，可從缺）", en: "Instructors (no fixed number; may stay empty)" }, due: { zh: "第 3 階段結束後", en: "After stage 3" }, row: "ADV_STATE · A01 · lead" },
  { g: "review", duty: { zh: "Roster 審核", en: "Roster review" }, loc: "ReLEAF Ops/Advisors/Roster", file: "2027-08_RosterReview", tpl: "ADV-T11 Roster Review",
    who: { zh: "Instructor 依 Register 整理", en: "Instructors, from the Register" }, ver: { zh: "GEMS 決定名單 [T11]", en: "GEMS decides the list [T11]" }, due: { zh: "8 月底（預計）", en: "Late August (planned)" }, row: "ADV_STATE · A01 · qualification" },
  { g: "review", duty: { zh: "改列 Supporting list 通知", en: "Move to Supporting list notice" }, loc: "ReLEAF Ops/Advisors/Roster", file: "A01_SupportingNotice_YYYYMMDD", tpl: "ADV-T11S Supporting Notice",
    who: { zh: "Instructor", en: "Instructor" }, ver: { zh: "GEMS 立即告知學生與家長", en: "GEMS tells student and parents at once" }, due: { zh: "補件後仍未通過時 [T6]", en: "When a make-up still fails [T6]" }, row: "ADV_STATE · A01 · qualification" },
  { g: "close", duty: { zh: "證書與個人貢獻紀錄", en: "Certificate and contribution record" }, loc: "ReLEAF Ops/Advisors/Records", file: "A01_Certificate\nA01_ContributionRecord", tpl: "ADV-T13 Contribution Record",
    who: { zh: "指導老師署名", en: "Signed by the supervising instructor" }, ver: { zh: "Instructor，依全部 Register 列", en: "Instructor, from every Register row" }, due: { zh: "第 5 階段通過後", en: "After stage 5 passes" }, row: "ADV_STATE · A01 · certificate, record" },
  { g: "close", duty: { zh: "研習說明（Supporting list）", en: "Participation note (Supporting list)" }, loc: "ReLEAF Ops/Advisors/Records", file: "A01_ParticipationNote", tpl: "ADV-T14 Participation Note",
    who: { zh: "Instructor", en: "Instructor" }, ver: { zh: "依事實發給，如實註明貢獻", en: "Issued on the facts, contribution stated as it was" }, due: { zh: "結束時 [T7]", en: "On finishing [T7]" }, row: "ADV_STATE · A01 · note" }
];

const ADV_TREE = `60 Advisors/
├─ _Templates/            ADV-T0 … ADV-T8
├─ _Advisor Meeting/      YYYYMM_AdvisorMeeting
├─ _Mock Judging/         YYYYMMDD_MockJudging
└─ A01/
   ├─ S1 Topic/           A01_S1_Scope · A01_S1_TopicReport_<topic>
   ├─ S2 Training/        A01_S2_101_<subject> · YYYYMMDD_A01_S2_Workshop
   ├─ S3 Design/          A01_S3_ReviewLog_<task>
   ├─ S4 Workline/        A01_S4_Workline_<name>
   ├─ S5 Convergence/     A01_S5_FreezeChecklist_<scope>
   ├─ Meetings/           YYYYMMDD_A01_SelfRun
   └─ Reports/            YYYYMM_A01_MonthlyReport

ReLEAF Ops/Advisors/      (students cannot see this drive)
├─ _Templates/            ADV-T9 … ADV-T14
├─ Advisor Register       ADV_PEOPLE · ADV_STAGE · ADV_MONTH · ADV_STRIKE · ADV_STATE · ADV_LOG
├─ Clock-in/              YYYYMM_ClockIn · YYYYMM_GroupMeeting_<group>
├─ Reviews/A01/           A01_S1_ReviewResult
├─ Strikes/               A01_Notice_YYYYMMDD · A01_Strike01_YYYYMMDD
├─ Roster/                2027-08_RosterReview · 2027_LeadAdvisor
└─ Records/               A01_Certificate · A01_ContributionRecord · A01_ParticipationNote`;

// Qualification logic. Each lane is a line of boxes; to labels the arrow that follows a box.
const ADV_STATE_LANES = [
  { name: { zh: "每個階段", en: "Every stage" }, nodes: [
    { id: "scope", t: { zh: "確認範圍", en: "Agree scope" }, to: "" },
    { id: "submit", t: { zh: "交出產出", en: "Hand in output" }, to: "" },
    { id: "review", t: { zh: "當面考核", en: "In-person review" }, to: { zh: "未通過", en: "not passed" } },
    { id: "makeup", t: { zh: "補件一次", en: "One make-up" }, to: { zh: "仍未通過", en: "still fails" } },
    { id: "supporting", t: { zh: "Supporting list", en: "Supporting list" }, tbd: 1, end: 1 }
  ] },
  { name: { zh: "資格", en: "Qualification" }, nodes: [
    { id: "s14", t: { zh: "前四階段全過，未滿 3 個 strike", en: "Stages 1–4 passed, under 3 strikes" }, to: "" },
    { id: "roster", t: { zh: "Team Roster（8 月底）", en: "Team Roster (late Aug)" }, tbd: 1, to: "" },
    { id: "s5", t: { zh: "第 5 階段通過", en: "Stage 5 passed" }, tbd: 1, to: "" },
    { id: "cert", t: { zh: "證書與貢獻紀錄", en: "Certificate and record" }, end: 1 }
  ] },
  { name: { zh: "Strike", en: "Strikes" }, nodes: [
    { id: "issue", t: { zh: "發生問題", en: "A problem arises" }, to: "" },
    { id: "notice", t: { zh: "溝通，給改善期限", en: "Talk, set a deadline" }, tbd: 1, to: { zh: "未改善", en: "not fixed" } },
    { id: "strike", t: { zh: "記 1 個 strike", en: "1 strike" }, to: { zh: "累計 3 個", en: "3 in total" } },
    { id: "removed", t: { zh: "GEMS 有權除名", en: "GEMS may remove" }, tbd: 1, end: 1 }
  ] },
  { name: { zh: "重大違規", en: "Serious breach" }, nodes: [
    { id: "breach", t: { zh: "排他、保密、研究誠信、團隊紀律", en: "Exclusivity, confidentiality, research integrity, team discipline" }, to: "" },
    { id: "terminated", t: { zh: "立即終止資格", en: "Terminated at once" }, end: 1 }
  ] }
];
const ADV_STATE_INFO = {
  scope: { d: { zh: "每階段開始前，advisor 與 instructor 確認負責範圍和具名產出。參考學生興趣與目標領域（Wet、Dry、HP），並安排跨組任務。數量是最低要求。", en: "Before each stage, advisor and instructor agree scope and named output, taking interests and target field (Wet, Dry, HP) into account and adding cross-team work. Counts are minimums." } },
  submit: { d: { zh: "檔案放進自己的 S 資料夾，連結交到 ADV-F1。Register 記下提交時間。", en: "The file goes in the advisor’s own S folder and the link goes to ADV-F1. The Register records the time." } },
  review: { d: { zh: "每階段結束時，向 instructor 當面說明產出並回答提問，可在 advisor 月會進行。Instructor 參考月報和會議紀錄，依品質驗收，書面結果交學生與家長。時數達標不等於通過。", en: "At each stage end, the advisor explains the output to an instructor and takes questions, possibly at the monthly meeting. The instructor uses reports and minutes, judges on quality, and sends a written result to student and parents. Meeting the hours does not mean passing." } },
  makeup: { d: { zh: "未通過的階段可補件一次，期限見下表。", en: "A stage that did not pass may be made up once. Deadlines are in the table below." } },
  supporting: { d: { zh: "補件後仍未通過：GEMS 立即告知學生和家長，改列 Supporting list，不登錄 Roster。學生可以繼續貢獻，也可以提早結束；GEMS 如實註明貢獻，依事實發給研習說明。補件失敗同時也是 strike 事由，兩者的先後 [T6] 與之後的待遇 [T7] 待決定。", en: "A make-up that still fails: GEMS tells student and parents at once, and the student moves to the Supporting list and off the Roster. They may keep contributing or finish early; GEMS states the contribution as it was and issues a participation note. A failed make-up is also grounds for a strike; the order [T6] and what follows [T7] are to be decided." } },
  s14: { d: { zh: "Roster 的條件只看前四階段和 strike 數。第 5 階段不影響 8 月底的名單。", en: "The Roster looks only at stages 1–4 and the strike count. Stage 5 does not affect the late-August list." } },
  roster: { d: { zh: "GEMS 預計於 2027 年 8 月底決定名單，符合條件才登錄 iGEM 官方 Team Roster。8 月底之後資格變動怎麼處理待決定 [T8]。", en: "GEMS plans to decide the list in late August 2027; only those who qualify go on the official iGEM Team Roster. What happens if things change after August is to be decided [T8]." } },
  s5: { d: { zh: "責任範圍在 freeze 前全數核對完成，freeze 後至少 2 次模擬 judging。補件須在 Jamboree 前，內容待決定 [T4]。", en: "The whole scope checked before freeze, then at least 2 mock judging sessions. Make-up is due before the Jamboree; what it can contain is to be decided [T4]." } },
  cert: { d: { zh: "第 5 階段通過後才發給。傑出的表現具體寫入這份由指導老師署名的紀錄。", en: "Issued only after stage 5 passes. Outstanding work is written specifically into this record, signed by the supervising instructor." } },
  issue: { d: { zh: "三類事由：時數到階段結束仍未補足；未達到組別會議、自主會議或 advisor 月會的要求；補件後階段產出仍未通過。", en: "Three grounds: hours still short at stage end; group meeting, self-run meeting or advisor meeting requirements not met; stage output still failing after make-up." } },
  notice: { d: { zh: "Instructor 先與學生溝通並給予改善期限，期限長度待決定 [T12]。到期改善就不記。例外：月報逾期超過兩週，不走這一步，直接記 1 個 [T10]。", en: "The instructor talks with the student first and sets a deadline; its length is to be decided [T12]. Fixed in time means no strike. One exception: a report over two weeks late skips this step and is 1 strike [T10]." } },
  strike: { d: { zh: "全年累計。同一問題在新的改善期限後仍未改善，會再記 1 個。每個都由兩位 instructor 共同簽署、寫明原因並告知家長；家長與學生有疑義時可申訴一次。", en: "Counted across the year. The same problem still unfixed after a new deadline earns another. Each is co-signed by two instructors, states its cause and goes to the parents; parents and student may appeal once." } },
  removed: { d: { zh: "累計 3 個 strike，GEMS 有權除名，不是自動除名。除名後不具隊伍身分，不列入 Roster 或 Supporting list，沒有證書、紀錄或研習說明；留在專案裡的工作如實註明，不附職稱。滿 3 個但未除名時的身分待決定 [T8]。", en: "At 3 strikes GEMS may remove the student; it is not automatic. After removal there is no team status, no Roster or Supporting list place, no certificate, record or note; work left in the project is credited as it was, with no title. The status of someone at 3 strikes who is not removed is to be decided [T8]." } },
  breach: { d: { zh: "四類：同時任職其他 iGEM 隊伍、未經同意對外透露、捏造或竄改數據及據為己有、重大惡意破壞團隊。這裡只列類別。", en: "Four kinds: holding a role on another iGEM team, disclosing without consent, fabricating or falsifying data or claiming others’ work, serious deliberate harm to the team. Only the categories are listed here." } },
  terminated: { d: { zh: "不經 strike 流程。", en: "No strike process." } }
};

const ADV_MAKEUP = [
  { s: "S1", end: { zh: "1/30", en: "30 Jan" }, due: { zh: "3 月底（第 2 階段結束前）", en: "End of March (before stage 2 ends)" } },
  { s: "S2", end: { zh: "3 月底", en: "End of March" }, due: { zh: "暑假前（第 3 階段結束前）", en: "Before summer (before stage 3 ends)" } },
  { s: "S3", end: { zh: "暑假前", en: "Before summer" }, due: { zh: "8/10（第 4 階段結束前）", en: "10 Aug (before stage 4 ends)" } },
  { s: "S4", end: { zh: "8/10", en: "10 Aug" }, due: { zh: "8 月底 Roster 審核前", en: "Before the late-August Roster review" } },
  { s: "S5", end: { zh: "待釐清 [T3]", en: "Unclear [T3]" }, due: { zh: "Jamboree 前 [T4]", en: "Before the Jamboree [T4]" } }
];
const ADV_MAKEUP_FAIL = { zh: "改列 Supporting list，不登錄 Roster [T6]", en: "Moves to the Supporting list, off the Roster [T6]" };
const ADV_MAKEUP_FAIL5 = { zh: "沒有證書和貢獻紀錄；Roster 怎麼處理待決定 [T8]", en: "No certificate or record; what happens to the Roster is to be decided [T8]" };

const ADV_STRIKE = {
  on: [
    { zh: "時數到階段結束仍未補足。", en: "Hours still short at stage end." },
    { zh: "未達到組別會議、自主會議或 advisor 月會的要求。", en: "Group, self-run or advisor meeting requirements not met." },
    { zh: "補件後階段產出仍未通過。", en: "Stage output still failing after make-up." },
    { zh: "月報逾期超過兩週：視為當月無產出，直接記 1 個，不給改善期限。", en: "A report over two weeks late: treated as no output that month, 1 strike with no improvement period." }
  ],
  off: [
    { zh: "題目或意見未被採用。", en: "A topic or opinion that was not adopted." },
    { zh: "實驗失敗。", en: "A failed experiment." },
    { zh: "事先告知並已調整安排的考試或申請時段 [T17]。", en: "Exam or application periods told in advance and rearranged [T17]." }
  ],
  how: [
    { zh: "前三類先溝通、給改善期限，到期仍未改善才記。", en: "The first three start with a talk and a deadline; a strike only follows if it passes unfixed." },
    { zh: "兩位 instructor 共同簽署、寫明原因、告知家長。", en: "Two instructors co-sign, state the cause, tell the parents." },
    { zh: "全年累計。同一問題過了新的期限還沒改善，再記 1 個。", en: "Counted across the year. The same problem past a new deadline earns another." },
    { zh: "未滿 3 個才能登錄 Roster。累計 3 個，GEMS 有權除名。", en: "Under 3 to go on the Roster. At 3, GEMS may remove." },
    { zh: "家長與學生有疑義時，可向 GEMS 申訴一次 [T12]。", en: "Parents and student may appeal to GEMS once [T12]." }
  ]
};

// Sample data for the Hub design. Not real people.
const ADV_SAMPLE = [
  { name: "Advisor A", group: "Wet", scope: { zh: "cloning 工作線審查", en: "Reviewing the cloning track" }, st: ["pass", "pass", "now", "", ""], h: 9, sessions: 3, rate: 62, self: 1, meet: 1, rep: "ok", strikes: 0,
    latest: { f: "A01_S3_ReviewLog_cloning", d: "5/12" } },
  { name: "Advisor B", group: "Dry", scope: { zh: "codon optimization 工具", en: "Codon optimization tool" }, st: ["pass", "fix", "now", "", ""], h: 8, sessions: 2, rate: 46, self: 1, meet: 1, rep: "due", strikes: 0,
    latest: { f: "A02_S2_Makeup_modeling", d: "5/09" } },
  { name: "Advisor C", group: "HP", scope: { zh: "outreach 流程", en: "Outreach process" }, st: ["pass", "pass", "now", "", ""], h: 5, sessions: 2, rate: 55, self: 0, meet: 1, rep: "late", strikes: 1,
    latest: { f: "A03_S3_ReviewLog_outreach", d: "4/28" } },
  { name: "Advisor D", group: "Wet", scope: { zh: "protein design 協助", en: "Helping protein design" }, st: ["pass", "fail", "", "", ""], h: 8, sessions: 2, rate: 51, self: 1, meet: 1, rep: "ok", strikes: 1, sup: 1,
    latest: { f: "A04_S2_Makeup_protein", d: "4/30" } },
  { name: "Advisor E", group: "Dry", scope: { zh: "新 software tool", en: "New software tool" }, st: ["pass", "pass", "now", "", ""], h: 8, sessions: 3, rate: 70, self: 1, meet: 1, rep: "due", strikes: 0,
    latest: { f: "A05_S3_ReviewLog_software", d: "5/14" } }
];

const ADV_SCHEMA = [
  { t: "ADV_PEOPLE", k: { zh: "每位 advisor 一列", en: "One row per advisor" }, c: "advisor_id · real_name · group · lead_instructor · status · away_periods" },
  { t: "ADV_STAGE", k: { zh: "每人每階段一列，例如 A01-S1", en: "One per advisor per stage, e.g. A01-S1" }, c: "key · advisor_id · stage · scope · scope_confirmed_on · output_link · submitted_at · review_on · result · makeup_due · makeup_link · makeup_result · written_link · notified_on · reviewer · member_feedback_link · mock_judging_n" },
  { t: "ADV_MONTH", k: { zh: "每人每月一列，暑期一列，例如 A01-2027-03、A01-2027-SUMMER", en: "One per advisor per month, plus one for summer, e.g. A01-2027-03, A01-2027-SUMMER" }, c: "key · advisor_id · period · hours_onsite · hours_online · days · group_sessions · group_h_attended · group_h_held · selfrun_link · selfrun_h · advisor_meeting · report_link · report_at · report_late_days · report_confirmed_by · note" },
  { t: "ADV_STRIKE", k: { zh: "每個 strike 一列", en: "One row per strike" }, c: "strike_id · advisor_id · cause · reason · notice_on · deadline · recorded_on · signer_1 · signer_2 · parents_told_on · appeal" },
  { t: "ADV_STATE", k: { zh: "由上面算出，不手填", en: "Computed from the above, never typed" }, c: "advisor_id · stages_passed · strikes · group_rate · qualification (active | roster | supporting | removed | terminated) · lead · certificate · record · note" },
  { t: "ADV_LOG", k: { zh: "ADV-F1 表單回覆，只增不改", en: "ADV-F1 responses, append only" }, c: "submitted_at · advisor_id · type · stage_or_month · link · hours · comment" },
  { t: "Hub / Advisors", k: { zh: "Hub 表的分頁，全隊可見，IMPORTRANGE 單向帶入", en: "A Hub sheet tab, visible to the team, pulled one way by IMPORTRANGE" }, c: "advisor_id · display_name · group · current_stage · scope · latest_output_link · latest_output_at" }
];

// y = visible, s = summary, w = written outside the Hub, n = hidden
const ADV_VIS_COLS = [
  { zh: "本人", en: "Self" }, { zh: "其他 advisor", en: "Other advisors" }, { zh: "2027 隊員", en: "2027 team" },
  { zh: "Instructor", en: "Instructor" }, { zh: "Ops", en: "Ops" }, { zh: "家長", en: "Parents" }, { zh: "公開網站", en: "Public site" }
];
const ADV_VIS = [
  { f: { zh: "具名範圍、組別", en: "Named scope, group" }, v: "yyyyywn" },
  { f: { zh: "最新產出連結", en: "Latest output link" }, v: "yyyyynn" },
  { f: { zh: "階段狀態（進行中、通過）", en: "Stage status (in progress, passed)" }, v: "ysnyywn" },
  { f: { zh: "未通過、補件", en: "Not passed, make-up" }, v: "ynnyywn" },
  { f: { zh: "時數、會議出席", en: "Hours, meeting attendance" }, v: "ynnyynn" },
  { f: { zh: "月報內容", en: "Monthly report content" }, v: "ynnynnn" },
  { f: { zh: "第 3 階段隊員回饋", en: "Stage 3 member feedback" }, v: "snnynnn" },
  { f: { zh: "Strike 與原因", en: "Strikes and causes" }, v: "ynnyywn" },
  { f: { zh: "資格（Roster、Supporting list）", en: "Qualification (Roster, Supporting list)" }, v: "ynnyywn" },
  { f: { zh: "真實姓名對照", en: "Real-name map" }, v: "nnnyynn" }
];

// Minutes per item are estimates; n is the number of advisors.
const ADV_LOAD = [
  { t: { zh: "具名範圍確認", en: "Scope agreement" }, count: n => n * 5, min: 10 },
  { t: { zh: "月報確認（約 12 個月）", en: "Report confirmation (about 12 months)" }, count: n => n * 12, min: 10 },
  { t: { zh: "Advisor 月會（2 位 instructor）", en: "Advisor meeting (2 instructors)" }, count: () => 24, min: 60 },
  { t: { zh: "階段考核與書面結果", en: "Stage review and written result" }, count: n => n * 5, min: 30 },
  { t: { zh: "第 3 階段隊員回饋", en: "Stage 3 member feedback" }, count: n => n, min: 15 },
  { t: { zh: "Roster 審核", en: "Roster review" }, count: n => n, min: 10 },
  { t: { zh: "證書與貢獻紀錄", en: "Certificate and contribution record" }, count: n => n, min: 45 }
];

const ADV_TBD = [
  { zh: "打卡紀錄：誰保管、誰匯出、線上會議怎麼打卡。同意書只對組別會議寫明以打卡為準，實體時數是否同樣以打卡為準。", en: "Clock-in records: who holds them, who exports them, how an online meeting is clocked. The form names clock-in only for group meetings; do on-site hours follow it too?" },
  { zh: "離台就學後：線上時數怎麼記；「當面說明」與實體 workshop 能否改線上。", en: "After leaving Taiwan: how online hours are logged, and whether “in person” reviews and the in-person workshop may go online." },
  { zh: "第 5 階段在 freeze 結束還是 Jamboree 結束，考核安排在哪一天。", en: "Whether stage 5 ends at freeze or at the Jamboree, and when its review happens." },
  { zh: "第 5 階段補件能補什麼。通過標準要求 freeze 前完成，freeze 之後補不回來。", en: "What a stage 5 make-up can contain. The pass standard needs the scope done before freeze, which cannot be redone after it." },
  { zh: "階段之間的空窗（1/31–2 月中、8/11–8 月底）算哪一階段的時數；任期首月、8 月、freeze 後等不足整月的時數怎麼算；多的時數能否抵其他月。", en: "Which stage owns the gaps (31 Jan–mid Feb, 11 Aug–late Aug); how part-months count (the first month, August, after freeze); whether extra hours carry to other months." },
  { zh: "補件失敗：立即改列 Supporting list，還是先給 strike 的改善期限。改善成功時能否回到原資格。", en: "After a failed make-up: straight to the Supporting list, or first the strike improvement period? Can fixing it in time restore the place?" },
  { zh: "Supporting list 之後：是否繼續階段考核與 strike 累計，通過第 5 階段能否拿證書和貢獻紀錄。", en: "On the Supporting list: do reviews and strikes continue, and can passing stage 5 earn the certificate and record?" },
  { zh: "8 月底之後：第 5 階段未通過、累計 3 個 strike 或除名時，Roster 是否撤銷、iGEM 是否還能改。滿 3 個但未除名時是什麼身分。", en: "After late August: does failing stage 5, reaching 3 strikes or removal take someone off the Roster, and can iGEM still change it? What status does someone at 3 strikes who is not removed hold?" },
  { zh: "組別會議 50%：何時檢查、Roster 審核時如何算到當時為止、暑期算不算、跨組任務算哪一組。每月 2 次遠低於每週一場的一半：全年 24 場對 52 場只有 46%，所以 50% 才是真正的門檻。", en: "Group meeting 50%: when it is checked, how it counts at the Roster review, whether summer counts, which group a cross-team task belongs to. Two a month misses half of a weekly meeting: 24 of 52 is 46%, so 50% is the real bar." },
  { zh: "月報逾期 1–14 天怎麼處理；超過兩週後還要不要補交，「當月無產出」實際影響什麼；第一份與最後一份月報是哪個月；instructor 幾天內確認。", en: "What happens 1–14 days late; whether a report over two weeks late must still be handed in, and what “no output that month” changes; which months the first and last reports cover; how fast instructors confirm." },
  { zh: "每位 advisor 的主責 instructor 是誰；strike 的第二位簽署人；哪兩位擔任 Advisor 驗收；誰代表 GEMS 決定 Roster 名單。", en: "Each advisor’s lead instructor; the second strike signer; which two instructors take advisor verification; who decides the Roster list for GEMS." },
  { zh: "改善期限多長、誰定。申訴期限多長，申訴期間 strike 是否生效。", en: "How long an improvement period is and who sets it. How long an appeal may take, and whether a strike stands during it." },
  { zh: "第 3 階段隊員回饋：什麼形式、誰收、是否匿名、誰看得到。", en: "Stage 3 member feedback: what form, who collects it, whether it is anonymous, who sees it." },
  { zh: "權限：Hub 怎麼依身分登入；60 Advisors 要如何做到每人只寫自己的資料夾，隊員看得到多少。「誰看得到什麼」表需要定案。", en: "Access: how the Hub knows who is viewing; how 60 Advisors lets each advisor write only their own folder, and how much the team can read. The “who sees what” table needs a decision." },
  { zh: "Advisor 人數。目前以 5–10 位估算，依實際簽署為準。", en: "The number of advisors. Estimated at 5–10 until forms are signed." },
  { zh: "組別會議與 advisor 月會各多長；自主會議的出席者要有誰；這些會議與模擬 judging 能否計入實體時數。", en: "How long group and advisor meetings run; who must attend a self-run meeting; whether these and mock judging count toward on-site hours." },
  { zh: "「事先告知」要多早、用什麼形式才算，排除 strike 的考試或申請時段記在哪裡。", en: "How early and in what form “told in advance” must be, and where exempt exam or application periods are recorded." },
  { zh: "考核場次：月會不一定落在階段結束日，每階段的考核日怎麼排；書面結果幾天內、由誰用什麼方式交給學生與家長。", en: "Review dates: the monthly meeting may not fall on a stage’s last day, so how are they set? How soon, by whom and how do written results reach student and parents?" }
];
