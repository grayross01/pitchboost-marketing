/**
 * Locale scaffolding for the maker pages (/tools/[slug]): English at the root,
 * the other languages under their prefix, as the presentation family does
 * (and, like it, not in German yet: PresentationLocale in lib/locales.ts).
 * Page copy is data (lib/makers*.ts). The strings here are the words around
 * it and around the box that makes the deck.
 */
import { MAKERS, type MakerPage } from "./makers";
import { MAKERS_ES, MAKER_UI_ES } from "./makers.es";
import { MAKERS_PT, MAKER_UI_PT } from "./makers.pt";
import { MAKERS_FR, MAKER_UI_FR } from "./makers.fr";
import { MAKERS_AR, MAKER_UI_AR } from "./makers.ar";
import { DECK_MAKER_STRINGS, type DeckMakerStrings } from "../components/marketing/deck-maker-strings";
import { PRESENTATION_LOCALES, type PresentationLocale } from "./locales";

export interface MakerUi {
  getLabel: string;
  getTitle: string;
  faqLabel: string;
  faqTitle: string;
  moreLabel: string;
  moreTitle: string;
  guidesLabel: string;
  /** The button at the foot of the page that goes back up to the box. */
  toBox: string;
  /** The words around the box. A translated set carries `limit` and `busy`. */
  box: DeckMakerStrings;
}

export const MAKER_UI: Record<PresentationLocale, MakerUi> = {
  en: {
    getLabel: "What you get",
    getTitle: "A real deck, not a mockup",
    faqLabel: "FAQ",
    faqTitle: "Questions people ask",
    moreLabel: "More free tools",
    moreTitle: "Starting from something else?",
    guidesLabel: "Worth reading next",
    toBox: "Make mine now",
    box: DECK_MAKER_STRINGS,
  },
  es: MAKER_UI_ES,
  pt: MAKER_UI_PT,
  fr: MAKER_UI_FR,
  ar: MAKER_UI_AR,
};

export function getMakers(locale: PresentationLocale): MakerPage[] {
  return locale === "es" ? MAKERS_ES : locale === "pt" ? MAKERS_PT : locale === "fr" ? MAKERS_FR : locale === "ar" ? MAKERS_AR : MAKERS;
}

export function getMakerFor(locale: PresentationLocale, slug: string): MakerPage | undefined {
  return getMakers(locale).find((m) => m.slug === slug);
}

/** The locales that have this page; a new English page ships before its translations. */
export function makerLocales(slug: string): PresentationLocale[] {
  return PRESENTATION_LOCALES.filter((l) => !!getMakerFor(l, slug));
}
