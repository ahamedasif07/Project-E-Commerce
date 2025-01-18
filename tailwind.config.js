/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'grid-sm': '480px', // Small grid breakpoint
        'grid-md': '768px', // Medium grid breakpoint
        'grid-lg': '1024px', // Large grid breakpoint
        'grid-xl': '1280px', // Extra-large grid breakpoint
      },
    },
  },
  plugins: [],
}
