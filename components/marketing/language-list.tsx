"use client";

import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_NAME, localeOfPath, type Locale } from "@/lib/locales";
import { pageIn, type PageLanguages } from "@/lib/language-choice";

/** The English page an address is a version of: /de/help/connect-chatgpt is /help/connect-chatgpt. */
function englishPath(pathname: string, locale: Locale): string {
  return locale === "en" ? pathname : pathname.slice(locale.length + 1) || "/";
}

/**
 * The footer's list of the site's languages, each by its own name. Each leads
 * to this page in that language where it exists, and to that language's home
 * page where it does not. They are plain links: nothing is remembered.
 * `pages` says which pages exist in which languages; `label` is what a screen
 * reader calls the list, in the page's language.
 */
export default function LanguageList({ pages, label }: { pages: PageLanguages; label: string }) {
  const pathname = usePathname() ?? "/";
  const current = localeOfPath(pathname);
  const english = englishPath(pathname, current);
  const has = new Set(["en", ...(pages[english]?.split(" ") ?? [])]);
  return (
    <nav aria-label={label} className="footer-languages">
      <ul>
        {LOCALES.map((l) => (
          <li key={l}>
            <a
              href={l === current ? pathname : pageIn(l, has.has(l) ? english : "/")}
              hrefLang={l}
              lang={l}
              aria-current={l === current ? "true" : undefined}
            >
              {LOCALE_NAME[l]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
