const preset = require('./tailwind');

module.exports = {
  mode: 'jit',
  content: ['../*.hbs', '../partials/**/*.hbs', './js/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  presets: [preset],
};
