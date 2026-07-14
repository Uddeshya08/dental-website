# Theming — Dentheal

Recoloring the entire site is a **single-block change**. Every color in the UI is a semantic CSS custom property in HSL. Components never hardcode hex — they read `hsl(var(--token))`, which also lets any color take an alpha (`hsl(var(--primary) / 0.12)`).

## Token list (semantic, not raw)

| Token | Role |
|---|---|
| `--background` | page background |
| `--foreground` | primary text |
| `--surface` / `--surface-2` | cards, glass panels |
| `--muted` | secondary text |
| `--muted-bg` | subtle fills, chips, inputs bg |
| `--primary` / `--primary-foreground` | brand actions, CTAs |
| `--accent` / `--accent-foreground` | highlights, eyebrows |
| `--border` | hairlines, card borders |
| `--success` | confirmations, checks |
| `--radius` | global corner radius |

All values are **HSL channels without the `hsl()` wrapper** (e.g. `212 92% 47%`) so alpha compositing works everywhere.

## The theme blocks

In the prototype these live in one `<style>` block (in the real Next.js app, this is `app/globals.css`):

```css
:root { /* Clinical Blue — default */
  --primary: 212 92% 47%;
  --accent:  190 88% 40%;
  /* …all tokens… */
}
[data-theme="mint"]    { --primary: 162 58% 35%; --accent: 178 62% 36%; /* … */ }
[data-theme="neutral"] { --primary: 20 32% 33%;  --accent: 150 20% 40%; /* … */ }
[data-mode="dark"]     { --background: 220 30% 7%; --foreground: 210 22% 92%; /* … */ }
```

- **Preset theme** = swap `data-theme` on the root element (`clinical` | `mint` | `neutral`).
- **Light / dark** = swap `data-mode` (`light` | `dark`). The dark block overrides only surface/background/text/border, so it layers on top of ANY preset — one dark definition covers all three themes.

## Add a new theme (3 steps)

1. Duplicate a `[data-theme="…"]` block, rename the selector (e.g. `[data-theme="rose"]`).
2. Set `--primary`, `--accent`, and (optionally) the neutral ramp. Keep primary/accent at a similar lightness/chroma to the presets for consistent contrast.
3. Add it to the theme switcher list (in the prototype: the `THEMES` array in the logic class; in Next.js: `config/site.ts`).

That's it — nothing in any component changes.

## Next.js wiring (target app)

- Define the blocks in `app/globals.css`.
- Map them into Tailwind via `theme.extend.colors` using `hsl(var(--token) / <alpha-value>)` so `bg-primary`, `text-muted`, `border-border` etc. all resolve to tokens.
- Persist the user's choice by writing `data-theme` / `data-mode` to `<html>` (e.g. a small `ThemeProvider` + `localStorage`, or `next-themes`).

## Accessibility note

Every preset is tuned for WCAG AA text contrast on its own surfaces. When adding a theme, verify `--foreground` on `--background` and `--primary-foreground` on `--primary` both clear 4.5:1.
