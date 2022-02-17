import Slider from './components/Slider';
import api from './utils/api';
import {
  addClass,
  bindEvent,
  getAttr,
  onReady,
  removeClass,
  select,
  selectAll,
  toggleClass,
} from './utils/dom';
import { convertToTimeAgo, replateTemplateContent } from './utils/helpers';

const hiddenClass = 'hidden';
class Category {
  constructor() {
    // DOM bindings
    this.postContainer = select('#posts-container');
    this.featuredPostsContainer = select(
      '#featured-posts-container',
      this.postContainer
    );
    this.loadMoreButton = select('#load-more-button');
    this.loader = select('#posts-loader');
    this.nonFeaturedPosts = selectAll('.js-post-card');
    this.postTemplate = select('#post-card-template').innerHTML;
    this.categoryInfo = select('#category-info');
    this.categoryTag = getAttr(this.categoryInfo, 'data-tag');

    // State
    this.isLoading = false;
    this.postsPerEachLoad = 9;
    this.totalNonFeaturedPostsCount = Infinity;
    this.nonFeaturedPostsCount = this.nonFeaturedPosts.length;

    // Events
    this.handleLoadMorePost = this.handleLoadMorePost.bind(this);
    this.init();
  }

  init() {
    this.setupFeaturedPostsSlider();
    this.setupLoadingUI();
    bindEvent(this.loadMoreButton, 'click', this.handleLoadMorePost);
  }

  setupFeaturedPostsSlider() {
    const swiperContainer = select('.swiper', this.featuredPostsContainer);
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
  }

  updateLoadingUI() {
    const isHideLoadMoreButton =
      this.isLoading ||
      this.nonFeaturedPostsCount >= this.totalNonFeaturedPostsCount;

    toggleClass(this.loadMoreButton, isHideLoadMoreButton, hiddenClass);
    toggleClass(this.loader, !this.isLoading, hiddenClass);
  }

  async setupLoadingUI() {
    try {
      const posts = await this.getPosts(1);
      this.totalNonFeaturedPostsCount = posts.meta.pagination.total;
      this.updateLoadingUI();
    } catch (error) {}
  }

  async handleLoadMorePost() {
    this.isLoading = true;
    this.updateLoadingUI();

    const postsLimit = this.nonFeaturedPostsCount + this.postsPerEachLoad;

    try {
      const posts = await this.getPosts(postsLimit);

      // Lưu lại thông tin total post count.
      if (this.totalNonFeaturedPostsCount === Infinity) {
        this.totalNonFeaturedPostsCount = posts.meta.pagination.total;
      }

      // Nếu đã load tất cả post, ẩn nút load more.
      if (this.nonFeaturedPostsCount >= this.totalNonFeaturedPostsCount) {
        addClass(this.loadMoreButton, hiddenClass);
      }

      // Tính số lượng post sẽ được load thêm( do response trả về có cả các post cũ).
      const postsSlice =
        this.totalNonFeaturedPostsCount >= postsLimit
          ? -this.postsPerEachLoad
          : this.nonFeaturedPostsCount - this.totalNonFeaturedPostsCount;
      const newPosts = posts.slice(postsSlice);
      const newPostsHTML = newPosts.reduce(
        (html, post) => html.concat(this.createPostHTML(post)),
        ''
      );

      this.nonFeaturedPostsCount += newPosts.length;
      this.postContainer.insertAdjacentHTML('beforeend', newPostsHTML);
      this.isLoading = false;
      this.updateLoadingUI();
    } catch (error) {
      console.log(error);
    }
  }

  async getPosts(limit) {
    try {
      const posts = await api.getPosts({
        limit,
        include: 'tags',
        fields: 'id, title, url, published_at, feature_image, primary_tag',
        filter: `tag:${this.categoryTag}+featured:false`,
      });

      return posts;
    } catch (error) {
      return null;
    }
  }

  createPostHTML(postData) {
    const { title, url, published_at, feature_image, primary_tag } = postData;
    const mappingConfig = {
      '@url': url,
      '@title': title,
      '@image': feature_image,
      '@tagURL': primary_tag.url,
      '@tagName': primary_tag.name,
      '@time': published_at,
      '@ago': convertToTimeAgo(published_at),
    };

    return replateTemplateContent(this.postTemplate, mappingConfig);
  }
}

onReady(() => {
  new Category();
});
