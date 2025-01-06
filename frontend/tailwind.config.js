import tailwindScrollbarHide from "tailwind-scrollbar-hide";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#111111',
        customPurple: '#6B21A8', 
         customPink: 'rgb(255, 0, 93)'
      },
    },
  },
  plugins: [tailwindScrollbarHide],
}

