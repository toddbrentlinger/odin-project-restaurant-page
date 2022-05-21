/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/animated-logo.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/animated-logo.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#animated-logo {\n  position: relative;\n  height: 406px;\n  width: 606px; }\n  #animated-logo > * {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0; }\n  #animated-logo .animated-logo-back {\n    --logo-back-height-percentage: 70%;\n    height: var(--logo-back-height-percentage);\n    overflow: hidden; }\n    #animated-logo .animated-logo-back > * {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      animation-duration: 1s;\n      animation-timing-function: ease-out; }\n    #animated-logo .animated-logo-back .logo-image-sign {\n      animation-name: logo-image-sign-slide; }\n    #animated-logo .animated-logo-back .logo-trees {\n      animation-name: logo-trees-slide; }\n    #animated-logo .animated-logo-back .logo-rooster {\n      animation-name: logo-rooster-slide; }\n  #animated-logo .logo-text-sign {\n    bottom: 0; }\n\n@keyframes logo-slide {\n  0% {\n    transform: translateY(100%); }\n  100% {\n    transform: translateY(0%); } }\n\n@keyframes logo-image-sign-slide {\n  0% {\n    transform: translateY(50%); }\n  100% {\n    transform: translateY(0%); } }\n\n@keyframes logo-trees-slide {\n  0% {\n    transform: translateY(100%); }\n  100% {\n    transform: translateY(0%); } }\n\n@keyframes logo-rooster-slide {\n  0% {\n    transform: translateY(200%); }\n  100% {\n    transform: translateY(0%); } }\n", "",{"version":3,"sources":["webpack://./src/animated-logo.scss"],"names":[],"mappings":"AAAA;EACI,kBAAkB;EAClB,aAAa;EACb,YAAY,EAAA;EAHhB;IAMQ,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ,EAAA;EAThB;IAaQ,kCAA8B;IAE9B,0CAA0C;IAC1C,gBAAgB,EAAA;IAhBxB;MAmBY,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,SAAS;MACT,QAAQ;MAGR,sBAAsB;MACtB,mCAAmC,EAAA;IA3B/C;MA+BY,qCAAqC,EAAA;IA/BjD;MAmCY,gCAAgC,EAAA;IAnC5C;MAuCY,kCAAkC,EAAA;EAvC9C;IA4CQ,SAAS,EAAA;;AAIjB;EACI;IACI,2BAA2B,EAAA;EAE/B;IACI,yBAAyB,EAAA,EAAA;;AAIjC;EACI;IACI,0BAA0B,EAAA;EAE9B;IACI,yBAAyB,EAAA,EAAA;;AAIjC;EACI;IACI,2BAA2B,EAAA;EAE/B;IACI,yBAAyB,EAAA,EAAA;;AAIjC;EACI;IACI,2BAA2B,EAAA;EAE/B;IACI,yBAAyB,EAAA,EAAA","sourcesContent":["#animated-logo {\r\n    position: relative;\r\n    height: 406px;\r\n    width: 606px;\r\n\r\n    > * {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n    .animated-logo-back {\r\n        --logo-back-height-percentage: 70%;\r\n\r\n        height: var(--logo-back-height-percentage);\r\n        overflow: hidden;\r\n\r\n        > * {\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            bottom: 0;\r\n            right: 0;\r\n            // Animation\r\n            //animation-name: logo-slide;\r\n            animation-duration: 1s;\r\n            animation-timing-function: ease-out;\r\n        }\r\n        .logo-image-sign {\r\n            // Animation\r\n            animation-name: logo-image-sign-slide;\r\n        }\r\n        .logo-trees {\r\n            // Animation\r\n            animation-name: logo-trees-slide;\r\n        }\r\n        .logo-rooster {\r\n            // Animation\r\n            animation-name: logo-rooster-slide;\r\n        }\r\n    }\r\n\r\n    .logo-text-sign {\r\n        bottom: 0;\r\n    }\r\n}\r\n\r\n@keyframes logo-slide {\r\n    0% {\r\n        transform: translateY(100%);\r\n    }\r\n    100% {\r\n        transform: translateY(0%);\r\n    }\r\n}\r\n\r\n@keyframes logo-image-sign-slide {\r\n    0% {\r\n        transform: translateY(50%);\r\n    }\r\n    100% {\r\n        transform: translateY(0%);\r\n    }\r\n}\r\n\r\n@keyframes logo-trees-slide {\r\n    0% {\r\n        transform: translateY(100%);\r\n    }\r\n    100% {\r\n        transform: translateY(0%);\r\n    }\r\n}\r\n\r\n@keyframes logo-rooster-slide {\r\n    0% {\r\n        transform: translateY(200%);\r\n    }\r\n    100% {\r\n        transform: translateY(0%);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/contact.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/contact.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Upcycled_Pizza_Peel_alpha_rotated.png */ "./src/img/Upcycled_Pizza_Peel_alpha_rotated.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".location-container, .phone-number {\n  text-align: center;\n  font-size: 2rem; }\n\n#pizza-board-container {\n  flex: 1;\n  padding: 5% 15%;\n  position: relative;\n  display: grid;\n  place-items: center;\n  transform: translateX(-150vw); }\n  #pizza-board-container.has-loaded {\n    animation-name: slide-board-in-with-item;\n    animation-duration: 1s;\n    animation-timing-function: ease;\n    animation-fill-mode: both; }\n    #pizza-board-container.has-loaded::before {\n      animation-name: slide-board-out-empty;\n      animation-duration: 1s;\n      animation-delay: 1s;\n      animation-timing-function: ease;\n      animation-fill-mode: both; }\n  #pizza-board-container::before {\n    z-index: 10;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    aspect-ratio: 2.1;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    transform: translateX(-25%); }\n  #pizza-board-container iframe {\n    width: 100%;\n    height: 100%;\n    z-index: 11; }\n\n@keyframes slide-board-in-with-item {\n  0% {\n    transform: translateX(-150vw); }\n  100% {\n    transform: translateX(0); } }\n\n@keyframes slide-board-out-empty {\n  0% {\n    transform: translateX(-25%); }\n  100% {\n    transform: translateX(-150vw); } }\n", "",{"version":3,"sources":["webpack://./src/contact.scss"],"names":[],"mappings":"AAAA;EACI,kBAAkB;EAClB,eAAe,EAAA;;AAGnB;EACI,OAAO;EACP,eAAe;EACf,kBAAkB;EAElB,aAAa;EACb,mBAAmB;EAEnB,6BAA6B,EAAA;EARjC;IAYQ,wCAAwC;IACxC,sBAAsB;IACtB,+BAA+B;IAC/B,yBAAyB,EAAA;IAfjC;MAmBY,qCAAqC;MACrC,sBAAsB;MACtB,mBAAmB;MACnB,+BAA+B;MAC/B,yBAAyB,EAAA;EAvBrC;IA4BQ,WAAW;IAEX,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,iBAAiB;IAEjB,yDAAoE;IACpE,wBAAwB;IACxB,4BAA4B;IAE5B,2BAA2B,EAAA;EAxCnC;IA4CQ,WAAW;IACX,YAAY;IACZ,WAAW,EAAA;;AAInB;EACI;IACI,6BAA6B,EAAA;EAEjC;IACI,wBAAwB,EAAA,EAAA;;AAIhC;EACI;IACI,2BAA2B,EAAA;EAE/B;IACI,6BAA6B,EAAA,EAAA","sourcesContent":[".location-container, .phone-number {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n}\r\n\r\n#pizza-board-container {\r\n    flex: 1;\r\n    padding: 5% 15%;\r\n    position: relative;\r\n    // Grid\r\n    display: grid;\r\n    place-items: center;\r\n    // Transform\r\n    transform: translateX(-150vw);\r\n\r\n    &.has-loaded {\r\n        // Animation\r\n        animation-name: slide-board-in-with-item;\r\n        animation-duration: 1s;\r\n        animation-timing-function: ease;\r\n        animation-fill-mode: both;\r\n\r\n        &::before {\r\n            // Animation\r\n            animation-name: slide-board-out-empty;\r\n            animation-duration: 1s;\r\n            animation-delay: 1s;\r\n            animation-timing-function: ease;\r\n            animation-fill-mode: both;\r\n        }\r\n    }\r\n\r\n    &::before {\r\n        z-index: 10;\r\n        // Position\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        aspect-ratio: 2.1;\r\n        // Background\r\n        background-image: url('./img/Upcycled_Pizza_Peel_alpha_rotated.png');\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n        // Transform\r\n        transform: translateX(-25%);\r\n    }\r\n\r\n    iframe {\r\n        width: 100%;\r\n        height: 100%;\r\n        z-index: 11;\r\n    }\r\n}\r\n\r\n@keyframes slide-board-in-with-item {\r\n    0% {\r\n        transform: translateX(-150vw);\r\n    }\r\n    100% {\r\n        transform: translateX(0);\r\n    } \r\n}\r\n\r\n@keyframes slide-board-out-empty {\r\n    0% {\r\n        transform: translateX(-25%);\r\n    }\r\n    100% {\r\n        transform: translateX(-150vw);\r\n    } \r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/footer.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/footer.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fondo_pie_240x41.jpg */ "./src/img/fondo_pie_240x41.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fondo_pie_480x82.jpg */ "./src/img/fondo_pie_480x82.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fondo_pie_960x164.jpg */ "./src/img/fondo_pie_960x164.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "footer {\n  padding: 1.6rem;\n  display: grid;\n  justify-items: center;\n  align-items: flex-end;\n  background-color: #b4703f;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover; }\n  footer p {\n    text-align: center; }\n    footer p small {\n      font-size: 80%; }\n\n/* Smallest (300px and down) */\n/* Extra small devices (phones, 300px and up) */\n@media only screen and (min-width: 300px) {\n  footer {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); } }\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 600px) {\n  footer {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "); } }\n\n/* Medium devices (landscape tablets, 768px and up) */\n/* Large devices (laptops/desktops, 992px and up) */\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n", "",{"version":3,"sources":["webpack://./src/footer.scss"],"names":[],"mappings":"AAAA;EACI,eAAe;EAEf,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EAErB,yBAAyB;EACzB,yDAAmD;EACnD,wBAAwB;EACxB,4BAA4B;EAC5B,sBAAsB,EAAA;EAX1B;IAcQ,kBAAkB,EAAA;IAd1B;MAiBY,cAAc,EAAA;;AAO1B,8BAAA;AAGA,+CAAA;AACA;EACI;IACI,yDAAmD,EAAA,EACtD;;AAGL,oEAAA;AACA;EACI;IACI,yDAAoD,EAAA,EACvD;;AAGL,qDAAA;AAGA,mDAAA;AAGA,oEAAA","sourcesContent":["footer {\r\n    padding: 1.6rem;\r\n    // Flex\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: flex-end;\r\n    // Background\r\n    background-color: #b4703f;\r\n    background-image: url('./img/fondo_pie_240x41.jpg');\r\n    background-position: top;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\r\n    p {\r\n        text-align: center;\r\n\r\n        small {\r\n            font-size: 80%;\r\n        }\r\n    }\r\n}\r\n\r\n// Media Queries\r\n\r\n/* Smallest (300px and down) */\r\n@media only screen and (max-width: 300px) {}\r\n\r\n/* Extra small devices (phones, 300px and up) */\r\n@media only screen and (min-width: 300px) {\r\n    footer {\r\n        background-image: url('./img/fondo_pie_480x82.jpg');\r\n    }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n@media only screen and (min-width: 600px) {\r\n    footer {\r\n        background-image: url('./img/fondo_pie_960x164.jpg');\r\n    }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n@media only screen and (min-width: 768px) {}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n@media only screen and (min-width: 992px) {}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n@media only screen and (min-width: 1200px) {}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gallery.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gallery.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#gallery {\n  width: 80%;\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }\n  #gallery a.gallery-item {\n    display: block;\n    position: relative; }\n    #gallery a.gallery-item:hover img, #gallery a.gallery-item:focus img {\n      transform: scale(1); }\n    #gallery a.gallery-item img {\n      width: 100%;\n      height: auto;\n      transform: scale(0.9);\n      transition: transform 500ms ease; }\n\n#full-img-modal {\n  --btn-width: 5rem;\n  border: 2px solid black;\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.9);\n  /* Black w/ opacity */\n  display: grid;\n  grid-template-rows: auto 1fr;\n  align-items: center; }\n  #full-img-modal:not(.hide) #img-modal-content {\n    animation-name: zoom;\n    animation-duration: 500ms; }\n  #full-img-modal.hide {\n    display: none; }\n  #full-img-modal #img-modal-header {\n    display: flex;\n    justify-content: flex-end; }\n  #full-img-modal #img-modal-close {\n    font-size: 3rem;\n    height: var(--btn-width); }\n  #full-img-modal #img-modal-main {\n    position: relative; }\n  #full-img-modal #img-modal-content {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    height: auto; }\n  #full-img-modal #img-modal-caption {\n    text-align: center; }\n  #full-img-modal #img-modal-close, #full-img-modal #img-modal-prev, #full-img-modal #img-modal-next {\n    cursor: pointer;\n    border: 2px solid var(--base-white);\n    width: var(--btn-width);\n    display: grid;\n    place-items: center;\n    transition: background-color 300ms ease; }\n    #full-img-modal #img-modal-close:hover, #full-img-modal #img-modal-close:focus, #full-img-modal #img-modal-prev:hover, #full-img-modal #img-modal-prev:focus, #full-img-modal #img-modal-next:hover, #full-img-modal #img-modal-next:focus {\n      background-color: gray; }\n  #full-img-modal #img-modal-prev {\n    font-size: 6rem;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0; }\n  #full-img-modal #img-modal-next {\n    font-size: 6rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0; }\n\n@keyframes zoom {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n", "",{"version":3,"sources":["webpack://./src/gallery.scss"],"names":[],"mappings":"AAAA;EACI,UAAU;EACV,cAAc;EAEd,aAAa;EACb,4DAA4D,EAAA;EALhE;IASQ,cAAc;IACd,kBAAkB,EAAA;IAV1B;MAcgB,mBAAmB,EAAA;IAdnC;MAmBY,WAAW;MACX,YAAY;MACZ,qBAAqB;MACrB,gCAAgC,EAAA;;AAK5C;EACI,iBAAY;EAEZ,uBAAuB;EACvB,eAAe;EAAE,kBAAA;EACjB,UAAU;EAAE,eAAA;EAEZ,OAAO;EACP,MAAM;EACN,WAAW;EAAE,eAAA;EACb,YAAY;EAAE,gBAAA;EACd,cAAc;EAAE,4BAAA;EAChB,uBAA4B;EAAE,mBAAA;EAC9B,oCAAiC;EAAE,qBAAA;EAEnC,aAAa;EACb,4BAA4B;EAC5B,mBAAmB,EAAA;EAjBvB;IAsBY,oBAAoB;IACpB,yBAAyB,EAAA;EAvBrC;IA4BQ,aAAa,EAAA;EA5BrB;IAiCQ,aAAa;IACb,yBAAyB,EAAA;EAlCjC;IAsCQ,eAAe;IACf,wBAAwB,EAAA;EAvChC;IA2CQ,kBAAkB,EAAA;EA3C1B;IA+CQ,YAAY;IACZ,cAAc;IACd,UAAU;IACV,gBAAgB;IAChB,YAAY,EAAA;EAnDpB;IAuDQ,kBAAkB,EAAA;EAvD1B;IA2DQ,eAAe;IACf,mCAAmC;IACnC,uBAAuB;IAEvB,aAAa;IACb,mBAAmB;IAEnB,uCAAuC,EAAA;IAlE/C;MAqEY,sBAAiC,EAAA;EArE7C;IA0EQ,eAAe;IACf,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,SAAS,EAAA;EA9EjB;IAkFQ,eAAe;IACf,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS,EAAA;;AAIjB;EACI;IACI,mBAAmB,EAAA;EAEvB;IACI,mBAAmB,EAAA,EAAA","sourcesContent":["#gallery {\r\n    width: 80%;\r\n    margin: 1rem 0;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n    //gap: 1rem;\r\n\r\n    a.gallery-item {\r\n        display: block;\r\n        position: relative;\r\n\r\n        &:hover, &:focus {\r\n            img {\r\n                transform: scale(1);\r\n            }\r\n        }\r\n\r\n        img {\r\n            width: 100%;\r\n            height: auto;\r\n            transform: scale(0.9);\r\n            transition: transform 500ms ease;\r\n        }\r\n    }\r\n}\r\n\r\n#full-img-modal {\r\n    --btn-width: 5rem;\r\n\r\n    border: 2px solid black;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    //padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\r\n    // Grid\r\n    display: grid;\r\n    grid-template-rows: auto 1fr;\r\n    align-items: center;\r\n\r\n    &:not(.hide) {\r\n        #img-modal-content {\r\n            // Animation\r\n            animation-name: zoom;\r\n            animation-duration: 500ms;\r\n        }\r\n    }\r\n\r\n    &.hide {\r\n        display: none;\r\n    }\r\n\r\n    #img-modal-header {\r\n        // Flex\r\n        display: flex;\r\n        justify-content: flex-end;\r\n    }\r\n\r\n    #img-modal-close {\r\n        font-size: 3rem;\r\n        height: var(--btn-width);\r\n    }\r\n\r\n    #img-modal-main {\r\n        position: relative;\r\n    }\r\n\r\n    #img-modal-content {\r\n        margin: auto;\r\n        display: block;\r\n        width: 80%;\r\n        max-width: 700px;\r\n        height: auto;\r\n    }\r\n\r\n    #img-modal-caption {\r\n        text-align: center;\r\n    }\r\n\r\n    #img-modal-close, #img-modal-prev, #img-modal-next {\r\n        cursor: pointer;\r\n        border: 2px solid var(--base-white);\r\n        width: var(--btn-width);\r\n        // Grid\r\n        display: grid;\r\n        place-items: center;\r\n        // Transition\r\n        transition: background-color 300ms ease;\r\n\r\n        &:hover, &:focus {\r\n            background-color: hsl(0, 0%, 50%);\r\n        }\r\n    }\r\n\r\n    #img-modal-prev {\r\n        font-size: 6rem;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        bottom: 0;\r\n    }\r\n\r\n    #img-modal-next {\r\n        font-size: 6rem;\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n    }\r\n}\r\n\r\n@keyframes zoom {\r\n    0% {\r\n        transform: scale(0);\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#tagline {\n  text-align: center;\n  font-size: 3rem;\n  font-weight: 600;\n  display: grid;\n  grid-template-columns: min-content; }\n  #tagline p:first-of-type {\n    text-transform: uppercase; }\n  #tagline > *:not(p:last-of-type) {\n    white-space: nowrap; }\n", "",{"version":3,"sources":["webpack://./src/home.scss"],"names":[],"mappings":"AAAA;EACI,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAEhB,aAAa;EACb,kCAAkC,EAAA;EANtC;IASQ,yBAAyB,EAAA;EATjC;IAaQ,mBAAmB,EAAA","sourcesContent":["#tagline {\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    font-weight: 600;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-columns: min-content;\r\n\r\n    p:first-of-type {\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    > *:not(p:last-of-type) {\r\n        white-space: nowrap;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/initial-page-load.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/initial-page-load.scss ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/menu.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/menu.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fondo_menu.jpg */ "./src/img/fondo_menu.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/tomato.png */ "./src/img/tomato.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#menu-page-btn-container {\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column; }\n  #menu-page-btn-container a {\n    --growth-ratio: 1.2;\n    display: block; }\n    #menu-page-btn-container a span {\n      display: block;\n      padding: 0.5em 1em;\n      border: 2px solid var(--base-white);\n      font-size: calc(var(--growth-ratio) * 100%);\n      font-weight: 600;\n      display: grid;\n      place-items: center;\n      transform: scale(calc(1 / var(--growth-ratio)));\n      transition: transform 500ms ease;\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); }\n    #menu-page-btn-container a:hover span, #menu-page-btn-container a:active span, #menu-page-btn-container a:focus span {\n      transform: scale(1); }\n\n.menu-page {\n  margin: 1rem auto;\n  padding: 1em;\n  width: 80%;\n  background-color: #8a3f06;\n  outline: 6px solid black;\n  border: 6px solid #c62a13;\n  border-radius: 1em;\n  box-shadow: inset 0px 0px 5px var(--base-black);\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, auto);\n  gap: 1rem; }\n  .menu-page h2 {\n    text-transform: capitalize; }\n  .menu-page img {\n    width: 100%;\n    height: auto; }\n  .menu-page .menu-logo {\n    grid-area: 1 / 1 / 2 / 3; }\n  .menu-page .menu-column {\n    display: grid;\n    grid-auto-rows: min-content; }\n    .menu-page .menu-column > *:not(:last-child) {\n      border-bottom: 2px solid var(--base-white); }\n    .menu-page .menu-column > * {\n      padding: 1rem 0; }\n\n.pizza-item {\n  display: grid;\n  grid-template-columns: 2em 1fr auto;\n  row-gap: 1rem;\n  grid-template-areas: \"number name prices\"\r \"ingredients ingredients ingredients\"; }\n  .pizza-item .pizza-item-number {\n    color: var(--base-white);\n    font-size: larger;\n    font-weight: 700;\n    text-shadow: 0px 0px 1em var(--base-black);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    grid-area: number;\n    display: grid;\n    place-content: center; }\n  .pizza-item .pizza-item-name {\n    grid-area: name;\n    display: grid;\n    align-content: center; }\n  .pizza-item .pizza-item-prices {\n    font-size: 80%;\n    text-align: center;\n    grid-area: prices;\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n    align-items: center; }\n    .pizza-item .pizza-item-prices .pizza-item-price-single {\n      padding: 0 0.5em; }\n      .pizza-item .pizza-item-prices .pizza-item-price-single:not(:last-child) {\n        border-right: 2px solid var(--base-white); }\n  .pizza-item .pizza-item-ingredients {\n    grid-area: ingredients; }\n\n.cop-prices-container p {\n  text-align: center;\n  text-transform: uppercase;\n  padding: 1rem 0; }\n\n.cop-prices-container .cop-prices {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr); }\n  .cop-prices-container .cop-prices .cop-price-single {\n    text-align: center; }\n    .cop-prices-container .cop-prices .cop-price-single .cop-price-single-size {\n      white-space: nowrap; }\n    .cop-prices-container .cop-prices .cop-price-single .cop-price-single-value {\n      white-space: nowrap; }\n    .cop-prices-container .cop-prices .cop-price-single .cop-price-single-note {\n      font-size: 70%; }\n\n.cop-ingredient {\n  display: grid;\n  row-gap: 1rem; }\n\n.other-item-type .other-item, .other-item-type .other-item-with-ingredients {\n  display: grid;\n  grid-template-columns: 1fr auto; }\n  .other-item-type .other-item .other-item-price, .other-item-type .other-item-with-ingredients .other-item-price {\n    align-self: center; }\n\n.other-item-type .other-item-with-ingredients .other-item-ingredients {\n  grid: 2 / 1 / 3 / 3; }\n", "",{"version":3,"sources":["webpack://./src/menu.scss"],"names":[],"mappings":"AAAA;EAEI,aAAa;EACb,sBAAsB;EACtB,sBAAsB,EAAA;EAJ1B;IAOQ,mBAAe;IAEf,cAAc,EAAA;IATtB;MAYY,cAAc;MACd,kBAAkB;MAClB,mCAAmC;MACnC,2CAA2C;MAC3C,gBAAgB;MAEhB,aAAa;MACb,mBAAmB;MAEnB,+CAA+C;MAC/C,gCAAgC;MAEhC,yDAA6C,EAAA;IAxBzD;MA8BgB,mBAAmB,EAAA;;AAMnC;EACI,iBAAiB;EACjB,YAAY;EACZ,UAAU;EACV,yBAAiC;EACjC,wBAAwB;EACxB,yBAAyB;EACzB,kBAAkB;EAClB,+CAA+C;EAE/C,aAAa;EACb,qCAAqC;EACrC,mCAAmC;EACnC,SAAS,EAAA;EAbb;IAgBQ,0BAA0B,EAAA;EAhBlC;IAoBQ,WAAW;IACX,YAAY,EAAA;EArBpB;IA0BQ,wBAAwB,EAAA;EA1BhC;IA+BQ,aAAa;IACb,2BAA2B,EAAA;IAhCnC;MAmCY,0CAA0C,EAAA;IAnCtD;MAuCY,eAAe,EAAA;;AAS3B;EAGI,aAAa;EACb,mCAAmC;EACnC,aAAa;EACb,gFAEyC,EAAA;EAR7C;IAYQ,wBAAwB;IACxB,iBAAiB;IACjB,gBAAgB;IAChB,0CAA0C;IAE1C,yDAAyC;IACzC,2BAA2B;IAC3B,sBAAsB;IACtB,4BAA4B;IAE5B,iBAAiB;IACjB,aAAa;IACb,qBAAqB,EAAA;EAxB7B;IA8BQ,eAAe;IACf,aAAa;IACb,qBAAqB,EAAA;EAhC7B;IAqCQ,cAAc;IACd,kBAAkB;IAElB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB,EAAA;IA5C3B;MAgDY,gBAAgB,EAAA;MAhD5B;QAmDgB,yCAAyC,EAAA;EAnDzD;IA2DQ,sBAAsB,EAAA;;AAI9B;EAMQ,kBAAkB;EAClB,yBAAyB;EACzB,eAAe,EAAA;;AARvB;EAaQ,aAAa;EACb,qCAAqC,EAAA;EAd7C;IAiBY,kBAAkB,EAAA;IAjB9B;MAoBgB,mBAAmB,EAAA;IApBnC;MAuBgB,mBAAmB,EAAA;IAvBnC;MA0BgB,cAAc,EAAA;;AAM9B;EAEI,aAAa;EACb,aAAa,EAAA;;AAGjB;EAMQ,aAAa;EACb,+BAA+B,EAAA;EAPvC;IAcY,kBAAkB,EAAA;;AAd9B;EAmBY,mBAAmB,EAAA","sourcesContent":["#menu-page-btn-container {\r\n    // Grid\r\n    display: grid;\r\n    grid-auto-columns: 1fr;\r\n    grid-auto-flow: column;\r\n\r\n    a {\r\n        --growth-ratio: 1.2;\r\n\r\n        display: block;\r\n\r\n        span {\r\n            display: block;\r\n            padding: 0.5em 1em;\r\n            border: 2px solid var(--base-white);\r\n            font-size: calc(var(--growth-ratio) * 100%);\r\n            font-weight: 600;\r\n            // Grid\r\n            display: grid;\r\n            place-items: center;\r\n            // Transform\r\n            transform: scale(calc(1 / var(--growth-ratio)));\r\n            transition: transform 500ms ease;\r\n            // Background\r\n            background-image: url('./img/fondo_menu.jpg');\r\n        }\r\n\r\n        &:hover, &:active, &:focus {\r\n            span {\r\n                // Transform\r\n                transform: scale(1);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.menu-page {\r\n    margin: 1rem auto;\r\n    padding: 1em;\r\n    width: 80%;\r\n    background-color: rgb(138, 63, 6);\r\n    outline: 6px solid black;\r\n    border: 6px solid #c62a13;\r\n    border-radius: 1em;\r\n    box-shadow: inset 0px 0px 5px var(--base-black);\r\n    // Grid\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(2, auto);\r\n    gap: 1rem;\r\n\r\n    h2 {\r\n        text-transform: capitalize;\r\n    }\r\n\r\n    img {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .menu-logo {\r\n        // Grid\r\n        grid-area: 1 / 1 / 2 / 3;\r\n    }\r\n\r\n    .menu-column {\r\n        // Grid\r\n        display: grid;\r\n        grid-auto-rows: min-content;\r\n\r\n        > *:not(:last-child) {\r\n            border-bottom: 2px solid var(--base-white);\r\n        }\r\n\r\n        > * {\r\n            padding: 1rem 0;\r\n        }\r\n    }\r\n}\r\n\r\n#pizza-type-container {\r\n\r\n}\r\n\r\n.pizza-item {\r\n    //border: 2px solid white;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-columns: 2em 1fr auto;\r\n    row-gap: 1rem;\r\n    grid-template-areas: \r\n        \"number name prices\"\r\n        \"ingredients ingredients ingredients\";\r\n\r\n    .pizza-item-number {\r\n        //outline: 2px solid orange;\r\n        color: var(--base-white);\r\n        font-size: larger;\r\n        font-weight: 700;\r\n        text-shadow: 0px 0px 1em var(--base-black);\r\n        // Background\r\n        background-image: url('./img/tomato.png');\r\n        background-position: center;\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        // Grid\r\n        grid-area: number;\r\n        display: grid;\r\n        place-content: center;\r\n    }\r\n\r\n    .pizza-item-name {\r\n        //outline: 2px solid red;\r\n        // Grid\r\n        grid-area: name;\r\n        display: grid;\r\n        align-content: center;\r\n    }\r\n\r\n    .pizza-item-prices {\r\n        //outline: 2px solid green;\r\n        font-size: 80%;\r\n        text-align: center;\r\n        // Grid\r\n        grid-area: prices;\r\n        display: grid;\r\n        grid-auto-flow: column;\r\n        grid-auto-columns: 1fr;\r\n        align-items: center;\r\n\r\n        .pizza-item-price-single {\r\n            //outline: 2px solid red;\r\n            padding: 0 0.5em;\r\n\r\n            &:not(:last-child) {\r\n                border-right: 2px solid var(--base-white);\r\n            }\r\n        }\r\n    }\r\n\r\n    .pizza-item-ingredients {\r\n        //outline: 2px solid blue;\r\n        // Grid\r\n        grid-area: ingredients;\r\n    }\r\n}\r\n\r\n.cop-prices-container {\r\n    .cop-logo {\r\n\r\n    }\r\n\r\n    p {\r\n        text-align: center;\r\n        text-transform: uppercase;\r\n        padding: 1rem 0;\r\n    }\r\n\r\n    .cop-prices {\r\n        // Grid\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 1fr);\r\n\r\n        .cop-price-single {\r\n            text-align: center;\r\n\r\n            .cop-price-single-size {\r\n                white-space: nowrap;\r\n            }\r\n            .cop-price-single-value {\r\n                white-space: nowrap;\r\n            }\r\n            .cop-price-single-note {\r\n                font-size: 70%;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.cop-ingredient {\r\n    // Grid\r\n    display: grid;\r\n    row-gap: 1rem;\r\n}\r\n\r\n.other-item-type {\r\n    h2 {\r\n\r\n    }\r\n    .other-item, .other-item-with-ingredients {\r\n        // Grid\r\n        display: grid;\r\n        grid-template-columns: 1fr auto;\r\n\r\n        .other-item-name {\r\n\r\n        }\r\n\r\n        .other-item-price {\r\n            align-self: center;\r\n        }\r\n    }\r\n    .other-item-with-ingredients {\r\n        .other-item-ingredients {\r\n            grid: 2 / 1 / 3 / 3;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/meyer-reset.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/meyer-reset.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n", "",{"version":3,"sources":["webpack://./src/meyer-reset.scss"],"names":[],"mappings":"AAAA;;;CAGC;AAED;;;;;;;;;;;;;EAaC,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB,EAAA;;AAEzB,gDAAA;AACA;;EAEC,cAAc,EAAA;;AAEf;EACC,cAAc,EAAA;;AAEf;EACC,gBAAgB,EAAA;;AAEjB;EACC,YAAY,EAAA;;AAEb;;EAEC,WAAW;EACX,aAAa,EAAA;;AAEd;EACC,yBAAyB;EACzB,iBAAiB,EAAA","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fondo_Cabezera.jpg */ "./src/img/fondo_Cabezera.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/TexturesCom_Wall_BrickOld3A_2x1_256_albedo.jpg */ "./src/img/TexturesCom_Wall_BrickOld3A_2x1_256_albedo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/TexturesCom_Wall_BrickOld3A_2x1_512_albedo.jpg */ "./src/img/TexturesCom_Wall_BrickOld3A_2x1_512_albedo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/TexturesCom_Wall_BrickOld3A_2x1_1K_albedo.jpg */ "./src/img/TexturesCom_Wall_BrickOld3A_2x1_1K_albedo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --base-white: hsl(0,0%,90%);\n  --base-black: hsl(0,0%,10%);\n  --primary-color: #8c3f45;\n  --secondary-color: #285954;\n  --tertiary-color: #71873D; }\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nbody {\n  font-size: 1.6rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  color: var(--base-white); }\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 20vh 1fr 10vh; }\n\nheader {\n  background-color: #280f05;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: auto;\n  background-position: bottom;\n  display: grid;\n  grid-template-rows: 1fr auto; }\n  header img {\n    height: 100%;\n    width: auto; }\n  header .logo-container {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n\nmain {\n  background-color: #925642;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: top;\n  background-size: contain;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.white-text-shadow {\n  text-shadow: 0px 0px 5px var(--base-black); }\n\na {\n  text-decoration: none;\n  color: inherit; }\n\n/* Smallest (300px and down) */\n/* Extra small devices (phones, 300px and up) */\n@media only screen and (min-width: 300px) {\n  main {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + "); } }\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 600px) {\n  main {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + "); } }\n\n/* Medium devices (landscape tablets, 768px and up) */\n/* Large devices (laptops/desktops, 992px and up) */\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,2BAAa;EACb,2BAAa;EACb,wBAAgB;EAChB,0BAAkB;EAClB,yBAAiB,EAAA;;AAGrB;EACI,gBAAgB;EAChB,sBAAsB,EAAA;;AAG1B;EACI,mBAAmB,EAAA;;AAGvB;EACI,iBAAiB;EACjB,wIAAwI;EACxI,SAAS;EACT,wBAAwB,EAAA;;AAG5B;EACI,iBAAiB;EAEjB,aAAa;EACb,iCAAiC,EAAA;;AAGrC;EAEI,yBAAyB;EACzB,yDAAiD;EACjD,qBAAqB;EACrB,2BAA2B;EAE3B,aAAa;EACb,4BAA4B,EAAA;EARhC;IAWQ,YAAY;IACZ,WAAW,EAAA;EAZnB;IAgBQ,yDAAuC;IACvC,2BAA2B;IAC3B,4BAA4B;IAC5B,wBAAwB,EAAA;;AAIhC;EAEI,yBAAyB;EACzB,yDAA6E;EAC7E,wBAAwB;EACxB,wBAAwB;EAExB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB,EAAA;;AAKvB;EACI,0CAA0C,EAAA;;AAG9C;EACI,qBAAqB;EACrB,cAAc,EAAA;;AAKlB,8BAAA;AAGA,+CAAA;AACA;EACI;IACI,yDAA6E,EAAA,EAChF;;AAGL,oEAAA;AACA;EACI;IACI,yDAA4E,EAAA,EAC/E;;AAGL,qDAAA;AAGA,mDAAA;AAGA,oEAAA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n:root {\r\n    --base-white: hsl(0,0%,90%);\r\n    --base-black: hsl(0,0%,10%);\r\n    --primary-color: #8c3f45;\r\n    --secondary-color: #285954;\r\n    --tertiary-color: #71873D;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n*, *::before, *::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n    font-size: 1.6rem;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    margin: 0;\r\n    color: var(--base-white);\r\n}\r\n\r\n#content {\r\n    min-height: 100vh;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-rows: 20vh 1fr 10vh;\r\n}\r\n\r\nheader {\r\n    // Background\r\n    background-color: #280f05;\r\n    background-image: url('./img/fondo_Cabezera.jpg');\r\n    background-size: auto;\r\n    background-position: bottom;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-rows: 1fr auto;\r\n\r\n    img {\r\n        height: 100%;\r\n        width: auto;\r\n    }\r\n\r\n    .logo-container {\r\n        background-image: url('./img/logo.png');\r\n        background-position: center;\r\n        background-repeat: no-repeat;\r\n        background-size: contain;\r\n    }\r\n}\r\n\r\nmain {\r\n    // Background\r\n    background-color: #925642;\r\n    background-image: url('./img/TexturesCom_Wall_BrickOld3A_2x1_256_albedo.jpg');\r\n    background-position: top;\r\n    background-size: contain;\r\n    // Flex\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n// Misc\r\n\r\n.white-text-shadow {\r\n    text-shadow: 0px 0px 5px var(--base-black);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n// Media Queries\r\n\r\n/* Smallest (300px and down) */\r\n@media only screen and (max-width: 300px) {}\r\n\r\n/* Extra small devices (phones, 300px and up) */\r\n@media only screen and (min-width: 300px) {\r\n    main {\r\n        background-image: url('./img/TexturesCom_Wall_BrickOld3A_2x1_512_albedo.jpg');\r\n    }\r\n}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n@media only screen and (min-width: 600px) {\r\n    main {\r\n        background-image: url('./img/TexturesCom_Wall_BrickOld3A_2x1_1K_albedo.jpg');\r\n    }\r\n}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n@media only screen and (min-width: 768px) {}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n@media only screen and (min-width: 992px) {}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n@media only screen and (min-width: 1200px) {}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/top-nav.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/top-nav.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#topnav {\n  --growth-ratio: 1.2;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  #topnav .nav-link-container a {\n    outline: 2px solid var(--base-white);\n    padding: 0.5em 1em;\n    display: block;\n    transition: transform 500ms ease;\n    transform: scale(calc(1 / var(--growth-ratio)));\n    font-size: calc(var(--growth-ratio) * 100%); }\n    #topnav .nav-link-container a span {\n      display: block;\n      position: relative;\n      line-height: normal; }\n      #topnav .nav-link-container a span::before {\n        content: \"\";\n        background-color: var(--base-white);\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        height: 2px;\n        transition: all 500ms ease;\n        width: 0%;\n        opacity: 0; }\n    #topnav .nav-link-container a:hover, #topnav .nav-link-container a:focus, #topnav .nav-link-container a:active, #topnav .nav-link-container a.active {\n      transform: scale(1); }\n      #topnav .nav-link-container a:hover span::before, #topnav .nav-link-container a:focus span::before, #topnav .nav-link-container a:active span::before, #topnav .nav-link-container a.active span::before {\n        width: 100%;\n        opacity: 1; }\n", "",{"version":3,"sources":["webpack://./src/top-nav.scss"],"names":[],"mappings":"AAAA;EACI,mBAAe;EAEf,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;EALvB;IASY,oCAAoC;IACpC,kBAAkB;IAClB,cAAc;IAEd,gCAAgC;IAChC,+CAA+C;IAE/C,2CAA2C,EAAA;IAhBvD;MAmBgB,cAAc;MACd,kBAAkB;MAClB,mBAAmB,EAAA;MArBnC;QAwBoB,WAAW;QACX,mCAAmC;QAEnC,kBAAkB;QAClB,SAAS;QACT,OAAO;QACP,WAAW;QAEX,0BAA0B;QAE1B,SAAS;QACT,UAAU,EAAA;IAnC9B;MAwCgB,mBAAmB,EAAA;MAxCnC;QA4CwB,WAAW;QACX,UAAU,EAAA","sourcesContent":["#topnav {\r\n    --growth-ratio: 1.2;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n    .nav-link-container {\r\n        a {\r\n            outline: 2px solid var(--base-white);\r\n            padding: 0.5em 1em;\r\n            display: block;\r\n            // Transition\r\n            transition: transform 500ms ease;\r\n            transform: scale(calc(1 / var(--growth-ratio)));\r\n            // Font Size adjusted after scaled down by transform\r\n            font-size: calc(var(--growth-ratio) * 100%);\r\n    \r\n            span {\r\n                display: block;\r\n                position: relative;\r\n                line-height: normal;\r\n    \r\n                &::before {\r\n                    content: \"\";\r\n                    background-color: var(--base-white);\r\n                    // Absolute Position\r\n                    position: absolute;\r\n                    bottom: 0;\r\n                    left: 0;\r\n                    height: 2px;\r\n                    // Transition\r\n                    transition: all 500ms ease;\r\n                    // Transition Values\r\n                    width: 0%;\r\n                    opacity: 0;\r\n                }\r\n            }\r\n    \r\n            &:hover, &:focus, &:active, &.active {\r\n                transform: scale(1);\r\n    \r\n                span {\r\n                    &::before {\r\n                        width: 100%;\r\n                        opacity: 1;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/animated-logo.scss":
/*!********************************!*\
  !*** ./src/animated-logo.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_animated_logo_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./animated-logo.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/animated-logo.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_animated_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_animated_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_animated_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_animated_logo_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/contact.scss":
/*!**************************!*\
  !*** ./src/contact.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./contact.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/contact.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/footer.scss":
/*!*************************!*\
  !*** ./src/footer.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/gallery.scss":
/*!**************************!*\
  !*** ./src/gallery.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./gallery.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/gallery.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/home.scss":
/*!***********************!*\
  !*** ./src/home.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/home.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_home_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/initial-page-load.scss":
/*!************************************!*\
  !*** ./src/initial-page-load.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_initial_page_load_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./initial-page-load.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/initial-page-load.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_initial_page_load_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_initial_page_load_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_initial_page_load_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_initial_page_load_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/menu.scss":
/*!***********************!*\
  !*** ./src/menu.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/meyer-reset.scss":
/*!******************************!*\
  !*** ./src/meyer-reset.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyer_reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./meyer-reset.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/meyer-reset.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyer_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyer_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyer_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_meyer_reset_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/top-nav.scss":
/*!**************************!*\
  !*** ./src/top-nav.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_top_nav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./top-nav.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/top-nav.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_top_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_top_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_top_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_top_nav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/animated-logo.js":
/*!******************************!*\
  !*** ./src/animated-logo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnimatedLogoComponent)
/* harmony export */ });
/* harmony import */ var _img_logo_text_sign_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo-text-sign.png */ "./src/img/logo-text-sign.png");
/* harmony import */ var _img_logo_rooster_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo-rooster.png */ "./src/img/logo-rooster.png");
/* harmony import */ var _img_logo_trees_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/logo-trees.png */ "./src/img/logo-trees.png");
/* harmony import */ var _img_logo_image_sign_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/logo-image-sign.png */ "./src/img/logo-image-sign.png");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _animated_logo_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animated-logo.scss */ "./src/animated-logo.scss");







function AnimatedLogoComponent() {
    const _createImgElement = function(src, alt = '', className = '') {
        const element = document.createElement('img');
        element.src = src;
        if (alt) element.alt = alt;
        if (className) element.classList.add(className);
        return element;
    }

    const render = function() {
        const animatedLogoElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', {id: 'animated-logo'});

        animatedLogoElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', {'class': 'animated-logo-back'}, 
            _createImgElement(_img_logo_image_sign_png__WEBPACK_IMPORTED_MODULE_3__, '', 'logo-image-sign'),
            _createImgElement(_img_logo_trees_png__WEBPACK_IMPORTED_MODULE_2__, '', 'logo-trees'),
            _createImgElement(_img_logo_rooster_png__WEBPACK_IMPORTED_MODULE_1__, '', 'logo-rooster')
        ));

        animatedLogoElement.appendChild(_createImgElement(_img_logo_text_sign_png__WEBPACK_IMPORTED_MODULE_0__, '', 'logo-text-sign'));

        return animatedLogoElement;
    };

    return {render,};
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _img_Upcycled_Pizza_Peel_alpha_rotated_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/Upcycled_Pizza_Peel_alpha_rotated.png */ "./src/img/Upcycled_Pizza_Peel_alpha_rotated.png");
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.scss */ "./src/contact.scss");




function Contact() {
    let _pizzaBoardContainer = null;

    const _createPizzaBoardElement = function() {
        _pizzaBoardContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: 'pizza-board-container'});

        //_pizzaBoardContainer.appendChild(createElement('img', {src: PizzaBoardImg, alt: 'Pizza board.'}));

        return _pizzaBoardContainer;
    };

    const _createGoogleMap = function() {
        const mapIframe = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('iframe', {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.8274917562953!2d-121.78772128474887!3d36.91838877992433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e1af28a04eebf%3A0xa15c65fe0f81aad6!2sCorralitos%20Pizza!5e0!3m2!1sen!2sus!4v1652926025841!5m2!1sen!2sus",
            width: "600",
            height: "450", 
            style: "border:0;", 
            allowfullscreen: "", 
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
        });

        mapIframe.addEventListener('load', () => {
            _pizzaBoardContainer.classList.add('has-loaded');
        }, false);

        return mapIframe;
    };

    const render = function() {
        const element = document.createElement('main');

        // Location
        element.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {'class': 'location-container white-text-shadow'},
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, 'Our Location'),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, '1061 S. Green Valley Rd. Watsonville CA.')
        ));

        // Phone
        element.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {'class': 'phone-number white-text-shadow'}, 'Phone: (831) 722-7220'));

        // Pizza Board
        const pizzaBoardContainer = element.appendChild(_createPizzaBoardElement());

        // Google Map
        pizzaBoardContainer.appendChild(_createGoogleMap());

        return element;
    };

    return {render,};
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ "./src/footer.scss");



function Footer(copyrightYear) {
    const render = function() {
        const footer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('footer', {'class': 'white-text-shadow'});
        const currYear = new Date().getFullYear();

        // Paragraph element as child of footer
        let tempElement = footer.appendChild(document.createElement('p'));

        // Small element as child of paragraph
        tempElement = tempElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('small', {},
            'Source Code © ',
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('time', {id: 'copyright-year'}, currYear > copyrightYear ? `${copyrightYear}-${currYear}` : copyrightYear),
            ' Todd Brentlinger, Santa Cruz, CA, USA. All Rights Reserved.'
        ));

        return footer;
    };

    return {render,};
}

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gallery)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _data_galleryImgSources_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/galleryImgSources.json */ "./src/data/galleryImgSources.json");
/* harmony import */ var _gallery_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.scss */ "./src/gallery.scss");




function Gallery() {
    const _imageSources = [
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/xsqE022jcmlFM8uENB3NgA/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/xsqE022jcmlFM8uENB3NgA/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/S8XDRUTzLPB35bbdiCV5sw/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/S8XDRUTzLPB35bbdiCV5sw/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/m4_gptl8keikB1du7jAFkg/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/m4_gptl8keikB1du7jAFkg/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/_18aSdpsd6C-dyecADSVpg/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/_18aSdpsd6C-dyecADSVpg/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/nRi_IDpC0o_fuTBkRzX89A/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/nRi_IDpC0o_fuTBkRzX89A/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/ZnKj2RZNeELzl6_rTJAtvA/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/ZnKj2RZNeELzl6_rTJAtvA/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/mJS5mJnGSwrE7Im5RZVQ7A/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/mJS5mJnGSwrE7Im5RZVQ7A/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/CQZjS6gHEL5qjxR8rOFHmw/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/CQZjS6gHEL5qjxR8rOFHmw/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/tJvQBZSbJSuUpiOb8wNJVw/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/tJvQBZSbJSuUpiOb8wNJVw/o.jpg',
        },
        {
            'small': 'https://s3-media0.fl.yelpcdn.com/bphoto/KwmNL23Pt1vEpcnFyHtc5A/300s.jpg',
            'large': 'https://s3-media0.fl.yelpcdn.com/bphoto/KwmNL23Pt1vEpcnFyHtc5A/o.jpg',
        }
    ];

    // Index of last user selected image, initialized to null for NO selection
    let _selectedImgIndex = null;

    let _imgModalElement = null;
    let _imgModalContentElement = null;

    const _createFullImageModal = function() {
        const fullImgModal = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: 'full-img-modal', 'class': 'hide'});

        // Close button
        const close = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {id: 'img-modal-close'});
        close.innerHTML = '&times;';
        close.addEventListener('click', () => {
            fullImgModal.classList.add('hide');
        }, false);

        // Add header to modal with close button
        fullImgModal.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: 'img-modal-header'}, close));

        // Prev Button
        const prev = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {id: 'img-modal-prev'});
        prev.innerHTML = '&lsaquo;';
        prev.addEventListener('click', () => _openModalWithImgIndex(--_selectedImgIndex), false);

        // Next Button
        const next = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {id: 'img-modal-next'});
        next.innerHTML = '&rsaquo;';
        next.addEventListener('click', () => _openModalWithImgIndex(++_selectedImgIndex), false);

        // Image Content
        _imgModalContentElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {id: 'img-modal-content', alt: ''});

        // Add main to modal
        fullImgModal.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: 'img-modal-main'}, 
            prev,
            next,
            _imgModalContentElement,
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: 'img-modal-caption'}, 'Caption Description')
        ));

        return fullImgModal;
    };

    const _openModalWithImgIndex = function(index) {
        // If index less than 0, wrap around to last item
        if (index < 0) 
            index = _data_galleryImgSources_json__WEBPACK_IMPORTED_MODULE_1__.yelp.length - 1;
        // If index more than array, wrap around to first item
        else if (index >= _data_galleryImgSources_json__WEBPACK_IMPORTED_MODULE_1__.yelp.length)
            index = 0;
        
        _selectedImgIndex = index;
        _imgModalContentElement.src = `https://s3-media0.fl.yelpcdn.com/bphoto/${_data_galleryImgSources_json__WEBPACK_IMPORTED_MODULE_1__.yelp[index]}/o.jpg`;
        _imgModalElement.classList.remove('hide');
    };

    const _createGalleryItem = function(yelpId, index) {
        const imgElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            'img', 
            {
                'src': `https://s3-media0.fl.yelpcdn.com/bphoto/${yelpId}/300s.jpg`, 
                alt: '', 
                width: '300', 
                height: '300'
            }
        );

        const galleryItemAnchor = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {href: '', 'class': 'gallery-item'}, imgElement);
        galleryItemAnchor.addEventListener('click', e => {
            e.preventDefault();
            _openModalWithImgIndex(index);
        }, false);

        return galleryItemAnchor;
    };

    const render = function() {
        const element = document.createElement('main');

        const galleryElement = element.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: 'gallery'}));
        debugger;
        _data_galleryImgSources_json__WEBPACK_IMPORTED_MODULE_1__.yelp.forEach((yelpId, index) => {
            galleryElement.appendChild(_createGalleryItem(yelpId, index));
        });

        _imgModalElement = element.appendChild(_createFullImageModal());

        return element;
    };

    return {render,};
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _animated_logo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animated-logo.js */ "./src/animated-logo.js");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.scss */ "./src/home.scss");




function Home() {
    const render = function() {
        const element = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('main');
        
        // Logo
        element.appendChild((0,_animated_logo_js__WEBPACK_IMPORTED_MODULE_1__["default"])().render());

        // Tagline
        element.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: 'tagline', 'class': 'white-text-shadow'}, 
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, 'Gourmet Pizza...'),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, 'We use only the best ingredients: '),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, 'farm fresh vegetables, locally harvested, high quality mozzarella, savory locally produced meats.')
        ));

        return element;
    };

    return {render,}
}

/***/ }),

/***/ "./src/initial-page-load.js":
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialPageLoad)
/* harmony export */ });
/* harmony import */ var _meyer_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meyer-reset.scss */ "./src/meyer-reset.scss");
/* harmony import */ var _initial_page_load_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-page-load.scss */ "./src/initial-page-load.scss");
/* harmony import */ var _top_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-nav.js */ "./src/top-nav.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");








function initialPageLoad() {
    console.log('Initial Page Load');
    
    const contentElement = document.getElementById('content');
    if (!contentElement) return;

    // Header
    //let tempElement = document.createElement('header');
    let tempElement = contentElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_5__.createElement)('header'));
    // Header - Logo Image
    const imgContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_5__.createElement)('div', {'class': 'logo-container'});
    tempElement.appendChild(imgContainer);
    // Header - Top Nav
    tempElement.appendChild((0,_top_nav_js__WEBPACK_IMPORTED_MODULE_2__["default"])().render());

    // Main
    contentElement.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])().render());
    // tempElement = document.createElement('main');
    // contentElement.appendChild(tempElement);
    // // Main - Logo
    // tempElement.appendChild(AnimatedLogoComponent().render());
    
    // Footer
    contentElement.appendChild((0,_footer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(2022).render());
    // tempElement = document.createElement('footer');
    // contentElement.appendChild(tempElement);
    // // Footer - Text
    // tempElement.appendChild(createElement('p', {}, 'Gourmet Pizza...'));
    // tempElement.appendChild(createElement('p', {}, 'We use only the best ingredients: farm fresh vegetables, locally harvested, high quality mozzarella, savory locally produced meats.'));

}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _data_menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/menu.json */ "./src/data/menu.json");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.scss */ "./src/menu.scss");
/* harmony import */ var _img_titulo_menu_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/titulo_menu.png */ "./src/img/titulo_menu.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_titulo_menu2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/titulo_menu2.png */ "./src/img/titulo_menu2.png");
/* harmony import */ var _data_menu_pdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/menu.pdf */ "./src/data/menu.pdf");








function Menu() {
    let pageSelected = 1;

    const _createPizzaElement = function(pizzaObj, number) {
        const pizzaElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'pizza-item'});

        // Number
        pizzaElement.appendChild(
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'pizza-item-number'}, number)
        );

        // Name
        pizzaElement.appendChild(
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', {'class': 'pizza-item-name'}, pizzaObj.name)
        );

        // Prices
        pizzaElement.appendChild(
            _createPizzaPricesElement(pizzaObj.prices)
        );

        // Ingredients
        pizzaElement.appendChild(
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'pizza-item-ingredients'}, pizzaObj.ingredients)
        );

        return pizzaElement;
    };

    const _createPizzaSizeTextContent = function(index) {
        const sizeObj = _data_menu_json__WEBPACK_IMPORTED_MODULE_0__.pizzaSizes[index];
        // Get uppercase letters of size name
        // Append size with quotation mark for inches
        return `${sizeObj.name.match(/^[A-Z]+/)[0]}${sizeObj.size}"`;
    };

    const _createPizzaPricesElement = function(pricesArr) {
        const pricesElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'pizza-item-prices'});
        let container, tempElement;
        pricesArr.forEach((price, index) => {
            // Container
            container = pricesElement.appendChild(
                (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'pizza-item-price-single'})
            );
            // Size
            container.appendChild(
                (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                    'div', 
                    {'class': 'pizza-item-price-size'}, 
                    _createPizzaSizeTextContent(index)
                )
            );
            // Value
            container.appendChild(
                (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'pizza-item-price-value'}, price)
            );
        });
        return pricesElement;
    };

    const _createOwnPizzaIngredientElement = function(ingredientType, ingredientList) {
        const ingredientElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'cop-ingredient'});
        ingredientElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', {'class': 'cop-ingredient-type'}, ingredientType));
        ingredientElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'cop-ingredient-list'}, ingredientList));
        return ingredientElement;
    };

    const _createOwnPizzaPricesElement = function() {
        const copPricesElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'cop-prices-container'});
        copPricesElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('img', {'src': _img_titulo_menu2_png__WEBPACK_IMPORTED_MODULE_5__, 'alt': 'Create own pizza logo.', 'class': 'cop-logo'}));
        copPricesElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {}, 'Red Sauce Base and Mozzarella Cheese'));
        const copPriceGrid = copPricesElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'cop-prices'}));
        let copPriceGridItem;
        _data_menu_json__WEBPACK_IMPORTED_MODULE_0__.pizzaSizes.forEach(pizzaSizeObj => {
            copPriceGridItem = copPriceGrid.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'cop-price-single'}));
            copPriceGridItem.appendChild(
                (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                    'div', 
                    {'class': 'cop-price-single-size'}, 
                    `${pizzaSizeObj.name} ${pizzaSizeObj.size}"`
                )
            );
            copPriceGridItem.appendChild(
                (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                    'div', 
                    {'class': 'cop-price-single-value'}, 
                    `$${pizzaSizeObj.price}`
                )
            );
            copPriceGridItem.appendChild(
                (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                    'div', 
                    {'class': 'cop-price-single-note'}, 
                    `(Add $${pizzaSizeObj.priceAddPerTopping} per topping)`
                )
            );
        });
        return copPricesElement;
    };

    const _createFirstPage = function() {
        const menuPage = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-page'});

        // Menu Logo
        menuPage.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('img', {'src': _img_titulo_menu_png__WEBPACK_IMPORTED_MODULE_3__, 'alt': 'Menu logo.', 'class': 'menu-logo'}));

        let column = menuPage.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-column'}));

        // Pizzas
        _data_menu_json__WEBPACK_IMPORTED_MODULE_0__.pizza.forEach((pizza, index) => {
            // Change to new column after twelve pizza types
            if (index === 12) {
                column = menuPage.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-column'}));
            }
            column.appendChild(_createPizzaElement(pizza, index + 1));
        });

        // Create Own Pizza
        column.appendChild(_createOwnPizzaPricesElement());
        for (const [key, value] of Object.entries(_data_menu_json__WEBPACK_IMPORTED_MODULE_0__.createOwnPizza)) {
            column.appendChild(_createOwnPizzaIngredientElement(key, value));
        }

        return menuPage;
    };

    const _createOtherItemTypeElement = function(otherItemType, otherItemArr) {
        const otherItemTypeElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'other-item-type'});

        otherItemTypeElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', {}, otherItemType));

        let otherItemElement;

        otherItemArr.forEach(otherItem => {
            otherItemElement = otherItemTypeElement.appendChild(
                (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(
                    'div', 
                    {'class': otherItem.hasOwnProperty('ingredients') ? 'other-item-with-ingredients' : 'other-item'}
                )
            );
            // Name
            otherItemElement.appendChild(
                (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'other-item-name'}, otherItem.name)
            );

            // Price
            otherItemElement.appendChild(
                (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'other-item-price'}, `$${otherItem.price.toFixed(2)}`)
            );

            // Ingredients
            if (otherItem.hasOwnProperty('ingredients')) {
                otherItemElement.appendChild(
                    (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'other-item-ingredients'}, otherItem.ingredients)
                );
            }
        });

        return otherItemTypeElement;
    };

    const _createSecondPage = function() {
        const menuPage = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-page'});

        // Menu Logo
        menuPage.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('img', {'src': _img_titulo_menu_png__WEBPACK_IMPORTED_MODULE_3__, 'alt': 'Menu logo.', 'class': 'menu-logo'}));

        // First Column
        let column = menuPage.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-column'}));

        // Other Items
        for (const [otherItemType, otherItemTypeArr] of Object.entries(_data_menu_json__WEBPACK_IMPORTED_MODULE_0__.otherItems)) {
            column.appendChild(_createOtherItemTypeElement(otherItemType, otherItemTypeArr));
        }

        // Gluten Free Crust
        column.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(
            'div', 
            {'class': 'gluten-free-crust-container'},
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {'class': 'gluten-intro-msg'}, 'Now choose your pizza with'),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {'class': 'gluten-intro-name'}, 'Gluten Free Crust'),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {'class': 'gluten-price'}, '*** Extra Cost $5.00 ***')
        ));

        // Hours
        column.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(
            'div', 
            {'class': 'hours-container'},
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {}, 'Our Hours...'),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {}, 'We\'re open 7 days a week'),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {}, 'Sunday to Thursday 11 am to 9:30 pm'),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {}, 'Friday to Saturday 11 am to 10:30 pm'),
        ));

        // Second Column
        column = menuPage.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-column'}));

        // Logo
        column.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('img', {'src': _img_logo_png__WEBPACK_IMPORTED_MODULE_4__, 'alt': 'Corralitos Pizza logo.'}));

        // Tagline
        column.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(
            'div', 
            {'class': 'tagline-container'},
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {}, 'Gourmet Pizza...'),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {}, 'We use only the best ingredients: '),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {}, 'farm fresh vegetables, locally harvested, high quality mozzarella, savory locally produced meats.')
        ));

        // Address
        column.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(
            'div', 
            {'class': 'menu-misc-data-item'},
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-misc-data-logo'}),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-misc-data-value'}, '1061 S. Green Valley Rd. Watsonvile, CA 95076')
        ));

        // Facebook
        column.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(
            'div', 
            {'class': 'menu-misc-data-item'},
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-misc-data-logo'}),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-misc-data-value'}, 'Corralitos Pizza')
        ));

        // Phone
        column.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(
            'div', 
            {'class': 'menu-misc-data-item'},
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-misc-data-logo'}),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-misc-data-value'}, '(831) 722 7220'),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {'class': 'menu-misc-data-note'}, 'Call for carry out or safe delivery we deliver to Aptos, Freedom, Watsonville, San Andreas, Corralitos, Larkin Valley.')
        ));

        // Website
        column.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(
            'div', 
            {'class': 'menu-misc-data-item'},
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-misc-data-logo'}),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-misc-data-value'}, 'Visit out website'),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', {'class': 'menu-misc-data-note'}, 'www.corralitospizzadelivery.com')
        ));

        return menuPage;
    };

    const _createMenuPageButtons = function() {
        const btnContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {id: 'menu-page-btn-container'});

        // Page 1
        let btn = btnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {'href': ''}));
        btn.addEventListener('click', e => {
            e.preventDefault();
            pageSelected = 1;
            _updateMenu();
        }, false);
        btn.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', {'class': 'white-text-shadow'}, 'Page 1'));

        // Page 2
        btn = btnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {href: ''}));
        btn.addEventListener('click', e => {
            e.preventDefault();
            pageSelected = 2;
            _updateMenu();
        }, false);
        btn.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', {'class': 'white-text-shadow'}, 'Page 2'));

        // PDF
        btn = btnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {href: _data_menu_pdf__WEBPACK_IMPORTED_MODULE_6__, target: '_blank'}));
        btn.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', {'class': 'white-text-shadow'}, 'PDF'));

        return btnContainer;
    };

    const _updateMenu = function() {
        const element = document.querySelector('.menu-page');

        switch(pageSelected) {
            case 2:
                element.replaceWith(_createSecondPage());
                break;
            default: // Show first page by default
                element.replaceWith(_createFirstPage());
        }
    };

    const render = function() {
        const element = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('main');

        // Menu Page Buttons
        element.appendChild(_createMenuPageButtons());

        // Menu Page
        switch(pageSelected) {
            case 2:
                element.appendChild(_createSecondPage());
                break;
            default: // Show first page by default
                element.appendChild(_createFirstPage());
        }
        
        return element;
    };

    return {render,};
}

/***/ }),

/***/ "./src/top-nav.js":
/*!************************!*\
  !*** ./src/top-nav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TopNav)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.js */ "./src/gallery.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _top_nav_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-nav.scss */ "./src/top-nav.scss");







function TopNav() {
    const _createNavAnchor = function(textContent, href = '', bIsActiveTab = false) {
        const anchorElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {'href': href}, (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {}, textContent));

        if (bIsActiveTab)
            anchorElement.classList.add('active');
        
        anchorElement.addEventListener('click', e => {
            e.preventDefault();
            _handleNavItemClick(e, textContent.toLowerCase());
        }, false);

        return (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {'class': 'nav-link-container'}, anchorElement);
    };

    const _clearMain = function() {
        const mainElement = document.querySelector('main');
        while (mainElement.firstChild) {
            mainElement.removeChild(mainElement.firstChild)
        }
    };

    const _removeActiveClassFromTabs = function() {
        document.querySelectorAll('#topnav a').forEach(
            tab => tab.classList.remove('active')
        );
    };

    const _handleNavItemClick = function(e, type) {
        switch(type) {
            case 'home':
                _removeActiveClassFromTabs();
                e.currentTarget.classList.add('active');
                _clearMain();
                document.querySelector('main').replaceWith((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])().render());
                break;
            case 'gallery':
                _removeActiveClassFromTabs();
                e.currentTarget.classList.add('active');
                _clearMain();
                document.querySelector('main').replaceWith((0,_gallery_js__WEBPACK_IMPORTED_MODULE_2__["default"])().render());
                break;
            case 'menu':
                _removeActiveClassFromTabs();
                e.currentTarget.classList.add('active');
                _clearMain();
                document.querySelector('main').replaceWith((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])().render());
                break;
            case 'contact':
                _removeActiveClassFromTabs();
                e.currentTarget.classList.add('active');
                _clearMain();
                document.querySelector('main').replaceWith((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])().render());
                break;
            default:
        }
    };
    
    const render = function() {
        const tabElements = [
            _createNavAnchor('Home', '', true),
            _createNavAnchor('Gallery'),
            _createNavAnchor('Menu'),
            _createNavAnchor('Contact'),
        ];

        const topNavElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            'nav', 
            {id: 'topnav'},
            ...tabElements
        );

        return topNavElement;
    };

    return {render,}
}

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
/**
 * 
 * @param {String} type - Element type
 * @param {Object} props - Element attribute names and their corresponding value 
 * @param  {...Node} children - Variable number of child nodes 
 */
function createElement(type, props = {}, ...children) {
    const element = document.createElement(type);

    // Props
    for (const [key, value] of Object.entries(props)) {
        element.setAttribute(key, value);
    }

    // Children Nodes
    children.forEach(child => element.append(child));

    return element;
}

/***/ }),

/***/ "./src/data/menu.pdf":
/*!***************************!*\
  !*** ./src/data/menu.pdf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34124457d8d59a66fed4.pdf";

/***/ }),

/***/ "./src/img/TexturesCom_Wall_BrickOld3A_2x1_1K_albedo.jpg":
/*!***************************************************************!*\
  !*** ./src/img/TexturesCom_Wall_BrickOld3A_2x1_1K_albedo.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d1df96b9f2a73f8cc30.jpg";

/***/ }),

/***/ "./src/img/TexturesCom_Wall_BrickOld3A_2x1_256_albedo.jpg":
/*!****************************************************************!*\
  !*** ./src/img/TexturesCom_Wall_BrickOld3A_2x1_256_albedo.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b38fb84a96ff86c6ffbd.jpg";

/***/ }),

/***/ "./src/img/TexturesCom_Wall_BrickOld3A_2x1_512_albedo.jpg":
/*!****************************************************************!*\
  !*** ./src/img/TexturesCom_Wall_BrickOld3A_2x1_512_albedo.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c95535627b116171b2ef.jpg";

/***/ }),

/***/ "./src/img/Upcycled_Pizza_Peel_alpha_rotated.png":
/*!*******************************************************!*\
  !*** ./src/img/Upcycled_Pizza_Peel_alpha_rotated.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecbb9aa038d0750ed116.png";

/***/ }),

/***/ "./src/img/fondo_Cabezera.jpg":
/*!************************************!*\
  !*** ./src/img/fondo_Cabezera.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcc4f8f73983db67e939.jpg";

/***/ }),

/***/ "./src/img/fondo_menu.jpg":
/*!********************************!*\
  !*** ./src/img/fondo_menu.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5b2531d928f03754213.jpg";

/***/ }),

/***/ "./src/img/fondo_pie_240x41.jpg":
/*!**************************************!*\
  !*** ./src/img/fondo_pie_240x41.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "685bbfbcb33cc46f16c8.jpg";

/***/ }),

/***/ "./src/img/fondo_pie_480x82.jpg":
/*!**************************************!*\
  !*** ./src/img/fondo_pie_480x82.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3220bc4aff5b093c7db1.jpg";

/***/ }),

/***/ "./src/img/fondo_pie_960x164.jpg":
/*!***************************************!*\
  !*** ./src/img/fondo_pie_960x164.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0019133ad34a32cb5d82.jpg";

/***/ }),

/***/ "./src/img/logo-image-sign.png":
/*!*************************************!*\
  !*** ./src/img/logo-image-sign.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72a43decb02bc987c2c3.png";

/***/ }),

/***/ "./src/img/logo-rooster.png":
/*!**********************************!*\
  !*** ./src/img/logo-rooster.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c666b49f6f28b1ed6ab.png";

/***/ }),

/***/ "./src/img/logo-text-sign.png":
/*!************************************!*\
  !*** ./src/img/logo-text-sign.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48e19c268a96eb900b92.png";

/***/ }),

/***/ "./src/img/logo-trees.png":
/*!********************************!*\
  !*** ./src/img/logo-trees.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c2edbfbd1a00511fcbf.png";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50b7bab534adc2dc850a.png";

/***/ }),

/***/ "./src/img/titulo_menu.png":
/*!*********************************!*\
  !*** ./src/img/titulo_menu.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e75634de4a9c3615c813.png";

/***/ }),

/***/ "./src/img/titulo_menu2.png":
/*!**********************************!*\
  !*** ./src/img/titulo_menu2.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e37017607b8d6a5e8cfe.png";

/***/ }),

/***/ "./src/img/tomato.png":
/*!****************************!*\
  !*** ./src/img/tomato.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "883e9bc8aa9fea1e1aa8.png";

/***/ }),

/***/ "./src/data/galleryImgSources.json":
/*!*****************************************!*\
  !*** ./src/data/galleryImgSources.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"yelp":["xsqE022jcmlFM8uENB3NgA","S8XDRUTzLPB35bbdiCV5sw","m4_gptl8keikB1du7jAFkg","_18aSdpsd6C-dyecADSVpg","nRi_IDpC0o_fuTBkRzX89A","ZnKj2RZNeELzl6_rTJAtvA","mJS5mJnGSwrE7Im5RZVQ7A","CQZjS6gHEL5qjxR8rOFHmw","tJvQBZSbJSuUpiOb8wNJVw","KwmNL23Pt1vEpcnFyHtc5A"]}');

/***/ }),

/***/ "./src/data/menu.json":
/*!****************************!*\
  !*** ./src/data/menu.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"pizza":[{"name":"Delicious Manzanitta","ingredients":"Olive oil sauce, mozzarella, corralitos sausage, cooked with cinnamon apples, bacon, fresh garlic, gorgonzola cheese.","prices":[16.99,22.99,28.99,34.99]},{"name":"Green Gardens","ingredients":"Pesto sauce, mozzarella, spinach, artichokes, feta cheese, fresh tomatoes after cooking.","prices":[16.99,22.99,28.99,34.99]},{"name":"The Greek","ingredients":"Candied onion base, mozzarella, artichokes, roasted red peppers, greek olives, goat cheese, vegetable seasoning.","prices":[16.99,22.99,28.99,34.99]},{"name":"Veggie Mia","ingredients":"Red sauce, mozzarella, zucchini, mushroom, green peppers, red onions, tomatoes, black olives, vegetable seasoning.","prices":[16.99,22.99,28.99,34.99]},{"name":"Pizza Caliente","ingredients":"Red sauce, mozzarella, tomatoes, red onions, italian sausage, chorizo, jalapeño, (choice of habanero peppers).","prices":[16.99,22.99,28.99,34.99]},{"name":"Coucere BBQ Chicken","ingredients":"BBQ sauce, mozzarella, grilled chicken, red onion, gouda cheese, cilantro after cooking.","prices":[16.99,22.99,28.99,34.99]},{"name":"Chicken Cilantro & Garlic","ingredients":"Creamy ranch sauce, grilled chicken, candied onions, fresh garlic, cilantro (dude\'s special add: bacon, jalapeños).","prices":[16.99,22.99,28.99,34.99]},{"name":"Carnosso (All Meat)","ingredients":"Red sauce, mozzarella, pepperoni, ham, salami, linguica, bacon, corralitos sausage, italian sausage, fresh garlic.","prices":[17.99,23.99,30.99,35.99]},{"name":"Honolulu","ingredients":"Red sauce, mozzarella, ham, pineapple.","prices":[14.99,20.99,26.99,32.99]},{"name":"Dude\'s Pizza Special","ingredients":"Red sauce, mozzarella, ham, pineapple, bacon, jalapeños.","prices":[16.99,22.99,28.99,34.99]},{"name":"Margareth","ingredients":"Red sauce, mozzarella, sliced tomatoes, fresh garlic, parmesan cheese, pesto after cooking.","prices":[14.99,20.99,26.99,32.99]},{"name":"Peperachi Combo","ingredients":"Red sauce, mozzarella, pepperoni, ham, mushrooms, green peppers, italian sausage.","prices":[16.99,22.99,28.99,34.99]},{"name":"Trevor\'s Combo","ingredients":"Red sauce, mozzarella, pepperoni, mushroom, green peppers, red onion, fresh tomatoes, italian sausage.","prices":[13.99,18.99,23.99,29.99]},{"name":"Roma-Cheezy (6 Times Cheese)","ingredients":"Olive oil sauce, mozzarella, feta cheese, gorgonzola cheese, gouda cheese, goat cheese, parmesan cheese, fresh bruschetta after cooking.","prices":[16.99,22.99,28.99,34.99]},{"name":"Portobello Santa Cruz","ingredients":"Pesto sauce, mozzarella, portobello mushroom, green olives, feta cheese.","prices":[16.99,22.99,28.99,34.99]},{"name":"Pesto Chicken","ingredients":"Pesto sauce, mozzarella, spinach, grilled chicken, tomatoes, fresh garlic, feta cheese.","prices":[16.99,22.99,28.99,34.99]},{"name":"Asian Peanut Sauce","ingredients":"Peanut sauce, mozzarella, grilled chicken, carrots, red onions, peanuts, cilantro after cooking.","prices":[16.99,22.99,28.99,34.99]}],"pizzaSizes":[{"name":"Small","size":10,"price":12.75,"priceAddPerTopping":1.1},{"name":"Medium","size":12,"price":17.95,"priceAddPerTopping":1.45},{"name":"Large","size":14,"price":20.75,"priceAddPerTopping":1.85},{"name":"XLarge","size":18,"price":25.25,"priceAddPerTopping":2.25}],"createOwnPizza":{"sauces":"Fresh tomatoe sauce, pesto sauce, creamy ranch sauce, garlic olive oil sauce, asian peanut sauce, BBQ sauce.","meats":"Pepperoni, salami, linguica, ham, bacon, italian sausage, corralitos sausage, chicken, chorizo.","vegetables":"Mushrooms, portobello mushrooms, onions, candied onions, tomatoes, green bell peppers, roasted red peppers, artichokes, black olives, green olives, greek olives, carrots, cilantro, fresh garlic, pineapple, zucchini, pine nuts, peanuts, peperoncini peppers, habanero peppers.","cheeses":"Feta cheese, gouda cheese, goat cheese, gorgonzola cheese, parmesan cheese, romano cheese."},"otherItems":{"salads":[{"name":"Italian","ingredients":"Romaine lettuce, parmesan, salami, capicola ham, pepperoni, croutons, italian dressing.","price":10},{"name":"Roma Salad","ingredients":"Romaine lettuce, parmesan, crusted croutons, caesar dressing.","price":9},{"name":"The Gardens","ingredients":"Romaine lettuce, tomatoes, onions, cucumbers, black olives, pepperoncini peppers, balsamic vinegar.","price":9}],"appetizers":[{"name":"Chicken wings (BBQ or Buffalo) (6 piece)","price":10},{"name":"Mozzarella sticks (6 piece)","price":7.99},{"name":"Garlic bread sticks with cheese (10\\")","price":9.99},{"name":"Italian Calzone","price":16.99}],"desserts":[{"name":"Chocolate cake","price":3.75}],"beverages":[{"name":"Can","price":2},{"name":"Bottles","price":3}],"slices":[{"name":"Cheese","price":5},{"name":"Pepperoni","price":5},{"name":"Combination","price":5}],"sides":[{"name":"Ranch, jalapeños, anchovies, marinara sauce, buffalo sauce, BBQ sauce, pesto basil sauce, garlic olive oil.","price":1.65}]}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-load.js */ "./src/initial-page-load.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");

//import AnimatedLogoComponent from './animated-logo.js';


function component() {
    //return AnimatedLogoComponent().render();
    return (0,_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

//document.body.appendChild(component());
(0,_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxRDtBQUNyRDtBQUNzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlFQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FuaW1hdGVkLWxvZ28uc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3Quc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbC1wYWdlLWxvYWQuc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21leWVyLXJlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdG9wLW5hdi5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FuaW1hdGVkLWxvZ28uc2Nzcz8xYTQ2Iiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5zY3NzP2ViNTYiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuc2Nzcz9iMTU1Iiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5zY3NzP2QxYzgiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLnNjc3M/ZTE0MiIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwtcGFnZS1sb2FkLnNjc3M/YWM1ZSIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuc2Nzcz84ZDgzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWV5ZXItcmVzZXQuc2Nzcz8xZGIyIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdG9wLW5hdi5zY3NzPzY3NTkiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FuaW1hdGVkLWxvZ28uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLXBhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy90b3AtbmF2LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNhbmltYXRlZC1sb2dvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNDA2cHg7XFxuICB3aWR0aDogNjA2cHg7IH1cXG4gICNhbmltYXRlZC1sb2dvID4gKiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDsgfVxcbiAgI2FuaW1hdGVkLWxvZ28gLmFuaW1hdGVkLWxvZ28tYmFjayB7XFxuICAgIC0tbG9nby1iYWNrLWhlaWdodC1wZXJjZW50YWdlOiA3MCU7XFxuICAgIGhlaWdodDogdmFyKC0tbG9nby1iYWNrLWhlaWdodC1wZXJjZW50YWdlKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAjYW5pbWF0ZWQtbG9nbyAuYW5pbWF0ZWQtbG9nby1iYWNrID4gKiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyB9XFxuICAgICNhbmltYXRlZC1sb2dvIC5hbmltYXRlZC1sb2dvLWJhY2sgLmxvZ28taW1hZ2Utc2lnbiB7XFxuICAgICAgYW5pbWF0aW9uLW5hbWU6IGxvZ28taW1hZ2Utc2lnbi1zbGlkZTsgfVxcbiAgICAjYW5pbWF0ZWQtbG9nbyAuYW5pbWF0ZWQtbG9nby1iYWNrIC5sb2dvLXRyZWVzIHtcXG4gICAgICBhbmltYXRpb24tbmFtZTogbG9nby10cmVlcy1zbGlkZTsgfVxcbiAgICAjYW5pbWF0ZWQtbG9nbyAuYW5pbWF0ZWQtbG9nby1iYWNrIC5sb2dvLXJvb3N0ZXIge1xcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBsb2dvLXJvb3N0ZXItc2xpZGU7IH1cXG4gICNhbmltYXRlZC1sb2dvIC5sb2dvLXRleHQtc2lnbiB7XFxuICAgIGJvdHRvbTogMDsgfVxcblxcbkBrZXlmcmFtZXMgbG9nby1zbGlkZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7IH0gfVxcblxcbkBrZXlmcmFtZXMgbG9nby1pbWFnZS1zaWduLXNsaWRlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGxvZ28tdHJlZXMtc2xpZGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGxvZ28tcm9vc3Rlci1zbGlkZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hbmltYXRlZC1sb2dvLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVksRUFBQTtFQUhoQjtJQU1RLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVEsRUFBQTtFQVRoQjtJQWFRLGtDQUE4QjtJQUU5QiwwQ0FBMEM7SUFDMUMsZ0JBQWdCLEVBQUE7SUFoQnhCO01BbUJZLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sT0FBTztNQUNQLFNBQVM7TUFDVCxRQUFRO01BR1Isc0JBQXNCO01BQ3RCLG1DQUFtQyxFQUFBO0lBM0IvQztNQStCWSxxQ0FBcUMsRUFBQTtJQS9CakQ7TUFtQ1ksZ0NBQWdDLEVBQUE7SUFuQzVDO01BdUNZLGtDQUFrQyxFQUFBO0VBdkM5QztJQTRDUSxTQUFTLEVBQUE7O0FBSWpCO0VBQ0k7SUFDSSwyQkFBMkIsRUFBQTtFQUUvQjtJQUNJLHlCQUF5QixFQUFBLEVBQUE7O0FBSWpDO0VBQ0k7SUFDSSwwQkFBMEIsRUFBQTtFQUU5QjtJQUNJLHlCQUF5QixFQUFBLEVBQUE7O0FBSWpDO0VBQ0k7SUFDSSwyQkFBMkIsRUFBQTtFQUUvQjtJQUNJLHlCQUF5QixFQUFBLEVBQUE7O0FBSWpDO0VBQ0k7SUFDSSwyQkFBMkIsRUFBQTtFQUUvQjtJQUNJLHlCQUF5QixFQUFBLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2FuaW1hdGVkLWxvZ28ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogNDA2cHg7XFxyXFxuICAgIHdpZHRoOiA2MDZweDtcXHJcXG5cXHJcXG4gICAgPiAqIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYW5pbWF0ZWQtbG9nby1iYWNrIHtcXHJcXG4gICAgICAgIC0tbG9nby1iYWNrLWhlaWdodC1wZXJjZW50YWdlOiA3MCU7XFxyXFxuXFxyXFxuICAgICAgICBoZWlnaHQ6IHZhcigtLWxvZ28tYmFjay1oZWlnaHQtcGVyY2VudGFnZSk7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgPiAqIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvblxcclxcbiAgICAgICAgICAgIC8vYW5pbWF0aW9uLW5hbWU6IGxvZ28tc2xpZGU7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5sb2dvLWltYWdlLXNpZ24ge1xcclxcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvblxcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBsb2dvLWltYWdlLXNpZ24tc2xpZGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAubG9nby10cmVlcyB7XFxyXFxuICAgICAgICAgICAgLy8gQW5pbWF0aW9uXFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGxvZ28tdHJlZXMtc2xpZGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAubG9nby1yb29zdGVyIHtcXHJcXG4gICAgICAgICAgICAvLyBBbmltYXRpb25cXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogbG9nby1yb29zdGVyLXNsaWRlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2dvLXRleHQtc2lnbiB7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsb2dvLXNsaWRlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvZ28taW1hZ2Utc2lnbi1zbGlkZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvZ28tdHJlZXMtc2xpZGUge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbG9nby1yb29zdGVyLXNsaWRlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL1VwY3ljbGVkX1BpenphX1BlZWxfYWxwaGFfcm90YXRlZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubG9jYXRpb24tY29udGFpbmVyLCAucGhvbmUtbnVtYmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTsgfVxcblxcbiNwaXp6YS1ib2FyZC1jb250YWluZXIge1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDUlIDE1JTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTB2dyk7IH1cXG4gICNwaXp6YS1ib2FyZC1jb250YWluZXIuaGFzLWxvYWRlZCB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1ib2FyZC1pbi13aXRoLWl0ZW07XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7IH1cXG4gICAgI3BpenphLWJvYXJkLWNvbnRhaW5lci5oYXMtbG9hZGVkOjpiZWZvcmUge1xcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1ib2FyZC1vdXQtZW1wdHk7XFxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDsgfVxcbiAgI3BpenphLWJvYXJkLWNvbnRhaW5lcjo6YmVmb3JlIHtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBhc3BlY3QtcmF0aW86IDIuMTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSk7IH1cXG4gICNwaXp6YS1ib2FyZC1jb250YWluZXIgaWZyYW1lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMTE7IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWJvYXJkLWluLXdpdGgtaXRlbSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwdncpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWJvYXJkLW91dC1lbXB0eSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwdncpOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29udGFjdC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxPQUFPO0VBQ1AsZUFBZTtFQUNmLGtCQUFrQjtFQUVsQixhQUFhO0VBQ2IsbUJBQW1CO0VBRW5CLDZCQUE2QixFQUFBO0VBUmpDO0lBWVEsd0NBQXdDO0lBQ3hDLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IseUJBQXlCLEVBQUE7SUFmakM7TUFtQlkscUNBQXFDO01BQ3JDLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsK0JBQStCO01BQy9CLHlCQUF5QixFQUFBO0VBdkJyQztJQTRCUSxXQUFXO0lBRVgsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULGlCQUFpQjtJQUVqQix5REFBb0U7SUFDcEUsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUU1QiwyQkFBMkIsRUFBQTtFQXhDbkM7SUE0Q1EsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBSW5CO0VBQ0k7SUFDSSw2QkFBNkIsRUFBQTtFQUVqQztJQUNJLHdCQUF3QixFQUFBLEVBQUE7O0FBSWhDO0VBQ0k7SUFDSSwyQkFBMkIsRUFBQTtFQUUvQjtJQUNJLDZCQUE2QixFQUFBLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvY2F0aW9uLWNvbnRhaW5lciwgLnBob25lLW51bWJlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcGl6emEtYm9hcmQtY29udGFpbmVyIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgcGFkZGluZzogNSUgMTUlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLy8gVHJhbnNmb3JtXFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwdncpO1xcclxcblxcclxcbiAgICAmLmhhcy1sb2FkZWQge1xcclxcbiAgICAgICAgLy8gQW5pbWF0aW9uXFxyXFxuICAgICAgICBhbmltYXRpb24tbmFtZTogc2xpZGUtYm9hcmQtaW4td2l0aC1pdGVtO1xcclxcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxyXFxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcclxcblxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAvLyBBbmltYXRpb25cXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogc2xpZGUtYm9hcmQtb3V0LWVtcHR5O1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICAgICAgLy8gUG9zaXRpb25cXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAyLjE7XFxyXFxuICAgICAgICAvLyBCYWNrZ3JvdW5kXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL1VwY3ljbGVkX1BpenphX1BlZWxfYWxwaGFfcm90YXRlZC5wbmcnKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICAgICAvLyBUcmFuc2Zvcm1cXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUlKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpZnJhbWUge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB6LWluZGV4OiAxMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLWJvYXJkLWluLXdpdGgtaXRlbSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwdncpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICB9IFxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlLWJvYXJkLW91dC1lbXB0eSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUlKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwdncpO1xcclxcbiAgICB9IFxcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2ZvbmRvX3BpZV8yNDB4NDEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvZm9uZG9fcGllXzQ4MHg4Mi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9mb25kb19waWVfOTYweDE2NC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImZvb3RlciB7XFxuICBwYWRkaW5nOiAxLjZyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0NzAzZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxcbiAgZm9vdGVyIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgZm9vdGVyIHAgc21hbGwge1xcbiAgICAgIGZvbnQtc2l6ZTogODAlOyB9XFxuXFxuLyogU21hbGxlc3QgKDMwMHB4IGFuZCBkb3duKSAqL1xcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgMzAwcHggYW5kIHVwKSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcXG4gIGZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7IH0gfVxcblxcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gIGZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7IH0gfVxcblxcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxlQUFlO0VBRWYsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFFckIseUJBQXlCO0VBQ3pCLHlEQUFtRDtFQUNuRCx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBO0VBWDFCO0lBY1Esa0JBQWtCLEVBQUE7SUFkMUI7TUFpQlksY0FBYyxFQUFBOztBQU8xQiw4QkFBQTtBQUdBLCtDQUFBO0FBQ0E7RUFDSTtJQUNJLHlEQUFtRCxFQUFBLEVBQ3REOztBQUdMLG9FQUFBO0FBQ0E7RUFDSTtJQUNJLHlEQUFvRCxFQUFBLEVBQ3ZEOztBQUdMLHFEQUFBO0FBR0EsbURBQUE7QUFHQSxvRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJmb290ZXIge1xcclxcbiAgICBwYWRkaW5nOiAxLjZyZW07XFxyXFxuICAgIC8vIEZsZXhcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIC8vIEJhY2tncm91bmRcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I0NzAzZjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9mb25kb19waWVfMjQweDQxLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgc21hbGwge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8vIE1lZGlhIFF1ZXJpZXNcXHJcXG5cXHJcXG4vKiBTbWFsbGVzdCAoMzAwcHggYW5kIGRvd24pICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge31cXHJcXG5cXHJcXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDMwMHB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XFxyXFxuICAgIGZvb3RlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2ZvbmRvX3BpZV80ODB4ODIuanBnJyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcclxcbiAgICBmb290ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9mb25kb19waWVfOTYweDE2NC5qcGcnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7fVxcclxcblxcclxcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7fVxcclxcblxcclxcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7fVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNnYWxsZXJ5IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7IH1cXG4gICNnYWxsZXJ5IGEuZ2FsbGVyeS1pdGVtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAjZ2FsbGVyeSBhLmdhbGxlcnktaXRlbTpob3ZlciBpbWcsICNnYWxsZXJ5IGEuZ2FsbGVyeS1pdGVtOmZvY3VzIGltZyB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbiAgICAjZ2FsbGVyeSBhLmdhbGxlcnktaXRlbSBpbWcge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7IH1cXG5cXG4jZnVsbC1pbWctbW9kYWwge1xcbiAgLS1idG4td2lkdGg6IDVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7XFxuICAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAjZnVsbC1pbWctbW9kYWw6bm90KC5oaWRlKSAjaW1nLW1vZGFsLWNvbnRlbnQge1xcbiAgICBhbmltYXRpb24tbmFtZTogem9vbTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtczsgfVxcbiAgI2Z1bGwtaW1nLW1vZGFsLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XFxuICAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1jbG9zZSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1idG4td2lkdGgpOyB9XFxuICAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1tYWluIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1jb250ZW50IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1jYXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1jbG9zZSwgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtcHJldiwgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtbmV4dCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFzZS13aGl0ZSk7XFxuICAgIHdpZHRoOiB2YXIoLS1idG4td2lkdGgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7IH1cXG4gICAgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtY2xvc2U6aG92ZXIsICNmdWxsLWltZy1tb2RhbCAjaW1nLW1vZGFsLWNsb3NlOmZvY3VzLCAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1wcmV2OmhvdmVyLCAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1wcmV2OmZvY3VzLCAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1uZXh0OmhvdmVyLCAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1uZXh0OmZvY3VzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB9XFxuICAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1wcmV2IHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAwOyB9XFxuICAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1uZXh0IHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDsgfVxcblxcbkBrZXlmcmFtZXMgem9vbSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2FsbGVyeS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksVUFBVTtFQUNWLGNBQWM7RUFFZCxhQUFhO0VBQ2IsNERBQTRELEVBQUE7RUFMaEU7SUFTUSxjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7SUFWMUI7TUFjZ0IsbUJBQW1CLEVBQUE7SUFkbkM7TUFtQlksV0FBVztNQUNYLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsZ0NBQWdDLEVBQUE7O0FBSzVDO0VBQ0ksaUJBQVk7RUFFWix1QkFBdUI7RUFDdkIsZUFBZTtFQUFFLGtCQUFBO0VBQ2pCLFVBQVU7RUFBRSxlQUFBO0VBRVosT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQUUsZUFBQTtFQUNiLFlBQVk7RUFBRSxnQkFBQTtFQUNkLGNBQWM7RUFBRSw0QkFBQTtFQUNoQix1QkFBNEI7RUFBRSxtQkFBQTtFQUM5QixvQ0FBaUM7RUFBRSxxQkFBQTtFQUVuQyxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLG1CQUFtQixFQUFBO0VBakJ2QjtJQXNCWSxvQkFBb0I7SUFDcEIseUJBQXlCLEVBQUE7RUF2QnJDO0lBNEJRLGFBQWEsRUFBQTtFQTVCckI7SUFpQ1EsYUFBYTtJQUNiLHlCQUF5QixFQUFBO0VBbENqQztJQXNDUSxlQUFlO0lBQ2Ysd0JBQXdCLEVBQUE7RUF2Q2hDO0lBMkNRLGtCQUFrQixFQUFBO0VBM0MxQjtJQStDUSxZQUFZO0lBQ1osY0FBYztJQUNkLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBO0VBbkRwQjtJQXVEUSxrQkFBa0IsRUFBQTtFQXZEMUI7SUEyRFEsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFFdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUVuQix1Q0FBdUMsRUFBQTtJQWxFL0M7TUFxRVksc0JBQWlDLEVBQUE7RUFyRTdDO0lBMEVRLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTLEVBQUE7RUE5RWpCO0lBa0ZRLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTLEVBQUE7O0FBSWpCO0VBQ0k7SUFDSSxtQkFBbUIsRUFBQTtFQUV2QjtJQUNJLG1CQUFtQixFQUFBLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2dhbGxlcnkge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46IDFyZW0gMDtcXHJcXG4gICAgLy8gR3JpZFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxyXFxuICAgIC8vZ2FwOiAxcmVtO1xcclxcblxcclxcbiAgICBhLmdhbGxlcnktaXRlbSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaW1nIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiNmdWxsLWltZy1tb2RhbCB7XFxyXFxuICAgIC0tYnRuLXdpZHRoOiA1cmVtO1xcclxcblxcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxyXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gICAgLy9wYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXHJcXG4gICAgLy8gR3JpZFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAmOm5vdCguaGlkZSkge1xcclxcbiAgICAgICAgI2ltZy1tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgICAgICAgICAvLyBBbmltYXRpb25cXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogem9vbTtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYuaGlkZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNpbWctbW9kYWwtaGVhZGVyIHtcXHJcXG4gICAgICAgIC8vIEZsZXhcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNpbWctbW9kYWwtY2xvc2Uge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1idG4td2lkdGgpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNpbWctbW9kYWwtbWFpbiB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2ltZy1tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2ltZy1tb2RhbC1jYXB0aW9uIHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaW1nLW1vZGFsLWNsb3NlLCAjaW1nLW1vZGFsLXByZXYsICNpbWctbW9kYWwtbmV4dCB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iYXNlLXdoaXRlKTtcXHJcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1idG4td2lkdGgpO1xcclxcbiAgICAgICAgLy8gR3JpZFxcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAvLyBUcmFuc2l0aW9uXFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2ltZy1tb2RhbC1wcmV2IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2ltZy1tb2RhbC1uZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgem9vbSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiN0YWdsaW5lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudDsgfVxcbiAgI3RhZ2xpbmUgcDpmaXJzdC1vZi10eXBlIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcbiAgI3RhZ2xpbmUgPiAqOm5vdChwOmxhc3Qtb2YtdHlwZSkge1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBRWhCLGFBQWE7RUFDYixrQ0FBa0MsRUFBQTtFQU50QztJQVNRLHlCQUF5QixFQUFBO0VBVGpDO0lBYVEsbUJBQW1CLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3RhZ2xpbmUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgLy8gR3JpZFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50O1xcclxcblxcclxcbiAgICBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+ICo6bm90KHA6bGFzdC1vZi10eXBlKSB7XFxyXFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvZm9uZG9fbWVudS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy90b21hdG8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNtZW51LXBhZ2UtYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47IH1cXG4gICNtZW51LXBhZ2UtYnRuLWNvbnRhaW5lciBhIHtcXG4gICAgLS1ncm93dGgtcmF0aW86IDEuMjtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgI21lbnUtcGFnZS1idG4tY29udGFpbmVyIGEgc3BhbiB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhc2Utd2hpdGUpO1xcbiAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1ncm93dGgtcmF0aW8pICogMTAwJSk7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZShjYWxjKDEgLyB2YXIoLS1ncm93dGgtcmF0aW8pKSk7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTsgfVxcbiAgICAjbWVudS1wYWdlLWJ0bi1jb250YWluZXIgYTpob3ZlciBzcGFuLCAjbWVudS1wYWdlLWJ0bi1jb250YWluZXIgYTphY3RpdmUgc3BhbiwgI21lbnUtcGFnZS1idG4tY29udGFpbmVyIGE6Zm9jdXMgc3BhbiB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcblxcbi5tZW51LXBhZ2Uge1xcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxuICBwYWRkaW5nOiAxZW07XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhM2YwNjtcXG4gIG91dGxpbmU6IDZweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlcjogNnB4IHNvbGlkICNjNjJhMTM7XFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCB2YXIoLS1iYXNlLWJsYWNrKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICBnYXA6IDFyZW07IH1cXG4gIC5tZW51LXBhZ2UgaDIge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcbiAgLm1lbnUtcGFnZSBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAubWVudS1wYWdlIC5tZW51LWxvZ28ge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7IH1cXG4gIC5tZW51LXBhZ2UgLm1lbnUtY29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50OyB9XFxuICAgIC5tZW51LXBhZ2UgLm1lbnUtY29sdW1uID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmFzZS13aGl0ZSk7IH1cXG4gICAgLm1lbnUtcGFnZSAubWVudS1jb2x1bW4gPiAqIHtcXG4gICAgICBwYWRkaW5nOiAxcmVtIDA7IH1cXG5cXG4ucGl6emEtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZW0gMWZyIGF1dG87XFxuICByb3ctZ2FwOiAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm51bWJlciBuYW1lIHByaWNlc1xcXCJcXHIgXFxcImluZ3JlZGllbnRzIGluZ3JlZGllbnRzIGluZ3JlZGllbnRzXFxcIjsgfVxcbiAgLnBpenphLWl0ZW0gLnBpenphLWl0ZW0tbnVtYmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWJhc2Utd2hpdGUpO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMWVtIHZhcigtLWJhc2UtYmxhY2spO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGdyaWQtYXJlYTogbnVtYmVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5waXp6YS1pdGVtIC5waXp6YS1pdGVtLW5hbWUge1xcbiAgICBncmlkLWFyZWE6IG5hbWU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLnBpenphLWl0ZW0gLnBpenphLWl0ZW0tcHJpY2VzIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBwcmljZXM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLnBpenphLWl0ZW0gLnBpenphLWl0ZW0tcHJpY2VzIC5waXp6YS1pdGVtLXByaWNlLXNpbmdsZSB7XFxuICAgICAgcGFkZGluZzogMCAwLjVlbTsgfVxcbiAgICAgIC5waXp6YS1pdGVtIC5waXp6YS1pdGVtLXByaWNlcyAucGl6emEtaXRlbS1wcmljZS1zaW5nbGU6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1iYXNlLXdoaXRlKTsgfVxcbiAgLnBpenphLWl0ZW0gLnBpenphLWl0ZW0taW5ncmVkaWVudHMge1xcbiAgICBncmlkLWFyZWE6IGluZ3JlZGllbnRzOyB9XFxuXFxuLmNvcC1wcmljZXMtY29udGFpbmVyIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDFyZW0gMDsgfVxcblxcbi5jb3AtcHJpY2VzLWNvbnRhaW5lciAuY29wLXByaWNlcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTsgfVxcbiAgLmNvcC1wcmljZXMtY29udGFpbmVyIC5jb3AtcHJpY2VzIC5jb3AtcHJpY2Utc2luZ2xlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC5jb3AtcHJpY2VzLWNvbnRhaW5lciAuY29wLXByaWNlcyAuY29wLXByaWNlLXNpbmdsZSAuY29wLXByaWNlLXNpbmdsZS1zaXplIHtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuICAgIC5jb3AtcHJpY2VzLWNvbnRhaW5lciAuY29wLXByaWNlcyAuY29wLXByaWNlLXNpbmdsZSAuY29wLXByaWNlLXNpbmdsZS12YWx1ZSB7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcbiAgICAuY29wLXByaWNlcy1jb250YWluZXIgLmNvcC1wcmljZXMgLmNvcC1wcmljZS1zaW5nbGUgLmNvcC1wcmljZS1zaW5nbGUtbm90ZSB7XFxuICAgICAgZm9udC1zaXplOiA3MCU7IH1cXG5cXG4uY29wLWluZ3JlZGllbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJvdy1nYXA6IDFyZW07IH1cXG5cXG4ub3RoZXItaXRlbS10eXBlIC5vdGhlci1pdGVtLCAub3RoZXItaXRlbS10eXBlIC5vdGhlci1pdGVtLXdpdGgtaW5ncmVkaWVudHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87IH1cXG4gIC5vdGhlci1pdGVtLXR5cGUgLm90aGVyLWl0ZW0gLm90aGVyLWl0ZW0tcHJpY2UsIC5vdGhlci1pdGVtLXR5cGUgLm90aGVyLWl0ZW0td2l0aC1pbmdyZWRpZW50cyAub3RoZXItaXRlbS1wcmljZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbi5vdGhlci1pdGVtLXR5cGUgLm90aGVyLWl0ZW0td2l0aC1pbmdyZWRpZW50cyAub3RoZXItaXRlbS1pbmdyZWRpZW50cyB7XFxuICBncmlkOiAyIC8gMSAvIDMgLyAzOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21lbnUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUVJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCLEVBQUE7RUFKMUI7SUFPUSxtQkFBZTtJQUVmLGNBQWMsRUFBQTtJQVR0QjtNQVlZLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsbUNBQW1DO01BQ25DLDJDQUEyQztNQUMzQyxnQkFBZ0I7TUFFaEIsYUFBYTtNQUNiLG1CQUFtQjtNQUVuQiwrQ0FBK0M7TUFDL0MsZ0NBQWdDO01BRWhDLHlEQUE2QyxFQUFBO0lBeEJ6RDtNQThCZ0IsbUJBQW1CLEVBQUE7O0FBTW5DO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1YseUJBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLCtDQUErQztFQUUvQyxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyxTQUFTLEVBQUE7RUFiYjtJQWdCUSwwQkFBMEIsRUFBQTtFQWhCbEM7SUFvQlEsV0FBVztJQUNYLFlBQVksRUFBQTtFQXJCcEI7SUEwQlEsd0JBQXdCLEVBQUE7RUExQmhDO0lBK0JRLGFBQWE7SUFDYiwyQkFBMkIsRUFBQTtJQWhDbkM7TUFtQ1ksMENBQTBDLEVBQUE7SUFuQ3REO01BdUNZLGVBQWUsRUFBQTs7QUFTM0I7RUFHSSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixnRkFFeUMsRUFBQTtFQVI3QztJQVlRLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUUxQyx5REFBeUM7SUFDekMsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFFNUIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUIsRUFBQTtFQXhCN0I7SUE4QlEsZUFBZTtJQUNmLGFBQWE7SUFDYixxQkFBcUIsRUFBQTtFQWhDN0I7SUFxQ1EsY0FBYztJQUNkLGtCQUFrQjtJQUVsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CLEVBQUE7SUE1QzNCO01BZ0RZLGdCQUFnQixFQUFBO01BaEQ1QjtRQW1EZ0IseUNBQXlDLEVBQUE7RUFuRHpEO0lBMkRRLHNCQUFzQixFQUFBOztBQUk5QjtFQU1RLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQVJ2QjtFQWFRLGFBQWE7RUFDYixxQ0FBcUMsRUFBQTtFQWQ3QztJQWlCWSxrQkFBa0IsRUFBQTtJQWpCOUI7TUFvQmdCLG1CQUFtQixFQUFBO0lBcEJuQztNQXVCZ0IsbUJBQW1CLEVBQUE7SUF2Qm5DO01BMEJnQixjQUFjLEVBQUE7O0FBTTlCO0VBRUksYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFHakI7RUFNUSxhQUFhO0VBQ2IsK0JBQStCLEVBQUE7RUFQdkM7SUFjWSxrQkFBa0IsRUFBQTs7QUFkOUI7RUFtQlksbUJBQW1CLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI21lbnUtcGFnZS1idG4tY29udGFpbmVyIHtcXHJcXG4gICAgLy8gR3JpZFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcblxcclxcbiAgICBhIHtcXHJcXG4gICAgICAgIC0tZ3Jvd3RoLXJhdGlvOiAxLjI7XFxyXFxuXFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG5cXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iYXNlLXdoaXRlKTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0tZ3Jvd3RoLXJhdGlvKSAqIDEwMCUpO1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgICAgICAgLy8gR3JpZFxcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAvLyBUcmFuc2Zvcm1cXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKGNhbGMoMSAvIHZhcigtLWdyb3d0aC1yYXRpbykpKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXHJcXG4gICAgICAgICAgICAvLyBCYWNrZ3JvdW5kXFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9mb25kb19tZW51LmpwZycpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICAvLyBUcmFuc2Zvcm1cXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtcGFnZSB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzgsIDYzLCA2KTtcXHJcXG4gICAgb3V0bGluZTogNnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjYzYyYTEzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IHZhcigtLWJhc2UtYmxhY2spO1xcclxcbiAgICAvLyBHcmlkXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1sb2dvIHtcXHJcXG4gICAgICAgIC8vIEdyaWRcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1jb2x1bW4ge1xcclxcbiAgICAgICAgLy8gR3JpZFxcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXHJcXG5cXHJcXG4gICAgICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmFzZS13aGl0ZSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICA+ICoge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jcGl6emEtdHlwZS1jb250YWluZXIge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucGl6emEtaXRlbSB7XFxyXFxuICAgIC8vYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZW0gMWZyIGF1dG87XFxyXFxuICAgIHJvdy1nYXA6IDFyZW07XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgXFxcIm51bWJlciBuYW1lIHByaWNlc1xcXCJcXHJcXG4gICAgICAgIFxcXCJpbmdyZWRpZW50cyBpbmdyZWRpZW50cyBpbmdyZWRpZW50c1xcXCI7XFxyXFxuXFxyXFxuICAgIC5waXp6YS1pdGVtLW51bWJlciB7XFxyXFxuICAgICAgICAvL291dGxpbmU6IDJweCBzb2xpZCBvcmFuZ2U7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tYmFzZS13aGl0ZSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxZW0gdmFyKC0tYmFzZS1ibGFjayk7XFxyXFxuICAgICAgICAvLyBCYWNrZ3JvdW5kXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL3RvbWF0by5wbmcnKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgLy8gR3JpZFxcclxcbiAgICAgICAgZ3JpZC1hcmVhOiBudW1iZXI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5waXp6YS1pdGVtLW5hbWUge1xcclxcbiAgICAgICAgLy9vdXRsaW5lOiAycHggc29saWQgcmVkO1xcclxcbiAgICAgICAgLy8gR3JpZFxcclxcbiAgICAgICAgZ3JpZC1hcmVhOiBuYW1lO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucGl6emEtaXRlbS1wcmljZXMge1xcclxcbiAgICAgICAgLy9vdXRsaW5lOiAycHggc29saWQgZ3JlZW47XFxyXFxuICAgICAgICBmb250LXNpemU6IDgwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIC8vIEdyaWRcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogcHJpY2VzO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIC5waXp6YS1pdGVtLXByaWNlLXNpbmdsZSB7XFxyXFxuICAgICAgICAgICAgLy9vdXRsaW5lOiAycHggc29saWQgcmVkO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41ZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYmFzZS13aGl0ZSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5waXp6YS1pdGVtLWluZ3JlZGllbnRzIHtcXHJcXG4gICAgICAgIC8vb3V0bGluZTogMnB4IHNvbGlkIGJsdWU7XFxyXFxuICAgICAgICAvLyBHcmlkXFxyXFxuICAgICAgICBncmlkLWFyZWE6IGluZ3JlZGllbnRzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb3AtcHJpY2VzLWNvbnRhaW5lciB7XFxyXFxuICAgIC5jb3AtbG9nbyB7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb3AtcHJpY2VzIHtcXHJcXG4gICAgICAgIC8vIEdyaWRcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcblxcclxcbiAgICAgICAgLmNvcC1wcmljZS1zaW5nbGUge1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuY29wLXByaWNlLXNpbmdsZS1zaXplIHtcXHJcXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgLmNvcC1wcmljZS1zaW5nbGUtdmFsdWUge1xcclxcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAuY29wLXByaWNlLXNpbmdsZS1ub3RlIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb3AtaW5ncmVkaWVudCB7XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcm93LWdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm90aGVyLWl0ZW0tdHlwZSB7XFxyXFxuICAgIGgyIHtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAub3RoZXItaXRlbSwgLm90aGVyLWl0ZW0td2l0aC1pbmdyZWRpZW50cyB7XFxyXFxuICAgICAgICAvLyBHcmlkXFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXHJcXG5cXHJcXG4gICAgICAgIC5vdGhlci1pdGVtLW5hbWUge1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLm90aGVyLWl0ZW0tcHJpY2Uge1xcclxcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAub3RoZXItaXRlbS13aXRoLWluZ3JlZGllbnRzIHtcXHJcXG4gICAgICAgIC5vdGhlci1pdGVtLWluZ3JlZGllbnRzIHtcXHJcXG4gICAgICAgICAgICBncmlkOiAyIC8gMSAvIDMgLyAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWV5ZXItcmVzZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFFRDs7Ozs7Ozs7Ozs7OztFQWFDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCLEVBQUE7O0FBRXpCLGdEQUFBO0FBQ0E7O0VBRUMsY0FBYyxFQUFBOztBQUVmO0VBQ0MsY0FBYyxFQUFBOztBQUVmO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBRWpCO0VBQ0MsWUFBWSxFQUFBOztBQUViOztFQUVDLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBRWQ7RUFDQyx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2ZvbmRvX0NhYmV6ZXJhLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvVGV4dHVyZXNDb21fV2FsbF9Ccmlja09sZDNBXzJ4MV8yNTZfYWxiZWRvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL1RleHR1cmVzQ29tX1dhbGxfQnJpY2tPbGQzQV8yeDFfNTEyX2FsYmVkby5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9UZXh0dXJlc0NvbV9XYWxsX0JyaWNrT2xkM0FfMngxXzFLX2FsYmVkby5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmFzZS13aGl0ZTogaHNsKDAsMCUsOTAlKTtcXG4gIC0tYmFzZS1ibGFjazogaHNsKDAsMCUsMTAlKTtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzhjM2Y0NTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMjg1OTU0O1xcbiAgLS10ZXJ0aWFyeS1jb2xvcjogIzcxODczRDsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTsgfVxcblxcbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjB2aCAxZnIgMTB2aDsgfVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwZjA1O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvOyB9XFxuICBoZWFkZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogYXV0bzsgfVxcbiAgaGVhZGVyIC5sb2dvLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XFxuXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTI1NjQyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLndoaXRlLXRleHQtc2hhZG93IHtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1iYXNlLWJsYWNrKTsgfVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7IH1cXG5cXG4vKiBTbWFsbGVzdCAoMzAwcHggYW5kIGRvd24pICovXFxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCAzMDBweCBhbmQgdXApICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkge1xcbiAgbWFpbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7IH0gfVxcblxcbi8qIFNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHRhYmxldHMgYW5kIGxhcmdlIHBob25lcywgNjAwcHggYW5kIHVwKSAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpOyB9IH1cXG5cXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXFxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSwyQkFBYTtFQUNiLDJCQUFhO0VBQ2Isd0JBQWdCO0VBQ2hCLDBCQUFrQjtFQUNsQix5QkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQWlCO0VBQ2pCLHdJQUF3STtFQUN4SSxTQUFTO0VBQ1Qsd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksaUJBQWlCO0VBRWpCLGFBQWE7RUFDYixpQ0FBaUMsRUFBQTs7QUFHckM7RUFFSSx5QkFBeUI7RUFDekIseURBQWlEO0VBQ2pELHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFFM0IsYUFBYTtFQUNiLDRCQUE0QixFQUFBO0VBUmhDO0lBV1EsWUFBWTtJQUNaLFdBQVcsRUFBQTtFQVpuQjtJQWdCUSx5REFBdUM7SUFDdkMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix3QkFBd0IsRUFBQTs7QUFJaEM7RUFFSSx5QkFBeUI7RUFDekIseURBQTZFO0VBQzdFLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFFeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBS3ZCO0VBQ0ksMENBQTBDLEVBQUE7O0FBRzlDO0VBQ0kscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTs7QUFLbEIsOEJBQUE7QUFHQSwrQ0FBQTtBQUNBO0VBQ0k7SUFDSSx5REFBNkUsRUFBQSxFQUNoRjs7QUFHTCxvRUFBQTtBQUNBO0VBQ0k7SUFDSSx5REFBNEUsRUFBQSxFQUMvRTs7QUFHTCxxREFBQTtBQUdBLG1EQUFBO0FBR0Esb0VBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1iYXNlLXdoaXRlOiBoc2woMCwwJSw5MCUpO1xcclxcbiAgICAtLWJhc2UtYmxhY2s6IGhzbCgwLDAlLDEwJSk7XFxyXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzhjM2Y0NTtcXHJcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMyODU5NTQ7XFxyXFxuICAgIC0tdGVydGlhcnktY29sb3I6ICM3MTg3M0Q7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDYyLjUlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXHJcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgLy8gR3JpZFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwdmggMWZyIDEwdmg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIC8vIEJhY2tncm91bmRcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MGYwNTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9mb25kb19DYWJlemVyYS5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2dvLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2xvZ28ucG5nJyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICAvLyBCYWNrZ3JvdW5kXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MjU2NDI7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvVGV4dHVyZXNDb21fV2FsbF9Ccmlja09sZDNBXzJ4MV8yNTZfYWxiZWRvLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgLy8gRmxleFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWlzY1xcclxcblxcclxcbi53aGl0ZS10ZXh0LXNoYWRvdyB7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCB2YXIoLS1iYXNlLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8vIE1lZGlhIFF1ZXJpZXNcXHJcXG5cXHJcXG4vKiBTbWFsbGVzdCAoMzAwcHggYW5kIGRvd24pICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge31cXHJcXG5cXHJcXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDMwMHB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSB7XFxyXFxuICAgIG1haW4ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9UZXh0dXJlc0NvbV9XYWxsX0JyaWNrT2xkM0FfMngxXzUxMl9hbGJlZG8uanBnJyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvVGV4dHVyZXNDb21fV2FsbF9Ccmlja09sZDNBXzJ4MV8xS19hbGJlZG8uanBnJyk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge31cXHJcXG5cXHJcXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge31cXHJcXG5cXHJcXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge31cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjdG9wbmF2IHtcXG4gIC0tZ3Jvd3RoLXJhdGlvOiAxLjI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAjdG9wbmF2IC5uYXYtbGluay1jb250YWluZXIgYSB7XFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1iYXNlLXdoaXRlKTtcXG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoY2FsYygxIC8gdmFyKC0tZ3Jvd3RoLXJhdGlvKSkpO1xcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tZ3Jvd3RoLXJhdGlvKSAqIDEwMCUpOyB9XFxuICAgICN0b3BuYXYgLm5hdi1saW5rLWNvbnRhaW5lciBhIHNwYW4ge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBsaW5lLWhlaWdodDogbm9ybWFsOyB9XFxuICAgICAgI3RvcG5hdiAubmF2LWxpbmstY29udGFpbmVyIGEgc3Bhbjo6YmVmb3JlIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS13aGl0ZSk7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcXG4gICAgICAgIHdpZHRoOiAwJTtcXG4gICAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgI3RvcG5hdiAubmF2LWxpbmstY29udGFpbmVyIGE6aG92ZXIsICN0b3BuYXYgLm5hdi1saW5rLWNvbnRhaW5lciBhOmZvY3VzLCAjdG9wbmF2IC5uYXYtbGluay1jb250YWluZXIgYTphY3RpdmUsICN0b3BuYXYgLm5hdi1saW5rLWNvbnRhaW5lciBhLmFjdGl2ZSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbiAgICAgICN0b3BuYXYgLm5hdi1saW5rLWNvbnRhaW5lciBhOmhvdmVyIHNwYW46OmJlZm9yZSwgI3RvcG5hdiAubmF2LWxpbmstY29udGFpbmVyIGE6Zm9jdXMgc3Bhbjo6YmVmb3JlLCAjdG9wbmF2IC5uYXYtbGluay1jb250YWluZXIgYTphY3RpdmUgc3Bhbjo6YmVmb3JlLCAjdG9wbmF2IC5uYXYtbGluay1jb250YWluZXIgYS5hY3RpdmUgc3Bhbjo6YmVmb3JlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgb3BhY2l0eTogMTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b3AtbmF2LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxtQkFBZTtFQUVmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7RUFMdkI7SUFTWSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFFZCxnQ0FBZ0M7SUFDaEMsK0NBQStDO0lBRS9DLDJDQUEyQyxFQUFBO0lBaEJ2RDtNQW1CZ0IsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixtQkFBbUIsRUFBQTtNQXJCbkM7UUF3Qm9CLFdBQVc7UUFDWCxtQ0FBbUM7UUFFbkMsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxPQUFPO1FBQ1AsV0FBVztRQUVYLDBCQUEwQjtRQUUxQixTQUFTO1FBQ1QsVUFBVSxFQUFBO0lBbkM5QjtNQXdDZ0IsbUJBQW1CLEVBQUE7TUF4Q25DO1FBNEN3QixXQUFXO1FBQ1gsVUFBVSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiN0b3BuYXYge1xcclxcbiAgICAtLWdyb3d0aC1yYXRpbzogMS4yO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgIC5uYXYtbGluay1jb250YWluZXIge1xcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWJhc2Utd2hpdGUpO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAvLyBUcmFuc2l0aW9uXFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZShjYWxjKDEgLyB2YXIoLS1ncm93dGgtcmF0aW8pKSk7XFxyXFxuICAgICAgICAgICAgLy8gRm9udCBTaXplIGFkanVzdGVkIGFmdGVyIHNjYWxlZCBkb3duIGJ5IHRyYW5zZm9ybVxcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1ncm93dGgtcmF0aW8pICogMTAwJSk7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS13aGl0ZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAvLyBBYnNvbHV0ZSBQb3NpdGlvblxcclxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgLy8gVHJhbnNpdGlvblxcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XFxyXFxuICAgICAgICAgICAgICAgICAgICAvLyBUcmFuc2l0aW9uIFZhbHVlc1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgJjpob3ZlciwgJjpmb2N1cywgJjphY3RpdmUsICYuYWN0aXZlIHtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0ZWQtbG9nby5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYW5pbWF0ZWQtbG9nby5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbGxlcnkuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbGxlcnkuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbml0aWFsLXBhZ2UtbG9hZC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5pdGlhbC1wYWdlLWxvYWQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllci1yZXNldC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWV5ZXItcmVzZXQuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvcC1uYXYuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvcC1uYXYuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbG9nb1RleHRTaWduIGZyb20gJy4vaW1nL2xvZ28tdGV4dC1zaWduLnBuZyc7XHJcbmltcG9ydCBsb2dvUm9vc3RlciBmcm9tICcuL2ltZy9sb2dvLXJvb3N0ZXIucG5nJztcclxuaW1wb3J0IGxvZ29UcmVlcyBmcm9tICcuL2ltZy9sb2dvLXRyZWVzLnBuZyc7XHJcbmltcG9ydCBsb2dvSW1hZ2VTaWduIGZyb20gJy4vaW1nL2xvZ28taW1hZ2Utc2lnbi5wbmcnO1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMuanMnO1xyXG5pbXBvcnQgJy4vYW5pbWF0ZWQtbG9nby5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGVkTG9nb0NvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IF9jcmVhdGVJbWdFbGVtZW50ID0gZnVuY3Rpb24oc3JjLCBhbHQgPSAnJywgY2xhc3NOYW1lID0gJycpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgZWxlbWVudC5zcmMgPSBzcmM7XHJcbiAgICAgICAgaWYgKGFsdCkgZWxlbWVudC5hbHQgPSBhbHQ7XHJcbiAgICAgICAgaWYgKGNsYXNzTmFtZSkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0ZWRMb2dvRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtpZDogJ2FuaW1hdGVkLWxvZ28nfSk7XHJcblxyXG4gICAgICAgIGFuaW1hdGVkTG9nb0VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdhbmltYXRlZC1sb2dvLWJhY2snfSwgXHJcbiAgICAgICAgICAgIF9jcmVhdGVJbWdFbGVtZW50KGxvZ29JbWFnZVNpZ24sICcnLCAnbG9nby1pbWFnZS1zaWduJyksXHJcbiAgICAgICAgICAgIF9jcmVhdGVJbWdFbGVtZW50KGxvZ29UcmVlcywgJycsICdsb2dvLXRyZWVzJyksXHJcbiAgICAgICAgICAgIF9jcmVhdGVJbWdFbGVtZW50KGxvZ29Sb29zdGVyLCAnJywgJ2xvZ28tcm9vc3RlcicpXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIGFuaW1hdGVkTG9nb0VsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUltZ0VsZW1lbnQobG9nb1RleHRTaWduLCAnJywgJ2xvZ28tdGV4dC1zaWduJykpO1xyXG5cclxuICAgICAgICByZXR1cm4gYW5pbWF0ZWRMb2dvRWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtyZW5kZXIsfTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMuanNcIjtcclxuaW1wb3J0IFBpenphQm9hcmRJbWcgZnJvbSAnLi9pbWcvVXBjeWNsZWRfUGl6emFfUGVlbF9hbHBoYV9yb3RhdGVkLnBuZyc7XHJcbmltcG9ydCAnLi9jb250YWN0LnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuICAgIGxldCBfcGl6emFCb2FyZENvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZVBpenphQm9hcmRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgX3BpenphQm9hcmRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6ICdwaXp6YS1ib2FyZC1jb250YWluZXInfSk7XHJcblxyXG4gICAgICAgIC8vX3BpenphQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaW1nJywge3NyYzogUGl6emFCb2FyZEltZywgYWx0OiAnUGl6emEgYm9hcmQuJ30pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIF9waXp6YUJvYXJkQ29udGFpbmVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlR29vZ2xlTWFwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbWFwSWZyYW1lID0gY3JlYXRlRWxlbWVudCgnaWZyYW1lJywge1xyXG4gICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzE4OS44Mjc0OTE3NTYyOTUzITJkLTEyMS43ODc3MjEyODQ3NDg4NyEzZDM2LjkxODM4ODc3OTkyNDMzITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4MDhlMWFmMjhhMDRlZWJmJTNBMHhhMTVjNjVmZTBmODFhYWQ2ITJzQ29ycmFsaXRvcyUyMFBpenphITVlMCEzbTIhMXNlbiEyc3VzITR2MTY1MjkyNjAyNTg0MSE1bTIhMXNlbiEyc3VzXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjYwMFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNDUwXCIsIFxyXG4gICAgICAgICAgICBzdHlsZTogXCJib3JkZXI6MDtcIiwgXHJcbiAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbjogXCJcIiwgXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IFwibGF6eVwiLFxyXG4gICAgICAgICAgICByZWZlcnJlcnBvbGljeTogXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtYXBJZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgX3BpenphQm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGFzLWxvYWRlZCcpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hcElmcmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHJcbiAgICAgICAgLy8gTG9jYXRpb25cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbG9jYXRpb24tY29udGFpbmVyIHdoaXRlLXRleHQtc2hhZG93J30sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ091ciBMb2NhdGlvbicpLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywge30sICcxMDYxIFMuIEdyZWVuIFZhbGxleSBSZC4gV2F0c29udmlsbGUgQ0EuJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgLy8gUGhvbmVcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLCB7J2NsYXNzJzogJ3Bob25lLW51bWJlciB3aGl0ZS10ZXh0LXNoYWRvdyd9LCAnUGhvbmU6ICg4MzEpIDcyMi03MjIwJykpO1xyXG5cclxuICAgICAgICAvLyBQaXp6YSBCb2FyZFxyXG4gICAgICAgIGNvbnN0IHBpenphQm9hcmRDb250YWluZXIgPSBlbGVtZW50LmFwcGVuZENoaWxkKF9jcmVhdGVQaXp6YUJvYXJkRWxlbWVudCgpKTtcclxuXHJcbiAgICAgICAgLy8gR29vZ2xlIE1hcFxyXG4gICAgICAgIHBpenphQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZUdvb2dsZU1hcCgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7cmVuZGVyLH07XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzLmpzXCI7XHJcbmltcG9ydCAnLi9mb290ZXIuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoY29weXJpZ2h0WWVhcikge1xyXG4gICAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgeydjbGFzcyc6ICd3aGl0ZS10ZXh0LXNoYWRvdyd9KTtcclxuICAgICAgICBjb25zdCBjdXJyWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgLy8gUGFyYWdyYXBoIGVsZW1lbnQgYXMgY2hpbGQgb2YgZm9vdGVyXHJcbiAgICAgICAgbGV0IHRlbXBFbGVtZW50ID0gZm9vdGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XHJcblxyXG4gICAgICAgIC8vIFNtYWxsIGVsZW1lbnQgYXMgY2hpbGQgb2YgcGFyYWdyYXBoXHJcbiAgICAgICAgdGVtcEVsZW1lbnQgPSB0ZW1wRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdzbWFsbCcsIHt9LFxyXG4gICAgICAgICAgICAnU291cmNlIENvZGUgwqkgJyxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgndGltZScsIHtpZDogJ2NvcHlyaWdodC15ZWFyJ30sIGN1cnJZZWFyID4gY29weXJpZ2h0WWVhciA/IGAke2NvcHlyaWdodFllYXJ9LSR7Y3VyclllYXJ9YCA6IGNvcHlyaWdodFllYXIpLFxyXG4gICAgICAgICAgICAnIFRvZGQgQnJlbnRsaW5nZXIsIFNhbnRhIENydXosIENBLCBVU0EuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuJ1xyXG4gICAgICAgICkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9vdGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge3JlbmRlcix9O1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy5qc1wiO1xyXG5pbXBvcnQgZ2FsbGVyeUltZ1NvdXJjZXNEYXRhIGZyb20gJy4vZGF0YS9nYWxsZXJ5SW1nU291cmNlcy5qc29uJztcclxuaW1wb3J0ICcuL2dhbGxlcnkuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5KCkge1xyXG4gICAgY29uc3QgX2ltYWdlU291cmNlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8veHNxRTAyMmpjbWxGTTh1RU5CM05nQS8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8veHNxRTAyMmpjbWxGTTh1RU5CM05nQS9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vUzhYRFJVVHpMUEIzNWJiZGlDVjVzdy8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vUzhYRFJVVHpMUEIzNWJiZGlDVjVzdy9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vbTRfZ3B0bDhrZWlrQjFkdTdqQUZrZy8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vbTRfZ3B0bDhrZWlrQjFkdTdqQUZrZy9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vXzE4YVNkcHNkNkMtZHllY0FEU1ZwZy8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vXzE4YVNkcHNkNkMtZHllY0FEU1ZwZy9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vblJpX0lEcEMwb19mdVRCa1J6WDg5QS8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vblJpX0lEcEMwb19mdVRCa1J6WDg5QS9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vWm5LajJSWk5lRUx6bDZfclRKQXR2QS8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vWm5LajJSWk5lRUx6bDZfclRKQXR2QS9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vbUpTNW1KbkdTd3JFN0ltNVJaVlE3QS8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vbUpTNW1KbkdTd3JFN0ltNVJaVlE3QS9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vQ1FaalM2Z0hFTDVxanhSOHJPRkhtdy8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vQ1FaalM2Z0hFTDVxanhSOHJPRkhtdy9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vdEp2UUJaU2JKU3VVcGlPYjh3TkpWdy8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vdEp2UUJaU2JKU3VVcGlPYjh3TkpWdy9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vS3dtTkwyM1B0MXZFcGNuRnlIdGM1QS8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vS3dtTkwyM1B0MXZFcGNuRnlIdGM1QS9vLmpwZycsXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBJbmRleCBvZiBsYXN0IHVzZXIgc2VsZWN0ZWQgaW1hZ2UsIGluaXRpYWxpemVkIHRvIG51bGwgZm9yIE5PIHNlbGVjdGlvblxyXG4gICAgbGV0IF9zZWxlY3RlZEltZ0luZGV4ID0gbnVsbDtcclxuXHJcbiAgICBsZXQgX2ltZ01vZGFsRWxlbWVudCA9IG51bGw7XHJcbiAgICBsZXQgX2ltZ01vZGFsQ29udGVudEVsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVGdWxsSW1hZ2VNb2RhbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGZ1bGxJbWdNb2RhbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtpZDogJ2Z1bGwtaW1nLW1vZGFsJywgJ2NsYXNzJzogJ2hpZGUnfSk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHtpZDogJ2ltZy1tb2RhbC1jbG9zZSd9KTtcclxuICAgICAgICBjbG9zZS5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XHJcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZ1bGxJbWdNb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBBZGQgaGVhZGVyIHRvIG1vZGFsIHdpdGggY2xvc2UgYnV0dG9uXHJcbiAgICAgICAgZnVsbEltZ01vZGFsLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtpZDogJ2ltZy1tb2RhbC1oZWFkZXInfSwgY2xvc2UpKTtcclxuXHJcbiAgICAgICAgLy8gUHJldiBCdXR0b25cclxuICAgICAgICBjb25zdCBwcmV2ID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHtpZDogJ2ltZy1tb2RhbC1wcmV2J30pO1xyXG4gICAgICAgIHByZXYuaW5uZXJIVE1MID0gJyZsc2FxdW87JztcclxuICAgICAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX29wZW5Nb2RhbFdpdGhJbWdJbmRleCgtLV9zZWxlY3RlZEltZ0luZGV4KSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBOZXh0IEJ1dHRvblxyXG4gICAgICAgIGNvbnN0IG5leHQgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywge2lkOiAnaW1nLW1vZGFsLW5leHQnfSk7XHJcbiAgICAgICAgbmV4dC5pbm5lckhUTUwgPSAnJnJzYXF1bzsnO1xyXG4gICAgICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfb3Blbk1vZGFsV2l0aEltZ0luZGV4KCsrX3NlbGVjdGVkSW1nSW5kZXgpLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIEltYWdlIENvbnRlbnRcclxuICAgICAgICBfaW1nTW9kYWxDb250ZW50RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtpZDogJ2ltZy1tb2RhbC1jb250ZW50JywgYWx0OiAnJ30pO1xyXG5cclxuICAgICAgICAvLyBBZGQgbWFpbiB0byBtb2RhbFxyXG4gICAgICAgIGZ1bGxJbWdNb2RhbC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6ICdpbWctbW9kYWwtbWFpbid9LCBcclxuICAgICAgICAgICAgcHJldixcclxuICAgICAgICAgICAgbmV4dCxcclxuICAgICAgICAgICAgX2ltZ01vZGFsQ29udGVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtpZDogJ2ltZy1tb2RhbC1jYXB0aW9uJ30sICdDYXB0aW9uIERlc2NyaXB0aW9uJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bGxJbWdNb2RhbDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX29wZW5Nb2RhbFdpdGhJbWdJbmRleCA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgLy8gSWYgaW5kZXggbGVzcyB0aGFuIDAsIHdyYXAgYXJvdW5kIHRvIGxhc3QgaXRlbVxyXG4gICAgICAgIGlmIChpbmRleCA8IDApIFxyXG4gICAgICAgICAgICBpbmRleCA9IGdhbGxlcnlJbWdTb3VyY2VzRGF0YS55ZWxwLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgLy8gSWYgaW5kZXggbW9yZSB0aGFuIGFycmF5LCB3cmFwIGFyb3VuZCB0byBmaXJzdCBpdGVtXHJcbiAgICAgICAgZWxzZSBpZiAoaW5kZXggPj0gZ2FsbGVyeUltZ1NvdXJjZXNEYXRhLnllbHAubGVuZ3RoKVxyXG4gICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgX3NlbGVjdGVkSW1nSW5kZXggPSBpbmRleDtcclxuICAgICAgICBfaW1nTW9kYWxDb250ZW50RWxlbWVudC5zcmMgPSBgaHR0cHM6Ly9zMy1tZWRpYTAuZmwueWVscGNkbi5jb20vYnBob3RvLyR7Z2FsbGVyeUltZ1NvdXJjZXNEYXRhLnllbHBbaW5kZXhdfS9vLmpwZ2A7XHJcbiAgICAgICAgX2ltZ01vZGFsRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVHYWxsZXJ5SXRlbSA9IGZ1bmN0aW9uKHllbHBJZCwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBpbWdFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgJ2ltZycsIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzogYGh0dHBzOi8vczMtbWVkaWEwLmZsLnllbHBjZG4uY29tL2JwaG90by8ke3llbHBJZH0vMzAwcy5qcGdgLCBcclxuICAgICAgICAgICAgICAgIGFsdDogJycsIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczMDAnLCBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzMwMCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdhbGxlcnlJdGVtQW5jaG9yID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiAnJywgJ2NsYXNzJzogJ2dhbGxlcnktaXRlbSd9LCBpbWdFbGVtZW50KTtcclxuICAgICAgICBnYWxsZXJ5SXRlbUFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIF9vcGVuTW9kYWxXaXRoSW1nSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdhbGxlcnlJdGVtQW5jaG9yO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cclxuICAgICAgICBjb25zdCBnYWxsZXJ5RWxlbWVudCA9IGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiAnZ2FsbGVyeSd9KSk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgZ2FsbGVyeUltZ1NvdXJjZXNEYXRhLnllbHAuZm9yRWFjaCgoeWVscElkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBnYWxsZXJ5RWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlR2FsbGVyeUl0ZW0oeWVscElkLCBpbmRleCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfaW1nTW9kYWxFbGVtZW50ID0gZWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlRnVsbEltYWdlTW9kYWwoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge3JlbmRlcix9O1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy5qc1wiO1xyXG5pbXBvcnQgQW5pbWF0ZWRMb2dvQ29tcG9uZW50IGZyb20gXCIuL2FuaW1hdGVkLWxvZ28uanNcIjtcclxuaW1wb3J0ICcuL2hvbWUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBMb2dvXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChBbmltYXRlZExvZ29Db21wb25lbnQoKS5yZW5kZXIoKSk7XHJcblxyXG4gICAgICAgIC8vIFRhZ2xpbmVcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtpZDogJ3RhZ2xpbmUnLCAnY2xhc3MnOiAnd2hpdGUtdGV4dC1zaGFkb3cnfSwgXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ0dvdXJtZXQgUGl6emEuLi4nKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnV2UgdXNlIG9ubHkgdGhlIGJlc3QgaW5ncmVkaWVudHM6ICcpLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywge30sICdmYXJtIGZyZXNoIHZlZ2V0YWJsZXMsIGxvY2FsbHkgaGFydmVzdGVkLCBoaWdoIHF1YWxpdHkgbW96emFyZWxsYSwgc2F2b3J5IGxvY2FsbHkgcHJvZHVjZWQgbWVhdHMuJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7cmVuZGVyLH1cclxufSIsImltcG9ydCAnLi9tZXllci1yZXNldC5zY3NzJztcclxuaW1wb3J0ICcuL2luaXRpYWwtcGFnZS1sb2FkLnNjc3MnO1xyXG5cclxuaW1wb3J0IFRvcE5hdiBmcm9tICcuL3RvcC1uYXYuanMnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUuanMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxQYWdlTG9hZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0aWFsIFBhZ2UgTG9hZCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBpZiAoIWNvbnRlbnRFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgLy8gSGVhZGVyXHJcbiAgICAvL2xldCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgbGV0IHRlbXBFbGVtZW50ID0gY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaGVhZGVyJykpO1xyXG4gICAgLy8gSGVhZGVyIC0gTG9nbyBJbWFnZVxyXG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdsb2dvLWNvbnRhaW5lcid9KTtcclxuICAgIHRlbXBFbGVtZW50LmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XHJcbiAgICAvLyBIZWFkZXIgLSBUb3AgTmF2XHJcbiAgICB0ZW1wRWxlbWVudC5hcHBlbmRDaGlsZChUb3BOYXYoKS5yZW5kZXIoKSk7XHJcblxyXG4gICAgLy8gTWFpblxyXG4gICAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoSG9tZSgpLnJlbmRlcigpKTtcclxuICAgIC8vIHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgLy8gY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGVtcEVsZW1lbnQpO1xyXG4gICAgLy8gLy8gTWFpbiAtIExvZ29cclxuICAgIC8vIHRlbXBFbGVtZW50LmFwcGVuZENoaWxkKEFuaW1hdGVkTG9nb0NvbXBvbmVudCgpLnJlbmRlcigpKTtcclxuICAgIFxyXG4gICAgLy8gRm9vdGVyXHJcbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChGb290ZXIoMjAyMikucmVuZGVyKCkpO1xyXG4gICAgLy8gdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIC8vIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRlbXBFbGVtZW50KTtcclxuICAgIC8vIC8vIEZvb3RlciAtIFRleHRcclxuICAgIC8vIHRlbXBFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ0dvdXJtZXQgUGl6emEuLi4nKSk7XHJcbiAgICAvLyB0ZW1wRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJywge30sICdXZSB1c2Ugb25seSB0aGUgYmVzdCBpbmdyZWRpZW50czogZmFybSBmcmVzaCB2ZWdldGFibGVzLCBsb2NhbGx5IGhhcnZlc3RlZCwgaGlnaCBxdWFsaXR5IG1venphcmVsbGEsIHNhdm9yeSBsb2NhbGx5IHByb2R1Y2VkIG1lYXRzLicpKTtcclxuXHJcbn0iLCJpbXBvcnQgbWVudURhdGEgZnJvbSAnLi9kYXRhL21lbnUuanNvbic7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XHJcbmltcG9ydCAnLi9tZW51LnNjc3MnO1xyXG5pbXBvcnQgTWVudUxvZ28gZnJvbSAnLi9pbWcvdGl0dWxvX21lbnUucG5nJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9pbWcvbG9nby5wbmcnO1xyXG5pbXBvcnQgQ3JlYXRlT3duUGl6emFMb2dvIGZyb20gJy4vaW1nL3RpdHVsb19tZW51Mi5wbmcnO1xyXG5pbXBvcnQgbWVudVBERiBmcm9tICcuL2RhdGEvbWVudS5wZGYnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcclxuICAgIGxldCBwYWdlU2VsZWN0ZWQgPSAxO1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVQaXp6YUVsZW1lbnQgPSBmdW5jdGlvbihwaXp6YU9iaiwgbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgcGl6emFFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwaXp6YS1pdGVtJ30pO1xyXG5cclxuICAgICAgICAvLyBOdW1iZXJcclxuICAgICAgICBwaXp6YUVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAncGl6emEtaXRlbS1udW1iZXInfSwgbnVtYmVyKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIE5hbWVcclxuICAgICAgICBwaXp6YUVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2gyJywgeydjbGFzcyc6ICdwaXp6YS1pdGVtLW5hbWUnfSwgcGl6emFPYmoubmFtZSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBQcmljZXNcclxuICAgICAgICBwaXp6YUVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIF9jcmVhdGVQaXp6YVByaWNlc0VsZW1lbnQocGl6emFPYmoucHJpY2VzKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEluZ3JlZGllbnRzXHJcbiAgICAgICAgcGl6emFFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ3BpenphLWl0ZW0taW5ncmVkaWVudHMnfSwgcGl6emFPYmouaW5ncmVkaWVudHMpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBpenphRWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZVBpenphU2l6ZVRleHRDb250ZW50ID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBzaXplT2JqID0gbWVudURhdGEucGl6emFTaXplc1tpbmRleF07XHJcbiAgICAgICAgLy8gR2V0IHVwcGVyY2FzZSBsZXR0ZXJzIG9mIHNpemUgbmFtZVxyXG4gICAgICAgIC8vIEFwcGVuZCBzaXplIHdpdGggcXVvdGF0aW9uIG1hcmsgZm9yIGluY2hlc1xyXG4gICAgICAgIHJldHVybiBgJHtzaXplT2JqLm5hbWUubWF0Y2goL15bQS1aXSsvKVswXX0ke3NpemVPYmouc2l6ZX1cImA7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVQaXp6YVByaWNlc0VsZW1lbnQgPSBmdW5jdGlvbihwcmljZXNBcnIpIHtcclxuICAgICAgICBjb25zdCBwcmljZXNFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwaXp6YS1pdGVtLXByaWNlcyd9KTtcclxuICAgICAgICBsZXQgY29udGFpbmVyLCB0ZW1wRWxlbWVudDtcclxuICAgICAgICBwcmljZXNBcnIuZm9yRWFjaCgocHJpY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENvbnRhaW5lclxyXG4gICAgICAgICAgICBjb250YWluZXIgPSBwcmljZXNFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwaXp6YS1pdGVtLXByaWNlLXNpbmdsZSd9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyBTaXplXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHsnY2xhc3MnOiAncGl6emEtaXRlbS1wcmljZS1zaXplJ30sIFxyXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVQaXp6YVNpemVUZXh0Q29udGVudChpbmRleClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gVmFsdWVcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwaXp6YS1pdGVtLXByaWNlLXZhbHVlJ30sIHByaWNlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcmljZXNFbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlT3duUGl6emFJbmdyZWRpZW50RWxlbWVudCA9IGZ1bmN0aW9uKGluZ3JlZGllbnRUeXBlLCBpbmdyZWRpZW50TGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnRFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdjb3AtaW5ncmVkaWVudCd9KTtcclxuICAgICAgICBpbmdyZWRpZW50RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMicsIHsnY2xhc3MnOiAnY29wLWluZ3JlZGllbnQtdHlwZSd9LCBpbmdyZWRpZW50VHlwZSkpO1xyXG4gICAgICAgIGluZ3JlZGllbnRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY29wLWluZ3JlZGllbnQtbGlzdCd9LCBpbmdyZWRpZW50TGlzdCkpO1xyXG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50RWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZU93blBpenphUHJpY2VzRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGNvcFByaWNlc0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2NvcC1wcmljZXMtY29udGFpbmVyJ30pO1xyXG4gICAgICAgIGNvcFByaWNlc0VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaW1nJywgeydzcmMnOiBDcmVhdGVPd25QaXp6YUxvZ28sICdhbHQnOiAnQ3JlYXRlIG93biBwaXp6YSBsb2dvLicsICdjbGFzcyc6ICdjb3AtbG9nbyd9KSk7XHJcbiAgICAgICAgY29wUHJpY2VzRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJywge30sICdSZWQgU2F1Y2UgQmFzZSBhbmQgTW96emFyZWxsYSBDaGVlc2UnKSk7XHJcbiAgICAgICAgY29uc3QgY29wUHJpY2VHcmlkID0gY29wUHJpY2VzRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2NvcC1wcmljZXMnfSkpO1xyXG4gICAgICAgIGxldCBjb3BQcmljZUdyaWRJdGVtO1xyXG4gICAgICAgIG1lbnVEYXRhLnBpenphU2l6ZXMuZm9yRWFjaChwaXp6YVNpemVPYmogPT4ge1xyXG4gICAgICAgICAgICBjb3BQcmljZUdyaWRJdGVtID0gY29wUHJpY2VHcmlkLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY29wLXByaWNlLXNpbmdsZSd9KSk7XHJcbiAgICAgICAgICAgIGNvcFByaWNlR3JpZEl0ZW0uYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgICAgICAgICB7J2NsYXNzJzogJ2NvcC1wcmljZS1zaW5nbGUtc2l6ZSd9LCBcclxuICAgICAgICAgICAgICAgICAgICBgJHtwaXp6YVNpemVPYmoubmFtZX0gJHtwaXp6YVNpemVPYmouc2l6ZX1cImBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29wUHJpY2VHcmlkSXRlbS5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHsnY2xhc3MnOiAnY29wLXByaWNlLXNpbmdsZS12YWx1ZSd9LCBcclxuICAgICAgICAgICAgICAgICAgICBgJCR7cGl6emFTaXplT2JqLnByaWNlfWBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29wUHJpY2VHcmlkSXRlbS5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHsnY2xhc3MnOiAnY29wLXByaWNlLXNpbmdsZS1ub3RlJ30sIFxyXG4gICAgICAgICAgICAgICAgICAgIGAoQWRkICQke3BpenphU2l6ZU9iai5wcmljZUFkZFBlclRvcHBpbmd9IHBlciB0b3BwaW5nKWBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY29wUHJpY2VzRWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZUZpcnN0UGFnZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IG1lbnVQYWdlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LXBhZ2UnfSk7XHJcblxyXG4gICAgICAgIC8vIE1lbnUgTG9nb1xyXG4gICAgICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsnc3JjJzogTWVudUxvZ28sICdhbHQnOiAnTWVudSBsb2dvLicsICdjbGFzcyc6ICdtZW51LWxvZ28nfSkpO1xyXG5cclxuICAgICAgICBsZXQgY29sdW1uID0gbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LWNvbHVtbid9KSk7XHJcblxyXG4gICAgICAgIC8vIFBpenphc1xyXG4gICAgICAgIG1lbnVEYXRhLnBpenphLmZvckVhY2goKHBpenphLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2UgdG8gbmV3IGNvbHVtbiBhZnRlciB0d2VsdmUgcGl6emEgdHlwZXNcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAxMikge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LWNvbHVtbid9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKF9jcmVhdGVQaXp6YUVsZW1lbnQocGl6emEsIGluZGV4ICsgMSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgT3duIFBpenphXHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKF9jcmVhdGVPd25QaXp6YVByaWNlc0VsZW1lbnQoKSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWVudURhdGEuY3JlYXRlT3duUGl6emEpKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChfY3JlYXRlT3duUGl6emFJbmdyZWRpZW50RWxlbWVudChrZXksIHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWVudVBhZ2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVPdGhlckl0ZW1UeXBlRWxlbWVudCA9IGZ1bmN0aW9uKG90aGVySXRlbVR5cGUsIG90aGVySXRlbUFycikge1xyXG4gICAgICAgIGNvbnN0IG90aGVySXRlbVR5cGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdvdGhlci1pdGVtLXR5cGUnfSk7XHJcblxyXG4gICAgICAgIG90aGVySXRlbVR5cGVFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywge30sIG90aGVySXRlbVR5cGUpKTtcclxuXHJcbiAgICAgICAgbGV0IG90aGVySXRlbUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIG90aGVySXRlbUFyci5mb3JFYWNoKG90aGVySXRlbSA9PiB7XHJcbiAgICAgICAgICAgIG90aGVySXRlbUVsZW1lbnQgPSBvdGhlckl0ZW1UeXBlRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHsnY2xhc3MnOiBvdGhlckl0ZW0uaGFzT3duUHJvcGVydHkoJ2luZ3JlZGllbnRzJykgPyAnb3RoZXItaXRlbS13aXRoLWluZ3JlZGllbnRzJyA6ICdvdGhlci1pdGVtJ31cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gTmFtZVxyXG4gICAgICAgICAgICBvdGhlckl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdvdGhlci1pdGVtLW5hbWUnfSwgb3RoZXJJdGVtLm5hbWUpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmljZVxyXG4gICAgICAgICAgICBvdGhlckl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdvdGhlci1pdGVtLXByaWNlJ30sIGAkJHtvdGhlckl0ZW0ucHJpY2UudG9GaXhlZCgyKX1gKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gSW5ncmVkaWVudHNcclxuICAgICAgICAgICAgaWYgKG90aGVySXRlbS5oYXNPd25Qcm9wZXJ0eSgnaW5ncmVkaWVudHMnKSkge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ290aGVyLWl0ZW0taW5ncmVkaWVudHMnfSwgb3RoZXJJdGVtLmluZ3JlZGllbnRzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gb3RoZXJJdGVtVHlwZUVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVTZWNvbmRQYWdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbWVudVBhZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtcGFnZSd9KTtcclxuXHJcbiAgICAgICAgLy8gTWVudSBMb2dvXHJcbiAgICAgICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaW1nJywgeydzcmMnOiBNZW51TG9nbywgJ2FsdCc6ICdNZW51IGxvZ28uJywgJ2NsYXNzJzogJ21lbnUtbG9nbyd9KSk7XHJcblxyXG4gICAgICAgIC8vIEZpcnN0IENvbHVtblxyXG4gICAgICAgIGxldCBjb2x1bW4gPSBtZW51UGFnZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtY29sdW1uJ30pKTtcclxuXHJcbiAgICAgICAgLy8gT3RoZXIgSXRlbXNcclxuICAgICAgICBmb3IgKGNvbnN0IFtvdGhlckl0ZW1UeXBlLCBvdGhlckl0ZW1UeXBlQXJyXSBvZiBPYmplY3QuZW50cmllcyhtZW51RGF0YS5vdGhlckl0ZW1zKSkge1xyXG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoX2NyZWF0ZU90aGVySXRlbVR5cGVFbGVtZW50KG90aGVySXRlbVR5cGUsIG90aGVySXRlbVR5cGVBcnIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdsdXRlbiBGcmVlIENydXN0XHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgeydjbGFzcyc6ICdnbHV0ZW4tZnJlZS1jcnVzdC1jb250YWluZXInfSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHsnY2xhc3MnOiAnZ2x1dGVuLWludHJvLW1zZyd9LCAnTm93IGNob29zZSB5b3VyIHBpenphIHdpdGgnKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHsnY2xhc3MnOiAnZ2x1dGVuLWludHJvLW5hbWUnfSwgJ0dsdXRlbiBGcmVlIENydXN0JyksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7J2NsYXNzJzogJ2dsdXRlbi1wcmljZSd9LCAnKioqIEV4dHJhIENvc3QgJDUuMDAgKioqJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgLy8gSG91cnNcclxuICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICB7J2NsYXNzJzogJ2hvdXJzLWNvbnRhaW5lcid9LFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywge30sICdPdXIgSG91cnMuLi4nKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnV2VcXCdyZSBvcGVuIDcgZGF5cyBhIHdlZWsnKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnU3VuZGF5IHRvIFRodXJzZGF5IDExIGFtIHRvIDk6MzAgcG0nKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnRnJpZGF5IHRvIFNhdHVyZGF5IDExIGFtIHRvIDEwOjMwIHBtJyksXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIC8vIFNlY29uZCBDb2x1bW5cclxuICAgICAgICBjb2x1bW4gPSBtZW51UGFnZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtY29sdW1uJ30pKTtcclxuXHJcbiAgICAgICAgLy8gTG9nb1xyXG4gICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdpbWcnLCB7J3NyYyc6IExvZ28sICdhbHQnOiAnQ29ycmFsaXRvcyBQaXp6YSBsb2dvLid9KSk7XHJcblxyXG4gICAgICAgIC8vIFRhZ2xpbmVcclxuICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICB7J2NsYXNzJzogJ3RhZ2xpbmUtY29udGFpbmVyJ30sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ0dvdXJtZXQgUGl6emEuLi4nKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnV2UgdXNlIG9ubHkgdGhlIGJlc3QgaW5ncmVkaWVudHM6ICcpLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywge30sICdmYXJtIGZyZXNoIHZlZ2V0YWJsZXMsIGxvY2FsbHkgaGFydmVzdGVkLCBoaWdoIHF1YWxpdHkgbW96emFyZWxsYSwgc2F2b3J5IGxvY2FsbHkgcHJvZHVjZWQgbWVhdHMuJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgLy8gQWRkcmVzc1xyXG4gICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAnZGl2JywgXHJcbiAgICAgICAgICAgIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtaXRlbSd9LFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtbWlzYy1kYXRhLWxvZ28nfSksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtdmFsdWUnfSwgJzEwNjEgUy4gR3JlZW4gVmFsbGV5IFJkLiBXYXRzb252aWxlLCBDQSA5NTA3NicpXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIC8vIEZhY2Vib29rXHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS1pdGVtJ30sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtbG9nbyd9KSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS12YWx1ZSd9LCAnQ29ycmFsaXRvcyBQaXp6YScpXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIC8vIFBob25lXHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS1pdGVtJ30sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtbG9nbyd9KSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS12YWx1ZSd9LCAnKDgzMSkgNzIyIDcyMjAnKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtbm90ZSd9LCAnQ2FsbCBmb3IgY2Fycnkgb3V0IG9yIHNhZmUgZGVsaXZlcnkgd2UgZGVsaXZlciB0byBBcHRvcywgRnJlZWRvbSwgV2F0c29udmlsbGUsIFNhbiBBbmRyZWFzLCBDb3JyYWxpdG9zLCBMYXJraW4gVmFsbGV5LicpXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIC8vIFdlYnNpdGVcclxuICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICB7J2NsYXNzJzogJ21lbnUtbWlzYy1kYXRhLWl0ZW0nfSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS1sb2dvJ30pLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtbWlzYy1kYXRhLXZhbHVlJ30sICdWaXNpdCBvdXQgd2Vic2l0ZScpLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS1ub3RlJ30sICd3d3cuY29ycmFsaXRvc3BpenphZGVsaXZlcnkuY29tJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lbnVQYWdlO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlTWVudVBhZ2VCdXR0b25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiAnbWVudS1wYWdlLWJ0bi1jb250YWluZXInfSk7XHJcblxyXG4gICAgICAgIC8vIFBhZ2UgMVxyXG4gICAgICAgIGxldCBidG4gPSBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYScsIHsnaHJlZic6ICcnfSkpO1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHBhZ2VTZWxlY3RlZCA9IDE7XHJcbiAgICAgICAgICAgIF91cGRhdGVNZW51KCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdzcGFuJywgeydjbGFzcyc6ICd3aGl0ZS10ZXh0LXNoYWRvdyd9LCAnUGFnZSAxJykpO1xyXG5cclxuICAgICAgICAvLyBQYWdlIDJcclxuICAgICAgICBidG4gPSBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiAnJ30pKTtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBwYWdlU2VsZWN0ZWQgPSAyO1xyXG4gICAgICAgICAgICBfdXBkYXRlTWVudSgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBidG4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnc3BhbicsIHsnY2xhc3MnOiAnd2hpdGUtdGV4dC1zaGFkb3cnfSwgJ1BhZ2UgMicpKTtcclxuXHJcbiAgICAgICAgLy8gUERGXHJcbiAgICAgICAgYnRuID0gYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogbWVudVBERiwgdGFyZ2V0OiAnX2JsYW5rJ30pKTtcclxuICAgICAgICBidG4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnc3BhbicsIHsnY2xhc3MnOiAnd2hpdGUtdGV4dC1zaGFkb3cnfSwgJ1BERicpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ0bkNvbnRhaW5lcjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX3VwZGF0ZU1lbnUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtcGFnZScpO1xyXG5cclxuICAgICAgICBzd2l0Y2gocGFnZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoX2NyZWF0ZVNlY29uZFBhZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogLy8gU2hvdyBmaXJzdCBwYWdlIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVwbGFjZVdpdGgoX2NyZWF0ZUZpcnN0UGFnZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblxyXG4gICAgICAgIC8vIE1lbnUgUGFnZSBCdXR0b25zXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlTWVudVBhZ2VCdXR0b25zKCkpO1xyXG5cclxuICAgICAgICAvLyBNZW51IFBhZ2VcclxuICAgICAgICBzd2l0Y2gocGFnZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVNlY29uZFBhZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDogLy8gU2hvdyBmaXJzdCBwYWdlIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUZpcnN0UGFnZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7cmVuZGVyLH07XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzLmpzXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIi4vZ2FsbGVyeS5qc1wiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcclxuaW1wb3J0ICcuL3RvcC1uYXYuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BOYXYoKSB7XHJcbiAgICBjb25zdCBfY3JlYXRlTmF2QW5jaG9yID0gZnVuY3Rpb24odGV4dENvbnRlbnQsIGhyZWYgPSAnJywgYklzQWN0aXZlVGFiID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBhbmNob3JFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnYScsIHsnaHJlZic6IGhyZWZ9LCBjcmVhdGVFbGVtZW50KCdzcGFuJywge30sIHRleHRDb250ZW50KSk7XHJcblxyXG4gICAgICAgIGlmIChiSXNBY3RpdmVUYWIpXHJcbiAgICAgICAgICAgIGFuY2hvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYW5jaG9yRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIF9oYW5kbGVOYXZJdGVtQ2xpY2soZSwgdGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICduYXYtbGluay1jb250YWluZXInfSwgYW5jaG9yRWxlbWVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9jbGVhck1haW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgICAgICB3aGlsZSAobWFpbkVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBtYWluRWxlbWVudC5yZW1vdmVDaGlsZChtYWluRWxlbWVudC5maXJzdENoaWxkKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX3JlbW92ZUFjdGl2ZUNsYXNzRnJvbVRhYnMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdG9wbmF2IGEnKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICB0YWIgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX2hhbmRsZU5hdkl0ZW1DbGljayA9IGZ1bmN0aW9uKGUsIHR5cGUpIHtcclxuICAgICAgICBzd2l0Y2godHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdob21lJzpcclxuICAgICAgICAgICAgICAgIF9yZW1vdmVBY3RpdmVDbGFzc0Zyb21UYWJzKCk7XHJcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBfY2xlYXJNYWluKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykucmVwbGFjZVdpdGgoSG9tZSgpLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnYWxsZXJ5JzpcclxuICAgICAgICAgICAgICAgIF9yZW1vdmVBY3RpdmVDbGFzc0Zyb21UYWJzKCk7XHJcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBfY2xlYXJNYWluKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykucmVwbGFjZVdpdGgoR2FsbGVyeSgpLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtZW51JzpcclxuICAgICAgICAgICAgICAgIF9yZW1vdmVBY3RpdmVDbGFzc0Zyb21UYWJzKCk7XHJcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBfY2xlYXJNYWluKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykucmVwbGFjZVdpdGgoTWVudSgpLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjb250YWN0JzpcclxuICAgICAgICAgICAgICAgIF9yZW1vdmVBY3RpdmVDbGFzc0Zyb21UYWJzKCk7XHJcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBfY2xlYXJNYWluKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykucmVwbGFjZVdpdGgoQ29udGFjdCgpLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYkVsZW1lbnRzID0gW1xyXG4gICAgICAgICAgICBfY3JlYXRlTmF2QW5jaG9yKCdIb21lJywgJycsIHRydWUpLFxyXG4gICAgICAgICAgICBfY3JlYXRlTmF2QW5jaG9yKCdHYWxsZXJ5JyksXHJcbiAgICAgICAgICAgIF9jcmVhdGVOYXZBbmNob3IoJ01lbnUnKSxcclxuICAgICAgICAgICAgX2NyZWF0ZU5hdkFuY2hvcignQ29udGFjdCcpLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IHRvcE5hdkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAnbmF2JywgXHJcbiAgICAgICAgICAgIHtpZDogJ3RvcG5hdid9LFxyXG4gICAgICAgICAgICAuLi50YWJFbGVtZW50c1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b3BOYXZFbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge3JlbmRlcix9XHJcbn0iLCIvKipcclxuICogXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gRWxlbWVudCB0eXBlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEVsZW1lbnQgYXR0cmlidXRlIG5hbWVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIHZhbHVlIFxyXG4gKiBAcGFyYW0gIHsuLi5Ob2RlfSBjaGlsZHJlbiAtIFZhcmlhYmxlIG51bWJlciBvZiBjaGlsZCBub2RlcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuXHJcbiAgICAvLyBQcm9wc1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hpbGRyZW4gTm9kZXNcclxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gZWxlbWVudC5hcHBlbmQoY2hpbGQpKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaW5pdGlhbFBhZ2VMb2FkIGZyb20gJy4vaW5pdGlhbC1wYWdlLWxvYWQuanMnO1xyXG4vL2ltcG9ydCBBbmltYXRlZExvZ29Db21wb25lbnQgZnJvbSAnLi9hbmltYXRlZC1sb2dvLmpzJztcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4gICAgLy9yZXR1cm4gQW5pbWF0ZWRMb2dvQ29tcG9uZW50KCkucmVuZGVyKCk7XHJcbiAgICByZXR1cm4gaW5pdGlhbFBhZ2VMb2FkKCk7XHJcbn1cclxuXHJcbi8vZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XHJcbmluaXRpYWxQYWdlTG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==