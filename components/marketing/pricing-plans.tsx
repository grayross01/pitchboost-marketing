import { PLANS_COPY } from "@/lib/pricing-i18n";
import type { Locale } from "@/lib/redesign-i18n";

/**
 * The plan cards, shared by the homepage and /pricing so the two can't drift
 * apart. Change plans, prices or limits here. The plan names and the prices
 * are written here, once, for every language (lib/pricing-i18n.ts says only
 * how each language writes a price: $7, 7 $); the rest of the words are in
 * lib/pricing-i18n.ts, and a limit or a number in them is changed there, in
 * every language.
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

export default function PricingPlans({ className = "pricing-grid", oneDeckNote = true, locale = "en" }: { className?: string; oneDeckNote?: boolean; locale?: Locale }) {
  const t = PLANS_COPY[locale];
  const price = (amount: number) => t.price.replace("{amount}", String(amount));
  return (
    <>
    <div className={className}>
      <div className="pricing-card">
        <div className="plan-name">Free</div>
        <div className="plan-desc">{t.free.desc}</div>
        <div className="plan-price">{price(0)}<span>{t.perMonth}</span></div>
        <div className="plan-period">{t.free.period}</div>
        <ul className="pricing-features">
          <li><CheckIcon /> {t.free.features[0]}</li>
          <li><CheckIcon /> {t.free.features[1]}</li>
          <li><CheckIcon /> {t.free.features[2]}</li>
          <li><CheckIcon /> {t.free.features[3]}</li>
          <li><CheckIcon /> {t.free.features[4]}</li>
          <li><CheckIcon /> {t.free.features[5]}</li>
        </ul>
        <a href={SIGNUP_URL} className="btn btn-secondary">{t.free.cta}</a>
      </div>
      <div className="pricing-card">
        <div className="plan-name">Starter</div>
        <div className="plan-desc">{t.starter.desc}</div>
        <div className="plan-price">{price(7)}<span>{t.perMonth}</span></div>
        <div className="plan-period">{t.starter.period}</div>
        <ul className="pricing-features">
          <li><CheckIcon /> {t.starter.features[0]}</li>
          <li><CheckIcon /> {t.starter.features[1]}</li>
          <li><CheckIcon /> {t.starter.features[2]}</li>
          <li><CheckIcon /> {t.starter.features[3]}</li>
          <li><CheckIcon /> {t.starter.features[4]}</li>
          <li><CheckIcon /> {t.starter.features[5]}</li>
          <li><CheckIcon /> {t.starter.features[6]}</li>
        </ul>
        <a href={SIGNUP_URL} className="btn btn-secondary">{t.starter.cta}</a>
      </div>
      <div className="pricing-card featured">
        <div className="pricing-badge">{t.popular}</div>
        <div className="plan-name">Pro</div>
        <div className="plan-desc">{t.pro.desc}</div>
        <div className="plan-price">{price(29)}<span>{t.perMonth}</span></div>
        <div className="plan-period">{t.pro.period}</div>
        <ul className="pricing-features">
          <li><CheckIcon /> {t.pro.features[0]}</li>
          <li><CheckIcon /> {t.pro.features[1]}</li>
          <li><CheckIcon /> {t.pro.features[2]}</li>
          <li><CheckIcon /> {t.pro.features[3]}</li>
          <li><CheckIcon /> {t.pro.features[4]}</li>
          <li><CheckIcon /> {t.pro.features[5]}</li>
          <li><CheckIcon /> {t.pro.features[6]}</li>
        </ul>
        <a href={SIGNUP_URL} className="btn btn-primary">{t.pro.cta}</a>
      </div>
      <div className="pricing-card">
        <div className="plan-name">Business</div>
        <div className="plan-desc">{t.business.desc}</div>
        <div className="plan-price">{price(79)}<span>{t.perMonth}</span></div>
        <div className="plan-period">{t.business.period}</div>
        <ul className="pricing-features">
          <li><CheckIcon /> {t.business.features[0]}</li>
          <li><CheckIcon /> {t.business.features[1]}</li>
          <li><CheckIcon /> {t.business.features[2]}</li>
          <li><CheckIcon /> {t.business.features[3]}</li>
          <li><CheckIcon /> {t.business.features[4]}</li>
        </ul>
        <a href={SIGNUP_URL} className="btn btn-secondary">{t.business.cta}</a>
      </div>
    </div>
    {/* Most people have one deck to fix, so a plan is not the only way to pay. /pricing turns this line off and shows its own fuller strip under the plans. */}
    {oneDeckNote ? (
      <p style={{ textAlign: "center", fontSize: 15, color: "var(--ds-text-secondary, #4a5a68)", margin: "22px auto 0", maxWidth: 680, lineHeight: 1.6 }}>
        <strong style={{ color: "var(--ds-dark)" }}>{t.oneDeck.question}</strong> {t.oneDeck.body}
      </p>
    ) : null}
    </>
  );
}
