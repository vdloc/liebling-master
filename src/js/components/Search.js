import {
  addClass,
  bindEvent,
  removeClass,
  select,
  toggleBetweenClasses,
} from '../utils/dom';
import GhostClient from '../utils/api';
import Fuse from 'fuse.js';
import tippy from 'tippy.js';

const hiddenClass = 'hidden';
const visibleModalClasses = 'z-50 opacity-100 visible';
const invisibleModalClasses = 'z-[-50] opacity-0 invisible';
const fuseOptions = {
  shouldSort: true,
  includeScore: true,
  minMatchCharLength: 2,
  threshold: 0.45,
  useExtendedSearch: true,
  includeMatches: true,
  keys: ['title', 'custom_excerpt', 'tags.name'],
};

export default class Search {
  constructor() {
    // DOM Elements
    this.modal = select('#search-modal');
    this.modalBackdrop = select('#search-backdrop', this.modal);
    this.input = select('#search-input', this.modal);
    this.inputLabel = select('#search-input-label', this.modal);
    this.openSearchButton = select('#search-button');
    this.openSearchMobileButton = select('#search-button-mobile');
    this.closeButton = select('#search-close-button', this.modal);
    this.searchIcon = select('#search-icon', this.modal);
    this.clearSearchIcon = select('#clear-search-icon', this.modal);
    this.resultsContainer = select('#search-result-list', this.modal);
    this.resultTemplate = select(
      '#search-result-template',
      this.modal
    ).innerHTML;
    this.noResultText = select('#search-no-result', this.modal);
    this.suggestionContainer = select('#suggestion-list', this.modal);

    // State
    this.isOpen = false;
    this.results = [];
    this.fuse = null;
    this.api = GhostClient;
    this.inputIcon = this.searchIcon;

    // Events
    this.handleInput = this.handleInput.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.init();
  }

  init() {
    [this.openSearchButton, this.openSearchMobileButton].forEach((button) => {
      bindEvent(button, 'click', this.openModal);
    });
    tippy(this.openSearchButton, { content: 'Tìm kiếm (Ctrl+Shift+F)' });
    bindEvent(this.closeButton, 'click', this.closeModal);
    bindEvent(this.modalBackdrop, 'click', this.closeModal);
    bindEvent(this.input, 'input', this.handleInput);
    bindEvent(this.inputLabel, 'click', this.clearSearch);
    bindEvent(document, 'keyup', this.handleKeyup);
    this.setupFuse();
  }

  openModal() {
    toggleBetweenClasses(this.modal, true, {
      positiveClasses: visibleModalClasses,
      negativeClasses: invisibleModalClasses,
    });
    this.isOpen = true;
    this.input.focus();
  }

  closeModal() {
    toggleBetweenClasses(this.modal, false, {
      positiveClasses: visibleModalClasses,
      negativeClasses: invisibleModalClasses,
    });
    this.isOpen = false;
    this.clearSearch();
  }

  clearSearch() {
    this.input.value = '';
    this.results = [];
    this.showSuggestionContainer();
    this.showSearchIcon();
  }

  showResultsContainer() {
    removeClass(this.resultsContainer, hiddenClass);
    addClass(this.suggestionContainer, hiddenClass);
    addClass(this.noResultText, hiddenClass);
  }

  showSuggestionContainer() {
    removeClass(this.suggestionContainer, hiddenClass);
    addClass(this.resultsContainer, hiddenClass);
    addClass(this.noResultText, hiddenClass);
  }

  showNoResultText() {
    removeClass(this.noResultText, hiddenClass);
    addClass(this.resultsContainer, hiddenClass);
    addClass(this.suggestionContainer, hiddenClass);
  }

  showSearchIcon() {
    if (this.inputIcon !== this.searchIcon) {
      removeClass(this.searchIcon, hiddenClass);
      addClass(this.clearSearchIcon, hiddenClass);
      this.inputIcon = this.searchIcon;
    }
  }

  showClearSearchIcon() {
    if (this.inputIcon !== this.clearSearchIcon) {
      addClass(this.searchIcon, hiddenClass);
      removeClass(this.clearSearchIcon, hiddenClass);
      this.inputIcon = this.clearSearchIcon;
    }
  }

  handleInput(event) {
    const { value } = event.target;

    if (value) {
      const trimmedValue = value.trim();
      const searchResults = this.fuse.search(trimmedValue);
      const bestResult = searchResults.filter((result) => result.score <= 0.6);

      this.results = bestResult;
      this.showResults();
      this.showClearSearchIcon();
    } else {
      this.showSearchIcon();
      this.showSuggestionContainer();
      addClass(this.noResultText, hiddenClass);
    }
  }

  handleKeyup(event) {
    if (event.code === 'Escape' && this.isOpen) {
      this.closeModal();
    }

    if (
      event.shiftKey &&
      event.ctrlKey &&
      event.code === 'KeyF' &&
      !this.isOpen
    ) {
      this.openModal();
    }
  }

  showResults() {
    if (this.results.length) {
      const resultsHTML = this.results.reduce((html, result) => {
        const { item } = result;
        const { url, title, tags } = item;
        const resultHTML = this.resultTemplate
          .replace('@url', url)
          .replace('@title', title)
          .replace('@name', tags[0].name);

        return html.concat(resultHTML);
      }, '');

      this.resultsContainer.innerHTML = resultsHTML;
      this.showResultsContainer();
    } else {
      this.showNoResultText();
    }
  }

  async setupFuse() {
    try {
      const allPosts = await this.api.getPosts({
        limit: 'all',
        include: 'tags',
        fields: 'id, title, url, published_at, custom_excerpt',
      });

      this.fuse = new Fuse(allPosts || [], fuseOptions);
    } catch (error) {
      console.log(`Can't get posts for search! with error: ${error.message}`);
    }
  }
}
