/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          50: '#F5F8F6',
          100: '#E6EFE9',
          200: '#CDE0D5',
          300: '#A3C6B4',
          400: '#75A78F',
          500: '#48876A',
          600: '#346A50',
          700: '#28543E',
          800: '#204231',
          900: '#173124',
          950: '#0E1E16',
        }
      }
    },
  },
  plugins: [],
}
