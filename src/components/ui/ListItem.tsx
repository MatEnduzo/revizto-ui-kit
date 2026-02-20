import React, { useState } from 'react'
import { colors, spacing, typography } from '@/tokens'

export interface ListItemProps {
  children: React.ReactNode
  selected?: boolean
  onClick?: () => void
}

export const ListItem = ({ children, selected = false, onClick }: ListItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: `${spacing.md} ${spacing.xl}`,
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        borderBottom: `1px solid ${colors.border.primary.default}`,
        fontFamily: typography.fontFamily,
        fontSize: typography.sizes.sm,
        color: colors.text.primary.default,
        backgroundColor: selected
          ? colors.fill.primarySubtle.selected
          : isHovered
          ? colors.fill.primarySubtle.hover
          : colors.fill.primarySubtle.default,
      }}
    >
      {children}
    </div>
  )
}
