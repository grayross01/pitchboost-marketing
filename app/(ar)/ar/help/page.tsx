import type { Metadata } from "next";
import { HelpHubView, helpHubMetadata } from "@/components/marketing/help-views";

export const metadata: Metadata = helpHubMetadata("ar");

export default function HelpHub() {
  return <HelpHubView locale="ar" />;
}
