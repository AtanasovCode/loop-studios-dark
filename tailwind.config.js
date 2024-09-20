/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': "hsl(0, 0%, 55%)",
        'very-dark-gray': "hsl(0, 0%, 41%)",
      },
      backgroundImage: {
        'hero-mobile': "url('/src/assets/images/mobile/image-hero.jpg')",
        'hero-desktop': "url('/src/assets/images/desktop/image-hero.jpg')",
      },
      fontFamily: {
        'font-josefin': "Josefin Sans",
        'font-alata': "Alata",
      },
    },
  },
  plugins: [],
}