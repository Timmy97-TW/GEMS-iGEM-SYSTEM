# GEMS iGEM System

The 2027 operating system for the GEMS Taiwan iGEM team, drawn from the 2026 season. The home page shows today; the other pages cover the whole system, the schedule, roles, the Student Advisor programme, research and a log of updates.

看懂 2027 年的團隊系統：首頁看今天，其他頁面分別是系統全貌、時程、角色、Student Advisor 計畫、Research 和更新紀錄。

The site students open every day is a separate one, the **[2027 Project Hub](https://timmy97-tw.github.io/GEMS-iGEM-2027-Hub/)** ([repo](https://github.com/Timmy97-TW/GEMS-iGEM-2027-Hub)): weekly goals, milestones, homework, owners, credits and every link. This site explains why the system is built the way it is; the hub says what to do today. The hub copies `TIMELINE`, `YEAR_BANDS`, `PEOPLE`, the rules, IDs, Hub tabs, `DRIVE` and `YEAR_ITEMS` from `assets/data.js` every night, so **renaming or reshaping those breaks its sync** (its Action fails and it keeps the last good copy).

The **[2027 wiki template](https://timmy97-tw.github.io/GEMS-iGEM-2027-wiki-template/)** ([repo](https://github.com/Timmy97-TW/GEMS-iGEM-2027-wiki-template)) has a live preview on GitHub Pages, linked from the home page. It is not the judged wiki; iGEM judges only the copy deployed on gitlab.igem.org.

## Pages

| Page | For | What it holds |
|---|---|---|
| `index.html` | Everyone, daily | Today: next node, the year so far, latest updates, doors to each page, the village |
| `system.html` | Anyone seeing the whole system | Why, rules, architecture, Drive, flow, document year, standards, village |
| `timeline.html` | The team, weekly | The year chart and every node with its pass condition |
| `people.html` | Students and instructors | Seats, weekly work and estimated hours |
| `students.html` | Students, families, instructors | What each student did and who they became, how it is recorded, three invented years (Wet, Dry, HP, animated), the yearbook and who sees what |
| `advisors.html` | Advisors and instructors | Stages, monthly floor, one output's path, documents, roles |
| `research.html` | Anyone doing research | The process, its flow and its place in the documents |
| `updates.html` | Everyone | Dated log of changes |

## Files

- `assets/data.js`: nearly all content, Chinese and English side by side.
- `assets/updates.js`: the daily log. **To post an update, add one line at the top of this file.** Today's date, the next node and the countdown are computed in the browser, so they need no daily edit.
- `assets/site.js`: the shared nav and footer, page strings, and everything that depends on today's date. Add or rename a page here.
- `assets/app.js`: section rendering. A renderer runs only when its root element is on the page.
- `assets/journey.js`, `assets/journey.css`: the student journeys page. Its students are invented; real records never go on this site.
- `assets/village.js`: the iGEM Village, drawn in inline SVG.
- `assets/style.css`: section styles. `assets/pages.css`: page shell and home page.

A section can appear on more than one page. `data-only` on `#flow-tabs`, `data-lanes` on `#yr` and `data-folder` on `#tree` set what that copy shows.

No build step and no external requests. Open `index.html`, or serve the folder:

```bash
python3 -m http.server 8765
```

Everything here is a proposal (system spec v0.2, Drive spec v0.3). Seats are not assignments; hours are estimates. Dates follow the PI's 2027 schedule; iGEM dates marked `?` are estimates until 2027 is announced. Wiki Freeze shows as `10/6–13?` and internal gates back-plan from 10/6.

This repo is public. It summarises the system only: no real names, contact details, fees, discipline rules or records, individual reviews, Drive links, Discord invites, research strategy or project content. The same rule applies to every line in `assets/updates.js`.
