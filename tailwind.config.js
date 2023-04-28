/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
    },
    extend: {
      boxShadow: {
        card: '0px 0px 10px rgba(0, 0, 0, 0.25);',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
