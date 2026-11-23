import type { Metadata } from "next";
import { Bricolage_Grotesque, Caveat, Figtree } from "next/font/google";
import "./home.css";
import Hero from "@/components/marketing/home/hero";
import NowShowing from "@/components/marketing/home/now-showing";
import Lineup from "@/components/marketing/home/lineup";
import Cast from "@/components/marketing/home/cast";
import AlsoPlaying from "@/components/marketing/home/also-playing";
import BoxOffice from "@/components/marketing/home/box-office";
import HouseRules from "@/components/marketing/home/house-rules";
import Heckles from "@/components/marketing/home/heckles";
import Finale from "@/components/marketing/home/finale";
import { HOME_FAQS } from "@/components/marketing/home/faqs";

// Redesign-first on purpose: most ChatGPT referrals land here, and this is
// the wording that earned them. /ai-presentation-maker carries that search.
const TITLE = "PitchBoost: Redesign Your PowerPoint or Build a New Deck, in Your Brand";
const DESCRIPTION =
  "Upload the PowerPoint you already have and PitchBoost rebuilds every slide in your brand, or start from a brief and get a new deck written for your audience. Share it as a tracked link, a PDF or an editable PowerPoint.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESCRIPTION },
};

// The home page's own faces: the app's display and text faces, and a
// handwriting face for the audience's remarks. Only this page loads them.
const display = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz"], variable: "--font-bricolage", display: "swap" });
const text = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });
const hand = Caveat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-caveat", display: "swap" });

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PitchBoost",
  url: "https://pitchboost.ai",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "AI presentation maker that builds a new presentation from a prompt (a lesson, a report, a talk or a pitch) or redesigns an existing PowerPoint or PDF deck in your brand, in a few minutes.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "0",
    offerCount: "4",
  },
  publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function MarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className={`sh-home ${display.variable} ${text.variable} ${hand.variable}`}>
        <Hero />
        <NowShowing />
        <Lineup />
        <Cast />
        <AlsoPlaying />
        <BoxOffice />
        <HouseRules />
        <Heckles />
        <Finale />
      </div>
    </>
  );
}
