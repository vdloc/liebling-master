module.exports = {
  animation: {
    'open-sub-menu': 'open-sub-menu 0.3s both',
    'close-sub-menu': 'close-sub-menu 0.3s both',
    'loader-1': 'loader-1 0.6s infinite',
    'loader-2': 'loader-2 0.6s infinite',
    'loader-3': 'loader-3 0.6s infinite',
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
    'loader-1': {
      '0%': { transform: 'scale(0)' },
      '100%': { transform: 'scale(1)' },
    },
    'loader-2': {
      '0%': { transform: 'translate(0, 0)' },
      '100%': { transform: 'translate(24px, 0)' },
    },
    'loader-3': {
      '0%': { transform: 'scale(1)' },
      '100%': { transform: 'scale(0)' },
    },
  },
};
