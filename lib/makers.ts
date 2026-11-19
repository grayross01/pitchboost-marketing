/**
 * Maker pages: free tools that start a deck from what someone already has in
 * their head or on their desk. Two kinds live here.
 *
 * - "generator": a business deck from a few lines (an investor pitch, a sales
 *   pitch, a client proposal). The box on the page makes a real deck with no
 *   account, through the same quick maker as /tools/free-ai-presentation-maker.
 * - "converter": material turned into slides (pasted text, a PDF). Text works
 *   in the box with no account; a file needs a free account, so that page's
 *   first button goes to the upload screen.
 *
 * One query family per page. Resist near-duplicates (a "startup deck maker"
 * beside the pitch deck generator): doorway pages get a whole family ignored.
 *
 * `kind` is put in front of what the visitor types before it is sent, so the
 * quick maker builds the right shape. It names the slides in order because the
 * "deck it builds" list on the page promises exactly those, and it says how
 * many (cover included) because the quick maker writes six to eight unless a
 * number is asked for. Keep the two in step, and try a changed `kind` against
 * the real maker before it ships. Every claim here must be true of the product
 * today.
 */
export interface MakerPage {
  slug: string;
  family: "generator" | "converter";
  navLabel: string;            // short, e.g. "AI pitch deck generator"
  hubDesc: string;             // one or two sentences for the tools hub card
  hubTag: string;              // the small line under the card title
  metaTitle: string;           // ends with " | PitchBoost", <= 65 characters
  metaDescription: string;     // 140-160 characters
  ogTitle: string;             // the link-preview card's headline, <= 60 characters
  eyebrow: string;             // the small label over the headline
  heroHeadline: string;        // contains the search phrase, sentence case
  heroSubhead: string;         // 1-3 sentences
  /** The box that makes the deck. */
  box: {
    label: string;             // the question over the box
    placeholder: string;       // a realistic example, <= 320 characters
    button: string;
    hint: string;              // one line under the box
    kind: string;              // sent in front of what is typed; "" sends the text alone
    forLabel: string;          // what the app is told it is making when the deck is kept
  };
  /** Only for a page whose real job needs a file: the first button goes to the upload screen. */
  upload?: { button: string; note: string; tryLabel: string };
  examples: string[];          // exactly 3; a click puts one in the box
  outlineLabel: string;
  outlineTitle: string;
  outlineBody: string;
  outline: { title: string; body: string }[];
  gets: { title: string; body: string }[]; // exactly 4
  faqs: { q: string; a: string }[];        // 6-7; plain text, they are also the page's FAQ data
  guides: { href: string; label: string }[]; // 2-4 pages on this site worth reading next
  ctaHeadline: string;
  updated: string;
}

export const MAKERS_UPDATED = "2026-11-19";

const FREE_ANSWER =
  "Yes. Type a few lines and a designed deck appears in about two minutes, at a link you can open anywhere. No account, no email, no card. Each connection gets two a day, and the deck carries a small PitchBoost credit.";
const DOWNLOAD_ANSWER =
  "Not from the free tool. Keep the deck by signing up, then download it as PowerPoint, PDF or Google Slides with a paid plan, or pay $9 once for that one deck.";

export const MAKERS: MakerPage[] = [
  {
    slug: "ai-pitch-deck-generator",
    family: "generator",
    navLabel: "AI pitch deck generator",
    hubDesc: "Describe the company, the numbers you have and what you are raising. Get an investor pitch deck in about two minutes, in the order investors read one. No account.",
    hubTag: "For founders raising money",
    metaTitle: "Free AI Pitch Deck Generator, No Sign-Up | PitchBoost",
    metaDescription:
      "Describe your startup in a few lines and get an investor pitch deck in about two minutes: problem, solution, market, traction, team, the ask. Free, no account.",
    ogTitle: "An investor pitch deck in about two minutes.",
    eyebrow: "Free tool, no sign-up",
    heroHeadline: "Free AI pitch deck generator: your startup in, an investor deck out",
    heroSubhead:
      "Describe the company, the numbers you have and what you are raising. It builds the deck investors expect, in the order they expect it, in about two minutes. The fundraising itself is still on you.",
    box: {
      label: "What does the company do, and what are you raising?",
      placeholder:
        "Ledgerly: bookkeeping software for dental practices. 140 paying clinics, $31k monthly revenue, growing 12% a month. Raising a $1.5M seed to hire two engineers and open the UK.",
      button: "Generate my pitch deck",
      hint: "Give it your real numbers: it will not make any up. Two free decks a day, no account.",
      kind: "An investor pitch deck for a startup raising money. 9 slides: a cover, then problem, solution, product, market, traction, business model, team, the ask.",
      forLabel: "an investor pitch deck",
    },
    examples: [
      "Brightloop: an app that turns field technicians' voice notes into job reports. 60 HVAC companies pay $400 a month, growing 9% a month. Raising a $2M seed for sales hires.",
      "Pre-revenue: a marketplace for refurbished lab equipment, for university labs. Three pilot universities signed. Raising a $500k pre-seed to build the listing tools.",
      "Series A for a meal-kit company for people with kidney disease: $2.4M annual revenue, 71% gross margin, 4,200 subscribers. Raising $8M to open a second kitchen.",
    ],
    outlineLabel: "The deck it builds",
    outlineTitle: "The eight slides investors look for, in the order they read them",
    outlineBody: "A cover, then these eight. The structure is the easy part to get right and the part most first decks get wrong. This one is fixed, so the meeting can be about the business.",
    outline: [
      { title: "Problem", body: "Who has it, how often, and what it costs them today. One slide, stated plainly." },
      { title: "Solution", body: "What you built and why it fixes that, in a sentence a stranger could repeat." },
      { title: "Product", body: "How it works in three steps or one screen. Not a feature list." },
      { title: "Market", body: "Who buys this and how many of them there are, from what you gave it." },
      { title: "Traction", body: "Revenue, users, growth, pilots: only the numbers you typed. It does not draw a hockey stick on your behalf." },
      { title: "Business model", body: "How money comes in: the price, who pays it, and how often." },
      { title: "Team", body: "Who is building it and why they are the ones to do it." },
      { title: "The ask", body: "How much you are raising and what it buys: the hires, the months, the milestones." },
    ],
    gets: [
      { title: "The order investors expect", body: "Problem to ask, one idea a slide. An investor who has to hunt for the ask assumes you have not decided on one." },
      { title: "Your numbers, not invented ones", body: "It uses the figures you type and adds none. A made-up market size is worse than an honest gap, and investors check." },
      { title: "A link you can send", body: "The deck opens on any laptop or phone and presents from the browser. The link works for seven days." },
      { title: "The full version when you want it", body: "A free account rebuilds it in your brand from your website, lets you edit any slide, and shows you when the link is opened." },
    ],
    faqs: [
      { q: "Is the pitch deck generator really free?", a: FREE_ANSWER },
      {
        q: "What should I type to get a good pitch deck?",
        a: "What the company does, who it is for, the numbers you have (revenue, users, growth, pilots), who is on the team and what you are raising. Four or five sentences is enough. The more real figures you give it, the more the deck can say.",
      },
      {
        q: "Will it make up my market size or traction?",
        a: "No. The free tool works only from what you type. With a free account, the full builder checks every figure against what you gave it and takes out any number it cannot trace.",
      },
      { q: "Can I download the pitch deck as PowerPoint or PDF?", a: DOWNLOAD_ANSWER },
      {
        q: "How is this different from asking ChatGPT or using Gamma?",
        a: "ChatGPT writes an outline, and Gamma will make a deck from a prompt too. PitchBoost builds the deck in the order investors read one and does not invent your numbers. With an account it is in your brand, and you can see when an investor opens the link. It also works inside ChatGPT, if you would rather stay there.",
      },
      {
        q: "I already have a pitch deck. Can it improve that one instead?",
        a: "Yes. Upload the PowerPoint and PitchBoost redesigns it, keeping every slide, word and number. The free redesign preview does two of your slides with no account.",
      },
    ],
    guides: [
      { href: "/blog/how-to-structure-a-pitch-deck", label: "How to structure a pitch deck" },
      { href: "/blog/how-to-create-investor-pitch-deck", label: "How to create an investor pitch deck" },
      { href: "/blog/best-ai-pitch-deck-generators", label: "AI pitch deck generators compared" },
      { href: "/redesign/investor-deck-redesign", label: "Already have a deck? Investor deck redesign" },
    ],
    ctaHeadline: "The deck takes two minutes. Spend the rest of the week on the numbers.",
    updated: "2026-11-19",
  },

  {
    slug: "ai-sales-pitch-generator",
    family: "generator",
    navLabel: "AI sales pitch generator",
    hubDesc: "Name the prospect and what you sell. Get a short sales pitch deck built around that one buyer's problem, in about two minutes. No account.",
    hubTag: "For Thursday's meeting",
    metaTitle: "Free AI Sales Pitch Generator, No Sign-Up | PitchBoost",
    metaDescription:
      "Name the prospect and what you sell and get a sales pitch deck built for that buyer in about two minutes: their problem, your fix, proof and a next step. Free.",
    ogTitle: "A sales pitch for this prospect, in two minutes.",
    eyebrow: "Free tool, no sign-up",
    heroHeadline: "Free AI sales pitch generator: a deck for this prospect, not for prospects in general",
    heroSubhead:
      "Say who you are meeting and what you sell. It builds a short pitch around their problem in about two minutes, so the deck stops being the reason the follow-up slips to Friday.",
    box: {
      label: "Who are you pitching, and what are you selling?",
      placeholder:
        "Pitching Northwind Freight (regional trucking, 80 trucks) on our route-planning software. Their dispatchers still plan by phone. We cut empty miles 12% for two similar fleets. The meeting is with the operations director.",
      button: "Generate my sales pitch",
      hint: "Name the buyer and their problem. Two free decks a day, no account.",
      kind: "A sales pitch deck for one named prospect. 7 slides: a cover that names the prospect, then their situation, the problem and what it costs them, our solution, how it works, proof, next step.",
      forLabel: "a sales pitch",
    },
    examples: [
      "Pitch our commercial cleaning service to Harbor Dental Group (6 clinics). They use three different cleaners today. We offer one contract, nightly service and a monthly audit.",
      "Selling payroll software to a 40-person architecture firm that runs payroll in spreadsheets. The decision maker is the office manager. Going live takes two weeks.",
      "Renewal pitch for a current client, Alder Hotels: usage is up 30%. Propose moving from the Team plan to Enterprise, with single sign-on and a dedicated manager.",
    ],
    outlineLabel: "The deck it builds",
    outlineTitle: "Six slides after the cover, and the first is about them",
    outlineBody: "A sales deck gets read between meetings, on a phone, by someone who did not ask for it. It earns the next slide by being about the reader.",
    outline: [
      { title: "Their situation", body: "Their name is on the cover, and the first slide is their world in a sentence. They should recognize themselves before they hear about you." },
      { title: "The problem", body: "What is going wrong and what it costs them, in their terms and their numbers." },
      { title: "Your solution", body: "What you do about it. One claim, not nine." },
      { title: "How it works", body: "Three steps from yes to working, so the change looks survivable." },
      { title: "Proof", body: "The results and customers you gave it. It will not invent a case study." },
      { title: "Next step", body: "One clear ask: a pilot, a date, a signature." },
    ],
    gets: [
      { title: "Written for one buyer", body: "The deck is about their company and their problem. That is the part that gets skipped when a deck takes an afternoon." },
      { title: "Short on purpose", body: "A cover and six slides. Enough to make the case, few enough to be read before the meeting instead of after." },
      { title: "No invented proof", body: "It uses the results you type and makes none up. One real number from a customer like them beats a paragraph of adjectives." },
      { title: "See when they open it", body: "With a free account the deck lives at a link in your brand, and you can see when the prospect opens it." },
    ],
    faqs: [
      { q: "Is the sales pitch generator really free?", a: FREE_ANSWER },
      {
        q: "What makes a sales pitch deck work?",
        a: "It is about the buyer. Their situation first, the problem in their numbers, one clear fix, proof from someone like them, and a single next step. Most decks lose the reader by opening with the seller's history.",
      },
      {
        q: "Can I make a different pitch for every prospect?",
        a: "Yes, that is the point of it. Each deck starts from the prospect you name. With an account you can give it the prospect's website and your own, and it builds in your brand around what they do.",
      },
      { q: "Can I download the pitch as PowerPoint or PDF?", a: DOWNLOAD_ANSWER },
      {
        q: "How is this different from a sales pitch written by ChatGPT?",
        a: "ChatGPT gives you the words. This gives you the deck: designed slides at a link, in an order that sells. With an account it carries your brand and tells you when it was opened. PitchBoost also works inside ChatGPT.",
      },
      {
        q: "Does it work for renewals and proposals too?",
        a: "Yes. Say it is a renewal and what you are offering. For a full proposal with scope, timeline and price, use the proposal generator: it lays those out in the order a client reads them.",
      },
    ],
    guides: [
      { href: "/blog/ai-sales-pitch-generator", label: "What separates a good AI sales pitch from a generic one" },
      { href: "/blog/how-to-personalize-sales-deck-for-each-prospect", label: "How to personalize a sales deck for each prospect" },
      { href: "/blog/sales-presentation-tips", label: "Sales presentation tips" },
      { href: "/redesign/sales-deck-refresh", label: "Already have a deck? Sales deck refresh" },
    ],
    ctaHeadline: "Name the prospect. Have the deck before the coffee is cold.",
    updated: "2026-11-19",
  },

  {
    slug: "ai-proposal-generator",
    family: "generator",
    navLabel: "AI proposal generator",
    hubDesc: "Say who the client is, what the work is and what it costs. Get the proposal as a designed deck in about two minutes: scope, timeline, price and next steps. No account.",
    hubTag: "For agencies and consultants",
    metaTitle: "Free AI Proposal Generator, No Sign-Up | PitchBoost",
    metaDescription:
      "Describe the client, the work and the price and get a proposal as a designed deck in about two minutes: what you understood, approach, scope, timeline. Free.",
    ogTitle: "The proposal, as a deck the client will open.",
    eyebrow: "Free tool, no sign-up",
    heroHeadline: "Free AI proposal generator: the proposal, as a deck the client will actually open",
    heroSubhead:
      "Say who the client is, what they asked for and what you will do. It lays out the proposal in the order clients read one. You bring the scope and the price: it will not guess either.",
    box: {
      label: "Who is the proposal for, and what are you proposing?",
      placeholder:
        "Proposal for Marlow & Finch, a 12-shop bakery chain: redesign their online ordering site. Three phases over 10 weeks: research, design, build. Fixed price $48,000. They want to launch before the holidays.",
      button: "Generate my proposal",
      hint: "Include the scope and the price you want shown. Two free decks a day, no account.",
      kind: "A client proposal as a slide deck. 9 slides: a cover, then what we understood, objectives, our approach, scope and deliverables, timeline, why us, investment, next steps. Show a price only if one is given below; with no price given, leave the investment slide out.",
      forLabel: "a client proposal",
    },
    examples: [
      "Proposal to Castell Property Group for a 6-month social media retainer: 12 posts a month and a monthly report, $3,500 a month, starting in January.",
      "Consulting proposal for a county health department: a review of their appointment system in 8 weeks, three workshops and a final report. $62,000 fixed fee.",
      "Proposal to renew and extend our IT support contract with Brookside School: same price, plus weekend cover and a yearly security review.",
    ],
    outlineLabel: "The deck it builds",
    outlineTitle: "Eight slides that answer what every client is really asking",
    outlineBody: "A cover, then these eight. Did you understand us, what do we get, when, and how much: a slide each answers those faster than twelve pages, and gets read by more of the people who sign.",
    outline: [
      { title: "What we understood", body: "Their situation and what they asked for, in their words. Proof you were listening." },
      { title: "Objectives", body: "What the work has to achieve, as outcomes they can check afterwards." },
      { title: "Our approach", body: "How you will go about it and why that way, in a few steps." },
      { title: "Scope and deliverables", body: "What they get, listed. What is not included is the argument you avoid in month three." },
      { title: "Timeline", body: "Phases and dates from the ones you gave it." },
      { title: "Why us", body: "The experience and results you typed, and nothing you did not." },
      { title: "Investment", body: "The price you gave, as you gave it. No price given, no price shown." },
      { title: "Next steps", body: "What happens when they say yes, and by when." },
    ],
    gets: [
      { title: "The order clients read", body: "Understanding first, price near the end. A proposal that opens with the fee gets judged on the fee." },
      { title: "Your scope and price, untouched", body: "It shows the deliverables, dates and price you give it and adds none of its own." },
      { title: "A link, not an attachment", body: "The proposal opens in a browser on any device. Nobody has to find the right version of a file." },
      { title: "Edit it before you send it", body: "With a free account you can change any slide, put it in your brand from your website, and see when the client opens it." },
    ],
    faqs: [
      { q: "Is the proposal generator really free?", a: FREE_ANSWER },
      {
        q: "What should I include to get a good proposal?",
        a: "The client, what they asked for, what you will do, the timeline and the price. If you have a result from similar work, add it. Four or five sentences is enough for a first version.",
      },
      {
        q: "Will it set my price or scope for me?",
        a: "No. It shows the price and deliverables you type and adds none. If you leave the price out, the deck has no price slide to argue with.",
      },
      {
        q: "Why a deck and not a document?",
        a: "Because a deck gets read. Clients skim a proposal for four things: did you understand us, what do we get, when, and how much. Slides answer those in a minute. If the client needs a file, you can download it as a PDF.",
      },
      { q: "Can I download the proposal as PowerPoint or PDF?", a: DOWNLOAD_ANSWER },
      {
        q: "Can it use my brand, or look like my last proposal?",
        a: "With a free account, yes. It picks up your logo, colors and fonts from your website, and it can give a new deck the look of one you already made.",
      },
    ],
    guides: [
      { href: "/blog/ai-proposal-generator", label: "What an AI proposal generator can and cannot do" },
      { href: "/blog/how-to-write-a-sales-proposal", label: "How to write a sales proposal" },
      { href: "/blog/how-to-build-a-sales-proposal", label: "How to build a sales proposal" },
      { href: "/redesign/proposal-deck-redesign", label: "Already have a proposal? Proposal deck redesign" },
    ],
    ctaHeadline: "They asked for a proposal by Friday. It can be Tuesday.",
    updated: "2026-11-19",
  },

  {
    slug: "text-to-presentation",
    family: "converter",
    navLabel: "Text to presentation",
    hubDesc: "Paste notes, an outline or a few paragraphs and get designed slides in about two minutes, one point a slide. No account.",
    hubTag: "For anyone with notes and a meeting",
    metaTitle: "Text to Presentation: Turn Notes into Slides with AI | PitchBoost",
    metaDescription:
      "Paste text, notes or an outline and get a designed presentation in about two minutes. Free, no account, any language. Long documents with a free account.",
    ogTitle: "Paste the notes. Get the slides.",
    eyebrow: "Free tool, no sign-up",
    heroHeadline: "Text to presentation: paste the notes, get the slides",
    heroSubhead:
      "Meeting notes, an outline, a chapter, the email that turned into a plan. Paste it in and it comes back as slides in a sensible order, one point a slide, in about two minutes.",
    box: {
      label: "Paste your text, notes or outline",
      placeholder:
        "Q3 retail review. Sales up 8% on last year, driven by the two new stores. Online orders flat. Returns up from 4% to 6% after the sizing change. Staff turnover down. Decision needed: extend weekend hours at the three busiest stores?",
      button: "Turn it into slides",
      hint: "Up to 1,000 characters here. Longer text and PDF files with a free account. Two free decks a day.",
      kind: "",
      forLabel: "a presentation from my notes",
    },
    examples: [
      "Lesson notes: photosynthesis. Light reactions happen in the thylakoids and make ATP and NADPH. The Calvin cycle uses them to fix carbon dioxide into sugar. What limits it: light, CO2, temperature. For 9th grade biology.",
      "Project update: the warehouse system went live on 3 March, two weeks late. Picking errors fell from 3.1% to 0.9%. Open issues: label printers at site B, training for the night shift. Next: site C in May.",
      "Outline for a talk: 1. Why small towns lose their young people. 2. What three towns did to keep them. 3. What it cost. 4. What we could try here.",
    ],
    outlineLabel: "How it works",
    outlineTitle: "From a block of text to slides you can stand next to",
    outlineBody: "It does not need tidy input. It needs to know what you know.",
    outline: [
      { title: "Paste what you have", body: "Notes, an outline, a transcript, a few paragraphs. Headings help and are not required." },
      { title: "It finds the shape", body: "A report leads with the result. A lesson ends on takeaways. A pitch ends on a next step. It decides which from what you pasted." },
      { title: "One point a slide", body: "Paragraphs become slides with a title that says something, not a wall of bullets with a heading on top." },
      { title: "Keep it, or take it further", body: "The link works for seven days. A free account keeps the deck, takes much longer text and reads PDF files." },
    ],
    gets: [
      { title: "Your content, in order", body: "It reorganizes and trims what you pasted. It does not pad your notes with facts you never gave it." },
      { title: "Numbers left alone", body: "Figures in your text stay as you wrote them. Rounding 3.1% to 3% is your decision, not the tool's." },
      { title: "Any language", body: "Paste in Spanish, Arabic or Vietnamese and the slides come back in it, right-to-left scripts included." },
      { title: "A paragraph or a chapter", body: "Up to 1,000 characters here without an account. Up to 50,000, about 8,000 words, with a free one." },
    ],
    faqs: [
      {
        q: "How do I turn text into a presentation with AI?",
        a: "Paste the text into the box and press the button. PitchBoost reads it, works out whether it is a lesson, a report, a talk or a pitch, and builds slides in that order, one point a slide. It takes about two minutes.",
      },
      { q: "Is it really free?", a: FREE_ANSWER },
      {
        q: "How much text can I paste?",
        a: "1,000 characters in the free tool, about three paragraphs. A free account takes up to 50,000 characters, about 8,000 words, and can read a PDF as well.",
      },
      {
        q: "Can I convert a Word document?",
        a: "Copy the text out of Word and paste it. For a long document, save it as a PDF and upload that with a free account: both end up as the same kind of deck.",
      },
      {
        q: "Will it add things I did not write?",
        a: "The free tool works from your text. With an account, the full builder can look up and cite facts for a lesson or a report when the deck needs them, and it flags anything it could not trace.",
      },
      { q: "Can I download the slides as PowerPoint?", a: DOWNLOAD_ANSWER },
      {
        q: "How is this different from pasting my notes into ChatGPT?",
        a: "ChatGPT returns an outline, or a plain file you still have to design. This returns the designed deck at a link you can present from. PitchBoost also works inside ChatGPT, if you would rather stay there.",
      },
    ],
    guides: [
      { href: "/blog/text-to-ppt", label: "Text to PPT: what the tools actually produce" },
      { href: "/blog/word-document-to-powerpoint", label: "Word document to PowerPoint" },
      { href: "/tools/pdf-to-presentation", label: "Have a PDF instead? PDF to presentation" },
      { href: "/ai-presentation-maker", label: "Start from a topic: the AI presentation maker" },
    ],
    ctaHeadline: "The thinking is done. The slides are two minutes away.",
    updated: "2026-11-19",
  },

  {
    slug: "pdf-to-presentation",
    family: "converter",
    navLabel: "PDF to presentation",
    hubDesc: "Upload a PDF report, brief or paper and get slides that keep its points, numbers and pictures. Free account, no card.",
    hubTag: "For anyone handed a PDF",
    metaTitle: "PDF to Presentation: Turn a PDF into Slides with AI | PitchBoost",
    metaDescription:
      "Upload a PDF report, brief or paper and get a designed presentation that keeps its points, numbers and pictures. One free deck a month, no card needed.",
    ogTitle: "The PDF becomes slides. The numbers survive.",
    eyebrow: "Free account, no card",
    heroHeadline: "PDF to presentation: the report becomes slides, and the numbers survive the trip",
    heroSubhead:
      "Upload the PDF. PitchBoost reads it page by page, keeps what it says and the pictures in it, and builds slides you can present, edit and send. Not a picture of each page with text boxes floating on top.",
    box: {
      label: "Paste a section of your PDF",
      placeholder:
        "Paste a page or two from the PDF: the summary, the findings, the recommendations. For example: Customer survey 2026. 1,240 responses. Satisfaction rose from 71% to 78%. Delivery times are the top complaint (34% of comments). Recommendation: a second depot in the north.",
      button: "Turn it into slides",
      hint: "Up to 1,000 characters here, to see what it does. The whole PDF: free account. Two free decks a day.",
      kind: "",
      forLabel: "a presentation from a PDF",
    },
    upload: {
      button: "Upload your PDF",
      note: "Free account, no card. PDFs up to 75 pages.",
      tryLabel: "Not ready to sign up? Paste a section and see what it does",
    },
    examples: [
      "Annual report summary: revenue £12.4m, up 6%. Membership 18,300, up 900. Three new sites opened. Energy costs up 22%. Priorities for next year: retention, the Leeds site, a new booking system.",
      "Research paper abstract and findings: a 12-week walking programme for adults over 65 (n=214) improved balance scores by 18% and cut reported falls from 31 to 19. Limitations: self-reported falls, one region.",
      "Campaign brief: launch the refill service to existing customers in March. Audience: households already buying monthly. Message: same products, 30% less plastic. Budget £40k across email, in-store and paid social.",
    ],
    outlineLabel: "How it works",
    outlineTitle: "Four steps from a PDF to a deck you can present",
    outlineBody: "Reports, briefs, white papers, research papers, and slides somebody exported to PDF and then lost the original of.",
    outline: [
      { title: "Upload the PDF", body: "Up to 75 pages. A report, a brief, a paper, or slides that only exist as a PDF now." },
      { title: "It reads the pages", body: "Words, tables and the values on charts are read page by page, and the pictures in the file are lifted out so the deck can use them." },
      { title: "Every page, or the short version", body: "Keep one slide for each page, or have it condensed to the 15 or 20 a meeting has time for. A 40-page report is rarely a 40-slide meeting." },
      { title: "Edit, present, send", body: "Type on any slide or ask for a change in a sentence. Share the link, present from the browser, or download it." },
    ],
    gets: [
      { title: "Real slides, not page pictures", body: "A converter gives you a picture of each page with loose text boxes on top. This rebuilds the content as slides: a title, a point, the detail that supports it." },
      { title: "Figures checked against the PDF", body: "Every number on a slide is checked against the document. Anything that cannot be traced to it is taken out, or flagged for you to check." },
      { title: "The pictures come too", body: "Photos and other images in the PDF are lifted out, up to ten of them, and offered for the slides they belong on. A chart comes across as its values, a table row by row." },
      { title: "Editable all the way down", body: "Change any slide in the browser. The editable PowerPoint download has real text boxes and carries its fonts inside the file." },
    ],
    faqs: [
      {
        q: "Can AI turn a PDF into a presentation?",
        a: "Yes. Upload the PDF and PitchBoost reads its pages, pulls out the points, numbers and pictures, and rebuilds them as slides. A typical report takes a few minutes.",
      },
      {
        q: "Is it free?",
        a: "A free account makes one deck a month, with up to 10 slides, shared as a link. No card needed. To download it as PowerPoint, PDF or Google Slides, pay $9 once for that deck (up to 25 slides) or choose Starter at $7 a month.",
      },
      {
        q: "How long can the PDF be?",
        a: "Up to 75 pages, and the first 60 are read. For a long report, choose the condensed version when it asks: about 15 to 20 slides.",
      },
      {
        q: "Will the slides be editable in PowerPoint?",
        a: "Yes. The editable PowerPoint has real text boxes and carries its fonts inside the file, so it opens looking the same on another computer. There is also an exact-look version, where each slide is a picture, for when nothing must move.",
      },
      {
        q: "Does it change my numbers or my wording?",
        a: "It keeps what the PDF says. Figures are checked against the document, and the wording stays yours unless you ask for it to be tightened.",
      },
      {
        q: "What about a Word document, or plain text?",
        a: "Paste the text into the text to presentation tool, or save the Word document as a PDF and upload that. Both end up as the same kind of deck.",
      },
      {
        q: "How is this different from Adobe or an online PDF to PPT converter?",
        a: "A converter copies each page onto a slide the size of a page. That is the right tool when you need the page itself. PitchBoost is for when you need to present what the PDF says: it rebuilds the content as slides with a point each.",
      },
    ],
    guides: [
      { href: "/blog/pdf-to-editable-powerpoint", label: "PDF to editable PowerPoint: what works and what does not" },
      { href: "/tools/text-to-presentation", label: "Just text? Text to presentation" },
      { href: "/presentations/report-presentation", label: "Report presentations" },
      { href: "/presentations/research-presentation", label: "Research presentations" },
    ],
    ctaHeadline: "Someone turned it into a PDF. Turn it back into something you can present.",
    updated: "2026-11-19",
  },
];

export function getMaker(slug: string): MakerPage | undefined {
  return MAKERS.find((m) => m.slug === slug);
}
