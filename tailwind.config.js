/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Orbitron: ["Orbitron", "sans-serif"],
        Freeman: ["Freeman", "sans-serif"],
      }
    },
  },
  plugins: [],
}