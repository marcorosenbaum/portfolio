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
        around2: "0 0 20px 10px rgb(0, 251, 213, 0.3)",
      },
      boxShadow: {
        section: "0 0 4rem 4rem rgb(31, 36,45,1)",
      },

      borderRadius: {
        fully: "10rem",
      },
      screens: {
        lg: "1045px",
      },
    },
  },
};
