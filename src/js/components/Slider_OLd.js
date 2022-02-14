import shave from 'shave';
import Glide, {
  Controls,
  Swipe,
  Breakpoints,
} from '@glidejs/glide/dist/glide.modular.esm';
import { isRTL } from '../utils/helpers';
import { remove, selectAll } from '../utils/dom';

export default class Slider {
  constructor(container) {
    this.container = container;
    this.items = selectAll('.js-featured-slide', this.container);
    this.itemsCount = this.items.length;
    this.slider = new Glide(this.container, {
      type: 'slider',
      rewind: false,
      gap: 0,
      swipeThreshold: false,
      dragThreshold: false,
      direction: isRTL() ? 'rtl' : 'ltr',
      breakpoints: {
        768: {
          swipeThreshold: this.itemsCount === 1 ? false : 80,
          dragThreshold: this.itemsCount === 1 ? false : 120,
        },
      },
    });
    this.arrowDisable = this.arrowDisable.bind(this);
    this.init();
  }
  init() {
    if (this.itemsCount === 1) {
      const controls = selectAll(
        '.js-featured-slider-controls',
        this.container
      );

      controls.forEach((control) => {
        remove(control);
      });
    }

    this.slider.on('mount.after', () => {
      shave('.js-featured-article-title', 200);
    });
    this.slider.mount({
      Controls,
      Swipe,
      Breakpoints,
      ArrowDisabler: this.arrowDisable,
    });

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 350);
    shave('.js-featured-article-title', 200);
  }

  arrowDisable(Glide, Components) {
    const controlClasses = {
      controls: 'js-featured-slider-controls',
      backArrow: 'js-featured-slider-previous',
      nextArrow: 'js-featured-slider-next',
    };

    return {
      mount() {
        if (Glide.settings.rewind || this.itemsCount === 1) {
          return;
        }

        Glide.on(['mount.after', 'run'], () => {
          for (let controlItem of Components.Controls.items) {
            if (!controlItem.className.includes(controlClasses.controls)) {
              continue;
            }

            const left = controlItem.querySelector(
              `.${controlClasses.backArrow}`
            );

            if (left) {
              if (Glide.index === 0) {
                left.setAttribute('disabled', '');
              } else {
                left.removeAttribute('disabled');
              }
            }

            const right = controlItem.querySelector(
              `.${controlClasses.nextArrow}`
            );

            if (right) {
              const lastSlideIndex = Glide.settings.bound
                ? Glide.index + (Glide.settings.perView - 1)
                : Glide.index;

              if (lastSlideIndex === Components.Sizes.length - 1) {
                right.setAttribute('disabled', '');
              } else {
                right.removeAttribute('disabled');
              }
            }
          }
        });
      },
    };
  }
}
