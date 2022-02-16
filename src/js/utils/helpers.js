import { formatDistanceToNow, format } from 'date-fns';
import vi from 'date-fns/locale/vi';

export function isRTL() {
  const $html = document.querySelector('html');
  return ['ar', 'he', 'fa'].includes($html.getAttribute('lang'));
}

export function isMobile(width = '768px') {
  return window.matchMedia(`(max-width: ${width})`).matches;
}

export function isDarkMode() {
  const darkModeMatcher =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  return darkModeMatcher && darkModeMatcher.matches;
}

export function formatDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString(document.documentElement.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return '';
}

export function getParameterByName(name, url) {
  if (!url) url = window.location.href;

  name = name.replace(/[\[\]]/g, '\\$&');

  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);

  if (!results) return null;

  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export function adjustImageGallery() {
  const images = document.querySelectorAll('.kg-gallery-image img');

  for (var i = 0, len = images.length; i < len; i++) {
    const container = images[i].closest('.kg-gallery-image');
    const width = images[i].attributes.width.value;
    const height = images[i].attributes.height.value;
    const ratio = width / height;
    container.style.flex = `${ratio} 1 0%`;
  }
}

export function managePostImages($) {
  $('.js-post-content')
    .find('img')
    .each(function () {
      if (
        !$(this).closest('figure').hasClass('kg-bookmark-card') &&
        !$(this).parent().is('a')
      ) {
        $(this).addClass('js-zoomable');
      }
    });
}

export function makeImagesZoomable($, mediumZoom) {
  const zoom = mediumZoom('.js-zoomable');

  zoom.on('opened', () => {
    setTimeout(() => {
      const $mediumZoomImages = $('.medium-zoom-image--opened');
      if ($mediumZoomImages.length > 1) {
        $mediumZoomImages.last().hide();
      }
    }, 10);
  });
}

export function replateTemplateContent(template = '', mapping = {}) {
  return Object.entries(mapping).reduce((str, entry) => {
    const [placeholder, value] = entry;

    return str.replaceAll(placeholder, value);
  }, template);
}

export function convertToTimeAgo(time) {
  let timeago = formatDistanceToNow(new Date(time), {
    locale: vi,
  });

  return `${timeago} trước`;
}

export function convertToVietnameseLocale(time) {
  return format(new Date(time), 'dd MMMM yyyy', { locale: vi });
}

export function debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}
