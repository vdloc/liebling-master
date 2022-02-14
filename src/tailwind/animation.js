
module.exports = {
  animation: {
    'open-sub-menu': 'open-sub-menu 0.3s both',
    'close-sub-menu': 'close-sub-menu 0.3s both',
  },
  keyframes: {
    'open-sub-menu': {
      '0%': {
        opacity: 0,
        transform: 'translate3d(0, -5%, 0)',
        visibility: 'hidden',
      },
      '100%': {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
        visibility: 'visible',
      },
    },
    'close-sub-menu': {
      '0%': {
        visibility: 'visible',
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      },
      '100%': {
        visibility: 'hidden',
        opacity: 0,
        transform: 'translate3d(0, -2.5%, 0)',
      },
    },
  },
};
