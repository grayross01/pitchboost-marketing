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

export default function PricingPlans({ className = "pricing-grid" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="pricing-card">
        <div className="plan-name">Free</div>
        <div className="plan-desc">Perfect for trying PitchBoost</div>
        <div className="plan-price">$0<span>/mo</span></div>
        <div className="plan-period">Free forever</div>
        <ul className="pricing-features">
          <li><CheckIcon /> 150 credits a month (1 AI deck)</li>
          <li><CheckIcon /> Decks up to 10 slides</li>
          <li><CheckIcon /> PDF and PowerPoint export, with badge</li>
          <li><CheckIcon /> Shareable link and basic analytics</li>
          <li><CheckIcon /> Research and fact checking included</li>
        </ul>
        <a href={SIGNUP_URL} className="btn btn-secondary">Get Started</a>
      </div>
      <div className="pricing-card">
        <div className="plan-name">Starter</div>
        <div className="plan-desc">Your decks, without the badge</div>
        <div className="plan-price">$9<span>/mo</span></div>
        <div className="plan-period">or $7/mo billed annually</div>
        <ul className="pricing-features">
          <li><CheckIcon /> 800 credits a month (about 5 decks)</li>
          <li><CheckIcon /> Decks up to 25 slides</li>
          <li><CheckIcon /> No PitchBoost badge, anywhere</li>
          <li><CheckIcon /> Clean, editable PowerPoint downloads</li>
          <li><CheckIcon /> Top-up credit packs</li>
        </ul>
        <a href={SIGNUP_URL} className="btn btn-secondary">Start with Starter</a>
      </div>
      <div className="pricing-card featured">
        <div className="pricing-badge">Most Popular</div>
        <div className="plan-name">Pro</div>
        <div className="plan-desc">For active dealmakers</div>
        <div className="plan-price">$29<span>/mo</span></div>
        <div className="plan-period">or $24/mo billed annually</div>
        <ul className="pricing-features">
          <li><CheckIcon /> 2,500 credits a month (about 20 decks)</li>
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
        <div className="plan-desc">For teams closing deals at scale</div>
        <div className="plan-price">$79<span>/mo</span></div>
        <div className="plan-period">or $66/mo billed annually</div>
        <ul className="pricing-features">
          <li><CheckIcon /> Everything in Pro</li>
          <li><CheckIcon /> 7,000 credits a month</li>
          <li><CheckIcon /> Team collaboration</li>
          <li><CheckIcon /> Analytics export</li>
          <li><CheckIcon /> Sending from your own domain</li>
        </ul>
        <a href={SIGNUP_URL} className="btn btn-secondary">Get Started</a>
      </div>
    </div>
  );
}
