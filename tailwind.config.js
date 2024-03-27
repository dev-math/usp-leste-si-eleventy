/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md}"],
  theme: {
    colors: {
      'orange': '#FB9E0D',
      'blue-dark': '#0199B9',
      'blue-light': '#28C1DF',
      'white': '#F9F9F9',
      'gray-dark': '#282828',
    },
    fontFamily: {
      'primary': ['Oswald', 'sans-serif'],
      'secondary': ['MuseoModerno', 'sans-serif'],
      'content': ['Zen Maru Gothic', 'serif'],

    },
    extend: {},
  },
  plugins: [],
}
