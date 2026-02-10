/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f9f7f4',
          100: '#f0ebe3',
          200: '#e0d6c8',
          300: '#cabda3',
          400: '#b09d7e',
          500: '#96835e',
          600: '#7d6d4f',
          700: '#645640',
          800: '#504435',
          900: '#413730',
        },
        forest: {
          50: '#f2f7f4',
          100: '#e1efe8',
          200: '#c5e0d3',
          300: '#9ccbb7',
          400: '#73b69d',
          500: '#50a286',
          600: '#40836e',
          700: '#34695a',
          800: '#2c554a',
          900: '#25473e',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
