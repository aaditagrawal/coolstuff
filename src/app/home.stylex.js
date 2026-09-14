import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  root: { minHeight: "100vh", backgroundColor: "#000" },
  container: {
    marginInline: "auto",
    maxWidth: "48rem",
    paddingInline: "1.5rem",
    paddingBlock: { default: "6rem", "@media (width >= 40rem)": "8rem" },
  },
  header: { marginBottom: "4rem" },
  title: {
    fontSize: { default: "3rem", "@media (width >= 40rem)": "3.75rem" },
    lineHeight: 1,
    letterSpacing: "-0.025em",
    color: "#fff",
    fontFamily: "var(--font-serif)",
  },
  intro: { marginTop: "1.5rem", color: "var(--color-neutral-500)" },
  author: { color: { default: "#FF4D00", "@media (hover: hover)": { ":hover": "#ff6a2a" } } },
  grid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(1,minmax(0,1fr))",
      "@media (width >= 40rem)": "repeat(2,minmax(0,1fr))",
    },
    gap: "1rem",
    alignItems: "stretch",
  },
  fullHeight: { height: "100%" },
  article: {
    position: "relative",
    height: "100%",
    borderRadius: ".75rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: {
      default: "var(--color-neutral-800)",
      "@media (hover: hover)": { ":hover": "color-mix(in oklab,#FF4D00 50%,transparent)" },
      ":active": "#FF4D00",
    },
    backgroundColor: {
      default: "var(--color-neutral-950)",
      "@media (hover: hover)": {
        ":hover": "color-mix(in oklab,var(--color-neutral-900) 50%,transparent)",
      },
      ":active": "var(--color-neutral-900)",
    },
    padding: "1.25rem",
    transitionProperty: "all",
    transitionDuration: ".2s",
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
  },
  headingRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: ".75rem",
    marginBottom: ".75rem",
  },
  cardTitle: { color: "#fff", fontSize: ".875rem", lineHeight: "1.25rem", fontWeight: 500 },
  links: { display: "flex", alignItems: "center", gap: ".25rem", flexShrink: 0 },
  iconLink: {
    padding: ".5rem",
    margin: "-.25rem",
    color: {
      default: "var(--color-neutral-500)",
      "@media (hover: hover)": { ":hover": "#FF4D00" },
      ":active": "#FF4D00",
    },
    backgroundColor: {
      default: null,
      "@media (hover: hover)": { ":hover": "var(--color-neutral-800)" },
      ":active": "var(--color-neutral-800)",
    },
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionDuration: ".15s",
    transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
    borderRadius: ".5rem",
  },
  description: { color: "var(--color-neutral-500)", fontSize: ".75rem", lineHeight: 1.625 },
  footer: {
    marginTop: "6rem",
    paddingTop: "2rem",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderColor: "var(--color-neutral-900)",
    color: "var(--color-neutral-600)",
    fontSize: ".75rem",
    lineHeight: "1rem",
  },
});

export const tiltStyles = stylex.create({
  root: {
    position: "relative",
    overflow: "hidden",
    borderRadius: ".75rem",
    transform: "var(--tilt-transform, perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1))",
    transformStyle: "preserve-3d",
    transitionProperty: "transform",
    transitionDuration: ".2s",
    transitionTimingFunction: "ease-out",
  },
  trail: {
    position: "absolute",
    inset: "-1px",
    borderRadius: ".75rem",
    pointerEvents: "none",
    overflow: "hidden",
    background:
      "conic-gradient(from var(--trail-angle, 0deg) at 50% 50%, #FF4D00, transparent 25%, transparent 75%, #FF4D00)",
  },
  backing: {
    position: "absolute",
    inset: 0,
    borderRadius: ".75rem",
    pointerEvents: "none",
    backgroundColor: "var(--color-neutral-950)",
  },
  shimmer: {
    position: "absolute",
    inset: 0,
    borderRadius: ".75rem",
    pointerEvents: "none",
    overflow: "hidden",
  },
  fill: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(105deg, transparent calc(var(--shimmer-pos, -100%) - 30%), rgba(255,77,0,0.08) var(--shimmer-pos, -100%), transparent calc(var(--shimmer-pos, -100%) + 30%))",
  },
  glow: {
    position: "absolute",
    inset: 0,
    borderRadius: ".75rem",
    pointerEvents: "none",
    background:
      "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255,77,0,0.12) 0%, transparent 50%)",
  },
  content: { position: "relative", height: "100%" },
});
