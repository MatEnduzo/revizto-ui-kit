# Lovable.dev — Full Integration Instructions

Detailed reference for integrating Revizto UI into any Lovable.dev project.

---

## Design System Reference

Always give Lovable this context when starting a new feature:

```
I'm building using the Revizto UI design system with these rules:
- Background: #121212 (app bg), #1E1E1E (cards/panels), #2D2D2D (inputs/rows)
- Accent: #E63946 (primary red), #C1121F (hover state)
- Text: #F5F5F5 (primary), #9E9E9E (muted/secondary)
- Borders: #3D3D3D
- Status colors: Open=#EF233C, In Progress=#FFB703, Resolved=#06D6A0, Closed=#9E9E9E
- Priority: Critical=#EF233C, High=#FF6B35, Medium=#FFB703, Low=#06D6A0
- Border radius: 4px (sm), 8px (md), 12px (lg)
- All components use Tailwind CSS
```

---

## Page Templates

### Issue Tracker Page
```
Build a full issue tracker page with:
1. Header with project name, "Create Issue" button (primary red), and avatar
2. Filter bar: status tabs (All/Open/In Progress/Resolved/Closed) with counts
3. Search input with magnifier prefix icon
4. Issue list — each row is an IssueCard showing:
   - Issue number (#1042), title, status badge, priority icon
   - Assignee avatars (stacked, max 3 + overflow count)
   - Tags and due date
5. Empty state if no issues match the filter
Background: #121212, Cards: #1E1E1E
```

### Dashboard Page
```
Build a project dashboard with:
1. Stats row: 4 cards showing Open (red), In Progress (yellow), Resolved (green), Total (white) counts
2. Progress section: overall completion bar, per-discipline bars (MEP, Structural, Architecture)
3. Recent issues table with columns: #, Title, Status, Priority, Assignee, Due Date
4. Team activity feed on the right side: avatar + name + action + time
All on dark background #121212 with surface #1E1E1E cards.
```

### Settings / Profile Page
```
Build a user settings page with:
1. Profile section: Avatar (large), name, email, role
2. Notification preferences: checkboxes for email/push notifications per event type
3. Appearance section: (decorative only) dark mode toggle
4. Action buttons: "Save Changes" (primary) and "Cancel" (secondary)
Use Input components for name/email fields, Checkbox for preferences.
```

---

## Component Prompt Templates

Copy these exact prompts into Lovable chat:

### Button group
```
Add a button group with three buttons side by side:
- "Export" ghost button with download icon
- "Filter" secondary button with filter icon
- "Create Issue" primary red button
Use the Revizto Button component styles.
```

### Status filter pills
```
Add a row of clickable filter pills for issue status:
All (59), Open (12), In Progress (5), Resolved (47), Closed (8).
Active pill: red background #E63946.
Inactive: #2D2D2D background, #9E9E9E text.
Click to filter the issue list below.
```

### Issue detail panel (slide-in)
```
Add a slide-in side panel (right side, 400px wide) for issue details.
Shows when an IssueCard is clicked. Contains:
- Issue number and title at top
- Status badge + Priority icon in a row
- Assignee section with avatar and name
- Description text area
- Tags list (removable)
- Due date picker (display only)
- Close button (×) at top right
Background: #1E1E1E, border-left: 1px solid #3D3D3D
```

---

## Tips for Better Lovable Results

1. **Always specify colors** — Lovable uses its own defaults; always paste the color tokens
2. **Name components explicitly** — Say "use a StatusBadge" not "use a colored chip"
3. **Specify dark theme upfront** — Start every conversation with the design system block above
4. **Use concrete numbers** — "show 6 sample issues" beats "show some issues"
5. **Reference the examples file** — Tell Lovable: "look at src/examples.jsx for component usage patterns"
