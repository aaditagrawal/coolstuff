# dithercn shader runtime

Shader-only files from https://dithercn.dev/r/dither-core.json, with the Aurora
component from https://dithercn.dev/r/aurora.json in `src/components/dithercn`.
Retrieved November 3, 2026. MIT licensed, see LICENSE.

The canvas, wrapper and fallback use semantic CSS classes in `globals.css`
instead of Tailwind utilities, since this site uses StyleX. The barrel exports
only the shader API used here. No additional runtime dependencies are needed.
