/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#011627",
        'dark-gray': "hsl(0, 0%, 55%)",
        'very-dark-gray': "hsl(0, 0%, 41%)",
        'tint': "rgba(0, 0, 0, .4)",
      },
      backgroundImage: {
        'hero-mobile': "url('/src/assets/images/mobile/image-hero.jpg')",
        'hero-desktop': "url('/src/assets/images/desktop/image-hero.jpg')",
        
        'vr-mobile': "url('./src/assets/images/mobile/image-interactive.jpg')",
        'vr-desktop': "url('./src/assets/images/desktop/image-interactive.jpg')",
      },
      fontFamily: {
        'font-josefin': "Josefin Sans",
        'font-alata': "Alata",
      },
      screens: {
        'xs': "550px"
      }
    },
  },
  plugins: [],
}