# Dentheal — Modern Dental Clinic Website

A high-fidelity, interactive **design prototype** for a dental practice: premium serif + sans type, glassmorphic depth, live theme switching, and a working multi-step booking flow. Built as a single streaming Design Component (`Dentheal.dc.html`) that opens directly in a browser.

This prototype is the **design source of truth / handoff spec** for the production Next.js build described below.

## What's in the prototype

- **Home** — hero + CTA, trust bar, featured services grid, why-choose-us, testimonials, blog teaser, gradient CTA band, footer.
- **Services** — data-driven index with category filters (All / Preventive / Cosmetic / Restorative / Specialty); every card books in ≤2 clicks.
- **About** — story, stats, values, team.
- **Blog** — featured post + article grid.
- **Book Appointment** — interactive 4-step flow (service → date & time → details → confirmation) with validation.
- **Live theming** — 3 presets (Clinical Blue, Warm Mint, Soft Neutral) + light/dark, all from semantic tokens. See `THEMING.md`.
- **Before/after slider** — "Just a step away from a perfect smile": drag-to-reveal whitening comparison (accessible range input; keyboard-operable).
- **Scroll-reveal transitions** — sections fade/slide in on scroll via IntersectionObserver; respects `prefers-reduced-motion`.
- **Real stock photography** — Unsplash imagery throughout; service cards use "cut" images with overlapping glass icon badges. Swap URLs in the `IMG` map (logic class) for the client's own photos.
- **Persistent CTAs** — sticky header "Book Appointment" + floating book button + click-to-call in footer.

### Tweakable props (design knobs)
`brand`, `defaultTheme`, `defaultMode`, `defaultPage` — exposed in the editor's Tweaks panel.

## Content is data-driven

All services, testimonials, posts, team, nav, and footer links are defined as arrays in the component's logic class — adding a service is adding one object, no layout edits. This mirrors the target file-based content layer.

## Imagery

All images are striped placeholders labeled with a monospace hint (`hero — bright clinic`, `photo`, `whitening.jpg`, …). Drop in real photography by replacing each placeholder block.

---

## Target production stack (for the Next.js build)

The prototype is structured to translate cleanly into:

- **Next.js** (App Router) + **TypeScript**
- **Tailwind** mapped to the CSS token system (`hsl(var(--token) / <alpha>)`)
- **shadcn/ui** for base primitives, **Framer Motion** for the scroll-reveal / stagger / hover motion this prototype fakes with CSS
- File-based content (`content/services/*.mdx`, `content/blog/*.mdx`) → CMS-ready

### Suggested folder structure
```
app/                      # routes: /, /services, /services/[slug], /about, /blog, /blog/[slug], /book
components/ui/            # shadcn primitives
components/sections/      # Hero, ServicesGrid, Testimonials, CTABand, …
config/site.ts            # nav, themes, clinic info
content/services/*.mdx    # one file per service
content/blog/*.mdx        # one file per post
lib/booking.ts            # BookingProvider + mock impl (swap Calendly/NexHealth/Zocdoc later)
lib/api.ts                # single form-submit seam
```

### Integration seams (stub now, wire later)
- **Booking** → `lib/booking.ts` interface + `<BookingProvider>` context; the prototype's 4-step flow is the UI contract.
- **Forms** → single `lib/api.ts` submit function.
- **Analytics / chat widget** → mount in `layout.tsx` behind env flags.

### SEO (target app)
Metadata API, Open Graph, JSON-LD `Dentist` / `LocalBusiness` schema, sitemap, per-service + per-post meta.

## How to recolor
See **`THEMING.md`** — one token block recolors the whole site; adding a theme is 3 steps.
