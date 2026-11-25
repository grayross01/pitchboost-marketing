/**
 * Moving between the site's languages: which pages exist in which
 * languages, and the address of a page in another language. Used by the
 * footer's language list (components/marketing/language-list.tsx), which is
 * the only way the site offers another language.
 *
 * Nobody is sent to a language automatically. A first-visit redirect by
 * browser language and a note offering the visitor's language were live for
 * 20 hours on Nov 23-24 2026 and taken off: signups fell by more than half
 * while they were on. They are in the history (marketing PR 101) if they
 * are tried again, one at a time.
 */
import { LOCALE_PREFIX, type Locale } from "./locales";

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
