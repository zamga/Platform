# Northwind — Financial Platform

A top-tier, production-quality marketing design for a modern fintech / financial-operations platform. Inspired by the visual language of Mercury, Ramp, Stripe, Linear, and Brex.

The site is built as a single, self-contained static page — no build step, no dependencies — so it can be opened directly in any browser or hosted from any static host.

## Highlights

- **Premium dark aesthetic** — layered radial gradients, subtle grid, animated orbs, film-grain overlay.
- **Sophisticated type system** — Inter for UI, Instrument Serif for accents, JetBrains Mono for data.
- **Glassmorphic, sticky navigation** with backdrop blur and pill controls.
- **Cinematic hero** with serif-italic accent, status pill, and live demo dashboard mock.
- **Interactive product dashboard** — animated balance counter, sparkline that draws on load, tooltip, account cards, transaction ledger.
- **Live financial ticker** — infinite-scroll quote band with subtle value flashes.
- **Bento feature grid** — banking, cards, treasury, AI copilot, global payments, and developer API, each with its own custom illustration:
  - Realistic account cards
  - 3D-feeling credit card with chip and gradient
  - Donut allocation chart with portfolio breakdown
  - AI chat thread with citations
  - FX rate table
  - Syntax-highlighted code sample
- **Trust & security** section with shield illustration, compliance chips, and credential ribbons.
- **Workflow steps**, **customer quotes**, **3-tier pricing** with featured plan, and a high-impact CTA.
- **Full responsive design** down to 360px, with motion-reduced fallback for accessibility.

## File structure

```
.
├── index.html      Page markup and content
├── styles.css      Design tokens, components, layout
├── script.js       Scroll reveal, counters, ticker animation
└── README.md
```

## Run it

No build step required.

```bash
# any static server works
python3 -m http.server 5173
# then open http://localhost:5173
```

Or just double-click `index.html`.

## Design tokens

The palette is a deep, near-black base (`#06070b`) with a signature emerald (`#00d68f` → `#26ffd0`) accent and a violet secondary (`#7c5cff`). All radii, surfaces, borders, and shadow ramps live in `:root` CSS custom properties at the top of `styles.css` and are easy to retheme.

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`).
- Decorative SVGs are `aria-hidden`.
- Color pairings meet WCAG AA against the dark surface.
- `prefers-reduced-motion` disables all animations and reveal transitions.
