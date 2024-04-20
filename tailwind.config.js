/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'purple': '#BFAFF2',
      'yellow': '#F8D57E',
      'y-light': '#FDF5DF',
      'primarycolor': '#2B2B2B',
      'secondarycolor': '#333333',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'display': ['Poppins']
    },
    extend: {
      width: {
        '1180': '1180px',
        '1080': '1080px',
        '931': '931px',
        '500': '500px',
        '580': '580px'
      },
      height: {
        '600': '600px',
        '446': '446px',
        '170': '170px'
      }
    },
  },
  plugins: [],
}