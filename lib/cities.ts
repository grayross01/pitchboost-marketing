/**
 * Curated list of major US real estate markets for the programmatic
 * /real-estate/[city] landing pages. Kept to real, high-volume metros so the
 * pages target genuine local search intent ("real estate agent software in
 * {city}", "listing presentation {city}") rather than being thin doorway
 * pages. Each renders the full value proposition + the free tools.
 */
export interface City {
  slug: string;
  name: string;
  state: string;
}

export const CITIES: City[] = [
  { slug: "austin", name: "Austin", state: "TX" },
  { slug: "dallas", name: "Dallas", state: "TX" },
  { slug: "houston", name: "Houston", state: "TX" },
  { slug: "san-antonio", name: "San Antonio", state: "TX" },
  { slug: "phoenix", name: "Phoenix", state: "AZ" },
  { slug: "denver", name: "Denver", state: "CO" },
  { slug: "miami", name: "Miami", state: "FL" },
  { slug: "tampa", name: "Tampa", state: "FL" },
  { slug: "orlando", name: "Orlando", state: "FL" },
  { slug: "jacksonville", name: "Jacksonville", state: "FL" },
  { slug: "atlanta", name: "Atlanta", state: "GA" },
  { slug: "charlotte", name: "Charlotte", state: "NC" },
  { slug: "raleigh", name: "Raleigh", state: "NC" },
  { slug: "nashville", name: "Nashville", state: "TN" },
  { slug: "las-vegas", name: "Las Vegas", state: "NV" },
  { slug: "san-diego", name: "San Diego", state: "CA" },
  { slug: "los-angeles", name: "Los Angeles", state: "CA" },
  { slug: "sacramento", name: "Sacramento", state: "CA" },
  { slug: "seattle", name: "Seattle", state: "WA" },
  { slug: "portland", name: "Portland", state: "OR" },
  { slug: "chicago", name: "Chicago", state: "IL" },
  { slug: "columbus", name: "Columbus", state: "OH" },
  { slug: "salt-lake-city", name: "Salt Lake City", state: "UT" },
  { slug: "boise", name: "Boise", state: "ID" },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
