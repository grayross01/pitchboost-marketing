import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getHubCopy } from "@/lib/redesigns";
import { REDESIGN_UI } from "@/lib/redesign-i18n";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost: redesign your PowerPoint";

const LOCALE = "en" as const;

export default function Image() {
  const hub = getHubCopy(LOCALE);
  return ogImage({ eyebrow: REDESIGN_UI[LOCALE].breadcrumbHub, title: hub.h1, subtitle: hub.subhead });
}
