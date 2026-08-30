/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6b0f1a',   /* Deep wine red */
          light: '#8b1a26',
          dark: '#4d0b13',
        },
        accent: '#c87d10',      /* Candle amber */
        foreground: '#1c1917',
        muted: '#78716c',
        background: '#ffffff',
        surface: '#fafaf9',
        border: '#e7e5e4',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
