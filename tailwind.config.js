/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
       extend: {
      colors: {
        primaryBlue: "#2E58FF",
        primarySky: "#049CFC",
        primaryPurple: "#9B5DE5",
        primaryOrange: "#FFA000",
        primaryBlack:"#1A1A1A",
        primaryGray:"#888888",
        primaryRed:"#FC3639",
        primaryGreen:"#30BA99",
        backgroundWhite:"#F5F5F5",
      },
      boxShadow: {
        'custom': '0 0 0 2px #111111',
      },
    },
  },
  plugins: [],
}


