/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,vue}',
    './pages/**/*.{js,ts,jsx,tsx,vue}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'fia-yellow': '#efc600',
        'fia-grey': '#e5e5e5',
        'fia-white': '#f8f8f8',
        'fia-black': '#1d1d1d',
        'fia-blue': '#0041EF',
        'fia-red': '#FF5757',
        'fia-green': '#C9FFD1',
      },
      fontFamily: {
        nexa: ['Nexa'],
        inter: ['Inter'],
      },
      height: {
        9: '2.25rem',
        68: '17rem',
        76: '19rem',
        100: '100px',
        200: '200px',
        300: '300px',
        350: '350px',
        400: '400px',
        450: '450px',
        500: '500px',
        600: '600px',
      },
      width: {
        76: '19rem',
      },
      minHeight: {
        '20': '5rem',
        '42vh': '42vh',
        '50vh': '50vh',
      },
      minWidth: {
        52: '13rem',
      },
      maxHeight: {
        26: '6.5rem',
        34: '8.5rem',
        48: '12rem',
        68: '17rem',
        86: '22rem',
        130: '32.5rem',
        500: '500px',
      },
      maxWidth: {
        '27e': '27em',
        '48': '12rem',
        '80': '20rem',
        '92': '23rem',
        '128': '31rem',
        '600': '600px',
        '900': '900px',
        '1000': '1000px',
        '1200': '1200px',
        '1920': '1920px',
      },
      screens: {
        'xs': '480px',
        '3xl': '1920px',
      },
      lineHeight: {
        12: '3rem',
      },
    },
  },
  plugins: [],
}
