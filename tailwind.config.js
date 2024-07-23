/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.75rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      colors: {
        primary: "#020202",
        accent: "#B4E925",
        txt: {
          DEFAULT: "#FFFFFF",
          muted: "#B0B0B0",
        },
      },
      fontSize: {
        brand: "8.875rem",
        heading: "3.75rem",
        paragraph: "1.125rem",
      },
    },
  },
  plugins: [],
};
