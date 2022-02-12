(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/home"],{

/***/ "./js/home.js":
/*!********************!*\
  !*** ./js/home.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Slider */ "./js/components/Slider.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/dom */ "./js/utils/dom.js");


Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["onFullLoad"])(function () {
  var featuredSliders = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["selectAll"])('.js-featured-slider');
  featuredSliders.forEach(function (slider) {
    new _components_Slider__WEBPACK_IMPORTED_MODULE_0__["default"](slider);
  });
});

/***/ }),

/***/ 1:
/*!**************************!*\
  !*** multi ./js/home.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/js/home.js */"./js/home.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);