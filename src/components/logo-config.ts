/**
 * Single source of truth for the logo lockup, shared by BOTH renderers:
 * `components/Logo.astro` (static sections — Header, Footer) and
 * `components/react/Logo.tsx` (islands — MobileMenu).
 *
 * An .astro component cannot be rendered inside a React island, so the markup
 * has to exist twice. Keeping every value that defines the lockup here means
 * the two copies can only differ in framework syntax, never in appearance —
 * change a size or the wordmark once and both follow.
 */
import { company } from "@/data/site";

export type LogoSize = "sm" | "lg";

/** The mark is a circular badge whose interior is transparent (background was
 *  removed), so it MUST sit on its own white disc or the dark artwork
 *  disappears against the navy header and the navy mobile-menu overlay. */
export const LOGO_MARK_BASE =
  "logo-mark shrink-0 rounded-full bg-white object-contain transition-transform duration-500 ease-out group-hover:rotate-[8deg] group-hover:scale-110";

export const LOGO_SIZES: Record<
  LogoSize,
  { mark: string; title: string; sub: string; gap: string }
> = {
  sm: {
    mark: "h-9 w-9",
    title: "text-sm leading-4",
    sub: "text-[0.5rem] tracking-[0.25em]",
    gap: "ml-2.5",
  },
  lg: {
    mark: "h-12 w-12",
    title: "text-xl leading-5",
    sub: "text-[0.6rem] tracking-[0.25em]",
    gap: "ml-3",
  },
};

/** Wordmark beside the badge. Split so the two lines stay identical in both
 *  renderers; `company.legalName` is "Yılmaz Alüminyum". */
export const [LOGO_WORDMARK_TOP, LOGO_WORDMARK_BOTTOM] =
  company.legalName.split(" ");

export const LOGO_ALT = `${company.legalName} logo`;

/** Intrinsic pixel size of src/assets/images/logo-yilmaz.png — set width/height from
 *  this so the badge never causes layout shift while decoding. */
export const LOGO_INTRINSIC = 500;
