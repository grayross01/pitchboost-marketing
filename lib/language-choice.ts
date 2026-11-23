/**
 * Offering a visitor the page in their own language: the words of the quiet
 * prompt on English pages (components/marketing/language-prompt.tsx) in each
 * language it can offer, and the rule that decides when it shows. Small and
 * free of page copy, because it runs in the visitor's browser.
 */
import { LOCALES, LOCALE_PREFIX, type Locale } from "./locales";

/** A language the prompt can offer: every language but English. */
export type OtherLocale = Exclude<Locale, "en">;

export interface LanguagePromptCopy {
  /** What a screen reader calls the prompt. */
  label: string;
  text: string;
  link: string;
  close: string;
}

/** The prompt, in the language it offers. */
export const LANGUAGE_PROMPT: Record<OtherLocale, LanguagePromptCopy> = {
  es: { label: "Idioma", text: "Esta página también está en español.", link: "Leer en español", close: "Cerrar" },
  pt: { label: "Idioma", text: "Esta página também está em português.", link: "Ler em português", close: "Fechar" },
  fr: { label: "Langue", text: "Cette page existe aussi en français.", link: "Lire en français", close: "Fermer" },
  ar: { label: "اللغة", text: "هذه الصفحة متاحة بالعربية أيضًا.", link: "اقرأها بالعربية", close: "إغلاق" },
  de: { label: "Sprache", text: "Diese Seite gibt es auch auf Deutsch.", link: "Auf Deutsch lesen", close: "Schließen" },
};

/** Where the prompt remembers, in the visitor's browser, that it was closed or followed. */
export const PROMPT_STORAGE_KEY = "pb-language-prompt";

/**
 * Each English page that exists in other languages, by its address, with
 * those languages ("es pt fr ar de"). Built on the server from the pages'
 * data (lib/page-languages.ts) and handed to the browser.
 */
export type PageLanguages = Record<string, string>;

/** A language tag's language, if the site has it: "de-AT" is de, "pt-BR" is pt. */
export function siteLocale(tag: string | null | undefined): Locale | null {
  const base = (tag ?? "").trim().toLowerCase().split(/[-_]/)[0];
  return (LOCALES as string[]).includes(base) ? (base as Locale) : null;
}

/** The address of an English page in another language: /de, /de/help/connect-chatgpt. */
export function pageIn(locale: Locale, englishPath: string): string {
  return englishPath === "/" ? LOCALE_PREFIX[locale] || "/" : `${LOCALE_PREFIX[locale]}${englishPath}`;
}

export interface PromptInput {
  /** The English page's address. */
  pathname: string;
  /** navigator.languages, most wanted first. */
  languages: readonly string[];
  pages: PageLanguages;
  /** document.referrer and the page's own origin. */
  referrer: string;
  origin: string;
  /** What the prompt remembered in this browser: "closed", or the language that was followed. */
  stored: string | null;
}

/**
 * The language to offer on this English page, or null. The visitor's first
 * language in navigator.languages that is one of the site's others (es, pt,
 * fr, ar, de), and only when this exact page has that language. Never after
 * the prompt was closed or followed, and never to a visitor who has just come
 * from that language's version of the site (they chose English).
 */
export function promptLanguage({ pathname, languages, pages, referrer, origin, stored }: PromptInput): OtherLocale | null {
  if (stored) return null;
  const first = languages.map(siteLocale).find((l): l is OtherLocale => !!l && l !== "en");
  if (!first) return null;
  if (!(pages[pathname] ?? "").split(" ").includes(first)) return null;
  try {
    const from = new URL(referrer);
    if (from.origin === origin && (from.pathname === `/${first}` || from.pathname.startsWith(`/${first}/`))) return null;
  } catch {
    // No referrer, or not an address.
  }
  return first;
}
