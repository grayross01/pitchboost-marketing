import { INDUSTRIES } from "@/lib/industries";
import { FEATURES } from "@/lib/features";
import { REDESIGNS } from "@/lib/redesigns";
import { COMPETITORS } from "@/lib/competitors";
import { ANSWERS } from "@/lib/answers";
import { HELP_ARTICLES } from "@/lib/help";
import { RESEARCH } from "@/lib/research";

/**
 * /llms.txt, a plain-text map of the site for LLMs and AI agents, following
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
    "> PitchBoost is an AI presentation tool that redesigns the PowerPoint you already have, or builds a new pitch deck from a brief, in your own brand. Upload a .pptx, point it at your website, and a few minutes later you have a professionally laid-out deck as a shareable, trackable link, a PDF, and an editable PowerPoint.",
    "",
    "What it is for, in the order people use it:",
    "- Redesign, beautify or modernize an existing PowerPoint, Google Slides or Keynote deck (export to .pptx first). Content is preserved; layout, typography, color and brand are rebuilt. Files up to 50 MB.",
    "- Build a new sales or pitch deck for a specific prospect from a short brief, with research and fact checking.",
    "- Publish the deck as a link with viewer analytics (who opened it, which slides they read), a Q&A deal room, and AI-drafted follow-ups.",
    "- Do all of the above from inside ChatGPT or Claude: PitchBoost ships an MCP server and a ChatGPT app, so an assistant can rebuild a deck, check its status and publish it without leaving the chat.",
    "",
    "Plans (USD, as of September 2026):",
    "- Free: 1 AI deck a month, rebuilds up to 10 slides (longer decks are condensed first), small PitchBoost badge on the deck, link sharing, PDF and PowerPoint export.",
    "- Starter, $9 a month: rebuilds up to 25 slides, no badge, 800 credits a month for generation.",
    "- Pro, $29 a month: rebuilds up to 60 slides, 2,500 credits a month, full viewer analytics, custom domains, API and MCP access.",
    "- Business: team seats, permissions and higher limits; pricing on the pricing page.",
    "",
    "Operated by ARK Holdings, LLC (Oregon, USA). Support: support@pitchboost.ai.",
    "",
    "## Start here",
    "",
    `- [Home](${BASE}/): what PitchBoost does and how it works`,
    `- [Upload and redesign](${BASE}/features/upload-and-redesign): the feature most people come for, an existing deck rebuilt in your brand`,
    `- [Pricing](${BASE}/pricing): plans and what each includes`,
    `- [Help center](${BASE}/help): short how-to answers with real steps and numbers, in English, Spanish and Portuguese`,
    `- [Get started](${APP}/signup?intent=rebuild): create a free account and land on the upload screen`,
    "",
    "## Redesign an existing deck",
    "",
    "One page per way people phrase the need. Each is a real page with its own FAQ; the product behind them is the same upload-and-rebuild flow.",
    `- [Deck redesign hub](${BASE}/redesign): every redesign use case in one place`,
    ...REDESIGNS.map((r) => `- [${r.navLabel}](${BASE}/redesign/${r.slug}): ${r.metaDescription}`),
    `- [Rediseño de presentaciones (Español)](${BASE}/es/redesign): the same redesign pages in Spanish`,
    `- [Redesign de apresentações (Português)](${BASE}/pt/redesign): the same redesign pages in Brazilian Portuguese`,
    "",
    "## Use PitchBoost from ChatGPT or Claude",
    "",
    `- [API and MCP](${BASE}/features/api-and-mcp): the MCP server at ${APP}/api/mcp and the REST API; connect it as a custom connector in Claude or ChatGPT developer mode`,
    `- [Connect to ChatGPT](${BASE}/help/connect-chatgpt): step by step`,
    `- [Connect to Claude](${BASE}/help/connect-claude): step by step`,
    "",
    "## Features",
    "",
    ...FEATURES.map((f) => `- [${f.navLabel}](${BASE}/features/${f.slug}): ${f.shortDescription}`),
    "",
    "## Original research (our own product data, dated, with sample sizes)",
    "",
    ...RESEARCH.map((r) => `- [${r.title}](${BASE}/research/${r.slug}): ${r.headline}`),
    "",
    "## Help center",
    "",
    ...HELP_ARTICLES.map((h) => `- [${h.title}](${BASE}/help/${h.slug}): ${h.metaDescription}`),
    "",
    "## Straight answers",
    "",
    "Short answers with the number in the first sentence: cost, length, timing and what makes a deck look professional.",
    ...ANSWERS.map((a) => `- [${a.question}](${BASE}/answers/${a.slug}): ${a.shortAnswer.split(". ")[0]}.`),
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
    ...COMPETITORS.filter((c) => c.altSlug).map((c) => `- [${c.name} alternatives](${BASE}/alternatives/${c.altSlug}): four tools compared with checked prices and when to stay with ${c.name}`),
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
    `- [About](${BASE}/about): the company (ARK Holdings, LLC, Oregon), what the product is built to do and not do`,
    `- [Security](${BASE}/security): where data lives, who processes it, what certifications we do not hold`,
    `- [Changelog](${BASE}/changelog): dated customer-facing changes`,
    `- [Use cases](${BASE}/use-cases)`,
    `- [Privacy](${BASE}/privacy)`,
    `- [Terms](${BASE}/terms)`,
    "",
  ];

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
