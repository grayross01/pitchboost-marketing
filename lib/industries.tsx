import type { ReactNode } from "react";

export interface Industry {
  slug: string;
  navLabel: string;
  label: string;
  navGroup: "sales" | "services" | "verticals";
  icon: ReactNode;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  painPoints: { title: string; body: string }[];
  howItWorks: { step: string; title: string; body: string }[];
  outcomes: string[];
  whoItsFor: string[];
  faqs: { q: string; a: string }[];
  ctaHeadline: string;
  industryTerm: string;
  salesMaterials: { name: string; description: string }[];
  whatToInclude: string[];
}

export const INDUSTRIES: Industry[] = [
  // ── SALES & REVENUE ──────────────────────────────────────────────────────

  {
    slug: "b2b-sales",
    navLabel: "B2B Sales Teams",
    label: "B2B Sales Teams",
    navGroup: "sales",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    metaTitle: "B2B Sales Pitch Deck Software — Close More Deals | PitchBoost",
    metaDescription:
      "PitchBoost helps B2B sales teams generate personalized sales pitch decks for every prospect in under 60 seconds. Stop sending the same deck to every deal — win more with decks built around each buyer's specific pain points.",
    heroHeadline: "B2B sales pitch decks personalized for every prospect, in 60 seconds",
    heroSubhead:
      "Your reps know the prospect. PitchBoost builds the deck. Generate a tailored sales pitch for every deal — pulled from your product's capabilities and mapped to that buyer's specific pain points — before they even get on the call.",
    painPoints: [
      {
        title: "Every rep sends the same generic sales deck",
        body: "One-size-fits-all pitch decks tell buyers nothing about why your product is right for their specific situation. Reps know it. Prospects know it. And the win rate reflects it.",
      },
      {
        title: "Customizing decks takes hours reps don't have",
        body: "Every hour spent adjusting slide copy and swapping in logo screenshots is an hour not spent on discovery, follow-up, or closing. The math doesn't work.",
      },
      {
        title: "You have no visibility into what resonates with each buyer",
        body: "You send the sales deck and wait. You don't know if they opened it, which slides they spent time on, or whether they forwarded it to the VP who actually signs off.",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Upload your product's capabilities and positioning once",
        body: "Add your logo, brand colors, product features, case studies, and competitive differentiators. PitchBoost learns your offering and keeps it ready for every sales pitch.",
      },
      {
        step: "2",
        title: "Enter the prospect's company and their pain points",
        body: "Paste in their website URL or describe their business challenges. PitchBoost builds a sales deck that leads with the capabilities most relevant to that buyer — not a feature dump.",
      },
      {
        step: "3",
        title: "Share a tracked link and follow up with data",
        body: "Publish in one click and share a branded link. See exactly who opened the deck, which slides they spent the most time on, and when they viewed it — so every follow-up is perfectly timed.",
      },
    ],
    outcomes: [
      "Personalized sales pitch deck for every prospect in under 60 seconds",
      "Reps spend more time selling, less time formatting slides",
      "Sales managers see exactly which decks and which slides perform",
      "Consistent brand quality across the entire sales team",
      "Know which slides drove engagement before the follow-up call",
      "Close more deals with pitches that speak to each buyer's specific situation",
    ],
    whoItsFor: [
      "Account executives",
      "SDRs and BDRs",
      "Sales managers and VPs",
      "Revenue operations teams",
      "Enterprise sales teams",
      "Inside sales teams",
      "Field sales reps",
      "B2B SaaS sales teams",
    ],
    faqs: [
      {
        q: "How does PitchBoost personalize a sales pitch deck for each prospect?",
        a: "PitchBoost takes your uploaded product capabilities and maps them to the specific prospect you describe — their industry, company size, and pain points. The result is a sales pitch deck where every slide is relevant to that buyer, not a generic overview of everything you do.",
      },
      {
        q: "Can my whole sales team use the same PitchBoost account?",
        a: "Yes. Business plan accounts support team collaboration, so your entire sales org can generate personalized pitch decks from a shared set of brand assets and product content. Everyone pitches consistently, nobody starts from scratch.",
      },
      {
        q: "Is PitchBoost better than using a B2B sales pitch deck template?",
        a: "Sales pitch deck templates are a starting point — you still have to fill in the content for every prospect. PitchBoost writes the content for you, mapped to each buyer's specific situation. The result isn't a filled-in template; it's a sales pitch that reads like it was written for that prospect specifically. If you want sales pitch deck templates that actually close deals rather than just saving formatting time, PitchBoost is the better tool.",
      },
      {
        q: "Can I save my best-performing sales decks as reusable templates?",
        a: "Yes. On Pro and Business plans you can save any generated sales deck as a template. If a particular format performs well for enterprise deals or a specific vertical, lock it in and use it as a starting point — while still letting AI tailor the content for each new prospect.",
      },
      {
        q: "Can I track whether prospects have viewed my sales deck?",
        a: "Yes, on Pro and Business plans. You'll see who opened the deck, which slides they spent the most time on, and when they came back for a second look — so your follow-up timing is always right.",
      },
      {
        q: "Is PitchBoost a B2B sales deck template or an AI sales deck generator?",
        a: "It's both — and neither, exactly. PitchBoost isn't a static B2B sales deck template you fill out manually, and it isn't a generic AI tool that produces the same output every time. It generates a personalized sales presentation based on your company's specific capabilities and each prospect's specific situation — so every deck feels purpose-built, not recycled from your last deal.",
      },
      {
        q: "How do I explain our pricing to a prospect without losing the deal?",
        a: "The way you frame pricing matters as much as the number itself. PitchBoost helps you build a pricing narrative that connects your investment to the prospect's specific pain points, expected ROI, and the cost of not acting — shifting the conversation from 'that's expensive' to 'that makes sense.'",
      },
    ],
    ctaHeadline: "Stop sending the same sales deck to every prospect. Build a personalized B2B pitch for your next deal — free.",
    industryTerm: "sales deck",
    salesMaterials: [
      { name: "Sales pitch deck", description: "A slide-based presentation covering the problem, your solution, proof points, and next steps — typically 10–15 slides used in discovery calls or formal presentations." },
      { name: "Discovery deck", description: "A lighter format used to walk a prospect through key questions and your initial read on their situation — often sent ahead of a formal proposal to set the agenda." },
      { name: "One-pager / leave-behind", description: "A single-page summary of your solution designed to be shared with buying committee members who weren't in the original meeting." },
      { name: "Business case / ROI deck", description: "A financial justification document showing how your solution maps to revenue impact, cost reduction, or risk mitigation — used to justify budget to a CFO or procurement team." },
      { name: "Proposal document", description: "A formal written proposal covering scope, timeline, investment, and terms — often the document that gets forwarded to legal or procurement before a decision." },
    ],
    whatToInclude: [
      "The prospect's specific pain points mapped to your solution — not a generic feature list",
      "Relevant case studies from companies with similar challenges, team size, or industry",
      "Your differentiation from the alternatives they're likely evaluating",
      "A clear ROI or business case framed in terms they care about: revenue, cost, or risk",
      "Pricing context — not just a number, but why the investment makes sense relative to the problem",
      "A specific, low-friction next step that creates momentum without pressure",
      "Social proof: customer logos, quotes, or review ratings relevant to their industry or use case",
    ],
  },

  {
    slug: "saas",
    navLabel: "SaaS & Technology",
    label: "SaaS & Technology Companies",
    navGroup: "sales",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    metaTitle: "SaaS Pitch Deck Software — Win More Enterprise Deals | PitchBoost",
    metaDescription:
      "PitchBoost helps SaaS and technology companies generate tailored enterprise pitch decks for every buyer persona in under 60 seconds. Turn your platform's capabilities into a deck that speaks directly to each prospect's specific pain points.",
    heroHeadline: "SaaS pitch decks tailored to every enterprise buyer's situation",
    heroSubhead:
      "Enterprise buyers don't want a product overview — they want to see how your platform solves their specific problem. PitchBoost builds a tailored SaaS pitch deck for every prospect, from your product capabilities, in under 60 seconds.",
    painPoints: [
      {
        title: "One product deck for vastly different buyer personas",
        body: "The same SaaS pitch deck goes to a 10-person startup and a Fortune 500 procurement team. Neither feels like you built it for them — because you didn't.",
      },
      {
        title: "AEs spend more time building slides than running discovery calls",
        body: "Every hour an account executive spends tweaking a pitch deck is an hour not spent qualifying, demoing, or closing. It's one of the most expensive inefficiencies in enterprise sales.",
      },
      {
        title: "Generic SaaS pitches don't resonate with technical or executive buyers",
        body: "A CTO needs to see integration architecture. A CFO needs ROI. A VP of Sales needs workflow impact. The same deck can't speak to all three — but most teams try anyway.",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Upload your platform's capabilities and positioning",
        body: "Add your brand assets, product features, integration ecosystem, case studies, and competitive differentiators. PitchBoost learns your platform and keeps it ready for every enterprise pitch.",
      },
      {
        step: "2",
        title: "Describe the prospect and their use case",
        body: "Enter their company URL or describe the deal. PitchBoost generates a SaaS pitch deck that leads with the product capabilities most relevant to their business — tailored to their industry, company size, and the buyer persona you're pitching.",
      },
      {
        step: "3",
        title: "Share across the buying committee and track engagement",
        body: "Publish a branded link and share it with every stakeholder. See exactly who opens it, which slides the CTO versus the CFO spent time on, and who forwarded it — so you know where the deal really stands.",
      },
    ],
    outcomes: [
      "Tailored enterprise pitch deck for every prospect persona in 60 seconds",
      "AEs run more discovery calls and fewer slide-building sessions",
      "Track engagement across every stakeholder in the buying committee",
      "Consistent brand and messaging across the entire sales org",
      "Respond to RFPs and security reviews faster than competing vendors",
      "Close more deals by speaking to each buyer's actual business problem",
    ],
    whoItsFor: [
      "SaaS account executives",
      "Enterprise sales teams",
      "Sales engineers and SCs",
      "Product marketing teams",
      "Revenue operations",
      "Founder-led sales at early-stage startups",
      "Customer success teams pitching expansions",
      "Channel and partner sales teams",
    ],
    faqs: [
      {
        q: "Can PitchBoost handle technical SaaS pitches with complex product details?",
        a: "Yes. When you upload your product documentation, integration details, and technical differentiators, PitchBoost incorporates them naturally into the deck — leading with depth for technical buyers and ROI for business buyers, depending on the persona you're pitching.",
      },
      {
        q: "How does PitchBoost help with multi-stakeholder enterprise deals?",
        a: "You can generate separate pitch decks for each stakeholder — a technical deck for the CTO, a business case deck for the CFO, a workflow deck for the end-user champion. Each one pulls from the same product content but emphasizes what matters most to that buyer.",
      },
      {
        q: "Is PitchBoost better than a SaaS pitch deck template?",
        a: "SaaS pitch deck templates give you a blank structure you still need to fill in for every prospect. PitchBoost writes the content for you — mapped to the specific company, industry, and persona you're pitching. The result isn't a customized template; it's a deck that reads like it was built around that buyer's problem. For teams who want enterprise pitch deck templates that actually reflect each prospect's needs, PitchBoost is the better answer.",
      },
      {
        q: "Can I save pitch decks as templates for different verticals or use cases?",
        a: "Yes. If you have a format that works well for healthcare buyers, or for pitching your analytics module specifically, save it as a template. Your team can generate from that starting point and still get AI-tailored content for each new deal.",
      },
      {
        q: "Can my whole sales team use PitchBoost?",
        a: "Yes. Business plan accounts support team collaboration so AEs, SEs, and sales managers all work from the same brand assets and product content — generating consistent, personalized pitch decks for every enterprise prospect.",
      },
      {
        q: "Is there an AI pitch deck maker for SaaS companies?",
        a: "Yes — that's exactly what PitchBoost is built for. You upload your platform's capabilities, integration details, and customer case studies once. Then for each enterprise deal, you describe the prospect's company structure and specific challenges. PitchBoost generates a tailored SaaS sales deck that connects your product to their exact situation — in under 60 seconds. No SaaS pitch deck template to fill out manually, no starting from scratch for every deal.",
      },
      {
        q: "How do I present SaaS pricing to an enterprise buyer without losing them?",
        a: "Enterprise buyers don't evaluate SaaS pricing in isolation — they evaluate it against their current cost structure and expected ROI. PitchBoost helps you build a pricing slide that contextualizes your subscription cost in terms of efficiency gained, headcount avoided, or revenue impact — so the conversation shifts from sticker shock to justified investment.",
      },
    ],
    ctaHeadline: "Stop losing enterprise deals to generic product overviews. Generate a tailored SaaS pitch deck for your next buyer — free.",
    industryTerm: "sales deck",
    salesMaterials: [
      { name: "Enterprise pitch deck", description: "A solution-focused presentation for C-suite or VP-level buyers, centered on business outcomes rather than product features — typically used in formal evaluation processes." },
      { name: "Demo deck", description: "A slide walkthrough used during or after a product demo — covering use cases, workflow fit, and customer outcomes relevant to this specific buyer." },
      { name: "Business case / ROI deck", description: "A financial justification tool showing how your platform reduces cost, improves efficiency, or grows revenue — used to get budget approved by a CFO or procurement committee." },
      { name: "Security & compliance overview", description: "A one-pager or deck covering data handling, certifications (SOC 2, ISO 27001, GDPR), and infrastructure — required reading for enterprise security reviews." },
      { name: "Competitive comparison deck", description: "A side-by-side analysis showing how your platform stacks up against the alternatives the prospect is evaluating — used to anchor the buying decision in your favor." },
    ],
    whatToInclude: [
      "How your platform solves the specific workflow problem this buyer faces — not a general product tour",
      "Integration details relevant to their existing tech stack and current tools",
      "A business case or ROI calculation tied to their team size, volume, or current process cost",
      "Customer case studies from companies in the same industry or of similar scale",
      "Implementation timeline and onboarding process — enterprise buyers need to know what adoption actually looks like",
      "Security, compliance, and data handling details if they're enterprise or operate in a regulated industry",
      "Pricing narrative — not just a number, but how the cost maps to the value they'll realize",
    ],
  },

  {
    slug: "startups",
    navLabel: "Startups",
    label: "Startups",
    navGroup: "sales",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
    metaTitle: "Startup Pitch Deck Software — Look Enterprise-Grade on a Startup Budget | PitchBoost",
    metaDescription:
      "PitchBoost helps startups generate polished pitch decks for sales, partnerships, and investor meetings in under 60 seconds. Look professional and move fast — without a design team, an agency, or hours spent on slides.",
    heroHeadline: "Startup pitch decks that look enterprise-grade without the enterprise budget",
    heroSubhead:
      "Startups pitch investors, customers, and partners simultaneously — often with the same founder doing all three. PitchBoost generates a polished, branded pitch deck for any audience in under 60 seconds, so you spend time building the company, not building slides.",
    painPoints: [
      {
        title: "You're pitching investors, customers, and partners with the same deck",
        body: "A deck built to raise your Series A is a terrible sales tool. A deck built to close enterprise customers confuses angel investors. Most founders patch one deck to serve all three — and it shows.",
      },
      {
        title: "You don't have a design team and can't justify an agency",
        body: "Agencies charge $5,000–$15,000 for a pitch deck. Freelancers take two weeks. You need to pitch next Thursday. PitchBoost builds a professional, branded deck in under a minute.",
      },
      {
        title: "By the time you've customized the deck, the window has moved on",
        body: "Speed matters at the startup stage. A warm intro goes cold. An investor's attention shifts. Being able to tailor and send a deck the same day you get the meeting changes your hit rate.",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Upload your startup's story, product, and brand once",
        body: "Add your logo, brand colors, product overview, traction metrics, and key differentiators. PitchBoost learns your startup's narrative and keeps it ready for every pitch.",
      },
      {
        step: "2",
        title: "Describe who you're pitching and what they care about",
        body: "Pitching a Series A investor? A Fortune 500 pilot customer? A potential channel partner? PitchBoost generates a deck tailored to that audience's specific priorities — not a one-size-fits-all startup overview.",
      },
      {
        step: "3",
        title: "Share a polished branded link in minutes",
        body: "No PDF attachments. No \"let me send you the updated version.\" Share a live, interactive startup pitch deck and see exactly who viewed it and which slides they spent time on.",
      },
    ],
    outcomes: [
      "Polished pitch deck for any audience — investor, customer, or partner — in 60 seconds",
      "Professional, branded materials without a design team or agency",
      "Move faster than competing startups who are still building slides",
      "Separate tailored decks for fundraising, sales, and partnership pitches",
      "Track which investors and prospects actually engaged with your materials",
      "Look as polished as companies 10x your size",
    ],
    whoItsFor: [
      "Pre-seed and seed stage founders",
      "Series A and B startups",
      "Founder-led sales teams",
      "Early-stage enterprise sales reps",
      "Startup business development leads",
      "Bootstrapped SaaS companies",
      "Y Combinator and accelerator companies",
      "First-time founders building their first pitch",
    ],
    faqs: [
      {
        q: "Can I use PitchBoost for both fundraising and sales pitches?",
        a: "Yes, and this is actually one of PitchBoost's best use cases for startups. You can build separate decks for investor meetings and customer pitches from the same set of brand assets — each one tailored to what that audience cares about — without starting over each time.",
      },
      {
        q: "Is PitchBoost better than a startup pitch deck template?",
        a: "Startup pitch deck templates give you slides you still have to fill in. PitchBoost writes the content for you based on your specific startup's story, product, and traction — and tailors it to whoever you're pitching. The result is a startup pitch deck that actually reflects your company, not a generic template with your logo swapped in.",
      },
      {
        q: "How much does it cost compared to hiring a designer or agency?",
        a: "PitchBoost Pro is $29/month. Design agencies typically charge $5,000–$15,000 per deck. Freelancers charge $500–$2,000 and take days. PitchBoost generates a professional, branded deck in under 60 seconds and lets you update it as your startup evolves.",
      },
      {
        q: "Can I track whether investors have viewed my pitch deck?",
        a: "Yes, on Pro and Business plans. You'll see which investors opened your deck, which slides they spent the most time on, and whether they came back for a second look — so you know who's warm before you follow up.",
      },
      {
        q: "Can I save my best startup pitch deck as a template?",
        a: "Yes. Once you have a deck format that works well — for investor pitches, customer demos, or partner conversations — save it as a template. You can generate new tailored versions from that foundation without rebuilding from scratch each time.",
      },
      {
        q: "Is there an AI pitch deck maker for startups?",
        a: "Yes — PitchBoost is designed for exactly this. You input your startup's story, traction, product, and differentiators once. For each meeting — investor, customer, or partner — you describe who you're pitching and their specific situation. PitchBoost generates a tailored startup pitch deck in under 60 seconds, no startup pitch deck template required.",
      },
      {
        q: "How do I explain our pricing or business model to investors and customers in the same deck?",
        a: "You don't have to — that's the point. PitchBoost lets you generate separate decks for each audience from the same underlying assets. Your investor deck frames the business model around market opportunity and unit economics. Your customer deck frames pricing around value delivered to their specific situation. Same company, different rooms, different decks.",
      },
    ],
    ctaHeadline: "Ready to pitch investors, customers, and partners with a startup deck that actually reflects your traction?",
    industryTerm: "pitch deck",
    salesMaterials: [
      { name: "Investor pitch deck", description: "A 10–15 slide presentation covering problem, solution, market size, traction, team, and the ask — used in VC meetings, angel rounds, and accelerator applications." },
      { name: "Customer demo deck", description: "A solution-focused slide deck used during or after a product demo — tailored to the specific buyer's pain points and how your product addresses them." },
      { name: "Partnership deck", description: "A deck that frames your startup as a compelling partner for distribution, integration, or co-selling relationships — focused on mutual fit and shared upside." },
      { name: "One-pager / executive summary", description: "A single-page overview of your startup — market, solution, traction, and ask — used as a leave-behind or cold outreach follow-up." },
      { name: "Company narrative deck", description: "A longer-form storytelling deck used for PR, speaking submissions, or conference presentations — built around your founding story and vision." },
    ],
    whatToInclude: [
      "Your traction and proof points — numbers, milestones, and customer names that establish credibility",
      "Market opportunity sizing — TAM, SAM, and why now is the right moment",
      "Product differentiation — what you do that the incumbent or alternative doesn't",
      "Team credentials — why your team is the right one to build this company",
      "Competitive landscape — and why you win in the specific scenario you're targeting",
      "Funding ask and use of proceeds (investor decks) or value proposition and pricing (customer decks)",
      "Customer proof — quotes, case studies, or logos that reduce perceived risk",
    ],
  },

  {
    slug: "sponsorship-media",
    navLabel: "Sponsorship & Media Sales",
    label: "Sponsorship & Media Sales",
    navGroup: "sales",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>,
    metaTitle: "Sponsorship Pitch Deck Software — Close More Sponsorship Deals | PitchBoost",
    metaDescription:
      "PitchBoost helps media companies, event organizers, podcasters, and content creators generate compelling sponsorship pitch decks and media kits in under 60 seconds. Package your audience and close more sponsorship deals with materials that actually convert.",
    heroHeadline: "Sponsorship pitch decks that make brands say yes",
    heroSubhead:
      "Sponsors don't fund reach — they fund relevance. PitchBoost helps you build a sponsorship pitch deck that connects your audience to each brand's specific marketing goals, so every conversation starts from a position of fit instead of a pitch for attention.",
    painPoints: [
      {
        title: "Your sponsorship proposal looks outdated the moment you send it",
        body: "A static PDF media kit built once for all sponsors tells every brand they're one of many. Polished, tailored sponsorship decks tell a brand their audience is your audience.",
      },
      {
        title: "You're spending more time on the deck than on the relationship",
        body: "Customizing a sponsorship deck for every brand — different goals, different audience fits, different activation ideas — takes hours. That's time not spent on the phone closing.",
      },
      {
        title: "Generic sponsorship packages don't speak to each sponsor's actual goals",
        body: "A DTC brand optimizing for awareness has different needs than an enterprise software company building a sales pipeline. One sponsorship proposal can't do both jobs well.",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Upload your audience data, reach, and sponsorship packages",
        body: "Add your brand assets, audience demographics, engagement metrics, past sponsors, and package tiers. PitchBoost learns your media property and keeps it ready for every sponsor pitch.",
      },
      {
        step: "2",
        title: "Describe the brand you're pitching and their marketing goals",
        body: "Enter the brand's website or describe their campaign objectives. PitchBoost builds a sponsorship deck that leads with the audience segments and activation formats most relevant to that brand's specific goals.",
      },
      {
        step: "3",
        title: "Share a polished deck and track sponsor engagement",
        body: "Send a branded link instead of a PDF attachment. See exactly which sections the brand's marketing team reviewed and how long they spent — so you know what to lead with on the follow-up call.",
      },
    ],
    outcomes: [
      "Tailored sponsorship deck for every brand in under 60 seconds",
      "Close more sponsorship deals with pitches that speak to each brand's goals",
      "Respond to inbound sponsor inquiries the same day they come in",
      "Professional materials that reflect the quality of your audience",
      "Track which sponsors are engaged before you follow up",
      "Renew sponsors faster with updated decks that show year-over-year performance",
    ],
    whoItsFor: [
      "Event organizers and conference producers",
      "Podcasters and audio networks",
      "Newsletter publishers",
      "Sports teams and leagues",
      "Content creators and influencers",
      "Media companies and publishers",
      "Esports organizations",
      "Nonprofit and charity events seeking corporate sponsors",
    ],
    faqs: [
      {
        q: "Can I use PitchBoost to replace my existing media kit?",
        a: "PitchBoost doesn't just replace a static media kit — it generates tailored sponsorship proposals for each brand you pitch. Instead of one generic PDF sent to every sponsor, every brand gets a deck built around their specific marketing objectives and how your audience fits them.",
      },
      {
        q: "Is PitchBoost better than a sponsorship deck template?",
        a: "Sponsorship deck templates give you a format to fill in for every brand you pitch. PitchBoost writes the content for you — mapping your audience demographics and engagement data to each sponsor's specific goals. The result feels purpose-built for that brand, not adapted from a media kit template.",
      },
      {
        q: "Can I include audience data and performance metrics in the deck?",
        a: "Yes. Upload your audience demographics, engagement rates, past campaign performance, and any reach metrics when setting up your media property. PitchBoost incorporates them into every sponsorship pitch deck it generates.",
      },
      {
        q: "Can I track whether a brand's team has viewed my sponsorship deck?",
        a: "Yes, on Pro and Business plans. You'll see who on the brand's marketing team opened the deck, which sponsorship packages they spent time reviewing, and when they came back — so you follow up when engagement is highest.",
      },
      {
        q: "Is there an AI sponsorship proposal maker for media companies and creators?",
        a: "Yes — PitchBoost is built for exactly this. You upload your audience demographics, engagement data, and past campaign performance once. For each brand pitch, you describe the sponsor's marketing goals. PitchBoost generates a tailored sponsorship proposal in under 60 seconds that connects your audience to their specific objectives — no sponsorship deck template to manually customize for every brand.",
      },
      {
        q: "How do I make my media kit or sponsorship proposal stand out from the competition?",
        a: "Generic media kits list your numbers. Winning sponsorship proposals connect those numbers to what the brand is actually trying to achieve. PitchBoost builds sponsorship proposals that frame your audience in terms of the sponsor's specific campaign goals, brand fit, and expected activation ROI — so every pitch feels like it was written specifically for that brand.",
      },
    ],
    ctaHeadline: "Ready to send sponsorship pitch decks that connect your audience to each brand's goals — and close more deals?",
    industryTerm: "sponsorship proposal",
    salesMaterials: [
      { name: "Media kit", description: "A brand overview document covering your audience size, demographics, engagement rates, and content formats — typically the first thing a potential sponsor asks for." },
      { name: "Sponsorship proposal", description: "A tailored pitch connecting your audience and platform to a specific brand's marketing goals — with package options, activation ideas, and expected ROI." },
      { name: "Rate card", description: "A structured pricing document showing your sponsorship tiers, ad formats, and audience reach by package — used to anchor pricing conversations." },
      { name: "Campaign results deck", description: "A post-campaign performance report showing a sponsor what they got for their investment — used to drive renewals and upsells." },
      { name: "Audience insights deck", description: "A deeper dive into your audience data — psychographics, purchasing behavior, brand affinities — used to prove fit with a specific sponsor's target customer." },
    ],
    whatToInclude: [
      "Audience demographics and psychographics — not just reach, but who those people actually are",
      "Engagement metrics that prove your audience pays attention, not just follows",
      "The brand's specific marketing objective and how your platform addresses it",
      "Sponsorship packages with clear deliverables, formats, and pricing",
      "Past brand partnerships and campaign outcomes that demonstrate ROI",
      "Brand alignment rationale — why your audience is this sponsor's target customer",
      "Exclusivity options and category protection if relevant to the sponsor",
    ],
  },

  // ── SERVICES & PROFESSIONALS ─────────────────────────────────────────────

  {
    slug: "agencies",
    navLabel: "Agencies & Creative Studios",
    label: "Agencies & Creative Studios",
    navGroup: "services",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
    metaTitle: "Agency Pitch Deck Software — Win More Clients | PitchBoost",
    metaDescription:
      "PitchBoost helps marketing agencies, creative studios, and PR firms generate tailored pitch decks for every prospective client in under 60 seconds. Upload your credentials once, win more clients with decks built around their business.",
    heroHeadline: "Agency pitch decks that win clients, built in 60 seconds",
    heroSubhead:
      "Stop sending credentials decks that weren't built for the room. PitchBoost generates a tailored pitch deck for every prospective client — from your agency credentials, mapped to their specific brief — in under a minute.",
    painPoints: [
      {
        title: "Every client pitch starts from scratch",
        body: "You tweak last quarter's credentials deck, swap the logo, and hope the prospective client doesn't notice the case studies are from a different vertical. They notice.",
      },
      {
        title: "Design is a bottleneck when pitching new clients",
        body: "New client pitches compete for the same design hours as existing client work. Someone always loses — and it's usually the pitch.",
      },
      {
        title: "You're leading with capabilities instead of relevance",
        body: "A 40-slide credentials deck buries what the client actually cares about. Prospects skim looking for relevance and most of the time they don't find it fast enough.",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Upload your agency credentials once",
        body: "Add your logo, brand colors, service offerings, case studies, and supporting materials. PitchBoost learns your agency's capabilities and keeps them ready for every client pitch.",
      },
      {
        step: "2",
        title: "Describe the prospective client and the brief",
        body: "Enter their website URL or describe the engagement. PitchBoost generates an agency pitch deck that leads with the services most relevant to that specific client's business — not a generic capabilities dump.",
      },
      {
        step: "3",
        title: "Share a branded link and follow up with data",
        body: "Publish in one click. Your prospective client gets a polished, interactive pitch deck. You see exactly which slides they read and how long they spent — so you know what landed before the credentials call.",
      },
    ],
    outcomes: [
      "Pitch more prospective clients without growing your team",
      "Every client deck looks bespoke — generated in under 60 seconds",
      "Consistent agency branding across every client pitch, every time",
      "Respond to RFPs and client briefs faster than competing agencies",
      "No design bottleneck when pitching new clients",
      "Know which slides resonated with each client before you follow up",
    ],
    whoItsFor: [
      "Digital marketing agencies",
      "Creative and branding studios",
      "PR and communications firms",
      "Advertising agencies",
      "Web design and development agencies",
      "Social media and content agencies",
      "SEO and performance marketing agencies",
      "Full-service marketing agencies",
    ],
    faqs: [
      {
        q: "Can I use PitchBoost to respond to client RFPs?",
        a: "Yes. Paste in the client brief and your agency's credentials and PitchBoost generates a structured pitch deck that addresses the brief directly. You can edit any slide before sharing with the prospective client.",
      },
      {
        q: "Does every client deck use our agency's branding?",
        a: "Automatically. Upload your logo and brand colors once and every pitch deck you generate is branded to match — no manual formatting needed for each new client.",
      },
      {
        q: "Is PitchBoost better than using an agency pitch deck template?",
        a: "Agency pitch deck templates give you a blank deck you still have to fill in for every client. PitchBoost writes the content for you based on your agency's actual credentials and the specific client you're pitching — the result feels like it was built for that client, not adapted from a template. If you want pitch deck templates that win clients rather than just save you formatting time, PitchBoost is the better tool.",
      },
      {
        q: "Can I save my agency pitch deck as a reusable template?",
        a: "Yes. On Pro and Business plans you can save any generated deck as a template for your agency. If a format works well for a particular type of client pitch, lock it in and use it as a starting point — while still letting AI tailor the content for each new client.",
      },
      {
        q: "Can I see which clients have viewed my pitch deck?",
        a: "Yes, on Pro and Business plans. You'll see which prospective clients opened the deck, which slides they spent time on, and when they viewed it — so you can follow up at exactly the right moment.",
      },
      {
        q: "Is there an AI pitch deck maker for agencies and creative studios?",
        a: "Yes — PitchBoost is built for this exact problem. You upload your agency's credentials, case studies, and capabilities once. For each new business pitch, you describe the prospective client and their brief. PitchBoost generates a tailored agency credentials deck in under 60 seconds that's built around their industry and objectives — not a generic agency pitch deck template with the last client's logo swapped out.",
      },
      {
        q: "How do we present our services to a new client without leading with a 40-slide credentials dump?",
        a: "Lead with their problem, not your portfolio. PitchBoost structures every agency pitch deck around the prospective client's specific brief — opening with their challenge, then demonstrating relevance through your most applicable case studies and credentials. You still show your work. You just show it in the context of what they're trying to solve.",
      },
    ],
    ctaHeadline: "Ready to pitch new clients with an agency deck built around their brief — not a credentials pack from your last pitch?",
    industryTerm: "credentials deck",
    salesMaterials: [
      { name: "Credentials / capabilities deck", description: "A curated presentation of your agency's relevant experience, team, and approach — tailored to the prospective client's industry and brief rather than a general capabilities overview." },
      { name: "Project proposal", description: "A formal response to a brief or RFP covering your strategic approach, timeline, deliverables, team, and investment — used in competitive pitches and formal reviews." },
      { name: "Case study deck", description: "A focused presentation of your most relevant past work — showing results, process, and context that proves you can solve this client's specific problem." },
      { name: "Process and methodology deck", description: "A walkthrough of how your agency works — discovery, strategy, creative, and delivery — used to set expectations and differentiate your approach from other agencies." },
      { name: "SOW / project brief", description: "A formal statement of work covering scope, timeline, deliverables, and terms — the document that turns a won pitch into a signed engagement." },
    ],
    whatToInclude: [
      "Relevant past work tailored to the client's industry — not your general portfolio",
      "Your strategic approach to their specific brief or problem",
      "Team bios for the people who will actually do the work",
      "Awards, recognition, or industry credentials that establish credibility in their space",
      "Your process and what working with your agency actually looks like",
      "Timeline, deliverables, and investment — with enough detail to feel credible, not overwhelming",
      "Client references or testimonials from comparable engagements",
    ],
  },

  {
    slug: "consultancies",
    navLabel: "Consultancies",
    label: "Consultancies & Professional Services",
    navGroup: "services",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    metaTitle: "Consulting Pitch Deck Software — Win More Engagements | PitchBoost",
    metaDescription:
      "PitchBoost helps consultancies and professional services firms generate tailored proposals and pitch decks for every prospective client in under 60 seconds. Demonstrate expertise before the first meeting with decks built around each client's specific situation.",
    heroHeadline: "Consulting proposals that prove you understand the client",
    heroSubhead:
      "In consulting, demonstrating deep understanding of a prospect's situation is half the win. PitchBoost connects your firm's expertise to each client's specific challenges — so you walk into every conversation looking prepared, not generic.",
    painPoints: [
      {
        title: "Every engagement proposal requires hours of prospect research",
        body: "Tailoring a consulting proposal to a client's industry, org structure, and specific challenges is exactly the kind of high-value work that takes hours before you've even won the engagement.",
      },
      {
        title: "It's hard to personalize at scale when you're pitching multiple clients simultaneously",
        body: "The more prospects in your pipeline, the more shortcuts you take on each proposal. Generic consulting decks are a symptom of a pipeline that's grown faster than your BD capacity.",
      },
      {
        title: "No way to know if prospects actually reviewed your proposal materials",
        body: "You send the proposal and wait. A week later you follow up and learn they never opened the attachment. There's no insight into whether your materials are landing or getting lost in their inbox.",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Upload your firm's expertise, methodology, and credentials",
        body: "Add your logo, practice areas, service frameworks, case studies, and team credentials. PitchBoost learns your firm's approach and keeps it ready for every client pitch.",
      },
      {
        step: "2",
        title: "Describe the prospective client and the engagement scope",
        body: "Enter their website or describe their business challenge. PitchBoost builds a consulting pitch deck that connects your firm's specific expertise to that client's situation — not a generic capabilities overview.",
      },
      {
        step: "3",
        title: "Share a polished proposal link and track who reviews it",
        body: "Send a branded link instead of a PDF attachment. See exactly who on the client's team reviewed the proposal, which sections they read carefully, and when they came back for a second look.",
      },
    ],
    outcomes: [
      "Scale personalized client pitches without scaling your BD team",
      "Walk into every prospect meeting with a deck that shows you've done your homework",
      "Respond to RFPs and scope requests faster than competing firms",
      "Consistent quality across every consulting proposal your firm produces",
      "Know which clients are engaged with your proposal before you follow up",
      "Win more engagements by demonstrating deep understanding upfront",
    ],
    whoItsFor: [
      "Management consulting firms",
      "Strategy and transformation consultancies",
      "IT and technology consultancies",
      "HR and organizational change firms",
      "Financial advisory and restructuring firms",
      "Marketing and growth consultancies",
      "Independent consultants and solopreneurs",
      "Boutique specialist consulting firms",
    ],
    faqs: [
      {
        q: "Can PitchBoost handle complex multi-service consulting proposals?",
        a: "Yes. When you upload your firm's full service offering and methodology, PitchBoost surfaces the specific practices most relevant to each prospect — whether that's a single-service engagement or a multi-workstream transformation program.",
      },
      {
        q: "Is PitchBoost better than a consulting proposal template?",
        a: "Consulting proposal templates give you a structure you still have to fill in for every client engagement. PitchBoost writes the content for you — mapping your firm's expertise to that client's specific business challenge. The result reads like a tailored proposal, not a consulting deck template with the client's name swapped in.",
      },
      {
        q: "Can I track whether a prospect has reviewed our proposal?",
        a: "Yes, on Pro and Business plans. You'll see who on the client's team opened the proposal, which sections they spent time on, and how many times they came back — so your follow-up is always informed by actual engagement data.",
      },
      {
        q: "Can I save engagement proposals as templates for specific practice areas?",
        a: "Yes. If you have a proposal format that works well for digital transformation engagements, or for pitching your analytics practice specifically, save it as a template. Generate new tailored proposals from that foundation for every future client.",
      },
      {
        q: "Is there an AI consulting proposal generator for professional services firms?",
        a: "Yes — PitchBoost is built for this. You upload your firm's methodology, practice areas, and case studies once. For each prospect, you describe their industry, org structure, and the business challenge they're facing. PitchBoost generates a tailored consulting proposal in under 60 seconds — no consulting proposal template to manually fill out for every engagement.",
      },
      {
        q: "How do we explain our consulting methodology to a prospect who's never worked with a firm like ours?",
        a: "PitchBoost structures your proposal so the methodology follows the problem — not the other way around. Instead of opening with 'here's how we work,' the deck opens with a diagnosis of the client's specific situation, then introduces your approach as the right response to that situation. It's the difference between a consultant who pitches their framework and one who already understands your business.",
      },
    ],
    ctaHeadline: "Ready to win more mandates with consulting proposals that prove you understand the client before the first meeting?",
    industryTerm: "proposal",
    salesMaterials: [
      { name: "Engagement proposal", description: "A tailored document covering your diagnosis of the client's situation, your recommended approach, timeline, team, and investment — the primary sales document in most consulting pitches." },
      { name: "Capability statement", description: "A concise overview of your firm's relevant practice areas, methodologies, and credentials — used in RFP responses or as an introductory leave-behind." },
      { name: "Case study deck", description: "A focused presentation of your most relevant past engagements — showing the problem, your approach, and the outcome — used to establish credibility before the formal proposal." },
      { name: "Methodology overview", description: "A deeper explanation of your firm's frameworks and approach — used with clients who want to understand how you work before committing to an engagement." },
      { name: "Diagnostic summary", description: "A pre-proposal document summarizing your read on the client's situation — used after a discovery conversation to demonstrate how well you've listened before presenting your solution." },
    ],
    whatToInclude: [
      "A clear diagnosis of the client's specific situation — showing you've done your homework before the pitch",
      "Your methodology and framework — explained in terms of their problem, not your standard process",
      "Relevant past engagements at similar companies or in the same industry",
      "The team who will actually do the work — bios, relevant experience, and why this team for this engagement",
      "Project timeline and key deliverables — specific enough to feel credible",
      "Investment and ROI framing — connecting your fees to the business impact of the work",
      "References or testimonials from clients who faced comparable challenges",
    ],
  },

  {
    slug: "recruiting",
    navLabel: "Recruiting & Staffing",
    label: "Recruiting & Staffing Agencies",
    navGroup: "services",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    metaTitle: "Recruiting Pitch Deck Software — Win More Clients | PitchBoost",
    metaDescription:
      "PitchBoost helps recruiting agencies and staffing firms generate tailored pitch decks for every prospective client company in under 60 seconds. Win more preferred vendor agreements and retained searches with decks built around each hiring team's specific talent needs.",
    heroHeadline: "Recruiting pitch decks that win preferred vendor agreements",
    heroSubhead:
      "Every hiring company has different talent challenges. PitchBoost builds a recruiting pitch deck tailored to each prospective client's specific hiring needs — so your agency pitch speaks their language instead of sounding like every other recruiting firm.",
    painPoints: [
      {
        title: "You're pitching every hiring company with the same capabilities deck",
        body: "A generic recruiting capabilities presentation tells hiring managers you haven't thought about their specific talent challenges. The agencies that win preferred vendor status are the ones who walk in knowing the client's world.",
      },
      {
        title: "Building a customized pitch for each client's hiring needs takes time you don't have",
        body: "Researching the company, mapping your placements to their roles, tailoring the deck — every hour spent on business development is an hour not spent filling reqs.",
      },
      {
        title: "You can't tell if the hiring manager forwarded your proposal to procurement",
        body: "After sending your recruiting proposal, you're in the dark. You don't know if it was reviewed, shared internally, or sitting unread in their inbox while a competitor is on the phone with them.",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Upload your agency's specializations and track record",
        body: "Add your logo, brand colors, placement history, industry specializations, and candidate sourcing approach. PitchBoost learns your firm's capabilities and keeps them ready for every new client pitch.",
      },
      {
        step: "2",
        title: "Describe the prospective client's hiring situation",
        body: "Enter their company URL or describe their open roles and talent challenges. PitchBoost builds a recruiting pitch deck that maps your agency's track record and specializations to their specific hiring needs.",
      },
      {
        step: "3",
        title: "Share a branded pitch and track who reviews it",
        body: "Send a professional branded link instead of a PDF. See exactly who on the hiring team engaged with your proposal, which sections they read, and when — so your follow-up is perfectly timed.",
      },
    ],
    outcomes: [
      "Win more preferred vendor agreements with tailored agency pitches",
      "Pitch more client companies without growing your BD team",
      "Every recruiting proposal built around the client's specific roles and challenges",
      "Professional, consistent brand quality across every client pitch",
      "Know which hiring managers are engaged with your proposal before you call",
      "Respond to vendor qualification requests faster than competing agencies",
    ],
    whoItsFor: [
      "Executive search and retained search firms",
      "Contingency recruiting agencies",
      "Staffing and temp agencies",
      "Technical and engineering recruiting firms",
      "Healthcare and clinical staffing agencies",
      "RPO (Recruitment Process Outsourcing) providers",
      "Diversity and inclusion recruiting firms",
      "Professional employer organizations (PEOs)",
    ],
    faqs: [
      {
        q: "Can I customize the recruiting pitch deck for different types of roles or industries?",
        a: "Yes. When you describe the prospective client's specific hiring needs — whether they're building an engineering team, scaling a sales org, or hiring for senior leadership — PitchBoost tailors the pitch to emphasize the relevant parts of your agency's track record.",
      },
      {
        q: "Is PitchBoost better than using a recruiting pitch deck template?",
        a: "Recruiting pitch deck templates give you a format you still have to fill in for every prospective client. PitchBoost writes the content for you, mapping your agency's track record to that specific client's talent challenges. The result reads like it was built for that hiring team, not adapted from a staffing agency template.",
      },
      {
        q: "Can I track whether hiring managers reviewed my agency proposal?",
        a: "Yes, on Pro and Business plans. You'll see who opened the proposal, which sections they spent the most time on, and whether they shared it internally — so you know when to follow up and who to address.",
      },
      {
        q: "Can I save my best-performing recruiting pitch decks as templates?",
        a: "Yes. If a particular pitch format works well for tech company clients or executive search engagements, save it as a template and generate new tailored versions for every future prospective client.",
      },
      {
        q: "Is there an AI pitch deck maker for recruiting and staffing agencies?",
        a: "Yes — PitchBoost is built for exactly this use case. You upload your agency's specializations, sector focus, and placement track record once. For each new client pitch, you describe the company's open roles and talent challenges. PitchBoost generates a tailored recruiting capabilities presentation in under 60 seconds — no staffing agency pitch deck template to manually customize for every prospect.",
      },
      {
        q: "How do we present our recruiting services to a company that's never used a staffing agency before?",
        a: "Start with their specific talent problem, not your agency's credentials. PitchBoost structures recruiting pitches so the opening frames the client's hiring challenge — role difficulty, time-to-fill risk, or growth pressure — before introducing your agency's approach as the answer. It's the difference between pitching a service and demonstrating you already understand the problem.",
      },
    ],
    ctaHeadline: "Ready to win more preferred vendor agreements with recruiting pitch decks tailored to each client's talent needs?",
    industryTerm: "capabilities presentation",
    salesMaterials: [
      { name: "Recruiting capabilities deck", description: "A tailored presentation of your agency's sector specialization, sourcing methodology, placement track record, and team — built around the prospective client's specific hiring needs." },
      { name: "Service proposal", description: "A formal document covering your approach to their open roles, your sourcing process, timeline expectations, and fee structure — used when a company wants a structured pitch before committing to an agency." },
      { name: "Market mapping report", description: "A preview of available talent in the client's target function or geography — used to demonstrate your pipeline depth and justify engaging your agency on a search." },
      { name: "Candidate slate presentation", description: "A structured presentation of shortlisted candidates — profiles, fit rationale, and interview readiness — used to move active searches through the hiring process." },
      { name: "Terms of business document", description: "A formal agreement covering your fee model, guarantee terms, replacement policy, and exclusivity provisions — the document that formalizes the client relationship." },
    ],
    whatToInclude: [
      "Your specialization in the client's specific sector, function, or seniority level",
      "Placement track record — roles filled, time-to-fill benchmarks, and retention rates",
      "Your sourcing methodology — how you find candidates the client can't find on their own",
      "Active talent pipeline relevant to their open roles or target profiles",
      "Client references from companies with comparable hiring challenges",
      "Fee structure and guarantee terms — explained clearly, not buried in fine print",
      "Your team's relevant experience — who will actually be working the search",
    ],
  },

  {
    slug: "training-coaching",
    navLabel: "Training & Coaching",
    label: "Training, Coaching & Speaking Professionals",
    navGroup: "services",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
    metaTitle: "Coaching & Training Proposal Software — Win More Corporate Clients | PitchBoost",
    metaDescription:
      "PitchBoost helps executive coaches, corporate trainers, and professional speakers generate tailored proposals for every corporate client in under 60 seconds. Win more programs, engagements, and retainers with materials that prove your expertise before the first meeting.",
    heroHeadline: "Training and coaching proposals that win corporate clients",
    heroSubhead:
      "Corporate clients don't buy coaching programs — they buy outcomes for their specific team. PitchBoost builds a proposal that connects your methodology to each client's unique challenges, so every pitch feels less like a sales call and more like a consultation.",
    painPoints: [
      {
        title: "Every corporate client needs a proposal mapped to their team's specific challenges",
        body: "A leadership development program pitch to a fast-growing tech startup looks nothing like the same pitch to a legacy financial services firm. Generic training proposals lose to tailored ones, every time.",
      },
      {
        title: "You're spending time writing proposals instead of delivering programs",
        body: "The more clients you serve, the more time you spend writing proposals for new ones. For soloists and small teams, proposal creation can consume as much time as the work itself.",
      },
      {
        title: "Your pitch materials don't reflect the transformation you create",
        body: "Coaches and trainers often deliver extraordinary results but present them in forgettable PDFs. The quality gap between your program and your pitch materials is costing you engagements.",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Upload your methodology, programs, and credentials once",
        body: "Add your brand assets, program descriptions, certifications, client outcomes, and testimonials. PitchBoost learns your approach and keeps it ready for every corporate pitch.",
      },
      {
        step: "2",
        title: "Describe the client's team and their development goals",
        body: "Enter the company URL or describe their situation. PitchBoost builds a coaching or training proposal that maps your methodology to that team's specific challenges — not a generic program overview.",
      },
      {
        step: "3",
        title: "Share a professional proposal link and follow up confidently",
        body: "Send a branded proposal link instead of a PDF. See who reviewed it, which program details they spent time on, and when they came back — so you follow up at the right moment with the right message.",
      },
    ],
    outcomes: [
      "Win more corporate training and coaching engagements",
      "Proposals tailored to each client's team challenges in under 60 seconds",
      "Professional materials that match the quality of your programs",
      "Pitch more prospective clients without spending hours on each proposal",
      "Track which clients are reviewing your proposal before you follow up",
      "Secure more speaking engagements with tailored speaker decks",
    ],
    whoItsFor: [
      "Executive coaches and leadership coaches",
      "Corporate trainers and L&D consultants",
      "Professional and keynote speakers",
      "Team facilitators and workshop leaders",
      "Life coaches targeting corporate clients",
      "Organizational psychologists and consultants",
      "DEI trainers and consultants",
      "Business coaches and accountability coaches",
    ],
    faqs: [
      {
        q: "Can PitchBoost generate a speaker one-sheet or speaking proposal?",
        a: "Yes. Whether you need a speaking proposal for a conference organizer, a one-sheet for a speaker bureau, or a training program proposal for a corporate L&D team, PitchBoost generates the right format from your credentials in under 60 seconds.",
      },
      {
        q: "Is PitchBoost better than a coaching proposal template?",
        a: "Coaching proposal templates give you a structure you still have to fill in for every client. PitchBoost writes the content for you — mapping your methodology and past outcomes to the specific team and challenges the client is facing. The result reads like a custom proposal, not a coaching deck template with the client's name filled in.",
      },
      {
        q: "How do I handle proposals for different program types — coaching, training, speaking?",
        a: "Upload all your program types when setting up your account. When generating a proposal, describe which type of engagement the client is looking for and PitchBoost will structure the deck around the most relevant program, with supporting details from your other offerings.",
      },
      {
        q: "Can I save proposal formats for different engagement types?",
        a: "Yes. Save your best executive coaching proposal, your corporate training pitch, and your speaking engagement deck as separate templates. Generate new tailored versions for every prospective client from those starting points.",
      },
      {
        q: "Is there an AI proposal generator for coaches, trainers, and speakers?",
        a: "Yes — PitchBoost is built for this. You upload your methodology, program formats, outcomes data, and testimonials once. For each new corporate client, you describe their team, industry, and development goals. PitchBoost generates a tailored coaching or training proposal in under 60 seconds — no coaching proposal template to manually adapt for every company you pitch.",
      },
      {
        q: "How do I explain the ROI of coaching or training to a corporate buyer?",
        a: "Corporate L&D buyers are increasingly expected to justify investments in measurable terms. PitchBoost helps you frame your programs in the outcomes language that resonates with HR leaders and C-suite sponsors — reduced turnover, faster leadership development, improved team performance — connecting your methodology to the metrics they're being held to.",
      },
    ],
    ctaHeadline: "Ready to win more corporate training programs with proposals that prove your methodology fits each client's team?",
    industryTerm: "program proposal",
    salesMaterials: [
      { name: "Corporate program proposal", description: "A tailored pitch connecting your coaching or training methodology to a specific company's team challenges and development goals — the primary document used to win corporate engagements." },
      { name: "Capability statement", description: "A concise overview of your programs, credentials, and past client outcomes — used as an introductory document or leave-behind when prospecting new corporate relationships." },
      { name: "Outcomes and impact deck", description: "A presentation of measurable results from your past programs — client retention improvements, leadership pipeline growth, team performance gains — used to justify the investment to HR and C-suite buyers." },
      { name: "Speaker one-pager", description: "A single-page overview of your speaking topics, audience fit, past engagements, and booking details — used with conference organizers and speaker bureaus." },
      { name: "Case study deck", description: "A detailed account of a past program — the client's challenge, your approach, and the outcome — used to build credibility with prospects facing similar situations." },
    ],
    whatToInclude: [
      "A diagnosis of the client's specific team challenge or development goal — not a generic program overview",
      "Your methodology and why it addresses their particular situation",
      "Measurable outcomes from comparable programs — data, not just testimonials",
      "Testimonials or case studies from clients in similar industries or at similar company stages",
      "Program options — engagement formats, durations, delivery methods (in-person, virtual, hybrid)",
      "Investment and pricing — framed relative to the business impact of the development goal",
      "Your credentials, certifications, and why you're the right fit for this team",
    ],
  },

  // ── INDUSTRY VERTICALS ───────────────────────────────────────────────────

  {
    slug: "home-services",
    navLabel: "Home Services & Contractors",
    label: "Home Services & Contractors",
    navGroup: "verticals",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    metaTitle: "Contractor Proposal Software — Win More Jobs | PitchBoost",
    metaDescription:
      "PitchBoost helps contractors, home service businesses, and trade professionals create polished project proposals and sales materials in minutes. Look more professional than the competition, explain your materials and process clearly, and win more bids.",
    heroHeadline: "Professional contractor proposals that win more bids",
    heroSubhead:
      "In home services, the best work doesn't always win the job — the best presentation does. PitchBoost helps you create a professional, branded proposal for every project that shows clients exactly why they should choose you over the competition.",
    painPoints: [
      {
        title: "You're losing bids to contractors who look more polished on paper",
        body: "Clients often can't evaluate technical quality before the work is done — so they choose based on professionalism. A sharp, well-presented proposal signals that you'll run the job the same way.",
      },
      {
        title: "Creating a custom proposal for every job takes time you don't have",
        body: "Between managing jobs, coordinating crews, and sourcing materials, spending an evening building a proposal for every bid is unsustainable. Most contractors resort to a standard quote that doesn't tell their story.",
      },
      {
        title: "Your materials don't do justice to the quality of your work",
        body: "You deliver excellent work — but your proposals look like they were put together in 20 minutes. The quality gap between what you build and how you present yourself is costing you jobs.",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Set up your business profile and past work once",
        body: "Add your logo, brand colors, service offerings, photos of past projects, certifications, and warranties. PitchBoost keeps your business ready to pitch for any new job.",
      },
      {
        step: "2",
        title: "Describe the project and what the client cares about",
        body: "Enter the scope of work or describe the job. PitchBoost builds a contractor proposal that explains your process, highlights relevant past projects, and presents your materials and pricing in a clear, professional format.",
      },
      {
        step: "3",
        title: "Share a professional proposal link or PDF",
        body: "Send a branded proposal link to the homeowner or export to PDF. See if they've reviewed it before you follow up, and know exactly which parts of the proposal they spent time on.",
      },
    ],
    outcomes: [
      "Win more bids with proposals that look as good as your work",
      "Professional contractor proposals created in under 60 seconds",
      "Explain materials, process, and warranties in a format clients understand",
      "Stand out from competitors who send basic estimates",
      "Follow up confidently knowing whether the client reviewed your proposal",
      "Build a library of past project photos and credentials that sell for you",
    ],
    whoItsFor: [
      "General contractors",
      "Roofing and exterior contractors",
      "Deck, patio, and outdoor living builders",
      "Landscaping and hardscaping companies",
      "Kitchen and bathroom remodelers",
      "HVAC, plumbing, and electrical contractors",
      "Painting and flooring companies",
      "Property maintenance and handyman services",
    ],
    faqs: [
      {
        q: "Can I include photos of past projects in my contractor proposal?",
        a: "Yes. When you set up your business profile you can upload photos of past work, and PitchBoost will pull relevant examples into your proposals. Showing a homeowner a deck or patio you've built that looks similar to what they're imagining is one of the most effective ways to win the bid.",
      },
      {
        q: "Can I explain different material options in the proposal?",
        a: "Yes. One of the best use cases for home service proposals is explaining the difference between material options — composite vs. pressure-treated decking, for example — with the pros, cons, and pricing for each. PitchBoost can build this comparison into your proposal so clients feel informed, not sold to.",
      },
      {
        q: "Is PitchBoost better than a contractor proposal template?",
        a: "Contractor proposal templates give you a blank form to fill in for every job. PitchBoost writes the content around the specific project, highlights your relevant past work, and explains your process and materials in a format that's easy for homeowners to understand. The result looks custom-built for that job, not filled in from a template.",
      },
      {
        q: "Can homeowners view my proposal on their phone?",
        a: "Yes. PitchBoost proposals are interactive web pages that work beautifully on any device — so homeowners can review your bid on their phone or tablet at their own pace.",
      },
      {
        q: "Can I export my proposal as a PDF for clients who prefer a file?",
        a: "Yes, one-click PDF export is available on all plans. Send a link, a PDF, or both — whatever the client prefers.",
      },
      {
        q: "Is there an AI proposal maker for contractors and home service businesses?",
        a: "Yes — PitchBoost is built for this. You set up your business profile with your services, past project photos, certifications, and warranty information once. For each new job, you describe the project scope and what the client cares about. PitchBoost generates a professional contractor proposal in under 60 seconds — no contractor proposal template to fill out for every bid.",
      },
      {
        q: "How do I turn a basic quote into a proposal that actually wins the job?",
        a: "A quote is just a number. A winning contractor proposal explains the process, shows proof of past work, clarifies what's included, and makes the client feel like they're choosing a professional — not just a price. PitchBoost turns your scope of work and project details into a client-ready proposal that sells your business, not just your price.",
      },
    ],
    ctaHeadline: "Ready to win more bids with contractor proposals that look as professional as your work — built in 60 seconds?",
    industryTerm: "estimate",
    salesMaterials: [
      { name: "Project proposal / estimate", description: "A professional document covering scope of work, materials, timeline, and pricing — the primary document homeowners and property owners use to choose between contractors." },
      { name: "Scope of work document", description: "A detailed breakdown of what the job includes — and what it doesn't — used to set clear expectations, prevent scope creep, and protect both parties." },
      { name: "Company credentials overview", description: "A brief presentation of your business — licensing, insurance, years in business, certifications, and guarantees — used to build trust before a client signs anything." },
      { name: "Past project portfolio", description: "A visual showcase of comparable past work — photos, before-and-afters, and brief descriptions — used to help clients visualize the result and trust your execution." },
      { name: "Material comparison guide", description: "A side-by-side breakdown of material options — composite vs. pressure-treated, different fixture grades — with pros, cons, and pricing, so clients feel informed rather than sold to." },
    ],
    whatToInclude: [
      "A clear scope of work — what's included, what's not, and what the finished product looks like",
      "Materials specified by name and grade — with options where relevant so the client can choose",
      "Project timeline with realistic milestones and any dependencies",
      "Before-and-after photos from comparable past projects in a similar style or scope",
      "Licensing, insurance, and any relevant certifications that reduce the client's risk",
      "Pricing breakdown and payment schedule — transparent enough to justify, not so detailed it invites nickel-and-diming",
      "Warranty and guarantee terms — one of the most overlooked elements in contractor proposals",
    ],
  },

  {
    slug: "commercial-real-estate",
    navLabel: "Commercial Real Estate",
    label: "Commercial Real Estate",
    navGroup: "verticals",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></svg>,
    metaTitle: "Commercial Real Estate Pitch Deck Software — Close More Deals | PitchBoost",
    metaDescription:
      "PitchBoost helps commercial real estate brokers and investors generate polished property overview decks, lease proposals, and investment memos in under 60 seconds. Look like a top-10 brokerage on every deal — no matter your firm's size.",
    heroHeadline: "Commercial real estate pitch decks that move deals through the committee",
    heroSubhead:
      "In commercial real estate, your materials circulate across tenants, investors, and ownership groups before anyone picks up the phone. PitchBoost helps you build a polished deck for every deal — property overviews, lease proposals, investment memos — that looks like it came from a top-tier brokerage.",
    painPoints: [
      {
        title: "Every deal needs a custom deck and there's never enough time to build one properly",
        body: "You're running multiple deals simultaneously. Each one needs a tailored property overview or investment memo. Building them properly takes hours you don't have between showings, negotiations, and LOIs.",
      },
      {
        title: "You're circulating Word docs while competing brokers send polished presentations",
        body: "The quality of your materials signals the quality of your representation. When a competing broker sends a professionally designed package and you send a formatted Word document, the client notices.",
      },
      {
        title: "No visibility into whether stakeholders are actually reviewing your materials",
        body: "You send the investment memo or tenant proposal and wait. You don't know if the ownership group reviewed it, which sections raised questions, or whether it was forwarded to their attorney.",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Set up your brokerage profile and property library",
        body: "Add your brand assets, brokerage credentials, market expertise, comparable transactions, and client testimonials. PitchBoost keeps your firm ready to pitch any deal.",
      },
      {
        step: "2",
        title: "Describe the property, the deal, and your audience",
        body: "Enter the property details or describe the transaction. PitchBoost builds a CRE pitch deck — property overview, lease proposal, or investment memo — tailored to whether you're presenting to a tenant, an investor group, or an ownership committee.",
      },
      {
        step: "3",
        title: "Circulate a polished link across every stakeholder",
        body: "Share a branded deck link instead of a PDF attachment. Track who viewed it, which sections each stakeholder reviewed, and when — so you know exactly where each party stands before you get on the call.",
      },
    ],
    outcomes: [
      "Professional property decks and investment memos in under 60 seconds",
      "Present every deal with materials that match your market expertise",
      "Track which stakeholders reviewed your deck before the negotiation call",
      "Consistent brand quality across every listing, deal, and client presentation",
      "Close more deals by demonstrating market knowledge in every presentation",
      "Scale your deal volume without spending hours on each pitch package",
    ],
    whoItsFor: [
      "Commercial real estate brokers",
      "Tenant representation brokers",
      "Investment sales and capital markets teams",
      "Real estate developers and owners",
      "Property managers pitching management assignments",
      "REIT and institutional investment teams",
      "CRE lenders and debt brokers",
      "Site selection and corporate real estate teams",
    ],
    faqs: [
      {
        q: "What types of CRE decks can PitchBoost generate?",
        a: "PitchBoost can generate property overview decks, tenant pitch packages, lease proposal presentations, investment offering memoranda, market update decks, and management pitch materials — each formatted appropriately for the audience and transaction type.",
      },
      {
        q: "Is PitchBoost better than a commercial real estate pitch deck template?",
        a: "CRE pitch deck templates give you a layout you still have to fill in for every deal. PitchBoost writes the content for you — incorporating the property's specific attributes, your relevant transaction history, and the particular priorities of the tenant, investor, or ownership group you're pitching. The result reads like a bespoke deal package, not a real estate presentation template.",
      },
      {
        q: "Can I track whether an investor or tenant reviewed my deck?",
        a: "Yes, on Pro and Business plans. You'll see who opened the deck, how long each stakeholder spent on it, and which sections they reviewed most carefully — so you know what questions to expect on the next call.",
      },
      {
        q: "Can I include market data and comparable transactions?",
        a: "Yes. Upload your market comps, transaction data, and submarket analysis when setting up your property or deal. PitchBoost incorporates them into every relevant pitch deck — so your materials reflect your market expertise, not just the property specs.",
      },
      {
        q: "Is there an AI pitch deck maker for commercial real estate brokers?",
        a: "Yes — PitchBoost is built for exactly this. You upload your brokerage credentials, market expertise, and transaction history once. For each deal, you describe the property, the target audience, and the key selling points. PitchBoost generates a tailored CRE pitch deck in under 60 seconds — no commercial real estate presentation template to manually customize for every listing or investment memo.",
      },
      {
        q: "How do I create a property presentation that moves through an investment committee without getting stalled?",
        a: "Investment committees stall on materials that require too much interpretation. PitchBoost builds CRE pitch decks that front-load the deal thesis, present financials clearly, and frame market context in terms of the investment decision — so every stakeholder who reviews the materials understands the opportunity without needing a broker on the call to explain it.",
      },
    ],
    ctaHeadline: "Ready to move more commercial deals forward with pitch materials built for owners, tenants, and investment committees?",
    industryTerm: "pitch deck",
    salesMaterials: [
      { name: "Property overview / offering deck", description: "A polished presentation of a listing or investment opportunity — covering property highlights, financials, market context, and the deal thesis — circulated across tenants, investors, and ownership groups." },
      { name: "Listing presentation", description: "A pitch to win a new listing assignment — showing the owner why your brokerage team, market knowledge, and strategy will achieve the best outcome for their asset." },
      { name: "Tenant pitch package", description: "Materials assembled to attract a specific tenant to a space — coverage area profile, co-tenancy highlights, site data, and deal structure — tailored to the tenant's business model and site criteria." },
      { name: "Investment memo (OM)", description: "A formal offering memorandum for an investment sale — covering deal overview, financials, market analysis, and return projections — distributed to qualified investors." },
      { name: "Market update deck", description: "A periodic presentation of submarket conditions, recent transactions, and forward-looking analysis — used to stay front of mind with investor and owner clients between active assignments." },
    ],
    whatToInclude: [
      "Property or deal highlights — the most compelling facts about this opportunity, front-loaded",
      "Market comps and submarket analysis that prove your pricing and positioning are grounded",
      "Financial projections and return analysis — modeled to the buyer or investor's typical deal criteria",
      "Your brokerage's transaction history in this market or product type — relevant experience builds trust",
      "Tenant or buyer profile — who this deal is right for and why",
      "Process and timeline — what the transaction looks like from LOI through close",
      "Visibility into which stakeholders have reviewed the materials so you know who to call",
    ],
  },

  {
    slug: "financial-advisors",
    navLabel: "Financial Advisors",
    label: "Financial Advisors & Wealth Management",
    navGroup: "verticals",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    metaTitle: "Financial Advisor Pitch Deck Software — Convert More Prospects | PitchBoost",
    metaDescription:
      "PitchBoost helps financial advisors, RIAs, and wealth management firms generate polished prospect presentations and client materials in under 60 seconds. Convert more prospective clients and circulate professional materials across every organization you serve.",
    heroHeadline: "Financial advisor pitch decks that convert prospects into long-term clients",
    heroSubhead:
      "Prospective clients are evaluating your professionalism as much as your investment philosophy. PitchBoost helps you generate a polished, tailored pitch deck for every prospect — built from your firm's approach and mapped to that client's specific financial situation and goals.",
    painPoints: [
      {
        title: "Prospect presentations take hours to customize for each client's situation",
        body: "Every high-net-worth prospect has different financial goals, risk tolerance, tax situation, and estate planning needs. Tailoring a pitch presentation to reflect all of that takes hours of preparation for every meeting.",
      },
      {
        title: "Your pitch materials don't reflect the quality of your advice",
        body: "You manage complex portfolios and provide sophisticated guidance — but your prospect presentations are built from a dated PowerPoint template. The quality gap between your advice and your materials is costing you new clients.",
      },
      {
        title: "You're sending the same pitch to every prospect regardless of their situation",
        body: "A prospect approaching retirement has completely different needs from a business owner considering a liquidity event. One boilerplate advisor pitch deck doesn't serve either of them well.",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Upload your firm's investment philosophy and service offering",
        body: "Add your brand assets, investment approach, service tiers, team credentials, performance history, and any supporting materials. PitchBoost learns your firm and keeps it ready for every prospect meeting.",
      },
      {
        step: "2",
        title: "Describe the prospect's financial situation and goals",
        body: "Enter key details about the prospect — their stage of life, wealth profile, primary goals, or specific concerns. PitchBoost builds a pitch presentation that speaks directly to their situation and shows how your approach serves their needs.",
      },
      {
        step: "3",
        title: "Share a professional presentation and follow up confidently",
        body: "Send a branded link to the prospect before or after the meeting. See exactly which sections they reviewed, how long they spent on your investment philosophy versus your fee structure, and when they came back for a second look.",
      },
    ],
    outcomes: [
      "Tailored prospect presentation for every prospective client in under 60 seconds",
      "Materials that reflect the sophistication of your investment approach",
      "Convert more prospects with presentations built around their specific goals",
      "Track engagement so you know who's seriously evaluating your services",
      "Consistent, professional brand quality across every client-facing document",
      "Circulate polished materials across multi-stakeholder family or business clients",
    ],
    whoItsFor: [
      "Registered investment advisors (RIAs)",
      "Wealth managers and private bankers",
      "Financial planners and CFPs",
      "Independent broker-dealer reps",
      "Insurance and annuity advisors",
      "Family office professionals",
      "Retirement plan advisors and 401(k) consultants",
      "Estate planning and tax advisory professionals",
    ],
    faqs: [
      {
        q: "Is using PitchBoost compliant with financial services regulations?",
        a: "PitchBoost is a content generation tool, not a regulated financial services provider. The pitch decks and materials it generates should be reviewed by your compliance team before use with clients, in the same way any marketing material would be. We recommend treating PitchBoost-generated content as a first draft that your compliance process reviews before distribution.",
      },
      {
        q: "Is PitchBoost better than a financial advisor pitch deck template?",
        a: "Financial advisor pitch deck templates give you a format you fill in for every prospect. PitchBoost writes the content for you based on your firm's approach and the specific prospect's financial situation and goals. The result reads like a tailored client presentation, not a wealth management pitch deck template with the prospect's name added.",
      },
      {
        q: "Can I track whether a prospect reviewed my pitch presentation?",
        a: "Yes, on Pro and Business plans. You'll see who opened the presentation, which sections they spent time on, and when they returned for a second review — so you know who is actively evaluating your services before you follow up.",
      },
      {
        q: "Can I use PitchBoost for existing client communications, not just new prospect pitches?",
        a: "Yes. Beyond prospect presentations, advisors use PitchBoost to generate quarterly review decks, portfolio commentary presentations, and planning meeting materials — all tailored to individual client situations and branded to the firm.",
      },
      {
        q: "Is there an AI pitch deck maker for financial advisors and RIAs?",
        a: "Yes — PitchBoost is built for this. You upload your firm's investment philosophy, team credentials, AUM profile, and service model once. For each prospect, you describe their financial situation and goals. PitchBoost generates a tailored financial advisor presentation in under 60 seconds — no financial advisor pitch deck template to manually customize for every prospect meeting.",
      },
      {
        q: "How do I explain my investment philosophy to a prospect who's comparing multiple advisors?",
        a: "Most advisor pitches say the same things: long-term focus, fiduciary standard, personalized service. PitchBoost helps you connect your investment philosophy to the prospect's specific situation — their goals, risk tolerance, and the financial decisions they're actually facing — so your philosophy feels like an answer to their questions, not a generic value statement that every other advisor says too.",
      },
    ],
    ctaHeadline: "Ready to convert more prospects into long-term clients with financial advisor presentations built around their situation?",
    industryTerm: "presentation",
    salesMaterials: [
      { name: "Prospect presentation", description: "A tailored pitch deck for an initial or follow-up meeting with a prospective client — covering their financial situation, your investment philosophy, firm credentials, and why you're the right advisor for their goals." },
      { name: "Investment philosophy deck", description: "A focused presentation of how your firm thinks about investing — asset allocation, risk management, manager selection — used to help prospects understand your approach before committing." },
      { name: "Firm credentials overview", description: "A structured overview of your firm — AUM, team, investment process, client profile, and performance history — used in competitive evaluations or advisor searches." },
      { name: "Financial plan overview", description: "A visual summary of a prospect's or client's financial plan — goals, projections, gap analysis, and recommended actions — used to make complex plans tangible and actionable." },
      { name: "Annual review deck", description: "A client-specific presentation covering portfolio performance, progress toward goals, and recommended adjustments — used to strengthen existing relationships and demonstrate ongoing value." },
    ],
    whatToInclude: [
      "The prospect's specific financial situation and goals — their stage of life, risk profile, and what they're trying to achieve",
      "Your investment philosophy — explained in response to their situation, not as a standalone statement",
      "Firm credentials — AUM, years in business, team experience, and any regulatory recognitions",
      "Your service model and what the client relationship actually looks like day-to-day",
      "Fee structure and transparency — clearly explained in terms of what the client receives in return",
      "Performance history or portfolio approach — framed relative to their goals and risk tolerance",
      "Differentiation from the advisors or alternatives they're likely comparing you to",
    ],
  },

  {
    slug: "nonprofits",
    navLabel: "Nonprofits",
    label: "Nonprofits & Social Impact Organizations",
    navGroup: "verticals",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    metaTitle: "Nonprofit Pitch Deck Software — Move Donors and Funders to Act | PitchBoost",
    metaDescription:
      "PitchBoost helps nonprofits generate compelling pitch decks for donors, grant applications, and corporate partnerships in under 60 seconds. Tell your mission's story with materials that look as good as the work you do.",
    heroHeadline: "Nonprofit pitch decks that move donors and funders to act",
    heroSubhead:
      "Your mission deserves materials that match its impact. PitchBoost helps nonprofits generate polished pitch decks for every donor meeting, grant application, and corporate partnership pitch — so you spend more time doing the work and less time building slides.",
    painPoints: [
      {
        title: "Your pitch materials don't match the quality of your mission",
        body: "You're doing important work — but your donor presentations look like they were built in a rush. In a world where funders see hundreds of proposals, the quality of your materials signals the quality of your organization.",
      },
      {
        title: "Every donor, grant application, and partnership pitch needs a different angle on the same story",
        body: "A major donor wants to see impact and legacy. A foundation wants measurable outcomes and theory of change. A corporate partner wants alignment with their CSR priorities. One pitch deck can't do all three jobs well.",
      },
      {
        title: "You don't have a design budget or a communications team",
        body: "Most nonprofits operate with lean overhead by necessity. PitchBoost makes it possible to produce professional-quality pitch materials without a graphic designer, agency, or large communications staff.",
      },
    ],
    howItWorks: [
      {
        step: "1",
        title: "Upload your organization's mission, programs, and impact data",
        body: "Add your logo, brand colors, program descriptions, impact metrics, beneficiary stories, and financial stewardship information. PitchBoost learns your organization and keeps it ready for every pitch.",
      },
      {
        step: "2",
        title: "Describe the funder, donor, or partner and what they care about",
        body: "Describe the foundation's grant priorities, the donor's philanthropic interests, or the corporate partner's CSR focus. PitchBoost builds a pitch deck that frames your mission in terms that resonate with that specific funder's priorities.",
      },
      {
        step: "3",
        title: "Share a polished pitch and track who engages",
        body: "Send a branded link to your prospective donor, funder, or partner. See exactly who reviewed the materials, which programs they spent time on, and when they came back — so your follow-up is timely and informed.",
      },
    ],
    outcomes: [
      "Compelling donor and grant pitch decks in under 60 seconds",
      "Professional materials that reflect the quality of your programs",
      "Tailored pitches for individual donors, foundations, and corporate partners",
      "Track which funders are actively reviewing your materials",
      "Raise more with pitches framed around each funder's specific priorities",
      "Produce polished materials without a design team or communications budget",
    ],
    whoItsFor: [
      "Nonprofit executive directors and CEOs",
      "Development officers and major gift officers",
      "Grant writers and program officers",
      "Community foundations and giving circles",
      "Social enterprises and B Corps",
      "Advocacy and policy organizations",
      "Faith-based and community organizations",
      "International NGOs and humanitarian organizations",
    ],
    faqs: [
      {
        q: "Can PitchBoost help with grant applications?",
        a: "Yes. While PitchBoost isn't a grant writing tool for narrative applications, it excels at generating the pitch presentation components — program overviews, impact summaries, theory of change decks, and funder-facing presentations — that accompany grant applications or stand alone in foundation pitches.",
      },
      {
        q: "Is PitchBoost better than a nonprofit pitch deck template?",
        a: "Nonprofit pitch deck templates give you a format to fill in for every donor or funder. PitchBoost writes the content for you — framing your organization's programs and impact in terms of that specific funder's priorities. The result feels like a custom donor presentation, not a nonprofit slide deck template with your logo added.",
      },
      {
        q: "Can I use PitchBoost for corporate partnership pitches?",
        a: "Yes, and this is one of the strongest use cases for nonprofits. Corporate partnership pitches require connecting your mission to the partner's specific CSR goals, employee engagement interests, and brand values — exactly the kind of tailoring PitchBoost does automatically.",
      },
      {
        q: "Is PitchBoost affordable for a nonprofit operating on a lean budget?",
        a: "PitchBoost starts free and Pro is $29/month — a fraction of what even a single hour of agency design time costs. For nonprofits pitching multiple funders, the time and money saved on materials creation typically justifies the cost many times over.",
      },
      {
        q: "Is there an AI pitch deck maker for nonprofits and social impact organizations?",
        a: "Yes — PitchBoost is built for exactly this. You upload your organization's mission, programs, impact data, and financials once. For each funder, donor, or corporate partner, you describe their giving priorities. PitchBoost generates a tailored nonprofit pitch deck in under 60 seconds — no nonprofit presentation template to manually adapt for every grant application or donor meeting.",
      },
      {
        q: "How do we tell our mission's story differently for individual donors vs. foundations vs. corporate partners?",
        a: "Each audience needs a different frame on the same story. Individual donors respond to human impact and legacy. Foundations want theory of change and measurable outcomes. Corporate partners want brand alignment and CSR fit. PitchBoost lets you generate a tailored pitch for each audience from the same underlying program and impact data — so you're always speaking the right language without starting over every time.",
      },
    ],
    ctaHeadline: "Ready to move more donors and funders to act with grant proposals and pitch decks built for each audience?",
    industryTerm: "pitch deck",
    salesMaterials: [
      { name: "Donor presentation", description: "A tailored pitch for an individual major donor meeting — covering your mission, programs, impact metrics, and the specific initiative you're asking them to fund." },
      { name: "Grant pitch deck", description: "A visual presentation that accompanies or replaces a written grant narrative — used with foundations that accept or prefer presentation-based applications or introductory meetings." },
      { name: "Impact report deck", description: "A funder-facing presentation of what their previous investment achieved — outcomes data, beneficiary stories, financial stewardship, and what's next — used to drive renewals and deepen relationships." },
      { name: "Corporate partnership proposal", description: "A pitch connecting your mission to a corporation's CSR goals, employee engagement priorities, and brand values — used to secure multi-year partnerships and in-kind support." },
      { name: "Event sponsorship pitch", description: "A tailored deck showing a sponsor what they get from supporting your event — audience reach, brand exposure, activation options, and alignment with their marketing objectives." },
    ],
    whatToInclude: [
      "Your mission and theory of change — clearly explained in terms of outcomes, not just activities",
      "Impact metrics — specific, measurable results that demonstrate your programs work",
      "The specific initiative or funding need — what the money will do and why it matters now",
      "Connection to the funder's priorities — why this organization and this initiative fits their giving focus",
      "Financial transparency — how you steward resources and what overhead looks like in context",
      "Beneficiary stories or testimonials that make the impact real and human",
      "A specific ask with clear allocation — funders want to know exactly what their investment funds",
    ],
  },
];

export const INDUSTRY_GROUPS = [
  {
    label: "Sales & Revenue",
    slugs: ["b2b-sales", "saas", "startups", "sponsorship-media"],
  },
  {
    label: "Services & Professionals",
    slugs: ["agencies", "consultancies", "recruiting", "training-coaching"],
  },
  {
    label: "Industry Verticals",
    slugs: ["home-services", "commercial-real-estate", "financial-advisors", "nonprofits"],
  },
] as const;

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
