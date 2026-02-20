import React, { useState } from 'react'
import { colors, spacing, radius, typography } from '@/tokens'

export interface TextAreaProps {
  placeholder?: string
  disabled?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
  rows?: number
  label?: string
}

export const TextArea = ({
  placeholder,
  disabled = false,
  value,
  onChange,
  error,
  rows = 4,
  label,
}: TextAreaProps) => {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ width: '100%' }}>
      {label && (
        <label style={{ display: 'block', fontFamily: typography.fontFamily, fontSize: typography.sizes.sm, color: colors.text.secondary.default, marginBottom: spacing.md }}>
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.sm,
          padding: `${spacing.lg} ${spacing.lg}`,
          borderRadius: radius.md,
          border: `1px solid ${error ? '#ff4d4f' : focused ? colors.border.secondary.focus : colors.border.primary.default}`,
          backgroundColor: disabled ? colors.fill.primarySubtle.disabled : colors.fill.primarySubtle.default,
          color: disabled ? colors.text.primary.disabled : colors.text.primary.default,
          outline: 'none',
          transition: 'all 0.2s',
          boxSizing: 'border-box',
          resize: 'vertical',
          lineHeight: typography.lineHeights.md,
        }}
      />
      {error && (
        <span style={{ fontSize: typography.sizes.xs, color: '#ff4d4f', marginTop: spacing.sm, display: 'block' }}>
          {error}
        </span>
      )}
    </div>
  )
}
