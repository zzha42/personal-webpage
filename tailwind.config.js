/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          indigo: '#4f46e5',
          'indigo-light': '#6366f1',
          'indigo-dark': '#3730a3',
        },
      },
    },
  },
  plugins: [],
}
