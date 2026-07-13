import type { Metadata } from "next";
import ReviewRequestClient from "./review-request-client";

export const metadata: Metadata = {
  title: "Free Client Review & Referral Request Page",
  description:
    "Just closed? Send your client a branded thank-you page with a one-tap review button and a friendly referral ask. Reviews and referrals are how agents grow. Free, no account needed.",
  alternates: { canonical: "/tools/review-request" },
};

export default function ReviewRequestPage() {
  return <ReviewRequestClient />;
}
