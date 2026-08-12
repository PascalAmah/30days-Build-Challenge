# Nav Overlay — Astro

Recreation of the full-screen nav overlay (Close, ABOUT/TEAM/SERVICES/CAREERS/CONTACT, blurb, "Book a call" button, portrait image) as a single reusable Astro component.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Files

- `src/components/NavOverlay.astro` — the whole component (markup, styles, behavior)
- `src/pages/index.astro` — a page that mounts it
- `public/images/hero-about.png` — the source portrait image

## How the image-swap works

Each nav item (About / Team / Services / Careers / Contact) is wired to its own layer in the `.visual` stack. Hovering (desktop, pointer devices only) or tapping/clicking a link crossfades to that item's layer and swaps the blurb text below the nav. Clicking "locks in" the selection so it stays after your mouse leaves.

**Note on images:** only one source photo was provided, so the 5 layers currently reuse it with distinct color/tone treatments (via CSS `filter` + a blend-mode tint) so each section reads as visually distinct. To use real per-section photography instead, just:

1. Drop new files in `public/images/` (e.g. `hero-team.png`, `hero-services.png`, …)
2. In `NavOverlay.astro`, change each item's usage from the shared `heroSrc` to its own path, and drop the `filter`/`tint` if you don't need them anymore.

## Responsiveness

- **< 900px** (mobile/tablet): image below the nav list, full width, matches the mobile screenshot.
- **≥ 900px** (desktop): image fixed to the left 46% of the viewport height, text panel on the right, matches the desktop screenshot.
- Respects `prefers-reduced-motion` (disables crossfade/hover transitions).
- Hover-preview only fires on devices that support real hover (`@media (hover: hover)`), so touch devices go straight to tap-to-select without a stuck hover state.
