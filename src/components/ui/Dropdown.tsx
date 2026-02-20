import React, { useState, useRef, useEffect } from 'react'
import { colors, spacing, radius, typography } from '@/tokens'

export interface DropdownProps {
  options: string[]
  value?: string
  onChange: (value: string) => void
  placeholder?: string
}

export const Dropdown = ({ options, value, onChange, placeholder = 'Select...' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false)
    }
    if (isOpen) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isOpen])

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%', height: '32px', fontFamily: typography.fontFamily, fontSize: typography.sizes.sm,
          padding: `0 ${spacing.lg}`, borderRadius: radius.md,
          border: `1px solid ${isOpen ? colors.border.secondary.focus : colors.border.primary.default}`,
          backgroundColor: colors.fill.primarySubtle.default,
          color: value ? colors.text.primary.default : colors.text.secondary.default,
          textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box',
        }}
      >
        <span>{value || placeholder}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke={colors.text.secondary.default} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, marginTop: spacing.sm,
          backgroundColor: colors.fill.primarySubtle.default, border: `1px solid ${colors.border.primary.default}`,
          borderRadius: radius.md, boxShadow: '0 4px 16px rgba(0,0,0,0.16)', zIndex: 1000, maxHeight: '300px', overflowY: 'auto',
        }}>
          {options.map((option, i) => (
            <div
              key={i}
              onClick={() => { onChange(option); setIsOpen(false) }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                padding: '8px 12px', cursor: 'pointer', fontFamily: typography.fontFamily, fontSize: typography.sizes.sm,
                color: colors.text.primary.default, transition: 'background-color 0.2s',
                backgroundColor: value === option ? colors.fill.primarySubtle.selected : hoveredIndex === i ? colors.fill.primarySubtle.hover : 'transparent',
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
