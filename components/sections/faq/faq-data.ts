/**
 * FAQ content (Figma node 526:414). The design only draws the six collapsed
 * question pills (526:415…526:450) — no answer copy exists in the mock, so the
 * answers are authored here in the site's established voice (lowercase, direct,
 * confident — mirroring pricing-data.ts and working-with.tsx).
 */

export type Faq = {
  /** Question label, exactly as the Figma pill reads (526:416, 526:423, …). */
  readonly question: string;
  /** Answer revealed on expand — authored copy, not from the mock. */
  readonly answer: string;
};

// PLACEHOLDER COPY — no FAQ content exists on the KiwiKoru site. These six are
// authored in the house voice to fill the design's six pills (the count is fixed
// by the mock). Answers make claims about SLAs, certifications and billing:
// verify each with the client before publishing.
export const FAQS: readonly Faq[] = [
  {
    question: "How long does a migration take?",
    answer:
      "Most lift-and-shift moves land in two to six weeks depending on how much data follows you. You get a plan with dates and a rollback path before anything moves.",
  },
  {
    question: "Will you actually cut our AWS bill?",
    answer:
      "Usually, and materially. Right-sizing, reserved capacity and killing idle resources are the first pass — we review spend monthly and show you the delta, not just a dashboard.",
  },
  {
    question: "What happens when something breaks at 3 a.m.?",
    answer:
      "Monitoring is 24/7 and so are we. Alerts page a real engineer who knows your stack, and you get an incident write-up afterwards rather than a closed ticket.",
  },
  {
    question: "Do we have to move everything at once?",
    answer:
      "No. Most clients run hybrid for a while — we migrate in waves, keep both sides talking, and only cut over when the new environment has proven itself.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "AWS certified engineers, the same ones each time. No offshore handoff, no rotating bench, no junior learning on your production account.",
  },
  {
    question: "Are we locked in?",
    answer:
      "No. Managed services run month to month, and everything we build is plain AWS with Terraform you own. If you leave, your infrastructure leaves with you.",
  },
];
