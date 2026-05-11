# Cedar's Mediterranean Lounge

Marketing site for Cedar's Mediterranean Lounge in Windsor, Ontario.

- Production: https://cedarsmediterraneanlounge.ca
- Vercel project: `abboudy-ryans-projects/cedars-mediterranean-lounge`

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS
- Toolchain pinned via `mise.toml`: Node 22.22.2 + pnpm 10.11.0
- Smooth scroll: Lenis (mounted once at the body root)
- Hosting: Vercel

## Local development

```sh
pnpm dev    # http://localhost:3000
pnpm lint
```

> ⚠️ Don't run `pnpm build` while `pnpm dev` is running. They share `.next/` and clobber each other, leaving the dev server in an unrecoverable state until restarted with a wiped `.next/`.

## Theme + design conventions

All visual tokens live in `tailwind.config.ts`. Don't put raw hex codes in components — extend the theme instead.

| Token                               | Use                                              |
| ----------------------------------- | ------------------------------------------------ |
| `ink` / `ink-900` / `ink-800`       | Backgrounds and surfaces                         |
| `bone` / `bone-muted` / `bone-dim`  | Text scale                                       |
| `gold` / `gold-hover` / `gold-deep` | Accent + headings                                |
| `olive` / `olive-deep`              | Hero gradient bottoms (the Mediterranean warmth) |
| `rust`                              | Reserved (currently unused)                      |

Typography:

- `font-display` (Fraunces serif) — h1/h2/h3
- `font-sans` (Inter) — body

Shared components:

- `<PageHero>` — gradient title block on every sub-page
- `<Card>` — link card pattern used in the homepage events grid
- `<GalleryMosaic>` — 6-tile editorial grid with fullscreen lightbox over all carousel images
- `<SmoothScroll>` — initializes Lenis once; mounted in `app/layout.tsx`

## Festival auto-hide

The current St. Peter's Lebanese Festival promo is driven by a single source of truth at `app/festival/festival-config.ts`. The exported `isFestivalActive()` is consumed by:

- `app/page.tsx` — homepage events card
- `components/AppHeader.tsx` — nav link
- `app/sitemap.ts` — sitemap entry
- `app/festival/page.tsx` — calls `notFound()` past the cutoff

For the cutover to propagate site-wide, every page that touches festival state (directly or via the shared layout) sets `export const revalidate = 86400` (daily ISR). When updating for a future festival: edit `festival-config.ts`, bump `endIso`, swap the poster in `public/assets/images/festival-YYYY.png`.

## Performance

- `content-visibility: auto` is applied to below-the-fold sections in `globals.css` via `main > section:not(:first-of-type)`. Don't undo this for the homepage — load-bearing for scroll FPS on a long page.
- Avoid `backdrop-blur` on always-visible elements (sticky header etc.) — major scroll FPS hit because the browser re-blurs every frame.
- Heavy `box-shadow` blur radii (>32px) on elements that scroll past viewport repeatedly are also expensive. Prefer `shadow-glow` over `shadow-glow-strong` unless you actually need the heavier halo.
- Use `data-lenis-prevent` on scrollable overlays (modals, lightboxes) so Lenis doesn't intercept their scroll. The lightbox in `GalleryMosaic.tsx` uses this.

## Images

Everything is self-hosted under `public/assets/`. There is no remote image whitelist — `next.config.ts`'s `images` config is deliberately empty.

- Hero logo: `/assets/images/logo.JPG` (the actual restaurant brand mark, 800×600, white background)
- Header mark: `/assets/icons/cedar-logo.svg` (Lebanon coat-of-arms)
- Festival poster: `/assets/images/festival-2026.png` (year-suffixed for next year)
- Gallery: 56 photos in `public/assets/images/carousel/` — homepage shows the first 6 in the mosaic; the lightbox cycles all 56

## Known oddities

- `next.config.ts:3-12` has a top-level `global.localStorage` deletion hack with no explanatory comment. Origin unclear (likely a Swiper SSR workaround that's now stale since Swiper was removed). Test before removing.
- `public/manifest.json` references `/icon.png` and `/apple-icon.png` that don't exist, and isn't linked from `app/layout.tsx`. Either delete or wire it up properly.
- `next lint` is deprecated in Next 15.5. Migration: `npx @next/codemod@canary next-lint-to-eslint-cli .`
