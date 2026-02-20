import React, { useState } from 'react'
import { colors, spacing, typography } from '@/tokens'

export interface TabsProps {
  tabs: string[]
  activeTab: number
  onChange?: (index: number) => void
  disabled?: number[]
}

export const Tabs = ({ tabs, activeTab, onChange, disabled = [] }: TabsProps) => {
  const [hoveredTab, setHoveredTab] = useState<number | null>(null)
  return (
    <div style={{ display: 'flex', borderBottom: `1px solid ${colors.border.primary.default}`, width: '100%' }}>
      {tabs.map((tab, i) => {
        const isActive = activeTab === i
        const isDisabled = disabled.includes(i)
        const isHovered = hoveredTab === i && !isDisabled
        return (
          <button
            key={i}
            onClick={() => !isDisabled && onChange && onChange(i)}
            onMouseEnter={() => setHoveredTab(i)}
            onMouseLeave={() => setHoveredTab(null)}
            style={{
              padding: `${spacing.lg} ${spacing.xl}`,
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: isActive ? `2px solid ${colors.fill.accentSolid.default}` : '2px solid transparent',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
              fontFamily: typography.fontFamily,
              fontSize: typography.sizes.sm,
              fontWeight: typography.weights.regular,
              color: isDisabled ? '#e7e7e7' : (isActive || isHovered) ? colors.text.primary.default : colors.text.secondary.default,
              transition: 'color 0.2s, border-color 0.2s',
              outline: 'none',
              marginBottom: '-1px',
            }}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
