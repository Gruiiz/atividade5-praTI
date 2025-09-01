/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1', // Indigo-500
        secondary: '#f59e42', // Orange-400
        accent: '#10b981', // Emerald-500
        background: '#f3f4f6', // Gray-100
        surface: '#fff',
        muted: '#6b7280', // Gray-500
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
    darkMode: 'class',
  },
  plugins: [],
}
