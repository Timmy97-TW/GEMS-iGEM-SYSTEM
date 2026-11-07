// All page content, in both languages. app.js renders from here.
const T = {
  zh: {
    "nav.system": "系統", "nav.year": "文件年表",
    "sys.eyebrow": "系統", "sys.title": "七條規則，<br>三道硬關卡。",
    "sys.sub": "2026 的東西大多不是沒做，是做了沒被接住。真正活下來的有共同點：有外部截止日，或有人當週就要用。",
    "sys.tag": "提案 · 系統規格 v0.2 與 Drive 規格 v0.3 · 尚未經 PI 確認",
    "sys.lessons": "2026 學到的", "sys.rules": "七條設計規則", "sys.gates": "三道硬關卡", "sys.gates.sub": "用關卡擋，不用提醒。Flow 那一節可以看到每一道怎麼擋人。",
    "sys.gate.who": "誰擋", "sys.gate.why": "為什麼",
    "sys.ids": "ID 體系", "sys.ids.sub": "整個系統的骨幹。ID 自動產生，學生不用自己編。", "sys.ids.th": ["ID", "是什麼", "誰建", "Hub 分頁"],
    "sys.layers": "每一層放什麼", "sys.layers.th": ["層", "工具", "放什麼", "不放什麼"],
    "sys.hub": "Hub 分頁與它的讀者", "sys.hub.sub": "沒有讀者就不建。Ops Hub 只有老師看得到，內容不公開。", "sys.hub.th": ["分頁", "讀者", "哪一天", "用來決定什麼"],
    "sys.replaced": "舊追蹤表去哪了", "sys.replaced.th": ["2026", "2027"],
    "year.eyebrow": "文件年表", "year.title": "每份文件，<br>何時誕生，餵給誰。",
    "year.sub": "2026 年 11 月到 2027 年 11 月。按播放，或拖動時間軸，看文件在各條泳道誕生。點任何一份，看它的規則、負責人、讀者、範本和位置。",
    "year.note": "提案。文件名、範本和位置取自 Drive 規格 v0.3 與之後的變更，建好 Drive 後可能更名。標 ? 的是 iGEM 尚未公布的推估：算法是 2026 官方日 +350 天（整 50 週，星期不變，日期會比官方日早約 15 天）。iGEM 2027 日程官方尚未公布，2026 賽季的 Jamboree 資訊是 4 月才公布的。Wiki Freeze 顯示 10/6–13?，內部關卡從 10/6 往回排。",
    "year.play": "播放", "year.pause": "暫停", "year.prev": "上個月", "year.next": "下個月", "year.scrub": "拖動時間軸",
    "year.count": "份文件已誕生", "year.latest": "剛誕生", "year.today": "今天",
    "year.phase": "階段", "year.cal": "學校與考試", "year.igem": "iGEM 截止", "year.gate": "關卡",
    "year.legend.hard": "硬關卡", "year.legend.node": "節點關卡", "year.legend.est": "? 推估",
    "year.owner": "誰產出", "year.reader": "誰讀", "year.rule": "規則", "year.tpl": "範本", "year.loc": "位置", "year.date": "誕生", "year.until": "持續到", "year.from": "來自", "year.to": "餵給", "year.gatek": "關卡", "year.id": "ID",
    "year.hint": "點時間軸上任何一份文件。", "year.nofeed": "下一年",
    "year.gate.rq": "沒有 RQ 就沒有 L", "year.gate.lic": "沒有授權，原圖不上 wiki", "year.gate.k": "沒有同意就不發布", "year.gate.f": "沒有來源就不進 wiki", "year.gate.file": "沒有檔案就不算紀錄", "year.gate.node": "節點關卡",
    "flow.gate": "關卡", "flow.blocked": "擋下", "flow.passed": "通過",
    "time.owner": "負責", "time.ok": "驗收", "time.pass": "通過條件", "time.tbd": "時程上待決定", "time.tbd.sub": "時程表自己標出的衝突。不是定案，也不代替 PI 決定。", "lane.school": "學校與考試", "proposed": "提案",
    "nav.problems": "問題", "nav.audit": "健檢", "nav.arch": "架構", "nav.depth": "結構",
    "nav.people": "人力", "nav.advisor": "Advisor", "nav.time": "時程", "nav.facts": "事實表", "nav.std": "標準化", "nav.flow": "流程",
    "flow.eyebrow": "流程",
    "flow.title": "一筆紀錄的一生。",
    "flow.sub": "六個例子：一題研究、一筆 Run、一次互動、一個題目、一條序列、一份 Advisor 產出。每個例子都會撞到關卡一次，看它怎麼被擋下，又怎麼過關。ID、檔名和位置是提案。",
    "flow.step": "步驟", "flow.who": "經手", "flow.file": "檔案", "flow.state": "狀態",
    "flow.prev": "上一步", "flow.next": "下一步", "flow.play": "播放", "flow.pause": "暫停",
    "flow.owners": "管理",
    "hero.eyebrow": "GEMS Taiwan · iGEM 2027",
    "hero.title": "一套系統。<br>五個交付物。",
    "hero.sub": "2026 年花在找檔案、對數字、重做頁面的時間，2027 年還給研究。這是系統提案，待 PI 確認。",
    "stat.people": "位學生，約 10 位 advisor", "stat.streams": "種 ID", "stat.registers": "道硬關卡", "stat.deadlines": "個年度節點",

    "prob.eyebrow": "2026 回顧",
    "prob.title": "今年的系統，<br>壞在哪裡。",
    "prob.sub": "十二件事，全部來自今年的 wiki 原始碼、Google Drive 和工作紀錄。",

    "audit.eyebrow": "2026 Drive 健檢",
    "audit.title": "16,191 個項目，<br>103 GB。",
    "audit.sub": "逐一讀過 2026 年共用資料夾的每個檔名、大小和日期，沒有打開任何檔案。",
    "audit.photos": "照片散在六個地方",
    "audit.photos.note": "張圖片（10/29 的中繼資料；11/4 較新的匯出裡 Wiki Pages 是 1,459 張，HP 是 156 張）。光是 Gallery 裡面就有三套分類方式。",
    "audit.size": "103 GB 裡面是什麼",
    "audit.hw": "一個硬體專案出現在四個地方",
    "audit.keep": "值得留下的做法",

    "arch.eyebrow": "架構",
    "arch.title": "五條素材流，<br>一張 Hub，<br>五個交付物。",
    "arch.sub": "每筆素材有一個 ID，登記一次，在 Hub 的對應分頁。交付物只引用 ID，不複製。",
    "arch.col.streams": "素材流", "arch.col.registers": "Hub 表分頁", "arch.col.deliverables": "交付物",
    "lbl.intake": "入口", "lbl.steward": "負責", "lbl.fields": "欄位", "lbl.output": "輸出",
    "lbl.rule": "規則", "lbl.feeds": "來源", "lbl.deadline": "截止",
    "lbl.edit": "可編輯", "lbl.holds": "內容", "lbl.time": "每週", "lbl.from": "2026 年的來源",

    "depth.eyebrow": "結構",
    "depth.title": "固定的骨架，<br>每年換的專案。",
    "depth.sub": "頂層資料夾每年都一樣。只有 Projects 底下的子資料夾跟著當年的題目換。",
    "depth.tree": "2027 Google Drive",
    "depth.states": "每份文件只有一個狀態欄，檔名只在原始檔寫版本。審稿是一個動作，不是一個狀態；簽核的判斷責任在 instructor。",
    "depth.template": "四個隊伍資料夾的共同骨架",

    "ppl.eyebrow": "人力",
    "ppl.title": "每個人，<br>各顧一件事。",
    "ppl.sub": "約 30 位學生、10 位 advisor，加上 12 位老師與 Ops。下面每個席位都寫清楚擁有什麼、每週做什麼、花多少時間、什麼時候最忙、誰是備援。全部是提案，還沒有指派任何人。",
    "ppl.students": "學生", "ppl.advisors": "學生 advisor", "ppl.staff": "Instructor 與 Ops",
    "ppl.note": "時數都是估算，沒有實測。標「提案」的角色待 PI 確認，見<a href=\"advisors.html#adv-tbd\">待決定</a>。Advisor 的階段、時數與驗收負擔見 <a href=\"advisors.html\">Student Advisor</a>。",

    "adv.eyebrow": "Advisor 計畫",
    "adv.title": "從參與者，<br>到 advisor。",
    "adv.sub": "2026 隊員在 2027 隊伍裡的下一步。時數只是底線，Team Roster 的資格來自每個階段經 instructor 驗收的實質產出。",
    "adv.source": "規則整理自 2027 Advisor 參與同意書 v3。資料夾、檔名、範本與表格欄位是系統提案。標為「待決定」的地方同意書沒有寫，要先定案才能運作。",
    "adv.floor": "每個月的底線",
    "adv.floor.note": "達到底線不等於通過驗收。暑期集訓（7/1–8/10）的實體時數改為至少 6 天、48 小時，不另計每月實體時數。Wiki freeze 後維持每月 8 小時，並至少參加 2 次模擬 judging。離台就學後，實體時數可改以線上完成。",
    "adv.stages": "五個階段",
    "adv.stages.note": "時間軸與下方時程同一把尺。Freeze 與 Jamboree 用 2027 推估（10/6–13?、10/29?），以 iGEM 公布為準。階段文字照同意書，與時程不一致處列在待決定。",
    "adv.map": "每件事放哪裡",
    "adv.map.sub": "每位 advisor 只有兩個入口：自己的資料夾放檔案，一張 ADV-F1 表單交連結。Ops 資料夾學生看不到，所以由表單寫進 Ops Hub 的 ADV_LOG。A01 代表 advisor 編號。主責 instructor 的指派 <a class=\"tbd\" href=\"#adv-tbd\">待決定 11</a>",
    "adv.th.duty": "項目", "adv.th.loc": "存放或輸入位置", "adv.th.file": "檔名", "adv.th.tpl": "範本", "adv.th.who": "提交", "adv.th.ver": "驗證", "adv.th.due": "期限", "adv.th.row": "Register 列",
    "adv.tree": "一位 advisor 的資料夾",
    "adv.tree.note": "隊伍要用的成果（例如 101、wiki 章節）放在隊伍的家（31–34、50 Deliverables），S 資料夾只放 Drive 捷徑，並在表單交同一個連結。不複製。",
    "adv.state": "資格怎麼走",
    "adv.state.sub": "點任何一格看條件。虛線框表示有待決定的規則。",
    "adv.load": "Instructor 的驗收負擔", "adv.load.sub": "次數來自同意書，每次分鐘數是估計值。週六到場指導不計入。",
    "adv.load.th": ["工作", "全年次數", "每次（估計）", "全年時數"],
    "adv.load.total": "全年合計", "adv.load.week": "兩位驗收 instructor 平均每人每週", "adv.load.peak": "階段結束時的尖峰（驗收加書面）",
    "adv.tbd": "待決定", "adv.tbd.sub": "同意書沒有寫、或與時程表不一致，系統運作又需要答案的地方。這裡只列問題，不改同意書的任何規則。",

    "time.eyebrow": "時程",
    "time.title": "從截止日<br>往回排。",
    "time.sub": "依 PI 的 2027 時程表和系統規格 v0.2（提案）。標 ? 的是 iGEM 尚未公布的推估，算法是 2026 官方日 +350 天。Wiki Freeze 月曆寫 10/13，推估分頁寫 10/6，所以顯示 10/6–13?，內部關卡從 10/6 往回排。官方 2026 實際日為 Wiki Freeze 10/21、Presentation Video 10/28、Team Roster Freeze 9/16、Jamboree 11/12–16（巴黎），所以真實的 2027 日期也可能比內部關卡晚兩到四週；偏早是刻意留的緩衝。",
    "lane.deadline": "iGEM 截止（?＝推估）", "lane.gate": "團隊節點", "lane.adv": "Advisor 階段", "lane.ritual": "固定節奏",

    "facts.eyebrow": "事實表",
    "facts.title": "每個事實，<br>只有一個家。",
    "facts.sub": "wiki、影片、展板、簡報都連到同一個 Facts 分頁，不抄數字。建置時由腳本檢查每一頁。",
    "facts.lint": "建置檢查（示意）",

    "std.eyebrow": "Wiki 標準化",
    "std.title": "範本寫一次，<br>內容填一整年。",
    "std.sub": "instructor 一次寫好範本、轉換器和檢查腳本。學生只填 Google Docs 和 Hub，頁面由程式產生。",
    "std.now": "2026", "std.next": "2027",

    "foot.line": "GEMS Taiwan iGEM · 2027 系統提案（Drive 規格 v0.3，待 PI 確認）· 依 2026 年的經驗、文件稽核與 PI 的 2027 時程表整理"
  },
  en: {
    "nav.system": "System", "nav.year": "Year",
    "sys.eyebrow": "System", "sys.title": "Seven rules.<br>Three hard gates.",
    "sys.sub": "Most of 2026 got done; it just was not caught by anything. What survived had one thing in common: an outside deadline, or someone who needed it that week.",
    "sys.tag": "Proposal · system spec v0.2 and Drive spec v0.3 · not yet confirmed by the PI",
    "sys.lessons": "What 2026 taught", "sys.rules": "Seven design rules", "sys.gates": "Three hard gates", "sys.gates.sub": "Gates, not reminders. The Flow section shows each one stopping something.",
    "sys.gate.who": "Who holds it", "sys.gate.why": "Why",
    "sys.ids": "The ID system", "sys.ids.sub": "The backbone of the whole system. IDs are automatic; students never invent them.", "sys.ids.th": ["ID", "What it is", "Created by", "Hub tab"],
    "sys.layers": "What goes where", "sys.layers.th": ["Layer", "Tool", "Holds", "Never holds"],
    "sys.hub": "Hub tabs and their readers", "sys.hub.sub": "No reader, no tab. The Ops Hub is for instructors only and its contents are not public.", "sys.hub.th": ["Tab", "Reader", "When", "Decides"],
    "sys.replaced": "Where the old trackers went", "sys.replaced.th": ["2026", "2027"],
    "year.eyebrow": "The year of documents", "year.title": "When each document<br>is born, and what it feeds.",
    "year.sub": "November 2026 to November 2027. Press play or drag along the year to watch documents appear on each swimlane. Click one for its rule, owner, reader, template and location.",
    "year.note": "A proposal. Names, templates and locations come from Drive spec v0.3 and the changes after it, and may change once the Drive is built. Dates with ? are estimates until iGEM announces: each is the official 2026 date plus 350 days (exactly 50 weeks, so the weekday holds and the date lands about 15 days earlier than the official one). iGEM has not published the 2027 calendar; in 2026 the Jamboree details came out in April. Wiki Freeze shows as 6–13 Oct?, and internal gates back-plan from 6 Oct.",
    "year.play": "Play", "year.pause": "Pause", "year.prev": "Previous month", "year.next": "Next month", "year.scrub": "Drag along the year",
    "year.count": "documents so far", "year.latest": "Just born", "year.today": "Today",
    "year.phase": "Phase", "year.cal": "School & exams", "year.igem": "iGEM deadlines", "year.gate": "Gates",
    "year.legend.hard": "Hard gate", "year.legend.node": "Node gate", "year.legend.est": "? estimate",
    "year.owner": "Produced by", "year.reader": "Read by", "year.rule": "Rule", "year.tpl": "Template", "year.loc": "Location", "year.date": "Born", "year.until": "Live until", "year.from": "Fed by", "year.to": "Feeds", "year.gatek": "Gate", "year.id": "ID",
    "year.hint": "Click any document on the timeline.", "year.nofeed": "Next year",
    "year.gate.rq": "No RQ, no L", "year.gate.lic": "No licence, no original figure on the wiki", "year.gate.k": "No consent, no publishing", "year.gate.f": "No source, no wiki", "year.gate.file": "No file, no record", "year.gate.node": "Node gate",
    "flow.gate": "Gate", "flow.blocked": "Stopped", "flow.passed": "Passed",
    "time.owner": "Owner", "time.ok": "Accepted by", "time.pass": "Passes when", "time.tbd": "Still to decide in the schedule", "time.tbd.sub": "Conflicts the schedule itself flags. None of this is settled, and nothing here decides for the PI.", "lane.school": "School & exams", "proposed": "Proposed",
    "nav.problems": "Problems", "nav.audit": "Audit", "nav.arch": "Architecture", "nav.depth": "Structure",
    "nav.people": "People", "nav.advisor": "Advisors", "nav.time": "Timeline", "nav.facts": "Facts", "nav.std": "Standards", "nav.flow": "Flow",
    "flow.eyebrow": "Flow",
    "flow.title": "The life of a record.",
    "flow.sub": "Six examples: a piece of research, a Run, an interaction, a topic, a sequence and an advisor output. Each one hits a gate, so you can see it stopped and then let through. IDs, file names and locations are proposals.",
    "flow.step": "Step", "flow.who": "Handled by", "flow.file": "File", "flow.state": "State",
    "flow.prev": "Previous step", "flow.next": "Next step", "flow.play": "Play", "flow.pause": "Pause",
    "flow.owners": "Owners",
    "hero.eyebrow": "GEMS Taiwan · iGEM 2027",
    "hero.title": "One system.<br>Five deliverables.",
    "hero.sub": "The hours 2026 spent finding files, checking numbers and rebuilding pages go back to research in 2027. This is a system proposal, awaiting the PI.",
    "stat.people": "students, about 10 advisors", "stat.streams": "ID types", "stat.registers": "hard gates", "stat.deadlines": "year nodes",

    "prob.eyebrow": "2026 in review",
    "prob.title": "Where this year’s<br>system broke.",
    "prob.sub": "Twelve problems, each taken from this year’s wiki source, Google Drive and work log.",

    "audit.eyebrow": "2026 Drive audit",
    "audit.title": "16,191 items.<br>103 GB.",
    "audit.sub": "Every name, size and date in the 2026 shared folder, read without opening a single file.",
    "audit.photos": "Photos lived in six places",
    "audit.photos.note": "images (metadata from 29 Oct; a newer 4 Nov export has 1,459 in Wiki Pages and 156 in HP). Gallery alone used three different filing schemes.",
    "audit.size": "What the 103 GB is",
    "audit.hw": "One hardware project lived in four places",
    "audit.keep": "Worth keeping",

    "arch.eyebrow": "Architecture",
    "arch.title": "Five streams.<br>One Hub.<br>Five deliverables.",
    "arch.sub": "Every asset has one ID, logged once on its Hub tab. Deliverables cite IDs and never copy.",
    "arch.col.streams": "Streams", "arch.col.registers": "Hub sheet tabs", "arch.col.deliverables": "Deliverables",
    "lbl.intake": "Intake", "lbl.steward": "Owner", "lbl.fields": "Fields", "lbl.output": "Output",
    "lbl.rule": "Rule", "lbl.feeds": "Draws on", "lbl.deadline": "Due",
    "lbl.edit": "Edited by", "lbl.holds": "Holds", "lbl.time": "Per week", "lbl.from": "From 2026",

    "depth.eyebrow": "Structure",
    "depth.title": "A fixed skeleton.<br>Projects that change.",
    "depth.sub": "The top-level folders are the same every year. Only the subfolders under Projects change with the year’s topic.",
    "depth.tree": "2027 Google Drive",
    "depth.states": "Each document carries one status field. Only raw files carry a version in their name. Review is an action, not a state, and the sign-off judgement stays with the instructor.",
    "depth.template": "The skeleton all four team folders share",

    "ppl.eyebrow": "People",
    "ppl.title": "Everyone<br>owns one thing.",
    "ppl.sub": "About 30 students and 10 advisors, plus 12 instructors and Ops. Each seat below says what it owns, its weekly duties, its time, its busy weeks and its backup. All of it is a proposal; nobody has been assigned.",
    "ppl.students": "Students", "ppl.advisors": "Student advisors", "ppl.staff": "Instructors & Ops",
    "ppl.note": "All hours are estimates and have not been measured. Roles marked proposed await the PI; see <a href=\"advisors.html#adv-tbd\">to be decided</a>. Advisor stages, hours and verification load are under <a href=\"advisors.html\">Student Advisor</a>.",

    "adv.eyebrow": "Advisor programme",
    "adv.title": "From participant<br>to advisor.",
    "adv.sub": "The next step for 2026 members on the 2027 team. Hours are only the floor; a Team Roster place comes from real output that an instructor has accepted at each stage.",
    "adv.source": "Rules are taken from the 2027 Advisor consent form, v3. Folders, file names, templates and register columns are the system’s proposal. Anything marked TBD is not in the form and has to be settled before this can run.",
    "adv.floor": "The monthly floor",
    "adv.floor.note": "Meeting the floor does not mean passing a review. During the summer intensive (1 Jul–10 Aug) the on-site floor becomes at least 6 days and 48 hours, with no separate monthly on-site hours. After wiki freeze: 8 hours a month and at least 2 mock judging sessions. After leaving Taiwan for school, on-site hours may be done online.",
    "adv.stages": "Five stages",
    "adv.stages.note": "The track uses the same scale as the timeline below. Freeze and Jamboree use the 2027 estimates (6–13 Oct?, 29 Oct?) until iGEM announces. Stage wording follows the form; where it differs from the schedule is on the to-be-decided list.",
    "adv.map": "Where everything goes",
    "adv.map.sub": "Each advisor has two entry points: their own folder for files, and one form, ADV-F1, for links. Students cannot see the Ops folder, so the form is what writes to the Ops Hub’s ADV_LOG. A01 stands for the advisor ID. Assigning lead instructors: <a class=\"tbd\" href=\"#adv-tbd\">TBD 11</a>",
    "adv.th.duty": "Item", "adv.th.loc": "Stored or entered at", "adv.th.file": "File name", "adv.th.tpl": "Template", "adv.th.who": "Submits", "adv.th.ver": "Verifies", "adv.th.due": "Due", "adv.th.row": "Register row",
    "adv.tree": "One advisor’s folder",
    "adv.tree.note": "Work the team uses (a 101, a wiki section) lives in the team’s home (31–34, 50 Deliverables). The S folder holds a Drive shortcut and the form gets the same link. Nothing is copied.",
    "adv.state": "How qualification moves",
    "adv.state.sub": "Click any box for its conditions. A dashed box has a rule still to be decided.",
    "adv.load": "Instructor verification load", "adv.load.sub": "Counts come from the form; minutes per item are estimates. Saturday supervision is not included.",
    "adv.load.th": ["Work", "A year", "Each (est.)", "Hours a year"],
    "adv.load.total": "Year total", "adv.load.week": "Average per week, each of two verifying instructors", "adv.load.peak": "Peak at each stage end (reviews and written results)",
    "adv.tbd": "To be decided", "adv.tbd.sub": "Where the form is silent or differs from the schedule and the system still needs an answer. This lists questions only and changes no rule in the form.",

    "time.eyebrow": "Timeline",
    "time.title": "Planned backwards<br>from the deadlines.",
    "time.sub": "From the PI’s 2027 schedule and system spec v0.2 (a proposal). Dates with ? are estimates until iGEM announces, each being the official 2026 date plus 350 days. The Wiki Freeze grid says 13 Oct and the estimate tab 6 Oct, so it shows as 6–13 Oct?, and internal gates back-plan from 6 Oct. For reference, the official 2026 dates were Wiki Freeze 21 Oct, Presentation Video 28 Oct, Team Roster Freeze 16 Sep and the Jamboree 12–16 Nov in Paris, so the real 2027 dates may land two to four weeks later than our gates. Being early is deliberate buffer.",
    "lane.deadline": "iGEM deadlines (? = estimate)", "lane.gate": "Team nodes", "lane.adv": "Advisor stages", "lane.ritual": "Routines",

    "facts.eyebrow": "Fact sheet",
    "facts.title": "Every fact<br>has one home.",
    "facts.sub": "The wiki, videos, booth and slides all link to one Facts tab and never copy a number. The build checks every page against it.",
    "facts.lint": "Build check (illustration)",

    "std.eyebrow": "Wiki standards",
    "std.title": "Write the template once.<br>Fill it all year.",
    "std.sub": "Instructors write the templates, converters and checks once. Students fill Google Docs and the Hub, and the pages are generated.",
    "std.now": "2026", "std.next": "2027",

    "foot.line": "GEMS Taiwan iGEM · 2027 system proposal (Drive spec v0.3, awaiting the PI) · drawn from the 2026 season, its document audit and the PI’s 2027 schedule"
  }
};

const PROBLEMS = [
  { t: { zh: "找不到最新版", en: "Nobody knew which version was latest" },
    d: { zh: "同一份內容有多份副本，學生的 docx 一版一版寄來。", en: "The same content lived in several copies; student drafts arrived as one docx after another." } },
  { t: { zh: "資料夾依「誰做的」分", en: "Folders sorted by who made things" },
    d: { zh: "同一個硬體專案出現在四個資料夾；硬體沒有自己的家，散在 Drylab、Wetlab 和 Research Integration。", en: "One hardware project appears in four folders; hardware had no home and was split across Drylab, Wetlab and Research Integration." } },
  { t: { zh: "數字前後不一", en: "Numbers disagreed across pages" },
    d: { zh: "同一個數字抄進好幾頁；freeze 當天還發現一張圖的單位差了 1000 倍。", en: "One number was copied into several pages; on freeze day a chart was still found 1000× off." } },
  { t: { zh: "名稱沒有統一", en: "Names had no canon" },
    d: { zh: "同一個名稱有三種大小寫，在 wiki 裡分別出現 265、257、22 次。", en: "One name had three spellings, appearing 265, 257 and 22 times across the wiki." } },
  { t: { zh: "到十月才收斂", en: "Everything converged in October" },
    d: { zh: "wiki 的形狀最後才出現。每交一版新 docx，頁面就重做一次，全年超過 20 次；freeze 前兩天的修正紀錄有 378 列。", en: "The wiki’s shape appeared last. Each new docx meant rebuilding a page, more than 20 times this year; the last two days before freeze logged 378 fixes." } },
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
    { n: "1,411", t: { zh: "個項目是 Python 虛擬環境（只有 2.8 MB，是雜訊不是容量）", en: "items inside a Python virtual env (only 2.8 MB: noise, not storage)" } },
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
    "*Research Integration / <device>",
    "1. Wetlab / Experiment Data / <device>",
    "2. Drylab / CAD files / <device> Models",
    "Presentation Video / #6 Hardware"
  ],
  keep: [
    { zh: "序列資料夾裡 Cloning Products 的分層。依 part 類型分的資料夾其實只涵蓋 27/492 檔，不算成功。", en: "The layering of Cloning Products in the sequence folder. The part-type folders held only 27 of 492 files, so that is not the model." },
    { zh: "Presentation 素材依腳本段落編號：#1 開場到 #10 片尾。", en: "Presentation clips numbered by script section, #1 opening to #10 credits." },
    { zh: "濕實驗訓練與作業依日期命名，但只用一種日期格式。", en: "Wet-lab training and homework named by date, with one date format only." },
    { zh: "照片依月份歸檔，檔名帶日期與組別。", en: "Photos filed by month, names carrying date and team." },
    { zh: "Wiki 總表：每頁有 content owner、cross-checker 和老師。", en: "The wiki overview: each page has a content owner, a cross-checker and an instructor." }
  ]
};

// Architecture graph. Columns: streams -> Hub tabs -> deliverables.
const STREAMS = [
  { id: "s-records", color: "teal", to: ["t-runs", "t-constructs"],
    name: { zh: "實驗與運算紀錄", en: "Lab and compute records" },
    intake: { zh: "每次實驗、運算或測試一筆 Run：Plan 在動手之前，Results 在 48 小時內。原始檔命名 YYYYMMDD_R0412_label_vN。", en: "One Run per experiment, computation or test: Plan before starting, Results within 48 hours. Raw files named YYYYMMDD_R0412_label_vN." },
    steward: { zh: "執行者；組長與 Wetlab lead 看 Constructs", en: "Whoever ran it; group leads and the Wetlab lead read Constructs" },
    rule: { zh: "只能新增，不能改寫過去的紀錄。Forecast 併入 Run，不再是獨立文件（待決定）。程式碼一律進團隊 GitHub。", en: "Append only. Forecast merges into the Run instead of being a separate document (to be decided). Code goes to the team GitHub." } },
  { id: "s-hp", color: "indigo", to: ["t-interactions", "t-consent"],
    name: { zh: "利害關係人互動", en: "Stakeholder interactions" },
    intake: { zh: "一次互動一筆 I，一份 Interaction 文件：邀請信、訪綱、紀錄都在裡面，7 天內齊。", en: "One I row and one Interaction document per interaction: invitation, questions and write-up together, complete within 7 days." },
    steward: { zh: "HP 學生；HP 組長驗收", en: "HP students; the HP lead accepts" },
    rule: { zh: "可辨識人臉、姓名、引述、他方 logo，要有 K 且狀態為已同意。未成年另需校方或家長許可。", en: "Identifiable faces, names, quotes and third-party logos need a K marked as agreed. Minors also need school or parent permission." } },
  { id: "s-media", color: "orange", to: ["t-media"],
    name: { zh: "照片與影片", en: "Photos and footage" },
    intake: { zh: "Discord 論壇 照片牆-gallery：一件事一篇，標題 MMDD ID 短描述，點 3 到 4 個標籤，約 30 秒（估算）。超過 10 張、影片或要留原檔的放 40 Media/_Inbox。", en: "The Discord forum gallery: one post per event, title MMDD ID short description, 3 or 4 tags, about 30 seconds (estimate). More than 10 images, video or originals go to 40 Media/_Inbox." },
    steward: { zh: "Photo Steward ×2，隔兩週輪，週日歸檔上限 60 分鐘；Media lead 每月標精選", en: "Photo Steward ×2, alternating fortnights, Sunday filing capped at 60 minutes; the Media lead marks monthly picks" },
    rule: { zh: "一張一個位置，只依月份歸檔，檔名由工具產生。發布前過同意關卡，不是靠記得。剪完的原始影片移到 Archive。", en: "One place per image, filed by month only, with names made by a tool. The consent gate checks before publishing; nobody relies on memory. Raw footage moves to Archive once edited." } },
  { id: "s-figures", color: "blue", to: ["t-figures", "t-facts"],
    name: { zh: "圖與事實", en: "Figures and facts" },
    intake: { zh: "圖的作者建 F，來源作者建 V，都要連回 R 或文獻。繪圖程式放團隊 GitHub，Drive 只放輸出的圖。", en: "The figure’s author creates F, the source’s author creates V, both linked to an R or a paper. Plotting code lives on the team GitHub; Drive keeps the output." },
    steward: { zh: "圖表編輯、事實與術語各一；Cross-check 協調帶 cross-checker 跨組看，老師簽", en: "One Figure Editor and one Facts Keeper; the Cross-check Coordinator runs cross-checkers from another group, and an instructor signs" },
    rule: { zh: "沒有來源就不進 wiki。證據圖不得由 AI 生成。改一個已凍結的數字要走審核並標記取代。", en: "No source, no wiki. Evidence figures are never AI-made. Changing a frozen number goes through review and is marked superseded." } },
  { id: "s-art", color: "purple", to: ["t-media", "t-pages"],
    name: { zh: "美術與品牌", en: "Art and brand" },
    intake: { zh: "依需求清單作畫。手繪以 600 dpi 掃描，再向量化。", en: "Drawn to the backlog. Hand drawings scanned at 600 dpi, then vectorised." },
    steward: { zh: "美術與設計 ×2，每週 1–3 小時", en: "Art and Design ×2, 1–3 h a week" },
    rule: { zh: "主視覺 8/21 定稿。作者與授權跟著 ID 走，Attribution 直接匯出。", en: "Key visual final by 21 Aug. Author and licence travel with the ID, so Attribution exports directly." } }
];

const REGISTERS = [
  { id: "t-runs", to: ["wiki", "jamboree"],
    name: { zh: "Runs · R", en: "Runs · R" },
    fields: { zh: "ID、Construct、SOP@版本、Plan、Results、原始檔、留言者", en: "ID, Construct, SOP@version, Plan, Results, raw files, reviewer" },
    output: { zh: "每週一眼看出哪些沒結果、哪些待審。「做了什麼」由這裡算出，不再有 Work Log。", en: "Shows at a glance what has no results and what awaits review. “What got done” is computed here, so there is no Work Log." } },
  { id: "t-constructs", to: ["registry", "wiki"],
    name: { zh: "Constructs · C", en: "Constructs · C" },
    fields: { zh: "ID、設計人、審查人、序列檔、訂單 B、狀態", en: "ID, designer, reviewer, sequence file, order B, status" },
    output: { zh: "決定下一步做哪個、放棄哪個。訂單與 Construct ID 一一對應。", en: "Decides what to do next and what to drop. Orders map one-to-one to Construct IDs." } },
  { id: "t-interactions", to: ["wiki", "jamboree"],
    name: { zh: "Interactions · I", en: "Interactions · I" },
    fields: { zh: "ID、對象類別、為什麼選他、寄出日、回覆、紀錄、專案改變", en: "ID, stakeholder type, why them, sent, reply, write-up, project change" },
    output: { zh: "每週日看誰該回信。Attribution 的外部貢獻每列對得上一個 I。", en: "Every Sunday it shows who is owed a reply. Each external Attribution row matches an I." } },
  { id: "t-consent", to: ["promo", "wiki", "jamboree", "pres"],
    name: { zh: "Consent · K", en: "Consent · K" },
    fields: { zh: "對象、請求日、回覆日、照片、影片、姓名、引述、logo、限制、回覆存檔", en: "Who, asked, replied, photo, video, name, quote, logo, limits, stored reply" },
    output: { zh: "什麼不能發布，一眼就知道。9/8 前結清。", en: "What cannot be published, at a glance. Cleared by 8 Sep." } },
  { id: "t-media", to: ["promo", "wiki", "jamboree", "pres"],
    name: { zh: "Media · M", en: "Media · M" },
    fields: { zh: "ID、日期、類型、分類、組別、關聯 ID、活動、拍攝者、人臉、校外未成年、logo、K、精選、用在哪、雜湊、檔名、連結、可發布", en: "ID, date, type, category, group, linked ID, event, photographer, face, outside minor, logo, K, pick, used in, hash, file name, link, publishable" },
    output: { zh: "篩選即是最新圖庫。wiki 和影片引用 M，不複製檔案。", en: "A filter is the latest gallery. The wiki and videos cite M and copy nothing." } },
  { id: "t-figures", to: ["wiki", "jamboree", "pres"],
    name: { zh: "Figures · F", en: "Figures · F" },
    fields: { zh: "ID、R、腳本 commit、圖說、作者、cross-checker、老師簽", en: "ID, R, script commit, caption, author, cross-checker, instructor sign-off" },
    output: { zh: "8 月起每週看什麼可進 wiki。9/15 全部簽完。", en: "From August, shows weekly what may enter the wiki. All signed by 15 Sep." } },
  { id: "t-facts", to: ["wiki", "jamboree", "registry", "pres", "promo"],
    name: { zh: "Facts · V", en: "Facts · V" },
    fields: { zh: "ID、類型、陳述、數值、單位、條件、來源、驗證人、狀態、取代", en: "ID, type, statement, value, unit, conditions, source, verifier, status, supersedes" },
    output: { zh: "建置時自動檢查每一頁的數字與名稱。", en: "The build checks every number and name on every page." } },
  { id: "t-pages", to: ["wiki", "registry"],
    name: { zh: "Pages · W、Issues · X", en: "Pages · W, Issues · X" },
    fields: { zh: "頁面、owner、cross-checker、狀態；問題、提出者、處理者、結案", en: "Page, owner, cross-checker, status; issue, raised by, handler, closed" },
    output: { zh: "8 月底起每天看下一個修哪個，站立會只看這張。", en: "From late August, shows daily what to fix next. The stand-up reads only this." } }
];

const DELIVERABLES = [
  { id: "promo", due: "7/29?",
    name: { zh: "Promo Video", en: "Promo Video" },
    rule: { zh: "拍攝 7/6–7/18，每個鏡頭連到 M。送出前查過影像同意。", en: "Shot 6–18 Jul, each shot citing an M. Image consent is checked before it goes in." } },
  { id: "wiki", due: "10/6–13?",
    name: { zh: "Wiki", en: "Wiki" },
    rule: { zh: "一頁一份 master doc，只有 page owner 改，其他人留言。內部關卡從 10/6 往回排，9/29 全站最後推送。", en: "One master doc per page; only the page owner edits, others comment. Internal gates back-plan from 6 Oct, with the last full push on 29 Sep." } },
  { id: "jamboree", due: "10/29?",
    name: { zh: "Jamboree：展位、演講、評審", en: "Jamboree: booth, talk, judging" },
    rule: { zh: "主視覺 8/21 定稿。展板上的數字只取自 Facts。QA 每題有人答。", en: "Key visual final by 21 Aug. Every number on the booth comes from Facts. Every QA question has someone to answer it." } },
  { id: "registry", due: "10/6–13?",
    name: { zh: "Parts Registry", en: "Parts Registry" },
    rule: { zh: "與 wiki 同一次 freeze。共用的說明寫在 collection 文件，不在每個 part 重複。", en: "Same freeze as the wiki. Shared documentation lives in the collection, not on every part." } },
  { id: "pres", due: "10/13–20?",
    name: { zh: "Presentation Video", en: "Presentation Video" },
    rule: { zh: "素材依腳本段落編號（沿用 2026 的 #1–#10）。", en: "Clips numbered by script section (the 2026 #1–#10 habit)." } }
];

// The 2027 Drive. kids: subfolders. from: where the 2026 content came from.
const TEAM_TEMPLATE = ["SOP", "Meetings", "Projects / 2027 …"];

const DRIVE = [
  { id: "d00", name: "00 Start Here", drive: "team", kind: "every",
    kids: ["GEMS 2027 Hub", "GEMS 2027 Handbook", "File Rules", "Handover Checklist", "Research", "Templates"],
    holds: { zh: "新人手冊、Hub 表（所有分頁，含 Inventory 與 Advisor Deliverables）、File Rules、全隊一份的 Research 工作簿、下一年的資料夾範本", en: "Handbook, the Hub with all its tabs including Inventory and Advisor Deliverables, File Rules, the one team Research workbook, next year’s folder template" },
    edit: { zh: "Ops", en: "Ops" },
    rule: { zh: "頂層不放任何零散檔案。名單只有一份，其他表用下拉。", en: "No loose files at the top. There is one roster; every other sheet uses a dropdown." },
    from: ["10 12 meeting notes", "Attendance sheets ×2", "(new)"] },
  { id: "d10", name: "10 Training", drive: "team", kind: "every",
    kids: ["Training", "Classes", "Recordings", "Assignments"],
    holds: { zh: "課表、課程投影片、錄影、作業。考試回覆、成績和題庫不放這裡，放 Ops。", en: "Curriculum, class slides, recordings, homework. Exam responses, grades and the question bank go to Ops, not here." },
    edit: { zh: "Instructor；學生交作業", en: "Instructors; students hand in" },
    rule: { zh: "全部以 YYYYMMDD 開頭。2026 同一層混用兩種日期格式，不沿用。", en: "Everything starts with YYYYMMDD. 2026 mixed two date formats in one folder; that stops." },
    from: ["0. Class Material", "Class Recordings", "1. Wetlab / Homework Discussion"] },
  { id: "d15", name: "15 Research", drive: "team", kind: "every",
    kids: ["_README", "Reading Notes", "Question Briefs", "Open Library", "Topic Research"],
    holds: { zh: "卡填不下的筆記（L###_slug）、問題的結論（RQ##_slug）、開放取用與灰色文獻（L###_<作者><年>.pdf）、N01–N04 的候選題目 brief。索引只在 Research 工作簿。", en: "Notes a card cannot hold (L###_slug), question conclusions (RQ##_slug), open-access and grey literature (L###_<author><year>.pdf), and N01–N04 candidate topic briefs. The index lives only in the Research workbook." },
    edit: { zh: "全隊學生、老師、Advisors", en: "All students, instructors, advisors" },
    rule: { zh: "出版商 PDF 不進 Drive。每個檔案都要被 Papers 的某一列連到，RSV 每月清一次。任務組階段不開第二套研究資料夾。", en: "Publisher PDFs never enter Drive. Every file must be linked from a Papers row, and RSV clears strays monthly. No second set of research folders in the task-group phase." },
    from: ["(new)"] },
  { id: "d20", name: "20 Topic", drive: "team", kind: "every",
    kids: ["Topic Pipeline", "Topic Cards", "PK Records", "Decision Records"],
    holds: { zh: "11/29 到 1/30 的選題：線上研究、Topic Card、Case study、PK、Decision Record。老師評分放 Ops。", en: "Topic work from 29 Nov to 30 Jan: online research, Topic Cards, case studies, the PK, the Decision Record. Instructor scoring goes to Ops." },
    edit: { zh: "老師與 advisor 發展題目，學生可自提", en: "Instructors and advisors develop topics; students may propose" },
    rule: { zh: "1/30 定題要有 Decision Record：理由、反對意見、Plan B、未決範圍。未決範圍到 3/13 範圍閘門才關。定題後的研究進 Projects/Research，不留在這裡。", en: "The 30 Jan decision needs a Decision Record: reasons, objections, Plan B, open scope. Open scope closes at the 13 Mar scope gate. Research after the decision goes to Projects/Research, not here." },
    from: ["*iGEM 2026 HW Submission", "Topic-understanding checks"] },
  { id: "d31", name: "31 Wetlab", drive: "team", kind: "team",
    kids: ["IDT Orders", "Lab Roster", "SOP", "Run Records / YYYY-MM", "Data / Raw · Labelled · Notebook Photos", "Sequences / <Level>", "Safety / Safety Register", "Meetings", "Projects / 2027 <topic>"],
    holds: { zh: "SOP、Run 紀錄與原始檔、序列與定序回傳、安全（事故與近失、化學品與 SDS、保養、廢棄物）、IDT 訂單、實驗室班表、週會紀錄", en: "SOPs, Run records and raw files, sequences and sequencing returns, safety (incidents and near misses, chemicals and SDS, maintenance, waste), IDT orders, the lab roster, weekly minutes" },
    edit: { zh: "Wetlab；Wet 組長顧資料夾，Lab lead 顧 Run Records 與 Data", en: "Wetlab; the Wet Lead keeps the folder, the Lab Lead keeps Run Records and Data" },
    rule: { zh: "Safety 3/13 前就緒。Inventory 是 Hub 的分頁，不在這裡。Literature Matrix 改名 Research，併到 00 Start Here。會議一個資料夾，檔名 YYYYMMDD_Wet_Weekly。Sequences 依 Cloning Products 的 level 分層。", en: "Safety is ready by 13 Mar. Inventory is a Hub tab, not a folder here. The Literature Matrix is now the Research workbook, in 00 Start Here. One Meetings folder, named YYYYMMDD_Wet_Weekly. Sequences keep the Cloning Products layering by level." },
    from: ["1. Wetlab", "Plasmid sequences", "2. Drylab / Sent Sequences", "Lab Reports / Electronic Lab Note", "Meeting folders ×3"] },
  { id: "d32", name: "32 Drylab", drive: "team", kind: "team",
    kids: ["SOP", "Meetings", "Projects / MD01 · SW01 / ProjectCard · RunLog"],
    holds: { zh: "模型與工具的專案卡、Run、小型資料、定稿圖與報告。程式碼在團隊 GitHub，這裡只放連結。", en: "Project cards for models and tools, Runs, small data, final figures and reports. Code is on the team GitHub; this folder holds links." },
    edit: { zh: "Drylab；Dry 組長顧資料夾", en: "Dry lab; the Dry Lead keeps the folder" },
    rule: { zh: "大量輸出超過 500 MB 或 300 檔，打包進 Archive，附清單和 checksum（門檻是提議）。.venv、__pycache__ 不進 Drive。2026 的 4. Software 取消，併成 Projects 下的專案類型。", en: "Bulk output over 500 MB or 300 files is packed into Archive with a manifest and checksum (thresholds are a proposal). No .venv or __pycache__. 2026’s 4. Software goes away and becomes a project type under Projects." },
    from: ["2. Drylab model folders", "*Research Integration → Projects/Research"] },
  { id: "d33", name: "33 Hardware", drive: "team", kind: "team",
    kids: ["SOP", "Projects / H01 <device> / ProjectCard · RunLog"],
    holds: { zh: "每個裝置一個專案資料夾：CAD、組裝文件、測試資料", en: "One project folder per device: CAD, build documents, test data" },
    edit: { zh: "硬體隊；Hardware 組長顧資料夾。週會紀錄併入 32 Drylab/Meetings", en: "Hardware team; the Hardware Lead keeps the folder. Weekly minutes sit in 32 Drylab/Meetings" },
    rule: { zh: "裝置每年換，Hardware 資料夾每年都在。韌體放團隊 GitHub。", en: "Devices change, the Hardware folder stays. Firmware goes to the team GitHub." },
    from: ["2. Drylab / CAD files", "1. Wetlab / device data", "*Research Integration / device notes"] },
  { id: "d34", name: "34 Human Practices", drive: "team", kind: "team",
    kids: ["IHP Storyline", "Survey Bank", "SOP", "Meetings", "Interactions / I<ID>_<YYYYMMDD>_<who>", "Consent", "Education", "Events / <YYYY-event>"],
    holds: { zh: "一次互動一份文件、Consent 的請求信、教育線、活動 Dossier、Storyline 與問卷庫。簽名正本放 Ops。Past HP Cases 併入 Research 工作簿的 HPCases 分頁。", en: "One document per interaction, consent request letters, education, event dossiers, the Storyline and Survey Bank. Signed originals stay in Ops. Past HP Cases merged into the Research workbook’s HPCases tab." },
    edit: { zh: "HP 隊；HP 組長顧資料夾，同意紀錄員顧 Consent", en: "HP team; the HP Lead keeps the folder, the Consent Clerk keeps Consent" },
    rule: { zh: "沒有獨立的 Outreach 層：Outreach 和 IHP 並存會讓同一次互動留下好幾份。Consent 和互動紀錄同層。", en: "No separate Outreach layer: running it next to IHP leaves several copies of one interaction. Consent sits beside the interaction records." },
    from: ["3. Human Practice", "Outreach slides"] },
  { id: "d40", name: "40 Media", drive: "team", kind: "every",
    kids: ["_Inbox", "Photos / YYYY-MM", "Footage / YYYY-MM", "Portraits", "Figures / Current · Superseded", "Art and Brand"],
    holds: { zh: "全隊唯一的照片、影片素材、肖像、圖與美術。_Inbox 只等待歸檔，週日清空，不算正本。", en: "The team’s only home for photos, footage, portraits, figures and art. _Inbox only waits for filing and empties on Sundays; it is not a master." },
    edit: { zh: "根資料夾全隊唯讀；_Inbox 全隊可傳；Photos、Footage、Portraits 由 Photo Steward 與 Media lead 寫；Figures、Art and Brand 由圖表、美術寫（權限是規格，尚未執行）", en: "Root is read-only for the team; anyone can drop into _Inbox; Photo Stewards and the Media Lead write Photos, Footage and Portraits; figure and art stewards write Figures and Art and Brand (permissions are spec only, not yet applied)" },
    rule: { zh: "資料夾只分月份，其他分類都在 Hub 的 Media 分頁與檔名。2026-11 到 2027-11 都有月份資料夾。肖像檔名不變：P001_Portrait_v1。", en: "Folders by month only; every other dimension lives in the Hub’s Media tab and the file name. Month folders run from 2026-11 to 2027-11. Portrait names stay P001_Portrait_v1." },
    from: [{ zh: "Gallery（三套分類）", en: "Gallery (three schemes)" }, { zh: "Wiki Pages 裡的圖", en: "Images inside Wiki Pages" }, "5. Art, Biorender", "3. Human Practice / Team Gallery, Logo design", { zh: "Wikii（併入，不保留這一層）", en: "Wikii (merged; the layer goes away)" }] },
  { id: "d50", name: "50 Deliverables", drive: "team", kind: "every",
    kids: ["Wiki / W### <page> · Team", "Promo Video", "Presentation Video", "Jamboree / Mocks · Booth and Materials", "Registry", "Forms"],
    holds: { zh: "每個交付物的 master doc、腳本與素材清單", en: "Each deliverable’s master doc, script and asset list" },
    edit: { zh: "交付物負責人、page owner", en: "Deliverable owners, page owners" },
    rule: { zh: "每頁 wiki 一個資料夾 Wiki/W### 頁名，Master 在裡面。Team、Attributions、Milestones 共用 Wiki/Team。圖不開子資料夾，留在 40 Media/Figures/Current，用 W 編號篩。只引用 ID 與連結，不複製照片或數字。", en: "One folder per wiki page, Wiki/W### page, with its Master inside. Team, Attributions and Milestones share Wiki/Team. No figure subfolders: figures stay in 40 Media/Figures/Current, filtered by W. Cites IDs and links; never copies a photo or a number." },
    from: ["Wiki Pages", "6. Project Promotion Video", "Presentation Video", "Paris Prep"] },
  { id: "d60", name: "60 Advisors", drive: "team", kind: "every",
    kids: ["_Templates", "_Advisor Meeting", "<A01> / S1–S5 · Meetings · Reports"],
    holds: { zh: "每位 advisor 一個固定資料夾：五個階段的產出、自主會議紀錄、月報。範本與全體會議紀錄放在 _ 開頭的資料夾。", en: "One fixed folder per advisor: five stages of output, self-run meeting minutes, monthly reports. Templates and all-advisor records sit in the folders that start with _." },
    edit: { zh: "每位 advisor 只寫自己的資料夾；instructor", en: "Each advisor writes only their own folder; instructors" },
    rule: { zh: "資料夾只用 advisor 編號，不用姓名。隊伍要用的成果放隊伍的家，這裡只放捷徑。", en: "Folders use the advisor ID, never a name. Work the team uses lives in the team’s home; this folder holds a shortcut." },
    from: ["(new)"] },
  { id: "d90", name: "90 Archive", drive: "team", kind: "every",
    kids: ["Archive Manifest", "Raw Footage", "Compute Batches", "Frozen PDFs", "2026"],
    holds: { zh: "剪完的原始影片、打包的大量輸出、凍結的 PDF、往年資料", en: "Raw footage after editing, packed bulk output, frozen PDFs, past seasons" },
    edit: { zh: "唯讀；Ops 搬入", en: "Read only; Ops moves things in" },
    rule: { zh: "11/20 結案：跑一次 Drive 健檢，把每份 master doc 匯出成 PDF，範本去識別後回收。", en: "Close-out on 20 Nov: run the Drive audit, export every master doc as PDF, and recover templates once de-identified." },
    from: ["Presentation Video / Not usable", { zh: "Gallery / Others（未標記）", en: "Gallery / Others (untagged)" }] },
  { id: "ops", name: "GEMS 2027 Ops", drive: "ops", kind: "ops",
    kids: ["GEMS 2027 Ops Hub", "_Templates", "Instructor Meetings", "Consent Originals / Replies · Minor Permissions", "Restricted Media / YYYY-MM", "Official Documents", "Advisors"],
    holds: { zh: "Ops Hub、簽名正本、含校外未成年的受限媒體、公文、老師會議。只有老師可見，內容不公開。", en: "The Ops Hub, signed originals, restricted media with outside minors, official documents, instructor meetings. Instructors only; contents are not public." },
    edit: { zh: "Instructor 與 Ops", en: "Instructors & Ops" },
    rule: { zh: "獨立的資料夾，學生看不到。含個資或個人紀錄的東西只放這裡。", en: "A separate space students cannot see. Anything with personal data or individual records lives only here." },
    from: ["Official document", "*Administration"] },
  { id: "opsadv", name: "GEMS 2027 Ops / Advisors", drive: "ops", kind: "ops",
    kids: ["_Templates", "ADV-F1 form", "Clock-in", "Reviews / <A01>", "Roster", "Records"],
    holds: { zh: "驗收佐證：ADV-F1 表單、打卡匯出、書面結果、Roster 匯出、貢獻紀錄。只有老師可見。", en: "Review evidence: the ADV-F1 form, clock-in exports, written results, the Roster export, contribution records. Instructors only." },
    edit: { zh: "Instructor 與 Ops", en: "Instructors & Ops" },
    rule: { zh: "編號與真實姓名的對照只在 Ops Hub 的 Roster_Full。Hub 的 Advisor Deliverables 分頁只帶公開欄位過去，不反向寫入。", en: "The map from ID to real name lives only in the Ops Hub’s Roster_Full. The Hub’s Advisor Deliverables tab pulls public columns one way and never writes back." },
    from: [{ zh: "*Administration / Advisors（去識別後當範本素材）", en: "*Administration / Advisors (de-identified, as template material)" }] },
  { id: "git", name: "Team GitHub org", drive: "out", kind: "out",
    kids: ["wiki", "models", "tools", "firmware", "handover"],
    holds: { zh: "所有程式碼、分析腳本、韌體、wiki 原始碼、交接文", en: "All code, analysis scripts, firmware, wiki source and handover notes" },
    edit: { zh: "Drylab、硬體隊、Wiki", en: "Dry lab, hardware team, wiki team" },
    rule: { zh: "放團隊 organization，不放個人帳號，交接才不會斷。Drive 只放連結。2026 的虛擬環境是 161 檔加 1,250 個資料夾，只有 2.8 MB：是雜訊，不是容量問題。開 org 待決定。", en: "In a team organisation, not personal accounts, so handover does not break. Drive holds only links. 2026’s virtual environments were 161 files and 1,250 folders, only 2.8 MB: noise, not a storage problem. Opening the org is to be decided." },
    from: ["2. Drylab code folders", "Personal repos and laptops"] }
];

const LAYERS = [
  { n: "00–20", name: { zh: "每年都有", en: "Every year" }, d: { zh: "Start Here、Training、Topic、Media、Deliverables、Advisors、Archive。名稱和位置年年一樣。", en: "Start Here, Training, Topic, Media, Deliverables, Advisors, Archive. Same names, same places, every year." } },
  { n: "31–34", name: { zh: "四個隊伍", en: "Four teams" }, d: { zh: "Wetlab、Drylab、Hardware、HP。同一套範本，各加自己需要的：Wetlab 加 Safety、Data、Sequences；HP 加 Interactions、Consent、Education、Events。", en: "Wetlab, dry lab, hardware, HP. One template, plus what each needs: Wetlab adds Safety, Data and Sequences; HP adds Interactions, Consent, Education and Events." } },
  { n: "Projects", name: { zh: "當年的題目", en: "This year’s topic" }, d: { zh: "只活一年的東西只放在隊伍的 Projects 底下。定題後的研究（2026 放在 *Research Integration）進 Projects/Research，不進 20 Topic。", en: "Anything that lives one season sits under a team’s Projects. Research after the topic decision (in 2026, *Research Integration) goes to Projects/Research, not 20 Topic." } }
];

const STATES = [
  { name: { zh: "草稿", en: "Draft" }, d: { zh: "任何人可改", en: "Anyone edits" } },
  { name: { zh: "定稿", en: "Final" }, d: { zh: "instructor 簽核；具名範圍內的 advisor 可先留審查紀錄", en: "Instructor signed; an advisor with named scope may leave review notes first" } },
  { name: { zh: "凍結", en: "Frozen" }, d: { zh: "匯出 PDF 進 Archive", en: "Exported to Archive as PDF" } }
];

// People. tier: s = student, a = advisor, i = instructor/ops. count = seats.
const ROLES = [
  { id: "teamlead", tier: "s", count: 1, color: "indigo", hrs: "2 h",
    name: { zh: "Team Lead", en: "Team Lead" },
    d: { zh: "iGEM 官方送件、Attribution、Freeze 當天的頁面核對。", en: "Official iGEM submissions, Attribution and the page check on freeze day." } },
  { id: "lead", tier: "s", count: 3, color: "teal", hrs: "2 h",
    name: { zh: "組長（Wet、Dry、HP）", en: "Group lead (Wet, Dry, HP)" },
    d: { zh: "週會前看 Tasks。Wetlab 管 Constructs 與訂單，HP 管 Interactions 與 Consent。", en: "Reads Tasks before the weekly meeting. Wetlab runs Constructs and orders; HP runs Interactions and Consent." } },
  { id: "wikilead", tier: "s", count: 1, color: "blue", hrs: "2–5 h",
    name: { zh: "Wiki Lead", en: "Wiki Lead" },
    d: { zh: "Pages 與 Issues。8 月底起每週二、四主持 15 分鐘站立會。", en: "Pages and Issues. From late August, runs a 15-minute stand-up every Tuesday and Thursday." } },
  { id: "video", tier: "s", count: 1, color: "pink", hrs: "1–3 h",
    name: { zh: "Video lead", en: "Video lead" },
    d: { zh: "Promo 與 Presentation Video：腳本、shot list、送出前查影像同意。", en: "Promo and Presentation Video: script, shot list, image consent checked before submitting." } },
  { id: "photo", tier: "s", count: 2, color: "orange", hrs: "1.5 h",
    name: { zh: "Photo Steward", en: "Photo Steward" },
    d: { zh: "兩位隔兩週輪：週日用工具把 gallery 歸檔到 Drive 與 Hub Media。", en: "Two, on alternate fortnights: on Sunday a tool files the gallery into Drive and the Hub’s Media tab." } },
  { id: "figure", tier: "s", count: 2, color: "blue", hrs: "1 h",
    name: { zh: "圖表編輯", en: "Figure editor" },
    d: { zh: "維護樣式範本，確認每張圖有 F、原檔與圖說。", en: "Keep the style template; check every figure has an F, a master and a caption." } },
  { id: "art", tier: "s", count: 2, color: "purple", hrs: "2 h",
    name: { zh: "美術與設計", en: "Art and design" },
    d: { zh: "品牌、主視覺、美術需求清單、展板。", en: "Brand, key visual, art backlog, booth." } },
  { id: "fact", tier: "s", count: 2, color: "green", hrs: "1–3 h",
    name: { zh: "事實與 Registry", en: "Facts and Registry" },
    d: { zh: "一人管 Facts 與術語表，一人管 Registry；九月起加重。", en: "One keeps Facts and the glossary, one the Registry; heavier from September." } },
  { id: "discord", tier: "s", count: 1, color: "indigo", hrs: "0.5 h",
    name: { zh: "Discord 小幫手", en: "Discord Steward" },
    d: { zh: "提醒討論回 Hub、標題與標籤，沒有管理權限。版務只由成人。", en: "Reminds people to write back to the Hub and tag posts; no admin rights. Moderation stays with adults." } },
  { id: "cross", tier: "s", count: 0, countLabel: { zh: "輪值", en: "rota" }, color: "green", hrs: "1 h",
    name: { zh: "Cross-checker", en: "Cross-checker" },
    d: { zh: "由跨組學生輪值，3 天內核對圖與事實的來源。2026 的 wiki 總表已有這個角色，收進系統。", en: "Students from another group, on rota, check the sources of figures and facts within 3 days. The 2026 wiki overview already had this role; it now joins the system." } },
  { id: "owner", tier: "s", count: 9, color: "gray", hrs: "1 h",
    name: { zh: "Page owner", en: "Page owner" },
    d: { zh: "每人負責 1–2 頁 wiki 的 master doc。上面的職責席位也同時是 page owner。", en: "Each owns one or two wiki master docs. Everyone in the seats above is a page owner too." } },
  { id: "advisor", tier: "a", count: 10, countLabel: "≈10", color: "gold",
    hrsLabel: { zh: "平時每月約 13–15 小時，不含製作產出", en: "About 13–15 h a month, not counting output" },
    name: { zh: "Student Advisor", en: "Student Advisor" },
    d: { zh: "沒有固定席位。五個階段依序是探路者、制度建立者、TA、TA 加工作線負責人、把關者，每階段與 instructor 確認具名範圍。判斷責任在 instructor。", en: "No fixed seats. Five stages in turn: pathfinder, systems builder, TA, TA and workline lead, gatekeeper, with named scope agreed with an instructor before each. The judgement stays with the instructor." } },
  { id: "verify", tier: "i", count: 3, color: "ink", hrs: "1 h",
    name: { zh: "事實驗證", en: "Fact verification" },
    d: { zh: "濕實驗、乾實驗、硬體各一位，簽核事實與證據圖。", en: "One each for wet lab, dry lab and hardware; sign off facts and evidence figures." } },
  { id: "tmpl", tier: "i", count: 1, color: "ink", hrs: "2 h",
    name: { zh: "範本與腳本", en: "Templates & scripts" },
    d: { zh: "頁面範本、docs 轉 HTML、建置檢查、Drive 健檢。", en: "Page templates, Docs-to-HTML, build checks, the Drive audit." } },
  { id: "ops", tier: "i", count: 2, color: "ink", hrs: "1 h",
    name: { zh: "Ops", en: "Ops" },
    d: { zh: "Roster、Drive 與 Discord 所有權、Ops Hub、採購、Archive。", en: "Roster, Drive and Discord ownership, Ops Hub, purchases, Archive." } },
  { id: "advreview", tier: "i", count: 2, color: "ink", hrs: "≈1 h", proposed: true,
    name: { zh: "Advisor 驗收", en: "Advisor verification" },
    d: { zh: "確認範圍與月報、主持階段驗收、寫書面結果。階段結束時有尖峰。重點是指定固定負責人，人選待決定。", en: "Confirm scope and reports, run stage reviews, write results. Peaks at each stage end. What matters is a fixed owner; who serves is to be decided." } },
  { id: "dev", tier: "i", count: 4, color: "ink2", hrs: "0 h", proposed: true,
    name: { zh: "專心開發", en: "Development only" },
    d: { zh: "不分配管理職責。先前的版本是 6 位，因新增 Advisor 驗收改為 4 位。", en: "No management duties. An earlier version had 6; adding advisor verification made it 4." } }
];

// Cast used only by the flow animation, in addition to ROLES.
const FLOW_CAST = [
  { id: "runner", tier: "s", color: "teal", name: { zh: "執行的學生", en: "The student who ran it" } },
  { id: "hpstudent", tier: "s", color: "indigo", name: { zh: "HP 學生", en: "HP student" } },
  { id: "proposer", tier: "s", color: "orange", name: { zh: "提題的人", en: "Whoever proposed it" } },
  { id: "instr", tier: "i", color: "ink", name: { zh: "老師", en: "Instructor" } },
  { id: "pi", tier: "i", color: "ink", name: { zh: "PI", en: "PI" } },
  { id: "reader", tier: "s", color: "purple", name: { zh: "讀的學生", en: "The student reading" } },
  { id: "rqowner", tier: "s", color: "purple", name: { zh: "RQ 負責人", en: "RQ owner" } },
  { id: "rsl", tier: "i", color: "ink", name: { zh: "研究組長", en: "Research Lead" } },
  { id: "rsv", tier: "s", color: "purple", name: { zh: "研究副組長", en: "Research Vice Lead" } },
  { id: "scribe", tier: "s", color: "gray", name: { zh: "會議書記", en: "Meeting scribe" } }
];

// Timeline: the year's nodes from the system spec v0.2, section 7, itself from the PI's 2027 schedule.
// A proposal. `?` = iGEM has not announced; estimate is the 2026 official date + 350 days.
const PI = { zh: "PI", en: "PI" }, TCH = { zh: "老師", en: "Instructors" }, ALLT = { zh: "全體老師", en: "All instructors" }, OPS = { zh: "Ops", en: "Ops" };
const TLEAD = { zh: "Team Lead", en: "Team Lead" }, WIKIL = { zh: "Wiki Lead", en: "Wiki Lead" }, GRP = { zh: "各組", en: "Each group" };
const TIMELINE = [
  { n: "N00", date: "2026-11-25", lane: "gate", t: { zh: "系統完成", en: "System ready" }, pass: { zh: "Drive、Hub、Roster、日曆、Handbook 上線", en: "Drive, Hub, Roster, calendar and Handbook live" }, owner: OPS, ok: PI },
  { n: "N01", date: "2026-11-29", lane: "gate", t: { zh: "Discord 開啟，線上 Topic Research", en: "Discord opens, online topic research" }, pass: { zh: "全員入群；每位 advisor 完成 S1 具名範圍確認", en: "Everyone joined; each advisor has agreed their S1 named scope" }, owner: PI, ok: PI },
  { n: "N02", date: "2026-12-26", lane: "gate", t: { zh: "First Class 13:00–17:00", en: "First Class 13:00–17:00" }, pass: { zh: "全員確認 Handbook", en: "Everyone confirms the Handbook" }, owner: TCH, ok: OPS, d: { zh: "落在連假，部分學校放寒假。待決定。", en: "Falls on a long weekend and some schools’ winter break. To be decided." } },
  { n: "N03", date: "2027-01-02", lane: "gate", dl: { zh: "1/2–1/23 週六", en: "Sat 2–23 Jan" }, t: { zh: "題目漏斗", en: "Topic funnel" }, pass: { zh: "每題一張 Topic Card，評語入同一張表", en: "One Topic Card per topic, comments in one table" }, owner: TCH, ok: ALLT, d: { zh: "老師發展題目，學生可自提。", en: "Instructors develop topics; students may propose their own." } },
  { n: "N03e", date: "2027-01-28", lane: "deadline", est: 1, dl: { zh: "1/28?", en: "28 Jan?" }, t: { zh: "Stage I Early", en: "Stage I Early" }, pass: { zh: "選用", en: "Optional" }, owner: TLEAD, ok: PI },
  { n: "N04", date: "2027-01-30", lane: "gate", key: "topic", t: { zh: "PK 與定題", en: "PK and topic decision" }, pass: { zh: "Decision Record：理由、反對意見、Plan B、未決範圍", en: "Decision Record: reasons, objections, Plan B, open scope" }, owner: PI, ok: ALLT },
  { n: "N05", date: "2027-02-13", lane: "gate", dl: { zh: "2/13–3/7", en: "13 Feb–7 Mar" }, t: { zh: "春節後密集訓練", en: "Post-CNY intensive training" }, pass: { zh: "安全考通過才能進實驗室；考試成績入 Ops", en: "Pass the safety exam to enter the lab; grades go to Ops" }, owner: TCH, ok: TCH, d: { zh: "連 4 週週末：Wetlab W1–W4，Drylab＋HP 同步。", en: "Four weekends in a row: Wetlab W1–W4, Dry lab and HP alongside." } },
  { n: "N06", date: "2027-03-10", lane: "gate", t: { zh: "Phase I 評量與分組", en: "Phase I assessment and groups" }, pass: { zh: "分組公布，附回饋", en: "Groups announced, with feedback" }, owner: GRP, ok: PI },
  { n: "N07", date: "2027-03-13", lane: "gate", t: { zh: "Task Group 開始，範圍閘門", en: "Task groups start, scope gate" }, pass: { zh: "未決範圍關閉；Task lead 公布；Roadmap v1；SOP Active；安全與庫存就緒", en: "Open scope closed; task leads named; Roadmap v1; SOPs active; safety and inventory ready" }, owner: PI, ok: ALLT },
  { n: "N08", date: "2027-03-18", lane: "deadline", est: 1, dl: { zh: "3/18?", en: "18 Mar?" }, t: { zh: "Stage I Regular", en: "Stage I Regular" }, pass: { zh: "已送出", en: "Submitted" }, owner: TLEAD, ok: PI },
  { n: "N09", date: "2027-03-27", lane: "gate", t: { zh: "序列設計審查", en: "Sequence design review" }, pass: { zh: "每條序列有 Construct、設計人、審查人；訂單清單定稿", en: "Each sequence has a Construct, designer and reviewer; order list final" }, owner: { zh: "Wet、Dry lead", en: "Wet and Dry leads" }, ok: TCH },
  { n: "N11", date: "2027-03-31", lane: "gate", dl: { zh: "3 月底", en: "End of Mar" }, t: { zh: "暑期缺席申報（提議）", en: "Summer absence declarations (proposed)" }, pass: { zh: "全員回報", en: "Everyone reports" }, owner: OPS, ok: TCH },
  { n: "N10", date: "2027-04-01", lane: "gate", t: { zh: "開始訂 IDT sequence", en: "IDT orders open" }, pass: { zh: "訂單與 Construct ID 對應", en: "Orders match Construct IDs" }, owner: { zh: "Wetlab lead", en: "Wetlab lead" }, ok: TCH },
  { n: "N12", date: "2027-04-24", lane: "gate", t: { zh: "Phase II 實作評量", en: "Phase II practical assessment" }, pass: { zh: "回饋給學生", en: "Feedback to students" }, owner: GRP, ok: PI, d: { zh: "在 AP 與會考之前完成。", en: "Done before AP and the junior high exam." } },
  { n: "N13", date: "2027-05-20", lane: "deadline", est: 1, dl: { zh: "5/20?", en: "20 May?" }, t: { zh: "Stage I Late", en: "Stage I Late" }, pass: { zh: "應不需要，保險", en: "Should not be needed; insurance" }, owner: TLEAD, ok: PI },
  { n: "N14", date: "2027-06-15", lane: "gate", t: { zh: "Wiki 站台與事實 v1", en: "Wiki site and facts v1" }, pass: { zh: "Pages 表全填，每頁有 owner", en: "Pages tab complete, every page has an owner" }, owner: WIKIL, ok: PI },
  { n: "N15", date: "2027-06-16", lane: "deadline", est: 1, dl: { zh: "6/16?", en: "16 Jun?" }, t: { zh: "Safety Form 初版", en: "Safety Form v1" }, pass: { zh: "已送出", en: "Submitted" }, owner: { zh: "Wetlab", en: "Wetlab" }, ok: TCH },
  { n: "N16", date: "2027-06-19", lane: "gate", t: { zh: "期中外部 review", en: "Mid-year external review" }, pass: { zh: "專家意見入 Decisions", en: "Expert views go in Decisions" }, owner: PI, ok: TCH },
  { n: "N18", date: "2027-07-01", lane: "gate", dl: { zh: "7/1–8/10", en: "1 Jul–10 Aug" }, t: { zh: "暑假 Mandatory：二四六", en: "Summer mandatory: Tue, Thu, Sat" }, pass: { zh: "每週 Run 結果率達標", en: "Weekly Run result rate on target" }, owner: { zh: "Lab lead", en: "Lab lead" }, ok: TCH, d: { zh: "09–12 iGEM，13–17 Team Work。", en: "09–12 iGEM, 13–17 team work." } },
  { n: "N19", date: "2027-07-15", lane: "deadline", est: 1, dl: { zh: "7/15?", en: "15 Jul?" }, t: { zh: "Stage II Finalization", en: "Stage II Finalization" }, pass: { zh: "已送出", en: "Submitted" }, owner: TLEAD, ok: PI },
  { n: "N20", date: "2027-07-29", lane: "deadline", est: 1, dl: { zh: "7/29?", en: "29 Jul?" }, t: { zh: "Promotion Video", en: "Promotion Video" }, pass: { zh: "已送出；影像同意已查", en: "Submitted; image consent checked" }, owner: { zh: "Video lead", en: "Video lead" }, ok: TCH, d: { zh: "拍攝 7/6–7/18。", en: "Shot 6–18 Jul." } },
  { n: "N21", date: "2027-08-14", lane: "gate", t: { zh: "Summer Assessment", en: "Summer Assessment" }, pass: { zh: "回饋給學生", en: "Feedback to students" }, owner: TCH, ok: PI, d: { zh: "三組同格式。開學後回到每週六。", en: "Same format for all three groups. Saturdays resume after school starts." } },
  { n: "N22", date: "2027-08-21", lane: "gate", t: { zh: "主視覺定稿", en: "Key visual final" }, pass: { zh: "Brand 定案", en: "Brand settled" }, owner: { zh: "美術", en: "Art" }, ok: TCH },
  { n: "N23", date: "2027-08-28", lane: "gate", t: { zh: "進入衝刺模式", en: "Crunch mode starts" }, pass: { zh: "7 項更新暫停，只留 Issues、Pages 和站立會；Advisor Roster 依同意書審核", en: "Seven updates pause, leaving Issues, Pages and stand-ups; advisor Roster reviewed under the consent form" }, owner: TCH, ok: PI },
  { n: "N24", date: "2027-09-01", lane: "deadline", est: 1, dl: { zh: "9/1–3?", en: "1–3 Sep?" }, t: { zh: "Team Roster Freeze", en: "Team Roster Freeze" }, pass: { zh: "名單核對", en: "Roster checked" }, owner: OPS, ok: PI, d: { zh: "時程表月曆寫 9/3，推估分頁寫 9/1。官方 2026 實際日是 9/16。凍結後不能加人，而且只有凍結當下在名冊上的人拿得到參加證書。", en: "The schedule grid says 3 Sep, its estimate tab 1 Sep. The official 2026 date was 16 Sep. No members may be added after the freeze, and only those on the roster at that moment receive participation certificates." } },
  { n: "N25", date: "2027-09-08", lane: "gate", t: { zh: "同意全數結清", en: "All consent cleared" }, pass: { zh: "Consent 無待辦（freeze 前 4 週）", en: "No open Consent rows (4 weeks before freeze)" }, owner: { zh: "HP advisor", en: "HP advisor" }, ok: TCH },
  { n: "N26", date: "2027-09-11", lane: "gate", t: { zh: "第一次全隊 mock", en: "First full-team mock" }, pass: { zh: "每題有人答", en: "Every question has someone to answer it" }, owner: TCH, ok: TCH },
  { n: "N27", date: "2027-09-15", lane: "gate", t: { zh: "實驗截止，圖定稿", en: "Lab work ends, figures final" }, pass: { zh: "Results 補齊；全部 F 已簽", en: "Results complete; every F signed" }, owner: { zh: "Lab lead、Wiki Lead", en: "Lab lead, Wiki Lead" }, ok: TCH },
  { n: "N28", date: "2027-09-22", lane: "deadline", est: 1, dl: { zh: "9/22?", en: "22 Sep?" }, t: { zh: "Safety Form 定稿", en: "Safety Form final" }, pass: { zh: "已送出", en: "Submitted" }, owner: { zh: "Wetlab", en: "Wetlab" }, ok: TCH },
  { n: "N29", date: "2027-09-28", lane: "deadline", est: 1, dl: { zh: "9/28?", en: "28 Sep?" }, t: { zh: "IDT Free Synthesis 截止", en: "IDT Free Synthesis cut-off" }, pass: { zh: "已確認", en: "Confirmed" }, owner: { zh: "Wetlab lead", en: "Wetlab lead" }, ok: TCH },
  { n: "N30", date: "2027-09-29", lane: "gate", t: { zh: "全站最後推送", en: "Last full push" }, pass: { zh: "Issues 無 P0", en: "No P0 in Issues" }, owner: WIKIL, ok: PI },
  { n: "N31", date: "2027-10-06", lane: "deadline", key: "freeze", est: 1, dl: { zh: "10/6–13?（23:00）", en: "6–13 Oct? (23:00)" }, t: { zh: "Wiki Freeze", en: "Wiki Freeze" }, pass: { zh: "Wiki、Judging、Attribution、Registry、Software 頁面核對完成", en: "Wiki, Judging, Attribution, Registry and Software checked page by page" }, owner: TLEAD, ok: PI, d: { zh: "時程表月曆寫 10/13，推估分頁寫 10/6。內部關卡從 10/6 往回排；官方公布較晚就多出緩衝。官方 2026 實際日是 10/21，截止時刻 23:00（台灣）即 15:00 UTC，而且 iGEM 明文不給延期、過期即關閉，截止前幾分鐘伺服器會很慢。", en: "The schedule grid says 13 Oct, its estimate tab 6 Oct. Internal gates back-plan from 6 Oct; if iGEM announces later, that becomes buffer. The official 2026 date was 21 Oct. Deadlines close at 23:00 Taiwan time, which is 15:00 UTC, and iGEM states plainly that no extensions are given and that its servers are slow in the final minutes." } },
  { n: "N33", date: "2027-10-09", lane: "gate", dl: { zh: "10/9–10/23", en: "9–23 Oct" }, t: { zh: "Mock judging 3 次", en: "Mock judging ×3" }, pass: { zh: "QA 無空白重要題", en: "No blank important question in QA" }, owner: { zh: "Lead advisor", en: "Lead advisor" }, ok: TCH },
  { n: "N32", date: "2027-10-13", lane: "deadline", est: 1, dl: { zh: "10/13–20?", en: "13–20 Oct?" }, t: { zh: "Presentation Video", en: "Presentation Video" }, pass: { zh: "已送出", en: "Submitted" }, owner: { zh: "Video lead", en: "Video lead" }, ok: TCH, d: { zh: "時程表月曆寫 10/20，推估分頁寫 10/13。官方 2026 實際日是 10/28，是凍結後唯一還能交的主要項目。", en: "The schedule grid says 20 Oct, its estimate tab 13 Oct. The official 2026 date was 28 Oct, and it is the only major deliverable still open after the freeze." } },
  { n: "N34", date: "2027-10-26", lane: "gate", dl: { zh: "10/26–11/3", en: "26 Oct–3 Nov" }, t: { zh: "Paris，團進團出", en: "Paris, travelling together" }, pass: { zh: "日期暫定", en: "Dates provisional" }, owner: PI, ok: PI },
  { n: "N34j", date: "2027-10-29", lane: "deadline", key: "jamboree", est: 1, dl: { zh: "10/29–11/1?", en: "29 Oct–1 Nov?" }, t: { zh: "Grand Jamboree", en: "Grand Jamboree" }, pass: { zh: "以官方公布為準", en: "Subject to the official announcement" }, owner: PI, ok: PI, d: { zh: "官方 2026 實際日是 11/12–16（巴黎）。Jamboree 週在官方歷年之間移動達三週，2026 比 2025 晚了 15 天，所以 2027 可能落在 10 月底到 11 月中之間。2026 賽季是 4 月才公布 Jamboree 網站與售票、9 月底才公布場次分配。", en: "The official 2026 dates were 12–16 Nov in Paris. The Jamboree week has moved by up to three weeks between years and 2026 fell 15 days later than 2025, so 2027 could land anywhere from late October to mid November. In 2026 the Jamboree site and tickets opened in April and session assignments came at the end of September." } },
  { n: "N35", date: "2027-11-20", lane: "gate", t: { zh: "結案與交接", en: "Close-out and handover" }, pass: { zh: "去識別範本回收、封存、下一年清單", en: "De-identified templates recovered, archive sealed, next year’s list" }, owner: OPS, ok: PI },
  // Advisor marks: stage bars come from ADV_STAGES.
  { n: "N01a", date: "2026-11-29", lane: "adv", dl: { zh: "11/29", en: "29 Nov" }, t: { zh: "Advisor 任期開始", en: "Advisor term starts" }, d: { zh: "與 Discord 開啟同一天，比 First Class 早約四週。任期到 Jamboree 結束。", en: "The day Discord opens, about four weeks before First Class. The term runs to the end of the Jamboree." } },
  { n: "N11a", date: "2027-03-31", lane: "adv", dl: { zh: "3 月底", en: "End of Mar" }, t: { zh: "階段 2 驗收", en: "Stage 2 review" }, d: { zh: "依同意書標準。", en: "Under the consent form’s standard." } },
  { n: "N17", date: "2027-06-26", lane: "adv", t: { zh: "階段 3 驗收", en: "Stage 3 review" }, d: { zh: "有紀錄顯示做法改變。階段結束後可選出 Lead Advisor，名額不固定，也可以從缺。", en: "A record shows practice changed. A Lead Advisor may be chosen afterwards; no fixed number, and it may stay empty." } },
  { n: "N23a", date: "2027-08-28", lane: "adv", key: "roster", dl: { zh: "8/28（同意書：8 月底）", en: "28 Aug (form: late Aug)" }, t: { zh: "Roster 審核", en: "Roster review" }, d: { zh: "依同意書審核後登錄 iGEM 官方 Team Roster。", en: "Reviewed under the consent form before entry on the official iGEM Team Roster." } }
];

const RITUALS = [
  { t: { zh: "每週六 09:00–15:00", en: "Saturdays 09:00–15:00" } },
  { t: { zh: "每月第一個週六訂月目標", en: "First Saturday of the month: monthly goals" } },
  { t: { zh: "老師週會全年不中斷", en: "Instructor weekly, all year" } },
  { t: { zh: "週日 21:00 PI 例外摘要", en: "Sunday 21:00: PI exception digest" } },
  { t: { zh: "Advisor 月報月底", en: "Advisor reports at month end" } }
];

// Conflicts in the schedule that the PI still has to settle. Nothing here changes a rule.
const SCHED_TBD = [
  { zh: "Wiki Freeze：時程表月曆寫 10/13，它自己的推估分頁寫 10/6。網站兩個都顯示為 10/6–13?，內部關卡從 10/6 往回排。Presentation Video（10/20 或 10/13）和 Team Roster Freeze（9/3 或 9/1）是同一個問題。", en: "Wiki Freeze: the schedule grid says 13 Oct and its own estimate tab says 6 Oct. This site shows both as 6–13 Oct?, and internal gates back-plan from 6 Oct. Presentation Video (20 or 13 Oct) and Team Roster Freeze (3 or 1 Sep) have the same issue." },
  { zh: "12/26 First Class 落在連假，且部分學校放寒假，學生可能出國。", en: "First Class on 26 Dec falls on a long weekend and some schools’ winter break; students may be abroad." },
  { zh: "1/2 第二次課落在元旦連假。", en: "The second class on 2 Jan falls on the New Year long weekend." },
  { zh: "2/27–28 Training W3 落在 228 連假；往年連假照常上課。", en: "Training W3 on 27–28 Feb falls on the 228 long weekend; past years kept classes on." },
  { zh: "3/6 Training W4 第一天與 SAT 同天，考試的人要補 W4。", en: "The first day of Training W4 on 6 Mar is an SAT date; those sitting it need a W4 make-up." },
  { zh: "2/14 Training W1 結束後另有 Lab Training 時段，若同一批人或同場地只隔 30 分鐘。", en: "On 14 Feb another Lab Training slot follows W1 by 30 minutes if it has the same people or room." },
  { zh: "5/15 國中教育會考與週六 iGEM 同天。SAT 的週六（5/1、6/5、8/28、9/18、10/9）沿用往年，照常上課。", en: "15 May is both the junior high exam and a Saturday session. SAT Saturdays (1 May, 5 Jun, 28 Aug, 18 Sep, 9 Oct) keep classes on, as in past years." }
];

const FACT_TYPES = [
  { t: { zh: "數據結果", en: "Results" }, ex: { zh: "測量值、活性、趨勢", en: "Measurements, activity, trends" },
    l: { zh: "一張圖差了 1000 倍，一組數字修了兩次。", en: "One chart 1000× off; one set of digits fixed twice." } },
  { t: { zh: "名稱與術語", en: "Names" }, ex: { zh: "專案名、部件名、物種斜體", en: "Project and part names, italic species" },
    l: { zh: "同一個名稱三種寫法。", en: "One name, three spellings." } },
  { t: { zh: "規格", en: "Specs" }, ex: { zh: "裝置規格、門檻值", en: "Device specs, thresholds" },
    l: { zh: "新舊兩份規格文件互相矛盾。", en: "Two spec documents contradicted each other." } },
  { t: { zh: "主張", en: "Claims" }, ex: { zh: "「已安裝，但未測試」這類措辭", en: "Wording such as “fitted, never tested”" },
    l: { zh: "最貴的一類：每一條都曾經要開會裁決。", en: "The costliest kind: each one once needed a meeting." } },
  { t: { zh: "人與日期", en: "People & dates" }, ex: { zh: "合作夥伴、里程碑、誰做了什麼", en: "Partners, milestones, who did what" },
    l: { zh: "Milestones 與 Attributions 要重新整理一次。", en: "Milestones and Attributions had to be rebuilt." } }
];

const LINT = [
  { k: "bad", s: "W012:212", m: { zh: "名稱寫法與術語表不符", en: "name does not match the glossary" } },
  { k: "bad", s: "W015:88", m: { zh: "數字沒有對應的 V", en: "number has no matching V" } },
  { k: "bad", s: "W021:40", m: { zh: "引用了已被取代的 V0118", en: "cites superseded V0118" } },
  { k: "bad", s: "W021:64", m: { zh: "F0091 沒有連回 R，不能進 wiki", en: "F0091 has no R, so it cannot enter the wiki" } },
  { k: "ok", s: "68 pages", m: { zh: "其餘事實引用全部相符", en: "every other fact reference matches" } }
];


const STANDARDS = [
  { t: { zh: "頁面範本", en: "Page template" },
    now: { zh: "24 頁在年中才收斂成 banner + abstract。", en: "24 pages converged on banner + abstract mid-season." },
    next: { zh: "banner、abstract、章節、參考文獻、致謝，第一天固定。", en: "Banner, abstract, sections, references, thanks: fixed on day one." } },
  { t: { zh: "Figure 元件", en: "Figure component" },
    now: { zh: "超過 15 種寫法；圖說格式不一。", en: "Over 15 markups; captions in every style." },
    next: { zh: "一個元件；「Figure N. 標題。說明（n、統計）」由 Figures 分頁產生。", en: "One component; “Figure N. Title. Detail (n, stats)” from the Figures tab." } },
  { t: { zh: "設計系統", en: "Design system" },
    now: { zh: "約 15 種 CSS 組合、23 段頁內樣式。", en: "About 15 stylesheet mixes, 23 inline styles." },
    next: { zh: "一套 tokens 與元件，所有頁面載入同一組。", en: "One set of tokens and components on every page." } },
  { t: { zh: "資料表", en: "Data tables" },
    now: { zh: "Measurement 49 個、Engineering 30 個，全部手寫。", en: "49 on Measurement, 30 on Engineering, all hand-written." },
    next: { zh: "Sheet 匯出 CSV，自動變成表格。Parts 頁已經這樣做。", en: "Sheets to CSV to table. The Parts page already works this way." } },
  { t: { zh: "設計循環", en: "Engineering cycles" },
    now: { zh: "4 條軌道、25 次迭代畫在一張板上。", en: "Four tracks, 25 iterations on one board." },
    next: { zh: "Hub 一個分頁，頁面由表產生。", en: "One Hub tab; the page is generated." } },
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

// ---------- The system in one place: spec v0.2, a proposal awaiting the PI ----------
const LESSONS = [
  { t: { zh: "追蹤表很少人填", en: "Trackers went unfilled" }, d: { zh: "學生端的追蹤表大多是空的，其中一份 30 個分頁只有 1 列。沒有人每週要讀，就不會有人寫。", en: "Most student-side trackers stayed empty; one had 30 tabs and a single row. If nobody needs to read it each week, nobody writes it." } },
  { t: { zh: "審閱靠熱度", en: "Review ran on enthusiasm" }, d: { zh: "一系列作業的留言數是 23、28、3、0、0、0。審閱要當成有限容量來排。", en: "Comments on a run of assignments went 23, 28, 3, 0, 0, 0. Review has to be scheduled as a limited capacity." } },
  { t: { zh: "同一件事做好幾次", en: "One thing done several times" }, d: { zh: "226 組相同的檔案共 2.05 GB；名單手打十幾處。", en: "226 sets of identical files, 2.05 GB; the roster typed by hand in more than ten places." } },
  { t: { zh: "接不到下游", en: "Nothing linked downstream" }, d: { zh: "實驗紀錄沒有超連結，部分 wiki 圖追不回來源。", en: "Lab notes held no links, and some wiki figures could not be traced to a source." } },
  { t: { zh: "決定沒留下", en: "Decisions were not kept" }, d: { zh: "定題沒有決策紀錄，週會沒有決議欄，老師會紀錄在最忙的三個月中斷。", en: "The topic choice had no decision record, weekly meetings had no decisions column, and instructor minutes stopped for the busiest three months." } },
  { t: { zh: "最忙時最薄", en: "Thinnest when busiest" }, d: { zh: "9 月中後會議紀錄只剩連結；freeze 前兩天修了 378 列。", en: "After mid-September minutes were only links; 378 fixes were logged in the last two days before freeze." } }
];

const PRINCIPLES = [
  { t: { zh: "沒有下游讀者就不建表", en: "No reader, no sheet" }, d: { zh: "每張表都要寫明：誰，在每週哪一天，靠它決定什麼。", en: "Every sheet states who reads it, on which day each week, to decide what." } },
  { t: { zh: "一件事只輸入一次", en: "Enter each thing once" }, d: { zh: "其他地方用 ID 引用。名單只有一份，其他表用下拉。", en: "Everywhere else cites the ID. One roster; other sheets use a dropdown." } },
  { t: { zh: "共用一張表", en: "One shared sheet" }, d: { zh: "不用一人一分頁。大家看得到彼此，一眼掃得完。", en: "No tab per person. People can see each other and scan it at a glance." } },
  { t: { zh: "重要的事用關卡擋", en: "Gates, not reminders" }, d: { zh: "不用提醒。三道硬關卡擋在下游之前。", en: "Important things get a gate. Three hard gates stand before anything goes downstream." } },
  { t: { zh: "審閱是有限容量", en: "Review is a limited capacity" }, d: { zh: "佇列、時限、抽查，不追求全審。", en: "Queues, time limits and sampling. Reviewing everything is not the goal." } },
  { t: { zh: "衝刺期變輕", en: "Lighter in the crunch" }, d: { zh: "8 月底起有 7 項更新暫停（Tasks、Roadmap、Storyline、盤點、Constructs、完整歸檔、每月圖說），只留 Issues、Pages 和站立會。", en: "From late August seven updates pause (Tasks, Roadmap, Storyline, stock count, Constructs, full filing, monthly captions), leaving Issues, Pages and stand-ups." } },
  { t: { zh: "PI 只看例外", en: "The PI sees exceptions" }, d: { zh: "AI 每週從 Hub 算出需要處理的事。定題、驗收和對學生的回饋不交給 AI。", en: "AI works out from the Hub what needs attention each week. Reviews, the topic and feedback to students are never left to AI." } }
];

const GATES = [
  { id: "k", ids: "K", t: { zh: "沒有同意就不發布", en: "No consent, no publishing" },
    rule: { zh: "可辨識人臉、姓名、引述、他方 logo，要有 K 且狀態為已同意。未成年另需校方或家長許可。", en: "Identifiable faces, names, quotes and third-party logos need a K marked as agreed. Minors also need school or parent permission." },
    who: { zh: "HP 組長擋，老師簽", en: "HP lead holds it, instructor signs" },
    why: { zh: "發布前的檢查動作，不是一條靠記得的規則。", en: "A check before publishing, not a rule people must remember." } },
  { id: "f", ids: "F · V", t: { zh: "沒有來源就不進 wiki", en: "No source, no wiki" },
    rule: { zh: "每張圖要有 F，每個數字要有 V，都要連回 R 或文獻。", en: "Every figure has an F and every number a V, each linked to an R or a paper." },
    who: { zh: "Cross-checker 擋，老師簽", en: "Cross-checker holds it, instructor signs" },
    why: { zh: "2026 有圖到最後找不到來源。", en: "In 2026 some figures had no traceable source at the end." } },
  { id: "file", ids: "Drive", t: { zh: "沒有檔案就不算紀錄", en: "No file, no record" },
    rule: { zh: "Canva、表單、Google 連結只是工作中介；紀錄要匯出入庫。", en: "Canva, forms and Google links are working tools; a record is exported and stored." },
    who: { zh: "收件人擋", en: "The recipient holds it" },
    why: { zh: "2026 有 23 份只剩連結的存根。", en: "In 2026, 23 documents were link stubs and nothing more." } }
];

const ID_SYSTEM = [
  ["P", { zh: "人", en: "Person" }, { zh: "Ops", en: "Ops" }, "Roster"],
  ["RQ", { zh: "研究問題", en: "Research question" }, { zh: "老師、研究組長", en: "Instructors, Research Lead" }, "Research / Questions"],
  ["L", { zh: "文獻（Paper Card）", en: "Paper (Paper Card)" }, { zh: "讀者", en: "The reader" }, "Research / Papers"],
  ["RI", { zh: "研究影響事件", en: "Research impact event" }, { zh: "當事人，老師確認", en: "The person concerned; instructors confirm" }, "Research / Impact"],
  ["N", { zh: "年度節點與關卡", en: "Node or gate" }, { zh: "PI", en: "PI" }, "Nodes"],
  ["T", { zh: "任務", en: "Task" }, { zh: "組長、老師", en: "Leads, instructors" }, "Tasks"],
  ["D", { zh: "決議", en: "Decision" }, { zh: "會議書記", en: "Meeting scribe" }, "Decisions"],
  ["R", { zh: "一次實驗、運算或測試", en: "One experiment, computation or test" }, { zh: "執行者", en: "Whoever ran it" }, "Runs"],
  ["C", { zh: "Construct", en: "Construct" }, { zh: "Wetlab lead", en: "Wetlab lead" }, "Constructs"],
  ["S", { zh: "SOP，含版本：S012@v3", en: "SOP with version: S012@v3" }, { zh: "組長", en: "Leads" }, "SOPs"],
  ["I", { zh: "利害關係人互動", en: "Stakeholder interaction" }, { zh: "HP 學生", en: "HP students" }, "Interactions"],
  ["K", { zh: "同意紀錄", en: "Consent record" }, { zh: "HP 組長", en: "HP lead" }, "Consent"],
  ["M", { zh: "照片、影片；工具配發", en: "Photo or video; assigned by the tool" }, { zh: "Photo Steward", en: "Photo Steward" }, "Media"],
  ["F", { zh: "Wiki 使用的圖", en: "Figure used on the wiki" }, { zh: "圖的作者", en: "Its author" }, "Figures"],
  ["V", { zh: "數字、事實", en: "Number or fact" }, { zh: "來源作者", en: "Source author" }, "Facts"],
  ["W", { zh: "Wiki 頁", en: "Wiki page" }, { zh: "Wiki Lead", en: "Wiki Lead" }, "Pages"],
  ["X", { zh: "Wiki 問題與修正", en: "Wiki issue or fix" }, { zh: "任何人", en: "Anyone" }, "Issues"],
  ["Q", { zh: "評審題", en: "Judging question" }, { zh: "任何人", en: "Anyone" }, "QA"],
  ["B", { zh: "採購", en: "Purchase" }, { zh: "任何人", en: "Anyone" }, "Purchases"],
  ["A", { zh: "Advisor 產出", en: "Advisor output" }, { zh: "Advisor", en: "Advisor" }, "Advisor Deliverables"]
];
const ID_CHAINS = [
  { name: { zh: "實驗的鏈", en: "The lab chain" }, ids: ["C", "R ← S", "YYYYMMDD_R0412_label_vN", "V · F", "W", "Q"] },
  { name: { zh: "HP 的鏈", en: "The HP chain" }, ids: ["I", "D", "M", "K", "W"] }
];

const SYS_LAYERS = [
  { name: { zh: "入口", en: "Front door" }, tool: "GitHub Pages", put: { zh: "公告、連結、年度日曆、規則摘要", en: "Announcements, links, year calendar, rule summary" }, not: { zh: "個資、進度細節、策略", en: "Personal data, progress detail, strategy" } },
  { name: { zh: "狀態", en: "State" }, tool: "Hub · Ops Hub", put: { zh: "所有有 ID 的紀錄。Hub 給全隊，Ops Hub 只有老師看得到", en: "Everything with an ID. Hub for the team; Ops Hub for instructors only" }, not: { zh: "長文件", en: "Long documents" } },
  { name: { zh: "文件", en: "Documents" }, tool: "Google Drive", put: { zh: "文件、數據、圖、CAD、定稿", en: "Documents, data, figures, CAD, finals" }, not: { zh: "程式碼、可重新下載的公開資料、第三方軟體", en: "Code, public data you can redownload, third-party software" } },
  { name: { zh: "程式", en: "Code" }, tool: "Team GitHub org", put: { zh: "程式碼、韌體、wiki 原始碼、交接文", en: "Code, firmware, wiki source, handover notes" }, not: { zh: "個資", en: "Personal data" } },
  { name: { zh: "對話", en: "Talk" }, tool: "Discord", put: { zh: "討論、通知、求助", en: "Discussion, notices, asking for help" }, not: { zh: "決定和待辦：要寫回 Hub", en: "Decisions and to-dos: these go back to the Hub" } },
  { name: { zh: "AI", en: "AI" }, tool: { zh: "排程 agent 只讀 Hub", en: "Scheduled agent, read-only on Hub" }, put: { zh: "例外摘要、會前簡報、資料品質檢查", en: "Exception digests, pre-meeting briefs, data checks" }, not: { zh: "代替老師判斷", en: "Judging for instructors" } }
];

const HUB_TABS = [
  { tab: "Nodes", reader: { zh: "PI、全隊", en: "PI, everyone" }, when: { zh: "週日", en: "Sunday" }, why: { zh: "這週哪個關卡有風險", en: "Which gate is at risk this week" } },
  { tab: "Tasks", reader: { zh: "組長、advisor", en: "Leads, advisors" }, when: { zh: "週會前", en: "Before the weekly meeting" }, why: { zh: "誰卡住、這週做什麼", en: "Who is stuck, what happens this week" } },
  { tab: "Decisions", reader: { zh: "老師、組長", en: "Instructors, leads" }, when: { zh: "週會開頭", en: "Start of the weekly meeting" }, why: { zh: "上次決定有沒有執行", en: "Whether the last decisions were carried out" } },
  { tab: "Runs", reader: { zh: "Advisor、實驗老師", en: "Advisors, lab instructors" }, when: { zh: "每週六", en: "Every Saturday" }, why: { zh: "哪些沒結果、哪些待審", en: "What has no result, what awaits review" } },
  { tab: "Constructs", reader: { zh: "Wet 組長、老師", en: "Wet Lead, instructors" }, when: { zh: "週會", en: "Weekly meeting" }, why: { zh: "下一步做哪個，放棄哪個", en: "What to do next, what to drop" } },
  { tab: "SOPs", reader: { zh: "組長、Lab 老師", en: "Leads, lab instructors" }, when: { zh: "週會前（N07 前每週）", en: "Before the weekly meeting (weekly until N07)" }, why: { zh: "哪份可以用、哪份待簽", en: "Which is usable, which awaits signing" } },
  { tab: "Interactions", reader: { zh: "HP 組長、老師", en: "HP Lead, instructors" }, when: { zh: "週日", en: "Sunday" }, why: { zh: "誰該回信", en: "Who is owed a reply" } },
  { tab: "Consent", reader: { zh: "HP 組長、老師", en: "HP Lead, instructors" }, when: { zh: "週日", en: "Sunday" }, why: { zh: "什麼不能發布、什麼待老師簽", en: "What cannot be published, what awaits an instructor" } },
  { tab: "Media", reader: { zh: "Media lead；PI 與 AI 查照片", en: "Media Lead; the PI and AI look up photos" }, when: { zh: "週日", en: "Sunday" }, why: { zh: "歸檔到哪、哪些待 K、精選", en: "What got filed, what awaits K, monthly picks" } },
  { tab: "Figures", reader: { zh: "Wiki Lead", en: "Wiki Lead" }, when: { zh: "8 月起每週一", en: "Mondays from August" }, why: { zh: "哪張圖可上線", en: "Which figure may go live" } },
  { tab: "Facts", reader: { zh: "Wiki Lead", en: "Wiki Lead" }, when: { zh: "8 月起每週一", en: "Mondays from August" }, why: { zh: "哪個數字可上線", en: "Which number may go live" } },
  { tab: "Pages", reader: { zh: "Wiki Lead、老師", en: "Wiki Lead, instructors" }, when: { zh: "8 月底起每天", en: "Daily from late August" }, why: { zh: "哪頁還沒過關", en: "Which page has not passed" } },
  { tab: "Issues", reader: { zh: "Wiki Lead、老師", en: "Wiki Lead, instructors" }, when: { zh: "8 月底起每天；站立會週二、四", en: "Daily from late August; stand-ups Tue, Thu" }, why: { zh: "下一個修哪個", en: "What to fix next" } },
  { tab: "QA", reader: { zh: "Lead advisor（從缺時 Mock 主責）", en: "Lead advisor (Mock Lead if empty)" }, when: { zh: "Mock 前（N26 起）", en: "Before each mock (from N26)" }, why: { zh: "哪些題沒人答", en: "Which questions have no answerer" } },
  { tab: "Purchases", reader: { zh: "Ops", en: "Ops" }, when: { zh: "週一", en: "Monday" }, why: { zh: "下單什麼", en: "What to order" } },
  { tab: "Inventory", reader: { zh: "物資與請購；Ops 看低水位", en: "Inventory and Requests; Ops watches low stock" }, when: { zh: "每月第一個週六盤點", en: "First Saturday of each month" }, why: { zh: "買什麼，到期什麼", en: "What to buy, what is expiring" } },
  { tab: "Roster", reader: { zh: "Ops、組長", en: "Ops, leads" }, when: { zh: "週一", en: "Monday" }, why: { zh: "誰在隊上、誰不在", en: "Who is on the team, who is away" } },
  { tab: "Advisor Deliverables", reader: { zh: "主責 instructor", en: "Lead instructors" }, when: { zh: "週日", en: "Sunday" }, why: { zh: "哪份產出到了", en: "Which outputs have arrived" } }
];

// Old concepts and what replaces them.
const REPLACED = [
  { old: "Work Log · Weekly Progress · Progress Report", now: { zh: "Tasks 和 Runs 算出來", en: "Computed from Tasks and Runs" } },
  { old: "Task Tracker · Student Performance", now: { zh: "Hub 的 Tasks；評量在 Ops Hub", en: "Hub Tasks; assessment in the Ops Hub" } },
  { old: "Forecast + Lab note", now: { zh: "同一筆 Run（待決定）", en: "One Run (to be decided)" } },
  { old: "Stakeholders list", now: { zh: "Interactions 和 Consent", en: "Interactions and Consent" } },
  { old: "Wiki tracker · fix log", now: { zh: "Pages 和 Issues", en: "Pages and Issues" } },
  { old: "Shopping list", now: { zh: "Purchases 和 Inventory", en: "Purchases and Inventory" } },
  { old: "Team Deliverable Logbook", now: { zh: "移除", en: "Dropped" } },
  { old: "Wikii · 4. Software · Upload Folder", now: { zh: "移除，內容併入 Media 和 Projects", en: "Dropped; contents merge into Media and Projects" } }
];

// ---------- The year of documents ----------
// Every document's name, template and location lives in this one list, so renaming is one edit here.
// Proposal from the system spec v0.2 and the draft Drive spec; names may change when the Drive is built.
// lane: all wet dry hp wiki adv ops, plus the igem and gate strips.
// d: birth date. end: stays live until then. est: an iGEM date not yet announced (shown with ?).
// feeds: ids this item feeds. gate: k | f | file | node. idp: ID prefix.
const YEAR_LANES = [
  { id: "all", c: "ink", name: { zh: "全隊", en: "All-team" } },
  { id: "wet", c: "teal", name: { zh: "Wetlab", en: "Wetlab" } },
  { id: "dry", c: "blue", name: { zh: "Drylab", en: "Drylab" } },
  { id: "hp", c: "indigo", name: { zh: "HP", en: "HP" } },
  { id: "wiki", c: "purple", name: { zh: "Wiki 與交付物", en: "Wiki & Deliverables" } },
  { id: "adv", c: "gold", name: { zh: "Advisor", en: "Advisor" } },
  { id: "ops", c: "gray", name: { zh: "老師與 Ops", en: "Instructor & Ops" } }
];

// Bands. kind: phase | break | exam | crunch | trip. shade: tint the whole height.
const YEAR_BANDS = [
  { kind: "phase", s: "2026-11-29", e: "2027-01-30", n: { zh: "Topic Research", en: "Topic research" } },
  { kind: "phase", s: "2027-02-13", e: "2027-03-07", n: { zh: "Training", en: "Training" } },
  { kind: "phase", s: "2027-03-13", e: "2027-06-30", n: { zh: "Task Group", en: "Task groups" } },
  { kind: "phase", s: "2027-07-01", e: "2027-08-10", n: { zh: "暑假 Mandatory 二四六", en: "Summer Tue/Thu/Sat" } },
  { kind: "phase", s: "2027-08-14", e: "2027-08-27", n: { zh: "開學，週六", en: "School, Saturdays" } },
  { kind: "crunch", shade: 1, s: "2027-08-28", e: "2027-10-13", n: { zh: "衝刺模式", en: "Crunch mode" }, now: { zh: "衝刺模式：7 項更新暫停，只留 Issues、Pages 和站立會", en: "Crunch mode: seven updates pause; only Issues, Pages and stand-ups remain" } },
  { kind: "trip", shade: 1, s: "2027-10-26", e: "2027-11-03", n: { zh: "Paris", en: "Paris" }, now: { zh: "Paris，團進團出（日期暫定）", en: "Paris, travelling together (dates provisional)" } },
  { kind: "break", shade: 1, s: "2026-12-21", e: "2027-01-04", n: { zh: "部分學校寒假", en: "Some winter breaks" }, now: { zh: "部分學校寒假", en: "Some schools’ winter break" } },
  { kind: "break", shade: 1, s: "2027-02-04", e: "2027-02-12", n: { zh: "春節", en: "CNY" }, now: { zh: "春節假期", en: "Lunar New Year break" } },
  { kind: "break", shade: 1, s: "2027-04-05", e: "2027-04-09", n: { zh: "春假", en: "Spring break" }, now: { zh: "清明與部分學校春假", en: "Qingming and some spring breaks" } },
  { kind: "exam", shade: 1, s: "2027-05-03", e: "2027-05-21", n: { zh: "AP 與會考", en: "AP and exams" }, now: { zh: "AP 考試（含 Late），會考 5/15–16", en: "AP exams including late testing; junior high exam 15–16 May" } },
  { kind: "break", shade: 1, s: "2027-06-04", e: "2027-06-30", n: { zh: "各校陸續結業", en: "Schools finish" }, now: { zh: "各校陸續結業", en: "Schools finishing" } },
  { kind: "break", s: "2027-08-11", e: "2027-09-01", n: { zh: "各校陸續開學", en: "Schools restart" }, now: { zh: "各校陸續開學", en: "Schools restarting" } }
];
// Single days: SAT dates and long weekends. Ticks on the calendar row.
const YEAR_TICKS = [
  { d: "2026-12-05", n: "SAT" }, { d: "2027-03-06", n: "SAT" }, { d: "2027-05-01", n: "SAT" }, { d: "2027-06-05", n: "SAT" },
  { d: "2027-08-28", n: "SAT" }, { d: "2027-09-18", n: "SAT" }, { d: "2027-10-09", n: "SAT" }, { d: "2027-11-06", n: "SAT" },
  { d: "2027-01-01", n: "1/1" }, { d: "2027-02-28", n: "2/28" }, { d: "2027-04-04", n: "4/4" }, { d: "2027-06-09", n: { zh: "端午", en: "Dragon Boat" } },
  { d: "2027-09-15", n: { zh: "中秋", en: "Mid-Autumn" } }, { d: "2027-10-10", n: "10/10" }, { d: "2027-10-25", n: "10/25" }
];

const WHO = {
  ops: { zh: "Ops", en: "Ops" }, pi: { zh: "PI", en: "PI" }, tch: { zh: "老師", en: "Instructors" }, allt: { zh: "全體老師", en: "All instructors" },
  all: { zh: "全隊", en: "Everyone" }, lead: { zh: "各組組長", en: "Group leads" }, wetl: { zh: "Wetlab lead", en: "Wetlab lead" }, hpl: { zh: "HP 組長", en: "HP lead" },
  hps: { zh: "HP 學生", en: "HP students" }, runner: { zh: "執行者", en: "Whoever ran it" }, adv: { zh: "Advisor", en: "Advisor" }, advl: { zh: "Lead advisor", en: "Lead advisor" },
  wikil: { zh: "Wiki Lead", en: "Wiki Lead" }, tl: { zh: "Team Lead", en: "Team Lead" }, vid: { zh: "Video lead", en: "Video lead" }, media: { zh: "Media", en: "Media" },
  fig: { zh: "圖的作者", en: "The figure’s author" }, cross: { zh: "Cross-checker", en: "Cross-checker" }, art: { zh: "美術", en: "Art" }, scribe: { zh: "輪值書記", en: "Rotating scribe" },
  drl: { zh: "Drylab lead", en: "Drylab lead" }, labt: { zh: "實驗老師", en: "Lab instructors" }, ai: { zh: "排程 AI", en: "Scheduled AI" }, sup: { zh: "物資負責人", en: "Supplies owner" }
};

const YEAR_ITEMS = [
  // ---------- iGEM deadlines (estimated until iGEM announces 2027) ----------
  { id: "ig-e", lane: "igem", d: "2027-01-28", est: 1, dl: "1/28?", n: { zh: "Stage I Early", en: "Stage I Early" }, who: WHO.tl, reads: { zh: "iGEM", en: "iGEM" }, rule: { zh: "選用。2026 官方日 +350 天的推估。", en: "Optional. Estimated as the 2026 official date + 350 days." } },
  { id: "ig-r", lane: "igem", d: "2027-03-18", est: 1, dl: "3/18?", n: { zh: "Stage I Regular", en: "Stage I Regular" }, who: WHO.tl, reads: { zh: "iGEM", en: "iGEM" }, rule: { zh: "推估。節點 N08。", en: "Estimated. Node N08." } },
  { id: "ig-l", lane: "igem", d: "2027-05-20", est: 1, dl: "5/20?", n: { zh: "Stage I Late", en: "Stage I Late" }, who: WHO.tl, reads: { zh: "iGEM", en: "iGEM" }, rule: { zh: "推估。應不需要，保險。", en: "Estimated. Should not be needed; insurance." } },
  { id: "ig-s1", lane: "igem", d: "2027-06-16", est: 1, dl: "6/16?", n: { zh: "Safety Form v1", en: "Safety Form v1" }, who: WHO.wetl, reads: { zh: "iGEM", en: "iGEM" }, rule: { zh: "推估。時程表排定 6/16 交初版。", en: "Estimated. The schedule sets v1 on 16 Jun." } },
  { id: "ig-st2", lane: "igem", d: "2027-07-15", est: 1, dl: "7/15?", n: { zh: "Stage II", en: "Stage II" }, who: WHO.tl, reads: { zh: "iGEM", en: "iGEM" }, rule: { zh: "推估。Stage II Finalization。", en: "Estimated. Stage II Finalization." } },
  { id: "ig-pv", lane: "igem", d: "2027-07-29", est: 1, dl: "7/29?", n: { zh: "Promo Video", en: "Promo Video" }, who: WHO.vid, reads: { zh: "iGEM", en: "iGEM" }, rule: { zh: "推估。送出前影像同意已查。", en: "Estimated. Image consent is checked before it goes in." } },
  { id: "ig-rf", lane: "igem", d: "2027-09-01", e: "2027-09-03", est: 1, dl: "9/1–3?", n: { zh: "Roster Freeze", en: "Roster Freeze" }, who: WHO.ops, reads: { zh: "iGEM", en: "iGEM" }, rule: { zh: "時程表月曆寫 9/3，推估分頁寫 9/1。同意書的 Roster 審核在 8 月底。", en: "The schedule grid says 3 Sep, its estimate tab 1 Sep. The consent form’s Roster review is in late August." } },
  { id: "ig-s2", lane: "igem", d: "2027-09-22", est: 1, dl: "9/22?", n: { zh: "Safety Form 定稿", en: "Safety Form final" }, who: WHO.wetl, reads: { zh: "iGEM", en: "iGEM" }, rule: { zh: "推估。", en: "Estimated." } },
  { id: "ig-idt", lane: "igem", d: "2027-09-28", est: 1, dl: "9/28?", n: { zh: "IDT 免費合成截止", en: "IDT free synthesis" }, who: WHO.wetl, reads: { zh: "IDT、iGEM", en: "IDT, iGEM" }, rule: { zh: "推估。", en: "Estimated." } },
  { id: "ig-fz", lane: "igem", d: "2027-10-06", e: "2027-10-13", est: 1, dl: "10/6–13?", n: { zh: "Wiki Freeze", en: "Wiki Freeze" }, who: WHO.tl, reads: { zh: "評審", en: "Judges" }, loc: "Wiki · Judging · Attribution · Registry · Software", rule: { zh: "23:00 台灣（15:00 UTC）。時程表月曆寫 10/13，推估分頁寫 10/6，兩個都顯示。內部關卡從 10/6 往回排，官方公布較晚就多出緩衝。官方明文不給延期，過期即關閉。", en: "23:00 Taipei (15:00 UTC). The schedule grid says 13 Oct, its estimate tab 6 Oct, so both are shown. Internal gates back-plan from 6 Oct; a later announcement becomes buffer. iGEM states deadlines are not extended and close on time." } },
  { id: "ig-pr", lane: "igem", d: "2027-10-13", e: "2027-10-20", est: 1, dl: "10/13–20?", n: { zh: "Presentation Video", en: "Presentation Video" }, who: WHO.vid, reads: { zh: "評審", en: "Judges" }, rule: { zh: "時程表月曆寫 10/20，推估分頁寫 10/13。", en: "The schedule grid says 20 Oct, its estimate tab 13 Oct." } },
  { id: "ig-j", lane: "igem", d: "2027-10-29", e: "2027-11-01", est: 1, dl: "10/29–11/1?", n: { zh: "Jamboree", en: "Jamboree" }, who: WHO.pi, reads: { zh: "評審", en: "Judges" }, rule: { zh: "推估，以官方公布為準。", en: "Estimated; the official announcement decides." } },

  // ---------- Gates. Hard gates run all year; these are the dates when they bite. ----------
  { id: "g-pk", lane: "gate", d: "2027-01-30", gate: "node", dl: "1/30", n: { zh: "定題要有 Decision Record", en: "Decision needs a record" }, who: WHO.pi, reads: WHO.allt, rule: { zh: "沒有理由、反對意見、Plan B、未決範圍就不算定題。", en: "No topic counts as decided without reasons, objections, Plan B and open scope." }, node: "N04" },
  { id: "g-safe", lane: "gate", d: "2027-03-07", gate: "node", dl: "3/7", n: { zh: "安全考通過才進實驗室", en: "Safety exam before lab" }, who: WHO.tch, reads: WHO.ops, rule: { zh: "考試成績入 Ops。沒有通過不能進實驗室。", en: "Grades go to Ops. No pass, no lab." }, node: "N05" },
  { id: "g-scope", lane: "gate", d: "2027-03-13", gate: "node", dl: "3/13", n: { zh: "範圍閘門", en: "Scope gate" }, who: WHO.pi, reads: WHO.allt, rule: { zh: "未決範圍關閉；Task lead 公布；Roadmap v1；SOP Active；安全與庫存就緒。", en: "Open scope closed; task leads named; Roadmap v1; SOPs active; safety and inventory ready." }, node: "N07" },
  { id: "g-seq", lane: "gate", d: "2027-03-27", gate: "node", dl: "3/27", n: { zh: "序列設計審查", en: "Sequence review" }, who: { zh: "Wet、Dry lead", en: "Wet and Dry leads" }, reads: WHO.tch, rule: { zh: "每條序列有 Construct、設計人、審查人；訂單清單定稿。", en: "Each sequence has a Construct, designer and reviewer; order list final." }, node: "N09" },
  { id: "g-promo", lane: "gate", d: "2027-07-18", gate: "k", dl: "7/18", n: { zh: "影像同意查核", en: "Image consent check" }, who: WHO.vid, reads: WHO.hpl, rule: { zh: "硬關卡：沒有同意就不發布。拍攝 7/6–7/18 結束後，剪進 Promo 的每個鏡頭要有 K。", en: "Hard gate: no consent, no publishing. After the 6–18 Jul shoot, every shot in the Promo needs a K." }, node: "N20" },
  { id: "g-k", lane: "gate", d: "2027-09-08", gate: "k", dl: "9/8", n: { zh: "同意全數結清", en: "All consent cleared" }, who: { zh: "HP advisor", en: "HP advisor" }, reads: WHO.tch, rule: { zh: "硬關卡：沒有同意就不發布。Freeze 前 4 週 Consent 無待辦。", en: "Hard gate: no consent, no publishing. No open Consent rows 4 weeks before freeze." }, node: "N25" },
  { id: "g-f", lane: "gate", d: "2027-09-15", gate: "f", dl: "9/15", n: { zh: "全部 F 已簽", en: "Every F signed" }, who: { zh: "Lab lead、Wiki Lead", en: "Lab lead, Wiki Lead" }, reads: WHO.tch, rule: { zh: "硬關卡：沒有來源就不進 wiki。實驗截止，圖定稿，Results 補齊。", en: "Hard gate: no source, no wiki. Lab work ends, figures final, Results complete." }, node: "N27" },
  { id: "g-push", lane: "gate", d: "2027-09-29", gate: "node", dl: "9/29", n: { zh: "全站最後推送", en: "Last full push" }, who: WHO.wikil, reads: WHO.pi, rule: { zh: "Issues 無 P0。從 10/6 往回排。", en: "No P0 in Issues. Back-planned from 6 Oct." }, node: "N30" },
  { id: "g-file", lane: "gate", d: "2026-11-25", end: "2027-11-20", gate: "file", dl: { zh: "全年", en: "All year" }, n: { zh: "沒有檔案就不算紀錄", en: "No file, no record" }, who: { zh: "收件人", en: "The recipient" }, reads: WHO.all, rule: { zh: "硬關卡。Canva、表單、Google 連結只是工作中介，紀錄要匯出入庫。沒有固定日期：每次收件都適用。", en: "Hard gate. Canva, forms and Google links are working tools; a record is exported and stored. No single date: it applies at every hand-in." } },

  // ---------- All-team ----------
  { id: "hb", lane: "all", d: "2026-11-25", n: { zh: "Handbook", en: "Handbook" }, node: "N00", who: WHO.ops, reads: WHO.all, tpl: "Handbook", loc: "00 Start Here/GEMS 2027 Handbook", rule: { zh: "取代散落各處的規則文件。只在會議決議後改。12/26 全員確認。", en: "Replaces scattered rule documents. Changes only after a recorded decision. Everyone confirms it on 26 Dec." }, feeds: ["mins"] },
  { id: "hubs", lane: "all", d: "2026-11-25", end: "2027-11-20", n: { zh: "Hub · Nodes", en: "Hub · Nodes" }, idp: "N", node: "N00", who: WHO.ops, reads: { zh: "PI、全隊，週日", en: "PI and everyone, on Sunday" }, tpl: { zh: "Hub 分頁", en: "Hub tab" }, loc: "00 Start Here/GEMS 2027 Hub · Nodes", rule: { zh: "每個節點一列。學生 owner 週日前更新狀態，有風險時寫一句為什麼。", en: "One row per node. The student owner updates the status by Sunday, with one line of why if at risk." }, feeds: ["digest"] },
  { id: "tasks", lane: "all", d: "2026-12-26", end: "2027-10-13", n: { zh: "Tasks", en: "Tasks" }, idp: "T", who: { zh: "組長、老師開列，每人更新自己的", en: "Leads and instructors open rows; each person updates their own" }, reads: { zh: "組長、advisor，週會前", en: "Leads and advisors, before the weekly meeting" }, tpl: { zh: "Hub 分頁", en: "Hub tab" }, loc: "Hub/Tasks", rule: { zh: "每人每週 5 分鐘內。不再有 Work Log、Weekly Progress。8 月底起併入站立會。", en: "Under 5 minutes per person per week. No more Work Log or Weekly Progress. Folds into the stand-up from late August." }, feeds: ["digest"] },
  { id: "mins", lane: "all", d: "2026-12-26", end: "2027-08-28", n: { zh: "週會紀錄", en: "Weekly minutes" }, idp: "D", who: WHO.scribe, reads: { zh: "下一次開會的人", en: "Whoever attends next" }, tpl: "Meeting", loc: "<group>/Meetings/YYYYMMDD_Wet_Weekly", rule: { zh: "一個範本三種會議。寫不出決議就寫「本次無決議」。衝刺後由站立會取代。", en: "One template for three kinds of meeting. No decision means writing “no decision today”. Stand-ups replace it in the crunch." }, feeds: ["decs"] },
  { id: "decs", lane: "all", d: "2026-12-26", end: "2027-11-20", n: { zh: "Decisions", en: "Decisions" }, idp: "D", who: WHO.scribe, reads: { zh: "老師、組長，週會開頭", en: "Instructors and leads, at the start of the weekly meeting" }, tpl: { zh: "Hub 分頁", en: "Hub tab" }, loc: "Hub/Decisions", rule: { zh: "事項、決議、理由、Owner、期限。週會先看上次決定有沒有執行。", en: "Item, decision, reason, owner, due date. Each meeting starts by checking the last ones." }, feeds: ["digest"] },
  { id: "card", lane: "all", d: "2027-01-02", n: { zh: "Topic Card", en: "Topic Card" }, node: "N03", who: { zh: "老師發展，學生可自提", en: "Instructors develop; students may propose" }, reads: WHO.allt, tpl: "TopicCard", loc: "20 Topic/Topic Cards/TP<ID>_TopicCard_<title>", gate: "", rule: { zh: "每題一張，評語入同一張表，學生看得到。", en: "One per topic, comments in one table that students can see." }, feeds: ["dr"] },
  { id: "photo", lane: "all", d: "2026-12-26", end: "2027-11-03", n: { zh: "Media", en: "Media" }, idp: "M", who: { zh: "Photo Steward", en: "Photo Steward" }, reads: { zh: "Media lead；Video lead、Wiki Lead 查", en: "Media Lead; Video and Wiki Leads look things up" }, tpl: { zh: "Hub 分頁", en: "Hub tab" }, loc: "Hub/Media · 40 Media/Photos/YYYY-MM · Footage/YYYY-MM", rule: { zh: "上傳寫一句：誰、在做什麼。依月歸檔，其他分類在表上。", en: "One line on upload: who, doing what. Filed by month; everything else is in the sheet." }, feeds: ["g-promo", "pages"] },
  { id: "road", lane: "all", d: "2027-03-13", n: { zh: "Roadmap v1", en: "Roadmap v1" }, node: "N07", who: WHO.lead, reads: WHO.all, tpl: "Roadmap", loc: "20 Topic/Decision Records/Roadmap_v1", rule: { zh: "從 Decision Record 接到每條 Task Group 的目標，範圍閘門前完成。", en: "Takes the Decision Record through to each task group’s goals; done before the scope gate." }, feeds: ["tasks"] },

  // ---------- Wetlab ----------
  { id: "wtrain", lane: "wet", d: "2027-02-13", e: "2027-03-07", n: { zh: "Training W1–W4", en: "Training W1–W4" }, node: "N05", who: WHO.tch, reads: { zh: "學生、Advisor", en: "Students, advisors" }, tpl: { zh: "訓練課表", en: "Training curriculum" }, loc: "10 Training/Classes", rule: { zh: "連 4 週週末。作業 advisor 第一輪意見，老師抽 20%（待決定），每批有結案紀錄。", en: "Four weekends in a row. Advisors give first notes on homework and instructors sample 20% (to be decided), with a closing note per batch." }, feeds: ["exam", "sop"] },
  { id: "sop", lane: "wet", d: "2027-03-13", end: "2027-09-15", n: { zh: "SOP", en: "SOP" }, idp: "S", node: "N07", who: WHO.lead, reads: { zh: "執行者", en: "Whoever runs it" }, tpl: "SOP", loc: "31 Wetlab/SOP/S<ID>_<title>_v<N>", rule: { zh: "老師全審，1 週內。用版本號（S012@v3），不開新檔。3/13 前 Active。", en: "Instructors review all, within a week. Version numbers (S012@v3), no new files. Active by 13 Mar." }, feeds: ["run"] },
  { id: "safety", lane: "wet", d: "2027-03-13", end: "2027-11-03", n: { zh: "Safety", en: "Safety" }, node: "N07", who: WHO.wetl, reads: WHO.labt, tpl: "SafetyRegister", loc: "31 Wetlab/Safety/Safety Register", rule: { zh: "2026 沒有這個位置，2027 新增。3/13 前就緒。", en: "New for 2027: 2026 had no place for it. Ready by 13 Mar." }, feeds: ["sf1"] },
  { id: "inv", lane: "wet", d: "2027-03-13", end: "2027-11-03", n: { zh: "Inventory", en: "Inventory" }, node: "N07", who: WHO.sup, reads: { zh: "物資負責人，每月", en: "Supplies owner, monthly" }, tpl: { zh: "Hub 分頁", en: "Hub tab" }, loc: "Hub/Inventory", rule: { zh: "每月盤點：買什麼，到期什麼。", en: "Counted monthly: what to buy, what is expiring." }, feeds: ["buy"] },
  { id: "con", lane: "wet", d: "2027-03-13", end: "2027-09-15", n: { zh: "Constructs", en: "Constructs" }, idp: "C", who: WHO.wetl, reads: { zh: "Wetlab lead、老師，週會", en: "Wetlab lead, instructors, weekly" }, tpl: { zh: "Hub 分頁", en: "Hub tab" }, loc: "Hub/Constructs", rule: { zh: "每條有設計人和審查人。決定下一步做哪個，放棄哪個。", en: "Each has a designer and a reviewer. Decides what to do next and what to drop." }, feeds: ["g-seq", "run"] },
  { id: "order", lane: "wet", d: "2027-04-01", n: { zh: "IDT 訂單", en: "IDT order" }, idp: "B", node: "N10", who: WHO.wetl, reads: { zh: "老師、Ops", en: "Instructors, Ops" }, tpl: "IDTOrders", loc: "31 Wetlab/IDT Orders · Hub/Purchases", rule: { zh: "訂單與 Construct ID 一一對應，過了 3/27 審查才能下。", en: "Orders match Construct IDs one-to-one and open only after the 27 Mar review." }, feeds: ["seqret"] },
  { id: "run", lane: "wet", d: "2027-04-03", end: "2027-09-15", n: { zh: "Runs", en: "Runs" }, idp: "R", who: WHO.runner, reads: { zh: "Advisor、實驗老師，每週", en: "Advisors and lab instructors, weekly" }, tpl: "RunRecord", loc: "Hub/Runs · 31 Wetlab/Run Records/YYYY-MM · 31 Wetlab/Data/Raw", rule: { zh: "一次一筆：Plan 在做之前，Results 48 小時內。Forecast 併入（待決定）。原始檔不改寫。", en: "One per run: Plan before, Results within 48 hours. Forecast merges in (to be decided). Raw files are never rewritten." }, feeds: ["figs", "facts"] },
  { id: "seqret", lane: "wet", d: "2027-05-01", n: { zh: "定序回傳", en: "Sequencing returns" }, who: WHO.wetl, reads: { zh: "Wetlab", en: "Wetlab" }, tpl: { zh: "檔名規則", en: "File name rule" }, loc: "31 Wetlab/Sequences/<Level>", rule: { zh: "2026 放在 Drylab 的 Sent Sequences，2027 歸 Wetlab，連回 Construct。日期是估計，依實際到貨。", en: "2026 kept these in Drylab’s Sent Sequences; in 2027 they sit in Wetlab, linked to the Construct. The date is an estimate, set by actual delivery." }, feeds: ["run"] },
  { id: "sf1", lane: "wet", d: "2027-06-08", n: { zh: "Safety Form 草稿", en: "Safety Form draft" }, who: WHO.wetl, reads: WHO.tch, tpl: { zh: "iGEM 表單", en: "iGEM form" }, loc: "50 Deliverables/Forms", rule: { zh: "6/16? 交初版，9/22? 定稿。", en: "v1 due 16 Jun?, final 22 Sep?." }, feeds: ["ig-s1", "ig-s2"] },

  // ---------- Drylab ----------
  { id: "drtrain", lane: "dry", d: "2027-02-13", e: "2027-03-07", n: { zh: "Dry 同步訓練", en: "Dry training" }, node: "N05", who: WHO.tch, reads: { zh: "學生、Advisor", en: "Students, advisors" }, tpl: { zh: "訓練課表", en: "Training curriculum" }, loc: "10 Training", rule: { zh: "與 Wetlab W1–W4 同時進行。", en: "Runs alongside Wetlab W1–W4." }, feeds: ["exam"] },
  { id: "pcard", lane: "dry", d: "2027-03-13", n: { zh: "Project Card", en: "Project Card" }, who: WHO.drl, reads: WHO.tch, tpl: "ProjectCard", loc: "32 Drylab/Projects/<MD01 or SW01>/<ID>_ProjectCard", rule: { zh: "每個模型或工具一張，一頁，寫明題目、負責人、repo。4. Software 取消，併到這裡。", en: "One page per model or tool: question, owner, repo. 4. Software goes away and folds in here." }, feeds: ["drun", "repo"] },
  { id: "repo", lane: "dry", d: "2027-03-13", end: "2027-11-20", n: { zh: "團隊 GitHub repo", en: "Team GitHub repos" }, who: WHO.drl, reads: { zh: "Dry、Wiki", en: "Dry lab, wiki team" }, tpl: { zh: "README 與 repo 101", en: "README and repo 101" }, loc: "Team GitHub org", rule: { zh: "程式碼不進 Drive，也不留在個人帳號。結案時留交接文。", en: "Code stays out of Drive and off personal accounts. A handover note closes it out." }, feeds: ["drun", "ig-fz"] },
  { id: "drun", lane: "dry", d: "2027-03-20", end: "2027-09-15", n: { zh: "運算 Runs", en: "Compute Runs" }, idp: "R", who: WHO.runner, reads: { zh: "Advisor、Dry 老師，每週", en: "Advisors and dry-lab instructors, weekly" }, tpl: "RunLog", loc: "Hub/Runs · 32 Drylab/Projects/<ID>_RunLog", rule: { zh: "和實驗同一張表。超過 500 MB 或 300 檔打包進 Archive，附清單和 checksum（門檻是提議）。", en: "Same tab as lab Runs. Over 500 MB or 300 files is packed into Archive with a manifest and checksum (thresholds proposed)." }, feeds: ["figs", "facts"] },
  { id: "seqin", lane: "dry", d: "2027-03-20", n: { zh: "序列設計輸入", en: "Sequence design input" }, who: WHO.drl, reads: WHO.wetl, tpl: { zh: "Constructs 欄位", en: "Constructs fields" }, loc: "Hub/Constructs · 31 Wetlab/Sequences/<Level>", rule: { zh: "Dry 的設計依據連到 Construct，不留在聊天。", en: "Dry-lab design rationale links to the Construct and does not stay in chat." }, feeds: ["g-seq"] },

  // ---------- HP ----------
  { id: "hptrain", lane: "hp", d: "2027-02-13", e: "2027-03-07", n: { zh: "HP 同步訓練", en: "HP training" }, node: "N05", who: WHO.tch, reads: { zh: "學生、Advisor", en: "Students, advisors" }, tpl: { zh: "訓練課表", en: "Training curriculum" }, loc: "10 Training", rule: { zh: "與 Wetlab W1–W4 同時進行。", en: "Runs alongside Wetlab W1–W4." }, feeds: ["exam"] },
  { id: "hpgoal", lane: "hp", d: "2027-03-13", n: { zh: "HP Roadmap", en: "HP Roadmap" }, who: WHO.hpl, reads: WHO.tch, tpl: "Roadmap", loc: "34 Human Practices", rule: { zh: "3 月定版，每月滾動。", en: "Settled in March, rolled monthly." }, feeds: ["inter"] },
  { id: "inter", lane: "hp", d: "2027-03-20", end: "2027-09-29", n: { zh: "Interactions", en: "Interactions" }, idp: "I", who: WHO.hps, reads: { zh: "HP 組長、老師，週日", en: "HP lead, instructors, on Sunday" }, tpl: "Interaction", loc: "Hub/Interactions · 34 Human Practices/Interactions/I<ID>_<YYYYMMDD>_<who>", rule: { zh: "一次互動一夾，7 天內齊。沒有獨立的 Outreach 層。", en: "One folder per interaction, complete in 7 days. No separate Outreach layer." }, feeds: ["consent", "write", "attr"] },
  { id: "consent", lane: "hp", d: "2027-03-20", end: "2027-09-08", n: { zh: "Consent", en: "Consent" }, idp: "K", gate: "k", who: WHO.hpl, reads: { zh: "HP 組長、老師，發布前", en: "HP lead, instructors, before publishing" }, tpl: "Consent_ThankYou · Consent_Onsite", loc: "Hub/Consent · 34 Human Practices/Consent/K<ID>_ConsentRequest_Thanks", rule: { zh: "照片、影片、姓名、引述、logo 各自記。回覆要存檔。未成年另需校方或家長許可。", en: "Photo, video, name, quote and logo recorded separately. Replies are stored. Minors also need school or parent permission." }, feeds: ["g-k", "g-promo"] },
  { id: "write", lane: "hp", d: "2027-03-27", end: "2027-09-29", n: { zh: "Meeting Write-Up", en: "Meeting Write-Up" }, who: WHO.hps, reads: WHO.hpl, tpl: "Interaction", loc: "34 Human Practices/Interactions/I<ID>_<YYYYMMDD>_<who>", rule: { zh: "互動後 7 天內，組長驗收無空欄。專案改變寫成決議。", en: "Within 7 days of the interaction; the lead checks for blank fields. Project changes become Decisions." }, feeds: ["story", "decs"] },
  { id: "story", lane: "hp", d: "2027-04-10", end: "2027-08-21", n: { zh: "IHP Storyline", en: "IHP Storyline" }, who: WHO.hpl, reads: WHO.tch, tpl: "IHPStoryline", loc: "34 Human Practices/IHP Storyline", rule: { zh: "每次互動的 Before 和 After 各一句。8 月定版。", en: "One line each of Before and After per interaction. Settled in August." }, feeds: ["pages"] },
  { id: "perm", lane: "hp", d: "2027-04-17", end: "2027-09-08", n: { zh: "未成年許可", en: "Minor permissions" }, gate: "k", who: { zh: "教育線負責學生", en: "Education student lead" }, reads: WHO.tch, tpl: "MinorPermission", loc: "GEMS 2027 Ops/Consent Originals/Minor Permissions/K<ID>_MinorPermission_<session>", rule: { zh: "每場課前取得。沒有就不拍人。", en: "Obtained before each session. Without it, no people in shot." }, feeds: ["consent"] },
  { id: "impact", lane: "hp", d: "2027-06-26", n: { zh: "Education Impact", en: "Education Impact" }, who: { zh: "教育線", en: "Education line" }, reads: WHO.tch, tpl: "EducationImpact", loc: "34 Human Practices/Education/YYYYMMDD_EducationImpact_<course>", rule: { zh: "學段結束後 2 週，寫明改了課程哪裡。", en: "Two weeks after each teaching block, stating what changed in the course." }, feeds: ["pages"] },

  // ---------- Wiki & Deliverables ----------
  { id: "s1", lane: "wiki", d: "2027-03-13", n: { zh: "Stage I 表單", en: "Stage I form" }, node: "N08", who: WHO.tl, reads: { zh: "iGEM", en: "iGEM" }, tpl: { zh: "iGEM 表單", en: "iGEM form" }, loc: "50 Deliverables/Forms", rule: { zh: "範圍閘門後立刻送出。", en: "Goes in right after the scope gate." }, feeds: ["ig-r"] },
  { id: "pages", lane: "wiki", d: "2027-06-15", end: "2027-10-13", n: { zh: "Pages · Wiki v1", en: "Pages · Wiki v1" }, idp: "W", node: "N14", who: WHO.wikil, reads: { zh: "Wiki Lead、老師，8 月底起每天", en: "Wiki Lead, instructors, daily from late August" }, tpl: "WikiMaster", loc: "Hub/Pages · 50 Deliverables/Wiki/W<ID> <page>/W<ID>_<page>_Master", rule: { zh: "每頁有 owner 和 cross-checker。只有 page owner 改 master doc。", en: "Every page has an owner and a cross-checker. Only the page owner edits the master doc." }, feeds: ["issues", "g-push"] },
  { id: "figs", lane: "wiki", d: "2027-06-15", end: "2027-09-15", n: { zh: "Figures", en: "Figures" }, idp: "F", gate: "f", who: WHO.fig, reads: { zh: "Wiki Lead，8 月起每週", en: "Wiki Lead, weekly from August" }, tpl: { zh: "Hub 分頁", en: "Hub tab" }, loc: "Hub/Figures · 40 Media/Figures/Current", rule: { zh: "每張圖要連回 R 或文獻。Cross-checker 3 天內看，老師簽。", en: "Each figure links to an R or a paper. Cross-checker within 3 days, instructor signs." }, feeds: ["g-f", "pages"] },
  { id: "facts", lane: "wiki", d: "2027-06-15", end: "2027-09-15", n: { zh: "Facts v1", en: "Facts v1" }, idp: "V", gate: "f", node: "N14", who: { zh: "來源作者", en: "The source’s author" }, reads: { zh: "Wiki Lead，8 月起每週", en: "Wiki Lead, weekly from August" }, tpl: { zh: "Hub 分頁", en: "Hub tab" }, loc: "Hub/Facts", rule: { zh: "每個數字一列，連回 R 或文獻。wiki、影片、展板都引用，不抄。", en: "One row per number, linked to an R or a paper. The wiki, videos and booth cite it and never copy." }, feeds: ["g-f", "pages", "script"] },
  { id: "s2", lane: "wiki", d: "2027-07-08", n: { zh: "Stage II 表單", en: "Stage II form" }, who: WHO.tl, reads: { zh: "iGEM", en: "iGEM" }, tpl: { zh: "iGEM 表單", en: "iGEM form" }, loc: "50 Deliverables/Forms", rule: { zh: "取自 Facts v1。", en: "Drawn from Facts v1." }, feeds: ["ig-st2"] },
  { id: "script", lane: "wiki", d: "2027-06-26", n: { zh: "Promo 腳本", en: "Promo script" }, who: WHO.vid, reads: WHO.tch, tpl: "VideoScript", loc: "50 Deliverables/Promo Video/PromoVideo_Script_v<N>", rule: { zh: "7/6 開拍前定稿。每個鏡頭連到 M。比 2026 早約兩週。", en: "Final before the 6 Jul shoot. Each shot cites an M. About two weeks earlier than 2026." }, feeds: ["promo"] },
  { id: "promo", lane: "wiki", d: "2027-07-18", n: { zh: "Promo 剪輯", en: "Promo cut" }, who: WHO.vid, reads: WHO.tch, tpl: { zh: "檔名規則", en: "File name rule" }, loc: "50 Deliverables/Promo Video", rule: { zh: "拍攝 7/6–7/18，之後剪輯，送出前影像同意已查。", en: "Shoot 6–18 Jul, then edit; image consent checked before submitting." }, feeds: ["ig-pv"] },
  { id: "brand", lane: "wiki", d: "2027-08-21", n: { zh: "主視覺定稿", en: "Key visual" }, node: "N22", who: WHO.art, reads: WHO.tch, tpl: { zh: "檔名規則", en: "File name rule" }, loc: "40 Media/Art and Brand", rule: { zh: "決策要有檔案，不只是表單連結。", en: "Decisions leave a file, not just a form link." }, feeds: ["pages", "booth"] },
  { id: "issues", lane: "wiki", d: "2027-08-28", end: "2027-10-13", n: { zh: "Issues", en: "Issues" }, idp: "X", node: "N23", who: { zh: "任何人", en: "Anyone" }, reads: { zh: "Wiki Lead，每天", en: "Wiki Lead, daily" }, tpl: { zh: "Hub 分頁", en: "Hub tab" }, loc: "Hub/Issues", rule: { zh: "衝刺期唯一的待辦表。週二、四 15 分鐘站立會只看這張。", en: "The only to-do list in the crunch. The 15-minute Tue and Thu stand-up reads only this." }, feeds: ["g-push", "ig-fz"] },
  { id: "qa", lane: "wiki", d: "2027-08-28", end: "2027-10-29", n: { zh: "QA", en: "QA" }, idp: "Q", who: { zh: "任何人；Lead advisor 看", en: "Anyone; the Lead advisor reads it" }, reads: { zh: "Lead advisor，Mock 前", en: "Lead advisor, before each mock" }, tpl: { zh: "Hub 分頁", en: "Hub tab" }, loc: "Hub/QA", rule: { zh: "每題有人答。一份，不分岔。", en: "Every question has someone to answer it. One file, no forks." }, feeds: ["mock"] },
  { id: "attr", lane: "wiki", d: "2027-09-01", end: "2027-10-06", n: { zh: "Attribution", en: "Attribution" }, who: WHO.tl, reads: WHO.tch, tpl: "Attribution", loc: "50 Deliverables/Wiki/Team/Attribution", rule: { zh: "每列對得上 ID。從 Roster 和 I 帶入，不手打名字。", en: "Each row matches an ID, pulled from the Roster and I; names are not typed by hand." }, feeds: ["ig-fz"] },
  { id: "booth", lane: "wiki", d: "2027-09-11", n: { zh: "展位版面", en: "Booth layout" }, who: WHO.art, reads: WHO.tch, tpl: { zh: "版面檔", en: "Layout file" }, loc: "50 Deliverables/Jamboree/Booth and Materials", rule: { zh: "數字只取自 Facts。", en: "Numbers come only from Facts." }, feeds: ["ig-j"] },
  { id: "mock", lane: "wiki", d: "2027-09-11", end: "2027-10-23", n: { zh: "Mock 紀錄", en: "Mock records" }, node: "N26", who: WHO.scribe, reads: WHO.advl, tpl: "MockJudging", loc: "50 Deliverables/Jamboree/Mocks/YYYYMMDD_MockJudging_Team", rule: { zh: "9/11 第一次全隊 mock，10/9–10/23 再 3 次。QA 無空白重要題。", en: "First full-team mock on 11 Sep, three more 9–23 Oct. No blank important question in QA." }, feeds: ["ig-j", "qa"] },
  { id: "pres", lane: "wiki", d: "2027-09-15", n: { zh: "Presentation 腳本", en: "Presentation script" }, who: WHO.vid, reads: WHO.tch, tpl: "VideoScript", loc: "50 Deliverables/Presentation Video/PresentationVideo_Script_v<N>", rule: { zh: "圖定稿後才鎖。素材依段落編號。", en: "Locks only after figures are final. Clips numbered by section." }, feeds: ["ig-pr"] },

  // ---------- Advisor (rules from the consent form v3; folders and IDs proposed) ----------
  { id: "ascope", lane: "adv", d: "2026-11-29", n: { zh: "Scope Card", en: "Scope Card" }, idp: "A", who: WHO.adv, reads: { zh: "主責 instructor", en: "Lead instructor" }, tpl: "ADV-T0 Scope Card", loc: "60 Advisors/A01/S1 Topic", rule: { zh: "每階段開始前確認。依同意書。", en: "Agreed before every stage, under the consent form." }, feeds: ["atopic"] },
  { id: "atopic", lane: "adv", d: "2026-12-12", n: { zh: "候選題目報告", en: "Candidate topic report" }, idp: "A", who: WHO.adv, reads: WHO.tch, tpl: "ADV-T1 Topic Report", loc: "60 Advisors/A01/S1 Topic", rule: { zh: "1/30 前交。內容有可查證的來源，並實際影響了題目討論。", en: "Due by 30 Jan. Sources can be checked, and it really shaped the topic discussion." }, feeds: ["card", "dr"] },
  { id: "amonth", lane: "adv", d: "2026-12-31", end: "2027-11-01", n: { zh: "月報", en: "Monthly report" }, who: WHO.adv, reads: { zh: "主責 instructor", en: "Lead instructor" }, tpl: "ADV-T8 Monthly Report", loc: "60 Advisors/A01/Reports", rule: { zh: "每月最後一日前：指導了誰、改了什麼、解決了什麼、下一步。", en: "By the last day of each month: who was coached, what changed, what got solved, what is next." }, feeds: ["areview"] },
  { id: "a101", lane: "adv", d: "2027-02-20", e: "2027-03-31", n: { zh: "101 與 workshop", en: "101 and workshop" }, idp: "A", gate: "file", who: WHO.adv, reads: { zh: "隊員", en: "Team members" }, tpl: "ADV-T2 101 Guide · ADV-T2W", loc: "60 Advisors/A01/S2 Training", rule: { zh: "隊員不靠 advisor，能照著文件獨立做到。要是檔案，不是 Canva 連結。", en: "Members can do it from the document alone. It must be a file, not a Canva link." }, feeds: ["wtrain", "areview"] },
  { id: "areview", lane: "adv", d: "2027-03-31", end: "2027-08-10", n: { zh: "階段驗收", en: "Stage reviews" }, who: { zh: "主責 instructor", en: "Lead instructor" }, reads: { zh: "學生與家長（書面）", en: "Student and parents (written)" }, tpl: "ADV-T9 Stage Result", loc: "GEMS 2027 Ops/Advisors/Reviews", rule: { zh: "當面說明，時數達標不等於通過。結果存在 Ops。", en: "Explained in person; meeting the hours does not mean passing. Results stay in Ops." }, feeds: ["aroster"] },
  { id: "as3", lane: "adv", d: "2027-04-03", e: "2027-06-26", n: { zh: "S3 審查紀錄", en: "S3 review log" }, idp: "A", who: WHO.adv, reads: { zh: "主責 instructor", en: "Lead instructor" }, tpl: "ADV-T3 Review Log", loc: "60 Advisors/A01/S3 Design", rule: { zh: "有紀錄顯示隊伍做法改變。判斷責任在 instructor。", en: "A record shows the team’s practice changed. The judgement stays with the instructor." }, feeds: ["areview"] },
  { id: "as4", lane: "adv", d: "2027-07-01", e: "2027-08-10", n: { zh: "S4 工作線", en: "S4 workline" }, idp: "A", who: WHO.adv, reads: WHO.tch, tpl: "ADV-T4 Workline Brief", loc: "60 Advisors/A01/S4 Workline", rule: { zh: "主導 1 條工作線，例如 video script。Promo 提前到 7/29?，script 線要更早開始。", en: "Lead one workline, such as the video script. With the Promo moved up to 29 Jul?, the script line starts earlier." }, feeds: ["areview", "promo"] },
  { id: "aroster", lane: "adv", d: "2027-08-28", n: { zh: "Roster 審核", en: "Roster review" }, node: "N23", who: WHO.tch, reads: WHO.pi, tpl: { zh: "Ops Hub ADV_STATE，匯出 PDF", en: "Ops Hub ADV_STATE, exported as PDF" }, loc: "GEMS 2027 Ops/Advisors/Roster", rule: { zh: "依同意書審核，日期見待決定。", en: "Reviewed under the consent form. The date is on the to-be-decided list." }, feeds: ["ig-rf"] },
  { id: "as5", lane: "adv", d: "2027-08-28", e: "2027-10-06", n: { zh: "S5 Freeze Checklist", en: "S5 Freeze Checklist" }, idp: "A", who: WHO.adv, reads: WHO.tch, tpl: "ADV-T5 Freeze Checklist", loc: "60 Advisors/A01/S5 Convergence", rule: { zh: "具名範圍在 freeze 前全數核對完成。", en: "The whole named scope is checked before freeze." }, feeds: ["issues"] },
  { id: "amock", lane: "adv", d: "2027-10-09", e: "2027-10-23", n: { zh: "Mock judging sheet", en: "Mock judging sheet" }, who: WHO.tch, reads: WHO.advl, tpl: "MockJudging", loc: "50 Deliverables/Jamboree/Mocks/YYYYMMDD_MockJudging_Team", rule: { zh: "同意書要求 freeze 後至少 2 次。Freeze 日未定，見待決定。", en: "The form asks for at least 2 after freeze. With the freeze date open, see the to-be-decided list." }, feeds: ["mock"] },

  // ---------- Instructor & Ops ----------
  { id: "roster", lane: "ops", d: "2026-11-25", end: "2027-11-20", n: { zh: "Roster", en: "Roster" }, idp: "P", node: "N00", who: WHO.ops, reads: { zh: "所有表用下拉", en: "Every sheet, by dropdown" }, tpl: { zh: "Ops Hub 分頁", en: "Ops Hub tab" }, loc: "Ops Hub/Roster_Full", rule: { zh: "全隊只有一份。完整欄位在 Ops Hub，Hub 只帶公開欄。", en: "One for the whole team. Full columns in the Ops Hub; the Hub pulls public ones." }, feeds: ["hubs", "attr"] },
  { id: "iw", lane: "ops", d: "2026-11-29", end: "2027-11-20", n: { zh: "Instructor Weekly", en: "Instructor Weekly" }, idp: "D", who: WHO.scribe, reads: WHO.pi, tpl: "Meeting", loc: "GEMS 2027 Ops/Instructor Meetings/YYYYMMDD_Instructor_Weekly", rule: { zh: "全年不中斷，最忙時也一樣。研究內容只貼連結。", en: "All year without a gap, including the busiest months. Research content is linked, not pasted." }, feeds: ["decs"] },
  { id: "digest", lane: "ops", d: "2026-11-29", end: "2027-11-20", n: { zh: "AI 例外摘要", en: "AI exception digest" }, who: WHO.ai, reads: { zh: "PI，週日 21:00", en: "PI, Sunday 21:00" }, tpl: { zh: "Ops Hub 分頁，AI 唯讀產出後由 Ops 貼上", en: "Ops Hub tab; AI drafts read-only and Ops pastes" }, loc: "Ops Hub/AI_Digest", rule: { zh: "有風險的節點、逾期待審、沒結果的 Run、同意待辦、下週截止。只讀 Hub，不打分。", en: "Nodes at risk, overdue reviews, Runs with no result, open consent, next week’s deadlines. Reads the Hub only; it scores nobody." } },
  { id: "dr", lane: "ops", d: "2027-01-30", n: { zh: "Decision Record", en: "Decision Record" }, idp: "D", node: "N04", who: WHO.pi, reads: WHO.allt, tpl: "DecisionRecord", loc: "20 Topic/Decision Records/YYYYMMDD_DecisionRecord_<topic>", rule: { zh: "題目、候選與結果、理由、反對意見、Plan B、未決範圍和關閉日。Advisor 報告連在此處。", en: "Topic, candidates and results, reasons, objections, Plan B, open scope and closing date. Advisor reports link here." }, feeds: ["g-pk", "g-scope", "road"] },
  { id: "exam", lane: "ops", d: "2027-03-07", n: { zh: "考試回覆與成績", en: "Exam responses" }, who: WHO.tch, reads: { zh: "老師，學生只看自己的", en: "Instructors; students see only their own" }, tpl: { zh: "表單匯出", en: "Form export" }, loc: "Ops Hub/ExamResults", rule: { zh: "含個資，不進 10 Training。題庫要先從舊回覆萃取，也放這裡。", en: "Holds personal data, so it stays out of 10 Training. The question bank, extracted from old responses first, lives here too." }, feeds: ["g-safe", "assess"] },
  { id: "assess", lane: "ops", d: "2027-03-10", e: "2027-08-14", n: { zh: "Assessment", en: "Assessment" }, node: "N06", who: { zh: "各組老師", en: "Group instructors" }, reads: { zh: "PI、學生本人", en: "PI, the student" }, tpl: { zh: "三組同格式", en: "Same format for all three groups" }, loc: "Ops Hub/Assessment", rule: { zh: "3/10、4/24、8/14。一定回饋給學生。", en: "10 Mar, 24 Apr, 14 Aug. Feedback always reaches the student." }, feeds: ["road"] },
  { id: "buy", lane: "ops", d: "2027-03-13", end: "2027-10-13", n: { zh: "Purchases", en: "Purchases" }, idp: "B", who: { zh: "任何人", en: "Anyone" }, reads: { zh: "Ops，週一", en: "Ops, on Monday" }, tpl: { zh: "Hub 分頁", en: "Hub tab" }, loc: "Hub/Purchases", rule: { zh: "週一看這張表下單。", en: "Ops reads it on Monday to place orders." }, feeds: ["order"] },
  { id: "extrev", lane: "ops", d: "2027-06-19", n: { zh: "期中外部 review", en: "External review" }, node: "N16", who: WHO.pi, reads: WHO.tch, tpl: { zh: "會議範本", en: "Meeting template" }, loc: "Hub/Decisions", rule: { zh: "專家意見入 Decisions。", en: "Expert views go in Decisions." }, feeds: ["decs"] },
  { id: "close", lane: "ops", d: "2027-11-20", n: { zh: "結案與交接", en: "Close-out and handover" }, node: "N35", who: WHO.ops, reads: { zh: "下一年", en: "Next year" }, tpl: "Handover", loc: "90 Archive", rule: { zh: "範本去識別後回收，封存，跑一次 Drive 健檢。", en: "Templates recovered once de-identified, archive sealed, Drive audit run." } }
];

// Flow board: the places a record passes through, and who looks after each.
// owners are ROLES ids. out = reaches the outside. gate = a checkpoint. span = grid columns.
const FLOW_TILES = [
  { id: "r-lib", only: "research", name: { zh: "共用文獻庫", en: "Shared library" }, owners: ["reader", "rsv"] },
  { id: "r-book", only: "research", name: { zh: "Research 工作簿", en: "Research workbook" }, owners: ["rsl", "reader", "instr"], span: 2 },
  { id: "r-15", only: "research", name: { zh: "15 Research", en: "15 Research" }, owners: ["rqowner"] },
  { id: "g-rq", only: "research", gate: true, name: { zh: "硬關卡：沒有 RQ 就沒有 L", en: "Hard gate: no RQ, no L" }, owners: ["rsl"] },
  { id: "discord", name: { zh: "Discord（討論）", en: "Discord (talk)" }, owners: ["discord"] },
  { id: "hub", name: { zh: "Hub（有 ID 的紀錄）", en: "Hub (everything with an ID)" }, owners: ["lead", "wikilead", "ops"], span: 2 },
  { id: "opshub", name: { zh: "Ops Hub", en: "Ops Hub" }, owners: ["ops"] },
  { id: "topic", name: { zh: "20 Topic", en: "20 Topic" }, owners: ["advisor"] },
  { id: "teams", name: { zh: "31–34 隊伍資料夾", en: "31–34 Team folders" }, owners: ["lead"], span: 2 },
  { id: "git", name: { zh: "團隊 GitHub", en: "Team GitHub" }, owners: ["figure"] },
  { id: "media", name: { zh: "40 Media", en: "40 Media" }, owners: ["photo", "art"] },
  { id: "g-lic", only: "research", gate: true, name: { zh: "硬關卡：沒有授權，原圖不上 wiki", en: "Hard gate: no licence, no original figure" }, owners: ["instr"] },
  { id: "advisors", name: { zh: "60 Advisors", en: "60 Advisors" }, owners: ["advisor"] },
  { id: "deliv", name: { zh: "50 Deliverables", en: "50 Deliverables" }, owners: ["owner", "video", "wikilead"], span: 2 },
  { id: "g-k", gate: true, name: { zh: "硬關卡：沒有同意就不發布", en: "Hard gate: no consent, no publishing" }, owners: ["lead"] },
  { id: "g-f", gate: true, name: { zh: "硬關卡：沒有來源就不進 wiki", en: "Hard gate: no source, no wiki" }, owners: ["cross"] },
  { id: "g-file", gate: true, name: { zh: "硬關卡：沒有檔案就不算紀錄", en: "Hard gate: no file, no record" }, owners: ["ops"] },
  { id: "g-node", gate: true, name: { zh: "節點關卡：老師驗收", en: "Node gate: instructors accept" }, owners: ["verify"] },
  { id: "o-wiki", out: true, name: { zh: "Wiki（freeze 10/6–13?）", en: "Wiki (freeze 6–13 Oct?)" } },
  { id: "o-order", out: true, name: { zh: "IDT 訂單（4/1 起）", en: "IDT order (from 1 Apr)" } },
  { id: "o-topic", out: true, name: { zh: "定題（1/30）", en: "Topic decided (30 Jan)" } },
  { id: "o-roster", out: true, name: { zh: "Roster 審核（8/28）", en: "Roster review (28 Aug)" } },
  { id: "o-refs", only: "research", out: true, span: 2, name: { zh: "每頁自動產生的參考文獻", en: "Each page’s generated references" } },
  { id: "o-find", only: "research", out: true, span: 2, name: { zh: "30 秒內找回來", en: "Found again in 30 seconds" } }
];

// Six journeys. Each step: where the record is, who acts, what happens, its ID or file name,
// and the Hub cells it fills. gate: { g: which gate, block: true if it stops here }.
const SCENARIOS = [
  { id: "research", color: "purple", focus: true, ms: 6500,
    name: { zh: "一題研究", en: "Research" },
    book: "Research",
    register: { zh: "Questions · Papers · Impact", en: "Questions · Papers · Impact" },
    cols: { zh: ["RQ", "L · 判斷", "D", "RI", "F · V", "W"], en: ["RQ", "L · call", "D", "RI", "F · V", "W"] },
    steps: [
      { at: "r-book", who: "instr", file: "Research / Questions / RQ03", cost: { zh: "11/25 前", en: "By 25 Nov" }, row: { 0: "RQ03" },
        act: { zh: "PI 與老師種好 10 題 RQ。RQ03「我們要不要用方法 X？」要寫明會改變什麼決定，寫不出來就不立題。", en: "The PI and instructors seed 10 RQs. RQ03, “Should we use method X?”, must state which decision it would change; if nobody can say, it is not opened." } },
      { at: "r-lib", who: "reader", file: "_Inbox → RQ03", cost: { zh: "找 2 分＋分流 2 分", en: "Find 2 min + triage 2 min" },
        act: { zh: "11/29 起，學生找到一篇論文，存進共用文獻庫的 _Inbox。只看標題、摘要、圖，三選一：進讀、存參、丟到 _Rejected。這篇連得到 RQ03，進讀。", en: "From 29 Nov. A student finds a paper and saves it to the shared library’s _Inbox. Title, abstract and figures only, then one of three: read, keep for reference, or drop to _Rejected. This one ties to RQ03, so it is read." } },
      { at: "g-rq", who: "reader", file: "Papers → RQ ?", gate: { g: "rq", block: true },
        act: { zh: "擋下：另一篇想建卡，第 5 欄「研究問題」是空的。沒有 RQ 就不給 L。真的是通用背景才選 RQ00，否則留在文獻庫標「存參」。", en: "Stopped: another paper wants a card, but column 5, the research question, is empty. No RQ, no L. Genuinely general background may pick RQ00; otherwise it stays in the library, tagged for reference." } },
      { at: "r-book", who: "reader", file: "Research / Papers / L012", cost: { zh: "讀 25 分＋卡 10 分＋路由 1 分", en: "Read 25 + card 10 + route 1 min" }, row: { 1: { zh: "L012 · 反對", en: "L012 · against" } },
        act: { zh: "同一次坐下來填完：第 5 欄選 RQ03，Takeaway 是一句可以被反駁的話，判斷選「反對」，建議誰看選一個 P。圖只記位置 Fig 3。卡填不下才開 Reading Notes/L012_slug。", en: "Filled in one sitting: RQ03 in column 5, a takeaway that could be proved wrong, “against” as the call, a P for who should read it. Figures are only located: Fig 3. Reading Notes/L012_slug opens only if the card cannot hold it." } },
      { at: "discord", who: "rsl", file: "08-research-digest → 選題-topic", cost: { zh: "週日，200 字內", en: "Sunday, 200 characters max" },
        act: { zh: "AI 產生週日 digest，研究組長（3/10 前老師代行）看過親手貼到 Discord。L012 列在本週最值得讀的兩張卡。12/26 起，週會開頭 10 分鐘 journal club 也會輪到它。", en: "AI drafts the Sunday digest and the Research Lead (instructors until 10 Mar) posts it to Discord by hand. L012 is one of this week’s two cards most worth reading. From 26 Dec, the first 10 minutes of the weekly meeting can also feature it at journal club." } },
      { at: "r-15", who: "rqowner", file: "15 Research/Question Briefs/RQ03_slug", cost: { zh: "200 字內", en: "200 characters max" }, row: { 0: { zh: "RQ03 不要做", en: "RQ03 don’t" } },
        act: { zh: "證據進 Question Brief。結論類型是「不要做」，所以這份一定要寫：本來想做什麼、為什麼不做、什麼條件下重新考慮。", en: "The evidence enters a Question Brief. The conclusion is “don’t do this”, so the brief is required: what we meant to do, why not, and what would reopen it." } },
      { at: "hub", who: "scribe", file: "Hub / Decisions / D0031 ← RQ03 · L012", cost: { zh: "0.5 分", en: "0.5 min" }, row: { 2: "D0031" },
        act: { zh: "週會決議從做法 A 改成 B。書記在「依據（RQ／L）」填 RQ03 · L012。這一格就是研究變成決定的憑證。", en: "The weekly meeting moves from approach A to B. The scribe fills “Basis (RQ/L)” with RQ03 · L012. That cell is the proof that research became a decision." } },
      { at: "r-book", who: "instr", file: "Research / Impact / RI004", cost: { zh: "週日確認，七天異議期", en: "Confirmed Sunday, 7 days to object" }, row: { 3: { zh: "RI004 避雷 ✓", en: "RI004 trap ✓" } },
        act: { zh: "讀者開一列，類型「避雷」，和「採納」同權重：「因為 L012 指出 X，所以 D0031 從 A 改成 B」。老師確認後才算，七天內任何人可寫異議。", en: "The reader adds a row typed “avoided a trap”, equal in weight to “adopted”: “Because L012 shows X, D0031 moved from A to B.” It counts only once an instructor confirms, and anyone may object within seven days." } },
      { at: "g-lic", who: "instr", file: "L012 Fig 3 → ?", gate: { g: "lic", block: true },
        act: { zh: "擋下：有人想把出版商原圖 Fig 3 放上 wiki。卡上「圖的處置」是需重繪，沒有 CC-BY 也沒有書面授權，過不了 Figures 的老師簽。", en: "Stopped: someone wants the publisher’s Fig 3 on the wiki. The card’s figure field says “needs redraw”, with no CC-BY and no written permission, so it cannot pass the instructor’s signature in Figures." } },
      { at: "media", who: "figure", file: "40 Media/Figures/Current/F0091.svg", row: { 4: "F0091 · V0231" },
        act: { zh: "圖表編輯從「需重繪」檢視接手，重繪成 F0091，性質寫「重繪」，來源文獻填 L012。可用的數字在 Hub Facts 開 V0231，來源文獻也填 L012。", en: "The figure editor picks it up from the “needs redraw” view and redraws it as F0091, marked as a redraw and citing L012. The usable number becomes V0231 in Hub Facts, also citing L012." } },
      { at: "g-lic", who: "instr", file: "F0091 ✓ · V0231 ✓", gate: { g: "lic" },
        act: { zh: "通過：重繪圖標了出處，Cross-checker 核對，老師簽。", en: "Passed: the redraw credits its source, the cross-checker checks it, and the instructor signs." } },
      { at: "deliv", who: "wikilead", file: "50 Deliverables/Wiki/W012 <page>/W012_<page>_Master", row: { 5: "W012" },
        act: { zh: "Wiki master doc 引用 F0091 和 V0231。內文也引到這篇時，Wiki Lead 在 L012 的第 19 欄「引用頁面」填 W012。", en: "The wiki master doc cites F0091 and V0231. Where the text cites this paper too, the Wiki Lead puts W012 in L012’s column 19, “cited on page”." } },
      { at: "o-refs", who: "rsv", file: "refs.py → references-W012.md · refs.bib · UNRESOLVED.txt", cost: { zh: "0 分，沒有人排清單", en: "0 min, nobody builds a list" },
        act: { zh: "refs.py 從 Papers、Facts、Figures 和文獻庫快照產生這一頁的參考文獻，依 L 編號排序。對不上的印進 UNRESOLVED.txt。N30（9/29）要 refs.py --strict 回傳 0。", en: "refs.py builds this page’s references from Papers, Facts, Figures and a library snapshot, sorted by L number. Anything unmatched prints to UNRESOLVED.txt. N30 (29 Sep) requires refs.py --strict to return 0." } },
      { at: "o-find", who: "instr", file: "07-research-qa · Ctrl+F · RQ03", cost: { zh: "30 秒", en: "30 seconds" },
        act: { zh: "幾個月後有人問：我們為什麼不用方法 X？按 RQ 篩、按組別加類型篩，或 Ctrl+F 搜 Takeaway。也可問 AI：只用卡裡的內容，每句帶 L；卡裡沒有就回「卡裡沒有，建議開 RQ」。", en: "Months later someone asks why we did not use method X. Filter by RQ, filter by group and type, or Ctrl+F the takeaways. Or ask the AI: it answers only from the cards, with an L on every claim, and says “not in the cards, consider opening an RQ” otherwise." } }
    ] },
  { id: "run", color: "teal",
    name: { zh: "一筆 Run", en: "A Run" },
    register: { zh: "Runs", en: "Runs" },
    cols: { zh: ["R", "引用", "Results", "原始檔", "意見", "F · V"], en: ["R", "Cites", "Results", "Raw file", "Notes", "F · V"] },
    steps: [
      { at: "hub", who: "runner", file: "R0412", row: { 0: "R0412", 1: "C017 · S012@v3" },
        act: { zh: "動手之前開一筆 Run：引用 Construct 和 SOP 版本，寫下這次要回答什麼。ID 用下一個空白列。", en: "Before starting, open a Run: cite the Construct and SOP version, and write what this should answer. The ID is the next empty row." } },
      { at: "teams", who: "runner", file: "31 Wetlab/Data/Raw/20270502_R0412_label_v1", row: { 2: "48 h ✓", 3: "✓" },
        act: { zh: "48 小時內填 Results，原始檔依規則命名入庫，之後不改寫。", en: "Results within 48 hours; the raw file is named by the rule, stored, and never rewritten." } },
      { at: "hub", who: "advisor", file: "R0412", row: { 4: { zh: "具名範圍內留意見", en: "Within named scope" } },
        act: { zh: "Advisor 72 小時內在具名範圍留意見，每人每週抽 1 筆，加所有標記問題的。這是審查紀錄，不是放行關卡。", en: "Within 72 hours an advisor leaves notes in their named scope: one sampled per person per week, plus anything flagged. This is a review record, not a release gate." } },
      { at: "git", who: "figure", file: "team-org/analysis @ 8f3a", 
        act: { zh: "分析腳本推上團隊 GitHub。Drive 只留連結。", en: "The analysis script goes to the team GitHub. Drive keeps a link." } },
      { at: "media", who: "figure", file: "40 Media/Figures/Current/F0091.svg", row: { 5: "F0091" },
        act: { zh: "圖輸出成 F0091。作者忘了填來源欄。", en: "The figure comes out as F0091. Its author forgot the source field." } },
      { at: "g-f", who: "cross", file: "F0091 → ?", gate: { g: "f", block: true },
        act: { zh: "擋下：F0091 沒有連回任何 R。Cross-checker 退回，這張圖不能進 wiki。", en: "Stopped: F0091 links to no R. The cross-checker sends it back, and it cannot enter the wiki." } },
      { at: "hub", who: "figure", file: "F0091 → R0412 @ 8f3a", row: { 5: "F0091 · V0231" },
        act: { zh: "作者補上 R0412 和腳本 commit，數字也開一筆 V0231。", en: "The author adds R0412 and the script commit, and the number gets its own V0231." } },
      { at: "g-f", who: "instr", file: "F0091 ✓ · V0231 ✓", gate: { g: "f" },
        act: { zh: "通過：Cross-checker 3 天內核對，老師簽。全部 F 要在 9/15 前簽完。", en: "Passed: the cross-checker checks within 3 days and the instructor signs. Every F is signed by 15 Sep." } },
      { at: "deliv", who: "owner", file: "50 Deliverables/Wiki/W012 <page>/W012_<page>_Master",
        act: { zh: "Wiki master doc 引用 F0091 和 V0231，不抄數字也不貼圖。", en: "The wiki master doc cites F0091 and V0231. It copies no number and pastes no figure." } },
      { at: "o-wiki", who: "wikilead", file: "W012",
        act: { zh: "Freeze 前頁面核對完成。評審問到時，Q 可以一路連回 R0412。", en: "The page is checked before freeze. If judges ask, a Q links all the way back to R0412." } }
    ] },
  { id: "hp", color: "indigo",
    name: { zh: "一次互動", en: "An interaction" },
    register: { zh: "Interactions · Consent", en: "Interactions · Consent" },
    cols: { zh: ["I", "類別", "紀錄", "專案改變", "M", "K"], en: ["I", "Type", "Write-up", "Changed", "M", "K"] },
    steps: [
      { at: "hub", who: "hpstudent", file: "I0027", row: { 0: "I0027", 1: { zh: "專家", en: "Expert" } },
        act: { zh: "開一筆 I：對象類別、為什麼選他、信件草稿、寄出日。週日 HP 組長看誰該回信。", en: "Open an I: stakeholder type, why them, the draft email, date sent. On Sunday the HP lead sees who is owed a reply." } },
      { at: "teams", who: "hpstudent", file: "34 Human Practices/Interactions/I0027_20270512_<who>", row: { 2: "✓" },
        act: { zh: "一次互動一份文件：邀請信、訪綱、紀錄都在裡面，7 天內齊。沒有另一個 Outreach 副本。", en: "One document per interaction: invitation, questions and write-up together, complete within 7 days. No second copy under Outreach." } },
      { at: "hub", who: "lead", file: "I0027 → D0140", row: { 3: "D0140" },
        act: { zh: "組長驗收無空欄。專案因此改變了什麼，寫成一筆決議。", en: "The lead checks for blank fields. What the project changed because of it becomes a Decision." } },
      { at: "media", who: "photo", file: "40 Media/Photos/2027-05/20270512_HP_OR_I0027_expert-visit_02_M0533_P001.jpg", row: { 4: "M0533" },
        act: { zh: "現場照片發到 gallery，週日由 Photo Steward 歸檔成 M0533，同意欄還是空的。沒有 K 照樣歸檔，只是不能發布。", en: "The photo goes to the gallery and the Photo Steward files it on Sunday as M0533. Its consent field is still empty: it is filed anyway, it just cannot be published." } },
      { at: "g-k", who: "lead", file: "M0533 → K ?", gate: { g: "k", block: true },
        act: { zh: "擋下：wiki 想用這張照片，但沒有 K 且狀態為已同意。可辨識人臉、姓名、引述、他方 logo 都一樣，不能發布。", en: "Stopped: the wiki wants this photo, but there is no K marked as agreed. Faces, names, quotes and third-party logos are all treated alike. It cannot be published." } },
      { at: "hub", who: "hpstudent", file: "K0019", row: { 5: "K0019" },
        act: { zh: "寄授權信，先說我們因您改了什麼。回覆入庫，K0019 逐項記照片、姓名、引述、logo。未成年另需校方或家長許可。", en: "The permission email opens with what we changed because of them. The reply is stored, and K0019 records photo, name, quote and logo one by one. Minors also need school or parent permission." } },
      { at: "g-k", who: "instr", file: "M0533 ✓ K0019", gate: { g: "k" },
        act: { zh: "通過：組長核對，老師簽。Consent 要在 9/8 前全數結清。", en: "Passed: the lead checks and the instructor signs. All Consent is cleared by 8 Sep." } },
      { at: "o-wiki", who: "owner", file: "W021", 
        act: { zh: "發布。Attribution 的外部貢獻每列都對得上 I0027 這樣的 ID。", en: "Published. Each external Attribution row matches an ID like I0027." } }
    ] },
  { id: "topic", color: "orange",
    name: { zh: "一個題目", en: "A topic" },
    register: { zh: "Topic Cards · Decisions", en: "Topic Cards · Decisions" },
    cols: { zh: ["題目", "來源", "評語", "PK", "D"], en: ["Topic", "From", "Comments", "PK", "D"] },
    steps: [
      { at: "discord", who: "advisor", file: "#topic-research",
        act: { zh: "11/29 起線上 Topic Research。Advisor 帶候選題目報告，大家在這裡討論，但不在這裡決定。", en: "Online topic research from 29 Nov. Advisors bring candidate topic reports. People discuss here; nothing is decided here." } },
      { at: "topic", who: "proposer", file: "20 Topic/Topic Cards/TP08_TopicCard_<title>", row: { 0: "TP08", 1: { zh: "老師或學生", en: "Instructor or student" } },
        act: { zh: "1/2–1/23 的週六進漏斗。老師發展題目，學生也可以自提，每題一張 Topic Card。", en: "On Saturdays 2–23 Jan topics enter the funnel. Instructors develop them and students may propose their own, one Topic Card each." } },
      { at: "topic", who: "instr", file: "TP08", row: { 2: "✓" },
        act: { zh: "評語全部寫進同一張表，學生看得到。分數是參考還是決定性，待決定。", en: "All comments go in one table that students can see. Whether scores are advisory or decisive is to be decided." } },
      { at: "topic", who: "proposer", file: "20 Topic/PK Records/20270130_PKRecord", row: { 3: "1/30" },
        act: { zh: "1/30 PK。", en: "The PK on 30 Jan." } },
      { at: "g-node", who: "instr", file: "PK → D ?", gate: { g: "node", block: true },
        act: { zh: "擋下：PK 結束，但沒有寫下理由、反對意見、Plan B 和未決範圍，就不算定題。2026 的定題沒有決策紀錄。", en: "Stopped: the PK is over, but without written reasons, objections, Plan B and open scope, no topic is decided. The 2026 choice left no decision record." } },
      { at: "topic", who: "pi", file: "20 Topic/Decision Records/20270130_DecisionRecord_<topic>", row: { 4: "D0007" },
        act: { zh: "Decision Record 寫完，連到得分和 advisor 報告。", en: "The Decision Record is written, linked to the scores and the advisor reports." } },
      { at: "g-node", who: "instr", file: "D0007 ✓", gate: { g: "node" },
        act: { zh: "通過：全體老師驗收。", en: "Passed: all instructors accept it." } },
      { at: "o-topic", who: "pi", file: "D0007",
        act: { zh: "定題。20 Topic 凍結；各隊開 Projects。未決範圍要到 3/13 範圍閘門才關。", en: "Topic decided. 20 Topic freezes and each team opens Projects. Open scope closes at the 13 Mar scope gate." } }
    ] },
  { id: "seq", color: "green",
    name: { zh: "一條序列", en: "A sequence" },
    register: { zh: "Constructs · Purchases", en: "Constructs · Purchases" },
    cols: { zh: ["C", "設計人", "審查人", "審查", "B"], en: ["C", "Designer", "Reviewer", "Review", "B"] },
    steps: [
      { at: "hub", who: "lead", file: "C021", row: { 0: "C021", 1: { zh: "學生 A", en: "Student A" } },
        act: { zh: "3/13 之後，Wetlab lead 開一筆 Construct，寫下設計人。", en: "After 13 Mar the Wetlab lead opens a Construct and names the designer." } },
      { at: "teams", who: "runner", file: "31 Wetlab/Sequences/<Level>/C021",
        act: { zh: "序列檔放進 Sequences。Dry 組的設計討論寫回 Tasks 和 Decisions，不留在聊天裡。", en: "The sequence file goes in Sequences. Dry-lab design talk goes back to Tasks and Decisions, not left in chat." } },
      { at: "g-node", who: "instr", file: "C021 → ?", gate: { g: "node", block: true },
        act: { zh: "擋下：3/27 序列設計審查，C021 沒有審查人，不能進訂單清單。", en: "Stopped: at the 27 Mar sequence design review C021 has no reviewer, so it cannot join the order list." } },
      { at: "hub", who: "lead", file: "C021", row: { 2: { zh: "學生 B", en: "Student B" } },
        act: { zh: "補上跨組的審查人，留下審查紀錄。", en: "A reviewer from another group is added and leaves a record." } },
      { at: "g-node", who: "instr", file: "C021 ✓", gate: { g: "node" }, row: { 3: "3/27 ✓" },
        act: { zh: "通過：每條序列都有 Construct、設計人、審查人，訂單清單定稿。", en: "Passed: every sequence has a Construct, designer and reviewer, and the order list is final." } },
      { at: "hub", who: "lead", file: "B0031 → C021", row: { 4: "B0031" },
        act: { zh: "Purchases 開一筆 B，和 Construct ID 對應。Ops 週一看這張表下單。", en: "A B row in Purchases maps to the Construct ID. Ops reads this on Monday to place orders." } },
      { at: "o-order", who: "lead", file: "IDT order · B0031",
        act: { zh: "4/1 起訂 IDT。", en: "IDT orders open from 1 Apr." } },
      { at: "teams", who: "runner", file: "31 Wetlab/Sequences/<Level>/C021_returns",
        act: { zh: "定序回傳放回 Wetlab，連到 C021 和 Run。2026 它放在 Drylab 的 Sent Sequences，這裡才是它的家。", en: "Sequencing returns come back to Wetlab, linked to C021 and the Run. In 2026 they sat in Drylab’s Sent Sequences; this is where they belong." } }
    ] },
  { id: "adv", color: "gold",
    name: { zh: "一份 Advisor 產出", en: "An advisor output" },
    register: { zh: "Advisor Deliverables", en: "Advisor Deliverables" },
    cols: { zh: ["A", "階段", "範圍", "檔案", "驗收"], en: ["A", "Stage", "Scope", "File", "Review"] },
    steps: [
      { at: "advisors", who: "advisor", file: "60 Advisors/A01/S2 Training/A01_S2_Scope", row: { 1: "S2", 2: { zh: "已確認", en: "Agreed" } },
        act: { zh: "階段開始前，advisor 和 instructor 確認具名範圍。", en: "Before the stage starts, advisor and instructor agree the named scope." } },
      { at: "hub", who: "advisor", file: "A0207", row: { 0: "A0207" },
        act: { zh: "表單交出 101 的連結，Hub 多一列，全隊看得到。實際上交的是一個 Canva 連結。", en: "The form hands in a link to the 101, and the Hub gains a row the team can see. What arrived is a Canva link." } },
      { at: "g-file", who: "instr", file: "canva.com/… → ?", gate: { g: "file", block: true },
        act: { zh: "擋下：沒有檔案就不算紀錄。Canva、表單、Google 連結只是工作中介。", en: "Stopped: no file, no record. Canva, forms and Google links are working tools." } },
      { at: "advisors", who: "advisor", file: "60 Advisors/A01/S2 Training/A01_S2_101_<subject>", row: { 3: "✓" },
        act: { zh: "匯出入庫，放在 advisor 自己的 S 資料夾；隊伍要用的成果放隊伍的家，這裡放捷徑。", en: "Exported and stored in the advisor’s own S folder. Work the team uses lives in the team’s home, with a shortcut here." } },
      { at: "g-file", who: "instr", file: "A0207 ✓", gate: { g: "file" },
        act: { zh: "通過：收件的 instructor 確認有檔案。", en: "Passed: the receiving instructor confirms there is a file." } },
      { at: "g-node", who: "instr", file: "A01_S2", row: { 4: { zh: "當面", en: "In person" } },
        act: { zh: "階段驗收：advisor 當面說明並回答提問。標準是隊員不靠 advisor，能照著文件獨立做到。時數達標不等於通過。", en: "Stage review: the advisor explains in person and takes questions. The standard is that members can do it from the document alone. Meeting the hours does not mean passing." } },
      { at: "opshub", who: "instr", file: "GEMS 2027 Ops/Advisors/Reviews/A01/A01_S2_ReviewResult", row: { 4: { zh: "書面結果", en: "Written" } },
        act: { zh: "書面結果存在 Ops，交給學生與家長。驗收內容不經過 AI。", en: "The written result is kept in Ops and goes to student and parents. AI does not touch reviews." } },
      { at: "o-roster", who: "instr", file: "2027-08_RosterReview",
        act: { zh: "8/28 的 Roster 審核依同意書進行。第 5 階段不影響這份名單。", en: "The 28 Aug Roster review follows the consent form. Stage 5 does not affect this list." } }
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
  { id: "S1", folder: "S1 Topic", shade: 0, start: "2026-11-29", end: "2027-01-30",
    dates: { zh: "11 月底–1/30", en: "Late Nov–30 Jan" },
    name: { zh: "發展題目", en: "Develop the topic" }, role: { zh: "探路者", en: "Pathfinder" },
    team: { zh: "老師發展題目，並輔導學生自提的題目。1/30 當天或之前，與 2027 學生決定唯一題目。", en: "Instructors develop topics and coach student proposals. One topic is decided with the 2027 students on or before 30 Jan." },
    output: { zh: "至少 1 份候選題目研究報告：research potential、論文研究、past iGEM、novelty、special prize 與避雷；或與 instructor 進行前期研究或實驗。", en: "At least 1 candidate topic report: research potential, papers, past iGEM, novelty, special prizes and pitfalls; or early research or experiments with an instructor." },
    pass: { zh: "內容有可查證的來源，能當面說明，並實際影響了題目討論。", en: "Sources can be checked, the advisor can explain it in person, and it really shaped the topic discussion." }, },
  { id: "S2", folder: "S2 Training", shade: 1, start: "2027-02-13", end: "2027-03-31",
    dates: { zh: "2 月中–3 月底", en: "Mid Feb–end of March" },
    name: { zh: "訓練與制度", en: "Training and systems" }, role: { zh: "制度建立者", en: "Systems builder" },
    team: { zh: "春節後密集訓練，research 並行：lab、wiki、data visualization and analysis、protein design、cross team communication and documentation。", en: "Intensive training after Lunar New Year alongside research: lab, wiki, data visualization and analysis, protein design, cross-team communication and documentation." },
    output: { zh: "至少 1 份 101（SOP 或 troubleshooting guide，例如 management、cloning、Registry、modeling、hardware、GIS），加上至少 1 場實體 workshop。", en: "At least 1 “101” (an SOP or troubleshooting guide, such as management, cloning, Registry, modeling, hardware, GIS), plus at least 1 in-person workshop." },
    pass: { zh: "隊員不靠 advisor，能照著文件獨立做到。", en: "Members can do it from the document alone, without the advisor." },
    extra: { zh: "時程表的訓練是 2/13–3/7，3/13 Task Group 就開始，同意書到 3 月底才算階段結束 [T19]。", en: "The schedule has training on 13 Feb–7 Mar and task groups from 13 Mar, while the form runs this stage to the end of March [T19]." } },
  { id: "S3", folder: "S3 Design", shade: 2, start: "2027-04-01", end: "2027-06-30",
    dates: { zh: "4 月–暑假前", en: "April–before summer" },
    name: { zh: "設計與執行", en: "Design and execution" }, role: { zh: "TA", en: "TA" },
    team: { zh: "Wetlab：experimental、protein、sequence design、cloning。Drylab：定調 novelty、protein design、codon optimization、新 software tool、wiki updating。HP：cross team management、outreach、email writing、team logo、main style、color template、design management。", en: "Wet lab: experimental, protein and sequence design, cloning. Dry lab: setting the novelty, protein design, codon optimization, new software tools, wiki updates. HP: cross-team management, outreach, email writing, logo, main style, colour template, design management." },
    output: { zh: "主導至少 1 項 task 或 research track，並主持或參與設計討論，留下具體的審查紀錄。判斷責任仍在 instructor。", en: "Lead at least 1 task or research track, host or join design discussions, and leave a concrete review record. The judgement stays with the instructor." },
    pass: { zh: "有紀錄顯示隊伍的設計或做法因此改變。", en: "A record shows the team’s design or practice changed because of it." },
    extra: { zh: "驗收時也參考隊員回饋 [T13]。階段結束後可選出 Lead Advisor。", en: "The review also draws on member feedback [T13]. A Lead Advisor may be chosen after this stage." } },
  { id: "S4", folder: "S4 Workline", shade: 3, start: "2027-07-01", end: "2027-08-10",
    dates: { zh: "7/1–8/10", en: "1 Jul–10 Aug" },
    name: { zh: "暑期集訓", en: "Summer intensive" }, role: { zh: "TA，工作線負責人", en: "TA and workline lead" },
    team: { zh: "週二、四、六 9:00–17:00 全隊集訓。開始製作與撰寫 wiki，提升 scientific writing，整理 data，完成 promotion video。", en: "Whole-team sessions Tue, Thu, Sat, 9:00–17:00. Wiki writing starts, scientific writing improves, data gets organised, the promotion video gets finished." },
    output: { zh: "實質認領並主導 1 條工作線，例如 wiki 單一 task 的 draft 與 review、一組關鍵數據圖表的標準化，或 video script [T22]。", en: "Claim and lead 1 workline, such as the draft and review of one wiki task, standardising a set of key data figures, or the video script [T22]." },
    pass: { zh: "成果被隊伍採用，advisor 能當面說明自己主導的部分。", en: "The team adopts the result, and the advisor can explain in person the part they led." }, },
  { id: "S5", folder: "S5 Convergence", shade: 4, start: "2027-08-28", end: "2027-10-06", after: "2027-11-01",
    dates: { zh: "8 月底–10 月中 freeze；freeze 後 3–4 週", en: "Late Aug–mid-Oct freeze; then 3–4 weeks" },
    name: { zh: "收斂與 Jamboree 準備", en: "Converge and prepare for Jamboree" }, role: { zh: "把關者", en: "Gatekeeper" },
    team: { zh: "收斂成果、整理 data、改寫 wiki、debug，完成 wiki 和 presentation video。Freeze 後進行 judging prep 與 booth prep。", en: "Converge results, organise data, rewrite the wiki, debug, finish the wiki and presentation video. Judging and booth prep after freeze." },
    output: { zh: "Freeze 前認領一份具名 checklist（頁面、data 或 debug 範圍），在最後衝刺期和全隊一起工作到完成。Freeze 後至少參加 2 次模擬 judging，協助 final presentation。", en: "Before freeze, claim a named checklist (pages, data or debug scope) and work with the team until done. After freeze, join at least 2 mock judging sessions and help with the final presentation." },
    pass: { zh: "責任範圍在 freeze 前全數核對完成。未完成自己的範圍，或在全隊衝刺時干擾工作，不算通過。", en: "The whole scope is checked before freeze. An unfinished scope, or disrupting the team’s final push, does not pass." },
    extra: { zh: "階段結束日待釐清 [T3]。同意書寫 10 月中 freeze，時程表是 10/6–13? [T20]。", en: "The stage’s end date is unsettled [T3]. The form says a mid-October freeze; the schedule says 6–13 Oct? [T20]." } }
];

// Map of every recurring and stage duty. g: group heading.
const ADV_MAP_GROUPS = [
  { id: "stage", name: { zh: "階段產出", en: "Stage output" } },
  { id: "month", name: { zh: "每月節奏", en: "Monthly rhythm" } },
  { id: "review", name: { zh: "驗收與名單", en: "Review and Roster" } },
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
  { g: "stage", duty: { zh: "S5 模擬 judging（至少 2 次）", en: "S5 mock judging (at least 2)" }, loc: "50 Deliverables/Jamboree/Mocks", file: "YYYYMMDD_MockJudging_Team", tpl: "MockJudging",
    who: { zh: "Instructor 記出席", en: "Instructor logs attendance" }, ver: INSTR, due: { zh: "Freeze 後、Jamboree 前", en: "After freeze, before Jamboree" }, row: "ADV_STAGE · A01-S5 · mock_judging_n" },
  { g: "month", duty: { zh: "實體時數（每月 8 小時）", en: "On-site hours (8 a month)" }, loc: "GEMS 打卡 → GEMS 2027 Ops/Advisors/Clock-in [T1]", file: "YYYYMM_ClockIn", tpl: { zh: "打卡匯出，不用範本", en: "Clock-in export, no template" },
    who: { zh: "Advisor 打卡，Ops 匯出 [T1]", en: "Advisor clocks in, Ops exports [T1]" }, ver: INSTR, due: { zh: "每月；不足可補到階段結束 [T5]", en: "Monthly; shortfall can be made up by stage end [T5]" }, row: "ADV_MONTH · A01-2027-03 · hours_onsite" },
  { g: "month", duty: { zh: "線上時數（離台就學後）", en: "Online hours (after leaving Taiwan)" }, loc: { zh: "ADV-F1 表單，填法待決定 [T2]", en: "ADV-F1 form, method to be decided [T2]" }, file: { zh: "不產生檔案", en: "No file" }, tpl: "ADV-F1",
    who: ADVR, ver: INSTR, due: { zh: "同上", en: "As above" }, row: "ADV_MONTH · A01-2027-09 · hours_online" },
  { g: "month", duty: { zh: "暑期時數（至少 6 天、48 小時）", en: "Summer hours (at least 6 days, 48 hours)" }, loc: "GEMS 打卡 → GEMS 2027 Ops/Advisors/Clock-in [T1]", file: "2027-SUMMER_ClockIn", tpl: { zh: "打卡匯出，不用範本", en: "Clock-in export, no template" },
    who: { zh: "Advisor 打卡，Ops 匯出 [T1]", en: "Advisor clocks in, Ops exports [T1]" }, ver: INSTR, due: "8/10", row: "ADV_MONTH · A01-2027-SUMMER · days, hours_onsite" },
  { g: "month", duty: { zh: "組別會議（每月至少 2 次，全年 50%）", en: "Group meetings (2 a month, 50% for the year)" }, loc: "GEMS 打卡 → GEMS 2027 Ops/Advisors/Clock-in [T1]", file: "YYYYMM_GroupMeeting_<Wet|Dry|HP>", tpl: { zh: "打卡匯出加場次表", en: "Clock-in export and session list" },
    who: { zh: "Advisor 打卡；組別 instructor 登記場次與時數", en: "Advisor clocks in; the group’s instructor logs sessions and hours" }, ver: INSTR, due: { zh: "每月結算 [T9]", en: "Totalled monthly [T9]" }, row: "ADV_MONTH · A01-2027-03 · group_h_attended, group_h_held" },
  { g: "month", duty: { zh: "自主會議（每月 1 場，1 小時以上）", en: "Self-run meeting (1 a month, 1 hour or more)" }, loc: "60 Advisors/A01/Meetings", file: "YYYYMMDD_A01_SelfRun", tpl: { zh: "ADV-T6 Meeting Minutes（議程、出席者、會後結論）", en: "ADV-T6 Meeting Minutes (agenda, attendees, conclusions)" },
    who: ADVR, ver: { zh: "主責 instructor，隨月報確認", en: "Lead instructor, with the report" }, due: { zh: "當月內", en: "Within the month" }, row: "ADV_MONTH · A01-2027-03 · selfrun_link" },
  { g: "month", duty: { zh: "Advisor 月會（每月 1 次）", en: "Advisor monthly meeting (1 a month)" }, loc: "60 Advisors/_Advisor Meeting", file: "YYYYMM_AdvisorMeeting", tpl: "Meeting",
    who: { zh: "Instructor 記出席與決議", en: "Instructor logs attendance and decisions" }, ver: { zh: "Instructor", en: "Instructor" }, due: { zh: "每月", en: "Monthly" }, row: "ADV_MONTH · A01-2027-03 · advisor_meeting" },
  { g: "month", duty: { zh: "月報", en: "Monthly report" }, loc: "60 Advisors/A01/Reports", file: "YYYYMM_A01_MonthlyReport", tpl: { zh: "ADV-T8 Monthly Report（指導了誰、改了什麼、解決了什麼、下一步）", en: "ADV-T8 Monthly Report (coached, changed, solved, next)" },
    who: ADVR, ver: INSTR, due: { zh: "每月最後一日前", en: "By the last day of the month" }, row: "ADV_MONTH · A01-2027-03 · report_link, report_at" },
  { g: "review", duty: { zh: "階段驗收與書面結果", en: "Stage review and written result" }, loc: "GEMS 2027 Ops/Advisors/Reviews/A01", file: "A01_S1_ReviewResult", tpl: "ADV-T9 Stage Result",
    who: { zh: "Advisor 當面說明並回答提問；instructor 寫結果", en: "Advisor explains in person and takes questions; instructor writes the result" }, ver: { zh: "主責 instructor；書面交學生與家長", en: "Lead instructor; written result goes to student and parents" }, due: { zh: "每階段結束時，可在月會進行 [T18]", en: "At each stage end, may be at the monthly meeting [T18]" }, row: "ADV_STAGE · A01-S1 · result, written_link" },
  { g: "review", duty: { zh: "Lead Advisor 選任", en: "Lead Advisor selection" }, loc: "Ops Hub/ADV_STATE · Hub/Decisions", file: { zh: "不開檔，記在 ADV_STATE 的 lead 與 Decisions", en: "No file: recorded in ADV_STATE lead and Decisions" }, tpl: { zh: "不用範本", en: "No template" },
    who: { zh: "Instructor", en: "Instructor" }, ver: { zh: "Instructor（名額不固定，可從缺）", en: "Instructors (no fixed number; may stay empty)" }, due: { zh: "第 3 階段結束後", en: "After stage 3" }, row: "ADV_STATE · A01 · lead" },
  { g: "review", duty: { zh: "Roster 審核", en: "Roster review" }, loc: "Ops Hub/ADV_STATE → GEMS 2027 Ops/Advisors/Roster", file: "2027-08_RosterReview.pdf", tpl: { zh: "ADV_STATE 加決定人與日期，N23 匯出 PDF", en: "ADV_STATE plus who decided and when, exported as PDF at N23" },
    who: { zh: "Instructor 依 ADV_STATE 整理", en: "Instructors, from ADV_STATE" }, ver: { zh: "GEMS 決定名單 [T11]", en: "GEMS decides the list [T11]" }, due: { zh: "8 月底（預計）", en: "Late August (planned)" }, row: "ADV_STATE · A01 · qualification" },
  { g: "close", duty: { zh: "證書與個人貢獻紀錄", en: "Certificate and contribution record" }, loc: "GEMS 2027 Ops/Advisors/Records", file: "A01_ContributionRecord", tpl: "ADV-T13 Contribution Record",
    who: { zh: "指導老師署名", en: "Signed by the supervising instructor" }, ver: { zh: "Instructor，依 ADV_ 分頁的全部列", en: "Instructor, from every ADV_ row" }, due: { zh: "第 5 階段通過後", en: "After stage 5 passes" }, row: "ADV_STATE · A01 · certificate, record" },
];

const ADV_TREE = `60 Advisors/
├─ _Templates/            ADV-T0 … ADV-T8
├─ _Advisor Meeting/      YYYYMM_AdvisorMeeting
└─ <A01>/
   ├─ S1 Topic/           A01_S1_Scope · A01_S1_TopicReport_<topic>
   ├─ S2 Training/        A01_S2_101_<subject> · YYYYMMDD_A01_S2_Workshop
   ├─ S3 Design/          A01_S3_ReviewLog_<task>
   ├─ S4 Workline/        A01_S4_Workline_<name>
   ├─ S5 Convergence/     A01_S5_FreezeChecklist_<scope>
   ├─ Meetings/           YYYYMMDD_A01_SelfRun
   └─ Reports/            YYYYMM_A01_MonthlyReport

50 Deliverables/Jamboree/Mocks/   YYYYMMDD_MockJudging_Team

GEMS 2027 Ops Hub         Roster_Full · ADV_STAGE · ADV_MONTH · ADV_STATE · ADV_LOG
GEMS 2027 Ops/Advisors/   (students cannot see this folder)
├─ _Templates/            ADV-T9 · ADV-T10 · ADV-T11S · ADV-T13 · ADV-T14
├─ ADV-F1 form
├─ Clock-in/              YYYYMM_ClockIn · YYYYMM_GroupMeeting_<group>
├─ Reviews/<A01>/         A01_S1_ReviewResult
├─ Roster/                2027-08_RosterReview.pdf
└─ Records/               A01_ContributionRecord · A01_ParticipationNote`;

// Qualification logic. Each lane is a line of boxes; to labels the arrow that follows a box.
const ADV_STATE_LANES = [
  { name: { zh: "每個階段", en: "Every stage" }, nodes: [
    { id: "scope", t: { zh: "確認範圍", en: "Agree scope" }, to: "" },
    { id: "submit", t: { zh: "交出產出", en: "Hand in output" }, to: "" },
    { id: "review", t: { zh: "當面驗收", en: "In-person review" }, end: 1 }
  ] },
  { name: { zh: "走完一年", en: "Across the year" }, nodes: [
    { id: "s14", t: { zh: "前四階段", en: "Stages 1–4" }, to: "" },
    { id: "roster", t: { zh: "Team Roster（8 月底）", en: "Team Roster (late Aug)" }, tbd: 1, to: "" },
    { id: "s5", t: { zh: "第 5 階段", en: "Stage 5" }, tbd: 1, to: "" },
    { id: "cert", t: { zh: "證書與貢獻紀錄", en: "Certificate and record" }, end: 1 }
  ] }
];
const ADV_STATE_INFO = {
  scope: { d: { zh: "每階段開始前，advisor 與 instructor 確認負責範圍和具名產出。參考學生興趣與目標領域（Wet、Dry、HP），並安排跨組任務。數量是最低要求。", en: "Before each stage, advisor and instructor agree scope and named output, taking interests and target field (Wet, Dry, HP) into account and adding cross-team work. Counts are minimums." } },
  submit: { d: { zh: "檔案放進自己的 S 資料夾，連結交到 ADV-F1。ADV_LOG 記下提交時間。", en: "The file goes in the advisor’s own S folder and the link goes to ADV-F1. The Register records the time." } },
  review: { d: { zh: "每階段結束時，向 instructor 當面說明產出並回答提問，可在 advisor 月會進行。Instructor 參考月報和會議紀錄，依品質驗收，書面結果交學生與家長。時數達標不等於通過。", en: "At each stage end, the advisor explains the output to an instructor and takes questions, possibly at the monthly meeting. The instructor uses reports and minutes, judges on quality, and sends a written result to student and parents. Meeting the hours does not mean passing." } },
  roster: { d: { zh: "GEMS 預計於 2027 年 8 月底決定名單，符合條件才登錄 iGEM 官方 Team Roster。8 月底之後資格變動怎麼處理待決定。與 iGEM Roster Freeze 的距離見 [T21]。", en: "GEMS plans to decide the list in late August 2027; only those who qualify go on the official iGEM Team Roster. What happens if things change after August is to be decided. The gap to the iGEM Roster Freeze is at [T21]." } },
  s5: { d: { zh: "責任範圍在 freeze 前全數核對完成，freeze 後至少 2 次模擬 judging。", en: "The whole scope checked before freeze, then at least 2 mock judging sessions." } },
  cert: { d: { zh: "第 5 階段通過後才發給。傑出的表現具體寫入這份由指導老師署名的紀錄。", en: "Issued only after stage 5 passes. Outstanding work is written specifically into this record, signed by the supervising instructor." } },
  s14: { d: { zh: "Roster 依同意書審核。第 5 階段不影響 8 月底的名單。", en: "The Roster is reviewed under the consent form. Stage 5 does not affect the late-August list." } }
};


// y = visible, s = summary, w = written outside the Hub, n = hidden
// Minutes per item are estimates; n is the number of advisors.
const ADV_LOAD = [
  { t: { zh: "具名範圍確認", en: "Scope agreement" }, count: n => n * 5, min: 10 },
  { t: { zh: "月報確認（約 12 個月）", en: "Report confirmation (about 12 months)" }, count: n => n * 12, min: 10 },
  { t: { zh: "Advisor 月會（2 位 instructor）", en: "Advisor meeting (2 instructors)" }, count: () => 24, min: 60 },
  { t: { zh: "階段驗收與書面結果", en: "Stage review and written result" }, count: n => n * 5, min: 30 },
  { t: { zh: "第 3 階段隊員回饋", en: "Stage 3 member feedback" }, count: n => n, min: 15 },
  { t: { zh: "Roster 審核", en: "Roster review" }, count: n => n, min: 10 },
  { t: { zh: "證書與貢獻紀錄", en: "Certificate and contribution record" }, count: n => n, min: 45 }
];

const ADV_TBD = [
  { zh: "打卡紀錄：誰保管、誰匯出、線上會議怎麼打卡。同意書只對組別會議寫明以打卡為準，實體時數是否同樣以打卡為準。", en: "Clock-in records: who holds them, who exports them, how an online meeting is clocked. The form names clock-in only for group meetings; do on-site hours follow it too?" },
  { zh: "離台就學後：線上時數怎麼記；「當面說明」與實體 workshop 能否改線上。", en: "After leaving Taiwan: how online hours are logged, and whether “in person” reviews and the in-person workshop may go online." },
  { zh: "第 5 階段在 freeze 結束還是 Jamboree 結束，驗收安排在哪一天。", en: "Whether stage 5 ends at freeze or at the Jamboree, and when its review happens." },
  null, // not public
  { zh: "階段之間的空窗（1/31–2 月中、8/11–8 月底）算哪一階段的時數；任期首月、8 月、freeze 後等不足整月的時數怎麼算；多的時數能否抵其他月。", en: "Which stage owns the gaps (31 Jan–mid Feb, 11 Aug–late Aug); how part-months count (the first month, August, after freeze); whether extra hours carry to other months." },
  null, // not public
  null, // not public
  null, // not public
  { zh: "組別會議 50%：何時檢查、Roster 審核時如何算到當時為止、暑期算不算、跨組任務算哪一組。每月 2 次遠低於每週一場的一半：全年 24 場對 52 場只有 46%，所以 50% 才是真正的門檻。", en: "Group meeting 50%: when it is checked, how it counts at the Roster review, whether summer counts, which group a cross-team task belongs to. Two a month misses half of a weekly meeting: 24 of 52 is 46%, so 50% is the real bar." },
  null, // not public
  { zh: "每位 advisor 的主責 instructor 是誰；哪兩位擔任 Advisor 驗收；誰代表 GEMS 決定 Roster 名單。", en: "Each advisor’s lead instructor; which two instructors take advisor verification; who decides the Roster list for GEMS." },
  null, // not public
  { zh: "第 3 階段隊員回饋：什麼形式、誰收、是否匿名、誰看得到。", en: "Stage 3 member feedback: what form, who collects it, whether it is anonymous, who sees it." },
  { zh: "權限：Hub 怎麼依身分登入；60 Advisors 要如何做到每人只寫自己的資料夾。已定：學生看得到 advisor 產出，驗收結果只放 Ops；「誰看得到什麼」表其餘欄位待定案。", en: "Access: how the Hub knows who is viewing; how 60 Advisors lets each advisor write only their own folder. Decided: students can see advisor outputs and reviews stay in Ops only; the rest of the “who sees what” table still needs a decision." },
  { zh: "Advisor 人數。規模以約 10 位估算（學生約 30 位），依實際簽署為準。", en: "The number of advisors. The team is sized for about 10 (and about 30 students) until forms are signed." },
  { zh: "組別會議與 advisor 月會各多長；自主會議的出席者要有誰；這些會議與模擬 judging 能否計入實體時數。", en: "How long group and advisor meetings run; who must attend a self-run meeting; whether these and mock judging count toward on-site hours." },
  null, // not public
  { zh: "驗收場次：月會不一定落在階段結束日，每階段的驗收日怎麼排；書面結果幾天內、由誰用什麼方式交給學生與家長。", en: "Review dates: the monthly meeting may not fall on a stage’s last day, so how are they set? How soon, by whom and how do written results reach student and parents?" },
  { zh: "第 2 階段：同意書寫 2 月中–3 月底，第 3 階段從 4 月開始。時程表訓練是 2/13–3/7，3/13 Task Group 就開始，3/27 序列審查。3/13–3/31 advisor 算哪一階段、要不要先確認第 3 階段的具名範圍？", en: "Stage 2: the form says mid Feb–end of March, with stage 3 from April. The schedule has training on 13 Feb–7 Mar, task groups from 13 Mar and the sequence review on 27 Mar. Which stage covers advisors in 13–31 Mar, and is stage 3 scope agreed sooner?" },
  { zh: "Wiki freeze：同意書寫 10 月中，時程表是 10/6–13?，內部關卡從 10/6 往回排。第 5 階段的 checklist 期限跟哪一個？同意書寫 freeze 後 3–4 週，但到 Jamboree 10/29? 只有約 2–3 週；若 freeze 是 10/13，10/9 那場 mock 算不算「freeze 後至少 2 次」？", en: "Wiki freeze: the form says mid-October; the schedule says 6–13 Oct?, with internal gates from 6 Oct. Which date does the stage 5 checklist follow? The form says 3–4 weeks after freeze, but the Jamboree on 29 Oct? leaves about 2–3. If freeze is 13 Oct, does the 9 Oct mock count toward “at least 2 after freeze”?" },
  { zh: "Roster：同意書寫 8 月底審核，時程表排 8/28；iGEM Roster Freeze 是 9/1–3?，只隔幾天。這段時間夠核對名單嗎？", en: "Roster: the form says a late-August review and the schedule has 28 Aug; the iGEM Roster Freeze on 1–3 Sep? is only days later. Is that long enough to check the list?" },
  { zh: "Promotion video：同意書把它放在第 4 階段（7/1–8/10），時程表的截止提前到 7/29?，拍攝 7/6–7/18。主導 video script 的 advisor 要在第 3 階段就開始，這段工作算哪一階段？", en: "Promotion video: the form places it in stage 4 (1 Jul–10 Aug), but the schedule moves the deadline up to 29 Jul? with the shoot on 6–18 Jul. An advisor leading the video script must start during stage 3. Which stage does that work count toward?" },
  { zh: "第 3 階段：同意書寫 4 月–暑假前，暑假 Mandatory 7/1 開始，時程表把驗收排在 6/26。Lead Advisor 選任以哪一天為準？", en: "Stage 3: the form says April to before summer, summer starts on 1 Jul, and the schedule puts the review on 26 Jun. Which date does Lead Advisor selection follow?" },
  { zh: "網站上的提案，待 PI 確認：先前的 agent 自行新增「Advisor 驗收 ×2」，把專心開發從 6 位改為 4 位，並把素材流導師 ×5 和頁面審稿 ×3 併入 Advisor。這些不是定案。", en: "Proposals on this site, awaiting the PI: an earlier agent added “Advisor verification ×2” on its own, cut development-only staff from 6 to 4, and merged stream mentors ×5 and page reviewers ×3 into the advisor role. None of this is settled." },
  { zh: "編號撞名：網站的 advisor 編號是 A01，系統 ID 的 A 前綴是 Advisor 產出（如 A0207）。要不要把 advisor 編號改成人員的 P？", en: "An ID clash: this site’s advisor ID is A01, while the system’s A prefix means an advisor output (such as A0207). Should the advisor ID move to the person prefix P?" }
];

// ---------- Roles: generated from people.json (decisions/ROLES.md). Proposal; no names; hours are estimates. ----------
const PEOPLE = {
  months: ["2026-11", "2026-12", "2027-01", "2027-02", "2027-03", "2027-04", "2027-05", "2027-06", "2027-07", "2027-08", "2027-09", "2027-10", "2027-11"],
  roles: [
    {"code": "TL", "kind": "s", "group": "ops", "name": {"zh": "Team Lead", "en": "Team Lead"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "iGEM 官方送件與 Freeze 當天的頁面核對", "en": "Official iGEM submission and page cross-check on Freeze day"}, "week": [{"zh": "看 iGEM 官方截止與表單", "en": "Check official iGEM deadlines and forms"}, {"zh": "和 CAL 對下週節點", "en": "Check next week's nodes against CAL"}, {"zh": "送件前找老師看過", "en": "Get an instructor to review before submitting"}], "hrs": [0, 0, 0, 0, 1.5, 1.5, 1.5, 1.5, 2, 2.5, 3, 4.5, 1], "peak": [{"zh": "N08 週 3h", "en": "N08 week 3h"}, {"zh": "N19 週 4h", "en": "N19 week 4h"}, {"zh": "N31 週 5h", "en": "N31 week 5h"}], "nodes": {"2027-03": ["N08"], "2027-05": ["N13"], "2027-07": ["N19"], "2027-10": ["N31"]}, "tabs": [], "folders": ["50 Deliverables/Forms", "50 Deliverables/Jamboree/Booth and Materials"], "backup": "CAL", "fit": [{"zh": "英文閱讀好", "en": "Good at reading English"}, {"zh": "看到截止會先動", "en": "Acts early on deadlines"}, {"zh": "別人願意聽他講", "en": "Others listen to them"}], "rhythm": [{"day": {"zh": "週一", "en": "Mon"}, "min": 30, "duty": {"zh": "官方截止與表單", "en": "Official deadlines and forms"}}]},
    {"code": "CAL", "kind": "s", "group": "ops", "name": {"zh": "副 Team Lead 兼行事曆", "en": "Deputy Lead and Calendar"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "Hub Nodes 狀態與全隊行事曆", "en": "Hub Nodes status and everyone's calendar"}, "week": [{"zh": "週日前催節點 owner 更新狀態", "en": "Chase node owners to update status by Sun"}, {"zh": "維護全隊行事曆，日期以 Ops 為準", "en": "Maintain the team calendar; Ops dates take precedence"}, {"zh": "代理 TL", "en": "Acting TL"}], "hrs": [0, 0, 0, 0, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 2.5, 3, 1], "peak": [{"zh": "N24 週 3h", "en": "N24 week 3h"}, {"zh": "N31 週 3h", "en": "N31 week 3h"}], "nodes": {}, "tabs": ["Hub.Nodes"], "folders": [], "backup": "TL", "fit": [{"zh": "細心", "en": "Careful"}, {"zh": "不怕提醒別人", "en": "Not afraid to remind others"}, {"zh": "會用 Google 日曆", "en": "Can use Google Calendar"}], "rhythm": [{"day": {"zh": "週日", "en": "Sun"}, "min": 30, "duty": {"zh": "Nodes 掃一輪", "en": "Sweep Nodes"}}]},
    {"code": "WL", "kind": "s", "group": "wet", "name": {"zh": "Wet 組長", "en": "Wet Lead"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "Constructs、Wet 的 Tasks 與 SOP、序列審查節點", "en": "Constructs, Wet Tasks and SOPs, sequence review nodes"}, "week": [{"zh": "週會前看 Tasks、Constructs", "en": "Check Tasks and Constructs before the weekly meeting"}, {"zh": "週會開完確認決議有編號", "en": "After the weekly meeting, check decisions are numbered"}, {"zh": "追 SOP 狀態", "en": "Track SOP status"}], "hrs": [0, 0, 0, 0, 3, 2.5, 2.5, 2.5, 3, 3, 3, 1.5, 0.5], "peak": [{"zh": "N09 週 4h", "en": "N09 week 4h"}, {"zh": "N10 週 4h", "en": "N10 week 4h"}, {"zh": "N27 週 4h", "en": "N27 week 4h"}], "nodes": {"2027-03": ["N09"], "2027-04": ["N10"], "2027-09": ["N29"]}, "tabs": ["Hub.Constructs", "Hub.SOPs"], "folders": ["31 Wetlab", "31 Wetlab/SOP", "31 Wetlab/Projects", "31 Wetlab/Meetings"], "backup": "LAB", "fit": [{"zh": "實驗操作穩", "en": "Steady at bench work"}, {"zh": "願意帶人", "en": "Willing to guide others"}, {"zh": "會做取捨", "en": "Can make trade-offs"}], "rhythm": [{"day": {"zh": "週會前", "en": "Before weekly meeting"}, "min": 45, "duty": {"zh": "Tasks 與 Constructs", "en": "Tasks and Constructs"}}]},
    {"code": "DL", "kind": "s", "group": "dry", "name": {"zh": "Dry 組長", "en": "Dry Lead"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "Dry 的 Tasks、SOP、RunLog 與 Research 工作簿", "en": "Dry Tasks, SOPs, RunLog and Research workbook"}, "week": [{"zh": "週會前看 Tasks", "en": "Check Tasks before the weekly meeting"}, {"zh": "週六看 RunLog", "en": "Check RunLog on Sat"}, {"zh": "程式與資料分開放好", "en": "Keep code and data stored separately"}], "hrs": [0, 0, 0, 0, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 3, 1.5, 0.5], "peak": [{"zh": "N09 週 3h", "en": "N09 week 3h"}, {"zh": "N27 週 3h", "en": "N27 week 3h"}], "nodes": {"2027-03": ["N09"]}, "tabs": ["RunLog.Runs", "Research.Papers"], "folders": ["32 Drylab", "32 Drylab/SOP", "32 Drylab/Projects", "32 Drylab/Meetings"], "backup": "TSK", "fit": [{"zh": "會寫程式", "en": "Can code"}, {"zh": "能把模型講給 Wet 聽", "en": "Can explain the model to Wet"}], "rhythm": [{"day": {"zh": "週會前", "en": "Before weekly meeting"}, "min": 30, "duty": {"zh": "Tasks", "en": "Tasks"}}, {"day": {"zh": "週六", "en": "Sat"}, "min": 20, "duty": {"zh": "RunLog", "en": "RunLog"}}]},
    {"code": "HWL", "kind": "s", "group": "hw", "name": {"zh": "Hardware 組長", "en": "Hardware Lead"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "Hardware 專案資料夾、Tasks、測試紀錄", "en": "Hardware project folder, Tasks, test records"}, "week": [{"zh": "週會前看 Tasks", "en": "Check Tasks before the weekly meeting"}, {"zh": "確認 CAD 與測試有放對", "en": "Check CAD and tests are filed correctly"}], "hrs": [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2.5, 1.5, 0.5], "peak": [{"zh": "N27 週 3h", "en": "N27 week 3h"}], "nodes": {}, "tabs": [], "folders": ["33 Hardware", "33 Hardware/SOP", "33 Hardware/Projects"], "backup": "DL", "fit": [{"zh": "動手做", "en": "Hands-on"}, {"zh": "會 CAD 或電子", "en": "Knows CAD or electronics"}], "rhythm": [{"day": {"zh": "週會前", "en": "Before weekly meeting"}, "min": 30, "duty": {"zh": "Tasks", "en": "Tasks"}}]},
    {"code": "TSK", "kind": "s", "group": "dry", "name": {"zh": "Task lead", "en": "Task Lead"}, "seats": 3, "sec": 0, "when": {"zh": "任務期（N07 到 N27）", "en": "Task period (N07 to N27)"}, "own": {"zh": "一個 Task 的進度與工程照片證據鏈", "en": "Progress of one Task and its engineering photo evidence trail"}, "week": [{"zh": "更新自己 Task 的列", "en": "Update own Task rows"}, {"zh": "每月看 --trail 缺哪個 DBTL 階段", "en": "Monthly, check --trail for missing DBTL stages"}, {"zh": "開討論與求助", "en": "Open discussions and ask for help"}], "hrs": [0, 0, 0, 0, 2, 2, 2, 2, 2.5, 2.5, 2.5, 1, 0], "peak": [{"zh": "N12 週 3h", "en": "N12 week 3h"}, {"zh": "N27 週 3h", "en": "N27 week 3h"}], "nodes": {}, "tabs": ["Hub.Tasks"], "folders": [], "backup": "WL", "fit": [{"zh": "能把工作拆小", "en": "Can break work into small pieces"}, {"zh": "會主動問", "en": "Asks proactively"}], "rhythm": [{"day": {"zh": "週會前", "en": "Before weekly meeting"}, "min": 20, "duty": {"zh": "Tasks 自己的列", "en": "Own rows in Tasks"}}], "note": {"zh": "Task lead 選任方式待決定（H-03）。多於 3 個 Task 時，由組長或一般隊員兼任，不增加席位", "en": "Task lead selection to be decided (H-03). With more than 3 Tasks, a lead or regular member doubles up; no extra seats"}},
    {"code": "LAB", "kind": "s", "group": "wet", "name": {"zh": "Lab lead", "en": "Lab Lead"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "暑期 Run 結果率與實驗室當日秩序", "en": "Summer Run result rate and daily lab order"}, "week": [{"zh": "週六掃 Hub Runs 沒結果的列", "en": "Sat: sweep Hub Runs rows with no result"}, {"zh": "提醒班表", "en": "Remind about the roster"}, {"zh": "告訴老師現場狀況", "en": "Tell instructors the situation on site"}], "hrs": [0, 0, 0, 0, 2, 2, 2, 2, 3, 3, 2.5, 0.5, 0.5], "peak": [{"zh": "N18 每週 3h", "en": "N18 weekly 3h"}, {"zh": "N27 週 3h", "en": "N27 week 3h"}], "nodes": {"2027-07": ["N18"], "2027-08": ["N18"], "2027-09": ["N27"]}, "tabs": ["Hub.Runs", "LabRoster.Shifts"], "folders": ["31 Wetlab/Run Records", "31 Wetlab/Data"], "backup": "SFT", "fit": [{"zh": "常在實驗室", "en": "Often in the lab"}, {"zh": "守規矩也敢提醒人", "en": "Follows rules and dares to remind others"}], "rhythm": [{"day": {"zh": "週六", "en": "Sat"}, "min": 40, "duty": {"zh": "Runs 與班表", "en": "Runs and roster"}}]},
    {"code": "SFT", "kind": "s", "group": "wet", "name": {"zh": "安全紀錄員", "en": "Safety Officer"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N05 起）", "en": "Year-round (from N05)"}, "own": {"zh": "Safety Register 與 Safety Form（判斷在 Lab 老師）", "en": "Safety Register and Safety Form (judgement rests with Lab instructors)"}, "week": [{"zh": "週六看事故、化學品、保養、廢棄物有沒有填", "en": "Sat: check incident, chemical, maintenance and waste records are filled"}, {"zh": "零事故月份也寫一列", "en": "Write a row even in zero-incident months"}, {"zh": "協助 Safety Form", "en": "Help with Safety Form"}], "hrs": [0, 0, 0, 1, 1, 1, 1, 2, 1, 1, 2, 0.5, 0.5], "peak": [{"zh": "N15 週 3h", "en": "N15 week 3h"}, {"zh": "N28 週 3h", "en": "N28 week 3h"}], "nodes": {"2027-06": ["N15"], "2027-09": ["N28"]}, "tabs": ["SafetyRegister.Incidents", "SafetyRegister.Chemicals", "SafetyRegister.Maintenance", "SafetyRegister.Waste"], "folders": ["31 Wetlab/Safety"], "backup": "LAB", "fit": [{"zh": "細心", "en": "Careful"}, {"zh": "通過安全考", "en": "Passed the safety test"}, {"zh": "不怕追問", "en": "Not afraid to press for answers"}], "rhythm": [{"day": {"zh": "週六", "en": "Sat"}, "min": 30, "duty": {"zh": "四張紀錄掃一輪", "en": "Sweep the four records"}}], "note": {"zh": "事故只記事情與改善；是否處分是老師的事，寫在 Ops Hub，學生看不到。人數與權限 H-14 待決定", "en": "Incidents record facts and improvements only; any sanction is for instructors, logged in Ops Hub and hidden from students. Headcount and permissions pending (H-14)"}},
    {"code": "INV", "kind": "s", "group": "wet", "name": {"zh": "物資與請購", "en": "Inventory and Requests"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "Inventory 與請購前置（不碰付款）", "en": "Inventory and purchase request prep (no payments)"}, "week": [{"zh": "每月第一個週六盤點", "en": "Stock count on the first Sat of each month"}, {"zh": "低水位開 B", "en": "Open a B when stock is low"}, {"zh": "週日看 Purchases 欄位填齊，週一交 Ops", "en": "Sun: check Purchases fields are complete; hand to Ops on Mon"}], "hrs": [0, 0, 0, 0, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1, 0.5, 0.5], "peak": [{"zh": "N07 週 3h", "en": "N07 week 3h"}, {"zh": "N27 前最後盤點 2h", "en": "Final stock count before N27 2h"}], "nodes": {}, "tabs": ["Hub.Inventory"], "folders": [], "backup": "IDT", "fit": [{"zh": "有條理", "en": "Organised"}, {"zh": "對數字仔細", "en": "Careful with numbers"}], "rhythm": [{"day": {"zh": "每月第一個週六", "en": "First Sat of each month"}, "min": 60, "duty": {"zh": "盤點", "en": "Stock count"}}, {"day": {"zh": "週日", "en": "Sun"}, "min": 15, "duty": {"zh": "Purchases", "en": "Purchases"}}]},
    {"code": "IDT", "kind": "s", "group": "wet", "name": {"zh": "IDT 訂單員", "en": "IDT Order Clerk"}, "seats": 1, "sec": 0, "when": {"zh": "季節（3 月到 N29）", "en": "Seasonal (Mar to N29)"}, "own": {"zh": "IDT Orders 與 Sequences 資料夾", "en": "IDT Orders and Sequences folders"}, "week": [{"zh": "維護訂單列與序列檔命名", "en": "Maintain order rows and sequence file naming"}, {"zh": "確認審查人不是設計人", "en": "Check the reviewer is not the designer"}, {"zh": "可下單 TRUE 才交 Ops", "en": "Hand to Ops only when orderable is TRUE"}], "hrs": [0, 0, 0, 0, 3, 3, 2, 2, 2, 2, 2, 0.5, 0], "peak": [{"zh": "N09 週 4h", "en": "N09 week 4h"}, {"zh": "N10 週 4h", "en": "N10 week 4h"}, {"zh": "N29 週 3h", "en": "N29 week 3h"}], "nodes": {"2027-04": ["N10"], "2027-09": ["N29"]}, "tabs": ["IDTOrders.Orders"], "folders": ["31 Wetlab/Sequences"], "backup": "WL", "fit": [{"zh": "細心", "en": "Careful"}, {"zh": "看得懂序列格式", "en": "Reads sequence formats"}], "rhythm": [{"day": {"zh": "週一", "en": "Mon"}, "min": 40, "duty": {"zh": "Orders", "en": "Orders"}}]},
    {"code": "REG", "kind": "s", "group": "wet", "name": {"zh": "Registry 負責人", "en": "Registry Lead"}, "seats": 1, "sec": 0, "when": {"zh": "季節（4 月到 N31）", "en": "Seasonal (Apr to N31)"}, "own": {"zh": "Registry 與 part 頁面", "en": "Registry and part pages"}, "week": [{"zh": "追 part 清單與資料", "en": "Track part list and data"}, {"zh": "對應 Constructs", "en": "Match to Constructs"}, {"zh": "Freeze 前核對", "en": "Cross-check before Freeze"}], "hrs": [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 4, 4, 0], "peak": [{"zh": "N31 前兩週各 4h", "en": "Two weeks before N31, 4h each"}], "nodes": {"2027-10": ["N31"]}, "tabs": [], "folders": ["50 Deliverables/Registry"], "backup": "WL", "fit": [{"zh": "細心", "en": "Careful"}, {"zh": "能讀官方文件", "en": "Can read official documents"}], "rhythm": [{"day": {"zh": "週六", "en": "Sat"}, "min": 40, "duty": {"zh": "part 清單", "en": "Part list"}}]},
    {"code": "WKL", "kind": "s", "group": "wiki", "name": {"zh": "Wiki Lead", "en": "Wiki Lead"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "Pages、Issues 與衝刺站立會", "en": "Pages, Issues and crunch stand-ups"}, "week": [{"zh": "週一讀 Figures、Facts", "en": "Mon: read Figures and Facts"}, {"zh": "8 月底起每天看 Issues", "en": "From late Aug, check Issues daily"}, {"zh": "週二、四主持站立會", "en": "Lead stand-ups on Tue and Thu"}], "hrs": [0, 0, 0, 0, 1.5, 1.5, 1.5, 2, 3, 4, 5, 5, 1], "peak": [{"zh": "N14 週 3h", "en": "N14 week 3h"}, {"zh": "N27 週 5h", "en": "N27 week 5h"}, {"zh": "N30 週 5h", "en": "N30 week 5h"}, {"zh": "N31 週 5h", "en": "N31 week 5h"}], "nodes": {"2027-06": ["N14"], "2027-09": ["N27", "N30"], "2027-10": ["N31"]}, "tabs": ["Hub.Pages", "Hub.Issues"], "folders": ["50 Deliverables/Wiki", "50 Deliverables/Wiki/W### 頁名"], "backup": "WKD", "fit": [{"zh": "英文寫作好", "en": "Good at writing English"}, {"zh": "能排優先順序", "en": "Can prioritise"}, {"zh": "抗壓", "en": "Handles pressure"}], "rhythm": [{"day": {"zh": "週一", "en": "Mon"}, "min": 60, "duty": {"zh": "Figures、Facts", "en": "Figures、Facts"}}, {"day": {"zh": "週二、四（衝刺）", "en": "Tue, Thu (crunch)"}, "min": 15, "duty": {"zh": "站立會", "en": "Stand-up"}}]},
    {"code": "WKD", "kind": "s", "group": "wiki", "name": {"zh": "Wiki 建置", "en": "Wiki Build Deputy"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "Wiki repo、建置與 Issues 分流；代理 Wiki Lead", "en": "Wiki repo, build and Issues triage; acting Wiki Lead"}, "week": [{"zh": "維護 repo 與 template", "en": "Maintain repo and template"}, {"zh": "排 Issues 順序", "en": "Order Issues by priority"}, {"zh": "協調 Coding owner", "en": "Coordinate Coding owners"}], "hrs": [0, 0, 0, 0, 1.5, 1.5, 1.5, 1.5, 3, 4, 5, 5, 1], "peak": [{"zh": "N30 週 5h", "en": "N30 week 5h"}, {"zh": "N31 週 5h", "en": "N31 week 5h"}], "nodes": {"2027-09": ["N30"]}, "tabs": [], "folders": [], "backup": "WKL", "fit": [{"zh": "HTML、Git", "en": "HTML、Git"}, {"zh": "願意教別人", "en": "Willing to teach others"}], "rhythm": [{"day": {"zh": "週日", "en": "Sun"}, "min": 45, "duty": {"zh": "Issues 分流", "en": "Issues triage"}}]},
    {"code": "FCT", "kind": "s", "group": "wiki", "name": {"zh": "事實與術語", "en": "Facts Keeper"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起），8 月起加重", "en": "Year-round (from N07), heavier from Aug"}, "own": {"zh": "Hub Facts 與術語表", "en": "Hub Facts and glossary"}, "week": [{"zh": "追 V 有沒有來源", "en": "Check each V has a source"}, {"zh": "維護術語表", "en": "Maintain the glossary"}, {"zh": "把待查送進查核佇列", "en": "Send items to check into the cross-check queue"}], "hrs": [0, 0, 0, 0, 0.5, 0.5, 0.5, 1, 1, 2.5, 4, 2, 0], "peak": [{"zh": "N27 前兩週各 4h", "en": "Two weeks before N27, 4h each"}], "nodes": {}, "tabs": ["Hub.Facts"], "folders": [], "backup": "XCK", "fit": [{"zh": "仔細", "en": "Meticulous"}, {"zh": "看得懂文獻", "en": "Reads the literature"}], "rhythm": [{"day": {"zh": "週日", "en": "Sun"}, "min": 30, "duty": {"zh": "Facts 掃一輪", "en": "Sweep Facts"}}]},
    {"code": "FIG", "kind": "s", "group": "wiki", "name": {"zh": "圖表編輯", "en": "Figure Editor"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起），8 月起加重", "en": "Year-round (from N07), heavier from Aug"}, "own": {"zh": "Hub Figures 與圖的樣式範本", "en": "Hub Figures and figure style template"}, "week": [{"zh": "維護樣式範本", "en": "Maintain the style template"}, {"zh": "確認每張圖有 F、原檔、圖說", "en": "Check every figure has an F, source file and caption"}, {"zh": "舊版移到 Superseded", "en": "Move old versions to Superseded"}], "hrs": [0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 4, 2, 0], "peak": [{"zh": "N27 前兩週各 4h", "en": "Two weeks before N27, 4h each"}], "nodes": {}, "tabs": ["Hub.Figures"], "folders": ["40 Media/Figures", "40 Media/Figures/Current", "40 Media/Figures/Superseded"], "backup": "ART", "fit": [{"zh": "資料視覺化", "en": "Data visualisation"}, {"zh": "有美感", "en": "Good eye for design"}], "rhythm": [{"day": {"zh": "週日", "en": "Sun"}, "min": 30, "duty": {"zh": "Figures 掃一輪", "en": "Sweep Figures"}}]},
    {"code": "XCK", "kind": "s", "group": "wiki", "name": {"zh": "Cross-check 協調", "en": "Cross-check Coordinator"}, "seats": 1, "sec": 0, "when": {"zh": "季節（4 月起），8 月起加重", "en": "Seasonal (from Apr), heavier from Aug"}, "own": {"zh": "圖與事實的跨組查核佇列，3 天內", "en": "Cross-group cross-check queue for figures and facts, within 3 days"}, "week": [{"zh": "排查核輪值", "en": "Schedule the cross-check rota"}, {"zh": "盯 3 天時限", "en": "Watch the 3-day limit"}, {"zh": "查核人不可是作者", "en": "The cross-checker cannot be the author"}], "hrs": [0, 0, 0, 0, 0, 0.5, 0.5, 0.5, 0.5, 2, 4, 3, 0], "peak": [{"zh": "N27 前兩週各 4h", "en": "Two weeks before N27, 4h each"}], "nodes": {}, "tabs": [], "folders": [], "backup": "FCT", "fit": [{"zh": "公正", "en": "Fair-minded"}, {"zh": "願意追", "en": "Willing to follow up"}, {"zh": "跨組都熟", "en": "Knows all the groups"}], "rhythm": [{"day": {"zh": "週一", "en": "Mon"}, "min": 30, "duty": {"zh": "排佇列", "en": "Schedule the queue"}}]},
    {"code": "ATT", "kind": "s", "group": "wiki", "name": {"zh": "Attribution", "en": "Attribution Officer"}, "seats": 1, "sec": 0, "when": {"zh": "季節（5 月到 N31）", "en": "Seasonal (May to N31)"}, "own": {"zh": "Attribution 表（TL 最後核對）", "en": "Attribution table (TL does final cross-check)"}, "week": [{"zh": "追 Members 與 External", "en": "Track Members and External"}, {"zh": "對到 K 的可列名", "en": "Names matched to a K can be listed"}, {"zh": "9 月起每週一更新", "en": "From Sep, update every Mon"}], "hrs": [0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5, 1.5, 3, 3, 0], "peak": [{"zh": "N24 週 3h", "en": "N24 week 3h"}, {"zh": "N31 週 4h", "en": "N31 week 4h"}], "nodes": {"2027-10": ["N31"]}, "tabs": ["Attribution.Members", "Attribution.External"], "folders": ["50 Deliverables/Wiki/Team"], "backup": "TL", "fit": [{"zh": "細心", "en": "Careful"}, {"zh": "公平", "en": "Even-handed"}], "rhythm": [{"day": {"zh": "週一（9 月起）", "en": "Mon (from Sep)"}, "min": 60, "duty": {"zh": "Attribution", "en": "Attribution"}}]},
    {"code": "TRN", "kind": "s", "group": "wiki", "name": {"zh": "英文編輯與翻譯", "en": "English Editor and Translator"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "對外英文與中英對照；Wiki 語言把關", "en": "Outward-facing English and bilingual text; Wiki language check"}, "week": [{"zh": "改對外信與 wiki 英文", "en": "Edit outgoing letters and wiki English"}, {"zh": "教育場次材料中英對照", "en": "Bilingual education session materials"}, {"zh": "術語與 FCT 對齊", "en": "Align terminology with FCT"}], "hrs": [0, 0, 0, 0, 1.5, 1.5, 1.5, 1.5, 1.5, 2.5, 4, 3, 0], "peak": [{"zh": "N31 前兩週各 4h", "en": "Two weeks before N31, 4h each"}], "nodes": {}, "tabs": [], "folders": [], "backup": "EDU", "fit": [{"zh": "中英都好", "en": "Strong in Chinese and English"}, {"zh": "能改別人的稿不傷人", "en": "Can edit others' drafts without hurting feelings"}], "rhythm": [{"day": {"zh": "週六", "en": "Sat"}, "min": 60, "duty": {"zh": "當週稿件", "en": "This week's drafts"}}]},
    {"code": "PHO", "kind": "s", "group": "media", "name": {"zh": "Photo Steward", "en": "Photo Steward"}, "seats": 2, "sec": 0, "when": {"zh": "全年（N02 起）", "en": "Year-round (from N02)"}, "own": {"zh": "每週把 gallery 歸檔到 Drive 與 Hub Media；提醒大家拍和發", "en": "File the gallery to Drive and Hub Media weekly; remind everyone to shoot and post"}, "week": [{"zh": "週五提醒（自動）", "en": "Fri reminder (automatic)"}, {"zh": "週六現場提醒拍", "en": "Sat: remind people to shoot on site"}, {"zh": "週日跑歸檔，上限 60 分鐘", "en": "Sun: run the filing, 60 min cap"}, {"zh": "隔兩週輪值", "en": "Rota every other week"}], "hrs": [0, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 1.5, 1.5], "peak": [{"zh": "N31 後補積壓 90 分鐘", "en": "After N31, clear the backlog 90 min"}, {"zh": "N35 收尾 90 分鐘", "en": "N35 wrap-up 90 min"}], "nodes": {}, "tabs": ["Hub.Media"], "folders": ["40 Media/Photos", "40 Media/Footage", "40 Media/Portraits", "40 Media/_Inbox"], "backup": "PHO", "fit": [{"zh": "有筆電", "en": "Has a laptop"}, {"zh": "細心", "en": "Careful"}, {"zh": "尊重別人的照片", "en": "Respects others' photos"}, {"zh": "不一定要會攝影", "en": "Photography skills not required"}], "rhythm": [{"day": {"zh": "週五", "en": "Fri"}, "min": 1, "duty": {"zh": "提醒", "en": "Reminder"}}, {"day": {"zh": "週六", "en": "Sat"}, "min": 1, "duty": {"zh": "現場提醒拍", "en": "On-site shooting reminder"}}, {"day": {"zh": "週日 19:00", "en": "Sun 19:00"}, "min": 47, "duty": {"zh": "歸檔（輪值週）", "en": "Filing (rota week)"}}], "note": {"zh": "時數是兩週平均：輪值週約 47 分，另一週 5 分。12 月到 N07 前可先由自願者試跑", "en": "Hours are a two-week average: about 47 min on rota weeks, 5 min on the other. Volunteers can trial it from Dec to before N07"}},
    {"code": "MDL", "kind": "s", "group": "media", "name": {"zh": "Media lead", "en": "Media Lead"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N02 起）", "en": "Year-round (from N02)"}, "own": {"zh": "40 Media 的規則、shot list、精選與 Milestones", "en": "40 Media rules, shot list, picks and Milestones"}, "week": [{"zh": "每月第一個週六 shot list", "en": "Shot list on the first Sat of each month"}, {"zh": "每月標精選", "en": "Mark picks monthly"}, {"zh": "每月底寫 Milestones Caption", "en": "Write Milestones Caption at the end of each month"}, {"zh": "抽查 5 張人臉 FALSE", "en": "Spot-check 5 face-FALSE photos"}], "hrs": [0, 1, 1, 1, 1, 1, 1, 1.5, 1, 1, 1.5, 1, 1], "peak": [{"zh": "N14 肖像 2h", "en": "N14 portraits 2h"}, {"zh": "N23 前精選 2h", "en": "Picks before N23 2h"}, {"zh": "N35 交接 2h", "en": "N35 handover 2h"}], "nodes": {"2027-11": ["N35"]}, "tabs": [], "folders": ["40 Media", "40 Media/Art and Brand"], "backup": "PHO", "fit": [{"zh": "有畫面感", "en": "Visual sense"}, {"zh": "會挑照片", "en": "Good at choosing photos"}, {"zh": "知道什麼不該放", "en": "Knows what not to post"}], "rhythm": [{"day": {"zh": "每月第一個週六", "en": "First Sat of each month"}, "min": 40, "duty": {"zh": "shot list 與精選", "en": "Shot list and picks"}}, {"day": {"zh": "每月最後週日", "en": "Last Sun of each month"}, "min": 30, "duty": {"zh": "Milestones", "en": "Milestones"}}]},
    {"code": "VID", "kind": "s", "group": "media", "name": {"zh": "Video lead", "en": "Video Lead"}, "seats": 1, "sec": 0, "when": {"zh": "季節（4 月到 N32）", "en": "Seasonal (Apr to N32)"}, "own": {"zh": "Promo 與 Presentation Video", "en": "Promo and Presentation Video"}, "week": [{"zh": "腳本與 shot list，每鏡頭寫 M", "en": "Script and shot list; write an M for every shot"}, {"zh": "排拍攝", "en": "Schedule filming"}, {"zh": "送出前查影像同意", "en": "Check video consent before release"}], "hrs": [0, 0, 0, 0, 0, 1, 1.5, 2, 4.5, 2, 3, 4.5, 0], "peak": [{"zh": "N20 拍攝兩週各 5h", "en": "N20 filming, two weeks, 5h each"}, {"zh": "N32 前兩週各 5h", "en": "Two weeks before N32, 5h each"}], "nodes": {"2027-07": ["N20"], "2027-10": ["N32"]}, "tabs": [], "folders": ["50 Deliverables/Promo Video", "50 Deliverables/Presentation Video"], "backup": "ART", "fit": [{"zh": "剪輯", "en": "Editing"}, {"zh": "說故事", "en": "Storytelling"}, {"zh": "能排程", "en": "Can schedule"}], "rhythm": [{"day": {"zh": "週六", "en": "Sat"}, "min": 60, "duty": {"zh": "腳本與拍攝", "en": "Script and filming"}}], "note": {"zh": "N20、N32 尖峰靠 ART 與 advisor 的 video script 範圍分擔", "en": "N20 and N32 peaks are shared with ART and the advisor's video script scope"}},
    {"code": "ART", "kind": "s", "group": "wiki", "name": {"zh": "美術與設計", "en": "Art and Design"}, "seats": 2, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "品牌、主視覺、美術需求、展板", "en": "Brand, key visual, art requests, display boards"}, "week": [{"zh": "排美術需求清單", "en": "Order the art request list"}, {"zh": "維護主視覺與色票", "en": "Maintain key visual and colour swatches"}, {"zh": "投票結果匯出成檔案", "en": "Export vote results to a file"}], "hrs": [0, 0, 0, 0, 2, 2, 2, 2, 2, 3, 2.5, 3, 1], "peak": [{"zh": "N22 週 4h", "en": "N22 week 4h"}, {"zh": "N34 前兩週各 4h", "en": "Two weeks before N34, 4h each"}], "nodes": {"2027-08": ["N22"], "2027-10": ["N34"], "2027-11": ["N34"]}, "tabs": [], "folders": ["40 Media/Art and Brand"], "backup": "ART", "fit": [{"zh": "設計工具", "en": "Design tools"}, {"zh": "願意依需求改", "en": "Willing to revise on request"}], "rhythm": [{"day": {"zh": "週六", "en": "Sat"}, "min": 60, "duty": {"zh": "美術需求", "en": "Art requests"}}]},
    {"code": "HPL", "kind": "s", "group": "hp", "name": {"zh": "HP 組長", "en": "HP Lead"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "Interactions、同意確認與 IHP Storyline", "en": "Interactions, consent checking and IHP Storyline"}, "week": [{"zh": "週日讀 Interactions、Consent", "en": "Sun: read Interactions and Consent"}, {"zh": "確認同意證據（HP 組長確認欄）", "en": "Check consent evidence (HP lead confirmation column)"}, {"zh": "維護 Storyline", "en": "Maintain Storyline"}, {"zh": "管 Survey Bank", "en": "Manage Survey Bank"}], "hrs": [0, 0, 0, 0, 2.5, 2.5, 2.5, 2.5, 2.5, 3, 4, 1.5, 0.5], "peak": [{"zh": "N25 前兩週各 4h", "en": "Two weeks before N25, 4h each"}], "nodes": {"2027-09": ["N25"]}, "tabs": ["Hub.Interactions", "SurveyBank.Instruments", "Research.HPCases"], "folders": ["34 Human Practices", "34 Human Practices/Interactions", "34 Human Practices/SOP", "34 Human Practices/Meetings"], "backup": "OUT", "fit": [{"zh": "敢跟陌生大人講話", "en": "Not shy of talking to unfamiliar adults"}, {"zh": "有條理", "en": "Organised"}, {"zh": "顧他人隱私", "en": "Protects others' privacy"}], "rhythm": [{"day": {"zh": "週日", "en": "Sun"}, "min": 45, "duty": {"zh": "Interactions、Consent", "en": "Interactions、Consent"}}]},
    {"code": "KCO", "kind": "s", "group": "hp", "name": {"zh": "同意紀錄員", "en": "Consent Clerk"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "Hub Consent 的列與追蹤（確認在 HP 組長，簽在老師）", "en": "Hub Consent rows and tracking (HP lead confirms, instructors sign)"}, "week": [{"zh": "開 K 列、寄感謝與授權信草稿給老師看", "en": "Open K rows; draft thank-you and permission letters for instructors to review"}, {"zh": "週日追待 K", "en": "Sun: chase items awaiting K"}, {"zh": "照片待 K 清單接到對的 I", "en": "Link the photos-awaiting-K list to the right I"}], "hrs": [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 3, 1, 0.5], "peak": [{"zh": "N25 前兩週各 3h", "en": "Two weeks before N25, 3h each"}], "nodes": {"2027-09": ["N25"]}, "tabs": ["Hub.Consent"], "folders": ["34 Human Practices/Consent"], "backup": "HPL", "fit": [{"zh": "仔細", "en": "Meticulous"}, {"zh": "守得住秘密", "en": "Keeps confidences"}, {"zh": "有禮貌", "en": "Polite"}], "rhythm": [{"day": {"zh": "週日", "en": "Sun"}, "min": 30, "duty": {"zh": "Consent 待辦", "en": "Consent to-dos"}}], "note": {"zh": "看不到 Minor Permissions；未成年許可由老師處理", "en": "Cannot see Minor Permissions; instructors handle minors' permissions"}},
    {"code": "EDU", "kind": "s", "group": "hp", "name": {"zh": "教育線", "en": "Education Lead"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "教案、邀課與 Education Impact", "en": "Lesson plans, class invitations and Education Impact"}, "week": [{"zh": "排場次", "en": "Schedule sessions"}, {"zh": "教案與邀課信草稿", "en": "Draft lesson plans and invitation letters"}, {"zh": "場次後寫 Impact", "en": "Write Impact after each session"}], "hrs": [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 1.5, 0.5, 0.5], "peak": [{"zh": "場次前一週 3h", "en": "Week before a session 3h"}], "nodes": {}, "tabs": [], "folders": ["34 Human Practices/Education"], "backup": "OUT", "fit": [{"zh": "會教", "en": "Can teach"}, {"zh": "和小朋友相處自在", "en": "Comfortable with children"}], "rhythm": [{"day": {"zh": "週六", "en": "Sat"}, "min": 45, "duty": {"zh": "場次準備", "en": "Session preparation"}}], "note": {"zh": "校外未成年的照片與許可不經手，由老師與行政處理", "en": "Photos and permissions of outside minors are not handled here; instructors and admin deal with them"}},
    {"code": "OUT", "kind": "s", "group": "hp", "name": {"zh": "活動與外展", "en": "Outreach and Events"}, "seats": 1, "sec": 0, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "活動 Dossier 與現場分工", "en": "Event Dossier and on-site roles"}, "week": [{"zh": "活動前 4 週開 Dossier", "en": "Open the Dossier 4 weeks before the event"}, {"zh": "排人、物料、攤位", "en": "Schedule people, materials, stalls"}, {"zh": "活動後 2 週結案", "en": "Close out within 2 weeks after the event"}], "hrs": [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 1.5, 2, 1], "peak": [{"zh": "活動前一週 3h", "en": "Week before an event 3h"}, {"zh": "N34 攤位 3h", "en": "N34 stall 3h"}], "nodes": {"2027-10": ["N34"], "2027-11": ["N34"]}, "tabs": [], "folders": ["34 Human Practices/Events"], "backup": "EDU", "fit": [{"zh": "會安排", "en": "Good at organising"}, {"zh": "不怕臨場", "en": "Fine with live situations"}], "rhythm": [{"day": {"zh": "週六", "en": "Sat"}, "min": 45, "duty": {"zh": "當期活動", "en": "Current event"}}]},
    {"code": "PGO", "kind": "s2", "group": "wiki", "name": {"zh": "Page owner", "en": "Page Owner"}, "seats": 0, "sec": 13, "when": {"zh": "季節（N14 起）", "en": "Seasonal (from N14)"}, "own": {"zh": "一頁 wiki 的 master doc", "en": "Master doc for one wiki page"}, "week": [{"zh": "每週推進自己那頁", "en": "Advance own page weekly"}, {"zh": "回 Issues 自己的列", "en": "Reply to own rows in Issues"}], "hrs": [0, 0, 0, 0, 0, 0, 0, 0.5, 1, 1.5, 2, 1.5, 0], "peak": [{"zh": "N30 前兩週各 2h", "en": "Two weeks before N30, 2h each"}], "nodes": {"2027-06": ["N14"]}, "tabs": [], "folders": [], "backup": "WKL", "fit": [{"zh": "懂那一頁的內容", "en": "Understands that page's content"}, {"zh": "能寫", "en": "Can write"}], "rhythm": [{"day": {"zh": "週六", "en": "Sat"}, "min": 60, "duty": {"zh": "自己那頁", "en": "Own page"}}], "note": {"zh": "依 wiki template 的 24 頁（D-045）：7 頁算在主職內，其餘 17 頁由這 13 席負責，其中 4 席各帶 2 個相近的小頁。題目專屬頁（2026 有 26 頁）還沒算，定題後要加人或併頁", "en": "Per the wiki template's 24 pages (D-045): 7 are covered within primary seats; the other 17 fall to these 13 seats, 4 of which take 2 similar small pages each. Topic-specific pages (26 in 2026) are not counted yet; once the topic is set, add people or merge pages"}},
    {"code": "CDO", "kind": "s2", "group": "wiki", "name": {"zh": "Coding owner", "en": "Page Coding Owner"}, "seats": 0, "sec": 3, "when": {"zh": "季節（N14 起）", "en": "Seasonal (from N14)"}, "own": {"zh": "幾個頁面的前端實作", "en": "Front-end build of several pages"}, "week": [{"zh": "把定稿內容放進頁面", "en": "Put final content into pages"}, {"zh": "修自己範圍的 Issues", "en": "Fix Issues in own scope"}], "hrs": [0, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 1.5, 2, 2, 0], "peak": [{"zh": "N30 週 2h", "en": "N30 week 2h"}], "nodes": {}, "tabs": [], "folders": [], "backup": "WKD", "fit": [{"zh": "HTML、CSS", "en": "HTML、CSS"}], "rhythm": [{"day": {"zh": "週六", "en": "Sat"}, "min": 60, "duty": {"zh": "頁面實作", "en": "Page build"}}]},
    {"code": "XCP", "kind": "s2", "group": "wiki", "name": {"zh": "Cross-checker", "en": "Cross-checker"}, "seats": 0, "sec": 4, "when": {"zh": "季節（8 月到 freeze）", "en": "Seasonal (Aug to freeze)"}, "own": {"zh": "3 天內查核別組的圖與事實", "en": "Cross-check other groups' figures and facts within 3 days"}, "week": [{"zh": "接佇列", "en": "Pick up the queue"}, {"zh": "對來源", "en": "Check against sources"}, {"zh": "不查自己的", "en": "Does not check own work"}], "hrs": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1.5, 1, 0], "peak": [{"zh": "N27 前 1.5h", "en": "Before N27 1.5h"}], "nodes": {}, "tabs": [], "folders": [], "backup": "XCK", "fit": [{"zh": "看得懂別組的內容", "en": "Understands other groups' content"}, {"zh": "願意挑錯", "en": "Willing to find errors"}], "rhythm": [{"day": {"zh": "週內", "en": "Within the week"}, "min": 60, "duty": {"zh": "查核佇列", "en": "Cross-check queue"}}]},
    {"code": "DIS", "kind": "s2", "group": "hp", "name": {"zh": "Discord 小幫手", "en": "Discord Steward"}, "seats": 0, "sec": 1, "when": {"zh": "全年（N07 起）", "en": "Year-round (from N07)"}, "own": {"zh": "提醒討論回 Hub、標題與標籤；沒有管理權限", "en": "Remind people to bring discussions back to Hub, with titles and tags; no moderation rights"}, "week": [{"zh": "週日看沒結論的串", "en": "Sun: check threads with no conclusion"}, {"zh": "提醒寫回 Hub", "en": "Remind people to write back to Hub"}, {"zh": "看到問題提及 Moderator", "en": "Mention a Moderator when a problem appears"}], "hrs": [0, 0, 0, 0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], "peak": [{"zh": "無", "en": "None"}], "nodes": {}, "tabs": [], "folders": [], "backup": "CAL", "fit": [{"zh": "友善", "en": "Friendly"}, {"zh": "不愛爭論", "en": "Dislikes arguing"}], "rhythm": [{"day": {"zh": "週日", "en": "Sun"}, "min": 20, "duty": {"zh": "掃討論串", "en": "Sweep threads"}}], "note": {"zh": "不看回報串，不處理安全事件，不匯出訊息", "en": "Does not read reports, handle safety incidents or export messages"}},
    {"code": "QAB", "kind": "s2", "group": "wiki", "name": {"zh": "評審題庫", "en": "QA Bank Keeper"}, "seats": 0, "sec": 1, "when": {"zh": "季節（8 月到 N34）", "en": "Seasonal (Aug to N34)"}, "own": {"zh": "Hub QA 的題目與答題人", "en": "Hub QA questions and answerers"}, "week": [{"zh": "收題", "en": "Collect questions"}, {"zh": "排答題人", "en": "Assign answerers"}, {"zh": "mock 後補題", "en": "Add questions after the mock"}], "hrs": [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1.5, 0], "peak": [{"zh": "N26 週 2h", "en": "N26 week 2h"}, {"zh": "N33 期間 2h", "en": "During N33 2h"}], "nodes": {}, "tabs": ["Hub.QA"], "folders": [], "backup": "WKL", "fit": [{"zh": "全專案都懂一點", "en": "Knows a little of the whole project"}, {"zh": "會問問題", "en": "Good at asking questions"}], "rhythm": [{"day": {"zh": "Mock 前", "en": "Before the mock"}, "min": 45, "duty": {"zh": "題庫", "en": "Question bank"}}]},
    {"code": "AWT", "kind": "a", "group": "adv", "name": {"zh": "Wet 範圍 advisor", "en": "Wet Scope Advisor"}, "seats": 3, "sec": 0, "when": {"zh": "任期 N01 到 Jamboree；每階段重新確認", "en": "Term N01 to Jamboree; reconfirmed each stage"}, "own": {"zh": "只有 instructor 確認過的具名範圍；判斷責任在 instructor，只留審查紀錄，不是關卡", "en": "Only the named scope confirmed by an instructor; judgement rests with the instructor; leaves review notes only, not a gate"}, "week": [{"zh": "做當階段具名產出", "en": "Deliver the named output for the stage"}, {"zh": "留審查紀錄", "en": "Leave review notes"}, {"zh": "月報、自主會議、組別會議、月會（同意書底線）", "en": "Monthly report, self-run meeting, group meeting, monthly meeting (consent form minimum)"}], "hrs": [4, 4.5, 4.5, 4.5, 5, 4.5, 4.5, 4.5, 9, 5, 5, 5, 2.5], "peak": [{"zh": "階段結束前兩週", "en": "Two weeks before a stage ends"}, {"zh": "暑期 7/1-8/10", "en": "Summer 1 Jul to 10 Aug"}], "nodes": {"2026-11": ["N01"], "2027-01": ["N04"], "2027-03": ["N11"], "2027-06": ["N17"], "2027-08": ["N23"], "2027-10": ["N31", "N33"]}, "tabs": [], "folders": ["60 Advisors/_Advisor Meeting"], "backup": {"zh": "同範圍另一位 advisor；instructor 調整範圍", "en": "Another advisor in the same scope; instructor adjusts the scope"}, "fit": [{"zh": "2026 Wet 經驗", "en": "2026 Wet experience"}, {"zh": "願意看別人的設計", "en": "Willing to look at others' designs"}], "rhythm": [{"day": {"zh": "週六為主", "en": "Mostly Sat"}, "min": 120, "duty": {"zh": "到場工作（每月 8 小時底線）", "en": "On-site work (8 hours a month minimum)"}}, {"day": {"zh": "組別會議", "en": "Group meeting"}, "min": 60, "duty": {"zh": "每月至少 2 次", "en": "At least twice a month"}}, {"day": {"zh": "月底", "en": "End of month"}, "min": 30, "duty": {"zh": "月報 ADV-F1", "en": "Monthly report ADV-F1"}}]},
    {"code": "ADR", "kind": "a", "group": "adv", "name": {"zh": "Dry 範圍 advisor", "en": "Dry Scope Advisor"}, "seats": 3, "sec": 0, "when": {"zh": "任期 N01 到 Jamboree；每階段重新確認", "en": "Term N01 to Jamboree; reconfirmed each stage"}, "own": {"zh": "只有 instructor 確認過的具名範圍；判斷責任在 instructor，只留審查紀錄，不是關卡", "en": "Only the named scope confirmed by an instructor; judgement rests with the instructor; leaves review notes only, not a gate"}, "week": [{"zh": "做當階段具名產出", "en": "Deliver the named output for the stage"}, {"zh": "留審查紀錄", "en": "Leave review notes"}, {"zh": "月報、自主會議、組別會議、月會（同意書底線）", "en": "Monthly report, self-run meeting, group meeting, monthly meeting (consent form minimum)"}], "hrs": [4, 4.5, 4.5, 4.5, 5, 4.5, 4.5, 4.5, 9, 5, 5, 5, 2.5], "peak": [{"zh": "階段結束前兩週", "en": "Two weeks before a stage ends"}, {"zh": "暑期 7/1-8/10", "en": "Summer 1 Jul to 10 Aug"}], "nodes": {"2026-11": ["N01"], "2027-01": ["N04"], "2027-03": ["N11"], "2027-06": ["N17"], "2027-08": ["N23"], "2027-10": ["N31", "N33"]}, "tabs": [], "folders": ["60 Advisors/_Advisor Meeting"], "backup": {"zh": "同範圍另一位 advisor；instructor 調整範圍", "en": "Another advisor in the same scope; instructor adjusts the scope"}, "fit": [{"zh": "2026 Dry 經驗", "en": "2026 Dry experience"}, {"zh": "能讀別人的程式", "en": "Can read others' code"}], "rhythm": [{"day": {"zh": "週六為主", "en": "Mostly Sat"}, "min": 120, "duty": {"zh": "到場工作（每月 8 小時底線）", "en": "On-site work (8 hours a month minimum)"}}, {"day": {"zh": "組別會議", "en": "Group meeting"}, "min": 60, "duty": {"zh": "每月至少 2 次", "en": "At least twice a month"}}, {"day": {"zh": "月底", "en": "End of month"}, "min": 30, "duty": {"zh": "月報 ADV-F1", "en": "Monthly report ADV-F1"}}]},
    {"code": "AHP", "kind": "a", "group": "adv", "name": {"zh": "HP 範圍 advisor", "en": "HP Scope Advisor"}, "seats": 2, "sec": 0, "when": {"zh": "任期 N01 到 Jamboree；每階段重新確認", "en": "Term N01 to Jamboree; reconfirmed each stage"}, "own": {"zh": "只有 instructor 確認過的具名範圍；判斷責任在 instructor，只留審查紀錄，不是關卡", "en": "Only the named scope confirmed by an instructor; judgement rests with the instructor; leaves review notes only, not a gate"}, "week": [{"zh": "做當階段具名產出", "en": "Deliver the named output for the stage"}, {"zh": "留審查紀錄", "en": "Leave review notes"}, {"zh": "月報、自主會議、組別會議、月會（同意書底線）", "en": "Monthly report, self-run meeting, group meeting, monthly meeting (consent form minimum)"}], "hrs": [4, 4.5, 4.5, 4.5, 5, 4.5, 4.5, 4.5, 9, 5, 5, 5, 2.5], "peak": [{"zh": "階段結束前兩週", "en": "Two weeks before a stage ends"}, {"zh": "暑期 7/1-8/10", "en": "Summer 1 Jul to 10 Aug"}], "nodes": {"2026-11": ["N01"], "2027-01": ["N04"], "2027-03": ["N11"], "2027-06": ["N17"], "2027-08": ["N23"], "2027-10": ["N31", "N33"]}, "tabs": [], "folders": ["60 Advisors/_Advisor Meeting"], "backup": {"zh": "同範圍另一位 advisor；instructor 調整範圍", "en": "Another advisor in the same scope; instructor adjusts the scope"}, "fit": [{"zh": "2026 HP 經驗", "en": "2026 HP experience"}, {"zh": "會寫信", "en": "Can write letters"}], "rhythm": [{"day": {"zh": "週六為主", "en": "Mostly Sat"}, "min": 120, "duty": {"zh": "到場工作（每月 8 小時底線）", "en": "On-site work (8 hours a month minimum)"}}, {"day": {"zh": "組別會議", "en": "Group meeting"}, "min": 60, "duty": {"zh": "每月至少 2 次", "en": "At least twice a month"}}, {"day": {"zh": "月底", "en": "End of month"}, "min": 30, "duty": {"zh": "月報 ADV-F1", "en": "Monthly report ADV-F1"}}]},
    {"code": "AXT", "kind": "a", "group": "adv", "name": {"zh": "跨組與制度範圍 advisor", "en": "Cross-team Scope Advisor"}, "seats": 2, "sec": 0, "when": {"zh": "任期 N01 到 Jamboree；每階段重新確認", "en": "Term N01 to Jamboree; reconfirmed each stage"}, "own": {"zh": "只有 instructor 確認過的具名範圍；判斷責任在 instructor，只留審查紀錄，不是關卡", "en": "Only the named scope confirmed by an instructor; judgement rests with the instructor; leaves review notes only, not a gate"}, "week": [{"zh": "做當階段具名產出", "en": "Deliver the named output for the stage"}, {"zh": "留審查紀錄", "en": "Leave review notes"}, {"zh": "月報、自主會議、組別會議、月會（同意書底線）", "en": "Monthly report, self-run meeting, group meeting, monthly meeting (consent form minimum)"}], "hrs": [4, 4.5, 4.5, 4.5, 5, 4.5, 4.5, 4.5, 9, 5, 5, 5, 2.5], "peak": [{"zh": "階段結束前兩週", "en": "Two weeks before a stage ends"}, {"zh": "暑期 7/1-8/10", "en": "Summer 1 Jul to 10 Aug"}], "nodes": {"2026-11": ["N01"], "2027-01": ["N04"], "2027-03": ["N11"], "2027-06": ["N17"], "2027-08": ["N23"], "2027-10": ["N31", "N33"]}, "tabs": [], "folders": ["60 Advisors/_Advisor Meeting"], "backup": {"zh": "同範圍另一位 advisor；instructor 調整範圍", "en": "Another advisor in the same scope; instructor adjusts the scope"}, "fit": [{"zh": "2026 跨組經驗", "en": "2026 cross-group experience"}, {"zh": "能把制度寫清楚", "en": "Can write procedures clearly"}], "rhythm": [{"day": {"zh": "週六為主", "en": "Mostly Sat"}, "min": 120, "duty": {"zh": "到場工作（每月 8 小時底線）", "en": "On-site work (8 hours a month minimum)"}}, {"day": {"zh": "組別會議", "en": "Group meeting"}, "min": 60, "duty": {"zh": "每月至少 2 次", "en": "At least twice a month"}}, {"day": {"zh": "月底", "en": "End of month"}, "min": 30, "duty": {"zh": "月報 ADV-F1", "en": "Monthly report ADV-F1"}}]},
    {"code": "LAD", "kind": "a", "group": "adv", "name": {"zh": "Lead Advisor（可從缺）", "en": "Lead Advisor"}, "seats": 0, "sec": 0, "when": {"zh": "選用：第 3 階段結束後，instructor 依表現選出；可從缺", "en": "Optional: chosen by instructors on performance after stage 3; may be vacant"}, "own": {"zh": "協助統整 advisor 之間的工作", "en": "Help coordinate work between advisors"}, "week": [{"zh": "協調範圍", "en": "Coordination scope"}, {"zh": "協助 mock 與 QA", "en": "Help with mock and QA"}], "hrs": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "peak": [{"zh": "N33", "en": "N33"}], "nodes": {"2027-10": ["N33"]}, "tabs": [], "folders": [], "backup": "IMK", "fit": [{"zh": "不是資格，不用申請", "en": "Not a qualification; no need to apply"}], "rhythm": [], "note": {"zh": "名額不固定，可從缺。席位 0，由既有 advisor 擔任，不增加 10 位之外的人。從缺時 N33、QA 由 IMK 接，月會書記由主責 instructor 接", "en": "Number of places not fixed; may be vacant. Zero seats: held by an existing advisor, adding no one beyond the 10. When vacant, IMK takes N33 and QA, and the lead instructor takes monthly meeting minutes"}},
    {"code": "PI", "kind": "i", "group": "staff", "name": {"zh": "PI", "en": "PI"}, "seats": 1, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "最終決定與例外", "en": "Final decisions and exceptions"}, "week": [{"zh": "週日 10 分鐘看例外摘要", "en": "Sun: 10 min on the exceptions summary"}, {"zh": "老師週會", "en": "Instructors' weekly meeting"}], "hrs": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], "peak": [], "nodes": {"2026-11": ["N01"], "2027-01": ["N04"], "2027-03": ["N07"], "2027-06": ["N16"], "2027-08": ["N23"], "2027-10": ["N34"], "2027-11": ["N34"]}, "tabs": ["Hub.Decisions"], "folders": ["20 Topic/Decision Records", "GEMS 2027 Ops/Instructor Meetings"], "backup": "IGP", "fit": [], "rhythm": [], "note": {"zh": "不應該是任何日常紀錄的讀者", "en": "Should not be a reader of any day-to-day records"}},
    {"code": "ITL", "kind": "i", "group": "staff", "name": {"zh": "訓練主責老師", "en": "Training Lead"}, "seats": 1, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "訓練與選題漏斗", "en": "Training and topic-selection funnel"}, "week": [{"zh": "週一看 Curriculum 與 Batches", "en": "Mon: check Curriculum and Batches"}], "hrs": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], "peak": [], "nodes": {"2026-12": ["N02"], "2027-01": ["N03"], "2027-02": ["N05"], "2027-03": ["N05"]}, "tabs": ["Training.Curriculum", "Training.Batches", "TopicPipeline.Rounds", "TopicPipeline.Topics", "TopicPipeline.Feedback", "TopicScores.Scores", "QuestionBank.Questions", "OpsHub.ExamResults"], "folders": ["10 Training", "20 Topic", "GEMS 2027 Ops/Scores and Exams"], "backup": "IGP", "fit": [], "rhythm": []},
    {"code": "IGP", "kind": "i", "group": "staff", "name": {"zh": "各組主責老師", "en": "Group Instructor"}, "seats": 4, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "組別評量、SOP 簽核", "en": "Group assessment, SOP sign-off"}, "week": [{"zh": "組別週會", "en": "Group weekly meeting"}, {"zh": "評量週", "en": "Assessment week"}], "hrs": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], "peak": [], "nodes": {"2027-03": ["N06"], "2027-04": ["N12"], "2027-08": ["N21"]}, "tabs": ["OpsHub.Assessment"], "folders": [], "backup": "PI", "fit": [], "rhythm": [], "note": {"zh": "Wet、Dry、Hardware、HP 各一", "en": "One each for Wet, Dry, Hardware, HP"}},
    {"code": "ILB", "kind": "i", "group": "staff", "name": {"zh": "Lab 老師", "en": "Lab Instructor"}, "seats": 2, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "實驗室安全判斷與 Run 指標", "en": "Lab safety judgement and Run metrics"}, "week": [{"zh": "週六看 Safety Register、Lab Roster", "en": "Sat: check Safety Register and Lab Roster"}], "hrs": [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], "peak": [], "nodes": {}, "tabs": ["SafetyRegister.Training"], "folders": ["31 Wetlab/Safety"], "backup": "IGP", "fit": [], "rhythm": [], "note": {"zh": "化學品與廢棄物分類 H-16", "en": "Chemical and waste classification H-16"}},
    {"code": "IMK", "kind": "i", "group": "staff", "name": {"zh": "Mock 與 judging 主責", "en": "Mock Lead"}, "seats": 1, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "全隊 mock；Lead Advisor 從缺時接 N33", "en": "Mock for everyone; takes N33 when Lead Advisor is vacant"}, "week": [{"zh": "Mock 前看 QA", "en": "Check QA before the mock"}], "hrs": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "peak": [], "nodes": {"2027-09": ["N26"], "2027-10": ["N33"]}, "tabs": [], "folders": ["50 Deliverables/Jamboree", "50 Deliverables/Jamboree/Mocks"], "backup": "PI", "fit": [], "rhythm": []},
    {"code": "IFV", "kind": "i", "group": "staff", "name": {"zh": "事實驗證", "en": "Fact Verification"}, "seats": 3, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "簽圖與事實", "en": "Sign figures and facts"}, "week": [{"zh": "8 月起週日看待簽", "en": "From Aug, Sun: check items awaiting signature"}], "hrs": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "peak": [], "nodes": {"2027-09": ["N27"]}, "tabs": [], "folders": [], "backup": "IGP", "fit": [], "rhythm": [], "note": {"zh": "Wet、Dry、Hardware 各一；容量待確認 SCH-4", "en": "One each for Wet, Dry, Hardware; capacity to be confirmed (SCH-4)"}},
    {"code": "IKS", "kind": "i", "group": "staff", "name": {"zh": "同意簽核與未成年許可", "en": "Consent Sign-off"}, "seats": 2, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "簽 K；管未成年許可與受限媒體", "en": "Sign K; manage minors' permissions and restricted media"}, "week": [{"zh": "週日看待老師簽", "en": "Sun: check items awaiting instructor signature"}, {"zh": "教育場次的現場拍攝安排", "en": "On-site filming arrangements for education sessions"}], "hrs": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "peak": [], "nodes": {"2027-09": ["N25"]}, "tabs": [], "folders": ["GEMS 2027 Ops/Consent Originals", "GEMS 2027 Ops/Consent Originals/Minor Permissions", "GEMS 2027 Ops/Restricted Media"], "backup": "OPS", "fit": [], "rhythm": []},
    {"code": "IAV", "kind": "i", "group": "staff", "name": {"zh": "Advisor 驗收與主責", "en": "Advisor Verification"}, "seats": 2, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "範圍確認、階段驗收、書面結果", "en": "Scope confirmation, stage review, written results"}, "week": [{"zh": "每月讀月報", "en": "Read monthly reports each month"}, {"zh": "階段末驗收", "en": "End-of-stage assessment"}], "hrs": [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5], "peak": [], "nodes": {"2027-03": ["N11"], "2027-06": ["N17"], "2027-08": ["N23"]}, "tabs": ["Hub.Advisor Deliverables", "OpsHub.ADV_STAGE", "OpsHub.ADV_MONTH", "OpsHub.ADV_STATE", "OpsHub.ADV_LOG"], "folders": ["60 Advisors", "60 Advisors/_Templates", "GEMS 2027 Ops/Advisors"], "backup": "PI", "fit": [], "rhythm": [], "note": {"zh": "人選待決定 T11", "en": "Appointee to be decided (T11)"}},
    {"code": "IAC", "kind": "i", "group": "staff", "name": {"zh": "內部紀錄負責人", "en": "Internal Records Owner"}, "seats": 1, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "老師專用的內部紀錄（只有成人，內容不公開）", "en": "Instructor-only internal records (adults only, not public)"}, "week": [{"zh": "週一看內部紀錄", "en": "Mon: check internal records"}, {"zh": "每月全掃", "en": "Full sweep monthly"}], "hrs": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "peak": [], "nodes": {}, "tabs": ["OpsHub"], "folders": ["GEMS 2027 Ops/Accountability"], "backup": "PI", "fit": [], "rhythm": [], "note": {"zh": "待指定 D-005。學生支援只限「提醒」，不看紀錄", "en": "To be assigned (D-005). Student support is limited to reminders, with no access to records"}},
    {"code": "ISC", "kind": "i", "group": "staff", "name": {"zh": "安全聯絡人", "en": "Safety Contact"}, "seats": 3, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "接收回報，24 小時內回覆", "en": "Receive reports and reply within 24 hours"}, "week": [{"zh": "看回報頻道與表單", "en": "Check the report channel and form"}], "hrs": [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], "peak": [], "nodes": {}, "tabs": [], "folders": [], "backup": "ISC", "fit": [], "rhythm": [], "note": {"zh": "至少一位不是 PI，不向 PI 報告的接收人待決定（藍圖第 13 節）", "en": "At least one recipient who is not the PI and does not report to the PI, to be decided (blueprint section 13)"}},
    {"code": "IMD", "kind": "i", "group": "staff", "name": {"zh": "Discord 版務", "en": "Discord Moderator"}, "seats": 3, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "刪訊息、禁言、處理照片牆誤發（只有成人）", "en": "Delete messages, mute, handle gallery misposts (adults only)"}, "week": [{"zh": "看伺服器紀錄", "en": "Check server logs"}], "hrs": [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], "peak": [], "nodes": {}, "tabs": [], "folders": [], "backup": "ISC", "fit": [], "rhythm": []},
    {"code": "OPS", "kind": "i", "group": "staff", "name": {"zh": "Ops", "en": "Ops"}, "seats": 2, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "Roster、Drive 與 Discord 帳務、Archive、下單", "en": "Roster, Drive and Discord admin, Archive, ordering"}, "week": [{"zh": "週一 Roster 與 Purchases", "en": "Mon: Roster and Purchases"}, {"zh": "週日貼 AI 摘要", "en": "Sun: post AI summary"}, {"zh": "每月匯出 Hours", "en": "Export Hours monthly"}], "hrs": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], "peak": [], "nodes": {"2026-11": ["N00"], "2027-03": ["N11"], "2027-09": ["N24"], "2027-11": ["N35"]}, "tabs": ["OpsHub.Roster_Full", "Hub.Roster", "OpsHub.Hours", "ArchiveManifest.Batches", "OpsHub.AI_Digest"], "folders": ["00 Start Here", "90 Archive", "GEMS 2027 Ops", "GEMS 2027 Ops/Official Documents"], "backup": "OBG", "fit": [], "rhythm": []},
    {"code": "OBG", "kind": "i", "group": "staff", "name": {"zh": "預算與採購", "en": "Budget and Purchasing"}, "seats": 1, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "核准、下單、報帳；付款資料只在這裡", "en": "Approve, order, reconcile; payment details are kept here only"}, "week": [{"zh": "週一處理 Purchases", "en": "Mon: handle Purchases"}], "hrs": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "peak": [], "nodes": {"2027-04": ["N10"]}, "tabs": ["Hub.Purchases"], "folders": ["GEMS 2027 Ops/Finance"], "backup": "OPS", "fit": [], "rhythm": [], "note": {"zh": "核准門檻 H-08 待決定", "en": "Approval threshold to be decided (H-08)"}},
    {"code": "ITP", "kind": "i", "group": "staff", "name": {"zh": "範本與腳本", "en": "Templates and Scripts"}, "seats": 1, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "範本、AI 工作、photo_index.gs、資料品質", "en": "Templates, AI work, photo_index.gs, data quality"}, "week": [{"zh": "週日看資料品質掃描", "en": "Sun: check the data quality scan"}], "hrs": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "peak": [], "nodes": {}, "tabs": [], "folders": ["00 Start Here/Templates", "GEMS 2027 Ops/_Templates"], "backup": "OPS", "fit": [], "rhythm": [], "note": {"zh": "photo_index.gs 由 PI 本人授權", "en": "photo_index.gs is authorised by the PI personally"}},
    {"code": "IDV", "kind": "i", "group": "staff", "name": {"zh": "專心開發", "en": "Development Only"}, "seats": 4, "sec": 0, "when": {"zh": "全年", "en": "Year-round"}, "own": {"zh": "不分配管理職責", "en": "No admin duties assigned"}, "week": [{"zh": "帶組內研究", "en": "Lead research within the group"}], "hrs": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "peak": [], "nodes": {}, "tabs": [], "folders": [], "backup": "IGP", "fit": [], "rhythm": [], "note": {"zh": "席位數是網站的提案，待追認 SITE-1", "en": "Seat count is a proposal from the site, awaiting ratification (SITE-1)"}}
  ],
  handoffs: [
    {"a": "全隊", "b": "PHO", "what": {"zh": "照片貼文", "en": "Photo posts"}, "ids": "gallery", "how": {"zh": "有照片時", "en": "When there are photos"}},
    {"a": "PHO", "b": "MDL", "what": {"zh": "歸檔好的 M", "en": "Filed Ms"}, "ids": "M", "how": {"zh": "週日", "en": "Sun"}},
    {"a": "PHO", "b": "KCO", "what": {"zh": "待 K 清單", "en": "Awaiting-K list"}, "ids": "M、K", "how": {"zh": "週日", "en": "Sun"}},
    {"a": "MDL", "b": "FIG", "what": {"zh": "精選與 Wiki 候選", "en": "Picks and Wiki candidates"}, "ids": "M", "how": {"zh": "每月", "en": "Monthly"}},
    {"a": "MDL", "b": "VID", "what": {"zh": "影片候選", "en": "Video candidates"}, "ids": "M", "how": {"zh": "每月", "en": "Monthly"}},
    {"a": "TSK", "b": "MDL", "what": {"zh": "缺的 DBTL 階段", "en": "Missing DBTL stages"}, "ids": "T", "how": {"zh": "每月", "en": "Monthly"}},
    {"a": "KCO", "b": "HPL", "what": {"zh": "待確認的同意", "en": "Consent awaiting confirmation"}, "ids": "K", "how": {"zh": "週日", "en": "Sun"}},
    {"a": "HPL", "b": "IKS", "what": {"zh": "待老師簽的同意", "en": "Consent awaiting instructor signature"}, "ids": "K", "how": {"zh": "週日", "en": "Sun"}},
    {"a": "IKS", "b": "WKL", "what": {"zh": "可發布的結果", "en": "Results ready to publish"}, "ids": "K", "how": {"zh": "簽後", "en": "After signing"}},
    {"a": "HPL", "b": "ATT", "what": {"zh": "外部貢獻者", "en": "External contributors"}, "ids": "I、K", "how": {"zh": "9 月起每週", "en": "Weekly from Sep"}, "m": [10, 11]},
    {"a": "ATT", "b": "TL", "what": {"zh": "Attribution 定稿", "en": "Final Attribution"}, "ids": {"zh": "表", "en": "Table"}, "how": {"zh": "N31 前", "en": "Before N31"}, "m": [10, 11]},
    {"a": "EDU", "b": "IKS", "what": {"zh": "場次與許可需求", "en": "Session and permission needs"}, "ids": "I", "how": {"zh": "場次前", "en": "Before the session"}},
    {"a": "OUT", "b": "HPL", "what": {"zh": "活動紀錄", "en": "Event record"}, "ids": "I", "how": {"zh": "活動後 2 週", "en": "2 weeks after the event"}},
    {"a": "EDU", "b": "TRN", "what": {"zh": "教材中英對照", "en": "Bilingual teaching materials"}, "ids": "I", "how": {"zh": "場次前", "en": "Before the session"}},
    {"a": "TSK", "b": "WL", "what": {"zh": "Wet 任務狀態", "en": "Wet task status"}, "ids": "T", "how": {"zh": "週會前", "en": "Before weekly meeting"}},
    {"a": "TSK", "b": "DL", "what": {"zh": "Dry 任務狀態", "en": "Dry task status"}, "ids": "T", "how": {"zh": "週會前", "en": "Before weekly meeting"}},
    {"a": "TSK", "b": "HWL", "what": {"zh": "Hardware 任務狀態", "en": "Hardware task status"}, "ids": "T", "how": {"zh": "週會前", "en": "Before weekly meeting"}},
    {"a": "WL", "b": "IDT", "what": {"zh": "定案的 Construct", "en": "Finalised Construct"}, "ids": "C", "how": {"zh": "N09 前", "en": "Before N09"}, "m": [4]},
    {"a": "IDT", "b": "OBG", "what": {"zh": "可下單的訂單", "en": "Orderable orders"}, "ids": "IDT、B", "how": {"zh": "N10、週一", "en": "N10, Mon"}, "m": [5, 5, 6, 7, 8, 9, 10]},
    {"a": "INV", "b": "OBG", "what": {"zh": "請購", "en": "Purchase request"}, "ids": "B", "how": {"zh": "週一", "en": "Mon"}},
    {"a": "LAB", "b": "ILB", "what": {"zh": "Run 指標與現場狀況", "en": "Run metrics and on-site situation"}, "ids": "R", "how": {"zh": "週六", "en": "Sat"}},
    {"a": "SFT", "b": "ILB", "what": {"zh": "Safety Register", "en": "Safety Register"}, "ids": "INC", "how": {"zh": "週六", "en": "Sat"}},
    {"a": "SFT", "b": "TL", "what": {"zh": "Safety Form 草稿", "en": "Safety Form draft"}, "ids": {"zh": "表", "en": "Table"}, "how": {"zh": "N15、N28", "en": "N15、N28"}, "m": [7, 10]},
    {"a": "WL", "b": "REG", "what": {"zh": "part 清單", "en": "Part list"}, "ids": "C", "how": {"zh": "4 月起", "en": "From Apr"}, "m": [5, 6, 7, 8, 9, 10, 11]},
    {"a": "REG", "b": "TL", "what": {"zh": "Registry 核對結果", "en": "Registry cross-check result"}, "ids": {"zh": "表", "en": "Table"}, "how": {"zh": "N31 前", "en": "Before N31"}, "m": [10, 11]},
    {"a": "LAB", "b": "FCT", "what": {"zh": "有結果的 Run", "en": "Runs with results"}, "ids": "R、V", "how": {"zh": "8 月起", "en": "From Aug"}, "m": [9, 10, 11]},
    {"a": "FCT", "b": "XCK", "what": {"zh": "待查的事實", "en": "Facts to check"}, "ids": "V", "how": {"zh": "週一", "en": "Mon"}},
    {"a": "FIG", "b": "XCK", "what": {"zh": "待查的圖", "en": "Figures to check"}, "ids": "F", "how": {"zh": "週一", "en": "Mon"}},
    {"a": "XCK", "b": "XCP", "what": {"zh": "查核佇列", "en": "Cross-check queue"}, "ids": "F、V", "how": {"zh": "週一", "en": "Mon"}},
    {"a": "XCP", "b": "IFV", "what": {"zh": "已查核待簽", "en": "Cross-checked, awaiting signature"}, "ids": "F、V", "how": {"zh": "3 天內", "en": "Within 3 days"}},
    {"a": "IFV", "b": "WKL", "what": {"zh": "可上線", "en": "Ready to go live"}, "ids": "F、V", "how": {"zh": "週日", "en": "Sun"}},
    {"a": "PGO", "b": "WKL", "what": {"zh": "頁面狀態", "en": "Page status"}, "ids": "W", "how": {"zh": "8 月底起每天", "en": "Daily from late Aug"}, "m": [9, 10, 11]},
    {"a": "CDO", "b": "WKD", "what": {"zh": "實作完成", "en": "Build complete"}, "ids": "W、X", "how": {"zh": "衝刺期", "en": "Crunch period"}, "m": [9, 10, 11]},
    {"a": "TRN", "b": "PGO", "what": {"zh": "改好的英文", "en": "Edited English"}, "ids": "W", "how": {"zh": "週六", "en": "Sat"}},
    {"a": "WKD", "b": "WKL", "what": {"zh": "Issues 分流", "en": "Issues triage"}, "ids": "X", "how": {"zh": "衝刺每天", "en": "Daily during crunch"}, "m": [9, 10, 11]},
    {"a": "WKL", "b": "TL", "what": {"zh": "Freeze 頁面核對", "en": "Freeze page cross-check"}, "ids": "W", "how": {"zh": "N31", "en": "N31"}, "m": [10, 11]},
    {"a": "ART", "b": "VID", "what": {"zh": "主視覺素材", "en": "Key visual assets"}, "ids": "N22", "how": {"zh": "8 月", "en": "Aug"}, "m": [9]},
    {"a": "ART", "b": "OUT", "what": {"zh": "展板", "en": "Display board"}, "ids": "N34", "how": {"zh": "10 月", "en": "Oct"}, "m": [11]},
    {"a": "VID", "b": "KCO", "what": {"zh": "影片要用的人臉清單", "en": "List of faces used in videos"}, "ids": "M、K", "how": {"zh": "N20、N32 前", "en": "Before N20 and N32"}, "m": [8, 11]},
    {"a": "QAB", "b": "IMK", "what": {"zh": "題庫與答題人", "en": "Question bank and answerers"}, "ids": "Q", "how": {"zh": "Mock 前", "en": "Before the mock"}, "m": [10, 11]},
    {"a": "CAL", "b": "TL", "what": {"zh": "下週節點", "en": "Next week's nodes"}, "ids": "N", "how": {"zh": "週日", "en": "Sun"}},
    {"a": "CAL", "b": "OPS", "what": {"zh": "日期變更", "en": "Date changes"}, "ids": "N", "how": {"zh": "有變動時", "en": "When something changes"}},
    {"a": "DIS", "b": "IMD", "what": {"zh": "需要成人處理的貼文", "en": "Posts needing an adult"}, "ids": {"zh": "無紀錄", "en": "No record"}, "how": {"zh": "當下", "en": "Immediately"}},
    {"a": "AWT", "b": "IAV", "what": {"zh": "月報與階段產出", "en": "Monthly report and stage outputs"}, "ids": "A", "how": {"zh": "每月、階段末", "en": "Monthly, end of stage"}},
    {"a": "ADR", "b": "IAV", "what": {"zh": "月報與階段產出", "en": "Monthly report and stage outputs"}, "ids": "A", "how": {"zh": "每月、階段末", "en": "Monthly, end of stage"}},
    {"a": "AHP", "b": "IAV", "what": {"zh": "月報與階段產出", "en": "Monthly report and stage outputs"}, "ids": "A", "how": {"zh": "每月、階段末", "en": "Monthly, end of stage"}},
    {"a": "AXT", "b": "IAV", "what": {"zh": "月報與階段產出", "en": "Monthly report and stage outputs"}, "ids": "A", "how": {"zh": "每月、階段末", "en": "Monthly, end of stage"}},
    {"a": "AWT", "b": "WL", "what": {"zh": "審查紀錄（不是放行）", "en": "Review notes (not approval)"}, "ids": "A", "how": {"zh": "具名範圍", "en": "Named scope"}},
    {"a": "ADR", "b": "DL", "what": {"zh": "審查紀錄（不是放行）", "en": "Review notes (not approval)"}, "ids": "A", "how": {"zh": "具名範圍", "en": "Named scope"}},
    {"a": "AHP", "b": "HPL", "what": {"zh": "審查紀錄（不是放行）", "en": "Review notes (not approval)"}, "ids": "A", "how": {"zh": "具名範圍", "en": "Named scope"}},
    {"a": "AXT", "b": "WKL", "what": {"zh": "審查紀錄（不是放行）", "en": "Review notes (not approval)"}, "ids": "A", "how": {"zh": "具名範圍", "en": "Named scope"}},
    {"a": "OPS", "b": "PI", "what": {"zh": "例外摘要", "en": "Exceptions summary"}, "ids": "AI_Digest", "how": {"zh": "週日", "en": "Sun"}}
  ],
  stages: [{"s": "S1", "name": {"zh": "探路者", "en": "Pathfinder"}, "when": {"zh": "11 月底到 1/30", "en": "Late Nov to 30 Jan"}, "out": {"zh": "至少 1 份候選題目報告，或與 instructor 的前期研究", "en": "At least 1 candidate topic report, or early research with an instructor"}, "where": "60 Advisors/<A01>/S1 Topic"}, {"s": "S2", "name": {"zh": "制度建立者", "en": "System builder"}, "when": {"zh": "2 月中到 3 月底", "en": "Mid Feb to end Mar"}, "out": {"zh": "至少 1 份 101，加至少 1 場實體 workshop", "en": "At least 1 101 guide, plus at least 1 in-person workshop"}, "where": "60 Advisors/<A01>/S2 Training"}, {"s": "S3", "name": {"zh": "TA", "en": "TA"}, "when": {"zh": "4 月到暑假前", "en": "Apr to before summer"}, "out": {"zh": "主導至少 1 項 task 或 research track，留審查紀錄", "en": "Lead at least 1 task or research track and leave review notes"}, "where": "60 Advisors/<A01>/S3 Design"}, {"s": "S4", "name": {"zh": "TA，工作線負責人", "en": "TA, workstream owner"}, "when": {"zh": "7/1 到 8/10", "en": "1 Jul to 10 Aug"}, "out": {"zh": "主導 1 條工作線：wiki 單一 task、一組數據圖表、或 video script", "en": "Lead 1 workstream: a single wiki task, a set of data charts, or a video script"}, "where": "60 Advisors/<A01>/S4 Workline"}, {"s": "S5", "name": {"zh": "把關者", "en": "Gatekeeper"}, "when": {"zh": "8 月底到 freeze 後", "en": "Late Aug to after freeze"}, "out": {"zh": "Freeze 前一份具名 checklist；freeze 後至少 2 次模擬 judging", "en": "A named checklist before freeze; at least 2 mock judging sessions after freeze"}, "where": "60 Advisors/<A01>/S5 Convergence"}],
  load: [{"m": "2026-11", "h": 0, "cap": 90.0, "u": 0.0}, {"m": "2026-12", "h": 2.5, "cap": 90.0, "u": 0.03}, {"m": "2027-01", "h": 2.5, "cap": 90.0, "u": 0.03}, {"m": "2027-02", "h": 3.5, "cap": 90.0, "u": 0.04}, {"m": "2027-03", "h": 44.5, "cap": 90.0, "u": 0.49}, {"m": "2027-04", "h": 46.5, "cap": 90.0, "u": 0.52}, {"m": "2027-05", "h": 46.5, "cap": 90.0, "u": 0.52}, {"m": "2027-06", "h": 57.5, "cap": 90.0, "u": 0.64}, {"m": "2027-07", "h": 71.0, "cap": 150.0, "u": 0.47}, {"m": "2027-08", "h": 97.0, "cap": 150.0, "u": 0.65}, {"m": "2027-09", "h": 122.5, "cap": 150.0, "u": 0.82}, {"m": "2027-10", "h": 95.0, "cap": 150.0, "u": 0.63}, {"m": "2027-11", "h": 16.0, "cap": 90.0, "u": 0.18}],
  chores: [{"t": {"zh": "Hub Tasks 更新自己的列", "en": "Update own rows in Hub Tasks"}, "who": {"zh": "全隊學生", "en": "All students"}, "min": 5}, {"t": {"zh": "gallery 發照片", "en": "Post photos to the gallery"}, "who": {"zh": "有照片時", "en": "When there are photos"}, "min": 1}, {"t": {"zh": "組別週會書記輪值", "en": "Group weekly meeting minutes rota"}, "who": {"zh": "組內輪值", "en": "Rota within the group"}, "min": 3}, {"t": {"zh": "Run 紀錄", "en": "Run records"}, "who": {"zh": "有做實驗或運算", "en": "When running experiments or computations"}, "min": 15}]
};

// ---------- iGEM Village: places, events, photo system. Art lives in village.js. ----------
// Districts group the roles in PEOPLE; buildings are a role or a function. A proposal, like the roles.
const VILLAGE_DISTRICTS = [
  { id: "wet", c: "teal", name: { zh: "濕實驗巷", en: "Wetlab Lane" }, blurb: { zh: "實驗、安全、物資、訂單、Registry", en: "Bench work, safety, stock, orders, Registry" } },
  { id: "dry", c: "green", name: { zh: "乾實驗坡", en: "Drylab Hill" }, blurb: { zh: "模型、程式、文獻、Task", en: "Models, code, literature, Tasks" } },
  { id: "hw", c: "orange", name: { zh: "硬體院", en: "Hardware Yard" }, blurb: { zh: "CAD、組裝、測試", en: "CAD, build, test" } },
  { id: "hp", c: "indigo", name: { zh: "HP 廣場", en: "Human Practices Square" }, blurb: { zh: "互動、同意、教育、活動", en: "Interactions, consent, education, events" } },
  { id: "wiki", c: "blue", name: { zh: "Wiki 與設計街", en: "Wiki and Design Street" }, blurb: { zh: "頁面、圖、事實、Attribution、美術", en: "Pages, figures, facts, Attribution, art" } },
  { id: "media", c: "pink", name: { zh: "影像坊", en: "Media Quarter" }, blurb: { zh: "照片、影片、精選", en: "Photos, footage, picks" } },
  { id: "ops", c: "ink", name: { zh: "市政區", en: "Ops and Town Hall" }, blurb: { zh: "送件、行事曆、老師與行政", en: "Submissions, calendar, instructors, Ops" } },
  { id: "adv", c: "gold", name: { zh: "顧問路", en: "Advisor Row" }, blurb: { zh: "具名範圍，每階段重新確認", en: "Named scope, agreed again each stage" } }
];

const VILLAGE_BUILDINGS = [
  { id: "lab", d: "wet", roles: ["LAB"], name: { zh: "實驗室", en: "The Lab" } },
  { id: "wethouse", d: "wet", roles: ["WL"], name: { zh: "Wet 工坊", en: "Wet Workshop" } },
  { id: "safety", d: "wet", roles: ["SFT"], name: { zh: "安全站", en: "Safety Post" } },
  { id: "store", d: "wet", roles: ["INV"], name: { zh: "倉庫", en: "Storeroom" } },
  { id: "orders", d: "wet", roles: ["IDT"], name: { zh: "訂單櫃台", en: "Order Desk" } },
  { id: "registry", d: "wet", roles: ["REG"], name: { zh: "登記所", en: "Registry Office" } },

  { id: "dryhouse", d: "dry", roles: ["DL"], name: { zh: "Dry 工坊", en: "Dry Workshop" } },
  { id: "compute", d: "dry", roles: ["DL"], heat: ["DL"], name: { zh: "運算小屋", en: "Compute Hut" },
    fn: { zh: "一個功能，不是席位。運算 Run 都記在這裡，程式碼在團隊 GitHub，Drive 只放連結。", en: "A function, not a seat. Compute Runs are logged here; code lives on the team GitHub and Drive holds links." },
    files: ["RunLog.Runs", "32 Drylab/Projects/<MD01 or SW01>/<ID>_RunLog"] },
  { id: "library", d: "dry", roles: ["DL"], heat: ["DL"], name: { zh: "文獻館", en: "Literature Library" },
    fn: { zh: "全隊一份 Research 工作簿，HP 案例也在這裡的分頁。", en: "One Research workbook for the team; HP cases are a tab in it." },
    files: ["Research.Papers", "Research.HPCases", "00 Start Here/Research"] },
  { id: "tasks", d: "dry", roles: ["TSK"], name: { zh: "Task 工作檯", en: "Task Bench" } },

  { id: "hwhouse", d: "hw", roles: ["HWL"], name: { zh: "Hardware 工坊", en: "Hardware Workshop" } },
  { id: "testshed", d: "hw", roles: ["HWL"], heat: ["HWL"], name: { zh: "測試棚", en: "Test Shed" },
    fn: { zh: "每個裝置一個專案資料夾：CAD、組裝、測試。裝置每年換，這間每年都在。", en: "One project folder per device: CAD, build, test. Devices change; this shed stays." },
    files: ["33 Hardware/Projects/<H01> <device>", "<ID>_RunLog"] },

  { id: "hphouse", d: "hp", roles: ["HPL"], name: { zh: "HP 之家", en: "HP House" } },
  { id: "consent", d: "hp", roles: ["KCO"], name: { zh: "同意櫃台", en: "Consent Desk" } },
  { id: "school", d: "hp", roles: ["EDU"], name: { zh: "教室", en: "Schoolroom" } },
  { id: "stage", d: "hp", roles: ["OUT"], name: { zh: "活動舞台", en: "Event Stage" } },
  { id: "notice", d: "hp", roles: ["DIS"], name: { zh: "佈告欄", en: "Notice Board" } },

  { id: "wikihall", d: "wiki", roles: ["WKL", "WKD", "CDO"], name: { zh: "Wiki 大廳", en: "Wiki Hall" } },
  { id: "facts", d: "wiki", roles: ["FCT", "XCK", "XCP"], name: { zh: "事實檔案室", en: "Fact Archive" } },
  { id: "figures", d: "wiki", roles: ["FIG"], name: { zh: "圖表工坊", en: "Figure Workshop" } },
  { id: "credits", d: "wiki", roles: ["ATT"], name: { zh: "致謝廳", en: "Credits Hall" } },
  { id: "translate", d: "wiki", roles: ["TRN"], name: { zh: "翻譯桌", en: "Translation Desk" } },
  { id: "pagerow", d: "wiki", roles: ["PGO"], name: { zh: "頁面排屋", en: "Page Row" } },
  { id: "qabank", d: "wiki", roles: ["QAB"], name: { zh: "題庫塔", en: "Question Tower" } },
  { id: "art", d: "wiki", roles: ["ART"], name: { zh: "美術屋", en: "Art House" } },

  { id: "gallery", d: "media", roles: ["PHO"], heat: ["PHO", "MDL"], name: { zh: "照片牆廣場", en: "Gallery Square" },
    fn: { zh: "全隊發照片的入口：Discord 論壇 照片牆-gallery，一件事一篇，手機上約 30 秒（估算）。不是席位，人人都會路過。", en: "Where everyone posts photos: the Discord forum gallery, one post per event, about 30 seconds on a phone (estimate). Not a seat; everyone passes through." },
    files: ["照片牆-gallery", "40 Media/_Inbox"] },
  { id: "darkroom", d: "media", roles: ["PHO"], name: { zh: "暗房", en: "Darkroom" } },
  { id: "archive", d: "media", roles: ["MDL"], name: { zh: "影像檔案館", en: "Media Archive" } },
  { id: "video", d: "media", roles: ["VID"], name: { zh: "影片屋", en: "Video House" } },

  { id: "hub", d: "ops", roles: [], heat: ["TL", "CAL", "WKL", "LAB", "PHO", "HPL"], name: { zh: "Hub 水井", en: "The Hub Well" },
    fn: { zh: "全村打水的地方：一份 Hub，18 個分頁，每個分頁有名字、有讀者。有 ID 的紀錄都從這裡來。", en: "Where the whole village draws from: one Hub with 18 tabs, each with an owner and a reader. Every record with an ID comes from here." },
    files: ["00 Start Here/GEMS 2027 Hub"] },
  { id: "clock", d: "ops", roles: ["CAL"], name: { zh: "鐘樓", en: "Clock Tower" } },
  { id: "post", d: "ops", roles: ["TL"], name: { zh: "送件處", en: "Submissions Office" } },
  { id: "pi", d: "ops", roles: ["PI"], name: { zh: "PI 小屋", en: "PI Cottage" } },
  { id: "teach", d: "ops", roles: ["ITL", "IGP", "ILB", "IMK"], name: { zh: "訓練與組別", en: "Teaching Hall" } },
  { id: "sign", d: "ops", roles: ["IFV", "IKS", "IAV"], name: { zh: "簽核室", en: "Signing Room" } },
  { id: "care", d: "ops", roles: ["IAC", "ISC", "IMD"], name: { zh: "安全與版務", en: "Care Room" } },
  { id: "opsoffice", d: "ops", roles: ["OPS", "OBG", "ITP"], name: { zh: "行政室", en: "Ops Office" } },
  { id: "devbench", d: "ops", roles: ["IDV"], name: { zh: "專心開發", en: "Development Shed" } },

  { id: "advwet", d: "adv", roles: ["AWT"], name: { zh: "Wet 範圍", en: "Wet Scope" } },
  { id: "advdry", d: "adv", roles: ["ADR"], name: { zh: "Dry 範圍", en: "Dry Scope" } },
  { id: "advhp", d: "adv", roles: ["AHP"], name: { zh: "HP 範圍", en: "HP Scope" } },
  { id: "advcross", d: "adv", roles: ["AXT"], name: { zh: "跨組與制度範圍", en: "Cross-team Scope" } },
  { id: "advlead", d: "adv", roles: ["LAD"], name: { zh: "Lead Advisor（可從缺）", en: "Lead Advisor (may stay empty)" } },

  { id: "station", d: "ops", roles: [], heat: ["TL", "OUT"], name: { zh: "巴黎車站", en: "Paris Station" },
    fn: { zh: "全隊團進團出（日期暫定）。走了之後村子會安靜一週。", en: "The whole team travels together (dates provisional). The village goes quiet for a week." },
    files: ["50 Deliverables/Jamboree"] }
];

// Key dates. b = the building that flags it. Dates with ? are estimates or placeholders, as elsewhere on this site.
const VILLAGE_EVENTS = [
  { d: "2026-11-25", b: "opsoffice", n: "N00", t: { zh: "系統完成", en: "System complete" } },
  { d: "2026-11-29", b: "notice", n: "N01", t: { zh: "Discord 開啟，選題研究開始", en: "Discord opens, topic research starts" } },
  { d: "2026-12-26", b: "teach", n: "N02", t: { zh: "First Class（日期待決定）", en: "First Class (date to be decided)" } },
  { d: "2027-01-30", b: "pi", n: "N04", big: 1, t: { zh: "1/30 Topic PK，定題", en: "30 Jan Topic PK, topic decided" } },
  { d: "2027-02-13", b: "teach", n: "N05", t: { zh: "春節後密集訓練開始", en: "Training weekends start after Lunar New Year" } },
  { d: "2027-03-13", b: "tasks", n: "N07", big: 1, t: { zh: "Task Group 開始，範圍閘門", en: "Task groups start, scope gate" } },
  { d: "2027-03-18", b: "post", n: "N08", est: 1, t: { zh: "iGEM Stage I Regular?", en: "iGEM Stage I Regular?" } },
  { d: "2027-04-01", b: "orders", n: "N10", big: 1, t: { zh: "4/1 IDT 訂單開始送出", en: "1 Apr IDT orders go out" } },
  { d: "2027-06-15", b: "wikihall", n: "N14", t: { zh: "Wiki 站台與事實 v1", en: "Wiki site and Facts v1" } },
  { d: "2027-07-01", b: "lab", n: "N18", big: 1, t: { zh: "暑假 Mandatory：二、四、六", en: "Summer mandatory: Tue, Thu, Sat" } },
  { d: "2027-07-29", b: "video", n: "N20", est: 1, t: { zh: "Promo Video?", en: "Promo Video?" } },
  { d: "2027-08-21", b: "art", n: "N22", t: { zh: "主視覺定稿", en: "Key visual final" } },
  { d: "2027-08-28", b: "wikihall", n: "N23", big: 1, t: { zh: "進入衝刺模式，Wiki 大廳徹夜亮燈", en: "Crunch mode: the Wiki Hall stays lit" } },
  { d: "2027-09-08", b: "consent", n: "N25", t: { zh: "同意全數結清", en: "All consent settled" } },
  { d: "2027-09-15", b: "lab", n: "N27", t: { zh: "實驗截止，圖定稿", en: "Experiments end, figures final" } },
  { d: "2027-09-29", b: "wikihall", n: "N30", t: { zh: "全站最後推送", en: "Last full push" } },
  { d: "2027-10-06", b: "wikihall", n: "N31", est: 1, big: 1, t: { zh: "Wiki Freeze 10/6–13?", en: "Wiki Freeze 6–13 Oct?" } },
  { d: "2027-10-26", b: "station", n: "N34", est: 1, big: 1, t: { zh: "出發去巴黎?", en: "Departure for Paris?" } },
  { d: "2027-11-03", b: "station", n: "N34", est: 1, t: { zh: "回到村子?", en: "Back in the village?" } },
  { d: "2027-11-20", b: "archive", n: "N35", t: { zh: "結案與交接", en: "Close-out and handover" } }
];

const VILLAGE_FIND = [
  { zh: "我喜歡畫圖", en: "I like drawing", q: ["ART", "FIG"] },
  { zh: "我會寫程式", en: "I can code", q: ["DL", "WKD", "CDO"] },
  { zh: "我常待實驗室", en: "I’m always in the lab", q: ["LAB", "SFT", "WL"] },
  { zh: "我很細心", en: "I’m careful", q: ["CAL", "INV", "IDT", "REG", "ATT", "KCO", "FCT"] },
  { zh: "我敢跟大人講話", en: "I talk to adults", q: ["HPL", "OUT"] },
  { zh: "我愛拍照剪片", en: "I shoot and edit", q: ["PHO", "MDL", "VID"] },
  { zh: "我英文好", en: "My English is good", q: ["TRN", "TL", "WKL"] },
  { zh: "我愛動手做", en: "I build things", q: ["HWL"] }
];

const VILLAGE_CAT = {
  zh: "村貓。沒有席位，不擁有任何東西，也不用填 Hub。衝刺期會睡在 Wiki 大廳門口。", en: "The village cat. No seat, owns nothing, never fills in the Hub. In the crunch it sleeps on the Wiki Hall steps."
};

// The photo system, compact. Proposal: D-049 to D-053.
// ---------- Research: why, structure, dates, who, time, how leads are chosen ----------
// Every number comes from the lab's decisions/RESEARCH-SYSTEM.md. Process only: no project content, no names.
const RESEARCH_WHY = [
  { n: "0 / 5", t: { zh: "「這回答了哪個開放問題」", en: "“Which open question does this answer?”" }, d: { zh: "2026 研究範本裡這一欄 5 筆全空。「帶出什麼新問題」「還有誰該讀」也一樣。", en: "Blank in all 5 entries of the 2026 reading template. So were “what new question” and “who else should read this”." } },
  { n: { zh: "1 筆", en: "1 entry" }, t: { zh: "「讀了什麼，改變了什麼」", en: "“What we read, and what it changed”" }, d: { zh: "全季只有一筆這樣的紀錄，而且在 HP，不在研究。定題也沒有決策紀錄。", en: "One record all season, and it was in HP, not research. The topic choice left no decision record either." } },
  { n: { zh: "43 檔", en: "43 files" }, t: { zh: "傾倒一次就沒再開", en: "Dumped once, never reopened" }, d: { zh: "三個「一篇一夾」的文獻夾合計 43 個檔案，都是一次傳完。", en: "Three paper-per-folder libraries, 43 files between them, each uploaded in one go." } },
  { n: { zh: "0 個", en: "0" }, t: { zh: "團隊文獻庫", en: "Team libraries" }, d: { zh: "3 月教過文獻管理工具，匯出裡卻找不到任何一個庫。有一堂課，沒有一個先存在的地方。", en: "A reference tool was taught in March, yet the export holds no library at all. There was a class, but no place already waiting." } }
];

const RESEARCH_CHAIN = [
  { id: "RQ", name: "Research Questions", loc: "Research / Questions", d: { zh: "開季前就存在。每題必填「會改變什麼決定」，寫不出來就不立題。", en: "Exists before the season opens. Each question must state which decision it would change; if nobody can say, it is not opened." }, r: { zh: "研究組長與訓練主責老師，週六會前 10 分鐘", en: "Research Lead and lead training instructor, 10 minutes before Saturday’s meeting" } },
  { id: "L", name: "Paper Card", loc: "Research / Papers", d: { zh: "一篇一列，19 欄（學生填 18），10 分鐘。第 5 欄從下拉選 RQ：沒有 RQ 就沒有卡。", en: "One row per paper, 19 columns (students fill 18), 10 minutes. Column 5 picks an RQ from a dropdown: no RQ, no card." }, r: { zh: "各組組長，週會前", en: "Group leads, before the weekly meeting" } },
  { id: "D", name: "Decision", loc: "Hub / Decisions", d: { zh: "新增一欄「依據（RQ／L）」。這一格就是研究變成決定的憑證。", en: "One new column, “Basis (RQ/L)”. That cell is the proof that research became a decision." }, r: { zh: "會議書記填，0.5 分鐘", en: "Filled by the meeting scribe, 0.5 minutes" } }
];

const RESEARCH_AROUND = [
  { name: { zh: "共用文獻庫", en: "Shared library" }, loc: "_Inbox · _Rejected", d: { zh: "全隊只有一個庫，每篇先進 _Inbox。工具提案 Zotero 團隊群組，帳號與空間待 PI 確認。", en: "One library for the team; every paper enters _Inbox. Proposed tool: a Zotero team group, with account and storage awaiting the PI." } },
  { name: "Reading Notes", loc: "15 Research/Reading Notes/L###_slug", d: { zh: "只在卡填不下時才開，卡上必須有連結。", en: "Opened only when a card cannot hold it, and the card must link to it." } },
  { name: "Question Briefs", loc: "15 Research/Question Briefs/RQ##_slug", d: { zh: "一題的結論。結論是「不要做」時一定要寫，200 字內。", en: "A question’s conclusion. Required when the answer is “don’t do this”, in 200 characters or fewer." } },
  { name: "Impact Log", loc: "Research / Impact (RI)", d: { zh: "一件事一列，必須連到一個 D，老師週日確認。提案：事件隊內可見，評價留在 Ops。", en: "One row per event, tied to a D, confirmed by instructors on Sunday. Proposed: events visible to the team, evaluation stays in Ops." } },
  { name: { zh: "自動產生的參考文獻", en: "Generated reference list" }, loc: "refs.py → references-W###.md", d: { zh: "從 Papers、Facts、Figures 產生每頁清單。人不排清單。", en: "Built per page from Papers, Facts and Figures. Nobody assembles a list by hand." } }
];

const RESEARCH_DATES = [
  { n: "11/25", k: "N00", t: { zh: "這天之前要好", en: "Must be ready before this" }, c: "orange", items: [
    { zh: "10 題題目層 RQ 種進 Questions：PI 與老師寫，來不及先給 3 題", en: "10 topic-level RQs seeded in Questions, written by the PI and instructors; if time runs out, 3 first" },
    { zh: "每題都寫好「會改變什麼決定」", en: "Each one states which decision it would change" },
    { zh: "Research 工作簿已建", en: "The Research workbook is built" },
    { zh: "共用文獻庫已開，擁有者是成人帳號", en: "The shared library is open, owned by an adult account" }
  ] },
  { n: "11/29", k: "N01", t: { zh: "這天開始", en: "Starts this day" }, c: "teal", items: [
    { zh: "Discord 開啟，Online Topic Research 開始", en: "Discord opens and Online Topic Research begins" },
    { zh: "分流三選一：當天用 Discord 語音講一次並錄下來", en: "Three-way triage explained once that day on Discord voice, and recorded" },
    { zh: "每位學生第一週完成 1 張卡；第一張可讀綜述、政府報告或往年隊伍 wiki", en: "Each student finishes 1 card in week one; the first may be a review, a government report or a past team’s wiki" },
    { zh: "週日 digest 開始，研究組長由老師代行", en: "Sunday digest begins, with instructors acting as Research Lead" },
    { zh: "12/06 數三個數字：加入人數、完成卡數（目標 ≥ 名冊七成）、實際分鐘中位數", en: "On 6 Dec, count three things: who joined, cards finished (target at least 70% of the roster), and median real minutes" }
  ] }
];

const RESEARCH_MILES = [
  { d: { zh: "12/26", en: "26 Dec" }, n: "N02", t: { zh: "Journal club 開始：週會開頭 10 分鐘", en: "Journal club starts: first 10 minutes of the weekly meeting" } },
  { d: { zh: "1/2–1/23", en: "2–23 Jan" }, n: "N03", t: { zh: "進 PK 的題目至少 3 張卡，至少 1 張法規倫理或方法", en: "Each PK topic has at least 3 cards, at least 1 on regulation, ethics or method" } },
  { d: { zh: "1/30", en: "30 Jan" }, n: "N04", t: { zh: "Decision Record 的依據填 L 或 RQ", en: "The Decision Record’s basis cites an L or RQ" } },
  { d: { zh: "3/10", en: "10 Mar" }, n: "N06", t: { zh: "依影響證據選研究組長", en: "Research Lead chosen from impact evidence" } },
  { d: { zh: "6/15", en: "15 Jun" }, n: "N14", t: { zh: "refs.py 第一次試跑", en: "First trial run of refs.py" } },
  { d: { zh: "8/28", en: "28 Aug" }, n: "N23", t: { zh: "Journal club 停辦", en: "Journal club stops" } },
  { d: { zh: "9/15", en: "15 Sep" }, n: "N27", t: { zh: "RQ 停止新增，新問題走 Issues", en: "No new RQs; new questions go to Issues" } },
  { d: { zh: "9/29", en: "29 Sep" }, n: "N30", t: { zh: "通過條件：refs.py --strict 回傳 0", en: "Pass rule: refs.py --strict returns 0" } }
];

const RESEARCH_WHO = [
  { who: { zh: "一般學生", en: "Every student" }, what: { zh: "每週最多 1 張 Paper Card（上限，不是下限）；聽 journal club", en: "At most 1 Paper Card a week (a ceiling, not a floor); listens at journal club" }, when: { zh: "N01 起；N05–N07 與 N23 後不要求", en: "From N01; not required in N05–N07 or after N23" }, min: { zh: "前三張 75 分，之後 40–50 分；聽 10 分", en: "75 min for the first three, then 40–50; 10 to listen" } },
  { who: { zh: "研究組長 RSL（3/10 前老師代行）", en: "Research Lead, RSL (instructors act until 10 Mar)" }, what: { zh: "RQ 分流、排 journal club、發週日 digest、看「進讀中」", en: "Triages RQs, schedules journal club, posts the Sunday digest, watches the “reading” view" }, when: { zh: "週六會前 10 分鐘；週日", en: "10 minutes before Saturday’s meeting; Sunday" }, min: { zh: "60–150 分", en: "60–150 min" } },
  { who: { zh: "研究副組長 RSV", en: "Research Vice Lead, RSV" }, what: { zh: "清 _Inbox、去重、管 Open Library 命名；freeze 前跑 refs.py", en: "Clears _Inbox, removes duplicates, keeps Open Library names right; runs refs.py before freeze" }, when: { zh: "N01 起全年，尖峰 9 月", en: "From N01, all year, peak in September" }, min: { zh: "30–90 分", en: "30–90 min" } },
  { who: { zh: "訓練主責老師", en: "Lead training instructor" }, what: { zh: "N01–N06 代行研究組長全部工作；N07 起只留 RQ 會前 10 分鐘", en: "N01–N06: does the whole Research Lead job. From N07: only the 10 minutes before the meeting" }, when: { zh: "N01–N06 共 15 週，之後每週六", en: "15 weeks across N01–N06, then Saturdays" }, min: { zh: "60–150 分，N07 起 10 分", en: "60–150 min, then 10 from N07" } },
  { who: { zh: "老師", en: "Instructors" }, what: { zh: "確認 Impact：這個 D 真的因這張卡而改嗎", en: "Confirm Impact rows: did this D really change because of this card?" }, when: { zh: "週日", en: "Sunday" }, min: { zh: "10 分", en: "10 min" } },
  { who: { zh: "會議書記", en: "Meeting scribe" }, what: { zh: "決議引用研究時，填「依據（RQ／L）」", en: "Fills “Basis (RQ/L)” when a decision draws on research" }, when: { zh: "有決議時", en: "When a decision is made" }, min: { zh: "每次 0.5 分", en: "0.5 min each" } },
  { who: { zh: "圖表編輯、事實與術語（N07 前 RSV）", en: "Figure and fact editors (RSV before N07)" }, what: { zh: "看「需重繪」與「有可用數字」檢視，接成 F 和 V", en: "Work the “needs redraw” and “usable numbers” views into F and V" }, when: { zh: "有卡進來時", en: "When cards arrive" }, min: { zh: "算在各自角色內", en: "Within those roles" } },
  { who: { zh: "Wiki Lead 或事實與術語", en: "Wiki Lead or fact editor" }, what: { zh: "寫 wiki 時填第 19 欄「引用頁面」，唯一事後回填的欄", en: "Fills column 19, “cited on page”, while drafting: the only column filled afterwards" }, when: { zh: "Wiki draft 時", en: "While drafting the wiki" }, min: { zh: "算在各自角色內", en: "Within those roles" } }
];

const RESEARCH_TOTALS = [
  { n: { zh: "40.5 分", en: "40.5 min" }, t: { zh: "一篇論文走完七步", en: "One paper, all seven steps" } },
  { n: { zh: "11 分", en: "11 min" }, t: { zh: "其中行政：做卡 10 ＋路由 1", en: "Admin within that: card 10 + routing 1" } },
  { n: { zh: "75 分", en: "75 min" }, t: { zh: "前三張每張，含讀", en: "Each of your first three, reading included" } }
];

const RESEARCH_STEPS = [
  { step: { zh: "1 找到", en: "1 Find" }, what: { zh: "存進共用文獻庫的 _Inbox，不存在自己電腦", en: "Save to the shared library’s _Inbox, never to your own computer" }, min: { zh: "2 分", en: "2 min" }, who: { zh: "任何人", en: "Anyone" } },
  { step: { zh: "2 分流", en: "2 Triage" }, what: { zh: "只看標題摘要與圖，三選一：進讀（連到開放 RQ）／存參／丟（_Rejected）", en: "Title, abstract and figures only, then one of three: read (tied to an open RQ), keep for reference, or drop to _Rejected" }, min: { zh: "2 分", en: "2 min" }, who: { zh: "加進來的人", en: "Whoever added it" } },
  { step: { zh: "3 讀", en: "3 Read" }, what: { zh: "三遍法：標題摘要圖表結論；圖與結果；要照做才讀方法", en: "Three passes: title, abstract, figures, conclusion; then figures and results; methods only if you will follow them" }, min: { zh: "25 分（第一次誠實估 60–90 分）", en: "25 min (honestly 60–90 the first time)" }, who: { zh: "讀者", en: "The reader" } },
  { step: { zh: "4 做卡", en: "4 Card" }, what: { zh: "同一次坐下來填完 Papers 的一列", en: "Fill one Papers row in the same sitting" }, min: { zh: "10 分", en: "10 min" }, who: { zh: "同一人", en: "Same person" } },
  { step: { zh: "5 路由", en: "5 Route" }, what: { zh: "填建議誰看；有可用數字開 V；要用的圖記位置並標「需重繪」", en: "Name who should read it; open a V for a usable number; note where a figure sits and mark it “needs redraw”" }, min: { zh: "1 分", en: "1 min" }, who: { zh: "同一人", en: "Same person" } },
  { step: { zh: "6 兌現", en: "6 Cash in" }, what: { zh: "影響會議決議時，在 Hub Decisions 的「依據（RQ／L）」填上", en: "When it shapes a decision, fill “Basis (RQ/L)” in Hub Decisions" }, min: { zh: "0.5 分", en: "0.5 min" }, who: { zh: "會議書記", en: "Meeting scribe" } },
  { step: { zh: "7 被引用", en: "7 Cited" }, what: { zh: "不用做。refs.py 產生每頁的參考文獻", en: "Nothing to do. refs.py generates each page’s references" }, min: { zh: "0 分", en: "0 min" }, who: { zh: "腳本", en: "A script" } }
];

const RESEARCH_EVIDENCE = [
  { t: { zh: "相異 D 影響數", en: "Distinct Ds changed" }, d: { zh: "老師確認過的 Impact。算改變了幾個決定，不算讀了幾篇。", en: "Instructor-confirmed Impact. It counts decisions changed, not papers read." } },
  { t: { zh: "RQ 結案率", en: "RQs closed" }, d: { zh: "負責的 RQ 有多少走到「已回答」或「不要做」，而不是擱置。", en: "How many RQs they own reach “answered” or “don’t do this” instead of being shelved." } },
  { t: { zh: "別人用不用他的卡", en: "Whether others use their cards" }, d: { zh: "被「建議誰看」指到的人，有沒有真的開新卡或開 RQ。最難造假。", en: "Whether the people named under “who should read this” went on to open a card or an RQ. The hardest to fake." } }
];

const RESEARCH_FAIR = [
  { zh: "算相異 D 數，不算列數。", en: "Count distinct Ds, not rows." },
  { zh: "五類同權重：避雷和採納一樣算。", en: "Five types, equal weight: avoiding a trap counts the same as adopting a method." },
  { zh: "只有老師確認的列才算。", en: "Only rows an instructor confirmed count." },
  { zh: "七天異議期，由老師裁定。", en: "Seven days to object, and instructors rule." }
];

const RESEARCH_RULES = [
  { t: { zh: "分流先行", en: "Triage first" }, d: { zh: "只有連得到開放 RQ 的論文才拿 L。不做分流，就會變成每週 20 張卡、沒人讀、三週後死掉。", en: "Only a paper tied to an open RQ gets an L. Without triage you get 20 cards a week, no readers, and a dead sheet in three weeks." } },
  { t: { zh: "卡是列，不是檔", en: "A card is a row, not a file" }, d: { zh: "2026 活過一季的只有這種形狀：一份文件、固定表頭、多篇橫向比較。空白的格子要看得見才會被填。", en: "The one shape that lasted a season in 2026: one document, fixed headers, papers side by side. A blank cell only gets filled when it can be seen." } },
  { t: { zh: "表有壽命", en: "Sheets have a lifespan" }, d: { zh: "MethodCompare 在 N10 封存，journal club 在 N23 停辦，RQ 在 N27 後只讀不寫。", en: "MethodCompare is archived at N10, journal club stops at N23, and RQs are read-only after N27." } }
];

const RESEARCH_RIGHTS = [
  { zh: "付費全文只有在開放取用，或上傳者有合法取用權時，才放進封閉的文獻庫。Drive 與 wiki 永不放出版商 PDF 與原圖。", en: "A paywalled full text enters the closed library only if it is open access or the uploader has lawful access. Publisher PDFs and original figures never go on Drive or the wiki." },
  { zh: "論文的圖不下載、不截圖：卡上只記位置（Fig 3），要用就重繪。", en: "Paper figures are never downloaded or screenshotted: the card records the location (Fig 3), and anything needed is redrawn." },
  { zh: "原圖上 wiki 只限已確認 CC-BY 等開放授權或書面授權；否則過不了 Figures 的老師簽。", en: "An original figure reaches the wiki only with a confirmed open licence such as CC-BY or written permission; otherwise it stops at the instructor’s signature in Figures." },
  { zh: "重繪走 F，數字走 V，來源文獻都填 L。", en: "Redraws go through F and numbers through V, each citing its L." }
];

// ---------- Worked example: the canonical ReLEAF paper through the new system ----------
// Real paper, real extraction. Numbers and figure numbers verified against the PMC full text
// (PMC6629627). What ReLEAF took and changed is from Timmy, 2026-11-05.
const RESEARCH_CASE = {
  paper: {
    key: "CastilloHair2019",
    title: "Optogenetic control of Bacillus subtilis gene expression",
    cite: "Castillo-Hair, S. M., Baerman, E. A., Fujita, M., Igoshin, O. A., & Tabor, J. J. (2019). Nature Communications, 10, 3099.",
    doi: "10.1038/s41467-019-10906-6",
    url: "https://doi.org/10.1038/s41467-019-10906-6",
    lic: "CC BY 4.0",
    licd: { zh: "開放取用，已在 PMC 頁面確認。原圖可以上 wiki，但要附出處、授權連結，並註明有修改。", en: "Open access, confirmed on the PMC page. The original figures may go on the wiki, with credit, a licence link and a note that they were changed." },
    why: { zh: "ReLEAF 的光控制整條線都從這一篇長出來：裝置怎麼切模組、LPA 怎麼做、動力學怎麼建模、密碼子怎麼看。一篇論文，四個取用，落在四個不同的地方。", en: "ReLEAF’s whole light-control line grew out of this one paper: how the device splits into modules, how the LPA was built, how the kinetics were modelled, how codons were read. One paper, four extractions, landing in four different places." }
  },

  // From the 2026 Drive audit (research/audit-drylab.md, audit-wetlab-process.md, R8).
  then: [
    { loc: "2. Drylab/LPA/", d: { zh: "249 檔、190 MB，其中第三方 245 檔，Iris 155 檔。論文、影片、別人的 Supplementary 混在一起。", en: "249 files, 190 MB; 245 of them third-party, 155 of them Iris. The paper, videos and somebody else’s supplementary all in one pile." } },
    { loc: "2. Drylab/LPA/LPA Data.docx", d: { zh: "6 張表、308 字、1 則評論。全隊唯一寫下來的光硬體測試紀錄。", en: "6 tables, 308 words, 1 comment. The team’s only written record of testing the light hardware." } },
    { loc: "2. Drylab/CAD files/", d: { zh: "LPA 的 7 個 CAD 檔，和 Bioreactor 的 65 檔、Photometer 的 21 檔放在同一層。", en: "7 LPA CAD files, in the same folder as 65 bioreactor and 21 photometer files." } },
    { loc: "1. Wetlab/Protocol/Optogenetic LPA", d: { zh: "題目專屬協定，散在 Protocol 根目錄的 10 個散檔之中。", en: "A topic-specific protocol, loose among 10 stray files in the Protocol root." } },
    { loc: "Wiki Pages/Wiki/Citations.docx", d: { zh: "最後修改 10/18，就在 10/20–10/21 兩天 378 列 fix log 之前。參考文獻是手工重建的。", en: "Last edited 18 Oct, two days before the 378-row fix log of 20–21 Oct. The reference list was rebuilt by hand." } }
  ],
  thenmiss: { zh: "五個位置，沒有索引，沒有一句 takeaway，也沒有一行寫「這篇改變了什麼決定」。2026 的研究範本裡，「這回答了哪個開放問題」5 筆全空。", en: "Five locations, no index, not one takeaway sentence, and no line saying which decision this paper changed. In the 2026 reading template, “which open question does this answer?” was blank in all five entries." },

  now: [
    { n: "1", t: { zh: "列 L（Papers）", en: "row L (Papers)" } },
    { n: "1 + 4", t: { zh: "題 RQ：1 題種子，4 題衍生", en: "RQs: 1 seeded, 4 spawned" } },
    { n: "1", t: { zh: "列 MethodCompare", en: "MethodCompare row" } },
    { n: "7", t: { zh: "個 V（Hub.Facts）", en: "V numbers (Hub.Facts)" } },
    { n: "4", t: { zh: "個 D，每個都填了依據", en: "Ds, each with a basis" } },
    { n: "4", t: { zh: "列 RI，只算 3 個相異 D", en: "RI rows, counting 3 distinct Ds" } },
    { n: "1", t: { zh: "個 F（改作，附授權）", en: "F (an adaptation, with licence)" } },
    { n: "0", t: { zh: "人手排參考文獻", en: "reference lists built by hand" } }
  ],

  // The four things ReLEAF actually took, and what we changed.
  takes: [
    { id: "1", c: "purple", fig: "Fig 1a–d",
      t: { zh: "裝置圖：三模組的切法", en: "The device schematic: a three-module split" },
      took: { zh: "B. subtilis CcaSR v0.1 的架構：PCB 生產模組（a）、光感應模組（b）、轉錄輸出模組（c），系統活性用 sfGFP 讀（d）。", en: "The architecture of B. subtilis CcaSR v0.1: a PCB production module (a), a light-sensing module (b), a transcriptional output module (c), with system activity read out by sfGFP (d)." },
      chg: { zh: "兩個誘導型啟動子（ccaS 的木糖、ccaR 的 IPTG）換成組成型，所以不用加任何化學誘導物。輸出卡匣從 sfgfp 換成植物逆境保護劑。", en: "Both inducible promoters (xylose for ccaS, IPTG for ccaR) swapped for constitutive ones, so no chemical inducer is needed at all. The output cassette swapped from sfgfp to plant stress protectants." },
      land: { zh: "D0007 · F0001（改作）· RQ08", en: "D0007 · F0001 (adaptation) · RQ08" } },
    { id: "2", c: "orange", fig: "Fig 6b",
      t: { zh: "LPA：整體設計，簡化版", en: "The LPA: the general design, simplified" },
      took: { zh: "24 孔 Light Plate Apparatus 的整體設計：綠光與紅光 LED、每孔獨立的光程式、把光強校正成 μmol m⁻² s⁻¹ 再談生物學。", en: "The general design of the 24-well Light Plate Apparatus: green and red LEDs, an independent light program per well, and calibrating intensity in μmol m⁻² s⁻¹ before talking about biology." },
      chg: { zh: "不接 Iris。綠光紅光各只用三段光強，不做連續掃描——因為 Fig 6b 的半活化光強是 4.66 ± 0.63 μmol m⁻² s⁻¹，三段就跨得過那條曲線。", en: "No Iris. Three light levels each for green and red instead of a continuous sweep — because the half-activation intensity in Fig 6b is 4.66 ± 0.63 μmol m⁻² s⁻¹, and three levels already straddle that curve." },
      land: { zh: "D0012 · V0106 · RQ07", en: "D0012 · V0106 · RQ07" } },
    { id: "3", c: "teal", fig: "Fig 6c–d",
      t: { zh: "動力學：建模的框架", en: "The kinetics: a framework for modelling" },
      took: { zh: "三態加延遲的常微分方程框架：產生速率、未成熟蛋白、成熟蛋白，加一個延遲 τ。紅轉綠與綠轉紅的 t½ 是 105.1 ± 1.5 與 74.97 ± 0.39 分。", en: "The three-state ODE framework with a delay: production rate, immature protein, mature protein, plus a delay τ. Half-times are 105.1 ± 1.5 min red-to-green and 74.97 ± 0.39 min green-to-red." },
      chg: { zh: "框架照用，參數不照用。原文的 t½ 裡混了 sfGFP 的成熟速率（作者自己寫了這件事），我們的輸出不是螢光蛋白，所以要重新擬合。", en: "The framework carries over; the parameters do not. The paper’s half-times fold in sfGFP maturation — the authors say so themselves — and our output is not a fluorescent protein, so it has to be refitted." },
      land: { zh: "D0024 · V0105 · RQ09", en: "D0024 · V0105 · RQ09" } },
    { id: "4", c: "indigo", fig: { zh: "Supplementary", en: "Supplementary" },
      t: { zh: "密碼子最佳化：同一個分析視角", en: "Codon optimisation: the same analytical lens" },
      took: { zh: "只改前 15 個密碼子，為的是打散 RBS 附近的 mRNA 二級結構。原文靠這一招把 Cph1(Y176H)-sfGFP 從 113 ± 27 推到 20,100 ± 1,600 MEFL。", en: "Recode only the first 15 codons, to break up mRNA secondary structure near the RBS. In the paper this alone took Cph1(Y176H)-sfGFP from 113 ± 27 to 20,100 ± 1,600 MEFL." },
      chg: { zh: "算自由能的軟體換成 ViennaRNA，不是原文的 NUPACK。視角一樣，工具不一樣——所以 D0019 要寫清楚換了什麼，明年才不會以為我們跑的是 NUPACK。", en: "ViennaRNA for the free-energy calculation instead of the paper’s NUPACK. Same lens, different tool — so D0019 has to say which, or next year will assume we ran NUPACK." },
      land: { zh: "D0019 · V0104 · RQ10", en: "D0019 · V0104 · RQ10" } }
  ],

  // The seed question. Written by instructors before 11/25 (N00).
  rq: [
    { k: { zh: "問題 ID", en: "Question ID" }, v: "RQ02" },
    { k: { zh: "層級", en: "Level" }, v: { zh: "題目層（N01–N04）", en: "Topic level (N01–N04)" } },
    { k: { zh: "問題", en: "Question" }, v: { zh: "protectant 要不要用光控制表達，而不是加化學誘導物？", en: "Should the protectant be expressed under light control instead of a chemical inducer?" } },
    { k: { zh: "會改變什麼決定", en: "Which decision it would change" }, v: { zh: "要不要自建 LPA、輸出卡匣用哪種啟動子、Hardware 組這一年做什麼。", en: "Whether we build an LPA at all, which promoter drives the output cassette, and what Hardware works on all year." } },
    { k: { zh: "負責人", en: "Owner" }, v: { zh: "訓練主責老師（N01–N06 代行研究組長）", en: "Lead training instructor (acting Research Lead, N01–N06)" } },
    { k: { zh: "答案", en: "Answer" }, v: { zh: "要做，但不能照原設計做：PCB 供應、ccaS 表現、輸出啟動子三處都得先改。", en: "Yes, but not as published: PCB supply, ccaS expression and the output promoter all have to be changed first." } },
    { k: { zh: "結論類型", en: "Conclusion" }, v: { zh: "支持", en: "Supported" } },
    { k: { zh: "依據文獻 / 產生的決議", en: "Basis / Decisions produced" }, v: "L001 · D0007 D0012 D0019 D0024" }
  ],

  // All 19 columns, filled. kind: a = dropdown or automatic, c = copied, k = needs thinking,
  // r = routing, l = filled in later. Matches the 10-minute breakdown in RESEARCH-SYSTEM.md 3.
  cardkinds: {
    a: { zh: "下拉或自動", en: "Dropdown or automatic" },
    c: { zh: "抄的", en: "Copied" },
    k: { zh: "要想（90 秒）", en: "Needs thinking (90 s)" },
    r: { zh: "路由", en: "Routing" },
    l: { zh: "之後才填", en: "Filled in later" }
  },
  card: [
    { n: 1, k: "a", f: { zh: "文獻 ID", en: "Paper ID" }, v: "L001", d: { zh: "新工作簿的第一列，就是專案站在上面的那一篇。", en: "The first row of the new workbook is the paper the project stands on." } },
    { n: 2, k: "a", f: { zh: "狀態", en: "Status" }, v: { zh: "已完成", en: "Done" } },
    { n: 3, k: "a", f: { zh: "類型", en: "Type" }, v: { zh: "方法", en: "Method" }, d: { zh: "它同時也是「工具軟體」，但一列只能選一個。工具那一面只能從第 15 欄離開。", en: "It is also a software/tool paper, but the column takes one value. The tool side has to leave through column 15." } },
    { n: 4, k: "a", f: { zh: "組別", en: "Group" }, v: { zh: "全隊", en: "Whole team" }, d: { zh: "Wet、Dry、Hardware 三組都動到。", en: "It touches Wet, Dry and Hardware." } },
    { n: 5, k: "a", f: { zh: "研究問題", en: "Research question" }, v: "RQ02", d: { zh: "11/25 就種好了，所以這一格是下拉，不是打字。", en: "Seeded by 25 Nov, so this cell is a dropdown, not typing." } },
    { n: 6, k: "c", f: { zh: "引用名稱", en: "Citation key" }, v: "CastilloHair2019" },
    { n: 7, k: "c", f: { zh: "DOI 或連結", en: "DOI or link" }, v: "10.1038/s41467-019-10906-6", d: { zh: "refs.py 靠這一格把作者、年、期刊從文獻庫快照併進來。沒有任何欄位要重打書目。", en: "refs.py uses this cell to pull authors, year and journal from the library snapshot. No column asks anyone to retype bibliographic data." } },
    { n: 8, k: "k", f: { zh: "一句 Takeaway", en: "One-line takeaway" }, v: { zh: "CcaSR 搬到 B. subtilis 不會自己亮：PCB、ccaS、輸出啟動子三處都得先修。", en: "CcaSR does not light up on arrival in B. subtilis: PCB supply, ccaS expression and the output promoter all have to be fixed first." }, d: { zh: "可以被反駁的陳述。不是「本文探討了光控制」。", en: "A statement that could be proved wrong. Not “this paper explores light control”." } },
    { n: 9, k: "k", f: { zh: "可用數字", en: "Usable numbers" }, v: "V0101–V0107", d: { zh: "數字本身寫在 Hub.Facts，不寫在這裡。", en: "The numbers themselves live in Hub.Facts, not here." } },
    { n: 10, k: "k", f: { zh: "關鍵圖位置", en: "Key figure location" }, v: "Fig 1a–d · Fig 2 · Fig 4b · Fig 6b–d", d: { zh: "只記位置。不下載、不截圖。", en: "The location only. Nothing downloaded, nothing screenshotted." } },
    { n: 11, k: "a", f: { zh: "圖的處置", en: "Figure handling" }, v: { zh: "已確認 CC-BY", en: "Confirmed CC-BY" }, d: { zh: "罕見的一格。這篇是 CC BY 4.0，所以原圖真的上得了 wiki——附出處、授權連結，並註明有修改。團隊大部分論文不是這樣。", en: "A rare cell. This paper is CC BY 4.0, so the original figure really can go on the wiki — with credit, a licence link and a note that it was changed. Most of the team’s papers are not like this." } },
    { n: 12, k: "k", f: { zh: "方法限制", en: "Method limits" }, v: { zh: "流式細胞儀與 MEFL／MEAP 校正珠我們沒有；PCB 要從螺旋藻甲醇裂解自製；基因體整合要 1.5 kb 同源臂與 PY79 轉形。而且兩個誘導型啟動子一換掉，原文 48／96 格的誘導矩陣對我們就不成立。", en: "We have no flow cytometer and no MEFL/MEAP calibration beads; PCB has to be made by methanolysis of Spirulina; genomic integration needs 1.5 kb homology arms and competent PY79. And once both inducible promoters are swapped out, the paper’s 48- and 96-condition induction matrix no longer applies to us." }, d: { zh: "高中隊最該填的一欄。它直接長出 RQ08。", en: "The column that matters most for a high-school team. RQ08 grows straight out of it." } },
    { n: 13, k: "a", f: { zh: "判斷", en: "The call" }, v: { zh: "要換做法", en: "Change the approach" }, d: { zh: "不是「支持」也不是「反對」。架構照用，兩個啟動子和輸出都換掉。", en: "Neither “supports” nor “against”. Keep the architecture, replace both promoters and the output." } },
    { n: 14, k: "k", f: { zh: "對專案的意義", en: "What it means for us" }, v: { zh: "照 v0.1 的三模組切法做，但兩個誘導型啟動子換成組成型、輸出換成 protectant，並用 Fig 6b 的劑量曲線決定要幾段光強。", en: "Keep the three-module split of v0.1, swap both inducible promoters for constitutive ones, swap the output for the protectant, and use the Fig 6b dose curve to decide how many light levels we need." } },
    { n: 15, k: "r", f: { zh: "帶出的新問題", en: "New questions raised" }, v: "RQ07 · RQ08 · RQ09 · RQ10", d: { zh: "四個取用裡有三個從這一格離開。設計文件自己預期這是填寫率最低的一欄——所以這張卡由老師先填。", en: "Three of the four extractions leave through this cell. The design document itself expects this to be the least-filled column — which is why an instructor fills this card first." } },
    { n: 16, k: "a", f: { zh: "建議誰看", en: "Who should read it" }, v: { zh: "Hardware 組長的 P", en: "The Hardware lead’s P" }, d: { zh: "一列只能指一個人。Dry 與建模要靠 RQ09、RQ10 的負責人接。", en: "One row can name one person. Dry and modelling have to be picked up by the owners of RQ09 and RQ10." } },
    { n: 17, k: "r", f: { zh: "讀者", en: "Reader" }, v: { zh: "訓練主責老師", en: "Lead training instructor" }, d: { zh: "11/29 之前學生還沒進來，所以這一張是老師讀的。", en: "Students have not arrived before 29 Nov, so an instructor is the reader of this one." } },
    { n: 18, k: "c", f: { zh: "完成日", en: "Date finished" }, v: "2026-11-25", d: { zh: "N00。全隊唯一一張在開季前就存在的卡。", en: "N00. The only card that exists before the season opens." } },
    { n: 19, k: "l", f: { zh: "引用頁面", en: "Cited on page" }, v: { zh: "（空白，N14 起由 Wiki Lead 填）Engineering · Hardware · Model · Parts", en: "(blank; filled by the Wiki Lead from N14) Engineering · Hardware · Model · Parts" }, d: { zh: "讀者不填。唯一事後回填的一欄，空白會被 refs.py 叫出來。", en: "Not the reader’s job. The only column filled afterwards, and refs.py shouts when it is blank." } }
  ],

  // The card as it really looks: one Google Doc per theme, one tab per paper.
  // Body text is pulled from `card` by column number, so nothing is written twice.
  doc: {
    file: { zh: "15 Research / Research — 光控制 Light control", en: "15 Research / Research — Light control" },
    tabs: [
      { n: "Tab 0", t: { zh: "怎麼用這份文件 · 範本", en: "How to use this doc · template" } },
      { n: "Tab 1", t: "L001 · CastilloHair2019 · RQ02", on: true },
      { n: "Tab 2", t: { zh: "（下一篇）", en: "(next paper)" }, ghost: true },
      { n: "Tab 3", t: { zh: "（下一篇）", en: "(next paper)" }, ghost: true }
    ],
    head: { zh: "L001 · CastilloHair2019 · RQ02 · 要換做法", en: "L001 · CastilloHair2019 · RQ02 · change the approach" },
    // Fig 1 and Fig 6b are the real figures, reproduced under CC BY 4.0 with the credit line
    // the licence requires. Cropped from the article PDF; nothing else about them was changed.
    credit: { zh: "取自 Castillo-Hair 等人 2019（CC BY 4.0），裁切自原圖，內容未改。", en: "From Castillo-Hair et al. 2019 (CC BY 4.0), cropped from the original; nothing else changed." },
    figs: [
      { ok: true, src: "assets/img/L001-fig1.png", wide: true,
        cap: { zh: "Fig 1a–d · B. subtilis CcaSR v0.1 裝置圖", en: "Fig 1a–d · the B. subtilis CcaSR v0.1 device schematic" },
        note: { zh: "我們拿走的就是這張圖的切法：a PCB 生產、b 光感應、c 轉錄輸出、d 用 sfGFP 讀。注意 b 的 P_xylA 要加木糖、c 的 P_hy-spank 要加 IPTG——我們把這兩個換成組成型，d 的 sfgfp 換成 protectant。", en: "What we took is exactly this figure’s split: a PCB production, b light sensing, c transcriptional output, d read out by sfGFP. Note that b’s P_xylA needs xylose and c’s P_hy-spank needs IPTG — those two are what we swap for constitutive promoters, and d’s sfgfp is what we swap for the protectant." } },
      { ok: true, src: "assets/img/L001-fig6b.png",
        cap: { zh: "Fig 6b · 穩態轉移函數（V0106 的出處）", en: "Fig 6b · the steady-state transfer function (where V0106 comes from)" },
        note: { zh: "曲線在 0.1 到 10 μmol m⁻² s⁻¹ 之間走完，半活化在 4.66。三段光強——曲線底、半活化附近、飽和——就夠描述它。這張圖就是我們不做連續掃描、也不接 Iris 的理由。", en: "The curve does its whole run between 0.1 and 10 μmol m⁻² s⁻¹, with half-activation at 4.66. Three levels — foot of the curve, near half-activation, saturated — are enough to describe it. This figure is the reason we neither sweep continuously nor wire up Iris." } },
      { cap: { zh: "F0001 · 我們的版本（改作自 Fig 1a–d）", en: "F0001 · our version, adapted from Fig 1a–d" },
        note: { zh: "還沒畫。兩個誘導型啟動子要畫成組成型，輸出從 sfgfp 換成 protectant。畫一次，Hub.Figures 開 F0001，wiki 的 Engineering 和 Parts 直接用。", en: "Not drawn yet. Both inducible promoters become constitutive and the output goes from sfgfp to the protectant. Drawn once, filed as F0001 in Hub.Figures, reused on the wiki’s Engineering and Parts pages." } }
    ],
    // Which of the 19 columns make up the admin strip at the foot of the tab.
    admin: [2, 3, 4, 5, 6, 7, 11, 13, 16, 17, 18, 19],
    note: { zh: "行政列那 12 格，就是 Papers 索引列要有的欄位。其餘 7 格只住在這個 tab 裡。同一個欄位不要兩邊都填。", en: "Those 12 admin cells are exactly the columns the Papers index row needs. The other seven live only in this tab. No field is filled in both places." }
  },

  // MethodCompare, because column 3 is "method". Archived at N10 (1 Apr).
  mc: [
    { k: { zh: "目的", en: "Purpose" }, v: { zh: "不加化學誘導物就能控制 protectant 的表達", en: "Control protectant expression without adding a chemical inducer" } },
    { k: { zh: "方法概要", en: "Method in brief" }, v: { zh: "綠／紅光可逆的雙組分系統（CcaS–CcaR）＋自製 PCB（ho1–pcyA 融合）＋嵌合的 PcpcG2 輸出啟動子", en: "A green/red photoreversible two-component system (CcaS–CcaR) + home-made PCB (an ho1–pcyA fusion) + a chimeric PcpcG2 output promoter" } },
    { k: { zh: "條件", en: "Conditions" }, v: { zh: "B. subtilis PY79；M9＋甘油（不能用葡萄糖）；要加 FeCl₃；37 °C、250 RPM；OD₆₀₀ 0.08–0.15", en: "B. subtilis PY79; M9 with glycerol (not glucose); FeCl₃ required; 37 °C, 250 RPM; OD₆₀₀ 0.08–0.15" } },
    { k: { zh: "測試階段", en: "Stage tested" }, v: { zh: "原文做到單株特性化（v1.0），沒有做到應用輸出", en: "The paper reaches strain characterisation (v1.0); it never drives an applied output" } },
    { k: { zh: "讀出方式", en: "Readout" }, v: { zh: "流式細胞儀，校正成 MEFL／MEAP，每次 3 重複、不同天", en: "Flow cytometry calibrated to MEFL/MEAP, three replicates on different days" } },
    { k: { zh: "優缺點", en: "Pros and cons" }, v: { zh: "優：>70 倍動態範圍、可逆、不耗試劑。缺：PCB 要自製、要光硬體、t½ 約 1–2 小時。", en: "For: over 70-fold dynamic range, reversible, consumes no reagent. Against: PCB has to be made, light hardware is required, half-times are 1–2 hours." } },
    { k: { zh: "我們能不能做", en: "Can we do it?" }, v: { zh: "改過能", en: "Yes, modified" } }
  ],

  v: [
    { id: "V0101", n: { zh: "71 ± 12 倍", en: "71 ± 12-fold" }, t: { zh: "B. subtilis CcaSR v1.0（ccaSm3）綠／紅光動態範圍", en: "Dynamic range of B. subtilis CcaSR v1.0 (ccaSm3), green vs red" }, f: "Fig 5" },
    { id: "V0102", n: { zh: "80 倍", en: "80-fold" }, t: { zh: "ho1–pcyA translational fusion 提升 PCB：25.7 ± 6.2 → 2070 ± 130 MEAP", en: "An ho1–pcyA translational fusion raises PCB: 25.7 ± 6.2 → 2070 ± 130 MEAP" }, f: "Fig 2" },
    { id: "V0103", n: { zh: "44 倍", en: "44-fold" }, t: { zh: "嵌合輸出啟動子：PcpcG2-172 的 555 ± 65 → 64,000 ± 7600 MEFL", en: "A chimeric output promoter: 555 ± 65 → 64,000 ± 7600 MEFL against PcpcG2-172" }, f: "Fig 4" },
    { id: "V0104", n: { zh: "約 200 倍", en: "~200-fold" }, t: { zh: "只重編碼前 15 個密碼子：113 ± 27 → 20,100 ± 1,600 MEFL", en: "Recoding only the first 15 codons: 113 ± 27 → 20,100 ± 1,600 MEFL" }, f: { zh: "Supplementary", en: "Supplementary" } },
    { id: "V0105", n: { zh: "105 / 75 分", en: "105 / 75 min" }, t: { zh: "t½ 開（紅→綠）105.1 ± 1.5 分、關（綠→紅）74.97 ± 0.39 分", en: "Half-times: 105.1 ± 1.5 min ON (red→green), 74.97 ± 0.39 min OFF" }, f: "Fig 6c–d" },
    { id: "V0106", n: { zh: "4.66 μmol", en: "4.66 μmol" }, t: { zh: "半活化光強 4.66 ± 0.63 μmol m⁻² s⁻¹，Hill 係數 1.88 ± 0.16", en: "Half-activation intensity 4.66 ± 0.63 μmol m⁻² s⁻¹, Hill coefficient 1.88 ± 0.16" }, f: "Fig 6b" },
    { id: "V0107", n: { zh: "21 / 11 倍", en: "21 / 11-fold" }, t: { zh: "卡匣末端加一個終止子做絕緣的增益（xyl 位點 21 倍、amyE 位點 11 倍）", en: "The gain from one terminator insulating a cassette (21-fold at the xyl locus, 11-fold at amyE)" }, f: { zh: "Supplementary", en: "Supplementary" } }
  ],

  d: [
    { id: "D0007", b: "RQ02 · L001", t: { zh: "輸出用光控制，不用化學誘導。ccaS 與 ccaR 的誘導型啟動子換成組成型，輸出卡匣從 sfgfp 換成 protectant。", en: "Light control for the output, no chemical induction. The inducible promoters on ccaS and ccaR become constitutive, and the output cassette goes from sfgfp to the protectant." } },
    { id: "D0012", b: "RQ07 · L001 · V0106", t: { zh: "LPA 自建並簡化：不接 Iris，綠紅各三段光強。", en: "Build the LPA ourselves and simplify it: no Iris, three light levels each for green and red." } },
    { id: "D0019", b: "RQ10 · L001 · V0104", t: { zh: "密碼子最佳化只動前 15 個，自由能用 ViennaRNA（不是原文的 NUPACK）。", en: "Codon optimisation touches only the first 15, with free energy from ViennaRNA (not the paper’s NUPACK)." } },
    { id: "D0024", b: "RQ09 · L001 · V0105", t: { zh: "模型沿用三態加延遲的動力學框架，但輸出換成 protectant 後重新擬合參數。", en: "The model keeps the three-state-plus-delay kinetic framework, but refits its parameters once the output is the protectant." } }
  ],

  ri: [
    { id: "RI001", k: { zh: "採納", en: "Adopted" }, d: "D0007", t: { zh: "因為 L001 把裝置切成三個模組，D0007 才決定分 PPM／LSM／TOM 三段分別驗，不是一次做完再找哪裡壞。", en: "Because L001 splits the device into three modules, D0007 tests PPM, LSM and TOM separately instead of building it all and then hunting for the break." } },
    { id: "RI002", k: { zh: "避雷", en: "Trap avoided" }, d: "D0007", t: { zh: "因為 L001 說 v0.1 完全不亮，我們沒有照原圖直接做下去。和「採納」同權重。", en: "Because L001 says v0.1 does not respond to light at all, we did not simply build the published design. Equal in weight to “adopted”." } },
    { id: "RI003", k: { zh: "工具", en: "Tool" }, d: "D0012", t: { zh: "因為 V0106 的半活化是 4.66 μmol m⁻² s⁻¹，LPA 只做三段光強就跨得過曲線，省掉連續掃描的硬體。", en: "Because V0106 puts half-activation at 4.66 μmol m⁻² s⁻¹, three light levels straddle the curve and the LPA needs no continuous sweep." } },
    { id: "RI004", k: { zh: "工具", en: "Tool" }, d: "D0019", t: { zh: "ViennaRNA 換掉 NUPACK，分析視角不變。換了工具就要有一列，否則明年會以為我們跑的是 NUPACK。", en: "ViennaRNA replaces NUPACK with the lens unchanged. A tool swap needs its own row, or next year will assume we ran NUPACK." } }
  ],
  rinote: { zh: "四列，但只算三個相異 D（RI001 與 RI002 都指向 D0007）。這就是反灌水第一條：算相異 D 數，不算列數。每一列都要老師確認，七天異議期。", en: "Four rows, but only three distinct Ds — RI001 and RI002 both point at D0007. That is anti-padding rule one: count distinct Ds, not rows. Every row needs an instructor’s confirmation and carries a seven-day objection window." },

  f: { id: "F0001", kind: { zh: "改作", en: "Adaptation" }, src: "L001 · Fig 1a–d",
    t: { zh: "我們的裝置圖：兩個誘導型啟動子畫成組成型，TOM 的輸出從 sfgfp 換成 protectant。因為原文是 CC BY 4.0，這是少數可以站在原圖上改、而不必整張重繪的情況——條件是附出處、授權連結，並註明修改。", en: "Our device schematic: both inducible promoters drawn as constitutive, and the TOM output changed from sfgfp to the protectant. Because the paper is CC BY 4.0, this is one of the few cases where we may build on the original rather than redraw it from scratch — provided we credit the source, link the licence and say it was changed." } },

  refs: { out: "references-W###.md", bib: "refs.bib",
    line: "Castillo-Hair, S. M., Baerman, E. A., Fujita, M., Igoshin, O. A., & Tabor, J. J. (2019). Optogenetic control of Bacillus subtilis gene expression. Nature Communications, 10, 3099.",
    t: { zh: "沒有人打這一行。refs.py 從第 7 欄的 DOI 對上文獻庫快照，從第 19 欄知道它該出現在哪幾頁，依 L 編號排序。對不上就印進 UNRESOLVED.txt。", en: "Nobody types this line. refs.py matches the DOI in column 7 against the library snapshot, learns from column 19 which pages it belongs on, and sorts by L number. Anything unmatched prints to UNRESOLVED.txt." } },

  breaks: [
    { t: { zh: "一篇論文，四個組，一個讀者", en: "One paper, four groups, one reader" }, d: { zh: "卡只有一個「組別」和一個「建議誰看」。這篇同時影響 Wet、Dry、Hardware 與建模，所以四個取用裡有三個只能從第 15 欄「帶出的新問題」離開——而設計文件自己標記這一欄的填寫率最低（§5.2 的 ⚠️）。", en: "A card has one group and one “who should read this”. This paper hits Wet, Dry, Hardware and modelling at once, so three of the four extractions can only leave through column 15, “new questions raised” — the very column the design document flags as the least likely to be filled." } },
    { t: { zh: "對策：這張卡由老師在 N00 先填好", en: "The fix: an instructor fills this card at N00" }, d: { zh: "L001 連同 RQ02 與 RQ07–RQ10 在 11/25 前一起寫好。學生 11/29 進來看到的第一張卡是填滿的，而且它正好就是 PaperCardRules.html 需要的「合格 Takeaway」範例。代價：老師多 10 分鐘，加四題 RQ。", en: "L001 is written before 25 Nov together with RQ02 and RQ07–RQ10. The first card a student sees on 29 Nov is already full, and it doubles as the worked “acceptable takeaway” that PaperCardRules.html needs. Cost: ten more minutes of instructor time, plus four RQs." } },
    { t: { zh: "別讓學生從這張卡學到「圖可以直接用」", en: "Do not let students learn “figures are reusable” from this card" }, d: { zh: "第 11 欄這裡填「已確認 CC-BY」，是因為這一篇真的是 CC BY 4.0。團隊大部分論文不是。範例卡上要寫一句：這一格的預設值是「需重繪」，CC-BY 要逐篇確認過才能選。", en: "Column 11 says “confirmed CC-BY” here only because this paper really is CC BY 4.0. Most of the team’s papers are not. The example card needs a line on it: the default for this cell is “needs redraw”, and CC-BY may be chosen only after checking that particular paper." } },
    { t: { zh: "參數和框架要分開記", en: "Keep the framework and its parameters apart" }, d: { zh: "V0105 的 t½ 混了 sfGFP 的成熟速率，作者自己寫了。那個數字進了 Hub.Facts，就有人會在 wiki 上當成我們的反應時間引用。V 的說明欄必須寫明「原文條件下」。", en: "The half-times in V0105 fold in sfGFP maturation, as the authors say. Once that number is in Hub.Facts, somebody will cite it on the wiki as our response time. The V row’s note has to say “under the paper’s conditions”." } }
  ]
};

const PHOTO = {
  steps: [
    { t: { zh: "拍", en: "Shoot" }, who: { zh: "任何人", en: "Anyone" }, d: { zh: "記錄過程：裝置怎麼接、白板怎麼想、失敗長什麼樣。算得出數字的圖是數據，放 Data 並開 R，不走這裡。", en: "The look of the process: how it was set up, the whiteboard, what failure looked like. An image that yields a number is data and goes to Data with an R." } },
    { t: { zh: "發 gallery", en: "Post to gallery" }, who: { zh: "約 30 秒（估算）", en: "About 30 s (estimate)" }, d: { zh: "Discord 論壇 照片牆-gallery，一件事一篇。標題 MMDD ID 短描述，點組別、分類、人臉標籤。趕不上就先發，標題之後補。", en: "The Discord forum gallery, one post per event. Title MMDD ID short description; tag group, category and faces. Post first if you must; fix the title later." } },
    { t: { zh: "週五提醒", en: "Friday nudge" }, who: { zh: "自動", en: "Automatic" }, d: { zh: "固定文字，不點名，也不統計誰發了幾張。照片數不進任何驗收。", en: "Fixed text, no names, no counting who posted what. Photo counts never enter any assessment." } },
    { t: { zh: "週日歸檔", en: "Sunday filing" }, who: { zh: "Photo Steward", en: "Photo Steward" }, d: { zh: "工具改名、配 M、抓重複。上傳到 Drive 當月資料夾，貼進 Hub Media，回覆 M 編號並按 ✅。", en: "A tool renames, assigns M and catches duplicates. Upload to the month’s Drive folder, paste into Hub Media, reply with the M and tick ✅." } },
    { t: { zh: "每月精選", en: "Monthly picks" }, who: { zh: "Media lead", en: "Media Lead" }, d: { zh: "在 Hub 標精選、Wiki 候選、影片候選，每月上限 10 張精選。不複製檔案。", en: "Marks picks, wiki candidates and video candidates in the Hub, up to 10 picks a month. No copies." } }
  ],
  name: [
    { k: "20270513", t: { zh: "拍攝日", en: "Date taken" } },
    { k: "WET", t: { zh: "組別", en: "Group" } },
    { k: "EPB", t: { zh: "分類：工程、外展、團隊，可帶 DBTL 階段", en: "Category: engineering, outreach, team; may carry the DBTL stage" } },
    { k: "R0412", t: { zh: "關聯 ID：T、R、I 或 NA", en: "Linked ID: T, R, I or NA" } },
    { k: "bench-setup", t: { zh: "slug：不放人名、校名", en: "Slug: no people or school names" } },
    { k: "03", t: { zh: "序號", en: "Sequence" } },
    { k: "M0142", t: { zh: "Hub Media 的 ID", en: "Hub Media ID" } },
    { k: "P007", t: { zh: "拍攝者，不是被拍的人", en: "Who took it, never who is in it" } }
  ],
  ext: ".jpg",
  homes: [
    { k: { zh: "照片", en: "Photos" }, v: "40 Media/Photos/YYYY-MM/" },
    { k: { zh: "影片", en: "Footage" }, v: "40 Media/Footage/YYYY-MM/" },
    { k: { zh: "肖像", en: "Portraits" }, v: "40 Media/Portraits/P001_Portrait_v1.jpg" },
    { k: { zh: "大檔與原檔，等歸檔", en: "Large files and originals, waiting" }, v: "40 Media/_Inbox/" },
    { k: { zh: "校外未成年（老師或行政）", en: "Outside minors (instructors or Ops)" }, v: "GEMS 2027 Ops/Restricted Media/YYYY-MM/" }
  ],
  duty: [
    { k: { zh: "人數", en: "Seats" }, v: { zh: "兩位，隔兩週輪，互為備援", en: "Two, alternating fortnights, each the other’s backup" } },
    { k: { zh: "時間", en: "Time" }, v: { zh: "週日 19:00，估算 47 分，上限 60 分，不超過 21:00", en: "Sun 19:00, about 47 minutes (estimate), capped at 60, never past 21:00" } },
    { k: { zh: "做不完", en: "If it runs over" }, v: { zh: "留到下週，不算違規。Discord 不會丟照片，晚一週沒有損失。", en: "It waits a week and is not a breach. Discord keeps the posts, so a week’s delay loses nothing." } },
    { k: { zh: "衝刺期", en: "In the crunch" }, v: { zh: "N23 起只歸檔精選與指定的，約 20 分；N31 後兩位一起補", en: "From N23, only picks and requests, about 20 minutes; both catch up after N31" } }
  ],
  rules: [
    { zh: "校外未成年的影像不進 Discord，學生碰不到；工具看到標記整批停止。", en: "Images of outside minors never enter Discord and students never handle them; the tool stops the batch if it sees the flag." },
    { zh: "沒有 K 的照片照樣歸檔，只是不能發布。沒標人臉，一律當有人臉。", en: "A photo without a K is still filed; it just cannot be published. No face tag counts as a face." },
    { zh: "AI 只讀檔名與 Hub 欄位，不做臉部辨識。「找某位學生的所有照片」刻意做不到。", en: "AI reads only file names and Hub columns, with no face recognition. “Find all photos of one student” is impossible by design." }
  ]
};

// To be decided, added with the role catalogue and the photo system. Earlier lists stay where they were.
const PEOPLE_DECIDED = [
  { zh: "Drive：方向定為搬到 GEMS Workspace 的 Shared Drive，解決配額與交接風險。尚未搬遷，確認帳號後由 PI 執行。", en: "Drive: the direction is a GEMS Workspace Shared Drive, to settle quota and handover risk. Not migrated yet; the PI will do it once the account is confirmed." },
  { zh: "Advisor 產出：學生看得到，驗收結果只放 Ops。", en: "Advisor outputs: students can see them; reviews stay in Ops only." },
  { zh: "第一批 10 題 RQ：PI 與老師在 11/25 前寫，來不及先給 3 題。", en: "First 10 RQs: written by the PI and instructors before 25 Nov; if time runs out, 3 first." },
  { zh: "衝刺期老師減負：採選項 A＋C，Consent 不放寬。細節待寫入規格。", en: "Lighter load for instructors in the crunch: options A and C, with no relaxation on Consent. Details are still to be written into the spec." },
  { zh: "研究組長：老師代行到 N06（3/10），再依 Impact Log 選。", en: "Research Lead: instructors act until N06 (10 Mar), then the lead is chosen from the Impact Log." }
];

const PEOPLE_TBD = [
  { zh: "這份角色清單與時數上限（H-01、H-04）。席位不是指派。", en: "This role list and the time caps (H-01, H-04). Seats are not assignments." },
  { zh: "Task lead 怎麼選（H-03）；每個角色怎麼選人、何時公布。建議 N06 公布、N07 上任，Photo Steward 與 Media lead 從 N02 先試跑。", en: "How Task Leads are chosen (H-03); how and when each role is filled. Suggested: announce at N06, start at N07, with Photo Stewards and the Media Lead trying it from N02." },
  { zh: "內部紀錄負責人（D-005）、主責 instructor（T11）、安全與物資人選（H-14）。", en: "The internal records owner (D-005), lead instructors (T11), safety and supplies owners (H-14)." },
  { zh: "學生角色可不可以算進評量或 Attribution。建議列進 Attribution，不進評分。", en: "Whether student roles count toward assessment or Attribution. Suggested: Attribution yes, grading no." },
  { zh: "主職是否在暑期輪換一次，避免一人做滿一年。", en: "Whether primary seats rotate once over the summer, so nobody serves a full year." },
  { zh: "Advisor 名單未簽（T15），範圍選單要對照簽署結果。求助論壇值班是否屬於 advisor 範圍。", en: "The advisor list is unsigned (T15), and scope menus depend on it. Whether help-forum duty falls within advisor scope." },
  { zh: "題目專屬的 wiki 頁還沒算進 Page owner 的 13 席，定題後要加人或併頁。", en: "Topic-specific wiki pages are not counted in the 13 Page Owner seats; after the topic decision, add people or merge pages." },
  { zh: "隊員肖像（H-17）：入隊文件是否涵蓋 wiki 與影片，要不要做全隊 K。未定前隊員人臉不可發布。", en: "Member portraits (H-17): whether joining documents cover the wiki and videos, and whether to use one team K. Until then, member faces cannot be published." },
  { zh: "校外未成年的影像路徑、由哪位成人現場拍攝（待審）。", en: "The route for images of outside minors, and which adult shoots on site (under review)." },
  { zh: "Discord 實際上傳上限、單則附件數、是否保留定位資料，上線前要實測；設計不依賴這些。", en: "Discord’s real upload limit, attachments per post and whether location data survives need testing before launch; the design does not rely on them." },
  { zh: "資料保存期限與撤回後刪檔（H-10）。", en: "Retention periods and deleting files after withdrawal (H-10)." },
  { zh: "實測：學生手機發文 30 秒、Steward 一輪 47 分、各角色時數。第一次衝刺站立會後回報一次。", en: "Measure it: 30 seconds to post, 47 minutes for a filing round, and each role’s hours, reported after the first crunch stand-up." },
  { zh: "Wiki 資料夾：D-047 用 Wiki/W### 頁名，Drive 規格與 File Rules 第 12 節還寫 Wiki/Pages，要改成同一種說法。40 Media 新權限也只在規格，尚未執行。", en: "Wiki folders: D-047 uses Wiki/W### page while the Drive spec and File Rules section 12 still say Wiki/Pages, and they must match. The new 40 Media permissions are also spec only, not yet applied." },
  { zh: "N11 學生暑期不在日期的回報管道（SCH-5）。", en: "How students report summer absences at N11 (SCH-5)." },
  { zh: "Handbook 待定：分組規則（H-02）、評量量表（H-05）、實驗室規則（H-07）、採購門檻（H-08）、學生 AI 使用（H-09）、衝刺期週會是否縮短（H-11）、題目評分（H-12）、Run 結果率目標（H-13）、PK 規則（H-15）、化學品與廢棄物分類（H-16）。", en: "Handbook items: group rules (H-02), assessment scale (H-05), lab rules (H-07), purchase thresholds (H-08), student AI use (H-09), shorter crunch meetings (H-11), topic scoring (H-12), Run result target (H-13), PK rules (H-15), chemical and waste classes (H-16)." }
];

const PEOPLE_RULES = [
  { t: { zh: "一主職，最多一副職", en: "One primary seat, at most one secondary" }, d: { zh: "學生 30 個主職席、22 個副職席，所以有 8 位沒有副職，主要是 9 月本來就滿的人。", en: "30 primary and 22 secondary student seats, so 8 people have no second seat, mostly those already full in September." } },
  { t: { zh: "時間有上限", en: "Time is capped" }, d: { zh: "平時每週 3 小時，7 到 10 月每週 5 小時（提案）。算在隊員平時工時內，不是額外加的。做實驗本身不算。", en: "3 h a week, 5 h from July to October (proposal). It counts inside normal team hours, not on top. Lab work itself does not count." } },
  { t: { zh: "沒有單點", en: "No single point of failure" }, d: { zh: "每個角色都寫了備援；Photo Steward 與美術本來就兩位。", en: "Every role names a backup; Photo Stewards and Art already come in pairs." } },
  { t: { zh: "有些事只由成人", en: "Some things stay with adults" }, d: { zh: "未成年許可、老師專用紀錄、Discord 版務。沒有學生或 advisor 角色擁有 Ops Hub。", en: "Minors’ permissions, instructor-only records, Discord moderation. No student or advisor role owns anything in the Ops Hub." } },
  { t: { zh: "Advisor 不是席位制", en: "Advisors are not seats" }, d: { zh: "10 位是容量估算。每階段與 instructor 確認具名範圍，只留審查紀錄，不是關卡，判斷在 instructor，不保證任何角色。", en: "10 is a capacity estimate. Named scope is agreed with an instructor each stage; advisors leave review notes, are not gates, and no role is guaranteed. Judgement stays with the instructor." } }
];

Object.assign(T.zh, {
  "nav.village": "村莊",
  "ppl.tag": "全部是提案。下面沒有任何人被指派：席位是空的，由 PI 與老師決定，對應 H-01。",
  "ppl.seats": "席位", "ppl.primary": "學生主職席", "ppl.secondary": "學生副職席", "ppl.adv": "位 advisor（容量估算）", "ppl.adults": "位老師與 Ops（一人可兼多項）",
  "ppl.load": "估算的全隊負荷", "ppl.load.sub": "每月全部角色時數佔容量的比例。把估算加總而已，沒有實測。9 月最緊。",
  "ppl.rules": "五條規則", "ppl.cat": "角色目錄", "ppl.search": "找角色：名字、檔案、擅長的事", "ppl.all": "全部",
  "ppl.own": "擁有", "ppl.week": "每週", "ppl.time": "時間", "ppl.peak": "尖峰", "ppl.backup": "備援", "ppl.file": "檔案", "ppl.fit": "適合", "ppl.when": "期間",
  "ppl.h": "小時／週（估算）", "ppl.sec": "副職", "ppl.none": "沒有符合的角色。", "ppl.seat": "席", "ppl.func": "功能", "ppl.inv": "在村子裡看",
  "ppl.students.g": "學生", "ppl.tbd": "這次新增的待決定",
  "vg.eyebrow": "iGEM 村莊", "vg.title": "把一年，<br>走成一座村子。",
  "vg.sub": "每一區是一個功能，每棟房子是一個角色或工作。小村民沿著真實的交接路線送文件，燈跟著每個月的工作量亮起來。點房子、點村民，或直接找你的工作。",
  "vg.tag": "村民不代表任何真人，席位也還沒有指派。時數是估算。",
  "vg.play": "播放這一年", "vg.pause": "暫停", "vg.prev": "上個月", "vg.next": "下個月", "vg.month": "月份",
  "vg.map": "地圖", "vg.list": "清單", "vg.labels": "名牌", "vg.find": "找我的工作", "vg.findph": "打字找：畫圖、Hub、照片…",
  "vg.road": "正在路上", "vg.roadnone": "這時候路上沒有人。", "vg.hint": "點一棟房子或一位村民。方向鍵可以在房子之間移動，Enter 打開。",
  "vg.thismonth": "這個月", "vg.own": "擁有", "vg.handto": "交給", "vg.from": "收自", "vg.file": "哪個檔", "vg.backup": "備援", "vg.nofile": "沒有專屬分頁或資料夾",
  "vg.rest": "這個月這個角色還沒開始，或已經結束。", "vg.node": "節點", "vg.carry": "手上拿著", "vg.goto": "要送去", "vg.fromb": "從", "vg.cadence": "頻率", "vg.fn": "功能",
  "vg.week": "一週生活", "vg.weekof": "的一週", "vg.weekclose": "關閉", "vg.weekplay": "走一遍", "vg.other": "不固定", "vg.weeknote": "只列角色時間，做實驗與專案不算。分鐘都是估算。", "vg.wmin": "分",
  "vg.load": "全隊角色時數", "vg.cap": "容量", "vg.est": "估算", "vg.loadh": "小時／週", "vg.seats": "席", "vg.quiet": "全隊在巴黎，村子很安靜。", "vg.crunch": "衝刺模式",
  "vg.skip": "跳過村莊地圖，看清單", "vg.listsub": "同樣的內容，沒有動畫。", "vg.events": "這一年的日子", "vg.jump": "跳到", "vg.th": ["區", "房子", "角色", "這個月"], "vg.mapl": "iGEM 村莊地圖，可用方向鍵在房子之間移動",
  "ph.eyebrow": "照片系統", "ph.title": "一張照片，<br>一個位置。", "ph.sub": "從手機到 Drive：學生只發一篇，兩位 Photo Steward 每週日歸檔，找照片靠 Hub 和檔名。提案，待 PI 確認。",
  "nav.research": "研究",
  "res.eyebrow": "2027 研究系統", "res.title": "讀過不算，<br>改變決定才算。",
  "res.sub": "研究的產物不是「讀過的論文」，是被引用的卡（L）、被回答的問題（RQ）、被改變的決定（D）。11/29 開始，是整個系統第一個真的被用到的部分。",
  "res.jump": "看一題研究的流程", "res.status": "提案 v1.0；RQ 種子與研究組長代行已由 PI 確認。",
  "res.why": "2026 卡在哪", "res.why.lesson": "所以 2027 不再要學生發明答案：問題先存在，欄位是下拉，卡是表上的一列。",
  "res.structure": "結構：一條線，五個支援", "res.reader": "誰讀",
  "res.around": "線的周圍",
  "res.dates": "11/25 要好，11/29 開始", "res.dates.warn": "沒有這 10 題，第 5 欄會重演 2026 的 0%。", "res.miles": "接下來",
  "res.who": "誰做什麼、什麼時候", "res.who.th": ["誰", "做什麼", "什麼時候", "每週時間"],
  "res.who.note": "最可能先斷的是老師，不是學生：11/29 到 3/10 代行研究組長的 15 週，同時要跑課程與訓練。分鐘數都是估算，用 11/29 第一週的真人校正。",
  "res.steps": "一篇論文七步，每步多久", "res.steps.th": ["步驟", "做什麼", "時間", "誰"],
  "res.leads": "研究組長怎麼選", "res.leads.sub": "11/29 到 3/10 由老師代行。3/10（N06）老師看三項影響證據，由 PI 與老師決定，不看讀了幾篇。副組長看後兩項，加文獻庫整潔度。",
  "res.fair": "證據怎麼防灌水", "res.fair.note": "學生看得到事件，看不到排名或分數。本系統不指派任何人。",
  "res.rules": "三條規則",
  "res.refs": "參考文獻清單自動產生",
  "res.refs.p": "refs.py 從 Papers、Facts、Figures 與文獻庫快照產生每頁清單，對不上的印進 UNRESOLVED.txt。人要做的只有一件事：寫 wiki 時把頁面編號填回第 19 欄。沒有人需要在 freeze 前重排清單。",
  "res.case.eyebrow": "實例", "res.case.h": "一篇論文，四個取用。",
  "res.case.sub": "ReLEAF 的定錨論文走一次新系統。不是示範用的假例子：下面每一格都是這篇真的被我們拿走的東西，以及我們改掉的地方。",
  "res.case.paper": "定錨論文", "res.case.lic": "授權",
  "res.case.then": "2026：這篇住在五個地方", "res.case.now": "2027：它變成什麼",
  "res.case.takes": "我們真正拿走的四件事", "res.case.took": "拿走", "res.case.chg": "我們改了什麼", "res.case.land": "落在哪",
  "res.case.rq": "種子問題：RQ02（11/25 前由老師寫）",
  "res.case.doc": "這張卡長什麼樣", "res.case.doc.sub": "一份主題文件，一個 tab 一篇論文。Takeaway 和數字在最上面，行政欄位在最下面——這份是給三個月後想知道「我們為什麼這樣做」的人讀的。",
  "res.case.docfile": "檔案", "res.case.figph": "圖貼這裡",
  "res.case.t.take": "TAKEAWAY（一句，可以被反駁）", "res.case.t.so": "所以我們應該", "res.case.t.num": "結果：可以拿來用的數字",
  "res.case.t.fig": "關鍵圖／示意圖", "res.case.t.took": "我們拿走什麼、改了什麼", "res.case.t.lim": "方法限制：為什麼不能照抄",
  "res.case.t.new": "帶出的新問題", "res.case.t.adm": "行政列",
  "res.case.card": "這 19 格分別住在哪裡", "res.case.card.sub": "只有 5 欄要想，每欄 90 秒。其餘是下拉、抄來的、路由，或之後才填。",
  "res.case.mc": "MethodCompare 的那一列（第 3 欄是「方法」，所以要填）", "res.case.mcnote": "N10（4/1 開始下單）後整張分頁封存到 90 Archive。",
  "res.case.chain": "這張卡兌現成什麼", "res.case.v": "可用數字 → Hub.Facts", "res.case.d": "改變的決定 → Hub.Decisions",
  "res.case.ri": "影響紀錄 → Research.Impact", "res.case.f": "圖 → Hub.Figures", "res.case.refs": "參考文獻 → refs.py",
  "res.case.breaks": "這篇壓到系統哪裡", "res.case.vth": ["V", "數字", "說明", "出處"],
  "res.rights": "圖與版權", "res.see": "看研究系統", "flow.cost": "時間",
  "ppl.decided": "PI 已確認",
  "ph.flow": "流程", "ph.name": "檔名，工具產生", "ph.home": "放哪裡", "ph.duty": "Photo Steward 的工作", "ph.rules": "三條不能退的", "ph.see": "看照片系統", "ph.village": "在村子裡看暗房"
});
Object.assign(T.en, {
  "nav.village": "Village",
  "ppl.tag": "All of this is a proposal. Nobody below has been assigned: seats are empty until the PI and instructors decide (H-01).",
  "ppl.seats": "Seats", "ppl.primary": "student primary seats", "ppl.secondary": "student secondary seats", "ppl.adv": "advisors (capacity estimate)", "ppl.adults": "instructors and Ops (one adult can hold several functions)",
  "ppl.load": "Estimated team load", "ppl.load.sub": "All role hours each month as a share of capacity. Estimates added up, not measured. September is tightest.",
  "ppl.rules": "Five rules", "ppl.cat": "Role catalogue", "ppl.search": "Find a role: name, file or skill", "ppl.all": "All",
  "ppl.own": "Owns", "ppl.week": "Weekly", "ppl.time": "Time", "ppl.peak": "Peak", "ppl.backup": "Backup", "ppl.file": "Files", "ppl.fit": "Suits", "ppl.when": "When",
  "ppl.h": "h/week (estimate)", "ppl.sec": "secondary", "ppl.none": "No role matches.", "ppl.seat": "seats", "ppl.func": "function", "ppl.inv": "See it in the village",
  "ppl.students.g": "Students", "ppl.tbd": "New items to be decided",
  "vg.eyebrow": "iGEM Village", "vg.title": "A year you can<br>walk around in.",
  "vg.sub": "Each district is a function and each building a role or a job. Little villagers carry documents along the real hand-offs, and lights follow the month’s work. Click a building or a villager, or find your job.",
  "vg.tag": "Villagers are not real people, and no seat is assigned yet. Hours are estimates.",
  "vg.play": "Play the year", "vg.pause": "Pause", "vg.prev": "Previous month", "vg.next": "Next month", "vg.month": "Month",
  "vg.map": "Map", "vg.list": "List", "vg.labels": "Labels", "vg.find": "Find my job", "vg.findph": "Type: drawing, Hub, photos…",
  "vg.road": "On the road now", "vg.roadnone": "Nobody is on the road right now.", "vg.hint": "Click a building or a villager. Arrow keys move between buildings; Enter opens one.",
  "vg.thismonth": "This month", "vg.own": "Owns", "vg.handto": "Hands to", "vg.from": "Receives from", "vg.file": "Which file", "vg.backup": "Backup", "vg.nofile": "No tab or folder of its own",
  "vg.rest": "This role has not started yet this month, or has already finished.", "vg.node": "Node", "vg.carry": "Carrying", "vg.goto": "Going to", "vg.fromb": "From", "vg.cadence": "How often", "vg.fn": "Function",
  "vg.week": "A week in the life", "vg.weekof": ": a week", "vg.weekclose": "Close", "vg.weekplay": "Walk it", "vg.other": "Varies", "vg.weeknote": "Role time only; lab and project work are extra. Minutes are estimates.", "vg.wmin": "min",
  "vg.load": "Team role hours", "vg.cap": "capacity", "vg.est": "estimate", "vg.loadh": "h/week", "vg.seats": "seats", "vg.quiet": "The whole team is in Paris. The village is quiet.", "vg.crunch": "Crunch mode",
  "vg.skip": "Skip the village map and use the list", "vg.listsub": "The same content, with no animation.", "vg.events": "Dates in the year", "vg.jump": "Jump to", "vg.th": ["District", "Building", "Roles", "This month"], "vg.mapl": "iGEM Village map. Arrow keys move between buildings",
  "ph.eyebrow": "Photo system", "ph.title": "One photo,<br>one place.", "ph.sub": "From phone to Drive: students post once, two Photo Stewards file on Sundays, and photos are found through the Hub and the file name. A proposal, awaiting the PI.",
  "nav.research": "Research",
  "res.eyebrow": "2027 research system", "res.title": "Reading doesn’t count.<br>Changing a decision does.",
  "res.sub": "What research produces is not papers read. It is cards that get cited (L), questions that get answered (RQ) and decisions that change (D). It starts on 29 Nov, the first part of the whole system to be used for real.",
  "res.jump": "Watch one research record", "res.status": "Proposal v1.0. The seed questions and the acting Research Lead are confirmed by the PI.",
  "res.why": "Where 2026 got stuck", "res.why.lesson": "So in 2027 students no longer invent the answer: the questions already exist, the field is a dropdown, and a card is one row in a table.",
  "res.structure": "The structure: one line, five supports", "res.reader": "Reader",
  "res.around": "Around the line",
  "res.dates": "Ready by 25 Nov, starts 29 Nov", "res.dates.warn": "Without these 10 questions, column 5 repeats 2026’s 0%.", "res.miles": "What follows",
  "res.who": "Who does what, and when", "res.who.th": ["Who", "What", "When", "Per week"],
  "res.who.note": "The likeliest point of failure is an instructor, not a student: 15 weeks acting as Research Lead from 29 Nov to 10 Mar while also running classes and training. All minutes are estimates, to be calibrated against real people in the first week.",
  "res.steps": "Seven steps for one paper, and how long each takes", "res.steps.th": ["Step", "What", "Time", "Who"],
  "res.leads": "How the Research Lead is chosen", "res.leads.sub": "Instructors act from 29 Nov to 10 Mar. At N06 (10 Mar) instructors review three kinds of impact evidence, and the PI and instructors decide. Papers read is not one of them. The Vice Lead is judged on the last two, plus how tidy the library is.",
  "res.fair": "How the evidence resists padding", "res.fair.note": "Students see events, never rankings or scores. This system appoints nobody.",
  "res.rules": "Three rules",
  "res.refs": "Reference lists generate themselves",
  "res.refs.p": "refs.py builds each page’s list from Papers, Facts, Figures and a library snapshot, and prints anything unmatched to UNRESOLVED.txt. People have one job: while writing the wiki, put the page number in column 19. Nobody re-orders a list before freeze.",
  "res.case.eyebrow": "Worked example", "res.case.h": "One paper, four extractions.",
  "res.case.sub": "ReLEAF’s anchor paper, run once through the new system. Not an invented demonstration: every cell below is something we really took from this paper, or something we changed.",
  "res.case.paper": "Anchor paper", "res.case.lic": "Licence",
  "res.case.then": "2026: this paper lived in five places", "res.case.now": "2027: what it becomes",
  "res.case.takes": "The four things we actually took", "res.case.took": "Taken", "res.case.chg": "What we changed", "res.case.land": "Where it lands",
  "res.case.rq": "The seed question: RQ02, written by instructors before 25 Nov",
  "res.case.doc": "What the card looks like", "res.case.doc.sub": "One document per theme, one tab per paper. Takeaway and numbers at the top, admin at the foot — this is written for whoever asks, three months from now, why we did it this way.",
  "res.case.docfile": "File", "res.case.figph": "Figure goes here",
  "res.case.t.take": "TAKEAWAY (one sentence, and it could be wrong)", "res.case.t.so": "So we should", "res.case.t.num": "Results: numbers we can use",
  "res.case.t.fig": "Key figures and schematics", "res.case.t.took": "What we took, and what we changed", "res.case.t.lim": "Method limits: why we cannot copy it",
  "res.case.t.new": "New questions raised", "res.case.t.adm": "Admin",
  "res.case.card": "Where each of the 19 fields lives", "res.case.card.sub": "Only five columns need thinking, at 90 seconds each. The rest are dropdowns, copies, routing, or filled in later.",
  "res.case.mc": "Its MethodCompare row — required, because column 3 says “method”", "res.case.mcnote": "The whole tab is archived to 90 Archive after N10 (1 Apr), when ordering starts.",
  "res.case.chain": "What the card cashes in for", "res.case.v": "Usable numbers → Hub.Facts", "res.case.d": "Decisions changed → Hub.Decisions",
  "res.case.ri": "Impact → Research.Impact", "res.case.f": "Figures → Hub.Figures", "res.case.refs": "References → refs.py",
  "res.case.breaks": "Where this paper presses on the system", "res.case.vth": ["V", "Number", "What it says", "From"],
  "res.rights": "Figures and copyright", "res.see": "See the research system", "flow.cost": "Time",
  "ppl.decided": "Confirmed by the PI",
  "ph.flow": "The flow", "ph.name": "The file name, made by a tool", "ph.home": "Where things live", "ph.duty": "The Photo Steward’s job", "ph.rules": "Three things that do not bend", "ph.see": "See the photo system", "ph.village": "See the darkroom in the village"
});
