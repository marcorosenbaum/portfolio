/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        lighting: "#00fbd5",
      },
      boxShadow: {
        around: "0 0 10px 10px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        fully: "10rem",
      },
    },
  },
  plugins: [],
};
