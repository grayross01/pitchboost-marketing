/**
 * Every English page that also exists in other languages, with those
 * languages, read from the pages' own data so it can never claim a page that
 * is not there: the home page, the redesign hub and pages, the help center
 * and its articles, and, in the languages that have them, the presentation
 * maker, its presentation pages and the free tools. The same languages the
 * pages' hreflang alternates list. Read on the server; the browser gets the
 * result (lib/language-choice.ts, PageLanguages).
 */
import { LOCALES, hasPresentations, type Locale } from "./locales";
import { REDESIGNS, getRedesignFor, getRedesigns } from "./redesigns";
import { HELP_ARTICLES, getHelpArticleFor, getHelpArticles } from "./help";
import { PRESENTATIONS } from "./presentations";
import { getPresentationFor } from "./presentations-i18n";
import { MAKERS } from "./makers";
import { getMakerFor } from "./makers-i18n";
import type { PageLanguages } from "./language-choice";

function build(): PageLanguages {
  const pages: PageLanguages = {};
  const others = LOCALES.filter((l) => l !== "en");
  const add = (path: string, has: (l: Locale) => boolean) => {
    const languages = others.filter(has);
    if (languages.length) pages[path] = languages.join(" ");
  };
  add("/", () => true);
  add("/redesign", (l) => getRedesigns(l).length > 0);
  for (const r of REDESIGNS) add(`/redesign/${r.slug}`, (l) => !!getRedesignFor(l, r.slug));
  add("/help", (l) => getHelpArticles(l).length > 0);
  for (const a of HELP_ARTICLES) add(`/help/${a.slug}`, (l) => !!getHelpArticleFor(l, a.slug));
  add("/ai-presentation-maker", (l) => hasPresentations(l));
  for (const p of PRESENTATIONS) add(`/presentations/${p.slug}`, (l) => hasPresentations(l) && !!getPresentationFor(l, p.slug));
  for (const m of MAKERS) add(`/tools/${m.slug}`, (l) => hasPresentations(l) && !!getMakerFor(l, m.slug));
  return pages;
}

export const PAGE_LANGUAGES: PageLanguages = build();
