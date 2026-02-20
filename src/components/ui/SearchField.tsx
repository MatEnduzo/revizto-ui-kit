import React, { useState } from 'react'
import { colors, spacing, typography } from '@/tokens'

export interface SearchFieldProps {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClear?: () => void
}

export const SearchField = ({
  placeholder = 'Search',
  value,
  onChange,
  onClear,
}: SearchFieldProps) => {
  const [focused, setFocused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const handleClear = () => {
    if (onClear) onClear()
    else if (onChange) onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)
  }
  const borderColor = focused || hovered ? colors.border.secondary.focus : colors.border.primary.default
  return (
    <div
      style={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position: 'absolute', left: spacing.lg, pointerEvents: 'none', flexShrink: 0 }}>
        <circle cx="8.5" cy="8.5" r="5.5" stroke={colors.text.secondary.default} strokeWidth="1.5" />
        <path d="M12.5 12.5L16 16" stroke={colors.text.secondary.default} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          height: '32px',
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.sm,
          padding: `0 ${value ? '40px' : spacing.lg} 0 44px`,
          borderRadius: '8px',
          border: `1px solid ${borderColor}`,
          backgroundColor: colors.fill.primarySubtle.default,
          color: colors.text.primary.default,
          outline: 'none',
          transition: 'border-color 0.2s',
          boxSizing: 'border-box',
        }}
      />
      {value && (
        <button
          onClick={handleClear}
          style={{ position: 'absolute', right: spacing.lg, background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 6L14 14M14 6L6 14" stroke={colors.text.secondary.default} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  )
}
