"use client";

import { usePathname } from "next/navigation";

/**
 * Hides the marketing navbar/footer on client-facing share routes (/t/*).
 * Those pages are documents an agent sends to THEIR client: a buyer or
 * seller should see the timeline, not Log In buttons and a marketing
 * footer. Pathname is known at SSR time, so there is no chrome flash.
 */
export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname && pathname.startsWith("/t/")) return null;
  return <>{children}</>;
}
