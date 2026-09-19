import type { Metadata } from "next";
import CaseStudyDetail from "@/components/sections/case-studies/case-study-detail";
import { ZEROSHIELD } from "@/components/sections/case-studies/case-study-data";

export const metadata: Metadata = {
  title: "ZeroShield.ai case study — kiwikoru",
  description:
    "How KiwiKoru delivered ZeroShield.ai a zero-trust AWS network — SOC 2 Type II, 90% less manual security config and 80% faster threat response.",
};

export default function ZeroShieldCaseStudyPage() {
  return <CaseStudyDetail study={ZEROSHIELD} />;
}
