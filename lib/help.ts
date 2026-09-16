/**
 * Help center articles (English source of truth).
 *
 * Why this exists: when someone asks ChatGPT or Perplexity "how do I redesign
 * a PowerPoint with AI", the answer cites help-center pages, because they are
 * short, literal and step-shaped. Every competitor that gets cited has one.
 * These pages are written to be quoted: the first paragraph is the answer,
 * the steps are real UI steps, the numbers are the product's real numbers.
 *
 * Spanish and Portuguese live in generated siblings (help.es.ts, help.pt.ts),
 * produced by the translation job in the app repo. Slugs match one to one so
 * hreflang works. Keep facts in sync with the app; if the app changes, the
 * article changes and `updated` moves.
 */

export type HelpCategory = "redesign" | "output" | "sharing" | "assistants" | "account";

export interface HelpArticle {
  slug: string;
  category: HelpCategory;
  title: string;
  metaDescription: string;
  /** The direct answer, first paragraph. Written to be quoted whole. */
  answer: string;
  /** Real UI steps. When present the page carries HowTo schema. */
  steps?: { title: string; body: string }[];
  sections?: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
  /** Slugs of related articles. */
  related: string[];
  /** ISO date the copy last changed (sitemap lastmod, dateModified). */
  updated: string;
}

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: "redesign-a-powerpoint",
    category: "redesign",
    title: "How to redesign a PowerPoint with PitchBoost",
    metaDescription:
      "Upload a .pptx, point PitchBoost at your website, and get the deck back redesigned in your brand in a few minutes. Step by step, with what happens to your content.",
    answer:
      "To redesign a PowerPoint in PitchBoost, choose \"Make a deck I have better\" after signing in, upload the .pptx (up to 50 MB), enter your company website so it can pick up your logo and colors, and click Generate. The rebuilt deck arrives in about 3 to 5 minutes as a web deck you can edit, share as a link, or download as PowerPoint or PDF. Your slide content is kept; the layout, typography, spacing and brand are rebuilt.",
    steps: [
      {
        title: "Sign in and choose \"Make a deck I have better\"",
        body: "Create a free account or sign in. On the first screen pick the rebuild option. If you arrived from a redesign page on this site, you land there automatically.",
      },
      {
        title: "Upload the .pptx",
        body: "Drop in the PowerPoint file or click to browse. Files up to 50 MB are accepted. Keynote and Google Slides users export to .pptx first (one menu click in either app).",
      },
      {
        title: "Enter your company website",
        body: "PitchBoost scans it for about 15 seconds and captures your logo, brand colors, fonts and tone of voice. If it picked the wrong logo, replace it right there before generating.",
      },
      {
        title: "Decide what to do with a long deck",
        body: "If the deck has more slides than your plan rebuilds, PitchBoost asks whether to condense it to fit or rebuild the first slides only. Most decks under the limit skip this step.",
      },
      {
        title: "Click Generate and wait, or leave",
        body: "The rebuild usually takes 3 to 5 minutes including a quality review. You can watch the slides land, or close the tab: PitchBoost emails you a link to the finished deck.",
      },
      {
        title: "Review, edit, share",
        body: "Open any slide in the editor to tweak it, publish the deck as an unlisted link, or download it as PowerPoint or PDF from the share screen.",
      },
    ],
    sections: [
      {
        heading: "What changes and what does not",
        paragraphs: [
          "The content of each slide is preserved: titles, body text, numbers, chart values and speaker-facing structure. What gets rebuilt is everything visual: layout, hierarchy, typography, color, spacing and imagery, all in the brand captured from your website.",
          "Dense slides are restructured rather than shrunk. A wall of bullets becomes a layout that matches its content (steps, a comparison, a grid). Nothing is invented; a fact check compares the rebuilt deck to your original.",
        ],
      },
      {
        heading: "Slide limits by plan",
        paragraphs: [
          "The free plan rebuilds up to 10 slides, Starter up to 25 and Pro up to 60. A longer deck can be condensed to fit before the rebuild starts, and the share screen tells you how many slides were kept.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it work with .ppt files?",
        a: "Upload .pptx. Open a legacy .ppt in PowerPoint and use Save As to convert it; nothing is lost.",
      },
      {
        q: "Can I redesign only some slides?",
        a: "The rebuild runs on the whole deck. Afterwards every slide is editable, and you can regenerate or restore individual slides in the editor.",
      },
      {
        q: "What does it cost?",
        a: "The free plan includes one AI deck a month, up to 10 slides, with a small PitchBoost badge. Starter is $9 a month for up to 25 slides and no badge; Pro is $29 a month for up to 60 slides with full analytics.",
      },
    ],
    related: ["google-slides-and-keynote", "slide-limits-by-plan", "download-powerpoint-or-pdf", "how-long-does-a-deck-take"],
    updated: "2026-09-16",
  },

  {
    slug: "google-slides-and-keynote",
    category: "redesign",
    title: "How to redesign Google Slides or Keynote decks",
    metaDescription:
      "PitchBoost reads .pptx files. Export your Google Slides or Keynote deck to PowerPoint in one step, upload it, and get it back redesigned in your brand.",
    answer:
      "PitchBoost accepts PowerPoint (.pptx) files, and both Google Slides and Keynote export to .pptx in one step with the text, images and charts intact. Export the file, upload it to PitchBoost, and the redesign works exactly as it does for a PowerPoint deck.",
    steps: [
      {
        title: "Google Slides: File > Download > Microsoft PowerPoint (.pptx)",
        body: "The download is a full copy of the deck. Speaker notes and charts come along; embedded videos do not.",
      },
      {
        title: "Keynote: File > Export To > PowerPoint",
        body: "Keep the default settings. Keynote converts its layouts and text to PowerPoint objects that PitchBoost can read.",
      },
      {
        title: "Upload the .pptx to PitchBoost",
        body: "Sign in, choose \"Make a deck I have better\", and drop the exported file in. Then add your website so the rebuild uses your brand.",
      },
    ],
    sections: [
      {
        heading: "Going back to Google Slides or Keynote afterwards",
        paragraphs: [
          "Download the editable PowerPoint from the share screen and open it in either app: Google Slides imports .pptx through File > Import slides or by uploading to Drive; Keynote opens .pptx directly. Text boxes and shapes stay editable. The web deck link also works on its own, without any app.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will my Google Slides fonts survive?",
        a: "The redesign replaces the deck's fonts with your brand's typography, taken from your website, so the original fonts are not needed.",
      },
      {
        q: "Can I upload a PDF instead?",
        a: "Not for a rebuild. A PDF has no slide structure to read. Export .pptx from the original app; if you only have a PDF, build a new deck and paste the content in.",
      },
    ],
    related: ["redesign-a-powerpoint", "download-powerpoint-or-pdf", "brand-from-your-website"],
    updated: "2026-09-16",
  },

  {
    slug: "slide-limits-by-plan",
    category: "redesign",
    title: "How many slides PitchBoost rebuilds on each plan",
    metaDescription:
      "Free rebuilds up to 10 slides, Starter up to 25, Pro and Business up to 60. What happens to a longer deck: condense to fit, or rebuild the first slides.",
    answer:
      "The free plan rebuilds decks up to 10 slides, Starter up to 25, and Pro and Business up to 60. If your deck is longer, PitchBoost offers to condense it to fit (same story, fewer slides) or to rebuild only the first slides. The share screen shows how many of your original slides were kept and how to rebuild the rest after an upgrade.",
    sections: [
      {
        heading: "The limits",
        paragraphs: [
          "Free: up to 10 slides per deck, one AI deck a month. Starter ($9 a month): up to 25 slides. Pro ($29 a month) and Business ($79 a month): up to 60 slides. The limit applies to the deck PitchBoost produces, not the file you upload; you can upload a 45-slide deck on any plan.",
        ],
      },
      {
        heading: "Condense or cut",
        paragraphs: [
          "When a deck is over the limit, you choose before anything generates. Condense keeps the narrative and merges or drops the least essential slides so the whole story fits. Rebuild the first N keeps every slide up to the limit exactly and leaves the rest out.",
          "Condensing is usually the better choice for a pitch: most strong pitch decks are 10 to 15 slides. Cutting is better when the deck is a sequence (a training module, a step-by-step process) where the order matters more than the length.",
        ],
      },
      {
        heading: "Very long decks",
        paragraphs: [
          "Decks over 40 slides are always either condensed or cut to 40 before the plan limit applies, so a 90-slide training deck on Pro comes back as 40 slides at most. Split very long decks into modules and rebuild each one.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does upgrading rebuild the missing slides automatically?",
        a: "No. After upgrading, open the deal and run the rebuild again; the share screen has a button for it. The full deck replaces the condensed one.",
      },
      {
        q: "Does the limit apply to new decks too?",
        a: "Yes. A deck built from a brief uses the same per-plan slide limit.",
      },
      {
        q: "Does a condensed deck count as a full deck?",
        a: "Yes. One rebuild is one AI deck, whatever its length, and it uses 100 credits.",
      },
    ],
    related: ["redesign-a-powerpoint", "credits-and-plans", "download-powerpoint-or-pdf"],
    updated: "2026-09-16",
  },

  {
    slug: "download-powerpoint-or-pdf",
    category: "output",
    title: "How to download your deck as PowerPoint or PDF",
    metaDescription:
      "Every plan can download a deck as an editable PowerPoint, an exact-look PowerPoint, or a PDF. Where the buttons are and which file to pick.",
    answer:
      "Open the deck's share screen and use the download buttons: \"Download PowerPoint\" gives you an editable .pptx with real text boxes and shapes, \"PowerPoint\" gives you an exact-look .pptx where each slide is an image of the web deck, and \"PDF\" gives you one page per slide. Downloads are available on every plan; on the free plan they carry a small PitchBoost badge.",
    steps: [
      {
        title: "Open the deck",
        body: "From your dashboard, open the deal and click the deck. The share screen shows the preview with the download and publish controls beside it.",
      },
      {
        title: "Pick the file you need",
        body: "Editable PowerPoint for anything you will keep working on. Exact-look PowerPoint when the deck must look identical to the web version on someone else's machine. PDF for email attachments and printing.",
      },
      {
        title: "Wait for the file",
        body: "The button shows \"Preparing\" while the file renders, usually a few seconds. The download starts automatically.",
      },
    ],
    sections: [
      {
        heading: "Editable versus exact-look",
        paragraphs: [
          "The editable PowerPoint is close to the web layout but not pixel-identical: it uses PowerPoint's own text boxes, shapes and fonts so you can edit every element. The exact-look file is pixel-identical because each slide is a high-resolution image, which also means the text cannot be edited in PowerPoint. When in doubt, take both; they are free to generate.",
        ],
      },
      {
        heading: "The badge",
        paragraphs: [
          "On the free plan, every slide carries a small \"Powered by PitchBoost\" badge, and it rides along in PDF and PowerPoint downloads. Starter ($9 a month) removes it from every deck and export, and you can also remove it from a single deck with a one-time purchase from the share screen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I download without publishing?",
        a: "Yes. Downloads work on a private draft. Publishing only matters for the web link.",
      },
      {
        q: "Are the fonts embedded in the editable PowerPoint?",
        a: "The file names your brand fonts; if a machine does not have them installed, PowerPoint substitutes a similar font. The exact-look file has no such issue because the slides are images.",
      },
      {
        q: "Is there a Google Slides export?",
        a: "Download the editable PowerPoint and import it into Google Slides through File > Import slides. Everything stays editable.",
      },
    ],
    related: ["share-a-deck-link", "google-slides-and-keynote", "credits-and-plans"],
    updated: "2026-09-16",
  },

  {
    slug: "share-a-deck-link",
    category: "sharing",
    title: "How to share a deck as a link and see who opened it",
    metaDescription:
      "Publish a deck to get an unlisted link, send it to a prospect, and get notified the moment they open it. What the free plan tracks and what Pro adds.",
    answer:
      "Click \"Publish & copy link\" on the deck's share screen. That creates an unlisted link (anyone with it can view; nobody can find it otherwise) and copies it to your clipboard. When a prospect opens the link, PitchBoost emails you. Free and Starter show basic analytics (opens and views); Pro and Business show which slides each viewer read and for how long.",
    steps: [
      {
        title: "Publish the deck",
        body: "On the share screen click \"Publish & copy link\". Until you do, the deck is a private draft only you and your team can see.",
      },
      {
        title: "Send the link, or add recipients",
        body: "Paste the link anywhere. For named tracking, add recipients on the deal: each one gets a private link so you know exactly who opened what.",
      },
      {
        title: "Watch the deal",
        body: "You get an email the moment the deck is opened. The deal page shows every visit; on Pro and Business it also shows time per slide and which slides were skipped.",
      },
      {
        title: "Take it offline when you want",
        body: "\"Make private\" on the share screen stops the link from working until you publish again.",
      },
    ],
    sections: [
      {
        heading: "The deal room",
        paragraphs: [
          "The link opens a page that holds the deck plus anything else you attached to the deal (a one-sheet, a Q&A). Viewers can ask a question from the page; it lands in your inbox with their email if they left one. A viewer sees the deck, never your notes or the rest of your account.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I use my own domain for the link?",
        a: "Custom domains are included on Pro and Business. Free and Starter share links on app.pitchboost.ai.",
      },
      {
        q: "Do I need the viewer's email to track them?",
        a: "No. Every open is tracked on the link itself. Adding recipients gives each person their own link so the analytics are named.",
      },
      {
        q: "Does the link expire?",
        a: "No. It works until you make the deck private or delete the deal.",
      },
    ],
    related: ["download-powerpoint-or-pdf", "credits-and-plans", "redesign-a-powerpoint"],
    updated: "2026-09-16",
  },

  {
    slug: "connect-chatgpt",
    category: "assistants",
    title: "How to use PitchBoost in ChatGPT",
    metaDescription:
      "Add PitchBoost to ChatGPT as a connector, sign in once, then ask ChatGPT to redesign a deck, build a new one, or list your decks. The exact steps.",
    answer:
      "Add PitchBoost to ChatGPT as a connector using the server address https://app.pitchboost.ai/api/mcp, sign in to your PitchBoost account when ChatGPT asks, and then talk to it normally: upload a deck and say \"make this look professional\", or describe a prospect and ask for a pitch deck. ChatGPT calls PitchBoost, which returns a link to the finished deck. A PitchBoost app listing for ChatGPT is under review; until it appears in the directory, the connector route below works on accounts with developer mode enabled.",
    steps: [
      {
        title: "Turn on developer mode",
        body: "In ChatGPT open Settings, then Connectors, then Advanced, and enable Developer mode. This is the switch that allows custom connectors.",
      },
      {
        title: "Create the connector",
        body: "Still under Connectors, click Create. Name it PitchBoost, paste https://app.pitchboost.ai/api/mcp as the MCP server URL, choose OAuth as the authentication, and save. If the sign-in fails with an unknown client error, open the connector's advanced settings and set client registration to dynamic (DCR).",
      },
      {
        title: "Sign in to PitchBoost",
        body: "ChatGPT opens a PitchBoost sign-in window. Use your existing account or create a free one. You do this once.",
      },
      {
        title: "Use it in a chat",
        body: "Start a new chat, enable the PitchBoost connector in the tools menu, and ask. For a redesign, attach the .pptx and ask for it to be improved: ChatGPT reads the slides and sends them to PitchBoost, which rebuilds the deck in your brand and returns the link.",
      },
    ],
    sections: [
      {
        heading: "What ChatGPT can do with PitchBoost",
        paragraphs: [
          "Rebuild a deck you upload, check whether a rebuild has finished, build a new deck for a specific prospect, list your recent decks, get the link for one, and publish a draft. It can also make a sample deck without an account, with a badge, that you can claim later.",
          "It cannot change your plan, delete anything, or see decks outside your account. Rebuilds and new decks use the same monthly allowance as the app: one deck a month on the free plan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the connector work on a free ChatGPT account?",
        a: "Custom connectors need a ChatGPT plan with developer mode available. Check Settings > Connectors > Advanced on your account; if the switch is not there, the directory listing, once approved, will be the route.",
      },
      {
        q: "Where does the rebuilt deck go?",
        a: "Into your PitchBoost account, under a deal named after the deck. The link ChatGPT gives you opens it directly; you can edit and download from there like any other deck.",
      },
      {
        q: "Is my deck content sent to PitchBoost?",
        a: "Yes, the slide text ChatGPT extracts is sent to PitchBoost to rebuild the deck, and stored in your account with the result. The privacy policy explains retention and deletion.",
      },
    ],
    related: ["connect-claude", "redesign-a-powerpoint", "credits-and-plans"],
    updated: "2026-09-16",
  },

  {
    slug: "connect-claude",
    category: "assistants",
    title: "How to use PitchBoost in Claude",
    metaDescription:
      "Add PitchBoost to Claude as a custom connector, sign in once, and ask Claude to redesign a deck or build a new one. The exact steps for claude.ai and Claude Code.",
    answer:
      "In Claude, add PitchBoost as a custom connector with the URL https://app.pitchboost.ai/api/mcp, sign in when prompted, and then ask Claude to rebuild a deck you upload or to build a new one for a prospect. Claude calls PitchBoost through the Model Context Protocol (MCP) and returns the link to the finished deck.",
    steps: [
      {
        title: "Open connector settings",
        body: "On claude.ai go to Settings, then Connectors, and click Add custom connector. On a Team or Enterprise plan an admin may need to add it for the organisation.",
      },
      {
        title: "Add the PitchBoost server",
        body: "Name: PitchBoost. URL: https://app.pitchboost.ai/api/mcp. Leave the OAuth client fields empty; PitchBoost registers the client automatically. Save.",
      },
      {
        title: "Connect your account",
        body: "Click Connect next to PitchBoost. A PitchBoost sign-in window opens; sign in or create a free account. Claude remembers the connection.",
      },
      {
        title: "Ask for a deck",
        body: "In a chat, make sure PitchBoost is enabled under the tools menu. Attach a .pptx and say \"rebuild this in our brand\", or describe the prospect and the offer and ask for a pitch deck. Claude reports back with the link when it is ready.",
      },
    ],
    sections: [
      {
        heading: "Claude Code and other MCP clients",
        paragraphs: [
          "Any client that speaks MCP over Streamable HTTP can use the same address. In Claude Code, add it with the CLI (claude mcp add --transport http pitchboost https://app.pitchboost.ai/api/mcp) and complete the sign-in in the browser window it opens. Cursor and Windsurf take the same URL in their MCP settings.",
        ],
      },
      {
        heading: "What Claude can do with PitchBoost",
        paragraphs: [
          "Rebuild an uploaded deck, poll the rebuild until it is ready, build a new deck from a brief, list your recent decks, fetch one by id, and publish a draft. It can also make a sample deck without an account. Nothing it does is destructive, and it never changes your plan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is PitchBoost in the Claude connector directory?",
        a: "A directory listing is in progress. Until it appears, the custom connector above is the route, and it works on every claude.ai plan that allows custom connectors.",
      },
      {
        q: "Does it use my credits?",
        a: "Yes, the same as the app: a rebuild or a new deck is 100 credits and counts as one of your monthly decks. Listing and fetching decks is free.",
      },
    ],
    related: ["connect-chatgpt", "redesign-a-powerpoint", "credits-and-plans"],
    updated: "2026-09-16",
  },

  {
    slug: "credits-and-plans",
    category: "account",
    title: "How credits and plans work",
    metaDescription:
      "Every plan includes monthly credits; a deck costs 100, a slide edit 10. What Free, Starter, Pro and Business include, what rolls over, and how to buy more.",
    answer:
      "Every PitchBoost plan includes a monthly credit allowance and every AI action has a fixed price: a deck (new or rebuilt) costs 100 credits, a slide edit 10, a full-deck edit 50, a website scan 10. Free includes 150 credits a month (one deck), Starter 800, Pro 2,500 and Business 7,000. Paid plans roll unused credits over for a month and can buy top-up packs. In the app you see the percentage of your allowance used, never a running dollar figure.",
    sections: [
      {
        heading: "The plans",
        paragraphs: [
          "Free: 150 credits a month, one deal, decks up to 10 slides, PDF and PowerPoint export with a small badge, a shareable link with basic analytics. No card required.",
          "Starter, $9 a month: 800 credits, unlimited deals, decks up to 25 slides, no badge anywhere, top-up packs.",
          "Pro, $29 a month: 2,500 credits, decks up to 60 slides, full viewer analytics with time per slide, saved templates, custom domains, API and MCP access.",
          "Business, $79 a month: 7,000 credits, team seats and permissions, analytics export, and sending from your own domain.",
          "Annual billing is cheaper: Starter $7, Pro $24 and Business $66 a month when paid yearly.",
        ],
      },
      {
        heading: "Rollover and packs",
        paragraphs: [
          "On paid plans, unused credits carry into the next month up to one month's allowance. On the free plan they reset. Top-up packs of 250 ($5), 900 ($15) and 2,800 ($40) credits are available on paid plans and never expire while you are subscribed.",
        ],
      },
      {
        heading: "What is free",
        paragraphs: [
          "Fact checking, chart extraction, publishing, sharing, viewing analytics and downloading files never cost credits. Only AI generation does.",
        ],
      },
    ],
    faqs: [
      {
        q: "What happens when I run out?",
        a: "AI actions pause until the next period, or immediately after you buy a pack or upgrade. Everything already generated stays available; downloads and links keep working.",
      },
      {
        q: "How do I change or cancel my plan?",
        a: "In the app, open Settings and choose Plan. Changes apply immediately; cancelling keeps the paid plan until the end of the period you already paid for.",
      },
      {
        q: "Can I remove the badge without a subscription?",
        a: "Yes. The share screen offers a one-time removal for that deck. Starter removes it from every deck.",
      },
    ],
    related: ["slide-limits-by-plan", "download-powerpoint-or-pdf", "share-a-deck-link"],
    updated: "2026-09-16",
  },

  {
    slug: "how-long-does-a-deck-take",
    category: "redesign",
    title: "How long a deck takes, and what to do while you wait",
    metaDescription:
      "A rebuild or a new deck usually takes 3 to 5 minutes including the quality review. You can close the tab: PitchBoost emails you a link when the deck is ready.",
    answer:
      "A rebuild or a new deck usually takes 3 to 5 minutes, including a quality review and fact check that run after the slides are drafted. You do not have to wait on the page: close the tab and PitchBoost emails you a link to the finished deck, with a preview and a PowerPoint download. The deck also appears in your dashboard as soon as it is done.",
    sections: [
      {
        heading: "What happens during those minutes",
        paragraphs: [
          "First PitchBoost reads your file and captured brand and drafts every slide; the first draft appears on screen within a minute or two. Then a reviser tightens layouts and copy, a critique pass checks the deck against your original for anything invented or dropped, and images are generated where the design calls for them. Longer decks and decks with many charts take longer.",
        ],
      },
      {
        heading: "If it seems stuck",
        paragraphs: [
          "Refresh the page; the progress screen resumes from the current state. If ten minutes pass with no draft, the rebuild failed and no credits are charged. Try again, and if it fails twice email support@pitchboost.ai with the deal link so we can look at the exact file.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will I get an email even on the free plan?",
        a: "Yes. Every account gets the deck-ready email, in the language the app was set to when the deck was created.",
      },
      {
        q: "Can I start another deck while one is generating?",
        a: "On paid plans, yes. The free plan includes one deal, so finish the first deck before starting another.",
      },
    ],
    related: ["redesign-a-powerpoint", "download-powerpoint-or-pdf", "share-a-deck-link"],
    updated: "2026-09-16",
  },

  {
    slug: "brand-from-your-website",
    category: "redesign",
    title: "How PitchBoost gets your brand, and how to change it",
    metaDescription:
      "PitchBoost captures your logo, colors, fonts and tone from your website in about 15 seconds. How to check it, replace the logo, and add product images.",
    answer:
      "PitchBoost takes your brand from your website: enter the address and a 15-second scan captures your logo, brand colors, fonts and tone of voice. You see the result before anything generates and can replace the logo or add images. The redesign is built from that brand, not from a template, so the deck looks like your company rather than like a slide tool.",
    steps: [
      {
        title: "Enter your website",
        body: "On the website step, paste your homepage address. PitchBoost fetches the page, reads your services and value proposition, and pulls colors, fonts and the logo.",
      },
      {
        title: "Check the captured brand",
        body: "The next screen shows what was found. If the logo is wrong (a partner's badge, an icon instead of the wordmark), click \"Not your logo? Replace it\" and upload a PNG or SVG.",
      },
      {
        title: "Add images if you have them",
        body: "Drop in product shots, headshots or screenshots. They are the biggest upgrade to how a deck looks. Anything that does not fit the generated layout is kept in the deal's brand assets for use in the editor.",
      },
    ],
    sections: [
      {
        heading: "No website yet",
        paragraphs: [
          "Choose \"I don't have a website\" on the website step and describe your business instead. PitchBoost picks a palette and typography that suit the description, and you can upload a logo by hand.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I change the colors after the deck is generated?",
        a: "Yes, in the editor, per slide or for the whole deck. The next deck for the same company reuses the corrected brand.",
      },
      {
        q: "Does it copy text from my website into the deck?",
        a: "For a rebuild, no: the content comes from your uploaded slides. The website is used for brand and context. For a new deck built from a brief, your site's positioning informs the copy.",
      },
    ],
    related: ["redesign-a-powerpoint", "google-slides-and-keynote", "how-long-does-a-deck-take"],
    updated: "2026-09-16",
  },
];

export const HELP_CATEGORY_ORDER: HelpCategory[] = ["redesign", "output", "sharing", "assistants", "account"];

export function getHelpArticle(slug: string): HelpArticle | undefined {
  return HELP_ARTICLES.find((a) => a.slug === slug);
}

// ---- locale access (Spanish and Brazilian Portuguese live in generated siblings)
import { HELP_ARTICLES_ES } from "./help.es";
import { HELP_ARTICLES_PT } from "./help.pt";
import type { Locale } from "./redesign-i18n";

export function getHelpArticles(locale: Locale): HelpArticle[] {
  return locale === "es" ? HELP_ARTICLES_ES : locale === "pt" ? HELP_ARTICLES_PT : HELP_ARTICLES;
}
export function getHelpArticleFor(locale: Locale, slug: string): HelpArticle | undefined {
  return getHelpArticles(locale).find((a) => a.slug === slug);
}
