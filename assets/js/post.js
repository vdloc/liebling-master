(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"isRTL",(function(){return o})),n.d(t,"isMobile",(function(){return a})),n.d(t,"isDarkMode",(function(){return r})),n.d(t,"formatDate",(function(){return i})),n.d(t,"getParameterByName",(function(){return c})),n.d(t,"adjustImageGallery",(function(){return s})),n.d(t,"managePostImages",(function(){return l})),n.d(t,"makeImagesZoomable",(function(){return u}));var o=function(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches},r=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e&&e.matches},i=function(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},c=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},s=function(){for(var e=document.querySelectorAll(".kg-gallery-image img"),t=0,n=e.length;t<n;t++){var o=e[t].closest(".kg-gallery-image"),a=e[t].attributes.width.value/e[t].attributes.height.value;o.style.flex="".concat(a," 1 0%")}},l=function(e){e(".js-post-content").find("img").each((function(){e(this).closest("figure").hasClass("kg-bookmark-card")||e(this).parent().is("a")||e(this).addClass("js-zoomable")}))},u=function(e,t){t(".js-zoomable").on("opened",(function(){setTimeout((function(){var t=e(".medium-zoom-image--opened");t.length>1&&t.last().hide()}),10)}))}},23:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),i=n(5),c=n.n(i),s=n(3),l=(n(25),n(2)),u=n(1),d=null,m=null,f=window.pageYOffset,h=0,g=0,p=0,w=!1;function b(){f=window.pageYOffset,y()}function j(e){Object(u.isMobile)("1023px")?(a()("body").addClass("share-menu-displayed"),setTimeout((function(){d.removeAttr("data-aos")}),e)):a()("body").removeClass("share-menu-displayed")}function v(){T(),j(100),setTimeout((function(){O(),y()}),200)}function y(){w||requestAnimationFrame(k),w=!0}function k(){var e=g-h,t=Math.ceil(f/e*100);t<=100&&function(e){if(e<=100){var t=p-e/100*p;m[0].style.strokeDashoffset=t}}(t),w=!1}function T(){h=window.innerHeight,g=a()(document).height()}function O(){var e=m.parent().width(),t=e/2,n=Object(u.isMobile)()?2:3;m.parent().attr("viewBox","0 0 ".concat(e," ").concat(e)),m.attr("stroke-width",n),m.attr("r",t-(n-1)),m.attr("cx",t),m.attr("cy",t),p=2*t*Math.PI,m[0].style.strokeDasharray="".concat(p," ").concat(p),m[0].style.strokeDashoffset=p}function x(){var e=window.postImages;if(e&&e.length){var t=a()("#js-post-pagination-container"),n=Array.from({length:e.length},(function(e,t){return t+1}));t.pagination({dataSource:n,pageSize:10,showPrevious:!1,showNext:!1,pageRange:null,callback:function(t){!function(e){var t=a()("#js-post-images-container"),n=e.map((function(e){return function(e,t){return'<img src="'.concat(e,'" alt="').concat(t,'" class="').concat("st-image js-zoomable",'"/>')}(e.url,e.alt)})).reduce((function(e,t){return e.concat(t)}),"");t.html(n),Object(u.makeImagesZoomable)(a.a,r.a)}(t.map((function(t){return e[t-1]})))},afterPageOnClick:I})}else Object(u.makeImagesZoomable)(a.a,r.a)}function I(){window.scrollTo({top:0,behavior:"smooth"})}a()((function(){d=a()(".js-aos-wrapper");var e=a()(".js-scrolltop"),t=a()(".js-recommended-slider");if(c()(".js-post-content"),Object(u.adjustImageGallery)(),j(1e3),t.length>0){var n=new l.d(".js-recommended-slider",{type:"slider",rewind:!1,perView:3,swipeThreshold:!1,dragThreshold:!1,gap:0,direction:Object(u.isRTL)()?"rtl":"ltr",breakpoints:{1023:{type:"carousel",perView:2,swipeThreshold:80,dragThreshold:120},720:{type:"carousel",perView:2,swipeThreshold:80,dragThreshold:120},568:{type:"carousel",perView:1,swipeThreshold:80,dragThreshold:120}}});n.on("mount.after",(function(){Object(s.a)(".js-article-card-title",100),Object(s.a)(".js-article-card-title-no-image",250)})),n.on("length.change",(function(e){1===e&&(n.update({type:"slider"}),t.find(".js-controls").remove())})),n.mount({Controls:l.b,Swipe:l.c,Breakpoints:l.a,Length:function(e,t,n){return{mount:function(){n.emit("length.change",t.Sizes.length)}}}})}Object(s.a)(".js-article-card-title",100),Object(s.a)(".js-article-card-title-no-image",250),e.on("click",I),Object(u.managePostImages)(a.a),x(),window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",v,{passive:!0})})),a()(window).on("load",(function(){m=a()(".js-progress"),T(),O(),k(),setTimeout((function(){m.parent().css("opacity",1)}),300)}))}},[[23,0,1]]]);