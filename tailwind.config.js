// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      fontSize: {
        '5xl' : '4.5rem',
        '4xl' : '2.6rem',
        '3xl' : '2rem',
        '2xl' : '1.8rem',
        'xl' : '1.5rem',
        'lg': '1.25rem',
        'base': '1.1rem',
        'sm' : '1rem',
        'xs' : '0.8rem',
      },
      maxWidth: {
        'screen-3xl': '1700px',
        'screen-2xl': '1400px',
        'screen-xl': '1150px',
      },
      colors: {
        white: {
          'default': '#F2F7E9',
          '0': '#ffffff', 
        },
        primary: {
          'default': '#F8B00C',
          dark: '#E9A509',
          light: '#FDC408'
        },
        secondary: {
          'default': '#00B879',
        },
        black: {
          'default': '#272D3D',
        },
        red: {
          'default': '#F36336'
        }
      },
      boxShadow: {
        '2xl': '0 30px 60px rgba(0, 0, 0, 0.10)',
      },
    }
  },
};
