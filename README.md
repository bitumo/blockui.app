# BlockUI

A gallery of copy-paste UI blocks built with **Astro** and **Tailwind CSS**. Each block is a single self-contained `.astro` file — no packages to install, no peer dependencies, no version drift. Paste it in and it just works.

## Features

- **Live preview** with resizable viewport (mobile / tablet / desktop)
- **Source viewer** with syntax highlighting and one-click copy
- **Full-page preview** at `/preview/<slug>` for isolated testing
- **Search** across all block categories via `⌘K`
- **Dark mode** with system preference detection and manual toggle

## Blocks

| Category | Variants |
|---|---|
| **Hero** | Centered, Minimal |
| **Features** | Bento, Minimal |
| **Pricing** | Centered, Minimal |
| **CTA** | Centered, Split, Banner |
| **Testimonials** | Grid, Featured, Minimal |
| **Logo Cloud** | Simple, Grid, Dark |
| **FAQ** | Accordion, Split, Minimal |
| **Team** | Grid, List, Minimal |
| **How To** | Steps, Alternating, Minimal |
| **Code Demo** | Split, Terminal, Minimal |
| **Integrations** | Grid, Bento, Minimal |
| **Contact** | Split, Centered, Minimal |
| **Login** | Centered, Split, Minimal |
| **Footer** | Centered, Columns, Dark |

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun dev        # http://localhost:4321

# Production build
bun build

# Preview production build
bun preview
```

## Project Structure

```
src/
├── blocks.ts           # Block registry
├── blocks/             # Block source files
│   └── <category>/
│       └── <variant>.astro
├── components/
│   ├── PreviewCard.astro   # Preview + code tab card
│   └── SearchDialog.astro  # ⌘K search dialog
├── layouts/
│   └── Base.astro          # Shared layout with nav + dark mode
├── pages/
│   ├── index.astro         # Homepage
│   ├── blocks.astro        # All blocks listing
│   ├── [block].astro       # Block category page
│   └── preview/[slug].astro
└── styles/
    └── global.css
```

## Adding a Block

1. Create `src/blocks/<category>/<category>-<variant>.astro`
2. Build it using plain Tailwind utility classes
3. Register it in `src/blocks.ts`:

```ts
import MyBlock from "./blocks/my-category/my-category-variant.astro";

export const myCategory = {
  description: "Short description shown in the gallery.",
  variants: [
    defineVariant(MyBlock),
  ],
};
```

## Tech Stack

- [Astro 6](https://astro.build) — file-based routing and `.astro` components
- [Tailwind CSS 4](https://tailwindcss.com) — utility-first styling
- [Shiki](https://shiki.style) — syntax highlighting for the code viewer
- [Prettier](https://prettier.io) — code formatting before display
- [Bun](https://bun.sh) — package manager and dev server

## License

MIT
