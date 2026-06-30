# Star Alüminyum — Web

Mobile-first marketing site for **Star Alüminyum** (aluminum facade cladding).
Built to match the chosen Stitch theme *"Hero — Vibrant Blue"* (Manrope/Inter, deep
navy + vibrant steel-blue, cinematic parallax, scroll-reveal).

## Stack

| Layer | Choice |
|---|---|
| Framework | **Astro 5** (static / SSG) — zero JS by default, best Core Web Vitals for SEO |
| Styling | **Tailwind CSS v4** (`@tailwindcss/vite`, CSS-first `@theme`) |
| Components | **shadcn/ui** (new-york) — `Button`, `Input`, `Textarea` |
| Interactivity | **React 19 islands** — hydrated only where needed |
| Animation | **Motion** (`motion/react`) for the mobile drawer; CSS for shimmer/reveal |
| Smooth scroll | **Lenis** |
| Types | **TypeScript strict** |
| SEO | `@astrojs/sitemap`, canonical + OG meta, `LocalBusiness` JSON-LD |
| i18n | Astro i18n — `tr` (default) now, `/en` later |

## Hydration map (keep it fast)

- Static (0 JS): Hero, Services, Projects, Testimonials, Footer, desktop nav.
- `client:load` → `MobileMenu` (Motion drawer).
- `client:visible` → `ContactForm` (shadcn).

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output -> dist/
npm run preview
```

## TODO before launch

- [ ] Replace hero gradient with a real building photo: `src/components/sections/Hero.astro` → `background-image: url('/images/hero.jpg')`.
- [ ] Add project + testimonial photos under `public/images`, set `image` in `src/data/site.ts`.
- [ ] Wire `ContactForm` submit to Formspree / Web3Forms / Resend.
- [ ] Update company info (phone, address, geo) in `src/data/site.ts`.
- [ ] Set the real domain in `astro.config.mjs` (`site`).
- [ ] Add `public/images/og.jpg` (1200×630) for social previews.
- [ ] Generate full favicon set (realfavicongenerator.net) from the final logo.
- [ ] Final EN translation: fill `src/i18n/ui.ts` (`en`) + add `src/pages/en/index.astro`.

## Add more shadcn components

```bash
npx shadcn@latest add accordion carousel sheet dialog
```

Deploy: Cloudflare Pages or Vercel (static).
