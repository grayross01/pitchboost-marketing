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
    a: "You say what the presentation is for and who will see it (a class, a board, a conference, a prospect) and add any notes, numbers or documents you have. PitchBoost writes and designs a complete, branded deck shaped for that purpose: a lesson ends on takeaways and questions, a report on the decision needed, a pitch on a clear next step. You can edit every slide afterward.",
  },
  {
    q: "Can I upload my existing PowerPoint?",
    a: "Yes. Upload a .pptx up to 50 MB and PitchBoost rebuilds every slide in your brand, keeping your content and numbers. PDF decks work the same way, and Google Slides and Keynote decks work too: export them to .pptx first. You get the result back as a shareable link, a PDF, and an editable PowerPoint.",
  },
  {
    q: "Can I use my own branding?",
    a: "Yes. Point PitchBoost at your website (or your school's or company's) and it picks up the logo, colors and fonts, or set them yourself. Every deck uses that identity automatically.",
  },
  {
    q: "What format are the decks?",
    a: "PitchBoost decks are interactive web presentations you can share via link, so you can see when they are opened. Sharing the link is free on every plan; downloading a PDF or an editable PowerPoint takes a paid plan or a one-time $9 for that deck.",
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
    a: "Yes. The Free plan includes one AI-generated deck a month with basic analytics. It's a great way to try PitchBoost before committing to a paid plan.",
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
