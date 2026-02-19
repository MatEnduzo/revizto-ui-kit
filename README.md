# Revizto UI Components

A React + Tailwind CSS component library built to match Revizto's design language — ready to use with [Lovable.dev](https://lovable.dev).

![Revizto UI](https://img.shields.io/badge/Revizto-UI%20Kit-E63946?style=flat-square)
![React](https://img.shields.io/badge/React-18%2B-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38BDF8?style=flat-square&logo=tailwindcss)
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ⚡ Quick Start in Lovable.dev

1. Open [Lovable.dev](https://lovable.dev) and create or open a project
2. In the Lovable chat, paste the prompt from `docs/LOVABLE_PROMPT_SHORT.txt`
3. Lovable will install the components and you're ready to build

For a full guide see [`docs/HOW_TO_USE_IN_LOVABLE.md`](docs/HOW_TO_USE_IN_LOVABLE.md).

---

## 📦 What's Included

```
revizto-ui-components/
├── src/
│   ├── revizto-ui-tailwind.jsx   ⭐ Main component library (Tailwind)
│   ├── revizto-ui.jsx             Inline-styles version (no Tailwind needed)
│   └── examples.jsx               Usage examples for all components
├── docs/
│   ├── START_HERE.md
│   ├── HOW_TO_USE_IN_LOVABLE.md
│   ├── LOVABLE_INSTRUCTIONS.md
│   ├── LOVABLE_PROMPT_SHORT.txt
│   ├── README-TAILWIND.md
│   ├── INSTALLATION.md
│   ├── GITHUB_SETUP.md
│   └── FILES_TO_UPLOAD.md
├── README.md
├── package.json
├── .gitignore
└── LICENSE
```

---

## 🎨 Components

| Component | Description |
|---|---|
| `Button` | Primary, Secondary, Ghost, Danger, Icon variants |
| `Badge` / `StatusBadge` | Issue status, priority, and label chips |
| `Card` | General content container |
| `IssueCard` | Revizto-style issue card with status, priority, assignee |
| `Input` | Text field with label, error, and helper text |
| `Select` | Dropdown selector |
| `Checkbox` | Checkbox with label |
| `Avatar` | User avatar with initials fallback |
| `Modal` | Dialog overlay |
| `Table` | Data table with sortable columns |
| `Alert` | Info, success, warning, error banners |
| `Spinner` | Loading indicator |
| `Progress` | Linear and circular progress |
| `Tabs` | Tab navigation |
| `Tooltip` | Hover tooltip |
| `Tag` | Filter/category chip |
| `Sidebar` | Navigation sidebar item |
| `PriorityIcon` | Critical, High, Medium, Low, None |

---

## 🚀 Local Installation

```bash
npm install
npm run dev
```

See [`docs/INSTALLATION.md`](docs/INSTALLATION.md) for detailed setup.

---

## 🎯 Design Tokens

| Token | Value | Usage |
|---|---|---|
| Primary | `#E63946` | Buttons, links, accent |
| Dark BG | `#121212` | App background |
| Surface | `#1E1E1E` | Cards, panels |
| Surface 2 | `#2D2D2D` | Inputs, rows |
| Text | `#F5F5F5` | Primary text |
| Text Muted | `#9E9E9E` | Secondary text |
| Success | `#06D6A0` | Resolved, closed |
| Warning | `#FFB703` | In progress |
| Error | `#EF233C` | Open, critical |

---

## 📄 License

MIT © 2024 — see [LICENSE](LICENSE)
