/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        lighting: "#00fbd5",
        "dark-gray": "rgb(23, 27, 32, .5)",
      },
      boxShadow: {
        around: "0 0 10px 10px rgba(0, 0, 0, 0.1)",
      },
      boxShadow: {
        around2: "0 0 50px 20px rgb(0, 251, 213, 0.3)",
      },
      borderRadius: {
        fully: "10rem",
      },
    },
  },
  // plugins: [require("tailwindcss-animations")],
};
