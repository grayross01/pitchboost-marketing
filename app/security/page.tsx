import type { Metadata } from "next";
import Link from "next/link";
import { STATIC_PAGE_DATES } from "@/lib/page-dates";

export const metadata: Metadata = {
  title: "Security at PitchBoost | How your decks and data are handled",
  description:
    "Where PitchBoost stores your data, who processes it, how sign-in and sharing work, what is encrypted, what we do not hold (no SOC 2 yet), and how to report a security issue.",
  alternates: { canonical: "https://pitchboost.ai/security" },
  openGraph: {
    title: "Security at PitchBoost",
    description: "A plain description of how customer data is stored, processed and protected.",
    images: [{ url: "https://pitchboost.ai/og-image.png", width: 1310, height: 820 }],
  },
};

const PROCESSORS: Array<[string, string, string]> = [
  ["Vercel", "Application hosting, edge network and file storage for deck exports, thumbnails and uploaded images.", "United States"],
  ["Neon", "Postgres database: accounts, deals, deck content, analytics events. Encrypted at rest, continuous backups.", "United States"],
  ["Auth0 (Okta)", "Sign-in and account security. Passwords are stored by Auth0, never by PitchBoost. Google sign-in supported.", "United States"],
  ["Anthropic", "Claude models write and revise decks. Deck text you upload is sent to generate your deck. Anthropic's commercial API terms do not permit training on this data.", "United States"],
  ["Google", "Gemini image model, only when you turn on AI images for a deck. Receives the image prompt derived from the slide.", "United States"],
  ["Microlink", "Renders slide screenshots for PowerPoint exports and email thumbnails. Receives a time-limited link (valid for about a day) to the slide being rendered.", "United States"],
  ["Stripe", "Payments and subscriptions. Card numbers never touch PitchBoost servers.", "United States"],
  ["Resend", "Transactional email: deck-ready notices, viewer notifications, account emails.", "United States"],
  ["Sentry", "Error monitoring. Receives stack traces and request metadata, not deck content.", "United States"],
  ["Cloudflare", "DNS and edge proxy for the application hostname.", "Global"],
];

export default function SecurityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Security at PitchBoost",
    url: "https://pitchboost.ai/security",
    dateModified: STATIC_PAGE_DATES["/security"],
    publisher: { "@type": "Organization", name: "PitchBoost", legalName: "ARK Holdings, LLC", url: "https://pitchboost.ai" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="legal-hero">
        <div className="mkt-container">
          <h1>Security</h1>
          <p>What happens to your deck after you upload it, in plain language.</p>
        </div>
      </section>

      <div className="legal-content">
        <p>
          This page describes how PitchBoost, operated by ARK Holdings, LLC, stores and
          protects customer data as of {STATIC_PAGE_DATES["/security"]}. It is written to be
          checked, not to reassure. If something here is unclear or you need a specific answer
          for a vendor review, email{" "}
          <a href="mailto:support@pitchboost.ai">support@pitchboost.ai</a>.
        </p>

        <h2>Where your data lives</h2>
        <p>
          Accounts, deals, deck content and analytics live in a Postgres database hosted by Neon
          in the United States, encrypted at rest and backed up continuously. Files (uploaded
          images, deck exports, thumbnails) live in Vercel&apos;s file storage. Everything moves
          over TLS. There is no self-hosted option today.
        </p>

        <h2>Sign-in</h2>
        <p>
          Authentication is handled by Auth0. PitchBoost never sees or stores your password. You
          can sign in with Google or with an email and password; sessions are cookie based and
          cleared on sign-out. API keys for the REST API and the MCP server are shown once and
          stored only as a SHA-256 hash. Connecting PitchBoost to ChatGPT or Claude uses OAuth
          with PKCE; you can revoke it from those apps at any time.
        </p>

        <h2>Your deck content</h2>
        <p>
          When you upload a PowerPoint, PitchBoost reads the slide text, images and chart data
          it needs to rebuild the deck, and keeps the extracted content with the deal so the
          fact check can compare the rebuilt deck to your original. The .pptx file itself is not
          kept after extraction. Generated decks belong to your account; you can delete a deal,
          make a deck private, or ask us to delete the whole account, which removes personal
          data and deck content within 30 days except where law requires retention.
        </p>
        <p>
          We do not use your content to train models. Deck text is sent to Anthropic to
          generate and revise your deck, and to Google only if you turn on AI images. Both
          providers process it to produce your output under their API terms.
        </p>

        <h2>Sharing and viewer data</h2>
        <p>
          A published deck is an unlisted link: anyone with the link can view it, nobody can
          find it by browsing, and it can carry a password or be taken offline from the share
          screen. Viewer analytics record opens and time on each slide against a hashed
          identifier; a viewer&apos;s email is stored only if they enter it in the deal room. Free
          plan decks carry a small PitchBoost badge, and unlisted deck links are marked
          noindex so search engines do not list them.
        </p>

        <h2>Who processes your data</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.92rem" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--ds-border)", textAlign: "left" }}>
                <th style={{ padding: "8px 12px 8px 0" }}>Provider</th>
                <th style={{ padding: "8px 12px 8px 0" }}>What it does with your data</th>
                <th style={{ padding: "8px 0" }}>Region</th>
              </tr>
            </thead>
            <tbody>
              {PROCESSORS.map(([name, what, region]) => (
                <tr key={name} style={{ borderTop: "1px solid var(--ds-border)", verticalAlign: "top" }}>
                  <td style={{ padding: "10px 12px 10px 0", fontWeight: 700, color: "var(--ds-text)", whiteSpace: "nowrap" }}>{name}</td>
                  <td style={{ padding: "10px 12px 10px 0", color: "var(--ds-text-light)", lineHeight: 1.55 }}>{what}</td>
                  <td style={{ padding: "10px 0", color: "var(--ds-text-light)", whiteSpace: "nowrap" }}>{region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Payments</h2>
        <p>
          Checkout and subscriptions run on Stripe. PitchBoost stores a Stripe customer id and
          the plan you are on, never card numbers. Invoices, plan changes and cancellations are
          handled in the app under Settings or by email.
        </p>

        <h2>What we do not have</h2>
        <p>
          PitchBoost does not hold SOC 2, ISO 27001 or similar certifications today, and does
          not offer single sign-on, data residency outside the United States, or a signed data
          processing agreement on the self-serve plans. If your organisation needs any of these,
          tell us what the review requires and we will answer specifically rather than
          generally.
        </p>

        <h2>Reporting a security issue</h2>
        <p>
          Email <a href="mailto:support@pitchboost.ai">support@pitchboost.ai</a> with
          &quot;Security&quot; in the subject line. Include the URL or feature involved and steps to
          reproduce. We acknowledge reports within two business days and do not pursue legal
          action against good-faith research that avoids customer data and service disruption.
          See also the <Link href="/privacy">privacy policy</Link> and{" "}
          <Link href="/terms">terms of service</Link>.
        </p>
      </div>
    </>
  );
}
