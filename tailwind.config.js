/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors:{
        'white': 'rgb(255, 255, 255)',
        'black': 'rgb(38, 38, 38)',
        'red': 'rgb(236, 51, 51)',
        'orange': 'rgb(255, 138, 0)',
        'grey': 'rgb(118, 118, 118)'
      }
    },

  },
  plugins: [],
}

