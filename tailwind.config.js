/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#4e6bff',
        colorSecondary: '#db1a2a',
        colorDark: '#181c31',
        colorLight: '#fff',
        ccc: '#ccc'
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}

