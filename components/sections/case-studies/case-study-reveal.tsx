"use client";

import RevealOnScroll from "@/components/ui/reveal-on-scroll";

/**
 * Scroll-in entrances for a case-study DETAIL page. One <RevealOnScroll> per
 * block, each triggering on its own section as it enters, so the long page
 * animates section-by-section rather than all at once.
 *
 * Same rules as every inner-page reveal (see reveal-on-scroll.tsx): rides the
 * shared ticker, one-shot, markup renders FINISHED, NO `data-reveal-*` hooks
 * (those are home-only). Renders nothing.
 */
export default function CaseStudyReveal() {
  return (
    <>
      <RevealOnScroll selector="[data-cs-facts] > *" stagger={0.05} />
      <RevealOnScroll selector="[data-cs-challenge] > *" />
      <RevealOnScroll selector="[data-cs-solution] > *" />
      <RevealOnScroll selector="[data-cs-delivered] > *" stagger={0.05} />
      <RevealOnScroll selector="[data-cs-results] > *" />
      <RevealOnScroll selector="[data-cs-arch] > *" />
      <RevealOnScroll selector="[data-cs-outro] > *" />
    </>
  );
}
