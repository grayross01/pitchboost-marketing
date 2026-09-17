import type { Metadata } from "next";
import Link from "next/link";
import { STATIC_PAGE_DATES } from "@/lib/page-dates";

export const metadata: Metadata = {
  title: "About PitchBoost | The company behind the deck rebuilder",
  description:
    "PitchBoost is an AI presentation tool from ARK Holdings, LLC in Oregon. What we build, why decks and not slides, how the product is made, and how to reach us.",
  alternates: { canonical: "https://pitchboost.ai/about" },
  openGraph: {
    title: "About PitchBoost",
    description: "What PitchBoost is, who makes it, and the rules the product is built to.",
    images: [{ url: "https://pitchboost.ai/og-image.png", width: 1310, height: 820 }],
  },
};

const FACTS: Array<[string, string]> = [
  ["Product", "PitchBoost, an AI tool that redesigns existing PowerPoint decks and builds new pitch decks in a company's own brand."],
  ["Company", "ARK Holdings, LLC, an Oregon limited liability company. PitchBoost is one of its products."],
  ["Founded", "PitchBoost launched in 2026 and is self-funded."],
  ["Where", "Oregon, United States. The product is hosted on Vercel and Neon in the United States."],
  ["Users", "Founders, sales teams, agencies, consultants and real estate agents in the United States, Latin America and Europe. The product is available in English, Spanish and Portuguese."],
  ["Contact", "support@pitchboost.ai for everything: support, billing, press, security."],
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About PitchBoost",
    url: "https://pitchboost.ai/about",
    dateModified: STATIC_PAGE_DATES["/about"],
    mainEntity: {
      "@type": "Organization",
      name: "PitchBoost",
      legalName: "ARK Holdings, LLC",
      url: "https://pitchboost.ai",
      logo: "https://pitchboost.ai/logo.png",
      foundingDate: "2026",
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressRegion: "Oregon", addressCountry: "US" },
      contactPoint: { "@type": "ContactPoint", contactType: "customer support", email: "support@pitchboost.ai", availableLanguage: ["English", "Spanish", "Portuguese"] },
      sameAs: ["https://www.linkedin.com/company/pitchboost-ai", "https://www.crunchbase.com/organization/pitchboost", "https://www.capterra.com/p/10042838/PitchBoost/"],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="legal-hero">
        <div className="mkt-container">
          <h1>About PitchBoost</h1>
          <p>A small company in Oregon that got tired of good decks looking bad.</p>
        </div>
      </section>

      <div className="legal-content">
        <h2>What PitchBoost is</h2>
        <p>
          PitchBoost is an AI presentation tool with one job: turn the deck you have into the
          deck you meant. You upload a PowerPoint (or export one from Google Slides or Keynote),
          point it at your website, and a few minutes later you have the same story with
          professional layout, typography and color, in your own brand, published as a link you
          can track and a file you can download. It also builds new pitch decks, proposals and
          one-pagers from a short brief, and it can do both from inside ChatGPT or Claude.
        </p>

        <h2>Why decks and not slides</h2>
        <p>
          Most presentation tools start from a blank slide and a template gallery. That is the
          wrong starting point for anyone who already has a story, and almost everyone who
          pitches for a living already has one. The hard part is never the slides. It is keeping
          the narrative, the numbers and the claims intact while everything around them gets
          rebuilt. So PitchBoost reads the deck first, keeps what it says, and redesigns how it
          says it. The brand comes from your website, not from a palette picker.
        </p>

        <h2>The rules the product is built to</h2>
        <ul>
          <li>
            <strong>Nothing invented.</strong> Every number in a rebuilt deck is checked against
            the deck you uploaded. A figure that cannot be traced to your source is removed
            rather than shipped.
          </li>
          <li>
            <strong>Your brand, not ours.</strong> Logo, colors, fonts and tone are captured from
            your site. The free plan carries a small badge; paid plans carry nothing of ours.
          </li>
          <li>
            <strong>Editable output.</strong> Every deck is a live web link plus a PDF and an
            editable PowerPoint with real text boxes. You are never locked into the tool.
          </li>
          <li>
            <strong>Plain pricing.</strong> Free to start, one deck a month. Starter at $9 a
            month, Pro at $29, Business at $79. The <Link href="/pricing">pricing page</Link> is
            the whole story.
          </li>
          <li>
            <strong>Honest about limits.</strong> Free rebuilds stop at 10 slides, Starter at 25,
            Pro at 60. Speaker notes and text inside embedded objects are not read yet. These
            are stated in the <Link href="/help">help center</Link>, not discovered after payment.
          </li>
        </ul>

        <h2>How it is made</h2>
        <p>
          The product is built and run by a small team under ARK Holdings, LLC. Deck generation
          uses Anthropic&apos;s Claude models; optional imagery uses Google&apos;s Gemini image
          model; the application runs on Vercel with a Neon Postgres database, sign-in through
          Auth0 and payments through Stripe. We use PitchBoost for our own decks, which is why
          the badge, the exports and the fact check get fixed quickly when they misbehave. The
          <Link href="/changelog"> changelog</Link> lists what changed and when, and the{" "}
          <Link href="/security">security page</Link> describes how customer data is handled.
        </p>

        <h2>Company facts</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
            <tbody>
              {FACTS.map(([k, v]) => (
                <tr key={k} style={{ borderTop: "1px solid var(--ds-border)" }}>
                  <th scope="row" style={{ textAlign: "left", padding: "10px 12px 10px 0", whiteSpace: "nowrap", verticalAlign: "top", color: "var(--ds-text)", fontWeight: 700 }}>{k}</th>
                  <td style={{ padding: "10px 0", color: "var(--ds-text-light)", lineHeight: 1.6 }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Reach us</h2>
        <p>
          Email <a href="mailto:support@pitchboost.ai">support@pitchboost.ai</a>. A person
          answers, usually within one business day. Press and partnership questions go to the
          same address. Legal notices go to ARK Holdings, LLC at the same address; see the{" "}
          <Link href="/terms">terms of service</Link> and <Link href="/privacy">privacy policy</Link>.
        </p>
      </div>
    </>
  );
}
