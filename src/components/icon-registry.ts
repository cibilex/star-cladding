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
  ArrowUpDown,
  ArrowUpRight,
  Blinds,
  Building2,
  Calendar,
  ChevronDown,
  ChevronLeft,
  CircleCheck,
  Clock,
  Columns3,
  ExternalLink,
  Fence,
  Frame,
  Grid3x3,
  Instagram,
  Layers,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageCircle,
  Minus,
  MoveHorizontal,
  Phone,
  Plus,
  Quote,
  Send,
  ShieldCheck,
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
  "arrow-up-right": ArrowUpRight,
  "chevron-down": ChevronDown,
  "chevron-left": ChevronLeft,
  building: Building2,
  star: Star,
  "check-circle": CircleCheck,
  quote: Quote,
  plus: Plus,
  minus: Minus,
  grid: Grid3x3,
  frame: Frame,
  blinds: Blinds,
  "arrow-up-down": ArrowUpDown,
  "move-horizontal": MoveHorizontal,
  "columns-3": Columns3,
  send: Send,
  "external-link": ExternalLink,
  layers: Layers,
  "shield-check": ShieldCheck,
  calendar: Calendar,
  // social
  instagram: Instagram,
  youtube: Youtube,
} as const;

export type IconName = keyof typeof iconRegistry;
