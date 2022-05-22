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
___CSS_LOADER_EXPORT___.push([module.id, "#animated-logo-container {\n  flex: 1;\n  width: 100%; }\n\n#animated-logo {\n  position: relative;\n  height: 100%; }\n  #animated-logo > img {\n    max-width: 100%;\n    max-height: 100%;\n    margin: auto; }\n  #animated-logo > * {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0; }\n  #animated-logo .animated-logo-back {\n    --logo-back-height-ratio: 0.7;\n    height: calc(var(--logo-back-height-ratio) * 100%);\n    overflow: hidden; }\n    #animated-logo .animated-logo-back img {\n      height: calc(1 / var(--logo-back-height-ratio) * 100%);\n      margin: 0 auto; }\n    #animated-logo .animated-logo-back > * {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      animation-duration: 1s;\n      animation-timing-function: ease-out; }\n    #animated-logo .animated-logo-back .logo-image-sign {\n      animation-name: logo-image-sign-slide; }\n    #animated-logo .animated-logo-back .logo-trees {\n      animation-name: logo-trees-slide; }\n    #animated-logo .animated-logo-back .logo-rooster {\n      animation-name: logo-rooster-slide; }\n  #animated-logo .logo-text-sign {\n    bottom: 0; }\n\n@keyframes logo-slide {\n  0% {\n    transform: translateY(100%); }\n  100% {\n    transform: translateY(0%); } }\n\n@keyframes logo-image-sign-slide {\n  0% {\n    transform: translateY(50%); }\n  100% {\n    transform: translateY(0%); } }\n\n@keyframes logo-trees-slide {\n  0% {\n    transform: translateY(100%); }\n  100% {\n    transform: translateY(0%); } }\n\n@keyframes logo-rooster-slide {\n  0% {\n    transform: translateY(200%); }\n  100% {\n    transform: translateY(0%); } }\n", "",{"version":3,"sources":["webpack://./src/animated-logo.scss"],"names":[],"mappings":"AAAA;EACI,OAAO;EACP,WAAW,EAAA;;AAGf;EACI,kBAAkB;EAGlB,YAAY,EAAA;EAJhB;IAOQ,eAAe;IACf,gBAAgB;IAChB,YAAY,EAAA;EATpB;IAaQ,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ,EAAA;EAhBhB;IAoBQ,6BAAyB;IAEzB,kDAAkD;IAClD,gBAAgB,EAAA;IAvBxB;MA0BY,sDAAsD;MACtD,cAAc,EAAA;IA3B1B;MA+BY,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,SAAS;MACT,QAAQ;MAGR,sBAAsB;MACtB,mCAAmC,EAAA;IAvC/C;MA2CY,qCAAqC,EAAA;IA3CjD;MA+CY,gCAAgC,EAAA;IA/C5C;MAmDY,kCAAkC,EAAA;EAnD9C;IAwDQ,SAAS,EAAA;;AAIjB;EACI;IACI,2BAA2B,EAAA;EAE/B;IACI,yBAAyB,EAAA,EAAA;;AAIjC;EACI;IACI,0BAA0B,EAAA;EAE9B;IACI,yBAAyB,EAAA,EAAA;;AAIjC;EACI;IACI,2BAA2B,EAAA;EAE/B;IACI,yBAAyB,EAAA,EAAA;;AAIjC;EACI;IACI,2BAA2B,EAAA;EAE/B;IACI,yBAAyB,EAAA,EAAA","sourcesContent":["#animated-logo-container {\r\n    flex: 1;\r\n    width: 100%;\r\n}\r\n\r\n#animated-logo {\r\n    position: relative;\r\n    // height: 406px;\r\n    // width: 606px;\r\n    height: 100%;\r\n\r\n    > img {\r\n        max-width: 100%;\r\n        max-height: 100%;\r\n        margin: auto;\r\n    }\r\n\r\n    > * {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n    }\r\n\r\n    .animated-logo-back {\r\n        --logo-back-height-ratio: 0.7;\r\n\r\n        height: calc(var(--logo-back-height-ratio) * 100%);\r\n        overflow: hidden;\r\n\r\n        img {\r\n            height: calc(1 / var(--logo-back-height-ratio) * 100%);\r\n            margin: 0 auto;\r\n        }\r\n\r\n        > * {\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            bottom: 0;\r\n            right: 0;\r\n            // Animation\r\n            //animation-name: logo-slide;\r\n            animation-duration: 1s;\r\n            animation-timing-function: ease-out;\r\n        }\r\n        .logo-image-sign {\r\n            // Animation\r\n            animation-name: logo-image-sign-slide;\r\n        }\r\n        .logo-trees {\r\n            // Animation\r\n            animation-name: logo-trees-slide;\r\n        }\r\n        .logo-rooster {\r\n            // Animation\r\n            animation-name: logo-rooster-slide;\r\n        }\r\n    }\r\n\r\n    .logo-text-sign {\r\n        bottom: 0;\r\n    }\r\n}\r\n\r\n@keyframes logo-slide {\r\n    0% {\r\n        transform: translateY(100%);\r\n    }\r\n    100% {\r\n        transform: translateY(0%);\r\n    }\r\n}\r\n\r\n@keyframes logo-image-sign-slide {\r\n    0% {\r\n        transform: translateY(50%);\r\n    }\r\n    100% {\r\n        transform: translateY(0%);\r\n    }\r\n}\r\n\r\n@keyframes logo-trees-slide {\r\n    0% {\r\n        transform: translateY(100%);\r\n    }\r\n    100% {\r\n        transform: translateY(0%);\r\n    }\r\n}\r\n\r\n@keyframes logo-rooster-slide {\r\n    0% {\r\n        transform: translateY(200%);\r\n    }\r\n    100% {\r\n        transform: translateY(0%);\r\n    }\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".location-container, .phone-number {\n  text-align: center;\n  font-size: 3rem;\n  font-weight: 600; }\n\n#pizza-board-container {\n  flex: 1;\n  padding: 5% 15%;\n  position: relative;\n  display: grid;\n  place-items: center;\n  transform: translateX(-150vw); }\n  #pizza-board-container.has-loaded {\n    animation-name: slide-board-in-with-item;\n    animation-duration: 1s;\n    animation-timing-function: ease;\n    animation-fill-mode: both; }\n    #pizza-board-container.has-loaded::before {\n      animation-name: slide-board-out-empty;\n      animation-duration: 1s;\n      animation-delay: 1s;\n      animation-timing-function: ease;\n      animation-fill-mode: both; }\n  #pizza-board-container::before {\n    z-index: 10;\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    aspect-ratio: 2.1;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    transform: translateX(-25%); }\n  #pizza-board-container iframe {\n    width: 100%;\n    height: 100%;\n    z-index: 11; }\n\n@keyframes slide-board-in-with-item {\n  0% {\n    transform: translateX(-150vw); }\n  100% {\n    transform: translateX(0); } }\n\n@keyframes slide-board-out-empty {\n  0% {\n    transform: translateX(-25%); }\n  100% {\n    transform: translateX(-150vw); } }\n", "",{"version":3,"sources":["webpack://./src/contact.scss"],"names":[],"mappings":"AAAA;EACI,kBAAkB;EAClB,eAAe;EACf,gBAAgB,EAAA;;AAGpB;EACI,OAAO;EACP,eAAe;EACf,kBAAkB;EAElB,aAAa;EACb,mBAAmB;EAEnB,6BAA6B,EAAA;EARjC;IAYQ,wCAAwC;IACxC,sBAAsB;IACtB,+BAA+B;IAC/B,yBAAyB,EAAA;IAfjC;MAmBY,qCAAqC;MACrC,sBAAsB;MACtB,mBAAmB;MACnB,+BAA+B;MAC/B,yBAAyB,EAAA;EAvBrC;IA4BQ,WAAW;IAEX,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,iBAAiB;IAEjB,yDAAoE;IACpE,wBAAwB;IACxB,4BAA4B;IAE5B,2BAA2B,EAAA;EAxCnC;IA4CQ,WAAW;IACX,YAAY;IACZ,WAAW,EAAA;;AAInB;EACI;IACI,6BAA6B,EAAA;EAEjC;IACI,wBAAwB,EAAA,EAAA;;AAIhC;EACI;IACI,2BAA2B,EAAA;EAE/B;IACI,6BAA6B,EAAA,EAAA","sourcesContent":[".location-container, .phone-number {\r\n    text-align: center;\r\n    font-size: 3rem;\r\n    font-weight: 600;\r\n}\r\n\r\n#pizza-board-container {\r\n    flex: 1;\r\n    padding: 5% 15%;\r\n    position: relative;\r\n    // Grid\r\n    display: grid;\r\n    place-items: center;\r\n    // Transform\r\n    transform: translateX(-150vw);\r\n\r\n    &.has-loaded {\r\n        // Animation\r\n        animation-name: slide-board-in-with-item;\r\n        animation-duration: 1s;\r\n        animation-timing-function: ease;\r\n        animation-fill-mode: both;\r\n\r\n        &::before {\r\n            // Animation\r\n            animation-name: slide-board-out-empty;\r\n            animation-duration: 1s;\r\n            animation-delay: 1s;\r\n            animation-timing-function: ease;\r\n            animation-fill-mode: both;\r\n        }\r\n    }\r\n\r\n    &::before {\r\n        z-index: 10;\r\n        // Position\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        aspect-ratio: 2.1;\r\n        // Background\r\n        background-image: url('./img/Upcycled_Pizza_Peel_alpha_rotated.png');\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n        // Transform\r\n        transform: translateX(-25%);\r\n    }\r\n\r\n    iframe {\r\n        width: 100%;\r\n        height: 100%;\r\n        z-index: 11;\r\n    }\r\n}\r\n\r\n@keyframes slide-board-in-with-item {\r\n    0% {\r\n        transform: translateX(-150vw);\r\n    }\r\n    100% {\r\n        transform: translateX(0);\r\n    } \r\n}\r\n\r\n@keyframes slide-board-out-empty {\r\n    0% {\r\n        transform: translateX(-25%);\r\n    }\r\n    100% {\r\n        transform: translateX(-150vw);\r\n    } \r\n}\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Pizza_Pepperoni.svg */ "./src/img/Pizza_Pepperoni.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#gallery {\n  width: 80%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }\n  #gallery a.gallery-item {\n    display: block;\n    position: relative; }\n    #gallery a.gallery-item:hover img, #gallery a.gallery-item:focus img {\n      transform: scale(1); }\n    #gallery a.gallery-item img {\n      width: 100%;\n      height: auto;\n      transform: scale(0.9);\n      transition: transform 500ms ease;\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n      background-position: center;\n      background-size: contain;\n      background-repeat: no-repeat; }\n\n#full-img-modal {\n  --btn-width: 5rem;\n  border: 2px solid black;\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.9);\n  /* Black w/ opacity */\n  display: grid;\n  grid-template-columns: var(--btn-width) 1fr var(--btn-width);\n  grid-template-rows: var(--btn-width) 1fr;\n  grid-template-areas: \". . close\"\r \"prev content next\"; }\n  #full-img-modal:not(.hide) #img-modal-content-container {\n    animation-name: zoom;\n    animation-duration: 500ms; }\n  #full-img-modal.hide {\n    display: none; }\n  #full-img-modal #img-modal-close {\n    grid-area: close;\n    font-size: 3rem;\n    height: var(--btn-width); }\n  #full-img-modal #img-modal-content-container {\n    grid-area: content;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center; }\n    #full-img-modal #img-modal-content-container #img-modal-content {\n      object-fit: cover;\n      width: 100%;\n      max-height: 100%; }\n  #full-img-modal #img-modal-close, #full-img-modal #img-modal-prev, #full-img-modal #img-modal-next {\n    cursor: pointer;\n    border: 2px solid var(--base-white);\n    width: var(--btn-width);\n    display: grid;\n    place-items: center;\n    transition: background-color 300ms ease; }\n    #full-img-modal #img-modal-close:hover, #full-img-modal #img-modal-close:focus, #full-img-modal #img-modal-prev:hover, #full-img-modal #img-modal-prev:focus, #full-img-modal #img-modal-next:hover, #full-img-modal #img-modal-next:focus {\n      background-color: gray; }\n  #full-img-modal #img-modal-prev {\n    grid-area: prev;\n    font-size: 6rem; }\n  #full-img-modal #img-modal-next {\n    grid-area: next;\n    font-size: 6rem; }\n\n@keyframes zoom {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n", "",{"version":3,"sources":["webpack://./src/gallery.scss"],"names":[],"mappings":"AAAA;EACI,UAAU;EAEV,aAAa;EACb,4DAA4D,EAAA;EAJhE;IAQQ,cAAc;IACd,kBAAkB,EAAA;IAT1B;MAagB,mBAAmB,EAAA;IAbnC;MAkBY,WAAW;MACX,YAAY;MACZ,qBAAqB;MACrB,gCAAgC;MAEhC,yDAAkD;MAClD,2BAA2B;MAC3B,wBAAwB;MACxB,4BAA4B,EAAA;;AAKxC;EACI,iBAAY;EAEZ,uBAAuB;EACvB,eAAe;EAAE,kBAAA;EACjB,UAAU;EAAE,eAAA;EAEZ,OAAO;EACP,MAAM;EACN,WAAW;EAAE,eAAA;EACb,YAAY;EAAE,gBAAA;EAEd,uBAA4B;EAAE,mBAAA;EAC9B,oCAAiC;EAAE,qBAAA;EAEnC,aAAa;EACb,4DAA4D;EAC5D,wCAAwC;EACxC,qDAEuB,EAAA;EApB3B;IAyBY,oBAAoB;IACpB,yBAAyB,EAAA;EA1BrC;IA+BQ,aAAa,EAAA;EA/BrB;IAmCQ,gBAAgB;IAChB,eAAe;IACf,wBAAwB,EAAA;EArChC;IAyCQ,kBAAkB;IAElB,wBAAwB;IACxB,4BAA4B;IAC5B,2BAA2B,EAAA;IA7CnC;MA2DY,iBAAiB;MACjB,WAAW;MACX,gBAAgB,EAAA;EA7D5B;IAkEQ,eAAe;IACf,mCAAmC;IACnC,uBAAuB;IAEvB,aAAa;IACb,mBAAmB;IAEnB,uCAAuC,EAAA;IAzE/C;MA4EY,sBAAiC,EAAA;EA5E7C;IAiFQ,eAAe;IACf,eAAe,EAAA;EAlFvB;IAsFQ,eAAe;IACf,eAAe,EAAA;;AAIvB;EACI;IACI,mBAAmB,EAAA;EAEvB;IACI,mBAAmB,EAAA,EAAA","sourcesContent":["#gallery {\r\n    width: 80%;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n    //gap: 1rem;\r\n\r\n    a.gallery-item {\r\n        display: block;\r\n        position: relative;\r\n\r\n        &:hover, &:focus {\r\n            img {\r\n                transform: scale(1);\r\n            }\r\n        }\r\n\r\n        img {\r\n            width: 100%;\r\n            height: auto;\r\n            transform: scale(0.9);\r\n            transition: transform 500ms ease;\r\n            // Background\r\n            background-image: url('./img/Pizza_Pepperoni.svg');\r\n            background-position: center;\r\n            background-size: contain;\r\n            background-repeat: no-repeat;\r\n        }\r\n    }\r\n}\r\n\r\n#full-img-modal {\r\n    --btn-width: 5rem;\r\n\r\n    border: 2px solid black;\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    //padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    //overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\r\n    // Grid\r\n    display: grid;\r\n    grid-template-columns: var(--btn-width) 1fr var(--btn-width);\r\n    grid-template-rows: var(--btn-width) 1fr;\r\n    grid-template-areas: \r\n        \". . close\"\r\n        \"prev content next\";\r\n\r\n    &:not(.hide) {\r\n        #img-modal-content-container {\r\n            // Animation\r\n            animation-name: zoom;\r\n            animation-duration: 500ms;\r\n        }\r\n    }\r\n\r\n    &.hide {\r\n        display: none;\r\n    }\r\n\r\n    #img-modal-close {\r\n        grid-area: close;\r\n        font-size: 3rem;\r\n        height: var(--btn-width);\r\n    }\r\n\r\n    #img-modal-content-container {\r\n        grid-area: content;\r\n        // Background\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n        background-position: center;\r\n\r\n        #img-modal-content {\r\n            // margin: auto;\r\n            // display: block;\r\n            // width: 80%;\r\n            // max-width: 700px;\r\n            // height: auto;\r\n\r\n            // max-width: 100%;\r\n            // max-height: 100%;\r\n            // display: block;\r\n            // object-fit: contain;\r\n\r\n            object-fit: cover;\r\n            width: 100%;\r\n            max-height: 100%;\r\n        }\r\n    }\r\n\r\n    #img-modal-close, #img-modal-prev, #img-modal-next {\r\n        cursor: pointer;\r\n        border: 2px solid var(--base-white);\r\n        width: var(--btn-width);\r\n        // Grid\r\n        display: grid;\r\n        place-items: center;\r\n        // Transition\r\n        transition: background-color 300ms ease;\r\n\r\n        &:hover, &:focus {\r\n            background-color: hsl(0, 0%, 50%);\r\n        }\r\n    }\r\n\r\n    #img-modal-prev {\r\n        grid-area: prev;\r\n        font-size: 6rem;\r\n    }\r\n\r\n    #img-modal-next {\r\n        grid-area: next;\r\n        font-size: 6rem;\r\n    }\r\n}\r\n\r\n@keyframes zoom {\r\n    0% {\r\n        transform: scale(0);\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n    }\r\n}"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fondo_cont.jpg */ "./src/img/fondo_cont.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/tomato.png */ "./src/img/tomato.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#menu-page-btn-container {\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column; }\n  #menu-page-btn-container .menu-page-btn {\n    --growth-ratio: 1.2; }\n    #menu-page-btn-container .menu-page-btn a {\n      display: block;\n      padding: 0.5em 1em;\n      transform: scale(calc(1 / var(--growth-ratio)));\n      transition: transform 500ms ease;\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n      border: 2px solid var(--base-white); }\n      #menu-page-btn-container .menu-page-btn a span {\n        display: block;\n        position: relative;\n        line-height: normal;\n        font-size: calc(var(--growth-ratio) * 100%);\n        font-weight: 600;\n        display: grid;\n        place-items: center; }\n        #menu-page-btn-container .menu-page-btn a span::before {\n          content: \"\";\n          background-color: var(--base-white);\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          height: 2px;\n          transition: all 500ms ease;\n          width: 0%;\n          opacity: 0; }\n      #menu-page-btn-container .menu-page-btn a:hover, #menu-page-btn-container .menu-page-btn a:active, #menu-page-btn-container .menu-page-btn a:focus {\n        transform: scale(1); }\n        #menu-page-btn-container .menu-page-btn a:hover span::before, #menu-page-btn-container .menu-page-btn a:active span::before, #menu-page-btn-container .menu-page-btn a:focus span::before {\n          width: 100%;\n          opacity: 1; }\n\n#menu-page-container {\n  margin: 1rem auto;\n  max-width: 150ch;\n  perspective: 500vw; }\n\n#menu-pages {\n  position: relative;\n  transform-style: preserve-3d;\n  transform: rotateY(0deg);\n  transition: transform 1s ease-out; }\n  #menu-pages[data-page-displayed=\"2\"] {\n    transform: rotateY(180deg); }\n  #menu-pages .pizza-item-number, #menu-pages h2 {\n    font-size: 110%;\n    font-weight: 600; }\n\n.menu-page-single {\n  padding: 1em;\n  outline: 6px solid black;\n  border: 6px solid #c62a13;\n  border-radius: 1em;\n  box-shadow: inset 0px 0px 5px var(--base-black);\n  position: relative;\n  transform-style: preserve-3d;\n  transform: rotateY(0deg);\n  backface-visibility: hidden;\n  background-color: #8a3f06;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 500px; }\n  .menu-page-single h2 {\n    text-transform: uppercase; }\n  .menu-page-single img {\n    width: 100%;\n    height: auto; }\n  .menu-page-single .menu-column-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(50ch, 1fr));\n    column-gap: 2rem; }\n  .menu-page-single .menu-column {\n    display: grid;\n    grid-auto-rows: min-content; }\n    .menu-page-single .menu-column > *:not(:last-child) {\n      border-bottom: 2px solid var(--base-white); }\n    .menu-page-single .menu-column > * {\n      padding: 1rem 0; }\n\n#menu-page-2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  transform: rotateY(180deg) translateZ(10px); }\n\n.pizza-item {\n  display: grid;\n  grid-template-columns: 2em 1fr auto;\n  gap: 1rem 0.5rem;\n  grid-template-areas: \"number name prices\"\r \"ingredients ingredients ingredients\"; }\n  .pizza-item .pizza-item-number {\n    color: var(--base-white);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-size: 140%;\n    background-repeat: no-repeat;\n    grid-area: number;\n    display: grid;\n    place-content: center; }\n  .pizza-item .pizza-item-name {\n    grid-area: name;\n    display: grid;\n    align-content: center; }\n  .pizza-item .pizza-item-prices {\n    font-size: 80%;\n    text-align: center;\n    grid-area: prices;\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n    align-items: center; }\n    .pizza-item .pizza-item-prices .pizza-item-price-single {\n      padding: 0 0.5em; }\n      .pizza-item .pizza-item-prices .pizza-item-price-single:first-child {\n        padding-left: 0; }\n      .pizza-item .pizza-item-prices .pizza-item-price-single:last-child {\n        padding-right: 0; }\n      .pizza-item .pizza-item-prices .pizza-item-price-single:not(:last-child) {\n        border-right: 2px solid var(--base-white); }\n  .pizza-item .pizza-item-ingredients {\n    grid-area: ingredients; }\n\n.cop-prices-container p {\n  text-align: center;\n  text-transform: uppercase;\n  padding: 1rem 0; }\n\n.cop-prices-container .cop-prices {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr); }\n  .cop-prices-container .cop-prices .cop-price-single {\n    text-align: center;\n    display: grid;\n    gap: 0.3em; }\n    .cop-prices-container .cop-prices .cop-price-single .cop-price-single-size, .cop-prices-container .cop-prices .cop-price-single .cop-price-single-value {\n      font-weight: 600; }\n    .cop-prices-container .cop-prices .cop-price-single .cop-price-single-size {\n      white-space: nowrap; }\n    .cop-prices-container .cop-prices .cop-price-single .cop-price-single-value {\n      white-space: nowrap; }\n    .cop-prices-container .cop-prices .cop-price-single .cop-price-single-note {\n      font-size: 70%; }\n\n.cop-ingredient {\n  display: grid;\n  row-gap: 1rem; }\n\n.other-item-type {\n  display: grid;\n  gap: 1rem; }\n  .other-item-type > *:not(h2) {\n    padding-left: 3ch; }\n  .other-item-type .other-item, .other-item-type .other-item-with-ingredients {\n    display: grid;\n    grid-template-columns: 1fr auto; }\n    .other-item-type .other-item .other-item-price, .other-item-type .other-item-with-ingredients .other-item-price {\n      align-self: center; }\n  .other-item-type .other-item-with-ingredients {\n    row-gap: 1rem; }\n    .other-item-type .other-item-with-ingredients .other-item-ingredients {\n      grid: 2 / 1 / 3 / 3; }\n\n.gluten-free-crust-container,\n.hours-container,\n.tagline-container,\n.menu-misc-data-item {\n  font-size: 120%;\n  text-align: center;\n  display: grid;\n  place-items: center;\n  gap: 0.5rem; }\n", "",{"version":3,"sources":["webpack://./src/menu.scss"],"names":[],"mappings":"AAAA;EAEI,aAAa;EACb,sBAAsB;EACtB,sBAAsB,EAAA;EAJ1B;IAOQ,mBAAe,EAAA;IAPvB;MAUY,cAAc;MACd,kBAAkB;MAElB,+CAA+C;MAC/C,gCAAgC;MAEhC,yDAA6C;MAE7C,mCAAmC,EAAA;MAlB/C;QAqBgB,cAAc;QACd,kBAAkB;QAClB,mBAAmB;QAEnB,2CAA2C;QAC3C,gBAAgB;QAEhB,aAAa;QACb,mBAAmB,EAAA;QA7BnC;UAqCoB,WAAW;UACX,mCAAmC;UAEnC,kBAAkB;UAClB,SAAS;UACT,OAAO;UACP,WAAW;UAEX,0BAA0B;UAE1B,SAAS;UACT,UAAU,EAAA;MAhD9B;QAsDgB,mBAAmB,EAAA;QAtDnC;UA0DwB,WAAW;UACX,UAAU,EAAA;;AAQlC;EACI,iBAAiB;EACjB,gBAAgB;EAEhB,kBAAkB,EAAA;;AAGtB;EACI,kBAAkB;EAClB,4BAA4B;EAE5B,wBAAwB;EACxB,iCAAiC,EAAA;EALrC;IAQQ,0BAA0B,EAAA;EARlC;IAYQ,eAAe;IACf,gBAAgB,EAAA;;AAIxB;EACI,YAAY;EACZ,wBAAwB;EACxB,yBAAyB;EACzB,kBAAkB;EAClB,+CAA+C;EAC/C,kBAAkB;EAClB,4BAA4B;EAC5B,wBAAwB;EACxB,2BAA2B;EAE3B,yBAAiC;EACjC,yDAA6C;EAC7C,sBAAsB,EAAA;EAb1B;IAqBQ,yBAAyB,EAAA;EArBjC;IAyBQ,WAAW;IACX,YAAY,EAAA;EA1BpB;IAoCQ,aAAa;IACb,0DAA0D;IAC1D,gBAAgB,EAAA;EAtCxB;IAoDQ,aAAa;IACb,2BAA2B,EAAA;IArDnC;MAwDY,0CAA0C,EAAA;IAxDtD;MA4DY,eAAe,EAAA;;AAK3B;EACI,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,2CAA2C,EAAA;;AAG/C;EAGI,aAAa;EACb,mCAAmC;EACnC,gBAAgB;EAChB,gFAEyC,EAAA;EAR7C;IAYQ,wBAAwB;IAExB,yDAAyC;IACzC,2BAA2B;IAC3B,qBAAqB;IACrB,4BAA4B;IAE5B,iBAAiB;IACjB,aAAa;IACb,qBAAqB,EAAA;EArB7B;IA2BQ,eAAe;IACf,aAAa;IACb,qBAAqB,EAAA;EA7B7B;IAkCQ,cAAc;IACd,kBAAkB;IAElB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB,EAAA;IAzC3B;MA6CY,gBAAgB,EAAA;MA7C5B;QAgDgB,eAAe,EAAA;MAhD/B;QAoDgB,gBAAgB,EAAA;MApDhC;QAwDgB,yCAAyC,EAAA;EAxDzD;IAgEQ,sBAAsB,EAAA;;AAI9B;EAMQ,kBAAkB;EAClB,yBAAyB;EACzB,eAAe,EAAA;;AARvB;EAaQ,aAAa;EACb,qCAAqC,EAAA;EAd7C;IAiBY,kBAAkB;IAElB,aAAa;IACb,UAAU,EAAA;IApBtB;MAuBgB,gBAAgB,EAAA;IAvBhC;MA2BgB,mBAAmB,EAAA;IA3BnC;MA8BgB,mBAAmB,EAAA;IA9BnC;MAiCgB,cAAc,EAAA;;AAM9B;EAEI,aAAa;EACb,aAAa,EAAA;;AAGjB;EAEI,aAAa;EACb,SAAS,EAAA;EAHb;IAUQ,iBAAiB,EAAA;EAVzB;IAeQ,aAAa;IACb,+BAA+B,EAAA;IAhBvC;MAuBY,kBAAkB,EAAA;EAvB9B;IA2BQ,aAAa,EAAA;IA3BrB;MA+BY,mBAAmB,EAAA;;AAK/B;;;;EAII,eAAe;EACf,kBAAkB;EAElB,aAAa;EACb,mBAAmB;EACnB,WAAW,EAAA","sourcesContent":["#menu-page-btn-container {\r\n    // Grid\r\n    display: grid;\r\n    grid-auto-columns: 1fr;\r\n    grid-auto-flow: column;\r\n\r\n    .menu-page-btn {\r\n        --growth-ratio: 1.2;\r\n\r\n        a {\r\n            display: block;\r\n            padding: 0.5em 1em;\r\n            // Transform\r\n            transform: scale(calc(1 / var(--growth-ratio)));\r\n            transition: transform 500ms ease;\r\n            // Background\r\n            background-image: url('./img/fondo_cont.jpg');\r\n            // Border\r\n            border: 2px solid var(--base-white);\r\n    \r\n            span {\r\n                display: block;\r\n                position: relative;\r\n                line-height: normal;\r\n                // Font\r\n                font-size: calc(var(--growth-ratio) * 100%);\r\n                font-weight: 600;\r\n                // Grid\r\n                display: grid;\r\n                place-items: center;\r\n                // // Transform\r\n                // transform: scale(calc(1 / var(--growth-ratio)));\r\n                // transition: transform 500ms ease;\r\n                // // Background\r\n                // background-image: url('./img/fondo_cont.jpg');\r\n    \r\n                &::before {\r\n                    content: \"\";\r\n                    background-color: var(--base-white);\r\n                    // Absolute Position\r\n                    position: absolute;\r\n                    bottom: 0;\r\n                    left: 0;\r\n                    height: 2px;\r\n                    // Transition\r\n                    transition: all 500ms ease;\r\n                    // Transition Values\r\n                    width: 0%;\r\n                    opacity: 0;\r\n                }\r\n            }\r\n    \r\n            &:hover, &:active, &:focus {\r\n                // Transform\r\n                transform: scale(1);\r\n\r\n                span {\r\n                    &::before {\r\n                        width: 100%;\r\n                        opacity: 1;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n#menu-page-container {\r\n    margin: 1rem auto;\r\n    max-width: 150ch;\r\n    // width: 80%;\r\n    perspective: 500vw;\r\n}\r\n\r\n#menu-pages {\r\n    position: relative;\r\n    transform-style: preserve-3d;\r\n    // Transition\r\n    transform: rotateY(0deg);\r\n    transition: transform 1s ease-out;\r\n\r\n    &[data-page-displayed=\"2\"] {\r\n        transform: rotateY(180deg);\r\n    }\r\n\r\n    .pizza-item-number, h2 {\r\n        font-size: 110%;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.menu-page-single {\r\n    padding: 1em;\r\n    outline: 6px solid black;\r\n    border: 6px solid #c62a13;\r\n    border-radius: 1em;\r\n    box-shadow: inset 0px 0px 5px var(--base-black);\r\n    position: relative;\r\n    transform-style: preserve-3d;\r\n    transform: rotateY(0deg);\r\n    backface-visibility: hidden;\r\n    // Background\r\n    background-color: rgb(138, 63, 6);\r\n    background-image: url('./img/fondo_cont.jpg');\r\n    background-size: 500px;\r\n    // Grid\r\n    // display: grid;\r\n    // grid-template-columns: repeat(2, 1fr);\r\n    // grid-template-rows: repeat(2, min-content);\r\n    //gap: 1rem;\r\n\r\n    h2 {\r\n        text-transform: uppercase;\r\n    }\r\n\r\n    img {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .menu-logo {\r\n        // Grid\r\n        //grid-area: 1 / 1 / 2 / 3;\r\n    }\r\n\r\n    .menu-column-container {\r\n        // Grid\r\n        display: grid;\r\n        grid-template-columns: repeat(auto-fit, minmax(50ch, 1fr));\r\n        column-gap: 2rem;\r\n    }\r\n\r\n    .menu-column:first-of-type {\r\n        // border-right: 2px solid var(--base-white);\r\n        // padding-right: 1rem;\r\n    }\r\n\r\n    .menu-column:last-of-type {\r\n        //padding-left: 1rem;\r\n    }\r\n\r\n    .menu-column {\r\n        // Grid\r\n        display: grid;\r\n        grid-auto-rows: min-content;\r\n\r\n        > *:not(:last-child) {\r\n            border-bottom: 2px solid var(--base-white);\r\n        }\r\n\r\n        > * {\r\n            padding: 1rem 0;\r\n        }\r\n    }\r\n}\r\n\r\n#menu-page-2 {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    transform: rotateY(180deg) translateZ(10px);\r\n}\r\n\r\n.pizza-item {\r\n    //border: 2px solid white;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-columns: 2em 1fr auto;\r\n    gap: 1rem 0.5rem;\r\n    grid-template-areas: \r\n        \"number name prices\"\r\n        \"ingredients ingredients ingredients\";\r\n\r\n    .pizza-item-number {\r\n        //outline: 2px solid orange;\r\n        color: var(--base-white);\r\n        // Background\r\n        background-image: url('./img/tomato.png');\r\n        background-position: center;\r\n        background-size: 140%;\r\n        background-repeat: no-repeat;\r\n        // Grid\r\n        grid-area: number;\r\n        display: grid;\r\n        place-content: center;\r\n    }\r\n\r\n    .pizza-item-name {\r\n        //outline: 2px solid red;\r\n        // Grid\r\n        grid-area: name;\r\n        display: grid;\r\n        align-content: center;\r\n    }\r\n\r\n    .pizza-item-prices {\r\n        //outline: 2px solid green;\r\n        font-size: 80%;\r\n        text-align: center;\r\n        // Grid\r\n        grid-area: prices;\r\n        display: grid;\r\n        grid-auto-flow: column;\r\n        grid-auto-columns: 1fr;\r\n        align-items: center;\r\n\r\n        .pizza-item-price-single {\r\n            //outline: 2px solid red;\r\n            padding: 0 0.5em;\r\n\r\n            &:first-child {\r\n                padding-left: 0;\r\n            }\r\n\r\n            &:last-child {\r\n                padding-right: 0;\r\n            }\r\n\r\n            &:not(:last-child) {\r\n                border-right: 2px solid var(--base-white);\r\n            }\r\n        }\r\n    }\r\n\r\n    .pizza-item-ingredients {\r\n        //outline: 2px solid blue;\r\n        // Grid\r\n        grid-area: ingredients;\r\n    }\r\n}\r\n\r\n.cop-prices-container {\r\n    .cop-logo {\r\n\r\n    }\r\n\r\n    p {\r\n        text-align: center;\r\n        text-transform: uppercase;\r\n        padding: 1rem 0;\r\n    }\r\n\r\n    .cop-prices {\r\n        // Grid\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 1fr);\r\n\r\n        .cop-price-single {\r\n            text-align: center;\r\n            // Grid\r\n            display: grid;\r\n            gap: 0.3em;\r\n\r\n            .cop-price-single-size, .cop-price-single-value {\r\n                font-weight: 600;\r\n            }\r\n\r\n            .cop-price-single-size {\r\n                white-space: nowrap;\r\n            }\r\n            .cop-price-single-value {\r\n                white-space: nowrap;\r\n            }\r\n            .cop-price-single-note {\r\n                font-size: 70%;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.cop-ingredient {\r\n    // Grid\r\n    display: grid;\r\n    row-gap: 1rem;\r\n}\r\n\r\n.other-item-type {\r\n    // Grid\r\n    display: grid;\r\n    gap: 1rem;\r\n\r\n    h2 {\r\n\r\n    }\r\n\r\n    > *:not(h2) {\r\n        padding-left: 3ch;\r\n    }\r\n\r\n    .other-item, .other-item-with-ingredients {\r\n        // Grid\r\n        display: grid;\r\n        grid-template-columns: 1fr auto;\r\n\r\n        .other-item-name {\r\n\r\n        }\r\n\r\n        .other-item-price {\r\n            align-self: center;\r\n        }\r\n    }\r\n    .other-item-with-ingredients {\r\n        row-gap: 1rem;\r\n\r\n        .other-item-ingredients {\r\n            // Grid\r\n            grid: 2 / 1 / 3 / 3;\r\n        }\r\n    }\r\n}\r\n\r\n.gluten-free-crust-container, \r\n.hours-container,\r\n.tagline-container,\r\n.menu-misc-data-item {\r\n    font-size: 120%;\r\n    text-align: center;\r\n    // Grid\r\n    display: grid;\r\n    place-items: center;\r\n    gap: 0.5rem;\r\n}"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/TexturesCom_Wall_BrickOld3A_2x1_512.jpg */ "./src/img/TexturesCom_Wall_BrickOld3A_2x1_512.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --base-white: hsl(0,0%,90%);\n  --base-black: hsl(0,0%,10%);\n  --primary-color: #8c3f45;\n  --secondary-color: #285954;\n  --tertiary-color: #71873D; }\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nbody {\n  font-size: 1.6rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  color: var(--base-white); }\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 20vh 1fr 10vh; }\n\nheader {\n  background-color: #280f05;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: auto;\n  background-position: bottom;\n  display: grid;\n  grid-template-rows: 1fr auto; }\n  header img {\n    height: 100%;\n    width: auto; }\n  header .logo-container {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n\nmain {\n  padding: 1rem;\n  background-color: #925642;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: top;\n  background-size: 500px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.white-text-shadow {\n  text-shadow: 0px 0px 5px var(--base-black); }\n\na {\n  text-decoration: none;\n  color: inherit; }\n\n/* Smallest (300px and down) */\n/* Extra small devices (phones, 300px and up) */\n/* Small devices (portrait tablets and large phones, 600px and up) */\n/* Medium devices (landscape tablets, 768px and up) */\n/* Large devices (laptops/desktops, 992px and up) */\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,2BAAa;EACb,2BAAa;EACb,wBAAgB;EAChB,0BAAkB;EAClB,yBAAiB,EAAA;;AAGrB;EACI,gBAAgB;EAChB,sBAAsB,EAAA;;AAG1B;EACI,mBAAmB,EAAA;;AAGvB;EACI,iBAAiB;EACjB,wIAAwI;EACxI,SAAS;EACT,wBAAwB,EAAA;;AAG5B;EACI,iBAAiB;EAEjB,aAAa;EACb,iCAAiC,EAAA;;AAGrC;EAEI,yBAAyB;EACzB,yDAAiD;EACjD,qBAAqB;EACrB,2BAA2B;EAE3B,aAAa;EACb,4BAA4B,EAAA;EARhC;IAWQ,YAAY;IACZ,WAAW,EAAA;EAZnB;IAgBQ,yDAAuC;IACvC,2BAA2B;IAC3B,4BAA4B;IAC5B,wBAAwB,EAAA;;AAIhC;EACI,aAAa;EAEb,yBAAyB;EACzB,yDAAsE;EACtE,wBAAwB;EACxB,sBAAsB;EAEtB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB,EAAA;;AAKvB;EACI,0CAA0C,EAAA;;AAG9C;EACI,qBAAqB;EACrB,cAAc,EAAA;;AAKlB,8BAAA;AAGA,+CAAA;AAGA,oEAAA;AAGA,qDAAA;AAGA,mDAAA;AAGA,oEAAA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n:root {\r\n    --base-white: hsl(0,0%,90%);\r\n    --base-black: hsl(0,0%,10%);\r\n    --primary-color: #8c3f45;\r\n    --secondary-color: #285954;\r\n    --tertiary-color: #71873D;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n*, *::before, *::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n    font-size: 1.6rem;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    margin: 0;\r\n    color: var(--base-white);\r\n}\r\n\r\n#content {\r\n    min-height: 100vh;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-rows: 20vh 1fr 10vh;\r\n}\r\n\r\nheader {\r\n    // Background\r\n    background-color: #280f05;\r\n    background-image: url('./img/fondo_Cabezera.jpg');\r\n    background-size: auto;\r\n    background-position: bottom;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-rows: 1fr auto;\r\n\r\n    img {\r\n        height: 100%;\r\n        width: auto;\r\n    }\r\n\r\n    .logo-container {\r\n        background-image: url('./img/logo.png');\r\n        background-position: center;\r\n        background-repeat: no-repeat;\r\n        background-size: contain;\r\n    }\r\n}\r\n\r\nmain {\r\n    padding: 1rem;\r\n    // Background\r\n    background-color: #925642;\r\n    background-image: url('./img/TexturesCom_Wall_BrickOld3A_2x1_512.jpg');\r\n    background-position: top;\r\n    background-size: 500px;\r\n    // Flex\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n// Misc\r\n\r\n.white-text-shadow {\r\n    text-shadow: 0px 0px 5px var(--base-black);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n// Media Queries\r\n\r\n/* Smallest (300px and down) */\r\n@media only screen and (max-width: 300px) {}\r\n\r\n/* Extra small devices (phones, 300px and up) */\r\n@media only screen and (min-width: 300px) {}\r\n\r\n/* Small devices (portrait tablets and large phones, 600px and up) */\r\n@media only screen and (min-width: 600px) {}\r\n\r\n/* Medium devices (landscape tablets, 768px and up) */\r\n@media only screen and (min-width: 768px) {}\r\n\r\n/* Large devices (laptops/desktops, 992px and up) */\r\n@media only screen and (min-width: 992px) {}\r\n\r\n/* Extra large devices (large laptops and desktops, 1200px and up) */\r\n@media only screen and (min-width: 1200px) {}"],"sourceRoot":""}]);
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

        return (0,_utilities_js__WEBPACK_IMPORTED_MODULE_4__.createElement)('div', {id: 'animated-logo-container'}, animatedLogoElement);
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
    // Index of last user selected image, initialized to null for NO selection
    let _selectedImgIndex = null;

    let _imgModalElement = null;
    let _imgModalContentElement = null;
    let _imgModalContentContainer = null;

    const _createFullImageModal = function() {
        const fullImgModal = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: 'full-img-modal', 'class': 'hide'});

        // Close button
        const close = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {id: 'img-modal-close'});
        close.innerHTML = '&times;';
        close.addEventListener('click', () => {
            fullImgModal.classList.add('hide');
        }, false);

        // Add header to modal with close button
        fullImgModal.appendChild(close);

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

        // Image Content Container
        _imgModalContentContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: 'img-modal-content-container'}, 
            _imgModalContentElement
        );

        // Add main to modal
        fullImgModal.append(
            prev,
            next,
            _imgModalContentContainer
        );

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

        //_imgModalContentElement.src = `https://s3-media0.fl.yelpcdn.com/bphoto/${galleryImgSourcesData.yelp[index]}/o.jpg`;
        _imgModalContentContainer.style.backgroundImage = `url(https://s3-media0.fl.yelpcdn.com/bphoto/${_data_galleryImgSources_json__WEBPACK_IMPORTED_MODULE_1__.yelp[index]}/o.jpg)`;

        _imgModalElement.classList.remove('hide');
    };

    const _createGalleryItem = function(yelpId, index) {
        const imgElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(
            'img', 
            {
                'src': `https://s3-media0.fl.yelpcdn.com/bphoto/${yelpId}/300s.jpg`, 
                alt: '',
                loading: 'lazy',
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

/***/ "./src/logo-img-srcset.js":
/*!********************************!*\
  !*** ./src/logo-img-srcset.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLogoImgWithSrcset)
/* harmony export */ });
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_logo_303x203_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo_303x203.png */ "./src/img/logo_303x203.png");
/* harmony import */ var _img_logo_152x102_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/logo_152x102.png */ "./src/img/logo_152x102.png");




function createLogoImgWithSrcset() {
    const img = document.createElement('img');

    img.srcset = `${_img_logo_152x102_png__WEBPACK_IMPORTED_MODULE_2__} 152w, ${_img_logo_303x203_png__WEBPACK_IMPORTED_MODULE_1__} 303w, ${_img_logo_png__WEBPACK_IMPORTED_MODULE_0__} 606w`;
    img.sizes = '(max-width: 300px) 152px, (max-width: 600px) 303px, 1200px';
    img.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    img.alt = 'Corralitos Pizza logo.';

    return img;
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
/* harmony import */ var _logo_img_srcset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo-img-srcset.js */ "./src/logo-img-srcset.js");
/* harmony import */ var _img_titulo_menu_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/titulo_menu.png */ "./src/img/titulo_menu.png");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_titulo_menu2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/titulo_menu2.png */ "./src/img/titulo_menu2.png");
/* harmony import */ var _data_menu_pdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/menu.pdf */ "./src/data/menu.pdf");









function Menu() {
    let _pageSelected = 1;
    let _menuPagesElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {id: 'menu-pages'});

    const _createPizzaElement = function(pizzaObj, number) {
        const pizzaElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'pizza-item'});

        // Number
        pizzaElement.appendChild(
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'pizza-item-number white-text-shadow'}, number)
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
        ingredientElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', {'class': 'cop-ingredient-type'}, `${ingredientType}:`));
        ingredientElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'cop-ingredient-list'}, ingredientList));
        return ingredientElement;
    };

    const _createOwnPizzaPricesElement = function() {
        const copPricesElement = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'cop-prices-container'});
        copPricesElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('img', {'src': _img_titulo_menu2_png__WEBPACK_IMPORTED_MODULE_6__, 'alt': 'Create own pizza logo.', 'class': 'cop-logo'}));
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
        const menuPage = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-page-single'});

        // Menu Logo
        menuPage.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('img', {'src': _img_titulo_menu_png__WEBPACK_IMPORTED_MODULE_4__, 'alt': 'Menu logo.', 'class': 'menu-logo'}));

        // Column Container
        const columnContainer = menuPage.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-column-container'}));

        let column = columnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-column'}));

        // Pizzas
        _data_menu_json__WEBPACK_IMPORTED_MODULE_0__.pizza.forEach((pizza, index) => {
            // Change to new column after twelve pizza types
            if (index === 12) {
                column = columnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-column'}));
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
        const menuPage = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-page-single', id: 'menu-page-2'});

        // Menu Logo
        menuPage.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('img', {'src': _img_titulo_menu_png__WEBPACK_IMPORTED_MODULE_4__, 'alt': 'Menu logo.', 'class': 'menu-logo'}));

        // Column Container
        const columnContainer = menuPage.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-column-container'}));

        // First Column
        let column = columnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-column'}));

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
        column = columnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-column'}));

        // Logo
        column.appendChild((0,_logo_img_srcset_js__WEBPACK_IMPORTED_MODULE_3__["default"])());

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

    const _createMenuPageButtons = function(bScrollToTop = false) {
        const btnContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {id: 'menu-page-btn-container'});

        // Page 1
        let btn = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {'href': ''});
        btn.addEventListener('click', e => {
            e.preventDefault();
            _pageSelected = 1;
            _updateMenu();
            if (bScrollToTop) _menuPagesElement.scrollIntoView({behavior: 'smooth'});
        }, false);
        btn.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', {'class': 'white-text-shadow'}, 'Page 1'));
        btnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-page-btn'}, btn));

        // Page 2
        btn = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {href: ''});
        btn.addEventListener('click', e => {
            e.preventDefault();
            _pageSelected = 2;
            _updateMenu();
            if (bScrollToTop) _menuPagesElement.scrollIntoView({behavior: 'smooth'});
        }, false);
        btn.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', {'class': 'white-text-shadow'}, 'Page 2'));
        btnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-page-btn'}, btn));

        // PDF
        btn = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('a', {href: _data_menu_pdf__WEBPACK_IMPORTED_MODULE_7__, target: '_blank'});
        btn.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('span', {'class': 'white-text-shadow'}, 'PDF'));
        btnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {'class': 'menu-page-btn'}, btn));

        return btnContainer;
    };

    const _updateMenu = function() {
        _menuPagesElement.dataset.pageDisplayed = _pageSelected === 2 ? '2' : '1';
    };

    const render = function() {
        const element = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('main');

        // Menu Page Buttons - Top
        element.appendChild(_createMenuPageButtons());

        // Menu Page
        // menu-page-container -> menu-pages -> menu-page
        _menuPagesElement.append(_createFirstPage(), _createSecondPage());
        element.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {id: 'menu-page-container'}, _menuPagesElement));

        // Menu Page Buttons - Bottom
        element.appendChild(_createMenuPageButtons(true));
        
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

function getYelpGalleryImgIds() {
    return Array.from(document.querySelectorAll('.photos [data-analytics-label=biz-photo]'))
	    .map(photo => photo.href.match(/(?<==).+$/)[0]);
}

/***/ }),

/***/ "./src/data/menu.pdf":
/*!***************************!*\
  !*** ./src/data/menu.pdf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34124457d8d59a66fed4.pdf";

/***/ }),

/***/ "./src/img/Pizza_Pepperoni.svg":
/*!*************************************!*\
  !*** ./src/img/Pizza_Pepperoni.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eff14c1f3e713a9c5e1a.svg";

/***/ }),

/***/ "./src/img/TexturesCom_Wall_BrickOld3A_2x1_512.jpg":
/*!*********************************************************!*\
  !*** ./src/img/TexturesCom_Wall_BrickOld3A_2x1_512.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5f08bc86260cb86feaa.jpg";

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

/***/ "./src/img/fondo_cont.jpg":
/*!********************************!*\
  !*** ./src/img/fondo_cont.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53777ea594afbbad7e67.jpg";

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

/***/ "./src/img/logo_152x102.png":
/*!**********************************!*\
  !*** ./src/img/logo_152x102.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c41634be8d147d8cc2f2.png";

/***/ }),

/***/ "./src/img/logo_303x203.png":
/*!**********************************!*\
  !*** ./src/img/logo_303x203.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c32d8bbf176079d3aa7b.png";

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

module.exports = JSON.parse('{"yelp":["xsqE022jcmlFM8uENB3NgA","m4_gptl8keikB1du7jAFkg","S8XDRUTzLPB35bbdiCV5sw","QKNbeUA30OEOH7l171xlxA","_18aSdpsd6C-dyecADSVpg","9ad8kTfJ_OM7tgjycLfz9A","30twJ7ye3OBsiZNlg6JL6w","fU0HZXj0wP-awsYHplNl_Q","CU1XoDdDHR018IU4pCuTGg","f2S8XVfaappdH4kJfsHCZg","Zs2b_RTioEvf0CtvagnAxw","kAMf4T3UYr_t2Swk8z0_4g","4AxPoX4gn6i6sMUaZHSlaA","jTCGRtRmuaGXOxl6ckb7Ow","yOyvYBoq2io4CKIcK0vVUg","mgYQOpRuJbgTQXVNrOz4Rw","bsooWu6eQQf2nzq0JwdHZQ","PXBIKmJyQhdO80XG-bXamw","U4mvP7yuZVDcnOjB_Q_t6g","Z2_q2mcw8gSZG2w4mzAvrw","dFf78zow2qBKDFIuJRSuug","7Gc8sITEAOgdcz01up5_sw","kewChiIFkThzao5Cnt1Ntg","nRi_IDpC0o_fuTBkRzX89A","ZnKj2RZNeELzl6_rTJAtvA","mJS5mJnGSwrE7Im5RZVQ7A","zwpktl9LO985aBiZJhYjOA","MpvX38eiv50TibsgK1ziYQ","904xXe9YTc1D6ZY-HoZINQ","_Gj6L1OJHS7u34j_0ep-cA","hvN0MoGS0zA-MCcVLUXm6A","CQZjS6gHEL5qjxR8rOFHmw","98YdiwXanGKPuXwqTLP1Ag","E-5qE2uX8m_MQT93mDZ2XQ","az965sqJkPJAvGXN7DUQfw","bnQXGXmv0osA3bl0aY-QhQ","FBW2OXpn3yi8dLxxsF9Z3Q","MUg7uUSlJZ8KvbLnR9KW4w","xcK6DGiyWlEFuoeWwgTmiQ","tJvQBZSbJSuUpiOb8wNJVw","29xnjZEqG9mZnJHV2K9aSw","roI8JcTgbkD7sSlFOC_PDA","FWUoQevkwOCUYPxby25TWQ","kk-I0_oFs8hq5OhTM5VeWA","C_VQSDIQymWCq48hwC4xhA","eu3QuSuaYlweKwEUIh7ZwQ","oJyyKXMVuAi2DJOzkcCsUw","f3eqEFem9EGkrrBkP_MYQw","btE23WJa5Tm-cDxbgyYz5w","UkXJQ9wj-7jNk0MP_m7O3Q","SJZDNTM8fUQFwc8hXupTQQ","KwmNL23Pt1vEpcnFyHtc5A","DpPaImXcsiwnbfxYUzZa4Q","KD-8-MPFT_kH9vlywpaLbg","D_nEUS2-zj0B4h5xnar68A","RW2czgJiMWSrp4qbxBFEJw","kZ5tCsk3cM8RmMIjvCHfdw","Tzye1SCHClktIYSEZbFPWQ","VSL0N5UNpEdgRWopJXEAVg","6DpNt5v5eAb1xemZp6KkpQ","4o8Fn08EOsLpXE7ZF9f6EQ","M3QN9vhH_37B8bk3W68uNw","LhWTLw1aKgBGJqNBm8RtMg"]}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxRDtBQUNyRDtBQUNzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlFQUFlO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FuaW1hdGVkLWxvZ28uc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3Quc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbC1wYWdlLWxvYWQuc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21leWVyLXJlc2V0LnNjc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdG9wLW5hdi5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FuaW1hdGVkLWxvZ28uc2Nzcz8xYTQ2Iiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5zY3NzP2ViNTYiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuc2Nzcz9iMTU1Iiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5zY3NzP2QxYzgiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLnNjc3M/ZTE0MiIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwtcGFnZS1sb2FkLnNjc3M/YWM1ZSIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuc2Nzcz84ZDgzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWV5ZXItcmVzZXQuc2Nzcz8xZGIyIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdG9wLW5hdi5zY3NzPzY3NTkiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FuaW1hdGVkLWxvZ28uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLXBhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2xvZ28taW1nLXNyY3NldC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy90b3AtbmF2LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNhbmltYXRlZC1sb2dvLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4jYW5pbWF0ZWQtbG9nbyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG4gICNhbmltYXRlZC1sb2dvID4gaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IGF1dG87IH1cXG4gICNhbmltYXRlZC1sb2dvID4gKiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDsgfVxcbiAgI2FuaW1hdGVkLWxvZ28gLmFuaW1hdGVkLWxvZ28tYmFjayB7XFxuICAgIC0tbG9nby1iYWNrLWhlaWdodC1yYXRpbzogMC43O1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tbG9nby1iYWNrLWhlaWdodC1yYXRpbykgKiAxMDAlKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAjYW5pbWF0ZWQtbG9nbyAuYW5pbWF0ZWQtbG9nby1iYWNrIGltZyB7XFxuICAgICAgaGVpZ2h0OiBjYWxjKDEgLyB2YXIoLS1sb2dvLWJhY2staGVpZ2h0LXJhdGlvKSAqIDEwMCUpO1xcbiAgICAgIG1hcmdpbjogMCBhdXRvOyB9XFxuICAgICNhbmltYXRlZC1sb2dvIC5hbmltYXRlZC1sb2dvLWJhY2sgPiAqIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7IH1cXG4gICAgI2FuaW1hdGVkLWxvZ28gLmFuaW1hdGVkLWxvZ28tYmFjayAubG9nby1pbWFnZS1zaWduIHtcXG4gICAgICBhbmltYXRpb24tbmFtZTogbG9nby1pbWFnZS1zaWduLXNsaWRlOyB9XFxuICAgICNhbmltYXRlZC1sb2dvIC5hbmltYXRlZC1sb2dvLWJhY2sgLmxvZ28tdHJlZXMge1xcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBsb2dvLXRyZWVzLXNsaWRlOyB9XFxuICAgICNhbmltYXRlZC1sb2dvIC5hbmltYXRlZC1sb2dvLWJhY2sgLmxvZ28tcm9vc3RlciB7XFxuICAgICAgYW5pbWF0aW9uLW5hbWU6IGxvZ28tcm9vc3Rlci1zbGlkZTsgfVxcbiAgI2FuaW1hdGVkLWxvZ28gLmxvZ28tdGV4dC1zaWduIHtcXG4gICAgYm90dG9tOiAwOyB9XFxuXFxuQGtleWZyYW1lcyBsb2dvLXNsaWRlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBsb2dvLWltYWdlLXNpZ24tc2xpZGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7IH0gfVxcblxcbkBrZXlmcmFtZXMgbG9nby10cmVlcy1zbGlkZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7IH0gfVxcblxcbkBrZXlmcmFtZXMgbG9nby1yb29zdGVyLXNsaWRlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2FuaW1hdGVkLWxvZ28uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLE9BQU87RUFDUCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFHbEIsWUFBWSxFQUFBO0VBSmhCO0lBT1EsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZLEVBQUE7RUFUcEI7SUFhUSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRLEVBQUE7RUFoQmhCO0lBb0JRLDZCQUF5QjtJQUV6QixrREFBa0Q7SUFDbEQsZ0JBQWdCLEVBQUE7SUF2QnhCO01BMEJZLHNEQUFzRDtNQUN0RCxjQUFjLEVBQUE7SUEzQjFCO01BK0JZLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sT0FBTztNQUNQLFNBQVM7TUFDVCxRQUFRO01BR1Isc0JBQXNCO01BQ3RCLG1DQUFtQyxFQUFBO0lBdkMvQztNQTJDWSxxQ0FBcUMsRUFBQTtJQTNDakQ7TUErQ1ksZ0NBQWdDLEVBQUE7SUEvQzVDO01BbURZLGtDQUFrQyxFQUFBO0VBbkQ5QztJQXdEUSxTQUFTLEVBQUE7O0FBSWpCO0VBQ0k7SUFDSSwyQkFBMkIsRUFBQTtFQUUvQjtJQUNJLHlCQUF5QixFQUFBLEVBQUE7O0FBSWpDO0VBQ0k7SUFDSSwwQkFBMEIsRUFBQTtFQUU5QjtJQUNJLHlCQUF5QixFQUFBLEVBQUE7O0FBSWpDO0VBQ0k7SUFDSSwyQkFBMkIsRUFBQTtFQUUvQjtJQUNJLHlCQUF5QixFQUFBLEVBQUE7O0FBSWpDO0VBQ0k7SUFDSSwyQkFBMkIsRUFBQTtFQUUvQjtJQUNJLHlCQUF5QixFQUFBLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2FuaW1hdGVkLWxvZ28tY29udGFpbmVyIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNhbmltYXRlZC1sb2dvIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAvLyBoZWlnaHQ6IDQwNnB4O1xcclxcbiAgICAvLyB3aWR0aDogNjA2cHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgPiBpbWcge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+ICoge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hbmltYXRlZC1sb2dvLWJhY2sge1xcclxcbiAgICAgICAgLS1sb2dvLWJhY2staGVpZ2h0LXJhdGlvOiAwLjc7XFxyXFxuXFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tbG9nby1iYWNrLWhlaWdodC1yYXRpbykgKiAxMDAlKTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxIC8gdmFyKC0tbG9nby1iYWNrLWhlaWdodC1yYXRpbykgKiAxMDAlKTtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgID4gKiB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICAvLyBBbmltYXRpb25cXHJcXG4gICAgICAgICAgICAvL2FuaW1hdGlvbi1uYW1lOiBsb2dvLXNsaWRlO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAubG9nby1pbWFnZS1zaWduIHtcXHJcXG4gICAgICAgICAgICAvLyBBbmltYXRpb25cXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogbG9nby1pbWFnZS1zaWduLXNsaWRlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmxvZ28tdHJlZXMge1xcclxcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvblxcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBsb2dvLXRyZWVzLXNsaWRlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmxvZ28tcm9vc3RlciB7XFxyXFxuICAgICAgICAgICAgLy8gQW5pbWF0aW9uXFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGxvZ28tcm9vc3Rlci1zbGlkZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubG9nby10ZXh0LXNpZ24ge1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbG9nby1zbGlkZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsb2dvLWltYWdlLXNpZ24tc2xpZGUge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsb2dvLXRyZWVzLXNsaWRlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvZ28tcm9vc3Rlci1zbGlkZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9VcGN5Y2xlZF9QaXp6YV9QZWVsX2FscGhhX3JvdGF0ZWQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvY2F0aW9uLWNvbnRhaW5lciwgLnBob25lLW51bWJlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNjAwOyB9XFxuXFxuI3BpenphLWJvYXJkLWNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogNSUgMTUlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MHZ3KTsgfVxcbiAgI3BpenphLWJvYXJkLWNvbnRhaW5lci5oYXMtbG9hZGVkIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWJvYXJkLWluLXdpdGgtaXRlbTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDsgfVxcbiAgICAjcGl6emEtYm9hcmQtY29udGFpbmVyLmhhcy1sb2FkZWQ6OmJlZm9yZSB7XFxuICAgICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWJvYXJkLW91dC1lbXB0eTtcXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XFxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoOyB9XFxuICAjcGl6emEtYm9hcmQtY29udGFpbmVyOjpiZWZvcmUge1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGFzcGVjdC1yYXRpbzogMi4xO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUlKTsgfVxcbiAgI3BpenphLWJvYXJkLWNvbnRhaW5lciBpZnJhbWUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMTsgfVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtYm9hcmQtaW4td2l0aC1pdGVtIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTB2dyk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gfVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtYm9hcmQtb3V0LWVtcHR5IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTB2dyk7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb250YWN0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLE9BQU87RUFDUCxlQUFlO0VBQ2Ysa0JBQWtCO0VBRWxCLGFBQWE7RUFDYixtQkFBbUI7RUFFbkIsNkJBQTZCLEVBQUE7RUFSakM7SUFZUSx3Q0FBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQix5QkFBeUIsRUFBQTtJQWZqQztNQW1CWSxxQ0FBcUM7TUFDckMsc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQiwrQkFBK0I7TUFDL0IseUJBQXlCLEVBQUE7RUF2QnJDO0lBNEJRLFdBQVc7SUFFWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsaUJBQWlCO0lBRWpCLHlEQUFvRTtJQUNwRSx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBRTVCLDJCQUEyQixFQUFBO0VBeENuQztJQTRDUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFJbkI7RUFDSTtJQUNJLDZCQUE2QixFQUFBO0VBRWpDO0lBQ0ksd0JBQXdCLEVBQUEsRUFBQTs7QUFJaEM7RUFDSTtJQUNJLDJCQUEyQixFQUFBO0VBRS9CO0lBQ0ksNkJBQTZCLEVBQUEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubG9jYXRpb24tY29udGFpbmVyLCAucGhvbmUtbnVtYmVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNwaXp6YS1ib2FyZC1jb250YWluZXIge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBwYWRkaW5nOiA1JSAxNSU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgLy8gR3JpZFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICAvLyBUcmFuc2Zvcm1cXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTB2dyk7XFxyXFxuXFxyXFxuICAgICYuaGFzLWxvYWRlZCB7XFxyXFxuICAgICAgICAvLyBBbmltYXRpb25cXHJcXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1ib2FyZC1pbi13aXRoLWl0ZW07XFxyXFxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXHJcXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxyXFxuXFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvblxcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS1ib2FyZC1vdXQtZW1wdHk7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgei1pbmRleDogMTA7XFxyXFxuICAgICAgICAvLyBQb3NpdGlvblxcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBhc3BlY3QtcmF0aW86IDIuMTtcXHJcXG4gICAgICAgIC8vIEJhY2tncm91bmRcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvVXBjeWNsZWRfUGl6emFfUGVlbF9hbHBoYV9yb3RhdGVkLnBuZycpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICAgIC8vIFRyYW5zZm9ybVxcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGlmcmFtZSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHotaW5kZXg6IDExO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtYm9hcmQtaW4td2l0aC1pdGVtIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTB2dyk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgIH0gXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtYm9hcmQtb3V0LWVtcHR5IHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTB2dyk7XFxyXFxuICAgIH0gXFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvZm9uZG9fcGllXzI0MHg0MS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9mb25kb19waWVfNDgweDgyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2ZvbmRvX3BpZV85NjB4MTY0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjQ3MDNmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XFxuICBmb290ZXIgcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICBmb290ZXIgcCBzbWFsbCB7XFxuICAgICAgZm9udC1zaXplOiA4MCU7IH1cXG5cXG4vKiBTbWFsbGVzdCAoMzAwcHggYW5kIGRvd24pICovXFxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCAzMDBweCBhbmQgdXApICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkge1xcbiAgZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTsgfSB9XFxuXFxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTsgfSB9XFxuXFxuLyogTWVkaXVtIGRldmljZXMgKGxhbmRzY2FwZSB0YWJsZXRzLCA3NjhweCBhbmQgdXApICovXFxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGVBQWU7RUFFZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUVyQix5QkFBeUI7RUFDekIseURBQW1EO0VBQ25ELHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7RUFYMUI7SUFjUSxrQkFBa0IsRUFBQTtJQWQxQjtNQWlCWSxjQUFjLEVBQUE7O0FBTzFCLDhCQUFBO0FBR0EsK0NBQUE7QUFDQTtFQUNJO0lBQ0kseURBQW1ELEVBQUEsRUFDdEQ7O0FBR0wsb0VBQUE7QUFDQTtFQUNJO0lBQ0kseURBQW9ELEVBQUEsRUFDdkQ7O0FBR0wscURBQUE7QUFHQSxtREFBQTtBQUdBLG9FQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImZvb3RlciB7XFxyXFxuICAgIHBhZGRpbmc6IDEuNnJlbTtcXHJcXG4gICAgLy8gRmxleFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgLy8gQmFja2dyb3VuZFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjQ3MDNmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2ZvbmRvX3BpZV8yNDB4NDEuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICBzbWFsbCB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiA4MCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWEgUXVlcmllc1xcclxcblxcclxcbi8qIFNtYWxsZXN0ICgzMDBweCBhbmQgZG93bikgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7fVxcclxcblxcclxcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgMzAwcHggYW5kIHVwKSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcXHJcXG4gICAgZm9vdGVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvZm9uZG9fcGllXzQ4MHg4Mi5qcGcnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIGZvb3RlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2ZvbmRvX3BpZV85NjB4MTY0LmpwZycpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHt9XFxyXFxuXFxyXFxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHt9XFxyXFxuXFxyXFxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHt9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9QaXp6YV9QZXBwZXJvbmkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2dhbGxlcnkge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7IH1cXG4gICNnYWxsZXJ5IGEuZ2FsbGVyeS1pdGVtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAjZ2FsbGVyeSBhLmdhbGxlcnktaXRlbTpob3ZlciBpbWcsICNnYWxsZXJ5IGEuZ2FsbGVyeS1pdGVtOmZvY3VzIGltZyB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbiAgICAjZ2FsbGVyeSBhLmdhbGxlcnktaXRlbSBpbWcge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IH1cXG5cXG4jZnVsbC1pbWctbW9kYWwge1xcbiAgLS1idG4td2lkdGg6IDVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7XFxuICAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBGdWxsIGhlaWdodCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tYnRuLXdpZHRoKSAxZnIgdmFyKC0tYnRuLXdpZHRoKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tYnRuLXdpZHRoKSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiLiAuIGNsb3NlXFxcIlxcciBcXFwicHJldiBjb250ZW50IG5leHRcXFwiOyB9XFxuICAjZnVsbC1pbWctbW9kYWw6bm90KC5oaWRlKSAjaW1nLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb207XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7IH1cXG4gICNmdWxsLWltZy1tb2RhbC5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtY2xvc2Uge1xcbiAgICBncmlkLWFyZWE6IGNsb3NlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGhlaWdodDogdmFyKC0tYnRuLXdpZHRoKTsgfVxcbiAgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtY29udGVudC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuICAgICNmdWxsLWltZy1tb2RhbCAjaW1nLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyICNpbWctbW9kYWwtY29udGVudCB7XFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWF4LWhlaWdodDogMTAwJTsgfVxcbiAgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtY2xvc2UsICNmdWxsLWltZy1tb2RhbCAjaW1nLW1vZGFsLXByZXYsICNmdWxsLWltZy1tb2RhbCAjaW1nLW1vZGFsLW5leHQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhc2Utd2hpdGUpO1xcbiAgICB3aWR0aDogdmFyKC0tYnRuLXdpZHRoKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlOyB9XFxuICAgICNmdWxsLWltZy1tb2RhbCAjaW1nLW1vZGFsLWNsb3NlOmhvdmVyLCAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1jbG9zZTpmb2N1cywgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtcHJldjpob3ZlciwgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtcHJldjpmb2N1cywgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtbmV4dDpob3ZlciwgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtbmV4dDpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgfVxcbiAgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtcHJldiB7XFxuICAgIGdyaWQtYXJlYTogcHJldjtcXG4gICAgZm9udC1zaXplOiA2cmVtOyB9XFxuICAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1uZXh0IHtcXG4gICAgZ3JpZC1hcmVhOiBuZXh0O1xcbiAgICBmb250LXNpemU6IDZyZW07IH1cXG5cXG5Aa2V5ZnJhbWVzIHpvb20ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dhbGxlcnkuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFVBQVU7RUFFVixhQUFhO0VBQ2IsNERBQTRELEVBQUE7RUFKaEU7SUFRUSxjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7SUFUMUI7TUFhZ0IsbUJBQW1CLEVBQUE7SUFibkM7TUFrQlksV0FBVztNQUNYLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsZ0NBQWdDO01BRWhDLHlEQUFrRDtNQUNsRCwyQkFBMkI7TUFDM0Isd0JBQXdCO01BQ3hCLDRCQUE0QixFQUFBOztBQUt4QztFQUNJLGlCQUFZO0VBRVosdUJBQXVCO0VBQ3ZCLGVBQWU7RUFBRSxrQkFBQTtFQUNqQixVQUFVO0VBQUUsZUFBQTtFQUVaLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUFFLGVBQUE7RUFDYixZQUFZO0VBQUUsZ0JBQUE7RUFFZCx1QkFBNEI7RUFBRSxtQkFBQTtFQUM5QixvQ0FBaUM7RUFBRSxxQkFBQTtFQUVuQyxhQUFhO0VBQ2IsNERBQTREO0VBQzVELHdDQUF3QztFQUN4QyxxREFFdUIsRUFBQTtFQXBCM0I7SUF5Qlksb0JBQW9CO0lBQ3BCLHlCQUF5QixFQUFBO0VBMUJyQztJQStCUSxhQUFhLEVBQUE7RUEvQnJCO0lBbUNRLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysd0JBQXdCLEVBQUE7RUFyQ2hDO0lBeUNRLGtCQUFrQjtJQUVsQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDJCQUEyQixFQUFBO0lBN0NuQztNQTJEWSxpQkFBaUI7TUFDakIsV0FBVztNQUNYLGdCQUFnQixFQUFBO0VBN0Q1QjtJQWtFUSxlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUV2QixhQUFhO0lBQ2IsbUJBQW1CO0lBRW5CLHVDQUF1QyxFQUFBO0lBekUvQztNQTRFWSxzQkFBaUMsRUFBQTtFQTVFN0M7SUFpRlEsZUFBZTtJQUNmLGVBQWUsRUFBQTtFQWxGdkI7SUFzRlEsZUFBZTtJQUNmLGVBQWUsRUFBQTs7QUFJdkI7RUFDSTtJQUNJLG1CQUFtQixFQUFBO0VBRXZCO0lBQ0ksbUJBQW1CLEVBQUEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjZ2FsbGVyeSB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgICAvL2dhcDogMXJlbTtcXHJcXG5cXHJcXG4gICAgYS5nYWxsZXJ5LWl0ZW0ge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGltZyB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXHJcXG4gICAgICAgICAgICAvLyBCYWNrZ3JvdW5kXFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9QaXp6YV9QZXBwZXJvbmkuc3ZnJyk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbiNmdWxsLWltZy1tb2RhbCB7XFxyXFxuICAgIC0tYnRuLXdpZHRoOiA1cmVtO1xcclxcblxcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxyXFxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cXHJcXG4gICAgLy9wYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICAgIC8vb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcclxcbiAgICAvLyBHcmlkXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tYnRuLXdpZHRoKSAxZnIgdmFyKC0tYnRuLXdpZHRoKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1idG4td2lkdGgpIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgICAgICBcXFwiLiAuIGNsb3NlXFxcIlxcclxcbiAgICAgICAgXFxcInByZXYgY29udGVudCBuZXh0XFxcIjtcXHJcXG5cXHJcXG4gICAgJjpub3QoLmhpZGUpIHtcXHJcXG4gICAgICAgICNpbWctbW9kYWwtY29udGVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvblxcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi5oaWRlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2ltZy1tb2RhbC1jbG9zZSB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IGNsb3NlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1idG4td2lkdGgpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNpbWctbW9kYWwtY29udGVudC1jb250YWluZXIge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcclxcbiAgICAgICAgLy8gQmFja2dyb3VuZFxcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICNpbWctbW9kYWwtY29udGVudCB7XFxyXFxuICAgICAgICAgICAgLy8gbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIC8vIHdpZHRoOiA4MCU7XFxyXFxuICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgLy8gb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNpbWctbW9kYWwtY2xvc2UsICNpbWctbW9kYWwtcHJldiwgI2ltZy1tb2RhbC1uZXh0IHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhc2Utd2hpdGUpO1xcclxcbiAgICAgICAgd2lkdGg6IHZhcigtLWJ0bi13aWR0aCk7XFxyXFxuICAgICAgICAvLyBHcmlkXFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIC8vIFRyYW5zaXRpb25cXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaW1nLW1vZGFsLXByZXYge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiBwcmV2O1xcclxcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNpbWctbW9kYWwtbmV4dCB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IG5leHQ7XFxyXFxuICAgICAgICBmb250LXNpemU6IDZyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB6b29tIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3RhZ2xpbmUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50OyB9XFxuICAjdGFnbGluZSBwOmZpcnN0LW9mLXR5cGUge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuICAjdGFnbGluZSA+ICo6bm90KHA6bGFzdC1vZi10eXBlKSB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFFaEIsYUFBYTtFQUNiLGtDQUFrQyxFQUFBO0VBTnRDO0lBU1EseUJBQXlCLEVBQUE7RUFUakM7SUFhUSxtQkFBbUIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjdGFnbGluZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAvLyBHcmlkXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgIHA6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgID4gKjpub3QocDpsYXN0LW9mLXR5cGUpIHtcXHJcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9mb25kb19jb250LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL3RvbWF0by5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI21lbnUtcGFnZS1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjsgfVxcbiAgI21lbnUtcGFnZS1idG4tY29udGFpbmVyIC5tZW51LXBhZ2UtYnRuIHtcXG4gICAgLS1ncm93dGgtcmF0aW86IDEuMjsgfVxcbiAgICAjbWVudS1wYWdlLWJ0bi1jb250YWluZXIgLm1lbnUtcGFnZS1idG4gYSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoY2FsYygxIC8gdmFyKC0tZ3Jvd3RoLXJhdGlvKSkpO1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmFzZS13aGl0ZSk7IH1cXG4gICAgICAjbWVudS1wYWdlLWJ0bi1jb250YWluZXIgLm1lbnUtcGFnZS1idG4gYSBzcGFuIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1ncm93dGgtcmF0aW8pICogMTAwJSk7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgICNtZW51LXBhZ2UtYnRuLWNvbnRhaW5lciAubWVudS1wYWdlLWJ0biBhIHNwYW46OmJlZm9yZSB7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcXG4gICAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgICBvcGFjaXR5OiAwOyB9XFxuICAgICAgI21lbnUtcGFnZS1idG4tY29udGFpbmVyIC5tZW51LXBhZ2UtYnRuIGE6aG92ZXIsICNtZW51LXBhZ2UtYnRuLWNvbnRhaW5lciAubWVudS1wYWdlLWJ0biBhOmFjdGl2ZSwgI21lbnUtcGFnZS1idG4tY29udGFpbmVyIC5tZW51LXBhZ2UtYnRuIGE6Zm9jdXMge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbiAgICAgICAgI21lbnUtcGFnZS1idG4tY29udGFpbmVyIC5tZW51LXBhZ2UtYnRuIGE6aG92ZXIgc3Bhbjo6YmVmb3JlLCAjbWVudS1wYWdlLWJ0bi1jb250YWluZXIgLm1lbnUtcGFnZS1idG4gYTphY3RpdmUgc3Bhbjo6YmVmb3JlLCAjbWVudS1wYWdlLWJ0bi1jb250YWluZXIgLm1lbnUtcGFnZS1idG4gYTpmb2N1cyBzcGFuOjpiZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgb3BhY2l0eTogMTsgfVxcblxcbiNtZW51LXBhZ2UtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxNTBjaDtcXG4gIHBlcnNwZWN0aXZlOiA1MDB2dzsgfVxcblxcbiNtZW51LXBhZ2VzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZS1vdXQ7IH1cXG4gICNtZW51LXBhZ2VzW2RhdGEtcGFnZS1kaXNwbGF5ZWQ9XFxcIjJcXFwiXSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9XFxuICAjbWVudS1wYWdlcyAucGl6emEtaXRlbS1udW1iZXIsICNtZW51LXBhZ2VzIGgyIHtcXG4gICAgZm9udC1zaXplOiAxMTAlO1xcbiAgICBmb250LXdlaWdodDogNjAwOyB9XFxuXFxuLm1lbnUtcGFnZS1zaW5nbGUge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgb3V0bGluZTogNnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyOiA2cHggc29saWQgI2M2MmExMztcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IHZhcigtLWJhc2UtYmxhY2spO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YTNmMDY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA1MDBweDsgfVxcbiAgLm1lbnUtcGFnZS1zaW5nbGUgaDIge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuICAubWVudS1wYWdlLXNpbmdsZSBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuICAubWVudS1wYWdlLXNpbmdsZSAubWVudS1jb2x1bW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MGNoLCAxZnIpKTtcXG4gICAgY29sdW1uLWdhcDogMnJlbTsgfVxcbiAgLm1lbnUtcGFnZS1zaW5nbGUgLm1lbnUtY29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50OyB9XFxuICAgIC5tZW51LXBhZ2Utc2luZ2xlIC5tZW51LWNvbHVtbiA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJhc2Utd2hpdGUpOyB9XFxuICAgIC5tZW51LXBhZ2Utc2luZ2xlIC5tZW51LWNvbHVtbiA+ICoge1xcbiAgICAgIHBhZGRpbmc6IDFyZW0gMDsgfVxcblxcbiNtZW51LXBhZ2UtMiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDEwcHgpOyB9XFxuXFxuLnBpenphLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmVtIDFmciBhdXRvO1xcbiAgZ2FwOiAxcmVtIDAuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJudW1iZXIgbmFtZSBwcmljZXNcXFwiXFxyIFxcXCJpbmdyZWRpZW50cyBpbmdyZWRpZW50cyBpbmdyZWRpZW50c1xcXCI7IH1cXG4gIC5waXp6YS1pdGVtIC5waXp6YS1pdGVtLW51bWJlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE0MCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGdyaWQtYXJlYTogbnVtYmVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC5waXp6YS1pdGVtIC5waXp6YS1pdGVtLW5hbWUge1xcbiAgICBncmlkLWFyZWE6IG5hbWU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLnBpenphLWl0ZW0gLnBpenphLWl0ZW0tcHJpY2VzIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBwcmljZXM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLnBpenphLWl0ZW0gLnBpenphLWl0ZW0tcHJpY2VzIC5waXp6YS1pdGVtLXByaWNlLXNpbmdsZSB7XFxuICAgICAgcGFkZGluZzogMCAwLjVlbTsgfVxcbiAgICAgIC5waXp6YS1pdGVtIC5waXp6YS1pdGVtLXByaWNlcyAucGl6emEtaXRlbS1wcmljZS1zaW5nbGU6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuICAgICAgLnBpenphLWl0ZW0gLnBpenphLWl0ZW0tcHJpY2VzIC5waXp6YS1pdGVtLXByaWNlLXNpbmdsZTpsYXN0LWNoaWxkIHtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG4gICAgICAucGl6emEtaXRlbSAucGl6emEtaXRlbS1wcmljZXMgLnBpenphLWl0ZW0tcHJpY2Utc2luZ2xlOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYmFzZS13aGl0ZSk7IH1cXG4gIC5waXp6YS1pdGVtIC5waXp6YS1pdGVtLWluZ3JlZGllbnRzIHtcXG4gICAgZ3JpZC1hcmVhOiBpbmdyZWRpZW50czsgfVxcblxcbi5jb3AtcHJpY2VzLWNvbnRhaW5lciBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBwYWRkaW5nOiAxcmVtIDA7IH1cXG5cXG4uY29wLXByaWNlcy1jb250YWluZXIgLmNvcC1wcmljZXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7IH1cXG4gIC5jb3AtcHJpY2VzLWNvbnRhaW5lciAuY29wLXByaWNlcyAuY29wLXByaWNlLXNpbmdsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjNlbTsgfVxcbiAgICAuY29wLXByaWNlcy1jb250YWluZXIgLmNvcC1wcmljZXMgLmNvcC1wcmljZS1zaW5nbGUgLmNvcC1wcmljZS1zaW5nbGUtc2l6ZSwgLmNvcC1wcmljZXMtY29udGFpbmVyIC5jb3AtcHJpY2VzIC5jb3AtcHJpY2Utc2luZ2xlIC5jb3AtcHJpY2Utc2luZ2xlLXZhbHVlIHtcXG4gICAgICBmb250LXdlaWdodDogNjAwOyB9XFxuICAgIC5jb3AtcHJpY2VzLWNvbnRhaW5lciAuY29wLXByaWNlcyAuY29wLXByaWNlLXNpbmdsZSAuY29wLXByaWNlLXNpbmdsZS1zaXplIHtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuICAgIC5jb3AtcHJpY2VzLWNvbnRhaW5lciAuY29wLXByaWNlcyAuY29wLXByaWNlLXNpbmdsZSAuY29wLXByaWNlLXNpbmdsZS12YWx1ZSB7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcbiAgICAuY29wLXByaWNlcy1jb250YWluZXIgLmNvcC1wcmljZXMgLmNvcC1wcmljZS1zaW5nbGUgLmNvcC1wcmljZS1zaW5nbGUtbm90ZSB7XFxuICAgICAgZm9udC1zaXplOiA3MCU7IH1cXG5cXG4uY29wLWluZ3JlZGllbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJvdy1nYXA6IDFyZW07IH1cXG5cXG4ub3RoZXItaXRlbS10eXBlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDFyZW07IH1cXG4gIC5vdGhlci1pdGVtLXR5cGUgPiAqOm5vdChoMikge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNjaDsgfVxcbiAgLm90aGVyLWl0ZW0tdHlwZSAub3RoZXItaXRlbSwgLm90aGVyLWl0ZW0tdHlwZSAub3RoZXItaXRlbS13aXRoLWluZ3JlZGllbnRzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bzsgfVxcbiAgICAub3RoZXItaXRlbS10eXBlIC5vdGhlci1pdGVtIC5vdGhlci1pdGVtLXByaWNlLCAub3RoZXItaXRlbS10eXBlIC5vdGhlci1pdGVtLXdpdGgtaW5ncmVkaWVudHMgLm90aGVyLWl0ZW0tcHJpY2Uge1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcbiAgLm90aGVyLWl0ZW0tdHlwZSAub3RoZXItaXRlbS13aXRoLWluZ3JlZGllbnRzIHtcXG4gICAgcm93LWdhcDogMXJlbTsgfVxcbiAgICAub3RoZXItaXRlbS10eXBlIC5vdGhlci1pdGVtLXdpdGgtaW5ncmVkaWVudHMgLm90aGVyLWl0ZW0taW5ncmVkaWVudHMge1xcbiAgICAgIGdyaWQ6IDIgLyAxIC8gMyAvIDM7IH1cXG5cXG4uZ2x1dGVuLWZyZWUtY3J1c3QtY29udGFpbmVyLFxcbi5ob3Vycy1jb250YWluZXIsXFxuLnRhZ2xpbmUtY29udGFpbmVyLFxcbi5tZW51LW1pc2MtZGF0YS1pdGVtIHtcXG4gIGZvbnQtc2l6ZTogMTIwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWVudS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBRUksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0IsRUFBQTtFQUoxQjtJQU9RLG1CQUFlLEVBQUE7SUFQdkI7TUFVWSxjQUFjO01BQ2Qsa0JBQWtCO01BRWxCLCtDQUErQztNQUMvQyxnQ0FBZ0M7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QWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNtZW51LXBhZ2UtYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgLm1lbnUtcGFnZS1idG4ge1xcclxcbiAgICAgICAgLS1ncm93dGgtcmF0aW86IDEuMjtcXHJcXG5cXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gICAgICAgICAgICAvLyBUcmFuc2Zvcm1cXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKGNhbGMoMSAvIHZhcigtLWdyb3d0aC1yYXRpbykpKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXHJcXG4gICAgICAgICAgICAvLyBCYWNrZ3JvdW5kXFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9mb25kb19jb250LmpwZycpO1xcclxcbiAgICAgICAgICAgIC8vIEJvcmRlclxcclxcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhc2Utd2hpdGUpO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgICAgICAgICAgICAgLy8gRm9udFxcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0tZ3Jvd3RoLXJhdGlvKSAqIDEwMCUpO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgICAgICAgICAvLyBHcmlkXFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIC8vIC8vIFRyYW5zZm9ybVxcclxcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHNjYWxlKGNhbGMoMSAvIHZhcigtLWdyb3d0aC1yYXRpbykpKTtcXHJcXG4gICAgICAgICAgICAgICAgLy8gdHJhbnNpdGlvbjogdHJhbnNmb3JtIDUwMG1zIGVhc2U7XFxyXFxuICAgICAgICAgICAgICAgIC8vIC8vIEJhY2tncm91bmRcXHJcXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9mb25kb19jb250LmpwZycpO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS13aGl0ZSk7XFxyXFxuICAgICAgICAgICAgICAgICAgICAvLyBBYnNvbHV0ZSBQb3NpdGlvblxcclxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgLy8gVHJhbnNpdGlvblxcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XFxyXFxuICAgICAgICAgICAgICAgICAgICAvLyBUcmFuc2l0aW9uIFZhbHVlc1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgICAgICAvLyBUcmFuc2Zvcm1cXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuI21lbnUtcGFnZS1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiAxNTBjaDtcXHJcXG4gICAgLy8gd2lkdGg6IDgwJTtcXHJcXG4gICAgcGVyc3BlY3RpdmU6IDUwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS1wYWdlcyB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgLy8gVHJhbnNpdGlvblxcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlLW91dDtcXHJcXG5cXHJcXG4gICAgJltkYXRhLXBhZ2UtZGlzcGxheWVkPVxcXCIyXFxcIl0ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBpenphLWl0ZW0tbnVtYmVyLCBoMiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDExMCU7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5tZW51LXBhZ2Utc2luZ2xlIHtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBvdXRsaW5lOiA2cHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlcjogNnB4IHNvbGlkICNjNjJhMTM7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1cHggdmFyKC0tYmFzZS1ibGFjayk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIC8vIEJhY2tncm91bmRcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOCwgNjMsIDYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2ZvbmRvX2NvbnQuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAwcHg7XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgLy8gZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgbWluLWNvbnRlbnQpO1xcclxcbiAgICAvL2dhcDogMXJlbTtcXHJcXG5cXHJcXG4gICAgaDIge1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnUtbG9nbyB7XFxyXFxuICAgICAgICAvLyBHcmlkXFxyXFxuICAgICAgICAvL2dyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1jb2x1bW4tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIC8vIEdyaWRcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwY2gsIDFmcikpO1xcclxcbiAgICAgICAgY29sdW1uLWdhcDogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1jb2x1bW46Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICAvLyBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1iYXNlLXdoaXRlKTtcXHJcXG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnUtY29sdW1uOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgICAgICAvL3BhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1jb2x1bW4ge1xcclxcbiAgICAgICAgLy8gR3JpZFxcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXHJcXG5cXHJcXG4gICAgICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmFzZS13aGl0ZSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICA+ICoge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jbWVudS1wYWdlLTIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigxMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBpenphLWl0ZW0ge1xcclxcbiAgICAvL2JvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICAvLyBHcmlkXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmVtIDFmciBhdXRvO1xcclxcbiAgICBnYXA6IDFyZW0gMC41cmVtO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgICAgIFxcXCJudW1iZXIgbmFtZSBwcmljZXNcXFwiXFxyXFxuICAgICAgICBcXFwiaW5ncmVkaWVudHMgaW5ncmVkaWVudHMgaW5ncmVkaWVudHNcXFwiO1xcclxcblxcclxcbiAgICAucGl6emEtaXRlbS1udW1iZXIge1xcclxcbiAgICAgICAgLy9vdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xcclxcbiAgICAgICAgY29sb3I6IHZhcigtLWJhc2Utd2hpdGUpO1xcclxcbiAgICAgICAgLy8gQmFja2dyb3VuZFxcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy90b21hdG8ucG5nJyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE0MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgLy8gR3JpZFxcclxcbiAgICAgICAgZ3JpZC1hcmVhOiBudW1iZXI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5waXp6YS1pdGVtLW5hbWUge1xcclxcbiAgICAgICAgLy9vdXRsaW5lOiAycHggc29saWQgcmVkO1xcclxcbiAgICAgICAgLy8gR3JpZFxcclxcbiAgICAgICAgZ3JpZC1hcmVhOiBuYW1lO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucGl6emEtaXRlbS1wcmljZXMge1xcclxcbiAgICAgICAgLy9vdXRsaW5lOiAycHggc29saWQgZ3JlZW47XFxyXFxuICAgICAgICBmb250LXNpemU6IDgwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIC8vIEdyaWRcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogcHJpY2VzO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIC5waXp6YS1pdGVtLXByaWNlLXNpbmdsZSB7XFxyXFxuICAgICAgICAgICAgLy9vdXRsaW5lOiAycHggc29saWQgcmVkO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41ZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYmFzZS13aGl0ZSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5waXp6YS1pdGVtLWluZ3JlZGllbnRzIHtcXHJcXG4gICAgICAgIC8vb3V0bGluZTogMnB4IHNvbGlkIGJsdWU7XFxyXFxuICAgICAgICAvLyBHcmlkXFxyXFxuICAgICAgICBncmlkLWFyZWE6IGluZ3JlZGllbnRzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb3AtcHJpY2VzLWNvbnRhaW5lciB7XFxyXFxuICAgIC5jb3AtbG9nbyB7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb3AtcHJpY2VzIHtcXHJcXG4gICAgICAgIC8vIEdyaWRcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcblxcclxcbiAgICAgICAgLmNvcC1wcmljZS1zaW5nbGUge1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAvLyBHcmlkXFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBnYXA6IDAuM2VtO1xcclxcblxcclxcbiAgICAgICAgICAgIC5jb3AtcHJpY2Utc2luZ2xlLXNpemUsIC5jb3AtcHJpY2Utc2luZ2xlLXZhbHVlIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmNvcC1wcmljZS1zaW5nbGUtc2l6ZSB7XFxyXFxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIC5jb3AtcHJpY2Utc2luZ2xlLXZhbHVlIHtcXHJcXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgLmNvcC1wcmljZS1zaW5nbGUtbm90ZSB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29wLWluZ3JlZGllbnQge1xcclxcbiAgICAvLyBHcmlkXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHJvdy1nYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5vdGhlci1pdGVtLXR5cGUge1xcclxcbiAgICAvLyBHcmlkXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG5cXHJcXG4gICAgaDIge1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgID4gKjpub3QoaDIpIHtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogM2NoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vdGhlci1pdGVtLCAub3RoZXItaXRlbS13aXRoLWluZ3JlZGllbnRzIHtcXHJcXG4gICAgICAgIC8vIEdyaWRcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcblxcclxcbiAgICAgICAgLm90aGVyLWl0ZW0tbmFtZSB7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAub3RoZXItaXRlbS1wcmljZSB7XFxyXFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC5vdGhlci1pdGVtLXdpdGgtaW5ncmVkaWVudHMge1xcclxcbiAgICAgICAgcm93LWdhcDogMXJlbTtcXHJcXG5cXHJcXG4gICAgICAgIC5vdGhlci1pdGVtLWluZ3JlZGllbnRzIHtcXHJcXG4gICAgICAgICAgICAvLyBHcmlkXFxyXFxuICAgICAgICAgICAgZ3JpZDogMiAvIDEgLyAzIC8gMztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ2x1dGVuLWZyZWUtY3J1c3QtY29udGFpbmVyLCBcXHJcXG4uaG91cnMtY29udGFpbmVyLFxcclxcbi50YWdsaW5lLWNvbnRhaW5lcixcXHJcXG4ubWVudS1taXNjLWRhdGEtaXRlbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTIwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAvLyBHcmlkXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21leWVyLXJlc2V0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QixFQUFBOztBQUV6QixnREFBQTtBQUNBOztFQUVDLGNBQWMsRUFBQTs7QUFFZjtFQUNDLGNBQWMsRUFBQTs7QUFFZjtFQUNDLGdCQUFnQixFQUFBOztBQUVqQjtFQUNDLFlBQVksRUFBQTs7QUFFYjs7RUFFQyxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUVkO0VBQ0MseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9mb25kb19DYWJlemVyYS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9sb2dvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL1RleHR1cmVzQ29tX1dhbGxfQnJpY2tPbGQzQV8yeDFfNTEyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmFzZS13aGl0ZTogaHNsKDAsMCUsOTAlKTtcXG4gIC0tYmFzZS1ibGFjazogaHNsKDAsMCUsMTAlKTtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzhjM2Y0NTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMjg1OTU0O1xcbiAgLS10ZXJ0aWFyeS1jb2xvcjogIzcxODczRDsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTsgfVxcblxcbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjB2aCAxZnIgMTB2aDsgfVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwZjA1O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvOyB9XFxuICBoZWFkZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogYXV0bzsgfVxcbiAgaGVhZGVyIC5sb2dvLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyNTY0MjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4ud2hpdGUtdGV4dC1zaGFkb3cge1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLWJhc2UtYmxhY2spOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDsgfVxcblxcbi8qIFNtYWxsZXN0ICgzMDBweCBhbmQgZG93bikgKi9cXG4vKiBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDMwMHB4IGFuZCB1cCkgKi9cXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cXG4vKiBMYXJnZSBkZXZpY2VzIChsYXB0b3BzL2Rlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXFxuLyogRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgbGFwdG9wcyBhbmQgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSwyQkFBYTtFQUNiLDJCQUFhO0VBQ2Isd0JBQWdCO0VBQ2hCLDBCQUFrQjtFQUNsQix5QkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQWlCO0VBQ2pCLHdJQUF3STtFQUN4SSxTQUFTO0VBQ1Qsd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksaUJBQWlCO0VBRWpCLGFBQWE7RUFDYixpQ0FBaUMsRUFBQTs7QUFHckM7RUFFSSx5QkFBeUI7RUFDekIseURBQWlEO0VBQ2pELHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFFM0IsYUFBYTtFQUNiLDRCQUE0QixFQUFBO0VBUmhDO0lBV1EsWUFBWTtJQUNaLFdBQVcsRUFBQTtFQVpuQjtJQWdCUSx5REFBdUM7SUFDdkMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix3QkFBd0IsRUFBQTs7QUFJaEM7RUFDSSxhQUFhO0VBRWIseUJBQXlCO0VBQ3pCLHlEQUFzRTtFQUN0RSx3QkFBd0I7RUFDeEIsc0JBQXNCO0VBRXRCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUt2QjtFQUNJLDBDQUEwQyxFQUFBOztBQUc5QztFQUNJLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBS2xCLDhCQUFBO0FBR0EsK0NBQUE7QUFHQSxvRUFBQTtBQUdBLHFEQUFBO0FBR0EsbURBQUE7QUFHQSxvRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWJhc2Utd2hpdGU6IGhzbCgwLDAlLDkwJSk7XFxyXFxuICAgIC0tYmFzZS1ibGFjazogaHNsKDAsMCUsMTAlKTtcXHJcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjOGMzZjQ1O1xcclxcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzI4NTk1NDtcXHJcXG4gICAgLS10ZXJ0aWFyeS1jb2xvcjogIzcxODczRDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcclxcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJhc2Utd2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAvLyBHcmlkXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjB2aCAxZnIgMTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgLy8gQmFja2dyb3VuZFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwZjA1O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2ZvbmRvX0NhYmV6ZXJhLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXHJcXG4gICAgLy8gR3JpZFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxvZ28tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvbG9nby5wbmcnKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIC8vIEJhY2tncm91bmRcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkyNTY0MjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9UZXh0dXJlc0NvbV9XYWxsX0JyaWNrT2xkM0FfMngxXzUxMi5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwMHB4O1xcclxcbiAgICAvLyBGbGV4XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBNaXNjXFxyXFxuXFxyXFxuLndoaXRlLXRleHQtc2hhZG93IHtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IHZhcigtLWJhc2UtYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTWVkaWEgUXVlcmllc1xcclxcblxcclxcbi8qIFNtYWxsZXN0ICgzMDBweCBhbmQgZG93bikgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7fVxcclxcblxcclxcbi8qIEV4dHJhIHNtYWxsIGRldmljZXMgKHBob25lcywgMzAwcHggYW5kIHVwKSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHt9XFxyXFxuXFxyXFxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge31cXHJcXG5cXHJcXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7fVxcclxcblxcclxcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7fVxcclxcblxcclxcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7fVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiN0b3BuYXYge1xcbiAgLS1ncm93dGgtcmF0aW86IDEuMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICN0b3BuYXYgLm5hdi1saW5rLWNvbnRhaW5lciBhIHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWJhc2Utd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZShjYWxjKDEgLyB2YXIoLS1ncm93dGgtcmF0aW8pKSk7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1ncm93dGgtcmF0aW8pICogMTAwJSk7IH1cXG4gICAgI3RvcG5hdiAubmF2LWxpbmstY29udGFpbmVyIGEgc3BhbiB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7IH1cXG4gICAgICAjdG9wbmF2IC5uYXYtbGluay1jb250YWluZXIgYSBzcGFuOjpiZWZvcmUge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xcbiAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAjdG9wbmF2IC5uYXYtbGluay1jb250YWluZXIgYTpob3ZlciwgI3RvcG5hdiAubmF2LWxpbmstY29udGFpbmVyIGE6Zm9jdXMsICN0b3BuYXYgLm5hdi1saW5rLWNvbnRhaW5lciBhOmFjdGl2ZSwgI3RvcG5hdiAubmF2LWxpbmstY29udGFpbmVyIGEuYWN0aXZlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XFxuICAgICAgI3RvcG5hdiAubmF2LWxpbmstY29udGFpbmVyIGE6aG92ZXIgc3Bhbjo6YmVmb3JlLCAjdG9wbmF2IC5uYXYtbGluay1jb250YWluZXIgYTpmb2N1cyBzcGFuOjpiZWZvcmUsICN0b3BuYXYgLm5hdi1saW5rLWNvbnRhaW5lciBhOmFjdGl2ZSBzcGFuOjpiZWZvcmUsICN0b3BuYXYgLm5hdi1saW5rLWNvbnRhaW5lciBhLmFjdGl2ZSBzcGFuOjpiZWZvcmUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvcGFjaXR5OiAxOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvcC1uYXYuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLG1CQUFlO0VBRWYsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtFQUx2QjtJQVNZLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsY0FBYztJQUVkLGdDQUFnQztJQUNoQywrQ0FBK0M7SUFFL0MsMkNBQTJDLEVBQUE7SUFoQnZEO01BbUJnQixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLG1CQUFtQixFQUFBO01BckJuQztRQXdCb0IsV0FBVztRQUNYLG1DQUFtQztRQUVuQyxrQkFBa0I7UUFDbEIsU0FBUztRQUNULE9BQU87UUFDUCxXQUFXO1FBRVgsMEJBQTBCO1FBRTFCLFNBQVM7UUFDVCxVQUFVLEVBQUE7SUFuQzlCO01Bd0NnQixtQkFBbUIsRUFBQTtNQXhDbkM7UUE0Q3dCLFdBQVc7UUFDWCxVQUFVLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI3RvcG5hdiB7XFxyXFxuICAgIC0tZ3Jvd3RoLXJhdGlvOiAxLjI7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgLm5hdi1saW5rLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYmFzZS13aGl0ZSk7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIC8vIFRyYW5zaXRpb25cXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNTAwbXMgZWFzZTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKGNhbGMoMSAvIHZhcigtLWdyb3d0aC1yYXRpbykpKTtcXHJcXG4gICAgICAgICAgICAvLyBGb250IFNpemUgYWRqdXN0ZWQgYWZ0ZXIgc2NhbGVkIGRvd24gYnkgdHJhbnNmb3JtXFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiBjYWxjKHZhcigtLWdyb3d0aC1yYXRpbykgKiAxMDAlKTtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIC8vIEFic29sdXRlIFBvc2l0aW9uXFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAvLyBUcmFuc2l0aW9uXFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIC8vIFRyYW5zaXRpb24gVmFsdWVzXFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAmOmhvdmVyLCAmOmZvY3VzLCAmOmFjdGl2ZSwgJi5hY3RpdmUge1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRlZC1sb2dvLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRlZC1sb2dvLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3Quc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3Quc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FsbGVyeS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FsbGVyeS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luaXRpYWwtcGFnZS1sb2FkLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbml0aWFsLXBhZ2UtbG9hZC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21leWVyLXJlc2V0LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllci1yZXNldC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9wLW5hdi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9wLW5hdi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsb2dvVGV4dFNpZ24gZnJvbSAnLi9pbWcvbG9nby10ZXh0LXNpZ24ucG5nJztcclxuaW1wb3J0IGxvZ29Sb29zdGVyIGZyb20gJy4vaW1nL2xvZ28tcm9vc3Rlci5wbmcnO1xyXG5pbXBvcnQgbG9nb1RyZWVzIGZyb20gJy4vaW1nL2xvZ28tdHJlZXMucG5nJztcclxuaW1wb3J0IGxvZ29JbWFnZVNpZ24gZnJvbSAnLi9pbWcvbG9nby1pbWFnZS1zaWduLnBuZyc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XHJcbmltcG9ydCAnLi9hbmltYXRlZC1sb2dvLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWF0ZWRMb2dvQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgX2NyZWF0ZUltZ0VsZW1lbnQgPSBmdW5jdGlvbihzcmMsIGFsdCA9ICcnLCBjbGFzc05hbWUgPSAnJykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBlbGVtZW50LnNyYyA9IHNyYztcclxuICAgICAgICBpZiAoYWx0KSBlbGVtZW50LmFsdCA9IGFsdDtcclxuICAgICAgICBpZiAoY2xhc3NOYW1lKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBhbmltYXRlZExvZ29FbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiAnYW5pbWF0ZWQtbG9nbyd9KTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZWRMb2dvRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2FuaW1hdGVkLWxvZ28tYmFjayd9LCBcclxuICAgICAgICAgICAgX2NyZWF0ZUltZ0VsZW1lbnQobG9nb0ltYWdlU2lnbiwgJycsICdsb2dvLWltYWdlLXNpZ24nKSxcclxuICAgICAgICAgICAgX2NyZWF0ZUltZ0VsZW1lbnQobG9nb1RyZWVzLCAnJywgJ2xvZ28tdHJlZXMnKSxcclxuICAgICAgICAgICAgX2NyZWF0ZUltZ0VsZW1lbnQobG9nb1Jvb3N0ZXIsICcnLCAnbG9nby1yb29zdGVyJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZWRMb2dvRWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlSW1nRWxlbWVudChsb2dvVGV4dFNpZ24sICcnLCAnbG9nby10ZXh0LXNpZ24nKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6ICdhbmltYXRlZC1sb2dvLWNvbnRhaW5lcid9LCBhbmltYXRlZExvZ29FbGVtZW50KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtyZW5kZXIsfTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMuanNcIjtcclxuaW1wb3J0IFBpenphQm9hcmRJbWcgZnJvbSAnLi9pbWcvVXBjeWNsZWRfUGl6emFfUGVlbF9hbHBoYV9yb3RhdGVkLnBuZyc7XHJcbmltcG9ydCAnLi9jb250YWN0LnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuICAgIGxldCBfcGl6emFCb2FyZENvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZVBpenphQm9hcmRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgX3BpenphQm9hcmRDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6ICdwaXp6YS1ib2FyZC1jb250YWluZXInfSk7XHJcblxyXG4gICAgICAgIC8vX3BpenphQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaW1nJywge3NyYzogUGl6emFCb2FyZEltZywgYWx0OiAnUGl6emEgYm9hcmQuJ30pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIF9waXp6YUJvYXJkQ29udGFpbmVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlR29vZ2xlTWFwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbWFwSWZyYW1lID0gY3JlYXRlRWxlbWVudCgnaWZyYW1lJywge1xyXG4gICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzE4OS44Mjc0OTE3NTYyOTUzITJkLTEyMS43ODc3MjEyODQ3NDg4NyEzZDM2LjkxODM4ODc3OTkyNDMzITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4MDhlMWFmMjhhMDRlZWJmJTNBMHhhMTVjNjVmZTBmODFhYWQ2ITJzQ29ycmFsaXRvcyUyMFBpenphITVlMCEzbTIhMXNlbiEyc3VzITR2MTY1MjkyNjAyNTg0MSE1bTIhMXNlbiEyc3VzXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjYwMFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNDUwXCIsIFxyXG4gICAgICAgICAgICBzdHlsZTogXCJib3JkZXI6MDtcIiwgXHJcbiAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbjogXCJcIiwgXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IFwibGF6eVwiLFxyXG4gICAgICAgICAgICByZWZlcnJlcnBvbGljeTogXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtYXBJZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgX3BpenphQm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGFzLWxvYWRlZCcpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hcElmcmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHJcbiAgICAgICAgLy8gTG9jYXRpb25cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbG9jYXRpb24tY29udGFpbmVyIHdoaXRlLXRleHQtc2hhZG93J30sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ091ciBMb2NhdGlvbicpLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywge30sICcxMDYxIFMuIEdyZWVuIFZhbGxleSBSZC4gV2F0c29udmlsbGUgQ0EuJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgLy8gUGhvbmVcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLCB7J2NsYXNzJzogJ3Bob25lLW51bWJlciB3aGl0ZS10ZXh0LXNoYWRvdyd9LCAnUGhvbmU6ICg4MzEpIDcyMi03MjIwJykpO1xyXG5cclxuICAgICAgICAvLyBQaXp6YSBCb2FyZFxyXG4gICAgICAgIGNvbnN0IHBpenphQm9hcmRDb250YWluZXIgPSBlbGVtZW50LmFwcGVuZENoaWxkKF9jcmVhdGVQaXp6YUJvYXJkRWxlbWVudCgpKTtcclxuXHJcbiAgICAgICAgLy8gR29vZ2xlIE1hcFxyXG4gICAgICAgIHBpenphQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZUdvb2dsZU1hcCgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7cmVuZGVyLH07XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzLmpzXCI7XHJcbmltcG9ydCAnLi9mb290ZXIuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoY29weXJpZ2h0WWVhcikge1xyXG4gICAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgeydjbGFzcyc6ICd3aGl0ZS10ZXh0LXNoYWRvdyd9KTtcclxuICAgICAgICBjb25zdCBjdXJyWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgLy8gUGFyYWdyYXBoIGVsZW1lbnQgYXMgY2hpbGQgb2YgZm9vdGVyXHJcbiAgICAgICAgbGV0IHRlbXBFbGVtZW50ID0gZm9vdGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSk7XHJcblxyXG4gICAgICAgIC8vIFNtYWxsIGVsZW1lbnQgYXMgY2hpbGQgb2YgcGFyYWdyYXBoXHJcbiAgICAgICAgdGVtcEVsZW1lbnQgPSB0ZW1wRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdzbWFsbCcsIHt9LFxyXG4gICAgICAgICAgICAnU291cmNlIENvZGUgwqkgJyxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgndGltZScsIHtpZDogJ2NvcHlyaWdodC15ZWFyJ30sIGN1cnJZZWFyID4gY29weXJpZ2h0WWVhciA/IGAke2NvcHlyaWdodFllYXJ9LSR7Y3VyclllYXJ9YCA6IGNvcHlyaWdodFllYXIpLFxyXG4gICAgICAgICAgICAnIFRvZGQgQnJlbnRsaW5nZXIsIFNhbnRhIENydXosIENBLCBVU0EuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuJ1xyXG4gICAgICAgICkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9vdGVyO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge3JlbmRlcix9O1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy5qc1wiO1xyXG5pbXBvcnQgZ2FsbGVyeUltZ1NvdXJjZXNEYXRhIGZyb20gJy4vZGF0YS9nYWxsZXJ5SW1nU291cmNlcy5qc29uJztcclxuaW1wb3J0ICcuL2dhbGxlcnkuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5KCkge1xyXG4gICAgLy8gSW5kZXggb2YgbGFzdCB1c2VyIHNlbGVjdGVkIGltYWdlLCBpbml0aWFsaXplZCB0byBudWxsIGZvciBOTyBzZWxlY3Rpb25cclxuICAgIGxldCBfc2VsZWN0ZWRJbWdJbmRleCA9IG51bGw7XHJcblxyXG4gICAgbGV0IF9pbWdNb2RhbEVsZW1lbnQgPSBudWxsO1xyXG4gICAgbGV0IF9pbWdNb2RhbENvbnRlbnRFbGVtZW50ID0gbnVsbDtcclxuICAgIGxldCBfaW1nTW9kYWxDb250ZW50Q29udGFpbmVyID0gbnVsbDtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlRnVsbEltYWdlTW9kYWwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBmdWxsSW1nTW9kYWwgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6ICdmdWxsLWltZy1tb2RhbCcsICdjbGFzcyc6ICdoaWRlJ30pO1xyXG5cclxuICAgICAgICAvLyBDbG9zZSBidXR0b25cclxuICAgICAgICBjb25zdCBjbG9zZSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7aWQ6ICdpbWctbW9kYWwtY2xvc2UnfSk7XHJcbiAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xyXG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBmdWxsSW1nTW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGhlYWRlciB0byBtb2RhbCB3aXRoIGNsb3NlIGJ1dHRvblxyXG4gICAgICAgIGZ1bGxJbWdNb2RhbC5hcHBlbmRDaGlsZChjbG9zZSk7XHJcblxyXG4gICAgICAgIC8vIFByZXYgQnV0dG9uXHJcbiAgICAgICAgY29uc3QgcHJldiA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7aWQ6ICdpbWctbW9kYWwtcHJldid9KTtcclxuICAgICAgICBwcmV2LmlubmVySFRNTCA9ICcmbHNhcXVvOyc7XHJcbiAgICAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9vcGVuTW9kYWxXaXRoSW1nSW5kZXgoLS1fc2VsZWN0ZWRJbWdJbmRleCksIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gTmV4dCBCdXR0b25cclxuICAgICAgICBjb25zdCBuZXh0ID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHtpZDogJ2ltZy1tb2RhbC1uZXh0J30pO1xyXG4gICAgICAgIG5leHQuaW5uZXJIVE1MID0gJyZyc2FxdW87JztcclxuICAgICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX29wZW5Nb2RhbFdpdGhJbWdJbmRleCgrK19zZWxlY3RlZEltZ0luZGV4KSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBJbWFnZSBDb250ZW50XHJcbiAgICAgICAgX2ltZ01vZGFsQ29udGVudEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7aWQ6ICdpbWctbW9kYWwtY29udGVudCcsIGFsdDogJyd9KTtcclxuXHJcbiAgICAgICAgLy8gSW1hZ2UgQ29udGVudCBDb250YWluZXJcclxuICAgICAgICBfaW1nTW9kYWxDb250ZW50Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiAnaW1nLW1vZGFsLWNvbnRlbnQtY29udGFpbmVyJ30sIFxyXG4gICAgICAgICAgICBfaW1nTW9kYWxDb250ZW50RWxlbWVudFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBtYWluIHRvIG1vZGFsXHJcbiAgICAgICAgZnVsbEltZ01vZGFsLmFwcGVuZChcclxuICAgICAgICAgICAgcHJldixcclxuICAgICAgICAgICAgbmV4dCxcclxuICAgICAgICAgICAgX2ltZ01vZGFsQ29udGVudENvbnRhaW5lclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdWxsSW1nTW9kYWw7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9vcGVuTW9kYWxXaXRoSW1nSW5kZXggPSBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgIC8vIElmIGluZGV4IGxlc3MgdGhhbiAwLCB3cmFwIGFyb3VuZCB0byBsYXN0IGl0ZW1cclxuICAgICAgICBpZiAoaW5kZXggPCAwKSBcclxuICAgICAgICAgICAgaW5kZXggPSBnYWxsZXJ5SW1nU291cmNlc0RhdGEueWVscC5sZW5ndGggLSAxO1xyXG4gICAgICAgIC8vIElmIGluZGV4IG1vcmUgdGhhbiBhcnJheSwgd3JhcCBhcm91bmQgdG8gZmlyc3QgaXRlbVxyXG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID49IGdhbGxlcnlJbWdTb3VyY2VzRGF0YS55ZWxwLmxlbmd0aClcclxuICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIF9zZWxlY3RlZEltZ0luZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgICAgIC8vX2ltZ01vZGFsQ29udGVudEVsZW1lbnQuc3JjID0gYGh0dHBzOi8vczMtbWVkaWEwLmZsLnllbHBjZG4uY29tL2JwaG90by8ke2dhbGxlcnlJbWdTb3VyY2VzRGF0YS55ZWxwW2luZGV4XX0vby5qcGdgO1xyXG4gICAgICAgIF9pbWdNb2RhbENvbnRlbnRDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vJHtnYWxsZXJ5SW1nU291cmNlc0RhdGEueWVscFtpbmRleF19L28uanBnKWA7XHJcblxyXG4gICAgICAgIF9pbWdNb2RhbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlR2FsbGVyeUl0ZW0gPSBmdW5jdGlvbih5ZWxwSWQsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgaW1nRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICdpbWcnLCBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3NyYyc6IGBodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vJHt5ZWxwSWR9LzMwMHMuanBnYCwgXHJcbiAgICAgICAgICAgICAgICBhbHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogJ2xhenknLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICczMDAnLCBcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzMwMCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdhbGxlcnlJdGVtQW5jaG9yID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiAnJywgJ2NsYXNzJzogJ2dhbGxlcnktaXRlbSd9LCBpbWdFbGVtZW50KTtcclxuICAgICAgICBnYWxsZXJ5SXRlbUFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIF9vcGVuTW9kYWxXaXRoSW1nSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdhbGxlcnlJdGVtQW5jaG9yO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cclxuICAgICAgICBjb25zdCBnYWxsZXJ5RWxlbWVudCA9IGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiAnZ2FsbGVyeSd9KSk7XHJcblxyXG4gICAgICAgIGdhbGxlcnlJbWdTb3VyY2VzRGF0YS55ZWxwLmZvckVhY2goKHllbHBJZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUdhbGxlcnlJdGVtKHllbHBJZCwgaW5kZXgpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgX2ltZ01vZGFsRWxlbWVudCA9IGVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUZ1bGxJbWFnZU1vZGFsKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtyZW5kZXIsfTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGVkTG9nb0NvbXBvbmVudCBmcm9tIFwiLi9hbmltYXRlZC1sb2dvLmpzXCI7XHJcbmltcG9ydCAnLi9ob21lLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTG9nb1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoQW5pbWF0ZWRMb2dvQ29tcG9uZW50KCkucmVuZGVyKCkpO1xyXG5cclxuICAgICAgICAvLyBUYWdsaW5lXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6ICd0YWdsaW5lJywgJ2NsYXNzJzogJ3doaXRlLXRleHQtc2hhZG93J30sIFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywge30sICdHb3VybWV0IFBpenphLi4uJyksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ1dlIHVzZSBvbmx5IHRoZSBiZXN0IGluZ3JlZGllbnRzOiAnKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnZmFybSBmcmVzaCB2ZWdldGFibGVzLCBsb2NhbGx5IGhhcnZlc3RlZCwgaGlnaCBxdWFsaXR5IG1venphcmVsbGEsIHNhdm9yeSBsb2NhbGx5IHByb2R1Y2VkIG1lYXRzLicpXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge3JlbmRlcix9XHJcbn0iLCJpbXBvcnQgJy4vbWV5ZXItcmVzZXQuc2Nzcyc7XHJcbmltcG9ydCAnLi9pbml0aWFsLXBhZ2UtbG9hZC5zY3NzJztcclxuXHJcbmltcG9ydCBUb3BOYXYgZnJvbSAnLi90b3AtbmF2LmpzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lLmpzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSW5pdGlhbCBQYWdlIExvYWQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgaWYgKCFjb250ZW50RWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIEhlYWRlclxyXG4gICAgLy9sZXQgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGxldCB0ZW1wRWxlbWVudCA9IGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpKTtcclxuICAgIC8vIEhlYWRlciAtIExvZ28gSW1hZ2VcclxuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbG9nby1jb250YWluZXInfSk7XHJcbiAgICB0ZW1wRWxlbWVudC5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpO1xyXG4gICAgLy8gSGVhZGVyIC0gVG9wIE5hdlxyXG4gICAgdGVtcEVsZW1lbnQuYXBwZW5kQ2hpbGQoVG9wTmF2KCkucmVuZGVyKCkpO1xyXG5cclxuICAgIC8vIE1haW5cclxuICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKEhvbWUoKS5yZW5kZXIoKSk7XHJcbiAgICAvLyB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIC8vIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRlbXBFbGVtZW50KTtcclxuICAgIC8vIC8vIE1haW4gLSBMb2dvXHJcbiAgICAvLyB0ZW1wRWxlbWVudC5hcHBlbmRDaGlsZChBbmltYXRlZExvZ29Db21wb25lbnQoKS5yZW5kZXIoKSk7XHJcbiAgICBcclxuICAgIC8vIEZvb3RlclxyXG4gICAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoRm9vdGVyKDIwMjIpLnJlbmRlcigpKTtcclxuICAgIC8vIHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICAvLyBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0ZW1wRWxlbWVudCk7XHJcbiAgICAvLyAvLyBGb290ZXIgLSBUZXh0XHJcbiAgICAvLyB0ZW1wRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJywge30sICdHb3VybWV0IFBpenphLi4uJykpO1xyXG4gICAgLy8gdGVtcEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnV2UgdXNlIG9ubHkgdGhlIGJlc3QgaW5ncmVkaWVudHM6IGZhcm0gZnJlc2ggdmVnZXRhYmxlcywgbG9jYWxseSBoYXJ2ZXN0ZWQsIGhpZ2ggcXVhbGl0eSBtb3p6YXJlbGxhLCBzYXZvcnkgbG9jYWxseSBwcm9kdWNlZCBtZWF0cy4nKSk7XHJcblxyXG59IiwiaW1wb3J0IExvZ282MDYgZnJvbSAnLi9pbWcvbG9nby5wbmcnO1xyXG5pbXBvcnQgTG9nbzMwMyBmcm9tICcuL2ltZy9sb2dvXzMwM3gyMDMucG5nJztcclxuaW1wb3J0IExvZ28xNTIgZnJvbSAnLi9pbWcvbG9nb18xNTJ4MTAyLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMb2dvSW1nV2l0aFNyY3NldCgpIHtcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgIGltZy5zcmNzZXQgPSBgJHtMb2dvMTUyfSAxNTJ3LCAke0xvZ28zMDN9IDMwM3csICR7TG9nbzYwNn0gNjA2d2A7XHJcbiAgICBpbWcuc2l6ZXMgPSAnKG1heC13aWR0aDogMzAwcHgpIDE1MnB4LCAobWF4LXdpZHRoOiA2MDBweCkgMzAzcHgsIDEyMDBweCc7XHJcbiAgICBpbWcuc3JjID0gTG9nbzYwNjtcclxuICAgIGltZy5hbHQgPSAnQ29ycmFsaXRvcyBQaXp6YSBsb2dvLic7XHJcblxyXG4gICAgcmV0dXJuIGltZztcclxufSIsImltcG9ydCBtZW51RGF0YSBmcm9tICcuL2RhdGEvbWVudS5qc29uJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcclxuaW1wb3J0ICcuL21lbnUuc2Nzcyc7XHJcbmltcG9ydCBjcmVhdGVMb2dvSW1nV2l0aFNyY3NldCBmcm9tICcuL2xvZ28taW1nLXNyY3NldC5qcyc7XHJcbmltcG9ydCBNZW51TG9nbyBmcm9tICcuL2ltZy90aXR1bG9fbWVudS5wbmcnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuL2ltZy9sb2dvLnBuZyc7XHJcbmltcG9ydCBDcmVhdGVPd25QaXp6YUxvZ28gZnJvbSAnLi9pbWcvdGl0dWxvX21lbnUyLnBuZyc7XHJcbmltcG9ydCBtZW51UERGIGZyb20gJy4vZGF0YS9tZW51LnBkZic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xyXG4gICAgbGV0IF9wYWdlU2VsZWN0ZWQgPSAxO1xyXG4gICAgbGV0IF9tZW51UGFnZXNFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiAnbWVudS1wYWdlcyd9KTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlUGl6emFFbGVtZW50ID0gZnVuY3Rpb24ocGl6emFPYmosIG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHBpenphRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAncGl6emEtaXRlbSd9KTtcclxuXHJcbiAgICAgICAgLy8gTnVtYmVyXHJcbiAgICAgICAgcGl6emFFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ3BpenphLWl0ZW0tbnVtYmVyIHdoaXRlLXRleHQtc2hhZG93J30sIG51bWJlcilcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBOYW1lXHJcbiAgICAgICAgcGl6emFFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdoMicsIHsnY2xhc3MnOiAncGl6emEtaXRlbS1uYW1lJ30sIHBpenphT2JqLm5hbWUpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gUHJpY2VzXHJcbiAgICAgICAgcGl6emFFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBfY3JlYXRlUGl6emFQcmljZXNFbGVtZW50KHBpenphT2JqLnByaWNlcylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBJbmdyZWRpZW50c1xyXG4gICAgICAgIHBpenphRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwaXp6YS1pdGVtLWluZ3JlZGllbnRzJ30sIHBpenphT2JqLmluZ3JlZGllbnRzKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBwaXp6YUVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVQaXp6YVNpemVUZXh0Q29udGVudCA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZU9iaiA9IG1lbnVEYXRhLnBpenphU2l6ZXNbaW5kZXhdO1xyXG4gICAgICAgIC8vIEdldCB1cHBlcmNhc2UgbGV0dGVycyBvZiBzaXplIG5hbWVcclxuICAgICAgICAvLyBBcHBlbmQgc2l6ZSB3aXRoIHF1b3RhdGlvbiBtYXJrIGZvciBpbmNoZXNcclxuICAgICAgICByZXR1cm4gYCR7c2l6ZU9iai5uYW1lLm1hdGNoKC9eW0EtWl0rLylbMF19JHtzaXplT2JqLnNpemV9XCJgO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlUGl6emFQcmljZXNFbGVtZW50ID0gZnVuY3Rpb24ocHJpY2VzQXJyKSB7XHJcbiAgICAgICAgY29uc3QgcHJpY2VzRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAncGl6emEtaXRlbS1wcmljZXMnfSk7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciwgdGVtcEVsZW1lbnQ7XHJcbiAgICAgICAgcHJpY2VzQXJyLmZvckVhY2goKHByaWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDb250YWluZXJcclxuICAgICAgICAgICAgY29udGFpbmVyID0gcHJpY2VzRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAncGl6emEtaXRlbS1wcmljZS1zaW5nbGUnfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gU2l6ZVxyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgICAgICAgICB7J2NsYXNzJzogJ3BpenphLWl0ZW0tcHJpY2Utc2l6ZSd9LCBcclxuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlUGl6emFTaXplVGV4dENvbnRlbnQoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vIFZhbHVlXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAncGl6emEtaXRlbS1wcmljZS12YWx1ZSd9LCBwcmljZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJpY2VzRWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZU93blBpenphSW5ncmVkaWVudEVsZW1lbnQgPSBmdW5jdGlvbihpbmdyZWRpZW50VHlwZSwgaW5ncmVkaWVudExpc3QpIHtcclxuICAgICAgICBjb25zdCBpbmdyZWRpZW50RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY29wLWluZ3JlZGllbnQnfSk7XHJcbiAgICAgICAgaW5ncmVkaWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaDInLCB7J2NsYXNzJzogJ2NvcC1pbmdyZWRpZW50LXR5cGUnfSwgYCR7aW5ncmVkaWVudFR5cGV9OmApKTtcclxuICAgICAgICBpbmdyZWRpZW50RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2NvcC1pbmdyZWRpZW50LWxpc3QnfSwgaW5ncmVkaWVudExpc3QpKTtcclxuICAgICAgICByZXR1cm4gaW5ncmVkaWVudEVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVPd25QaXp6YVByaWNlc0VsZW1lbnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBjb3BQcmljZXNFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdjb3AtcHJpY2VzLWNvbnRhaW5lcid9KTtcclxuICAgICAgICBjb3BQcmljZXNFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsnc3JjJzogQ3JlYXRlT3duUGl6emFMb2dvLCAnYWx0JzogJ0NyZWF0ZSBvd24gcGl6emEgbG9nby4nLCAnY2xhc3MnOiAnY29wLWxvZ28nfSkpO1xyXG4gICAgICAgIGNvcFByaWNlc0VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnUmVkIFNhdWNlIEJhc2UgYW5kIE1venphcmVsbGEgQ2hlZXNlJykpO1xyXG4gICAgICAgIGNvbnN0IGNvcFByaWNlR3JpZCA9IGNvcFByaWNlc0VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdjb3AtcHJpY2VzJ30pKTtcclxuICAgICAgICBsZXQgY29wUHJpY2VHcmlkSXRlbTtcclxuICAgICAgICBtZW51RGF0YS5waXp6YVNpemVzLmZvckVhY2gocGl6emFTaXplT2JqID0+IHtcclxuICAgICAgICAgICAgY29wUHJpY2VHcmlkSXRlbSA9IGNvcFByaWNlR3JpZC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2NvcC1wcmljZS1zaW5nbGUnfSkpO1xyXG4gICAgICAgICAgICBjb3BQcmljZUdyaWRJdGVtLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgICAgICAgICAnZGl2JywgXHJcbiAgICAgICAgICAgICAgICAgICAgeydjbGFzcyc6ICdjb3AtcHJpY2Utc2luZ2xlLXNpemUnfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7cGl6emFTaXplT2JqLm5hbWV9ICR7cGl6emFTaXplT2JqLnNpemV9XCJgXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvcFByaWNlR3JpZEl0ZW0uYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgICAgICAgICB7J2NsYXNzJzogJ2NvcC1wcmljZS1zaW5nbGUtdmFsdWUnfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgYCQke3BpenphU2l6ZU9iai5wcmljZX1gXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvcFByaWNlR3JpZEl0ZW0uYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgICAgICAgICB7J2NsYXNzJzogJ2NvcC1wcmljZS1zaW5nbGUtbm90ZSd9LCBcclxuICAgICAgICAgICAgICAgICAgICBgKEFkZCAkJHtwaXp6YVNpemVPYmoucHJpY2VBZGRQZXJUb3BwaW5nfSBwZXIgdG9wcGluZylgXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNvcFByaWNlc0VsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVGaXJzdFBhZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBtZW51UGFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1wYWdlLXNpbmdsZSd9KTtcclxuXHJcbiAgICAgICAgLy8gTWVudSBMb2dvXHJcbiAgICAgICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaW1nJywgeydzcmMnOiBNZW51TG9nbywgJ2FsdCc6ICdNZW51IGxvZ28uJywgJ2NsYXNzJzogJ21lbnUtbG9nbyd9KSk7XHJcblxyXG4gICAgICAgIC8vIENvbHVtbiBDb250YWluZXJcclxuICAgICAgICBjb25zdCBjb2x1bW5Db250YWluZXIgPSBtZW51UGFnZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtY29sdW1uLWNvbnRhaW5lcid9KSk7XHJcblxyXG4gICAgICAgIGxldCBjb2x1bW4gPSBjb2x1bW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LWNvbHVtbid9KSk7XHJcblxyXG4gICAgICAgIC8vIFBpenphc1xyXG4gICAgICAgIG1lbnVEYXRhLnBpenphLmZvckVhY2goKHBpenphLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2UgdG8gbmV3IGNvbHVtbiBhZnRlciB0d2VsdmUgcGl6emEgdHlwZXNcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAxMikge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gY29sdW1uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1jb2x1bW4nfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChfY3JlYXRlUGl6emFFbGVtZW50KHBpenphLCBpbmRleCArIDEpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIE93biBQaXp6YVxyXG4gICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChfY3JlYXRlT3duUGl6emFQcmljZXNFbGVtZW50KCkpO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1lbnVEYXRhLmNyZWF0ZU93blBpenphKSkge1xyXG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoX2NyZWF0ZU93blBpenphSW5ncmVkaWVudEVsZW1lbnQoa2V5LCB2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1lbnVQYWdlO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlT3RoZXJJdGVtVHlwZUVsZW1lbnQgPSBmdW5jdGlvbihvdGhlckl0ZW1UeXBlLCBvdGhlckl0ZW1BcnIpIHtcclxuICAgICAgICBjb25zdCBvdGhlckl0ZW1UeXBlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnb3RoZXItaXRlbS10eXBlJ30pO1xyXG5cclxuICAgICAgICBvdGhlckl0ZW1UeXBlRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMicsIHt9LCBvdGhlckl0ZW1UeXBlKSk7XHJcblxyXG4gICAgICAgIGxldCBvdGhlckl0ZW1FbGVtZW50O1xyXG5cclxuICAgICAgICBvdGhlckl0ZW1BcnIuZm9yRWFjaChvdGhlckl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBvdGhlckl0ZW1FbGVtZW50ID0gb3RoZXJJdGVtVHlwZUVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgICAgICAgICB7J2NsYXNzJzogb3RoZXJJdGVtLmhhc093blByb3BlcnR5KCdpbmdyZWRpZW50cycpID8gJ290aGVyLWl0ZW0td2l0aC1pbmdyZWRpZW50cycgOiAnb3RoZXItaXRlbSd9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vIE5hbWVcclxuICAgICAgICAgICAgb3RoZXJJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnb3RoZXItaXRlbS1uYW1lJ30sIG90aGVySXRlbS5uYW1lKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJpY2VcclxuICAgICAgICAgICAgb3RoZXJJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnb3RoZXItaXRlbS1wcmljZSd9LCBgJCR7b3RoZXJJdGVtLnByaWNlLnRvRml4ZWQoMil9YClcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluZ3JlZGllbnRzXHJcbiAgICAgICAgICAgIGlmIChvdGhlckl0ZW0uaGFzT3duUHJvcGVydHkoJ2luZ3JlZGllbnRzJykpIHtcclxuICAgICAgICAgICAgICAgIG90aGVySXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdvdGhlci1pdGVtLWluZ3JlZGllbnRzJ30sIG90aGVySXRlbS5pbmdyZWRpZW50cylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG90aGVySXRlbVR5cGVFbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlU2Vjb25kUGFnZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IG1lbnVQYWdlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LXBhZ2Utc2luZ2xlJywgaWQ6ICdtZW51LXBhZ2UtMid9KTtcclxuXHJcbiAgICAgICAgLy8gTWVudSBMb2dvXHJcbiAgICAgICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaW1nJywgeydzcmMnOiBNZW51TG9nbywgJ2FsdCc6ICdNZW51IGxvZ28uJywgJ2NsYXNzJzogJ21lbnUtbG9nbyd9KSk7XHJcblxyXG4gICAgICAgIC8vIENvbHVtbiBDb250YWluZXJcclxuICAgICAgICBjb25zdCBjb2x1bW5Db250YWluZXIgPSBtZW51UGFnZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtY29sdW1uLWNvbnRhaW5lcid9KSk7XHJcblxyXG4gICAgICAgIC8vIEZpcnN0IENvbHVtblxyXG4gICAgICAgIGxldCBjb2x1bW4gPSBjb2x1bW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LWNvbHVtbid9KSk7XHJcblxyXG4gICAgICAgIC8vIE90aGVyIEl0ZW1zXHJcbiAgICAgICAgZm9yIChjb25zdCBbb3RoZXJJdGVtVHlwZSwgb3RoZXJJdGVtVHlwZUFycl0gb2YgT2JqZWN0LmVudHJpZXMobWVudURhdGEub3RoZXJJdGVtcykpIHtcclxuICAgICAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKF9jcmVhdGVPdGhlckl0ZW1UeXBlRWxlbWVudChvdGhlckl0ZW1UeXBlLCBvdGhlckl0ZW1UeXBlQXJyKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHbHV0ZW4gRnJlZSBDcnVzdFxyXG4gICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAnZGl2JywgXHJcbiAgICAgICAgICAgIHsnY2xhc3MnOiAnZ2x1dGVuLWZyZWUtY3J1c3QtY29udGFpbmVyJ30sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7J2NsYXNzJzogJ2dsdXRlbi1pbnRyby1tc2cnfSwgJ05vdyBjaG9vc2UgeW91ciBwaXp6YSB3aXRoJyksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7J2NsYXNzJzogJ2dsdXRlbi1pbnRyby1uYW1lJ30sICdHbHV0ZW4gRnJlZSBDcnVzdCcpLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywgeydjbGFzcyc6ICdnbHV0ZW4tcHJpY2UnfSwgJyoqKiBFeHRyYSBDb3N0ICQ1LjAwICoqKicpXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIC8vIEhvdXJzXHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgeydjbGFzcyc6ICdob3Vycy1jb250YWluZXInfSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnT3VyIEhvdXJzLi4uJyksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ1dlXFwncmUgb3BlbiA3IGRheXMgYSB3ZWVrJyksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ1N1bmRheSB0byBUaHVyc2RheSAxMSBhbSB0byA5OjMwIHBtJyksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ0ZyaWRheSB0byBTYXR1cmRheSAxMSBhbSB0byAxMDozMCBwbScpLFxyXG4gICAgICAgICkpO1xyXG5cclxuICAgICAgICAvLyBTZWNvbmQgQ29sdW1uXHJcbiAgICAgICAgY29sdW1uID0gY29sdW1uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1jb2x1bW4nfSkpO1xyXG5cclxuICAgICAgICAvLyBMb2dvXHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUxvZ29JbWdXaXRoU3Jjc2V0KCkpO1xyXG5cclxuICAgICAgICAvLyBUYWdsaW5lXHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgeydjbGFzcyc6ICd0YWdsaW5lLWNvbnRhaW5lcid9LFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywge30sICdHb3VybWV0IFBpenphLi4uJyksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ1dlIHVzZSBvbmx5IHRoZSBiZXN0IGluZ3JlZGllbnRzOiAnKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnZmFybSBmcmVzaCB2ZWdldGFibGVzLCBsb2NhbGx5IGhhcnZlc3RlZCwgaGlnaCBxdWFsaXR5IG1venphcmVsbGEsIHNhdm9yeSBsb2NhbGx5IHByb2R1Y2VkIG1lYXRzLicpXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIC8vIEFkZHJlc3NcclxuICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICB7J2NsYXNzJzogJ21lbnUtbWlzYy1kYXRhLWl0ZW0nfSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS1sb2dvJ30pLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtbWlzYy1kYXRhLXZhbHVlJ30sICcxMDYxIFMuIEdyZWVuIFZhbGxleSBSZC4gV2F0c29udmlsZSwgQ0EgOTUwNzYnKVxyXG4gICAgICAgICkpO1xyXG5cclxuICAgICAgICAvLyBGYWNlYm9va1xyXG4gICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAnZGl2JywgXHJcbiAgICAgICAgICAgIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtaXRlbSd9LFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtbWlzYy1kYXRhLWxvZ28nfSksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtdmFsdWUnfSwgJ0NvcnJhbGl0b3MgUGl6emEnKVxyXG4gICAgICAgICkpO1xyXG5cclxuICAgICAgICAvLyBQaG9uZVxyXG4gICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAnZGl2JywgXHJcbiAgICAgICAgICAgIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtaXRlbSd9LFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtbWlzYy1kYXRhLWxvZ28nfSksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtdmFsdWUnfSwgJyg4MzEpIDcyMiA3MjIwJyksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7J2NsYXNzJzogJ21lbnUtbWlzYy1kYXRhLW5vdGUnfSwgJ0NhbGwgZm9yIGNhcnJ5IG91dCBvciBzYWZlIGRlbGl2ZXJ5IHdlIGRlbGl2ZXIgdG8gQXB0b3MsIEZyZWVkb20sIFdhdHNvbnZpbGxlLCBTYW4gQW5kcmVhcywgQ29ycmFsaXRvcywgTGFya2luIFZhbGxleS4nKVxyXG4gICAgICAgICkpO1xyXG5cclxuICAgICAgICAvLyBXZWJzaXRlXHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS1pdGVtJ30sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtbG9nbyd9KSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS12YWx1ZSd9LCAnVmlzaXQgb3V0IHdlYnNpdGUnKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtbm90ZSd9LCAnd3d3LmNvcnJhbGl0b3NwaXp6YWRlbGl2ZXJ5LmNvbScpXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBtZW51UGFnZTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZU1lbnVQYWdlQnV0dG9ucyA9IGZ1bmN0aW9uKGJTY3JvbGxUb1RvcCA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiAnbWVudS1wYWdlLWJ0bi1jb250YWluZXInfSk7XHJcblxyXG4gICAgICAgIC8vIFBhZ2UgMVxyXG4gICAgICAgIGxldCBidG4gPSBjcmVhdGVFbGVtZW50KCdhJywgeydocmVmJzogJyd9KTtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBfcGFnZVNlbGVjdGVkID0gMTtcclxuICAgICAgICAgICAgX3VwZGF0ZU1lbnUoKTtcclxuICAgICAgICAgICAgaWYgKGJTY3JvbGxUb1RvcCkgX21lbnVQYWdlc0VsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJ30pO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICBidG4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnc3BhbicsIHsnY2xhc3MnOiAnd2hpdGUtdGV4dC1zaGFkb3cnfSwgJ1BhZ2UgMScpKTtcclxuICAgICAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LXBhZ2UtYnRuJ30sIGJ0bikpO1xyXG5cclxuICAgICAgICAvLyBQYWdlIDJcclxuICAgICAgICBidG4gPSBjcmVhdGVFbGVtZW50KCdhJywge2hyZWY6ICcnfSk7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgX3BhZ2VTZWxlY3RlZCA9IDI7XHJcbiAgICAgICAgICAgIF91cGRhdGVNZW51KCk7XHJcbiAgICAgICAgICAgIGlmIChiU2Nyb2xsVG9Ub3ApIF9tZW51UGFnZXNFbGVtZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCd9KTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgYnRuLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7J2NsYXNzJzogJ3doaXRlLXRleHQtc2hhZG93J30sICdQYWdlIDInKSk7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1wYWdlLWJ0bid9LCBidG4pKTtcclxuXHJcbiAgICAgICAgLy8gUERGXHJcbiAgICAgICAgYnRuID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiBtZW51UERGLCB0YXJnZXQ6ICdfYmxhbmsnfSk7XHJcbiAgICAgICAgYnRuLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7J2NsYXNzJzogJ3doaXRlLXRleHQtc2hhZG93J30sICdQREYnKSk7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1wYWdlLWJ0bid9LCBidG4pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJ0bkNvbnRhaW5lcjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX3VwZGF0ZU1lbnUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBfbWVudVBhZ2VzRWxlbWVudC5kYXRhc2V0LnBhZ2VEaXNwbGF5ZWQgPSBfcGFnZVNlbGVjdGVkID09PSAyID8gJzInIDogJzEnO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cclxuICAgICAgICAvLyBNZW51IFBhZ2UgQnV0dG9ucyAtIFRvcFxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZU1lbnVQYWdlQnV0dG9ucygpKTtcclxuXHJcbiAgICAgICAgLy8gTWVudSBQYWdlXHJcbiAgICAgICAgLy8gbWVudS1wYWdlLWNvbnRhaW5lciAtPiBtZW51LXBhZ2VzIC0+IG1lbnUtcGFnZVxyXG4gICAgICAgIF9tZW51UGFnZXNFbGVtZW50LmFwcGVuZChfY3JlYXRlRmlyc3RQYWdlKCksIF9jcmVhdGVTZWNvbmRQYWdlKCkpO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiAnbWVudS1wYWdlLWNvbnRhaW5lcid9LCBfbWVudVBhZ2VzRWxlbWVudCkpO1xyXG5cclxuICAgICAgICAvLyBNZW51IFBhZ2UgQnV0dG9ucyAtIEJvdHRvbVxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZU1lbnVQYWdlQnV0dG9ucyh0cnVlKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7cmVuZGVyLH07XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzLmpzXCI7XHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIi4vZ2FsbGVyeS5qc1wiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcclxuaW1wb3J0ICcuL3RvcC1uYXYuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BOYXYoKSB7XHJcbiAgICBjb25zdCBfY3JlYXRlTmF2QW5jaG9yID0gZnVuY3Rpb24odGV4dENvbnRlbnQsIGhyZWYgPSAnJywgYklzQWN0aXZlVGFiID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBhbmNob3JFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnYScsIHsnaHJlZic6IGhyZWZ9LCBjcmVhdGVFbGVtZW50KCdzcGFuJywge30sIHRleHRDb250ZW50KSk7XHJcblxyXG4gICAgICAgIGlmIChiSXNBY3RpdmVUYWIpXHJcbiAgICAgICAgICAgIGFuY2hvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYW5jaG9yRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIF9oYW5kbGVOYXZJdGVtQ2xpY2soZSwgdGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICduYXYtbGluay1jb250YWluZXInfSwgYW5jaG9yRWxlbWVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9jbGVhck1haW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgICAgICB3aGlsZSAobWFpbkVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBtYWluRWxlbWVudC5yZW1vdmVDaGlsZChtYWluRWxlbWVudC5maXJzdENoaWxkKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX3JlbW92ZUFjdGl2ZUNsYXNzRnJvbVRhYnMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjdG9wbmF2IGEnKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICB0YWIgPT4gdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX2hhbmRsZU5hdkl0ZW1DbGljayA9IGZ1bmN0aW9uKGUsIHR5cGUpIHtcclxuICAgICAgICBzd2l0Y2godHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdob21lJzpcclxuICAgICAgICAgICAgICAgIF9yZW1vdmVBY3RpdmVDbGFzc0Zyb21UYWJzKCk7XHJcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBfY2xlYXJNYWluKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykucmVwbGFjZVdpdGgoSG9tZSgpLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnYWxsZXJ5JzpcclxuICAgICAgICAgICAgICAgIF9yZW1vdmVBY3RpdmVDbGFzc0Zyb21UYWJzKCk7XHJcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBfY2xlYXJNYWluKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykucmVwbGFjZVdpdGgoR2FsbGVyeSgpLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdtZW51JzpcclxuICAgICAgICAgICAgICAgIF9yZW1vdmVBY3RpdmVDbGFzc0Zyb21UYWJzKCk7XHJcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBfY2xlYXJNYWluKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykucmVwbGFjZVdpdGgoTWVudSgpLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjb250YWN0JzpcclxuICAgICAgICAgICAgICAgIF9yZW1vdmVBY3RpdmVDbGFzc0Zyb21UYWJzKCk7XHJcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBfY2xlYXJNYWluKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykucmVwbGFjZVdpdGgoQ29udGFjdCgpLnJlbmRlcigpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYkVsZW1lbnRzID0gW1xyXG4gICAgICAgICAgICBfY3JlYXRlTmF2QW5jaG9yKCdIb21lJywgJycsIHRydWUpLFxyXG4gICAgICAgICAgICBfY3JlYXRlTmF2QW5jaG9yKCdHYWxsZXJ5JyksXHJcbiAgICAgICAgICAgIF9jcmVhdGVOYXZBbmNob3IoJ01lbnUnKSxcclxuICAgICAgICAgICAgX2NyZWF0ZU5hdkFuY2hvcignQ29udGFjdCcpLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IHRvcE5hdkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAnbmF2JywgXHJcbiAgICAgICAgICAgIHtpZDogJ3RvcG5hdid9LFxyXG4gICAgICAgICAgICAuLi50YWJFbGVtZW50c1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b3BOYXZFbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge3JlbmRlcix9XHJcbn0iLCIvKipcclxuICogXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlIC0gRWxlbWVudCB0eXBlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIEVsZW1lbnQgYXR0cmlidXRlIG5hbWVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIHZhbHVlIFxyXG4gKiBAcGFyYW0gIHsuLi5Ob2RlfSBjaGlsZHJlbiAtIFZhcmlhYmxlIG51bWJlciBvZiBjaGlsZCBub2RlcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuXHJcbiAgICAvLyBQcm9wc1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hpbGRyZW4gTm9kZXNcclxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gZWxlbWVudC5hcHBlbmQoY2hpbGQpKTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0WWVscEdhbGxlcnlJbWdJZHMoKSB7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGhvdG9zIFtkYXRhLWFuYWx5dGljcy1sYWJlbD1iaXotcGhvdG9dJykpXHJcblx0ICAgIC5tYXAocGhvdG8gPT4gcGhvdG8uaHJlZi5tYXRjaCgvKD88PT0pLiskLylbMF0pO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSAnLi9pbml0aWFsLXBhZ2UtbG9hZC5qcyc7XHJcbi8vaW1wb3J0IEFuaW1hdGVkTG9nb0NvbXBvbmVudCBmcm9tICcuL2FuaW1hdGVkLWxvZ28uanMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XHJcbiAgICAvL3JldHVybiBBbmltYXRlZExvZ29Db21wb25lbnQoKS5yZW5kZXIoKTtcclxuICAgIHJldHVybiBpbml0aWFsUGFnZUxvYWQoKTtcclxufVxyXG5cclxuLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcclxuaW5pdGlhbFBhZ2VMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9