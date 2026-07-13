"use client";

import { useState } from "react";
import { FAQS } from "./faq-data";

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
