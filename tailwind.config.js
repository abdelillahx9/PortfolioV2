/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#64FFDA", // Accent Color
        "background-light": "#F8F9FA", // Off-White
        "background-dark": "#0A192F", // Dark Navy
        "text-light": "#0A192F", // Dark Navy for text on light bg
        "text-dark": "#CCD6F6", // Light Slate for text on dark bg
        "text-secondary-light": "#8892B0", // Slate Gray for text on light bg
        "text-secondary-dark": "#8892B0", // Slate Gray for text on dark bg
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
}