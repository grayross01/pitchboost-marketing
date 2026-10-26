"use client";

import type { CSSProperties, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { CHATGPT_PLUGIN_URL } from "@/lib/chatgpt";

/** Links straight to the PitchBoost plugin in ChatGPT and records which
 *  button was used (`via`) as a chatgpt_plugin_click dataLayer event. */
export function ChatGptPluginButton({
  via,
  children,
  className = "btn btn-primary btn-lg",
  style,
}: {
  via: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <a
      href={CHATGPT_PLUGIN_URL}
      className={className}
      style={style}
      onClick={() => trackEvent("chatgpt_plugin_click", { via })}
    >
      {children}
    </a>
  );
}
