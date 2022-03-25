import tippy from 'tippy.js';
import {
  addClass,
  removeClass,
  select,
  bindEvent,
  toggleBetweenClasses,
  toggleClass,
} from '../utils/dom';
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

class ThemeController {
  constructor() {
    this.isDarkTheme = null;
    this.storage = storage;
    this.onChangeCallbacks = [];
    this.init();
  }

  init() {
    this.isDarkTheme =
      this.storage.isDarkTheme !== null
        ? this.storage.isDarkTheme
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  get theme() {
    return this.isDarkTheme ? 'dark' : 'light';
  }

  toggle() {
    this.isDarkTheme = !this.isDarkTheme;
    this.storage.isDarkTheme = this.isDarkTheme;
    this.onChangeCallbacks.forEach((callback) => {
      typeof callback === 'function' && callback(this.isDarkTheme);
    });
  }

  registerOnChangeCallback(...callbacks) {
    this.onChangeCallbacks.push(...callbacks);
  }
}

export const themeController = new ThemeController();

export default class ThemeButton {
  static isDarkTheme = false;

  constructor(buttonSelector = '', showingMessages = false) {
    this.controller = themeController;
    this.storage = storage;
    this.tippy = null;
    this.button = select(buttonSelector);
    this.moonIcon = select(iconClass.moon, this.button);
    this.sunnyIcon = select(iconClass.sunny, this.button);
    this.handleClick = this.handleClick.bind(this);
    this.setClass = this.setClass.bind(this);
    this.setIcon = this.setIcon.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.init(showingMessages);
  }

  init(showingMessages) {
    this.controller.registerOnChangeCallback(
      this.setClass,
      this.setIcon,
      showingMessages ? this.setMessage : null
    );

    if (showingMessages) {
      this.tippy = tippy(this.button, {
        content: this.getMessage(),
      });
    }

    this.setMessage();
    this.setClass();
    this.setIcon();

    bindEvent(this.button, 'click', this.handleClick);
  }

  setClass() {
    toggleBetweenClasses(
      document.documentElement,
      this.controller.isDarkTheme,
      { positiveClasses: 'dark', negativeClasses: 'light' }
    );
  }

  getMessage() {
    return themeMessages[this.controller.theme];
  }

  setMessage() {
    this.tippy && this.tippy.setContent(this.getMessage());
  }

  setIcon() {
    toggleClass(this.sunnyIcon, !this.controller.isDarkTheme, iconHiddenClass);
    toggleClass(this.moonIcon, this.controller.isDarkTheme, iconHiddenClass);
  }

  handleClick() {
    this.controller.toggle();
  }
}
