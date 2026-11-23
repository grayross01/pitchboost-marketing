// Part of the home page (home-view.tsx puts the sections together, in every language). The look was approved as a mockup in November 2026; the inline styles carry it over as drawn.
import PricingPlans from "@/components/marketing/pricing-plans";
import { HOME_COPY } from "@/lib/home-i18n";
import type { Locale } from "@/lib/redesign-i18n";

/**
 * What is printed across the top of each ticket. home.css draws those words
 * through `content`, which only a stylesheet can set, so they reach it as
 * custom properties (--sh-ticket-1 to --sh-ticket-4), each a quoted string.
 */
function ticketWords(tickets: string[]): React.CSSProperties {
  return Object.fromEntries(tickets.map((words, i) => [`--sh-ticket-${i + 1}`, JSON.stringify(words)])) as React.CSSProperties;
}

/**
 * Pricing, drawn as tickets. The plans themselves are the shared component
 * (the same one /pricing shows), restyled by the .sh-tickets rules in
 * home.css, so a price or a limit is still changed in one place.
 */
export default function BoxOffice({ locale }: { locale: Locale }) {
  const t = HOME_COPY[locale].boxOffice;
  return (
    <section id="pricing" style={{ position: "relative", marginTop: "-1px", background: "#E3F2F1", padding: "60px 0 64px", ...ticketWords(t.tickets) }}>
      <div className="sh-wrap">
        <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", textAlign: "center" }}>
          <span style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.12em", color: "#A93A2C" }}>{t.eyebrow}</span>
          <h2 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.06", letterSpacing: "-0.02em", textWrap: "balance" }}>{t.title}</h2>
          <p style={{ margin: "0", fontSize: "18px", color: "#33474C", textWrap: "pretty" }}>{t.body}</p>
        </div>
        <PricingPlans className="sh-tickets" locale={locale} />
        <p style={{ margin: "16px 0 0", textAlign: "center", fontSize: "15px", color: "#33474C", textWrap: "pretty" }}>{t.foot}</p>
      </div>
    </section>
  );
}
