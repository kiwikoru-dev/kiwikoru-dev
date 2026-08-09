/**
 * "comparisonSection" data — Figma node 469:549 (frame 420:412, 1512×982).
 *
 * A 6-row × 5-column feature matrix comparing kiwikoru against the alternatives.
 * The first data column ("kiwikoru") is the featured option — every cell is a
 * check, and it's rendered with a highlighted panel in comparison.tsx.
 *
 * A cell is one of:
 *   • "check" — the two-tone tick glyph (feature fully covered)
 *   • "dash"  — the two-tone minus glyph (not covered)
 *   • string  — a muted qualifier ("months to start", "varies", …)
 */

/** Column headers, in render order. `kiwikoru` is the featured (highlighted) one. */
export const COMPARISON_COLUMNS = [
  "KiwiKoru",
  "In-house team",
  "Big consultancy",
  "Freelance DevOps",
  "Managed hosting",
] as const;

export type ComparisonCell = "check" | "dash" | (string & {});

export interface ComparisonRow {
  /** Row label, left-aligned in the first column. */
  readonly label: string;
  /** One cell per column in COMPARISON_COLUMNS order. */
  readonly cells: readonly [
    ComparisonCell,
    ComparisonCell,
    ComparisonCell,
    ComparisonCell,
    ComparisonCell,
  ];
}

// PLACEHOLDER COPY — the row labels and competitor cells below are authored, not
// sourced from KiwiKoru. The WordPress site has no comparison content at all, so
// these are a plausible AWS-consulting matrix in the house voice. Have the client
// confirm each claim before this ships.
export const COMPARISON_ROWS: readonly ComparisonRow[] = [
  {
    label: "Time to first migration",
    cells: ["check", "Months to hire", "Weeks of scoping", "check", "N/A"],
  },
  {
    label: "AWS certified engineers",
    cells: ["check", "Varies", "check", "Lottery", "dash"],
  },
  {
    label: "24/7 monitoring included",
    cells: ["check", "On-call rota", "Extra retainer", "dash", "check"],
  },
  {
    label: "Actively cuts your bill",
    cells: ["check", "check", "dash", "Sometimes", "dash"],
  },
  {
    label: "One team that knows your stack",
    cells: ["check", "check", "Rotating", "Solo", "Ticket queue"],
  },
  {
    label: "Predictable cost",
    cells: ["check", "Salary + benefits", "Scope creep", "Hourly drift", "check"],
  },
];
