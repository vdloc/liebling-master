import { addClass, removeClass, select, bindEvent } from '../utils/dom';
import storage from '../utils/localStorage';

const themeMessages = {
  light: 'Chuyển sang ban đêm',
  dark: 'Chuyển sang ban ngày',
};
const iconHiddenClass = 'hidden';
const iconClass = {
  moon: '.icon-moon',
  sunny: '.icon-sunny',
};

export default class ThemeControl {
  constructor(buttonSelector = '') {
    this.isDarkTheme = null;
    this.message = null;
    this.storage = storage;
    this.button = select(buttonSelector);
    this.moonIcon = select(iconClass.moon, this.button);
    this.sunnyIcon = select(iconClass.sunny, this.button);
    this.handleClick = this.handleClick.bind(this);
    this.init();
  }

  init() {
    this.isDarkTheme =
      this.storage.isDarkTheme !== null
        ? this.storage.isDarkTheme
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setMessage();
    this.setIcon();
    this.setClass();

    bindEvent(this.button, 'click', this.handleClick);
  }

  setMessage() {
    this.message = this.isDarkTheme ? themeMessages.dark : themeMessages.light;
  }

  setClass() {
    if (this.isDarkTheme) {
      addClass(document.documentElement, 'dark');
      removeClass(document.documentElement, 'light');
    } else {
      addClass(document.documentElement, 'light');
      removeClass(document.documentElement, 'dark');
    }
  }

  setStorage() {
    this.storage.isDarkTheme = this.isDarkTheme;
  }

  setIcon() {
    if (this.isDarkTheme) {
      removeClass(this.sunnyIcon, iconHiddenClass);
      addClass(this.moonIcon, iconHiddenClass);
    } else {
      removeClass(this.moonIcon, iconHiddenClass);
      addClass(this.sunnyIcon, iconHiddenClass);
    }
  }

  handleClick() {
    this.isDarkTheme = !this.isDarkTheme;
    this.setMessage();
    this.setClass();
    this.setStorage();
    this.setIcon();
  }
}
