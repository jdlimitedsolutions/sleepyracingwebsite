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
        sleepy: {
          red: "#FF0000",
          black: "#000000",
          darkGrey: "#2A2A2A",
          lightGrey: "#D3D3D3",
          white: "#FFFFFF",
          purple: "#800080",
          neonGreen: "#39FF14",
          neonBlue: "#00D9FF",
          neonOrange: "#FF6600",
        },
      },
      fontFamily: {
        // Will update with brand fonts later
      },
    },
  },
  plugins: [],
};
export default config;
