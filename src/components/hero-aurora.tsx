"use client";

import { Aurora } from "@/components/dithercn/aurora";

/** The site's orange, rendered as slow curtains above the page title. */
export function HeroAurora() {
  return (
    <div className="hero-aurora" aria-hidden="true">
      <Aurora
        className="hero-aurora-shader"
        palette={["--dither-paper", "--dither-ink"]}
        color="--dither-ink"
        background="--dither-paper"
        direction="down"
        height={0.24}
        curtains={3}
        spread={0.1}
        sway={1.5}
        turbulence={0.65}
        length={0.55}
        intensity={0.85}
        glow={1.1}
        rays={10}
        drift={0.3}
        speed={0.45}
        cell={2}
        fps={24}
        stillTime={12}
      />
    </div>
  );
}
