"use client";

import { useEffect, useState } from "react";
import { ChatGptPluginButton } from "./chatgpt-plugin-button";

/** Phone-only bar with the plugin button, shown once the hero button with
 *  id `watchId` has scrolled out of view. Hidden on wider screens by CSS. */
export function ChatGptStickyCta({ watchId }: { watchId: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = document.getElementById(watchId);
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting && entry.boundingClientRect.top < 0));
    io.observe(el);
    return () => io.disconnect();
  }, [watchId]);
  return (
    <div className={`chatgpt-sticky-cta${show ? " is-visible" : ""}`} aria-hidden={!show}>
      <ChatGptPluginButton via="chatgpt_sticky" className="btn btn-primary chatgpt-sticky-btn">
        Add PitchBoost to ChatGPT
      </ChatGptPluginButton>
    </div>
  );
}
