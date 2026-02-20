import React, { useState } from 'react'
import { colors, spacing, typography } from '@/tokens'

export interface CheckboxProps {
  label?: string
  checked?: boolean
  mixed?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

export const Checkbox = ({
  label,
  checked = false,
  mixed = false,
  disabled = false,
  onChange,
}: CheckboxProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const getBoxStyle = (): React.CSSProperties => {
    if (disabled) return (checked || mixed)
      ? { backgroundColor: colors.fill.secondarySolid.disabled, borderColor: colors.fill.secondarySolid.disabled }
      : { backgroundColor: colors.fill.primarySubtle.default, borderColor: colors.border.primary.default }
    if (checked || mixed) return { backgroundColor: colors.fill.accentSolid.default, borderColor: colors.fill.accentSolid.default }
    return { backgroundColor: colors.fill.primarySubtle.default, borderColor: isHovered ? colors.border.accentSolid.default : colors.border.secondary.default }
  }

  return (
    <label
      style={{ display: 'flex', alignItems: 'center', gap: spacing.md, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => { if (!disabled && onChange) { e.preventDefault(); onChange(!checked) } }}
    >
      <div style={{ width: '16px', height: '16px', borderRadius: '2px', border: '1.5px solid', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', flexShrink: 0, ...getBoxStyle() }}>
        {checked && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
        {mixed && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6H9" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>}
      </div>
      {label && <span style={{ fontFamily: typography.fontFamily, fontSize: typography.sizes.sm, color: disabled ? colors.text.primary.disabled : colors.text.primary.default }}>{label}</span>}
    </label>
  )
}
