/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBackground: "hsl(0 0% 7%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
