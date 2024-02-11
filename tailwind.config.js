/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        "raleway": ["Raleway", "sans-serif", "ui-sans-serif", "system-ui"],
        "roboto": ["Roboto", "sans-serif", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "purple": "#AA96DA",
        "dark-pink": "#C34C63",
        "pink": "#FF7171",
        "dark-blue": "#0A1425",
        "transparent-purple": "rgba(170, 150, 218, 0.5)",
      }
    },
  },
  plugins: [],
}
