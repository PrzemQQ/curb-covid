!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.r(t)},function(e,t,n){n(2),e.exports=n(0)},function(e,t,n){"use strict";n.r(t);n(0),n(3)},function(e,t){var n=document.querySelector(".c-settings__btn--font-decrease"),r=document.querySelector(".c-settings__btn--font-increase"),o=parseInt(10,10),u=!1;function c(e,t){return e=t?++e:--e,document.body.style.fontSize="calc(".concat(e,"px + 2vmin)"),e}n.addEventListener("click",(function(){u=!1,o>6&&(o=c(o,u))})),r.addEventListener("click",(function(){u=!0,o<13&&(o=c(o,u))}))}]);