import React, { useState } from 'react'
import { colors, spacing, typography } from '@/tokens'

export interface ToggleProps {
  label?: string
  hint?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

export const Toggle = ({
  label,
  hint,
  checked = false,
  disabled = false,
  onChange,
}: ToggleProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const getTrackStyle = (): React.CSSProperties => {
    if (disabled) return checked
      ? { backgroundColor: colors.fill.secondarySolid.disabled, border: 'none' }
      : { backgroundColor: colors.fill.primarySubtle.default, border: '1px solid #e0e0e0' }
    return checked
      ? { backgroundColor: colors.fill.accentSolid.default, border: 'none' }
      : { backgroundColor: colors.fill.primarySubtle.default, border: `1px solid ${colors.border.secondary.default}` }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
      <label
        style={{ display: 'flex', alignItems: 'center', gap: spacing.lg, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => { if (!disabled && onChange) { e.preventDefault(); onChange(!checked) } }}
      >
        <div style={{ width: '32px', height: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', boxSizing: 'border-box', transition: 'all 0.2s', position: 'relative', flexShrink: 0, ...getTrackStyle() }}>
          <div style={{ width: '16px', height: '16px', borderRadius: '50%', transition: 'transform 0.2s', transform: checked ? 'translateX(16px)' : 'translateX(0)', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', position: 'absolute', left: 0, boxSizing: 'border-box', backgroundColor: colors.fill.primarySubtle.default, border: `1px solid ${colors.border.secondary.default}` }} />
        </div>
        {label && <span style={{ fontFamily: typography.fontFamily, fontSize: typography.sizes.sm, color: disabled ? colors.text.primary.disabled : isHovered ? '#1a1a1a' : colors.text.primary.default }}>{label}</span>}
      </label>
      {hint && (
        <div style={{ paddingLeft: '44px' }}>
          <span style={{ fontFamily: typography.fontFamily, fontSize: typography.sizes.xs, color: colors.text.secondary.default }}>{hint}</span>
        </div>
      )}
    </div>
  )
}
