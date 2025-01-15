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
        primary: "#EDEDED",
        dark_primary: "#121212",
        secondary: "#202020",
        tertiary: "#151515",
        title:"#EDEDED",
        subtitle: "#ADADAD",
        border: "#212121",
        bg: "#1995ed",
        text: "#191e54",
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
