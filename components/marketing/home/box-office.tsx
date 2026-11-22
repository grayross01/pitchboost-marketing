// Part of the home page (app/(en)/page.tsx). The look was approved as a mockup in November 2026; the inline styles carry it over as drawn.
import PricingPlans from "@/components/marketing/pricing-plans";

/**
 * Pricing, drawn as tickets. The plans themselves are the shared component
 * (the same one /pricing shows), restyled by the .sh-tickets rules in
 * home.css, so a price or a limit is still changed in one place.
 */
export default function BoxOffice() {
  return (
    <section id="pricing" style={{ position: "relative", marginTop: "-1px", background: "#E3F2F1", padding: "60px 0 64px" }}>
      <div className="sh-wrap">
        <div style={{ maxWidth: "820px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", textAlign: "center" }}>
          <span style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.12em", color: "#A93A2C" }}>THE BOX OFFICE</span>
          <h2 style={{ margin: "0", fontFamily: "var(--font-bricolage), var(--font-figtree), system-ui, sans-serif", fontWeight: "700", fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: "1.06", letterSpacing: "-0.02em", textWrap: "balance" }}>Pick a seat. The cheap ones are free.</h2>
          <p style={{ margin: "0", fontSize: "18px", color: "#33474C", textWrap: "pretty" }}>Start free and upgrade when you&apos;re ready. Every plan includes a monthly AI budget that resets automatically, and your team comes along at no charge per person. Paid plans are month to month, or yearly at a discount.</p>
        </div>
        <PricingPlans className="sh-tickets" />
        <p style={{ margin: "16px 0 0", textAlign: "center", fontSize: "15px", color: "#33474C", textWrap: "pretty" }}>The same credits make decks, social posts, ads and websites. On Free you can make all four with a watermark; downloads and publishing come with a plan.</p>
      </div>
    </section>
  );
}
