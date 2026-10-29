/**
 * The ideas people can pick at /ideas. Edit freely: the id is what gets
 * counted (lowercase letters, digits and hyphens, at most 40 characters),
 * and the app's /admin/ideas page shows it tidied ("brand-kit" reads
 * "Brand kit"). Keep an id once people have picked it, so its votes stay
 * together. Keep every line free of em dashes.
 */
export interface Idea {
  id: string;
  title: string;
  blurb: string;
}

export const IDEAS: Idea[] = [
  {
    id: "brand-kit",
    title: "A brand kit",
    blurb: "Save your logo, colors and fonts once, and every deck starts in them.",
  },
  {
    id: "charts-from-data",
    title: "Charts from your numbers",
    blurb: "Paste a table or drop in a spreadsheet and get real charts, not pictures of charts.",
  },
  {
    id: "fonts-in-powerpoint",
    title: "Your fonts in the PowerPoint",
    blurb: "The editable file carries its fonts, so it looks right on any computer, not just yours.",
  },
  {
    id: "powerpoint-add-in",
    title: "PitchBoost inside PowerPoint",
    blurb: "Fix a slide or build a new one without leaving PowerPoint.",
  },
  {
    id: "crm-decks",
    title: "Decks from your CRM",
    blurb: "Start a deck from a HubSpot, Salesforce or Pipedrive deal, and log it back when it's sent.",
  },
  {
    id: "team-comments",
    title: "Comments for your team",
    blurb: "Teammates leave notes on the slides before anything goes out, instead of in a 40-message thread.",
  },
  {
    id: "translate-deck",
    title: "One-click translation",
    blurb: "The same deck in another language, layout and all.",
  },
  {
    id: "narrated-video",
    title: "Narrated video",
    blurb: "Turn a deck into a short video with a voiceover, for people who won't take the call.",
  },
];
