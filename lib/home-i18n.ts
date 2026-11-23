/**
 * The home page's words in every language the site is published in: English
 * at the root, Spanish under /es, Brazilian Portuguese under /pt, French under
 * /fr and Arabic under /ar (right to left, see lib/locale-dir.ts). English is
 * the source and lives here; the other languages are one file each
 * (lib/home.es.ts and so on), as the maker pages do it. The sections in
 * components/marketing/home take every word they show from this dictionary.
 *
 * The page is a small theatre (the stage, the line-up, the cast, the box
 * office, house rules, heckles, the finale). A translation carries the joke
 * over, not the words, and keeps the facts: prices, limits and what PitchBoost
 * does and does not do are the same in every language.
 */
import { FAQS } from "../components/marketing/faq-data";
import { HOME_ES } from "./home.es";
import { HOME_PT } from "./home.pt";
import { HOME_FR } from "./home.fr";
import { HOME_AR } from "./home.ar";
import { LOCALES, LOCALE_PREFIX, type Locale } from "./redesign-i18n";

/** One of the audience's remarks on the stage. `width` is the bubble's width in the drawing's own units (the stage is 1440 across); it is sized to the words, so a longer remark needs a wider bubble. */
export interface HomeBubble {
  text: string;
  width: number;
}

/** One act of the line-up: its label, heading, paragraph, ticked points and button. */
export interface HomeAct {
  /** Sits in a pill of fixed height that cannot wrap, so it has to fit across a phone: about 30 characters at most. */
  tag: string;
  title: string;
  body: string;
  points: string[];
  cta: string;
}

/** The words in the hero's box. The box is a client component, so it is handed these and never loads the dictionary itself. */
export interface HomeMakerCopy {
  /** What a screen reader calls the row of choices. */
  groupLabel: string;
  /** The words before the choices: "I need a" [Deck] [Social post] [Ad] [Website]. */
  lead: string;
  kinds: { deck: string; post: string; ad: string; site: string };
  /** Shown in place of the text box for the three things that are made inside the app. */
  inside: { post: string; ad: string; site: string };
  topicLabel: string;
  placeholder: string;
  submit: string;
  upload: string;
  formats: string;
  start: string;
}

export interface HomeCopy {
  /** The page's title and description for search and sharing, and the sentence its app schema carries. */
  meta: { title: string; description: string; schemaDescription: string };
  hero: {
    /** The headline: `lead`, a space, the underlined `mark`, then `tail` (which brings its own leading space unless it is only punctuation), and `sub` on the line below. The mark stays on one line, so keep it about as short as the English one. */
    h1: { lead: string; mark: string; tail: string; sub: string };
    body: string;
    fine: string;
    /** Alt text for the four pictures on the stage. */
    alt: { deck: string; site: string; post: string; ad: string };
    /** The handwriting over each picture. */
    labels: { deck: string; site: string; posts: string; ad: string };
    bubbles: { ooh: HomeBubble; awake: HomeBubble; encore: HomeBubble };
  };
  maker: HomeMakerCopy;
  nowShowing: {
    badge: string;
    line: string;
    gallery: string;
    /** The five drawn covers, in order: what a screen reader hears, and the caption underneath. The covers are pictures and keep their English words. */
    posters: { alt: string; caption: string }[];
  };
  lineup: {
    eyebrow: string;
    title: string;
    body: string;
    decks: HomeAct & {
      /** Alt text for the highlights slide, the chart slide and the cover. */
      alts: string[];
      moreLabel: string;
      /** Seven links, in the order lineup.tsx lists their addresses. */
      more: string[];
    };
    /** The handwritten line that leads from one act to the next. */
    thenPosts: string;
    posts: HomeAct & {
      /** Alt text for the five carousel cards. */
      cards: string[];
      captionLabel: string;
      weekLabel: string;
      /** Alt text for the week's five posts. */
      week: string[];
    };
    thenAds: string;
    ads: HomeAct & {
      /** The five sizes, in order: Facebook feed, LinkedIn, square, Instagram, Stories. */
      sizes: { alt: string; caption: string }[];
      /** Three handwritten lines beside the sizes. */
      note: string[];
    };
    thenSites: string;
    sites: HomeAct & { altFull: string; altPhone: string };
  };
  cast: {
    eyebrow: string;
    title: string;
    people: { name: string; line: string }[];
    links: { presentations: string; industries: string };
  };
  alsoPlaying: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    api: string;
    /** The chat: what is asked, what comes back, and the remark scribbled underneath. */
    ask: string;
    answer: string;
    aside: string;
  };
  boxOffice: {
    eyebrow: string;
    title: string;
    body: string;
    foot: string;
    /** What is printed across the top of the four tickets, cheapest first. The third shares its line with the Pro card's badge (lib/pricing-i18n.ts), so keep that pair short. */
    tickets: string[];
  };
  houseRules: {
    eyebrow: string;
    title: string;
    stamp: string;
    rules: { title: string; body: string }[];
  };
  heckles: { eyebrow: string; title: string };
  /** The questions under the heckles. The page's FAQ schema is written from this same list. */
  faqs: { q: string; a: string }[];
  finale: {
    /** The last headline: `lead`, a space, then `mark` in yellow. */
    lead: string;
    mark: string;
    body: string;
    /** The question in the box, as its label and as its placeholder. */
    label: string;
    submit: string;
    file: string;
    fine: string;
    audienceAlt: string;
  };
}

export const HOME_EN: HomeCopy = {
  meta: {
    // Redesign-first on purpose: most ChatGPT referrals land here, and this is
    // the wording that earned them. /ai-presentation-maker carries that search.
    title: "PitchBoost: Redesign Your PowerPoint or Build a New Deck, in Your Brand",
    description:
      "Upload the PowerPoint you already have and PitchBoost rebuilds every slide in your brand, or start from a brief and get a new deck written for your audience. Share it as a tracked link, a PDF or an editable PowerPoint.",
    schemaDescription:
      "AI presentation maker that builds a new presentation from a prompt (a lesson, a report, a talk or a pitch) or redesigns an existing PowerPoint or PDF deck in your brand, in a few minutes.",
  },
  hero: {
    h1: { lead: "Slides worth", mark: "staying awake", tail: " for.", sub: "Plus the posts, ads and website to match." },
    body: "Tell PitchBoost what you're working on, or hand it the PowerPoint you already have. It designs every slide in your brand, then turns the deck into social posts, ads and a one-page website.",
    fine: "Free forever plan. No credit card required.",
    alt: {
      deck: "A deck cover: Brightwell Solar, Q3 2026 Business Review",
      site: "A website for Brightwell Solar: Solar for your home, installed in weeks",
      post: "A social post card: 34 days, average install time in Q3",
      ad: "A square ad: Solar installed in 34 days, not 41",
    },
    labels: { deck: "the deck", site: "the website", posts: "the posts", ad: "the ad" },
    bubbles: {
      ooh: { text: "ooh.", width: 110 },
      awake: { text: "wait, I'm awake?", width: 228 },
      encore: { text: "encore!", width: 130 },
    },
  },
  maker: {
    groupLabel: "What do you need?",
    lead: "I need a",
    kinds: { deck: "Deck", post: "Social post", ad: "Ad", site: "Website" },
    inside: {
      post: "Social posts are made inside PitchBoost, from a deck or a few lines of your own.",
      ad: "Ads are made inside PitchBoost, from a deck, a photo or a few lines of your own.",
      site: "A website is written inside PitchBoost, from a deck, a few sentences or the site you already have.",
    },
    topicLabel: "What is your presentation about?",
    placeholder: "What's it about?",
    submit: "Make my deck",
    upload: "Or drop in the PowerPoint you already have",
    formats: ".pptx or PDF",
    start: "Start free",
  },
  nowShowing: {
    badge: "NOW SHOWING",
    line: "Decks for every kind of room.",
    gallery: "Browse the template gallery",
    posters: [
      { alt: "Cover slide: The water cycle, a grade 6 science lesson", caption: "A science lesson" },
      { alt: "Cover slide: Brightwell Solar, an investor pitch", caption: "An investor pitch" },
      { alt: "Cover slide: a quarterly business review with one big number", caption: "A quarterly review" },
      { alt: "Cover slide: Good ideas die in meetings, a conference talk", caption: "A conference talk" },
      { alt: "Cover slide: Urban heat islands, a thesis defense", caption: "A thesis defense" },
    ],
  },
  lineup: {
    eyebrow: "THE LINE-UP",
    title: "Make one thing. Get the matching set.",
    body: "Start with a deck, then turn it into social posts, ads and a website. The pieces below are real PitchBoost output for the same made-up company: same colors, same facts, four different jobs.",
    decks: {
      tag: "ACT ONE · THE MAIN EVENT",
      title: "Decks",
      body: "Say what you're presenting, or upload the PowerPoint or PDF you already have. Every slide comes back designed in your brand, with your content and your numbers kept.",
      points: [
        "Start from one sentence, or a .pptx or PDF up to 50 MB",
        "Share a link and see who opened it and which slides held them",
        "Edit any slide afterward, by hand or by asking",
        "Download a PDF or an editable PowerPoint when you need a file",
      ],
      cta: "Make a deck",
      alts: [
        "A slide of Q3 highlights: five figures on cards",
        "A slide with a bar chart of revenue against plan",
        "The deck's cover: Brightwell Solar, Q3 2026 Business Review",
      ],
      moreLabel: "More on decks",
      more: [
        "New decks from a prompt",
        "Upload and redesign",
        "How PowerPoint redesign works",
        "Your brand on every slide",
        "Researched, cited facts",
        "Link, PDF or editable PowerPoint",
        "Viewer analytics",
      ],
    },
    thenPosts: "then turn that deck into this",
    posts: {
      tag: "ACT TWO · THE BUZZ",
      title: "Social posts",
      body: "A carousel, a single post or a week of posts for LinkedIn, Facebook and Instagram. A card made from a deck says which slide it came from, so checking a number takes a second.",
      points: ["Portrait, square or story", "A caption written for each platform", "Yours to download and post, whenever you like"],
      cta: "Make a post",
      cards: [
        "Carousel card 1: 412 residential installs, up 18% on Q2",
        "Carousel card 2: 34 days, average install time in Q3",
        "Carousel card 3: Customers are signing bigger and sticking around",
        "Carousel card 4: What could slow us down next",
        "Carousel card 5: Next, 450 installs and a 30-day install time",
      ],
      captionLabel: "ITS LINKEDIN CAPTION",
      weekLabel: "OR FIVE POSTS FOR THE WEEK",
      week: [
        "Post 1 of the week: 412 residential installs in Q3",
        "Post 2 of the week: 27%, the share of sales from referrals",
        "Post 3 of the week: Where our operations stand after Q3",
        "Post 4 of the week: The risks we are watching",
        "Post 5 of the week: 30 days, the Q4 target",
      ],
    },
    thenAds: "same facts, now with a button",
    ads: {
      tag: "ACT THREE · THE POSTERS",
      title: "Ads",
      body: "Write the ad once. PitchBoost draws it at every size it runs at on Meta and LinkedIn, so no size is a bad crop of another.",
      points: ["Five sizes in one download, each named for where it goes", "Variations to test against each other", "Send a link for sign-off before you run it"],
      cta: "Make an ad",
      sizes: [
        { alt: "The ad at 16:9 for the Facebook feed", caption: "Facebook feed · 16:9" },
        { alt: "The ad at 1.91:1 for LinkedIn", caption: "LinkedIn · 1.91:1" },
        { alt: "The ad as a square", caption: "Square · 1:1" },
        { alt: "The ad at 4:5 for the Instagram feed", caption: "Instagram · 4:5" },
        { alt: "The ad at 9:16 for Stories and Reels", caption: "Stories · 9:16" },
      ],
      note: ["one ad.", "five sizes.", "no bad crops."],
    },
    thenSites: "and a front door for all of it",
    sites: {
      tag: "ACT FOUR · THE FRONT DOOR",
      title: "Websites",
      body: "A one-page site written from your deck, a few sentences, or the site you already have. Change the words right on the page, then publish. We host it.",
      points: ["Written from a deck, a description or your current site", "Fits a phone without you touching it", "Live on our address, or on your own domain"],
      cta: "Make a website",
      altFull: "The whole one-page site for Brightwell Solar: a headline, what you get, last quarter in numbers, questions, and a way to get in touch",
      altPhone: "The same site on a phone",
    },
  },
  cast: {
    eyebrow: "THE CAST",
    title: "For people with something to show, and no design team.",
    people: [
      { name: "Founders and small teams", line: "Raising, selling and hiring, usually all before lunch." },
      { name: "Students and academics", line: "Thesis defenses, lectures, and the group project that is somehow yours." },
      { name: "Agencies and consultants", line: "Client decks, posts, ads and sites that look like you keep a designer on staff." },
      { name: "Sales teams", line: "A deck built for each prospect, and the posts and ads to warm them up first." },
    ],
    links: { presentations: "Lessons, reports and talks", industries: "Pages for your industry" },
  },
  alsoPlaying: {
    eyebrow: "ALSO PLAYING AT",
    title: "Already talking to a robot? Bring ours along.",
    body: "Add the PitchBoost plugin in ChatGPT, or connect it to Claude or Cursor, and get a finished, branded deck back on a shareable link. No copying and pasting between tabs.",
    cta: "See how it works with ChatGPT",
    api: "API and MCP",
    ask: "Redesign this deck in our brand. It's for Thursday.",
    answer: "Done. 14 slides, your colors, your numbers kept.",
    aside: "Thursday? bold.",
  },
  boxOffice: {
    eyebrow: "THE BOX OFFICE",
    title: "Pick a seat. The cheap ones are free.",
    body: "Start free and upgrade when you're ready. Every plan includes a monthly AI budget that resets automatically, and your team comes along at no charge per person. Paid plans are month to month, or yearly at a discount.",
    foot: "The same credits make decks, social posts, ads and websites. On Free you can make all four with a watermark; downloads and publishing come with a plan.",
    tickets: ["ADMIT ONE", "A PROPER SEAT", "FRONT ROW", "THE WHOLE ROW"],
  },
  houseRules: {
    eyebrow: "HOUSE RULES",
    title: "Things PitchBoost won't do to your work.",
    stamp: "NOPE",
    rules: [
      { title: "No shrugging at your numbers.", body: "A redesign keeps the figures from your original and checks them against it." },
      { title: "No mystery facts.", body: "Anything it looks up comes with its source, so you can check it too." },
      { title: "No off-brand anything.", body: "Your logo, colors and fonts on every slide, post, ad and page, picked up from your website or set by you." },
      { title: "No posting behind your back.", body: "Posts and ads are yours to download and run. Nothing goes out until you send it." },
    ],
  },
  heckles: { eyebrow: "HECKLES FROM THE BACK ROW", title: "Fair questions, shouted politely." },
  // The site's shared list, plus the one the newer formats raise.
  faqs: [
    ...FAQS,
    {
      q: "Does PitchBoost post things or run the ads for me?",
      a: "It makes them; you post them. Posts and ads download sized and named for where they go. A website is the exception: press publish and we host it.",
    },
  ],
  finale: {
    lead: "Go on.",
    mark: "The room's waiting.",
    body: "One deck a month is on the house. No credit card, no design degree.",
    label: "What are you presenting?",
    submit: "Make my deck",
    file: "Or redesign the PowerPoint you already have",
    fine: "Free forever plan. No credit card required.",
    audienceAlt: "An audience on its feet, arms in the air, under falling confetti",
  },
};

export const HOME_COPY: Record<Locale, HomeCopy> = { en: HOME_EN, es: HOME_ES, pt: HOME_PT, fr: HOME_FR, ar: HOME_AR };

/**
 * hreflang map for the home page: every language plus x-default. English sits
 * at "/" (an empty path cannot be resolved against the site's address, so the
 * redesign cluster's languageAlternates("") would not do here).
 */
export function homeLanguages(): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = LOCALE_PREFIX[l] || "/";
  languages["x-default"] = "/";
  return languages;
}
