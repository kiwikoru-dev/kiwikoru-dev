import type { Metadata } from "next";
import CaseStudiesIndex from "@/components/sections/case-studies/case-studies-index";

export const metadata: Metadata = {
  title: "Case Studies — kiwikoru",
  description:
    "AWS case studies from KiwiKoru — serverless platforms, zero-trust security and measurable results, including FORKOFF and ZeroShield.ai.",
};

/**
 * /case-studies — the listing page. All sections are composed in
 * <CaseStudiesIndex>; the two real studies live in case-study-data.ts, the
 * broader groupings are marked placeholder there.
 */
export default function CaseStudiesPage() {
  return <CaseStudiesIndex />;
}
