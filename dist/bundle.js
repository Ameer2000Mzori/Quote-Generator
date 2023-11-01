(()=>{"use strict";var e={37:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,".navbar{display:flex;text-align:center;align-items:center;justify-content:space-between;padding:0% 15%;background-color:#86a789;color:#ece3ce}.navbrand{display:flex;text-align:center;align-items:center;height:50px;width:50px;margin:1.5rem;font-size:12px;transform:rotate(-14deg);justify-content:space-evenly}.navbrand:hover{cursor:pointer}.brand-icon{display:flex;text-align:center;align-items:center;transform:rotate(-14deg);height:50px;width:50px;margin:0;justify-content:space-evenly}.menu-btn{display:none;justify-content:space-evenly;align-items:center;text-align:center;position:absolute;background-color:rgba(0,0,0,0);border-style:none;right:.7rem;top:1rem;height:30px;width:30px}.btn-img{display:flex;justify-content:space-evenly;align-items:center;text-align:center;position:absolute;background-color:rgba(0,0,0,0);border-style:none;height:30px;width:30px}.menu-btn:hover{height:35px;cursor:pointer}.menu-btn:active{height:29px}.navlinks{display:flex}.navlinks ul{display:flex;list-style:none;padding:0;margin:0}.navlinks ul li{display:flex;padding:1rem;list-style:none}.navlinks ul li a{color:#fecda6;text-decoration:none}.navlinks ul li a:hover{color:#5e4e41}.navlinks ul li a:active{color:silver}.navlinks.active{display:flex}@media(max-width: 768px){.navbar{display:flex;flex-direction:column;text-align:start;align-items:start;justify-content:space-between;padding:1% 3%;background-color:#86a789;color:#ece3ce}.menu-btn{display:flex}.navlinks{display:none;width:100%;padding:0;margin:0}.navlinks ul{display:flex;text-align:center;align-items:center;width:100%;flex-direction:column;list-style:none;padding:0;margin:0}.navlinks ul li{display:flex;text-align:center;align-items:center;width:100%;padding:.5rem;flex-direction:column;list-style:none}}",""]);const s=o},458:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100;200;300;400;500;600;700;800&display=swap);"]),o.push([e.id,'body{padding:0;margin:0;font-family:"Playpen Sans",cursive}',""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var m=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}o.push(d)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=r(e,a),l=0;l<i.length;l++){var p=n(i[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),o=n.n(i),s=n(565),c=n.n(s),l=n(216),p=n.n(l),d=n(589),u=n.n(d),f=n(37),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var v=n(458),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=o().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),t()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const y=n.p+"assets/qoutelogo.png",h=n.p+"assets/openmm.png",x=n.p+"assets/closemm.png";var b=document.getElementsByClassName("btn-img")[0],w=document.getElementsByClassName("navlinks")[0];b.src=h;var k=document.getElementsByClassName("brand-icon")[0],E=document.getElementsByClassName("menu-btn")[0];k.src=y,E.addEventListener("click",(function(){w.classList.contains("active")?(w.classList.remove("active"),b.src=h):(w.classList.add("active"),b.src=x)}))})()})();