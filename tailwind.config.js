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
        '400': '400px',
        '500': '500px',
        '600': '600px',
      },
      maxWidth: {
        '1920': '1920px',
      },
      screens: {
        '3xl': '1920px',
      }
    },
  },
  plugins: [],
}
