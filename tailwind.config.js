/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        color1: '#22252d',
        color2: '#393E46',
        color3: '#00ADB5',
        color4: '#EEEEEE',
        color5: '#00969d'
      },
      fontFamily: {
        myFont: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}