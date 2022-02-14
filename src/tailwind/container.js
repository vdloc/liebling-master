module.exports = function ({ addComponents }) {
  addComponents({
    '.container': {
      maxWidth: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      // '@screen sm': {
      //   maxWidth: '540px',
      // },
      '@screen md': {
        maxWidth: '720px',
      },
      '@screen lg': {
        maxWidth: '960px',
      },
      '@screen xl': {
        maxWidth: '1140px',
      },
      '@screen xxl': {
        maxWidth: '1280px',
      },
    },
  });
};
