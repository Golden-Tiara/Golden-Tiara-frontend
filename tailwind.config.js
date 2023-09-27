/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {

    extend: {
      colors: {
        'gold': '#D2AC47',
        'darkblue': '#122345',
        'background': '#FDF6EC',
        'darkgold': '#836B0B'
      },
      fontFamily: {

      },  
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin')
],
}

