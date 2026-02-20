import React from 'react'
import { colors, spacing, typography } from '@/tokens'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export const Modal = ({ isOpen, onClose, title, children, footer }: ModalProps) => {
  if (!isOpen) return null
  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: colors.fill.primarySubtle.default, borderRadius: '8px', maxWidth: '600px', width: '90%', maxHeight: '90vh', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '57px', padding: '0 24px', borderBottom: `1px solid ${colors.border.primary.default}`, flexShrink: 0 }}>
          <h2 style={{ fontFamily: typography.fontFamily, fontSize: '14px', fontWeight: typography.weights.regular, color: colors.text.primary.default, margin: 0 }}>{title}</h2>
          <button onClick={onClose} style={{ background: colors.fill.primarySubtle.disabled, border: 'none', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '16px', padding: 0 }}>✕</button>
        </div>
        <div style={{ padding: '32px 24px', overflowY: 'auto', flex: 1 }}>{children}</div>
        {footer && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: spacing.md, padding: '16px 24px 24px' }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}
