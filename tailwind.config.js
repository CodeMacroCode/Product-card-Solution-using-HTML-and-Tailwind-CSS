/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        'cream': '#f2ebe3',
        'dark-cyan': '#3c8067',
        'very-dark-cyan': '#326754',
        'very-dark-blue': '#1c232b',
        'dark-grayish-blue': '#6c7289',
      },
      fontFamily: {
        'montserrat': "'Montserrat', sans-serif",
        'fraunces': "'Fraunces', serif"
      },
      fontSize: {
        'xxs': '0.6rem',
      }
    },
  },
  plugins: [],
}

