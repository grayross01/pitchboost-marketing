import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { PRESENTATION_HUB, PRESENTATION_UI } from "@/lib/presentations-i18n";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost: AI presentation maker";

const LOCALE = "pt" as const;

export default function Image() {
  const hub = PRESENTATION_HUB[LOCALE];
  return ogImage({ eyebrow: PRESENTATION_UI[LOCALE].breadcrumbHub, title: hub.h1, subtitle: hub.ogSubtitle });
}
