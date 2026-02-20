export const colors = {
  text: {
    primary: { default: '#323232', disabled: '#aeaeae', onSolid: '#ffffff', hover: '#1a1a1a' },
    secondary: { default: '#6d6d6d', disabled: '#aeaeae' },
    accent: { default: '#386cff' },
    success: { default: '#0f7d3a' },
    error: { default: '#c7352e' },
    warning: { default: '#996000' },
  },
  fill: {
    primarySubtle: { default: '#ffffff', disabled: '#efefef', selected: '#e9f4ff', hover: '#f5f5f5' },
    accentSolid: { default: '#386cff', hover: '#143eff' },
    accentSubtle: { default: '#e9f4ff' },
    secondarySolid: { disabled: '#aeaeae' },
    successSubtle: { default: '#e6f4ea' },
    errorSubtle: { default: '#fce8e6' },
    warningSubtle: { default: '#fef7e0' },
  },
  border: {
    primary: { default: '#e7e7e7' },
    secondary: { default: '#aeaeae', focus: '#386cff', hover: '#888', disabled: '#d1d1d1' },
    accentSolid: { default: '#386cff' },
    success: { default: '#34a853' },
    error: { default: '#ea4335' },
    warning: { default: '#fbbc04' },
  },
} as const

export const spacing = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
} as const

export const radius = {
  none: '0px',
  sm: '2px',
  md: '4px',
} as const

export const typography = {
  fontFamily: 'Roboto, sans-serif',
  sizes: { xs: '12px', sm: '14px', lg: '18px' },
  weights: { regular: 400, medium: 500 },
  lineHeights: { xs: '16px', sm: '18px', md: '20px', xl: '28px' },
} as const
