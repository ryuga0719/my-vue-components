/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "color-surface-primary": "#fff",
        "color-surface-tertiary": "#eee",
        "color-surface-disabled": "#cfcfcf",
        "color-surface-caution-light": "rgba(217, 28, 11, 0.05)",
        "color-border-medium-emphasis": "rgba(8, 18, 26, 0.3)",
        "color-border-high-emphasis": "rgba(8, 18, 26, 0.61)",
        "color-border-caution": "#d91c0b",
        "color-text-high-emphasis": "#08121a",
        "color-text-disabled": "#777",
        "color-focus-ambiguous": "rgba(0, 145, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
