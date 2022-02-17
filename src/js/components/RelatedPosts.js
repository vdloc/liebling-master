import { select } from '../utils/dom';
import Slider from './Slider';

const sliderOptions = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: { slidesPerView: 3, spaceBetween: 30 },
  },
};

export default class RelatedPosts {
  constructor() {
    this.container = select('#related-posts');
    this.nextEl = select('#related-posts-next');
    this.prevEl = select('#related-posts-prev');
    this.init();
  }

  init() {
    new Slider({
      container: this.container,
      prevEl: this.prevEl,
      nextEl: this.nextEl,
      options: sliderOptions,
    });
  }
}
