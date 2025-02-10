import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        blue: "#0031E2",
        dark: "#2E2F37",
        gray: "#656566",
        "black-light": "#14191C",
        "gray-light": "#D0D5DD",
        "blue-light": "#007BFF",
        "gray-dark": "#475467",
      },
    },
  },
  plugins: [],
} satisfies Config;
