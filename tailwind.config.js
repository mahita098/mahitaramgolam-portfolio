/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-start": "var(--gradient-start)",
        "gradient-mid": "var(--gradient-mid)",
        "gradient-end": "var(--gradient-end)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "coffee",
      "retro",
      "night",
      {
        forest: {
          ...require("daisyui/src/theming/themes")["forest"],

          "--gradient-start": "#f0f6ed",
          "--gradient-mid": "#b4d3a7",
          "--gradient-end": "#6aa84f",
        },
        sunset: {
          ...require("daisyui/src/theming/themes")["sunset"],
          "--gradient-start": "#ffff",
          "--gradient-mid": "#ffb38a",
          "--gradient-end": "#ff6700",
        },
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          "--gradient-start": "#e6edf4",
          "--gradient-mid": "#9dbad4",
          "--gradient-end": "#3b75a9",
        },
      },
    ],
  },
};
