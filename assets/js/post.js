(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/post"],{

/***/ "./js/components/Gallery.js":
/*!**********************************!*\
  !*** ./js/components/Gallery.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
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
  return Constructor;
}



var Gallery = /*#__PURE__*/function () {
  function Gallery() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.kg-image-card, .kg-gallery-image';

    _classCallCheck(this, Gallery);

    this.selector = selector;
    this.containers = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["selectAll"])(this.selector);
    this.init();
  }

  _createClass(Gallery, [{
    key: "init",
    value: function init() {
      this.containers.forEach(function (imageContainer) {
        var image = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["select"])('img', imageContainer);

        if (image) {
          var dataSrc = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["getAttr"])(image, 'src');
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["setAttr"])(imageContainer, 'data-src', dataSrc);
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["setAttr"])(image, 'data-src', dataSrc);
        }
      });
      $('.js-post-content').lightGallery({
        selector: this.selector,
        thumbnail: true,
        fullScreen: true,
        share: true
      });
    }
  }]);

  return Gallery;
}();



/***/ }),

/***/ "./js/components/PasswordButton.js":
/*!*****************************************!*\
  !*** ./js/components/PasswordButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordButton; });
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./js/utils/dom.js");
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




var PasswordButton = /*#__PURE__*/function () {
  function PasswordButton() {
    _classCallCheck(this, PasswordButton);

    this.selector = '.m-clipboard-button';
    this.holderSelector = '#rar-pass';
    this.password = window.RAR_PASS;
    this.beforeCopyLabel = 'Copy';
    this.afterCopyLabel = 'Đã copy';
    this.btn = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["select"])(this.selector);
    this.holder = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["select"])(this.holderSelector);
    this.clipboard = null;
    this.handleSuccess = this.handleSuccess.bind(this);
    this.init();
  }

  _createClass(PasswordButton, [{
    key: "init",
    value: function init() {
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["setAttr"])(this.btn, 'data-clipboard-text', this.password);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["setText"])(this.holder, this.password);
      this.clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_0___default.a(this.selector);
      this.clipboard.on('success', this.handleSuccess);
    }
  }, {
    key: "handleSuccess",
    value: function handleSuccess(event) {
      var _this = this;

      var trigger = event.trigger;
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["setText"])(trigger, this.afterCopyLabel);
      setTimeout(function () {
        Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["setText"])(trigger, _this.beforeCopyLabel);
      }, 3000);
    }
  }]);

  return PasswordButton;
}();



/***/ }),

/***/ "./js/components/ProgressCircle.js":
/*!*****************************************!*\
  !*** ./js/components/ProgressCircle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressCircle; });
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers */ "./js/utils/helpers.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./js/utils/dom.js");
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

    this.circle = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["select"])(CIRCLE_SELECTOR);
    this.parent = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["getParent"])(this.circle);
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
        _this.parent.style.opacity = 1;
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
        this.circle.style.strokeDashoffset = offset;
      }
    }
  }, {
    key: "setCircleStyles",
    value: function setCircleStyles() {
      var svgWidth = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["getWidth"])(this.parent);
      var radiusCircle = svgWidth / 2;
      var borderWidth = Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__["isMobile"])() ? 2 : 3;
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["setAttr"])(this.parent, 'viewBox', "0 0 ".concat(svgWidth, " ").concat(svgWidth));
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["setAttr"])(this.circle, 'stroke-width', borderWidth);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["setAttr"])(this.circle, 'r', radiusCircle - (borderWidth - 1));
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["setAttr"])(this.circle, 'cx', radiusCircle);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["setAttr"])(this.circle, 'cy', radiusCircle);
      this.circumference = radiusCircle * 2 * Math.PI;
      this.circle.style.strokeDasharray = "".concat(this.circumference, " ").concat(this.circumference);
      this.circle.style.strokeDashoffset = this.circumference;
    }
  }]);

  return ProgressCircle;
}();



/***/ }),

/***/ "./js/components/RecommendSlider.js":
/*!******************************************!*\
  !*** ./js/components/RecommendSlider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecommendedSlider; });
/* harmony import */ var _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide/dist/glide.modular.esm */ "./node_modules/@glidejs/glide/dist/glide.modular.esm.js");
/* harmony import */ var shave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shave */ "./node_modules/shave/dist/shave.es.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helpers */ "./js/utils/helpers.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom */ "./js/utils/dom.js");
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





var sliderSettings = {
  type: 'slider',
  rewind: false,
  perView: 3,
  swipeThreshold: false,
  dragThreshold: false,
  gap: 0,
  direction: Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["isRTL"])() ? 'rtl' : 'ltr',
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
};

var RecommendedSlider = /*#__PURE__*/function () {
  function RecommendedSlider() {
    _classCallCheck(this, RecommendedSlider);

    this.selector = '.js-recommended-slider';
    this.container = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["select"])(this.selector);
    this.slider = null;
    this.handleChangeLength = this.handleChangeLength.bind(this);
    this.init();
  }

  _createClass(RecommendedSlider, [{
    key: "init",
    value: function init() {
      this.slider = new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__["default"](this.selector, sliderSettings);
      this.slider.on('mount.after', this.handleAfterMount);
      this.slider.on('length.change', this.handleChangeLength);
      this.slider.mount({
        Controls: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__["Controls"],
        Swipe: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__["Swipe"],
        Breakpoints: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"],
        Length: this.Length
      });
    }
  }, {
    key: "Length",
    value: function Length(_, Components, Events) {
      return {
        mount: function mount() {
          Events.emit('length.change', Components.Sizes.length);
        }
      };
    }
  }, {
    key: "handleAfterMount",
    value: function handleAfterMount() {
      Object(shave__WEBPACK_IMPORTED_MODULE_1__["default"])('.js-article-card-title', 100);
      Object(shave__WEBPACK_IMPORTED_MODULE_1__["default"])('.js-article-card-title-no-image', 250);
    }
  }, {
    key: "handleChangeLength",
    value: function handleChangeLength(length) {
      if (length === 1) {
        this.slider.update({
          type: 'slider'
        });
        var controls = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["selectAll"])('.js-controls', this.slider);
        controls.forEach(function (control) {
          Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["remove"])(control);
        });
      }
    }
  }]);

  return RecommendedSlider;
}();



/***/ }),

/***/ "./js/components/ScrollTopButton.js":
/*!******************************************!*\
  !*** ./js/components/ScrollTopButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollTopButton; });
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers */ "./js/utils/helpers.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./js/utils/dom.js");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}




var ScrollTopButton = function ScrollTopButton() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.js-scrolltop';

  _classCallCheck(this, ScrollTopButton);

  this.button = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["select"])(selector);
  this.button.addEventListener('click', _utils_helpers__WEBPACK_IMPORTED_MODULE_0__["scrollTop"]);
};



/***/ }),

/***/ "./js/post.js":
/*!********************!*\
  !*** ./js/post.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fitvids */ "./node_modules/fitvids/index.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fitvids__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/helpers */ "./js/utils/helpers.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/dom */ "./js/utils/dom.js");
/* harmony import */ var _components_ProgressCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ProgressCircle */ "./js/components/ProgressCircle.js");
/* harmony import */ var _components_PasswordButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PasswordButton */ "./js/components/PasswordButton.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Gallery */ "./js/components/Gallery.js");
/* harmony import */ var _components_ScrollTopButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ScrollTopButton */ "./js/components/ScrollTopButton.js");
/* harmony import */ var _components_RecommendSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/RecommendSlider */ "./js/components/RecommendSlider.js");









function adjustShare(timeout) {
  var $aosWrapper = $('.js-aos-wrapper');

  if (!Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_1__["isMobile"])('1023px')) {
    $('body').removeClass('share-menu-displayed');
  } else {
    $('body').addClass('share-menu-displayed');
    setTimeout(function () {
      $aosWrapper.removeAttr('data-aos');
    }, timeout);
  }
}

function onResizing() {
  adjustShare(100);
}

Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["onReady"])(function () {
  fitvids__WEBPACK_IMPORTED_MODULE_0___default()('.js-post-content');
  adjustShare(1000);
  new _components_PasswordButton__WEBPACK_IMPORTED_MODULE_4__["default"]();
  new _components_Gallery__WEBPACK_IMPORTED_MODULE_5__["default"]();
  new _components_ScrollTopButton__WEBPACK_IMPORTED_MODULE_6__["default"]();
  new _components_RecommendSlider__WEBPACK_IMPORTED_MODULE_7__["default"]();
  window.addEventListener('resize', onResizing, {
    passive: true
  });
});
Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__["onFullLoad"])(function () {
  var progressCircle = new _components_ProgressCircle__WEBPACK_IMPORTED_MODULE_3__["default"]();
  progressCircle.init();
});

/***/ }),

/***/ 3:
/*!**************************!*\
  !*** multi ./js/post.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/js/post.js */"./js/post.js");


/***/ })

},[[3,"/js/manifest","/js/vendor"]]]);