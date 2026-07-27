// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Production domain. The real name is the IDN "yılmazalüminyum.com"; DNS and
  // URLs require its punycode form, so that is what is stored here. Writing the
  // Unicode form would work (Node's URL normalises it) but would make the value
  // differ from every emitted canonical, which is confusing when debugging.
  // Browsers and Google both display it back to users as yılmazalüminyum.com.
  site: "https://xn--ylmazalminyum-2ob20f.com",
  i18n: {
    locales: ["tr", "en"],
    defaultLocale: "tr",
    routing: {
      // Turkish lives at "/", English will live at "/en" when added.
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    react(),
    sitemap({
      // /onizleme/* are dev-only variant preview pages — keep them out.
      // 404 is noindex and must never be submitted to Search Console.
      filter: (page) =>
        !page.includes("/onizleme/") && !page.endsWith("/404/"),
      // Static site with no CMS: build time is the only honest lastmod we have.
      lastmod: new Date(),
      changefreq: "monthly",
      // Home > section indexes > detail pages. Relative only — it does not
      // affect ranking, just crawl ordering within our own sitemap.
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === "/") item.priority = 1.0;
        else if (path === "/hizmetler/" || path === "/projeler/")
          item.priority = 0.9;
        else if (path === "/iletisim/") item.priority = 0.8;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
