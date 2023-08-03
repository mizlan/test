/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mutedPurple: {
          50: '#faebfc',
          100: '#e4c8ea',
          200: '#d0a6d9',
          300: '#bd82c9',
          400: '#aa5fb9',
          500: '#9145a0',
          600: '#71367c',
          700: '#512659',
          800: '#321637',
          900: '#130616',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
