/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          900: '#4c1d95',
        },
        dark: {
          bg: '#0f172a',       // Slate 900
          surface: '#1e293b',  // Slate 800
          card: '#1e293b',
          border: '#334155',   // Slate 700
          muted: '#94a3b8',
          text: '#f8fafc'
        },
        light: {
          bg: '#f8fafc',       // Slate 50
          surface: '#ffffff',
          card: '#ffffff',
          border: '#e2e8f0',   // Slate 200
          muted: '#64748b',
          text: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
