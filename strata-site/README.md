# STRATA — Corporate Finance & Capital Advisory

An award-grade, single-page marketing site for a fictional independent corporate
finance house. Built fresh with **React 19 + Vite + TypeScript** and an authored CSS
design system.

This is a **standalone product** — it shares no code with anything else in the repo.

## Design direction

The look and motion are modelled on three recent Awwwards-recognised corporate-finance
sites — **Synthesis Capital** (serious editorial confidence), **Tresmares Capital** (a
single ownable geological metaphor + scroll-driven motion) and **Hayden Capital**
(cursor-reactive hero, panel-scroll, border-drawing reveals, data transparency).

Signature elements:

- A cinematic dark hero with a staggered serif type load-in.
- A bespoke **cursor-reactive topographic "contour" canvas** (the *strata* motif),
  parallaxing on scroll and bowing toward the pointer — and fully static under
  `prefers-reduced-motion`.
- Border-drawing capability cards, a sticky panel-scroll Approach, and animated
  track-record counters.

## Develop

```bash
npm install
npm run dev
```

## Build / lint

```bash
npm run build   # tsc -b && vite build
npm run lint
```

## Screenshots (Playwright)

With the dev server running:

```bash
URL=http://127.0.0.1:5173 node scripts/screenshot.mjs
```

## Layout

- `src/content/site.ts` — all typed site copy.
- `src/components/` — UI (Nav, Hero, ContourField, Capabilities, Approach, TrackRecord, …).
- `src/effects/` — reveal-on-scroll, smooth scroll (Lenis), scroll progress, active-section,
  reduced-motion.
- `src/index.css` — the authored design system (tokens, type scale, components, motion).
- `src/pages/` — `HomePage`, `LegalPage`. `#/legal` is the only sub-route; everything else
  is in-page anchored scroll.
