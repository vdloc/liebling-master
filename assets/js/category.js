(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{161:function(e,t,n){e.exports=n(162)},162:function(e,t,n){"use strict";n.r(t);var s=n(8),r=n.n(s),a=n(6),i=n(1),o=n.n(i),c=n(9),l=n.n(c);function u(e,t,n,s,r,a,i){try{var o=e[a](i),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(s,r)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(s,r){var a=e.apply(t,n);function i(e){u(a,s,r,i,o,"next",e)}function o(e){u(a,s,r,i,o,"throw",e)}i(void 0)}))}}var j=new GhostContentAPI({url:ghostHost.includes("http")?ghostHost:"http:".concat(ghostHost),key:ghostSearchApiKey,version:"v4"});function f(e){var t,n,s,r,a=e.title,i=e.url,c=e.published_at,u=e.feature_image,d=e.primary_tag,j='<article class="m-article-card '.concat(u?"":"no-picture"," ").concat(categoryTag,' post" data-aos="fade-up" data-aos-delay="300">\n      <div class="m-article-card__picture">\n        <a href="').concat(i,'" class="m-article-card__picture-link" aria-hidden="true" tabindex="-1"></a>\n        ').concat(u&&'<img class="m-article-card__picture-background" src="'.concat(u,'" loading="lazy">'),'\n      </div>\n      <div class="m-article-card__info">\n        <a href="').concat(null==d?void 0:d.url,'" class="m-article-card__tag capitalize">').concat(null==d?void 0:d.name,'</a>\n        <a href="').concat(i,'" class="m-article-card__info-link" aria-label="').concat(a,'">\n          <div>\n            <h2 class="m-article-card__title js-article-card-title ').concat(u?"":"js-article-card-title-no-image",'" title="{{title}}">\n              ').concat(a,'\n            </h2>\n          </div>\n          <div class="m-article-card__timestamp">\n            <span>').concat((t=c,s=l()().tz("Asia/Ho_Chi_Minh"),r=Date.parse(t),(n=!1===isNaN(r)?l.a.parseZone(t):s).locale("vi"),n.tz("Asia/Ho_Chi_Minh").from(s)),"</span>\n          </div>\n        </a>\n      </div>\n</article>");return o()(j)}o()((function(){if(Object(a.a)(),!(o()(".post").length<4)){var e=o()("#js-loader"),t=o()("#js-load-more-btn"),n=o()("#js-posts-container"),s=null;t.on("click",d(r.a.mark((function a(){var i,c,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=o()(".post").length+6,e.removeClass("hide"),t.hide(),r.prev=3,r.next=6,j.posts.browse({limit:i,include:"tags",fields:"id, title, url, published_at, feature_image, primary_tag",filter:"tag:".concat(categoryTag,"+featured:false")});case 6:c=r.sent,s||(s=c.meta.pagination.total),i>=s&&t.hide(),l=s>=i?-6:o()(".post").length-s,c.slice(l).forEach((function(e){var t=f(e);n.append(t)})),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(3),t.show();case 16:return r.prev=16,e.addClass("hide"),r.finish(16);case 19:case"end":return r.stop()}}),a,null,[[3,13,16,19]])}))))}}))},165:function(e,t,n){var s={"./af":10,"./af.js":10,"./ar":11,"./ar-dz":12,"./ar-dz.js":12,"./ar-kw":13,"./ar-kw.js":13,"./ar-ly":14,"./ar-ly.js":14,"./ar-ma":15,"./ar-ma.js":15,"./ar-sa":16,"./ar-sa.js":16,"./ar-tn":17,"./ar-tn.js":17,"./ar.js":11,"./az":18,"./az.js":18,"./be":19,"./be.js":19,"./bg":20,"./bg.js":20,"./bm":21,"./bm.js":21,"./bn":22,"./bn.js":22,"./bo":23,"./bo.js":23,"./br":24,"./br.js":24,"./bs":25,"./bs.js":25,"./ca":26,"./ca.js":26,"./cs":27,"./cs.js":27,"./cv":28,"./cv.js":28,"./cy":29,"./cy.js":29,"./da":30,"./da.js":30,"./de":31,"./de-at":32,"./de-at.js":32,"./de-ch":33,"./de-ch.js":33,"./de.js":31,"./dv":34,"./dv.js":34,"./el":35,"./el.js":35,"./en-au":36,"./en-au.js":36,"./en-ca":37,"./en-ca.js":37,"./en-gb":38,"./en-gb.js":38,"./en-ie":39,"./en-ie.js":39,"./en-il":40,"./en-il.js":40,"./en-in":41,"./en-in.js":41,"./en-nz":42,"./en-nz.js":42,"./en-sg":43,"./en-sg.js":43,"./eo":44,"./eo.js":44,"./es":45,"./es-do":46,"./es-do.js":46,"./es-us":47,"./es-us.js":47,"./es.js":45,"./et":48,"./et.js":48,"./eu":49,"./eu.js":49,"./fa":50,"./fa.js":50,"./fi":51,"./fi.js":51,"./fil":52,"./fil.js":52,"./fo":53,"./fo.js":53,"./fr":54,"./fr-ca":55,"./fr-ca.js":55,"./fr-ch":56,"./fr-ch.js":56,"./fr.js":54,"./fy":57,"./fy.js":57,"./ga":58,"./ga.js":58,"./gd":59,"./gd.js":59,"./gl":60,"./gl.js":60,"./gom-deva":61,"./gom-deva.js":61,"./gom-latn":62,"./gom-latn.js":62,"./gu":63,"./gu.js":63,"./he":64,"./he.js":64,"./hi":65,"./hi.js":65,"./hr":66,"./hr.js":66,"./hu":67,"./hu.js":67,"./hy-am":68,"./hy-am.js":68,"./id":69,"./id.js":69,"./is":70,"./is.js":70,"./it":71,"./it-ch":72,"./it-ch.js":72,"./it.js":71,"./ja":73,"./ja.js":73,"./jv":74,"./jv.js":74,"./ka":75,"./ka.js":75,"./kk":76,"./kk.js":76,"./km":77,"./km.js":77,"./kn":78,"./kn.js":78,"./ko":79,"./ko.js":79,"./ku":80,"./ku.js":80,"./ky":81,"./ky.js":81,"./lb":82,"./lb.js":82,"./lo":83,"./lo.js":83,"./lt":84,"./lt.js":84,"./lv":85,"./lv.js":85,"./me":86,"./me.js":86,"./mi":87,"./mi.js":87,"./mk":88,"./mk.js":88,"./ml":89,"./ml.js":89,"./mn":90,"./mn.js":90,"./mr":91,"./mr.js":91,"./ms":92,"./ms-my":93,"./ms-my.js":93,"./ms.js":92,"./mt":94,"./mt.js":94,"./my":95,"./my.js":95,"./nb":96,"./nb.js":96,"./ne":97,"./ne.js":97,"./nl":98,"./nl-be":99,"./nl-be.js":99,"./nl.js":98,"./nn":100,"./nn.js":100,"./oc-lnc":101,"./oc-lnc.js":101,"./pa-in":102,"./pa-in.js":102,"./pl":103,"./pl.js":103,"./pt":104,"./pt-br":105,"./pt-br.js":105,"./pt.js":104,"./ro":106,"./ro.js":106,"./ru":107,"./ru.js":107,"./sd":108,"./sd.js":108,"./se":109,"./se.js":109,"./si":110,"./si.js":110,"./sk":111,"./sk.js":111,"./sl":112,"./sl.js":112,"./sq":113,"./sq.js":113,"./sr":114,"./sr-cyrl":115,"./sr-cyrl.js":115,"./sr.js":114,"./ss":116,"./ss.js":116,"./sv":117,"./sv.js":117,"./sw":118,"./sw.js":118,"./ta":119,"./ta.js":119,"./te":120,"./te.js":120,"./tet":121,"./tet.js":121,"./tg":122,"./tg.js":122,"./th":123,"./th.js":123,"./tk":124,"./tk.js":124,"./tl-ph":125,"./tl-ph.js":125,"./tlh":126,"./tlh.js":126,"./tr":127,"./tr.js":127,"./tzl":128,"./tzl.js":128,"./tzm":129,"./tzm-latn":130,"./tzm-latn.js":130,"./tzm.js":129,"./ug-cn":131,"./ug-cn.js":131,"./uk":132,"./uk.js":132,"./ur":133,"./ur.js":133,"./uz":134,"./uz-latn":135,"./uz-latn.js":135,"./uz.js":134,"./vi":136,"./vi.js":136,"./x-pseudo":137,"./x-pseudo.js":137,"./yo":138,"./yo.js":138,"./zh-cn":139,"./zh-cn.js":139,"./zh-hk":140,"./zh-hk.js":140,"./zh-mo":141,"./zh-mo.js":141,"./zh-tw":142,"./zh-tw.js":142};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id=165},2:function(e,t,n){"use strict";function s(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches}function a(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e&&e.matches}function i(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""}function o(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function c(){for(var e=document.querySelectorAll(".kg-gallery-image img"),t=0,n=e.length;t<n;t++){var s=e[t].closest(".kg-gallery-image"),r=e[t].attributes.width.value/e[t].attributes.height.value;s.style.flex="".concat(r," 1 0%")}}function l(e){e(".js-post-content").find("img").each((function(){e(this).closest("figure").hasClass("kg-bookmark-card")||e(this).parent().is("a")||e(this).addClass("js-zoomable")}))}function u(e,t){t(".js-zoomable").on("opened",(function(){setTimeout((function(){var t=e(".medium-zoom-image--opened");t.length>1&&t.last().hide()}),10)}))}function d(){window.scrollTo({top:0,behavior:"smooth"})}n.r(t),n.d(t,"isRTL",(function(){return s})),n.d(t,"isMobile",(function(){return r})),n.d(t,"isDarkMode",(function(){return a})),n.d(t,"formatDate",(function(){return i})),n.d(t,"getParameterByName",(function(){return o})),n.d(t,"adjustImageGallery",(function(){return c})),n.d(t,"managePostImages",(function(){return l})),n.d(t,"makeImagesZoomable",(function(){return u})),n.d(t,"scrollTop",(function(){return d}))},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var s=n(1),r=n.n(s),a=n(4),i=n(3),o=n(2);function c(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var s=0,r=function(){};return{s:r,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function u(){var e=document.querySelectorAll(".js-featured-slider");e.length>0&&e.forEach((function(e){var t=r()(e).find(".js-featured-slide").length,n=new i.d(e,{type:"slider",rewind:!1,gap:0,swipeThreshold:!1,dragThreshold:!1,direction:Object(o.isRTL)()?"rtl":"ltr",breakpoints:{768:{swipeThreshold:1!==t&&80,dragThreshold:1!==t&&120}}});1===t&&r()(e).find(".js-featured-slider-controls").remove(),n.on("mount.after",(function(){Object(a.a)(".js-featured-article-title",200)})),n.mount({Controls:i.b,Swipe:i.c,Breakpoints:i.a,ArrowDisabler:function(e,n){var s="js-featured-slider-controls",r="js-featured-slider-previous",a="js-featured-slider-next";return{mount:function(){e.settings.rewind||1===t||e.on(["mount.after","run"],(function(){var t,i=c(n.Controls.items);try{for(i.s();!(t=i.n()).done;){var o=t.value;if(o.className.includes(s)){var l=o.querySelector(".".concat(r));l&&(0===e.index?l.setAttribute("disabled",""):l.removeAttribute("disabled"));var u=o.querySelector(".".concat(a));if(u)(e.settings.bound?e.index+(e.settings.perView-1):e.index)===n.Sizes.length-1?u.setAttribute("disabled",""):u.removeAttribute("disabled")}}}catch(e){i.e(e)}finally{i.f()}}))}}}}),setTimeout((function(){window.dispatchEvent(new Event("resize"))}),350)})),Object(a.a)(".js-featured-article-title",200)}}},[[161,0,1]]]);