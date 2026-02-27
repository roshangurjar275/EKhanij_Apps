import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7f4',
          100: '#dceee6',
          200: '#bcddce',
          300: '#8fc4ab',
          400: '#5ea584',
          500: '#3d8a6a',
          600: '#2e6f54',
          700: '#265945',
          800: '#224739',
          900: '#1e3b31',
        },
        accent: {
          amber: '#d97706',
          stone: '#78716c',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
