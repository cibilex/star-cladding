# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

**Star Alüminyum** — a marketing website for an aluminum facade cladding company
(B2B/B2C construction). **Multi-page site**: a scroll-driven home page plus dedicated pages
for each **service** (`/hizmetler`, `/hizmetler/[slug]`) and each **past project**
(`/projeler`, `/projeler/[slug]`). Its job is **lead generation**: get a visitor to request a
quote (form / WhatsApp / call).

### Core goals (optimize for these, in order)

1. **SEO first.** Most traffic will be organic local search. Pages must stay
   server-rendered HTML with minimal JS. Protect Core Web Vitals — speed *is* the ranking
   strategy. Keep `LocalBusiness`/`GeneralContractor` JSON-LD, canonical, and OG meta intact.
2. **Mobile first.** Most visitors are on phones. Design and test phone layouts before
   desktop.
3. **Smooth, premium feel.** Apple-style scroll storytelling (parallax, reveal, shimmer)
   — but never at the cost of goals 1–2.
4. **Turkish now, English later.** All in-design copy is Turkish today. English is a final
   step via the i18n scaffold (do not hand-translate inline yet).
5. **Conversion.** Quote CTA must be reachable from every section.

Visual identity follows the chosen Stitch theme *"Hero — Vibrant Blue"*: Manrope (display)
+ Inter (body), deep navy `#1a283b`, vibrant steel-blue accent `#2d5a88`, aluminum silver.

## Setup

Stack: **Astro 5** (static/SSG) · **Tailwind CSS v4** (`@tailwindcss/vite`) · **shadcn/ui**
(new-york) · **React 19** islands (`@astrojs/react`) · **Motion** (`motion/react`) · **Lenis**
(smooth scroll) · **lucide-react** (icons) · **TypeScript strict** · **npm**. SEO via
`@astrojs/sitemap` + JSON-LD.

No `.env` required — the site is fully static with no backend (the contact form is stubbed and
will POST to a form service like Formspree/Web3Forms once wired).

### Commands

```bash
npm install            # install dependencies
npm run dev            # dev server (http://localhost:4321, falls back to 4322+ if busy)
npm run build          # static production build -> dist/ (also generates sitemap)
npm run preview        # serve the built dist/ locally
npm run check          # astro check (TS + template diagnostics) — see note below
npx shadcn@latest add <component>   # add more shadcn/ui components (accordion, carousel, sheet…)
```

`npm run check` runs `astro check`, which needs `@astrojs/check` + `typescript`. If it errors
about a missing package, install with `npm i -D @astrojs/check typescript` first.

### Verifying changes

- **`npm run build` is the primary gate.** It type-checks `.astro` props, compiles islands, and
  fails on real errors. Run it after any change.
- **⚠️ Tailwind v4 fails silently on bad tokens.** A misspelled utility (e.g. `text-vibrant-steel`
  instead of `text-vibrant-steel-blue`) produces **no error** — the class is just dropped and the
  element renders unstyled. If styling looks wrong but the build passed, check the class name
  against the tokens defined in `src/styles/global.css` (`@theme`).
- **Always do a visual check for UI work.** `npm run preview` (or `npm run dev`) and view at a
  **mobile width first** (~390–414px), then desktop. Screenshots/parallax/reveal only show up in
  the browser, not the build log.
- **SEO regressions:** after touching `SEO.astro`/`Layout.astro`, confirm `dist/index.html` still
  contains the `<title>`, meta description, canonical, and the `application/ld+json` block.

## Git Workflow

Every code change goes through a branch and a PR. **Never commit or push directly to `main`.**

> **⚠️ Always get explicit confirmation before running `git commit`.** Branching and staging are
> fine without asking — stop at the commit step.

1. **Branch off up-to-date `main`:**
   ```bash
   git checkout main && git pull
   git checkout -b feature/<short-name>   # new features
   git checkout -b bugfix/<short-name>    # bug fixes
   ```
   Use kebab-case names.
2. **Before committing**, run `npm run build` and confirm it passes (this repo has no CI or
   pre-commit hooks yet — the build is the gate).
3. **Open a PR to `main`:**
   ```bash
   git push -u origin <branch>
   gh pr create --base main --title "<title>" --body "<summary>"
   ```
4. **Merge and sync:**
   ```bash
   gh pr merge --squash --delete-branch
   git checkout main && git pull
   ```

This is a fresh repo with no remote configured yet — add one (`git remote add origin …`) before
the push step. CI (a GitHub Action running `npm run build`) and a pre-commit hook are worth adding
later but do not exist today; do not assume they run.

## Codebase

### Project structure

```
star-cladding/
├── astro.config.mjs          # Astro config: site URL, i18n (tr default), react + sitemap, tailwind vite plugin
├── components.json           # shadcn/ui config (new-york, css vars, @/ aliases)
├── tsconfig.json             # strict; @/* -> src/*; verbatimModuleSyntax
├── public/
│   ├── favicon.svg           # flat woven-star mark (brand)
│   └── images/               # hero / project / testimonial / og photos (add real ones here)
└── src/
    ├── styles/global.css     # ⭐ design system: Tailwind v4 @theme tokens + shadcn vars + custom CSS (reveal/shimmer/parallax)
    ├── layouts/Layout.astro  # <head>, fonts, SEO, Lenis smooth-scroll + scroll-reveal observer scripts
    ├── pages/
    │   ├── index.astro       # TR homepage (hero + section previews that link out to the pages below)
    │   ├── hizmetler/
    │   │   ├── index.astro   # all services
    │   │   └── [slug].astro  # one service detail (getStaticPaths from data/site.ts)
    │   ├── projeler/
    │   │   ├── index.astro   # all past projects
    │   │   └── [slug].astro  # one project detail (getStaticPaths from data/site.ts)
    │   └── en/               # English pages (final translation step — currently empty)
    ├── components/
    │   ├── SEO.astro         # meta, OG, Twitter, LocalBusiness JSON-LD
    │   ├── Icon.astro        # renders a lucide icon by name, server-side -> inline SVG (0 JS)
    │   ├── icon-registry.ts  # ⭐ icon name -> lucide-react component map + IconName type (single source of truth)
    │   ├── sections/         # page sections (.astro, static): Header, Hero, Services, Projects, Testimonials, Contact, Footer
    │   ├── react/            # hydrated islands: MobileMenu.tsx (Motion), ContactForm.tsx (shadcn)
    │   └── ui/               # shadcn/ui primitives: button, input, textarea
    ├── data/site.ts          # ⭐ all content: company info, nav, services, projects, testimonials, stats (typed, Turkish)
    ├── i18n/                 # ui.ts (tr complete, en stub) + utils.ts (getLangFromUrl/useTranslations)
    └── lib/utils.ts          # cn() helper
```

`src/data/site.ts` and `src/styles/global.css` are the two files you touch most — content lives in
the former, design tokens in the latter.

### Architecture & conventions

- **Static by default; hydrate surgically.** Sections are `.astro` and ship **0 JS**. Only two
  islands hydrate: `MobileMenu` (`client:load`) and `ContactForm` (`client:visible`). When adding
  interactivity, make it a small island and prefer `client:visible` over `client:load`. **Do not
  hydrate whole sections** — that reintroduces the JS weight Astro was chosen to avoid and hurts
  goal #1 (SEO).
- **Content is data, not markup.** Services, projects, testimonials, company info, nav all live in
  `src/data/site.ts`. Edit content there; don't hardcode it into section components. Each service
  and project has a `slug`; the detail pages generate statically via `getStaticPaths()` over those
  arrays, so adding an item to `data/site.ts` creates its page automatically.
- **Home sections are previews.** On the homepage, the Services and Projects sections show a subset
  and link out to `/hizmetler` and `/projeler`. The full content lives on the dedicated pages.
- **Inner pages share `PageHero.astro`** (navy title band) for spacing under the fixed header and a
  consistent look.
- **Design tokens live in `global.css`.** Colors (`--color-*`), fonts (`--font-display`,
  `--font-body`), spacing (`section-gap`, `gutter`, `margin-mobile`, `margin-desktop`), and the
  type scale (`display-lg`, `display-mobile`, `headline`, `body-lg`, `label`) are all `@theme`
  tokens. Use these utility names (`py-section-gap`, `text-headline`, `text-vibrant-steel-blue`)
  rather than ad-hoc values, to stay on-theme.
- **Imports use `@/*` → `src/*`** (e.g. `import { services } from "@/data/site"`).
- **`verbatimModuleSyntax` is on** → use `import type { … }` for type-only imports, or the build
  fails.
- **Icons are lucide** (`lucide-react`). In `.astro` files use `<Icon name="map-pin" class="size-6" />`
  (`@/components/Icon.astro`), which renders the glyph **server-side → inline SVG, 0 JS** — keeping
  static sections framework-free (goal #1). React islands (`.tsx`) import lucide directly
  (`import { Menu } from "lucide-react"`). Every icon name is a key in `src/components/icon-registry.ts`
  and typed as `IconName`, so a misspelled name is a **build error**, not a silently missing glyph.
  To add an icon: import it in `icon-registry.ts` and add a registry entry. Size with Tailwind
  `size-*` (not `text-*` — SVGs ignore font-size); color follows `currentColor` via `text-*`.

### Stack quirks

- **Tailwind v4 is CSS-first.** No `tailwind.config.js`. Theme is defined with `@theme` /
  `@theme inline` in `src/styles/global.css`; shadcn semantic vars (`--primary`, `--border`, …)
  live in `:root` and are mapped into the theme. To add a color/size, add the CSS var **and** its
  `@theme inline` mapping.
- **i18n routing:** `tr` is the default locale served at `/` (no prefix); `en` will live at `/en`.
  Strings belong in `src/i18n/ui.ts`. Today the site renders Turkish content directly from
  `data/site.ts`; full localization (threading `t()` through components + `src/pages/en/`) is the
  planned final step.
- **Images are placeholders.** Hero is a CSS gradient; project/testimonial images are styled
  blocks. Replace with real photos under `public/images` and use Astro's `astro:assets`
  (`<Image />`) for automatic WebP/AVIF + responsive sizing (important for LCP).
- **Contact form is stubbed.** `ContactForm.tsx` only sets local success state. Wire its submit to
  a form backend (Formspree/Web3Forms/Resend) before launch.
