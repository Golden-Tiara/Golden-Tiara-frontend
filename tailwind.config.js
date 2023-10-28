/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./app.vue",
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
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
    require('flowbite/plugin'),
    require('tailwindcss-animated'),
    require("tw-elements/dist/plugin.cjs"),
],
}

