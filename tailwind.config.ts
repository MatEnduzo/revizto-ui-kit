import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        revizto: {
          accent: '#386cff',
          'accent-hover': '#143eff',
          'accent-subtle': '#e9f4ff',
          success: '#34a853',
          'success-subtle': '#e6f4ea',
          error: '#ea4335',
          'error-subtle': '#fce8e6',
          warning: '#fbbc04',
          'warning-subtle': '#fef7e0',
          border: '#e7e7e7',
          disabled: '#aeaeae',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
