/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
      },
      colors: {
        'font-grey': '#4F4F4F',
      },
      screens: {
        'lg': '1030px',
      }
    },
  },
  plugins: [],
}

