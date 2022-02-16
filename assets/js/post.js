"use strict";
(self["webpackChunkliebling"] = self["webpackChunkliebling"] || []).push([["/js/post"],{

/***/ "./js/components/Gallery.js":
/*!**********************************!*\
  !*** ./js/components/Gallery.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gallery)
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



var Gallery = /*#__PURE__*/function () {
  function Gallery() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.kg-image-card, .kg-gallery-image';

    _classCallCheck(this, Gallery);

    this.selector = selector;
    this.containers = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.selectAll)(this.selector);
    this.init();
  }

  _createClass(Gallery, [{
    key: "init",
    value: function init() {
      this.containers.forEach(function (imageContainer) {
        var image = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)('img', imageContainer);

        if (image) {
          var dataSrc = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getAttr)(image, 'src');
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.setAttr)(imageContainer, 'data-src', dataSrc);
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.setAttr)(image, 'data-src', dataSrc);
        }
      });
      $('#post-content').lightGallery({
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PasswordButton)
/* harmony export */ });
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
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
    this.btn = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)(this.selector);
    this.holder = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)(this.holderSelector);
    this.clipboard = null;
    this.handleSuccess = this.handleSuccess.bind(this);
    this.init();
  }

  _createClass(PasswordButton, [{
    key: "init",
    value: function init() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.setAttr)(this.btn, 'data-clipboard-text', this.password);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.setText)(this.holder, this.password);
      this.clipboard = new (clipboard__WEBPACK_IMPORTED_MODULE_0___default())(this.selector);
      this.clipboard.on('success', this.handleSuccess);
    }
  }, {
    key: "handleSuccess",
    value: function handleSuccess(event) {
      var _this = this;

      var trigger = event.trigger;
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.setText)(trigger, this.afterCopyLabel);
      setTimeout(function () {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.setText)(trigger, _this.beforeCopyLabel);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProgressCircle)
/* harmony export */ });
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
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}



var CIRCLE_SELECTOR = '#progress-circle';

var ProgressCircle = /*#__PURE__*/function () {
  function ProgressCircle() {
    _classCallCheck(this, ProgressCircle);

    this.circle = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)(CIRCLE_SELECTOR);
    this.svg = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getParent)(this.circle);
    this.lastScrollingY = window.scrollY;
    this.lastWindowHeight = 0;
    this.lastDocumentHeight = 0;
    this.circumference = 0;
    this.isTicking = false;
    this.onScrolling = this.onScrolling.bind(this);
    this.onResizing = this.onResizing.bind(this);
    this.updating = this.updating.bind(this);
    this.init();
  }

  _createClass(ProgressCircle, [{
    key: "init",
    value: function init() {
      this.setHeights();
      this.setCircleStyles();
      this.updating();
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
      var _this = this;

      this.setHeights();
      setTimeout(function () {
        _this.setCircleStyles();

        _this.requestTicking();
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
      var svgWidth = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getWidth)(this.svg);
      var radiusCircle = svgWidth / 2;
      var borderWidth = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__.isMobile)() ? 2 : 3;
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.setAttr)(this.svg, 'viewBox', "0 0 ".concat(svgWidth, " ").concat(svgWidth));
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.setAttr)(this.circle, 'stroke-width', borderWidth);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.setAttr)(this.circle, 'r', radiusCircle - (borderWidth - 1));
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.setAttr)(this.circle, 'cx', radiusCircle);
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.setAttr)(this.circle, 'cy', radiusCircle);
      this.circumference = radiusCircle * 2 * Math.PI;
      this.circle.style.strokeDasharray = "".concat(this.circumference, " ").concat(this.circumference);
      this.circle.style.strokeDashoffset = this.circumference;
    }
  }]);

  return ProgressCircle;
}();



/***/ }),

/***/ "./js/components/ScrollTopButton.js":
/*!******************************************!*\
  !*** ./js/components/ScrollTopButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollTopButton)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./js/utils/dom.js");
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}



var ScrollTopButton = /*#__PURE__*/_createClass(function ScrollTopButton() {
  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _classCallCheck(this, ScrollTopButton);

  this.button = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.select)(selector);
  this.button.addEventListener('click', _utils_dom__WEBPACK_IMPORTED_MODULE_0__.scrollTop);
});



/***/ }),

/***/ "./js/components/SocialButtons.js":
/*!****************************************!*\
  !*** ./js/components/SocialButtons.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocialButtons)
/* harmony export */ });
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.chunk.esm.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom */ "./js/utils/dom.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helpers */ "./js/utils/helpers.js");
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






var SocialButtons = /*#__PURE__*/function () {
  function SocialButtons() {
    _classCallCheck(this, SocialButtons);

    this.buttons = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.selectAll)('.js-social-button');
    this.getLinkButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.select)('#social-link-button');
    this.init();
  }

  _createClass(SocialButtons, [{
    key: "init",
    value: function init() {
      this.buttons.forEach(function (button) {
        var label = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getAttr)(button, 'data-label');
        (0,tippy_js__WEBPACK_IMPORTED_MODULE_3__.t)(button, {
          content: label
        });
      });
      this.setupGetLinkButton();
    }
  }, {
    key: "setupGetLinkButton",
    value: function setupGetLinkButton() {
      var _this = this;

      var clipboard = new (clipboard__WEBPACK_IMPORTED_MODULE_0___default())(this.getLinkButton);
      var buttonLabel = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.getAttr)(this.getLinkButton, 'data-label');
      (0,tippy_js__WEBPACK_IMPORTED_MODULE_3__.t)(this.getLinkButton, {
        content: buttonLabel,
        trigger: 'mouseenter focus click'
      });
      clipboard.on('success', function () {
        _this.getLinkButton._tippy.setContent('Đã sao chép liên kết');

        var restoreLabel = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_2__.debounce)(function () {
          _this.getLinkButton._tippy.setContent(buttonLabel);
        }, 1000);
        restoreLabel();
      });
    }
  }]);

  return SocialButtons;
}();



/***/ }),

/***/ "./js/post.js":
/*!********************!*\
  !*** ./js/post.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fitvids */ "./node_modules/fitvids/index.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fitvids__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/dom */ "./js/utils/dom.js");
/* harmony import */ var _components_ProgressCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ProgressCircle */ "./js/components/ProgressCircle.js");
/* harmony import */ var _components_PasswordButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PasswordButton */ "./js/components/PasswordButton.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Gallery */ "./js/components/Gallery.js");
/* harmony import */ var _components_ScrollTopButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ScrollTopButton */ "./js/components/ScrollTopButton.js");
/* harmony import */ var _components_SocialButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SocialButtons */ "./js/components/SocialButtons.js");







(0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.onReady)(function () {
  fitvids__WEBPACK_IMPORTED_MODULE_0___default()('#post-content');
  new _components_PasswordButton__WEBPACK_IMPORTED_MODULE_3__["default"]();
  new _components_SocialButtons__WEBPACK_IMPORTED_MODULE_6__["default"]();
  new _components_Gallery__WEBPACK_IMPORTED_MODULE_4__["default"]();
  new _components_ProgressCircle__WEBPACK_IMPORTED_MODULE_2__["default"]();
  new _components_ScrollTopButton__WEBPACK_IMPORTED_MODULE_5__["default"]('#progress-button');
});

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
/******/ __webpack_require__.O(0, ["/js/vendor"], () => (__webpack_exec__("./js/post.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);