/**
 * Resolves the `image` keys stored in data/site.ts (paths relative to
 * src/assets/images/, e.g. "projects/lapis-plaza.jpg") to ImageMetadata for
 * astro:assets. Keeping site.ts free of asset imports keeps the data file
 * importable from React islands without dragging image modules along.
 *
 * Add a photo: drop the file under src/assets/images/<dir>/ and set the
 * matching `image` field in site.ts — the glob picks it up automatically.
 */
import type { ImageMetadata } from "astro";

const modules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

const byKey = new Map<string, ImageMetadata>(
  Object.entries(modules).map(([path, mod]) => [
    path.replace("/src/assets/images/", ""),
    mod.default,
  ]),
);

/** Look up an image by its site.ts key; undefined -> caller renders fallback. */
export function resolveImage(
  key: string | null | undefined,
): ImageMetadata | undefined {
  return key ? byKey.get(key) : undefined;
}
