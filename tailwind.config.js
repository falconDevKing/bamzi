/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000033',
        secondary: '#FDD25A',
        darkGray: 'rgba(48, 48, 48, 255)',
        lightPurple: '#d772fb',
        lightBrown: '#ff9cb1',
        bgcolors: '#e9f0ff',
        footerbg: '#303030',
        skyBlue: '#e9f0ff',
        bluelight: '#e9f0ff',
        lightorange: '#fcd25a',
        fadewhite: '#f9f8f8',
        blueshade: '#141738',
        lightgray: '#c0c2c5',
        lightpink: '#eac2bf',
        colorange: '#fed65f',
        lightgrey: '#ececec',
        green: '#3AA837',
        gmail: '#c71610',
        facebook: '#3b5998',
      },
      fontFamily: {
        poppins: 'Poppins',
      },
      backgroundImage: {
        seller: 'url(../assets/seller-bg.png)',
        drawer: 'url(../assets/bg-drawer.png)',
        store: 'url(../assets/bg-seller-store.png)',
        storeHeader: 'url(../assets/bg-store-header.png)',
        shop: 'url(../assets/bg-shop.jpg)',
        shapes: 'url(../assets/shapes.png)',
        exclusion: 'url(../assets/exclusion.png)',
        errorbg: 'url(../assets/Group-11551.png)',
        split: 'linear-gradient(to right, #e5e7eb 50%, white 50%)',
      },
      width: {
        108: '28rem',
        128: '32rem',
      },
      width: {
        108: '28rem',
        128: '32rem',
      },
    },
  },
  plugins: [],
}
