import Slider from './components/Slider';
import { select, selectAll } from './utils/dom';
import { Autoplay, EffectFade } from 'swiper';

const categoriesSections = selectAll('.js-category-section');

categoriesSections.forEach((section) => {
  const swiperContainer = select('.swiper', section);

  if (swiperContainer) {
    const swiperNextEl = select('.js-featured-slider-next', swiperContainer);
    const swiperPrevEl = select('.js-featured-slider-prev', swiperContainer);
    const swiperOptions = {
      disabledClass: 'opacity-50 cursor-default',
      lockClass: 'hidden',
      autoplay: {
        delay: 3000,
      },
      speed: 400,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    };

    new Slider({
      container: swiperContainer,
      prevEl: swiperPrevEl,
      nextEl: swiperNextEl,
      options: swiperOptions,
      modules: [Autoplay, EffectFade],
    });
  }
});
