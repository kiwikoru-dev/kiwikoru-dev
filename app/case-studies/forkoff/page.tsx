import type { Metadata } from "next";
import CaseStudyDetail from "@/components/sections/case-studies/case-study-detail";
import { FORKOFF } from "@/components/sections/case-studies/case-study-data";

export const metadata: Metadata = {
  title: "FORKOFF case study — kiwikoru",
  description:
    "How KiwiKoru built FORKOFF a fully serverless AWS platform — 99.9% uptime, 60% faster deploys and 10× traffic-spike capacity for a Web3 AI marketing agency.",
};

export default function ForkoffCaseStudyPage() {
  return <CaseStudyDetail study={FORKOFF} />;
}
