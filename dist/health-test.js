!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e,n){},function(t,e){var n=document.querySelector(".c-settings__btn--font-decrease"),r=document.querySelector(".c-settings__btn--font-increase"),i=parseInt(10,10),c=!1;function o(t,e){return t=e?++t:--t,document.body.style.fontSize="calc(".concat(t,"px + 2vmin)"),t}n.addEventListener("click",(function(){c=!1,i>6&&(i=o(i,c))})),r.addEventListener("click",(function(){c=!0,i<13&&(i=o(i,c))}))},function(t,e){function n(t){var e=document.body;t?e.classList.add("contrast"):e.classList.remove("contrast")}var r=document.querySelector(".c-settings__btn--is-contrast-on"),i=localStorage.getItem("contrast");n(i),r.addEventListener("click",(function(){i="true"===i?"":"true",localStorage.setItem("contrast","".concat(i)),n(i)}))},function(t,e){var n=document.querySelector(".c-nav__btn"),r=document.querySelector(".c-nav__hamburger"),i=document.querySelector(".c-nav__list--fill-window").style,c=!1;n.addEventListener("click",(function(){(c=!c)?(i.transform="translateX(0)",r.classList.add("c-nav__hamburger--is-displayed")):(i.transform="translateX(100%)",r.classList.remove("c-nav__hamburger--is-displayed"))}))},,function(t,e,n){"use strict";n.r(e)},,,,function(t,e,n){n(10),t.exports=n(5)},function(t,e,n){"use strict";n.r(e);n(5),n(0),n(1),n(2),n(3),n(11)},function(t,e){function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var r,i=document.querySelector(".c-test__btn--back"),c=document.querySelector(".c-test__btn--next"),o=function(t){if(Array.isArray(t))return n(t)}(r=document.querySelectorAll(".c-test__field"))||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(r)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=!0,s=null,l=null;function u(t){if(a){a=!1,s=document.querySelector(".c-test__field--is-displayed");var e=parseInt(0,10),n=o.indexOf(s);switch(t?(l=o[(n+1)%o.length],e=parseInt(n+1,10),s.classList.add("c-test__field--is-slided-out-left"),l.classList.add("c-test__field--is-slided-in-right","c-test__field--is-displayed")):(l=o[(n-1+o.length)%o.length],e=parseInt(n-1,10),s.classList.add("c-test__field--is-slided-out-right"),l.classList.add("c-test__field--is-slided-in-left","c-test__field--is-displayed")),e){case 10:c.disabled=!0;break;case 0:i.disabled=!0;break;default:c.disabled=!1,i.disabled=!1}}}o.forEach((function(t){t.addEventListener("transitionend",(function(e){t!==s||a||(a=!0,s.className="c-test__field")}))})),c.addEventListener("click",(function(){u(!0)})),i.addEventListener("click",(function(){u(!1)})),o.forEach((function(t){return t.setAttribute("style","transition: transform ".concat(500,"ms ease-in;\n       animation-duration: ").concat(500,"ms;"))}))}]);