/**
 * The languages pitchboost.ai is published in, and which pages each one has.
 * English is at the root; the others live under their own prefix (/es, /pt,
 * /fr, /ar, /de), each with its own root layout (app/(es)/layout.tsx and its
 * siblings). Small on purpose and free of page copy: the visitor's browser
 * (the footer's language list) reads it as well as the pages. lib/redesign-i18n.ts re-exports it, where most pages
 * import it from.
 */
export type Locale = "en" | "es" | "pt" | "fr" | "ar" | "de";

export const LOCALES: Locale[] = ["en", "es", "pt", "fr", "ar", "de"];

export const LOCALE_PREFIX: Record<Locale, string> = { en: "", es: "/es", pt: "/pt", fr: "/fr", ar: "/ar", de: "/de" };

export const OG_LOCALE: Record<Locale, string> = { en: "en_US", es: "es_ES", pt: "pt_BR", fr: "fr_FR", ar: "ar_AR", de: "de_DE" };

/** Each language by its own name, as a language list shows it. */
export const LOCALE_NAME: Record<Locale, string> = { en: "English", es: "Español", pt: "Português", fr: "Français", ar: "العربية", de: "Deutsch" };

/**
 * The languages the presentation family is published in: the AI
 * presentation maker, its presentation pages and the free tools under it.
 * German is not one of them yet. It has the home page, the redesign pages
 * and the help center, and its pages link to the English presentation pages,
 * marked as English.
 */
export type PresentationLocale = Exclude<Locale, "de">;

export const PRESENTATION_LOCALES: PresentationLocale[] = ["en", "es", "pt", "fr", "ar"];

export function hasPresentations(locale: Locale): locale is PresentationLocale {
  return (PRESENTATION_LOCALES as Locale[]).includes(locale);
}

/** A page's language from its address: /es, /pt, /fr, /ar and /de and every page under them; English everywhere else. */
export function localeOfPath(pathname: string | null): Locale {
  for (const locale of LOCALES) if (locale !== "en" && (pathname === `/${locale}` || pathname?.startsWith(`/${locale}/`))) return locale;
  return "en";
}
