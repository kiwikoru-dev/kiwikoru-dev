import type { Metadata } from "next";
import CaseStudyDetail from "@/components/sections/case-studies/case-study-detail";
import { THINKVERSE } from "@/components/sections/case-studies/case-study-data";

export const metadata: Metadata = {
  title: "ThinkVerse Labs case study — kiwikoru",
  description:
    "How KiwiKoru gave ThinkVerse Labs a standardised multi-account AWS landing zone — 70% faster provisioning, 40% lower infrastructure cost and under-2-hour environment onboarding.",
};

export default function ThinkVerseCaseStudyPage() {
  return <CaseStudyDetail study={THINKVERSE} />;
}
