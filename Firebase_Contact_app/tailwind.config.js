/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc:"#031525",
        slate:"#0D2136",
      }
    },
  },
  plugins: [],
}