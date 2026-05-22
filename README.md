# Bizly.ai Landing Page

## View on your phone (tap this)

**https://htmlpreview.github.io/?https://raw.githubusercontent.com/zamga/Platform/main/docs/index.html**

Works immediately — no install, no GitHub Pages setup.

## Permanent hosting (optional)

In GitHub: **Settings → Pages → Build from branch → `main` → `/docs` → Save**

Then use: **https://zamga.github.io/Platform/**

## Develop locally

```bash
cd bizly-app
npm install
npm run dev
```

Rebuild the mobile-friendly single file:

```bash
cd bizly-app
npm run build:single
cp dist/index.html ../docs/index.html
```
