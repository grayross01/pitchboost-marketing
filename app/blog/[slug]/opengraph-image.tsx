import { ImageResponse } from "next/og";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "PitchBoost Blog";
  const description = post?.description ?? "AI-powered pitch decks for sales teams.";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #12121f 0%, #1a1a2e 60%, #1F6B6B 100%)",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Title */}
        <div
          style={{
            color: "white",
            fontSize: title.length > 60 ? 52 : 62,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: 32,
            maxWidth: 1000,
            marginTop: "auto",
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: 28,
            lineHeight: 1.4,
            maxWidth: 900,
            marginBottom: 48,
          }}
        >
          {description.length > 120 ? description.slice(0, 117) + "…" : description}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              background: "#1F6B6B",
              color: "white",
              fontSize: 18,
              fontWeight: 600,
              padding: "10px 24px",
              borderRadius: 8,
            }}
          >
            pitchboost.ai
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
