# Tailwind CSS Configuration

The `revizto-ui-tailwind.jsx` component file uses Tailwind CSS with arbitrary value syntax (e.g. `bg-[#E63946]`). This works out of the box with Tailwind 3.x JIT mode.

---

## Minimum Tailwind Config

If you're setting up a fresh project, this is the minimum `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## PostCSS Config

Create `postcss.config.js` in the project root:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## Add Tailwind to your CSS entry point

In `src/index.css` (or your main CSS file):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Optional: Extend with Revizto Tokens

To use Revizto colors as named classes (e.g. `bg-revizto-primary` instead of `bg-[#E63946]`), extend the theme:

```js
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        revizto: {
          primary: "#E63946",
          "primary-hover": "#C1121F",
          dark: "#121212",
          surface: "#1E1E1E",
          "surface-2": "#2D2D2D",
          "surface-3": "#3D3D3D",
          border: "#3D3D3D",
          text: "#F5F5F5",
          muted: "#9E9E9E",
          success: "#06D6A0",
          warning: "#FFB703",
          error: "#EF233C",
          info: "#4CC9F0",
        },
      },
    },
  },
}
```

With this config you can write: `bg-revizto-primary`, `text-revizto-muted`, etc.

---

## Lovable.dev Notes

Lovable.dev ships with Tailwind preconfigured. The arbitrary value syntax `bg-[#E63946]` works automatically — no extra configuration needed.

If Lovable's default theme overrides your colors, tell it in the chat:
```
Keep the original Tailwind configuration and do not override the color theme.
Use the exact hex values I specified without mapping to theme colors.
```
