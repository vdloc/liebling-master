import $ from 'jquery';
import mediumZoom from 'medium-zoom';
import fitvids from 'fitvids';
import shave from 'shave';
import 'paginationjs';
import Glide, {
  Controls,
  Swipe,
  Breakpoints
} from '@glidejs/glide/dist/glide.modular.esm';
import {
  isRTL,
  isMobile,
  adjustImageGallery,
  managePostImages,
  makeImagesZoomable
} from './helpers';

let $aosWrapper = null;
let $progressCircle = null;
let lastScrollingY = window.pageYOffset;
let lastWindowHeight = 0;
let lastDocumentHeight = 0;
let circumference = 0;
let isTicking = false;

function onScrolling() {
  lastScrollingY = window.pageYOffset;
  requestTicking();
}

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
  setHeights();
  adjustShare(100);

  setTimeout(() => {
    setCircleStyles();
    requestTicking();
  }, 200);
}

function requestTicking() {
  if (!isTicking) {
    requestAnimationFrame(updating);
  }

  isTicking = true;
}

function updating() {
  const progressMax = lastDocumentHeight - lastWindowHeight;
  const percent = Math.ceil((lastScrollingY / progressMax) * 100);

  if (percent <= 100) {
    setProgress(percent);
  }

  isTicking = false;
}

function setHeights() {
  lastWindowHeight = window.innerHeight;
  lastDocumentHeight = $(document).height();
}

function setCircleStyles() {
  const svgWidth = $progressCircle.parent().width();
  const radiusCircle = svgWidth / 2;
  const borderWidth = isMobile() ? 2 : 3;

  $progressCircle.parent().attr('viewBox', `0 0 ${svgWidth} ${svgWidth}`);
  $progressCircle.attr('stroke-width', borderWidth);
  $progressCircle.attr('r', radiusCircle - (borderWidth - 1));
  $progressCircle.attr('cx', radiusCircle);
  $progressCircle.attr('cy', radiusCircle);

  circumference = radiusCircle * 2 * Math.PI;

  $progressCircle[0].style.strokeDasharray = `${circumference} ${circumference}`;
  $progressCircle[0].style.strokeDashoffset = circumference;
}

function setProgress(percent) {
  if (percent <= 100) {
    const offset = circumference - (percent / 100) * circumference;
    $progressCircle[0].style.strokeDashoffset = offset;
  }
}

function prepareProgressCircle() {
  $progressCircle = $('.js-progress');

  setHeights();
  setCircleStyles();
  updating();

  setTimeout(() => {
    $progressCircle.parent().css('opacity', 1);
  }, 300);
}

function generateImages(imgs) {
  const $imagesContainer = $('#js-post-images-container');
  const imgsHTML = imgs
    .map(({ url, alt }) => createImageTemplate(url, alt))
    .reduce((html, template) => html.concat(template), '');

  $imagesContainer.html(imgsHTML);
  makeImagesZoomable($, mediumZoom);
}

function createImageTemplate(url, alt) {
  const CSS_CLASS = 'st-image js-zoomable';
  return `<img src="${url}" alt="${alt}" class="${CSS_CLASS}"/>`;
}

function setupImagesPagination() {
  const postImages = window.postImages;

  if (!postImages || !postImages.length) {
    makeImagesZoomable($, mediumZoom);
    return;
  }

  const $paginationContainer = $('#js-post-pagination-container');
  const paginationIndexes = Array.from(
    { length: postImages.length },
    (_, id) => id + 1
  );

  $paginationContainer.pagination({
    dataSource: paginationIndexes,
    pageSize: 10,
    showPrevious: false,
    showNext: false,
    pageRange: null,
    callback: function(currentIndexes) {
      const imgs = currentIndexes.map(id => postImages[id - 1]);
      generateImages(imgs);
    },
    afterPageOnClick: scrollTop
  });
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$(() => {
  $aosWrapper = $('.js-aos-wrapper');
  const $scrollButton = $('.js-scrolltop');
  const $recommendedSlider = $('.js-recommended-slider');

  fitvids('.js-post-content');

  adjustImageGallery();
  adjustShare(1000);

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
    });

    const Length = (Glide, Components, Events) => {
      return {
        mount() {
          Events.emit('length.change', Components.Sizes.length);
        }
      };
    };

    recommendedSlider.on('mount.after', () => {
      shave('.js-article-card-title', 100);
      shave('.js-article-card-title-no-image', 250);
    });

    recommendedSlider.on('length.change', length => {
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

  managePostImages($);
  setupImagesPagination();

  window.addEventListener('scroll', onScrolling, { passive: true });
  window.addEventListener('resize', onResizing, { passive: true });
});

$(window).on('load', () => {
  prepareProgressCircle();
});
