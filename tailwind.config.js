/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#ffffff",
        'dark-gray': "hsl(0, 0%, 55%)",
        'very-dark-gray': "hsl(0, 0%, 41%)",
        'tint': "rgba(0, 0, 0, .4)",
        'tint-light': "rgba(0, 0, 0, .2)",
        'hover-white': "rgba(255, 255, 255, .6)",
      },
      backgroundImage: {
        'hero-mobile': "url('/src/assets/images/mobile/image-hero.jpg')",
        'hero-desktop': "url('/src/assets/images/desktop/image-hero.jpg')",
        
        'vr-mobile': "url('./src/assets/images/mobile/image-interactive.jpg')",
        'vr-desktop': "url('./src/assets/images/desktop/image-interactive.jpg')",

        'deep-earth-mobile': "url('./src/assets/images/mobile/image-deep-earth.jpg')",
        'deep-earth-desktop': "url('./src/assets/images/desktop/image-deep-earth.jpg')",
        'night-arcade-mobile': "url('./src/assets/images/mobile/image-night-arcade.jpg')",
        'night-arcade-desktop': "url('./src/assets/images/desktop/image-night-arcade.jpg')",
        'soccer-team-mobile': "url('./src/assets/images/mobile/image-soccer-team.jpg')",
        'soccer-team-desktop': "url('./src/assets/images/desktop/image-soccer-team.jpg')",
        'the-grid-mobile': "url('./src/assets/images/mobile/image-grid.jpg')",
        'the-grid-desktop': "url('./src/assets/images/desktop/image-grid.jpg')",
        'from-above-mobile': "url('./src/assets/images/mobile/image-from-above.jpg')",
        'from-above-desktop': "url('./src/assets/images/desktop/image-from-above.jpg')",
        'pocket-mobile': "url('./src/assets/images/mobile/image-pocket-borealis.jpg')",
        'pocket-desktop': "url('./src/assets/images/desktop/image-pocket-borealis.jpg')",
        'curiosity-mobile': "url('./src/assets/images/mobile/image-curiosity.jpg')",
        'curiosity-desktop': "url('./src/assets/images/desktop/image-curiosity.jpg')",
        'fisheye-mobile': "url('./src/assets/images/mobile/image-fisheye.jpg')",
        'fisheye-desktop': "url('./src/assets/images/mobile/image-fisheye.jpg')",
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