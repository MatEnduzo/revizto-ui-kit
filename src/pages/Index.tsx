import { useState } from 'react'
import { colors, spacing, radius, typography } from '@/tokens'
import {
  Button, Input, TextArea, SearchField, Dropdown, Modal,
  Badge, Status, ListItem, Checkbox, RadioButton, Toggle,
  Slider, Tabs, Tooltip, Alert,
} from '@/components/ui'

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontSize: typography.sizes.lg, fontWeight: typography.weights.medium, color: colors.text.primary.default, marginBottom: spacing.xl, marginTop: 0 }}>{children}</h2>
)

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [dropdownValue, setDropdownValue] = useState('')
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(true)
  const [radio, setRadio] = useState('option1')
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(true)
  const [sliderValue, setSliderValue] = useState(50)
  const [activeTab1, setActiveTab1] = useState(0)
  const [activeTab2, setActiveTab2] = useState(0)

  return (
    <div style={{ fontFamily: typography.fontFamily, padding: '40px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: colors.fill.primarySubtle.default, borderRadius: radius.md, padding: '40px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: typography.weights.medium, color: colors.text.primary.default, marginBottom: '8px' }}>Revizto Design System</h1>
        <p style={{ fontSize: typography.sizes.sm, color: colors.text.secondary.default, marginBottom: '40px' }}>Complete UI Kit — ready for Lovable.dev</p>

        {/* Buttons */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Buttons</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {(['primary', 'secondary', 'outline', 'ghost'] as const).map(v => (
              <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: spacing.xl }}>
                <h3 style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.regular, color: colors.text.primary.default, margin: 0, textTransform: 'capitalize' }}>{v}</h3>
                <Button variant={v}>Button</Button>
                <Button variant={v} disabled>Button</Button>
              </div>
            ))}
          </div>
        </section>

        {/* Inputs */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Inputs</SectionTitle>
          <div style={{ display: 'grid', gap: spacing.xl, maxWidth: '400px' }}>
            <Input placeholder="Enter text..." value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <Input placeholder="Disabled input" disabled />
            <Input placeholder="Input with error" error="This field is required" />
          </div>
        </section>

        {/* TextArea */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Text Area</SectionTitle>
          <div style={{ display: 'grid', gap: spacing.xl, maxWidth: '600px' }}>
            <TextArea label="Label" placeholder="Placeholder" value={textareaValue} onChange={e => setTextareaValue(e.target.value)} rows={4} />
            <TextArea label="Label" placeholder="Disabled textarea" disabled rows={4} />
            <TextArea label="Label" placeholder="Textarea with error" error="This field is required" rows={4} />
          </div>
        </section>

        {/* Search */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Search Field</SectionTitle>
          <div style={{ maxWidth: '600px' }}>
            <SearchField placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
          </div>
        </section>

        {/* Dropdown */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Dropdown</SectionTitle>
          <div style={{ maxWidth: '400px' }}>
            <Dropdown options={['Option 1', 'Option 2', 'Option 3', 'Option 4']} value={dropdownValue} onChange={setDropdownValue} placeholder="Select an option..." />
          </div>
        </section>

        {/* Badges */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Badges</SectionTitle>
          <div style={{ display: 'flex', gap: spacing.md, flexWrap: 'wrap' }}>
            <Badge variant="default">Default</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="primary">Primary</Badge>
          </div>
        </section>

        {/* Status */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Status Badges</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: spacing.xl }}>
            {[
              { label: 'Neutral', variant: 'neutral' as const, items: ['Active', 'Canceled', 'Archived', 'Ended', 'Queued', 'Expired'] },
              { label: 'Success', variant: 'success' as const, items: ['Success', 'On'] },
              { label: 'Error', variant: 'error' as const, items: ['Deleted', 'Suspended', 'Failed'] },
              { label: 'Warning', variant: 'warning' as const, items: ['Pending', 'In progress', 'Partially failed'] },
              { label: 'Info', variant: 'info' as const, items: ['Running'] },
            ].map(({ label, variant, items }) => (
              <div key={label}>
                <h3 style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.medium, color: colors.text.primary.default, marginBottom: spacing.md }}>{label}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
                  {items.map(i => <Status key={i} variant={variant}>{i}</Status>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* List */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>List / Rows</SectionTitle>
          <div style={{ maxWidth: '600px', border: `1px solid ${colors.border.primary.default}`, borderRadius: radius.md, overflow: 'hidden' }}>
            {[1, 2, 3, 4].map(n => (
              <ListItem key={n} selected={selectedItem === n} onClick={() => setSelectedItem(n)}>List item {n} — click to select</ListItem>
            ))}
          </div>
        </section>

        {/* Checkbox */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Checkbox</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xl, maxWidth: '400px' }}>
            <Checkbox label="Unchecked" checked={checkbox1} onChange={setCheckbox1} />
            <Checkbox label="Checked" checked={checkbox2} onChange={setCheckbox2} />
            <Checkbox label="Mixed state" mixed />
            <Checkbox label="Disabled unchecked" disabled />
            <Checkbox label="Disabled checked" checked disabled />
          </div>
        </section>

        {/* Radio */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Radio Button</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xl, maxWidth: '400px' }}>
            {['option1', 'option2', 'option3'].map((o, i) => (
              <RadioButton key={o} label={`Option ${i + 1}`} checked={radio === o} onChange={() => setRadio(o)} />
            ))}
            <RadioButton label="Disabled unchecked" disabled />
            <RadioButton label="Disabled checked" checked disabled />
          </div>
        </section>

        {/* Toggle */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Toggle</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xl, maxWidth: '400px' }}>
            <Toggle label="Placeholder" hint="Hint text" checked={toggle1} onChange={setToggle1} />
            <Toggle label="Placeholder" hint="Hint text" checked={toggle2} onChange={setToggle2} />
            <Toggle label="Placeholder" hint="Hint text" checked={false} disabled />
            <Toggle label="Placeholder" hint="Hint text" checked disabled />
          </div>
        </section>

        {/* Slider */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Slider</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xl, maxWidth: '600px' }}>
            <Slider label="Label" value={sliderValue} onChange={setSliderValue} />
            <Slider label="Label (disabled)" value={75} disabled />
          </div>
        </section>

        {/* Tabs */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Tabs</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <p style={{ fontSize: typography.sizes.sm, color: colors.text.secondary.default, marginBottom: spacing.md }}>Default</p>
              <Tabs tabs={['Label', 'Label', 'Label']} activeTab={activeTab1} onChange={setActiveTab1} />
            </div>
            <div>
              <p style={{ fontSize: typography.sizes.sm, color: colors.text.secondary.default, marginBottom: spacing.md }}>With Disabled Tab</p>
              <Tabs tabs={['Label', 'Label', 'Label']} activeTab={activeTab2} onChange={setActiveTab2} disabled={[2]} />
            </div>
          </div>
        </section>

        {/* Tooltip */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Tooltip</SectionTitle>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', padding: '60px 40px', justifyContent: 'center' }}>
            {(['top', 'bottom', 'left', 'right'] as const).map(pos => (
              <Tooltip key={pos} content="Tooltip text" position={pos}>
                <Button variant="primary" size="sm">Hover {pos}</Button>
              </Tooltip>
            ))}
          </div>
        </section>

        {/* Alerts */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Alerts</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Alert variant="info">Information alert — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
            <Alert variant="warning">Warning alert — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
            <Alert variant="error">Error alert — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
          </div>
        </section>

        {/* Modal trigger */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Modal</SectionTitle>
          <Button variant="primary" onClick={() => setModalOpen(true)}>Open Modal</Button>
        </section>

        {/* Color Palette */}
        <section>
          <SectionTitle>Color Palette</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: spacing.xl }}>
            {[
              ['Primary Text', colors.text.primary.default],
              ['Secondary Text', colors.text.secondary.default],
              ['Accent', colors.fill.accentSolid.default],
              ['Accent Subtle', colors.fill.accentSubtle.default],
              ['Success', colors.border.success.default],
              ['Success Subtle', colors.fill.successSubtle.default],
              ['Error', colors.border.error.default],
              ['Error Subtle', colors.fill.errorSubtle.default],
              ['Warning', colors.border.warning.default],
              ['Warning Subtle', colors.fill.warningSubtle.default],
              ['Selected', colors.fill.primarySubtle.selected],
              ['Hover', colors.fill.primarySubtle.hover],
              ['Border', colors.border.primary.default],
              ['Disabled', colors.text.primary.disabled],
            ].map(([name, color]) => (
              <div key={name}>
                <div style={{ width: '100%', height: '64px', backgroundColor: color, borderRadius: radius.md, border: `1px solid ${colors.border.primary.default}`, marginBottom: spacing.sm }} />
                <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary.default }}>{name}</div>
                <div style={{ fontSize: typography.sizes.xs, color: colors.text.primary.default, fontFamily: 'monospace' }}>{color}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Lorem ipsum dolor"
        footer={
          <>
            <Button variant="primary" onClick={() => setModalOpen(false)}>Done</Button>
            <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
          </>
        }
      >
        <p style={{ fontSize: '14px', color: colors.text.primary.default, lineHeight: '1.6', margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Modal>
    </div>
  )
}
