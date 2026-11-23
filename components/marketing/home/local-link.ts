import { inEnglishMark } from "@/lib/presentations-i18n";
import { LOCALE_PREFIX, hasPresentations, type Locale } from "@/lib/locales";
import { getRedesignFor } from "@/lib/redesigns";
import { localeDir } from "@/lib/locale-dir";

/** Whether a language has this page of the home page's links: the redesign hub and the redesign pages it has, and the presentation maker where it has the presentation pages (German does not, yet). */
export function inLanguage(locale: Locale, href: string): boolean {
  const [, slug] = /^\/redesign\/([^/]+)$/.exec(href) ?? [];
  return (href === "/ai-presentation-maker" && hasPresentations(locale)) || href === "/redesign" || (!!slug && !!getRedesignFor(locale, slug));
}

/**
 * Where one of the home page's links into this site leads in a given
 * language: the same page in that language when the site has one (the
 * presentation maker, the redesign hub and the redesign pages a language
 * has), and the English page, marked as English, when it does not (the
 * feature, industry and ChatGPT pages are English only). The same rule the
 * maker pages follow.
 *
 * Kept apart from links.ts on purpose: the box in the hero is a client
 * component and imports links.ts, and this reads the redesign pages' data,
 * which has no business in a visitor's browser.
 */
export function localLink(locale: Locale, href: string): { href: string; hrefLang: "en" | undefined; inEnglish: string } {
  if (locale === "en") return { href, hrefLang: undefined, inEnglish: "" };
  return inLanguage(locale, href) ? { href: `${LOCALE_PREFIX[locale]}${href}`, hrefLang: undefined, inEnglish: "" } : { href, hrefLang: "en", inEnglish: inEnglishMark(locale) };
}

/** The arrow after a link. It points the way the page reads. */
export function arrow(locale: Locale): string {
  return localeDir(locale) === "rtl" ? "←" : "→";
}
