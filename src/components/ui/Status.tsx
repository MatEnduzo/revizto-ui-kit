import React from 'react'
import { colors, typography } from '@/tokens'

export type StatusVariant = 'neutral' | 'success' | 'error' | 'warning' | 'info'

export interface StatusProps {
  children: React.ReactNode
  variant?: StatusVariant
}

export const Status = ({ children, variant = 'neutral' }: StatusProps) => {
  const variants: Record<StatusVariant, React.CSSProperties> = {
    neutral: { backgroundColor: colors.fill.primarySubtle.disabled, border: `1px solid ${colors.border.primary.default}` },
    success: { backgroundColor: colors.fill.successSubtle.default, border: `1px solid ${colors.border.success.default}` },
    error: { backgroundColor: colors.fill.errorSubtle.default, border: `1px solid ${colors.border.error.default}` },
    warning: { backgroundColor: colors.fill.warningSubtle.default, border: `1px solid ${colors.border.warning.default}` },
    info: { backgroundColor: colors.fill.accentSubtle.default, border: `1px solid ${colors.border.accentSolid.default}` },
  }
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', height: '24px', padding: '0 10px',
      borderRadius: '12px', fontSize: '14px', fontFamily: typography.fontFamily,
      fontWeight: typography.weights.regular, color: colors.text.primary.default,
      whiteSpace: 'nowrap', boxSizing: 'border-box', width: 'fit-content',
      ...variants[variant],
    }}>
      {children}
    </span>
  )
}
