/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#11181C",
        //"base-primary-disabled": "#617079",
        secondary: "#333F46",
        //"overlay-w-primary": "#FFFFFF",
      },
    },
  },
  plugins: [],
};

export default config;
