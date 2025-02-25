// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, html}", // Important: Include your component files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: For form styling
    require('tailwind-scrollbar-hide'), // Hide scrollbar in some browsers
    require('daisyui'),
  ],
}
