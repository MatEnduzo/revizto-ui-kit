# Installation Guide

Local development setup for Revizto UI Components.

---

## Prerequisites

- Node.js 18+ ([nodejs.org](https://nodejs.org))
- npm 9+ (bundled with Node)
- Git

---

## Quick Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/revizto-ui-components.git
cd revizto-ui-components

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## What's installed

| Package | Purpose |
|---|---|
| `react` + `react-dom` | UI framework |
| `tailwindcss` | Utility CSS |
| `autoprefixer` | CSS vendor prefixes |
| `postcss` | CSS processing |
| `vite` + `@vitejs/plugin-react` | Dev server & bundler |

---

## Set up Tailwind (if starting from scratch)

If you're integrating into an existing project rather than cloning this repo:

```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add to `tailwind.config.js`:
```js
content: ["./src/**/*.{js,jsx,ts,tsx}"]
```

Add to your main CSS file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Using components in your app

```jsx
// Import individual components
import { Button, IssueCard, StatusBadge, PriorityIcon } from './revizto-ui-tailwind';

// Or import all at once
import ReviztoUI from './revizto-ui-tailwind';
const { Button, IssueCard } = ReviztoUI;
```

### Example app

```jsx
// src/App.jsx
import { Button, IssueCard, StatusBadge } from './revizto-ui-tailwind';

export default function App() {
  return (
    <div className="bg-[#121212] min-h-screen p-8">
      <h1 className="text-2xl font-bold text-[#F5F5F5] mb-6">My Project</h1>
      <IssueCard issue={{
        issueNumber: 1042,
        title: "Clash detected in HVAC duct routing",
        status: "open",
        priority: "critical",
        assignees: ["Alex Kim"],
        tags: ["MEP"],
      }} />
    </div>
  );
}
```

---

## Production build

```bash
npm run build
```

Output goes to `dist/`. Deploy to any static host (Netlify, Vercel, GitHub Pages).

---

## Troubleshooting

**Port already in use:**
```bash
npm run dev -- --port 3001
```

**Tailwind classes not applying:**
- Check that `tailwind.config.js` has the correct `content` paths
- Ensure `@tailwind` directives are in your CSS entry point
- Restart the dev server after changing Tailwind config

**Module not found errors:**
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then `npm install`
