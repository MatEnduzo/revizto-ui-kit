# Revizto Design System UI Kit

A comprehensive React component library based on the Revizto Design System, ready for use in Lovable.dev projects.

## 📦 Installation

1. Copy `revizto-ui-kit.jsx` to your project's `src/components` directory
2. Import the components you need in your files

## 🚀 Quick Start

```jsx
import { Button, Input, Modal, Alert } from '@/components/revizto-ui-kit';

function MyComponent() {
  const [value, setValue] = useState('');
  
  return (
    <div>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Click Me
      </Button>
      
      <Input 
        placeholder="Enter text..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      
      <Alert variant="info">
        This is an informational message
      </Alert>
    </div>
  );
}
```

## 📚 Components

### Button

4 variants: `primary`, `secondary`, `outline`, `ghost`

```jsx
<Button variant="primary" size="md" disabled={false} onClick={handleClick}>
  Button Text
</Button>
```

### Input

Text input with error handling

```jsx
<Input 
  placeholder="Enter text..."
  value={value}
  onChange={handleChange}
  error="Error message"
  disabled={false}
/>
```

### Dropdown

Select dropdown with click-outside-to-close

```jsx
<Dropdown
  options={['Option 1', 'Option 2', 'Option 3']}
  value={selected}
  onChange={setSelected}
  placeholder="Select..."
/>
```

### Modal

Dialog modal with header and footer

```jsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  footer={
    <>
      <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
    </>
  }
>
  <p>Modal content goes here</p>
</Modal>
```

### Badge

Small label component

```jsx
<Badge variant="default">Default</Badge>
<Badge variant="accent">Accent</Badge>
<Badge variant="primary">Primary</Badge>
```

### Status

Status indicator with semantic colors

```jsx
<Status variant="neutral">Active</Status>
<Status variant="success">Success</Status>
<Status variant="error">Failed</Status>
<Status variant="warning">Pending</Status>
<Status variant="info">Running</Status>
```

### ListItem

Interactive list item with hover and selected states

```jsx
<ListItem 
  selected={selectedId === 1}
  onClick={() => setSelectedId(1)}
>
  List item content
</ListItem>
```

### Checkbox

Checkbox with mixed state support

```jsx
<Checkbox 
  label="Checkbox label"
  checked={checked}
  onChange={setChecked}
  mixed={false}
  disabled={false}
/>
```

### RadioButton

Radio button for single selection

```jsx
<RadioButton 
  label="Option 1"
  checked={selected === 'option1'}
  onChange={() => setSelected('option1')}
  disabled={false}
/>
```

### Toggle

Toggle switch with optional hint text

```jsx
<Toggle 
  label="Enable feature"
  hint="This will enable the feature"
  checked={enabled}
  onChange={setEnabled}
  disabled={false}
/>
```

### Alert

Alert message with 3 variants

```jsx
<Alert variant="info">Informational message</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="error">Error message</Alert>
```

## 🎨 Design Tokens

You can also import design tokens for custom styling:

```jsx
import { colors, spacing, radius, typography } from '@/components/revizto-ui-kit';

const customStyle = {
  color: colors.text.primary.default,
  padding: spacing.md,
  borderRadius: radius.md,
  fontFamily: typography.fontFamily
};
```

### Available Tokens

**Colors:**
- `colors.text.primary` - Primary text colors
- `colors.text.secondary` - Secondary text colors
- `colors.text.accent` - Accent blue color
- `colors.fill.*` - Background fills
- `colors.border.*` - Border colors

**Spacing:**
- `xs: 2px`, `sm: 4px`, `md: 8px`, `lg: 12px`, `xl: 16px`, `2xl: 24px`

**Border Radius:**
- `none: 0px`, `sm: 2px`, `md: 4px`

**Typography:**
- `fontFamily: 'Roboto, sans-serif'`
- `sizes: { xs: 12px, sm: 14px, lg: 18px }`
- `weights: { regular: 400, medium: 500 }`
- `lineHeights: { xs: 16px, sm: 18px, md: 20px, xl: 28px }`

## 🎯 Component States

All interactive components support these states:
- **Default** - Normal state
- **Hover** - Mouse over state
- **Focus** - Keyboard focus state
- **Disabled** - Non-interactive state
- **Selected/Checked** - Active state

## 💡 Tips

1. **Consistent spacing**: Use the spacing tokens for consistent padding/margins
2. **Color system**: Stick to the provided color tokens for brand consistency
3. **Accessibility**: All components include proper hover, focus, and disabled states
4. **Click-outside**: Dropdown and Modal close when clicking outside
5. **Full clickable area**: Checkbox, Radio, and Toggle labels are fully clickable

## 📝 License

MIT

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built for Lovable.dev with ❤️ based on Revizto Design System