const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    ".flowbite-react\\class-list.json"
  ],     
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        secondary: '#1F2937',
        accent: '#0f172a',
        'text-primary': '#FFFFFF',
        'text-secondary': '#9CA3AF',
        'text-accent': '#60A5FA',
        button: '#3B82F6',
        'button-hover': '#2563EB',
        'border-color': '#374151',
        'accent-color': '#7C3AED',
      },
    },
  },
  plugins: [flowbiteReact],
};