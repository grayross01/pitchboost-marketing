/**
 * Push semantic events to GTM's dataLayer at conversion moments, so Google Ads
 * conversions (and GA4 / Meta, etc.) can be wired up in GTM without a code
 * change and without hardcoding conversion IDs here.
 *
 * In GTM: create a Custom Event trigger on `tool_lead` (and read the `tool`
 * variable), then attach a Google Ads Conversion tag to it. Same for `signup`.
 *
 * Safe no-op during SSR or when GTM hasn't loaded (ad-blockers, consent).
 */
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** A free-tool lead was captured (email submitted). `tool` names which one. */
export function trackLead(tool: string): void {
  trackEvent("tool_lead", { tool });
}
