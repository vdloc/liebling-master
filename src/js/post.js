import fitvids from 'fitvids';
import { isMobile } from './utils/helpers';
import { onFullLoad, onReady } from './utils/dom';
import ProgressCircle from './components/ProgressCircle';
import PasswordButton from './components/PasswordButton';
import Gallery from './components/Gallery';
import ScrollTopButton from './components/ScrollTopButton';
import RecommendedSlider from './components/RecommendSlider';

function adjustShare(timeout) {
  const $aosWrapper = $('.js-aos-wrapper');

  if (!isMobile('1023px')) {
    $('body').removeClass('share-menu-displayed');
  } else {
    $('body').addClass('share-menu-displayed');
    setTimeout(() => {
      $aosWrapper.removeAttr('data-aos');
    }, timeout);
  }
}

function onResizing() {
  adjustShare(100);
}

onReady(() => {
  fitvids('.js-post-content');
  adjustShare(1000);
  new PasswordButton();
  new Gallery();
  new ScrollTopButton();
  new RecommendedSlider();

  window.addEventListener('resize', onResizing, { passive: true });
});

onFullLoad(() => {
  const progressCircle = new ProgressCircle();

  progressCircle.init();
});
