/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue: '#1F1F38',
        navyBlue: '#2C2C6C',
        skyBlue: '#72BFFE'
      }
    },
  },
  plugins: [],
}