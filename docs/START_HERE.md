# 🚀 Start Here

Welcome to the **Revizto UI Components** library. This is the fastest path from zero to a working Revizto-style interface.

---

## What is this?

A ready-to-use React component library that matches Revizto's design language — dark backgrounds, red accent color, status badges for issues, priority icons, and all the building blocks you need to build construction/BIM project management UIs.

---

## Fastest path: Use with Lovable.dev (5 minutes)

1. Go to [lovable.dev](https://lovable.dev) and create a new project
2. Open the Lovable chat
3. Copy the contents of [`LOVABLE_PROMPT_SHORT.txt`](LOVABLE_PROMPT_SHORT.txt)
4. Paste it into the Lovable chat and send
5. Lovable will set up the components automatically

That's it. See the full guide: [`HOW_TO_USE_IN_LOVABLE.md`](HOW_TO_USE_IN_LOVABLE.md)

---

## Local development (10 minutes)

```bash
git clone https://github.com/YOUR_USERNAME/revizto-ui-components
cd revizto-ui-components
npm install
npm run dev
```

Open `http://localhost:5173` — you'll see all components in the examples view.

See [`INSTALLATION.md`](INSTALLATION.md) for full setup details.

---

## File map

| File | What it is |
|---|---|
| `src/revizto-ui-tailwind.jsx` | ⭐ All components — use this |
| `src/revizto-ui.jsx` | Same components, inline styles (no Tailwind needed) |
| `src/examples.jsx` | Live demo of everything |
| `docs/HOW_TO_USE_IN_LOVABLE.md` | Lovable.dev integration guide |
| `docs/LOVABLE_PROMPT_SHORT.txt` | Copy-paste prompt for Lovable |
| `docs/README-TAILWIND.md` | Tailwind configuration reference |

---

## Key components

- `Button` — 5 variants, 3 sizes, loading state
- `IssueCard` — Revizto-style issue card with status, priority, assignees, tags
- `StatusBadge` — open / in-progress / resolved / closed chips
- `PriorityIcon` — critical / high / medium / low / none
- `Table` — sortable data table
- `Modal` — dialog overlay with keyboard support
- `Avatar` — user avatar with initials fallback
- Plus: Input, Select, Card, Alert, Tabs, Progress, Spinner, Tooltip, Tag, Sidebar

---

**Next step → [`HOW_TO_USE_IN_LOVABLE.md`](HOW_TO_USE_IN_LOVABLE.md)**
