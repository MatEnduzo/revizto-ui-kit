import React, { useState } from 'react'
import { colors, spacing, radius, typography } from '@/tokens'

export interface InputProps {
  placeholder?: string
  disabled?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

export const Input = ({ placeholder, disabled = false, value, onChange, error }: InputProps) => {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ width: '100%' }}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          height: '32px',
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.sm,
          padding: `0 ${spacing.lg}`,
          borderRadius: radius.md,
          border: `1px solid ${error ? '#ff4d4f' : focused ? colors.border.secondary.focus : colors.border.primary.default}`,
          backgroundColor: disabled ? colors.fill.primarySubtle.disabled : colors.fill.primarySubtle.default,
          color: disabled ? colors.text.primary.disabled : colors.text.primary.default,
          outline: 'none',
          transition: 'all 0.2s',
          boxSizing: 'border-box',
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
