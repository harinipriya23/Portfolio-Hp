/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mon:['Montserrat, sans-serif'],
        great:['Great Vibes, cursive'],
        rale:["Raleway, sans-serif"]
      }
    },
  },
  plugins: [],
}

