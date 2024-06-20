/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#1995ed",
        tertiary: "#32CD32",
        title: "#0b2131",
        bgMain: "#1995ed",
        bgFooter: "#f5f5f5",
      },
      screens: {
        'mobileLG': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        'desktopLG': '1440px'
      },
    },
  },
  plugins: [],
};
