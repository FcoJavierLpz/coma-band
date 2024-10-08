/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent1: 'rgb(var(--color-accent-1) / <alpha-value>)',
        accent2: 'rgb(var(--color-accent-2) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}