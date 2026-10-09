# ecc 個人網站 V17

使用 Astro 製作的繁體中文個人作品集與部落格，可部署至 GitHub Pages。

## V17 更新內容
- 文章依發布日期由新到舊排列。
- 文章列表顯示標籤，可點擊標籤篩選，也可搜尋標題、摘要與標籤。
- 文章內頁顯示標籤，點擊後可回到文章列表並套用標籤篩選。
- 首頁網站統計上方新增布告欄。
- 已加入 GitHub Actions 部署流程。

## 本機預覽
先安裝 [Node.js](https://nodejs.org/) 的 LTS 版本，再於專案資料夾執行：

```bash
npm install
npm run dev
```

在瀏覽器開啟終端機顯示的網址，通常是 `http://localhost:4321/`。

## 部署到 GitHub Pages（建議方式）

### 1. 建立 GitHub 儲存庫
1. 登入 [GitHub](https://github.com/)。
2. 按右上角 `+` → `New repository`。
3. 儲存庫名稱建議直接填成 `你的GitHub帳號.github.io`（例如帳號是 `edychie`，名稱就是 `edychie.github.io`）。這樣網站會發布在網域根目錄，不需要另外設定 `base`。
4. 選 `Public`，建立儲存庫。

### 2. 設定網站網址
打開專案中的 `astro.config.mjs`，把 `https://YOUR_USERNAME.github.io` 的 `YOUR_USERNAME` 改成你的 GitHub 帳號。保留 `base: '/'`。

### 3. 把專案上傳到 GitHub
先解壓縮本專案 ZIP，進入解壓後的 `edi-personal-astro-v17` 資料夾。你可以用 GitHub Desktop（較簡單）或 Git 指令上傳。

**GitHub Desktop 方式（推薦新手）：**
1. 安裝 [GitHub Desktop](https://desktop.github.com/)，並登入 GitHub。
2. 在 GitHub Desktop 選 `File` → `Clone Repository`，選擇剛剛建立的 `你的帳號.github.io` 儲存庫，將它複製到電腦。
3. 把本 ZIP 解壓後的**專案內所有檔案與資料夾**複製到剛剛 clone 下來的資料夾。要確認 `.github` 這個隱藏資料夾也有複製進去；不要把外層包裝資料夾再多套一層。
4. 回到 GitHub Desktop，應該會看到新增／修改的檔案。在左下角填寫摘要，例如 `Initial website`，按 `Commit to main`，再按 `Push origin`。

**若你已安裝 Git，也可以在專案資料夾終端機執行：**

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/你的帳號/你的帳號.github.io.git
git push -u origin main
```

請將指令中的「你的帳號」換成實際帳號。若 `origin` 已存在，先不要重複執行 `git remote add origin`。

### 4. 開啟 GitHub Pages
1. 到 GitHub 儲存庫的 `Settings` → `Pages`。
2. 在 `Build and deployment` 的 `Source` 選擇 `GitHub Actions`。
3. 點選 `Actions` 分頁，等待 `Deploy to GitHub Pages` 工作流程完成且顯示成功。
4. 網站網址會是 `https://你的帳號.github.io/`。第一次部署可能需要幾分鐘。

以後只要把修改提交並推送到 `main`，GitHub Actions 就會自動重新建置與部署。

## 新增文章
在 `src/content/blog/` 新增 `.md` 檔案，格式如下：

```markdown
---
title: '文章標題'
description: '文章摘要'
pubDate: 2026-10-09
tags: ['Python', '學習筆記']
---

文章內容寫在這裡。
```

`pubDate` 決定文章排序（最新的在最上方），`tags` 用來顯示標籤與篩選。
