import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { HELP_UI } from "@/lib/help-i18n";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PitchBoost help center";

const ui = HELP_UI["en"];

export default function Image() {
  return ogImage({ eyebrow: "PitchBoost", title: ui.hubTitle, subtitle: ui.hubMetaDescription });
}
