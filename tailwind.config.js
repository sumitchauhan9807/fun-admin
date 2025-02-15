/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'phone': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        'main-pink': '#C73168',
        'fb_blue': '#476794',
        'cream_white': '#F5EEE9',
        'popup_bg': '#00000080',
        'blue_font': '#584F8E',
        'grey_font': '#535553',
      },
      height: {
        'hero-area': '800px',
        'hero-area-phone': '600px'
      },
      letterSpacing: {
        widest: '22px'
      },
      maxWidth: {
        'maxWidth-1400': '1400px'
      },
      width: {
        'sideImgWidth': '80%',
        'loginFormWidth': '30rem'
      },
      fontSize: {
        'h1': '5.5rem'
      },
      borderRadius: {
        'mobmenuRds': '8rem'
      },
      animation: {
        'mobMenu': 'wiggle 0.5s ease-in-out forwards',
      },
      keyframes: {
        wiggle: {
          '0%': { top: '-100%', right: '-100%' },
          '100%': { top: '0%', right: '0' }
        }
      },
      gridTemplateColumns: {
        'chat-grid': '1fr 4fr'
      },
    },
  },
  plugins: [],
}