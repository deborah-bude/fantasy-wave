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
        "transparent-purple": "rgba(170, 150, 218, 0.5)",
      }
    },
  },
  plugins: [],
}
