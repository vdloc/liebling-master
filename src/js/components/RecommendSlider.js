import Glide, {
  Controls,
  Swipe,
  Breakpoints
} from '@glidejs/glide/dist/glide.modular.esm';
import shave from 'shave';
import { isRTL } from '../utils/helpers';
import { remove, select, selectAll } from '../utils/dom';

const sliderSettings = {
  type: 'slider',
  rewind: false,
  perView: 3,
  swipeThreshold: false,
  dragThreshold: false,
  gap: 0,
  direction: isRTL() ? 'rtl' : 'ltr',
  breakpoints: {
    1023: {
      type: 'carousel',
      perView: 2,
      swipeThreshold: 80,
      dragThreshold: 120
    },
    720: {
      type: 'carousel',
      perView: 2,
      swipeThreshold: 80,
      dragThreshold: 120
    },
    568: {
      type: 'carousel',
      perView: 1,
      swipeThreshold: 80,
      dragThreshold: 120
    }
  }
};

export default class RecommendedSlider {
  constructor() {
    this.selector = '.js-recommended-slider';
    this.container = select(this.selector);
    this.slider = null;
    this.handleChangeLength = this.handleChangeLength.bind(this);
    this.init();
  }

  init() {
    this.slider = new Glide(this.selector, sliderSettings);
    this.slider.on('mount.after', this.handleAfterMount);
    this.slider.on('length.change', this.handleChangeLength);
    this.slider.mount({ Controls, Swipe, Breakpoints, Length: this.Length });
  }

  Length(_, Components, Events) {
    return {
      mount() {
        Events.emit('length.change', Components.Sizes.length);
      }
    };
  }

  handleAfterMount() {
    shave('.js-article-card-title', 100);
    shave('.js-article-card-title-no-image', 250);
  }

  handleChangeLength(length) {
    if (length === 1) {
      this.slider.update({ type: 'slider' });

      const controls = selectAll('.js-controls', this.slider);
      controls.forEach(control => {
        remove(control);
      });
    }
  }
}
