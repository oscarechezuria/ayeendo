/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        one: {
          500: "#372868",
        },
        two: {
          600: "#1d8d88",
          500: "#219D98",
          300: "#BBF7D0",
          100: "#e9f5ed",
        },
        three: {
          500: "#F9FAFB",
        },
        four: {
          500: "#45565E",
        },
      },
    },
    screens: {
      sm: "680px",
      md: "850px",
      lg: "1024px",
      xl: "1280px",
    },
    height: {
      130: "65rem",
      125: "50rem",
      120: "34rem",
      118: "30rem",
      115: "27rem",
      100: "20rem",
      90: "17rem",
      85: "7rem",
      80: "4rem",
      14: "3rem",
      2: "100%",
      1: "100vh",
    },
  },
  plugins: [],
};
