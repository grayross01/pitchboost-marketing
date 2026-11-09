import type { Metadata } from "next";
import RedesignHubView, { hubMetadata } from "@/components/marketing/redesign-hub-view";

export const metadata: Metadata = hubMetadata("fr");

export default function RedesignHub() {
  return <RedesignHubView locale="fr" />;
}
