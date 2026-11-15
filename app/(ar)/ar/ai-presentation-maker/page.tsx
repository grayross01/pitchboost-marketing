import type { Metadata } from "next";
import PresentationHubView, { presentationHubMetadata } from "@/components/marketing/presentation-hub-view";

export const metadata: Metadata = presentationHubMetadata("ar");

export default function AiPresentationMakerPage() {
  return <PresentationHubView locale="ar" />;
}
