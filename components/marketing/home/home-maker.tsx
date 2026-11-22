"use client";

import { useState } from "react";
import { SIGNUP_REBUILD, SIGNUP_URL } from "./links";

type Kind = "deck" | "post" | "ad" | "site";

const KINDS: { id: Kind; label: string; icon: React.ReactNode }[] = [
  { id: "deck", label: "Deck", icon: <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="4.5" width="16" height="11" rx="2.5" /><path d="M 5.5 8.5 L 11 8.5" /></svg> },
  { id: "post", label: "Social post", icon: <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="4.5" y="2" width="11" height="16" rx="2.5" /><path d="M 7.5 13.5 L 12.5 13.5" /></svg> },
  { id: "ad", label: "Ad", icon: <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="14" height="14" rx="2.5" /><rect x="6" y="11" width="6" height="3" rx="1.5" fill="currentColor" stroke="none" /></svg> },
  { id: "site", label: "Website", icon: <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3.5" width="16" height="13" rx="2.5" /><path d="M 2.5 7.5 L 17.5 7.5" /></svg> },
];

/** A post, an ad and a website are made inside PitchBoost, so those choices lead to signing up. */
const INSIDE: Record<Exclude<Kind, "deck">, string> = {
  post: "Social posts are made inside PitchBoost, from a deck or a few lines of your own.",
  ad: "Ads are made inside PitchBoost, from a deck, a photo or a few lines of your own.",
  site: "A website is written inside PitchBoost, from a deck, a few sentences or the site you already have.",
};

/**
 * The box in the hero. A deck is the one thing made from here: what is typed
 * goes to the app's signup with the present intent, the same plain form as
 * the topic box on the presentation pages, so it works without JavaScript and
 * the builder opens with the words already in it. The other three choices
 * explain where they start and lead to signup.
 */
export default function HomeMaker() {
  const [kind, setKind] = useState<Kind>("deck");
  return (
    <div id="make" className="sh-maker">
      <div role="group" aria-label="What do you need?" className="sh-chips">
        <span className="sh-chips-label">I need a</span>
        {KINDS.map((k) => (
          <button key={k.id} type="button" aria-pressed={kind === k.id} className={`sh-chip${kind === k.id ? " on" : ""}`} onClick={() => setKind(k.id)}>
            {k.icon}
            {k.label}
          </button>
        ))}
      </div>
      {kind === "deck" ? (
        <>
          <form action={SIGNUP_URL} method="get" className="sh-maker-row">
            <input type="hidden" name="intent" value="present" />
            <label htmlFor="sh-topic" className="sh-sr">What is your presentation about?</label>
            <input id="sh-topic" name="prompt" type="text" required maxLength={300} autoComplete="off" placeholder="What&apos;s it about?" className="sh-input" />
            <button type="submit" className="sh-go sh-btn">Make my deck</button>
          </form>
          <div className="sh-maker-foot">
            <a href={SIGNUP_REBUILD} className="sh-upload">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M 12 16 L 12 4 M 7 9 L 12 4 L 17 9 M 4 16 L 4 20 L 20 20 L 20 16" /></svg>
              Or drop in the PowerPoint you already have
            </a>
            <span>.pptx or PDF</span>
          </div>
        </>
      ) : (
        <div className="sh-maker-row">
          <p className="sh-inside">{INSIDE[kind]}</p>
          <a href={SIGNUP_URL} className="sh-go sh-btn">Start free</a>
        </div>
      )}
    </div>
  );
}
