import Swiper, { Navigation } from 'swiper';

const navigationClass = {
  disabledClass: 'opacity-50 cursor-default',
  lockClass: 'hidden',
};

export default class Slider {
  constructor({ container, prevEl, nextEl, options, modules = [] }) {
    this.container = container;
    this.options = options;
    this.modules = modules;
    this.prevEl = prevEl;
    this.nextEl = nextEl;
    this.swiper = null;
    this.init();
  }

  init() {
    const options = {
      modules: [Navigation, ...this.modules],
      navigation: {
        ...navigationClass,
        nextEl: this.nextEl,
        prevEl: this.prevEl,
      },
      ...this.options,
    };
    this.swiper = new Swiper(this.container, options);
  }
}
