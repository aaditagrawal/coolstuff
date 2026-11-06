# Static arrow substitution

Baseline: current `main` at `9a054172d843eda123620646c4dea57b4b97f486`. The homepage consumes only Lucide's 18px ArrowUpRight. The replacement retains its exact SVG attributes, classes, paths and child keys, and removes the component/factory calls by sharing one immutable element.

The arrow-only change at `4459361` preserves the current main design, with byte-identical production screenshots and homepage markup. A separate, requested correction replaces the malformed GitHub outline with the standard filled mark. That glyph change is intentional; its 18px dimensions, inherited color and parent link label remain unchanged. Styles, layout, fonts, aurora, card behavior, project data and social images are unchanged.

## Server-render measurements

Bun 1.4.2, React/React DOM 19.3.1, Next 16.4.3, Lucide 1.64.0. Actual consumed 18px arrow SVGs are rendered with the same canonical React instance and renderer. The arrow SVG markup is byte-identical to Lucide. Measurements below qualify the arrow substitution; earlier whole-homepage measurements predate the requested GitHub glyph correction and are not claimed for the final page.

First process: 31 paired samples after 30 warmups, alternating order. Reproduction: 21 samples, reversed starting order. Arrow samples average ceil(2000/count) renders. Times exclude setup, imports and compilation. Median and p90 must both be at or below baseline in both processes; all rows pass. This is a steady-state SSR claim, not a browser-load or universal-speed guarantee.

The measurement invocation passed the fleet gate's quiet-host checks. Its subsequent visual probe initially compared different shader-readiness states. That harness issue was fixed with explicit clock/readiness control, and production visual parity was then checked separately. A requested later timing slot deferred; it was not retried. The exact renderer bundles were rebuilt and verified byte-identical after restoring the minimal frozen lockfile, so the recorded arrow measurements still apply to the unchanged arrow code.

Milliseconds per operation, median / p90:

| Workload     |            Baseline |         Replacement | Reproduction baseline | Reproduction replacement |
| ------------ | ------------------: | ------------------: | --------------------: | -----------------------: |
| Arrow18 x1   | 0.007842 / 0.010059 | 0.003444 / 0.004612 |   0.006815 / 0.009695 |      0.003313 / 0.003709 |
| Arrow18 x14  | 0.116696 / 0.134078 | 0.049432 / 0.063538 |   0.096314 / 0.099242 |      0.045368 / 0.047783 |
| Arrow18 x140 | 1.099456 / 1.387730 | 0.481994 / 0.607391 |   1.034778 / 1.201274 |      0.490487 / 0.673861 |

The delivery artifacts retain every raw sample, production build snapshots, screenshot pairs, source/bundle hashes and the verification harness. Only Lucide is removed from the dependency graph; all other lock records, versions, integrity values and platform metadata are preserved.
