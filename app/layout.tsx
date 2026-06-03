import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import MarketingNavbar from "@/components/marketing/navbar";
import MarketingFooter from "@/components/marketing/footer";
import FadeUpObserver from "@/components/marketing/fade-up-observer";

const GTM_ID = "GTM-TGJD79J4";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "PitchBoost — AI-Powered Personalized Pitch Decks",
    template: "%s — PitchBoost",
  },
  description:
    "PitchBoost builds personalized pitch decks that map your strengths to each prospect's pain points. Tailored to their industry, their needs, and the way they buy.",
  metadataBase: new URL("https://pitchboost.ai"),
  alternates: {
    canonical: "https://pitchboost.ai",
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "PitchBoost",
    title: "PitchBoost — AI-Powered Personalized Pitch Decks",
    description:
      "PitchBoost builds personalized pitch decks that map your strengths to each prospect's pain points. Tailored to their industry, their needs, and the way they buy.",
    images: [{ url: "https://pitchboost.ai/og-image.png", width: 1310, height: 820, alt: "PitchBoost" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://pitchboost.ai/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PitchBoost",
  url: "https://pitchboost.ai",
  logo: "https://pitchboost.ai/icon.png",
  description: "AI-powered pitch deck builder for sales teams, agencies, and anyone who pitches. Generate personalized, branded presentations in under 60 seconds.",
  sameAs: [
    "https://www.linkedin.com/company/pitchboost-ai",
    "https://www.instagram.com/pitchboost.ai/",
    "https://www.facebook.com/people/PitchBoost/61574324925190/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PitchBoost",
  url: "https://pitchboost.ai",
  publisher: { "@type": "Organization", name: "PitchBoost", url: "https://pitchboost.ai" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="marketing">
          <MarketingNavbar />
          {children}
          <MarketingFooter />
          <FadeUpObserver />
        </div>
      </body>
    </html>
  );
}
