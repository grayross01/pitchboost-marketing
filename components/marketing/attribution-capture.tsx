"use client";

import { useEffect } from "react";

/**
 * Captures ad attribution (the Google click id `gclid` and UTM params) from the
 * landing URL into a first-party `pb_attr` cookie scoped to .pitchboost.ai.
 *
 * Google Ads send clicks to the marketing site (pitchboost.ai), so this MUST run
 * here for attribution to exist at all: the app (app.pitchboost.ai) reads the
 * same cookie at signup and persists "which ad click produced this user" to the
 * database. Without it, ad clicks that land on marketing pages are never
 * attributed and `users.gclid` stays null. Last-touch: a fresh ad click
 * overwrites the stored attribution.
 */
const FIELDS = ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const COOKIE = "pb_attr";
const MAX_AGE = 60 * 60 * 24 * 90; // 90 days, matches Google's default click window

export function AttributionCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const attr: Record<string, string> = {};
      for (const f of FIELDS) {
        const v = params.get(f);
        if (v) attr[f] = v.slice(0, 300);
      }
      // Only write when there's a real ad signal, never clobber with empties.
      if (!attr.gclid && !attr.utm_source) return;

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
