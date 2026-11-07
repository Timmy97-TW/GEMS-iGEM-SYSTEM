// The site's daily log. Newest first. One line per change that a reader would notice.
//   { d: "YYYY-MM-DD", tag: "system" | "schedule" | "advisor" | "research" | "site", t: { zh, en } }
// This file is public. Say what changed in the system or the site. Never: names, individual
// progress, reviews, fees, discipline, research strategy, Drive links or Discord invites.
// The home page shows the first few entries; updates.html shows them all.
const UPDATES = [
  { d: "2026-11-07", tag: "system", t: { zh: "團隊 Drive 的文件全部改成英文：範本、Wiki 主文件、說明頁和資料夾說明都換成英文版，中文原檔封存，沒有刪除。", en: "The team Drive is now in English: templates, wiki masters, guides and folder notes all have English versions. The Chinese originals are archived, not deleted." } },
  { d: "2026-11-06", tag: "site", t: { zh: "2027 Wiki 範本有線上預覽了：timmy97-tw.github.io/GEMS-iGEM-2027-wiki-template。首頁的入口和專案中心的連結頁都連得過去。評審只看 iGEM GitLab 上的那份。", en: "The 2027 wiki template has a live preview at timmy97-tw.github.io/GEMS-iGEM-2027-wiki-template, linked from the home page and the Project Hub’s Links page. Judges only see the copy on iGEM’s GitLab." } },
  { d: "2026-11-05", tag: "site", t: { zh: "2027 專案中心上線：學生每天用的入口，有本週目標、里程碑、作業、負責人、貢獻和所有連結。首頁、導覽列和頁尾都連得過去，節點與席位每天從這裡同步過去。", en: "The 2027 Project Hub is live: the daily front door for students, with weekly goals, milestones, homework, owners, credits and every link. The home page, nav and footer link to it, and it syncs its nodes and seats from this site every night." } },
  { d: "2026-11-05", tag: "system", t: { zh: "學生歷程頁重新設計：從 2026 學生的感言整理出八種成長，區分承擔與幫忙，並有 Wet、Dry、HP 三位虛構學生的一年與年鑑。", en: "Student journeys redesigned: eight kinds of growth drawn from 2026 students' words, owning versus helping, and three invented years and yearbooks for Wet, Dry and HP." } },
  { d: "2026-11-05", tag: "system", t: { zh: "新增學生歷程頁：能記下哪些貢獻與成長、怎麼記、一位虛構學生的一年，以及年鑑的樣子。", en: "Added the student journeys page: what can be recorded, how, one invented student's year, and what the yearbook looks like." } },
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
