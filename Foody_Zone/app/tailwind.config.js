/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bggray: "#323334",
      },
      backgroundImage: {
        'hero-image': "url('/images/background.png')",
      },
    },
  },
  plugins: [],
};
