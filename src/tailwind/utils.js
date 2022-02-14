module.exports = function ({ addUtilities }) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    },
    '.touch-manipulation': {
      'touch-action': 'manipulation',
    },
    '.aspect-video': {
      'aspect-ratio': '16/9',
    },
    '.transition-fix': {
      '-webkit-transform': 'translateZ(0) scale(0.999, 0.999)',
    },
  });
};
