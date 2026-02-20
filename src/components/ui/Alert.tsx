import React from 'react'
import { colors, spacing, typography } from '@/tokens'

export type AlertVariant = 'info' | 'warning' | 'error'

export interface AlertProps {
  children: React.ReactNode
  variant?: AlertVariant
}

export const Alert = ({ children, variant = 'info' }: AlertProps) => {
  const variants: Record<AlertVariant, { backgroundColor: string; borderColor: string; iconColor: string; icon: string }> = {
    info: { backgroundColor: colors.fill.accentSubtle.default, borderColor: colors.border.accentSolid.default, iconColor: colors.fill.accentSolid.default, icon: 'i' },
    warning: { backgroundColor: colors.fill.warningSubtle.default, borderColor: colors.border.warning.default, iconColor: colors.border.warning.default, icon: '!' },
    error: { backgroundColor: colors.fill.errorSubtle.default, borderColor: colors.border.error.default, iconColor: colors.border.error.default, icon: '!' },
  }
  const v = variants[variant]
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: spacing.xl, padding: '16px 20px',
      backgroundColor: v.backgroundColor, border: `1px solid ${v.borderColor}`,
      borderRadius: '8px', fontFamily: typography.fontFamily, fontSize: '14px',
      color: colors.text.primary.default, lineHeight: '1.5',
    }}>
      <div style={{ flex: 1 }}>{children}</div>
      <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: v.iconColor, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: typography.weights.medium, flexShrink: 0 }}>
        {v.icon}
      </div>
    </div>
  )
}
