parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t,r){return c(t)||o(t,r)||e(t,r)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var e=[],r=!0,o=!1,c=void 0;try{for(var u,i=t[Symbol.iterator]();!(r=(u=i.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(a){o=!0,c=a}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return e}}function c(t){if(Array.isArray(t))return t}var u,i=document.querySelector("button"),a=document.querySelector(".game-score"),s=document.querySelectorAll(".field-row"),f=document.querySelector(".message-start"),l=document.querySelector(".message-lose"),d=document.querySelector(".message-win"),m=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],h=m.length,y=0,v=2048,g=!1;function p(){var n=[];m.forEach(function(t,e){return t.forEach(function(t,r){return 0===t&&n.push([e,r])})});var e=t(n[Math.floor(Math.random()*n.length)],2),r=e[0],o=e[1];m[r][o]=Math.random()<.9?2:4}function b(){for(var t=0;t<h;t++)for(var n=0;n<h;n++){var e=s[t].children[n],r=m[t][n];e.textContent=r||"",e.className="field-cell ".concat(r?"field-cell--".concat(r):"")}a.textContent=y}function w(t){switch(u=m,t.key){case"ArrowLeft":L();break;case"ArrowRight":k();break;case"ArrowDown":E();break;case"ArrowUp":q();break;default:return}JSON.stringify(u)!==JSON.stringify(m)&&(m=u,p(),b()),g&&d.classList.remove("hidden"),M()||(l.classList.remove("hidden"),d.classList.add("hidden"),document.removeEventListener("keydown",w))}function S(){m=m.map(function(t){return t.map(function(){return 0})}),y=0,[d,l].forEach(function(t){return t.classList.add("hidden")})}function A(){u.forEach(function(t){return t.reverse()})}function L(){j()&&(u=u.map(function(t){var n=t.filter(function(t){return 0!==t}).reduce(function(t,n){return t[t.length-1]===n?(t[t.length-1]*=2,y+=t[t.length-1],t[t.length-1]===v&&(g=!0)):t.push(n),t},[]);return n.concat(Array(h-n.length).fill(0))}))}function k(){j()&&(A(),L(),A())}function E(){x(),k(),x()}function q(){x(),L(),x()}function O(){return u.some(function(t){return t.some(function(n,e){return n===t[e+1]})})}function j(){return u.some(function(t){return t.some(function(n,e){return n===t[e+1]})||t.includes(0)})}function x(){u=u[0].map(function(t,n){return u.map(function(t){return t[n]})})}function M(){return j()||(x(),O())}i.addEventListener("click",function(t){document.addEventListener("keydown",w),i.classList.contains("start")?(i.classList.replace("start","restart"),i.innerText="Restart",f.classList.add("hidden")):(g=!1,S()),p(),p(),b()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.de74be5c.js.map