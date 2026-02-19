# Files Reference — Complete List

All 15 files in this repository and what each one does.

---

## Root folder (4 files)

| File | Size | Purpose |
|---|---|---|
| `README.md` | ~80 lines | Project homepage shown on GitHub. Describes the library, components, and design tokens. |
| `package.json` | ~30 lines | Node.js config: dependencies (React, Tailwind), scripts (dev, build). |
| `.gitignore` | ~25 lines | Tells Git which files to ignore (node_modules, .env, dist, etc.). |
| `LICENSE` | ~21 lines | MIT License. Allows anyone to use, copy, and modify this code. |

---

## src/ folder (3 files)

| File | Size | Purpose |
|---|---|---|
| `src/revizto-ui-tailwind.jsx` ⭐ | ~450 lines | **The main component library.** All 18 components built with Tailwind CSS. Import from this file. |
| `src/revizto-ui.jsx` | ~300 lines | Inline-styles version of the same components. Use when Tailwind is not available. |
| `src/examples.jsx` | ~280 lines | Live demo of every component with sample Revizto data. Renders as a full demo page. |

---

## docs/ folder (8 files)

| File | Purpose |
|---|---|
| `START_HERE.md` | Entry point — the 5-minute quickstart guide |
| `HOW_TO_USE_IN_LOVABLE.md` | 3 methods for integrating with Lovable.dev |
| `LOVABLE_INSTRUCTIONS.md` | Full prompt templates for building Revizto-style pages |
| `LOVABLE_PROMPT_SHORT.txt` | One-file copy-paste prompt for Lovable chat |
| `README-TAILWIND.md` | Tailwind CSS setup and configuration reference |
| `INSTALLATION.md` | Local dev setup (npm install, dev server, build) |
| `GITHUB_SETUP.md` | How to push this repo to GitHub |
| `FILES_TO_UPLOAD.md` | This file — describes every file |

---

## Minimum set (if you only want the essentials)

You only need **3 files** to use this with Lovable.dev:

1. `src/revizto-ui-tailwind.jsx` — the components
2. `README.md` — so GitHub shows a nice project page
3. `docs/LOVABLE_PROMPT_SHORT.txt` — the Lovable chat prompt

Everything else adds documentation and developer convenience.

---

## Total: 15 files across 3 folders
