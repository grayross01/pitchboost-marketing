import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PitchBoost collects, uses, and protects your personal data. Read our full privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="mkt-container">
          <h1>Privacy Policy</h1>
          <p>Last updated: September 29, 2026</p>
        </div>
      </section>

      <div className="legal-content">
        <p>
          PitchBoost is operated by ARK Holdings, LLC, an Oregon limited
          liability company (&quot;PitchBoost&quot;, &quot;we&quot;, &quot;us&quot;).
          This policy explains what we collect and how we use it.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          <strong>Account information:</strong> When you sign up we collect your
          name, email address, and authentication credentials via Auth0.
        </p>
        <p>
          <strong>Deck content:</strong> Any text, images, brand assets, and
          presentation content you upload or generate through our service.
        </p>
        <p>
          <strong>Usage and analytics:</strong> We collect anonymous usage data
          such as page views, feature usage, and performance metrics to improve
          the product.
        </p>
        <p>
          <strong>Payment information:</strong> Payment details are processed and
          stored by Stripe. We do not store your full credit card number.
        </p>
        <p>
          <strong>Where you came from:</strong> When you arrive from an ad or
          another website, we record what sent you, such as the Google Ads
          click ID, the campaign tags in the link, the page you landed on and
          the referring site, and keep it with your account when you sign up.
        </p>

        <h2>2. How We Use Your Data</h2>
        <ul>
          <li>
            To provide and maintain our service, including AI-powered deck
            generation.
          </li>
          <li>To process payments and manage your subscription.</li>
          <li>
            To send transactional emails (e.g., receipts, account
            notifications).
          </li>
          <li>
            To improve our product through aggregated, anonymized analytics.
          </li>
          <li>
            To measure which ads and channels bring people to PitchBoost, and
            to tell the ad platform that sent you when you sign up, create your
            first deck or make a purchase (see section 5).
          </li>
          <li>To respond to support requests.</li>
        </ul>

        <h2>3. Data Retention</h2>
        <p>
          We retain your account data and deck content for as long as your
          account is active. If you delete your account, we will remove your
          personal data and deck content within 30 days, except where retention
          is required by law.
        </p>

        <h2>4. Third-Party Services</h2>
        <p>
          We use the following third-party services that may process your data:
        </p>
        <ul>
          <li>
            <strong>Auth0</strong>, authentication and identity management.
          </li>
          <li>
            <strong>Stripe</strong>, payment processing and subscription
            management.
          </li>
          <li>
            <strong>Vercel</strong>, hosting and infrastructure.
          </li>
          <li>
            <strong>Anthropic (Claude)</strong>, AI content generation. Deck
            content you provide is sent to Anthropic&apos;s API for processing.
            Refer to{" "}
            <a
              href="https://www.anthropic.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anthropic&apos;s privacy policy
            </a>{" "}
            for details on their data handling.
          </li>
          <li>
            <strong>Google (Gemini)</strong>, AI image generation, only when you
            turn on AI images for a deck. Receives the image prompt derived from
            the slide, not your whole deck.
          </li>
          <li>
            <strong>Neon</strong>, the Postgres database that stores accounts,
            deals and deck content, in the United States.
          </li>
          <li>
            <strong>Microlink</strong>, renders slide screenshots for PowerPoint
            exports and email thumbnails from a time-limited link to the slide.
          </li>
          <li>
            <strong>Resend</strong>, transactional email delivery.
          </li>
          <li>
            <strong>Sentry</strong>, error monitoring (stack traces and request
            metadata, not deck content).
          </li>
          <li>
            <strong>Cloudflare</strong>, DNS and edge proxy for the application.
          </li>
          <li>
            <strong>Google (Google Ads, Google Analytics, Google Tag
            Manager)</strong>, advertising measurement, ads shown to past
            visitors of our site, and site analytics. If you sign up after
            clicking one of our Google ads, we send Google that ad&apos;s click
            ID with the time and value of your sign-up, first deck and
            purchases, so it can report which ads work. For the same purpose,
            when you sign up we send Google your sign-up, first deck and
            purchases with a one-way hash (SHA-256) of your email address
            instead of the address itself. Google matches the hash against its
            own signed-in users to see whether one of our ads led to them,
            including an ad clicked on another device. No deck content is
            sent.
          </li>
          <li>
            <strong>Meta (Facebook pixel)</strong>, measures visits from our
            Meta ads and lets us show ads to people who have visited our site.
          </li>
        </ul>
        <p>
          The <a href="/security">security page</a> describes what each provider
          receives and where data is stored.
        </p>

        <h2>5. Cookies and Advertising</h2>
        <p>
          We use essential cookies for authentication and session management,
          and analytics cookies to understand how the service is used.
        </p>
        <p>
          We also use advertising cookies from Google and Meta (such as{" "}
          <code>_gcl_aw</code>, <code>_gcl_au</code>, <code>_ga</code> and{" "}
          <code>_fbp</code>) and our own <code>pb_attr</code> cookie, which
          records what sent you to us. They let us measure which of our ads
          lead to sign-ups and purchases, and let Google and Meta show our ads
          to people who have visited our site. These providers may use
          cookies to show you ads based on your past visits to our site and
          other sites.
        </p>
        <p>
          You can turn off personalized ads from Google in{" "}
          <a href="https://myadcenter.google.com" target="_blank" rel="noopener noreferrer">
            My Ad Center
          </a>
          , from Meta in your{" "}
          <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer">
            ad preferences
          </a>
          , and from many other ad providers at{" "}
          <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">
            optout.aboutads.info
          </a>
          . You can also block or delete cookies in your browser settings.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>
            <strong>Access</strong> the personal data we hold about you.
          </li>
          <li>
            <strong>Delete</strong> your account and associated data.
          </li>
          <li>
            <strong>Export</strong> your deck content at any time from the
            dashboard.
          </li>
          <li>
            <strong>Correct</strong> inaccurate personal information.
          </li>
          <li>
            <strong>Object</strong> to processing of your data for certain
            purposes.
          </li>
        </ul>

        <h2>7. Data Security</h2>
        <p>
          We implement industry-standard security measures including encryption
          in transit (TLS), secure authentication, and regular security reviews.
          However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2>8. Contact</h2>
        <p>
          For privacy-related questions or to exercise your rights, contact us at{" "}
          <a href="mailto:privacy@pitchboost.ai">privacy@pitchboost.ai</a>.
        </p>
      </div>
    </>
  );
}
