/**
 * Redesign-intent landing pages.
 *
 * Why this cluster exists: every fully-attributed AI referral we have came
 * through /features/upload-and-redesign — assistants recommend PitchBoost
 * for FIXING an existing deck, not building one from scratch. These pages
 * cover the distinct query families inside that intent so we rank (and get
 * cited) for the ways people actually phrase it.
 *
 * Each page targets ONE query family with genuinely different copy. Resist
 * adding near-duplicates: doorway pages get all of these ignored.
 *
 * Every CTA carries ?intent=rebuild — the app reads it and drops the signup
 * straight onto the file-upload screen instead of the generic flow.
 */

export interface RedesignPage {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  /** The named pain this query family carries. */
  painPoints: { title: string; body: string }[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
  ctaHeadline: string;
}

/** The rebuild flow is the same regardless of intent; the framing differs.
 *  Shared here so the steps never drift from what the product actually does. */
export const REDESIGN_STEPS: { step: string; title: string; body: string }[] = [
  {
    step: "1",
    title: "Upload the deck you have",
    body: "Any .pptx up to 50 MB. PitchBoost reads every slide — titles, body copy, the lot — and keeps your narrative intact. Nothing gets summarized away without asking you first.",
  },
  {
    step: "2",
    title: "Point it at your website",
    body: "One scan picks up your logo, brand colors, and tone of voice. That's what the redesign is built from — your brand, not a template gallery.",
  },
  {
    step: "3",
    title: "Get the redesigned deck as a shareable link",
    body: "A few minutes later you have a professionally laid-out deck, published as a trackable link. Edit any slide, export to PDF or PowerPoint, and see who opens it.",
  },
];

export const REDESIGNS: RedesignPage[] = [
  {
    slug: "powerpoint-redesign",
    navLabel: "PowerPoint redesign",
    metaTitle: "PowerPoint Redesign — AI That Redesigns Your Deck | PitchBoost",
    metaDescription:
      "Upload your PowerPoint and get it back professionally redesigned in your brand — same content, modern layout, in a few minutes. Free to try, no design skills needed.",
    heroHeadline: "Your PowerPoint, redesigned by AI in minutes",
    heroSubhead:
      "Keep the content. Fix everything else. PitchBoost reads your .pptx, learns your brand from your website, and rebuilds every slide with professional layout, type, and color — while you watch.",
    painPoints: [
      {
        title: "The content is right, the deck looks wrong",
        body: "You've iterated the story for months. But bullet walls, clip-art icons, and 2014-era gradients undermine every word of it. Redesigning by hand means starting over in a tool you don't have time to learn.",
      },
      {
        title: "Agencies charge thousands and take weeks",
        body: "A presentation design agency quotes $2,000-8,000 and a two-week turnaround for what is, structurally, your same deck with better bones. That math only works for the deck of the year, not the deck of the week.",
      },
      {
        title: "Templates make it worse",
        body: "Pasting your slides into a template mangles the layouts and still looks like everyone else's template. Your brand disappears into someone else's color scheme.",
      },
    ],
    outcomes: [
      "Same story, professional design — nothing rewritten without your say",
      "Your real brand: logo, colors, and voice lifted from your website",
      "A shareable, trackable link plus PDF and PowerPoint export",
      "Minutes and a few dollars, not weeks and four figures",
    ],
    faqs: [
      {
        q: "Will the redesign change my content?",
        a: "By default PitchBoost preserves the narrative and key content of every slide and redesigns the layout, typography, and visuals around it. If your deck is very long, it asks whether you want it condensed before doing anything.",
      },
      {
        q: "What file formats can I upload?",
        a: "PowerPoint (.pptx) up to 50 MB. Keynote and Google Slides users can export to .pptx first — both do it losslessly in one step.",
      },
      {
        q: "How does it know my brand?",
        a: "You point it at your website. It picks up your logo, brand colors, and tone of voice from your own pages, and you can review and replace the logo before anything generates.",
      },
      {
        q: "How much does a PowerPoint redesign cost?",
        a: "The free plan includes one AI deck generation a month, and a redesign counts as it. Beyond that, credit packs start at $5 and Pro is $29/month — against agency quotes that start around $2,000 per deck.",
      },
    ],
    ctaHeadline: "Upload the deck. Keep the story. Lose the 2014 gradients.",
  },

  {
    slug: "pitch-deck-makeover",
    navLabel: "Pitch deck makeover",
    metaTitle: "Pitch Deck Makeover — AI Redesign for Founders | PitchBoost",
    metaDescription:
      "Give your pitch deck a professional makeover with AI. Upload the deck, keep your story, and get investor-ready design in your brand — in minutes, free to try.",
    heroHeadline: "A pitch deck makeover that keeps your story and fixes your design",
    heroSubhead:
      "Investors decide fast, and a homemade-looking deck reads as a homemade-looking company. Upload what you have; PitchBoost rebuilds it into something you'd be proud to have forwarded.",
    painPoints: [
      {
        title: "Your deck gets forwarded without you in the room",
        body: "The partner meeting happens after the deck circulates on its own. If the design says side-project, no one hears the traction slide.",
      },
      {
        title: "You know the story cold — that's the problem",
        body: "Founders stare at their own slides for so long they stop seeing them. The tenth revision has the same crowded layouts as the first, just with more words.",
      },
      {
        title: "Design help arrives at the worst time",
        body: "The weeks before a raise are exactly when you can't spare evenings in Figma or budget for an agency's timeline. The makeover has to be fast or it won't happen.",
      },
    ],
    outcomes: [
      "Investor-ready layout and typography without touching your narrative",
      "Consistent branding on every slide, pulled from your own site",
      "A tracked link — see which investors opened it and what they read",
      "Turnaround in minutes, so it's ready for tomorrow's intro",
    ],
    faqs: [
      {
        q: "Will it rewrite my numbers or claims?",
        a: "No. The redesign preserves your content — traction, financials, the ask — and rebuilds the presentation of it. AI never invents metrics, and anything it flags as weak is yours to change or keep.",
      },
      {
        q: "Can investors tell it was AI-designed?",
        a: "They can tell it was professionally designed. The layouts follow the same principles a human designer applies: hierarchy, whitespace, one idea per slide, and your brand throughout.",
      },
      {
        q: "My deck is 30 slides. Is that a problem?",
        a: "PitchBoost will ask whether you want all 30 rebuilt as-is or condensed toward the tighter length investors actually finish. Your call either way.",
      },
      {
        q: "What does it cost during a raise?",
        a: "One free deck generation a month on the free plan, so the makeover itself costs nothing to try. If you're iterating between investor meetings, Pro at $29/month covers rounds of revisions.",
      },
    ],
    ctaHeadline: "The story's yours. Make the design worthy of it.",
  },

  {
    slug: "make-powerpoint-look-professional",
    navLabel: "Make a PowerPoint look professional",
    metaTitle: "How to Make Your PowerPoint Look Professional (Fast) | PitchBoost",
    metaDescription:
      "The fastest way to make a PowerPoint look professional: upload it and let AI rebuild the design in your brand. Same slides, professional layout, minutes not days.",
    heroHeadline: "Make your PowerPoint look professional without becoming a designer",
    heroSubhead:
      "There are two ways: spend a weekend learning design principles, or upload the deck and let PitchBoost apply them for you — alignment, hierarchy, spacing, brand color, all of it.",
    painPoints: [
      {
        title: "You can see it's off, but not why",
        body: "Misaligned boxes, six fonts, colors that almost match. Naming the problems is a design skill in itself; fixing them slide by slide takes hours you don't have.",
      },
      {
        title: "The advice is all 'less text, more images'",
        body: "Every guide says the same three things and leaves the actual work to you. Knowing the rules and applying them across forty slides are very different jobs.",
      },
      {
        title: "Consistency is the hard part",
        body: "One good-looking slide is easy. Making slide 23 obey the same system as slide 2 is what separates professional decks from decorated ones — and it's exactly what machines are better at.",
      },
    ],
    outcomes: [
      "Professional hierarchy, spacing, and alignment applied to every slide",
      "One consistent type and color system, from your actual brand",
      "Crowded slides restructured — the ideas stay, the clutter goes",
      "Done in minutes, with an editor for anything you want to tweak",
    ],
    faqs: [
      {
        q: "What actually makes a PowerPoint look professional?",
        a: "Consistency and restraint: one type scale, one color system, aligned elements, generous whitespace, and one idea per slide. PitchBoost applies all of these automatically when it rebuilds your deck.",
      },
      {
        q: "Do I need to install anything?",
        a: "No. It runs in the browser: upload the .pptx, point it at your website for branding, and download the result as PowerPoint or PDF, or share it as a link.",
      },
      {
        q: "Can I still edit slides afterward?",
        a: "Yes. Every deck opens in an editor where you can change copy, swap images, or ask the AI for specific revisions before you share or export it.",
      },
      {
        q: "Is it really free to try?",
        a: "The free plan includes one AI deck generation a month with no credit card. Enough to redesign your deck and judge the result yourself.",
      },
    ],
    ctaHeadline: "Skip the design course. Upload the deck.",
  },

  {
    slug: "rebrand-presentation",
    navLabel: "Rebrand a presentation",
    metaTitle: "Rebrand Your Presentations — Apply New Branding to Old Decks | PitchBoost",
    metaDescription:
      "New brand, old decks? Upload each presentation and PitchBoost re-applies your new logo, colors, and voice automatically. Rebrand a whole library in an afternoon.",
    heroHeadline: "Rebranded the company. Now rebrand every deck it ever made.",
    heroSubhead:
      "A rebrand isn't finished while the sales team is still presenting the old logo. Upload each deck, point PitchBoost at the new site, and get everything back on-brand — one deck or the whole library.",
    painPoints: [
      {
        title: "The brand launched; the decks didn't",
        body: "The website is new, the sales decks are last-era. Every customer-facing presentation is now an inconsistency your new brand guide explicitly forbids.",
      },
      {
        title: "Manual reskinning is death by template",
        body: "Swapping the master template breaks half the layouts, and someone still has to fix every slide by hand. Multiply by every deck in the drive.",
      },
      {
        title: "It's nobody's job",
        body: "Marketing owns the brand, sales owns the decks, and rebranding forty presentations lands on whoever complains least. It stays 80% done forever.",
      },
    ],
    outcomes: [
      "New logo, colors, and voice applied from your new website automatically",
      "Content preserved — the pitch survives, the old brand doesn't",
      "Bulk mode: convert a whole folder of .pptx files in one run",
      "Every rebranded deck published as a trackable link, plus PPTX export",
    ],
    faqs: [
      {
        q: "We have dozens of decks. Do I upload them one at a time?",
        a: "No — bulk rebuild accepts up to 12 PowerPoints per run and processes them sequentially into your new brand. Point it at a folder and come back to a rebranded library.",
      },
      {
        q: "How does it know the new brand, not the old one?",
        a: "It scans the website you give it. If your new brand is live on your site, that's what every rebuilt deck inherits. You can review the captured logo and colors before anything generates.",
      },
      {
        q: "Will slide content change during the rebrand?",
        a: "The default preserves each slide's narrative and content and redesigns the visual layer. It's a rebrand, not a rewrite.",
      },
      {
        q: "What does rebranding a library cost?",
        a: "Each rebuilt deck is one generation. The free plan covers three; for a real library, plans from $29/month include a monthly AI budget that covers roughly a deck-a-day pace.",
      },
    ],
    ctaHeadline: "Finish the rebrand — decks included.",
  },

  {
    slug: "investor-deck-redesign",
    navLabel: "Investor deck redesign",
    metaTitle: "Investor Deck Redesign — Fundraise-Ready in Minutes | PitchBoost",
    metaDescription:
      "Redesign your investor deck with AI before the next meeting. Upload the deck, keep your traction story, get back professional fundraise-ready design in your brand.",
    heroHeadline: "Redesign the investor deck before the next partner meeting",
    heroSubhead:
      "Between intro and partner meeting there's usually a weekend. That's enough. Upload the current deck and get back one that looks like the company you're describing.",
    painPoints: [
      {
        title: "Diligence starts at slide one",
        body: "Investors pattern-match on polish long before they read the metrics. A cluttered deck plants a question — if this is the pitch, what does the product look like? — that the rest of the meeting has to answer.",
      },
      {
        title: "Your deck evolved; its design didn't",
        body: "Six months of edits by three founders leaves a deck with four fonts and slides that each tell their own visual story. The content matured. The container decayed.",
      },
      {
        title: "The raise timeline doesn't fit design timelines",
        body: "When the meeting is Thursday, a two-week agency engagement is a no. The redesign has to happen tonight or it doesn't happen.",
      },
    ],
    outcomes: [
      "Fundraise-ready design with your traction story untouched",
      "Consistent system across every slide — team, market, metrics, ask",
      "A tracked link that shows which slides investors actually read",
      "Ready tonight, not in two weeks",
    ],
    faqs: [
      {
        q: "Does it understand investor deck structure?",
        a: "Yes — problem, solution, market, traction, team, ask. It preserves your sequence by default, and if your deck runs long it offers to condense toward the length investors finish.",
      },
      {
        q: "Can I see which investors opened the deck?",
        a: "Every deck publishes as a trackable link: opens, time per slide, and when. Useful for timing the follow-up after a partner forward.",
      },
      {
        q: "Is my deck confidential?",
        a: "Your deck is private to your account until you share the link, and links can be revoked or password-protected. We don't train models on your content.",
      },
      {
        q: "What if I want small changes after the redesign?",
        a: "The editor handles it: change copy inline or tell the AI what to adjust slide by slide. You approve everything before it goes out.",
      },
    ],
    ctaHeadline: "Thursday's meeting deserves better than Tuesday's deck.",
  },

  {
    slug: "sales-deck-refresh",
    navLabel: "Sales deck refresh",
    metaTitle: "Sales Deck Refresh — Modernize Your Sales Deck with AI | PitchBoost",
    metaDescription:
      "Your sales deck is three years old and it shows. Upload it and get a modern, on-brand redesign in minutes — content intact, plus tracking on every share.",
    heroHeadline: "The sales deck refresh that doesn't wait for marketing",
    heroSubhead:
      "Every team has the deck: closed real deals, updated by nobody, visibly aging. Upload it and get back a modern version in your current brand — same pitch, this decade's design.",
    painPoints: [
      {
        title: "The deck works, so nobody touches it",
        body: "It closed deals in 2023, which is exactly why it still circulates in 2026 with 2023's screenshots and design. Success made it unkillable; time made it embarrassing.",
      },
      {
        title: "Reps are quietly rebuilding it themselves",
        body: "When the official deck ages, every rep forks their own version. Now there are nine decks, none on brand, and the best pitch lives on someone's desktop.",
      },
      {
        title: "A refresh is always someone else's quarter",
        body: "Marketing agrees it needs doing and roadmaps it for later. Sales needs it for the call on Friday.",
      },
    ],
    outcomes: [
      "The proven pitch, redesigned into your current brand",
      "One canonical deck again — shareable as a tracked link reps can't fork",
      "Screenshots and images swappable in the editor after the rebuild",
      "Minutes per deck, so the whole sales library can follow",
    ],
    faqs: [
      {
        q: "Can we refresh the whole sales library, not just one deck?",
        a: "Yes — bulk rebuild takes up to 12 PowerPoints per run. Teams typically refresh the core deck first, review it, then run the rest of the library through.",
      },
      {
        q: "How do tracked links help a sales team?",
        a: "Instead of attaching a file that disappears into an inbox, reps share a link. You see opens, time per slide, and forwards — signal for who's real and when to follow up.",
      },
      {
        q: "Our product screenshots are outdated too. Does it fix those?",
        a: "It preserves your images by default and flags where they sit. Swapping in current screenshots takes a minute each in the editor after the redesign.",
      },
      {
        q: "What's the cost against a design refresh project?",
        a: "A generation per deck against the free plan's three, then plans from $29/month. Internal design projects for the same work are usually quoted in weeks and thousands.",
      },
    ],
    ctaHeadline: "Friday's call shouldn't run on 2023's deck.",
  },

  {
    slug: "presentation-redesign-service",
    navLabel: "Presentation redesign service",
    metaTitle: "Presentation Redesign Service — AI Alternative to Agencies | PitchBoost",
    metaDescription:
      "Comparing presentation redesign services? See how AI redesign compares to agencies on speed, cost, and control: minutes and dollars versus weeks and thousands.",
    heroHeadline: "The presentation redesign service that's software, not a studio",
    heroSubhead:
      "Agencies redesign decks beautifully — in two weeks, for four figures, with three feedback rounds. PitchBoost does the same job in minutes for the price of lunch, and you keep the pen.",
    painPoints: [
      {
        title: "Agency timelines don't match deck deadlines",
        body: "Discovery call, creative brief, first concepts in a week. Meanwhile the meeting that needed the deck already happened. Presentation deadlines are measured in days; agency processes aren't.",
      },
      {
        title: "The quote scales with slide count",
        body: "Per-slide pricing means the 40-slide deck you actually use costs $3,000-8,000 to redesign. And the next revision opens a new invoice.",
      },
      {
        title: "You lose the pen",
        body: "Once an agency owns the source file, every tweak routes through their queue. A price change on slide 12 shouldn't take an email thread and three business days.",
      },
    ],
    outcomes: [
      "Minutes of turnaround instead of a two-week engagement",
      "Flat, tiny cost per deck — revisions included in the editor",
      "You keep full editing control, plus PPTX export of the result",
      "Consistent brand system applied from your own website",
    ],
    faqs: [
      {
        q: "How does AI redesign compare to a design agency?",
        a: "Agencies bring human art direction and are worth it for the deck of the year. For the other fifty decks, AI redesign applies the same structural principles — hierarchy, spacing, brand consistency — in minutes, and you keep editing control.",
      },
      {
        q: "What does it cost versus an agency?",
        a: "Agencies typically quote $2,000-8,000 per deck with per-revision fees. PitchBoost's free plan covers three generations; paid plans start at $29/month with revisions handled in the built-in editor.",
      },
      {
        q: "Can I get the source file back?",
        a: "Yes — export to editable PowerPoint or PDF anytime, and the deck also lives as a shareable tracked link.",
      },
      {
        q: "What if the AI's design choices need adjusting?",
        a: "You review the captured brand (logo, colors) before generating, and afterward the editor lets you change anything — yourself, instantly, without a change-request queue.",
      },
    ],
    ctaHeadline: "Keep the agency for the deck of the year. Use this for the other fifty.",
  },
  {
    slug: "fix-ugly-powerpoint",
    navLabel: "Fix an ugly PowerPoint",
    metaTitle: "Fix an Ugly PowerPoint: AI Cleanup for Messy Slides | PitchBoost",
    metaDescription:
      "Upload the deck you are embarrassed by and get it back clean: consistent type, aligned layouts, your brand colors, the same content. Free to try, a few minutes.",
    heroHeadline: "Ugly slides in, clean slides out. Same words.",
    heroSubhead:
      "Mismatched fonts, six colors, clip art, a wall of bullets on slide 4. PitchBoost reads your .pptx, keeps every point you made, and rebuilds the deck with one type system, one palette (yours), and layouts that breathe.",
    painPoints: [
      {
        title: "It grew over three years and four owners",
        body: "Nobody designed this deck. It accreted. Each contributor brought a font, a shade of blue and a way of doing bullets, and now the whole thing reads as sloppy even though the thinking is sharp.",
      },
      {
        title: "Fixing it by hand means touching every slide",
        body: "Master slides help until the first person overrides them. Cleaning up forty slides one text box at a time is an evening you keep postponing, so the deck ships ugly again.",
      },
      {
        title: "A template would erase what makes it yours",
        body: "Pasting into a template throws away your brand and still leaves the layout decisions to you. You need the content kept and the design decided, not the other way around.",
      },
    ],
    outcomes: [
      "One type system and one palette, lifted from your website",
      "Every slide realigned and respaced; text never rewritten without your say",
      "Your numbers preserved exactly, including chart data",
      "Editable PowerPoint back in minutes, plus PDF and a shareable link",
    ],
    faqs: [
      {
        q: "Will it shorten or rewrite my slides?",
        a: "No. The default rebuild preserves the narrative and key content of each slide and changes layout, typography and visuals. If your deck is very long it will ask whether you want a condensed version, and that is a choice you make, not a default.",
      },
      {
        q: "My deck has charts. Do the numbers survive?",
        a: "Yes. PitchBoost reads chart series, categories and values from the .pptx and carries them into the rebuilt slides. Figures that were in your deck are treated as your facts; anything the AI cannot trace to your deck or your website is flagged or removed before you see it.",
      },
      {
        q: "What if I only want a few slides fixed?",
        a: "Rebuild the deck once, then use slide edits to tweak individual slides. Plain requests like changing a footer or a company name across the deck are applied instantly and do not use a credit.",
      },
      {
        q: "How much does it cost?",
        a: "The free plan includes one AI deck generation a month, so the cleanup itself costs nothing to try. Credit packs start at $5 and Pro is $29 a month if you have a whole library to fix.",
      },
    ],
    ctaHeadline: "Upload the deck you hide. Get back the one you would show.",
  },
  {
    slug: "google-slides-and-keynote-redesign",
    navLabel: "Google Slides and Keynote",
    metaTitle: "Redesign Google Slides or Keynote Decks with AI | PitchBoost",
    metaDescription:
      "Export your Google Slides or Keynote deck to .pptx, upload it, and get a professionally redesigned version in your brand in minutes. Free to try.",
    heroHeadline: "Not just PowerPoint: Google Slides and Keynote, redesigned",
    heroSubhead:
      "Both tools export to .pptx in one click. Upload that file and PitchBoost keeps your story, learns your brand from your website, and rebuilds every slide, then hands you back an editable PowerPoint, a PDF, or a link.",
    painPoints: [
      {
        title: "Your team lives in Slides, your client lives in PowerPoint",
        body: "The deck has to travel. Every export loses a little formatting and the version the client sees is never quite the one you approved.",
      },
      {
        title: "Keynote themes look great until they meet a Windows laptop",
        body: "Fonts substitute, spacing shifts, and the polish you paid for disappears in the conference room. A rebuild that targets PowerPoint from the start avoids the problem.",
      },
      {
        title: "Redesigning inside the tool is still redesigning by hand",
        body: "Slides and Keynote have good templates and the same limitation: they do not know your content or your brand, so every layout decision is still yours to make, slide by slide.",
      },
    ],
    outcomes: [
      "Works from the .pptx export both tools produce in one step",
      "Your brand, not a theme: logo, colors and voice from your website",
      "Content preserved slide by slide, numbers and charts included",
      "Editable PowerPoint, PDF and a trackable link in minutes",
    ],
    faqs: [
      {
        q: "How do I export from Google Slides?",
        a: "File, Download, Microsoft PowerPoint (.pptx). Upload that file to PitchBoost. Speaker notes and images travel with it.",
      },
      {
        q: "How do I export from Keynote?",
        a: "File, Export To, PowerPoint. Keynote produces a .pptx that PitchBoost reads directly, including the text on every slide and the images you placed.",
      },
      {
        q: "Can I get the result back in Google Slides or Keynote?",
        a: "You get an editable PowerPoint file. Both Google Slides and Keynote open .pptx files and convert them, so you can keep working in the tool you prefer.",
      },
      {
        q: "Does it cost anything to try?",
        a: "The free plan includes one AI deck generation a month, and a redesign counts as it. Credit packs start at $5 and Pro is $29 a month.",
      },
    ],
    ctaHeadline: "Export once. Upload once. Present anywhere.",
  },
  {
    slug: "training-deck-redesign",
    navLabel: "Training and course decks",
    metaTitle: "Redesign a Training Deck or Course Slides with AI | PitchBoost",
    metaDescription:
      "Upload a training deck, workshop or course module and get it back consistent, readable and on brand, with every lesson and number intact. Free to try.",
    heroHeadline: "Training decks that look as good as the teaching",
    heroSubhead:
      "A twelve-week programme, an onboarding workshop, a certification module: PitchBoost keeps the sequence, the exercises and the numbers, and rebuilds the slides so people read them instead of squinting.",
    painPoints: [
      {
        title: "Content-heavy by nature, dense by accident",
        body: "Training slides carry more words than a sales pitch has to. Without a layout system that plans for it, they become paragraphs on a slide, and the room stops reading.",
      },
      {
        title: "Modules built months apart never match",
        body: "Week 1 was made in a hurry, week 7 by someone else. Learners notice the seams before they notice the material.",
      },
      {
        title: "You cannot afford to lose a single number",
        body: "Session lengths, cohort sizes, pass marks, prices. A redesign that invents or drops figures is worse than no redesign. Facts have to stay exactly as written.",
      },
    ],
    outcomes: [
      "The same sequence of lessons, exercises and takeaways",
      "Durations, group sizes and prices kept exactly as your deck states them",
      "One consistent design across every module you upload",
      "Editable PowerPoint for the trainer, PDF handouts for the room",
    ],
    faqs: [
      {
        q: "Will it change the order of my lessons?",
        a: "Not unless you ask. The default rebuild preserves each slide's intent and content and only combines or reorders slides where it clearly improves the flow, without losing information.",
      },
      {
        q: "How does it handle numbers like session length or group size?",
        a: "Figures that appear in your uploaded deck are treated as your facts and preserved. Any number the AI adds that does not trace back to your deck or your website is flagged or removed before you see the result.",
      },
      {
        q: "I have eight modules. Do I upload them one at a time?",
        a: "You can, or use the bulk rebuild feature to run a whole library through the same brand and design system so the modules finally match.",
      },
      {
        q: "What does it cost for a course?",
        a: "One AI deck generation a month is free. Credit packs start at $5 for occasional modules; Pro at $29 a month suits a full curriculum refresh.",
      },
    ],
    ctaHeadline: "Keep the curriculum. Fix the slides.",
  },
  {
    slug: "proposal-deck-redesign",
    navLabel: "Proposals and tender responses",
    metaTitle: "Redesign a Proposal or Tender Response Deck with AI | PitchBoost",
    metaDescription:
      "Upload your proposal, RFP or tender response deck and get it back professionally laid out in your brand, with scope, pricing and commitments kept exactly. Free to try.",
    heroHeadline: "Proposals that look as considered as the offer",
    heroSubhead:
      "Scope, service levels, pricing tiers, transition plans. PitchBoost keeps every commitment word for word and rebuilds the deck so the evaluation committee reads a firm that has its act together.",
    painPoints: [
      {
        title: "The deadline leaves no time for design",
        body: "The content is finished at 11pm the night before. The slides look like it. A rebuild that takes minutes fits into the gap that a designer never could.",
      },
      {
        title: "Pricing and scope cannot move by a single character",
        body: "A redesign that paraphrases a service level or rounds a price is a liability. Your figures and your wording have to survive untouched.",
      },
      {
        title: "The committee sees six decks in a row",
        body: "Theirs are all templates and bullet walls. A deck with a clear visual hierarchy is the one they remember when they score.",
      },
    ],
    outcomes: [
      "Scope, pricing and service levels preserved exactly as written",
      "Your brand from your website, not the agency template everyone else uses",
      "Instant global text changes, like a client name or a footer, without spending a credit",
      "Editable PowerPoint plus a PDF for the portal upload",
    ],
    faqs: [
      {
        q: "Will it touch my pricing or commitments?",
        a: "No. Numbers and wording that come from your uploaded deck are treated as your facts and carried across exactly. Anything the AI cannot trace to your deck is flagged or removed, so nothing invented can reach a client.",
      },
      {
        q: "Can I reuse the deck for the next tender?",
        a: "Yes. After the rebuild, edit individual slides or make deck-wide text changes. A request like replacing the client name everywhere is applied instantly at no cost.",
      },
      {
        q: "Is my document confidential?",
        a: "Your deck is processed to produce your rebuild and is never used to train models. Drafts are private to your account until you publish or download them.",
      },
      {
        q: "What does it cost?",
        a: "One AI deck generation a month is free, so the first proposal costs nothing. Credit packs start at $5 and Pro is $29 a month for teams that bid every week.",
      },
    ],
    ctaHeadline: "The offer is strong. Let the deck say so.",
  },
  {
    slug: "data-heavy-deck-redesign",
    navLabel: "Data and survey decks",
    metaTitle: "Redesign a Data-Heavy Deck or Survey Results with AI | PitchBoost",
    metaDescription:
      "Upload a survey results deck, dashboard summary or metrics review and get it back clean and readable, with every chart value and percentage preserved. Free to try.",
    heroHeadline: "Survey results and metric decks, redesigned without losing a number",
    heroSubhead:
      "Charts, tables and forty slides of percentages. PitchBoost reads the chart data inside your .pptx, keeps every figure exactly, and rebuilds the slides so the findings land at a glance.",
    painPoints: [
      {
        title: "The data is right and nobody can read it",
        body: "Default chart colors, twelve-point labels, three charts per slide. The insight is in there, somewhere behind the formatting.",
      },
      {
        title: "Redesign tools tend to invent when they cannot read",
        body: "Most AI tools see a chart as a picture and fill the gaps with plausible numbers. For a results deck that is disqualifying.",
      },
      {
        title: "Consistency across forty slides is the whole job",
        body: "One palette, one scale, one way of labelling. By hand it takes a day; by accident it never happens.",
      },
    ],
    outcomes: [
      "Chart series, categories and values read from the file and preserved",
      "Any figure the AI cannot trace to your deck is removed before you see it",
      "One visual system across every chart and table",
      "Editable PowerPoint and PDF for the readout",
    ],
    faqs: [
      {
        q: "How does it read my charts?",
        a: "PowerPoint stores chart data inside the .pptx. PitchBoost extracts each series with its categories and values, honouring percent formats, and carries them into the rebuilt slides as your facts.",
      },
      {
        q: "What happens to a number it cannot verify?",
        a: "Every figure in the rebuilt deck is checked against your uploaded deck and your website. Anything that cannot be traced is removed automatically and listed for you, so a made-up percentage never reaches your audience.",
      },
      {
        q: "Can it turn a table into a chart, or a chart into a headline number?",
        a: "The rebuild focuses on layout and readability and keeps your data as data. Slide edits afterwards can turn a key figure into a headline stat if you ask for it.",
      },
      {
        q: "What does it cost?",
        a: "One AI deck generation a month is free. Credit packs start at $5 and Pro is $29 a month for monthly reporting cycles.",
      },
    ],
    ctaHeadline: "Every number kept. Every slide readable.",
  },
];

export function getRedesign(slug: string): RedesignPage | undefined {
  return REDESIGNS.find((r) => r.slug === slug);
}
