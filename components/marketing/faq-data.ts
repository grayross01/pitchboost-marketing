/**
 * Homepage FAQ content, in a plain (non-"use client") module so it can be
 * imported by both the client FAQ accordion and the server homepage (which
 * emits the FAQPage JSON-LD from it). Importing a value out of a "use client"
 * module into a server component yields a client reference, not the data, so
 * the shared array has to live here.
 */
export const FAQS = [
  {
    q: "How does PitchBoost use AI to create decks?",
    a: "You describe your deal, the company, the opportunity, key metrics, and PitchBoost's AI generates a complete, branded slide deck with professional copy, layout, and structure. You can edit every slide afterward.",
  },
  {
    q: "Can I use my own branding?",
    a: "Absolutely. Upload your logo and set your brand colors when you create a deal. Every generated deck uses your visual identity automatically.",
  },
  {
    q: "What format are the decks?",
    a: "PitchBoost decks are interactive web presentations you can share via link. You can also export to PDF for offline use.",
  },
  {
    q: "How is pricing calculated?",
    a: "Each plan includes a monthly AI budget that resets automatically. The budget covers deck generation and AI-powered edits. If you need more, you can purchase top-up credit packs at any time.",
  },
  {
    q: "Can I track who views my deck?",
    a: "Yes. Pro and Business plans include analytics so you can see who opened your deck, which slides they viewed, and how long they spent on each one.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Free plan lets you create up to 3 deals with basic analytics included. It's a great way to try PitchBoost before committing to a paid plan.",
  },
  {
    q: "Can I build decks from Claude or my own tools?",
    a: "Yes. PitchBoost has an MCP server and a REST API, so you can generate a finished, branded deck straight from Claude, Cursor, or your CRM and get back a shareable link with viewer analytics. See the API and MCP page for details.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. All paid plans are month-to-month (or annual with a discount). You can cancel at any time and your access continues through the end of your billing period.",
  },
];
