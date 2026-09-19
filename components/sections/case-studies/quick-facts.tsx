import type { QuickFact } from "./case-study-data";

/**
 * The at-a-glance facts row under a case-study heading (client, industry,
 * platform, engagement) — the "quick facts" bar from the reference layout.
 * A definition list so it reads correctly to assistive tech.
 */
export default function QuickFacts({ facts }: { facts: QuickFact[] }) {
  return (
    <dl
      data-cs-facts
      className="grid w-full grid-cols-4 gap-[20px] rounded-[20px] border-[1.5px] border-solid border-white/30 bg-gradient-to-b from-black/10 to-black/5 p-[28px] shadow-[inset_0_0_0_999px_rgba(255,255,255,0.06)] max-md:grid-cols-2"
    >
      {facts.map((f) => (
        <div key={f.label} className="flex flex-col gap-[6px]">
          <dt className="font-product text-[12px] font-normal uppercase leading-none tracking-[0.12em] text-white/45">
            {f.label}
          </dt>
          <dd className="font-product text-body font-light leading-[1.35] text-white">
            {f.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
