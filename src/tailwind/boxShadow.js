const { opacity } = require('./opacity');

module.exports = {
  'article-shadow-normal': '0 10px 10px rgba(0, 0, 0, 0.08)',
  'article-shadow-hover': '0 4px 60px 0 rgba(0, 0, 0, 0.2)',
  'dark-article-shadow-normal': '0 4px 5px 5px rgba(0,0,0,0.1)',
  'dark-article-shadow-hover': '0 4px 5px 10px rgba(0,0,0,0.1)',
  submenu: `0 3.75rem 3.75rem rgba(0, 0, 0, ${opacity['submenu-shadow']}),0 0 0 transparent`,
  'dark-submenu': `0 3.75rem 3.75rem rgba(0, 0, 0, ${opacity['dark-submenu-shadow']}),0 0 0 transparent`,
  header: '0 0.25rem 0.5rem rgb(0 0 0 / 5%), 0 0 0 transparent',
  'header-dark': '0 -2px 10px rgba(0,0,0,1)',
  'list-dark': '0 -1px 2px rgba(5,5,5,0.8)',
};
