module.exports = {
  mode: 'jit',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#30475E',
        'space-blue': '#121212'
      },
      fontFamily: {
        sans: ['Gilroy', 'sans-serif']
      }
    },
  },
  plugins: [],
}