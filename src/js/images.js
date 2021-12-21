import $ from 'jquery';
import mediumZoom from 'medium-zoom';
import { managePostImages, makeImagesZoomable, scrollTop } from './helpers';

function generateImages(imgs) {
  const $imagesContainer = $('#js-post-images-container');
  const imgsHTML = imgs
    .map(createImageTemplate)
    .reduce((html, template) => html.concat(template), '');

  unbindImagesOnLoadEvents();
  $imagesContainer.html(imgsHTML);
  bindImagesOnLoadEvents();
  makeImagesZoomable($, mediumZoom);
}

function bindImagesOnLoadEvents() {
  $(`.st-image`).each(function(i) {
    let $this = $(this);

    $this.on('load', () => {
      $this.addClass('visible');
    });
  });
}

function unbindImagesOnLoadEvents() {
  $(`.st-image`).each(function(i) {
    let $this = $(this);

    $this.off('load');
  });
}

function createImageTemplate({ url, alt, ratio } = {}) {
  const replaceExtension = url => url.replace('jpg', 'webp');

  return `
  <figure class="st-figure" style="aspect-ratio:${ratio}">
    <img src="${replaceExtension(
      url
    )}" alt="${alt}" class="st-image js-zoomable" 
    />
  </figure>`;
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

$(() => {
  managePostImages($);
  setupImagesPagination();
});
