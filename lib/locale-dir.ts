/** Which way a page in this language reads. Arabic pages are laid out right to
 *  left: the localized views set it on the element that wraps the page, so the
 *  English navigation and footer around them keep their own direction. */
export function localeDir(locale: string): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** The card generator (satori, in lib/og.tsx) can't join Arabic letters, so
 *  right-to-left pages share the site-wide card (app/opengraph-image.tsx,
 *  "The deck that speaks their language.") instead of a card with their own
 *  title. Spread into a page's openGraph metadata; empty for other languages,
 *  whose opengraph-image files supply their cards. */
export function sharedCard(locale: string): { images?: { url: string; width: number; height: number; alt: string }[] } {
  return localeDir(locale) === "rtl" ? { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "PitchBoost" }] } : {};
}
