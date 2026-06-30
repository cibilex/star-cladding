import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav, company } from "@/data/site";

/**
 * Mobile navigation drawer. Genuine Motion usage (slide + stagger).
 * Hydrated as an island (client:load) — only this piece ships JS.
 */
export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  // lock body scroll while open
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-label="Menüyü aç"
        className="header-icon"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-10" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col justify-center bg-background px-margin-mobile"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.45 }}
          >
            <button
              aria-label="Menüyü kapat"
              className="absolute right-margin-mobile top-6 text-primary"
              onClick={() => setOpen(false)}
            >
              <X className="size-9" aria-hidden="true" />
            </button>

            <span className="mb-10 font-display text-headline font-bold tracking-tighter text-primary">
              {company.name}
            </span>

            <nav className="flex flex-col space-y-6">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-headline font-bold text-on-surface-variant transition-colors hover:text-primary"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex gap-4 pt-12 font-bold">
              <span className="text-primary">TR</span>
              <span className="text-outline">EN</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
