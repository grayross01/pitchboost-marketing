import type { Metadata } from "next";
import Link from "next/link";
import { PluginButton, PluginRedirect } from "./redirect-client";

/** Short hand-off page to the PitchBoost plugin in ChatGPT. It replaces a
 *  plain redirect so ad platforms can crawl a real page on our domain. */
const PLUGIN_URL = "https://chatgpt.com/plugins/plugin_asdk_app_6aaa1c8e8e6c81918ceb99441a587e47";
const REDIRECT_DELAY_MS = 2000;

const TITLE = "Opening PitchBoost in ChatGPT";
const DESCRIPTION =
  "PitchBoost is a plugin in ChatGPT. Attach your PowerPoint, ask in plain words, and get it back redesigned in your brand.";

export const metadata: Metadata = {
  alternates: { canonical: "/chatgpt" },
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: false, follow: true },
};

export default function GptPage() {
  return (
    <section style={{ padding: "140px 0 100px", background: "var(--ds-bg-light)", textAlign: "center", minHeight: "70vh" }}>
      <PluginRedirect href={PLUGIN_URL} delayMs={REDIRECT_DELAY_MS} />
      <div className="mkt-container">
        <h1 style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.4rem)", fontWeight: 800, color: "var(--ds-dark)", maxWidth: 720, margin: "0 auto 16px", lineHeight: 1.2 }}>
          Opening PitchBoost in ChatGPT
        </h1>
        <p style={{ color: "var(--ds-text-light)", fontSize: "1.1rem", maxWidth: 620, margin: "0 auto 32px", lineHeight: 1.7 }}>
          Add the plugin, attach your PowerPoint and ask in plain words. You get it back redesigned in your brand as an editable PowerPoint, a PDF and a link you can track. Works on free ChatGPT accounts.
        </p>
        <PluginButton href={PLUGIN_URL} />
        <p style={{ fontSize: 14, color: "var(--ds-text-secondary)", marginTop: 20 }}>
          Not redirected? Use the button above. <Link href="/chatgpt" style={{ color: "#1F6B6B", fontWeight: 600 }}>How the plugin works</Link>
        </p>
      </div>
    </section>
  );
}
