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
    date: "2026-10-28",
    title: "Type straight onto your slides",
    body: "The editor is rebuilt. Click any words on a slide and type, or click a picture to swap it from your deal, the image library or an upload. Everything saves as you go, Undo takes back any change (the AI's included), and the AI sits beside the slide while you work.",
    area: "Decks",
  },
  {
    date: "2026-10-28",
    title: "Searchable PDFs, and speaker notes in every PowerPoint",
    body: "Downloaded PDFs now carry the slide text, so you can select, copy and search it. The exact-look PowerPoint has your speaker notes too, and the two PowerPoints download under different names.",
    area: "Decks",
  },
  {
    date: "2026-10-27",
    title: "An editable PowerPoint that looks like your deck",
    body: "Editable PowerPoint now keeps the deck's own design, pictures and logos, with every word as real PowerPoint text you can change, in the deck's fonts, sizes and colors.",
    area: "Decks",
  },
  {
    date: "2026-10-27",
    title: "One place to share or download",
    body: "A deck's share screen shows the deck on the left and one panel on the right for the link and every download, with Edit deck at the top.",
    area: "Sharing",
  },
  {
    date: "2026-10-26",
    title: "Present from PitchBoost, with a presenter view",
    body: "Present opens the deck full window, one slide at a time. Presenter view opens a second window with the next slide, your speaker notes, a clock and a timer, and both windows stay on the same slide.",
    area: "Decks",
  },
  {
    date: "2026-10-26",
    title: "Check the outline before the deck is built",
    body: "Before a deck is built from a written brief, PitchBoost shows the slide-by-slide plan. Edit titles and points, reorder, add or remove slides, or ask for a revision, then build exactly that plan. Or skip it.",
    area: "Decks",
  },
  {
    date: "2026-10-26",
    title: "An AI chat beside the deck",
    body: "Ask for a change to the slide you're on or to the whole deck in one running conversation. Changes save themselves with Undo, questions get answers without changing anything, and you see the cost before you send.",
    area: "Decks",
  },
  {
    date: "2026-10-23",
    title: "Long PDFs read to the end",
    body: "Attach a long PDF, like a thesis or an annual report, and PitchBoost reads up to 120 pages, condensing each part and keeping every number, instead of stopping at page 40.",
    area: "Decks",
  },
  {
    date: "2026-10-23",
    title: "Make a presentation free, with no account",
    body: "On pitchboost.ai, type what your presentation is about and get a designed deck in about two minutes, free and with no sign-up.",
    area: "Site",
  },
  {
    date: "2026-10-22",
    title: "Presentations for every purpose",
    body: "PitchBoost now shapes a deck for its job: lessons end on takeaways and questions, reports lead with the result, talks build to a point, and only pitches end on an ask.",
    area: "Decks",
  },
  {
    date: "2026-10-22",
    title: "No PitchBoost credit on decks you paid for",
    body: "Decks on a paid plan, or bought once, carry no PitchBoost badge or credit line anywhere: the link, the downloads and Google Slides.",
    area: "Billing",
  },
  {
    date: "2026-10-21",
    title: "Right-to-left downloads",
    body: "Arabic, Hebrew, Persian and Urdu decks now download right to left in PowerPoint, the editable PowerPoint and Google Slides.",
    area: "Languages",
  },
  {
    date: "2026-10-20",
    title: "Free links, paid downloads, and Starter at $7",
    body: "Every deck's link stays free to share and present. The PowerPoint, PDF and Google Slides files come with Starter (now $7 a month, decks up to 25 slides), Pro or Business, or $9 once for a single deck up to 25 slides. Accounts created before Oct 20 keep their downloads.",
    area: "Billing",
  },
  {
    date: "2026-10-09",
    title: "Open any deck in Google Slides",
    body: "Open in Google Slides puts an editable copy of the deck in your own Google Drive and opens it there.",
    area: "Integrations",
  },
  {
    date: "2026-10-06",
    title: "Redesign a PDF, and \"Make it look like this\"",
    body: "Upload a deck saved as a PDF and PitchBoost rebuilds it like a PowerPoint, and a PDF attached for context is now read. \"Make it look like this\" takes a picture of a look you like (a slide, a website, a brand board) and builds the deck in its colors, fonts and layout.",
    area: "Decks",
  },
  {
    date: "2026-09-30",
    title: "Finish one deck for $13, no subscription",
    body: "If your upload is longer than the free plan builds, you can now finish that one deck with a one-time payment: every slide rebuilt, no PitchBoost badge, and 100 credits for edits ($13 up to 50 slides, $25 up to 60). The free choice comes first: condense to 10 slides and build. Starter now rebuilds decks up to 50 slides.",
    area: "Billing",
  },
  {
    date: "2026-09-30",
    title: "PitchBoost is in ChatGPT's plugin directory",
    body: "Add the PitchBoost plugin in ChatGPT, on a free account or a paid one, attach a .pptx and ask for a redesign, or describe a new deck. ChatGPT replies with the link; open it in PitchBoost for the full preview and the PowerPoint and PDF downloads.",
    area: "Integrations",
  },
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
