/**
 * Answer pages: one question people type into ChatGPT, Perplexity or Google,
 * answered in the first sentence with the number in it, then the detail.
 * Answer engines lift the paragraph that answers the question; these pages
 * are written so that paragraph is the first one. Each links to the redesign
 * page that does the work.
 */
export interface AnswerPage {
  slug: string;
  question: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  /** The answer, number first. Rendered as the first paragraph and as the FAQ schema's accepted answer. */
  shortAnswer: string;
  sections: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** Slug of the redesign page that does the work. */
  related: string;
  /** ISO date the copy last changed. */
  updated: string;
}

export const ANSWERS: AnswerPage[] = [
  {
    "slug": "how-much-does-it-cost-to-redesign-a-pitch-deck",
    "question": "How much does it cost to redesign a pitch deck?",
    "navLabel": "Cost of a pitch deck redesign",
    "metaTitle": "How Much Does a Pitch Deck Redesign Cost in 2026? | PitchBoost",
    "metaDescription": "Agency, freelancer, do it yourself or AI: what a pitch deck redesign costs in 2026, from $0 to $8,000, and how long each option takes.",
    "shortAnswer": "Between $0 and about $8,000, depending on who does it. A presentation design agency typically quotes $2,000 to $8,000 and one to two weeks for a 15-slide deck; a freelancer charges $300 to $1,500 and takes three to seven days; an AI redesign tool such as PitchBoost rebuilds the same deck for free (one deck a month, up to 10 slides, with a small badge) or $9 a month on Starter, in about three minutes.",
    "sections": [
      {
        "title": "Agency: $2,000 to $8,000, one to two weeks",
        "body": "Design agencies price by slide count and by rounds of revision. Expect $150 to $500 a slide, custom illustration on top, and a schedule driven by their queue rather than your meeting. Worth it for a launch deck or a brand-defining piece; overkill for the monthly update."
      },
      {
        "title": "Freelancer: $300 to $1,500, three to seven days",
        "body": "Marketplace designers charge $40 to $120 an hour or a flat fee per deck. Quality varies more than price does, so the cheap end is a lottery and the expensive end is close to agency work. Revisions are where the days go."
      },
      {
        "title": "Do it yourself: free, and a weekend",
        "body": "A template fixes the fonts and colours and then fights every slide that does not fit its layouts. Budget a working day for ten slides if the content is final, longer if it is not."
      },
      {
        "title": "AI redesign: free to $29 a month, minutes",
        "body": "Upload the .pptx and the tool rebuilds each slide in your brand, pulled from your website, with the text and chart values kept. PitchBoost's free plan covers one deck a month up to 10 slides with a small badge; Starter is $9 a month for decks up to 25 slides with no badge; Pro is $29. What you do not get is bespoke illustration or a designer's opinion on the story."
      }
    ],
    "faqs": [
      {
        "q": "Is the free plan really free?",
        "a": "Yes. One AI deck a month, up to 10 slides, with a small PitchBoost badge on the deck and its exports. No card required."
      },
      {
        "q": "What makes an agency quote go up?",
        "a": "Slide count, custom illustration or animation, and the number of revision rounds. Three rounds on a 20-slide deck is where quotes cross $5,000."
      },
      {
        "q": "Do I get an editable file back from an AI redesign?",
        "a": "With PitchBoost, yes: an editable PowerPoint with real text boxes on paid plans, plus PDF and a shareable link on every plan."
      }
    ],
    "related": "powerpoint-redesign",
    "updated": "2026-09-12"
  },
  {
    "slug": "how-many-slides-should-an-investor-deck-have",
    "question": "How many slides should an investor deck have?",
    "navLabel": "Investor deck length",
    "metaTitle": "How Many Slides Should an Investor Deck Have? | PitchBoost",
    "metaDescription": "10 to 15 slides for a first read, 8 to 10 for demo day, appendix after the ask. The standard order, when to go longer, and how to cut an old deck down.",
    "shortAnswer": "10 to 15 slides. Sequoia's template runs ten, Guy Kawasaki's rule says ten, and most seed and Series A decks that get meetings land around twelve. Investors give a first read only a few minutes, so anything past 15 is skimmed; put extra detail in an appendix after the ask.",
    "sections": [
      {
        "title": "The standard order",
        "body": "Problem, solution, why now, market, product, traction, business model, competition, team, financials, the ask. One slide each is the baseline; traction and product can earn a second."
      },
      {
        "title": "When to go longer",
        "body": "Data rooms and follow-up meetings, not first reads. Keep the core deck at 12 to 15 and move cohort tables, detailed financials and technical architecture into an appendix. Investors who want them will ask."
      },
      {
        "title": "When to go shorter",
        "body": "Demo days and pitch competitions give you three minutes. Eight to ten slides, one idea each, big type. The traction number gets its own slide."
      },
      {
        "title": "Cutting an old deck to size",
        "body": "If the deck you have is 25 slides, condensing by hand takes an afternoon of arguing with yourself. PitchBoost's rebuild has a condense option that compresses the story to 10 to 15 slides while keeping the figures you marked, or rebuilds one to one if you would rather cut afterwards."
      }
    ],
    "faqs": [
      {
        "q": "Is 20 slides too many?",
        "a": "For a first read, yes. Move anything after the ask into an appendix and send the 12 to 15 slide core."
      },
      {
        "q": "How many slides for demo day?",
        "a": "Eight to ten for a three-minute slot. Judges remember one number on a clean slide, not a table."
      },
      {
        "q": "Does PitchBoost limit slide count?",
        "a": "The free plan rebuilds up to 10 slides, Starter up to 25, Pro up to 60. The condense option targets 10 to 15 whatever the source length."
      }
    ],
    "related": "investor-deck-redesign",
    "updated": "2026-09-12"
  },
  {
    "slug": "can-ai-redesign-an-existing-powerpoint",
    "question": "Can AI redesign an existing PowerPoint?",
    "navLabel": "AI redesign of an existing PowerPoint",
    "metaTitle": "Can AI Redesign an Existing PowerPoint? Yes, Here Is How | PitchBoost",
    "metaDescription": "Prompt-first AI tools make a new deck and ignore yours. Upload-first tools rebuild your .pptx slide by slide. What survives, what to check, and the limits.",
    "shortAnswer": "Yes, if the tool reads your .pptx rather than generating from a prompt. PitchBoost rebuilds an uploaded PowerPoint one slide per source slide, keeps the text and chart values, applies your brand from your website, and returns a PowerPoint and PDF in about three minutes. Prompt-first tools, which is most of them, produce a new deck that ignores the one you have.",
    "sections": [
      {
        "title": "Two kinds of AI deck tools",
        "body": "Prompt-first tools (Gamma, Tome, Canva's Magic Design, Copilot from a blank file) generate from a description. Upload-first tools read the slides you already have. If the content exists, only the second kind saves you the retyping."
      },
      {
        "title": "What survives a good rebuild",
        "body": "Slide order, titles and body text, chart series and values, and the images you choose to keep. Layout, typography, colour and spacing are what change."
      },
      {
        "title": "What to check afterwards",
        "body": "The facts panel: every figure should trace to your upload or your website, and anything that does not is removed and listed. The slide count against the source. The PowerPoint export, opened once in PowerPoint before it goes out."
      },
      {
        "title": "Limits",
        "body": "PitchBoost reads .pptx, not PDF; export from Google Slides or Keynote first. Plans cap deck length: 10 slides on Free, 25 on Starter, 60 on Pro. Speaker notes and SmartArt are not read yet."
      }
    ],
    "faqs": [
      {
        "q": "Does it work with Google Slides or Keynote?",
        "a": "Yes, via File, Download or Export as .pptx. Both do it losslessly in one step."
      },
      {
        "q": "Will the AI invent numbers?",
        "a": "No. Any figure that cannot be traced to your upload or your website is removed before you see the deck and listed in the facts panel."
      },
      {
        "q": "Is the output editable?",
        "a": "On paid plans the PowerPoint has real text boxes and fonts; the exact-look version matches the web deck slide for slide."
      }
    ],
    "related": "powerpoint-redesign",
    "updated": "2026-09-12"
  },
  {
    "slug": "how-long-does-it-take-to-redesign-a-presentation",
    "question": "How long does it take to redesign a presentation?",
    "navLabel": "Presentation redesign turnaround",
    "metaTitle": "How Long Does a Presentation Redesign Take? | PitchBoost",
    "metaDescription": "Minutes with an AI rebuild, days with a freelancer, weeks with an agency. Where the time goes with each, and what still takes your own time afterwards.",
    "shortAnswer": "Two to four minutes with an AI rebuild, three to seven days with a freelancer, one to two weeks with an agency. PitchBoost rebuilds a 15-slide deck, including its automatic quality review, in two to four minutes; the human options are gated by briefing and revision rounds, not by the design work itself.",
    "sections": [
      {
        "title": "Where the days go with people",
        "body": "A brief, a first draft, two rounds of revisions and a final export. Each hand-off waits on someone's calendar. The design itself is a few hours; the schedule is a week or two."
      },
      {
        "title": "What happens in the minutes",
        "body": "Parse the .pptx, learn the brand from your website, rebuild every slide, run a quality review that rewrites the weakest slides, check every figure against the source, export. You get an email when it lands."
      },
      {
        "title": "What still takes your time",
        "body": "Fifteen to thirty minutes: read the facts panel, decide which imported images to keep, make the two or three edits only you would know to make, download."
      }
    ],
    "faqs": [
      {
        "q": "Can an agency do it faster for a rush fee?",
        "a": "Usually two to three days at a 25 to 50 percent premium, and still gated by your own review turnaround."
      },
      {
        "q": "Can I edit after the AI rebuild?",
        "a": "Yes. AI edits by slide or across the deck, manual edits in the editor, or the editable PowerPoint on paid plans."
      },
      {
        "q": "Does deck length change the time?",
        "a": "Yes, roughly in proportion. A 25-slide deck takes longer than a 10-slide one on every option."
      }
    ],
    "related": "presentation-redesign-service",
    "updated": "2026-09-12"
  },
  {
    "slug": "what-makes-a-pitch-deck-look-professional",
    "question": "What makes a pitch deck look professional?",
    "navLabel": "What makes a deck look professional",
    "metaTitle": "What Makes a Pitch Deck Look Professional? Five Rules | PitchBoost",
    "metaDescription": "One message per slide, a two-level type scale, brand colours used sparingly, big numbers with units, identical margins. The tells of an amateur deck and the fast fix.",
    "shortAnswer": "Five things, none of them decoration: one message per slide, a type scale with two clear levels of hierarchy, real brand colours used sparingly, numbers shown large with their unit next to them, and margins that stay identical on every slide. Decks fail on consistency, not on taste.",
    "sections": [
      {
        "title": "The five rules",
        "body": "One message per slide, stated in the title as a sentence. Two type sizes for body and heading, used the same way everywhere. One accent colour from the brand, most of the slide neutral. Key numbers at 60 points with the unit beside them. The same margins, grid and logo position on every slide, so nothing jumps between clicks."
      },
      {
        "title": "The tells of an amateur deck",
        "body": "Bullet walls, clip-art icons, five fonts, a logo stretched to fit, tables pasted from a spreadsheet at 9 points, and stock photos of handshakes. Any one of these costs credibility before the content is read."
      },
      {
        "title": "The fast fix for a deck you already have",
        "body": "Rebuild it rather than restyle it. PitchBoost reads the .pptx, takes the brand from your website, and applies all five rules to every slide in one pass, with the text and numbers kept."
      }
    ],
    "faqs": [
      {
        "q": "Which fonts look professional?",
        "a": "Your brand's fonts, used consistently. If the brand has none, one clean sans-serif at two sizes beats any pairing used inconsistently."
      },
      {
        "q": "Dark or light background?",
        "a": "Either, as long as every slide agrees. Dark reads well on stage, light reads well in a PDF on a phone."
      },
      {
        "q": "Should I use stock photos?",
        "a": "Rarely. Product screenshots, customer logos and real numbers do the work stock photos pretend to."
      }
    ],
    "related": "make-powerpoint-look-professional",
    "updated": "2026-09-12"
  },
  {
    "slug": "how-to-rebrand-a-presentation",
    "question": "How do you rebrand a presentation?",
    "navLabel": "How to rebrand a presentation",
    "metaTitle": "How to Rebrand a Presentation: Checklist and Fast Path | PitchBoost",
    "metaDescription": "Logo, colours, typefaces, layout grid, then every chart and screenshot. The checklist for rebranding a deck by hand, and the minutes-long path with an AI rebuild.",
    "shortAnswer": "Change four things everywhere at once: the logo, the colour values, the typefaces and the template's layout grid, then re-check every chart, table and screenshot for old-brand colours. By hand that is one to two hours per ten slides. An AI rebuild that reads the new brand from your website does the whole deck in minutes.",
    "sections": [
      {
        "title": "The checklist",
        "body": "Logo files in the right colourways. Exact colour values, not approximations. Fonts installed or embedded. The slide master and layouts. Charts, which keep old palette colours by default. Screenshots that show the old brand. Contact details, URLs and legal footers."
      },
      {
        "title": "The order that saves time",
        "body": "Master and layouts first, then apply to every slide, then charts, then images, then a full read-through at 100 percent zoom. Doing slides one by one first means doing them twice."
      },
      {
        "title": "A folder of decks, not one",
        "body": "Rebrands rarely stop at a single file. PitchBoost's bulk rebuild takes a folder of old decks and rebuilds each in the new brand, so the sales team's twelve variants get done together."
      },
      {
        "title": "Checking the result",
        "body": "Open the export in PowerPoint, step through every slide, and look at chart colours and logo placement specifically. Those are the two places a rebrand leaks."
      }
    ],
    "faqs": [
      {
        "q": "Do charts keep the old colours after an AI rebuild?",
        "a": "No. Rebuilt charts take the brand colours from your website; the values come from your original chart data."
      },
      {
        "q": "Can I rebrand many decks at once?",
        "a": "Yes. The bulk rebuild feature rebuilds a folder of .pptx files in the same brand."
      },
      {
        "q": "Does this work for Google Slides?",
        "a": "Export each deck as .pptx first, rebuild, then import the result back if you present from Google Slides."
      }
    ],
    "related": "rebrand-presentation",
    "updated": "2026-09-12"
  },
  {
    "slug": "can-claude-make-a-powerpoint",
    "question": "Can Claude make a PowerPoint?",
    "navLabel": "Claude and PowerPoint",
    "metaTitle": "Can Claude Make a PowerPoint? Yes, Here's How (2026) | PitchBoost",
    "metaDescription": "Claude can create and redesign PowerPoint decks. What it does on its own, and how connecting PitchBoost turns a chat into a branded, editable deck you can track.",
    "shortAnswer": "Yes. Claude writes the outline and slide content for a presentation on its own, and where file creation is available it can produce a simple .pptx. For a designed, on-brand deck, or to redesign a PowerPoint you already have, connect PitchBoost to Claude: attach your .pptx or describe the deck, and Claude sends it to PitchBoost, which returns a finished deck in your brand as an editable PowerPoint, a PDF and a shareable link that shows you when it is opened.",
    "sections": [
      {
        "title": "What Claude does on its own",
        "body": "Claude is strong at the thinking part of a deck: structuring the story, writing slide copy, tightening a long presentation and suggesting what belongs on each slide. Where file creation is available it can also produce a basic PowerPoint file. What it does not have is your brand, a design system built for presentations, or any way to see what happens after you send the deck."
      },
      {
        "title": "Redesigning an existing PowerPoint in Claude",
        "body": "With PitchBoost connected, attach the .pptx and ask Claude to make it look professional. Claude reads the slides and sends them to PitchBoost, which keeps your content and numbers, applies the logo, colors and voice from your website, and rebuilds every slide. Claude replies with the link to the finished deck a few minutes later."
      },
      {
        "title": "Building a new deck from a conversation",
        "body": "Describe the prospect, the offer and the goal, and ask for a pitch deck. Claude can research the prospect first, then call PitchBoost to build the deck with that context, so the first draft is already personalized."
      },
      {
        "title": "Know who opened it",
        "body": "An attachment tells you nothing once it leaves your outbox. A PitchBoost deck goes out as a link, so you see when it is opened and when the recipient comes back to it; Pro adds time spent on each slide. You know who is interested before you follow up."
      },
      {
        "title": "How to connect PitchBoost to Claude",
        "body": "On claude.ai open Settings, then Connectors, choose Add custom connector and enter https://app.pitchboost.ai/api/mcp. Sign in to PitchBoost once, then enable it from the tools menu in any chat. In Claude Code, run: claude mcp add --transport http pitchboost https://app.pitchboost.ai/api/mcp"
      }
    ],
    "faqs": [
      {
        "q": "Can Claude edit my PowerPoint directly?",
        "a": "Claude can read a .pptx you attach and rewrite its content. For a full visual redesign in your brand, it hands the deck to PitchBoost and returns the rebuilt version, which you can edit slide by slide in PitchBoost or download as PowerPoint."
      },
      {
        "q": "Does it use PitchBoost credits?",
        "a": "Yes, the same as the app: a rebuild or a new deck counts as one of your monthly decks. Listing and opening decks is free."
      },
      {
        "q": "Does the same setup work in Cursor or Windsurf?",
        "a": "Yes. Any MCP client that supports Streamable HTTP uses the same URL, including Cursor and Windsurf."
      },
      {
        "q": "What happens to my slide content?",
        "a": "The slide text is sent to PitchBoost to rebuild the deck and stored in your account with the result. The privacy policy explains retention and deletion."
      }
    ],
    "related": "powerpoint-redesign",
    "updated": "2026-09-25"
  },
  {
    "slug": "can-copilot-redesign-a-powerpoint",
    "question": "Can Copilot redesign a PowerPoint?",
    "navLabel": "Copilot and PowerPoint",
    "metaTitle": "Can Copilot Redesign a PowerPoint? What It Does in 2026 | PitchBoost",
    "metaDescription": "What Copilot in PowerPoint does well, where it stops, and when a dedicated AI redesign tool is the faster route to a branded deck you can track after you send it.",
    "shortAnswer": "Partly. Copilot in PowerPoint drafts presentations from a prompt or a Word or PDF file, rewrites text, adds slides and suggests layouts slide by slide through Design Suggestions (formerly Designer). It works best inside a template your company already has. Rebuilding an old, inconsistent deck into a new brand still takes several prompts and manual cleanup, and a deck sent as a file tells you nothing once it is emailed. A dedicated redesign tool such as PitchBoost rebuilds the whole .pptx in your brand from your website in one pass and sends it as a link with viewer analytics.",
    "sections": [
      {
        "title": "What Copilot in PowerPoint does well",
        "body": "Turning a Word document or PDF into a first draft, summarizing a long deck, rewriting slide text, generating images and speaker notes, and on business plans, drawing on company files and brand assets stored in SharePoint. If your organization already has a good PowerPoint template, starting Copilot inside it keeps that look."
      },
      {
        "title": "Where it stops",
        "body": "Design suggestions still work slide by slide and favor built-in themes and standard layouts. Moving a messy deck onto a brand that has not already been turned into a template means repeated prompting and hand fixes. And like any PowerPoint file, the finished deck gives you no feedback after you send it."
      },
      {
        "title": "What it costs",
        "body": "Copilot in PowerPoint is included with Microsoft 365 Personal and Family plans and with Copilot Pro. Business and enterprise users generally need a Microsoft 365 Copilot license on top of their Microsoft 365 plan."
      },
      {
        "title": "Where PitchBoost is different",
        "body": "Upload the whole .pptx, point PitchBoost at your website, and every slide is rebuilt in your brand in a few minutes, with your text and numbers kept exactly. No template or Microsoft subscription is required. The deck goes out as a trackable link, so you see when a prospect opens it and, on Pro, how long they spend on each slide. Download the editable PowerPoint whenever you need the file."
      },
      {
        "title": "Using both",
        "body": "Plenty of teams draft with Copilot and finish with PitchBoost: let Copilot turn the source document into slides, then upload that .pptx for the brand redesign and the tracked link."
      }
    ],
    "faqs": [
      {
        "q": "Is Designer the same as Copilot?",
        "a": "Designer is PowerPoint's older layout-suggestion feature. For Copilot users it is now called Design Suggestions and sits on the Home tab. It suggests layouts for the slide you have selected."
      },
      {
        "q": "Can Copilot apply my brand?",
        "a": "On business plans it can use templates and brand assets your organization has stored in SharePoint. Without those, it works from PowerPoint's themes."
      },
      {
        "q": "Do I need Copilot or Microsoft 365 to use PitchBoost?",
        "a": "No. PitchBoost runs in the browser and accepts any .pptx up to 50 MB, including decks made with Copilot, Google Slides or Keynote."
      },
      {
        "q": "What does PitchBoost cost?",
        "a": "One AI deck a month is free, up to 10 slides, with a small badge. Starter is $9 a month for decks up to 25 slides with no badge; Pro is $29 a month for up to 60 slides and full viewer analytics."
      }
    ],
    "related": "powerpoint-designer-alternative",
    "updated": "2026-09-25"
  },
  {
    "slug": "what-is-a-powerpoint-mcp-server",
    "question": "What is a PowerPoint MCP server?",
    "navLabel": "PowerPoint MCP server",
    "metaTitle": "PowerPoint MCP Server: Build and Redesign Decks from Claude or Cursor | PitchBoost",
    "metaDescription": "A PowerPoint MCP server lets Claude, ChatGPT, Cursor and other AI assistants create and redesign presentations. How it works, the two kinds, and how to connect PitchBoost.",
    "shortAnswer": "A PowerPoint MCP server is a connector that lets an AI assistant such as Claude, ChatGPT, Cursor or Windsurf create, edit or redesign presentations through the Model Context Protocol, instead of only writing text about them. PitchBoost's MCP server, at https://app.pitchboost.ai/api/mcp, lets an assistant rebuild an uploaded .pptx in your brand or build a new deck from a brief, then returns a link to the finished deck with editable PowerPoint and PDF downloads.",
    "sections": [
      {
        "title": "How it works",
        "body": "MCP is an open standard for connecting AI assistants to outside tools. You add the server's URL to your assistant once and sign in. From then on, when you ask for a deck, the assistant calls the server's tools, passes your content or file, and returns the result in the chat."
      },
      {
        "title": "Two kinds of PowerPoint MCP server",
        "body": "File-level servers, often open-source projects built on libraries such as python-pptx, let the assistant add slides, text and shapes to a file on your computer. They are flexible, but the result is whatever the assistant draws, one element at a time. Hosted design servers such as PitchBoost take the content and do the design, brand, layout, charts and fact checking, and return a finished deck."
      },
      {
        "title": "What PitchBoost's server can do",
        "body": "Rebuild an uploaded deck, check on a rebuild until it is ready, build a new deck from a brief, list your recent decks, fetch one by id, and publish a draft. Nothing it does is destructive, and it never changes your plan."
      },
      {
        "title": "Setup in Claude, ChatGPT, Cursor and Windsurf",
        "body": "In Claude, add a custom connector with the URL https://app.pitchboost.ai/api/mcp. In ChatGPT, add the PitchBoost app from the app directory. In Claude Code, run claude mcp add --transport http pitchboost https://app.pitchboost.ai/api/mcp. Cursor and Windsurf take the same URL in their MCP settings. Each one asks you to sign in to PitchBoost once."
      },
      {
        "title": "After the deck is sent",
        "body": "Decks from PitchBoost go out as links, so you see when each one is opened; Pro adds time per slide. A .pptx built by a file-level server is just a file, and a file tells you nothing once it is emailed."
      }
    ],
    "faqs": [
      {
        "q": "Do I need to write code to use it?",
        "a": "No. In Claude and ChatGPT it is a connector you add in settings. Only Claude Code uses a one-line terminal command."
      },
      {
        "q": "Can it redesign an existing PowerPoint?",
        "a": "Yes. Attach the .pptx in the chat and ask for a redesign; the assistant sends it to PitchBoost, which returns the rebuilt deck as a link and an editable PowerPoint download."
      },
      {
        "q": "Can I try it before signing up?",
        "a": "Yes. The server can make a sample deck without an account, so you can see the output first."
      },
      {
        "q": "Does it use credits?",
        "a": "A deck built or rebuilt through MCP uses the same credits as the app. Listing and fetching decks is free."
      }
    ],
    "related": "powerpoint-redesign",
    "updated": "2026-09-25"
  },
];

export function getAnswer(slug: string): AnswerPage | undefined {
  return ANSWERS.find((a) => a.slug === slug);
}
