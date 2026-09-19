import Link from "next/link";
import PageHeader from "@/components/ui/page-header";
import RevealOnScroll from "@/components/ui/reveal-on-scroll";
import FinalCta from "@/components/sections/final-cta/final-cta";
import {
  CASE_STUDIES,
  CASE_STUDY_HEADING_WPS,
  type CaseStudy,
} from "./case-study-data";

/**
 * /case-studies — the listing page, modelled on the reference case-studies index
 * (a card grid of studies, then broader capability groupings, then a CTA).
 *
 * The PRIMARY grid is the two REAL, documented engagements (FORKOFF, ZeroShield)
 * from case-study-data.ts, each linking to its detail page.
 *
 * ⚠️ PLACEHOLDER below the primary grid. "Approach & delivery" and "Delivery
 * network" are generic, stand-in capability copy — NOT real client engagements
 * and NOT named clients. They fill out the reference's larger structure and are
 * here to be replaced with real write-ups/case studies as KiwiKoru documents
 * them. This mirrors the repo's existing marked-placeholder convention
 * (grep PLACEHOLDER). Do not present any of it as delivered client work.
 */

const CONTENT =
  "relative flex w-full flex-col items-center gap-[13dvh] px-6 pb-[14dvh] text-white max-md:gap-[9dvh]";
const WIDE = "w-full max-w-[1160px]";
const HEAD =
  "font-product text-[36px] font-light leading-[1.1] tracking-[-0.03em] text-white max-md:text-[28px]";
const KICKER =
  "font-product text-[13px] font-normal uppercase tracking-[0.14em] text-white/45";

/** A real case study, as a clickable card in the primary grid. */
function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col gap-[16px] rounded-[20px] border-[1.5px] border-solid border-white/30 bg-gradient-to-b from-black/10 to-black/5 p-[32px] shadow-[inset_0_0_0_999px_rgba(255,255,255,0.06)] transition-colors hover:border-white/55 max-md:p-[26px]"
    >
      <span className="w-fit rounded-[999px] border border-white/30 px-[12px] py-[4px] font-product text-[13px] font-light text-white/80">
        {study.tag}
      </span>
      <h3 className="font-product text-[31px] font-normal leading-[1.1] tracking-[-0.03em] text-white max-md:text-[26px]">
        {study.name}
      </h3>
      <p className="font-product text-body font-light leading-[1.5] text-white/70">
        {study.cardBlurb}
      </p>
      <span className="font-product text-body font-normal text-white">
        {study.cardStat}
      </span>
      <span className="mt-[4px] inline-flex items-center gap-[8px] font-product text-body font-light text-white/70 transition-all group-hover:gap-[12px] group-hover:text-white">
        Read the case study <span aria-hidden>→</span>
      </span>
    </Link>
  );
}

// ── PLACEHOLDER content (see the file header) ────────────────────────────────
// Generic capability copy filling the reference's larger structure. Replace with
// real deep-dives / case studies as they're written. No named clients here.

const APPROACH: { title: string; blurb: string }[] = [
  {
    title: "Architecture & migration",
    blurb:
      "How we take a workload from the first architecture call to a production AWS environment — well-architected reviews, landing zones, and low-risk cutover.",
  },
  {
    title: "Managed services & FinOps",
    blurb:
      "How we run infrastructure after go-live — 24/7 monitoring, cost visibility and tagging governance, and continuous security and compliance.",
  },
];

const DISCIPLINES: { name: string; points: string[] }[] = [
  {
    name: "Cloud financial management",
    points: [
      "Cost and usage reporting with Athena and QuickSight",
      "Standardised tagging and account-level budgets",
      "Rightsizing, scheduling and savings-plan strategy",
    ],
  },
  {
    name: "Data & analytics",
    points: [
      "Serverless data lakes on S3 with Glue and Athena",
      "Streaming pipelines with Kinesis and Lambda",
      "Reporting and analytics dashboards",
    ],
  },
  {
    name: "DevOps & automation",
    points: [
      "Infrastructure-as-code baselines (CDK / Terraform)",
      "CI/CD pipelines with automated testing and rollback",
      "Observability with CloudWatch and OpenTelemetry",
    ],
  },
  {
    name: "Security & compliance",
    points: [
      "Zero-trust network and IAM design",
      "Continuous compliance with AWS Config and Security Hub",
      "SOC 2 and audit-readiness support",
    ],
  },
];

export default function CaseStudiesIndex() {
  return (
    <>
      <PageHeader
        title="Case Studies"
        sub="Architecture, decisions, and results across our AWS engagements."
        widthPerSize={CASE_STUDY_HEADING_WPS}
      />
      <RevealOnScroll selector="[data-cs-grid] > *" />
      <RevealOnScroll selector="[data-cs-approach] > *" />
      <RevealOnScroll selector="[data-cs-network] > *" stagger={0.05} />

      <div className={CONTENT}>
        {/* Primary grid — the REAL case studies */}
        <section data-cs-grid className={`${WIDE} grid grid-cols-2 gap-[24px] max-md:grid-cols-1`}>
          {CASE_STUDIES.map((study) => (
            <CaseCard key={study.slug} study={study} />
          ))}
        </section>

        {/* Approach & delivery — PLACEHOLDER deep-dives */}
        <section className={`${WIDE} flex flex-col gap-[36px]`}>
          <div className="mx-auto flex w-full max-w-[860px] flex-col gap-[10px]">
            <span className={KICKER}>Approach &amp; delivery</span>
            <h2 className={HEAD}>How we work</h2>
          </div>
          <div data-cs-approach className="grid grid-cols-2 gap-[24px] max-md:grid-cols-1">
            {APPROACH.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-[14px] rounded-[20px] border-[1.5px] border-solid border-white/30 bg-gradient-to-b from-black/10 to-black/5 p-[32px] shadow-[inset_0_0_0_999px_rgba(255,255,255,0.06)] max-md:p-[26px]"
              >
                <h3 className="font-product text-[26px] font-normal leading-[1.1] tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="font-product text-body font-light leading-[1.5] text-white/70">
                  {item.blurb}
                </p>
                <span className="font-product text-body font-light text-white/45">
                  Write-up coming soon
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery network — PLACEHOLDER capability groupings */}
        <section className={`${WIDE} flex flex-col gap-[36px]`}>
          <div className="mx-auto flex w-full max-w-[860px] flex-col gap-[10px]">
            <span className={KICKER}>Delivery network</span>
            <h2 className={HEAD}>What else we deliver</h2>
            <p className="font-product text-body-lg font-light leading-[1.6] text-white/60">
              Capability areas across our AWS practice. Detailed case studies for
              these are on the way.
            </p>
          </div>
          <div data-cs-network className="grid grid-cols-2 gap-[24px] max-md:grid-cols-1">
            {DISCIPLINES.map((d) => (
              <div
                key={d.name}
                className="flex flex-col gap-[16px] rounded-[20px] border-[1.5px] border-solid border-white/30 bg-gradient-to-b from-black/10 to-black/5 p-[32px] shadow-[inset_0_0_0_999px_rgba(255,255,255,0.06)] max-md:p-[26px]"
              >
                <h3 className="font-product text-[22px] font-normal leading-[1.15] tracking-[-0.02em] text-white">
                  {d.name}
                </h3>
                <ul className="flex flex-col gap-[10px]">
                  {d.points.map((p) => (
                    <li key={p} className="flex gap-[12px]">
                      <span
                        aria-hidden
                        className="mt-[10px] size-[5px] shrink-0 rounded-full bg-white/40"
                      />
                      <span className="font-product text-body font-light leading-[1.45] text-white/70">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <FinalCta />
    </>
  );
}
