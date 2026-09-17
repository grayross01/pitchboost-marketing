/**
 * Product changelog, newest first. Customer-facing changes only, in the
 * words a customer would use; internal refactors and admin tooling stay out.
 * One entry per shipped change or tight group of changes, dated the day it
 * reached production. Keep every line free of em dashes.
 */
export interface ChangelogEntry {
  date: string;
  title: string;
  body: string;
  area: "Redesign" | "Decks" | "Sharing" | "Email" | "Billing" | "Integrations" | "Languages" | "Site";
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "2026-09-17",
    title: "Help center in English, Spanish and Portuguese",
    body: "Ten short articles with real steps: redesigning a PowerPoint, Google Slides and Keynote, slide limits by plan, downloads, share links, connecting to ChatGPT and Claude, credits, how long a deck takes, and how your brand is captured.",
    area: "Site",
  },
  {
    date: "2026-09-16",
    title: "Emails in your language, with the deck up front",
    body: "Account emails now arrive in the language your dashboard is set to (English, Spanish, Portuguese). The deck-ready email leads with a picture of the title slide, an Open link and a PowerPoint download.",
    area: "Email",
  },
  {
    date: "2026-09-16",
    title: "Your uploaded slides fill the wait",
    body: "While a rebuild is drafting, the generating screen shows the slides you uploaded as small cards in your brand color, so the wait is not a blank screen.",
    area: "Redesign",
  },
  {
    date: "2026-09-16",
    title: "Custom domains on Pro",
    body: "Pro now includes custom domains for deck links, as the pricing page has said. Previously the setting was only enabled on Business.",
    area: "Billing",
  },
  {
    date: "2026-09-14",
    title: "Right-to-left decks and SmartArt",
    body: "Decks in Arabic, Hebrew, Persian and Urdu are laid out right to left. Text inside SmartArt diagrams is now read from uploaded PowerPoints instead of being dropped.",
    area: "Redesign",
  },
  {
    date: "2026-09-14",
    title: "A hard slide cap on every rebuild",
    body: "A rebuild never exceeds your plan's slide limit, including condensed rebuilds and the quality revision pass. The share screen says how many of your slides were kept and how to rebuild the rest.",
    area: "Redesign",
  },
  {
    date: "2026-09-12",
    title: "Rebuild a deck from ChatGPT or Claude",
    body: "The PitchBoost connector gained rebuild_deck, get_rebuild_status and publish_deck: attach a deck in ChatGPT or Claude, ask for it to be improved, and get the link when it is ready.",
    area: "Integrations",
  },
  {
    date: "2026-09-11",
    title: "Starter plan and the credit meter",
    body: "Starter is $9 a month: 800 credits, decks up to 25 slides, no PitchBoost badge, top-up packs. Every plan now shows a simple percentage of the monthly allowance instead of a running dollar figure.",
    area: "Billing",
  },
  {
    date: "2026-09-08",
    title: "Chart data carries into rebuilds",
    body: "Series and values inside PowerPoint charts are read with the slide text, so a data-heavy deck rebuilds with your real numbers and the fact check knows they are yours.",
    area: "Redesign",
  },
  {
    date: "2026-09-08",
    title: "Find and replace without the model",
    body: "Plain text replacements across a deck run instantly and cost no credits. Three AI edits a month are included on the free plan.",
    area: "Decks",
  },
  {
    date: "2026-09-08",
    title: "Local currency at checkout",
    body: "Stripe shows the price in your local currency at checkout.",
    area: "Billing",
  },
  {
    date: "2026-08-31",
    title: "Free deck evaluator",
    body: "Upload a deck and get a scored review of structure, clarity and design without an account.",
    area: "Site",
  },
  {
    date: "2026-08-24",
    title: "Unsourced numbers never ship",
    body: "The fact check now removes any quantitative claim that cannot be traced to your uploaded deck, your website or a cited source, and links each kept fact to where it came from. Keep, replace or drop each imported image before a rebuild.",
    area: "Decks",
  },
  {
    date: "2026-08-23",
    title: "Review-and-send screen in Spanish and Portuguese",
    body: "The screen where you review a deck, publish it and send it is now localized, with the rest of the dashboard.",
    area: "Languages",
  },
];
