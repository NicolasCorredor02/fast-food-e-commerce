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
        'grey': 'rgb(118, 118, 118)',
        'grey-dark': 'rgb(183,183,183)',
        'dark-black': 'rgb(0,0,0)'
      },
      backgroundImage:{
        'banner-home': "url('/src/assets/hamburger-banner.webp')",
      },
      gridTemplateColumns:{
        'auto-fit-populars': 'repeat(auto-fit, minmax(278px,1fr))',
        'auto-fit-category': 'repeat(auto-fit, minmax(100px, 1fr))',
        'general-layout': 'auto 1fr auto'
      },
      gridTemplateRows:{
        'general-layout':'auto 1fr auto',
        'auto-fit-category':'repeat(auto-fit, minmax(100px,1fr))'
      }
    },

  },
  plugins: [],
}

