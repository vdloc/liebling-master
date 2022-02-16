"use strict";
(self["webpackChunkliebling"] = self["webpackChunkliebling"] || []).push([["/js/app"],{

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PageFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/PageFooter */ "./js/components/PageFooter.js");
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PageHeader */ "./js/components/PageHeader.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/dom */ "./js/utils/dom.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





new _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"]();
new _components_PageFooter__WEBPACK_IMPORTED_MODULE_0__["default"]();
window.$ = (jquery__WEBPACK_IMPORTED_MODULE_4___default());
window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_4___default());
(0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.onReady)(function () {
  aos__WEBPACK_IMPORTED_MODULE_3___default().init();
});

/***/ }),

/***/ "./js/components/MobileMenu.js":
/*!*************************************!*\
  !*** ./js/components/MobileMenu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileMenu)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./js/utils/dom.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./js/components/Slider.js");
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}



var mobileMenuClass = {
  visible: 'z-modal opacity-100 visible'.split(' '),
  invisible: '-z-10 opacity-0 invisible'.split(' ')
};
var categoryMenuClass = {
  visible: 'opacity-100 visible'.split(' '),
  invisible: 'opacity-0 invisible'.split(' ')
};

var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu(subMenuSliderOptions) {
    _classCallCheck(this, MobileMenu);

    this.subMenuSliderOptions = subMenuSliderOptions;
    this.openMobileMenuButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#hamburger-button', this.header);
    this.mobileMenu = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#mobile-menu');
    this.closeMobileMenuButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#close-mobile-menu-button', this.mobileMenu);
    this.navigationTemplateHolder = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectAll)('.js-mobile-navigation-template');
    this.mobileNavigation = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#mobile-navigation', this.mobileMenu);
    this.mobileCategoryMenu = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#mobile-category-menu', this.mobileMenu);
    this.categoryMenuBackButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#mobile-category-menu-back-button', this.mobileCategoryMenu);
    this.categoryMenuHeader = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#mobile-category-menu-header', this.mobileCategoryMenu);
    this.categoryMenuHeaderTemplate = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#mobile-category-menu-header-template').innerHTML;
    this.categorySubmenu = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#mobile-category-submenu', this.mobileCategoryMenu);
    this.categorySubmenuTemplates = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectAll)('.js-submenu-template'); // Bind Events

    this.openMobileMenu = this.openMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.openCategoryMenu = this.openCategoryMenu.bind(this);
    this.closeCategoryMenu = this.closeCategoryMenu.bind(this);
    this.init();
  }

  _createClass(MobileMenu, [{
    key: "init",
    value: function init() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.bindEvent)(this.openMobileMenuButton, 'click', this.openMobileMenu);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.bindEvent)(this.closeMobileMenuButton, 'click', this.closeMobileMenu);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.bindEvent)(this.categoryMenuBackButton, 'click', this.closeCategoryMenu);
      this.showNavigation();
      this.setupPrimaryNavigation();
    }
  }, {
    key: "openMobileMenu",
    value: function openMobileMenu() {
      _utils_dom__WEBPACK_IMPORTED_MODULE_0__.addClass.apply(void 0, [this.mobileMenu].concat(_toConsumableArray(mobileMenuClass.visible)));
      _utils_dom__WEBPACK_IMPORTED_MODULE_0__.removeClass.apply(void 0, [this.mobileMenu].concat(_toConsumableArray(mobileMenuClass.invisible)));
    }
  }, {
    key: "closeMobileMenu",
    value: function closeMobileMenu() {
      _utils_dom__WEBPACK_IMPORTED_MODULE_0__.removeClass.apply(void 0, [this.mobileMenu].concat(_toConsumableArray(mobileMenuClass.visible)));
      _utils_dom__WEBPACK_IMPORTED_MODULE_0__.addClass.apply(void 0, [this.mobileMenu].concat(_toConsumableArray(mobileMenuClass.invisible)));
      this.closeCategoryMenu();
    }
  }, {
    key: "showNavigation",
    value: function showNavigation() {
      var navigationHTML = this.navigationTemplateHolder.reduce(function (html, templateHolder) {
        var template = templateHolder.innerHTML;
        return html.concat(template);
      }, '');
      this.mobileNavigation.insertAdjacentHTML('beforeend', navigationHTML);
    }
  }, {
    key: "openCategoryMenu",
    value: function openCategoryMenu() {
      _utils_dom__WEBPACK_IMPORTED_MODULE_0__.addClass.apply(void 0, [this.mobileCategoryMenu].concat(_toConsumableArray(categoryMenuClass.visible)));
      _utils_dom__WEBPACK_IMPORTED_MODULE_0__.removeClass.apply(void 0, [this.mobileCategoryMenu].concat(_toConsumableArray(categoryMenuClass.invisible)));
    }
  }, {
    key: "closeCategoryMenu",
    value: function closeCategoryMenu() {
      _utils_dom__WEBPACK_IMPORTED_MODULE_0__.removeClass.apply(void 0, [this.mobileCategoryMenu].concat(_toConsumableArray(categoryMenuClass.visible)));
      _utils_dom__WEBPACK_IMPORTED_MODULE_0__.addClass.apply(void 0, [this.mobileCategoryMenu].concat(_toConsumableArray(categoryMenuClass.invisible)));
    }
  }, {
    key: "setupPrimaryNavigation",
    value: function setupPrimaryNavigation() {
      var _this = this;

      var primaryNavigation = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectAll)('.js-mobile-primary-navigation', this.mobileNavigation);
      primaryNavigation.forEach(function (navigation) {
        var slug = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getAttr)(navigation, 'data-slug');
        var label = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getAttr)(navigation, 'data-label');
        var url = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getAttr)(navigation, 'data-url');

        var clickListener = function clickListener() {
          _this.setupCategoryMenu(label, slug, url);

          _this.openCategoryMenu();
        };

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.bindEvent)(navigation, 'click', clickListener);
      });
    }
  }, {
    key: "setupCategoryMenu",
    value: function setupCategoryMenu(label, slug, url) {
      var headerHTML = this.categoryMenuHeaderTemplate.replaceAll('@label', label).replaceAll('@url', url);
      var subMenuTemplate = this.categorySubmenuTemplates.find(function (templateHolder) {
        var templateSlug = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getAttr)(templateHolder, 'data-slug');
        return templateSlug === slug;
      });
      this.categoryMenuHeader.innerHTML = headerHTML;
      this.categorySubmenu.innerHTML = subMenuTemplate.innerHTML;
      new _Slider__WEBPACK_IMPORTED_MODULE_1__["default"]({
        container: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('.swiper', this.categorySubmenu),
        prevEl: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('.js-submenu-swiper-prev', this.categorySubmenu),
        nextEl: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('.js-submenu-swiper-next', this.categorySubmenu),
        options: this.subMenuSliderOptions
      });
    }
  }]);

  return MobileMenu;
}();



/***/ }),

/***/ "./js/components/PageFooter.js":
/*!*************************************!*\
  !*** ./js/components/PageFooter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageFooter)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./js/utils/dom.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}



var PageFooter = /*#__PURE__*/function () {
  function PageFooter() {
    _classCallCheck(this, PageFooter);

    this.primaryNavigation = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#footer-primary-navigation');
    this.secondaryNavigation = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#footer-secondary-navigation');
    this.secondaryNavigationTemplates = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectAll)('.js-footer-secondary-navigation-template');
    this.primaryNavigationTemplates = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectAll)('.js-footer-primary-navigation-template');
    this.scrollTopButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#footer-scroll-top');
    this.init();
  }

  _createClass(PageFooter, [{
    key: "init",
    value: function init() {
      this.setupPrimaryNavigation();
      this.setupSecondaryNavigation();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.bindEvent)(this.scrollTopButton, 'click', _utils_dom__WEBPACK_IMPORTED_MODULE_0__.scrollTop);
    }
  }, {
    key: "setupPrimaryNavigation",
    value: function setupPrimaryNavigation() {
      var navigationHTML = this.primaryNavigationTemplates.reduce(function (html, templateHolder) {
        return html.concat(templateHolder.innerHTML);
      }, '');
      this.primaryNavigation.innerHTML = navigationHTML;
    }
  }, {
    key: "setupSecondaryNavigation",
    value: function setupSecondaryNavigation() {
      var navigationHTML = this.secondaryNavigationTemplates.reduce(function (html, templateHolder) {
        return html.concat(templateHolder.innerHTML);
      }, '');
      this.secondaryNavigation.innerHTML = navigationHTML;
    }
  }]);

  return PageFooter;
}();



/***/ }),

/***/ "./js/components/PageHeader.js":
/*!*************************************!*\
  !*** ./js/components/PageHeader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.chunk.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./js/utils/dom.js");
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ "./js/components/Slider.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var _ThemeToggler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeToggler */ "./js/components/ThemeToggler.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search */ "./js/components/Search.js");
/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MobileMenu */ "./js/components/MobileMenu.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}








var sliderOptions = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }
};
var headerClass = {
  visible: 'translate-y-0',
  invisible: '-translate-y-header-height'
};

var PageHeader = /*#__PURE__*/function () {
  function PageHeader() {
    _classCallCheck(this, PageHeader);

    this.header = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#page-header');
    this.fakeHeader = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#fake-header');
    this.primaryNavigation = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectAll)('.js-primary-navigation', this.header);
    this.init();
  }

  _createClass(PageHeader, [{
    key: "init",
    value: function init() {
      this.setupPrimaryNavigation();
      this.setupSecondaryNavigation();
      this.observeHeader();
      new _ThemeToggler__WEBPACK_IMPORTED_MODULE_3__["default"]('#theme-control');
      new _ThemeToggler__WEBPACK_IMPORTED_MODULE_3__["default"]('#mobile-theme-control');
      new _Search__WEBPACK_IMPORTED_MODULE_4__["default"]();
      new _MobileMenu__WEBPACK_IMPORTED_MODULE_5__["default"]();
    }
  }, {
    key: "setupPrimaryNavigation",
    value: function setupPrimaryNavigation() {
      this.primaryNavigation.forEach(function (navigation) {
        var sliderContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('.swiper', navigation);
        var sliderPrevEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('.js-submenu-swiper-prev', navigation);
        var sliderNextEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('.js-submenu-swiper-next', navigation);

        if (sliderContainer) {
          new _Slider__WEBPACK_IMPORTED_MODULE_1__["default"]({
            container: sliderContainer,
            prevEl: sliderPrevEl,
            nextEl: sliderNextEl,
            options: sliderOptions
          });
        }
      });
    }
  }, {
    key: "setupSecondaryNavigation",
    value: function setupSecondaryNavigation() {
      var template = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#secondary-nav-template');
      var secondaryNavButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('#header-secondary-nav');
      (0,tippy_js__WEBPACK_IMPORTED_MODULE_6__.t)(secondaryNavButton, {
        content: template.innerHTML,
        allowHTML: true,
        interactive: true,
        trigger: 'click'
      });
    }
  }, {
    key: "observeHeader",
    value: function observeHeader() {
      var _this = this;

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.toggleBetweenClasses)(_this.header, entry.isIntersecting, {
            positiveClasses: [headerClass.visible],
            negativeClasses: [headerClass.invisible]
          });
        });
      });
      observer.observe(this.fakeHeader);
    }
  }]);

  return PageHeader;
}();



/***/ }),

/***/ "./js/components/Search.js":
/*!*********************************!*\
  !*** ./js/components/Search.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./js/utils/dom.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api */ "./js/utils/api.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}




var hiddenClass = 'hidden';
var visibleModalClasses = ['z-50', 'opacity-100', 'visible'];
var invisibleModalClasses = ['z-[-50]', 'opacity-0', 'invisible'];
var fuseOptions = {
  shouldSort: true,
  includeScore: true,
  minMatchCharLength: 4,
  threshold: 0.45,
  useExtendedSearch: true,
  includeMatches: true,
  keys: ['title', 'custom_excerpt', 'tags.name']
};

var Search = /*#__PURE__*/function () {
  function Search() {
    _classCallCheck(this, Search); // DOM Elements


    this.modal = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)('#search-modal');
    this.modalBackdrop = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)('#search-backdrop', this.modal);
    this.input = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)('#search-input', this.modal);
    this.inputLabel = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)('#search-input-label', this.modal);
    this.openButtons = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectAll)('#search-button, #search-button-mobile');
    this.closeButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)('#search-close-button', this.modal);
    this.searchIcon = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)('#search-icon', this.modal);
    this.clearSearchIcon = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)('#clear-search-icon', this.modal);
    this.resultsContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)('#search-result-list', this.modal);
    this.resultTemplate = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)('#search-result-template', this.modal).innerHTML;
    this.noResultText = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)('#search-no-result', this.modal);
    this.suggestionContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)('#suggestion-list', this.modal); // State

    this.isOpen = false;
    this.results = [];
    this.fuse = null;
    this.api = _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.inputIcon = this.searchIcon; // Events

    this.handleInput = this.handleInput.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.init();
  }

  _createClass(Search, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.openButtons.forEach(function (button) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.bindEvent)(button, 'click', _this.openModal);
      });
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.bindEvent)(this.closeButton, 'click', this.closeModal);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.bindEvent)(this.modalBackdrop, 'click', this.closeModal);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.bindEvent)(this.input, 'input', this.handleInput);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.bindEvent)(this.inputLabel, 'click', this.clearSearch);
      this.setupFuse();
    }
  }, {
    key: "openModal",
    value: function openModal() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.toggleBetweenClasses)(this.modal, true, {
        positiveClasses: visibleModalClasses,
        negativeClasses: invisibleModalClasses
      });
      this.input.focus();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.bindEvent)(document, 'keyup', this.handleKeyup);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.toggleBetweenClasses)(this.modal, false, {
        positiveClasses: visibleModalClasses,
        negativeClasses: invisibleModalClasses
      });
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.removeEvent)(document, 'keyup', this.handleKeyup);
      this.clearSearch();
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      this.input.value = '';
      this.results = [];
      this.showSuggestionContainer();
      this.showSearchIcon();
    }
  }, {
    key: "showResultsContainer",
    value: function showResultsContainer() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(this.resultsContainer, hiddenClass);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(this.suggestionContainer, hiddenClass);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(this.noResultText, hiddenClass);
    }
  }, {
    key: "showSuggestionContainer",
    value: function showSuggestionContainer() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(this.suggestionContainer, hiddenClass);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(this.resultsContainer, hiddenClass);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(this.noResultText, hiddenClass);
    }
  }, {
    key: "showNoResultText",
    value: function showNoResultText() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(this.noResultText, hiddenClass);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(this.resultsContainer, hiddenClass);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(this.suggestionContainer, hiddenClass);
    }
  }, {
    key: "showSearchIcon",
    value: function showSearchIcon() {
      if (this.inputIcon !== this.searchIcon) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(this.searchIcon, hiddenClass);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(this.clearSearchIcon, hiddenClass);
        this.inputIcon = this.searchIcon;
      }
    }
  }, {
    key: "showClearSearchIcon",
    value: function showClearSearchIcon() {
      if (this.inputIcon !== this.clearSearchIcon) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(this.searchIcon, hiddenClass);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(this.clearSearchIcon, hiddenClass);
        this.inputIcon = this.clearSearchIcon;
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput(event) {
      var value = event.target.value;

      if (value) {
        var trimmedValue = value.trim();
        var searchResults = this.fuse.search(trimmedValue);
        var bestResult = searchResults.filter(function (result) {
          return result.score <= 0.5;
        });
        this.results = bestResult;
        this.showResults();
        this.showClearSearchIcon();
      } else {
        this.showSearchIcon();
        this.showSuggestionContainer();
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(this.noResultText, hiddenClass);
      }
    }
  }, {
    key: "handleKeyup",
    value: function handleKeyup(event) {
      if (event.code === 'Escape') {
        this.closeModal();
      }
    }
  }, {
    key: "showResults",
    value: function showResults() {
      var _this2 = this;

      if (this.results.length) {
        var resultsHTML = this.results.reduce(function (html, result) {
          var item = result.item;
          var url = item.url,
              title = item.title,
              tags = item.tags;

          var resultHTML = _this2.resultTemplate.replace('@url', url).replace('@title', title).replace('@name', tags[0].name);

          return html.concat(resultHTML);
        }, '');
        this.resultsContainer.innerHTML = resultsHTML;
        this.showResultsContainer();
      } else {
        this.showNoResultText();
      }
    }
  }, {
    key: "setupFuse",
    value: function () {
      var _setupFuse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var allPosts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.api.getPosts({
                  limit: 'all',
                  include: 'tags',
                  fields: 'id, title, url, published_at, custom_excerpt'
                });

              case 3:
                allPosts = _context.sent;
                this.fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_3__["default"](allPosts || [], fuseOptions);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log("Can't get posts for search! with error: ".concat(_context.t0.message));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function setupFuse() {
        return _setupFuse.apply(this, arguments);
      }

      return setupFuse;
    }()
  }]);

  return Search;
}();



/***/ }),

/***/ "./js/components/Slider.js":
/*!*********************************!*\
  !*** ./js/components/Slider.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/navigation */ "./node_modules/swiper/modules/navigation/navigation.min.css");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}




var navigationClass = {
  disabledClass: 'opacity-50 cursor-default',
  lockClass: 'hidden'
};

var Slider = /*#__PURE__*/function () {
  function Slider(_ref) {
    var container = _ref.container,
        prevEl = _ref.prevEl,
        nextEl = _ref.nextEl,
        options = _ref.options;

    _classCallCheck(this, Slider);

    this.container = container;
    this.options = options;
    this.prevEl = prevEl;
    this.nextEl = nextEl;
    this.swiper = null;
    this.init();
  }

  _createClass(Slider, [{
    key: "init",
    value: function init() {
      var options = _objectSpread({
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation],
        navigation: _objectSpread(_objectSpread({}, navigationClass), {}, {
          nextEl: this.nextEl,
          prevEl: this.prevEl
        })
      }, this.options);

      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](this.container, options);
    }
  }]);

  return Slider;
}();



/***/ }),

/***/ "./js/components/ThemeToggler.js":
/*!***************************************!*\
  !*** ./js/components/ThemeToggler.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemeControl)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./js/utils/dom.js");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorage */ "./js/utils/localStorage.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}



var themeMessages = {
  light: 'Chuyển sang ban đêm',
  dark: 'Chuyển sang ban ngày'
};
var iconHiddenClass = 'hidden';
var iconClass = {
  moon: '.icon-moon',
  sunny: '.icon-sunny'
};

var ThemeControl = /*#__PURE__*/function () {
  function ThemeControl() {
    var buttonSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, ThemeControl);

    this.isDarkTheme = null;
    this.message = null;
    this.storage = _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.button = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)(buttonSelector);
    this.moonIcon = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)(iconClass.moon, this.button);
    this.sunnyIcon = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)(iconClass.sunny, this.button);
    this.handleClick = this.handleClick.bind(this);
    this.init();
  }

  _createClass(ThemeControl, [{
    key: "init",
    value: function init() {
      this.isDarkTheme = this.storage.isDarkTheme !== null ? this.storage.isDarkTheme : window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setMessage();
      this.setIcon();
      this.setClass();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.bindEvent)(this.button, 'click', this.handleClick);
    }
  }, {
    key: "setMessage",
    value: function setMessage() {
      this.message = this.isDarkTheme ? themeMessages.dark : themeMessages.light;
    }
  }, {
    key: "setClass",
    value: function setClass() {
      if (this.isDarkTheme) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.addClass)(document.documentElement, 'dark');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.removeClass)(document.documentElement, 'light');
      } else {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.addClass)(document.documentElement, 'light');
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.removeClass)(document.documentElement, 'dark');
      }
    }
  }, {
    key: "setStorage",
    value: function setStorage() {
      this.storage.isDarkTheme = this.isDarkTheme;
    }
  }, {
    key: "setIcon",
    value: function setIcon() {
      if (this.isDarkTheme) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.removeClass)(this.sunnyIcon, iconHiddenClass);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.addClass)(this.moonIcon, iconHiddenClass);
      } else {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.removeClass)(this.moonIcon, iconHiddenClass);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.addClass)(this.sunnyIcon, iconHiddenClass);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.isDarkTheme = !this.isDarkTheme;
      this.setMessage();
      this.setClass();
      this.setStorage();
      this.setIcon();
    }
  }]);

  return ThemeControl;
}();



/***/ }),

/***/ "./js/utils/api.js":
/*!*************************!*\
  !*** ./js/utils/api.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var GhostClient = /*#__PURE__*/function () {
  function GhostClient() {
    _classCallCheck(this, GhostClient);

    this.apiKey = ghostSearchApiKey || '';
    this.apiURL = null;
    this.ghostClient = null;

    if (ghostHost) {
      this.apiURL = ghostHost.includes('http') ? ghostHost : "http:".concat(ghostHost);
    }

    this.init();
  }

  _createClass(GhostClient, [{
    key: "init",
    value: function init() {
      if (this.apiKey && this.apiURL) {
        this.ghostClient = new window.GhostContentAPI({
          url: this.apiURL,
          key: this.apiKey,
          version: 'v4'
        });
      } else {
        console.error("Can't initialzize Ghost client with missing api key or url.");
      }
    }
  }, {
    key: "getPosts",
    value: function () {
      var _getPosts = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(params) {
        var posts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.ghostClient.posts.browse(params);

              case 3:
                posts = _context.sent;
                return _context.abrupt("return", posts);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function getPosts(_x) {
        return _getPosts.apply(this, arguments);
      }

      return getPosts;
    }()
  }, {
    key: "getTags",
    value: function () {
      var _getTags = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(params) {
        var tags;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.ghostClient.tags.browse(params);

              case 3:
                tags = _context2.sent;
                return _context2.abrupt("return", tags);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getTags(_x2) {
        return _getTags.apply(this, arguments);
      }

      return getTags;
    }()
  }]);

  return GhostClient;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GhostClient());

/***/ }),

/***/ "./js/utils/dom.js":
/*!*************************!*\
  !*** ./js/utils/dom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "select": () => (/* binding */ select),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "setAttr": () => (/* binding */ setAttr),
/* harmony export */   "getAttr": () => (/* binding */ getAttr),
/* harmony export */   "setText": () => (/* binding */ setText),
/* harmony export */   "onFullLoad": () => (/* binding */ onFullLoad),
/* harmony export */   "onReady": () => (/* binding */ onReady),
/* harmony export */   "getWidth": () => (/* binding */ getWidth),
/* harmony export */   "getParent": () => (/* binding */ getParent),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "bindEvent": () => (/* binding */ bindEvent),
/* harmony export */   "removeEvent": () => (/* binding */ removeEvent),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "toggleBetweenClasses": () => (/* binding */ toggleBetweenClasses),
/* harmony export */   "scrollTop": () => (/* binding */ scrollTop)
/* harmony export */ });
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function select() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return container.querySelector(target);
}
function selectAll() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return _toConsumableArray(container.querySelectorAll(target));
}
function setAttr(elem) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (elem) {
    elem.setAttribute(name, value);
  } else {
    throw new Error("Can't set attribute on \"".concat(elem, "\" element."));
  }
}
function getAttr(elem) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (elem) {
    return elem.getAttribute(name);
  }

  throw new Error("Can't get attribute on \"".concat(elem, "\" element."));
}
function setText(elem) {
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (elem) {
    elem.textContent = text;
  } else {
    throw new Error("Can't set text content on \"".concat(elem, "\" element."));
  }
}
function onFullLoad() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : console.log;
  window.addEventListener('load', callback);
}
function onReady(callback) {
  if (document.readyState != 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}
function getWidth(elem) {
  if (elem) {
    return parseFloat(getComputedStyle(elem, null).width.replace('px', ''));
  } else {
    throw new Error("Can't get width of \"".concat(elem, "\" element."));
  }
}
function getParent(elem) {
  return elem.parentNode;
}
function remove(elem) {
  var parent = getParent(elem);

  if (parent) {
    parent.removeChild(elem);
  }
}
function bindEvent() {
  var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var event = arguments.length > 1 ? arguments[1] : undefined;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  elem.addEventListener(event, callback);
}
function removeEvent() {
  var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var event = arguments.length > 1 ? arguments[1] : undefined;
  var callback = arguments.length > 2 ? arguments[2] : undefined;
  elem.removeEventListener(event, callback);
}
function addClass(elem) {
  var _elem$classList;

  for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classes[_key - 1] = arguments[_key];
  }

  (_elem$classList = elem.classList).add.apply(_elem$classList, classes);
}
function removeClass(elem) {
  var _elem$classList2;

  for (var _len2 = arguments.length, classes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classes[_key2 - 1] = arguments[_key2];
  }

  (_elem$classList2 = elem.classList).remove.apply(_elem$classList2, classes);
}
function toggleClass(elem) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  for (var _len3 = arguments.length, classes = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    classes[_key3 - 2] = arguments[_key3];
  }

  flag ? addClass.apply(void 0, [elem].concat(classes)) : removeClass.apply(void 0, [elem].concat(classes));
}
function toggleBetweenClasses(elem) {
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$positiveClasses = _ref.positiveClasses,
      positiveClasses = _ref$positiveClasses === void 0 ? [] : _ref$positiveClasses,
      _ref$negativeClasses = _ref.negativeClasses,
      negativeClasses = _ref$negativeClasses === void 0 ? [] : _ref$negativeClasses;

  if (flag) {
    addClass.apply(void 0, [elem].concat(_toConsumableArray(positiveClasses)));
    removeClass.apply(void 0, [elem].concat(_toConsumableArray(negativeClasses)));
  } else {
    addClass.apply(void 0, [elem].concat(_toConsumableArray(negativeClasses)));
    removeClass.apply(void 0, [elem].concat(_toConsumableArray(positiveClasses)));
  }
}
function scrollTop() {
  window.scrollTo({
    behavior: 'smooth',
    top: 0
  });
}

/***/ }),

/***/ "./js/utils/localStorage.js":
/*!**********************************!*\
  !*** ./js/utils/localStorage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var THEME_KEY = 'dark_theme';
var localStorage = {
  get isDarkTheme() {
    var value = window.localStorage.getItem(THEME_KEY);
    return value ? !!Number(value) : null;
  },

  set isDarkTheme(isDarkTheme) {
    window.localStorage.setItem(THEME_KEY, isDarkTheme ? 1 : 0);
  },

  removeTheme: function removeTheme() {
    window.localStorage.removeItem(THEME_KEY);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorage);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);