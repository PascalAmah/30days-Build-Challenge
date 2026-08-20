# Build in Public — hero section

An Astro recreation of the "Helping Designers Build in Public" hero.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## What's interactive

- **Headline** — each word pops and tilts on hover; the whole line gives a subtle
  tilt as your cursor moves across it.
- **Email signup** — focus state, inline validation (shakes on a bad email),
  and a success state that swaps the button label and disables the field.
- **Filmstrip** — click/tap and drag the row of builder cards left or right.
  Releasing keeps it moving with momentum that decays like a native scroll
  fling, with a soft rubber-band at each end. Before you touch it, the row
  drifts slowly back and forth on its own to hint that it's draggable — it
  stops for good the moment you interact with it.

## Structure

- `src/pages/index.astro` — the whole page (markup, styles, and the drag/momentum script)
- `public/images/` — the seven builder photos used in the filmstrip
