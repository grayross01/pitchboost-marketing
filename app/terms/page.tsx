import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using PitchBoost. Read our full terms of service agreement.",
};

export default function TermsPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="mkt-container">
          <h1>Terms of Service</h1>
          <p>Last updated: July 6, 2026</p>
        </div>
      </section>

      <div className="legal-content">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using PitchBoost (&quot;the Service&quot;), you agree
          to be bound by these Terms of Service. If you do not agree to these
          terms, do not use the Service.
        </p>

        <h2>2. Account Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account
          credentials. You agree to notify us immediately of any unauthorized
          use of your account. You must be at least 18 years old to use this
          Service.
        </p>

        <h2>3. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the Service for any unlawful purpose or to promote illegal
            activities.
          </li>
          <li>
            Upload content that infringes on intellectual property rights of
            others.
          </li>
          <li>
            Attempt to gain unauthorized access to our systems or other
            users&apos; accounts.
          </li>
          <li>
            Use automated tools to scrape or overload the Service.
          </li>
          <li>
            Distribute malware or harmful code through the Service.
          </li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>
          You retain ownership of all content you create or upload to PitchBoost.
          By using our AI generation features, you grant us a limited license to
          process your content for the purpose of generating decks. We claim no
          ownership over your generated content.
        </p>
        <p>
          The PitchBoost service, including its design, code, and branding, is
          the intellectual property of PitchBoost and is protected by applicable
          laws.
        </p>

        <h2>5. Payment Terms</h2>
        <p>
          Paid plans are billed in advance on a monthly or annual basis. Refunds
          are handled on a case-by-case basis. You may cancel your subscription
          at any time; access continues until the end of the current billing
          period. AI credit top-ups are non-refundable once used.
        </p>

        <h2>6. Referral Program</h2>
        <p>
          Referrers earn a commission on payments made by customers who sign up
          through their referral link. Commissions accrue on eligible referrals
          only. The following are not eligible for compensation and any accrued
          commissions from them may be withheld or reversed: referrals of
          accounts you own or control (self-referrals, including alias email
          addresses); referrals generated through paid advertising of any kind,
          including ads bidding on PitchBoost or confusingly similar terms;
          and referrals obtained through spam, misleading claims, or incentives
          not authorized by us in writing.
        </p>
        <p>
          Payouts are made periodically once your accrued balance passes the
          stated minimum. We may review referrals before paying and may
          suspend or terminate referral participation for abuse. Commission
          rates may change prospectively for new referrals; changes do not
          reduce the rate on referrals already made.
        </p>

        <h2>7. Service Availability</h2>
        <p>
          We strive for high availability but do not guarantee uninterrupted
          access. We may perform maintenance or updates that temporarily affect
          availability. We reserve the right to modify or discontinue features
          with reasonable notice.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, PitchBoost shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages, including loss of profits, data, or business opportunities,
          arising from your use of the Service.
        </p>
        <p>
          Our total liability for any claim arising from or related to the
          Service shall not exceed the amount you paid us in the 12 months
          preceding the claim.
        </p>

        <h2>9. Termination</h2>
        <p>
          We may suspend or terminate your account if you violate these terms.
          You may delete your account at any time. Upon termination, your right
          to use the Service ceases immediately. We will delete your data in
          accordance with our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. We will notify you of
          material changes via email or through the Service. Continued use after
          changes constitutes acceptance of the updated terms.
        </p>

        <h2>11. Contact</h2>
        <p>
          For questions about these terms, contact us at{" "}
          <a href="mailto:legal@pitchboost.ai">legal@pitchboost.ai</a>.
        </p>
      </div>
    </>
  );
}
