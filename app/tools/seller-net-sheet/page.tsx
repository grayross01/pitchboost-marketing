import type { Metadata } from "next";
import NetSheetClient from "./net-sheet-client";
import ToolFaq from "@/components/marketing/tool-faq";

export const metadata: Metadata = {
  title: "Free Seller Net Sheet Calculator | PitchBoost",
  description:
    "Estimate a seller's net proceeds in seconds. Enter the sale price, mortgage payoff, commission, and closing costs and get a clean, branded breakdown to share with your seller. Free, no account needed.",
  alternates: { canonical: "/tools/seller-net-sheet" },
};

const FAQS = [
  { q: "Is the seller net sheet calculator free?", a: "Yes. It is free to use with no account required." },
  { q: "How accurate is the estimate?", a: "It is an estimate based on the numbers you enter, such as sale price, mortgage payoff, commission, and closing costs. Actual proceeds depend on the final settlement statement." },
  { q: "Can I share the breakdown with my seller?", a: "Yes. You can print it or save it as a PDF, branded with your name and brokerage." },
  { q: "Does it store my seller's information?", a: "No. All the math runs in your browser, and nothing about the property or seller is saved." },
  { q: "Can I add my branding?", a: "Yes. Add your name, brokerage, and an accent color and they appear on the printable breakdown." },
];

export default function SellerNetSheetPage() {
  return (
    <>
      <NetSheetClient />
      <ToolFaq faqs={FAQS} />
    </>
  );
}
