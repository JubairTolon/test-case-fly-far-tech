/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#e30086',
      'secondary': '#ec008c',
      'tertiary': '#85004f',
      'praimary-text': '#ffffff',
    },
    borderRadius: {
      'sm': '5px',
      'md': '8px',
      'lg': '10px',
    },
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}