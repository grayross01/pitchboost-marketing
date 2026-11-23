import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { HOME_COPY } from "@/lib/home-i18n";
import { PRESENTATION_UI } from "@/lib/presentations-i18n";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost";

const LOCALE = "es" as const;

/** The card for the Spanish home page: its own headline, as the page says it. Any Spanish page with no card of its own gets this one too. */
export default function Image() {
  const { lead, mark, tail, sub } = HOME_COPY[LOCALE].hero.h1;
  return ogImage({ eyebrow: PRESENTATION_UI[LOCALE].breadcrumbHub, title: `${lead} ${mark}${tail}`, subtitle: sub });
}
