# BERGWEISS — Corporate Finance & Private Capital Advisory

An award-grade single-page site for a fictional independent corporate finance and
private capital advisory firm. Built with React 19 + Vite + TypeScript.

## View on your phone (tap this)

**https://htmlpreview.github.io/?https://raw.githubusercontent.com/zamga/Platform/main/docs/index.html**

Works immediately — no install. `docs/index.html` is a self-contained single file
(all CSS, JS and media inlined, ~2.7 MB).

## Permanent hosting

GitHub Pages deploys automatically from `main` via `.github/workflows/deploy-pages.yml`
(it builds `bizly-app` and publishes the multi-file build). Site URL:
**https://zamga.github.io/Platform/**

## Develop locally

```bash
cd bizly-app
npm install
npm run dev
```

Rebuild the self-contained single file for the htmlpreview link:

```bash
cd bizly-app
npm run build:single
cp dist/index.html ../docs/index.html
```

## Project layout

- `bizly-app/` — the React/Vite application (the directory keeps its original name).
  - `src/content/` — typed content: route table, image registry and page data.
  - `src/components/`, `src/pages/` — UI components and per-route pages.
  - `src/effects/` — interactive hooks (spatial canvas, ambient audio, reveal-on-scroll, scroll progress).
  - `src/styles/bergweiss.css` — the authored design system.
- `docs/index.html` — the prebuilt single-file artifact for instant preview.
