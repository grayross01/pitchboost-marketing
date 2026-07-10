import type { Metadata } from "next";
import OpenHouseClient from "./open-house-client";

export const metadata: Metadata = {
  title: "Free Open House Sign-In Sheet with QR Code | PitchBoost",
  description:
    "Create a branded open-house sign-in page with a QR code in seconds. Visitors scan, sign in on their phone, and every lead is emailed straight to you. Free, no app to download.",
  alternates: { canonical: "/tools/open-house-sign-in" },
};

export default function OpenHouseSignInPage() {
  return <OpenHouseClient />;
}
