/**
 * A visitor's language: the words of the quiet prompt on English pages
 * (components/marketing/language-prompt.tsx) in each language it can offer,
 * the rule that decides when it shows (with the hint the visitor's time zone
 * gives), and the cookie that remembers a language the visitor chose. Small
 * and free of page copy, because it runs in the visitor's browser and in
 * proxy.ts.
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

/** Where the prompt remembers, in the visitor's browser, that it was closed ("closed"). */
export const PROMPT_STORAGE_KEY = "pb-language-prompt";

/**
 * The language a visitor chose, and nothing else: set only by a language in
 * the footer's list or by the prompt (its link, or en when it is closed),
 * kept for a year. Once it is set, whatever it says, English included,
 * proxy.ts never redirects that visitor (its matcher names it too,
 * "pb_lang", as a matcher must be written out in full). The prompt stays
 * away when it says en, and offers the language it names on an English page
 * that exists in it. The privacy page lists it.
 */
export const LANG_COOKIE = "pb_lang";
export const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/**
 * Time zones that suggest one of the site's languages, for a browser whose
 * first language is English: a hint for the prompt only, read in the
 * browser, never a redirect. Multilingual places are left out on purpose
 * (Brussels and Luxembourg: a Flemish visitor must not be offered French).
 * Old link names some browsers still report sit beside the current ones
 * (America/Buenos_Aires, Brazil/East).
 */
const TIME_ZONE_LANGUAGES: Record<OtherLocale, string[]> = {
  de: ["Europe/Berlin", "Europe/Busingen", "Europe/Vienna", "Europe/Zurich", "Europe/Vaduz"],
  fr: ["Europe/Paris", "Europe/Monaco"],
  es: [
    "Europe/Madrid", "Atlantic/Canary", "Africa/Ceuta",
    "America/Mexico_City", "America/Cancun", "America/Merida", "America/Monterrey", "America/Matamoros", "America/Chihuahua",
    "America/Ciudad_Juarez", "America/Ojinaga", "America/Mazatlan", "America/Bahia_Banderas", "America/Hermosillo", "America/Tijuana",
    "America/Ensenada", "America/Santa_Isabel", "Mexico/General", "Mexico/BajaNorte", "Mexico/BajaSur",
    "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy",
    "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta",
    "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia",
    "America/Argentina/ComodRivadavia", "America/Buenos_Aires", "America/Catamarca", "America/Cordoba", "America/Jujuy",
    "America/Mendoza", "America/Rosario",
    "America/Bogota", "America/Santiago", "America/Punta_Arenas", "Chile/Continental", "America/Lima", "America/Caracas",
    "America/Guayaquil", "America/Guatemala", "America/Havana", "Cuba", "America/La_Paz", "America/Santo_Domingo",
    "America/Tegucigalpa", "America/Asuncion", "America/El_Salvador", "America/Managua", "America/Costa_Rica", "America/Panama",
    "America/Montevideo", "America/Puerto_Rico",
  ],
  pt: [
    "Europe/Lisbon", "Portugal", "Atlantic/Madeira", "Atlantic/Azores",
    "America/Sao_Paulo", "America/Bahia", "America/Fortaleza", "America/Recife", "America/Maceio", "America/Belem",
    "America/Manaus", "America/Cuiaba", "America/Campo_Grande", "America/Porto_Velho", "America/Boa_Vista", "America/Rio_Branco",
    "America/Eirunepe", "America/Araguaina", "America/Santarem", "America/Noronha",
    "Brazil/East", "Brazil/West", "Brazil/Acre", "Brazil/DeNoronha", "America/Porto_Acre",
  ],
  ar: [
    "Asia/Riyadh", "Asia/Dubai", "Asia/Qatar", "Asia/Kuwait", "Asia/Bahrain", "Asia/Muscat", "Asia/Aden", "Asia/Amman",
    "Asia/Beirut", "Asia/Damascus", "Asia/Baghdad", "Asia/Gaza", "Asia/Hebron",
    "Africa/Cairo", "Egypt", "Africa/Casablanca", "Africa/El_Aaiun", "Africa/Algiers", "Africa/Tunis", "Africa/Tripoli", "Libya",
    "Africa/Khartoum", "Africa/Nouakchott",
  ],
};
const TIME_ZONE_LANGUAGE = new Map<string, OtherLocale>(
  (Object.entries(TIME_ZONE_LANGUAGES) as [OtherLocale, string[]][]).flatMap(([locale, zones]) => zones.map((zone) => [zone, locale] as const)),
);

/** The language a time zone suggests, if it is one of the site's others: Europe/Vienna is de. */
export function timeZoneLanguage(timeZone: string | null | undefined): OtherLocale | null {
  return (timeZone && TIME_ZONE_LANGUAGE.get(timeZone)) || null;
}

/** A cookie's value in the browser, or null. */
export function readCookie(name: string): string | null {
  try {
    for (const part of document.cookie.split(";")) {
      const [key, ...value] = part.trim().split("=");
      if (key === name) return decodeURIComponent(value.join("="));
    }
  } catch {
    // No cookies to read.
  }
  return null;
}

/** Remembers the visitor's language (the footer's list, the prompt). */
export function chooseLanguage(locale: Locale) {
  try {
    document.cookie = `${LANG_COOKIE}=${locale}; Path=/; Max-Age=${LANG_COOKIE_MAX_AGE}; SameSite=Lax${window.location.protocol === "https:" ? "; Secure" : ""}`;
  } catch {
    // Cookies blocked: the choice simply is not remembered.
  }
}

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
  /** Whether the prompt was closed in this browser (PROMPT_STORAGE_KEY). */
  closed: boolean;
  /** The language the visitor chose (LANG_COOKIE), if any. */
  chosen?: string | null;
  /** The visitor's time zone (Intl), if the browser says. */
  timeZone?: string | null;
}

/**
 * The language to offer on this English page, or null. Never after the
 * prompt was closed or once the visitor chose English. A language the
 * visitor chose (the cookie) comes first; otherwise the browser's first
 * language the site has, as navigator.languages ranks them, so a language
 * ranked below English is never offered; and when that first language is
 * English, the one the visitor's time zone suggests, if any. Offered only
 * when this exact page exists in it, and never to a visitor who has just
 * come from that language's version of the site (they chose English).
 */
export function promptLanguage({ pathname, languages, pages, referrer, origin, closed, chosen, timeZone }: PromptInput): OtherLocale | null {
  if (closed) return null;
  const choice = siteLocale(chosen);
  if (choice === "en") return null;
  let first: OtherLocale | null;
  if (choice) first = choice;
  else {
    const browser = languages.map(siteLocale).find((l): l is Locale => !!l);
    first = browser === "en" ? timeZoneLanguage(timeZone) : (browser ?? null);
  }
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
