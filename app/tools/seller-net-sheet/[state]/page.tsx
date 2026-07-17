import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NetSheetClient from "../net-sheet-client";
import ToolFaq from "@/components/marketing/tool-faq";
import { NET_SHEET_STATES, getNetSheetState } from "@/lib/net-sheet-states";

/**
 * State-specific seller net sheet pages (/tools/seller-net-sheet/florida...).
 * Same calculator, with the state's transfer tax preloaded and state-flavored
 * SEO/FAQ content. Built for the "seller net sheet calculator {state}"
 * search intent we see in both ads search terms and organic demand.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return NET_SHEET_STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const preset = getNetSheetState(state);
  if (!preset) return {};
  return {
    title: `Free ${preset.name} Seller Net Sheet Calculator`,
    description: `Estimate a seller's net proceeds on a ${preset.name} home sale — with ${preset.name}'s transfer tax (${preset.rateLabel}) preloaded. Branded, printable, free for agents, no account needed.`,
    alternates: { canonical: `/tools/seller-net-sheet/${preset.slug}` },
  };
}

export default async function StateNetSheetPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const preset = getNetSheetState(state);
  if (!preset) notFound();

  const faqs = [
    {
      q: `What is the real estate transfer tax in ${preset.name}?`,
      a: `${preset.name} charges ${preset.rateLabel}. ${preset.note} This calculator preloads that amount from the sale price, and you can edit it to match your transaction.`,
    },
    {
      q: `Who pays the transfer tax in ${preset.name}?`,
      a: `Customs vary by market and it's negotiable in the contract. This calculator treats it as a seller cost — the most common convention — but you can zero it out if the buyer is paying it in your deal.`,
    },
    { q: "Is the seller net sheet calculator free?", a: "Yes. It is free to use with no account required." },
    {
      q: "How accurate is the estimate?",
      a: "It is an estimate based on the numbers you enter and the preloaded state rate. County and city add-ons vary, and rates change — verify against the final settlement statement from your title company.",
    },
    { q: "Can I share the breakdown with my seller?", a: "Yes. Print it or save it as a PDF, branded with your name and brokerage." },
  ];

  const others = NET_SHEET_STATES.filter((s) => s.slug !== preset.slug);

  return (
    <>
      <NetSheetClient preset={preset} />
      <ToolFaq faqs={faqs} />
      <section className="mkt-container" style={{ maxWidth: 760, padding: "0 20px 60px" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ds-dark)" }}>Seller net sheets for other states</h2>
        <p style={{ marginTop: 10, fontSize: "0.9rem", lineHeight: 2 }}>
          {others.map((s, i) => (
            <span key={s.slug}>
              <Link href={`/tools/seller-net-sheet/${s.slug}`} style={{ color: "var(--ds-primary, #0e5a64)", textDecoration: "underline" }}>
                {s.name}
              </Link>
              {i < others.length - 1 ? " · " : ""}
            </span>
          ))}
          {" · "}
          <Link href="/tools/seller-net-sheet" style={{ color: "var(--ds-primary, #0e5a64)", textDecoration: "underline" }}>
            All states (generic)
          </Link>
        </p>
      </section>
    </>
  );
}
