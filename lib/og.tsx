import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * One Open Graph card for the whole site.
 *
 * Every page family (redesign, help, answers, compare, research, features,
 * the company pages) renders its own title through this so link previews on
 * LinkedIn, Slack, X and iMessage say what the page says instead of showing
 * the old homepage screenshot in public/og-image.png (kept only for previews
 * other sites cached before this change).
 *
 * Fonts are read from assets/fonts (Geist, OFL) because next/og only ships
 * the regular weight and the headline needs a real bold.
 */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export interface OgCard {
  /** Small label above the title: the page family ("Help center", "Compared"). */
  eyebrow: string;
  title: string;
  subtitle?: string;
}

const TEAL = "#1F6B6B";
const CORAL = "#E8665A";

let fontsPromise: Promise<{ name: string; data: Buffer; weight: 400 | 700; style: "normal" }[]> | null = null;

function loadFonts() {
  if (!fontsPromise) {
    fontsPromise = Promise.all([
      readFile(join(process.cwd(), "assets/fonts/Geist-Regular.ttf")),
      readFile(join(process.cwd(), "assets/fonts/Geist-Bold.ttf")),
    ]).then(([regular, bold]) => [
      { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
      { name: "Geist", data: bold, weight: 700 as const, style: "normal" as const },
    ]);
  }
  return fontsPromise;
}

function clip(s: string, n: number): string {
  const t = s.replace(/\s+/g, " ").trim();
  if (t.length <= n) return t;
  const cut = t.slice(0, n - 1);
  const at = cut.lastIndexOf(" ");
  return (at > n * 0.6 ? cut.slice(0, at) : cut) + "…";
}

/** A tidy "after" slide and a dull "before" slide behind it. Pure boxes, so
 *  satori renders them without any image fetch. */
function Slides() {
  return (
    <div style={{ position: "absolute", right: 72, top: 128, width: 372, height: 300, display: "flex" }}>
      {/* before */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 40,
          width: 300,
          height: 176,
          borderRadius: 12,
          background: "#2a2d40",
          border: "1px solid rgba(255,255,255,0.10)",
          transform: "rotate(-7deg)",
          display: "flex",
          flexDirection: "column",
          padding: 20,
          gap: 12,
        }}
      >
        <div style={{ width: 170, height: 14, borderRadius: 4, background: "rgba(255,255,255,0.28)" }} />
        <div style={{ width: 240, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.14)" }} />
        <div style={{ width: 220, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.14)" }} />
        <div style={{ width: 250, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.14)" }} />
        <div style={{ width: 200, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.14)" }} />
        <div style={{ width: 236, height: 8, borderRadius: 4, background: "rgba(255,255,255,0.14)" }} />
      </div>
      {/* after */}
      <div
        style={{
          position: "absolute",
          left: 60,
          top: 92,
          width: 312,
          height: 184,
          borderRadius: 12,
          background: "#ffffff",
          boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
          transform: "rotate(4deg)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div style={{ height: 46, background: TEAL, display: "flex", alignItems: "center", padding: "0 20px" }}>
          <div style={{ width: 150, height: 12, borderRadius: 4, background: "rgba(255,255,255,0.9)" }} />
        </div>
        <div style={{ display: "flex", flex: 1, padding: 20, gap: 18 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
            <div style={{ width: 120, height: 8, borderRadius: 4, background: "#20223a" }} />
            <div style={{ width: 140, height: 8, borderRadius: 4, background: "#c9cdd8" }} />
            <div style={{ width: 110, height: 8, borderRadius: 4, background: "#c9cdd8" }} />
            <div style={{ width: 130, height: 8, borderRadius: 4, background: "#c9cdd8" }} />
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, width: 110 }}>
            <div style={{ width: 20, height: 40, borderRadius: 3, background: "#cfe4e4" }} />
            <div style={{ width: 20, height: 62, borderRadius: 3, background: "#8fc0c0" }} />
            <div style={{ width: 20, height: 84, borderRadius: 3, background: TEAL }} />
            <div style={{ width: 20, height: 100, borderRadius: 3, background: CORAL }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function ogImage({ eyebrow, title, subtitle }: OgCard): Promise<ImageResponse> {
  const fonts = await loadFonts();
  const t = clip(title, 105);
  const s = subtitle ? clip(subtitle, 150) : "";
  const titleSize = t.length <= 34 ? 68 : t.length <= 60 ? 56 : 46;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: "linear-gradient(135deg, #0f1220 0%, #171a2e 58%, #1F6B6B 100%)",
          padding: "60px 72px 56px",
          fontFamily: "Geist",
          color: "white",
        }}
      >
        <Slides />

        {/* eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: `linear-gradient(135deg, ${TEAL}, ${CORAL})` }} />
          <div style={{ fontSize: 22, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.72)" }}>{clip(eyebrow, 48)}</div>
        </div>

        {/* title + subtitle, pushed to the lower half like the blog card */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto", maxWidth: 700, gap: 22 }}>
          <div style={{ fontSize: titleSize, fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em" }}>{t}</div>
          {s ? <div style={{ fontSize: 26, lineHeight: 1.4, color: "rgba(255,255,255,0.68)" }}>{s}</div> : null}
        </div>

        {/* bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 44 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: `linear-gradient(135deg, ${TEAL}, ${CORAL})` }} />
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>PitchBoost</div>
          </div>
          <div style={{ fontSize: 20, color: "rgba(255,255,255,0.78)", background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)", padding: "8px 18px", borderRadius: 999 }}>
            pitchboost.ai
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}

/**
 * A card built around a picture: the before/after pair on the makeover
 * page. `picturePath` is a file under public/, read at render time and
 * embedded as a data URL (the deployed URL is not reachable while the
 * site is still building).
 */
export async function ogImageWithPicture({ eyebrow, title, picturePath, pictureAspect }: { eyebrow: string; title: string; picturePath: string; pictureAspect: number }): Promise<ImageResponse> {
  const fonts = await loadFonts();
  const bytes = await readFile(join(process.cwd(), "public", picturePath));
  const mime = picturePath.endsWith(".webp") ? "image/webp" : picturePath.endsWith(".png") ? "image/png" : "image/jpeg";
  const src = `data:${mime};base64,${bytes.toString("base64")}`;
  const w = 1080;
  const h = Math.round(w / pictureAspect);
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0f1220 0%, #171a2e 58%, #1F6B6B 100%)",
          padding: "48px 60px 44px",
          fontFamily: "Geist",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: `linear-gradient(135deg, ${TEAL}, ${CORAL})` }} />
          <div style={{ fontSize: 22, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.72)" }}>{clip(eyebrow, 48)}</div>
        </div>
        <div style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginTop: 18, maxWidth: 1080 }}>{clip(title, 70)}</div>
        <div style={{ display: "flex", marginTop: "auto", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={w} height={h} style={{ width: w, height: h, borderRadius: 12 }} alt="" />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 26 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: `linear-gradient(135deg, ${TEAL}, ${CORAL})` }} />
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>PitchBoost</div>
          </div>
          <div style={{ fontSize: 20, color: "rgba(255,255,255,0.78)", background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)", padding: "8px 18px", borderRadius: 999 }}>
            pitchboost.ai
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
