/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
    },
    fontSize: {
      'body-m': ['14px', '21px'],
    },
    fontFamily: {
      regular: ['Manrope'],
      medium: ['Manrope'],
      bold: ['Manrope'],
    },
    fontWeight: {
      regular: 300,
      medium: 600,
      bold: 800,
    },
  },
  plugins: [],
};
