import Image from "next/image";
import Link from "next/link";
import GlassCard from "@/components/ui/glass-card";
import PageHeader from "@/components/ui/page-header";
import FinalCta from "@/components/sections/final-cta/final-cta";
import { CASE_STUDY_HEADING_WPS, type CaseStudy } from "./case-study-data";
import QuickFacts from "./quick-facts";
import StatBand from "./stat-band";
import CaseStudyReveal from "./case-study-reveal";

/**
 * One case-study DETAIL page, data-driven — pass a <CaseStudy> record (see
 * case-study-data.ts) and it renders the full write-up in the reference's
 * section flow: quick facts → challenge → solution (services + architecture) →
 * what we delivered → results → architecture diagram → about → CTA.
 *
 * Server component: pure content over the shared fixed sky, same as the other
 * inner routes. The only client pieces are <PageHeader> (glass heading) and
 * <CaseStudyReveal> (scroll entrances). All copy comes from the record; nothing
 * is page-specific here, so both /case-studies/forkoff and /zeroshield reuse it.
 */

const PROSE =
  "font-product text-body-lg font-light leading-[1.65] text-white/70";
const SECTION = "flex w-full max-w-[860px] flex-col gap-[26px]";
const WIDE = "w-full max-w-[1160px]";

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="flex flex-col gap-[10px]">
      <span className="font-product text-[13px] font-normal uppercase tracking-[0.14em] text-white/45">
        {kicker}
      </span>
      <h2 className="font-product text-[36px] font-light leading-[1.1] tracking-[-0.03em] text-white max-md:text-[28px]">
        {title}
      </h2>
    </header>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-[14px]">
      {items.map((item) => (
        <li key={item} className="flex gap-[14px]">
          <span
            aria-hidden
            className="mt-[11px] size-[6px] shrink-0 rounded-full bg-white/40"
          />
          <span className={PROSE}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <>
      <PageHeader
        title={study.heading}
        sub={study.tagline}
        widthPerSize={CASE_STUDY_HEADING_WPS}
      />
      <CaseStudyReveal />

      <article className="relative flex w-full flex-col items-center gap-[13dvh] px-6 pb-[16dvh] text-white max-md:gap-[9dvh]">
        {/* Breadcrumb back to the index */}
        <div className={WIDE}>
          <Link
            href="/case-studies"
            className="font-product text-body font-light text-white/60 transition-opacity hover:opacity-100 hover:text-white"
          >
            ← Case studies
          </Link>
        </div>

        {/* Quick facts */}
        <div className={WIDE}>
          <QuickFacts facts={study.quickFacts} />
        </div>

        {/* The challenge (client overview + pain points) */}
        <section data-cs-challenge className={SECTION}>
          <SectionHead kicker="01 — Overview" title="The challenge" />
          <div className="flex flex-col gap-[18px]">
            {study.overview.map((p) => (
              <p key={p} className={PROSE}>
                {p}
              </p>
            ))}
            <p className={PROSE}>{study.challengeIntro}</p>
            <Bullets items={study.challenge} />
          </div>
        </section>

        {/* The solution: intro + AWS services + architecture highlights */}
        <section data-cs-solution className={`${WIDE} flex flex-col gap-[36px]`}>
          <div className="mx-auto flex w-full max-w-[860px] flex-col gap-[26px]">
            <SectionHead kicker="02 — Approach" title="The solution" />
            <p className={PROSE}>{study.solutionIntro}</p>
            <div className="flex flex-col gap-[14px]">
              <span className="font-product text-[13px] font-normal uppercase tracking-[0.14em] text-white/45">
                AWS services deployed
              </span>
              <div className="flex flex-wrap gap-[10px]">
                {study.awsServices.map((svc) => (
                  <span
                    key={svc}
                    className="rounded-[999px] border-[1.5px] border-solid border-white/30 bg-gradient-to-b from-black/10 to-black/5 px-[16px] py-[7px] font-product text-body font-light text-white shadow-[inset_0_0_0_999px_rgba(255,255,255,0.06)]"
                  >
                    {svc}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
            {study.architecture.map((row) => (
              <GlassCard key={row.component} title={row.component}>
                {row.role}
              </GlassCard>
            ))}
          </div>
        </section>

        {/* What we delivered */}
        <section data-cs-delivered className={`${WIDE} flex flex-col gap-[36px]`}>
          <div className="mx-auto w-full max-w-[860px]">
            <SectionHead kicker="03 — Delivery" title="What we delivered" />
          </div>
          <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
            {study.delivered.map((row) => (
              <GlassCard key={row.workstream} title={row.workstream}>
                {row.detail}
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Results: headline band + the full outcomes list */}
        <section data-cs-results className={`${WIDE} flex flex-col gap-[36px]`}>
          <div className="mx-auto w-full max-w-[860px]">
            <SectionHead kicker="04 — Impact" title="Outcomes &amp; results" />
          </div>
          <StatBand stats={study.headlineStats} />
          <div className="grid grid-cols-2 gap-[20px] max-md:grid-cols-1">
            {study.results.map((row) => (
              <GlassCard key={row.metric} title={row.metric}>
                {row.detail}
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Architecture diagram (the real one from the case-study doc) */}
        <section data-cs-arch className={`${WIDE} flex flex-col gap-[26px]`}>
          <div className="mx-auto w-full max-w-[860px]">
            <SectionHead kicker="05 — Architecture" title="How it fits together" />
          </div>
          <div className="overflow-hidden rounded-[20px] border-[1.5px] border-solid border-white/30 bg-white p-[20px] max-md:p-[12px]">
            <Image
              src={study.archImage.src}
              alt={study.archImage.alt}
              width={study.archImage.width}
              height={study.archImage.height}
              sizes="(max-width: 1160px) 100vw, 1160px"
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* About KiwiKoru */}
        <section
          data-cs-outro
          className="flex w-full max-w-[860px] flex-col gap-[16px] border-t border-white/15 pt-[40px]"
        >
          <h3 className="font-product text-[22px] font-normal leading-[1.2] tracking-[-0.02em] text-white">
            About KiwiKoru
          </h3>
          <p className={PROSE}>{study.about}</p>
        </section>
      </article>

      {/* Closing CTA — the site's shared final call to action. */}
      <FinalCta />
    </>
  );
}
