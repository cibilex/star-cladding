/**
 * Single source of truth for icons. Maps a semantic name to a lucide-react
 * component. Used by Icon.astro (server-rendered -> inline SVG, 0 JS) and as
 * the `IconName` type that data/site.ts and call sites are checked against —
 * so a misspelled icon name is a build error, not a silently missing glyph.
 *
 * React islands (*.tsx) import lucide-react directly instead of using this.
 * Add an icon: import it here, add a registry entry. Browse names at
 * https://lucide.dev/icons.
 */
import {
  AppWindow,
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronDown,
  CircleCheck,
  Clock,
  Facebook,
  Fence,
  Instagram,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Youtube,
} from "lucide-react";

export const iconRegistry = {
  // service icons (data/site.ts)
  window: AppWindow,
  fence: Fence,
  dashboard: LayoutDashboard,
  // contact details
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
  clock: Clock,
  "message-circle": MessageCircle,
  // ui affordances
  "arrow-right": ArrowRight,
  "arrow-left": ArrowLeft,
  "chevron-down": ChevronDown,
  building: Building2,
  star: Star,
  "check-circle": CircleCheck,
  // social
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
} as const;

export type IconName = keyof typeof iconRegistry;
