/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,vue}',
    './pages/**/*.{js,ts,jsx,tsx,vue}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'fia-yellow': '#efc600',
        'fia-white': '#f8f8f8',
        'fia-black': '#1d1d1d',
        'fia-blue': '#0041EF',
      },
      height: {
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
      },
      minHeight: {
        '20': '5rem',
        '42vh': '42vh',
        '50vh': '50vh',
      },
      maxHeight: {
        '26': '6.5rem',
        '34': '8.5rem',
        '48': '12rem',
        '86': '22rem',
      },
      maxWidth: {
        '1200': '1200px',
        '1920': '1920px',
      },
      screens: {
        '3xl': '1920px',
      }
    },
  },
  plugins: [],
}
