import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0908",
          900: "#1c1815",
          800: "#2a241f",
        },
        bone: {
          DEFAULT: "#f0e8d8",
          muted: "#c9bfa8",
          dim: "#8a8170",
        },
        gold: {
          DEFAULT: "#d4a574",
          hover: "#e3b685",
          deep: "#a87a4f",
        },
        olive: {
          DEFAULT: "#6b7d4f",
          deep: "#3a5a40",
        },
        rust: "#b85c3c",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212, 165, 116, 0.15), 0 8px 32px -8px rgba(212, 165, 116, 0.25)",
        "glow-strong":
          "0 0 0 1px rgba(212, 165, 116, 0.3), 0 16px 48px -12px rgba(212, 165, 116, 0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
