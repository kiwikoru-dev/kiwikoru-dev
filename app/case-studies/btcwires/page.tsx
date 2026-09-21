import type { Metadata } from "next";
import CaseStudyDetail from "@/components/sections/case-studies/case-study-detail";
import { BTCWIRES } from "@/components/sections/case-studies/case-study-data";

export const metadata: Metadata = {
  title: "BTCWires case study — kiwikoru",
  description:
    "How KiwiKoru built BTCWires a high-availability AWS platform — 99.95% uptime, sub-second market data and 15× news-driven traffic-spike capacity for a crypto media outlet.",
};

export default function BtcWiresCaseStudyPage() {
  return <CaseStudyDetail study={BTCWIRES} />;
}
