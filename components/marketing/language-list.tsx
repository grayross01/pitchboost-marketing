"use client";

import { usePathname } from "next/navigation";
import { LOCALE_NAME } from "@/lib/locales";
import { languageLinks, rememberLanguage, type PageLanguages } from "@/lib/language-choice";

/**
 * The footer's list of the site's languages, each by its own name. Each leads
 * to this page in that language where it exists, and to that language's home
 * page where it does not. They are plain links; picking one is also
 * remembered for the app (lib/language-choice.ts, rememberLanguage).
 * `pages` says which pages exist in which languages; `label` is what a screen
 * reader calls the list, in the page's language.
 */
export default function LanguageList({ pages, label }: { pages: PageLanguages; label: string }) {
  const pathname = usePathname() ?? "/";
  return (
    <nav aria-label={label} className="footer-languages">
      <ul>
        {languageLinks(pathname, pages).map(({ locale, href, current }) => (
          <li key={locale}>
            <a
              href={href}
              hrefLang={locale}
              lang={locale}
              aria-current={current ? "true" : undefined}
              onClick={() => rememberLanguage(locale)}
            >
              {LOCALE_NAME[locale]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
