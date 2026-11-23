import type { Metadata } from "next";
import HomeView, { homeMetadata } from "@/components/marketing/home/home-view";

export const metadata: Metadata = homeMetadata("en");

export default function MarketingPage() {
  return <HomeView locale="en" />;
}
