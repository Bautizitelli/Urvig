/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    blur: {
      'sm': '4px',
      'md': '8px',
      'lg': '12px',
      'xl': '16px',
    },
    extend: {
      colors: {
        custom1: '#03045E',
        custom2: '#0077B6',
        custom3: '#00B4D8',
        custom4: '#90E0EF',
        custom5: '#CAF0F8',
      },
    },
  },
  plugins: [],
}

