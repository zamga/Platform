# AGENTS.md

## Cursor Cloud specific instructions

### Product

BERGWEISS is a static React 19 + Vite + TypeScript marketing site in `bizly-app/`. There is no backend, database, or `.env` configuration. All forms are client-only demo UI (`DemoForm`).

### Commands (run from `bizly-app/`)

| Task | Command |
|------|---------|
| Install | `npm ci` |
| Dev server | `npm run dev` → http://127.0.0.1:5173 |
| Lint | `npm run lint` |
| Typecheck + build | `npm run build` |
| Production preview | `npm run preview` (after `npm run build`) |
| Single-file artifact | `npm run build:single` then copy to `docs/index.html` |

Node **22** matches CI (`.github/workflows/deploy-pages.yml`).

### Services

Only the **Vite dev server** (or `vite preview` after build) is required. No Docker, databases, or API keys.

Routing is **hash-based** (`#/gate`, `#/capabilities`, etc.). Use hash URLs when testing navigation in automation.

### Optional tooling

- `scripts/screenshot.mjs` — Playwright screenshots; requires dev server running and `npx playwright install chromium` once per VM.
- `scripts/check-live.mjs` — hits the deployed GitHub Pages CDN.

### Gotchas

- The npm package directory is still named `bizly-app` (legacy); the product brand is BERGWEISS.
- `npm run build` runs `tsc -b` before Vite; type errors fail the build.
- There is no npm `test` script; use lint + build for CI-style checks.
- For GitHub Pages builds locally, set `GITHUB_PAGES=true` so Vite uses relative asset paths (`base: './'`).
