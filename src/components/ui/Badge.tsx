import React from 'react'
import { colors, spacing, radius, typography } from '@/tokens'

export type BadgeVariant = 'default' | 'accent' | 'primary'

export interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
}

export const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  const variants: Record<BadgeVariant, React.CSSProperties> = {
    default: { backgroundColor: colors.fill.primarySubtle.disabled, color: colors.text.primary.default },
    accent: { backgroundColor: colors.fill.accentSubtle.default, color: colors.text.accent.default },
    primary: { backgroundColor: colors.fill.accentSolid.default, color: colors.text.primary.onSolid },
  }
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: `${spacing.xs} ${spacing.md}`,
      borderRadius: radius.md,
      fontSize: typography.sizes.xs,
      fontFamily: typography.fontFamily,
      fontWeight: typography.weights.medium,
      ...variants[variant],
    }}>
      {children}
    </span>
  )
}
