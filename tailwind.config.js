/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {

    extend: {
      colors: {
        'red': '#FA2323',
        'yellow': '#D49521',
        'gold': '#D2AC47',
        'darkblue': '#122345'
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
],
}

