module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        15: '3.75rem',
      },
      colors: {
        ef: '#efefef',
        almostWhite: 'rgb(250,250,250)',
      },
      backgroundPosition: {
        '0&-130': '0 -130px',
        '-414&-259': '-414px -259px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar'), require('tailwind-scrollbar-hide')],
};
