/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        head:['Lemon'],
        title:['Rubik Glitch'],
        style1:['Stylish'],
        style2:['Tektur'],
        style3:['Roboto Condensed']
      }
    },
  },
  plugins: [],
}