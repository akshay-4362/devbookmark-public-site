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
        // Catppuccin Mocha palette
        crust:    "#11111b",
        mantle:   "#181825",
        base:     "#1e1e2e",
        surface0: "#313244",
        surface1: "#45475a",
        surface2: "#585b70",
        overlay0: "#6c7086",
        subtext0: "#a6adc8",
        subtext1: "#bac2de",
        text:     "#cdd6f4",
        mauve:    "#cba6f7",
        blue:     "#89b4fa",
        green:    "#a6e3a1",
        teal:     "#94e2d5",
        yellow:   "#f9e2af",
        peach:    "#fab387",
        red:      "#f38ba8",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.5s ease forwards",
        "fade-in":    "fadeIn 0.4s ease forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "float":      "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
