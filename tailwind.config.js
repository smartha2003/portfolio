/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 0.4s ease-in-out 3 forwards running',
        scroll: 'scroll 2.2s cubic-bezier(0.15, 0.41, 0.69, 0.94) infinite',
        slowbounce: 'slowbounce 0.5s ease-out 1 forwards', // Expand once quickly
        spin: 'spin 4s linear infinite', // Duration, timing function, and infinite loop
      },
      colors: {
        'dark-slate-grey': '#2F4F4F', // Custom color for dark slate grey
        'light-pink': '#fbcfe8',
        'light-peach': '#fb7185',
        'gray-black': '#3A3A3A',
        'pink-800': '#d6336c', // Custom color for a dark shade of pink
        'pink-600': '#e53e3e', // Custom color for a lighter shade of pink
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'], // Adding Bebas Neue as a custom font
        'special': ['"Special Elite"', 'cursive'], // Add "Special Elite" as a custom font
        'silkscreen': ['Silkscreen', 'cursive'], // Add Silkscreen font
        'courgette': ["Courgette", 'cursive'],
        'allura': ["Allura", 'cursive'],
      },
      fontSize: {
        'huge': '4rem', // Custom large size
        'massive': '20rem', // Extra massive size for headlines
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%, 75%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.1)' },
        },
        slowbounce: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.2)' }, // Expand quickly
          '100%': { transform: 'scale(1)' }, // Return to normal
        },
        scroll: {
          '0%': { opacity: '0' },
          '10%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(15px)', opacity: '0' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      letterSpacing: {
        'widest-custom': '0.5rem', // Add custom spacing if needed
      },
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)', // Small text shadow
        'md': '2px 2px 4px rgba(0, 0, 0, 0.5)', // Medium text shadow
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.5)', // Large text shadow
      },
      transitionProperty: {
        'transform-color': 'transform, color', // Custom transition for transform and color
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
      });
    },
  ],
}