/**
 * State presets for the seller net sheet calculator's state-specific pages
 * (/tools/seller-net-sheet/[state]). Each preset preloads the transfer/excise
 * tax line with the state's commonly-cited rate so the estimate lands closer
 * on the first try — the field stays fully editable and every page carries
 * the estimate disclaimer.
 *
 * Rates are the widely used statewide defaults as of 2026 and intentionally
 * conservative about local add-ons (called out in `note` instead of baked
 * into the math). Twelve states chosen by real-estate transaction volume +
 * the state-specific search demand we see in ads ("seller net sheet
 * calculator florida").
 */

export interface NetSheetStatePreset {
  slug: string;
  name: string;
  /** Transfer tax as a fraction of sale price used to prefill the field. */
  rate: number;
  /** Human label for the rate, shown on-page and in the FAQ. */
  rateLabel: string;
  /** County/city caveats surfaced under the calculator. */
  note: string;
}

export const NET_SHEET_STATES: NetSheetStatePreset[] = [
  {
    slug: "florida",
    name: "Florida",
    rate: 0.007,
    rateLabel: "$0.70 per $100 documentary stamp tax (0.7%)",
    note: "Miami-Dade County uses $0.60 per $100 on single-family homes (with a surtax on other property types).",
  },
  {
    slug: "texas",
    name: "Texas",
    rate: 0,
    rateLabel: "no state transfer tax ($0)",
    note: "Texas charges no real estate transfer tax. Title insurance premiums are state-regulated and typically the larger seller closing cost.",
  },
  {
    slug: "california",
    name: "California",
    rate: 0.0011,
    rateLabel: "$1.10 per $1,000 county documentary transfer tax (0.11%)",
    note: "Charter cities can add their own transfer tax on top — Los Angeles, San Francisco, and others have significantly higher combined rates on some price tiers.",
  },
  {
    slug: "new-york",
    name: "New York",
    rate: 0.004,
    rateLabel: "$2 per $500 state transfer tax (0.4%)",
    note: "Residential sales of $1M+ add the 1% mansion tax (customarily buyer-paid), and New York City adds its own transfer tax.",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    rate: 0.002,
    rateLabel: "$1 per $500 state excise tax (0.2%)",
    note: "A handful of coastal counties are authorized to add a local land transfer tax.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    rate: 0.001,
    rateLabel: "$1 for the first $1,000 plus $0.10 per additional $100 (~0.1%)",
    note: "Applies to the sale price less any assumed liens.",
  },
  {
    slug: "arizona",
    name: "Arizona",
    rate: 0,
    rateLabel: "no transfer tax (flat $2 deed recording fee)",
    note: "Arizona voters constitutionally banned real estate transfer taxes in 2008.",
  },
  {
    slug: "washington",
    name: "Washington",
    rate: 0.0128,
    rateLabel: "graduated REET — 1.28% on the middle price tier",
    note: "State REET runs 1.1% to 3% depending on price bracket (brackets adjust periodically), and some cities add a local rate on top. Adjust the prefilled amount to your bracket.",
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    rate: 0.0037,
    rateLabel: "$0.37 per $100 recordation transfer tax (0.37%)",
    note: "Customarily paid by the buyer in many Tennessee markets — zero it out if that's how your contract reads.",
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    rate: 0.0037,
    rateLabel: "$1.85 per $500 deed recording fee (0.37%)",
    note: "Combined state and county portions; customarily seller-paid.",
  },
  {
    slug: "michigan",
    name: "Michigan",
    rate: 0.0086,
    rateLabel: "$3.75 state + $0.55 county per $500 (0.86% combined)",
    note: "Counties with populations over 2M may charge up to $0.75 per $500.",
  },
  {
    slug: "nevada",
    name: "Nevada",
    rate: 0.0051,
    rateLabel: "$2.55 per $500 in Clark County (0.51%)",
    note: "Outside Clark County (Las Vegas) most counties are $1.95 per $500 (0.39%) — edit the prefilled amount if you're elsewhere.",
  },
];

export function getNetSheetState(slug: string): NetSheetStatePreset | undefined {
  return NET_SHEET_STATES.find((s) => s.slug === slug);
}
