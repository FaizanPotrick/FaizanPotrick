/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      keyframes: {
        mouse: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translateY(-20px)" },
        },
        click: {
          "0%": {
            opacity: 1,
            width: "0.5em",
            height: "0.5em",
            margin: "-0.25em",
            borderWidth: "0.5em",
          },
          "100%": {
            opacity: 0.2,
            width: "15em",
            height: "15em",
            margin: "-7.5em",
            borderWidth: "0.03em",
          },
        },
      },
      animation: {
        mouse: "mouse 1.8s infinite ease-in-out reverse",
      },
      animation: {
        click: "click 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
