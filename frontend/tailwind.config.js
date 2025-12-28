/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-pink': '#F8C8DC',
        'light-pink': '#FDF2F8',
        'pink-hover': '#F0A8C0',
        'pink-active': '#E880A0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif', 'Arial', 'Helvetica'],
      },
    },
  },
  plugins: [],
};

export default config;
