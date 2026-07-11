import type { Metadata } from "next";
import TimelineClient from "./timeline-client";
import ToolFaq from "@/components/marketing/tool-faq";

export const metadata: Metadata = {
  title: "Free Real Estate Closing Timeline Generator | PitchBoost",
  description:
    "Enter the contract acceptance and closing dates and get every key deadline: earnest money, inspection, appraisal, financing, walkthrough. Edit anything, share a link with your client, or add all dates to your calendar. Free, no account needed.",
};

const FAQS = [
  { q: "Is the closing timeline generator free?", a: "Yes. It is free to use and no account is needed." },
  { q: "What deadlines does it calculate?", a: "From the contract and closing dates it drafts the key milestones: earnest money, inspection, appraisal, financing, final walkthrough, and closing." },
  { q: "Can my client see the timeline without logging in?", a: "Yes. You share a link and your client views the timeline in their browser, with no login required." },
  { q: "Can I add the dates to my calendar?", a: "Yes. You can export the milestones so every deadline lands on your calendar." },
  { q: "Can I edit the deadlines?", a: "Yes. Every date is editable before you share it, so you can match your local contract norms." },
  { q: "Can I brand the timeline?", a: "Yes. Add your name and an accent color so the shared timeline looks like yours." },
];

export default function ClosingTimelinePage() {
  return (
    <>
      <TimelineClient />
      <ToolFaq faqs={FAQS} />
    </>
  );
}
