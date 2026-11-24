"use client";

import { useRef } from "react";
import type { HomeMakerCopy } from "@/lib/home-i18n";
import { SIGNUP_REBUILD, SIGNUP_URL } from "./links";

/**
 * The two ways in, side by side (Nov 2026): redesign the deck you already
 * have, or make a new one. Most people arrive with a deck to fix, so that
 * card comes first and is as big as the other.
 *
 * Redesigning starts at signup, which opens on the upload step, so the dashed
 * box is a link there. A file dropped on it leads to the same place, instead
 * of the browser opening the file. A new deck is the plain form the
 * presentation pages use: what is typed goes to signup with the present
 * intent, so it works without JavaScript and the builder opens with the words
 * already in it. Enter sends it and Shift+Enter starts a new line. The words
 * come from the page (lib/home-i18n.ts), in its language.
 */
export default function HomeMaker({ t }: { t: HomeMakerCopy }) {
  const form = useRef<HTMLFormElement>(null);
  return (
    <div id="make" className="sh-doors">
      <div className="sh-door">
        <div className="sh-door-head">
          <span className="sh-kicker">{t.redesign.kicker}</span>
          <h2 className="sh-door-title">{t.redesign.title}</h2>
        </div>
        <a
          href={SIGNUP_REBUILD}
          className="sh-drop"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            window.location.href = SIGNUP_REBUILD;
          }}
        >
          <span className="sh-drop-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M 12 16 L 12 5 M 7 10 L 12 5 L 17 10 M 5 19 L 19 19" /></svg>
          </span>
          <span className="sh-drop-line">{t.redesign.drop}</span>
          <span className="sh-drop-btn">{t.redesign.choose}</span>
          <span className="sh-drop-formats">{t.redesign.formats}</span>
        </a>
        <p className="sh-door-foot">{t.redesign.foot}</p>
      </div>
      <div className="sh-door">
        <div className="sh-door-head">
          <span className="sh-kicker">{t.fresh.kicker}</span>
          <h2 className="sh-door-title">{t.fresh.title}</h2>
        </div>
        <form ref={form} action={SIGNUP_URL} method="get" className="sh-fresh">
          <input type="hidden" name="intent" value="present" />
          <label htmlFor="sh-topic" className="sh-sr">{t.fresh.topicLabel}</label>
          <textarea
            id="sh-topic"
            name="prompt"
            required
            maxLength={300}
            rows={4}
            placeholder={t.fresh.placeholder}
            className="sh-topic"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
                e.preventDefault();
                const f = form.current;
                if (!f) return;
                // requestSubmit checks the box is filled in; Safari before 16 lacks it.
                if (typeof f.requestSubmit === "function") f.requestSubmit();
                else if (f.reportValidity()) f.submit();
              }
            }}
          />
          <button type="submit" className="sh-go sh-btn">{t.fresh.submit}</button>
        </form>
      </div>
      <span className="sh-or" aria-hidden="true">{t.or}</span>
    </div>
  );
}
