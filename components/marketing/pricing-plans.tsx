/**
 * The plan cards, shared by the homepage and /pricing so the two can't drift
 * apart. Change plans, prices or limits here.
 */
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.pitchboost.ai";
const SIGNUP_URL = `${APP_URL}/signup`;

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function PricingPlans({ className = "pricing-grid", oneDeckNote = true }: { className?: string; oneDeckNote?: boolean }) {
  return (
    <>
    <div className={className}>
      <div className="pricing-card">
        <div className="plan-name">Free</div>
        <div className="plan-desc">Perfect for trying PitchBoost</div>
        <div className="plan-price">$0<span>/mo</span></div>
        <div className="plan-period">Free forever</div>
        <ul className="pricing-features">
          <li><CheckIcon /> 150 credits a month (1 AI deck)</li>
          <li><CheckIcon /> Decks up to 10 slides</li>
          <li><CheckIcon /> Share as a live link, with badge</li>
          <li><CheckIcon /> Shareable link and basic analytics</li>
          <li><CheckIcon /> Research and fact checking included</li>
        </ul>
        <a href={SIGNUP_URL} className="btn btn-secondary">Get Started</a>
      </div>
      <div className="pricing-card">
        <div className="plan-name">Starter</div>
        <div className="plan-desc">Your decks, without the badge</div>
        <div className="plan-price">$7<span>/mo</span></div>
        <div className="plan-period">or $5.83/mo billed annually</div>
        <ul className="pricing-features">
          <li><CheckIcon /> 300 credits a month (about 3 decks)</li>
          <li><CheckIcon /> Decks up to 25 slides</li>
          <li><CheckIcon /> No PitchBoost badge, anywhere</li>
          <li><CheckIcon /> PowerPoint, PDF and Google Slides downloads</li>
          <li><CheckIcon /> Top-up credit packs</li>
        </ul>
        <a href={SIGNUP_URL} className="btn btn-secondary">Start with Starter</a>
      </div>
      <div className="pricing-card featured">
        <div className="pricing-badge">Most Popular</div>
        <div className="plan-name">Pro</div>
        <div className="plan-desc">For people who present every week</div>
        <div className="plan-price">$29<span>/mo</span></div>
        <div className="plan-period">or $24/mo billed annually</div>
        <ul className="pricing-features">
          <li><CheckIcon /> 1,200 credits a month (about 12 decks)</li>
          <li><CheckIcon /> Decks up to 60 slides</li>
          <li><CheckIcon /> Full viewer analytics and read receipts</li>
          <li><CheckIcon /> Custom domains and saved templates</li>
          <li><CheckIcon /> API and MCP access</li>
          <li><CheckIcon /> Unlimited deals, no badge</li>
        </ul>
        <a href={SIGNUP_URL} className="btn btn-primary">Start Free Trial</a>
      </div>
      <div className="pricing-card">
        <div className="plan-name">Business</div>
        <div className="plan-desc">For teams that share a brand</div>
        <div className="plan-price">$79<span>/mo</span></div>
        <div className="plan-period">or $66/mo billed annually</div>
        <ul className="pricing-features">
          <li><CheckIcon /> Everything in Pro</li>
          <li><CheckIcon /> 3,300 credits a month (about 33 decks)</li>
          <li><CheckIcon /> Team collaboration</li>
          <li><CheckIcon /> Analytics export</li>
          <li><CheckIcon /> Sending from your own domain</li>
        </ul>
        <a href={SIGNUP_URL} className="btn btn-secondary">Get Started</a>
      </div>
    </div>
    {/* Most people have one deck to fix, so a plan is not the only way to pay. /pricing turns this line off and shows its own fuller strip under the plans. */}
    {oneDeckNote ? (
      <p style={{ textAlign: "center", fontSize: 15, color: "var(--ds-text-secondary, #4a5a68)", margin: "22px auto 0", maxWidth: 680, lineHeight: 1.6 }}>
        <strong style={{ color: "var(--ds-dark)" }}>Just one deck?</strong> Pay once for that deck, no subscription: $9 up to 25 slides, $19 up to 60. Every slide rebuilt, no PitchBoost badge, the PowerPoint, PDF and Google Slides downloads, and 100 credits for edits. Start Starter or Pro within 30 days and it counts toward the first month.
      </p>
    ) : null}
    </>
  );
}
