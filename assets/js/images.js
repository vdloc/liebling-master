(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/images"],{

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

/***/ "./js/images.js":
/*!**********************!*\
  !*** ./js/images.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! medium-zoom */ "./node_modules/medium-zoom/dist/medium-zoom.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");




function generateImages(imgs) {
  var $imagesContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js-post-images-container');
  var imgsHTML = imgs.map(createImageTemplate).reduce(function (html, template) {
    return html.concat(template);
  }, '');
  unbindImagesOnLoadEvents();
  $imagesContainer.html(imgsHTML);
  bindImagesOnLoadEvents();
  Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["makeImagesZoomable"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, medium_zoom__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

function bindImagesOnLoadEvents() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".st-image").each(function (i) {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    $this.on('load', function () {
      $this.addClass('visible');
    });
  });
}

function unbindImagesOnLoadEvents() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".st-image").each(function (i) {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    $this.off('load');
  });
}

function createImageTemplate() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      url = _ref.url,
      alt = _ref.alt,
      ratio = _ref.ratio;

  var replaceExtension = function replaceExtension(url) {
    return url.replace('jpg', 'webp');
  };

  return "\n  <figure class=\"st-figure\" style=\"aspect-ratio:".concat(ratio, "\">\n    <img src=\"").concat(replaceExtension(url), "\" alt=\"").concat(alt, "\" class=\"st-image js-zoomable\" \n    />\n  </figure>");
}

function setupImagesPagination() {
  var postImages = window.postImages;

  if (!postImages || !postImages.length) {
    Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["makeImagesZoomable"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, medium_zoom__WEBPACK_IMPORTED_MODULE_1__["default"]);
    return;
  }

  var $paginationContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js-post-pagination-container');
  var paginationIndexes = Array.from({
    length: postImages.length
  }, function (_, id) {
    return id + 1;
  });
  $paginationContainer.pagination({
    dataSource: paginationIndexes,
    pageSize: 10,
    showPrevious: false,
    showNext: false,
    pageRange: null,
    callback: function callback(currentIndexes) {
      var imgs = currentIndexes.map(function (id) {
        return postImages[id - 1];
      });
      generateImages(imgs);
    },
    afterPageOnClick: _helpers__WEBPACK_IMPORTED_MODULE_2__["scrollTop"]
  });
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["managePostImages"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
  setupImagesPagination();
});

/***/ }),

/***/ 5:
/*!****************************!*\
  !*** multi ./js/images.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Me\Documents\liebling-master\liebling-master\src\js\images.js */"./js/images.js");


/***/ })

},[[5,"/js/manifest","/js/vendor"]]]);