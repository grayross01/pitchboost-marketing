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
    // app's server-rendered route. Sitemap + canonicals in the app are
    // set to the www URLs so Google indexes the canonical version.
    return [
      {
        source: "/pitch-deck",
        destination: "https://app.pitchboost.ai/pitch-deck",
      },
      {
        source: "/pitch-deck/:slug*",
        destination: "https://app.pitchboost.ai/pitch-deck/:slug*",
      },
    ];
  },
};

export default nextConfig;
