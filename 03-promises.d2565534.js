!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("h6c0i");r.Notify.init({cssAnimationStyle:"from-top",fontAwesomeIconStyle:"shadow"});var i={formEl:document.querySelector(".form"),delayEl:document.querySelector('[name="delay"]'),stepEl:document.querySelector('[name="step"]'),amountEl:document.querySelector('[name="amount"]')};function l(e,o){var n=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){n?t({position:e,delay:o}):r({position:e,delay:o})}),o)}))}function a(e){var o=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))}function u(e){var o=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}i.formEl.addEventListener("submit",(function(e){e.preventDefault();for(var o=+i.delayEl.value,n=+i.stepEl.value,t=+i.amountEl.value,r=1;r<=t;r++){l(r,o+n*(r-1)).then(a).catch(u)}i.formEl.reset()}))}();
//# sourceMappingURL=03-promises.d2565534.js.map
