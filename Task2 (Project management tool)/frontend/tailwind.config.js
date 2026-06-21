/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f1ff',
          100: '#e9e1ff',
          200: '#d5c7ff',
          300: '#baa2ff',
          400: '#9a75ff',
          500: '#7f4dff',
          600: '#6c2ff7',
          700: '#5b22d6',
          800: '#4d20ad',
          900: '#421f8a'
        },
        navy: '#0b1020'
      },
      boxShadow: {
        glass: '0 10px 30px rgba(15, 23, 42, 0.10)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};
