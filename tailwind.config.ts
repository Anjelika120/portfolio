import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f7f8f4",
        surface: "#ffffff",
        paper: "#ffffff",
        ink: "#16201f",
        muted: "#52625f",
        mist: "#52625f",
        line: "#d9dfd8",
        accent: "#3a7069",
        accentSoft: "#dcebe7",
        coral: "#d66f50",
        coralSoft: "#f3d9cf",
        yellow: "#e1b848",
        yellowSoft: "#f7edc8"
      },
      fontFamily: {
        sans: [
          "Avenir Next",
          "Segoe UI",
          "Helvetica Neue",
          "sans-serif"
        ],
        serif: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Book Antiqua",
          "Times New Roman",
          "serif"
        ]
      },
      boxShadow: {
        card: "0 8px 16px rgba(22, 32, 31, 0.06)"
      }
    }
  },
  plugins: []
};

export default config;
