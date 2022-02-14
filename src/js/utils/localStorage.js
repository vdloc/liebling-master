const THEME_KEY = 'dark_theme';

const localStorage = {
  get isDarkTheme() {
    const value = window.localStorage.getItem(THEME_KEY);

    return value ? !!Number(value) : null;
  },
  set isDarkTheme(isDarkTheme) {
    window.localStorage.setItem(THEME_KEY, isDarkTheme ? 1 : 0);
  },
  removeTheme() {
    window.localStorage.removeItem(THEME_KEY);
  },
};

export default localStorage;
