import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#F6F2EA",
          soft: "#FBFAF7",
          muted: "#E8E0D3",
          deep: "#111412",
        },
        ink: {
          DEFAULT: "#111412",
          soft: "#4F554F",
          muted: "#7B8178",
          inverse: "#FBFAF7",
        },
        brand: {
          green: "#2E4A38",
          blue: "#1D3D4F",
          brass: "#B58B4A",
          terracotta: "#A65F45",
          linen: "#D7C8B2",
        },
        product: {
          markiser: "#A65F45",
          persienner: "#B58B4A",
          plisse: "#6E7F64",
          rullgardiner: "#9A8B7A",
          zipscreen: "#1D3D4F",
          pergola: "#2E4A38",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      borderRadius: {
        soft: "1.25rem",
        premium: "2rem",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17,20,18,0.08)",
        lift: "0 32px 120px rgba(17,20,18,0.14)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(.2,.8,.2,1)",
      },
    },
  },
  plugins: [],
};

export default config;
