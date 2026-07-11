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
}

export const COMPETITORS: Competitor[] = [
  {
    slug: "pitchboost-vs-gamma",
    name: "Gamma",
    metaTitle: "PitchBoost vs Gamma: Best Gamma Alternative for Sales Teams (2025)",
    metaDescription: "Looking for a Gamma alternative built for sales decks and proposals? See how PitchBoost compares to Gamma for AI-generated pitch decks, prospect personalization, and proposal workflows.",
    heroHeadline: "PitchBoost vs Gamma: The Better Alternative for Sales Decks and Proposals",
    heroSubhead: "Gamma is great for general AI presentations. PitchBoost is purpose-built for pitch decks, proposals, and sales materials — personalized for the specific prospect in the room.",
    verdict: "Gamma is a solid tool for generating fast general-purpose presentations and internal docs. But if your goal is to create a tailored pitch deck or proposal for a specific client or prospect, PitchBoost is the purpose-built alternative — with a workflow designed entirely around winning deals, not making slides.",
    competitorSummary: "Gamma is an AI presentation and document tool that generates card-based visual content quickly. It's popular for internal presentations, marketing content, and fast first drafts. It supports PDF/PPTX export, shareable links, and basic analytics on paid plans.",
    pitchboostPricing: "Free plan available. Pro: $29/mo. Business: $79/mo.",
    competitorPricing: "Free plan available. Plus: $9/seat/mo. Pro tier available.",
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
        body: "Gamma generates presentations — but it doesn't know who you're pitching or why. PitchBoost is built around the sales workflow: you input your credentials and the prospect's context, and the output is a deck tailored to that specific opportunity. That difference shows up in every line of copy, not just the layout.",
      },
      {
        title: "Prospect personalization vs. generic content",
        body: "One of the biggest reasons deals stall is generic materials that could have been sent to anyone. PitchBoost pulls your existing credentials and maps them to the specific prospect's situation automatically. Gamma generates from prompts — which still requires you to manually tailor everything afterward.",
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
        a: "Yes — PitchBoost is purpose-built for sales teams who need personalized pitch decks and proposals, not general presentations. If your primary use case is winning deals rather than internal communication, PitchBoost is the more focused tool.",
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
        a: "Not natively. Gamma generates from prompts, so you'd need to manually tailor the content for each prospect. PitchBoost is built around prospect-specific deck generation — inputting deal context is part of the core workflow.",
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
    heroSubhead: "Beautiful.ai is built for polished brand presentations. PitchBoost is built for winning deals — generating prospect-specific pitch decks and proposals without a designer or a premium team plan.",
    verdict: "Beautiful.ai produces visually consistent, polished presentations with strong design guardrails. But the workflow is still largely manual — you're working from templates, not generating from deal context. For teams that need to produce personalized pitch decks and proposals quickly without a design team, PitchBoost is the more practical alternative.",
    competitorSummary: "Beautiful.ai is a presentation tool known for its Smart Slide technology, which automatically adjusts layouts as you add content. It's popular for brand-consistent business presentations, with strong team plan features for collaboration and brand controls.",
    pitchboostPricing: "Free plan available. Pro: $29/mo. Business: $79/mo.",
    competitorPricing: "Pro: $12/mo billed annually. Team: $40/user/mo billed annually.",
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
        body: "Beautiful.ai's AI helps you design slides more efficiently — it adjusts layouts and suggests formatting. PitchBoost generates the actual pitch deck content from your credentials and prospect context. That's a fundamentally different kind of help: one saves you design time, the other saves you the entire deck-building process.",
      },
      {
        title: "Team plan pricing adds up fast",
        body: "Beautiful.ai's Pro plan at $12/mo is individual-only. Team plans jump to $40/user/mo billed annually — a significant cost for small sales teams or agencies managing multiple clients. PitchBoost's Business plan at $79/mo covers teams without per-seat pricing that scales against you.",
      },
      {
        title: "Proposals built for the deal, not the brand",
        body: "Beautiful.ai excels at brand consistency. PitchBoost excels at deal relevance. For client-facing pitch decks and proposals where the content needs to speak directly to a specific prospect's situation, PitchBoost's personalization workflow produces materials that feel custom-built — because they are.",
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
        a: "Yes — PitchBoost is built specifically for small teams and solo operators who need professional pitch decks and proposals without a design budget. Unlike Beautiful.ai, there's no per-seat pricing that gets expensive as your team grows.",
      },
      {
        q: "Does Beautiful.ai generate pitch decks from deal context?",
        a: "No. Beautiful.ai helps you design slides more efficiently using Smart Slides and AI formatting assistance, but the content is still manual. PitchBoost generates pitch deck content from your existing credentials and prospect-specific context automatically.",
      },
      {
        q: "How does PitchBoost compare to Beautiful.ai on price?",
        a: "Beautiful.ai's individual Pro plan is $12/mo billed annually, but team features require the $40/user/mo plan. PitchBoost starts free and offers a full-featured Business plan at $79/mo for teams — no per-seat pricing.",
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
    heroSubhead: "Pitch is a polished collaboration workspace for presentation teams. PitchBoost is built for the moment you need a great deck for tomorrow's meeting — AI-generated, prospect-specific, and ready in under 60 seconds.",
    verdict: "Pitch is a well-designed presentation platform with strong collaboration, sharing, and workspace features. It's a good fit for teams managing multiple decks across a brand system. PitchBoost is the better alternative when the priority is generating a tailored, client-ready pitch deck or proposal as fast as possible — without managing a full presentation workspace.",
    competitorSummary: "Pitch is a presentation platform designed for collaborative teams. It offers AI presentation creation, templates, branded sharing links with analytics, and pitch rooms. It's well-regarded for its design quality and team workspace features.",
    pitchboostPricing: "Free plan available. Pro: $29/mo. Business: $79/mo.",
    competitorPricing: "Free plan available. Paid team plans based on plan and seat count.",
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
        body: "Pitch is built around a collaborative workspace — managing decks, teams, brands, and assets over time. PitchBoost is built around a single outcome: generating a great pitch deck for a specific opportunity, fast. If you don't need workspace management and just need the deck, PitchBoost removes that overhead entirely.",
      },
      {
        title: "AI credits vs. unlimited generation",
        body: "Pitch's AI features are credit-based, which means frequent users hit limits or need to manage usage carefully. PitchBoost is built around AI generation as the core workflow — not an add-on feature with a usage cap.",
      },
      {
        title: "Prospect personalization at the core",
        body: "Pitch decks built in Pitch start from templates and are customized manually. PitchBoost generates from your credentials and the prospect's context — so the first draft already speaks to their specific situation. For sales teams pitching multiple accounts, that difference compounds quickly.",
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
        a: "Yes — PitchBoost is purpose-built for small sales teams who need personalized pitch decks quickly, without the overhead of managing a full presentation workspace. It's a more focused alternative to Pitch for teams where speed and personalization matter most.",
      },
      {
        q: "How does PitchBoost's AI compare to Pitch's AI?",
        a: "Pitch uses AI as a credit-based feature for generating content within slides. PitchBoost is built AI-native from the ground up — the entire deck is generated from your credentials and prospect context, not added as an optional layer on top of a manual workflow.",
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
    pitchboostPricing: "Free plan available. Pro: $29/mo. Business: $79/mo.",
    competitorPricing: "Pro around $16/mo billed annually. Enterprise: custom.",
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
];

export function getCompetitor(slug: string): Competitor | undefined {
  return COMPETITORS.find((c) => c.slug === slug);
}
