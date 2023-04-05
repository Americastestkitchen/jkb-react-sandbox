/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tomato: '#d73a15',
        rust: '#a72e12',
        mint: '#6ba6aa',
        'mint-dark': '#5a8e91',
        turquoise: '#8fdee3',
        'sea-salt': '#d1fcff',
        'white-smoke': '#f5f5f5',
        eclipse: '#3d3d3d',
        'regent-gray': '#767f81',
        silver: '#c2c2c2',
        nobel: '#999999',
        'transparent-black': 'rgba(0, 0, 0, 0.7)',
      }
    },
  },
  plugins: [],
}
