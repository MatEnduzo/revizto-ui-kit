# Revizto Design System - Tailwind CSS Version

Optimized UI component library for Lovable.dev using Tailwind CSS.

## 🎨 Color Mapping

Since Lovable uses core Tailwind classes only, we've mapped Revizto colors to the closest Tailwind equivalents:

| Revizto Color | Hex Code | Tailwind Equivalent | Hex Code |
|---------------|----------|---------------------|----------|
| Accent | `#386cff` | `blue-600` | `#2563eb` |
| Primary Text | `#323232` | `gray-800` | `#1f2937` |
| Secondary Text | `#6d6d6d` | `gray-500` | `#6b7280` |
| Border | `#e7e7e7` | `gray-200` | `#e5e7eb` |
| Disabled | `#aeaeae` | `gray-400` | `#9ca3af` |
| Hover BG | `#f5f5f5` | `gray-50` | `#f9fafb` |
| Selected BG | `#e9f4ff` | `blue-50` | `#eff6ff` |

⚠️ **Note:** Colors are approximate. For pixel-perfect Revizto colors, use the inline-styles version.

## 🚀 Quick Start

### 1. Copy to Lovable.dev

```jsx
// Copy revizto-ui-tailwind.jsx to your project
import { Button, Input, Modal } from './revizto-ui-tailwind';

function App() {
  return (
    <div className="p-8">
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text..." />
    </div>
  );
}
```

### 2. Tailwind Config (Optional)

If you want exact Revizto colors, add to `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        revizto: {
          blue: '#386cff',
          'blue-hover': '#143eff',
        }
      }
    }
  }
}
```

Then update components to use `bg-revizto-blue` instead of `bg-blue-600`.

## 📦 All Components

Same components as inline version:
- Button (4 variants)
- Input / TextArea
- SearchField
- Dropdown
- Modal
- Badge / Status
- ListItem
- Checkbox / RadioButton
- Toggle / Slider
- Tabs / Tooltip
- Alert

## 🎯 Comparison with Inline Version

| Feature | Tailwind Version ✅ | Inline Styles Version |
|---------|-------------------|----------------------|
| **Code Size** | Smaller (~40% less) | Larger |
| **Development Speed** | Faster | Slower |
| **Color Accuracy** | Approximate | Exact |
| **Lovable Native** | Yes | No |
| **Pseudo-classes** | Native (hover:, focus:) | JavaScript required |
| **Customization** | Via Tailwind config | Direct color changes |
| **Dependencies** | Tailwind CSS | None |

## 💡 Usage Examples

### Button Variants

```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="primary" disabled>Disabled</Button>
```

### Form with Validation

```jsx
import { Input, Button } from './revizto-ui-tailwind';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email.includes('@')) {
      setError('Invalid email');
      return;
    }
    console.log('Submit:', email);
  };

  return (
    <div className="space-y-4 max-w-md">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
      />
      <Button variant="primary" onClick={handleSubmit}>
        Sign In
      </Button>
    </div>
  );
}
```

### Modal Dialog

```jsx
import { Modal, Button, Alert } from './revizto-ui-tailwind';
import { useState } from 'react';

function DeleteDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Delete</Button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Delete"
        footer={
          <>
            <Button variant="primary" onClick={() => {
              console.log('Deleted');
              setIsOpen(false);
            }}>
              Delete
            </Button>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </>
        }
      >
        <Alert variant="warning">
          This action cannot be undone.
        </Alert>
      </Modal>
    </>
  );
}
```

### Search & Filter

```jsx
import { SearchField, Dropdown, Button } from './revizto-ui-tailwind';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className="flex gap-3">
      <SearchField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1"
      />
      <Dropdown
        options={['All', 'Active', 'Archived']}
        value={category}
        onChange={setCategory}
        placeholder="Category"
        className="w-48"
      />
      <Button variant="primary">Search</Button>
    </div>
  );
}
```

### Tabs Navigation

```jsx
import { Tabs } from './revizto-ui-tailwind';
import { useState } from 'react';

function SettingsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Tabs
        tabs={['Profile', 'Security', 'Notifications']}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      
      <div className="p-6">
        {activeTab === 0 && <div>Profile Content</div>}
        {activeTab === 1 && <div>Security Content</div>}
        {activeTab === 2 && <div>Notifications Content</div>}
      </div>
    </div>
  );
}
```

### Tooltips

```jsx
import { Tooltip, Button } from './revizto-ui-tailwind';

function ActionsBar() {
  return (
    <div className="flex gap-2">
      <Tooltip content="Save your changes" position="top">
        <Button variant="primary">Save</Button>
      </Tooltip>
      
      <Tooltip content="Export to CSV" position="top">
        <Button variant="secondary">Export</Button>
      </Tooltip>
      
      <Tooltip content="Requires admin access" position="top">
        <Button variant="outline" disabled>Delete</Button>
      </Tooltip>
    </div>
  );
}
```

## 🎨 Extending with Custom Classes

All components accept a `className` prop for additional styling:

```jsx
<Button 
  variant="primary" 
  className="w-full shadow-lg"
>
  Full Width Button
</Button>

<Input
  placeholder="Email"
  className="max-w-md"
/>

<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Custom Modal"
  className="custom-modal"
>
  Content
</Modal>
```

## 🔧 Customization Tips

### 1. Change Default Colors

Wrap components in a div with custom Tailwind classes:

```jsx
<div className="[&_button]:bg-purple-600 [&_button:hover]:bg-purple-700">
  <Button variant="primary">Purple Button</Button>
</div>
```

### 2. Override Specific Styles

Use the `className` prop:

```jsx
<Button 
  variant="primary"
  className="!bg-green-600 !hover:bg-green-700"
>
  Green Button
</Button>
```

### 3. Create Custom Variants

Extend the component:

```jsx
function CustomButton({ children, ...props }) {
  return (
    <Button 
      {...props}
      className="bg-gradient-to-r from-purple-600 to-blue-600"
    >
      {children}
    </Button>
  );
}
```

## 📏 Consistent Heights

All form controls use `h-8` (32px):
- Button
- Input
- SearchField
- Dropdown

## 🎯 Best Practices

1. **Use Semantic HTML** - Components already include proper tags
2. **Leverage Tailwind utilities** - Combine with spacing, sizing classes
3. **Keep it consistent** - Use the same variant style throughout your app
4. **Test responsiveness** - Add `md:`, `lg:` breakpoints as needed
5. **Accessibility** - Components include ARIA attributes

## ⚡ Performance Tips

1. **Tree-shaking** - Import only what you need
2. **Tailwind JIT** - Lovable uses Tailwind JIT by default
3. **Avoid inline overrides** - Use `className` prop instead

## 🐛 Known Limitations

- Colors are approximate to Revizto spec (~95% match)
- Custom Tailwind classes not available in Lovable
- Some complex hover states use JavaScript

## 📝 Migration from Inline Version

Replace imports:

```jsx
// Before
import { Button } from './revizto-ui';

// After
import { Button } from './revizto-ui-tailwind';
```

Component APIs are identical - no code changes needed!

## 🆚 When to Use Which Version

**Use Tailwind Version when:**
- ✅ Building in Lovable.dev
- ✅ Speed matters more than pixel-perfection
- ✅ You want to leverage Tailwind ecosystem
- ✅ You need native hover/focus states

**Use Inline Version when:**
- ✅ Need exact Revizto colors
- ✅ Building outside Lovable
- ✅ Want zero dependencies
- ✅ Need maximum portability

## 📞 Support

For questions or issues:
- Check examples in the code
- Review Tailwind documentation
- Open GitHub issue

---

**Optimized for Lovable.dev** 💙 Built with Tailwind CSS