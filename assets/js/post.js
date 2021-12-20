(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/post"],{

/***/ "./js/helpers.js":
/*!***********************!*\
  !*** ./js/helpers.js ***!
  \***********************/
/*! exports provided: isRTL, isMobile, isDarkMode, formatDate, getParameterByName, adjustImageGallery, managePostImages, makeImagesZoomable */
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
var isRTL = function isRTL() {
  var $html = document.querySelector('html');
  return ['ar', 'he', 'fa'].includes($html.getAttribute('lang'));
};
var isMobile = function isMobile() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '768px';
  return window.matchMedia("(max-width: ".concat(width, ")")).matches;
};
var isDarkMode = function isDarkMode() {
  var darkModeMatcher = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  return darkModeMatcher && darkModeMatcher.matches;
};
var formatDate = function formatDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString(document.documentElement.lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return '';
};
var getParameterByName = function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp("[?&]".concat(name, "(=([^&#]*)|&|#|$)"));
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
var adjustImageGallery = function adjustImageGallery() {
  var images = document.querySelectorAll('.kg-gallery-image img');

  for (var i = 0, len = images.length; i < len; i++) {
    var container = images[i].closest('.kg-gallery-image');
    var width = images[i].attributes.width.value;
    var height = images[i].attributes.height.value;
    var ratio = width / height;
    container.style.flex = "".concat(ratio, " 1 0%");
  }
};
var managePostImages = function managePostImages($) {
  $('.js-post-content').find('img').each(function () {
    if (!$(this).closest('figure').hasClass('kg-bookmark-card') && !$(this).parent().is('a')) {
      $(this).addClass('js-zoomable');
    }
  });
};
var makeImagesZoomable = function makeImagesZoomable($, mediumZoom) {
  var zoom = mediumZoom('.js-zoomable');
  zoom.on('opened', function () {
    setTimeout(function () {
      var $mediumZoomImages = $('.medium-zoom-image--opened');

      if ($mediumZoomImages.length > 1) {
        $mediumZoomImages.last().hide();
      }
    }, 10);
  });
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! medium-zoom */ "./node_modules/medium-zoom/dist/medium-zoom.esm.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fitvids */ "./node_modules/fitvids/index.js");
/* harmony import */ var fitvids__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fitvids__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shave */ "./node_modules/shave/dist/shave.es.js");
/* harmony import */ var paginationjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! paginationjs */ "./node_modules/paginationjs/dist/pagination.js");
/* harmony import */ var paginationjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(paginationjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @glidejs/glide/dist/glide.modular.esm */ "./node_modules/@glidejs/glide/dist/glide.modular.esm.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");







var $aosWrapper = null;
var $progressCircle = null;
var lastScrollingY = window.pageYOffset;
var lastWindowHeight = 0;
var lastDocumentHeight = 0;
var circumference = 0;
var isTicking = false;

function onScrolling() {
  lastScrollingY = window.pageYOffset;
  requestTicking();
}

function adjustShare(timeout) {
  if (!Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["isMobile"])('1023px')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('share-menu-displayed');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('share-menu-displayed');
    setTimeout(function () {
      $aosWrapper.removeAttr('data-aos');
    }, timeout);
  }
}

function onResizing() {
  setHeights();
  adjustShare(100);
  setTimeout(function () {
    setCircleStyles();
    requestTicking();
  }, 200);
}

function requestTicking() {
  if (!isTicking) {
    requestAnimationFrame(updating);
  }

  isTicking = true;
}

function updating() {
  var progressMax = lastDocumentHeight - lastWindowHeight;
  var percent = Math.ceil(lastScrollingY / progressMax * 100);

  if (percent <= 100) {
    setProgress(percent);
  }

  isTicking = false;
}

function setHeights() {
  lastWindowHeight = window.innerHeight;
  lastDocumentHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height();
}

function setCircleStyles() {
  var svgWidth = $progressCircle.parent().width();
  var radiusCircle = svgWidth / 2;
  var borderWidth = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["isMobile"])() ? 2 : 3;
  $progressCircle.parent().attr('viewBox', "0 0 ".concat(svgWidth, " ").concat(svgWidth));
  $progressCircle.attr('stroke-width', borderWidth);
  $progressCircle.attr('r', radiusCircle - (borderWidth - 1));
  $progressCircle.attr('cx', radiusCircle);
  $progressCircle.attr('cy', radiusCircle);
  circumference = radiusCircle * 2 * Math.PI;
  $progressCircle[0].style.strokeDasharray = "".concat(circumference, " ").concat(circumference);
  $progressCircle[0].style.strokeDashoffset = circumference;
}

function setProgress(percent) {
  if (percent <= 100) {
    var offset = circumference - percent / 100 * circumference;
    $progressCircle[0].style.strokeDashoffset = offset;
  }
}

function prepareProgressCircle() {
  $progressCircle = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-progress');
  setHeights();
  setCircleStyles();
  updating();
  setTimeout(function () {
    $progressCircle.parent().css('opacity', 1);
  }, 300);
}

function generateImages(imgs) {
  var $imagesContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#js-post-images-container');
  var imgsHTML = imgs.map(function (_ref) {
    var url = _ref.url,
        alt = _ref.alt;
    return createImageTemplate(url, alt);
  }).reduce(function (html, template) {
    return html.concat(template);
  }, '');
  $imagesContainer.html(imgsHTML);
  Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["makeImagesZoomable"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, medium_zoom__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

function createImageTemplate(url, alt) {
  var CSS_CLASS = 'st-image js-zoomable';
  return "<img src=\"".concat(url, "\" alt=\"").concat(alt, "\" class=\"").concat(CSS_CLASS, "\"/>");
}

function setupImagesPagination() {
  var postImages = window.postImages;

  if (!postImages || !postImages.length) {
    Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["makeImagesZoomable"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a, medium_zoom__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
    } // afterPageOnClick: scrollTop

  });
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  $aosWrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-aos-wrapper');
  var $scrollButton = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-scrolltop');
  var $recommendedSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-recommended-slider');
  fitvids__WEBPACK_IMPORTED_MODULE_2___default()('.js-post-content');
  Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["adjustImageGallery"])();
  adjustShare(1000);

  if ($recommendedSlider.length > 0) {
    var recommendedSlider = new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_5__["default"]('.js-recommended-slider', {
      type: 'slider',
      rewind: false,
      perView: 3,
      swipeThreshold: false,
      dragThreshold: false,
      gap: 0,
      direction: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["isRTL"])() ? 'rtl' : 'ltr',
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
      Object(shave__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-article-card-title', 100);
      Object(shave__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-article-card-title-no-image', 250);
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
      Controls: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_5__["Controls"],
      Swipe: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_5__["Swipe"],
      Breakpoints: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_5__["Breakpoints"],
      Length: Length
    });
  }

  Object(shave__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-article-card-title', 100);
  Object(shave__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-article-card-title-no-image', 250);
  $scrollButton.on('click', scrollTop);
  Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["managePostImages"])(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);
  setupImagesPagination();
  window.addEventListener('scroll', onScrolling, {
    passive: true
  });
  window.addEventListener('resize', onResizing, {
    passive: true
  });
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
  prepareProgressCircle();
});

/***/ }),

/***/ 3:
/*!**************************!*\
  !*** multi ./js/post.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Me\Documents\liebling-master\liebling-master\src\js\post.js */"./js/post.js");


/***/ })

},[[3,"/js/manifest","/js/vendor"]]]);