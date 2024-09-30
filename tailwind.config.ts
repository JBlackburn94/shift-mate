import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sm-blue": "#2B3252",
        "sm-red": "#EF5455",
        "sm-yellow": "#FAD744",
      },
    },
  },
  plugins: [],
};
export default config;
