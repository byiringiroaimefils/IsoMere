
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xm': '294px',
      'sm': '400px',
      // // => @media (min-width: 640px) { ... }

      'md': '768px',
      'lg': '1024px',
      // // => @media (min-width: 768px) { ... }

      
      
    }
  },
  plugins: [],
};
