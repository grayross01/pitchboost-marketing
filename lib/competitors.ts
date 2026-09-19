export interface ComparisonFeature {
  label: string;
  pitchboost: boolean | string;
  competitor: boolean | string;
}

export interface KeyDifference {
  title: string;
  body: string;
}

export interface Competitor {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  verdict: string;
  competitorSummary: string;
  pitchboostPricing: string;
  competitorPricing: string;
  features: ComparisonFeature[];
  keyDifferences: KeyDifference[];
  pitchboostBestFor: string[];
  competitorBestFor: string[];
  faqs: { q: string; a: string }[];
  ctaHeadline: string;
  /** Prices and limits, as strings, checked against the competitor's published pricing. */
  specs?: { label: string; pitchboost: string; competitor: string }[];
  /** ISO date the comparison was last checked against the competitor's live pricing. */
  updated?: string;
  /** The competitor's own pricing page, linked as the source next to the checked date. */
  pricingUrl?: string;
  /** Short slug for the alternatives page: /alternatives/<altSlug>. */
  altSlug?: string;
  /** Which shelf the tool sits on. The alternatives page compares a tool
   *  against the others on its shelf, so the matrix stays readable: the
   *  general AI presentation makers on one, the tools built around
   *  redesigning an existing deck on the other. */
  family?: "generator" | "redesign";
}

/** The tools an alternatives page for `c` puts in its matrix: the same
 *  family, in list order. */
export function peersOf(c: Competitor): Competitor[] {
  const fam = c.family ?? "generator";
  return COMPETITORS.filter((o) => o.slug !== c.slug && (o.family ?? "generator") === fam);
}

export const COMPETITORS: Competitor[] = [
  {
    slug: "pitchboost-vs-gamma",
    name: "Gamma",
    metaTitle: "PitchBoost vs Gamma: Best Gamma Alternative for Sales Teams (2025)",
    metaDescription: "Looking for a Gamma alternative built for sales decks and proposals? See how PitchBoost compares to Gamma for AI-generated pitch decks, prospect personalization, and proposal workflows.",
    heroHeadline: "PitchBoost vs Gamma: The Better Alternative for Sales Decks and Proposals",
    heroSubhead: "Gamma is great for general AI presentations. PitchBoost is purpose-built for pitch decks, proposals, and sales materials, personalized for the specific prospect in the room.",
    verdict: "Gamma is a solid tool for generating fast general-purpose presentations and internal docs. But if your goal is to create a tailored pitch deck or proposal for a specific client or prospect, PitchBoost is the purpose-built alternative, with a workflow designed entirely around winning deals, not making slides.",
    competitorSummary: "Gamma is an AI presentation and document tool that generates card-based visual content quickly. It's popular for internal presentations, marketing content, and fast first drafts. It supports PDF/PPTX export, shareable links, and basic analytics on paid plans.",
    pitchboostPricing: "Free plan. Starter $9/mo. Pro $29/mo. Business $79/mo.",
    competitorPricing: "Free: 400 one-time credits. Plus: about $8 to $10/mo. Pro: about $15 to $20/mo. Ultra: $90+/mo.",
    specs: [{"label": "Free plan", "pitchboost": "150 credits a month (1 deck), 10-slide cap, small badge", "competitor": "400 credits once, never refill; 10 cards per generation; badge on shares and exports"}, {"label": "First paid tier", "pitchboost": "Starter, $9/mo: 800 credits, 25 slides, no badge", "competitor": "Plus, about $8 to $10/mo: 1,000 credits, 20 cards, badge off"}, {"label": "Badge removal", "pitchboost": "Starter and up, every deck; or $12 per deck", "competitor": "Plus and up"}, {"label": "Upload an existing deck and rebuild it", "pitchboost": "Yes, from .pptx, one slide per source slide", "competitor": "Imports a .pptx or doc as a starting point; output is a new Gamma"}, {"label": "Brand from your website", "pitchboost": "Yes, logo, colours and tone pulled from your site", "competitor": "Brand kit on paid plans, set up by hand"}, {"label": "Fact check against your own material", "pitchboost": "Yes, invented figures are removed before you see the deck", "competitor": "No"}, {"label": "PowerPoint export", "pitchboost": "Every plan; editable text boxes on paid plans", "competitor": "Yes; slides are Gamma cards, not native layouts"}, {"label": "Viewer analytics", "pitchboost": "Basic on Free, full on Pro", "competitor": "Pro and up"}, {"label": "API and MCP for AI assistants", "pitchboost": "Pro; a no-account sample tool for ChatGPT and Claude", "competitor": "API on Pro and up"}],
    updated: "2026-09-12",
    pricingUrl: "https://gamma.app/pricing",
    altSlug: "gamma",
    features: [
      { label: "AI-generated pitch decks", pitchboost: true, competitor: true },
      { label: "Personalized per prospect or deal", pitchboost: true, competitor: false },
      { label: "Purpose-built for sales and proposals", pitchboost: true, competitor: false },
      { label: "Auto-branding from your assets", pitchboost: true, competitor: "Partial" },
      { label: "Shareable links with viewer analytics", pitchboost: true, competitor: "Paid only" },
      { label: "PDF and PPTX export", pitchboost: true, competitor: "Paid only" },
      { label: "Free plan available", pitchboost: true, competitor: true },
      { label: "No design skills required", pitchboost: true, competitor: true },
      { label: "Built for small teams and solo operators", pitchboost: true, competitor: true },
      { label: "Proposal and pitch deck templates", pitchboost: true, competitor: false },
    ],
    keyDifferences: [
      {
        title: "Built for sales, not just slides",
        body: "Gamma generates presentations, but it doesn't know who you're pitching or why. PitchBoost is built around the sales workflow: you input your credentials and the prospect's context, and the output is a deck tailored to that specific opportunity. That difference shows up in every line of copy, not just the layout.",
      },
      {
        title: "Prospect personalization vs. generic content",
        body: "One of the biggest reasons deals stall is generic materials that could have been sent to anyone. PitchBoost pulls your existing credentials and maps them to the specific prospect's situation automatically. Gamma generates from prompts, which still requires you to manually tailor everything afterward.",
      },
      {
        title: "Pricing built for small teams",
        body: "Gamma's free plan has limits on AI credits and branding removal. PitchBoost's free plan is designed to let you build and share your first real pitch deck before paying anything. For small sales teams and solo operators who need professional output without a design budget, that matters.",
      },
    ],
    pitchboostBestFor: [
      "Sales teams pitching specific prospects",
      "Agencies and consultants writing proposals",
      "Founders raising investment",
      "Small teams without a designer",
      "Anyone who needs polished decks fast",
    ],
    competitorBestFor: [
      "Internal presentations and briefings",
      "Marketing content and landing pages",
      "Fast general-purpose slide creation",
      "Teams that also need docs and web pages",
    ],
    faqs: [
      {
        q: "Is PitchBoost a good Gamma alternative for sales teams?",
        a: "Yes, PitchBoost is purpose-built for sales teams who need personalized pitch decks and proposals, not general presentations. If your primary use case is winning deals rather than internal communication, PitchBoost is the more focused tool.",
      },
      {
        q: "Can PitchBoost do everything Gamma does?",
        a: "PitchBoost is focused specifically on pitch decks, proposals, and sales materials. It doesn't generate websites or general documents like Gamma does. If you need a broad AI content tool, Gamma covers more ground. If you need to win deals with polished, personalized pitch materials, PitchBoost is built for that.",
      },
      {
        q: "How does PitchBoost compare to Gamma on pricing?",
        a: "Both offer free plans. Gamma's paid plans start at $9/seat/mo but some key features like analytics and export are gated to higher tiers. PitchBoost's Pro plan at $29/mo gives small teams full access to personalization, branding, analytics, and export.",
      },
      {
        q: "Does Gamma personalize decks for specific prospects?",
        a: "Not natively. Gamma generates from prompts, so you'd need to manually tailor the content for each prospect. PitchBoost is built around prospect-specific deck generation, inputting deal context is part of the core workflow.",
      },
    ],
    ctaHeadline: "Ready to try the Gamma alternative built for sales?",
  },
  {
    slug: "pitchboost-vs-beautiful-ai",
    name: "Beautiful.ai",
    metaTitle: "PitchBoost vs Beautiful.ai: Best Beautiful.ai Alternative for Proposals (2025)",
    metaDescription: "Comparing PitchBoost and Beautiful.ai? See why sales teams and small businesses choose PitchBoost as a Beautiful.ai alternative for AI-generated pitch decks and client proposals.",
    heroHeadline: "PitchBoost vs Beautiful.ai: The Smarter Alternative for Pitch Decks and Proposals",
    heroSubhead: "Beautiful.ai is built for polished brand presentations. PitchBoost is built for winning deals, generating prospect-specific pitch decks and proposals without a designer or a premium team plan.",
    verdict: "Beautiful.ai produces visually consistent, polished presentations with strong design guardrails. But the workflow is still largely manual, you're working from templates, not generating from deal context. For teams that need to produce personalized pitch decks and proposals quickly without a design team, PitchBoost is the more practical alternative.",
    competitorSummary: "Beautiful.ai is a presentation tool known for its Smart Slide technology, which automatically adjusts layouts as you add content. It's popular for brand-consistent business presentations, with strong team plan features for collaboration and brand controls.",
    pitchboostPricing: "Free plan. Starter $9/mo. Pro $29/mo. Business $79/mo.",
    competitorPricing: "No free plan (14-day trial). Pro: about $12/mo billed annually, $45 monthly. Team: $40/user/mo.",
    specs: [{"label": "Free plan", "pitchboost": "150 credits a month (1 deck), 10-slide cap, small badge", "competitor": "None; 14-day trial, card required"}, {"label": "First paid tier", "pitchboost": "Starter, $9/mo: 800 credits, 25 slides, no badge", "competitor": "Pro, about $12/mo billed annually ($45 monthly)"}, {"label": "Badge removal", "pitchboost": "Starter and up, every deck; or $12 per deck", "competitor": "Not applicable, no free tier"}, {"label": "Upload an existing deck and rebuild it", "pitchboost": "Yes, from .pptx, one slide per source slide", "competitor": "Imports .pptx into Smart Slides; layout is redone slide by slide by you"}, {"label": "Brand from your website", "pitchboost": "Yes, logo, colours and tone pulled from your site", "competitor": "Custom brand styling set up by hand"}, {"label": "Fact check against your own material", "pitchboost": "Yes, invented figures are removed before you see the deck", "competitor": "No"}, {"label": "PowerPoint export", "pitchboost": "Every plan; editable text boxes on paid plans", "competitor": "Yes"}, {"label": "Viewer analytics", "pitchboost": "Basic on Free, full on Pro", "competitor": "Yes"}, {"label": "API and MCP for AI assistants", "pitchboost": "Pro; a no-account sample tool for ChatGPT and Claude", "competitor": "No public API"}],
    updated: "2026-09-12",
    pricingUrl: "https://www.beautiful.ai/pricing",
    altSlug: "beautiful-ai",
    features: [
      { label: "AI-generated pitch decks", pitchboost: true, competitor: "Partial" },
      { label: "Personalized per prospect or deal", pitchboost: true, competitor: false },
      { label: "Purpose-built for sales and proposals", pitchboost: true, competitor: false },
      { label: "Auto-branding from your assets", pitchboost: true, competitor: true },
      { label: "Shareable links with viewer analytics", pitchboost: true, competitor: "Team plan only" },
      { label: "PDF and PPTX export", pitchboost: true, competitor: true },
      { label: "Free plan available", pitchboost: true, competitor: false },
      { label: "No design skills required", pitchboost: true, competitor: true },
      { label: "Affordable for solo operators and small teams", pitchboost: true, competitor: "Limited" },
      { label: "Proposal and pitch deck templates", pitchboost: true, competitor: "Partial" },
    ],
    keyDifferences: [
      {
        title: "AI generation vs. AI-assisted design",
        body: "Beautiful.ai's AI helps you design slides more efficiently, it adjusts layouts and suggests formatting. PitchBoost generates the actual pitch deck content from your credentials and prospect context. That's a fundamentally different kind of help: one saves you design time, the other saves you the entire deck-building process.",
      },
      {
        title: "Team plan pricing adds up fast",
        body: "Beautiful.ai's Pro plan at $12/mo is individual-only. Team plans jump to $40/user/mo billed annually, a significant cost for small sales teams or agencies managing multiple clients. PitchBoost's Business plan at $79/mo covers teams without per-seat pricing that scales against you.",
      },
      {
        title: "Proposals built for the deal, not the brand",
        body: "Beautiful.ai excels at brand consistency. PitchBoost excels at deal relevance. For client-facing pitch decks and proposals where the content needs to speak directly to a specific prospect's situation, PitchBoost's personalization workflow produces materials that feel custom-built, because they are.",
      },
    ],
    pitchboostBestFor: [
      "Sales reps pitching specific accounts",
      "Agencies writing client proposals",
      "Small teams without design support",
      "Founders pitching investors",
      "Anyone who needs personalized decks at volume",
    ],
    competitorBestFor: [
      "Teams that prioritize brand consistency",
      "Companies with existing design systems",
      "Internal business presentations",
      "Larger teams on enterprise plans",
    ],
    faqs: [
      {
        q: "Is PitchBoost a good Beautiful.ai alternative for small teams?",
        a: "Yes, PitchBoost is built specifically for small teams and solo operators who need professional pitch decks and proposals without a design budget. Unlike Beautiful.ai, there's no per-seat pricing that gets expensive as your team grows.",
      },
      {
        q: "Does Beautiful.ai generate pitch decks from deal context?",
        a: "No. Beautiful.ai helps you design slides more efficiently using Smart Slides and AI formatting assistance, but the content is still manual. PitchBoost generates pitch deck content from your existing credentials and prospect-specific context automatically.",
      },
      {
        q: "How does PitchBoost compare to Beautiful.ai on price?",
        a: "Beautiful.ai's individual Pro plan is $12/mo billed annually, but team features require the $40/user/mo plan. PitchBoost starts free and offers a full-featured Business plan at $79/mo for teams, no per-seat pricing.",
      },
      {
        q: "Can I switch from Beautiful.ai to PitchBoost easily?",
        a: "Yes. PitchBoost has its own template library and auto-branding features, so you can bring your brand assets and start generating decks immediately. There's a free plan to try it before committing.",
      },
    ],
    ctaHeadline: "Try the Beautiful.ai alternative built for proposals and pitch decks",
  },
  {
    slug: "pitchboost-vs-pitch",
    name: "Pitch",
    metaTitle: "PitchBoost vs Pitch: Best Pitch Alternative for Fast Sales Decks (2025)",
    metaDescription: "Evaluating PitchBoost vs Pitch? See how PitchBoost compares as a Pitch alternative for AI-generated sales decks, client proposals, and pitch materials for small teams.",
    heroHeadline: "PitchBoost vs Pitch: The Faster Alternative for Sales Decks and Proposals",
    heroSubhead: "Pitch is a polished collaboration workspace for presentation teams. PitchBoost is built for the moment you need a great deck for tomorrow's meeting, AI-generated, prospect-specific, and ready in a few minutes.",
    verdict: "Pitch is a well-designed presentation platform with strong collaboration, sharing, and workspace features. It's a good fit for teams managing multiple decks across a brand system. PitchBoost is the better alternative when the priority is generating a tailored, client-ready pitch deck or proposal as fast as possible, without managing a full presentation workspace.",
    competitorSummary: "Pitch is a presentation platform designed for collaborative teams. It offers AI presentation creation, templates, branded sharing links with analytics, and pitch rooms. It's well-regarded for its design quality and team workspace features.",
    pitchboostPricing: "Free plan. Starter $9/mo. Pro $29/mo. Business $79/mo.",
    competitorPricing: "Free plan. Plus: about $13 to $15/mo. Team: $19 to $23 per seat. Business: $25 to $30 per seat.",
    specs: [{"label": "Free plan", "pitchboost": "150 credits a month (1 deck), 10-slide cap, small badge", "competitor": "Unlimited presentations, 100 one-time AI credits, branded links and PDF, no PowerPoint export"}, {"label": "First paid tier", "pitchboost": "Starter, $9/mo: 800 credits, 25 slides, no badge", "competitor": "Plus, about $13 to $15/mo: unbranded, PowerPoint export, custom fonts"}, {"label": "Badge removal", "pitchboost": "Starter and up, every deck; or $12 per deck", "competitor": "Plus and up"}, {"label": "Upload an existing deck and rebuild it", "pitchboost": "Yes, from .pptx, one slide per source slide", "competitor": "Imports .pptx; redesign is manual with templates"}, {"label": "Brand from your website", "pitchboost": "Yes, logo, colours and tone pulled from your site", "competitor": "Brand kit set up by hand"}, {"label": "Fact check against your own material", "pitchboost": "Yes, invented figures are removed before you see the deck", "competitor": "No"}, {"label": "PowerPoint export", "pitchboost": "Every plan; editable text boxes on paid plans", "competitor": "Paid plans only"}, {"label": "Viewer analytics", "pitchboost": "Basic on Free, full on Pro", "competitor": "Paid plans"}, {"label": "API and MCP for AI assistants", "pitchboost": "Pro; a no-account sample tool for ChatGPT and Claude", "competitor": "No"}],
    updated: "2026-09-12",
    pricingUrl: "https://pitch.com/pricing",
    altSlug: "pitch",
    features: [
      { label: "AI-generated pitch decks", pitchboost: true, competitor: "Credit-based" },
      { label: "Personalized per prospect or deal", pitchboost: true, competitor: false },
      { label: "Purpose-built for sales and proposals", pitchboost: true, competitor: false },
      { label: "Auto-branding from your assets", pitchboost: true, competitor: true },
      { label: "Shareable links with viewer analytics", pitchboost: true, competitor: "Paid plans" },
      { label: "PDF and PPTX export", pitchboost: true, competitor: true },
      { label: "Free plan available", pitchboost: true, competitor: true },
      { label: "No design skills required", pitchboost: true, competitor: true },
      { label: "No workspace management overhead", pitchboost: true, competitor: false },
      { label: "Proposal and pitch deck templates", pitchboost: true, competitor: true },
    ],
    keyDifferences: [
      {
        title: "A pitch deck generator vs. a presentation workspace",
        body: "Pitch is built around a collaborative workspace, managing decks, teams, brands, and assets over time. PitchBoost is built around a single outcome: generating a great pitch deck for a specific opportunity, fast. If you don't need workspace management and just need the deck, PitchBoost removes that overhead entirely.",
      },
      {
        title: "AI credits vs. unlimited generation",
        body: "Pitch's AI features are credit-based, which means frequent users hit limits or need to manage usage carefully. PitchBoost is built around AI generation as the core workflow, not an add-on feature with a usage cap.",
      },
      {
        title: "Prospect personalization at the core",
        body: "Pitch decks built in Pitch start from templates and are customized manually. PitchBoost generates from your credentials and the prospect's context, so the first draft already speaks to their specific situation. For sales teams pitching multiple accounts, that difference compounds quickly.",
      },
    ],
    pitchboostBestFor: [
      "Sales teams who pitch frequently",
      "Consultants and agencies writing proposals",
      "Founders pitching investors or partners",
      "Small teams without a dedicated design function",
      "Anyone who needs personalized decks on demand",
    ],
    competitorBestFor: [
      "Teams that collaborate heavily on decks",
      "Companies managing large presentation libraries",
      "Marketing teams with brand system needs",
      "Organizations that need pitch rooms and deal tracking",
    ],
    faqs: [
      {
        q: "Is PitchBoost a good Pitch alternative for small sales teams?",
        a: "Yes, PitchBoost is purpose-built for small sales teams who need personalized pitch decks quickly, without the overhead of managing a full presentation workspace. It's a more focused alternative to Pitch for teams where speed and personalization matter most.",
      },
      {
        q: "How does PitchBoost's AI compare to Pitch's AI?",
        a: "Pitch uses AI as a credit-based feature for generating content within slides. PitchBoost is built AI-native from the ground up, the entire deck is generated from your credentials and prospect context, not added as an optional layer on top of a manual workflow.",
      },
      {
        q: "Does Pitch personalize decks for specific prospects?",
        a: "Not natively. Pitch decks start from templates that you customize manually. PitchBoost is designed specifically to generate prospect-specific decks automatically, making it faster to produce tailored materials at scale.",
      },
      {
        q: "Can I try PitchBoost for free before switching from Pitch?",
        a: "Yes. PitchBoost has a free plan that lets you generate and share your first pitch deck before paying anything. No credit card required.",
      },
    ],
    ctaHeadline: "Try the Pitch alternative built for fast, personalized sales decks",
  },
  {
    slug: "pitchboost-vs-tome",
    name: "Tome",
    metaTitle: "PitchBoost vs Tome: The Tome Alternative for Making Pitch Decks (2026)",
    metaDescription: "Tome retired its AI presentation product to focus on sales research. If you still need to generate and send a pitch deck or proposal, see why PitchBoost is the Tome alternative built for creating decks.",
    heroHeadline: "PitchBoost vs Tome: The Alternative for Actually Making the Deck",
    heroSubhead: "Tome moved away from presentations and now focuses on AI account research and meeting prep. If your goal is still to create and send a polished, personalized pitch deck, PitchBoost is the alternative built for that.",
    verdict: "Tome retired its AI presentation product in 2025 and repositioned as an AI sales assistant for account research, meeting preparation, and deal personalization. It is a capable research tool, but it no longer generates the finished deck you send to a prospect. If creating and sharing a tailored pitch deck or proposal is the job, PitchBoost is the purpose-built alternative.",
    competitorSummary: "Tome is now an AI sales assistant focused on account research, meeting preparation, and deal personalization, under the tagline 'make deals, not decks.' It scans company data, CRM records, and call notes to brief sales teams before a meeting. Its earlier AI presentation product was sunset in 2025.",
    pitchboostPricing: "Free plan. Starter $9/mo. Pro $29/mo. Business $79/mo.",
    competitorPricing: "Free tier. Pro: about $16 per user/mo. Enterprise: custom.",
    specs: [{"label": "Free plan", "pitchboost": "150 credits a month (1 deck), 10-slide cap, small badge", "competitor": "Free tier with limited AI credits"}, {"label": "First paid tier", "pitchboost": "Starter, $9/mo: 800 credits, 25 slides, no badge", "competitor": "Pro, about $16 per user/mo"}, {"label": "Badge removal", "pitchboost": "Starter and up, every deck; or $12 per deck", "competitor": "Paid plans"}, {"label": "Upload an existing deck and rebuild it", "pitchboost": "Yes, from .pptx, one slide per source slide", "competitor": "No native .pptx rebuild; generates from prompts and docs"}, {"label": "Brand from your website", "pitchboost": "Yes, logo, colours and tone pulled from your site", "competitor": "No"}, {"label": "Fact check against your own material", "pitchboost": "Yes, invented figures are removed before you see the deck", "competitor": "No"}, {"label": "PowerPoint export", "pitchboost": "Every plan; editable text boxes on paid plans", "competitor": "Limited"}, {"label": "Viewer analytics", "pitchboost": "Basic on Free, full on Pro", "competitor": "Yes"}, {"label": "API and MCP for AI assistants", "pitchboost": "Pro; a no-account sample tool for ChatGPT and Claude", "competitor": "No"}],
    updated: "2026-09-12",
    pricingUrl: "https://tome.app",
    altSlug: "tome",
    features: [
      { label: "AI-generated pitch decks", pitchboost: true, competitor: "Retired" },
      { label: "Personalized per prospect or deal", pitchboost: true, competitor: "Research only" },
      { label: "Purpose-built for sending a deck", pitchboost: true, competitor: false },
      { label: "Shareable links with viewer analytics", pitchboost: true, competitor: "Partial" },
      { label: "PDF and PPTX export", pitchboost: true, competitor: false },
      { label: "Free plan available", pitchboost: true, competitor: "Trial" },
      { label: "AI account research and meeting prep", pitchboost: false, competitor: true },
      { label: "Built for small teams and solo operators", pitchboost: true, competitor: "Partial" },
    ],
    keyDifferences: [
      {
        title: "Tome stopped making decks",
        body: "In 2025 Tome retired its AI presentation product and pivoted to sales research and meeting preparation. That is a real change in what the tool does: it now briefs you before a meeting rather than producing the deck you present. PitchBoost is built around the opposite outcome, turning your inputs and the prospect's context into a finished, on-brand deck you can send.",
      },
      {
        title: "The research vs. the finished deliverable",
        body: "Tome is strong at pulling together account context from company data and your CRM. PitchBoost takes the context you already have and produces the actual pitch deck, proposal, or listing presentation, complete with copy, layout, and your branding. One prepares you for the conversation; the other creates the material the conversation runs on.",
      },
      {
        title: "You can still send and track it",
        body: "Because PitchBoost produces the deck, it also publishes it as a trackable link and shows you who opened it and which slides they read. If you used Tome to make and share presentations, that is the workflow PitchBoost keeps, and the one Tome no longer offers.",
      },
    ],
    pitchboostBestFor: [
      "Anyone who needs to create and send a pitch deck",
      "Sales teams pitching specific prospects",
      "Agencies and consultants writing proposals",
      "Real estate agents building listing presentations",
      "Former Tome users who still need to make decks",
    ],
    competitorBestFor: [
      "Sales teams that want AI account research",
      "Reps preparing for a specific meeting",
      "Teams that want deal briefs from CRM data",
      "Users who no longer need to build presentations",
    ],
    faqs: [
      {
        q: "Does Tome still make presentations?",
        a: "No. Tome retired its AI presentation product in 2025 and now focuses on AI account research and meeting preparation for sales teams. If you need to create an actual deck, you need a different tool.",
      },
      {
        q: "What is the best Tome alternative for making decks?",
        a: "PitchBoost is a strong Tome alternative if your goal is to generate and send a deck. It creates a personalized, on-brand pitch deck, proposal, or listing presentation from your inputs, then publishes it as a trackable link.",
      },
      {
        q: "Can PitchBoost do account research like Tome?",
        a: "PitchBoost drafts your deck from the context you provide and does light web research at generation time, but it is not a standalone CRM research tool. If deep pre-meeting account research is your main need, Tome is built for that. If creating the deck is the job, PitchBoost is.",
      },
      {
        q: "How does PitchBoost compare to Tome on price?",
        a: "PitchBoost has a free plan and a Pro plan at $29/mo. Tome's current sales-research product is around $16/mo billed annually, with custom Enterprise pricing. They price similarly, but they now do different jobs.",
      },
    ],
    ctaHeadline: "Try the Tome alternative built for creating and sending decks",
  },
  {
    "slug": "pitchboost-vs-canva",
    "name": "Canva",
    "metaTitle": "PitchBoost vs Canva for Pitch Decks and Redesigns | PitchBoost",
    "metaDescription": "Canva is a design editor with AI on the side. PitchBoost rebuilds the deck you already have in your brand, fact-checked. Prices, limits and the honest verdict.",
    "heroHeadline": "PitchBoost vs Canva: a design editor or a deck that is already done",
    "heroSubhead": "Canva gives you a canvas and a million templates. PitchBoost gives you back your own deck, redesigned in your brand, in a few minutes. Which one you want depends on whether you enjoy the dragging.",
    "verdict": "If your deck already exists and the problem is that it looks tired, PitchBoost is the faster tool: upload the .pptx, and it keeps your content, applies your brand from your website and hands back a finished deck with every figure checked. Canva is the better tool when you want to design something yourself from a template, or when the deliverable is not a deck at all.",
    "competitorSummary": "Canva is the most popular design tool on earth for a reason: a huge template library, a free plan that stays free, and a Pro plan with a brand kit and a monthly pool of Magic Studio AI credits. Its AI generates a new presentation from a prompt; redesigning an existing deck still means moving things around yourself.",
    "pitchboostPricing": "Free plan. Starter $9/mo. Pro $29/mo. Business $79/mo.",
    "competitorPricing": "Free plan. Pro: $18/mo or $144/yr. Business: $25/user/mo.",
    "features": [
      {
        "label": "Rebuilds an existing .pptx slide by slide",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Brand pulled from your website automatically",
        "pitchboost": true,
        "competitor": "Brand kit, manual"
      },
      {
        "label": "Fact check against your own material",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "AI generates a deck from a prompt",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "Template library for non-deck design",
        "pitchboost": false,
        "competitor": true
      },
      {
        "label": "Free plan without a badge",
        "pitchboost": false,
        "competitor": true
      },
      {
        "label": "Editable PowerPoint export",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "Viewer analytics on shared decks",
        "pitchboost": true,
        "competitor": "Basic"
      },
      {
        "label": "Personalised per prospect or deal",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "API and MCP for AI assistants",
        "pitchboost": true,
        "competitor": "API only"
      }
    ],
    "keyDifferences": [
      {
        "title": "Finished deck versus blank canvas",
        "body": "Canva's AI starts from a prompt and hands you a design to keep editing. PitchBoost starts from your existing deck and hands you the finished redesign. If you have the deck, the second path is minutes; the first is an afternoon."
      },
      {
        "title": "Your numbers stay your numbers",
        "body": "PitchBoost checks every figure in the rebuilt deck against your upload and your website, and removes anything it cannot trace. Canva has no equivalent; whatever the AI writes ships."
      },
      {
        "title": "Canva is the better general-purpose tool",
        "body": "Social posts, one-pagers, print, video: Canva does all of it and PitchBoost does none of it. If decks are a small part of what you make, Canva's breadth wins."
      }
    ],
    "pitchboostBestFor": [
      "Already have the deck and want it redesigned, not rebuilt from scratch",
      "Need every number to survive the redesign untouched",
      "Send decks to specific prospects and want to know when they open",
      "Would rather not spend the afternoon in an editor"
    ],
    "competitorBestFor": [
      "Enjoy designing and want full manual control",
      "Make lots of non-deck material (social, print, video)",
      "Want a free plan with no badge for casual use",
      "Already run your brand kit in Canva"
    ],
    "faqs": [
      {
        "q": "Can Canva redesign an existing PowerPoint?",
        "a": "Canva can import a .pptx into its editor, and from there the redesign is manual: you pick templates and move elements slide by slide. Magic Design generates a new presentation from a prompt rather than rebuilding your slides. PitchBoost rebuilds the uploaded deck automatically, one slide per source slide."
      },
      {
        "q": "Which is cheaper?",
        "a": "Both have a free plan. Canva Pro is $18 a month ($144 a year); PitchBoost Starter is $9 a month and Pro $29. If decks are all you need, PitchBoost's Starter is the cheaper paid step; if you need Canva's full design suite, its Pro plan covers far more than decks."
      },
      {
        "q": "Does either check the facts?",
        "a": "PitchBoost does: every figure in a rebuilt deck must appear in your upload or your website, or it is removed and listed. Canva does not check AI-written content."
      },
      {
        "q": "Can I use both?",
        "a": "Yes. Rebuild the deck in PitchBoost, export the editable PowerPoint, and bring it into Canva if you want to add non-deck assets."
      }
    ],
    "ctaHeadline": "Skip the dragging. Upload the deck.",
    "specs": [
      {
        "label": "Free plan",
        "pitchboost": "150 credits a month (1 deck), 10-slide cap, small badge",
        "competitor": "Free forever: templates, 5 GB, a monthly AI allowance (about 20 premium AI uses)"
      },
      {
        "label": "First paid tier",
        "pitchboost": "Starter, $9/mo: 800 credits, 25 slides, no badge",
        "competitor": "Canva Pro, $18/mo or $144/yr: brand kit, 500 Magic Studio credits"
      },
      {
        "label": "Badge removal",
        "pitchboost": "Starter and up, every deck; or $12 per deck",
        "competitor": "No badge on free designs"
      },
      {
        "label": "Upload an existing deck and rebuild it",
        "pitchboost": "Yes, from .pptx, one slide per source slide",
        "competitor": "Imports .pptx into the editor; redesign is manual, Magic Design generates from a prompt"
      },
      {
        "label": "Brand from your website",
        "pitchboost": "Yes, logo, colours and tone pulled from your site",
        "competitor": "Brand kit on Pro, set up by hand"
      },
      {
        "label": "Fact check against your own material",
        "pitchboost": "Yes, invented figures are removed before you see the deck",
        "competitor": "No"
      },
      {
        "label": "PowerPoint export",
        "pitchboost": "Every plan; editable text boxes on paid plans",
        "competitor": "Yes"
      },
      {
        "label": "Viewer analytics",
        "pitchboost": "Basic on Free, full on Pro",
        "competitor": "Basic view insights on shared designs"
      },
      {
        "label": "API and MCP for AI assistants",
        "pitchboost": "Pro; a no-account sample tool for ChatGPT and Claude",
        "competitor": "Connect APIs for developers; no MCP"
      }
    ],
    "updated": "2026-09-12",
    "pricingUrl": "https://www.canva.com/pricing/",
    "altSlug": "canva"
  },
  {
    "slug": "pitchboost-vs-copilot",
    "name": "Copilot in PowerPoint",
    "metaTitle": "PitchBoost vs Copilot in PowerPoint | PitchBoost",
    "metaDescription": "Copilot lives inside PowerPoint and builds from your files. PitchBoost rebuilds the deck you have in your brand, fact-checked. Prices, limits and when each wins.",
    "heroHeadline": "PitchBoost vs Copilot in PowerPoint: inside the app or above it",
    "heroSubhead": "Copilot is PowerPoint with an assistant. PitchBoost is a deck service: upload what you have, get back the redesigned, on-brand version. Here is what each actually does with an existing deck.",
    "verdict": "Choose PitchBoost when the deck exists and needs to look like it came from a designer: it reads the .pptx, learns your brand from your website, rebuilds every slide, and checks every number. Choose Copilot when your organisation already pays for Microsoft 365 Copilot and you want help drafting slides inside PowerPoint from your own documents.",
    "competitorSummary": "Copilot in PowerPoint drafts a presentation from a prompt or a Word file, adds slides, summarises a deck and suggests layouts through Designer. It works inside the file you already have open, which is its strength. It uses whatever template your organisation set up, does not read your website for brand, and does not check the figures it writes.",
    "pitchboostPricing": "Free plan. Starter $9/mo. Pro $29/mo. Business $79/mo.",
    "competitorPricing": "Microsoft 365 Premium: $19.99/mo (consumer). Microsoft 365 Copilot add-on: $21 to $30 per user/mo (work plans).",
    "features": [
      {
        "label": "Rebuilds an existing .pptx slide by slide",
        "pitchboost": true,
        "competitor": "Designer suggestions, slide by slide"
      },
      {
        "label": "Brand pulled from your website automatically",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Fact check against your own material",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Drafts a deck from a document",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "Works inside PowerPoint itself",
        "pitchboost": false,
        "competitor": true
      },
      {
        "label": "Free plan",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Shareable link with viewer analytics",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Personalised per prospect or deal",
        "pitchboost": true,
        "competitor": "Manual"
      },
      {
        "label": "Editable PowerPoint output",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "API and MCP for AI assistants",
        "pitchboost": true,
        "competitor": "Graph API"
      }
    ],
    "keyDifferences": [
      {
        "title": "A redesign versus a suggestion",
        "body": "Copilot's Designer offers layout ideas one slide at a time and you accept or reject each. PitchBoost redesigns the whole deck in one pass, in your brand, and returns it finished."
      },
      {
        "title": "Brand and facts are handled",
        "body": "PitchBoost pulls your logo, colours and tone from your website and checks every number against your source. Copilot inherits the template IT installed and trusts whatever it writes."
      },
      {
        "title": "Copilot is already there",
        "body": "If your company pays for Microsoft 365 Copilot, it is one click away in every file. There is nothing to upload and nothing to export. For quick drafts inside a corporate template, that convenience is hard to beat."
      }
    ],
    "pitchboostBestFor": [
      "Have a deck that needs to look professional by tomorrow",
      "Want your brand applied without setting up a template",
      "Need figures checked against your own material",
      "Send decks externally and want to know when they are opened"
    ],
    "competitorBestFor": [
      "Already pay for Microsoft 365 Copilot at work",
      "Draft internal slides from Word documents and notes",
      "Must stay inside a corporate template",
      "Never share decks outside the organisation"
    ],
    "faqs": [
      {
        "q": "Can Copilot redesign my existing deck?",
        "a": "Partly. Copilot can restructure and add slides, and PowerPoint Designer suggests layouts for the slide you are on. It does not rebuild the whole deck in your brand in one pass; PitchBoost does, from an uploaded .pptx."
      },
      {
        "q": "What does Copilot cost?",
        "a": "For individuals it comes with Microsoft 365 Premium at $19.99 a month (the standalone Copilot Pro plan closed to new customers in October 2025). For work accounts it is an add-on at $21 to $30 per user a month on top of a Microsoft 365 plan."
      },
      {
        "q": "Does Copilot check facts?",
        "a": "No. It writes from your prompt and files without verifying figures. PitchBoost removes any number it cannot trace to your upload or website and lists what it removed."
      },
      {
        "q": "Can I use PitchBoost and keep working in PowerPoint?",
        "a": "Yes. Download the editable PowerPoint with real text boxes and keep editing in PowerPoint, Copilot included."
      }
    ],
    "ctaHeadline": "Get the redesign done, then open it in PowerPoint.",
    "specs": [
      {
        "label": "Free plan",
        "pitchboost": "150 credits a month (1 deck), 10-slide cap, small badge",
        "competitor": "None for Copilot; PowerPoint Designer suggestions come with Microsoft 365"
      },
      {
        "label": "First paid tier",
        "pitchboost": "Starter, $9/mo: 800 credits, 25 slides, no badge",
        "competitor": "Microsoft 365 Premium, $19.99/mo (consumer) or Microsoft 365 Copilot add-on, $21 to $30 per user/mo (work)"
      },
      {
        "label": "Badge removal",
        "pitchboost": "Starter and up, every deck; or $12 per deck",
        "competitor": "Not applicable"
      },
      {
        "label": "Upload an existing deck and rebuild it",
        "pitchboost": "Yes, from .pptx, one slide per source slide",
        "competitor": "Builds new decks from a file or prompt; redesigns via Designer suggestions slide by slide"
      },
      {
        "label": "Brand from your website",
        "pitchboost": "Yes, logo, colours and tone pulled from your site",
        "competitor": "No; uses the template your organisation set up"
      },
      {
        "label": "Fact check against your own material",
        "pitchboost": "Yes, invented figures are removed before you see the deck",
        "competitor": "No"
      },
      {
        "label": "PowerPoint export",
        "pitchboost": "Every plan; editable text boxes on paid plans",
        "competitor": "Native PowerPoint"
      },
      {
        "label": "Viewer analytics",
        "pitchboost": "Basic on Free, full on Pro",
        "competitor": "No"
      },
      {
        "label": "API and MCP for AI assistants",
        "pitchboost": "Pro; a no-account sample tool for ChatGPT and Claude",
        "competitor": "Graph API for developers"
      }
    ],
    "updated": "2026-09-12",
    "pricingUrl": "https://www.microsoft.com/en-us/microsoft-365/copilot",
    "altSlug": "copilot-in-powerpoint"
  },
  {
    "slug": "pitchboost-vs-slidespeak",
    "name": "SlideSpeak",
    "metaTitle": "PitchBoost vs SlideSpeak (2026): Which Redesigns an Existing PowerPoint Better?",
    "metaDescription": "SlideSpeak enhances an uploaded deck with a brand kit and credits; PitchBoost rebuilds the whole deck one slide to one in your brand from your website, with every number checked. Prices, free plans and exports compared, checked September 2026.",
    "heroHeadline": "PitchBoost vs SlideSpeak: two ways to fix a deck you already have",
    "heroSubhead": "SlideSpeak is a broad AI presentation suite (generate, summarize, chat with documents, even AI video) with a deck enhancer inside it. PitchBoost does one job: take your PowerPoint, keep the content, rebuild the design in your brand, and hand back an editable file.",
    "verdict": "Pick SlideSpeak if you want one subscription that also writes new decks, summarizes documents and makes videos. Pick PitchBoost if the deck already exists and the job is to make it look right in your brand without touching a number: the rebuild is slide for slide, the brand comes off your website, and the free plan gives you a full deck to judge by rather than a credit balance.",
    "competitorSummary": "SlideSpeak is an AI presentation platform that generates decks from prompts and documents, summarizes and chats with files, and, on paid plans, enhances an uploaded deck by aligning elements, applying a brand kit and redesigning layouts. Credits drive everything: 100 at sign-up on the free plan, 1,000 a month on Premium, 2,500 on Premium Plus, with top-ups from $10.",
    "pitchboostPricing": "Free plan. Starter $9/mo. Pro $29/mo. Business $79/mo.",
    "competitorPricing": "Free: 100 credits once (about 3 presentations). Premium from $29/mo. Premium Plus from $34/mo. Custom template add-on $129. Credit packs from $10 for 500.",
    "specs": [
      {
        "label": "Free plan",
        "pitchboost": "150 credits a month (1 deck), 10-slide cap, small badge",
        "competitor": "100 credits at sign-up, no refill; 50MB file limit"
      },
      {
        "label": "First paid tier",
        "pitchboost": "Starter, $9/mo: 800 credits, 25 slides, no badge",
        "competitor": "Premium, from $29/mo: 1,000 credits a month, PDF and PPT export"
      },
      {
        "label": "Badge removal",
        "pitchboost": "Starter and up, every deck; or $12 per deck",
        "competitor": "Not stated on the pricing page"
      },
      {
        "label": "Upload an existing deck and rebuild it",
        "pitchboost": "Yes, from .pptx, one slide per source slide",
        "competitor": "Yes: the AI enhancer realigns, restyles and applies a brand kit to an upload"
      },
      {
        "label": "Brand from your website",
        "pitchboost": "Yes, logo, colours and tone pulled from your site",
        "competitor": "Brand kit uploaded by hand; branded presentations on Premium Plus"
      },
      {
        "label": "Fact check against your own material",
        "pitchboost": "Yes, invented figures are removed before you see the deck",
        "competitor": "No"
      },
      {
        "label": "PowerPoint export",
        "pitchboost": "Every plan; editable text boxes on paid plans",
        "competitor": "Paid plans (PDF and PPT); limited on Free"
      },
      {
        "label": "Viewer analytics",
        "pitchboost": "Basic on Free, full on Pro",
        "competitor": "Shareable links; no per-viewer analytics listed"
      },
      {
        "label": "API and MCP for AI assistants",
        "pitchboost": "Pro; a no-account sample tool for ChatGPT and Claude",
        "competitor": "API available for developers"
      }
    ],
    "updated": "2026-09-19",
    "pricingUrl": "https://slidespeak.co/pricing",
    "altSlug": "slidespeak",
    "family": "redesign",
    "features": [
      {
        "label": "Redesign an uploaded PowerPoint",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "One rebuilt slide per source slide",
        "pitchboost": true,
        "competitor": "Enhancer works within the existing slides"
      },
      {
        "label": "Brand captured from your website",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Numbers checked against the source file",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Editable PowerPoint export",
        "pitchboost": true,
        "competitor": "Paid plans"
      },
      {
        "label": "Generates new decks from a brief",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "Summarize and chat with documents",
        "pitchboost": false,
        "competitor": true
      },
      {
        "label": "AI video from slides",
        "pitchboost": false,
        "competitor": true
      },
      {
        "label": "Free plan",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "Works from ChatGPT or Claude",
        "pitchboost": true,
        "competitor": false
      }
    ],
    "keyDifferences": [
      {
        "title": "Enhance in place, or rebuild slide for slide",
        "body": "SlideSpeak's enhancer improves the slides you upload: alignment, styling, a brand kit applied on top. PitchBoost reads what each slide says (text, chart values, tables, SmartArt) and rebuilds the design from that, one new slide per source slide, so a wall of bullets comes back as a layout rather than a tidier wall of bullets."
      },
      {
        "title": "Where the brand comes from",
        "body": "SlideSpeak wants a brand kit you assemble by hand, and branded presentations sit on the Premium Plus tier. PitchBoost reads your website first: logo, colours and typography come from the site, and you review the capture before anything generates. There is nothing to upload except the deck."
      },
      {
        "title": "Credits versus a deck",
        "body": "SlideSpeak's free plan is 100 credits at sign-up, roughly three presentations, then nothing until you pay. PitchBoost's free plan refills monthly and is sized for one full deck of up to 10 slides, so the thing you evaluate is your own deck, rebuilt. Starter at $9 is the first paid tier against SlideSpeak's $29."
      }
    ],
    "pitchboostBestFor": [
      "Anyone with an existing deck that needs to look right in their brand",
      "Sales teams and founders who send decks to specific prospects",
      "Teams that want the PowerPoint back, editable",
      "People who found us through ChatGPT or Claude and want to hand the file over there"
    ],
    "competitorBestFor": [
      "Teams that want one tool for decks, document summaries and chat",
      "Making AI videos from slides",
      "Generating many new decks a month on a credit budget",
      "Enterprises that need SSO and custom templates"
    ],
    "faqs": [
      {
        "q": "Can SlideSpeak redesign a PowerPoint I already have?",
        "a": "Yes. Its AI enhancer takes an uploaded deck and realigns elements, restyles them and applies a brand kit. It works within your existing slides rather than rebuilding them, and export to PPT is a paid feature."
      },
      {
        "q": "Does PitchBoost keep my content when it redesigns a deck?",
        "a": "Yes. Every fact, figure and name is carried over, chart values and tables included, and a fidelity check flags anything it could not source in your file rather than inventing a replacement. The layout, typography and colours change; the story does not."
      },
      {
        "q": "Which is cheaper for a single deck redesign?",
        "a": "PitchBoost's free plan rebuilds a deck of up to 10 slides with a small badge; Starter at $9 a month rebuilds up to 25 slides with no badge and can be cancelled after one month. SlideSpeak's free credits cover about three presentations and PPT export needs Premium at $29 a month."
      },
      {
        "q": "Does either tool pull my brand from my website?",
        "a": "PitchBoost does: it reads your logo, colours and type from your site before generating. SlideSpeak uses a brand kit you build by hand, with branded presentations on its Premium Plus plan."
      }
    ],
    "ctaHeadline": "Bring us the deck. Leave with the deck you meant."
  },
  {
    "slug": "pitchboost-vs-alai",
    "name": "Alai",
    "metaTitle": "PitchBoost vs Alai (2026): Redesign an Existing Deck, Prices and Free Plans Compared",
    "metaDescription": "Alai generates layout options per slide and has a free prettify tool; PitchBoost rebuilds the whole deck in your brand from your website with every number checked. Free plans, prices and exports compared, checked September 2026.",
    "heroHeadline": "PitchBoost vs Alai: layout options per slide, or the whole deck rebuilt in your brand",
    "heroSubhead": "Alai is a fast AI slide maker with a free deck prettifier and a generous free tier. PitchBoost starts from the deck you already have, captures your brand from your website, rebuilds every slide one to one, and checks the numbers on the way through.",
    "verdict": "Alai is a good pick for quick, good-looking slides from a prompt and for trying a redesign of a small deck for free. PitchBoost is the pick when the deck matters: it keeps every figure, pulls the brand from your site instead of a theme picker, and gives the PowerPoint back editable. On price, Alai's paid plans start at $20 and PitchBoost's at $9.",
    "competitorSummary": "Alai is an AI presentation tool that generates slides from prompts, offers several layout options for each slide, and lets you redesign an existing deck while keeping the content as written. The free plan allows unlimited presentations with a credit allowance, up to 10 AI slides per prompt, PDF and PPT export, and a watermark that only paid plans remove. A free prettify-your-deck tool sits on its site.",
    "pitchboostPricing": "Free plan. Starter $9/mo. Pro $29/mo. Business $79/mo.",
    "competitorPricing": "Free: $0, unlimited presentations with a credit allowance, watermark. Plus $20/mo. Pro $30/mo. Ultra $80/mo.",
    "specs": [
      {
        "label": "Free plan",
        "pitchboost": "150 credits a month (1 deck), 10-slide cap, small badge",
        "competitor": "Unlimited presentations within a credit allowance, 10 AI slides per prompt, watermark"
      },
      {
        "label": "First paid tier",
        "pitchboost": "Starter, $9/mo: 800 credits, 25 slides, no badge",
        "competitor": "Plus, $20/mo: watermark off, priority access to elements and themes"
      },
      {
        "label": "Badge removal",
        "pitchboost": "Starter and up, every deck; or $12 per deck",
        "competitor": "Plus and up"
      },
      {
        "label": "Upload an existing deck and rebuild it",
        "pitchboost": "Yes, from .pptx, one slide per source slide",
        "competitor": "Yes; several layout options per slide, content kept as written"
      },
      {
        "label": "Brand from your website",
        "pitchboost": "Yes, logo, colours and tone pulled from your site",
        "competitor": "Themes; no website capture"
      },
      {
        "label": "Fact check against your own material",
        "pitchboost": "Yes, invented figures are removed before you see the deck",
        "competitor": "No"
      },
      {
        "label": "PowerPoint export",
        "pitchboost": "Every plan; editable text boxes on paid plans",
        "competitor": "Every plan (PDF and PPT)"
      },
      {
        "label": "Viewer analytics",
        "pitchboost": "Basic on Free, full on Pro",
        "competitor": "None listed"
      },
      {
        "label": "API and MCP for AI assistants",
        "pitchboost": "Pro; a no-account sample tool for ChatGPT and Claude",
        "competitor": "None listed"
      }
    ],
    "updated": "2026-09-19",
    "pricingUrl": "https://getalai.com/pricing",
    "altSlug": "alai",
    "family": "redesign",
    "features": [
      {
        "label": "Redesign an uploaded PowerPoint",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "Several layout options per slide",
        "pitchboost": false,
        "competitor": true
      },
      {
        "label": "Brand captured from your website",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Numbers checked against the source file",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Editable PowerPoint export on the free plan",
        "pitchboost": "Badge on Free",
        "competitor": "Watermark on Free"
      },
      {
        "label": "Free no-sign-up redesign preview",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "Viewer analytics on shared links",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Personalised decks for a named prospect",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Works from ChatGPT or Claude",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Free plan",
        "pitchboost": true,
        "competitor": true
      }
    ],
    "keyDifferences": [
      {
        "title": "Options per slide versus a finished deck",
        "body": "Alai's approach is to hand you several layouts per slide and let you pick. PitchBoost makes the call for the whole deck at once so it reads as one design, then lets you edit any slide with AI afterwards. If you enjoy choosing layouts, Alai is more fun; if you want the deck done, PitchBoost is faster."
      },
      {
        "title": "A theme, or your actual brand",
        "body": "Alai applies a theme. PitchBoost reads your website for the logo, the colours and the type before it starts, and you approve the capture. For a deck going to a client, the difference is whether it looks like your company or like a nice template."
      },
      {
        "title": "What happens to the numbers",
        "body": "Both tools say they keep your text. PitchBoost also checks every figure against the file it came from and flags anything it cannot source, which matters most on the data-heavy slides a redesign is most likely to reshape."
      }
    ],
    "pitchboostBestFor": [
      "Decks going to a client, investor or prospect",
      "Teams that want the brand pulled from the website, not a theme",
      "Data-heavy decks where the numbers must survive",
      "People who want the editable PowerPoint back"
    ],
    "competitorBestFor": [
      "Quick slides from a prompt with several layout choices",
      "Students and personal projects on the free plan",
      "Trying a redesign of a small deck for free",
      "Anyone who prefers picking layouts slide by slide"
    ],
    "faqs": [
      {
        "q": "Does Alai redesign an existing PowerPoint?",
        "a": "Yes. You upload the deck and Alai generates layout options for each slide using its themes while keeping the content as written. Its free tier carries a watermark; Plus at $20 a month removes it."
      },
      {
        "q": "Is there a free way to see what PitchBoost would do to my deck?",
        "a": "Yes. The free redesign preview on pitchboost.ai takes a .pptx and returns your title slide and your busiest content slide redesigned, with no account. The full deck, in your brand, needs a free account."
      },
      {
        "q": "Which is cheaper?",
        "a": "Both have free plans. PitchBoost's first paid tier is Starter at $9 a month (800 credits, 25-slide decks, no badge); Alai's is Plus at $20 a month. PitchBoost Pro is $29 against Alai Pro at $30."
      },
      {
        "q": "Which keeps my brand better?",
        "a": "PitchBoost captures your brand from your website (logo, colours, typography) before generating. Alai applies themes, which you can customise by hand on paid plans."
      }
    ],
    "ctaHeadline": "See your own deck rebuilt in your brand."
  },
  {
    "slug": "pitchboost-vs-sharayeh",
    "name": "Sharayeh",
    "metaTitle": "PitchBoost vs Sharayeh (2026): AI PowerPoint Redesign Tools Compared, Prices Checked",
    "metaDescription": "Sharayeh redesigns a .pptx into three design variants and sells credits from $10; PitchBoost rebuilds the deck in your brand from your website with every number checked, from a free plan. Compared and priced, September 2026.",
    "heroHeadline": "PitchBoost vs Sharayeh: three variants of your deck, or one deck in your brand",
    "heroSubhead": "Sharayeh is a document tool with a no-sign-up PowerPoint redesigner that returns three styled versions of your file. PitchBoost rebuilds the deck in your own brand, one slide per source slide, and checks the figures before you see it.",
    "verdict": "Sharayeh is worth a look if you want a quick restyle of a deck and do not have a brand to apply: upload, pick one of three variants, buy credits to download. PitchBoost is the better choice when the deck represents a company: the brand comes from your website, the content is checked, the rebuild is one slide to one, and the free plan gives you a full deck without buying credits.",
    "competitorSummary": "Sharayeh is a document-conversion service (presentations from Word, PDFs and images) with an AI redesign tool for PowerPoint. It accepts .pptx and .ppt files, keeps the text as written, modernises layout, colours, fonts and spacing, and returns three design variants as editable .pptx. Previews need no sign-up; downloads use credits sold in packs.",
    "pitchboostPricing": "Free plan. Starter $9/mo. Pro $29/mo. Business $79/mo.",
    "competitorPricing": "Preview without sign-up. Credits: $10 for 3,000, $24 for 10,000; buying credits unlocks downloads and Pro features.",
    "specs": [
      {
        "label": "Free plan",
        "pitchboost": "150 credits a month (1 deck), 10-slide cap, small badge",
        "competitor": "Preview without sign-up; downloads need a credit pack"
      },
      {
        "label": "First paid tier",
        "pitchboost": "Starter, $9/mo: 800 credits, 25 slides, no badge",
        "competitor": "Standard pack, $10 once: 3,000 credits"
      },
      {
        "label": "Badge removal",
        "pitchboost": "Starter and up, every deck; or $12 per deck",
        "competitor": "Not stated"
      },
      {
        "label": "Upload an existing deck and rebuild it",
        "pitchboost": "Yes, from .pptx, one slide per source slide",
        "competitor": "Yes: .pptx or .ppt in, three design variants out"
      },
      {
        "label": "Brand from your website",
        "pitchboost": "Yes, logo, colours and tone pulled from your site",
        "competitor": "Brand kit on Pro; no website capture"
      },
      {
        "label": "Fact check against your own material",
        "pitchboost": "Yes, invented figures are removed before you see the deck",
        "competitor": "No; text kept as written"
      },
      {
        "label": "PowerPoint export",
        "pitchboost": "Every plan; editable text boxes on paid plans",
        "competitor": "Editable .pptx with credits"
      },
      {
        "label": "Viewer analytics",
        "pitchboost": "Basic on Free, full on Pro",
        "competitor": "None"
      },
      {
        "label": "API and MCP for AI assistants",
        "pitchboost": "Pro; a no-account sample tool for ChatGPT and Claude",
        "competitor": "None listed"
      }
    ],
    "updated": "2026-09-19",
    "pricingUrl": "https://sharayeh.com/en/pricing",
    "altSlug": "sharayeh",
    "family": "redesign",
    "features": [
      {
        "label": "Redesign an uploaded PowerPoint",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "Try without an account",
        "pitchboost": "Two-slide preview",
        "competitor": "Preview, download needs credits"
      },
      {
        "label": "Brand captured from your website",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Numbers checked against the source file",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Editable PowerPoint export",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "Several full-deck variants to choose from",
        "pitchboost": false,
        "competitor": true
      },
      {
        "label": "Viewer analytics on shared links",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Generates new decks from a brief",
        "pitchboost": true,
        "competitor": "From documents and images"
      },
      {
        "label": "Monthly plan with a free tier",
        "pitchboost": true,
        "competitor": "Credit packs"
      },
      {
        "label": "Works from ChatGPT or Claude",
        "pitchboost": true,
        "competitor": false
      }
    ],
    "keyDifferences": [
      {
        "title": "Restyle versus rebuild",
        "body": "Sharayeh keeps your slides and restyles them: new colours, fonts, spacing, image placement, in three variants. PitchBoost reads the content and rebuilds each slide as a new layout for what it says, which is what fixes a slide that was a wall of text rather than making the wall prettier."
      },
      {
        "title": "Whose brand",
        "body": "Sharayeh's variants are palettes; a brand kit is a Pro feature you set up. PitchBoost starts by reading your website and shows you the captured logo, colours and type before it generates, so the first draft is already yours."
      },
      {
        "title": "Credits versus a plan",
        "body": "Sharayeh sells credit packs from $10 and gates downloads behind them. PitchBoost's free plan includes a full deck a month with a small badge, and Starter at $9 a month removes the badge and rebuilds up to 25 slides; cancel after a month if it was a one-off."
      }
    ],
    "pitchboostBestFor": [
      "Decks that need to carry a real brand",
      "Sales and investor decks where the figures matter",
      "Teams that want analytics on the shared link",
      "Anyone who wants the whole deck rebuilt, not restyled"
    ],
    "competitorBestFor": [
      "A fast restyle with a few looks to pick from",
      "Converting Word, PDF and images into slides",
      "Occasional use on a credit pack rather than a subscription",
      "Decks with no company brand to apply"
    ],
    "faqs": [
      {
        "q": "Does Sharayeh need an account to redesign a PowerPoint?",
        "a": "You can preview a redesign without signing up. Downloading the editable .pptx uses credits, sold in packs from $10."
      },
      {
        "q": "Does PitchBoost also have a no-sign-up preview?",
        "a": "Yes. The free redesign preview returns two of your slides rebuilt, with no account. The whole deck in your brand needs a free account, and there is nothing to buy to download it."
      },
      {
        "q": "Which keeps my content more faithfully?",
        "a": "Both keep your text. PitchBoost also checks every number against the file it came from and flags anything it could not source, which Sharayeh does not do."
      },
      {
        "q": "What about very large files?",
        "a": "Sharayeh takes files up to 30MB free and 300MB on Pro. PitchBoost's app has no fixed file limit; the free preview tool on pitchboost.ai caps at 4MB."
      }
    ],
    "ctaHeadline": "Your deck, in your brand, checked."
  },
  {
    "slug": "pitchboost-vs-plus-ai",
    "name": "Plus AI",
    "metaTitle": "PitchBoost vs Plus AI (2026): Redesign Inside Google Slides or Rebuild the Deck? Prices Compared",
    "metaDescription": "Plus AI is an add-on that rewrites and remixes slides inside Google Slides and PowerPoint from $15 a month; PitchBoost rebuilds an uploaded deck in your brand from your website with every number checked, from a free plan. Compared, September 2026.",
    "heroHeadline": "PitchBoost vs Plus AI: an add-on in your editor, or a rebuild of the whole deck",
    "heroSubhead": "Plus AI lives inside Google Slides and PowerPoint and improves the deck you have open, slide by slide. PitchBoost takes the file, rebuilds every slide in your brand, and hands back an editable PowerPoint and a shareable link.",
    "verdict": "Choose Plus AI if you live in Google Slides or PowerPoint and want AI help on the slide you are editing right now: rewrite, remix, insert. Choose PitchBoost when the whole deck needs to change at once: it reads the file, captures your brand from your website, rebuilds slide for slide, checks the numbers, and costs less to start ($9 Starter against $15 Basic, with a free plan Plus AI does not offer beyond a 7-day trial).",
    "competitorSummary": "Plus AI is an AI add-on for Google Slides and Microsoft PowerPoint. It generates new presentations, rewrites and remixes existing slides, and inserts single slides, all inside the editor you already use. Plans are per user from $15 a month (or $10 a month billed annually) with a 7-day trial; team branding (logo, colours, fonts) arrives on the Team plan at $40 a month.",
    "pitchboostPricing": "Free plan. Starter $9/mo. Pro $29/mo. Business $79/mo.",
    "competitorPricing": "7-day trial. Basic $15/user/mo ($10 annual). Pro $25/user/mo ($20 annual). Team $40/user/mo ($30 annual). Max $240/user/mo ($200 annual).",
    "specs": [
      {
        "label": "Free plan",
        "pitchboost": "150 credits a month (1 deck), 10-slide cap, small badge",
        "competitor": "None; 7-day trial with 1,000 credits"
      },
      {
        "label": "First paid tier",
        "pitchboost": "Starter, $9/mo: 800 credits, 25 slides, no badge",
        "competitor": "Basic, $15/user/mo ($10 annual): 1,500 credits, rewrite and remix"
      },
      {
        "label": "Badge removal",
        "pitchboost": "Starter and up, every deck; or $12 per deck",
        "competitor": "Not applicable; works in your own file"
      },
      {
        "label": "Upload an existing deck and rebuild it",
        "pitchboost": "Yes, from .pptx, one slide per source slide",
        "competitor": "Remixes and rewrites slides inside the open deck; no whole-deck rebuild"
      },
      {
        "label": "Brand from your website",
        "pitchboost": "Yes, logo, colours and tone pulled from your site",
        "competitor": "Team plan branding set by hand"
      },
      {
        "label": "Fact check against your own material",
        "pitchboost": "Yes, invented figures are removed before you see the deck",
        "competitor": "No"
      },
      {
        "label": "PowerPoint export",
        "pitchboost": "Every plan; editable text boxes on paid plans",
        "competitor": "Native: it edits the PowerPoint or Google Slides file directly"
      },
      {
        "label": "Viewer analytics",
        "pitchboost": "Basic on Free, full on Pro",
        "competitor": "None"
      },
      {
        "label": "API and MCP for AI assistants",
        "pitchboost": "Pro; a no-account sample tool for ChatGPT and Claude",
        "competitor": "None listed"
      }
    ],
    "updated": "2026-09-19",
    "pricingUrl": "https://plusai.com/pricing",
    "altSlug": "plus-ai",
    "family": "redesign",
    "features": [
      {
        "label": "Works inside Google Slides",
        "pitchboost": false,
        "competitor": true
      },
      {
        "label": "Works inside PowerPoint",
        "pitchboost": "Import and export .pptx",
        "competitor": true
      },
      {
        "label": "Rebuild the whole deck at once",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Rewrite or remix one slide at a time",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "Brand captured from your website",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Numbers checked against the source file",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Shareable link with viewer analytics",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Free plan",
        "pitchboost": true,
        "competitor": "7-day trial"
      },
      {
        "label": "Per-user pricing",
        "pitchboost": "Per workspace",
        "competitor": true
      },
      {
        "label": "Works from ChatGPT or Claude",
        "pitchboost": true,
        "competitor": false
      }
    ],
    "keyDifferences": [
      {
        "title": "Inside the editor, or on the whole file",
        "body": "Plus AI's strength is that nothing leaves Google Slides or PowerPoint: you select a slide, ask for a rewrite or a remix, and keep working. PitchBoost is the opposite shape: give it the file, and every slide comes back rebuilt in one design, with the PowerPoint returned for editing."
      },
      {
        "title": "Branding by hand, or from the website",
        "body": "Plus AI's branding (logo, colours, fonts) is a Team-plan feature you configure. PitchBoost reads it from your website on every plan, including the free one, and shows you the capture before generating."
      },
      {
        "title": "Trial versus a free plan, and per-user pricing",
        "body": "Plus AI has no free plan, only a 7-day trial, and charges per user from $15 a month. PitchBoost has a permanent free plan sized for one deck a month and charges per workspace from $9."
      }
    ],
    "pitchboostBestFor": [
      "A deck that needs to change all at once, in a real brand",
      "Sending decks to prospects with analytics on who opened them",
      "Small teams that do not want per-seat pricing",
      "Anyone arriving with a file rather than an open editor"
    ],
    "competitorBestFor": [
      "People who work all day in Google Slides or PowerPoint",
      "Slide-by-slide rewrites and remixes while editing",
      "Teams standardising on one add-on with shared presets",
      "Inserting a single AI slide into an existing deck"
    ],
    "faqs": [
      {
        "q": "Can Plus AI redesign my whole PowerPoint?",
        "a": "Plus AI rewrites and remixes slides inside the deck you have open and can insert new ones. It does not take a file and rebuild every slide as one new design; that is what PitchBoost does."
      },
      {
        "q": "Can I edit a PitchBoost deck in PowerPoint afterwards?",
        "a": "Yes. PitchBoost exports an editable .pptx on every plan, with editable text boxes on paid plans, so you can keep working in PowerPoint, Google Slides or Keynote."
      },
      {
        "q": "Which is cheaper?",
        "a": "PitchBoost has a free plan and starts at $9 a month per workspace. Plus AI has a 7-day trial and starts at $15 per user a month, or $10 billed annually."
      },
      {
        "q": "Does either work from ChatGPT?",
        "a": "PitchBoost has a ChatGPT app and a Claude connector, so you can hand a deck over from inside either assistant. Plus AI runs as an add-on inside Google Slides and PowerPoint."
      }
    ],
    "ctaHeadline": "Give us the file. Get the deck back."
  },
  {
    "slug": "pitchboost-vs-perceptis",
    "name": "Perceptis",
    "metaTitle": "PitchBoost vs Perceptis (2026): Consulting-Style Slides vs a Full Deck Rebuild, Prices Compared",
    "metaDescription": "Perceptis generates consulting-style PowerPoint slides and unlocks upload-to-edit on its $129 Pro plan; PitchBoost rebuilds an uploaded deck in your brand from your website on every plan, free included. Compared and priced, September 2026.",
    "heroHeadline": "PitchBoost vs Perceptis: consulting slide layouts, or your deck rebuilt in your brand",
    "heroSubhead": "Perceptis builds McKinsey-style slides natively in PowerPoint from a slide library and charges by slides per month. PitchBoost starts from the deck you already have, rebuilds it in your brand from your website, and gives the file back editable, from a free plan.",
    "verdict": "Perceptis suits consultants who want native PowerPoint slides in a consulting idiom (Gantt charts, maps, framework layouts) and are happy to pay $129 a month for the upload-to-edit feature. PitchBoost is for everyone else with an existing deck: the redesign of an upload is on every plan including the free one, the brand comes from your website, the numbers are checked, and Starter is $9.",
    "competitorSummary": "Perceptis is an AI slide generator aimed at consulting and business slides: single and multi-slide generation from a library of 50 or more professional layouts, complex visuals like maps and Gantt charts, and PowerPoint-native export with real charts, tables and shapes. Plans are priced by slides per month: Free (10), Starter $29 (50), Pro $129 (100, plus upload-to-edit and one corporate theme).",
    "pitchboostPricing": "Free plan. Starter $9/mo. Pro $29/mo. Business $79/mo.",
    "competitorPricing": "Free: 10 slides a month. Starter $29/mo: 50 slides, remove Perceptis branding. Pro $129/mo: 100 slides, upload-to-edit, one corporate theme.",
    "specs": [
      {
        "label": "Free plan",
        "pitchboost": "150 credits a month (1 deck), 10-slide cap, small badge",
        "competitor": "10 slides a month, Perceptis branding"
      },
      {
        "label": "First paid tier",
        "pitchboost": "Starter, $9/mo: 800 credits, 25 slides, no badge",
        "competitor": "Starter, $29/mo: 50 slides a month, branding removed"
      },
      {
        "label": "Badge removal",
        "pitchboost": "Starter and up, every deck; or $12 per deck",
        "competitor": "Starter and up"
      },
      {
        "label": "Upload an existing deck and rebuild it",
        "pitchboost": "Yes, from .pptx, one slide per source slide, every plan",
        "competitor": "Upload-to-edit on Pro ($129/mo) only"
      },
      {
        "label": "Brand from your website",
        "pitchboost": "Yes, logo, colours and tone pulled from your site",
        "competitor": "One corporate theme on Pro"
      },
      {
        "label": "Fact check against your own material",
        "pitchboost": "Yes, invented figures are removed before you see the deck",
        "competitor": "No"
      },
      {
        "label": "PowerPoint export",
        "pitchboost": "Every plan; editable text boxes on paid plans",
        "competitor": "Every plan; native charts, tables and shapes"
      },
      {
        "label": "Viewer analytics",
        "pitchboost": "Basic on Free, full on Pro",
        "competitor": "None"
      },
      {
        "label": "API and MCP for AI assistants",
        "pitchboost": "Pro; a no-account sample tool for ChatGPT and Claude",
        "competitor": "None listed"
      }
    ],
    "updated": "2026-09-19",
    "pricingUrl": "https://perceptis.ai/pricing",
    "altSlug": "perceptis",
    "family": "redesign",
    "features": [
      {
        "label": "Redesign an uploaded PowerPoint",
        "pitchboost": "Every plan",
        "competitor": "Pro plan only"
      },
      {
        "label": "Consulting-style layout library",
        "pitchboost": false,
        "competitor": true
      },
      {
        "label": "Native PowerPoint charts and shapes",
        "pitchboost": "Editable text boxes; charts as images",
        "competitor": true
      },
      {
        "label": "Brand captured from your website",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Numbers checked against the source file",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Shareable link with viewer analytics",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Free plan",
        "pitchboost": true,
        "competitor": true
      },
      {
        "label": "Personalised decks for a named prospect",
        "pitchboost": true,
        "competitor": false
      },
      {
        "label": "Maps and Gantt charts",
        "pitchboost": false,
        "competitor": true
      },
      {
        "label": "Works from ChatGPT or Claude",
        "pitchboost": true,
        "competitor": false
      }
    ],
    "keyDifferences": [
      {
        "title": "Who gets to upload a deck",
        "body": "Perceptis puts upload-to-edit on its Pro plan at $129 a month; Free and Starter generate new slides only. PitchBoost's whole reason to exist is the upload: every plan, including the free one, takes a .pptx and rebuilds it."
      },
      {
        "title": "Consulting idiom, or your idiom",
        "body": "Perceptis is strongest at the consulting look: framework slides, Gantt charts, maps, native PowerPoint objects. PitchBoost rebuilds in your brand, pulled from your website, which is what a sales, investor or client deck usually needs to look like."
      },
      {
        "title": "Slides per month, or credits",
        "body": "Perceptis counts slides: 10 free, 50 for $29, 100 for $129. PitchBoost counts decks: one free deck of up to 10 slides a month, then 800 credits (about seven decks of up to 25 slides) for $9."
      }
    ],
    "pitchboostBestFor": [
      "Anyone with an existing deck to rebuild, on any budget",
      "Decks that must carry a company's real brand",
      "Sales, investor and client decks with figures to protect",
      "Teams that want a shareable link with analytics"
    ],
    "competitorBestFor": [
      "Consultants who want the consulting slide idiom",
      "Native PowerPoint charts, maps and Gantt charts",
      "Building new slides from a layout library",
      "Teams already paying for a Pro seat who need upload-to-edit"
    ],
    "faqs": [
      {
        "q": "Can Perceptis redesign a PowerPoint I upload?",
        "a": "On its Pro plan at $129 a month, yes (upload-to-edit with AI). The Free and Starter plans generate new slides only."
      },
      {
        "q": "Does PitchBoost export native PowerPoint charts?",
        "a": "PitchBoost exports an editable .pptx with editable text boxes on paid plans; charts and visuals are rendered as images. Perceptis exports native charts, tables and shapes, which is a real advantage if you rebuild charts by hand in PowerPoint."
      },
      {
        "q": "Which is cheaper to redesign one deck?",
        "a": "PitchBoost: free for a deck of up to 10 slides with a small badge, or $9 for Starter with no badge and 25-slide decks. Perceptis: the upload feature starts at $129 a month."
      },
      {
        "q": "Do both keep my brand?",
        "a": "PitchBoost captures it from your website on every plan. Perceptis includes one corporate theme on Pro."
      }
    ],
    "ctaHeadline": "The upload is the whole point. Try it free."
  },
];

export function getCompetitor(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}
