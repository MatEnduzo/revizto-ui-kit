import React, { useState } from 'react';
// ============================================================
// DESIGN TOKENS
// ============================================================
export const colors = {
  text: {
    primary: { default: '#323232', disabled: '#aeaeae', onSolid: '#ffffff', hover: '#1a1a1a' },
    secondary: { default: '#6d6d6d', disabled: '#aeaeae' },
    accent: { default: '#386cff' },
    success: { default: '#0f7d3a' },
    error: { default: '#c7352e' },
    warning: { default: '#996000' }
  },
  fill: {
    primarySubtle: { default: '#ffffff', disabled: '#efefef', selected: '#e9f4ff', hover: '#f5f5f5' },
    accentSolid: { default: '#386cff', hover: '#143eff' },
    accentSubtle: { default: '#e9f4ff' },
    secondarySolid: { disabled: '#aeaeae' },
    successSubtle: { default: '#e6f4ea' },
    errorSubtle: { default: '#fce8e6' },
    warningSubtle: { default: '#fef7e0' }
  },
  border: {
    primary: { default: '#e7e7e7' },
    secondary: { default: '#aeaeae', focus: '#386cff', hover: '#888', disabled: '#d1d1d1' },
    accentSolid: { default: '#386cff' },
    success: { default: '#34a853' },
    error: { default: '#ea4335' },
    warning: { default: '#fbbc04' }
  }
};
export const spacing = {
  xs: '2px', sm: '4px', md: '8px', lg: '12px', xl: '16px', '2xl': '24px'
};
export const radius = { none: '0px', sm: '2px', md: '4px' };
export const typography = {
  fontFamily: 'Roboto, sans-serif',
  sizes: { xs: '12px', sm: '14px', lg: '18px' },
  weights: { regular: 400, medium: 500 },
  lineHeights: { xs: '16px', sm: '18px', md: '20px', xl: '28px' }
};
// ============================================================
// COMPONENTS
// ============================================================
// Button
export const Button = ({ children, variant = 'primary', size = 'md', disabled = false, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const base = {
    fontFamily: typography.fontFamily,
    fontSize: size === 'sm' ? typography.sizes.xs : typography.sizes.sm,
    fontWeight: typography.weights.medium,
    padding: size === 'sm' ? `${spacing.sm} ${spacing.md}` : `6px ${spacing.xl}`,
    borderRadius: radius.md,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    outline: 'none', border: 'none', height: '32px',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box'
  };
  const variantStyle = () => {
    if (disabled) {
      if (variant === 'outline') return { backgroundColor: colors.fill.primarySubtle.default, color: colors.text.primary.disabled, border: `1px solid ${colors.border.secondary.default}` };
      if (variant === 'ghost') return { backgroundColor: 'transparent', color: colors.text.primary.disabled };
      return { backgroundColor: colors.fill.primarySubtle.disabled, color: colors.text.primary.disabled };
    }
    switch (variant) {
      case 'primary': return { backgroundColor: isHovered ? '#2b5ae6' : colors.fill.accentSolid.default, color: colors.text.primary.onSolid };
      case 'secondary': return { backgroundColor: isHovered ? '#d1e7ff' : colors.fill.accentSubtle.default, color: colors.text.accent.default };
      case 'outline': return { backgroundColor: isHovered ? colors.fill.accentSubtle.default : colors.fill.primarySubtle.default, color: colors.text.accent.default, border: `1px solid ${colors.border.accentSolid.default}` };
      case 'ghost': return { backgroundColor: isHovered ? colors.fill.accentSubtle.default : 'transparent', color: colors.text.accent.default };
      default: return {};
    }
  };
  return (
    <button onClick={onClick} disabled={disabled} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ ...base, ...variantStyle() }}>
      {children}
    </button>
  );
};
// Input
export const Input = ({ placeholder, disabled = false, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} disabled={disabled}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', height: '32px', fontFamily: typography.fontFamily, fontSize: typography.sizes.sm,
          padding: `0 ${spacing.lg}`, borderRadius: radius.md,
          border: `1px solid ${error ? '#ff4d4f' : focused ? colors.border.secondary.focus : colors.border.primary.default}`,
          backgroundColor: disabled ? colors.fill.primarySubtle.disabled : colors.fill.primarySubtle.default,
          color: disabled ? colors.text.primary.disabled : colors.text.primary.default,
          outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box'
        }}
      />
      {error && <span style={{ fontSize: typography.sizes.xs, color: '#ff4d4f', marginTop: spacing.sm, display: 'block' }}>{error}</span>}
    </div>
  );
};
// TextArea
export const TextArea = ({ placeholder, disabled = false, value, onChange, error, rows = 4, label }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      {label && <label style={{ display: 'block', fontFamily: typography.fontFamily, fontSize: typography.sizes.sm, color: colors.text.secondary.default, marginBottom: spacing.md }}>{label}</label>}
      <textarea placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} rows={rows}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', fontFamily: typography.fontFamily, fontSize: typography.sizes.sm,
          padding: `${spacing.lg} ${spacing.lg}`, borderRadius: radius.md,
          border: `1px solid ${error ? '#ff4d4f' : focused ? colors.border.secondary.focus : colors.border.primary.default}`,
          backgroundColor: disabled ? colors.fill.primarySubtle.disabled : colors.fill.primarySubtle.default,
          color: disabled ? colors.text.primary.disabled : colors.text.primary.default,
          outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box', resize: 'vertical', lineHeight: typography.lineHeights.md
        }}
      />
      {error && <span style={{ fontSize: typography.sizes.xs, color: '#ff4d4f', marginTop: spacing.sm, display: 'block' }}>{error}</span>}
    </div>
  );
};
// SearchField
export const SearchField = ({ placeholder = 'Search', value, onChange, onClear }) => {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const handleClear = () => { if (onClear) onClear(); else if (onChange) onChange({ target: { value: '' } }); };
  const borderColor = focused || hovered ? colors.border.secondary.focus : colors.border.primary.default;
  return (
    <div style={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ position: 'absolute', left: spacing.lg, pointerEvents: 'none', flexShrink: 0 }}>
        <circle cx="8.5" cy="8.5" r="5.5" stroke={colors.text.secondary.default} strokeWidth="1.5"/>
        <path d="M12.5 12.5L16 16" stroke={colors.text.secondary.default} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <input type="text" placeholder={placeholder} value={value} onChange={onChange}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width: '100%', height: '32px', fontFamily: typography.fontFamily, fontSize: typography.sizes.sm,
          padding: `0 ${value ? '40px' : spacing.lg} 0 44px`, borderRadius: '8px',
          border: `1px solid ${borderColor}`, backgroundColor: colors.fill.primarySubtle.default,
          color: colors.text.primary.default, outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box'
        }}
      />
      {value && (
        <button onClick={handleClear} style={{ position: 'absolute', right: spacing.lg, background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 6L14 14M14 6L6 14" stroke={colors.text.secondary.default} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};
// Dropdown
export const Dropdown = ({ options, value, onChange, placeholder = 'Select...' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setIsOpen(false); };
    if (isOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);
  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <button onClick={() => setIsOpen(!isOpen)} style={{
        width: '100%', height: '32px', fontFamily: typography.fontFamily, fontSize: typography.sizes.sm,
        padding: `0 ${spacing.lg}`, borderRadius: radius.md,
        border: `1px solid ${isOpen ? colors.border.secondary.focus : colors.border.primary.default}`,
        backgroundColor: colors.fill.primarySubtle.default,
        color: value ? colors.text.primary.default : colors.text.secondary.default,
        textAlign: 'left', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box'
      }}>
        <span>{value || placeholder}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke={colors.text.secondary.default} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {isOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, marginTop: spacing.sm,
          backgroundColor: colors.fill.primarySubtle.default, border: `1px solid ${colors.border.primary.default}`,
          borderRadius: radius.md, boxShadow: '0 4px 16px rgba(0,0,0,0.16)', zIndex: 1000, maxHeight: '300px', overflowY: 'auto'
        }}>
          {options.map((option, i) => (
            <div key={i} onClick={() => { onChange(option); setIsOpen(false); }}
              onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}
              style={{
                padding: '8px 12px', cursor: 'pointer', fontFamily: typography.fontFamily, fontSize: typography.sizes.sm,
                color: colors.text.primary.default, transition: 'background-color 0.2s',
                backgroundColor: value === option ? colors.fill.primarySubtle.selected : hoveredIndex === i ? colors.fill.primarySubtle.hover : 'transparent'
              }}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
// Modal
export const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: colors.fill.primarySubtle.default, borderRadius: '8px', maxWidth: '600px', width: '90%', maxHeight: '90vh', overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '57px', padding: '0 24px', borderBottom: `1px solid ${colors.border.primary.default}`, flexShrink: 0 }}>
          <h2 style={{ fontFamily: typography.fontFamily, fontSize: '14px', fontWeight: typography.weights.regular, color: colors.text.primary.default, margin: 0 }}>{title}</h2>
          <button onClick={onClose} style={{ background: colors.fill.primarySubtle.disabled, border: 'none', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '16px', padding: 0 }}>✕</button>
        </div>
        <div style={{ padding: '32px 24px', overflowY: 'auto', flex: 1 }}>{children}</div>
        {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: spacing.md, padding: '16px 24px 24px' }}>{footer}</div>}
      </div>
    </div>
  );
};
// Badge
export const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: { backgroundColor: colors.fill.primarySubtle.disabled, color: colors.text.primary.default },
    accent: { backgroundColor: colors.fill.accentSubtle.default, color: colors.text.accent.default },
    primary: { backgroundColor: colors.fill.accentSolid.default, color: colors.text.primary.onSolid }
  };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', padding: `${spacing.xs} ${spacing.md}`, borderRadius: radius.md, fontSize: typography.sizes.xs, fontFamily: typography.fontFamily, fontWeight: typography.weights.medium, ...variants[variant] }}>
      {children}
    </span>
  );
};
// Status
export const Status = ({ children, variant = 'neutral' }) => {
  const variants = {
    neutral: { backgroundColor: colors.fill.primarySubtle.disabled, border: `1px solid ${colors.border.primary.default}` },
    success: { backgroundColor: colors.fill.successSubtle.default, border: `1px solid ${colors.border.success.default}` },
    error: { backgroundColor: colors.fill.errorSubtle.default, border: `1px solid ${colors.border.error.default}` },
    warning: { backgroundColor: colors.fill.warningSubtle.default, border: `1px solid ${colors.border.warning.default}` },
    info: { backgroundColor: colors.fill.accentSubtle.default, border: `1px solid ${colors.border.accentSolid.default}` }
  };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', height: '24px', padding: '0 10px', borderRadius: '12px', fontSize: '14px', fontFamily: typography.fontFamily, fontWeight: typography.weights.regular, color: colors.text.primary.default, whiteSpace: 'nowrap', boxSizing: 'border-box', width: 'fit-content', ...variants[variant] }}>
      {children}
    </span>
  );
};
// ListItem
export const ListItem = ({ children, selected = false, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      style={{ padding: `${spacing.md} ${spacing.xl}`, cursor: 'pointer', transition: 'background-color 0.2s', borderBottom: `1px solid ${colors.border.primary.default}`, fontFamily: typography.fontFamily, fontSize: typography.sizes.sm, color: colors.text.primary.default, backgroundColor: selected ? colors.fill.primarySubtle.selected : isHovered ? colors.fill.primarySubtle.hover : colors.fill.primarySubtle.default }}>
      {children}
    </div>
  );
};
// Checkbox
export const Checkbox = ({ label, checked = false, mixed = false, disabled = false, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const boxStyle = () => {
    if (disabled) return (checked || mixed) ? { backgroundColor: colors.fill.secondarySolid.disabled, borderColor: colors.fill.secondarySolid.disabled } : { backgroundColor: colors.fill.primarySubtle.default, borderColor: colors.border.primary.default };
    if (checked || mixed) return { backgroundColor: colors.fill.accentSolid.default, borderColor: colors.fill.accentSolid.default };
    return { backgroundColor: colors.fill.primarySubtle.default, borderColor: isHovered ? colors.border.accentSolid.default : colors.border.secondary.default };
  };
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: spacing.md, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => { if (!disabled && onChange) { e.preventDefault(); onChange(!checked); } }}>
      <div style={{ width: '16px', height: '16px', borderRadius: '2px', border: '1.5px solid', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', flexShrink: 0, ...boxStyle() }}>
        {checked && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
        {mixed && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6H9" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>}
      </div>
      {label && <span style={{ fontFamily: typography.fontFamily, fontSize: typography.sizes.sm, color: disabled ? colors.text.primary.disabled : colors.text.primary.default }}>{label}</span>}
    </label>
  );
};
// RadioButton
export const RadioButton = ({ label, checked = false, disabled = false, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const radioStyle = { borderColor: isHovered && !disabled ? colors.border.accentSolid.default : colors.border.secondary.default, backgroundColor: colors.fill.primarySubtle.default };
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: spacing.md, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => { if (!disabled && onChange) { e.preventDefault(); onChange(); } }}>
      <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1.5px solid', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', flexShrink: 0, ...radioStyle }}>
        {checked && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: disabled ? colors.fill.secondarySolid.disabled : colors.fill.accentSolid.default }} />}
      </div>
      {label && <span style={{ fontFamily: typography.fontFamily, fontSize: typography.sizes.sm, color: disabled ? colors.text.primary.disabled : colors.text.primary.default }}>{label}</span>}
    </label>
  );
};
// Toggle
export const Toggle = ({ label, hint, checked = false, disabled = false, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trackStyle = () => {
    if (disabled) return checked ? { backgroundColor: colors.fill.secondarySolid.disabled, border: 'none' } : { backgroundColor: colors.fill.primarySubtle.default, border: `1px solid #e0e0e0` };
    return checked ? { backgroundColor: colors.fill.accentSolid.default, border: 'none' } : { backgroundColor: colors.fill.primarySubtle.default, border: `1px solid ${colors.border.secondary.default}` };
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: spacing.lg, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => { if (!disabled && onChange) { e.preventDefault(); onChange(!checked); } }}>
        <div style={{ width: '32px', height: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center', boxSizing: 'border-box', transition: 'all 0.2s', position: 'relative', flexShrink: 0, ...trackStyle() }}>
          <div style={{ width: '16px', height: '16px', borderRadius: '50%', transition: 'transform 0.2s', transform: checked ? 'translateX(16px)' : 'translateX(0)', boxShadow: '0 1px 3px rgba(0,0,0,0.2)', position: 'absolute', left: 0, boxSizing: 'border-box', backgroundColor: colors.fill.primarySubtle.default, border: `1px solid ${colors.border.secondary.default}` }} />
        </div>
        {label && <span style={{ fontFamily: typography.fontFamily, fontSize: typography.sizes.sm, color: disabled ? colors.text.primary.disabled : isHovered ? '#1a1a1a' : colors.text.primary.default }}>{label}</span>}
      </label>
      {hint && <div style={{ paddingLeft: '44px' }}><span style={{ fontFamily: typography.fontFamily, fontSize: typography.sizes.xs, color: colors.text.secondary.default }}>{hint}</span></div>}
    </div>
  );
};
// Slider
export const Slider = ({ label, value = 50, min = 0, max = 100, onChange, disabled = false }) => {
  const [isDragging, setIsDragging] = useState(false);
  const ref = React.useRef(null);
  const pct = ((value - min) / (max - min)) * 100;
  const updateValue = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    if (onChange) onChange(Math.round(min + p * (max - min)));
  };
  React.useEffect(() => {
    if (!isDragging) return;
    const move = (e) => updateValue(e);
    const up = () => setIsDragging(false);
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
    return () => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); };
  }, [isDragging]);
  return (
    <div style={{ display: 'flex', width: '100%', flexDirection: 'column', gap: spacing.xs }}>
      {label && <label style={{ fontFamily: typography.fontFamily, fontSize: typography.sizes.sm, color: colors.text.secondary.default }}>{label}</label>}
      <div ref={ref} onMouseDown={(e) => { if (!disabled) { setIsDragging(true); updateValue(e); } }}
        style={{ position: 'relative', width: '100%', height: '16px', display: 'flex', alignItems: 'center', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}>
        <div style={{ position: 'absolute', width: '100%', height: '4px', backgroundColor: colors.border.primary.default, borderRadius: '2px' }} />
        <div style={{ position: 'absolute', width: `${pct}%`, height: '4px', backgroundColor: disabled ? colors.fill.secondarySolid.disabled : colors.fill.accentSolid.default, borderRadius: '2px' }} />
        <div style={{ position: 'absolute', left: `calc(${pct}% - 8px)`, width: '16px', height: '16px', borderRadius: '50%', backgroundColor: disabled ? colors.fill.secondarySolid.disabled : colors.fill.accentSolid.default, boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
      </div>
    </div>
  );
};
// Tabs
export const Tabs = ({ tabs, activeTab, onChange, disabled = [] }) => {
  const [hoveredTab, setHoveredTab] = useState(null);
  return (
    <div style={{ display: 'flex', borderBottom: `1px solid ${colors.border.primary.default}`, width: '100%' }}>
      {tabs.map((tab, i) => {
        const isActive = activeTab === i, isDisabled = disabled.includes(i), isHovered = hoveredTab === i && !isDisabled;
        return (
          <button key={i} onClick={() => !isDisabled && onChange && onChange(i)}
            onMouseEnter={() => setHoveredTab(i)} onMouseLeave={() => setHoveredTab(null)}
            style={{ padding: `${spacing.lg} ${spacing.xl}`, backgroundColor: 'transparent', border: 'none', borderBottom: isActive ? `2px solid ${colors.fill.accentSolid.default}` : '2px solid transparent', cursor: isDisabled ? 'not-allowed' : 'pointer', fontFamily: typography.fontFamily, fontSize: typography.sizes.sm, fontWeight: typography.weights.regular, color: isDisabled ? '#e7e7e7' : (isActive || isHovered) ? colors.text.primary.default : colors.text.secondary.default, transition: 'color 0.2s, border-color 0.2s', outline: 'none', marginBottom: '-1px' }}>
            {tab}
          </button>
        );
      })}
    </div>
  );
};
// Tooltip
export const Tooltip = ({ children, content, position = 'top', delay = 200 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeout, setTimeout_] = useState(null);
  const posStyles = {
    top: { tooltip: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '4px' } },
    bottom: { tooltip: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '4px' } },
    left: { tooltip: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '4px' } },
    right: { tooltip: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '4px' } }
  };
  return (
    <div onMouseEnter={() => { const t = window.setTimeout(() => setIsVisible(true), delay); setTimeout_(t); }} onMouseLeave={() => { window.clearTimeout(timeout); setIsVisible(false); }} style={{ position: 'relative', display: 'inline-flex' }}>
      {children}
      {isVisible && (
        <div style={{ position: 'absolute', zIndex: 1000, ...posStyles[position]?.tooltip }}>
          <div style={{ display: 'inline-flex', width: 'max-content', maxWidth: '300px', padding: '8px 12px', backgroundColor: colors.fill.primarySubtle.default, color: colors.text.primary.default, fontSize: typography.sizes.sm, fontFamily: typography.fontFamily, lineHeight: typography.lineHeights.md, borderRadius: radius.md, boxShadow: '0 4px 16px rgba(0,0,0,0.16)', wordBreak: 'break-word' }}>
            {content}
          </div>
        </div>
      )}
    </div>
  );
};
// Alert
export const Alert = ({ children, variant = 'info' }) => {
  const variants = {
    info: { backgroundColor: colors.fill.accentSubtle.default, borderColor: colors.border.accentSolid.default, iconColor: colors.fill.accentSolid.default, icon: 'i' },
    warning: { backgroundColor: colors.fill.warningSubtle.default, borderColor: colors.border.warning.default, iconColor: colors.border.warning.default, icon: '!' },
    error: { backgroundColor: colors.fill.errorSubtle.default, borderColor: colors.border.error.default, iconColor: colors.border.error.default, icon: '!' }
  };
  const v = variants[variant];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: spacing.xl, padding: '16px 20px', backgroundColor: v.backgroundColor, border: `1px solid ${v.borderColor}`, borderRadius: '8px', fontFamily: typography.fontFamily, fontSize: '14px', color: colors.text.primary.default, lineHeight: '1.5' }}>
      <div style={{ flex: 1 }}>{children}</div>
      <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: v.iconColor, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: typography.weights.medium, flexShrink: 0 }}>{v.icon}</div>
    </div>
  );
};
// ============================================================
// SHOWCASE (default export — remove or replace in Lovable.dev)
// ============================================================
export default function ReviztoUIKit() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [radio, setRadio] = useState('option1');
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);
  const [activeTab1, setActiveTab1] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const SectionTitle = ({ children }) => (
    <h2 style={{ fontSize: typography.sizes.lg, fontWeight: typography.weights.medium, color: colors.text.primary.default, marginBottom: spacing.xl, marginTop: 0 }}>{children}</h2>
  );
  return (
    <div style={{ fontFamily: typography.fontFamily, padding: '40px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: colors.fill.primarySubtle.default, borderRadius: radius.md, padding: '40px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: typography.weights.medium, color: colors.text.primary.default, marginBottom: '8px' }}>Revizto Design System</h1>
        <p style={{ fontSize: typography.sizes.sm, color: colors.text.secondary.default, marginBottom: '40px' }}>Complete UI Kit — ready for Lovable.dev</p>
        {/* Buttons */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Buttons</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {['primary','secondary','outline','ghost'].map(v => (
              <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: spacing.xl }}>
                <h3 style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.regular, color: colors.text.primary.default, margin: 0, textTransform: 'capitalize' }}>{v}</h3>
                <Button variant={v}>Button</Button>
                <Button variant={v} disabled>Button</Button>
              </div>
            ))}
          </div>
        </section>
        {/* Inputs */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Inputs</SectionTitle>
          <div style={{ display: 'grid', gap: spacing.xl, maxWidth: '400px' }}>
            <Input placeholder="Enter text..." value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <Input placeholder="Disabled input" disabled />
            <Input placeholder="Input with error" error="This field is required" />
          </div>
        </section>
        {/* TextArea */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Text Area</SectionTitle>
          <div style={{ display: 'grid', gap: spacing.xl, maxWidth: '600px' }}>
            <TextArea label="Label" placeholder="Placeholder" value={textareaValue} onChange={e => setTextareaValue(e.target.value)} rows={4} />
            <TextArea label="Label" placeholder="Disabled textarea" disabled rows={4} />
            <TextArea label="Label" placeholder="Textarea with error" error="This field is required" rows={4} />
          </div>
        </section>
        {/* Search */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Search Field</SectionTitle>
          <div style={{ maxWidth: '600px' }}>
            <SearchField placeholder="Search" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
          </div>
        </section>
        {/* Dropdown */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Dropdown</SectionTitle>
          <div style={{ maxWidth: '400px' }}>
            <Dropdown options={['Option 1','Option 2','Option 3','Option 4']} value={dropdownValue} onChange={setDropdownValue} placeholder="Select an option..." />
          </div>
        </section>
        {/* Badges */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Badges</SectionTitle>
          <div style={{ display: 'flex', gap: spacing.md, flexWrap: 'wrap' }}>
            <Badge variant="default">Default</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="primary">Primary</Badge>
          </div>
        </section>
        {/* Status */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Status Badges</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: spacing.xl }}>
            {[
              { label: 'Neutral', variant: 'neutral', items: ['Active','Canceled','Archived','Ended','Queued','Expired'] },
              { label: 'Success', variant: 'success', items: ['Success','On'] },
              { label: 'Error', variant: 'error', items: ['Deleted','Suspended','Failed'] },
              { label: 'Warning', variant: 'warning', items: ['Pending','In progress','Partially failed'] },
              { label: 'Info', variant: 'info', items: ['Running'] }
            ].map(({ label, variant, items }) => (
              <div key={label}>
                <h3 style={{ fontSize: typography.sizes.sm, fontWeight: typography.weights.medium, color: colors.text.primary.default, marginBottom: spacing.md }}>{label}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
                  {items.map(i => <Status key={i} variant={variant}>{i}</Status>)}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* List */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>List / Rows</SectionTitle>
          <div style={{ maxWidth: '600px', border: `1px solid ${colors.border.primary.default}`, borderRadius: radius.md, overflow: 'hidden' }}>
            {[1,2,3,4].map(n => (
              <ListItem key={n} selected={selectedItem === n} onClick={() => setSelectedItem(n)}>List item {n} — click to select</ListItem>
            ))}
          </div>
        </section>
        {/* Checkbox */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Checkbox</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xl, maxWidth: '400px' }}>
            <Checkbox label="Unchecked" checked={checkbox1} onChange={setCheckbox1} />
            <Checkbox label="Checked" checked={checkbox2} onChange={setCheckbox2} />
            <Checkbox label="Mixed state" mixed />
            <Checkbox label="Disabled unchecked" disabled />
            <Checkbox label="Disabled checked" checked disabled />
          </div>
        </section>
        {/* Radio */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Radio Button</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xl, maxWidth: '400px' }}>
            {['option1','option2','option3'].map((o, i) => (
              <RadioButton key={o} label={`Option ${i+1}`} checked={radio === o} onChange={() => setRadio(o)} />
            ))}
            <RadioButton label="Disabled unchecked" disabled />
            <RadioButton label="Disabled checked" checked disabled />
          </div>
        </section>
        {/* Toggle */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Toggle</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xl, maxWidth: '400px' }}>
            <Toggle label="Placeholder" hint="Hint text" checked={toggle1} onChange={setToggle1} />
            <Toggle label="Placeholder" hint="Hint text" checked={toggle2} onChange={setToggle2} />
            <Toggle label="Placeholder" hint="Hint text" checked={false} disabled />
            <Toggle label="Placeholder" hint="Hint text" checked disabled />
          </div>
        </section>
        {/* Slider */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Slider</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xl, maxWidth: '600px' }}>
            <Slider label="Label" value={sliderValue} onChange={setSliderValue} />
            <Slider label="Label (disabled)" value={75} disabled />
          </div>
        </section>
        {/* Tabs */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Tabs</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <p style={{ fontSize: typography.sizes.sm, color: colors.text.secondary.default, marginBottom: spacing.md }}>Default</p>
              <Tabs tabs={['Label','Label','Label']} activeTab={activeTab1} onChange={setActiveTab1} />
            </div>
            <div>
              <p style={{ fontSize: typography.sizes.sm, color: colors.text.secondary.default, marginBottom: spacing.md }}>With Disabled Tab</p>
              <Tabs tabs={['Label','Label','Label']} activeTab={activeTab2} onChange={setActiveTab2} disabled={[2]} />
            </div>
          </div>
        </section>
        {/* Tooltip */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Tooltip</SectionTitle>
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', padding: '60px 40px', justifyContent: 'center' }}>
            {['top','bottom','left','right'].map(pos => (
              <Tooltip key={pos} content="Tooltip text" position={pos}>
                <Button variant="primary" size="sm">Hover {pos}</Button>
              </Tooltip>
            ))}
          </div>
        </section>
        {/* Alerts */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Alerts</SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Alert variant="info">Information alert — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
            <Alert variant="warning">Warning alert — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
            <Alert variant="error">Error alert — Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Alert>
          </div>
        </section>
        {/* Modal trigger */}
        <section style={{ marginBottom: '40px' }}>
          <SectionTitle>Modal</SectionTitle>
          <Button variant="primary" onClick={() => setModalOpen(true)}>Open Modal</Button>
        </section>
        {/* Color Palette */}
        <section>
          <SectionTitle>Color Palette</SectionTitle>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: spacing.xl }}>
            {[
              ['Primary Text', colors.text.primary.default],
              ['Secondary Text', colors.text.secondary.default],
              ['Accent', colors.fill.accentSolid.default],
              ['Accent Subtle', colors.fill.accentSubtle.default],
              ['Success', colors.border.success.default],
              ['Success Subtle', colors.fill.successSubtle.default],
              ['Error', colors.border.error.default],
              ['Error Subtle', colors.fill.errorSubtle.default],
              ['Warning', colors.border.warning.default],
              ['Warning Subtle', colors.fill.warningSubtle.default],
              ['Selected', colors.fill.primarySubtle.selected],
              ['Hover', colors.fill.primarySubtle.hover],
              ['Border', colors.border.primary.default],
              ['Disabled', colors.text.primary.disabled]
            ].map(([name, color]) => (
              <div key={name}>
                <div style={{ width: '100%', height: '64px', backgroundColor: color, borderRadius: radius.md, border: `1px solid ${colors.border.primary.default}`, marginBottom: spacing.sm }} />
                <div style={{ fontSize: typography.sizes.xs, color: colors.text.secondary.default }}>{name}</div>
                <div style={{ fontSize: typography.sizes.xs, color: colors.text.primary.default, fontFamily: 'monospace' }}>{color}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Lorem ipsum dolor"
        footer={<><Button variant="primary" onClick={() => setModalOpen(false)}>Done</Button><Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button></>}>
        <p style={{ fontSize: '14px', color: colors.text.primary.default, lineHeight: '1.6', margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Modal>
    </div>
  );
}
