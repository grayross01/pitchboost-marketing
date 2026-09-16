import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | PitchBoost",
  description: "How to reach PitchBoost support, what to include, and how fast we answer.",
  alternates: { canonical: "https://pitchboost.ai/support" },
};

export default function SupportPage() {
  return (
    <>
      <section className="legal-hero">
        <div className="mkt-container">
          <h1>Support</h1>
          <p>Real people, usually within one business day.</p>
        </div>
      </section>

      <div className="legal-content">
        <h2>Email us</h2>
        <p>
          Write to <a href="mailto:support@pitchboost.ai">support@pitchboost.ai</a> from the
          address on your PitchBoost account. We answer every message, normally within one
          business day, and faster during US Pacific working hours.
        </p>

        <h2>What to include</h2>
        <p>
          The link to the deck or the deal you are asking about, what you expected, what
          happened instead, and a screenshot if there is something to see. If a deck came out
          wrong, keep it; we can look at the exact version you generated.
        </p>

        <h2>Billing and plans</h2>
        <p>
          Plan changes, cancellations, invoices and refunds all go through the same address.
          You can also manage your plan yourself at any time from Settings inside the app.
        </p>

        <h2>Using PitchBoost from ChatGPT or Claude</h2>
        <p>
          If you connected PitchBoost as a plugin or connector and something fails, tell us
          which assistant you used and paste the message it showed. Disconnecting and
          reconnecting the account fixes most sign-in problems.
        </p>

        <h2>Security and privacy</h2>
        <p>
          Report a security concern to the same address with &quot;Security&quot; in the subject
          line. Our <a href="/privacy">privacy policy</a> explains what we store and how to
          have it deleted.
        </p>

        <h2>Who we are</h2>
        <p>
          PitchBoost is operated by ARK Holdings, LLC, an Oregon limited liability company.
        </p>
      </div>
    </>
  );
}
