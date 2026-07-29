// ---------------------------------------------------------------------------
// 1. Text-appear / fade-up reveal on scroll
// ---------------------------------------------------------------------------
const revealTargets = document.querySelectorAll<HTMLElement>(
  '[data-reveal], [data-reveal-fade]'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -8% 0px',
  }
);

revealTargets.forEach((el) => revealObserver.observe(el));

// Immediately reveal elements already in the viewport on load
requestAnimationFrame(() => {
  revealTargets.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible');
      revealObserver.unobserve(el);
    }
  });
});

// ---------------------------------------------------------------------------
// 2. Parallax scrolling on image layers
// ---------------------------------------------------------------------------
const parallaxLayers = Array.from(
  document.querySelectorAll<HTMLElement>('[data-parallax]')
).map((el) => ({
  el,
  speed: parseFloat(el.dataset.speed || '0.15'),
}));

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

let ticking = false;

function updateParallax() {
  ticking = false;
  const viewportH = window.innerHeight;

  for (const { el, speed } of parallaxLayers) {
    const frame = el.parentElement as HTMLElement;
    const rect = frame.getBoundingClientRect();

    // progress: -1 (element bottom is at viewport top) .. 1 (element top is at viewport bottom)
    const center = rect.top + rect.height / 2;
    const progress = (center - viewportH / 2) / viewportH;

    const offset = progress * speed * 100; // percentage-based shift
    el.style.transform = `translate3d(0, ${offset}px, 0)`;
  }
}

function onScroll() {
  if (!ticking && !prefersReducedMotion) {
    ticking = true;
    requestAnimationFrame(updateParallax);
  }
}

if (!prefersReducedMotion && parallaxLayers.length) {
  updateParallax();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}
