import type { SVGProps } from "react";
import { BRAND_MARK_PATH, BRAND_MARK_VIEWBOX } from "@/components/ui/brand-mark";

/**
 * Intro-loader variant of the KiwiKoru mark — the SAME traced path as
 * <BrandMark/>, but filled with the brand's orange gradient instead of
 * currentColor. Kept SEPARATE from <BrandMark/> on purpose: that mark is used
 * MONOCHROME (flat white) in the nav pill and as glass chrome, and its header
 * explicitly forbids reintroducing the gradient there. This variant exists only
 * for the welcome loading screen (intro-loader.tsx), which wanted the coloured
 * logo. It shares BRAND_MARK_PATH so a future re-trace updates both at once.
 *
 * Gradient sampled from the source artwork (500×500 Gemini PNG, the same file
 * <BrandMark/> was traced from): the mark runs from a lighter amber on the LEFT
 * (~#F9B12E) to a deeper orange on the RIGHT (~#F0731F), lightest toward the
 * lower-left — so the stops go left→right with a slight downward tilt. These
 * three stops are the only tunable knob; nothing else depends on them.
 *
 * Like <BrandMark/>, size it on ONE axis (`w-*`); the art is 1.42:1, not square,
 * so `size-*` would letterbox it. No `text-*` colour is needed here — the fill
 * comes from the gradient, not currentColor.
 */
const GRADIENT_ID = "kiwikoru-intro-mark";

export default function IntroBrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox={BRAND_MARK_VIEWBOX}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <defs>
        {/* objectBoundingBox units (the default): 0→100% spans the mark's own
            bounding box, so the gradient tracks the art at any render size. */}
        <linearGradient id={GRADIENT_ID} x1="0%" y1="28%" x2="100%" y2="72%">
          <stop offset="0%" stopColor="#FBB12E" />
          <stop offset="55%" stopColor="#FA8F20" />
          <stop offset="100%" stopColor="#F0731F" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={`url(#${GRADIENT_ID})`}
        d={BRAND_MARK_PATH}
      />
    </svg>
  );
}
