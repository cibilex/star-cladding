import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Images, Instagram, LayoutGrid, MapPin, Phone, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { nav, company, social } from "@/data/site";
import logo from "@/assets/images/logo.png";

/**
 * Mobile navigation drawer — "Circular Reveal / Morphing Hamburger" variant.
 *
 * - The trigger morphs from a 3-bar hamburger into an X via three animated
 *   bars (spring), rather than swapping icon components. Its color is forced
 *   to `--background` while open via inline style (beats `.header-icon`'s own
 *   scroll/light-state color rules), so the X stays visible regardless of the
 *   page header's state.
 * - The overlay reveals through an expanding circular clip-path anchored at
 *   the trigger's on-screen position ("genie" expand), read from the
 *   trigger's getBoundingClientRect() on open.
 * - Rendered inline (not portaled) so the trigger button and the overlay stay
 *   in the same stacking context and their z-index values compare directly.
 *   The scrolled-header containing-block bug (`#main-nav.is-scrolled`'s
 *   `backdrop-filter`, which — like `transform`/`filter` — turns an ancestor
 *   into a containing block for `position: fixed` descendants) is fixed at
 *   the source in global.css instead, by moving that backdrop-filter onto a
 *   `::before` pseudo-element.
 *
 * Hydrated as an island (client:load) — only this piece ships JS.
 */

const CLOSED_LABEL = "Menüyü aç";
const OPEN_LABEL = "Menüyü kapat";

// `nav` only carries {label, href} (shared with the desktop links, which have
// no room for icons/blurbs). Map the richer mobile-only presentation locally
// instead of touching data/site.ts.
const NAV_META: Record<string, { icon: LucideIcon; blurb: string }> = {
  "/hizmetler": { icon: LayoutGrid, blurb: "Cephe ve dış kaplama çözümleri" },
  "/projeler": { icon: Images, blurb: "Tamamlanan uygulamalardan örnekler" },
  "/#yorumlar": { icon: Star, blurb: "Müşterilerimiz ne diyor" },
  "/#iletisim": { icon: Phone, blurb: "Bize ulaşın, teklif alın" },
};

/** WhatsApp glyph — lucide has no brand icon; same path used in Header.astro's topbar. */
function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.02zM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.23 8.25c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

/** 3-bar hamburger that morphs into an X. Framer/motion controls each bar's
 *  full transform, so no Tailwind translate utility is layered on top. */
function MorphIcon({ open }: { open: boolean }) {
  const spring = { type: "spring" as const, stiffness: 320, damping: 24 };
  return (
    <span className="flex size-7 flex-col items-center justify-center gap-[7px]" aria-hidden="true">
      <motion.span
        className="block h-0.5 w-7 rounded-full bg-current"
        animate={open ? { y: 9, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={spring}
      />
      <motion.span
        className="block h-0.5 w-7 rounded-full bg-current"
        animate={open ? { opacity: 0, scale: 0.4 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="block h-0.5 w-7 rounded-full bg-current"
        animate={open ? { y: -9, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={spring}
      />
    </span>
  );
}

export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [origin, setOrigin] = React.useState({ x: 92, y: 6 });

  // lock body scroll while open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openMenu = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (rect) {
      setOrigin({
        x: ((rect.left + rect.width / 2) / window.innerWidth) * 100,
        y: ((rect.top + rect.height / 2) / window.innerHeight) * 100,
      });
    }
    setOpen(true);
  };

  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 26, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    },
  };

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        aria-label={open ? OPEN_LABEL : CLOSED_LABEL}
        aria-expanded={open}
        className="header-icon relative z-[70]"
        style={open ? { color: "var(--background)" } : undefined}
        onClick={() => (open ? setOpen(false) : openMenu())}
      >
        <MorphIcon open={open} />
      </button>

      {/* Always mounted so the closing clip-path can animate back down;
          inert + pointer-events-none keep it out of the tab order and
          off-screen for assistive tech while closed. */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={company.name}
        // @ts-expect-error -- `inert` is a valid DOM attribute (React 19 / HTML Living Standard)
        inert={!open ? "" : undefined}
        className={`fixed inset-0 z-[60] flex flex-col overflow-y-auto px-margin-mobile pb-8 pt-28 transition-[clip-path] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          clipPath: `circle(${open ? "150%" : "0%"} at ${origin.x}% ${origin.y}%)`,
          backgroundImage: [
            "radial-gradient(120% 68% at 18% 0%, color-mix(in srgb, var(--vibrant-steel-blue) 58%, transparent) 0%, transparent 55%)",
            "radial-gradient(95% 60% at 88% 10%, color-mix(in srgb, var(--aluminum-silver) 34%, transparent) 0%, transparent 50%)",
            "linear-gradient(180deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 42%, var(--steel-blue) 58%) 100%)",
          ].join(", "),
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        <div
          className="pointer-events-none absolute -right-14 -top-14 size-52 rounded-full bg-aluminum-silver/15 blur-3xl"
          aria-hidden="true"
        />

        <motion.div
          className="relative mb-9 flex items-center justify-between gap-3"
          variants={itemVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
        >
          <a
            href="/"
            aria-label={company.name}
            onClick={() => setOpen(false)}
            className="logo-link group flex min-w-0 items-center gap-3"
          >
            <img
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt="Star Alüminyum logo"
              className="logo-mark size-11 shrink-0 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.3)] transition-transform duration-500 ease-out group-hover:rotate-[8deg] group-hover:scale-110"
            />
            <span className="flex flex-col font-display leading-none">
              <span
                className="logo-text text-xl font-extrabold uppercase leading-6 tracking-tight"
                style={{ color: "var(--background)" }}
              >
                Star
              </span>
              <span
                className="logo-text-sub mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em]"
                style={{ color: "var(--background)" }}
              >
                Alüminyum
              </span>
            </span>
          </a>

          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-background/10 px-3 py-1.5 text-background/70">
            <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap text-[0.7rem] font-medium">{company.addressRegion}</span>
          </span>
        </motion.div>

        <div
          className="h-px w-full shrink-0"
          style={{
            background:
              "linear-gradient(90deg, transparent, color-mix(in srgb, var(--aluminum-silver) 55%, transparent) 50%, transparent)",
          }}
          aria-hidden="true"
        />

        <motion.nav
          className="relative mt-1 flex flex-1 flex-col"
          variants={listVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
        >
          {nav.map((item) => {
            const meta = NAV_META[item.href];
            const ItemIcon = meta?.icon ?? ChevronRight;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 border-b border-background/10 py-4 transition-colors first:pt-6"
                variants={itemVariants}
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-background/10 text-background transition-colors group-hover:bg-vibrant-steel-blue/40">
                  <ItemIcon className="size-5" aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="font-display text-lg font-bold text-background transition-colors group-hover:text-aluminum-silver">
                    {item.label}
                  </span>
                  {meta && <span className="truncate text-sm text-background/55">{meta.blurb}</span>}
                </span>
                <ChevronRight
                  className="size-5 shrink-0 text-background/40 transition-transform group-hover:translate-x-0.5 group-hover:text-aluminum-silver"
                  aria-hidden="true"
                />
              </motion.a>
            );
          })}
        </motion.nav>

        <motion.div
          className="relative mt-9 flex flex-col gap-5"
          variants={itemVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
        >
          <a
            href="/#iletisim"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-vibrant-steel-blue via-steel-blue to-vibrant-steel-blue text-label font-semibold uppercase tracking-widest text-white shadow-[0_16px_40px_-10px_rgba(45,90,136,0.7)] ring-1 ring-inset ring-white/20 transition-transform active:scale-[0.98]"
          >
            <span
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
            Teklif Al
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>

          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1">
              <a
                href={company.phoneHref}
                tabIndex={open ? 0 : -1}
                className="flex size-9 items-center justify-center rounded-full text-background/55 transition-colors hover:bg-background/10 hover:text-background"
                aria-label={company.phone}
              >
                <Phone className="size-4" aria-hidden="true" />
              </a>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener"
                tabIndex={open ? 0 : -1}
                className="flex size-9 items-center justify-center rounded-full text-background/55 transition-colors hover:bg-background/10 hover:text-[#25D366]"
                aria-label="WhatsApp"
              >
                <WhatsAppMark className="size-4" />
              </a>
              {social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  tabIndex={open ? 0 : -1}
                  className="flex size-9 items-center justify-center rounded-full text-background/55 transition-colors hover:bg-background/10 hover:text-[#E4405F]"
                  aria-label={item.label}
                >
                  <Instagram className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-1 text-label font-bold">
              <span className="rounded-full bg-background/10 px-2.5 py-1 text-background">TR</span>
              <span className="px-2.5 py-1 text-background/45">EN</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
