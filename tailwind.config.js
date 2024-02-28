/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#4e6bff',
        colorDark: '#181c31',
        colorLight: '#fff'
      }
    },
  },
  plugins: [],
}

