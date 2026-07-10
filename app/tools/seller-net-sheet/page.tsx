import type { Metadata } from "next";
import NetSheetClient from "./net-sheet-client";

export const metadata: Metadata = {
  title: "Free Seller Net Sheet Calculator | PitchBoost",
  description:
    "Estimate a seller's net proceeds in seconds. Enter the sale price, mortgage payoff, commission, and closing costs and get a clean, branded breakdown to share with your seller. Free, no account needed.",
  alternates: { canonical: "/tools/seller-net-sheet" },
};

export default function SellerNetSheetPage() {
  return <NetSheetClient />;
}
