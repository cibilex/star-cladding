import type { APIRoute } from "astro";

/**
 * Generated rather than dropped in public/ so the Sitemap line always tracks
 * `site` in astro.config.mjs — a hardcoded domain here silently rots the day
 * the production host changes.
 *
 * /onizleme/ are dev-only design-variant previews; they are excluded from the
 * sitemap too (see the sitemap() filter in astro.config.mjs).
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", site).href;

  const body = `User-agent: *
Allow: /
Disallow: /onizleme/

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
