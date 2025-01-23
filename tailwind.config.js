/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme:{
    extend:{
    backgroundImage:{
      herobg:"linear-gradient(90deg, #541B9C80, #FB060B40)"
    }
  }
  },
  plugins: [],
}