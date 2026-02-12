/**
 * Revizto Design System UI Kit for Lovable.dev
 * 
 * A comprehensive React component library based on Revizto DS
 * 
 * @author Your Name
 * @version 1.0.0
 * @license MIT
 */

import React, { useState, useEffect, useRef } from 'react';

// ============================================================================
// DESIGN TOKENS
// ============================================================================

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
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px'
};

export const radius = {
  none: '0px',
  sm: '2px',
  md: '4px'
};

export const typography = {
  fontFamily: 'Roboto, sans-serif',
  sizes: { xs: '12px', sm: '14px', lg: '18px' },
  weights: { regular: 400, medium: 500 },
  lineHeights: { xs: '16px', sm: '18px', md: '20px', xl: '28px' }
};

// ============================================================================
// BUTTON COMPONENT
// ============================================================================

/**
 * Button component with multiple variants
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {'primary'|'secondary'|'outline'|'ghost'} props.variant - Button style variant
 * @param {'sm'|'md'} props.size - Button size
 * @param {boolean} props.disabled - Disabled state
 * @param {Function} props.onClick - Click handler
 */
export const Button = ({ children, variant = 'primary', size = 'md', disabled = false, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const baseStyles = {
    fontFamily: typography.fontFamily,
    fontSize: size === 'sm' ? typography.sizes.xs : typography.sizes.sm,
    fontWeight: typography.weights.medium,
    padding: size === 'sm' ? `${spacing.sm} ${spacing.md}` : `${spacing.md} ${spacing.xl}`,
    borderRadius: radius.md,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    outline: 'none',
    border: 'none'
  };

  const getVariantStyles = () => {
    if (disabled) {
      switch (variant) {
        case 'primary':
          return {
            backgroundColor: colors.fill.primarySubtle.disabled,
            color: colors.text.primary.disabled,
            border: 'none'
          };
        case 'secondary':
          return {
            backgroundColor: colors.fill.primarySubtle.disabled,
            color: colors.text.primary.disabled,
            border: 'none'
          };
        case 'outline':
          return {
            backgroundColor: colors.fill.primarySubtle.default,
            color: colors.text.primary.disabled,
            border: `1px solid ${colors.border.secondary.default}`
          };
        case 'ghost':
          return {
            backgroundColor: 'transparent',
            color: colors.text.primary.disabled,
            border: 'none'
          };
      }
    }

    switch (variant) {
      case 'primary':
        return {
          backgroundColor: isHovered ? '#2b5ae6' : colors.fill.accentSolid.default,
          color: colors.text.primary.onSolid,
          border: 'none'
        };
      case 'secondary':
        return {
          backgroundColor: isHovered ? '#d1e7ff' : colors.fill.accentSubtle.default,
          color: colors.text.accent.default,
          border: 'none'
        };
      case 'outline':
        return {
          backgroundColor: isHovered ? colors.fill.accentSubtle.default : colors.fill.primarySubtle.default,
          color: colors.text.accent.default,
          border: `1px solid ${colors.border.accentSolid.default}`
        };
      case 'ghost':
        return {
          backgroundColor: isHovered ? colors.fill.accentSubtle.default : 'transparent',
          color: colors.text.accent.default,
          border: 'none'
        };
      default:
        return {};
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ...baseStyles, ...getVariantStyles() }}
    >
      {children}
    </button>
  );
};

// ============================================================================
// INPUT COMPONENT
// ============================================================================

/**
 * Input component with error handling
 * 
 * @param {Object} props
 * @param {string} props.placeholder - Placeholder text
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.error - Error message
 */
export const Input = ({ placeholder, disabled = false, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.sm,
          padding: `${spacing.md} ${spacing.lg}`,
          borderRadius: radius.md,
          border: `1px solid ${error ? '#ff4d4f' : focused ? colors.border.secondary.focus : colors.border.primary.default}`,
          backgroundColor: disabled ? colors.fill.primarySubtle.disabled : colors.fill.primarySubtle.default,
          color: disabled ? colors.text.primary.disabled : colors.text.primary.default,
          outline: 'none',
          transition: 'all 0.2s',
          boxSizing: 'border-box'
        }}
      />
      {error && (
        <span style={{
          fontSize: typography.sizes.xs,
          color: '#ff4d4f',
          marginTop: spacing.sm,
          display: 'block'
        }}>
          {error}
        </span>
      )}
    </div>
  );
};

// ============================================================================
// DROPDOWN COMPONENT
// ============================================================================

/**
 * Dropdown select component
 * 
 * @param {Object} props
 * @param {Array<string>} props.options - Available options
 * @param {string} props.value - Selected value
 * @param {Function} props.onChange - Change handler
 * @param {string} props.placeholder - Placeholder text
 */
export const Dropdown = ({ options, value, onChange, placeholder = 'Select...' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} style={{ position: 'relative', width: '100%' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.sm,
          padding: `${spacing.md} ${spacing.lg}`,
          borderRadius: radius.md,
          border: `1px solid ${isOpen ? colors.border.secondary.focus : colors.border.primary.default}`,
          backgroundColor: colors.fill.primarySubtle.default,
          color: value ? colors.text.primary.default : colors.text.secondary.default,
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span>{value || placeholder}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
          <path d="M3 4.5L6 7.5L9 4.5" stroke={colors.text.secondary.default} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: spacing.sm,
          backgroundColor: colors.fill.primarySubtle.default,
          border: `1px solid ${colors.border.primary.default}`,
          borderRadius: radius.md,
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.16)',
          zIndex: 1000,
          maxHeight: '300px',
          overflowY: 'auto'
        }}>
          {options.map((option, index) => {
            const isSelected = value === option;
            const isHovered = hoveredIndex === index;
            
            const getBackgroundColor = () => {
              if (isSelected) return colors.fill.primarySubtle.selected;
              if (isHovered) return colors.fill.primarySubtle.hover;
              return 'transparent';
            };

            return (
              <div
                key={index}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontFamily: typography.fontFamily,
                  fontSize: typography.sizes.sm,
                  color: colors.text.primary.default,
                  backgroundColor: getBackgroundColor(),
                  transition: 'background-color 0.2s'
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// MODAL COMPONENT
// ============================================================================

/**
 * Modal dialog component
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Open state
 * @param {Function} props.onClose - Close handler
 * @param {string} props.title - Modal title
 * @param {React.ReactNode} props.children - Modal content
 * @param {React.ReactNode} props.footer - Modal footer with buttons
 */
export const Modal = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: colors.fill.primarySubtle.default,
        borderRadius: '8px',
        maxWidth: '600px',
        width: '90%',
        maxHeight: '90vh',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 24px 20px 24px',
          borderBottom: `1px solid ${colors.border.primary.default}`
        }}>
          <h2 style={{
            fontFamily: typography.fontFamily,
            fontSize: '20px',
            fontWeight: typography.weights.regular,
            color: colors.text.primary.default,
            margin: 0
          }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: colors.fill.primarySubtle.disabled,
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: colors.text.primary.default,
              fontSize: '18px',
              padding: 0,
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.target.style.backgroundColor = colors.fill.primarySubtle.disabled}
          >
            ✕
          </button>
        </div>
        
        <div style={{ 
          padding: '32px 24px',
          overflowY: 'auto',
          flex: 1
        }}>
          {children}
        </div>
        
        {footer && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: spacing.md,
            padding: '16px 24px 24px 24px'
          }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// BADGE COMPONENT
// ============================================================================

/**
 * Badge component for labels
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge content
 * @param {'default'|'accent'|'primary'} props.variant - Badge variant
 */
export const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: {
      backgroundColor: colors.fill.primarySubtle.disabled,
      color: colors.text.primary.default
    },
    accent: {
      backgroundColor: colors.fill.accentSubtle.default,
      color: colors.text.accent.default
    },
    primary: {
      backgroundColor: colors.fill.accentSolid.default,
      color: colors.text.primary.onSolid
    }
  };

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: `${spacing.xs} ${spacing.md}`,
      borderRadius: radius.md,
      fontSize: typography.sizes.xs,
      fontFamily: typography.fontFamily,
      fontWeight: typography.weights.medium,
      ...variants[variant]
    }}>
      {children}
    </span>
  );
};

// ============================================================================
// STATUS COMPONENT
// ============================================================================

/**
 * Status badge component
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Status text
 * @param {'neutral'|'success'|'error'|'warning'|'info'} props.variant - Status variant
 */
export const Status = ({ children, variant = 'neutral' }) => {
  const variants = {
    neutral: {
      backgroundColor: colors.fill.primarySubtle.disabled,
      border: `1px solid ${colors.border.primary.default}`
    },
    success: {
      backgroundColor: colors.fill.successSubtle.default,
      border: `1px solid ${colors.border.success.default}`
    },
    error: {
      backgroundColor: colors.fill.errorSubtle.default,
      border: `1px solid ${colors.border.error.default}`
    },
    warning: {
      backgroundColor: colors.fill.warningSubtle.default,
      border: `1px solid ${colors.border.warning.default}`
    },
    info: {
      backgroundColor: colors.fill.accentSubtle.default,
      border: `1px solid ${colors.border.accentSolid.default}`
    }
  };

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      height: '24px',
      padding: '0 10px',
      borderRadius: '12px',
      fontSize: '14px',
      fontFamily: typography.fontFamily,
      fontWeight: typography.weights.regular,
      color: colors.text.primary.default,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      width: 'fit-content',
      ...variants[variant]
    }}>
      {children}
    </span>
  );
};

// ============================================================================
// LIST ITEM COMPONENT
// ============================================================================

/**
 * Interactive list item component
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Item content
 * @param {boolean} props.selected - Selected state
 * @param {Function} props.onClick - Click handler
 */
export const ListItem = ({ children, selected = false, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBackgroundColor = () => {
    if (selected) return colors.fill.primarySubtle.selected;
    if (isHovered) return colors.fill.primarySubtle.hover;
    return colors.fill.primarySubtle.default;
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: `${spacing.md} ${spacing.xl}`,
        backgroundColor: getBackgroundColor(),
        cursor: 'pointer',
        transition: 'background-color 0.2s',
        borderBottom: `1px solid ${colors.border.primary.default}`,
        fontFamily: typography.fontFamily,
        fontSize: typography.sizes.sm,
        color: colors.text.primary.default
      }}
    >
      {children}
    </div>
  );
};

// ============================================================================
// CHECKBOX COMPONENT
// ============================================================================

/**
 * Checkbox component
 * 
 * @param {Object} props
 * @param {string} props.label - Checkbox label
 * @param {boolean} props.checked - Checked state
 * @param {boolean} props.mixed - Mixed/indeterminate state
 * @param {boolean} props.disabled - Disabled state
 * @param {Function} props.onChange - Change handler
 */
export const Checkbox = ({ label, checked = false, mixed = false, disabled = false, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCheckboxStyle = () => {
    if (disabled) {
      if (checked || mixed) {
        return {
          backgroundColor: colors.fill.secondarySolid.disabled,
          borderColor: colors.fill.secondarySolid.disabled
        };
      }
      return {
        backgroundColor: colors.fill.primarySubtle.default,
        borderColor: colors.border.primary.default
      };
    }

    if (checked || mixed) {
      return {
        backgroundColor: colors.fill.accentSolid.default,
        borderColor: colors.fill.accentSolid.default
      };
    }

    if (isHovered) {
      return {
        backgroundColor: colors.fill.primarySubtle.default,
        borderColor: colors.border.accentSolid.default
      };
    }

    return {
      backgroundColor: colors.fill.primarySubtle.default,
      borderColor: colors.border.secondary.default
    };
  };

  return (
    <label 
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.md,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        if (!disabled && onChange) {
          e.preventDefault();
          onChange(!checked);
        }
      }}
    >
      <div
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '2px',
          border: '1.5px solid',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s',
          flexShrink: 0,
          ...getCheckboxStyle()
        }}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {mixed && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 6H9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </div>
      {label && (
        <span style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.sm,
          color: disabled ? colors.text.primary.disabled : colors.text.primary.default
        }}>
          {label}
        </span>
      )}
    </label>
  );
};

// ============================================================================
// RADIO BUTTON COMPONENT
// ============================================================================

/**
 * Radio button component
 * 
 * @param {Object} props
 * @param {string} props.label - Radio label
 * @param {boolean} props.checked - Checked state
 * @param {boolean} props.disabled - Disabled state
 * @param {Function} props.onChange - Change handler
 */
export const RadioButton = ({ label, checked = false, disabled = false, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getRadioStyle = () => {
    if (disabled) {
      return {
        borderColor: colors.border.secondary.default,
        backgroundColor: colors.fill.primarySubtle.default
      };
    }

    if (isHovered) {
      return {
        borderColor: colors.border.accentSolid.default,
        backgroundColor: colors.fill.primarySubtle.default
      };
    }

    return {
      borderColor: colors.border.secondary.default,
      backgroundColor: colors.fill.primarySubtle.default
    };
  };

  return (
    <label 
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: spacing.md,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        if (!disabled && onChange) {
          e.preventDefault();
          onChange();
        }
      }}
    >
      <div
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          border: '1.5px solid',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s',
          flexShrink: 0,
          ...getRadioStyle()
        }}
      >
        {checked && (
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: disabled ? colors.fill.secondarySolid.disabled : colors.fill.accentSolid.default
          }} />
        )}
      </div>
      {label && (
        <span style={{
          fontFamily: typography.fontFamily,
          fontSize: typography.sizes.sm,
          color: disabled ? colors.text.primary.disabled : colors.text.primary.default
        }}>
          {label}
        </span>
      )}
    </label>
  );
};

// ============================================================================
// TOGGLE COMPONENT
// ============================================================================

/**
 * Toggle switch component
 * 
 * @param {Object} props
 * @param {string} props.label - Toggle label
 * @param {string} props.hint - Hint text below toggle
 * @param {boolean} props.checked - Checked state
 * @param {boolean} props.disabled - Disabled state
 * @param {Function} props.onChange - Change handler
 */
export const Toggle = ({ label, hint, checked = false, disabled = false, onChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getToggleStyle = () => {
    if (disabled) {
      if (checked) {
        return {
          backgroundColor: colors.fill.secondarySolid.disabled,
          border: `1px solid ${colors.fill.secondarySolid.disabled}`
        };
      }
      return {
        backgroundColor: colors.fill.primarySubtle.default,
        border: `1px solid #d1d1d1`
      };
    }

    if (checked) {
      if (isHovered) {
        return {
          backgroundColor: '#143eff',
          border: `1px solid #143eff`
        };
      }
      return {
        backgroundColor: colors.fill.accentSolid.default,
        border: `1px solid ${colors.fill.accentSolid.default}`
      };
    }

    if (isHovered) {
      return {
        backgroundColor: colors.fill.primarySubtle.default,
        border: `1px solid #888`
      };
    }

    return {
      backgroundColor: colors.fill.primarySubtle.default,
      border: `1px solid ${colors.border.secondary.default}`
    };
  };

  const getCircleStyle = () => {
    if (disabled && !checked) {
      return {
        backgroundColor: '#d1d1d1'
      };
    }
    return {
      backgroundColor: colors.fill.primarySubtle.default
    };
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.xs }}>
      <label 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.lg,
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          if (!disabled && onChange) {
            e.preventDefault();
            onChange(!checked);
          }
        }}
      >
        <div
          style={{
            width: '32px',
            height: '16px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',
            transition: 'all 0.2s',
            position: 'relative',
            flexShrink: 0,
            ...getToggleStyle()
          }}
        >
          <div style={{
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            transition: 'transform 0.2s',
            transform: checked ? 'translateX(16px)' : 'translateX(0)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.25)',
            position: 'absolute',
            left: 0,
            ...getCircleStyle()
          }} />
        </div>
        {label && (
          <span style={{
            fontFamily: typography.fontFamily,
            fontSize: typography.sizes.sm,
            color: disabled ? colors.text.primary.disabled : (isHovered ? '#1a1a1a' : colors.text.primary.default),
            lineHeight: typography.lineHeights.md
          }}>
            {label}
          </span>
        )}
      </label>
      {hint && (
        <div style={{ paddingLeft: '44px' }}>
          <span style={{
            fontFamily: typography.fontFamily,
            fontSize: typography.sizes.xs,
            color: disabled ? colors.text.secondary.disabled : colors.text.secondary.default,
            lineHeight: typography.lineHeights.xs
          }}>
            {hint}
          </span>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// ALERT COMPONENT
// ============================================================================

/**
 * Alert message component
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Alert content
 * @param {'info'|'warning'|'error'} props.variant - Alert variant
 */
export const Alert = ({ children, variant = 'info' }) => {
  const variants = {
    info: {
      backgroundColor: colors.fill.accentSubtle.default,
      borderColor: colors.border.accentSolid.default,
      iconColor: colors.fill.accentSolid.default,
      icon: 'i'
    },
    warning: {
      backgroundColor: colors.fill.warningSubtle.default,
      borderColor: colors.border.warning.default,
      iconColor: colors.border.warning.default,
      icon: '!'
    },
    error: {
      backgroundColor: colors.fill.errorSubtle.default,
      borderColor: colors.border.error.default,
      iconColor: colors.border.error.default,
      icon: '!'
    }
  };

  const variantStyle = variants[variant];

  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: spacing.xl,
      padding: '16px 20px',
      backgroundColor: variantStyle.backgroundColor,
      border: `1px solid ${variantStyle.borderColor}`,
      borderRadius: '8px',
      fontFamily: typography.fontFamily,
      fontSize: '14px',
      color: colors.text.primary.default,
      lineHeight: '1.5'
    }}>
      <div style={{ flex: 1 }}>
        {children}
      </div>
      <div style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        backgroundColor: variantStyle.iconColor,
        color: colors.text.primary.onSolid,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: typography.weights.medium,
        flexShrink: 0
      }}>
        {variantStyle.icon}
      </div>
    </div>
  );
};

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  Button,
  Input,
  Dropdown,
  Modal,
  Badge,
  Status,
  ListItem,
  Checkbox,
  RadioButton,
  Toggle,
  Alert,
  colors,
  spacing,
  radius,
  typography
};