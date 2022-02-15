const colors = require('./colors');
const boxShadow = require('./boxShadow');
const fontFamily = require('./fontFamily');
const zIndex = require('./zIndex');
const container = require('./components');
const spacing = require('./spacing');
const opacity = require('./opacity');
const lineClamp = require('@tailwindcss/line-clamp');
const utilities = require('./utils');
const animationConfigs = require('./animation');
const screens = require('./screens');
const { animation, keyframes } = animationConfigs;

const preset = {
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors,
      boxShadow,
      fontFamily,
      zIndex,
      spacing,
      borderRadius: {
        half: '50%',
      },
      opacity,
      translate: { 'card-hover': '-5px', 'off-screen': '-100vw' },
      transitionTimingFunction: {
        default: 'cubic-bezier(.02,.01,.47,1)',
        header: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      maxWidth: {
        'viewport-width': '100vw',
      },
      aspectRatio: {
        card: '4/5',
      },
      animation,
      keyframes,
      screens,
    },
  },
  plugins: [container, lineClamp, utilities],
};

module.exports = preset;
