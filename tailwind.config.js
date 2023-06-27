/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.html",
    "./src/**/*.md",
  ],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    extend: {
      colors: { "primary-dark": "black" },
    },
  },
};
