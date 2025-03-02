// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],

  theme: {
    extend: {
      colors: {
        dark_purple: "#541B9C",
        light_purple: "#FB060B80",
      },
      backgroundImage: {
        herobg: "linear-gradient(90deg, #541B9C80, #FB060B40)",
        "svl-gradient": "linear-gradient(90deg, #541B9C, #FB060B80)",
      },
    },
  },
  plugins: [],
} satisfies Config;
