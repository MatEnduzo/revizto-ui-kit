import React, { useState, useRef, useEffect } from 'react'
import { colors, spacing, typography } from '@/tokens'

export interface SliderProps {
  label?: string
  value?: number
  min?: number
  max?: number
  onChange?: (value: number) => void
  disabled?: boolean
}

export const Slider = ({
  label,
  value = 50,
  min = 0,
  max = 100,
  onChange,
  disabled = false,
}: SliderProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pct = ((value - min) / (max - min)) * 100

  const updateValue = (e: MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const p = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    if (onChange) onChange(Math.round(min + p * (max - min)))
  }

  useEffect(() => {
    if (!isDragging) return
    const move = (e: MouseEvent) => updateValue(e)
    const up = () => setIsDragging(false)
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', up)
    return () => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up) }
  }, [isDragging])

  return (
    <div style={{ display: 'flex', width: '100%', flexDirection: 'column', gap: spacing.xs }}>
      {label && <label style={{ fontFamily: typography.fontFamily, fontSize: typography.sizes.sm, color: colors.text.secondary.default }}>{label}</label>}
      <div
        ref={ref}
        onMouseDown={(e) => { if (!disabled) { setIsDragging(true); updateValue(e.nativeEvent) } }}
        style={{ position: 'relative', width: '100%', height: '16px', display: 'flex', alignItems: 'center', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}
      >
        <div style={{ position: 'absolute', width: '100%', height: '4px', backgroundColor: colors.border.primary.default, borderRadius: '2px' }} />
        <div style={{ position: 'absolute', width: `${pct}%`, height: '4px', backgroundColor: disabled ? colors.fill.secondarySolid.disabled : colors.fill.accentSolid.default, borderRadius: '2px' }} />
        <div style={{ position: 'absolute', left: `calc(${pct}% - 8px)`, width: '16px', height: '16px', borderRadius: '50%', backgroundColor: disabled ? colors.fill.secondarySolid.disabled : colors.fill.accentSolid.default, boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
      </div>
    </div>
  )
}
