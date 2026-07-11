export interface ToolFaqItem {
  q: string;
  a: string;
}

/**
 * Shared FAQ block for the free-tool marketing pages. Renders a visible,
 * accessible FAQ section plus FAQPage JSON-LD so answer engines (Google,
 * ChatGPT, Perplexity, Claude) can retrieve and cite the questions directly.
 */
export default function ToolFaq({
  heading = "Frequently asked questions",
  faqs,
}: {
  heading?: string;
  faqs: ToolFaqItem[];
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="mkt-section" style={{ borderTop: "1px solid var(--ds-border, #e5e9ef)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mkt-container" style={{ maxWidth: 760 }}>
        <div className="section-header" style={{ textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span>FAQ</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--ds-dark)" }}>{heading}</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
          {faqs.map(({ q, a }) => (
            <div key={q} style={{ background: "#fff", border: "1px solid var(--ds-border, #e5e9ef)", borderRadius: 14, padding: "20px 24px" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ds-dark)", marginBottom: 8 }}>{q}</h3>
              <p style={{ fontSize: "0.92rem", color: "var(--ds-text-light, #5b6b7a)", lineHeight: 1.7, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
