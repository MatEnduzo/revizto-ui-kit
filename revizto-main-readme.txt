# Revizto Design System - UI Components

Complete UI component library based on Revizto Design System, optimized for Lovable.dev.

## 🎯 Quick Start

```bash
# 1. Copy revizto-ui-tailwind.jsx to your Lovable project
# 2. Add LOVABLE_PROMPT_SHORT.txt to Project Instructions
# 3. Start building!
```

```jsx
import { Button, Input, Modal } from './revizto-ui-tailwind';

function App() {
  return (
    <div className="p-8">
      <Input placeholder="Enter text..." />
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

---

## 📦 What's Included

### Core Files

| File | Description | Use For |
|------|-------------|---------|
| **revizto-ui-tailwind.jsx** | Main component library (Tailwind) | Lovable.dev projects ⭐ |
| **revizto-ui.jsx** | Component library (Inline styles) | Exact color matching |
| **examples.jsx** | 10 ready-to-use examples | Learning & templates |

### Documentation

| File | Description |
|------|-------------|
| **HOW_TO_USE_IN_LOVABLE.md** | Step-by-step Lovable setup |
| **LOVABLE_INSTRUCTIONS.md** | Full AI instructions (detailed) |
| **LOVABLE_PROMPT_SHORT.txt** | Quick AI instructions |
| **README-TAILWIND.md** | Tailwind version docs |
| **INSTALLATION.md** | General installation guide |

---

## 🚀 For Lovable.dev (Recommended)

### 1. Add Component Library

Copy `revizto-ui-tailwind.jsx` to your Lovable project.

### 2. Configure AI

Add instructions to force AI to use ONLY Revizto components:

**Option A - Quick (30 seconds):**
1. Open Lovable project settings
2. Find "Custom Instructions" or "AI Instructions"
3. Paste content from `LOVABLE_PROMPT_SHORT.txt`
4. Save

**Option B - Complete (2 minutes):**
- Paste full content from `LOVABLE_INSTRUCTIONS.md`
- Provides strict rules and examples for AI

### 3. Start Building

Tell Lovable AI what to build:
- "Create a login form"
- "Add a settings page with toggles"
- "Build a search interface"

AI will use ONLY Revizto components! ✅

📖 **[Read detailed Lovable setup guide →](HOW_TO_USE_IN_LOVABLE.md)**

---

## 🎨 Component Library

### 17 Production-Ready Components

#### Form Controls
- **Button** - 4 variants (Primary, Secondary, Outline, Ghost)
- **Input** - Text input with error states
- **TextArea** - Multi-line input with label
- **SearchField** - Search with icon & clear button
- **Dropdown** - Select with hover states
- **Checkbox** - Standard + mixed state
- **RadioButton** - Radio button groups
- **Toggle** - On/off switch with hint
- **Slider** - Range slider (0-100)

#### Navigation
- **Tabs** - Tab navigation with disabled state
- **ListItem** - Interactive list rows

#### Feedback & Overlays
- **Modal** - Dialog with header & footer
- **Tooltip** - 4 positions (top/bottom/left/right)
- **Alert** - Info, Warning, Error variants
- **Badge** - Small labels (3 variants)
- **Status** - Status indicators (5 variants)

---

## 📊 Versions Comparison

| Feature | Tailwind 🌟 | Inline Styles |
|---------|-------------|---------------|
| **Best for** | Lovable.dev | Other platforms |
| **Code size** | Smaller (~40% less) | Larger |
| **Dev speed** | Faster | Slower |
| **Color accuracy** | ~95% match | 100% match |
| **Hover states** | Native CSS | JavaScript |
| **Dependencies** | Tailwind CSS | None |
| **Customization** | className prop | Direct modification |

### When to Use Which

**Use Tailwind Version (revizto-ui-tailwind.jsx) when:**
- ✅ Building in Lovable.dev
- ✅ Speed matters more than pixel-perfection
- ✅ You want native hover/focus states
- ✅ Team is familiar with Tailwind

**Use Inline Version (revizto-ui.jsx) when:**
- ✅ Need exact Revizto brand colors
- ✅ Building outside Lovable
- ✅ Want zero dependencies
- ✅ Maximum portability required

---

## 📖 Documentation

### Quick References

- [How to Use in Lovable](HOW_TO_USE_IN_LOVABLE.md) - Complete setup guide
- [Lovable AI Instructions](LOVABLE_INSTRUCTIONS.md) - Force AI to use only Revizto
- [Tailwind Version Docs](README-TAILWIND.md) - API & examples for Tailwind version
- [Installation Guide](INSTALLATION.md) - General installation for any platform

### Component API

**Button**
```jsx
<Button 
  variant="primary|secondary|outline|ghost"
  size="md|sm"
  disabled={boolean}
  onClick={function}
/>
```

**Input**
```jsx
<Input
  placeholder={string}
  value={string}
  onChange={function}
  error={string}
  disabled={boolean}
/>
```

**Modal**
```jsx
<Modal
  isOpen={boolean}
  onClose={function}
  title={string}
  footer={ReactNode}
>
  {children}
</Modal>
```

[See full API documentation →](README-TAILWIND.md#component-api)

---

## 💡 Usage Examples

### Login Form

```jsx
import { Input, Button } from './revizto-ui-tailwind';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="max-w-md space-y-4 p-6">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="primary" onClick={handleLogin}>
        Sign In
      </Button>
    </div>
  );
}
```

### Settings Panel

```jsx
import { Toggle, Slider, Button } from './revizto-ui-tailwind';

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [volume, setVolume] = useState(50);

  return (
    <div className="space-y-6 p-6">
      <Toggle
        label="Enable notifications"
        checked={notifications}
        onChange={setNotifications}
      />
      <Slider
        label="Volume"
        value={volume}
        onChange={setVolume}
      />
      <Button variant="primary">Save</Button>
    </div>
  );
}
```

[See 10 more examples →](examples.jsx)

---

## 🎯 Key Features

- ✅ **32px standard height** for all form controls
- ✅ **Consistent design tokens** across all components
- ✅ **Hover, focus, disabled states** built-in
- ✅ **Native Tailwind** for Lovable.dev
- ✅ **Zero external dependencies** (React only)
- ✅ **Fully responsive** tooltips and modals
- ✅ **Accessible** with proper ARIA attributes
- ✅ **Production ready** - tested and documented

---

## 🔧 Customization

### Using className Prop

All components accept `className` for additional styling:

```jsx
<Button 
  variant="primary"
  className="w-full mt-4 shadow-lg"
>
  Full Width Button
</Button>

<Input
  placeholder="Email"
  className="max-w-md"
/>
```

### Color Mapping

Default colors are mapped to Tailwind:

| Revizto | Tailwind |
|---------|----------|
| #386cff | blue-600 |
| #323232 | gray-800 |
| #6d6d6d | gray-500 |

For exact colors, modify `tailwind.config.js` (see [README-TAILWIND.md](README-TAILWIND.md))

---

## 📁 Project Structure

```
revizto-ui-components/
├── revizto-ui-tailwind.jsx        # ⭐ Main library (Tailwind)
├── revizto-ui.jsx                 # Alternative (Inline styles)
├── examples.jsx                   # 10 usage examples
├── README.md                      # This file
├── README-TAILWIND.md             # Tailwind version docs
├── INSTALLATION.md                # Installation guide
├── HOW_TO_USE_IN_LOVABLE.md      # Lovable setup guide
├── LOVABLE_INSTRUCTIONS.md        # Full AI instructions
├── LOVABLE_PROMPT_SHORT.txt       # Quick AI prompt
├── package.json                   # Package metadata
└── .gitignore                     # Git ignore rules
```

---

## 🚦 Getting Started Checklist

### For Lovable.dev

- [ ] Copy `revizto-ui-tailwind.jsx` to project
- [ ] Add `LOVABLE_PROMPT_SHORT.txt` to AI instructions
- [ ] Create test component to verify setup
- [ ] Start building with AI prompts

### For Other Platforms

- [ ] Choose version (Tailwind or Inline)
- [ ] Copy component file to project
- [ ] Import components where needed
- [ ] Customize colors if needed

---

## 🎓 Learning Resources

1. **Quick Start** - Copy example code and modify
2. **Component API** - [README-TAILWIND.md](README-TAILWIND.md)
3. **Examples** - [examples.jsx](examples.jsx) - 10 real-world patterns
4. **Lovable Guide** - [HOW_TO_USE_IN_LOVABLE.md](HOW_TO_USE_IN_LOVABLE.md)

---

## 🤝 Contributing

This is a reference implementation. Feel free to:
- Fork and customize for your needs
- Suggest improvements via issues
- Share your implementations

---

## 📝 License

MIT License - Free to use in your projects

---

## 🔗 Links

- [Lovable.dev](https://lovable.dev) - AI-powered web app builder
- [Revizto](https://revizto.com) - Design system source
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS

---

## 💬 Support

- 📖 Read the docs first
- 🐛 Found a bug? Open an issue
- 💡 Have suggestions? Start a discussion
- ⭐ Like the project? Give it a star!

---

**Built for Lovable.dev** 💙 **Based on Revizto Design System** 🎨

Made with ❤️ for rapid UI development