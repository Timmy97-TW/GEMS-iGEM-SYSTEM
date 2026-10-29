// All page content, in both languages. app.js renders from here.
const T = {
  zh: {
    "nav.problems": "問題", "nav.audit": "健檢", "nav.arch": "架構", "nav.depth": "結構",
    "nav.people": "人力", "nav.time": "時程", "nav.facts": "事實表", "nav.std": "標準化", "nav.flow": "流程",
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
    "depth.states": "每份文件只有一個狀態欄，檔名不寫版本。審稿是一個動作，不是一個狀態。",
    "depth.template": "四個隊伍資料夾，裡面都是同一套",

    "ppl.eyebrow": "人力",
    "ppl.title": "五十個人，<br>各顧一件事。",
    "ppl.sub": "13 個學生管理員：每條素材流有人顧，每個隊伍資料夾有人顧。instructor 只做驗證和範本，其餘時間開發。",
    "ppl.students": "學生", "ppl.advisors": "學生 advisor", "ppl.staff": "Instructor 與 Ops",
    "ppl.note": "每週時數為估計值。30 個學生全部都是 page owner，各負責 1–2 頁 wiki。",

    "time.eyebrow": "時程",
    "time.title": "從截止日<br>往回排。",
    "time.sub": "日期以 2026 年 iGEM 時程為參考，2027 年公布後更新。",
    "lane.deadline": "iGEM 截止", "lane.gate": "素材到位", "lane.ritual": "固定節奏",

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
    "nav.people": "People", "nav.time": "Timeline", "nav.facts": "Facts", "nav.std": "Standards", "nav.flow": "Flow",
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
    "depth.states": "Each document carries one status field. File names never carry a version. Review is an action, not a state.",
    "depth.template": "All four team folders share one template",

    "ppl.eyebrow": "People",
    "ppl.title": "Fifty people.<br>Each owns one thing.",
    "ppl.sub": "Thirteen student stewards: one for every stream and every team folder. Instructors verify and maintain templates, and spend the rest of their time on development.",
    "ppl.students": "Students", "ppl.advisors": "Student advisors", "ppl.staff": "Instructors & Ops",
    "ppl.note": "Weekly hours are estimates. All 30 students are page owners, each responsible for one or two wiki pages.",

    "time.eyebrow": "Timeline",
    "time.title": "Planned backwards<br>from the deadlines.",
    "time.sub": "Dates follow the 2026 iGEM calendar and will be updated when 2027 is announced.",
    "lane.deadline": "iGEM deadlines", "lane.gate": "Assets ready", "lane.ritual": "Routines",

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
    steward: { zh: "素材管理員 ×2，每週 1.5 小時；導師 ×1", en: "Media stewards ×2, 1.5 h a week; mentor ×1" },
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
    steward: { zh: "事實與 Registry 管理員 ×2；advisor 初審，instructor 簽核", en: "Facts & Registry stewards ×2; advisor reviews, instructor signs off" },
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
    holds: { zh: "新人手冊、Hub 表（所有分頁）、行事曆、術語表、下一年的資料夾範本", en: "Handbook, the Hub sheet with all its tabs, calendar, glossary, next year’s folder template" },
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
    holds: { zh: "十二月到二月的選題：個人提案、前五名、最終提案", en: "December to February topic selection: proposals, top five, final proposal" },
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
  { id: "d90", name: "90 Archive", drive: "team", kind: "every",
    kids: ["Raw footage", "Frozen PDFs", "2026"],
    holds: { zh: "剪完的原始影片、凍結的 PDF、往年資料", en: "Raw footage after editing, frozen PDFs, past seasons" },
    edit: { zh: "唯讀；Ops 搬入", en: "Read only; Ops moves things in" },
    rule: { zh: "freeze 後跑一次 Drive 健檢，再把每份 master doc 匯出成 PDF。", en: "After freeze: run the Drive audit, then export every master doc as PDF." },
    from: ["Presentation Video / Not usable", "Gallery / Others（未標記）"] },
  { id: "ops", name: "ReLEAF Ops", drive: "ops", kind: "ops",
    kids: ["Finance", "Consent forms", "Official documents", "Instructor meetings", "Advisors"],
    holds: { zh: "財務、同意書、邀請函與票券、instructor 會議、advisor 文件", en: "Finance, consent forms, invitations and tickets, instructor meetings, advisor papers" },
    edit: { zh: "Instructor 與 Ops", en: "Instructors & Ops" },
    rule: { zh: "獨立的共用雲端硬碟，學生看不到。", en: "A separate shared drive that students cannot see." },
    from: ["Official document", "*Administration", "Advisors（空的）"] },
  { id: "git", name: "GitHub / GitLab", drive: "out", kind: "out",
    kids: ["digital-twin", "sensors", "docking", "wiki"],
    holds: { zh: "所有程式碼、分析腳本、韌體", en: "All code, analysis scripts, firmware" },
    edit: { zh: "乾實驗、硬體隊", en: "Dry-lab and hardware teams" },
    rule: { zh: "Drive 只放連結。2026 有 1,411 個虛擬環境檔案和 1,341 個空資料夾來自程式碼。", en: "Drive holds only links. In 2026, code brought 1,411 virtual-env items and 1,341 empty folders." },
    from: ["2. Drylab / Digital Twin", "2. Drylab / Stress Index / AIoT Sensors", "Docking scripts"] }
];

const LAYERS = [
  { n: "00–20", name: { zh: "每年都有", en: "Every year" }, d: { zh: "Start Here、Training、Topic、Media、Deliverables、Archive。名稱和位置年年一樣。", en: "Start Here, Training, Topic, Media, Deliverables, Archive. Same names, same places, every year." } },
  { n: "31–34", name: { zh: "四個隊伍", en: "Four teams" }, d: { zh: "Wetlab、Drylab、Hardware、HP。裡面同一套範本。", en: "Wet lab, dry lab, hardware, HP. One template inside each." } },
  { n: "Projects", name: { zh: "當年的題目", en: "This year’s topic" }, d: { zh: "Bioreactor、BoPEP4 這類只活一年的東西，只能放在隊伍的 Projects 底下。", en: "Things that live one season, like the bioreactor or BoPEP4, sit only under a team’s Projects." } }
];

const STATES = [
  { name: { zh: "草稿", en: "Draft" }, d: { zh: "任何人可改", en: "Anyone edits" } },
  { name: { zh: "定稿", en: "Final" }, d: { zh: "advisor 審過、instructor 簽核", en: "Advisor reviewed, instructor signed" } },
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
  { id: "mentor", tier: "a", count: 5, color: "gold", hrs: "1 h",
    name: { zh: "素材流導師", en: "Stream mentor" },
    d: { zh: "每條素材流一位，帶管理員、做初審。", en: "One per stream: coach the stewards, do first review." } },
  { id: "reviewer", tier: "a", count: 3, color: "gold2", hrs: "1 h",
    name: { zh: "頁面審稿", en: "Page reviewer" },
    d: { zh: "審 wiki master doc，人數依 advisor 多寡調整。", en: "Review wiki master docs; scales with advisor numbers." } },
  { id: "verify", tier: "i", count: 3, color: "ink", hrs: "1 h",
    name: { zh: "事實驗證", en: "Fact verification" },
    d: { zh: "濕實驗、乾實驗、硬體各一位，簽核事實與證據圖。", en: "One each for wet lab, dry lab and hardware; sign off facts and evidentiary figures." } },
  { id: "tmpl", tier: "i", count: 1, color: "ink", hrs: "2 h",
    name: { zh: "範本與腳本", en: "Templates & scripts" },
    d: { zh: "頁面範本、docs 轉 HTML、建置檢查、Drive 健檢。", en: "Page templates, Docs-to-HTML, build checks, the Drive audit." } },
  { id: "ops", tier: "i", count: 2, color: "ink", hrs: "1 h",
    name: { zh: "Ops", en: "Ops" },
    d: { zh: "Drive 與 Discord 所有權、同意書、財務、Archive。", en: "Drive and Discord ownership, consent forms, finance, Archive." } },
  { id: "dev", tier: "i", count: 6, color: "ink2", hrs: "0 h",
    name: { zh: "專心開發", en: "Development only" },
    d: { zh: "不分配管理職責。這就是整套系統的目的。", en: "No management duties. This is what the system is for." } }
];

// Timeline. Dates are 2026–27 season positions, using the 2026 iGEM calendar.
const TIMELINE = [
  { date: "2026-12-13", lane: "gate", t: { zh: "開季", en: "Kick-off" },
    d: { zh: "從 00 Start Here 的範本複製出整個 Drive；分派角色；Hub 表與 Discord 建好。", en: "The whole Drive copied from the template in 00 Start Here; roles assigned; Hub sheet and Discord set up." } },
  { date: "2027-01-31", lane: "gate", t: { zh: "master doc 全部開好", en: "All master docs open" },
    d: { zh: "每個交付物有骨架和評審標準；兩支影片各有一頁故事線。", en: "Every deliverable has a skeleton and its judging criteria; each video has a one-page story." } },
  { date: "2027-02-14", lane: "gate", t: { zh: "題目定案", en: "Topic chosen" },
    d: { zh: "20 Topic 凍結；各隊在 Projects 底下開當年的專案資料夾。", en: "20 Topic frozen; each team opens this year’s project folders under Projects." } },
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
    d: { zh: "", en: "" } }
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
        row: { 4: { zh: "advisor ✓ instructor ✓", en: "advisor ✓ instructor ✓" } },
        act: { zh: "advisor 看單位與樣本數，instructor 對照原始資料簽核。從此可以被引用。", en: "An advisor checks unit and n; the instructor signs off against the raw data. Now it can be cited." } },
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
