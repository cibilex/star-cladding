// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain (used for sitemap + canonical URLs / SEO)
  site: "https://staraluminyum.com",
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
    routing: {
      // Turkish lives at "/", English will live at "/en" when added.
      prefixDefaultLocale: false,
    },
  },
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
