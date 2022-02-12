(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! headroom.js */ "./node_modules/headroom.js/dist/headroom.js");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide/dist/glide.modular.esm */ "./node_modules/@glidejs/glide/dist/glide.modular.esm.js");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tippy.js */ "./node_modules/tippy.js/dist/tippy.esm.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shave */ "./node_modules/shave/dist/shave.es.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fuse_js_dist_fuse_basic_esm_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fuse.js/dist/fuse.basic.esm.min.js */ "./node_modules/fuse.js/dist/fuse.basic.esm.min.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module './helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());









jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  if (!(function webpackMissingModule() { var e = new Error("Cannot find module './helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir', 'rtl').addClass('rtl');
  }

  var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
  var $header = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header');
  var $openMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-menu');
  var $closeMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-close-menu');
  var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-menu');
  var $toggleSubmenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-toggle-submenu');
  var $recentSlider = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-recent-slider');
  var $openSecondaryMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-secondary-menu');
  var $openSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-open-search');
  var $closeSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-close-search');
  var $search = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-search');
  var $inputSearch = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-input-search');
  var $searchResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-search-results');
  var $searchNoResults = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-no-results');
  var $toggleDarkMode = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-toggle-darkmode');
  var $closeNotification = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-notification-close');
  var $mainNav = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-main-nav');
  var $mainNavLeft = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-main-nav-left');
  var $newsletterElements = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-newsletter');
  var currentSavedTheme = localStorage.getItem('theme');
  var fuse = null;
  var submenuIsOpen = false;
  var secondaryMenuTippy = null;

  var showSubmenu = function showSubmenu($menuItem) {
    $header.addClass('submenu-is-active');
    var $subMenu = $menuItem.find('.js-submenu');

    if ($subMenu.length) {
      $toggleSubmenu.addClass('active');
      $subMenu.removeClass('closed').addClass('opened');
    }
  };

  var hideSubmenu = function hideSubmenu($menuItem) {
    $header.removeClass('submenu-is-active');
    var $subMenu = $menuItem.find('.js-submenu');

    if ($subMenu.length) {
      $toggleSubmenu.removeClass('active');
      $subMenu.removeClass('opened').addClass('closed');
    }
  };

  var toggleScrollVertical = function toggleScrollVertical() {
    $body.toggleClass('no-scroll-y');
  };

  var tryToRemoveNewsletter = function tryToRemoveNewsletter() {
    if (typeof disableNewsletter !== 'undefined' && disableNewsletter) {
      $newsletterElements.remove();
    }
  };

  var trySearchFeature = function trySearchFeature() {
    if (typeof ghostSearchApiKey !== 'undefined') {
      getAllPosts(ghostHost.includes('http') ? ghostHost : "http:".concat(ghostHost), ghostSearchApiKey);
    } else {
      $openSearch.css('visibility', 'hidden');
      $closeSearch.remove();
      $search.remove();
    }
  };

  var getAllPosts = function getAllPosts(host, key) {
    var api = new GhostContentAPI({
      url: host,
      key: key,
      version: 'v4'
    });
    var allPosts = [];
    var fuseOptions = {
      shouldSort: true,
      ignoreLocation: true,
      findAllMatches: true,
      includeScore: true,
      minMatchCharLength: 2,
      keys: ['title', 'custom_excerpt', 'tags.name']
    };
    api.posts.browse({
      limit: 'all',
      include: 'tags',
      fields: 'id, title, url, published_at, custom_excerpt'
    }).then(function (posts) {
      for (var i = 0, len = posts.length; i < len; i++) {
        allPosts.push(posts[i]);
      }

      fuse = new fuse_js_dist_fuse_basic_esm_min_js__WEBPACK_IMPORTED_MODULE_7__["default"](allPosts, fuseOptions);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var showNotification = function showNotification(typeNotification) {
    var $notification = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-alert[data-notification=\"".concat(typeNotification, "\"]"));
    $notification.addClass('opened');
    setTimeout(function () {
      closeNotification($notification);
    }, 5000);
  };

  var closeNotification = function closeNotification($notification) {
    $notification.removeClass('opened');
    var url = window.location.toString();

    if (url.indexOf('?') > 0) {
      var cleanUrl = url.substring(0, url.indexOf('?'));
      window.history.replaceState({}, document.title, cleanUrl);
    }
  };

  var checkForActionParameter = function checkForActionParameter() {
    var action = 'action';
    var stripe = !(function webpackMissingModule() { var e = new Error("Cannot find module './helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('stripe');

    if (action === 'subscribe') {
      showNotification('subscribe');
    } // if (action === 'signup') {
    //   window.location = `${ghostHost}/signup/?action=checkout`;
    // }


    if (action === 'checkout') {
      showNotification('signup');
    }

    if (action === 'signin') {
      showNotification('signin');
    }

    if (stripe === 'success') {
      showNotification('checkout');
    }
  };

  var toggleDesktopTopbarOverflow = function toggleDesktopTopbarOverflow(disableOverflow) {
    if (!!(function webpackMissingModule() { var e = new Error("Cannot find module './helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()) {
      if (disableOverflow) {
        $mainNav.addClass('toggle-overflow');
        $mainNavLeft.addClass('toggle-overflow');
      } else {
        $mainNav.removeClass('toggle-overflow');
        $mainNavLeft.removeClass('toggle-overflow');
      }
    }
  };

  $openMenu.on('click', function () {
    $header.addClass('mobile-menu-opened');
    $menu.addClass('opened');
    toggleScrollVertical();
  });
  $closeMenu.on('click', function () {
    $header.removeClass('mobile-menu-opened');
    $menu.removeClass('opened');
    toggleScrollVertical();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header .js-nav-item').on('mouseenter', function (e) {
    if (!submenuIsOpen) {
      submenuIsOpen = true;
      showSubmenu(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-header .js-nav-item').on('mouseleave', function () {
    submenuIsOpen = false;
    hideSubmenu(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-footer .js-submenu').remove();
  $openSearch.on('click', function () {
    $search.addClass('opened');
    setTimeout(function () {
      $inputSearch.trigger('focus');
    }, 400);
    toggleScrollVertical();
  });
  $closeSearch.on('click', function () {
    $inputSearch.trigger('blur');
    $search.removeClass('opened');
    toggleScrollVertical();
  });
  $inputSearch.on('keyup', function () {
    if ($inputSearch.val().length > 0 && fuse) {
      var results = fuse.search($inputSearch.val());
      var bestResults = results.filter(function (result) {
        if (result.score <= 0.5) {
          return result;
        }
      });
      var htmlString = '';

      if (bestResults.length > 0) {
        for (var i = 0, len = bestResults.length; i < len; i++) {
          htmlString += "\n          <article class=\"m-result\">            <a href=\"".concat(bestResults[i].item.url, "\" class=\"m-result__link\">              <h3 class=\"m-result__title\">").concat(bestResults[i].item.title, "</h3>              <span class=\"m-result__date\">").concat(!(function webpackMissingModule() { var e = new Error("Cannot find module './helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bestResults[i].item.published_at), "</span>            </a>          </article>");
        }

        $searchNoResults.hide();
        $searchResults.html(htmlString);
        $searchResults.show();
      } else {
        $searchResults.html('');
        $searchResults.hide();
        $searchNoResults.show();
      }
    } else {
      $searchResults.html('');
      $searchResults.hide();
      $searchNoResults.hide();
    }
  });
  $toggleDarkMode.on('change', function () {
    if ($toggleDarkMode.is(':checked')) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
  $toggleDarkMode.on('mouseenter', function () {
    toggleDesktopTopbarOverflow(true);
  });
  $toggleDarkMode.on('mouseleave', function () {
    toggleDesktopTopbarOverflow(false);
  });
  $closeNotification.on('click', function () {
    closeNotification(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent());
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('keyup', function (e) {
    if (e.key === 'Escape' && $search.hasClass('opened')) {
      $closeSearch.trigger('click');
    }
  });

  if (currentSavedTheme) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('data-theme', currentSavedTheme);

    if (currentSavedTheme === 'dark') {
      $toggleDarkMode.attr('checked', true);
    }
  } else {
    if (!(function webpackMissingModule() { var e = new Error("Cannot find module './helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()) {
      $toggleDarkMode.attr('checked', true);
    }
  }

  if ($header.length > 0) {
    var headroom = new headroom_js__WEBPACK_IMPORTED_MODULE_1___default.a($header[0], {
      tolerance: {
        down: 10,
        up: 20
      },
      offset: 15,
      onUnpin: function onUnpin() {
        if (!!(function webpackMissingModule() { var e = new Error("Cannot find module './helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())() && secondaryMenuTippy) {
          var desktopSecondaryMenuTippy = secondaryMenuTippy[0];

          if (desktopSecondaryMenuTippy && desktopSecondaryMenuTippy.state.isVisible) {
            desktopSecondaryMenuTippy.hide();
          }
        }
      }
    });
    headroom.init();
  }

  if ($recentSlider.length > 0) {
    $recentSlider.each(function () {
      var recentSlider = new _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_2__["default"](this, {
        type: 'slider',
        rewind: false,
        perView: 4,
        swipeThreshold: false,
        dragThreshold: false,
        gap: 0,
        direction: !(function webpackMissingModule() { var e = new Error("Cannot find module './helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())() ? 'rtl' : 'ltr',
        breakpoints: {
          1024: {
            perView: 3,
            swipeThreshold: 80,
            dragThreshold: 120
          },
          768: {
            perView: 2,
            swipeThreshold: 80,
            dragThreshold: 120,
            peek: {
              before: 0,
              after: 115
            }
          },
          568: {
            perView: 1,
            swipeThreshold: 80,
            dragThreshold: 120,
            peek: {
              before: 0,
              after: 115
            }
          }
        }
      });
      recentSlider.on('mount.after', function () {
        Object(shave__WEBPACK_IMPORTED_MODULE_5__["default"])('.js-recent-article-title', 50);
      });
      recentSlider.mount({
        Swipe: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_2__["Swipe"],
        Breakpoints: _glidejs_glide_dist_glide_modular_esm__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"]
      });
    });
  }

  if (typeof disableFadeAnimation === 'undefined' || !disableFadeAnimation) {
    aos__WEBPACK_IMPORTED_MODULE_6___default.a.init({
      once: true,
      startEvent: 'DOMContentLoaded'
    });
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-aos]').addClass('no-aos-animation');
  }

  if ($openSecondaryMenu.length > 0) {
    var template = document.getElementById('secondary-navigation-template');
    secondaryMenuTippy = Object(tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-open-secondary-menu', {
      appendTo: document.body,
      content: template.innerHTML,
      allowHTML: true,
      arrow: true,
      trigger: 'click',
      interactive: true,
      onShow: function onShow() {
        toggleDesktopTopbarOverflow(true);
      },
      onHidden: function onHidden() {
        toggleDesktopTopbarOverflow(false);
      }
    });
  }

  Object(tippy_js__WEBPACK_IMPORTED_MODULE_3__["default"])('.js-tooltip');
  Object(shave__WEBPACK_IMPORTED_MODULE_5__["default"])('.js-article-card-title', 100);
  Object(shave__WEBPACK_IMPORTED_MODULE_5__["default"])('.js-article-card-title-no-image', 250);
  checkForActionParameter();
  tryToRemoveNewsletter();
  trySearchFeature();
});
window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

/***/ }),

/***/ "./sass/404.scss":
/*!***********************!*\
  !*** ./sass/404.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/app.scss":
/*!***********************!*\
  !*** ./sass/app.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/contact.scss":
/*!***************************!*\
  !*** ./sass/contact.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/custom-images-post.scss":
/*!**************************************!*\
  !*** ./sass/custom-images-post.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/home.scss":
/*!************************!*\
  !*** ./sass/home.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/info-page.scss":
/*!*****************************!*\
  !*** ./sass/info-page.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/listing.scss":
/*!***************************!*\
  !*** ./sass/listing.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/newsletter.scss":
/*!******************************!*\
  !*** ./sass/newsletter.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/post.scss":
/*!************************!*\
  !*** ./sass/post.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/tags.scss":
/*!************************!*\
  !*** ./sass/tags.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./sass/talk.scss":
/*!************************!*\
  !*** ./sass/talk.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./js/app.js ./sass/app.scss ./sass/home.scss ./sass/listing.scss ./sass/post.scss ./sass/custom-images-post.scss ./sass/newsletter.scss ./sass/tags.scss ./sass/404.scss ./sass/contact.scss ./sass/info-page.scss ./sass/talk.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/js/app.js */"./js/app.js");
__webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/sass/app.scss */"./sass/app.scss");
__webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/sass/home.scss */"./sass/home.scss");
__webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/sass/listing.scss */"./sass/listing.scss");
__webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/sass/post.scss */"./sass/post.scss");
__webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/sass/custom-images-post.scss */"./sass/custom-images-post.scss");
__webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/sass/newsletter.scss */"./sass/newsletter.scss");
__webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/sass/tags.scss */"./sass/tags.scss");
__webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/sass/404.scss */"./sass/404.scss");
__webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/sass/contact.scss */"./sass/contact.scss");
__webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/sass/info-page.scss */"./sass/info-page.scss");
module.exports = __webpack_require__(/*! /home/nomad/netwalker-dev/content/themes/liebling/src/sass/talk.scss */"./sass/talk.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);