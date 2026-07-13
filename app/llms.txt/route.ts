import { INDUSTRIES } from "@/lib/industries";
import { FEATURES } from "@/lib/features";
import { COMPETITORS } from "@/lib/competitors";

/**
 * /llms.txt — a plain-text map of the site for LLMs and AI agents, following
 * the llmstxt.org convention. Generated from the same data that drives the
 * pages, so it stays current as industries/features/comparisons are added.
 */
export const dynamic = "force-static";

const BASE = "https://pitchboost.ai";
const APP = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";

function firstSentence(s: string): string {
  const m = s.match(/^.*?[.!?](?=\s|$)/);
  return (m ? m[0] : s).trim();
}

export function GET() {
  const out: string[] = [
    "# PitchBoost",
    "",
    "> AI pitch deck and sales presentation builder. PitchBoost generates a personalized, on-brand deck for a specific prospect or deal in under 60 seconds, publishes it as a trackable link with its own deal room, and shows you exactly who opened it and what they read.",
    "",
    "PitchBoost is for anyone who pitches: sales teams, founders, agencies, consultants, and real estate agents. Describe the prospect or paste a property listing link, and it writes the copy, designs the slides, and hands you a shareable link with viewer analytics, a Q&A deal room, and AI-drafted follow-ups. Free to start; Pro and Business plans add custom sending domains, higher limits, PDF and PowerPoint export, and team features.",
    "",
    "## Product",
    "",
    `- [Home](${BASE}/): what PitchBoost does and how it works`,
    `- [Pricing](${BASE}/pricing): plans and what each includes`,
    `- [Compare](${BASE}/compare): how PitchBoost stacks up against alternatives`,
    `- [Get started](${APP}/signup): create a free account`,
    "",
    "## Features",
    "",
    ...FEATURES.map((f) => `- [${f.navLabel}](${BASE}/features/${f.slug}): ${f.shortDescription}`),
    "",
    "## By industry",
    "",
    `- [All industries](${BASE}/industries): every use case PitchBoost is built for`,
    `- [Real estate hub](${BASE}/real-estate): listing presentations, branded closing timelines, and read receipts for real estate agents`,
    ...INDUSTRIES.map((i) => `- [${i.navLabel}](${BASE}/industries/${i.slug}): ${firstSentence(i.metaDescription)}`),
    "",
    "## Compare",
    "",
    ...COMPETITORS.map((c) => `- [PitchBoost vs ${c.name}](${BASE}/compare/${c.slug})`),
    "",
    "## Free tools for real estate agents",
    "",
    `- [Free tools hub](${BASE}/tools): all the free, no-signup tools for real estate agents in one place`,
    `- [Open house sign-in](${BASE}/tools/open-house-sign-in): branded QR sign-in sheet; every visitor is emailed to the agent as a lead`,
    `- [Seller net sheet](${BASE}/tools/seller-net-sheet): estimate a seller's net proceeds and share a branded breakdown`,
    `- [Closing timeline](${BASE}/tools/closing-timeline): generate every key real estate closing deadline from two dates`,
    `- [Review request](${BASE}/tools/review-request): send clients a branded thank-you page with a one-tap review button and a referral ask`,
    `- [Best listing presentation software](${BASE}/best-listing-presentation-software): honest 2026 roundup of listing presentation tools`,
    "",
    "## More",
    "",
    `- [Blog](${BASE}/blog): guides on pitch decks, sales presentations, and outreach`,
    `- [Use cases](${BASE}/use-cases)`,
    `- [Privacy](${BASE}/privacy)`,
    `- [Terms](${BASE}/terms)`,
    "",
  ];

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
