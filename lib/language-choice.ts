/**
 * Moving between the site's languages: which pages exist in which
 * languages, the address of a page in another language, and remembering
 * the language a visitor picks. Used by the language menu in the top bar
 * (components/marketing/language-menu.tsx) and the footer's language list
 * (components/marketing/language-list.tsx), the two ways the site offers
 * another language.
 *
 * Nobody is sent to a language automatically, and the site never reads the
 * choice back. A first-visit redirect by browser language and a note
 * offering the visitor's language were live for 20 hours on Nov 23-24 2026
 * and taken off: signups fell by more than half while they were on. They
 * are in the history (marketing PR 101) if they are tried again, one at a
 * time.
 */
import { LOCALES, LOCALE_PREFIX, localeOfPath, type Locale } from "./locales";

/**
 * Each English page that exists in other languages, by its address, with
 * those languages ("es pt fr ar de"). Built on the server from the pages'
 * data (lib/page-languages.ts) and handed to the browser.
 */
export type PageLanguages = Record<string, string>;

/** The address of an English page in another language: /de, /de/help/connect-chatgpt. */
export function pageIn(locale: Locale, englishPath: string): string {
  return englishPath === "/" ? LOCALE_PREFIX[locale] || "/" : `${LOCALE_PREFIX[locale]}${englishPath}`;
}

/** The English page an address is a version of: /de/help/connect-chatgpt is /help/connect-chatgpt. */
function englishPath(pathname: string, locale: Locale): string {
  return locale === "en" ? pathname : pathname.slice(locale.length + 1) || "/";
}

export type LanguageLink = { locale: Locale; href: string; current: boolean };

/**
 * Every language of the site with where it leads from this page: the page
 * itself in that language where it exists, and that language's home page
 * where it does not.
 */
export function languageLinks(pathname: string, pages: PageLanguages): LanguageLink[] {
  const current = localeOfPath(pathname);
  const english = englishPath(pathname, current);
  const has = new Set(["en", ...(pages[english]?.split(" ") ?? [])]);
  return LOCALES.map((locale) => ({
    locale,
    href: locale === current ? pathname : pageIn(locale, has.has(locale) ? english : "/"),
    current: locale === current,
  }));
}

/**
 * The cookie a picked language is kept in, for a year. The app reads the
 * same cookie (its src/i18n/config.ts, LOCALE_COOKIE) before the browser's
 * language, so a visitor who picks a language here gets the app in it when
 * they sign up or log in, and email after that. The app has no German yet:
 * with "de" it falls back to the browser's language, then English.
 */
const LANGUAGE_COOKIE = "pb_locale";
const YEAR = 60 * 60 * 24 * 365;

/**
 * Remember the language a visitor picked. Browser only: call it from the
 * click that picks one. Shared with the app on our own domain; on localhost
 * and preview addresses it stays with the host.
 */
export function rememberLanguage(locale: Locale): void {
  try {
    const host = window.location.hostname;
    const domain = host === "pitchboost.ai" || host.endsWith(".pitchboost.ai") ? "; domain=.pitchboost.ai" : "";
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${LANGUAGE_COOKIE}=${locale}; path=/; max-age=${YEAR}; SameSite=Lax${domain}${secure}`;
  } catch {
    /* cookies are blocked: the link still leads to the page in that language */
  }
}
