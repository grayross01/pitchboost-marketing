"use client";

import { useEffect } from "react";

/**
 * Captures acquisition attribution from the landing URL into a first-party
 * `pb_attr` cookie scoped to .pitchboost.ai.
 *
 * This MUST run here rather than in the app. Google Ads and AI assistants send
 * people to the marketing site (pitchboost.ai); by the time they reach
 * app.pitchboost.ai the query string is gone and `document.referrer` is our own
 * domain or Auth0. The app reads this same cookie at signup and persists it.
 * Anything not captured on this side is lost for good.
 *
 * Last-touch on the cookie: a fresh click overwrites the stored attribution.
 * The database side is first-touch (persistAttribution COALESCEs and only
 * writes while users.gclid is null), so the earliest signup wins there.
 */
const FIELDS = ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const COOKIE = "pb_attr";
const MAX_AGE = 60 * 60 * 24 * 90; // 90 days, matches Google's default click window

/** Referrer hosts we treat as an AI assistant recommending us. */
const AI_REFERRER_RE =
  /(chatgpt|openai|claude\.ai|anthropic|perplexity|copilot\.microsoft|gemini\.google|bard\.google|you\.com|phind)/i;

export function AttributionCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const attr: Record<string, string> = {};
      for (const f of FIELDS) {
        const v = params.get(f);
        if (v) attr[f] = v.slice(0, 300);
      }

      // External referrer only. Internal navigation leaves referrer on our own
      // host, which is what keeps a second page view from overwriting the
      // landing page recorded on arrival.
      let referrerHost = "";
      try {
        if (document.referrer) {
          const rh = new URL(document.referrer).hostname;
          if (rh && rh !== window.location.hostname) referrerHost = rh;
        }
      } catch {
        /* malformed referrer, ignore */
      }
      const fromAi = AI_REFERRER_RE.test(attr.utm_source || "") || AI_REFERRER_RE.test(referrerHost);

      // An AI referral counts even with no utm tag. ChatGPT usually appends
      // ?utm_source=chatgpt.com but not always, and the untagged ones were
      // previously recorded as direct, which is most of what we were losing.
      if (!attr.gclid && !attr.utm_source && !fromAi) return;

      // WHICH page they were sent to. Assistants never pass the user's prompt,
      // so the landing page is the closest proxy for what they asked: someone
      // dropped on /compare/gamma asked a different question than someone
      // dropped on /industries/real-estate-agents. Path only, no query string,
      // so we are not stashing whatever personal data a URL happened to carry.
      attr.landing_path = window.location.pathname.slice(0, 300);
      if (referrerHost) attr.referrer_host = referrerHost.slice(0, 200);

      // Share across the marketing + app subdomains in prod; host-only in dev.
      const host = window.location.hostname;
      const domain = host.endsWith("pitchboost.ai") ? "; domain=.pitchboost.ai" : "";
      const secure = window.location.protocol === "https:" ? "; Secure" : "";
      document.cookie =
        `${COOKIE}=${encodeURIComponent(JSON.stringify(attr))}` +
        `; path=/; max-age=${MAX_AGE}; SameSite=Lax${domain}${secure}`;
    } catch {
      /* best-effort; attribution must never break the page */
    }
  }, []);

  return null;
}
