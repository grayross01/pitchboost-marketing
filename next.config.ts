import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: previously used `output: "export"` for static HTML export.
  // Removed to enable `rewrites()` below, which need a Node runtime.
  // The marketing site stays visually static — Next.js will server-render
  // the pages fresh on each request but the content hasn't changed.
  images: {
    unoptimized: true,
  },
  async rewrites() {
    // Proxy the programmatic-SEO landing pages from the app to the marketing
    // domain so they accrue link equity and brand authority to pitchboost.ai
    // (not app.pitchboost.ai). User sees www.pitchboost.ai/pitch-deck/stripe
    // in their browser; under the hood Next fetches the content from the
    // app's server-rendered route. Canonicals and sitemap in the app point
    // to the www URLs so Google indexes the canonical version.
    //
    // NOTE: if the marketing site grows its own sitemap in the future, we
    // should merge the two via a sitemap index. For now we proxy the app's
    // sitemap (which only lists /pitch-deck/* URLs) as the site-wide one.
    return [
      {
        source: "/pitch-deck",
        destination: "https://app.pitchboost.ai/pitch-deck",
      },
      {
        source: "/pitch-deck/:slug*",
        destination: "https://app.pitchboost.ai/pitch-deck/:slug*",
      },
      {
        source: "/sitemap.xml",
        destination: "https://app.pitchboost.ai/sitemap.xml",
      },
    ];
  },
  async redirects() {
    // Short, ad-friendly aliases for the comparison pages. The canonical pages
    // live at /compare/pitchboost-vs-<name>; these let /compare/<name> (the form
    // used in Google Ads and often guessed by people and LLMs) resolve to them.
    return [
      { source: "/compare/gamma", destination: "/compare/pitchboost-vs-gamma", permanent: true },
      { source: "/compare/beautiful-ai", destination: "/compare/pitchboost-vs-beautiful-ai", permanent: true },
      { source: "/compare/pitch", destination: "/compare/pitchboost-vs-pitch", permanent: true },
      { source: "/compare/tome", destination: "/compare/pitchboost-vs-tome", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // RFC 8288 Link headers so agents can discover the API catalog + docs
        // from the homepage response.
        source: "/",
        headers: [
          {
            key: "Link",
            value:
              '</.well-known/api-catalog>; rel="api-catalog", </features/api-and-mcp>; rel="service-doc", </openapi.json>; rel="service-desc"',
          },
        ],
      },
      {
        // RFC 9727: the API catalog must be served as a linkset.
        source: "/.well-known/api-catalog",
        headers: [{ key: "Content-Type", value: "application/linkset+json" }],
      },
    ];
  },
};

export default nextConfig;
