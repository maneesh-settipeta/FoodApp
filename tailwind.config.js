/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColorBlue: '#091a23',
        customColorYellow:'#DCFF1E',
      },
    },
  },
  plugins: [],
}

