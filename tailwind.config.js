/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          1: "var(--background-1)",
          2: "var(--background-2)",
        },
        main: "var(--main)",
        text: "var(--text)",
        secondary: "var(--secondary)"
      },
    },
  },
  plugins: [],
};
