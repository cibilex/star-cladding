import { company } from "@/data/site";
import logo from "@/assets/images/logo-yilmaz.png";
import {
  LOGO_ALT,
  LOGO_INTRINSIC,
  LOGO_MARK_BASE,
  LOGO_SIZES,
  LOGO_WORDMARK_BOTTOM,
  LOGO_WORDMARK_TOP,
  type LogoSize,
} from "@/components/logo-config";

/**
 * React twin of components/Logo.astro, for use inside islands (MobileMenu).
 * Both read every dimension/string from logo-config.ts so they cannot drift.
 *
 * Difference from the .astro version: islands render over the navy drawer
 * overlay, where the header's .logo-text CSS state machine does not apply — so
 * `tone="onDark"` forces the wordmark to the light color inline.
 */
interface Props {
  size?: LogoSize;
  /** "auto" defers to global.css .logo-text rules; "onDark" forces light text. */
  tone?: "auto" | "onDark";
  className?: string;
  onClick?: () => void;
}

export default function Logo({
  size = "lg",
  tone = "auto",
  className = "",
  onClick,
}: Props) {
  const s = LOGO_SIZES[size];
  const textColor =
    tone === "onDark" ? { color: "var(--background)" } : undefined;

  return (
    <a
      href="/"
      aria-label={company.legalName}
      onClick={onClick}
      className={`logo-link group flex min-w-0 shrink-0 items-center ${className}`}
    >
      <img
        src={logo.src}
        width={LOGO_INTRINSIC}
        height={LOGO_INTRINSIC}
        alt={LOGO_ALT}
        className={`${LOGO_MARK_BASE} ${s.mark}`}
      />
      <span className={`${s.gap} flex flex-col font-display leading-none`}>
        <span
          className={`logo-text font-extrabold uppercase tracking-tight ${s.title}`}
          style={textColor}
        >
          {LOGO_WORDMARK_TOP}
        </span>
        <span
          className={`logo-text-sub mt-0.5 font-semibold uppercase ${s.sub}`}
          style={textColor}
        >
          {LOGO_WORDMARK_BOTTOM}
        </span>
      </span>
    </a>
  );
}
