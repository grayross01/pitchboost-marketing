import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import MarketingNavbar from "@/components/marketing/navbar";
import MarketingFooter from "@/components/marketing/footer";
import FadeUpObserver from "@/components/marketing/fade-up-observer";

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
  title: "PitchBoost — AI-Powered Deal Decks",
  description:
    "Create stunning, interactive pitch decks powered by AI. Upload your brand assets, describe your deal, and get a professional presentation in minutes.",
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
      <body>
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
