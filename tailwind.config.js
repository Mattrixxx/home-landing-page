/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'DM serif Display',
      secondary: 'Jost',
    },
    backgroundImage: {
      hero: 'url(../public/assets/images/hero-bg-2.jpg)',
      grid: 'url(../public/assets/images/grid.png)'
    },
    extend: {
      fontSize: {
        '84px': '84px',
      },
      colors: {
        primary: {
          DEFAULT: '#292f36',
          hover: '#343e4a',
        },
        secondary: '#4d5033',
        accect: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '#b88c5d'
        }
      }
    },
  },
  plugins: [],
};
