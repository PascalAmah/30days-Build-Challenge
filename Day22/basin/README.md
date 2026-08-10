# Basin — agency hero page (Astro)

A recreation of the Basin agency-brutalist hero: hairline-divided masthead,
a giant kinetic "BASIN" wordmark, and a filmstrip of five original app
mockups.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Astro prints (usually http://localhost:4321).

## Where the interactions live

Everything is in `src/pages/index.astro` — markup, styles, and a small
vanilla-JS `<script>` block at the bottom, no extra dependencies.

- **Wordmark** — move your cursor across "BASIN": nearby letters lift and
  flip to the accent color, like a magnetic Swiss-poster effect.
- **Tagline** — fades and sharpens into view word-by-word as it scrolls
  into frame; hovering a word darkens it.
- **Nav links** — hovering one link dims its siblings and draws an
  underline; the active link ("Home") keeps its underline at rest.
- **App screenshots** — each phone fades/slides up on scroll, tilts in 3D
  toward your cursor on hover, and gives a little accent-colored "launch"
  pulse on click or Enter/Space.

All motion respects `prefers-reduced-motion`.

## App mockups

The five phones (MedCabinet, GoAnywhere, FreshMart, QuickEats, MoveWell)
are original, generic UI compositions inspired by the *categories* shown
in the brief (pharmacy, rides/delivery, grocery, food delivery, fitness) —
not reproductions of any specific branded app.
