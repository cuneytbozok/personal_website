/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        surface: {
          1: '#121821',
          2: '#182230',
        },
        accent: {
          DEFAULT: '#3D8276',
          hover: '#73B7A5',
        },
        text: {
          DEFAULT: '#E7E9EB',
          muted: 'rgba(231,233,235,0.72)',
          dimmer: 'rgba(231,233,235,0.55)',
        },
        border: {
          DEFAULT: 'rgba(231,233,235,0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        '5xl': '64rem',
        '6xl': '72rem',
      },
    },
  },
  plugins: [],
};
