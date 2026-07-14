# Dentheal — Next.js + Builder.io

Production build of the Dentheal dental clinic site. Design-source: `_design/Dentheal.dc.html`. Stack: Next.js 14 (App Router) + TypeScript + Tailwind + Builder.io CMS. Clinical Blue theme.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill NEXT_PUBLIC_BUILDER_API_KEY
npm run dev                   # http://localhost:3000
```

Site works with **no** Builder key — default content in `src/lib/data.ts` renders. Key just enables CMS overrides.

## Structure

```
src/
  app/                    routes: /, /services, /about, /blog, /book
    layout.tsx            Header + Footer + FloatingBookBtn shell
    globals.css           HSL token system + Clinical Blue palette
  components/
    Header.tsx            sticky glass nav + dark mode toggle
    Footer.tsx            + FooterForm.tsx
    FloatingBookBtn.tsx   persistent book CTA
    Reveal.tsx            IntersectionObserver scroll-reveal
    RenderBuilder.tsx     Builder content <-> fallback bridge
    builder-registry.ts   ALL section components registered as Builder blocks
    sections/             every visual block (Hero, TrustBar, PopularServices, AboutNumbered, Journey, BeforeAfter, Team, Testimonials, Hours, BlogTeaser, CtaBand, ServicesGrid, AboutStory, BlogList, BookingFlow)
  lib/
    data.ts               DEFAULT content — services, doctors, posts, hours, clinic info
    builder.ts            builder.init + BUILDER_ENABLED flag
    get-builder-content.ts server helper: fetch page by URL
    api.ts                3rd-party integration seam (booking + availability)
```

## Theming

`src/app/globals.css` holds one Clinical Blue token block + a `[data-mode="dark"]` override. Tailwind resolves `bg-primary` etc via `hsl(var(--token) / <alpha>)`. Recolour = edit those tokens. No component change needed.

Design ships with 3 themes (Clinical Blue / Warm Mint / Soft Neutral). Only Clinical Blue is included — per client requirement. Other palettes preserved in `_design/THEMING.md` for reference.

## Builder.io — every section editable

1. Create a Builder.io space, grab the **Public API Key**, set `NEXT_PUBLIC_BUILDER_API_KEY` in `.env.local`.
2. In Builder, create a `Page` model (default exists).
3. For each URL you want editable (`/`, `/services`, `/about`, `/blog`, `/book`) create a page entry with that URL. The custom blocks (Hero, TrustBar, PopularServices, AboutNumbered, Journey, BeforeAfter, Team, Testimonials, Hours, BlogTeaser, CtaBand, ServicesGrid, AboutStory, BlogList, BookingFlow) appear in the sidebar — drop them in and edit props visually.
4. Any input flagged in `src/components/builder-registry.ts` is editable. Add more inputs there whenever you expose new content.

**Fallback:** if a URL has no Builder entry, the page renders its default composition (see `src/app/*/page.tsx`). Editors can override incrementally — nothing breaks.

**Preview:** Builder's `?builder.preview=page` URL parameter drops the site into visual-edit mode automatically (`useIsPreviewing` in `RenderBuilder.tsx`).

## 3rd-party API integration

`src/lib/api.ts` is the single seam.

- `submitBooking(payload)` — posts to `CLINIC_API_BASE_URL/appointments` if env is set; mock-returns otherwise.
- `fetchAvailability(serviceSlug)` — pulls live slots when the env is set; returns fixed defaults otherwise.

Swap the impl (Calendly / NexHealth / Zocdoc / custom REST) without touching UI. Env vars in `.env.example`.

Data pulled from APIs will render in the current theme automatically because every visual token is CSS-var driven.

## Editability checklist

- **Content** — every array in `src/lib/data.ts` is the default. Same shape editable per-section in Builder.
- **Design tokens** — one file: `src/app/globals.css`.
- **Nav** — `NAV` in `src/lib/data.ts`.
- **Clinic info (address, phone, brand)** — `CLINIC` in `src/lib/data.ts`; used by Header, Footer, meta.
- **Adding a service** — one object in `SERVICES` (or Builder input on the ServicesGrid block).
- **New page/section** — add file in `src/components/sections/`, register in `builder-registry.ts`, drop into a page.

## Production notes

- `revalidate = 60` on every page — ISR, safe with Builder edits.
- `next/image` remotePatterns whitelisted for `images.unsplash.com` and `cdn.builder.io`.
- Dark mode persists via `localStorage`.
- Scroll-reveal respects `prefers-reduced-motion`.
- SEO: metadata in `layout.tsx`; extend per-page as needed with the Metadata API.

## Deploy

Any Next.js host — Vercel is simplest. Set `NEXT_PUBLIC_BUILDER_API_KEY` (+ optional `CLINIC_API_*`) in the environment and ship.
