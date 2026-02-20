import React, { useState } from 'react'
import { colors, typography, radius } from '@/tokens'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  position?: TooltipPosition
  delay?: number
}

export const Tooltip = ({
  children,
  content,
  position = 'top',
  delay = 200,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null)

  const posStyles: Record<TooltipPosition, React.CSSProperties> = {
    top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '4px' },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '4px' },
    left: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '4px' },
    right: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '4px' },
  }

  return (
    <div
      onMouseEnter={() => { const t = setTimeout(() => setIsVisible(true), delay); setTimeoutId(t) }}
      onMouseLeave={() => { if (timeoutId) clearTimeout(timeoutId); setIsVisible(false) }}
      style={{ position: 'relative', display: 'inline-flex' }}
    >
      {children}
      {isVisible && (
        <div style={{ position: 'absolute', zIndex: 1000, ...posStyles[position] }}>
          <div style={{
            display: 'inline-flex', width: 'max-content', maxWidth: '300px', padding: '8px 12px',
            backgroundColor: colors.fill.primarySubtle.default, color: colors.text.primary.default,
            fontSize: typography.sizes.sm, fontFamily: typography.fontFamily,
            lineHeight: typography.lineHeights.md, borderRadius: radius.md,
            boxShadow: '0 4px 16px rgba(0,0,0,0.16)', wordBreak: 'break-word',
          }}>
            {content}
          </div>
        </div>
      )}
    </div>
  )
}
