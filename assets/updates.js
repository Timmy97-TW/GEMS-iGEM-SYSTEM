// The site's daily log. Newest first. One line per change that a reader would notice.
//   { d: "YYYY-MM-DD", tag: "system" | "schedule" | "advisor" | "research" | "site", t: { zh, en } }
// This file is public. Say what changed in the system or the site. Never: names, individual
// progress, reviews, fees, discipline, research strategy, Drive links or Discord invites.
// The home page shows the first few entries; updates.html shows them all.
const UPDATES = [
  { d: "2026-11-05", tag: "system", t: { zh: "系統正在收斂成「核心＋分階段啟用」：上線先開少數幾張表，隨學生的能力逐步開啟。本站的細節會陸續跟著更新。", en: "The system is being narrowed to a core with staged activation: a few sheets at launch, more as students grow into them. Details on this site will follow." } },
  { d: "2026-11-05", tag: "site", t: { zh: "首頁與系統頁重新排序：重點、架構、流程、Drive、文件年表與村莊提前。", en: "Home and System pages reordered: key points, architecture, flow, Drive, document year and village now come first." } },
  { d: "2026-11-05", tag: "site", t: { zh: "網站從一頁拆成多頁：首頁看今天，系統、時程、角色、Advisor、Research 各有自己的頁面，並新增這份更新紀錄。", en: "The site is now several pages: the home page shows today; the system, schedule, roles, advisors and research each have a page, and this log is new." } },
  { d: "2026-11-05", tag: "advisor", t: { zh: "Advisor 計畫獨立成頁，新增責任邊界、角色卡、一份產出的流程，以及只看 Advisor 的文件年表。", en: "The Advisor programme has its own page, with responsibilities, role cards, the path of one output and a document year filtered to advisors." } },
  { d: "2026-11-05", tag: "research", t: { zh: "Research 獨立成頁，把研究流程、Drive 位置和文件年表放在一起看。", en: "Research has its own page, with its flow, its place in the Drive and the document year side by side." } },
  { d: "2026-11-05", tag: "research", t: { zh: "新增 Research 系統與流程分頁，公開 2027 的研究流程。", en: "Added the Research system and a Research flow tab, showing the 2027 research process." } },
  { d: "2026-11-05", tag: "system", t: { zh: "新增 iGEM 村莊、照片系統和詳細角色，並對齊 Drive 規格 v0.3。", en: "Added the iGEM Village, the photo system and detailed roles, aligned with Drive spec v0.3." } },
  { d: "2026-11-05", tag: "schedule", t: { zh: "網站對齊 2027 時程表與系統規格。", en: "Aligned the site with the 2027 schedule and the system spec." } },
  { d: "2026-11-05", tag: "advisor", t: { zh: "新增 2027 Student Advisor 計畫。", en: "Added the 2027 Student Advisor programme." } },
  { d: "2026-10-29", tag: "system", t: { zh: "依 2026 Drive 稽核重新設計 Drive 結構。", en: "Redesigned the Drive structure from the 2026 Drive audit." } },
  { d: "2026-10-29", tag: "system", t: { zh: "新增流程動畫：一份檔案怎麼走過 Drive。", en: "Added the flow animation: how one file moves through the Drive." } },
  { d: "2026-10-29", tag: "site", t: { zh: "網站上線：2027 團隊系統總覽。", en: "The site went live: an overview of the 2027 team system." } }
];
