/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        passion: ['"Passion One"', "sans-serif"],
        protest: ['"Protest Revolution"', "sans-serif"],
        rowdies: ['"Rowdies"', "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(45deg, #000000 11%, #18c3c3 100%)",
      },
    },
  },
  plugins: [],
};
