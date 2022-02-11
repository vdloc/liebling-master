import $ from 'jquery';
import fitvids from 'fitvids';
import shave from 'shave';
import ClipboardJS from 'clipboard';
import Glide, {
  Controls,
  Swipe,
  Breakpoints,
} from '@glidejs/glide/dist/glide.modular.esm';
import { isRTL, isMobile, scrollTop } from './helpers';
import {
  getAttr,
  onFullLoad,
  select,
  selectAll,
  setAttr,
  setText,
} from './utils/dom';
import ProgressCircle from './components/progressCircle';

let $aosWrapper = null;

function adjustShare(timeout) {
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
  // setHeights();
  adjustShare(100);

  setTimeout(() => {
    // setCircleStyles();
    // requestTicking();
  }, 200);
}


function setupImagesGallery() {
  const imageContainerSelector = '.kg-image-card, .kg-gallery-image';
  const imageContainers = selectAll(imageContainerSelector);

  imageContainers.forEach((imageContainer) => {
    const image = select('img', imageContainer);

    if (image) {
      const dataSrc = getAttr(image, 'src');

      setAttr(imageContainer, 'data-src', dataSrc);
      setAttr(image, 'data-src', dataSrc);
    }
  });

  $('.js-post-content')?.lightGallery({
    selector: imageContainerSelector,
    thumbnail: true,
    fullScreen: true,
    share: true,
  });
}

function setupPasswordCopyButton() {
  const copyButtonSelector = '.m-clipboard-button';
  const copyButton = select(copyButtonSelector);
  const passwordHolder = select('#rar-pass');

  setAttr(copyButton, 'data-clipboard-text', window.RAR_PASS);
  setText(passwordHolder, window.RAR_PASS);

  const clipboard = new ClipboardJS(copyButtonSelector);
  clipboard.on('success', function (e) {
    e.trigger.textContent = 'Đã copy';

    setTimeout(() => {
      e.trigger.textContent = 'Copy';
    }, 3000);
  });
}

$(() => {
  $aosWrapper = $('.js-aos-wrapper');
  const $scrollButton = $('.js-scrolltop');
  const $recommendedSlider = $('.js-recommended-slider');

  fitvids('.js-post-content');
  setupPasswordCopyButton();
  adjustShare(1000);
  setupImagesGallery();

  if ($recommendedSlider.length > 0) {
    const recommendedSlider = new Glide('.js-recommended-slider', {
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
          dragThreshold: 120,
        },
        720: {
          type: 'carousel',
          perView: 2,
          swipeThreshold: 80,
          dragThreshold: 120,
        },
        568: {
          type: 'carousel',
          perView: 1,
          swipeThreshold: 80,
          dragThreshold: 120,
        },
      },
    });

    const Length = (Glide, Components, Events) => {
      return {
        mount() {
          Events.emit('length.change', Components.Sizes.length);
        },
      };
    };

    recommendedSlider.on('mount.after', () => {
      shave('.js-article-card-title', 100);
      shave('.js-article-card-title-no-image', 250);
    });

    recommendedSlider.on('length.change', (length) => {
      if (length === 1) {
        recommendedSlider.update({ type: 'slider' });
        $recommendedSlider.find('.js-controls').remove();
      }
    });

    recommendedSlider.mount({ Controls, Swipe, Breakpoints, Length });
  }

  shave('.js-article-card-title', 100);
  shave('.js-article-card-title-no-image', 250);

  $scrollButton.on('click', scrollTop);

  // window.addEventListener('scroll', onScrolling, { passive: true });
  window.addEventListener('resize', onResizing, { passive: true });
});

onFullLoad(() => {
  const progressCircle = new ProgressCircle();

  progressCircle.init();
});
