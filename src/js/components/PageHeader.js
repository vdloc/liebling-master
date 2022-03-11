import tippy from 'tippy.js';
import {
  addClass,
  select,
  selectAll,
  toggleBetweenClasses,
} from '../utils/dom';
import Slider from './Slider';
import 'tippy.js/dist/tippy.css';
import ThemeButton from './ThemeButton';
import Search from './Search';
import MobileMenu from './MobileMenu';

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
    992: { slidesPerView: 5, spaceBetween: 30 },
  },
};

const headerClass = {
  visible: 'translate-y-0',
  invisible: '-translate-y-header-height',
};

export default class PageHeader {
  constructor() {
    this.header = select('#page-header');
    this.fakeHeader = select('#fake-header');
    this.primaryNavigation = selectAll('.js-primary-navigation', this.header);
    this.init();
  }

  init() {
    this.setupPrimaryNavigation();
    this.setupSecondaryNavigation();
    this.observeHeader();
    new ThemeButton('#theme-control', true);
    new ThemeButton('#mobile-theme-control');
    new Search();
    new MobileMenu();
  }

  setupPrimaryNavigation() {
    this.primaryNavigation.forEach((navigation) => {
      const subMenu = select('.js-submenu', navigation);
      const sliderContainer = select('.swiper', navigation);
      const sliderPrevEl = select('.js-submenu-swiper-prev', navigation);
      const sliderNextEl = select('.js-submenu-swiper-next', navigation);

      if (sliderContainer) {
        new Slider({
          container: sliderContainer,
          prevEl: sliderPrevEl,
          nextEl: sliderNextEl,
          options: {
            ...sliderOptions,
            on: {
              init: () => {
                addClass(subMenu, 'sm:group-hover:animate-open-sub-menu');
              },
            },
          },
        });
      }
    });
  }

  setupSecondaryNavigation() {
    const template = select('#secondary-nav-template');
    const secondaryNavButton = select('#header-secondary-nav');

    tippy(secondaryNavButton, {
      content: template.innerHTML,
      allowHTML: true,
      interactive: true,
      trigger: 'click',
    });
  }

  observeHeader() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        toggleBetweenClasses(this.header, entry.isIntersecting, {
          positiveClasses: headerClass.visible,
          negativeClasses: headerClass.invisible,
        });
      });
    });

    observer.observe(this.fakeHeader);
  }
}
