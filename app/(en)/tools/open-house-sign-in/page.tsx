import type { Metadata } from "next";
import OpenHouseClient from "./open-house-client";
import ToolFaq from "@/components/marketing/tool-faq";

export const metadata: Metadata = {
  title: "Free Open House Sign-In Sheet with QR Code",
  description:
    "Create a branded open-house sign-in page with a QR code in seconds. Visitors scan, sign in on their phone, and every lead is emailed straight to you. Free, no app to download.",
  alternates: { canonical: "/tools/open-house-sign-in" },
};

const FAQS = [
  { q: "Is the open house sign-in tool free?", a: "Yes. It is completely free to create a sign-in page, with no account or credit card needed." },
  { q: "Do visitors need to download an app?", a: "No. Visitors scan the QR code with their phone camera and sign in on a simple web page. There is nothing to install." },
  { q: "How do I get the leads?", a: "Every sign-in is emailed to you instantly. Your email address is never shown to visitors." },
  { q: "Can I brand the sign-in page?", a: "Yes. Add your name, brokerage, phone, and an accent color, and both the sign-in page and the printable sheet show your branding, not ours." },
  { q: "What information do visitors provide?", a: "Name, email, and phone, so you can follow up with each visitor after the open house." },
  { q: "Is there a limit on visitors or open houses?", a: "No. There is no limit on visitors, and you can create a new sign-in page for every open house you host." },
];

export default function OpenHouseSignInPage() {
  return (
    <>
      <OpenHouseClient />
      <ToolFaq faqs={FAQS} />
    </>
  );
}
