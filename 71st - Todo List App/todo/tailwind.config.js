/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "matte-black": "#151515", // Custom matte black
        "dark-charcoal": "#201F1F", // Custom dark gray/charcoal
      },
    },
  },
  plugins: [],
};
