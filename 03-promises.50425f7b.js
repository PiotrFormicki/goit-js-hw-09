!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),u=document.querySelector("input[name=amount]"),a=document.querySelector("input[name=step]"),c=document.querySelector("input[name=delay]"),l=document.querySelector("form.form"),d=document.querySelector("button[type=submit]");function f(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){t?o({position:e,delay:n}):i({position:e,delay:n})}),n)}))}var s=function(n){n.preventDefault();for(var t=Number(u.value),o=Number(a.value),i=Number(c.value),l=0;l<t;l++)f(l+1,i).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms")),d.disabled=!0})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),i+=o};l.addEventListener("submit",s);d.addEventListener("click",(function(){s().then((function(){d.disabled=!1}))}))}();
//# sourceMappingURL=03-promises.50425f7b.js.map
