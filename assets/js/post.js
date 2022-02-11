(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/post"],{

/***/ "./js/components/progressCircle.js":
/*!*****************************************!*\
  !*** ./js/components/progressCircle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressCircle; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./js/helpers.js");
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
  return Constructor;
}


var CIRCLE_SELECTOR = '.js-progress';

var ProgressCircle = /*#__PURE__*/function () {
  function ProgressCircle() {
    _classCallCheck(this, ProgressCircle);

    this.circle = $(CIRCLE_SELECTOR);
    this.lastScrollingY = window.scrollY;
    this.lastWindowHeight = 0;
    this.lastDocumentHeight = 0;
    this.circumference = 0;
    this.isTicking = false;
    this.onScrolling = this.onScrolling.bind(this);
    this.onResizing = this.onResizing.bind(this);
    this.updating = this.updating.bind(this);
  }

  _createClass(ProgressCircle, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.setHeights();
      this.setCircleStyles();
      this.updating();
      setTimeout(function () {
        _this.circle.parent().css('opacity', 1);
      }, 300);
      window.addEventListener('scroll', this.onScrolling, {
        passive: true
      });
      window.addEventListener('resize', this.onResizing, {
        passive: true
      });
    }
  }, {
    key: "onScrolling",
    value: function onScrolling() {
      this.lastScrollingY = window.scrollY;
      this.requestTicking();
    }
  }, {
    key: "onResizing",
    value: function onResizing() {
      var _this2 = this;

      this.setHeights();
      setTimeout(function () {
        _this2.setCircleStyles();

        _this2.requestTicking();
      }, 200);
    }
  }, {
    key: "requestTicking",
    value: function requestTicking() {
      if (!this.isTicking) {
        requestAnimationFrame(this.updating);
      }

      this.isTicking = true;
    }
  }, {
    key: "updating",
    value: function updating() {
      var progressMax = this.lastDocumentHeight - this.lastWindowHeight;
      var percent = Math.ceil(this.lastScrollingY / progressMax * 100);

      if (percent <= 100) {
        this.setProgress(percent);
      }

      this.isTicking = false;
    }
  }, {
    key: "setHeights",
    value: function setHeights() {
      this.lastWindowHeight = window.innerHeight;
      this.lastDocumentHeight = parseFloat(getComputedStyle(document.documentElement, null).height.replace('px', ''));
    }
  }, {
    key: "setProgress",
    value: function setProgress(percent) {
      if (percent <= 100) {
        var offset = this.circumference - percent / 100 * this.circumference;
        this.circle[0].style.strokeDashoffset = offset;
      }
    }
  }, {
    key: "setCircleStyles",
    value: function setCircleStyles() {
      var svgWidth = this.circle.parent().width();
      var radiusCircle = svgWidth / 2;
      var borderWidth = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["isMobile"])() ? 2 : 3;
      this.circle.parent().attr('viewBox', "0 0 ".concat(svgWidth, " ").concat(svgWidth));
      this.circle.attr('stroke-width', borderWidth);
      this.circle.attr('r', radiusCircle - (borderWidth - 1));
      this.circle.attr('cx', radiusCircle);
      this.circle.attr('cy', radiusCircle);
      this.circumference = radiusCircle * 2 * Math.PI;
      this.circle[0].style.strokeDasharray = "".concat(this.circumference, " ").concat(this.circumference);
      this.circle[0].style.strokeDashoffset = this.circumference;
    }
  }]);

  return ProgressCircle;
}();



/***/ }),

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/*! exports provided: isRTL, isMobile, isDarkMode, formatDate, getParameterByName, adjustImageGallery, managePostImages, makeImagesZoomable, scrollTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRTL", function() { return isRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDarkMode", function() { return isDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterByName", function() { return getParameterByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustImageGallery", function() { return adjustImageGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managePostImages", function() { return managePostImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeImagesZoomable", function() { return makeImagesZoomable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return scrollTop; });
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
function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/***/ }),

/***/ "./js/post.js":
/*!********************!*\
  !*** ./js/post.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fitvids */ "./node_modules/fitvids/index.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fitvids__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shave */ "./node_modules/shave/dist/shave.es.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide/dist/glide.modular.esm */ "./node_modules/@glidejs/glide/dist/glide.modular.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/dom */ "./js/utils/dom.js");
/* harmony import */ var _components_progressCircle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/progressCircle */ "./js/components/progressCircle.js");








var $aosWrapper = null;

function adjustShare(timeout) {
  if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isMobile"])('1023px')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('share-menu-displayed');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('share-menu-displayed');
    setTimeout(function () {
      $aosWrapper.removeAttr('data-aos');
    }, timeout);
  }
}

function onResizing() {
  // setHeights();
  adjustShare(100);
  setTimeout(function () {// setCircleStyles();
    // requestTicking();
  }, 200);
}

function setupImagesGallery() {
  var _$;

  var imageContainerSelector = '.kg-image-card, .kg-gallery-image';
  var imageContainers = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["selectAll"])(imageContainerSelector);
  imageContainers.forEach(function (imageContainer) {
    var image = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["select"])('img', imageContainer);

    if (image) {
      var dataSrc = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["getAttr"])(image, 'src');
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["setAttr"])(imageContainer, 'data-src', dataSrc);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["setAttr"])(image, 'data-src', dataSrc);
    }
  });
  (_$ = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-post-content')) === null || _$ === void 0 ? void 0 : _$.lightGallery({
    selector: imageContainerSelector,
    thumbnail: true,
    fullScreen: true,
    share: true
  });
}

function setupPasswordCopyButton() {
  var copyButtonSelector = '.m-clipboard-button';
  var copyButton = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["select"])(copyButtonSelector);
  var passwordHolder = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["select"])('#rar-pass');
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["setAttr"])(copyButton, 'data-clipboard-text', window.RAR_PASS);
  Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["setText"])(passwordHolder, window.RAR_PASS);
  var clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_3___default.a(copyButtonSelector);
  clipboard.on('success', function (e) {
    e.trigger.textContent = 'Đã copy';
    setTimeout(function () {
      e.trigger.textContent = 'Copy';
    }, 3000);
  });
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  $aosWrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-aos-wrapper');
  var $scrollButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-scrolltop');
  var $recommendedSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-recommended-slider');
  fitvids__WEBPACK_IMPORTED_MODULE_1___default()('.js-post-content');
  setupPasswordCopyButton();
  adjustShare(1000);
  setupImagesGallery();

  if ($recommendedSlider.length > 0) {
    var recommendedSlider = new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_4__["default"]('.js-recommended-slider', {
      type: 'slider',
      rewind: false,
      perView: 3,
      swipeThreshold: false,
      dragThreshold: false,
      gap: 0,
      direction: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isRTL"])() ? 'rtl' : 'ltr',
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

    var Length = function Length(Glide, Components, Events) {
      return {
        mount: function mount() {
          Events.emit('length.change', Components.Sizes.length);
        }
      };
    };

    recommendedSlider.on('mount.after', function () {
      Object(shave__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-article-card-title', 100);
      Object(shave__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-article-card-title-no-image', 250);
    });
    recommendedSlider.on('length.change', function (length) {
      if (length === 1) {
        recommendedSlider.update({
          type: 'slider'
        });
        $recommendedSlider.find('.js-controls').remove();
      }
    });
    recommendedSlider.mount({
      Controls: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_4__["Controls"],
      Swipe: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_4__["Swipe"],
      Breakpoints: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_4__["Breakpoints"],
      Length: Length
    });
  }

  Object(shave__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-article-card-title', 100);
  Object(shave__WEBPACK_IMPORTED_MODULE_2__["default"])('.js-article-card-title-no-image', 250);
  $scrollButton.on('click', _helpers__WEBPACK_IMPORTED_MODULE_5__["scrollTop"]); // window.addEventListener('scroll', onScrolling, { passive: true });

  window.addEventListener('resize', onResizing, {
    passive: true
  });
});
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_6__["onFullLoad"])(function () {
  var progressCircle = new _components_progressCircle__WEBPACK_IMPORTED_MODULE_7__["default"]();
  progressCircle.init();
});

/***/ }),

/***/ "./js/utils/dom.js":
/*!*************************!*\
  !*** ./js/utils/dom.js ***!
  \*************************/
/*! exports provided: select, selectAll, setAttr, getAttr, setText, onFullLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttr", function() { return setAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttr", function() { return getAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return setText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFullLoad", function() { return onFullLoad; });
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
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
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
    console.error("Can't set attribute on \"".concat(elem, "\" element."));
  }
}
function getAttr(elem) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (elem) {
    return elem.getAttribute(name);
  } else {
    console.error("Can't get attribute on \"".concat(elem, "\" element."));
  }
}
function setText(elem) {
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (elem) {
    elem.textContent = text;
  } else {
    console.error("Can't set text content on \"".concat(elem, "\" element."));
  }
}
function onFullLoad() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : console.log;
  window.addEventListener('load', callback);
}

/***/ }),

/***/ 4:
/*!**************************!*\
  !*** multi ./js/post.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/js/post.js */"./js/post.js");


/***/ })

},[[4,"/js/manifest","/js/vendor"]]]);