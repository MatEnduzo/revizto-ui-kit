/**
 * REVIZTO DESIGN SYSTEM - TAILWIND VERSION
 * Optimized for Lovable.dev with Tailwind CSS
 * 
 * Color Mapping:
 * Revizto #386cff -> Tailwind blue-600
 * Revizto #323232 -> Tailwind gray-800
 * Revizto #6d6d6d -> Tailwind gray-500
 * Revizto #e7e7e7 -> Tailwind gray-200
 */

import React, { useState, useRef, useEffect } from 'react';

// ============================================
// BUTTON COMPONENT
// ============================================

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick,
  className = ''
}) => {
  const baseClasses = 'h-8 px-4 rounded font-medium text-sm transition-all duration-200 inline-flex items-center justify-center outline-none';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-200 disabled:text-gray-400',
    secondary: 'bg-blue-50 hover:bg-blue-100 text-blue-600 disabled:bg-gray-200 disabled:text-gray-400',
    outline: 'bg-white hover:bg-blue-50 text-blue-600 border border-blue-600 disabled:bg-white disabled:text-gray-400 disabled:border-gray-300',
    ghost: 'bg-transparent hover:bg-blue-50 text-blue-600 disabled:text-gray-400'
  };

  const sizeClasses = size === 'sm' ? 'h-auto py-1 px-2 text-xs' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizeClasses} ${className} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {children}
    </button>
  );
};

// ============================================
// INPUT COMPONENT
// ============================================

export const Input = ({ 
  placeholder, 
  disabled = false, 
  value, 
  onChange, 
  error,
  className = ''
}) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full h-8 px-3 rounded border
          font-['Roboto'] text-sm
          transition-all duration-200
          outline-none
          ${error ? 'border-red-500' : 'border-gray-200 focus:border-blue-600'}
          ${disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-800'}
          ${className}
        `}
      />
      {error && (
        <span className="text-xs text-red-500 mt-1 block">
          {error}
        </span>
      )}
    </div>
  );
};

// ============================================
// TEXTAREA COMPONENT
// ============================================

export const TextArea = ({ 
  placeholder, 
  disabled = false, 
  value, 
  onChange, 
  error, 
  rows = 4, 
  label,
  className = ''
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block font-['Roboto'] text-sm text-gray-500 mb-2">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        rows={rows}
        className={`
          w-full p-3 rounded border
          font-['Roboto'] text-sm leading-5
          transition-all duration-200
          outline-none resize-y
          ${error ? 'border-red-500' : 'border-gray-200 focus:border-blue-600'}
          ${disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-800'}
          ${className}
        `}
      />
      {error && (
        <span className="text-xs text-red-500 mt-1 block">
          {error}
        </span>
      )}
    </div>
  );
};

// ============================================
// SEARCH FIELD COMPONENT
// ============================================

export const SearchField = ({ 
  placeholder = 'Search', 
  value, 
  onChange, 
  onClear,
  className = ''
}) => {
  const handleClear = () => {
    if (onClear) {
      onClear();
    } else if (onChange) {
      onChange({ target: { value: '' } });
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Search Icon */}
      <svg 
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none flex-shrink-0" 
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="none"
      >
        <circle cx="8.5" cy="8.5" r="5.5" stroke="#6d6d6d" strokeWidth="1.5"/>
        <path d="M12.5 12.5L16 16" stroke="#6d6d6d" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      
      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full h-8 pl-11 rounded-lg border border-gray-200
          font-['Roboto'] text-sm
          transition-all duration-200
          outline-none
          hover:border-blue-600 focus:border-blue-600
          bg-white text-gray-800
          ${value ? 'pr-10' : 'pr-3'}
        `}
      />
      
      {/* Clear Button */}
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-0 flex items-center justify-center w-5 h-5 hover:opacity-70 transition-opacity"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 6L14 14M14 6L6 14" stroke="#6d6d6d" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};

// ============================================
// DROPDOWN COMPONENT
// ============================================

export const Dropdown = ({ 
  options, 
  value, 
  onChange, 
  placeholder = 'Select...',
  className = ''
}) => {
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
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full h-8 px-3 rounded border
          font-['Roboto'] text-sm text-left
          flex items-center justify-between
          transition-all duration-200
          ${isOpen ? 'border-blue-600' : 'border-gray-200'}
          ${value ? 'text-gray-800' : 'text-gray-500'}
          bg-white cursor-pointer
        `}
      >
        <span>{value || placeholder}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="#6d6d6d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-50 max-h-[300px] overflow-y-auto">
          {options.map((option, index) => {
            const isSelected = value === option;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  px-3 py-2 cursor-pointer
                  font-['Roboto'] text-sm text-gray-800
                  transition-colors duration-200
                  ${isSelected ? 'bg-blue-50' : isHovered ? 'bg-gray-50' : 'bg-transparent'}
                `}
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

// ============================================
// MODAL COMPONENT
// ============================================

export const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
      <div className="bg-white rounded-lg max-w-[600px] w-[90%] max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between h-[57px] px-6 border-b border-gray-200 flex-shrink-0">
          <h2 className="font-['Roboto'] text-sm font-normal text-gray-800 m-0">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 border-none rounded-full w-6 h-6 flex items-center justify-center cursor-pointer text-gray-800 text-base p-0 transition-colors duration-200 flex-shrink-0"
          >
            ✕
          </button>
        </div>
        
        {/* Content */}
        <div className="p-8 overflow-y-auto flex-1">
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="flex justify-end gap-2 px-6 pt-4 pb-6">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================
// BADGE COMPONENT
// ============================================

export const Badge = ({ 
  children, 
  variant = 'default',
  className = ''
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    accent: 'bg-blue-50 text-blue-600',
    primary: 'bg-blue-600 text-white'
  };

  return (
    <span className={`inline-flex items-center py-0.5 px-2 rounded text-xs font-['Roboto'] font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// ============================================
// STATUS COMPONENT
// ============================================

export const Status = ({ 
  children, 
  variant = 'neutral',
  className = ''
}) => {
  const variants = {
    neutral: 'bg-gray-100 border-gray-200',
    success: 'bg-green-50 border-green-500',
    error: 'bg-red-50 border-red-500',
    warning: 'bg-yellow-50 border-yellow-400',
    info: 'bg-blue-50 border-blue-600'
  };

  return (
    <span className={`inline-flex items-center h-6 px-2.5 rounded-full border text-sm font-['Roboto'] font-normal text-gray-800 whitespace-nowrap w-fit ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// ============================================
// LIST ITEM COMPONENT
// ============================================

export const ListItem = ({ 
  children, 
  selected = false, 
  onClick,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        px-4 py-2 cursor-pointer
        transition-colors duration-200
        border-b border-gray-200
        font-['Roboto'] text-sm text-gray-800
        ${selected ? 'bg-blue-50' : isHovered ? 'bg-gray-50' : 'bg-white'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// ============================================
// CHECKBOX COMPONENT
// ============================================

export const Checkbox = ({ 
  label, 
  checked = false, 
  mixed = false, 
  disabled = false, 
  onChange,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <label 
      className={`flex items-center gap-2 ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        if (!disabled && onChange) {
          e.preventDefault();
          onChange(!checked);
        }
      }}
    >
      <div className={`
        w-4 h-4 rounded-sm border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all duration-200
        ${disabled 
          ? (checked || mixed ? 'bg-gray-400 border-gray-400' : 'bg-white border-gray-200')
          : (checked || mixed ? 'bg-blue-600 border-blue-600' : isHovered ? 'bg-white border-blue-600' : 'bg-white border-gray-400')
        }
      `}>
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
        <span className={`font-['Roboto'] text-sm ${disabled ? 'text-gray-400' : 'text-gray-800'}`}>
          {label}
        </span>
      )}
    </label>
  );
};

// ============================================
// RADIO BUTTON COMPONENT
// ============================================

export const RadioButton = ({ 
  label, 
  checked = false, 
  disabled = false, 
  onChange,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <label 
      className={`flex items-center gap-2 ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        if (!disabled && onChange) {
          e.preventDefault();
          onChange();
        }
      }}
    >
      <div className={`
        w-4 h-4 rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 transition-all duration-200
        ${disabled ? 'bg-white border-gray-400' : isHovered ? 'bg-white border-blue-600' : 'bg-white border-gray-400'}
      `}>
        {checked && (
          <div className={`w-2 h-2 rounded-full ${disabled ? 'bg-gray-400' : 'bg-blue-600'}`} />
        )}
      </div>
      {label && (
        <span className={`font-['Roboto'] text-sm ${disabled ? 'text-gray-400' : 'text-gray-800'}`}>
          {label}
        </span>
      )}
    </label>
  );
};

// ============================================
// TOGGLE COMPONENT
// ============================================

export const Toggle = ({ 
  label, 
  hint, 
  checked = false, 
  disabled = false, 
  onChange,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`flex flex-col gap-0.5 ${className}`}>
      <label 
        className={`flex items-center gap-3 ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          if (!disabled && onChange) {
            e.preventDefault();
            onChange(!checked);
          }
        }}
      >
        <div className={`
          w-8 h-4 rounded-lg flex items-center relative flex-shrink-0 transition-all duration-200
          ${disabled 
            ? (checked ? 'bg-gray-400' : 'bg-white border border-gray-200')
            : (checked ? 'bg-blue-600' : 'bg-white border border-gray-400')
          }
        `}>
          <div className={`
            w-4 h-4 rounded-full shadow-md absolute left-0 transition-transform duration-200
            bg-white border border-gray-400
            ${checked ? 'translate-x-4' : 'translate-x-0'}
          `} />
        </div>
        {label && (
          <span className={`font-['Roboto'] text-sm leading-5 ${disabled ? 'text-gray-400' : isHovered ? 'text-gray-900' : 'text-gray-800'}`}>
            {label}
          </span>
        )}
      </label>
      {hint && (
        <div className="pl-11">
          <span className={`font-['Roboto'] text-xs leading-4 ${disabled ? 'text-gray-400' : 'text-gray-500'}`}>
            {hint}
          </span>
        </div>
      )}
    </div>
  );
};

// ============================================
// SLIDER COMPONENT
// ============================================

export const Slider = ({ 
  label, 
  value = 50, 
  min = 0, 
  max = 100, 
  onChange, 
  disabled = false,
  className = ''
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    if (disabled) return;
    setIsDragging(true);
    updateValue(e);
  };

  const handleMouseMove = (e) => {
    if (isDragging && !disabled) {
      updateValue(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateValue = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newValue = Math.round(min + percent * (max - min));
    if (onChange) {
      onChange(newValue);
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`flex flex-col items-start gap-0.5 w-full ${className}`}>
      {label && (
        <label className={`font-['Roboto'] text-sm ${disabled ? 'text-gray-400' : 'text-gray-500'}`}>
          {label}
        </label>
      )}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        className={`relative w-full h-4 flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
      >
        {/* Track */}
        <div className="absolute w-full h-1 bg-gray-200 rounded-sm" />
        
        {/* Active track */}
        <div 
          className={`absolute h-1 rounded-sm ${disabled ? 'bg-gray-400' : 'bg-blue-600'}`}
          style={{ width: `${percentage}%` }}
        />
        
        {/* Handle */}
        <div 
          className={`absolute w-4 h-4 rounded-full shadow-md ${disabled ? 'bg-gray-400' : 'bg-blue-600'} ${isDragging ? '' : 'transition-all duration-100'}`}
          style={{ left: `calc(${percentage}% - 8px)` }}
        />
      </div>
    </div>
  );
};

// ============================================
// TABS COMPONENT
// ============================================

export const Tabs = ({ 
  tabs, 
  activeTab, 
  onChange, 
  disabled = [],
  className = ''
}) => {
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <div className={`flex border-b border-gray-200 w-full ${className}`}>
      {tabs.map((tab, index) => {
        const isActive = activeTab === index;
        const isDisabled = disabled.includes(index);
        const isHovered = hoveredTab === index && !isDisabled;

        return (
          <button
            key={index}
            onClick={() => !isDisabled && onChange && onChange(index)}
            onMouseEnter={() => setHoveredTab(index)}
            onMouseLeave={() => setHoveredTab(null)}
            className={`
              px-4 py-3 bg-transparent border-none outline-none -mb-px
              font-['Roboto'] text-sm font-normal
              transition-all duration-200
              ${isDisabled ? 'cursor-not-allowed text-gray-200' : 'cursor-pointer'}
              ${isActive ? 'text-gray-800 border-b-2 border-blue-600' : isHovered ? 'text-gray-800 border-b-2 border-transparent' : 'text-gray-500 border-b-2 border-transparent'}
            `}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

// ============================================
// TOOLTIP COMPONENT
// ============================================

export const Tooltip = ({ 
  children, 
  content, 
  position = 'top', 
  delay = 200,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTimeout, setShowTimeout] = useState(null);
  const tooltipRef = useRef(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setShowTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (showTimeout) {
      clearTimeout(showTimeout);
    }
    setIsVisible(false);
  };

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-1',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-1',
    left: 'right-full top-1/2 -translate-y-1/2 mr-1',
    right: 'left-full top-1/2 -translate-y-1/2 ml-1'
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-4 border-t-white',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-4 border-b-white',
    left: 'left-full top-1/2 -translate-y-1/2 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-4 border-l-white',
    right: 'right-full top-1/2 -translate-y-1/2 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-4 border-r-white'
  };

  return (
    <div
      ref={tooltipRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex ${className}`}
    >
      {children}
      
      {isVisible && (
        <div className={`absolute z-[1000] ${positionClasses[position]}`}>
          <div className="inline-flex flex-col items-start w-max max-w-[300px] py-2 px-3 bg-white text-gray-800 text-sm font-['Roboto'] leading-5 rounded shadow-xl break-words text-left">
            {content}
          </div>
          
          {/* Arrow */}
          <div className={`absolute w-0 h-0 ${arrowClasses[position]}`} />
        </div>
      )}
    </div>
  );
};

// ============================================
// ALERT COMPONENT
// ============================================

export const Alert = ({ 
  children, 
  variant = 'info',
  className = ''
}) => {
  const variants = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-600',
      icon: 'bg-blue-600',
      text: 'i'
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-400',
      icon: 'bg-yellow-400',
      text: '!'
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-500',
      icon: 'bg-red-500',
      text: '!'
    }
  };

  const variantStyle = variants[variant];

  return (
    <div className={`flex items-start gap-4 p-4 ${variantStyle.bg} border ${variantStyle.border} rounded-lg font-['Roboto'] text-sm text-gray-800 leading-relaxed ${className}`}>
      <div className="flex-1">
        {children}
      </div>
      <div className={`w-6 h-6 rounded-full ${variantStyle.icon} text-white flex items-center justify-center text-sm font-medium flex-shrink-0`}>
        {variantStyle.text}
      </div>
    </div>
  );
};