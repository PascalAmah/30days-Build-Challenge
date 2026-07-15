# Studio Volt — landing page

Astro recreation of the reference landing page: hero with glowing CTA,
plus a bottom row of cards that auto-scrolls like a ticker and flips
to reveal detail on hover.

## Run it

```bash
npm install
npm run dev
```

Open the printed localhost URL.

## Swap in real images

Card art lives in `src/pages/index.astro` in the `cards` array. Each
entry currently points at a Picsum placeholder:

```js
src={`https://picsum.photos/seed/${card.seed}/420/580`}
```

Drop your real files in `public/images/` and change that line to
something like `src="/images/sneaker-drop.jpg"`. Keep the ~3:4.2
portrait aspect ratio for the cleanest fit.

## How the ticker + flip works

- `.ticker-track` renders the card list twice back-to-back and
  animates `translateX` from `0` to `-50%` (`@keyframes ticker-scroll`),
  which makes the loop seamless.
- Hovering **any** card pauses the whole row via
  `.ticker-track:has(.card:hover)`.
- Each card is a `.card-inner` with `transform-style: preserve-3d`;
  hovering it rotates it 180° on the Y axis, swapping the image face
  for a text face (`.card-front` / `.card-back`), each hidden on its
  reverse side with `backface-visibility: hidden`.
- Card count, size, and gap are CSS custom properties (`--card-w`,
  `--gap`) so the loop distance and responsive sizing stay in sync —
  edit those instead of the animation keyframes directly.
