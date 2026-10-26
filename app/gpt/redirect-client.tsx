"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Counts the visit, then forwards to the plugin listing after a short pause
 *  so the tag has time to fire. The button below goes straight there. */
export function PluginRedirect({ href, delayMs }: { href: string; delayMs: number }) {
  useEffect(() => {
    trackEvent("chatgpt_plugin_redirect", { via: "interstitial" });
    const t = window.setTimeout(() => window.location.replace(href), delayMs);
    return () => window.clearTimeout(t);
  }, [href, delayMs]);
  return null;
}

export function PluginButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="btn btn-primary btn-lg"
      onClick={() => trackEvent("chatgpt_plugin_redirect", { via: "button" })}
    >
      Open PitchBoost in ChatGPT
    </a>
  );
}
