/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        customBlue: "#233142",
        customOrange: "#F4B886"
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

