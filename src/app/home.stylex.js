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
  root: { position: "relative", overflow: "hidden", borderRadius: ".75rem" },
  trail: {
    position: "absolute",
    inset: "-1px",
    borderRadius: ".75rem",
    pointerEvents: "none",
    overflow: "hidden",
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
  fill: { position: "absolute", inset: 0 },
  glow: { position: "absolute", inset: 0, borderRadius: ".75rem", pointerEvents: "none" },
  content: { position: "relative", height: "100%" },
});
