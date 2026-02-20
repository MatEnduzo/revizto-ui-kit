import React, { useState } from 'react'
import { colors, spacing, typography } from '@/tokens'

export interface RadioButtonProps {
  label?: string
  checked?: boolean
  disabled?: boolean
  onChange?: () => void
}

export const RadioButton = ({
  label,
  checked = false,
  disabled = false,
  onChange,
}: RadioButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const radioStyle: React.CSSProperties = {
    borderColor: isHovered && !disabled ? colors.border.accentSolid.default : colors.border.secondary.default,
    backgroundColor: colors.fill.primarySubtle.default,
  }
  return (
    <label
      style={{ display: 'flex', alignItems: 'center', gap: spacing.md, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => { if (!disabled && onChange) { e.preventDefault(); onChange() } }}
    >
      <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1.5px solid', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', flexShrink: 0, ...radioStyle }}>
        {checked && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: disabled ? colors.fill.secondarySolid.disabled : colors.fill.accentSolid.default }} />}
      </div>
      {label && <span style={{ fontFamily: typography.fontFamily, fontSize: typography.sizes.sm, color: disabled ? colors.text.primary.disabled : colors.text.primary.default }}>{label}</span>}
    </label>
  )
}
