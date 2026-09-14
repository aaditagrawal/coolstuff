# StyleX migration

Component styles live in `home.stylex.js` and `primitives.stylex.js`. The Babel loader compiles only these files, preserving Next.js SWC and `next/font`. PostCSS extracts their static CSS. Tailwind and tailwind-merge are no longer dependencies.

`reset.css` retains the previous reset and theme values, with the original license in `reset.LICENSE`. The card-header sibling rule remains plain CSS because StyleX styles target the element itself. Existing animation state, timing, transforms, fonts, content, and markup are preserved.

Validation against the previous production build:

- All non-custom computed CSS properties and bounding rectangles matched for 208 elements at 1280×800 and 390×844 after clearing card selection.
- The hovered-card state matched for 213 elements. Timer-driven gradient strings were excluded from that comparison; their source and timing are unchanged.
- A temporary, unshipped fixture verified button variants and sizes, badges, and card parts. The default computed styles and boxes matched for all 19 elements. Focus ring declarations were compared separately.
- Production build, TypeScript, lint, and formatting checks passed.

The build emits a Next.js advisory about the deliberately scoped Babel loader. It does not affect compilation or the generated UI.
