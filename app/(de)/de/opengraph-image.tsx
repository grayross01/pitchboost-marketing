import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { HOME_COPY } from "@/lib/home-i18n";
import { FOOTER_COPY } from "@/lib/chrome-i18n";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost";

const LOCALE = "de" as const;

/** The card for the German home page: its own headline, as the page says it, under the name the footer gives PitchBoost (German has no presentation maker page to take it from). Any German page with no card of its own gets this one too. */
export default function Image() {
  const { lead, mark, tail, sub } = HOME_COPY[LOCALE].hero.h1;
  return ogImage({ eyebrow: FOOTER_COPY[LOCALE].presentationMaker, title: `${lead} ${mark}${tail}`, subtitle: sub });
}
