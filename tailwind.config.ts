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
        orange: "#FF914d",
        offwhite: "#FFF6ED",
        cream: "#F1F0E2",
        red: "#C4525A",
        pink: "#FF878B",
      },
    },
  },
  plugins: [],
};
export default config;
