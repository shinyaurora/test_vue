/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#A1A1A9",
        light: "#E4E4E7",
        darker: "#27272A"
      }
    },
  },
  plugins: [],
}