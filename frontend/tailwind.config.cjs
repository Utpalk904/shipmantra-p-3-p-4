/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'form': 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }
    },
  },
  plugins: [],
}
