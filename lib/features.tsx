export interface FeatureMeta {
  slug: string;
  navLabel: string;
  shortDescription: string;
}

export interface FeatureGroup {
  label: string;
  slugs: string[];
}

export const FEATURES: FeatureMeta[] = [
  {
    slug: "ai-deck-builder",
    navLabel: "AI Deck Builder",
    shortDescription: "Generate personalized pitch decks and presentations in minutes",
  },
  {
    slug: "upload-and-redesign",
    navLabel: "Upload & Redesign",
    shortDescription: "Polish and personalize your existing PPT or PPTX, and export it back as editable PowerPoint",
  },
  {
    slug: "bulk-rebuild",
    navLabel: "Bulk Rebuild",
    shortDescription: "Rebuild a folder of old PowerPoints in one run, and get editable .pptx files back",
  },
  {
    slug: "output-types",
    navLabel: "Output Types",
    shortDescription: "Pitch decks, one-sheets, buyer FAQs, and more",
  },
  {
    slug: "templates-and-slides",
    navLabel: "Templates & Saved Slides",
    shortDescription: "Build, save, and reuse your best decks and slides",
  },
  {
    slug: "brand-and-images",
    navLabel: "Brand & Image Library",
    shortDescription: "Keep your brand consistent across every deck",
  },
  {
    slug: "publishing-and-sharing",
    navLabel: "Publishing & Sharing",
    shortDescription: "Links, PDF, PPT export, custom domains, and privacy controls",
  },
  {
    slug: "viewer-analytics",
    navLabel: "Viewer Analytics",
    shortDescription: "Track who reads what, which slides land, and when they come back",
  },
  {
    slug: "team-and-permissions",
    navLabel: "Team & Permissions",
    shortDescription: "Roles, access levels, and unlimited team members",
  },
  {
    slug: "api-and-mcp",
    navLabel: "API & MCP",
    shortDescription: "Build pitch decks and proposals from Claude or your own AI stack",
  },
];

export const FEATURE_GROUPS: FeatureGroup[] = [
  { label: "Build", slugs: ["ai-deck-builder", "upload-and-redesign", "bulk-rebuild", "output-types", "api-and-mcp"] },
  { label: "Brand & Content", slugs: ["templates-and-slides", "brand-and-images"] },
  { label: "Share & Scale", slugs: ["publishing-and-sharing", "viewer-analytics", "team-and-permissions"] },
];
