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
        canvas: "#f6f2ea",
        paper: "#fffdf9",
        ink: "#1f2933",
        mist: "#5d6a75",
        line: "#ded7ca",
        accent: "#3f6f6b",
        accentSoft: "#e5f0ee"
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
        card: "0 16px 48px rgba(31, 41, 51, 0.08)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at top left, rgba(63, 111, 107, 0.12), transparent 32%), radial-gradient(circle at bottom right, rgba(223, 214, 193, 0.5), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
