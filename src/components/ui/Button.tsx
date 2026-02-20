import React, { useState } from 'react'
import { colors, spacing, radius, typography } from '@/tokens'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md'

export interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const base: React.CSSProperties = {
    fontFamily: typography.fontFamily,
    fontSize: size === 'sm' ? typography.sizes.xs : typography.sizes.sm,
    fontWeight: typography.weights.medium,
    padding: size === 'sm' ? `${spacing.sm} ${spacing.md}` : `6px ${spacing.xl}`,
    borderRadius: radius.md,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    outline: 'none',
    border: 'none',
    height: '32px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  }

  const getVariantStyle = (): React.CSSProperties => {
    if (disabled) {
      if (variant === 'outline') return { backgroundColor: colors.fill.primarySubtle.default, color: colors.text.primary.disabled, border: `1px solid ${colors.border.secondary.default}` }
      if (variant === 'ghost') return { backgroundColor: 'transparent', color: colors.text.primary.disabled }
      return { backgroundColor: colors.fill.primarySubtle.disabled, color: colors.text.primary.disabled }
    }
    switch (variant) {
      case 'primary': return { backgroundColor: isHovered ? '#2b5ae6' : colors.fill.accentSolid.default, color: colors.text.primary.onSolid }
      case 'secondary': return { backgroundColor: isHovered ? '#d1e7ff' : colors.fill.accentSubtle.default, color: colors.text.accent.default }
      case 'outline': return { backgroundColor: isHovered ? colors.fill.accentSubtle.default : colors.fill.primarySubtle.default, color: colors.text.accent.default, border: `1px solid ${colors.border.accentSolid.default}` }
      case 'ghost': return { backgroundColor: isHovered ? colors.fill.accentSubtle.default : 'transparent', color: colors.text.accent.default }
      default: return {}
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ...base, ...getVariantStyle() }}
    >
      {children}
    </button>
  )
}
