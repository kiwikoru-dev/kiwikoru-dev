import type { Stat } from "./case-study-data";

/**
 * The three headline numbers of a case study, as a row of glass tiles — the
 * "key results" band from the reference case-study layout. Presentational only;
 * the reveal comes from the page's <CaseStudyReveal> driver.
 *
 * Uses the site's ONE glass recipe (border-white/30, faint dark gradient, inset
 * veil — same as glass-card.tsx), NO backdrop-blur (docs/backdrop-filter-sweep).
 */
export default function StatBand({ stats }: { stats: Stat[] }) {
  return (
    <div
      data-cs-stats
      className="grid w-full grid-cols-3 gap-[20px] max-md:grid-cols-1"
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center gap-[10px] rounded-[20px] border-[1.5px] border-solid border-white/30 bg-gradient-to-b from-black/10 to-black/5 p-[28px] text-center shadow-[inset_0_0_0_999px_rgba(255,255,255,0.06)]"
        >
          <span className="font-product text-[46px] font-light leading-[1.05] tracking-[-0.03em] text-white max-md:text-[40px]">
            {s.value}
          </span>
          <span className="font-product text-body font-light leading-[1.4] text-white/60">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}
