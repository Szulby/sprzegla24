!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=document.querySelector(".container"),r=10,c=document.querySelector(".show-more"),o=document.querySelector(".list"),i=document.querySelector(".scroll-top");function a(e){var t=document.createElement("div");t.setAttribute("class","box");var r=document.createElement("img");r.src="images/image.jpg",r.alt="clutch";var c=document.createElement("div");c.setAttribute("class","box-description");var o=document.createElement("p");o.textContent=e.name,o.setAttribute("class","title");var i=document.createElement("p");i.setAttribute("class","description-hidden"),i.textContent="Producent: ".concat(e.manufacturer);var a=document.createElement("p");a.textContent="Numer części: ".concat(e.reference),a.setAttribute("class","description-hidden");var l=document.createElement("p");l.textContent="".concat(e.grossPrice.toFixed(2),"zł"),l.setAttribute("class","price");var u=document.createElement("a");u.textContent="KUP TERAZ",u.href="#",c.appendChild(o),c.appendChild(i),c.appendChild(a),c.appendChild(l),t.appendChild(r),t.appendChild(c),t.appendChild(u),n.appendChild(t)}o.addEventListener("click",(function(){n.classList.toggle("container-list"),this.classList.toggle("active"),console.log(this)})),window.addEventListener("scroll",(function(){this.scrollY>800?i.classList.add("active"):i.classList.remove("active")})),fetch("https://cors-anywhere.herokuapp.com/https://clutchlit.sprzeglo.com.pl/rekrutacja/produkty").then((function(e){return e.json()})).then((function(e){var t=e.data;c.addEventListener("click",(function(){r+=10,t.forEach((function(e,t){t>=r-10&&t<r&&a(e)}))})),console.log(t),t.forEach((function(e,t){t<r&&a(e)})),o.classList.add("show"),c.style.display="block"}))}]);