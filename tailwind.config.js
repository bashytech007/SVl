/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_purple: "#541B9C",
        light_purple: "#fb060abd",
      },
      backgroundImage: {
        herobg: "linear-gradient(90deg, #541B9C80, #FB060B40)",
        "svl-gradient": "bg-gradient-to-r from-[#541B9C] to-[#fb060abd]",
      },
    },
  },
  plugins: [],
};
