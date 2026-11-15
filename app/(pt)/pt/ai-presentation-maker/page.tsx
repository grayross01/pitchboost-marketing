import type { Metadata } from "next";
import PresentationHubView, { presentationHubMetadata } from "@/components/marketing/presentation-hub-view";

export const metadata: Metadata = presentationHubMetadata("pt");

export default function AiPresentationMakerPage() {
  return <PresentationHubView locale="pt" />;
}
