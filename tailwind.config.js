module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.{js,ts}',
    './node_modules/flowbite/lib/**/*.{js,ts}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',

    },
    fontFamily: {
      wix: 'Wix Madefor Display',
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      body: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    colors: {
      'gray-50': '#ffffff',
      'gray-100': '#ffffff',
      'gray-200': '#ffffff',
      'gray-300': '#ffffff',
      'gray-400': '#ffffff',
      'gray-500': '#ffffff',
      'gray-600': '#ffffff',
      'gray-700': '#ffffff',
      'gray-800': '#ffffff',
      'gray-900': '#ffffff',
      'primary-50': '#FDEDED',
      'primary-100': '#FCDADA',
      'primary-200': '#F9B5B5',
      'primary-300': '#F58F8F',
      'primary-400': '#F26A6A',
      'primary-500': '#EF4444',
      'primary-600': '#E71414',
      'primary-700': '#B30F0F',
      'primary-800': '#800B0B',
      'primary-900': '#4C0707',
      'primary-950': '#320404',
      'indigo-950' : '#1e1b4b',
      'red-950': '#FF0000',
      'blu-200':'#edf0fd',
  
    },
    extend: {
      display: ['group-hover'],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'url(/images/Hero.svg)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')],
}
