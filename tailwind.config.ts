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
        light_purple: "#fb060abd",
        "svl-gradient":
          "bg-gradient-to-r from-[#541B9C] to-[#fb060abd] text-transparent",
      },
      backgroundImage: {
        hebg: "linear-gradient(90deg, #541B9C80, #FB060B40)",
        "svl-gradient": "linear-gradient(90deg, #541B9C, #fb060abd)",
      },
    },
  },
  plugins: [],
} satisfies Config;
