/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mlight: ['Matter-Light', 'sans-serif'],
        mogen: ['Mogen'],
      },
      colors: {
        'primary': '#fef8e1',
        'secondary': '#9333EA',
        'borderColor': '#00000069'
      },
    },
  },
  plugins: [],
}

