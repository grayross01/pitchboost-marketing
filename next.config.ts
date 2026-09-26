import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: previously used `output: "export"` for static HTML export.
  // Removed to allow server routes such as app/pitch-deck/[[...slug]], which
  // proxies the app's programmatic sample pages onto this domain.
  // The marketing site stays visually static — Next.js will server-render
  // the pages fresh on each request but the content hasn't changed.
  images: {
    unoptimized: true,
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
      // The proxied /pitch-deck pages link to /signup and /login relatively;
      // those live on the app. Query strings (e.g. ?targetUrl=) carry over.
      { source: "/signup", destination: "https://app.pitchboost.ai/signup", permanent: false },
      { source: "/login", destination: "https://app.pitchboost.ai/login", permanent: false },
      // There is no locale homepage; the translated sections start at /redesign.
      { source: "/es", destination: "/es/redesign", permanent: true },
      { source: "/pt", destination: "/pt/redesign", permanent: true },
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
