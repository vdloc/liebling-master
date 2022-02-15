const colors = require('./colors');

const {
  'button-shadow-normal': buttonShadowNormal,
  'button-shadow-hover': buttonShadowHover,
  'dark-button-shadow-normal': buttonDarkShadowNormal,
  'dark-button-shadow-hover': buttonDarkShadowHover,
  'primary-subtle': primarySubtle,
} = colors;

const containerComponent = {
  '.container': {
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
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
};

const loadMoreButtonComponent = {
  '.button': {
    boxShadow: `0 0.125rem 0.25rem ${buttonShadowNormal}, 0 0 0 transparent`,
    transition: 'all .25s cubic-bezier(.02,.01,.47,1)',
    ':root.dark &': {
      boxShadow: `0 0.125rem 0.25rem ${buttonDarkShadowNormal}, 0 0 0 transparent`,
    },
    '&:hover': {
      boxShadow: `0 0.25rem 0.5rem ${buttonShadowHover}, 0 0 0 transparent`,
      transform: 'translateY(-2px)',
    },
    ':root.dark &:hover': {
      boxShadow: `0 0.25rem 0.5rem ${buttonDarkShadowHover}, 0 0 0 transparent`,
    },
  },
};

const imageComponent = {
  '.responsive-img': {
    boxSizing: 'border-box',
    display: 'block',
    overflow: 'hidden',
    width: 'initial',
    height: 'initial',
    background: 'none',
    opacity: 1,
    border: '0',
    margin: '0',
    padding: '0',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    '& img': {
      position: 'absolute',
      top: '0',
      left: '0',
      bottom: '0',
      right: '0',
      boxSizing: 'border-box',
      padding: '0',
      border: 'none',
      margin: 'auto',
      display: 'block',
      width: '0',
      height: '0',
      minWidth: '100%',
      maxWidth: '100%',
      minHeight: '100%',
      maxHeight: '100%',
      objectFit: 'cover',
    },
  },
};

module.exports = function ({ addComponents }) {
  addComponents(containerComponent);
  addComponents(loadMoreButtonComponent);
  addComponents(imageComponent);
};
