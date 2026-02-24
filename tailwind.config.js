/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // Yeh line sabse important hai!
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        accent: '#3B82F6',
      },
    },
  },
  plugins: [],
}