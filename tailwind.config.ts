import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f6efdf",
        cream: "#fff8ea",
        ink: "#171410",
        red: "#a93428",
        gold: "#e9bc5b",
      },
    },
  },
  plugins: [],
};

export default config;
