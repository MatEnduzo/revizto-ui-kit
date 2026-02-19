# How to Use Revizto UI in Lovable.dev

This guide covers three methods: GitHub import (recommended), manual copy-paste, and the one-line prompt.

---

## Method 1: Import from GitHub (Recommended)

### Step 1 — Push the repo to GitHub
If you haven't already:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/revizto-ui-components.git
git branch -M main
git push -u origin main
```

### Step 2 — Connect in Lovable
1. Open [lovable.dev](https://lovable.dev)
2. Create a new project or open an existing one
3. Click **GitHub** in the top-right → **Import from GitHub**
4. Select `revizto-ui-components`
5. Lovable will import the components automatically

### Step 3 — Start building
In the Lovable chat:
```
Create an issue tracker page using the Revizto UI components from src/revizto-ui-tailwind.jsx.
Show a list of IssueCards with different statuses and priorities.
```

---

## Method 2: Copy-paste the component file

1. Open [lovable.dev](https://lovable.dev) → New project
2. In the file explorer, create `src/revizto-ui-tailwind.jsx`
3. Copy the full contents of `src/revizto-ui-tailwind.jsx` from this repo
4. Paste into Lovable
5. In the chat, tell Lovable what to build

---

## Method 3: One-line prompt

Open Lovable, paste this into the chat:

```
Create a Revizto-style dark UI using these design tokens:
background #121212, surface #1E1E1E, primary red #E63946, text #F5F5F5, muted #9E9E9E.
Build an issue tracker with status badges (open/in-progress/resolved/closed),
priority icons (critical/high/medium/low), user avatars, and a data table.
```

---

## Using individual components in Lovable prompts

Once your components are imported, reference them by name in your prompts:

### Issue list
```
Build an issues page using IssueCard component.
Show 6 sample issues with varying statuses and priorities.
Include filter buttons for status using the StatusBadge component.
```

### Dashboard
```
Create a project dashboard with:
- A Card showing issue count stats (open, in-progress, resolved)
- Progress bars using the Progress component
- A team member list with Avatar components
- A Table showing recent issues with StatusBadge and PriorityIcon columns
```

### Create issue form
```
Build a "Create Issue" modal using the Modal component.
Include Input for title, Select for priority and status, and Checkbox for assignment.
Add Cancel and Submit buttons using the Button component.
```

---

## Tailwind configuration in Lovable

Lovable uses Tailwind by default. The `revizto-ui-tailwind.jsx` file uses standard Tailwind utilities plus some custom color values in square-bracket notation (e.g. `bg-[#E63946]`). These work without any additional Tailwind config.

If colors don't appear correctly, tell Lovable:
```
Make sure Tailwind CSS is enabled and that arbitrary values like bg-[#E63946] are supported.
```

---

## Troubleshooting

**Components not rendering:**
- Make sure you're importing from the correct path
- Check that React and Tailwind are installed in the Lovable project

**Colors look wrong:**
- Lovable may apply its own theme; tell it: "Keep the dark background #121212 and red accent #E63946 from the Revizto design system"

**Tailwind classes not applying:**
- Tell Lovable: "Enable JIT mode in Tailwind config to support arbitrary color values"
