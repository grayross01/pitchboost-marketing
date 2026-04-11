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
          <p>Last updated: March 29, 2026</p>
        </div>
      </section>

      <div className="legal-content">
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
            <strong>Auth0</strong> — authentication and identity management.
          </li>
          <li>
            <strong>Stripe</strong> — payment processing and subscription
            management.
          </li>
          <li>
            <strong>Vercel</strong> — hosting and infrastructure.
          </li>
          <li>
            <strong>Anthropic (Claude)</strong> — AI content generation. Deck
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
        </ul>

        <h2>5. Cookies</h2>
        <p>
          We use essential cookies for authentication and session management. We
          may also use analytics cookies to understand how the service is used.
          You can control cookie preferences through your browser settings.
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
