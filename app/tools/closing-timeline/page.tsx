import type { Metadata } from "next";
import TimelineClient from "./timeline-client";

export const metadata: Metadata = {
  title: "Free Real Estate Closing Timeline Generator | PitchBoost",
  description:
    "Enter the contract acceptance and closing dates and get every key deadline: earnest money, inspection, appraisal, financing, walkthrough. Edit anything, share a link with your client, or add all dates to your calendar. Free, no signup.",
};

export default function ClosingTimelinePage() {
  return <TimelineClient />;
}
