import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const navigationClass = {
  disabledClass: 'opacity-50 cursor-default',
  lockClass: 'hidden',
};

export default class Slider {
  constructor({ container, prevEl, nextEl, options }) {
    this.container = container;
    this.options = options;
    this.prevEl = prevEl;
    this.nextEl = nextEl;
    this.swiper = null;
    this.init();
  }

  init() {
    const options = {
      modules: [Navigation],
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
