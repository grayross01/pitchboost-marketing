import { COMPETITORS_UPDATED } from "./page-dates";
import type { Competitor } from "./competitors";

/**
 * Side-by-side tests on the comparison pages: one real file put through both
 * tools, with the slides as they came out. Facts only, and every claim here
 * must match the pictures in public/compare/<folder>/. The runs, settings and
 * raw captures are noted in the app repo's qa-decks/compare-gamma/README.md
 * (kept locally, never committed).
 */

export type TestFlag = "kept" | "changed" | "invented";

export interface TestColumn {
  key: string;
  label: string;
  /** The setting it ran with, in a few words. */
  detail: string;
  ours?: boolean;
}

export interface TestCell {
  /** A picture of the slide, from public/. Without one, `lines` stand in. */
  img?: string;
  alt?: string;
  lines?: string[];
  note: string;
  /** What happened to the slide's figures, when that is the point of the row. */
  flag?: TestFlag;
}

export interface TestRow {
  title: string;
  cells: Record<string, TestCell>;
}

export interface ComparisonTest {
  competitorSlug: string;
  /** ISO date of the runs. */
  date: string;
  dateLabel: string;
  heading: string;
  intro: string;
  sourceHref: string;
  /** Our version, live, all slides. */
  oursHref?: string;
  columns: TestColumn[];
  rows: TestRow[];
  findings: { title: string; body: string }[];
  method: string[];
}

const G = "/compare/gamma-test";

export const COMPARISON_TESTS: ComparisonTest[] = [
  {
    competitorSlug: "pitchboost-vs-gamma",
    date: "2026-11-15",
    dateLabel: "November 15, 2026",
    heading: "We ran the same PowerPoint through both",
    intro: "A plain nine-slide quarterly review with bullet points, a bar chart and a table: the kind of deck people bring to a redesign. We put the same file through Gamma's two import modes and through PitchBoost, each with its default look. Here are four of the slides as they came out.",
    sourceHref: `${G}/brightwell-q3-2026-review.pptx`,
    oursHref: "https://app.pitchboost.ai/d/XGDg8nMpZL",
    columns: [
      { key: "original", label: "Original", detail: "PowerPoint, default styling" },
      { key: "gammaTransform", label: "Gamma: Transform content", detail: "Text set to Preserve" },
      { key: "gammaVisual", label: "Gamma: Visual import", detail: "Beta" },
      { key: "pitchboost", label: "PitchBoost", detail: "Redesign, no instructions", ours: true },
    ],
    rows: [
      {
        title: "Slide 1: Title",
        cells: {
          original: { img: `${G}/original-01.jpg`, alt: "The original title slide: black text on white", note: "A default title slide." },
          gammaTransform: { img: `${G}/gamma-transform-01.jpg`, alt: "Gamma's title slide with an AI illustration of a house with solar panels", note: "Adds an AI illustration of a solar roof." },
          gammaVisual: { img: `${G}/gamma-visual-01.jpg`, alt: "Gamma's Visual import title slide: the same layout in Gamma's fonts", note: "The same layout in Gamma's fonts and colours." },
          pitchboost: { img: `${G}/pitchboost-01.jpg`, alt: "PitchBoost's title slide: white and coral title on a dark teal background", note: "Rebuilt as a dark title slide. The logo mark is ours: it came from the brand on the account we used." },
        },
      },
      {
        title: "Slide 3: Q3 highlights",
        cells: {
          original: { img: `${G}/original-03.jpg`, alt: "The original highlights slide: five bullet points", note: "Five bullet points." },
          gammaTransform: { img: `${G}/gamma-transform-03.jpg`, alt: "Gamma's highlights slide: the five points as cards", note: "Each bullet becomes a card. Words unchanged." },
          gammaVisual: { img: `${G}/gamma-visual-03.jpg`, alt: "Gamma's Visual import highlights slide: the same five bullets", note: "Bullets kept as they were." },
          pitchboost: { img: `${G}/pitchboost-03.jpg`, alt: "PitchBoost's highlights slide: five stat cards with icons and large figures", note: "Stat cards with the key figures pulled out. Words unchanged." },
        },
      },
      {
        title: "Slide 4: Revenue against plan",
        cells: {
          original: { lines: ["A native PowerPoint bar chart:", "Actual: July 3.0, August 3.2, September 3.6", "Plan: July 3.1, August 3.1, September 3.05"], note: "Shown as its numbers here; the chart itself is in the file." },
          gammaTransform: { img: `${G}/gamma-transform-04.jpg`, alt: "Gamma's chart slide: revenue by quarter, Q1 8.1, Q2 8.7, Q3 9.8, with a plan line at 9.25", note: "The chart's data did not survive the import, so Gamma drew a chart by quarter. Q1 at $8.1M and Q2 at $8.7M appear nowhere in the deck.", flag: "invented" },
          gammaVisual: { img: `${G}/gamma-visual-04.jpg`, alt: "Gamma's Visual import chart slide: a table of July to September, actual and plan", note: "The months survive as a table rather than a chart, and September's plan of $3.05M becomes $3.1M.", flag: "changed" },
          pitchboost: { img: `${G}/pitchboost-04.jpg`, alt: "PitchBoost's chart slide: July to September, actual against plan, with all six values", note: "Rebuilt as a chart from the original six figures.", flag: "kept" },
        },
      },
      {
        title: "Slide 5: Customer metrics",
        cells: {
          original: { img: `${G}/original-05.jpg`, alt: "The original metrics table", note: "A plain table." },
          gammaTransform: { img: `${G}/gamma-transform-05.jpg`, alt: "Gamma's metrics table with a blue header row", note: "Every figure kept." },
          gammaVisual: { img: `${G}/gamma-visual-05.jpg`, alt: "Gamma's Visual import metrics table", note: "Every figure kept." },
          pitchboost: { img: `${G}/pitchboost-05.jpg`, alt: "PitchBoost's metrics table with the changes shown as pills", note: "Every figure kept, with the changes picked out." },
        },
      },
    ],
    findings: [
      { title: "Every word made it through", body: "All three kept every bullet point and every figure in the table, word for word." },
      { title: "The chart is where they split", body: "Gamma's Transform content mode lost the chart's data on the way in and drew a new chart by quarter, with two revenue figures that are not in the deck. Visual import kept the right months but turned the chart into a table and rounded one figure. PitchBoost rebuilt the chart from the original numbers." },
      { title: "How far each one redesigns", body: "Visual import keeps your layout and changes the type. Transform content turns slides into cards and adds AI illustrations. PitchBoost lays out each slide for what is on it, and it flagged the deck's placeholder email address for us to fill in." },
    ],
    method: [
      "One run of each, on November 15, 2026. AI output varies between runs, so try it with your own file.",
      "Gamma: Import file, then Transform content (the option Gamma suggests for redesigning) with Text content set to Preserve, the setting that keeps your words, and separately Visual import (beta). Default themes, AI images left on.",
      "PitchBoost: Redesign my slides with no instructions, on an account whose brand is PitchBoost's own, which is why our logo mark sits on the title slide. Given your website or logo, it uses yours.",
      "Gamma slides are screenshots of its present mode; PitchBoost slides are taken from the deck's share link.",
    ],
  },
];

export function getComparisonTest(slug: string): ComparisonTest | undefined {
  return COMPARISON_TESTS.find((t) => t.competitorSlug === slug);
}

/** When a comparison page last changed: its pricing check or its test,
 *  whichever is later. */
export function comparisonModified(c: Competitor): string {
  const dates = [c.updated ?? COMPETITORS_UPDATED, getComparisonTest(c.slug)?.date].filter((d): d is string => !!d);
  return dates.sort().at(-1)!;
}
