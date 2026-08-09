/**
 * Pricing content (Figma node 469:680). The two tiers share one inner layout
 * (see PlanCard in pricing.tsx); only the copy + feature lists differ, so they
 * live here as data — mirroring comparison-data.ts.
 */

export type Plan = {
  /** Instrument-serif card title (469:785 / 469:824). */
  readonly title: string;
  /** Supporting line under the feature-block heading (469:793 / 469:833). */
  readonly description: string;
  /** Ticked feature rows (469:794 / 469:834). */
  readonly features: readonly string[];
};

// PLACEHOLDER COPY — KiwiKoru's WordPress site publishes no pricing or packaging
// at all. Both tiers below are authored to fit the design's two-card shape and
// the services the site does advertise. Confirm the inclusions (and add real
// numbers) before this goes live.
export const SUBSCRIPTION: Plan = {
  title: "Managed services",
  description:
    "Your ongoing AWS team. Monitoring, patching, and cost control, handled month to month.",
  features: [
    "24/7 monitoring and incident response",
    "Patching, backups, and DR drills",
    "Monthly cost-optimisation review",
    "AWS governance and guardrails",
    "No lock-in, cancel anytime",
  ],
};

export const FIXED_SPRINT: Plan = {
  title: "Migration sprint",
  description:
    "A defined move to AWS in a set window. For lift-and-shift and re-platforming.",
  features: [
    "Discovery and landing zone",
    "Migration plan with rollback",
    "Same certified engineers",
    "50/50 payment split",
  ],
};
