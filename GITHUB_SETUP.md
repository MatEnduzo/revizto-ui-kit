# GitHub Setup Guide

How to get this repository onto GitHub so Lovable.dev (and others) can use it.

---

## Option A: Upload via GitHub Web UI (No CLI needed)

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `revizto-ui-components`
3. Description: `Revizto UI component library — React + Tailwind, Lovable.dev ready`
4. Set to **Public**
5. Do NOT check "Add a README file" (you already have one)
6. Click **Create repository**
7. On the next page, click **"uploading an existing file"**
8. Drag and drop all your files (GitHub will auto-create `src/` and `docs/` folders from paths)
9. Commit message: `Initial commit — Revizto UI components`
10. Click **Commit changes**

---

## Option B: Command Line (Git CLI)

```bash
# Navigate to your project folder
cd revizto-ui-components

# Initialize git
git init

# Stage all files
git add .

# Create first commit
git commit -m "Initial commit — Revizto UI components"

# Create the repo on GitHub first (github.com/new), then:
git remote add origin https://github.com/YOUR_USERNAME/revizto-ui-components.git

# Set main branch and push
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Option C: GitHub CLI

```bash
# Install GitHub CLI if needed: https://cli.github.com

# Create repo and push in one command
gh repo create revizto-ui-components --public --push --source=. --description "Revizto UI components for Lovable.dev"
```

---

## After pushing — verify your repo looks like this:

```
revizto-ui-components/
├── src/
│   ├── revizto-ui-tailwind.jsx
│   ├── revizto-ui.jsx
│   └── examples.jsx
├── docs/
│   ├── START_HERE.md
│   ├── HOW_TO_USE_IN_LOVABLE.md
│   ├── LOVABLE_INSTRUCTIONS.md
│   ├── LOVABLE_PROMPT_SHORT.txt
│   ├── README-TAILWIND.md
│   ├── INSTALLATION.md
│   ├── GITHUB_SETUP.md
│   └── FILES_TO_UPLOAD.md
├── README.md        ← shown on GitHub homepage
├── package.json
├── .gitignore
└── LICENSE
```

---

## Share the link

Your repo URL will be:
```
https://github.com/YOUR_USERNAME/revizto-ui-components
```

Share this URL in Lovable.dev when connecting a GitHub repository.

---

## Keeping it updated

When you modify components:

```bash
git add src/revizto-ui-tailwind.jsx
git commit -m "Update Button component — add icon variant"
git push
```

Lovable.dev will automatically pick up changes from the latest commit on `main`.
