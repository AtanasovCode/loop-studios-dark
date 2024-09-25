/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': "#fff",
        'text': "#111",
        'dark-gray': "hsl(0, 0%, 55%)",
        'very-dark-gray': "hsl(0, 0%, 41%)",
        'tint': "rgba(0, 0, 0, .4)",
        'tint-light': "rgba(0, 0, 0, .2)",
        'hover-white': "rgba(255, 255, 255, .6)",
      },
      backgroundImage: {
        'hero-mobile': "url('/assets/images/mobile/image-hero.jpg')",
        'hero-desktop': "url('/assets/images/desktop/image-hero.jpg')",

        'vr-mobile': "url('/assets/images/mobile/image-interactive.jpg')",
        'vr-desktop': "url('/assets/images/desktop/image-interactive.jpg')",

        'deep-earth-mobile': "url('/assets/images/mobile/image-deep-earth.jpg')",
        'deep-earth-desktop': "url('/assets/images/desktop/image-deep-earth.jpg')",
        'night-arcade-mobile': "url('/assets/images/mobile/image-night-arcade.jpg')",
        'night-arcade-desktop': "url('/assets/images/desktop/image-night-arcade.jpg')",
        'soccer-team-mobile': "url('/assets/images/mobile/image-soccer-team.jpg')",
        'soccer-team-desktop': "url('/assets/images/desktop/image-soccer-team.jpg')",
        'the-grid-mobile': "url('/assets/images/mobile/image-grid.jpg')",
        'the-grid-desktop': "url('/assets/images/desktop/image-grid.jpg')",
        'from-above-mobile': "url('/assets/images/mobile/image-from-above.jpg')",
        'from-above-desktop': "url('/assets/images/desktop/image-from-above.jpg')",
        'pocket-mobile': "url('/assets/images/mobile/image-pocket-borealis.jpg')",
        'pocket-desktop': "url('/assets/images/desktop/image-pocket-borealis.jpg')",
        'curiosity-mobile': "url('/assets/images/mobile/image-curiosity.jpg')",
        'curiosity-desktop': "url('/assets/images/desktop/image-curiosity.jpg')",
        'fisheye-mobile': "url('/assets/images/mobile/image-fisheye.jpg')",
        'fisheye-desktop': "url('/assets/images/mobile/image-fisheye.jpg')",
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