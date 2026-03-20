/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        prime: {
          50: '#F5F5F0',    // Off-white
          100: '#F2EFED',   // Sand
          200: '#E6E1DC',   // Beige
          500: '#8E8E8E',   // Muted
          900: '#12263A',   // Deep Blue
        },
        brand: {
          blue: '#0A121E',
          sand: '#E3D9C6',
          gold: '#C5A059',
          accent: '#1E3A5F',
          bg: '#FAF9F6'
        }
      },
      fontFamily: {
        serif: ['Prata', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
