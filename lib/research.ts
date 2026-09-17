/**
 * Original research: numbers only PitchBoost can publish, from its own
 * product data. Every study states its sample, window and method, and is
 * dated. Aggregates only; no customer is identifiable. Update a study by
 * appending a new entry with a new date rather than editing the old one, so
 * a cited figure keeps pointing at the data it came from.
 */
export interface Stat {
  label: string;
  value: string;
  /** Optional 0..100 for a bar. */
  pct?: number;
}

export interface ResearchStudy {
  slug: string;
  title: string;
  metaDescription: string;
  /** The finding in one sentence, quotable as is. */
  headline: string;
  published: string;
  updated: string;
  sample: string;
  window: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[]; stats?: Stat[] }[];
  method: string[];
  limitations: string[];
  cite: string;
}

export const RESEARCH: ResearchStudy[] = [
  {
    slug: "chatgpt-signups-september-2026",
    title: "ChatGPT sent PitchBoost 8 times more signups than Google Ads in 30 days",
    metaDescription:
      "Original data from PitchBoost's signup records, 18 August to 17 September 2026: 56% of new accounts came from ChatGPT, 72% of them built a deck, and Google Ads produced 4 signups and no decks.",
    headline:
      "Between 18 August and 17 September 2026, 32 of PitchBoost's 57 new accounts (56%) arrived from ChatGPT, and 72% of them went on to build a deck. Google Ads produced 4 signups in the same window, none of which built anything.",
    published: "2026-09-17",
    updated: "2026-09-17",
    sample: "57 new accounts",
    window: "18 August to 17 September 2026",
    intro: [
      "PitchBoost records where every new account came from: the referring site, any campaign tags, the first page the person landed on, and what they did afterwards. This is the first published cut of that data. It is small, it is one product, and it is exactly what an AI-referral channel looks like from the inside.",
    ],
    sections: [
      {
        heading: "Where new accounts came from",
        paragraphs: [
          "ChatGPT is not a large share of visits. It is a large share of signups, because the people it sends have already been told what the product does and arrive with a deck to fix.",
        ],
        stats: [
          { label: "ChatGPT", value: "32 signups (56%)", pct: 56 },
          { label: "Direct or unknown referrer", value: "20 signups (35%)", pct: 35 },
          { label: "Google Ads", value: "4 signups (7%)", pct: 7 },
          { label: "Perplexity", value: "1 signup (2%)", pct: 2 },
          { label: "Google organic", value: "0 signups", pct: 0 },
        ],
      },
      {
        heading: "What each group did next",
        paragraphs: [
          "Building a deck is the first real action in PitchBoost. ChatGPT referrals did it at a higher rate than any other source, and they were far more likely to arrive with an existing PowerPoint to redesign rather than start from a blank brief.",
        ],
        stats: [
          { label: "ChatGPT: built a deck", value: "23 of 32 (72%)", pct: 72 },
          { label: "Direct: built a deck", value: "10 of 20 (50%)", pct: 50 },
          { label: "Google Ads: built a deck", value: "0 of 4 (0%)", pct: 0 },
          { label: "ChatGPT: uploaded an existing deck", value: "14 of 32 (44%)", pct: 44 },
          { label: "Direct: uploaded an existing deck", value: "2 of 20 (10%)", pct: 10 },
        ],
      },
      {
        heading: "Which pages ChatGPT sends people to",
        paragraphs: [
          "The assistant does not send people to the homepage. It sends them to the page that answers what they asked, and what they asked was overwhelmingly some version of \"redesign my PowerPoint\".",
        ],
        stats: [
          { label: "/redesign/powerpoint-redesign", value: "16 of 32 (50%)", pct: 50 },
          { label: "/features/upload-and-redesign", value: "11 of 32 (34%)", pct: 34 },
          { label: "Homepage", value: "4 of 32 (13%)", pct: 13 },
          { label: "Portuguese redesign page", value: "1 of 32 (3%)", pct: 3 },
        ],
      },
      {
        heading: "Where they were",
        paragraphs: [
          "Of the 17 ChatGPT signups with a known country, no single country had more than 3: Singapore, Brazil, Austria, the United States, India, Costa Rica, the Netherlands, the United Kingdom and Kazakhstan all appear. An assistant answering in the user's language flattens geography in a way paid search never did for us.",
        ],
      },
    ],
    method: [
      "Source: PitchBoost's own signup records. A referral is attributed to ChatGPT when the first-touch referrer is chatgpt.com or the URL carried utm_source=chatgpt.com, which ChatGPT adds to most outbound links. Perplexity is attributed by referrer. Google Ads is attributed by the presence of a Google click id.",
      "Window: accounts created between 18 August and 17 September 2026 inclusive. Accounts belonging to the company, test accounts, and signups that came through PitchBoost's own free tools or deck badges are excluded, which is why the total is 57 rather than the raw count.",
      "\"Built a deck\" means at least one deck was generated in the account. \"Uploaded an existing deck\" means a PowerPoint was uploaded for redesign.",
      "Direct or unknown means no referrer was recorded. Some of this is genuinely typed-in traffic; some is assistants and apps that strip the referrer. It is reported as one bucket rather than guessed apart.",
    ],
    limitations: [
      "This is one small product over 30 days. Percentages on a base of 4 (Google Ads) or 1 (Perplexity) describe what happened, not what will happen.",
      "ChatGPT's share is partly a function of PitchBoost having pages the assistant likes to cite for one specific question. A product without that page family would see a different split.",
      "Country is taken from the signup request and was unknown for 15 of the 32 ChatGPT signups.",
    ],
    cite: "PitchBoost, \"ChatGPT sent PitchBoost 8 times more signups than Google Ads in 30 days\", September 2026, https://pitchboost.ai/research/chatgpt-signups-september-2026",
  },
  {
    slug: "uploaded-decks-september-2026",
    title: "What people actually upload: 375 slides from 17 real decks",
    metaDescription:
      "Original data from PowerPoints uploaded to PitchBoost for redesign in September 2026: the median deck is 20 slides, 43% of slides have 8 or more lines of text, 23% carry more than 80 words, and 13 of 17 decks used no title placeholders.",
    headline:
      "In 17 PowerPoints uploaded for redesign between 6 and 17 September 2026 (375 slides), the median deck was 20 slides, 43% of slides carried 8 or more lines of text, 23% carried more than 80 words, and 13 of the 17 decks had no title placeholder on any slide.",
    published: "2026-09-17",
    updated: "2026-09-17",
    sample: "17 decks, 375 slides",
    window: "6 to 17 September 2026",
    intro: [
      "When someone uploads a deck to PitchBoost, the product reads every slide's text, chart data and images before rebuilding it. That read gives an unusually honest look at what working decks look like before anyone designs them. This is the first, small cut of that data; the sample will grow and the page will be updated with each cut.",
    ],
    sections: [
      {
        heading: "How long decks are",
        paragraphs: [
          "The 10 to 15 slide pitch deck of the advice columns is not what people have. The middle of this sample is twice that, and the top quarter is longer still.",
        ],
        stats: [
          { label: "Median deck length", value: "20 slides" },
          { label: "Middle half of decks", value: "15 to 26 slides" },
          { label: "Longest deck", value: "40 slides" },
          { label: "Decks longer than 10 slides", value: "15 of 17 (88%)", pct: 88 },
          { label: "Decks longer than 25 slides", value: "6 of 17 (35%)", pct: 35 },
        ],
      },
      {
        heading: "How much is on each slide",
        paragraphs: [
          "A slide with more than 80 words is a document, not a slide. Almost a quarter of the slides in the sample are documents, and 12 of the 17 decks contained at least one.",
        ],
        stats: [
          { label: "Median words per slide (deck average)", value: "63 words" },
          { label: "Median words per deck", value: "1,278 words" },
          { label: "Slides with more than 80 words", value: "85 of 375 (23%)", pct: 23 },
          { label: "Slides with 8 or more lines of text", value: "162 of 375 (43%)", pct: 43 },
          { label: "Slides with no readable text (image only)", value: "22 of 375 (6%)", pct: 6 },
        ],
      },
      {
        heading: "Structure and data",
        paragraphs: [
          "Most decks did not use PowerPoint's title placeholder at all; titles were typed into ordinary text boxes, which is why so many tools mislabel slides. Native charts were rare, and every deck in the sample contained numbers somewhere.",
        ],
        stats: [
          { label: "Decks with a title placeholder on every slide", value: "1 of 17 (6%)", pct: 6 },
          { label: "Decks with no title placeholders at all", value: "13 of 17 (76%)", pct: 76 },
          { label: "Decks containing native PowerPoint charts", value: "3 of 17 (18%)", pct: 18 },
          { label: "Decks with money or percentage figures", value: "8 of 17 (47%)", pct: 47 },
          { label: "Decks containing any number", value: "17 of 17 (100%)", pct: 100 },
          { label: "Decks in a right-to-left script (Arabic, Persian)", value: "3 of 17 (18%)", pct: 18 },
        ],
      },
      {
        heading: "Where the decks came from",
        paragraphs: [
          "Of the 12 uploads with a known country: United States 3, Brazil 3, and one each from Singapore, the United Kingdom, Lebanon, France, Panama and India. The redesign use case is not an American one.",
        ],
      },
    ],
    method: [
      "Source: the slide content PitchBoost extracts from uploaded .pptx files (titles from title placeholders, body text from every text box, chart series as text). Counts are computed over that extracted content, not by opening the files again.",
      "Sample: every PowerPoint uploaded for redesign by accounts outside the company between 6 September (when extracted content began to be retained) and 17 September 2026. Test accounts and internal uploads are excluded. 17 decks, 375 slides.",
      "A \"line\" is a line break in the extracted text of a slide; a \"word\" is whitespace-separated. \"No readable text\" means the extraction found no text at all on the slide, which usually means an image or a screenshot.",
      "\"Title placeholder\" means PowerPoint's own title field. A slide whose heading was typed in a normal text box counts as having no title placeholder, because that is how every downstream tool, including screen readers and outline views, sees it.",
    ],
    limitations: [
      "Seventeen decks is a small sample and the users are self-selected: people who wanted a deck redesigned. Decks people are happy with are under-represented by definition.",
      "Line and word counts depend on the extraction. Text inside embedded objects, speaker notes and images of text are not read and do not appear in these numbers.",
      "The sample will be recut monthly. Each cut is published as a dated update below the original rather than replacing it.",
    ],
    cite: "PitchBoost, \"What people actually upload: 375 slides from 17 real decks\", September 2026, https://pitchboost.ai/research/uploaded-decks-september-2026",
  },
];

export function getStudy(slug: string): ResearchStudy | undefined {
  return RESEARCH.find((s) => s.slug === slug);
}
