export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        serif: ["Playfair Display", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 16px 40px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
