import type { Metadata } from "next";
import { HelpHubView, helpHubMetadata } from "@/components/marketing/help-views";

export const metadata: Metadata = helpHubMetadata("de");

export default function HelpHub() {
  return <HelpHubView locale="de" />;
}
