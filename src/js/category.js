import { setupFeaturedSlider } from './components/featured-slider';
import $ from 'jquery';
import moment from 'moment-timezone';

const api = new GhostContentAPI({
  url: ghostHost,
  key: ghostSearchApiKey,
  version: 'v4'
});
const postsPerEachLoad = 6;

function getPublicTime(date) {
  const timezone = 'Asia/Ho_Chi_Minh';
  const timeNow = moment().tz(timezone);

  let testDateInput = Date.parse(date);
  let dateMoment;

  if (isNaN(testDateInput) === false) {
    dateMoment = moment.parseZone(date);
  } else {
    dateMoment = timeNow;
  }

  // i18n: Making dates, including month names, translatable to any language.
  // Documentation: http://momentjs.com/docs/#/i18n/
  // Locales: https://github.com/moment/moment/tree/develop/locale
  dateMoment.locale('vi');

  return dateMoment.tz(timezone).from(timeNow);
}

function createPostArticle(post) {
  const { title, url, published_at, feature_image, primary_tag } = post;
  let template = `<article class="m-article-card ${
    feature_image ? '' : 'no-picture'
  } ${categoryTag} post">
      <div class="m-article-card__picture">
        <a href="${url}" class="m-article-card__picture-link" aria-hidden="true" tabindex="-1"></a>
        ${feature_image &&
          `<img class="m-article-card__picture-background" src="${feature_image}" loading="lazy">`}
      </div>
      <div class="m-article-card__info">
        <a href="${primary_tag?.url}" class="m-article-card__tag capitalize">${
    primary_tag?.name
  }</a>
        <a href="${url}" class="m-article-card__info-link" aria-label="${title}">
          <div>
            <h2 class="m-article-card__title js-article-card-title ${
              feature_image ? '' : 'js-article-card-title-no-image'
            }" title="{{title}}">
              ${title}
            </h2>
          </div>
          <div class="m-article-card__timestamp">
            <span>${getPublicTime(published_at)}</span>
          </div>
        </a>
      </div>
</article>`;

  return $(template);
}
$(() => {
  setupFeaturedSlider();

  if ($('.post').length < 4) return;

  const $loadMoreButton = $('#js-load-more-btn');
  const $postsContainer = $('#js-posts-container');
  let totalPosts = null;

  $loadMoreButton.on('click', function() {
    let postsCount = $('.post').length + postsPerEachLoad;
    api.posts
      .browse({
        limit: postsCount,
        include: 'tags',
        fields: 'id, title, url, published_at, feature_image, primary_tag',
        filter: `tag:${categoryTag}+featured:false`
      })
      .then(posts => {
        if (!totalPosts) {
          totalPosts = posts.meta.pagination.total;
        } else if (postsCount >= totalPosts) {
          $loadMoreButton.hide();
        }
        let postsSlice =
          totalPosts >= postsCount
            ? -postsPerEachLoad
            : $('.post').length - totalPosts;

        posts.slice(postsSlice).forEach(post => {
          let $post = createPostArticle(post);
          $postsContainer.append($post);
        });
      });
  });
});
