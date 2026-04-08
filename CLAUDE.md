# BlockUI — CLAUDE.md

## Project Overview

BlockUI is a gallery of reusable UI blocks (Hero, CTA, Features, Pricing, etc.). Each block category has multiple variants with different styles (e.g. centered, minimal, bento). Visitors can:

- Browse variants inline on the category page with a live preview
- Switch to a Code tab to view and copy the source code
- Open a variant in its own dedicated full-page preview at `/preview/<slug>`

## Tech Stack

- **Astro 6.x** — file-based routing, `.astro` pages and layouts
- **Preact 10.x** — interactive components (use for complex stateful/interactive UI only)
- **Tailwind CSS 4.x** — all styling via utility classes; imported as `@import "tailwindcss"` in `src/styles/global.css`
- **TypeScript** (strict) — JSX is configured to use Preact (`preact/compat`)
- **Bun** — package manager and task runner

## Project Structure

```
src/
├── blocks.ts           # blocks registry
├── blocks/             # UI blocks
│   └── <block>/        # block category, e.g. hero, pricing
│        └── <block-variant>.astro           # Block variants
├── components/         # Reusable Astro and Preact components
├── layouts/            # Astro layout wrappers
├── pages/              # File-based routes
│   ├── index.astro     # Homepage
│   ├── preview/
│   │    └── [slug].astro  # Block variant full-page preview
│   └── [block].astro    # Block page
└── styles/
    └── global.css
```

## Development Commands

```bash
bun dev        # Start dev server (localhost:4321)
bun build      # Production build to ./dist/
bun preview    # Preview production build
```

## Block Architecture

Each block lives in `src/blocks/<block>/<block-variant>.astro`, e.g.

```
src/blocks/hero/
├── hero-centered.astro  # "hero" block, on "centered" variant.
```

**Blocks Registry**:

All blocks need to register in `src/blocks.ts`, e.g.

```ts
import HeroCentered from "./blocks/hero/hero-centered.astro";

export const hero = {
  description: "...",
  variants: [
    defineVariant(HeroCentered),
  ]
}
```


## Adding a New Block

1. Create `src/components/blocks/<block>/` directory if not exists
2. Write the block in `<block-variant>.astro` using Tailwind classes
3. Register in the `src/blocks.ts`

