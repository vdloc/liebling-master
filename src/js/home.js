import Slider from './components/Slider';
import { select, selectAll } from './utils/dom';

const categoriesSections = selectAll('.js-category-section');

categoriesSections.forEach((section) => {
  const swiperContainer = select('.swiper', section);
  const swiperNextEl = select('.js-featured-slider-next', swiperContainer);
  const swiperPrevEl = select('.js-featured-slider-prev', swiperContainer);
  const swiperOptions = {
    disabledClass: 'opacity-50 cursor-default',
    lockClass: 'hidden',
  };

  new Slider({
    container: swiperContainer,
    prevEl: swiperPrevEl,
    nextEl: swiperNextEl,
    options: swiperOptions,
  });
});
