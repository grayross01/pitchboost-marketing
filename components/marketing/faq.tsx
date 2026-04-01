"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How does PitchBoost use AI to create decks?",
    a: "You describe your deal — the company, the opportunity, key metrics — and PitchBoost's AI generates a complete, branded slide deck with professional copy, layout, and structure. You can edit every slide afterward.",
  },
  {
    q: "Can I use my own branding?",
    a: "Absolutely. Upload your logo and set your brand colors when you create a deal. Every generated deck uses your visual identity automatically.",
  },
  {
    q: "What format are the decks?",
    a: "PitchBoost decks are interactive web presentations you can share via link. You can also export to PDF for offline use.",
  },
  {
    q: "How is pricing calculated?",
    a: "Each plan includes a monthly AI budget that resets automatically. The budget covers deck generation and AI-powered edits. If you need more, you can purchase top-up credit packs at any time.",
  },
  {
    q: "Can I track who views my deck?",
    a: "Yes — Pro and Business plans include analytics so you can see who opened your deck, which slides they viewed, and how long they spent on each one.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Free plan lets you create up to 3 deals with basic analytics included. It's a great way to try PitchBoost before committing to a paid plan.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. All paid plans are month-to-month (or annual with a discount). You can cancel at any time and your access continues through the end of your billing period.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {FAQS.map((faq, i) => (
        <div key={i} className={`faq-item${openIndex === i ? " active" : ""}`}>
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {faq.q}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className="faq-answer">
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
