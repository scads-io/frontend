/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      screens: {
        'h6': { 'raw': '(min-height: 600px)' },
        'h8': { 'raw': '(min-height: 800px)' },
        'h10': { 'raw': '(min-height: 1024px)' },
        'w1': { 'raw': '(max-width: 500px)' },
      }
    },
  },
  plugins: [],
};

