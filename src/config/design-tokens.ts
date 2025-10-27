export const colors = {
  // Brand Colors
  brand: {
    primary: '#1560FC',
    secondary: '#153794',
    accent: '#A50E23',
  },

  // Surface colors (backgrounds)
  surface: {
    primary: '#FFFFFF', // Main page background
    secondary: '#F4F7FA', // Alternate sections
    'inverse-dark-bg': '#EEF6FF', // Dark bg for the dark bgs in the banking section
  },

  // Text colors by hierarchy
  text: {
    'main-dark': '#000000', // Just black
    'main-dark-shade': '#1E1E1E', // Rare dark shade (limited use)
    'main-white': '#FFFFFF', // Just white
    primary: '#101828', // Main headings, important text
    secondary: '#667085', // Body text, paragraphs
    'inverse-secondary': '#AEFFE0',
    'inverse-primary': '#FFF0B0',
    'inverse-dark': '#FFCAAD',
  },

  // Border colors
  border: {
    primary: '#FFFFFF',
    secondary: '#EAEAEA',
    'dark-border': '#3D3D3D',
  },

  // Interactive elements (buttons, etc.)
  interactive: {
    primary: '#0066FF', // Primary action buttons
    'primary-hover': '#0052CC', // Primary button hover
    'primary-active': '#004099',
    secondary: '#F5F5F5', // Secondary buttons
    'secondary-hover': '#E5E5E5', // Secondary button hover
  },

  // Neutral/Gray Scale
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },

  // Semantic Colors
  success: {
    light: '#D1FAE5',
    DEFAULT: '#10B981',
    dark: '#065F46',
  },
  error: {
    light: '#FEE2E2',
    DEFAULT: '#EF4444',
    dark: '#991B1B',
  },
  warning: {
    light: '#FEF3C7',
    DEFAULT: '#F59E0B',
    dark: '#92400E',
  },
  info: {
    light: '#DBEAFE',
    DEFAULT: '#3B82F6',
    dark: '#1E40AF',
  },
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',

  // Custom shadows for specific use cases
  card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  button: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  dropdown:
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
};

export const gradients = {
  primary: 'linear-gradient(135deg, #153794 0%, #A50E23 100%)',
};

export const spacing = {
  // Additional custom spacing if needed beyond Tailwind defaults
  section: {
    sm: '4rem', // 64px
    md: '6rem', // 96px
    lg: '8rem', // 128px
    xl: '10rem', // 160px
  },
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export const borderRadius = {
  sm: '0.25rem', // 4px
  base: '0.5rem', // 8px
  md: '0.75rem', // 12px
  lg: '1rem', // 16px
  xl: '1.5rem', // 24px
  '2xl': '2rem', // 32px
  full: '9999px',
};

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    mono: ['Fira Code', 'Monaco', 'Courier New', 'monospace'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
  },
};

export const animations = {
  transition: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },
};
