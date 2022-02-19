"use strict";
(self["webpackChunkliebling"] = self["webpackChunkliebling"] || []).push([["/js/category"],{

/***/ "./js/category.js":
/*!************************!*\
  !*** ./js/category.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Slider */ "./js/components/Slider.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/api */ "./js/utils/api.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "./js/utils/dom.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/helpers */ "./js/utils/helpers.js");


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

var Category = /*#__PURE__*/function () {
  function Category() {
    _classCallCheck(this, Category); // DOM bindings


    this.postContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.select)('#posts-container');
    this.featuredPostsContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.select)('#featured-posts-container', this.postContainer);
    this.loadMoreButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.select)('#load-more-button');
    this.loader = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.select)('#posts-loader');
    this.nonFeaturedPosts = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.selectAll)('.js-post-card');
    this.postTemplate = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.select)('#post-card-template').innerHTML;
    this.categoryInfo = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.select)('#category-info');
    this.categoryTag = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getAttr)(this.categoryInfo, 'data-tag'); // State

    this.isLoading = false;
    this.postsPerEachLoad = 9;
    this.totalNonFeaturedPostsCount = Infinity;
    this.nonFeaturedPostsCount = this.nonFeaturedPosts.length; // Events

    this.handleLoadMorePost = this.handleLoadMorePost.bind(this);
    this.init();
  }

  _createClass(Category, [{
    key: "init",
    value: function init() {
      this.setupFeaturedPostsSlider();
      this.setupLoadingUI();
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.bindEvent)(this.loadMoreButton, 'click', this.handleLoadMorePost);
    }
  }, {
    key: "setupFeaturedPostsSlider",
    value: function setupFeaturedPostsSlider() {
      var swiperContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.select)('.swiper', this.featuredPostsContainer);
      var swiperNextEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.select)('.js-featured-slider-next', swiperContainer);
      var swiperPrevEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.select)('.js-featured-slider-prev', swiperContainer);
      var swiperOptions = {
        disabledClass: 'opacity-50 cursor-default',
        lockClass: 'hidden'
      };
      new _components_Slider__WEBPACK_IMPORTED_MODULE_1__["default"]({
        container: swiperContainer,
        prevEl: swiperPrevEl,
        nextEl: swiperNextEl,
        options: swiperOptions
      });
    }
  }, {
    key: "updateLoadingUI",
    value: function updateLoadingUI() {
      var isHideLoadMoreButton = this.isLoading || this.nonFeaturedPostsCount >= this.totalNonFeaturedPostsCount;
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(this.loadMoreButton, isHideLoadMoreButton, hiddenClass);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(this.loader, !this.isLoading, hiddenClass);
    }
  }, {
    key: "setupLoadingUI",
    value: function () {
      var _setupLoadingUI = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var posts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.getPosts(1);

              case 3:
                posts = _context.sent;
                this.totalNonFeaturedPostsCount = posts.meta.pagination.total;
                this.updateLoadingUI();
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function setupLoadingUI() {
        return _setupLoadingUI.apply(this, arguments);
      }

      return setupLoadingUI;
    }()
  }, {
    key: "handleLoadMorePost",
    value: function () {
      var _handleLoadMorePost = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this = this;

        var postsLimit, posts, postsSlice, newPosts, newPostsHTML;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isLoading = true;
                this.updateLoadingUI();
                postsLimit = this.nonFeaturedPostsCount + this.postsPerEachLoad;
                _context2.prev = 3;
                _context2.next = 6;
                return this.getPosts(postsLimit);

              case 6:
                posts = _context2.sent; // Lưu lại thông tin total post count.

                if (this.totalNonFeaturedPostsCount === Infinity) {
                  this.totalNonFeaturedPostsCount = posts.meta.pagination.total;
                } // Nếu đã load tất cả post, ẩn nút load more.


                if (this.nonFeaturedPostsCount >= this.totalNonFeaturedPostsCount) {
                  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.addClass)(this.loadMoreButton, hiddenClass);
                } // Tính số lượng post sẽ được load thêm( do response trả về có cả các post cũ).


                postsSlice = this.totalNonFeaturedPostsCount >= postsLimit ? -this.postsPerEachLoad : this.nonFeaturedPostsCount - this.totalNonFeaturedPostsCount;
                newPosts = posts.slice(postsSlice);
                newPostsHTML = newPosts.reduce(function (html, post) {
                  return html.concat(_this.createPostHTML(post));
                }, '');
                this.nonFeaturedPostsCount += newPosts.length;
                this.postContainer.insertAdjacentHTML('beforeend', newPostsHTML);
                this.isLoading = false;
                this.updateLoadingUI();
                _context2.next = 21;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](3);
                console.log(_context2.t0);

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 18]]);
      }));

      function handleLoadMorePost() {
        return _handleLoadMorePost.apply(this, arguments);
      }

      return handleLoadMorePost;
    }()
  }, {
    key: "getPosts",
    value: function () {
      var _getPosts = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(limit) {
        var posts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _utils_api__WEBPACK_IMPORTED_MODULE_2__["default"].getPosts({
                  limit: limit,
                  include: 'tags',
                  fields: 'id, title, url, published_at, feature_image, primary_tag',
                  filter: "tag:".concat(this.categoryTag, "+featured:false")
                });

              case 3:
                posts = _context3.sent;
                return _context3.abrupt("return", posts);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", null);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function getPosts(_x) {
        return _getPosts.apply(this, arguments);
      }

      return getPosts;
    }()
  }, {
    key: "createPostHTML",
    value: function createPostHTML(postData) {
      var title = postData.title,
          url = postData.url,
          published_at = postData.published_at,
          feature_image = postData.feature_image,
          primary_tag = postData.primary_tag;
      var mappingConfig = {
        '@url': url,
        '@title': title,
        '@image': feature_image,
        '@tagURL': primary_tag.url,
        '@tagName': primary_tag.name,
        '@time': published_at,
        '@ago': (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.convertToTimeAgo)(published_at)
      };
      return (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.replateTemplateContent)(this.postTemplate, mappingConfig);
    }
  }]);

  return Category;
}();

(0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.onReady)(function () {
  new Category();
});

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
    console.log("Can't set ".concat(name, " attribute on \"").concat(elem, "\" element."));
  }
}
function getAttr(elem) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (elem) {
    return elem.getAttribute(name);
  }

  console.log("Can't get attribute on \"".concat(elem, "\" element."));
}
function setText(elem) {
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (elem) {
    elem.textContent = text;
  } else {
    console.log("Can't set text content on \"".concat(elem, "\" element."));
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
    console.log("Can't get width of \"".concat(elem, "\" element."));
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

/***/ "./js/utils/helpers.js":
/*!*****************************!*\
  !*** ./js/utils/helpers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isRTL": () => (/* binding */ isRTL),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isDarkMode": () => (/* binding */ isDarkMode),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "getParameterByName": () => (/* binding */ getParameterByName),
/* harmony export */   "adjustImageGallery": () => (/* binding */ adjustImageGallery),
/* harmony export */   "managePostImages": () => (/* binding */ managePostImages),
/* harmony export */   "makeImagesZoomable": () => (/* binding */ makeImagesZoomable),
/* harmony export */   "replateTemplateContent": () => (/* binding */ replateTemplateContent),
/* harmony export */   "convertToTimeAgo": () => (/* binding */ convertToTimeAgo),
/* harmony export */   "convertToVietnameseLocale": () => (/* binding */ convertToVietnameseLocale),
/* harmony export */   "debounce": () => (/* binding */ debounce)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/locale/vi */ "./node_modules/date-fns/esm/locale/vi/index.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



function isRTL() {
  var $html = document.querySelector('html');
  return ['ar', 'he', 'fa'].includes($html.getAttribute('lang'));
}
function isMobile() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '768px';
  return window.matchMedia("(max-width: ".concat(width, ")")).matches;
}
function isDarkMode() {
  var darkModeMatcher = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  return darkModeMatcher && darkModeMatcher.matches;
}
function formatDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString(document.documentElement.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return '';
}
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp("[?&]".concat(name, "(=([^&#]*)|&|#|$)"));
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function adjustImageGallery() {
  var images = document.querySelectorAll('.kg-gallery-image img');

  for (var i = 0, len = images.length; i < len; i++) {
    var container = images[i].closest('.kg-gallery-image');
    var width = images[i].attributes.width.value;
    var height = images[i].attributes.height.value;
    var ratio = width / height;
    container.style.flex = "".concat(ratio, " 1 0%");
  }
}
function managePostImages($) {
  $('.js-post-content').find('img').each(function () {
    if (!$(this).closest('figure').hasClass('kg-bookmark-card') && !$(this).parent().is('a')) {
      $(this).addClass('js-zoomable');
    }
  });
}
function makeImagesZoomable($, mediumZoom) {
  var zoom = mediumZoom('.js-zoomable');
  zoom.on('opened', function () {
    setTimeout(function () {
      var $mediumZoomImages = $('.medium-zoom-image--opened');

      if ($mediumZoomImages.length > 1) {
        $mediumZoomImages.last().hide();
      }
    }, 10);
  });
}
function replateTemplateContent() {
  var template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var mapping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.entries(mapping).reduce(function (str, entry) {
    var _entry = _slicedToArray(entry, 2),
        placeholder = _entry[0],
        value = _entry[1];

    return str.replaceAll(placeholder, value);
  }, template);
}
function convertToTimeAgo(time) {
  var timeago = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(time), {
    locale: date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
  return "".concat(timeago, " tr\u01B0\u1EDBc");
}
function convertToVietnameseLocale(time) {
  return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(time), 'dd MMMM yyyy', {
    locale: date_fns_locale_vi__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
}
function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./js/category.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);