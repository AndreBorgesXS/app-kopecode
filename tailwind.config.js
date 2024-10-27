/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/styles/global.css",
    "./src/components/**/*.{astro,html,js,jsx,ts,tsx}",
    "./src/pages/**/*.{astro,html,js,jsx,ts,tsx}",
    "./src/layouts/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

