/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      boxShadow: {
        around: "0 0 10px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
