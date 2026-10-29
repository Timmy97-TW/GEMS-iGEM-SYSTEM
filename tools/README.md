# Drive tree export

[`drive-tree-export.gs`](drive-tree-export.gs) 把一個或多個 Google Drive 資料夾底下的所有資料夾和檔案，逐列寫進一張 Google Sheet。它只讀 metadata，不讀、不下載任何檔案內容。

It lists every folder and file under one or more Drive roots into a Google Sheet. Metadata only; no file is opened or downloaded.

## 步驟

1. 開一個新的 Google Sheet，名字隨意，例如「Drive tree 2026」。
2. 上方選單：**擴充功能 → Apps Script**。
3. 把編輯器裡原本的程式碼全部刪掉，貼上 `drive-tree-export.gs` 的全部內容。
4. 在 `ROOT_IDS` 填入要掃描的資料夾 ID。ID 是資料夾網址的最後一段：
   `https://drive.google.com/drive/folders/`**`1AbC...xyz`**
   有好幾個頂層資料夾或共用雲端硬碟，就全部列進去，一行一個。
5. 存檔，上方函式選單選 **`start`**，按 **執行**。
6. 第一次會要求授權：選你的帳號 →「進階」→「前往（不安全）」→ 允許。這是你自己寫的腳本，Google 對所有未審核的腳本都會這樣提示。
7. 回到試算表。`_status` 分頁會顯示進度。看到 **DONE** 就是跑完了。
   - 檔案很多時會自動分好幾輪跑，每分鐘接續一次，不用盯著。你可以關掉頁面。
   - 想中途停止，執行 `stop`。
8. 選 **`tree`** 分頁 → **檔案 → 下載 → 逗號分隔值 (.csv)**。
9. 把 CSV 放到 `Releaf_Wiki/drive-audit/`（**不要**放進這個 public repo）。

## 欄位

| 欄位 | 內容 |
|---|---|
| path | 完整路徑 |
| name | 名稱 |
| kind | folder 或 file |
| mimeType / ext | 類型與副檔名 |
| sizeBytes | 大小（Google 文件、試算表是 0，正常） |
| created / modified | 建立與最後修改時間 |
| owner | 擁有者 email；共用雲端硬碟裡的檔案顯示 `(shared drive)` |
| sharing | 分享設定，例如 `ANYONE_WITH_LINK / VIEW` |
| depth | 第幾層 |
| id / url | 檔案 ID 與連結 |
| shortcutTarget | 捷徑指向的檔案 ID |

CSV 會含有成員的 email。若不想要，把 `HIDE_OWNER_NAMES` 改成 `true`，只會留下網域（例如 `@gmail.com`）。不過保留 email 才看得出「哪些檔案還在畢業生的個人帳號裡」。

每年 freeze 後跑一次，就是一份 Drive 健康檢查。
