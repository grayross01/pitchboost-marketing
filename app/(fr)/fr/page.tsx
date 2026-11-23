import type { Metadata } from "next";
import HomeView, { homeMetadata } from "@/components/marketing/home/home-view";

export const metadata: Metadata = homeMetadata("fr");

export default function Home() {
  return <HomeView locale="fr" />;
}
