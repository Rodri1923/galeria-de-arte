export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Nunito Sans", "Arial", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        canvas: "hsl(var(--canvas) / <alpha-value>)", // ✅ FIX REAL
        border: "hsl(var(--border) / <alpha-value>)",

        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },

        gold: "hsl(var(--gold) / <alpha-value>)",
      },

      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};