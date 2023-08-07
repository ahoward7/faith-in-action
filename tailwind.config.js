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
        'fia-white': '#ffffff',
        'fia-black': '#1d1d1d',
        'fia-blue': '#0041EF',
      }
    },
  },
  plugins: [],
}
