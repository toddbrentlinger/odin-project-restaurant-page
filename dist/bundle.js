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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".location-container {\n  text-align: center; }\n", "",{"version":3,"sources":["webpack://./src/contact.scss"],"names":[],"mappings":"AAAA;EACI,kBAAkB,EAAA","sourcesContent":[".location-container {\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/fondo_pie.jpg */ "./src/img/fondo_pie.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "footer {\n  padding: 1.6rem;\n  display: grid;\n  justify-items: center;\n  align-items: flex-end;\n  background-color: #ad4a18;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover; }\n  footer p {\n    text-align: center; }\n    footer p small {\n      font-size: 80%; }\n", "",{"version":3,"sources":["webpack://./src/footer.scss"],"names":[],"mappings":"AAAA;EACI,eAAe;EAEf,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EAErB,yBAAkC;EAClC,yDAA4C;EAC5C,wBAAwB;EACxB,4BAA4B;EAC5B,sBAAsB,EAAA;EAX1B;IAcQ,kBAAkB,EAAA;IAd1B;MAiBY,cAAc,EAAA","sourcesContent":["footer {\r\n    padding: 1.6rem;\r\n    // Flex\r\n    display: grid;\r\n    justify-items: center;\r\n    align-items: flex-end;\r\n    // Background\r\n    background-color: rgb(173, 74, 24);\r\n    background-image: url('./img/fondo_pie.jpg');\r\n    background-position: top;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\r\n    p {\r\n        text-align: center;\r\n\r\n        small {\r\n            font-size: 80%;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#gallery {\n  width: 80%;\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem; }\n  #gallery a.gallery-item {\n    display: block;\n    position: relative; }\n    #gallery a.gallery-item::before {\n      background-color: gray;\n      opacity: 0;\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      transition: opacity 500ms ease; }\n    #gallery a.gallery-item:hover::before, #gallery a.gallery-item:focus::before {\n      opacity: 0.7; }\n    #gallery a.gallery-item img {\n      width: 100%;\n      height: auto; }\n\n#full-img-modal {\n  border: 2px solid black;\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.9);\n  /* Black w/ opacity */ }\n  #full-img-modal #img-modal-content {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px; }\n  #full-img-modal #img-modal-close, #full-img-modal #img-modal-prev, #full-img-modal #img-modal-next {\n    position: absolute;\n    font-size: 3rem;\n    cursor: pointer;\n    border: 2px solid var(--base-white);\n    display: grid;\n    place-items: center;\n    transition: background-color 500ms ease; }\n    #full-img-modal #img-modal-close:hover, #full-img-modal #img-modal-close:focus, #full-img-modal #img-modal-prev:hover, #full-img-modal #img-modal-prev:focus, #full-img-modal #img-modal-next:hover, #full-img-modal #img-modal-next:focus {\n      background-color: gray; }\n  #full-img-modal #img-modal-close {\n    top: 0;\n    right: 0; }\n  #full-img-modal #img-modal-prev {\n    top: 0;\n    left: 0;\n    bottom: 0; }\n  #full-img-modal #img-modal-next {\n    top: 0;\n    right: 0;\n    bottom: 0; }\n", "",{"version":3,"sources":["webpack://./src/gallery.scss"],"names":[],"mappings":"AAAA;EACI,UAAU;EACV,cAAc;EAEd,aAAa;EACb,4DAA4D;EAC5D,SAAS,EAAA;EANb;IASQ,cAAc;IACd,kBAAkB,EAAA;IAV1B;MAaY,sBAAiC;MACjC,UAAU;MACV,WAAW;MACX,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,SAAS;MACT,QAAQ;MAER,8BAA8B,EAAA;IAtB1C;MA2BgB,YAAY,EAAA;IA3B5B;MAgCY,WAAW;MACX,YAAY,EAAA;;AAKxB;EACI,uBAAuB;EAEvB,eAAe;EAAE,kBAAA;EACjB,UAAU;EAAE,eAAA;EAEZ,OAAO;EACP,MAAM;EACN,WAAW;EAAE,eAAA;EACb,YAAY;EAAE,gBAAA;EACd,cAAc;EAAE,4BAAA;EAChB,uBAA4B;EAAE,mBAAA;EAC9B,oCAAiC;EAAE,qBAAA,EAAsB;EAZ7D;IAeQ,YAAY;IACZ,cAAc;IACd,UAAU;IACV,gBAAgB,EAAA;EAlBxB;IA0BQ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,mCAAmC;IAEnC,aAAa;IACb,mBAAmB;IAEnB,uCAAuC,EAAA;IAlC/C;MAqCY,sBAAiC,EAAA;EArC7C;IA0CQ,MAAM;IACN,QAAQ,EAAA;EA3ChB;IA+CQ,MAAM;IACN,OAAO;IACP,SAAS,EAAA;EAjDjB;IAqDQ,MAAM;IACN,QAAQ;IACR,SAAS,EAAA","sourcesContent":["#gallery {\r\n    width: 80%;\r\n    margin: 1rem 0;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n    gap: 1rem;\r\n\r\n    a.gallery-item {\r\n        display: block;\r\n        position: relative;\r\n        \r\n        &::before {\r\n            background-color: hsl(0, 0%, 50%);\r\n            opacity: 0;\r\n            content: \"\";\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            bottom: 0;\r\n            right: 0;\r\n            // Transition\r\n            transition: opacity 500ms ease;\r\n        }\r\n\r\n        &:hover, &:focus {\r\n            &::before {\r\n                opacity: 0.7;\r\n            }\r\n        }\r\n\r\n        img {\r\n            width: 100%;\r\n            height: auto;\r\n        }\r\n    }\r\n}\r\n\r\n#full-img-modal {\r\n    border: 2px solid black;\r\n    //display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    //padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\r\n\r\n    #img-modal-content {\r\n        margin: auto;\r\n        display: block;\r\n        width: 80%;\r\n        max-width: 700px;\r\n    }\r\n\r\n    #img-modal-caption {\r\n\r\n    }\r\n\r\n    #img-modal-close, #img-modal-prev, #img-modal-next {\r\n        position: absolute;\r\n        font-size: 3rem;\r\n        cursor: pointer;\r\n        border: 2px solid var(--base-white);\r\n        // Grid\r\n        display: grid;\r\n        place-items: center;\r\n        // Transition\r\n        transition: background-color 500ms ease;\r\n\r\n        &:hover, &:focus {\r\n            background-color: hsl(0, 0%, 50%);\r\n        }\r\n    }\r\n\r\n    #img-modal-close {\r\n        top: 0;\r\n        right: 0;\r\n    }\r\n\r\n    #img-modal-prev {\r\n        top: 0;\r\n        left: 0;\r\n        bottom: 0;\r\n    }\r\n\r\n    #img-modal-next {\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/tomato.png */ "./src/img/tomato.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu-page {\n  margin: 1rem auto;\n  padding: 1em;\n  width: 80%;\n  background-color: #8a3f06;\n  outline: 6px solid black;\n  border: 6px solid #c62a13;\n  border-radius: 1em;\n  box-shadow: inset 0px 0px 5px var(--base-black);\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, auto);\n  gap: 1rem; }\n  .menu-page h2 {\n    text-transform: capitalize; }\n  .menu-page img {\n    width: 100%;\n    height: auto; }\n  .menu-page .menu-logo {\n    grid-area: 1 / 1 / 2 / 3; }\n  .menu-page .menu-column {\n    display: grid;\n    grid-auto-rows: min-content; }\n    .menu-page .menu-column > *:not(:last-child) {\n      border-bottom: 2px solid var(--base-white); }\n    .menu-page .menu-column > * {\n      padding: 1rem 0; }\n\n.pizza-item {\n  display: grid;\n  grid-template-columns: 2em 1fr auto;\n  row-gap: 1rem;\n  grid-template-areas: \"number name prices\"\r \"ingredients ingredients ingredients\"; }\n  .pizza-item .pizza-item-number {\n    color: var(--base-white);\n    font-size: larger;\n    font-weight: 700;\n    text-shadow: 0px 0px 1em var(--base-black);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    grid-area: number;\n    display: grid;\n    place-content: center; }\n  .pizza-item .pizza-item-name {\n    grid-area: name;\n    display: grid;\n    align-content: center; }\n  .pizza-item .pizza-item-prices {\n    font-size: 80%;\n    text-align: center;\n    grid-area: prices;\n    display: grid;\n    grid-auto-flow: column;\n    grid-auto-columns: 1fr;\n    align-items: center; }\n    .pizza-item .pizza-item-prices .pizza-item-price-single {\n      padding: 0 0.5em; }\n      .pizza-item .pizza-item-prices .pizza-item-price-single:not(:last-child) {\n        border-right: 2px solid var(--base-white); }\n  .pizza-item .pizza-item-ingredients {\n    grid-area: ingredients; }\n\n.cop-prices-container p {\n  text-align: center;\n  text-transform: uppercase;\n  padding: 1rem 0; }\n\n.cop-prices-container .cop-prices {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr); }\n  .cop-prices-container .cop-prices .cop-price-single {\n    text-align: center; }\n    .cop-prices-container .cop-prices .cop-price-single .cop-price-single-size {\n      white-space: nowrap; }\n    .cop-prices-container .cop-prices .cop-price-single .cop-price-single-value {\n      white-space: nowrap; }\n    .cop-prices-container .cop-prices .cop-price-single .cop-price-single-note {\n      font-size: 70%; }\n\n.cop-ingredient {\n  display: grid;\n  row-gap: 1rem; }\n\n.other-item-type .other-item, .other-item-type .other-item-with-ingredients {\n  display: grid;\n  grid-template-columns: 1fr auto; }\n  .other-item-type .other-item .other-item-price, .other-item-type .other-item-with-ingredients .other-item-price {\n    align-self: center; }\n\n.other-item-type .other-item-with-ingredients .other-item-ingredients {\n  grid: 2 / 1 / 3 / 3; }\n", "",{"version":3,"sources":["webpack://./src/menu.scss"],"names":[],"mappings":"AAAA;EACI,iBAAiB;EACjB,YAAY;EACZ,UAAU;EACV,yBAAiC;EACjC,wBAAwB;EACxB,yBAAyB;EACzB,kBAAkB;EAClB,+CAA+C;EAE/C,aAAa;EACb,qCAAqC;EACrC,mCAAmC;EACnC,SAAS,EAAA;EAbb;IAgBQ,0BAA0B,EAAA;EAhBlC;IAoBQ,WAAW;IACX,YAAY,EAAA;EArBpB;IA0BQ,wBAAwB,EAAA;EA1BhC;IA+BQ,aAAa;IACb,2BAA2B,EAAA;IAhCnC;MAmCY,0CAA0C,EAAA;IAnCtD;MAuCY,eAAe,EAAA;;AAS3B;EAGI,aAAa;EACb,mCAAmC;EACnC,aAAa;EACb,gFAEyC,EAAA;EAR7C;IAYQ,wBAAwB;IACxB,iBAAiB;IACjB,gBAAgB;IAChB,0CAA0C;IAE1C,yDAAyC;IACzC,2BAA2B;IAC3B,sBAAsB;IACtB,4BAA4B;IAE5B,iBAAiB;IACjB,aAAa;IACb,qBAAqB,EAAA;EAxB7B;IA8BQ,eAAe;IACf,aAAa;IACb,qBAAqB,EAAA;EAhC7B;IAqCQ,cAAc;IACd,kBAAkB;IAElB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB,EAAA;IA5C3B;MAgDY,gBAAgB,EAAA;MAhD5B;QAmDgB,yCAAyC,EAAA;EAnDzD;IA2DQ,sBAAsB,EAAA;;AAI9B;EAMQ,kBAAkB;EAClB,yBAAyB;EACzB,eAAe,EAAA;;AARvB;EAaQ,aAAa;EACb,qCAAqC,EAAA;EAd7C;IAiBY,kBAAkB,EAAA;IAjB9B;MAoBgB,mBAAmB,EAAA;IApBnC;MAuBgB,mBAAmB,EAAA;IAvBnC;MA0BgB,cAAc,EAAA;;AAM9B;EAEI,aAAa;EACb,aAAa,EAAA;;AAGjB;EAMQ,aAAa;EACb,+BAA+B,EAAA;EAPvC;IAcY,kBAAkB,EAAA;;AAd9B;EAmBY,mBAAmB,EAAA","sourcesContent":[".menu-page {\r\n    margin: 1rem auto;\r\n    padding: 1em;\r\n    width: 80%;\r\n    background-color: rgb(138, 63, 6);\r\n    outline: 6px solid black;\r\n    border: 6px solid #c62a13;\r\n    border-radius: 1em;\r\n    box-shadow: inset 0px 0px 5px var(--base-black);\r\n    // Grid\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(2, auto);\r\n    gap: 1rem;\r\n\r\n    h2 {\r\n        text-transform: capitalize;\r\n    }\r\n\r\n    img {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .menu-logo {\r\n        // Grid\r\n        grid-area: 1 / 1 / 2 / 3;\r\n    }\r\n\r\n    .menu-column {\r\n        // Grid\r\n        display: grid;\r\n        grid-auto-rows: min-content;\r\n\r\n        > *:not(:last-child) {\r\n            border-bottom: 2px solid var(--base-white);\r\n        }\r\n\r\n        > * {\r\n            padding: 1rem 0;\r\n        }\r\n    }\r\n}\r\n\r\n#pizza-type-container {\r\n\r\n}\r\n\r\n.pizza-item {\r\n    //border: 2px solid white;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-columns: 2em 1fr auto;\r\n    row-gap: 1rem;\r\n    grid-template-areas: \r\n        \"number name prices\"\r\n        \"ingredients ingredients ingredients\";\r\n\r\n    .pizza-item-number {\r\n        //outline: 2px solid orange;\r\n        color: var(--base-white);\r\n        font-size: larger;\r\n        font-weight: 700;\r\n        text-shadow: 0px 0px 1em var(--base-black);\r\n        // Background\r\n        background-image: url('./img/tomato.png');\r\n        background-position: center;\r\n        background-size: cover;\r\n        background-repeat: no-repeat;\r\n        // Grid\r\n        grid-area: number;\r\n        display: grid;\r\n        place-content: center;\r\n    }\r\n\r\n    .pizza-item-name {\r\n        //outline: 2px solid red;\r\n        // Grid\r\n        grid-area: name;\r\n        display: grid;\r\n        align-content: center;\r\n    }\r\n\r\n    .pizza-item-prices {\r\n        //outline: 2px solid green;\r\n        font-size: 80%;\r\n        text-align: center;\r\n        // Grid\r\n        grid-area: prices;\r\n        display: grid;\r\n        grid-auto-flow: column;\r\n        grid-auto-columns: 1fr;\r\n        align-items: center;\r\n\r\n        .pizza-item-price-single {\r\n            //outline: 2px solid red;\r\n            padding: 0 0.5em;\r\n\r\n            &:not(:last-child) {\r\n                border-right: 2px solid var(--base-white);\r\n            }\r\n        }\r\n    }\r\n\r\n    .pizza-item-ingredients {\r\n        //outline: 2px solid blue;\r\n        // Grid\r\n        grid-area: ingredients;\r\n    }\r\n}\r\n\r\n.cop-prices-container {\r\n    .cop-logo {\r\n\r\n    }\r\n\r\n    p {\r\n        text-align: center;\r\n        text-transform: uppercase;\r\n        padding: 1rem 0;\r\n    }\r\n\r\n    .cop-prices {\r\n        // Grid\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 1fr);\r\n\r\n        .cop-price-single {\r\n            text-align: center;\r\n\r\n            .cop-price-single-size {\r\n                white-space: nowrap;\r\n            }\r\n            .cop-price-single-value {\r\n                white-space: nowrap;\r\n            }\r\n            .cop-price-single-note {\r\n                font-size: 70%;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.cop-ingredient {\r\n    // Grid\r\n    display: grid;\r\n    row-gap: 1rem;\r\n}\r\n\r\n.other-item-type {\r\n    h2 {\r\n\r\n    }\r\n    .other-item, .other-item-with-ingredients {\r\n        // Grid\r\n        display: grid;\r\n        grid-template-columns: 1fr auto;\r\n\r\n        .other-item-name {\r\n\r\n        }\r\n\r\n        .other-item-price {\r\n            align-self: center;\r\n        }\r\n    }\r\n    .other-item-with-ingredients {\r\n        .other-item-ingredients {\r\n            grid: 2 / 1 / 3 / 3;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/TexturesCom_Wall_BrickOld3A_2x1_512_albedo.jpg */ "./src/img/TexturesCom_Wall_BrickOld3A_2x1_512_albedo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --base-white: hsl(0,0%,90%);\n  --base-black: hsl(0,0%,10%);\n  --primary-color: #8c3f45;\n  --secondary-color: #285954;\n  --tertiary-color: #71873D; }\n\nhtml {\n  font-size: 62.5%;\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\nbody {\n  font-size: 1.6rem;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  margin: 0;\n  color: var(--base-white); }\n\n#content {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: 20vh 1fr 20vh; }\n\nheader {\n  background-color: brown;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: auto;\n  background-position: bottom;\n  display: grid;\n  grid-template-rows: 1fr auto; }\n  header img {\n    height: 100%;\n    width: auto; }\n  header .logo-container {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain; }\n\nmain {\n  background-color: #c13000;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: top;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\na {\n  text-decoration: none;\n  color: inherit; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAEA;EACI,2BAAa;EACb,2BAAa;EACb,wBAAgB;EAChB,0BAAkB;EAClB,yBAAiB,EAAA;;AAGrB;EACI,gBAAgB;EAChB,sBAAsB,EAAA;;AAG1B;EACI,mBAAmB,EAAA;;AAGvB;EACI,iBAAiB;EACjB,wIAAwI;EACxI,SAAS;EACT,wBAAwB,EAAA;;AAG5B;EACI,iBAAiB;EAEjB,aAAa;EACb,iCAAiC,EAAA;;AAGrC;EAEI,uBAAuB;EACvB,yDAAiD;EACjD,qBAAqB;EACrB,2BAA2B;EAE3B,aAAa;EACb,4BAA4B,EAAA;EARhC;IAWQ,YAAY;IACZ,WAAW,EAAA;EAZnB;IAgBQ,yDAAuC;IACvC,2BAA2B;IAC3B,4BAA4B;IAC5B,wBAAwB,EAAA;;AAIhC;EAEI,yBAAiC;EACjC,yDAA6E;EAC7E,wBAAwB;EAExB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB,EAAA;;AAKvB;EACI,qBAAqB;EACrB,cAAc,EAAA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n:root {\r\n    --base-white: hsl(0,0%,90%);\r\n    --base-black: hsl(0,0%,10%);\r\n    --primary-color: #8c3f45;\r\n    --secondary-color: #285954;\r\n    --tertiary-color: #71873D;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n*, *::before, *::after {\r\n    box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n    font-size: 1.6rem;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    margin: 0;\r\n    color: var(--base-white);\r\n}\r\n\r\n#content {\r\n    min-height: 100vh;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-rows: 20vh 1fr 20vh;\r\n}\r\n\r\nheader {\r\n    // Background\r\n    background-color: brown;\r\n    background-image: url('./img/fondo_Cabezera.jpg');\r\n    background-size: auto;\r\n    background-position: bottom;\r\n    // Grid\r\n    display: grid;\r\n    grid-template-rows: 1fr auto;\r\n\r\n    img {\r\n        height: 100%;\r\n        width: auto;\r\n    }\r\n\r\n    .logo-container {\r\n        background-image: url('./img/logo.png');\r\n        background-position: center;\r\n        background-repeat: no-repeat;\r\n        background-size: contain;\r\n    }\r\n}\r\n\r\nmain {\r\n    // Background\r\n    background-color: rgb(193, 48, 0);\r\n    background-image: url('./img/TexturesCom_Wall_BrickOld3A_2x1_512_albedo.jpg');\r\n    background-position: top;\r\n    // Flex\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n// Misc\r\n\r\na {\r\n    text-decoration: none;\r\n    color: inherit;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.scss */ "./src/contact.scss");



function Contact() {
    const _createGoogleMap = function() {
        return (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('iframe', {
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.8274917562953!2d-121.78772128474887!3d36.91838877992433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e1af28a04eebf%3A0xa15c65fe0f81aad6!2sCorralitos%20Pizza!5e0!3m2!1sen!2sus!4v1652926025841!5m2!1sen!2sus",
            width: "600",
            height: "450", 
            style: "border:0;", 
            allowfullscreen: "", 
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
        });
    };

    const render = function() {
        const element = document.createElement('main');

        // Location
        element.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {'class': 'location-container'},
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, 'Our Location'),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, '1061 S. Green Valley Rd. Watsonville CA.')
        ));

        // Phone
        element.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, 'Phone: (831) 722-7220'));

        // Google Map
        element.appendChild(_createGoogleMap());

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
        const footer = document.createElement('footer');
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
/* harmony import */ var _gallery_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.scss */ "./src/gallery.scss");



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

    const _createFullImageModal = function() {
        const close = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {id: 'img-modal-close'});
        close.innerHTML = '&times;';

        const prev = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {id: 'img-modal-prev'});
        prev.innerHTML = '&lsaquo;';

        const next = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {id: 'img-modal-next'});
        next.innerHTML = '&rsaquo;';

        return (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: 'full-img-modal'}, 
            close,
            prev,
            next,
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {id: 'img-modal-content'}),
            (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: 'img-modal-caption'})
        );
    };

    const render = function() {
        const element = document.createElement('main');

        const galleryElement = element.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {id: 'gallery'}));
        _imageSources.forEach(img => {
            galleryElement.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {href: '', class: 'gallery-item'}, 
                (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {'src': img.small, alt: '', width: '300', height: '300'})
            ));
        });

        element.appendChild(_createFullImageModal());

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



function Home() {
    const render = function() {
        const element = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('main');
        
        // Logo
        element.appendChild((0,_animated_logo_js__WEBPACK_IMPORTED_MODULE_1__["default"])().render());

        // Text
        element.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, 'Gourmet Pizza...'));
        element.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {}, 'We use only the best ingredients: farm fresh vegetables, locally harvested, high quality mozzarella, savory locally produced meats.'));

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
        let btn = btnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', {}, 'Page 1'));
        btn.addEventListener('click', () => {
            pageSelected = 1;
            _updateMenu();
        }, false);
        // Page 2
        btn = btnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', {}, 'Page 2'));
        btn.addEventListener('click', () => {
            pageSelected = 2;
            _updateMenu();
        }, false);
        // PDF
        btn = btnContainer.appendChild((0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', {}, 'PDF'));
        btn.addEventListener('click', () => {
            
        }, false);

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

/***/ "./src/img/TexturesCom_Wall_BrickOld3A_2x1_512_albedo.jpg":
/*!****************************************************************!*\
  !*** ./src/img/TexturesCom_Wall_BrickOld3A_2x1_512_albedo.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c95535627b116171b2ef.jpg";

/***/ }),

/***/ "./src/img/fondo_Cabezera.jpg":
/*!************************************!*\
  !*** ./src/img/fondo_Cabezera.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcc4f8f73983db67e939.jpg";

/***/ }),

/***/ "./src/img/fondo_pie.jpg":
/*!*******************************!*\
  !*** ./src/img/fondo_pie.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2472cb5a8960b2ea339.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSwwREFBMEQsdUJBQXVCLGtCQUFrQixtQkFBbUIsd0JBQXdCLHlCQUF5QixhQUFhLGNBQWMsaUJBQWlCLHdDQUF3Qyx5Q0FBeUMsaURBQWlELHlCQUF5Qiw4Q0FBOEMsMkJBQTJCLGVBQWUsZ0JBQWdCLGtCQUFrQixpQkFBaUIsK0JBQStCLDhDQUE4QywyREFBMkQsZ0RBQWdELHNEQUFzRCwyQ0FBMkMsd0RBQXdELDZDQUE2QyxvQ0FBb0Msa0JBQWtCLDJCQUEyQixRQUFRLG9DQUFvQyxVQUFVLG9DQUFvQyxzQ0FBc0MsUUFBUSxtQ0FBbUMsVUFBVSxvQ0FBb0MsaUNBQWlDLFFBQVEsb0NBQW9DLFVBQVUsb0NBQW9DLG1DQUFtQyxRQUFRLG9DQUFvQyxVQUFVLG9DQUFvQyxTQUFTLHlGQUF5RixZQUFZLFdBQVcsZUFBZSxNQUFNLFlBQVksV0FBVyxVQUFVLGVBQWUsTUFBTSxZQUFZLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8saUJBQWlCLE1BQU0sS0FBSyxpQkFBaUIsTUFBTSx1QkFBdUIsTUFBTSxLQUFLLGlCQUFpQixNQUFNLHVCQUF1QixNQUFNLEtBQUssaUJBQWlCLE1BQU0sdUJBQXVCLE1BQU0sS0FBSyxpQkFBaUIsTUFBTSwwREFBMEQsMkJBQTJCLHNCQUFzQixxQkFBcUIsaUJBQWlCLCtCQUErQixtQkFBbUIsb0JBQW9CLHFCQUFxQixTQUFTLGlDQUFpQywrQ0FBK0MsMkRBQTJELDZCQUE2QixxQkFBcUIsbUNBQW1DLHVCQUF1Qix3QkFBd0IsMEJBQTBCLHlCQUF5Qix5RUFBeUUsdUNBQXVDLG9EQUFvRCxhQUFhLDhCQUE4QixrRkFBa0YsYUFBYSx5QkFBeUIsNkVBQTZFLGFBQWEsMkJBQTJCLCtFQUErRSxhQUFhLFNBQVMsNkJBQTZCLHNCQUFzQixTQUFTLEtBQUssK0JBQStCLFlBQVksd0NBQXdDLFNBQVMsY0FBYyxzQ0FBc0MsU0FBUyxLQUFLLDBDQUEwQyxZQUFZLHVDQUF1QyxTQUFTLGNBQWMsc0NBQXNDLFNBQVMsS0FBSyxxQ0FBcUMsWUFBWSx3Q0FBd0MsU0FBUyxjQUFjLHNDQUFzQyxTQUFTLEtBQUssdUNBQXVDLFlBQVksd0NBQXdDLFNBQVMsY0FBYyxzQ0FBc0MsU0FBUyxLQUFLLG1CQUFtQjtBQUMvMEg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsK0RBQStELHlCQUF5QixTQUFTLG1GQUFtRiwwREFBMEQsMkJBQTJCLEtBQUssbUJBQW1CO0FBQ2pTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSEFBc0M7QUFDbEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esa0RBQWtELG9CQUFvQixrQkFBa0IsMEJBQTBCLDBCQUEwQiw4QkFBOEIsc0VBQXNFLDZCQUE2QixpQ0FBaUMsNkJBQTZCLGNBQWMsMkJBQTJCLHNCQUFzQix5QkFBeUIsU0FBUyxrRkFBa0YsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLDRDQUE0Qyx3QkFBd0IscUNBQXFDLDhCQUE4Qiw4QkFBOEIsZ0VBQWdFLHFEQUFxRCxpQ0FBaUMscUNBQXFDLCtCQUErQixlQUFlLCtCQUErQix1QkFBdUIsK0JBQStCLGFBQWEsU0FBUyxLQUFLLG1CQUFtQjtBQUMvcEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esb0RBQW9ELGVBQWUsbUJBQW1CLGtCQUFrQixpRUFBaUUsZ0JBQWdCLDZCQUE2QixxQkFBcUIsMkJBQTJCLHVDQUF1QywrQkFBK0IsbUJBQW1CLHNCQUFzQiwyQkFBMkIsZUFBZSxnQkFBZ0Isa0JBQWtCLGlCQUFpQix5Q0FBeUMsb0ZBQW9GLHVCQUF1QixtQ0FBbUMsb0JBQW9CLHVCQUF1QixxQkFBcUIsNEJBQTRCLG9CQUFvQixzQ0FBc0MsZ0NBQWdDLFdBQVcsZ0JBQWdCLHFDQUFxQyx3Q0FBd0MsNkRBQTZELGlFQUFpRSw0QkFBNEIsd0NBQXdDLG1CQUFtQixxQkFBcUIsaUJBQWlCLHlCQUF5Qix3R0FBd0cseUJBQXlCLHNCQUFzQixzQkFBc0IsMENBQTBDLG9CQUFvQiwwQkFBMEIsZ0RBQWdELGtQQUFrUCxpQ0FBaUMsc0NBQXNDLGFBQWEsaUJBQWlCLHFDQUFxQyxhQUFhLGNBQWMsa0JBQWtCLHFDQUFxQyxhQUFhLGVBQWUsa0JBQWtCLFNBQVMsbUZBQW1GLFVBQVUsVUFBVSxVQUFVLFlBQVksZ0JBQWdCLEtBQUssVUFBVSxpQkFBaUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsaUJBQWlCLE9BQU8saUJBQWlCLE9BQU8sV0FBVyxnQkFBZ0IsTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLGFBQWEsV0FBVyxhQUFhLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxVQUFVLGlCQUFpQixPQUFPLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLFdBQVcsZUFBZSxPQUFPLFdBQVcsVUFBVSxlQUFlLE9BQU8sV0FBVyxVQUFVLDZDQUE2QyxtQkFBbUIsdUJBQXVCLHFDQUFxQyxxRUFBcUUsa0JBQWtCLDRCQUE0QiwyQkFBMkIsK0JBQStCLG1DQUFtQyxrREFBa0QsMkJBQTJCLDhCQUE4QixtQ0FBbUMsdUJBQXVCLHdCQUF3QiwwQkFBMEIseUJBQXlCLDRFQUE0RSxhQUFhLGtDQUFrQywyQkFBMkIsaUNBQWlDLGlCQUFpQixhQUFhLHFCQUFxQiw0QkFBNEIsNkJBQTZCLGFBQWEsU0FBUyxLQUFLLHlCQUF5QixnQ0FBZ0MseUJBQXlCLGdEQUFnRCx1Q0FBdUMsOENBQThDLHlDQUF5QyxlQUFlLHFCQUFxQixzQ0FBc0MseUNBQXlDLG1FQUFtRSwrREFBK0Qsc0RBQXNELHlCQUF5QiwyQkFBMkIsdUJBQXVCLDZCQUE2QixTQUFTLGdDQUFnQyxhQUFhLGdFQUFnRSwrQkFBK0IsNEJBQTRCLDRCQUE0QixnREFBZ0QsNkNBQTZDLGdDQUFnQyw2RUFBNkUsa0NBQWtDLGtEQUFrRCxhQUFhLFNBQVMsOEJBQThCLG1CQUFtQixxQkFBcUIsU0FBUyw2QkFBNkIsbUJBQW1CLG9CQUFvQixzQkFBc0IsU0FBUyw2QkFBNkIsbUJBQW1CLHFCQUFxQixzQkFBc0IsU0FBUyxLQUFLLG1CQUFtQjtBQUM5bEs7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGtFQUFrRTtBQUNuSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNkdBQW1DO0FBQy9FLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCxzQkFBc0IsaUJBQWlCLGVBQWUsOEJBQThCLDZCQUE2Qiw4QkFBOEIsdUJBQXVCLG9EQUFvRCxrQkFBa0IsMENBQTBDLHdDQUF3QyxnQkFBZ0IsbUJBQW1CLG1DQUFtQyxvQkFBb0Isa0JBQWtCLHFCQUFxQiwyQkFBMkIsaUNBQWlDLDZCQUE2QixvQkFBb0Isb0NBQW9DLG9EQUFvRCxxREFBcUQsbUNBQW1DLDBCQUEwQixpQkFBaUIsa0JBQWtCLHdDQUF3QyxrQkFBa0IsNEZBQTRGLG9DQUFvQywrQkFBK0Isd0JBQXdCLHVCQUF1QixpREFBaUQsd0VBQXdFLGtDQUFrQyw2QkFBNkIsbUNBQW1DLHdCQUF3QixvQkFBb0IsOEJBQThCLGtDQUFrQyxzQkFBc0Isb0JBQW9CLDhCQUE4QixvQ0FBb0MscUJBQXFCLHlCQUF5Qix3QkFBd0Isb0JBQW9CLDZCQUE2Qiw2QkFBNkIsNEJBQTRCLCtEQUErRCwyQkFBMkIsa0ZBQWtGLHNEQUFzRCx5Q0FBeUMsK0JBQStCLDZCQUE2Qix1QkFBdUIsOEJBQThCLHNCQUFzQix1Q0FBdUMsa0JBQWtCLDRDQUE0Qyx5REFBeUQsMkJBQTJCLGtGQUFrRiw4QkFBOEIsbUZBQW1GLDhCQUE4QixrRkFBa0YseUJBQXlCLHFCQUFxQixrQkFBa0Isb0JBQW9CLGlGQUFpRixrQkFBa0Isc0NBQXNDLHFIQUFxSCwyQkFBMkIsMkVBQTJFLDBCQUEwQixTQUFTLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssa0JBQWtCLE9BQU8sV0FBVyxlQUFlLE9BQU8sa0JBQWtCLE9BQU8sV0FBVyxpQkFBaUIsT0FBTyxrQkFBa0IsT0FBTyxpQkFBaUIsTUFBTSxVQUFVLFlBQVksV0FBVyxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGlCQUFpQixPQUFPLFdBQVcsVUFBVSxpQkFBaUIsT0FBTyxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxtQkFBbUIsT0FBTyxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsaUJBQWlCLE1BQU0sVUFBVSxpQkFBaUIsTUFBTSxrQkFBa0IsT0FBTyxtQkFBbUIsT0FBTyxtQkFBbUIsT0FBTyxrQkFBa0IsTUFBTSxVQUFVLGdCQUFnQixNQUFNLFVBQVUsaUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sa0RBQWtELDBCQUEwQixxQkFBcUIsbUJBQW1CLDBDQUEwQyxpQ0FBaUMsa0NBQWtDLDJCQUEyQix3REFBd0QscUNBQXFDLDhDQUE4Qyw0Q0FBNEMsa0JBQWtCLGdCQUFnQix1Q0FBdUMsU0FBUyxpQkFBaUIsd0JBQXdCLHlCQUF5QixTQUFTLHdCQUF3Qix3REFBd0QsU0FBUywwQkFBMEIsNkNBQTZDLHdDQUF3QyxzQ0FBc0MsMkRBQTJELGFBQWEscUJBQXFCLGdDQUFnQyxhQUFhLFNBQVMsS0FBSywrQkFBK0IsU0FBUyxxQkFBcUIsa0NBQWtDLHFDQUFxQyw0Q0FBNEMsc0JBQXNCLG1IQUFtSCxnQ0FBZ0Msd0NBQXdDLHFDQUFxQyw4QkFBOEIsNkJBQTZCLHVEQUF1RCwrRUFBK0Usd0NBQXdDLG1DQUFtQyx5Q0FBeUMsaURBQWlELDBCQUEwQixrQ0FBa0MsU0FBUyw4QkFBOEIscUNBQXFDLCtDQUErQywwQkFBMEIsa0NBQWtDLFNBQVMsZ0NBQWdDLHVDQUF1QywyQkFBMkIsK0JBQStCLGlEQUFpRCwwQkFBMEIsbUNBQW1DLG1DQUFtQyxnQ0FBZ0MsMENBQTBDLHlDQUF5QyxpQ0FBaUMsd0NBQXdDLDhEQUE4RCxpQkFBaUIsYUFBYSxTQUFTLHFDQUFxQyxzQ0FBc0Msc0RBQXNELFNBQVMsS0FBSywrQkFBK0IsbUJBQW1CLGFBQWEsZUFBZSwrQkFBK0Isc0NBQXNDLDRCQUE0QixTQUFTLHlCQUF5Qiw2Q0FBNkMsa0RBQWtELG1DQUFtQyxtQ0FBbUMsNENBQTRDLHdDQUF3QyxpQkFBaUIseUNBQXlDLHdDQUF3QyxpQkFBaUIsd0NBQXdDLG1DQUFtQyxpQkFBaUIsYUFBYSxTQUFTLEtBQUsseUJBQXlCLHFDQUFxQyxzQkFBc0IsS0FBSywwQkFBMEIsWUFBWSxhQUFhLG1EQUFtRCw2Q0FBNkMsNENBQTRDLGtDQUFrQyxpQkFBaUIsbUNBQW1DLG1DQUFtQyxhQUFhLFNBQVMsc0NBQXNDLHFDQUFxQyxvQ0FBb0MsYUFBYSxTQUFTLEtBQUssbUJBQW1CO0FBQ24vUDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpcEJBQWlwQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLCtCQUErQixpSkFBaUoscUJBQXFCLFVBQVUscUJBQXFCLFlBQVksdUJBQXVCLG1CQUFtQixtQkFBbUIsNkRBQTZELGdCQUFnQixvQkFBb0IsV0FBVyw4QkFBOEIsd0JBQXdCLFNBQVMseUZBQXlGLEtBQUssaUJBQWlCLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxrQkFBa0IsWUFBWSxNQUFNLGdCQUFnQixLQUFLLGdCQUFnQixLQUFLLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSw2cUJBQTZxQixnQkFBZ0IsaUJBQWlCLGdCQUFnQixzQkFBc0Isb0JBQW9CLCtCQUErQixLQUFLLHNKQUFzSixxQkFBcUIsS0FBSyxVQUFVLHFCQUFxQixLQUFLLFlBQVksdUJBQXVCLEtBQUssbUJBQW1CLG1CQUFtQixLQUFLLCtEQUErRCxrQkFBa0Isb0JBQW9CLEtBQUssV0FBVyxnQ0FBZ0Msd0JBQXdCLEtBQUssbUJBQW1CO0FBQzF4RjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNkhBQTJDO0FBQ3ZGLDRDQUE0Qyx5R0FBaUM7QUFDN0UsNENBQTRDLHFMQUF1RTtBQUNuSCw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSCx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCxnQ0FBZ0MsZ0NBQWdDLDZCQUE2QiwrQkFBK0IsZ0NBQWdDLFVBQVUscUJBQXFCLDZCQUE2Qiw0QkFBNEIsMEJBQTBCLFVBQVUsc0JBQXNCLDZJQUE2SSxjQUFjLCtCQUErQixjQUFjLHNCQUFzQixrQkFBa0Isd0NBQXdDLFlBQVksNEJBQTRCLHNFQUFzRSwwQkFBMEIsZ0NBQWdDLGtCQUFrQixtQ0FBbUMsZ0JBQWdCLG1CQUFtQixvQkFBb0IsNEJBQTRCLHdFQUF3RSxrQ0FBa0MsbUNBQW1DLGlDQUFpQyxVQUFVLDhCQUE4QixzRUFBc0UsNkJBQTZCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLDBCQUEwQixPQUFPLDBCQUEwQixxQkFBcUIsU0FBUyxpRkFBaUYsV0FBVyxXQUFXLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxXQUFXLGtCQUFrQixNQUFNLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsaUJBQWlCLE1BQU0sVUFBVSxlQUFlLE1BQU0sYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxnSEFBZ0gsZUFBZSxvQ0FBb0Msb0NBQW9DLGlDQUFpQyxtQ0FBbUMsa0NBQWtDLEtBQUssY0FBYyx5QkFBeUIsK0JBQStCLEtBQUssZ0NBQWdDLDRCQUE0QixLQUFLLGNBQWMsMEJBQTBCLGlKQUFpSixrQkFBa0IsaUNBQWlDLEtBQUssa0JBQWtCLDBCQUEwQixxQ0FBcUMsMENBQTBDLEtBQUssZ0JBQWdCLHFEQUFxRCwwREFBMEQsOEJBQThCLG9DQUFvQyxxQ0FBcUMscUNBQXFDLGlCQUFpQix5QkFBeUIsd0JBQXdCLFNBQVMsNkJBQTZCLG9EQUFvRCx3Q0FBd0MseUNBQXlDLHFDQUFxQyxTQUFTLEtBQUssY0FBYywrREFBK0Qsc0ZBQXNGLGlDQUFpQyxxQ0FBcUMsK0JBQStCLGdDQUFnQyw0QkFBNEIsS0FBSywwQkFBMEIsOEJBQThCLHVCQUF1QixLQUFLLG1CQUFtQjtBQUNodkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsbURBQW1ELHdCQUF3QixrQkFBa0IsNEJBQTRCLDBCQUEwQixtQ0FBbUMsMkNBQTJDLHlCQUF5QixxQkFBcUIsdUNBQXVDLHNEQUFzRCxvREFBb0QsMENBQTBDLHVCQUF1QiwyQkFBMkIsOEJBQThCLG9EQUFvRCx3QkFBd0IsOENBQThDLDZCQUE2QixvQkFBb0Isa0JBQWtCLHNCQUFzQixxQ0FBcUMsb0JBQW9CLHVCQUF1Qiw0SkFBNEosOEJBQThCLGtOQUFrTixzQkFBc0IsdUJBQXVCLFNBQVMsbUZBQW1GLFdBQVcsVUFBVSxZQUFZLGtCQUFrQixNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxrQkFBa0IsT0FBTyxZQUFZLFlBQVksa0JBQWtCLE9BQU8sWUFBWSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLGVBQWUsT0FBTyxtQkFBbUIsT0FBTyxZQUFZLDRDQUE0Qyw0QkFBNEIsMEJBQTBCLGdDQUFnQyw0QkFBNEIscUNBQXFDLGVBQWUscURBQXFELG1DQUFtQywrQkFBK0IsOEVBQThFLGdFQUFnRSxnSUFBZ0ksOEJBQThCLG1DQUFtQyx1Q0FBdUMsd0NBQXdDLHVDQUF1QyxzQ0FBc0MsNERBQTRELHVGQUF1RixrQ0FBa0MsZ0NBQWdDLG9DQUFvQyx3RkFBd0YsOEVBQThFLG1DQUFtQyxxQkFBcUIsaUJBQWlCLDhEQUE4RCx3Q0FBd0Msa0NBQWtDLG1DQUFtQyx3Q0FBd0MsdUNBQXVDLHlCQUF5QixxQkFBcUIsaUJBQWlCLGFBQWEsU0FBUyxLQUFLLG1CQUFtQjtBQUM1eUc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0o7QUFDcEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxvSUFBTzs7OztBQUk4RjtBQUN0SCxPQUFPLGlFQUFlLG9JQUFPLElBQUksMklBQWMsR0FBRywySUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE4STtBQUM5STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDhIQUFPOzs7O0FBSXdGO0FBQ2hILE9BQU8saUVBQWUsOEhBQU8sSUFBSSxxSUFBYyxHQUFHLHFJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTZJO0FBQzdJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNkhBQU87Ozs7QUFJdUY7QUFDL0csT0FBTyxpRUFBZSw2SEFBTyxJQUFJLG9JQUFjLEdBQUcsb0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBOEk7QUFDOUk7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw4SEFBTzs7OztBQUl3RjtBQUNoSCxPQUFPLGlFQUFlLDhIQUFPLElBQUkscUlBQWMsR0FBRyxxSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUF3SjtBQUN4SjtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHdJQUFPOzs7O0FBSWtHO0FBQzFILE9BQU8saUVBQWUsd0lBQU8sSUFBSSwrSUFBYyxHQUFHLCtJQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTJJO0FBQzNJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMkhBQU87Ozs7QUFJcUY7QUFDN0csT0FBTyxpRUFBZSwySEFBTyxJQUFJLGtJQUFjLEdBQUcsa0lBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBa0o7QUFDbEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxrSUFBTzs7OztBQUk0RjtBQUNwSCxPQUFPLGlFQUFlLGtJQUFPLElBQUkseUlBQWMsR0FBRyx5SUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE0STtBQUM1STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSXNGO0FBQzlHLE9BQU8saUVBQWUsNEhBQU8sSUFBSSxtSUFBYyxHQUFHLG1JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQThJO0FBQzlJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsOEhBQU87Ozs7QUFJd0Y7QUFDaEgsT0FBTyxpRUFBZSw4SEFBTyxJQUFJLHFJQUFjLEdBQUcscUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZvRDtBQUNIO0FBQ0o7QUFDUztBQUNQO0FBQ2pCO0FBQzlCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNERBQWEsU0FBUyxvQkFBb0I7QUFDOUU7QUFDQSx3Q0FBd0MsNERBQWEsU0FBUyw4QkFBOEI7QUFDNUYsOEJBQThCLHFEQUFhO0FBQzNDLDhCQUE4QixnREFBUztBQUN2Qyw4QkFBOEIsa0RBQVc7QUFDekM7QUFDQTtBQUNBLDBEQUEwRCxvREFBWTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7OztBQy9CK0M7QUFDdkI7QUFDeEI7QUFDZTtBQUNmO0FBQ0EsZUFBZSw0REFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0REFBYSxTQUFTLDhCQUE4QjtBQUNoRixZQUFZLDREQUFhLFFBQVE7QUFDakMsWUFBWSw0REFBYSxRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0REFBYSxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkMrQztBQUN4QjtBQUN2QjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw0REFBYSxZQUFZO0FBQ3ZFO0FBQ0EsWUFBWSw0REFBYSxVQUFVLHFCQUFxQixnQ0FBZ0MsY0FBYyxHQUFHLFNBQVM7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEIrQztBQUN2QjtBQUN4QjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0REFBYSxVQUFVLHNCQUFzQjtBQUNuRSxrQ0FBa0M7QUFDbEM7QUFDQSxxQkFBcUIsNERBQWEsVUFBVSxxQkFBcUI7QUFDakUsa0NBQWtDO0FBQ2xDO0FBQ0EscUJBQXFCLDREQUFhLFVBQVUscUJBQXFCO0FBQ2pFLGtDQUFrQztBQUNsQztBQUNBLGVBQWUsNERBQWEsU0FBUyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBYSxTQUFTLHdCQUF3QjtBQUMxRCxZQUFZLDREQUFhLFNBQVMsd0JBQXdCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCw0REFBYSxTQUFTLGNBQWM7QUFDdkY7QUFDQSx1Q0FBdUMsNERBQWEsT0FBTyxnQ0FBZ0M7QUFDM0YsZ0JBQWdCLDREQUFhLFNBQVMsdURBQXVEO0FBQzdGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGK0M7QUFDUTtBQUN2RDtBQUNlO0FBQ2Y7QUFDQSx3QkFBd0IsNERBQWE7QUFDckM7QUFDQTtBQUNBLDRCQUE0Qiw2REFBcUI7QUFDakQ7QUFDQTtBQUNBLDRCQUE0Qiw0REFBYSxRQUFRO0FBQ2pELDRCQUE0Qiw0REFBYSxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCNEI7QUFDTTtBQUNsQztBQUNrQztBQUNMO0FBQ0k7QUFDYztBQUMvQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsNERBQWE7QUFDOUQ7QUFDQSx5QkFBeUIsNERBQWEsU0FBUywwQkFBMEI7QUFDekU7QUFDQTtBQUNBLDRCQUE0Qix1REFBTTtBQUNsQztBQUNBO0FBQ0EsK0JBQStCLG9EQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzREFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDd0M7QUFDTztBQUMxQjtBQUN3QjtBQUNYO0FBQ3NCO0FBQ2xCO0FBQ3RDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNERBQWEsU0FBUyxzQkFBc0I7QUFDekU7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBYSxTQUFTLDZCQUE2QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQWEsUUFBUSwyQkFBMkI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw0REFBYSxTQUFTLGtDQUFrQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQW1CO0FBQzNDO0FBQ0E7QUFDQSxrQkFBa0IsaUNBQWlDLEVBQUUsYUFBYTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNERBQWEsU0FBUyw2QkFBNkI7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQWEsU0FBUyxtQ0FBbUM7QUFDekU7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFhO0FBQzdCO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFhLFNBQVMsa0NBQWtDO0FBQ3hFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDREQUFhLFNBQVMsMEJBQTBCO0FBQ2xGLHNDQUFzQyw0REFBYSxRQUFRLCtCQUErQjtBQUMxRixzQ0FBc0MsNERBQWEsU0FBUywrQkFBK0I7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNERBQWEsU0FBUyxnQ0FBZ0M7QUFDdkYscUNBQXFDLDREQUFhLFNBQVMsT0FBTyxrREFBa0IsdURBQXVEO0FBQzNJLHFDQUFxQyw0REFBYSxRQUFRO0FBQzFELDBEQUEwRCw0REFBYSxTQUFTLHNCQUFzQjtBQUN0RztBQUNBLFFBQVEsK0RBQTJCO0FBQ25DLHdEQUF3RCw0REFBYSxTQUFTLDRCQUE0QjtBQUMxRztBQUNBLGdCQUFnQiw0REFBYTtBQUM3QjtBQUNBLHFCQUFxQixpQ0FBaUM7QUFDdEQsdUJBQXVCLG1CQUFtQixFQUFFLGtCQUFrQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQWE7QUFDN0I7QUFDQSxxQkFBcUIsa0NBQWtDO0FBQ3ZELHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFhO0FBQzdCO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RCw2QkFBNkIsaUNBQWlDO0FBQzlEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNERBQWEsU0FBUyxxQkFBcUI7QUFDcEU7QUFDQTtBQUNBLDZCQUE2Qiw0REFBYSxTQUFTLE9BQU8saURBQVEsNENBQTRDO0FBQzlHO0FBQ0EsMENBQTBDLDREQUFhLFNBQVMsdUJBQXVCO0FBQ3ZGO0FBQ0E7QUFDQSxRQUFRLDBEQUFzQjtBQUM5QjtBQUNBO0FBQ0EsOENBQThDLDREQUFhLFNBQVMsdUJBQXVCO0FBQzNGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDJEQUF1QjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0REFBYSxTQUFTLDJCQUEyQjtBQUN0RjtBQUNBLHlDQUF5Qyw0REFBYSxTQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQWE7QUFDN0I7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQWEsU0FBUywyQkFBMkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQWEsU0FBUyw0QkFBNEIsTUFBTSwyQkFBMkI7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBYSxTQUFTLGtDQUFrQztBQUM1RTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNERBQWEsU0FBUyxxQkFBcUI7QUFDcEU7QUFDQTtBQUNBLDZCQUE2Qiw0REFBYSxTQUFTLE9BQU8saURBQVEsNENBQTRDO0FBQzlHO0FBQ0E7QUFDQSwwQ0FBMEMsNERBQWEsU0FBUyx1QkFBdUI7QUFDdkY7QUFDQTtBQUNBLHVFQUF1RSx1REFBbUI7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNERBQWE7QUFDeEM7QUFDQSxhQUFhLHVDQUF1QztBQUNwRCxZQUFZLDREQUFhLE9BQU8sNEJBQTRCO0FBQzVELFlBQVksNERBQWEsT0FBTyw2QkFBNkI7QUFDN0QsWUFBWSw0REFBYSxPQUFPLHdCQUF3QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNERBQWE7QUFDeEM7QUFDQSxhQUFhLDJCQUEyQjtBQUN4QyxZQUFZLDREQUFhLFFBQVE7QUFDakMsWUFBWSw0REFBYSxRQUFRO0FBQ2pDLFlBQVksNERBQWEsUUFBUTtBQUNqQyxZQUFZLDREQUFhLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDREQUFhLFNBQVMsdUJBQXVCO0FBQ25GO0FBQ0E7QUFDQSwyQkFBMkIsNERBQWEsU0FBUyxPQUFPLDBDQUFJLGtDQUFrQztBQUM5RjtBQUNBO0FBQ0EsMkJBQTJCLDREQUFhO0FBQ3hDO0FBQ0EsYUFBYSw2QkFBNkI7QUFDMUMsWUFBWSw0REFBYSxRQUFRO0FBQ2pDLFlBQVksNERBQWEsUUFBUTtBQUNqQyxZQUFZLDREQUFhLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDREQUFhO0FBQ3hDO0FBQ0EsYUFBYSwrQkFBK0I7QUFDNUMsWUFBWSw0REFBYSxTQUFTLCtCQUErQjtBQUNqRSxZQUFZLDREQUFhLFNBQVMsZ0NBQWdDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0REFBYTtBQUN4QztBQUNBLGFBQWEsK0JBQStCO0FBQzVDLFlBQVksNERBQWEsU0FBUywrQkFBK0I7QUFDakUsWUFBWSw0REFBYSxTQUFTLGdDQUFnQztBQUNsRTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNERBQWE7QUFDeEM7QUFDQSxhQUFhLCtCQUErQjtBQUM1QyxZQUFZLDREQUFhLFNBQVMsK0JBQStCO0FBQ2pFLFlBQVksNERBQWEsU0FBUyxnQ0FBZ0M7QUFDbEUsWUFBWSw0REFBYSxPQUFPLCtCQUErQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNERBQWE7QUFDeEM7QUFDQSxhQUFhLCtCQUErQjtBQUM1QyxZQUFZLDREQUFhLFNBQVMsK0JBQStCO0FBQ2pFLFlBQVksNERBQWEsU0FBUyxnQ0FBZ0M7QUFDbEUsWUFBWSw0REFBYSxPQUFPLCtCQUErQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNERBQWEsU0FBUyw4QkFBOEI7QUFDakY7QUFDQTtBQUNBLDJDQUEyQyw0REFBYSxhQUFhO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVDQUF1Qyw0REFBYSxhQUFhO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHVDQUF1Qyw0REFBYSxhQUFhO0FBQ2pFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0REFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyVCtDO0FBQ2xCO0FBQ007QUFDTjtBQUNNO0FBQ1g7QUFDeEI7QUFDZTtBQUNmO0FBQ0EsOEJBQThCLDREQUFhLE9BQU8sYUFBYSxFQUFFLDREQUFhLFdBQVc7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxlQUFlLDREQUFhLFNBQVMsOEJBQThCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxvREFBSTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELHVEQUFPO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsb0RBQUk7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx1REFBTztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0REFBYTtBQUMzQztBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksU0FBUztBQUNyQjtBQUNPLHVDQUF1QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXFEO0FBQ3JEO0FBQ3NCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUVBQWU7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYW5pbWF0ZWQtbG9nby5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9nYWxsZXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLXBhZ2UtbG9hZC5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5zY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWV5ZXItcmVzZXQuc2NzcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy90b3AtbmF2LnNjc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYW5pbWF0ZWQtbG9nby5zY3NzPzFhNDYiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LnNjc3M/ZWI1NiIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5zY3NzP2IxNTUiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9nYWxsZXJ5LnNjc3M/ZDFjOCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwtcGFnZS1sb2FkLnNjc3M/YWM1ZSIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuc2Nzcz84ZDgzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWV5ZXItcmVzZXQuc2Nzcz8xZGIyIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdG9wLW5hdi5zY3NzPzY3NTkiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FuaW1hdGVkLWxvZ28uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLXBhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy90b3AtbmF2LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNhbmltYXRlZC1sb2dvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNDA2cHg7XFxuICB3aWR0aDogNjA2cHg7IH1cXG4gICNhbmltYXRlZC1sb2dvID4gKiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDsgfVxcbiAgI2FuaW1hdGVkLWxvZ28gLmFuaW1hdGVkLWxvZ28tYmFjayB7XFxuICAgIC0tbG9nby1iYWNrLWhlaWdodC1wZXJjZW50YWdlOiA3MCU7XFxuICAgIGhlaWdodDogdmFyKC0tbG9nby1iYWNrLWhlaWdodC1wZXJjZW50YWdlKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAjYW5pbWF0ZWQtbG9nbyAuYW5pbWF0ZWQtbG9nby1iYWNrID4gKiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyB9XFxuICAgICNhbmltYXRlZC1sb2dvIC5hbmltYXRlZC1sb2dvLWJhY2sgLmxvZ28taW1hZ2Utc2lnbiB7XFxuICAgICAgYW5pbWF0aW9uLW5hbWU6IGxvZ28taW1hZ2Utc2lnbi1zbGlkZTsgfVxcbiAgICAjYW5pbWF0ZWQtbG9nbyAuYW5pbWF0ZWQtbG9nby1iYWNrIC5sb2dvLXRyZWVzIHtcXG4gICAgICBhbmltYXRpb24tbmFtZTogbG9nby10cmVlcy1zbGlkZTsgfVxcbiAgICAjYW5pbWF0ZWQtbG9nbyAuYW5pbWF0ZWQtbG9nby1iYWNrIC5sb2dvLXJvb3N0ZXIge1xcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBsb2dvLXJvb3N0ZXItc2xpZGU7IH1cXG4gICNhbmltYXRlZC1sb2dvIC5sb2dvLXRleHQtc2lnbiB7XFxuICAgIGJvdHRvbTogMDsgfVxcblxcbkBrZXlmcmFtZXMgbG9nby1zbGlkZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7IH0gfVxcblxcbkBrZXlmcmFtZXMgbG9nby1pbWFnZS1zaWduLXNsaWRlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGxvZ28tdHJlZXMtc2xpZGUge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGxvZ28tcm9vc3Rlci1zbGlkZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hbmltYXRlZC1sb2dvLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVksRUFBQTtFQUhoQjtJQU1RLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVEsRUFBQTtFQVRoQjtJQWFRLGtDQUE4QjtJQUU5QiwwQ0FBMEM7SUFDMUMsZ0JBQWdCLEVBQUE7SUFoQnhCO01BbUJZLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sT0FBTztNQUNQLFNBQVM7TUFDVCxRQUFRO01BR1Isc0JBQXNCO01BQ3RCLG1DQUFtQyxFQUFBO0lBM0IvQztNQStCWSxxQ0FBcUMsRUFBQTtJQS9CakQ7TUFtQ1ksZ0NBQWdDLEVBQUE7SUFuQzVDO01BdUNZLGtDQUFrQyxFQUFBO0VBdkM5QztJQTRDUSxTQUFTLEVBQUE7O0FBSWpCO0VBQ0k7SUFDSSwyQkFBMkIsRUFBQTtFQUUvQjtJQUNJLHlCQUF5QixFQUFBLEVBQUE7O0FBSWpDO0VBQ0k7SUFDSSwwQkFBMEIsRUFBQTtFQUU5QjtJQUNJLHlCQUF5QixFQUFBLEVBQUE7O0FBSWpDO0VBQ0k7SUFDSSwyQkFBMkIsRUFBQTtFQUUvQjtJQUNJLHlCQUF5QixFQUFBLEVBQUE7O0FBSWpDO0VBQ0k7SUFDSSwyQkFBMkIsRUFBQTtFQUUvQjtJQUNJLHlCQUF5QixFQUFBLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2FuaW1hdGVkLWxvZ28ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogNDA2cHg7XFxyXFxuICAgIHdpZHRoOiA2MDZweDtcXHJcXG5cXHJcXG4gICAgPiAqIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYW5pbWF0ZWQtbG9nby1iYWNrIHtcXHJcXG4gICAgICAgIC0tbG9nby1iYWNrLWhlaWdodC1wZXJjZW50YWdlOiA3MCU7XFxyXFxuXFxyXFxuICAgICAgICBoZWlnaHQ6IHZhcigtLWxvZ28tYmFjay1oZWlnaHQtcGVyY2VudGFnZSk7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgPiAqIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvblxcclxcbiAgICAgICAgICAgIC8vYW5pbWF0aW9uLW5hbWU6IGxvZ28tc2xpZGU7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5sb2dvLWltYWdlLXNpZ24ge1xcclxcbiAgICAgICAgICAgIC8vIEFuaW1hdGlvblxcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBsb2dvLWltYWdlLXNpZ24tc2xpZGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAubG9nby10cmVlcyB7XFxyXFxuICAgICAgICAgICAgLy8gQW5pbWF0aW9uXFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGxvZ28tdHJlZXMtc2xpZGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAubG9nby1yb29zdGVyIHtcXHJcXG4gICAgICAgICAgICAvLyBBbmltYXRpb25cXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogbG9nby1yb29zdGVyLXNsaWRlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sb2dvLXRleHQtc2lnbiB7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBsb2dvLXNsaWRlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvZ28taW1hZ2Utc2lnbi1zbGlkZSB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGxvZ28tdHJlZXMtc2xpZGUge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbG9nby1yb29zdGVyLXNsaWRlIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubG9jYXRpb24tY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb250YWN0LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxrQkFBa0IsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubG9jYXRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2ZvbmRvX3BpZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJmb290ZXIge1xcbiAgcGFkZGluZzogMS42cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDRhMTg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG4gIGZvb3RlciBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIGZvb3RlciBwIHNtYWxsIHtcXG4gICAgICBmb250LXNpemU6IDgwJTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLGVBQWU7RUFFZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUVyQix5QkFBa0M7RUFDbEMseURBQTRDO0VBQzVDLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7RUFYMUI7SUFjUSxrQkFBa0IsRUFBQTtJQWQxQjtNQWlCWSxjQUFjLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZm9vdGVyIHtcXHJcXG4gICAgcGFkZGluZzogMS42cmVtO1xcclxcbiAgICAvLyBGbGV4XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICAvLyBCYWNrZ3JvdW5kXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDc0LCAyNCk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvZm9uZG9fcGllLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgc21hbGwge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNnYWxsZXJ5IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDFyZW0gMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICBnYXA6IDFyZW07IH1cXG4gICNnYWxsZXJ5IGEuZ2FsbGVyeS1pdGVtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAjZ2FsbGVyeSBhLmdhbGxlcnktaXRlbTo6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7IH1cXG4gICAgI2dhbGxlcnkgYS5nYWxsZXJ5LWl0ZW06aG92ZXI6OmJlZm9yZSwgI2dhbGxlcnkgYS5nYWxsZXJ5LWl0ZW06Zm9jdXM6OmJlZm9yZSB7XFxuICAgICAgb3BhY2l0eTogMC43OyB9XFxuICAgICNnYWxsZXJ5IGEuZ2FsbGVyeS1pdGVtIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuI2Z1bGwtaW1nLW1vZGFsIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTtcXG4gIC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTtcXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovIH1cXG4gICNmdWxsLWltZy1tb2RhbCAjaW1nLW1vZGFsLWNvbnRlbnQge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4OyB9XFxuICAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1jbG9zZSwgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtcHJldiwgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtbmV4dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhc2Utd2hpdGUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7IH1cXG4gICAgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtY2xvc2U6aG92ZXIsICNmdWxsLWltZy1tb2RhbCAjaW1nLW1vZGFsLWNsb3NlOmZvY3VzLCAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1wcmV2OmhvdmVyLCAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1wcmV2OmZvY3VzLCAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1uZXh0OmhvdmVyLCAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1uZXh0OmZvY3VzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyB9XFxuICAjZnVsbC1pbWctbW9kYWwgI2ltZy1tb2RhbC1jbG9zZSB7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7IH1cXG4gICNmdWxsLWltZy1tb2RhbCAjaW1nLW1vZGFsLXByZXYge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDsgfVxcbiAgI2Z1bGwtaW1nLW1vZGFsICNpbWctbW9kYWwtbmV4dCB7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9nYWxsZXJ5LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxVQUFVO0VBQ1YsY0FBYztFQUVkLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsU0FBUyxFQUFBO0VBTmI7SUFTUSxjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7SUFWMUI7TUFhWSxzQkFBaUM7TUFDakMsVUFBVTtNQUNWLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLE9BQU87TUFDUCxTQUFTO01BQ1QsUUFBUTtNQUVSLDhCQUE4QixFQUFBO0lBdEIxQztNQTJCZ0IsWUFBWSxFQUFBO0lBM0I1QjtNQWdDWSxXQUFXO01BQ1gsWUFBWSxFQUFBOztBQUt4QjtFQUNJLHVCQUF1QjtFQUV2QixlQUFlO0VBQUUsa0JBQUE7RUFDakIsVUFBVTtFQUFFLGVBQUE7RUFFWixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFBRSxlQUFBO0VBQ2IsWUFBWTtFQUFFLGdCQUFBO0VBQ2QsY0FBYztFQUFFLDRCQUFBO0VBQ2hCLHVCQUE0QjtFQUFFLG1CQUFBO0VBQzlCLG9DQUFpQztFQUFFLHFCQUFBLEVBQXNCO0VBWjdEO0lBZVEsWUFBWTtJQUNaLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7RUFsQnhCO0lBMEJRLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1DQUFtQztJQUVuQyxhQUFhO0lBQ2IsbUJBQW1CO0lBRW5CLHVDQUF1QyxFQUFBO0lBbEMvQztNQXFDWSxzQkFBaUMsRUFBQTtFQXJDN0M7SUEwQ1EsTUFBTTtJQUNOLFFBQVEsRUFBQTtFQTNDaEI7SUErQ1EsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTLEVBQUE7RUFqRGpCO0lBcURRLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNnYWxsZXJ5IHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuXFxyXFxuICAgIGEuZ2FsbGVyeS1pdGVtIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvblxcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jZnVsbC1pbWctbW9kYWwge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgLy9kaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cXHJcXG4gICAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcclxcbiAgICAvL3BhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcclxcblxcclxcbiAgICAjaW1nLW1vZGFsLWNvbnRlbnQge1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB3aWR0aDogODAlO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaW1nLW1vZGFsLWNhcHRpb24ge1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNpbWctbW9kYWwtY2xvc2UsICNpbWctbW9kYWwtcHJldiwgI2ltZy1tb2RhbC1uZXh0IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJhc2Utd2hpdGUpO1xcclxcbiAgICAgICAgLy8gR3JpZFxcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAvLyBUcmFuc2l0aW9uXFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMG1zIGVhc2U7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyLCAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2ltZy1tb2RhbC1jbG9zZSB7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaW1nLW1vZGFsLXByZXYge1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjaW1nLW1vZGFsLW5leHQge1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy90b21hdG8ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1lbnUtcGFnZSB7XFxuICBtYXJnaW46IDFyZW0gYXV0bztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGEzZjA2O1xcbiAgb3V0bGluZTogNnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyOiA2cHggc29saWQgI2M2MmExMztcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IHZhcigtLWJhc2UtYmxhY2spO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIGdhcDogMXJlbTsgfVxcbiAgLm1lbnUtcGFnZSBoMiB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XFxuICAubWVudS1wYWdlIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87IH1cXG4gIC5tZW51LXBhZ2UgLm1lbnUtbG9nbyB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMzsgfVxcbiAgLm1lbnUtcGFnZSAubWVudS1jb2x1bW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7IH1cXG4gICAgLm1lbnUtcGFnZSAubWVudS1jb2x1bW4gPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1iYXNlLXdoaXRlKTsgfVxcbiAgICAubWVudS1wYWdlIC5tZW51LWNvbHVtbiA+ICoge1xcbiAgICAgIHBhZGRpbmc6IDFyZW0gMDsgfVxcblxcbi5waXp6YS1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJlbSAxZnIgYXV0bztcXG4gIHJvdy1nYXA6IDFyZW07XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibnVtYmVyIG5hbWUgcHJpY2VzXFxcIlxcciBcXFwiaW5ncmVkaWVudHMgaW5ncmVkaWVudHMgaW5ncmVkaWVudHNcXFwiOyB9XFxuICAucGl6emEtaXRlbSAucGl6emEtaXRlbS1udW1iZXIge1xcbiAgICBjb2xvcjogdmFyKC0tYmFzZS13aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxZW0gdmFyKC0tYmFzZS1ibGFjayk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZ3JpZC1hcmVhOiBudW1iZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLnBpenphLWl0ZW0gLnBpenphLWl0ZW0tbmFtZSB7XFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyB9XFxuICAucGl6emEtaXRlbSAucGl6emEtaXRlbS1wcmljZXMge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IHByaWNlcztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAucGl6emEtaXRlbSAucGl6emEtaXRlbS1wcmljZXMgLnBpenphLWl0ZW0tcHJpY2Utc2luZ2xlIHtcXG4gICAgICBwYWRkaW5nOiAwIDAuNWVtOyB9XFxuICAgICAgLnBpenphLWl0ZW0gLnBpenphLWl0ZW0tcHJpY2VzIC5waXp6YS1pdGVtLXByaWNlLXNpbmdsZTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWJhc2Utd2hpdGUpOyB9XFxuICAucGl6emEtaXRlbSAucGl6emEtaXRlbS1pbmdyZWRpZW50cyB7XFxuICAgIGdyaWQtYXJlYTogaW5ncmVkaWVudHM7IH1cXG5cXG4uY29wLXByaWNlcy1jb250YWluZXIgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgcGFkZGluZzogMXJlbSAwOyB9XFxuXFxuLmNvcC1wcmljZXMtY29udGFpbmVyIC5jb3AtcHJpY2VzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpOyB9XFxuICAuY29wLXByaWNlcy1jb250YWluZXIgLmNvcC1wcmljZXMgLmNvcC1wcmljZS1zaW5nbGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgLmNvcC1wcmljZXMtY29udGFpbmVyIC5jb3AtcHJpY2VzIC5jb3AtcHJpY2Utc2luZ2xlIC5jb3AtcHJpY2Utc2luZ2xlLXNpemUge1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG4gICAgLmNvcC1wcmljZXMtY29udGFpbmVyIC5jb3AtcHJpY2VzIC5jb3AtcHJpY2Utc2luZ2xlIC5jb3AtcHJpY2Utc2luZ2xlLXZhbHVlIHtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuICAgIC5jb3AtcHJpY2VzLWNvbnRhaW5lciAuY29wLXByaWNlcyAuY29wLXByaWNlLXNpbmdsZSAuY29wLXByaWNlLXNpbmdsZS1ub3RlIHtcXG4gICAgICBmb250LXNpemU6IDcwJTsgfVxcblxcbi5jb3AtaW5ncmVkaWVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogMXJlbTsgfVxcblxcbi5vdGhlci1pdGVtLXR5cGUgLm90aGVyLWl0ZW0sIC5vdGhlci1pdGVtLXR5cGUgLm90aGVyLWl0ZW0td2l0aC1pbmdyZWRpZW50cyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bzsgfVxcbiAgLm90aGVyLWl0ZW0tdHlwZSAub3RoZXItaXRlbSAub3RoZXItaXRlbS1wcmljZSwgLm90aGVyLWl0ZW0tdHlwZSAub3RoZXItaXRlbS13aXRoLWluZ3JlZGllbnRzIC5vdGhlci1pdGVtLXByaWNlIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuXFxuLm90aGVyLWl0ZW0tdHlwZSAub3RoZXItaXRlbS13aXRoLWluZ3JlZGllbnRzIC5vdGhlci1pdGVtLWluZ3JlZGllbnRzIHtcXG4gIGdyaWQ6IDIgLyAxIC8gMyAvIDM7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWVudS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1YseUJBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLCtDQUErQztFQUUvQyxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyxTQUFTLEVBQUE7RUFiYjtJQWdCUSwwQkFBMEIsRUFBQTtFQWhCbEM7SUFvQlEsV0FBVztJQUNYLFlBQVksRUFBQTtFQXJCcEI7SUEwQlEsd0JBQXdCLEVBQUE7RUExQmhDO0lBK0JRLGFBQWE7SUFDYiwyQkFBMkIsRUFBQTtJQWhDbkM7TUFtQ1ksMENBQTBDLEVBQUE7SUFuQ3REO01BdUNZLGVBQWUsRUFBQTs7QUFTM0I7RUFHSSxhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixnRkFFeUMsRUFBQTtFQVI3QztJQVlRLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUUxQyx5REFBeUM7SUFDekMsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFFNUIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixxQkFBcUIsRUFBQTtFQXhCN0I7SUE4QlEsZUFBZTtJQUNmLGFBQWE7SUFDYixxQkFBcUIsRUFBQTtFQWhDN0I7SUFxQ1EsY0FBYztJQUNkLGtCQUFrQjtJQUVsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CLEVBQUE7SUE1QzNCO01BZ0RZLGdCQUFnQixFQUFBO01BaEQ1QjtRQW1EZ0IseUNBQXlDLEVBQUE7RUFuRHpEO0lBMkRRLHNCQUFzQixFQUFBOztBQUk5QjtFQU1RLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQVJ2QjtFQWFRLGFBQWE7RUFDYixxQ0FBcUMsRUFBQTtFQWQ3QztJQWlCWSxrQkFBa0IsRUFBQTtJQWpCOUI7TUFvQmdCLG1CQUFtQixFQUFBO0lBcEJuQztNQXVCZ0IsbUJBQW1CLEVBQUE7SUF2Qm5DO01BMEJnQixjQUFjLEVBQUE7O0FBTTlCO0VBRUksYUFBYTtFQUNiLGFBQWEsRUFBQTs7QUFHakI7RUFNUSxhQUFhO0VBQ2IsK0JBQStCLEVBQUE7RUFQdkM7SUFjWSxrQkFBa0IsRUFBQTs7QUFkOUI7RUFtQlksbUJBQW1CLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1lbnUtcGFnZSB7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzgsIDYzLCA2KTtcXHJcXG4gICAgb3V0bGluZTogNnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjYzYyYTEzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IHZhcigtLWJhc2UtYmxhY2spO1xcclxcbiAgICAvLyBHcmlkXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1sb2dvIHtcXHJcXG4gICAgICAgIC8vIEdyaWRcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1jb2x1bW4ge1xcclxcbiAgICAgICAgLy8gR3JpZFxcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXHJcXG5cXHJcXG4gICAgICAgID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmFzZS13aGl0ZSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICA+ICoge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4jcGl6emEtdHlwZS1jb250YWluZXIge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucGl6emEtaXRlbSB7XFxyXFxuICAgIC8vYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZW0gMWZyIGF1dG87XFxyXFxuICAgIHJvdy1nYXA6IDFyZW07XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICAgICAgXFxcIm51bWJlciBuYW1lIHByaWNlc1xcXCJcXHJcXG4gICAgICAgIFxcXCJpbmdyZWRpZW50cyBpbmdyZWRpZW50cyBpbmdyZWRpZW50c1xcXCI7XFxyXFxuXFxyXFxuICAgIC5waXp6YS1pdGVtLW51bWJlciB7XFxyXFxuICAgICAgICAvL291dGxpbmU6IDJweCBzb2xpZCBvcmFuZ2U7XFxyXFxuICAgICAgICBjb2xvcjogdmFyKC0tYmFzZS13aGl0ZSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxZW0gdmFyKC0tYmFzZS1ibGFjayk7XFxyXFxuICAgICAgICAvLyBCYWNrZ3JvdW5kXFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL3RvbWF0by5wbmcnKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICAgICAgLy8gR3JpZFxcclxcbiAgICAgICAgZ3JpZC1hcmVhOiBudW1iZXI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5waXp6YS1pdGVtLW5hbWUge1xcclxcbiAgICAgICAgLy9vdXRsaW5lOiAycHggc29saWQgcmVkO1xcclxcbiAgICAgICAgLy8gR3JpZFxcclxcbiAgICAgICAgZ3JpZC1hcmVhOiBuYW1lO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucGl6emEtaXRlbS1wcmljZXMge1xcclxcbiAgICAgICAgLy9vdXRsaW5lOiAycHggc29saWQgZ3JlZW47XFxyXFxuICAgICAgICBmb250LXNpemU6IDgwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIC8vIEdyaWRcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogcHJpY2VzO1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIC5waXp6YS1pdGVtLXByaWNlLXNpbmdsZSB7XFxyXFxuICAgICAgICAgICAgLy9vdXRsaW5lOiAycHggc29saWQgcmVkO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41ZW07XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYmFzZS13aGl0ZSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5waXp6YS1pdGVtLWluZ3JlZGllbnRzIHtcXHJcXG4gICAgICAgIC8vb3V0bGluZTogMnB4IHNvbGlkIGJsdWU7XFxyXFxuICAgICAgICAvLyBHcmlkXFxyXFxuICAgICAgICBncmlkLWFyZWE6IGluZ3JlZGllbnRzO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb3AtcHJpY2VzLWNvbnRhaW5lciB7XFxyXFxuICAgIC5jb3AtbG9nbyB7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb3AtcHJpY2VzIHtcXHJcXG4gICAgICAgIC8vIEdyaWRcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcblxcclxcbiAgICAgICAgLmNvcC1wcmljZS1zaW5nbGUge1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuY29wLXByaWNlLXNpbmdsZS1zaXplIHtcXHJcXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgLmNvcC1wcmljZS1zaW5nbGUtdmFsdWUge1xcclxcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAuY29wLXByaWNlLXNpbmdsZS1ub3RlIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MCU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb3AtaW5ncmVkaWVudCB7XFxyXFxuICAgIC8vIEdyaWRcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcm93LWdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm90aGVyLWl0ZW0tdHlwZSB7XFxyXFxuICAgIGgyIHtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAub3RoZXItaXRlbSwgLm90aGVyLWl0ZW0td2l0aC1pbmdyZWRpZW50cyB7XFxyXFxuICAgICAgICAvLyBHcmlkXFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXHJcXG5cXHJcXG4gICAgICAgIC5vdGhlci1pdGVtLW5hbWUge1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLm90aGVyLWl0ZW0tcHJpY2Uge1xcclxcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAub3RoZXItaXRlbS13aXRoLWluZ3JlZGllbnRzIHtcXHJcXG4gICAgICAgIC5vdGhlci1pdGVtLWluZ3JlZGllbnRzIHtcXHJcXG4gICAgICAgICAgICBncmlkOiAyIC8gMSAvIDMgLyAzO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWV5ZXItcmVzZXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7QUFFRDs7Ozs7Ozs7Ozs7OztFQWFDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCLEVBQUE7O0FBRXpCLGdEQUFBO0FBQ0E7O0VBRUMsY0FBYyxFQUFBOztBQUVmO0VBQ0MsY0FBYyxFQUFBOztBQUVmO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBRWpCO0VBQ0MsWUFBWSxFQUFBOztBQUViOztFQUVDLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBRWQ7RUFDQyx5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2ZvbmRvX0NhYmV6ZXJhLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvVGV4dHVyZXNDb21fV2FsbF9Ccmlja09sZDNBXzJ4MV81MTJfYWxiZWRvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmFzZS13aGl0ZTogaHNsKDAsMCUsOTAlKTtcXG4gIC0tYmFzZS1ibGFjazogaHNsKDAsMCUsMTAlKTtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzhjM2Y0NTtcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMjg1OTU0O1xcbiAgLS10ZXJ0aWFyeS1jb2xvcjogIzcxODczRDsgfVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTsgfVxcblxcbiNjb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjB2aCAxZnIgMjB2aDsgfVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bzsgfVxcbiAgaGVhZGVyIGltZyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG4gIGhlYWRlciAubG9nby1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxcblxcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxMzAwMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLDJCQUFhO0VBQ2IsMkJBQWE7RUFDYix3QkFBZ0I7RUFDaEIsMEJBQWtCO0VBQ2xCLHlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGdCQUFnQjtFQUNoQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQkFBaUI7RUFDakIsd0lBQXdJO0VBQ3hJLFNBQVM7RUFDVCx3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxpQkFBaUI7RUFFakIsYUFBYTtFQUNiLGlDQUFpQyxFQUFBOztBQUdyQztFQUVJLHVCQUF1QjtFQUN2Qix5REFBaUQ7RUFDakQscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUUzQixhQUFhO0VBQ2IsNEJBQTRCLEVBQUE7RUFSaEM7SUFXUSxZQUFZO0lBQ1osV0FBVyxFQUFBO0VBWm5CO0lBZ0JRLHlEQUF1QztJQUN2QywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHdCQUF3QixFQUFBOztBQUloQztFQUVJLHlCQUFpQztFQUNqQyx5REFBNkU7RUFDN0Usd0JBQXdCO0VBRXhCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUt2QjtFQUNJLHFCQUFxQjtFQUNyQixjQUFjLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLS1iYXNlLXdoaXRlOiBoc2woMCwwJSw5MCUpO1xcclxcbiAgICAtLWJhc2UtYmxhY2s6IGhzbCgwLDAlLDEwJSk7XFxyXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzhjM2Y0NTtcXHJcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMyODU5NTQ7XFxyXFxuICAgIC0tdGVydGlhcnktY29sb3I6ICM3MTg3M0Q7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDYyLjUlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXHJcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1iYXNlLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgLy8gR3JpZFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwdmggMWZyIDIwdmg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIC8vIEJhY2tncm91bmRcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvZm9uZG9fQ2FiZXplcmEuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcclxcbiAgICAvLyBHcmlkXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubG9nby1jb250YWluZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9sb2dvLnBuZycpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgLy8gQmFja2dyb3VuZFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkzLCA0OCwgMCk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvVGV4dHVyZXNDb21fV2FsbF9Ccmlja09sZDNBXzJ4MV81MTJfYWxiZWRvLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XFxyXFxuICAgIC8vIEZsZXhcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8vIE1pc2NcXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI3RvcG5hdiB7XFxuICAtLWdyb3d0aC1yYXRpbzogMS4yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgI3RvcG5hdiAubmF2LWxpbmstY29udGFpbmVyIGEge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYmFzZS13aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKGNhbGMoMSAvIHZhcigtLWdyb3d0aC1yYXRpbykpKTtcXG4gICAgZm9udC1zaXplOiBjYWxjKHZhcigtLWdyb3d0aC1yYXRpbykgKiAxMDAlKTsgfVxcbiAgICAjdG9wbmF2IC5uYXYtbGluay1jb250YWluZXIgYSBzcGFuIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDsgfVxcbiAgICAgICN0b3BuYXYgLm5hdi1saW5rLWNvbnRhaW5lciBhIHNwYW46OmJlZm9yZSB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2Utd2hpdGUpO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm90dG9tOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGhlaWdodDogMnB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XFxuICAgICAgICB3aWR0aDogMCU7XFxuICAgICAgICBvcGFjaXR5OiAwOyB9XFxuICAgICN0b3BuYXYgLm5hdi1saW5rLWNvbnRhaW5lciBhOmhvdmVyLCAjdG9wbmF2IC5uYXYtbGluay1jb250YWluZXIgYTpmb2N1cywgI3RvcG5hdiAubmF2LWxpbmstY29udGFpbmVyIGE6YWN0aXZlLCAjdG9wbmF2IC5uYXYtbGluay1jb250YWluZXIgYS5hY3RpdmUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cXG4gICAgICAjdG9wbmF2IC5uYXYtbGluay1jb250YWluZXIgYTpob3ZlciBzcGFuOjpiZWZvcmUsICN0b3BuYXYgLm5hdi1saW5rLWNvbnRhaW5lciBhOmZvY3VzIHNwYW46OmJlZm9yZSwgI3RvcG5hdiAubmF2LWxpbmstY29udGFpbmVyIGE6YWN0aXZlIHNwYW46OmJlZm9yZSwgI3RvcG5hdiAubmF2LWxpbmstY29udGFpbmVyIGEuYWN0aXZlIHNwYW46OmJlZm9yZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG9wYWNpdHk6IDE7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9wLW5hdi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksbUJBQWU7RUFFZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0VBTHZCO0lBU1ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixjQUFjO0lBRWQsZ0NBQWdDO0lBQ2hDLCtDQUErQztJQUUvQywyQ0FBMkMsRUFBQTtJQWhCdkQ7TUFtQmdCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsbUJBQW1CLEVBQUE7TUFyQm5DO1FBd0JvQixXQUFXO1FBQ1gsbUNBQW1DO1FBRW5DLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsT0FBTztRQUNQLFdBQVc7UUFFWCwwQkFBMEI7UUFFMUIsU0FBUztRQUNULFVBQVUsRUFBQTtJQW5DOUI7TUF3Q2dCLG1CQUFtQixFQUFBO01BeENuQztRQTRDd0IsV0FBVztRQUNYLFVBQVUsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjdG9wbmF2IHtcXHJcXG4gICAgLS1ncm93dGgtcmF0aW86IDEuMjtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICAubmF2LWxpbmstY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1iYXNlLXdoaXRlKTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgLy8gVHJhbnNpdGlvblxcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoY2FsYygxIC8gdmFyKC0tZ3Jvd3RoLXJhdGlvKSkpO1xcclxcbiAgICAgICAgICAgIC8vIEZvbnQgU2l6ZSBhZGp1c3RlZCBhZnRlciBzY2FsZWQgZG93biBieSB0cmFuc2Zvcm1cXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0tZ3Jvd3RoLXJhdGlvKSAqIDEwMCUpO1xcclxcbiAgICBcXHJcXG4gICAgICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2Utd2hpdGUpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgLy8gQWJzb2x1dGUgUG9zaXRpb25cXHJcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIC8vIFRyYW5zaXRpb25cXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgLy8gVHJhbnNpdGlvbiBWYWx1ZXNcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMsICY6YWN0aXZlLCAmLmFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGVkLWxvZ28uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FuaW1hdGVkLWxvZ28uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYWxsZXJ5LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYWxsZXJ5LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luaXRpYWwtcGFnZS1sb2FkLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbml0aWFsLXBhZ2UtbG9hZC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21leWVyLXJlc2V0LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllci1yZXNldC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9wLW5hdi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9wLW5hdi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsb2dvVGV4dFNpZ24gZnJvbSAnLi9pbWcvbG9nby10ZXh0LXNpZ24ucG5nJztcclxuaW1wb3J0IGxvZ29Sb29zdGVyIGZyb20gJy4vaW1nL2xvZ28tcm9vc3Rlci5wbmcnO1xyXG5pbXBvcnQgbG9nb1RyZWVzIGZyb20gJy4vaW1nL2xvZ28tdHJlZXMucG5nJztcclxuaW1wb3J0IGxvZ29JbWFnZVNpZ24gZnJvbSAnLi9pbWcvbG9nby1pbWFnZS1zaWduLnBuZyc7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XHJcbmltcG9ydCAnLi9hbmltYXRlZC1sb2dvLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWF0ZWRMb2dvQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgX2NyZWF0ZUltZ0VsZW1lbnQgPSBmdW5jdGlvbihzcmMsIGFsdCA9ICcnLCBjbGFzc05hbWUgPSAnJykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBlbGVtZW50LnNyYyA9IHNyYztcclxuICAgICAgICBpZiAoYWx0KSBlbGVtZW50LmFsdCA9IGFsdDtcclxuICAgICAgICBpZiAoY2xhc3NOYW1lKSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBhbmltYXRlZExvZ29FbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiAnYW5pbWF0ZWQtbG9nbyd9KTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZWRMb2dvRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2FuaW1hdGVkLWxvZ28tYmFjayd9LCBcclxuICAgICAgICAgICAgX2NyZWF0ZUltZ0VsZW1lbnQobG9nb0ltYWdlU2lnbiwgJycsICdsb2dvLWltYWdlLXNpZ24nKSxcclxuICAgICAgICAgICAgX2NyZWF0ZUltZ0VsZW1lbnQobG9nb1RyZWVzLCAnJywgJ2xvZ28tdHJlZXMnKSxcclxuICAgICAgICAgICAgX2NyZWF0ZUltZ0VsZW1lbnQobG9nb1Jvb3N0ZXIsICcnLCAnbG9nby1yb29zdGVyJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZWRMb2dvRWxlbWVudC5hcHBlbmRDaGlsZChfY3JlYXRlSW1nRWxlbWVudChsb2dvVGV4dFNpZ24sICcnLCAnbG9nby10ZXh0LXNpZ24nKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBhbmltYXRlZExvZ29FbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge3JlbmRlcix9O1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy5qc1wiO1xyXG5pbXBvcnQgJy4vY29udGFjdC5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBfY3JlYXRlR29vZ2xlTWFwID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHtcclxuICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDMxODkuODI3NDkxNzU2Mjk1MyEyZC0xMjEuNzg3NzIxMjg0NzQ4ODchM2QzNi45MTgzODg3Nzk5MjQzMyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODA4ZTFhZjI4YTA0ZWViZiUzQTB4YTE1YzY1ZmUwZjgxYWFkNiEyc0NvcnJhbGl0b3MlMjBQaXp6YSE1ZTAhM20yITFzZW4hMnN1cyE0djE2NTI5MjYwMjU4NDEhNW0yITFzZW4hMnN1c1wiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCI2MDBcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjQ1MFwiLCBcclxuICAgICAgICAgICAgc3R5bGU6IFwiYm9yZGVyOjA7XCIsIFxyXG4gICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW46IFwiXCIsIFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBcImxhenlcIixcclxuICAgICAgICAgICAgcmVmZXJyZXJwb2xpY3k6IFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIixcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHJcbiAgICAgICAgLy8gTG9jYXRpb25cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbG9jYXRpb24tY29udGFpbmVyJ30sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ091ciBMb2NhdGlvbicpLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywge30sICcxMDYxIFMuIEdyZWVuIFZhbGxleSBSZC4gV2F0c29udmlsbGUgQ0EuJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgLy8gUGhvbmVcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ1Bob25lOiAoODMxKSA3MjItNzIyMCcpKTtcclxuXHJcbiAgICAgICAgLy8gR29vZ2xlIE1hcFxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUdvb2dsZU1hcCgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7cmVuZGVyLH07XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzLmpzXCI7XHJcbmltcG9ydCAnLi9mb290ZXIuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoY29weXJpZ2h0WWVhcikge1xyXG4gICAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICAgICAgY29uc3QgY3VyclllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIFBhcmFncmFwaCBlbGVtZW50IGFzIGNoaWxkIG9mIGZvb3RlclxyXG4gICAgICAgIGxldCB0ZW1wRWxlbWVudCA9IGZvb3Rlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpO1xyXG5cclxuICAgICAgICAvLyBTbWFsbCBlbGVtZW50IGFzIGNoaWxkIG9mIHBhcmFncmFwaFxyXG4gICAgICAgIHRlbXBFbGVtZW50ID0gdGVtcEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnc21hbGwnLCB7fSxcclxuICAgICAgICAgICAgJ1NvdXJjZSBDb2RlIMKpICcsXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3RpbWUnLCB7aWQ6ICdjb3B5cmlnaHQteWVhcid9LCBjdXJyWWVhciA+IGNvcHlyaWdodFllYXIgPyBgJHtjb3B5cmlnaHRZZWFyfS0ke2N1cnJZZWFyfWAgOiBjb3B5cmlnaHRZZWFyKSxcclxuICAgICAgICAgICAgJyBUb2RkIEJyZW50bGluZ2VyLCBTYW50YSBDcnV6LCBDQSwgVVNBLiBBbGwgUmlnaHRzIFJlc2VydmVkLidcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtyZW5kZXIsfTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMuanNcIjtcclxuaW1wb3J0ICcuL2dhbGxlcnkuc2Nzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5KCkge1xyXG4gICAgY29uc3QgX2ltYWdlU291cmNlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8veHNxRTAyMmpjbWxGTTh1RU5CM05nQS8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8veHNxRTAyMmpjbWxGTTh1RU5CM05nQS9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vUzhYRFJVVHpMUEIzNWJiZGlDVjVzdy8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vUzhYRFJVVHpMUEIzNWJiZGlDVjVzdy9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vbTRfZ3B0bDhrZWlrQjFkdTdqQUZrZy8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vbTRfZ3B0bDhrZWlrQjFkdTdqQUZrZy9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vXzE4YVNkcHNkNkMtZHllY0FEU1ZwZy8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vXzE4YVNkcHNkNkMtZHllY0FEU1ZwZy9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vblJpX0lEcEMwb19mdVRCa1J6WDg5QS8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vblJpX0lEcEMwb19mdVRCa1J6WDg5QS9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vWm5LajJSWk5lRUx6bDZfclRKQXR2QS8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vWm5LajJSWk5lRUx6bDZfclRKQXR2QS9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vbUpTNW1KbkdTd3JFN0ltNVJaVlE3QS8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vbUpTNW1KbkdTd3JFN0ltNVJaVlE3QS9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vQ1FaalM2Z0hFTDVxanhSOHJPRkhtdy8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vQ1FaalM2Z0hFTDVxanhSOHJPRkhtdy9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vdEp2UUJaU2JKU3VVcGlPYjh3TkpWdy8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vdEp2UUJaU2JKU3VVcGlPYjh3TkpWdy9vLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzbWFsbCc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vS3dtTkwyM1B0MXZFcGNuRnlIdGM1QS8zMDBzLmpwZycsXHJcbiAgICAgICAgICAgICdsYXJnZSc6ICdodHRwczovL3MzLW1lZGlhMC5mbC55ZWxwY2RuLmNvbS9icGhvdG8vS3dtTkwyM1B0MXZFcGNuRnlIdGM1QS9vLmpwZycsXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlRnVsbEltYWdlTW9kYWwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBjbG9zZSA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7aWQ6ICdpbWctbW9kYWwtY2xvc2UnfSk7XHJcbiAgICAgICAgY2xvc2UuaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xyXG5cclxuICAgICAgICBjb25zdCBwcmV2ID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHtpZDogJ2ltZy1tb2RhbC1wcmV2J30pO1xyXG4gICAgICAgIHByZXYuaW5uZXJIVE1MID0gJyZsc2FxdW87JztcclxuXHJcbiAgICAgICAgY29uc3QgbmV4dCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7aWQ6ICdpbWctbW9kYWwtbmV4dCd9KTtcclxuICAgICAgICBuZXh0LmlubmVySFRNTCA9ICcmcnNhcXVvOyc7XHJcblxyXG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6ICdmdWxsLWltZy1tb2RhbCd9LCBcclxuICAgICAgICAgICAgY2xvc2UsXHJcbiAgICAgICAgICAgIHByZXYsXHJcbiAgICAgICAgICAgIG5leHQsXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtpZDogJ2ltZy1tb2RhbC1jb250ZW50J30pLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6ICdpbWctbW9kYWwtY2FwdGlvbid9KVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdhbGxlcnlFbGVtZW50ID0gZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6ICdnYWxsZXJ5J30pKTtcclxuICAgICAgICBfaW1hZ2VTb3VyY2VzLmZvckVhY2goaW1nID0+IHtcclxuICAgICAgICAgICAgZ2FsbGVyeUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiAnJywgY2xhc3M6ICdnYWxsZXJ5LWl0ZW0nfSwgXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdpbWcnLCB7J3NyYyc6IGltZy5zbWFsbCwgYWx0OiAnJywgd2lkdGg6ICczMDAnLCBoZWlnaHQ6ICczMDAnfSlcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUZ1bGxJbWFnZU1vZGFsKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtyZW5kZXIsfTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMuanNcIjtcclxuaW1wb3J0IEFuaW1hdGVkTG9nb0NvbXBvbmVudCBmcm9tIFwiLi9hbmltYXRlZC1sb2dvLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgcmVuZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBMb2dvXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChBbmltYXRlZExvZ29Db21wb25lbnQoKS5yZW5kZXIoKSk7XHJcblxyXG4gICAgICAgIC8vIFRleHRcclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ0dvdXJtZXQgUGl6emEuLi4nKSk7XHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJywge30sICdXZSB1c2Ugb25seSB0aGUgYmVzdCBpbmdyZWRpZW50czogZmFybSBmcmVzaCB2ZWdldGFibGVzLCBsb2NhbGx5IGhhcnZlc3RlZCwgaGlnaCBxdWFsaXR5IG1venphcmVsbGEsIHNhdm9yeSBsb2NhbGx5IHByb2R1Y2VkIG1lYXRzLicpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7cmVuZGVyLH1cclxufSIsImltcG9ydCAnLi9tZXllci1yZXNldC5zY3NzJztcclxuaW1wb3J0ICcuL2luaXRpYWwtcGFnZS1sb2FkLnNjc3MnO1xyXG5cclxuaW1wb3J0IFRvcE5hdiBmcm9tICcuL3RvcC1uYXYuanMnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUuanMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxQYWdlTG9hZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbml0aWFsIFBhZ2UgTG9hZCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBpZiAoIWNvbnRlbnRFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgLy8gSGVhZGVyXHJcbiAgICAvL2xldCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgbGV0IHRlbXBFbGVtZW50ID0gY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaGVhZGVyJykpO1xyXG4gICAgLy8gSGVhZGVyIC0gTG9nbyBJbWFnZVxyXG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdsb2dvLWNvbnRhaW5lcid9KTtcclxuICAgIHRlbXBFbGVtZW50LmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XHJcbiAgICAvLyBIZWFkZXIgLSBUb3AgTmF2XHJcbiAgICB0ZW1wRWxlbWVudC5hcHBlbmRDaGlsZChUb3BOYXYoKS5yZW5kZXIoKSk7XHJcblxyXG4gICAgLy8gTWFpblxyXG4gICAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoSG9tZSgpLnJlbmRlcigpKTtcclxuICAgIC8vIHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgLy8gY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodGVtcEVsZW1lbnQpO1xyXG4gICAgLy8gLy8gTWFpbiAtIExvZ29cclxuICAgIC8vIHRlbXBFbGVtZW50LmFwcGVuZENoaWxkKEFuaW1hdGVkTG9nb0NvbXBvbmVudCgpLnJlbmRlcigpKTtcclxuICAgIFxyXG4gICAgLy8gRm9vdGVyXHJcbiAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChGb290ZXIoMjAyMikucmVuZGVyKCkpO1xyXG4gICAgLy8gdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIC8vIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKHRlbXBFbGVtZW50KTtcclxuICAgIC8vIC8vIEZvb3RlciAtIFRleHRcclxuICAgIC8vIHRlbXBFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ0dvdXJtZXQgUGl6emEuLi4nKSk7XHJcbiAgICAvLyB0ZW1wRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJywge30sICdXZSB1c2Ugb25seSB0aGUgYmVzdCBpbmdyZWRpZW50czogZmFybSBmcmVzaCB2ZWdldGFibGVzLCBsb2NhbGx5IGhhcnZlc3RlZCwgaGlnaCBxdWFsaXR5IG1venphcmVsbGEsIHNhdm9yeSBsb2NhbGx5IHByb2R1Y2VkIG1lYXRzLicpKTtcclxuXHJcbn0iLCJpbXBvcnQgbWVudURhdGEgZnJvbSAnLi9kYXRhL21lbnUuanNvbic7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XHJcbmltcG9ydCAnLi9tZW51LnNjc3MnO1xyXG5pbXBvcnQgTWVudUxvZ28gZnJvbSAnLi9pbWcvdGl0dWxvX21lbnUucG5nJztcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9pbWcvbG9nby5wbmcnO1xyXG5pbXBvcnQgQ3JlYXRlT3duUGl6emFMb2dvIGZyb20gJy4vaW1nL3RpdHVsb19tZW51Mi5wbmcnO1xyXG5pbXBvcnQgbWVudVBERiBmcm9tICcuL2RhdGEvbWVudS5wZGYnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcclxuICAgIGxldCBwYWdlU2VsZWN0ZWQgPSAxO1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVQaXp6YUVsZW1lbnQgPSBmdW5jdGlvbihwaXp6YU9iaiwgbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgcGl6emFFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwaXp6YS1pdGVtJ30pO1xyXG5cclxuICAgICAgICAvLyBOdW1iZXJcclxuICAgICAgICBwaXp6YUVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAncGl6emEtaXRlbS1udW1iZXInfSwgbnVtYmVyKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIE5hbWVcclxuICAgICAgICBwaXp6YUVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2gyJywgeydjbGFzcyc6ICdwaXp6YS1pdGVtLW5hbWUnfSwgcGl6emFPYmoubmFtZSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBQcmljZXNcclxuICAgICAgICBwaXp6YUVsZW1lbnQuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgIF9jcmVhdGVQaXp6YVByaWNlc0VsZW1lbnQocGl6emFPYmoucHJpY2VzKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEluZ3JlZGllbnRzXHJcbiAgICAgICAgcGl6emFFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ3BpenphLWl0ZW0taW5ncmVkaWVudHMnfSwgcGl6emFPYmouaW5ncmVkaWVudHMpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBpenphRWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZVBpenphU2l6ZVRleHRDb250ZW50ID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBzaXplT2JqID0gbWVudURhdGEucGl6emFTaXplc1tpbmRleF07XHJcbiAgICAgICAgLy8gR2V0IHVwcGVyY2FzZSBsZXR0ZXJzIG9mIHNpemUgbmFtZVxyXG4gICAgICAgIC8vIEFwcGVuZCBzaXplIHdpdGggcXVvdGF0aW9uIG1hcmsgZm9yIGluY2hlc1xyXG4gICAgICAgIHJldHVybiBgJHtzaXplT2JqLm5hbWUubWF0Y2goL15bQS1aXSsvKVswXX0ke3NpemVPYmouc2l6ZX1cImA7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVQaXp6YVByaWNlc0VsZW1lbnQgPSBmdW5jdGlvbihwcmljZXNBcnIpIHtcclxuICAgICAgICBjb25zdCBwcmljZXNFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwaXp6YS1pdGVtLXByaWNlcyd9KTtcclxuICAgICAgICBsZXQgY29udGFpbmVyLCB0ZW1wRWxlbWVudDtcclxuICAgICAgICBwcmljZXNBcnIuZm9yRWFjaCgocHJpY2UsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENvbnRhaW5lclxyXG4gICAgICAgICAgICBjb250YWluZXIgPSBwcmljZXNFbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwaXp6YS1pdGVtLXByaWNlLXNpbmdsZSd9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAvLyBTaXplXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHsnY2xhc3MnOiAncGl6emEtaXRlbS1wcmljZS1zaXplJ30sIFxyXG4gICAgICAgICAgICAgICAgICAgIF9jcmVhdGVQaXp6YVNpemVUZXh0Q29udGVudChpbmRleClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gVmFsdWVcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdwaXp6YS1pdGVtLXByaWNlLXZhbHVlJ30sIHByaWNlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcmljZXNFbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlT3duUGl6emFJbmdyZWRpZW50RWxlbWVudCA9IGZ1bmN0aW9uKGluZ3JlZGllbnRUeXBlLCBpbmdyZWRpZW50TGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnRFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdjb3AtaW5ncmVkaWVudCd9KTtcclxuICAgICAgICBpbmdyZWRpZW50RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdoMicsIHsnY2xhc3MnOiAnY29wLWluZ3JlZGllbnQtdHlwZSd9LCBpbmdyZWRpZW50VHlwZSkpO1xyXG4gICAgICAgIGluZ3JlZGllbnRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY29wLWluZ3JlZGllbnQtbGlzdCd9LCBpbmdyZWRpZW50TGlzdCkpO1xyXG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50RWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZU93blBpenphUHJpY2VzRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGNvcFByaWNlc0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2NvcC1wcmljZXMtY29udGFpbmVyJ30pO1xyXG4gICAgICAgIGNvcFByaWNlc0VsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaW1nJywgeydzcmMnOiBDcmVhdGVPd25QaXp6YUxvZ28sICdhbHQnOiAnQ3JlYXRlIG93biBwaXp6YSBsb2dvLicsICdjbGFzcyc6ICdjb3AtbG9nbyd9KSk7XHJcbiAgICAgICAgY29wUHJpY2VzRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdwJywge30sICdSZWQgU2F1Y2UgQmFzZSBhbmQgTW96emFyZWxsYSBDaGVlc2UnKSk7XHJcbiAgICAgICAgY29uc3QgY29wUHJpY2VHcmlkID0gY29wUHJpY2VzRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ2NvcC1wcmljZXMnfSkpO1xyXG4gICAgICAgIGxldCBjb3BQcmljZUdyaWRJdGVtO1xyXG4gICAgICAgIG1lbnVEYXRhLnBpenphU2l6ZXMuZm9yRWFjaChwaXp6YVNpemVPYmogPT4ge1xyXG4gICAgICAgICAgICBjb3BQcmljZUdyaWRJdGVtID0gY29wUHJpY2VHcmlkLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnY29wLXByaWNlLXNpbmdsZSd9KSk7XHJcbiAgICAgICAgICAgIGNvcFByaWNlR3JpZEl0ZW0uYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgICAgICAgICB7J2NsYXNzJzogJ2NvcC1wcmljZS1zaW5nbGUtc2l6ZSd9LCBcclxuICAgICAgICAgICAgICAgICAgICBgJHtwaXp6YVNpemVPYmoubmFtZX0gJHtwaXp6YVNpemVPYmouc2l6ZX1cImBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29wUHJpY2VHcmlkSXRlbS5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHsnY2xhc3MnOiAnY29wLXByaWNlLXNpbmdsZS12YWx1ZSd9LCBcclxuICAgICAgICAgICAgICAgICAgICBgJCR7cGl6emFTaXplT2JqLnByaWNlfWBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29wUHJpY2VHcmlkSXRlbS5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHsnY2xhc3MnOiAnY29wLXByaWNlLXNpbmdsZS1ub3RlJ30sIFxyXG4gICAgICAgICAgICAgICAgICAgIGAoQWRkICQke3BpenphU2l6ZU9iai5wcmljZUFkZFBlclRvcHBpbmd9IHBlciB0b3BwaW5nKWBcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY29wUHJpY2VzRWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZUZpcnN0UGFnZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IG1lbnVQYWdlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LXBhZ2UnfSk7XHJcblxyXG4gICAgICAgIC8vIE1lbnUgTG9nb1xyXG4gICAgICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsnc3JjJzogTWVudUxvZ28sICdhbHQnOiAnTWVudSBsb2dvLicsICdjbGFzcyc6ICdtZW51LWxvZ28nfSkpO1xyXG5cclxuICAgICAgICBsZXQgY29sdW1uID0gbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LWNvbHVtbid9KSk7XHJcblxyXG4gICAgICAgIC8vIFBpenphc1xyXG4gICAgICAgIG1lbnVEYXRhLnBpenphLmZvckVhY2goKHBpenphLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2UgdG8gbmV3IGNvbHVtbiBhZnRlciB0d2VsdmUgcGl6emEgdHlwZXNcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAxMikge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uID0gbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LWNvbHVtbid9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKF9jcmVhdGVQaXp6YUVsZW1lbnQocGl6emEsIGluZGV4ICsgMSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgT3duIFBpenphXHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKF9jcmVhdGVPd25QaXp6YVByaWNlc0VsZW1lbnQoKSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWVudURhdGEuY3JlYXRlT3duUGl6emEpKSB7XHJcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChfY3JlYXRlT3duUGl6emFJbmdyZWRpZW50RWxlbWVudChrZXksIHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWVudVBhZ2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVPdGhlckl0ZW1UeXBlRWxlbWVudCA9IGZ1bmN0aW9uKG90aGVySXRlbVR5cGUsIG90aGVySXRlbUFycikge1xyXG4gICAgICAgIGNvbnN0IG90aGVySXRlbVR5cGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdvdGhlci1pdGVtLXR5cGUnfSk7XHJcblxyXG4gICAgICAgIG90aGVySXRlbVR5cGVFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ2gyJywge30sIG90aGVySXRlbVR5cGUpKTtcclxuXHJcbiAgICAgICAgbGV0IG90aGVySXRlbUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIG90aGVySXRlbUFyci5mb3JFYWNoKG90aGVySXRlbSA9PiB7XHJcbiAgICAgICAgICAgIG90aGVySXRlbUVsZW1lbnQgPSBvdGhlckl0ZW1UeXBlRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICAgICAgICAgIHsnY2xhc3MnOiBvdGhlckl0ZW0uaGFzT3duUHJvcGVydHkoJ2luZ3JlZGllbnRzJykgPyAnb3RoZXItaXRlbS13aXRoLWluZ3JlZGllbnRzJyA6ICdvdGhlci1pdGVtJ31cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gTmFtZVxyXG4gICAgICAgICAgICBvdGhlckl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdvdGhlci1pdGVtLW5hbWUnfSwgb3RoZXJJdGVtLm5hbWUpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBQcmljZVxyXG4gICAgICAgICAgICBvdGhlckl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdvdGhlci1pdGVtLXByaWNlJ30sIGAkJHtvdGhlckl0ZW0ucHJpY2UudG9GaXhlZCgyKX1gKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gSW5ncmVkaWVudHNcclxuICAgICAgICAgICAgaWYgKG90aGVySXRlbS5oYXNPd25Qcm9wZXJ0eSgnaW5ncmVkaWVudHMnKSkge1xyXG4gICAgICAgICAgICAgICAgb3RoZXJJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ290aGVyLWl0ZW0taW5ncmVkaWVudHMnfSwgb3RoZXJJdGVtLmluZ3JlZGllbnRzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gb3RoZXJJdGVtVHlwZUVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVTZWNvbmRQYWdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbWVudVBhZ2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtcGFnZSd9KTtcclxuXHJcbiAgICAgICAgLy8gTWVudSBMb2dvXHJcbiAgICAgICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnaW1nJywgeydzcmMnOiBNZW51TG9nbywgJ2FsdCc6ICdNZW51IGxvZ28uJywgJ2NsYXNzJzogJ21lbnUtbG9nbyd9KSk7XHJcblxyXG4gICAgICAgIC8vIEZpcnN0IENvbHVtblxyXG4gICAgICAgIGxldCBjb2x1bW4gPSBtZW51UGFnZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtY29sdW1uJ30pKTtcclxuXHJcbiAgICAgICAgLy8gT3RoZXIgSXRlbXNcclxuICAgICAgICBmb3IgKGNvbnN0IFtvdGhlckl0ZW1UeXBlLCBvdGhlckl0ZW1UeXBlQXJyXSBvZiBPYmplY3QuZW50cmllcyhtZW51RGF0YS5vdGhlckl0ZW1zKSkge1xyXG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoX2NyZWF0ZU90aGVySXRlbVR5cGVFbGVtZW50KG90aGVySXRlbVR5cGUsIG90aGVySXRlbVR5cGVBcnIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdsdXRlbiBGcmVlIENydXN0XHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgeydjbGFzcyc6ICdnbHV0ZW4tZnJlZS1jcnVzdC1jb250YWluZXInfSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHsnY2xhc3MnOiAnZ2x1dGVuLWludHJvLW1zZyd9LCAnTm93IGNob29zZSB5b3VyIHBpenphIHdpdGgnKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHsnY2xhc3MnOiAnZ2x1dGVuLWludHJvLW5hbWUnfSwgJ0dsdXRlbiBGcmVlIENydXN0JyksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7J2NsYXNzJzogJ2dsdXRlbi1wcmljZSd9LCAnKioqIEV4dHJhIENvc3QgJDUuMDAgKioqJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgLy8gSG91cnNcclxuICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICB7J2NsYXNzJzogJ2hvdXJzLWNvbnRhaW5lcid9LFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywge30sICdPdXIgSG91cnMuLi4nKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnV2VcXCdyZSBvcGVuIDcgZGF5cyBhIHdlZWsnKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnU3VuZGF5IHRvIFRodXJzZGF5IDExIGFtIHRvIDk6MzAgcG0nKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnRnJpZGF5IHRvIFNhdHVyZGF5IDExIGFtIHRvIDEwOjMwIHBtJyksXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIC8vIFNlY29uZCBDb2x1bW5cclxuICAgICAgICBjb2x1bW4gPSBtZW51UGFnZS5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtY29sdW1uJ30pKTtcclxuXHJcbiAgICAgICAgLy8gTG9nb1xyXG4gICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KCdpbWcnLCB7J3NyYyc6IExvZ28sICdhbHQnOiAnQ29ycmFsaXRvcyBQaXp6YSBsb2dvLid9KSk7XHJcblxyXG4gICAgICAgIC8vIFRhZ2xpbmVcclxuICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICB7J2NsYXNzJzogJ3RhZ2xpbmUtY29udGFpbmVyJ30sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ3AnLCB7fSwgJ0dvdXJtZXQgUGl6emEuLi4nKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHt9LCAnV2UgdXNlIG9ubHkgdGhlIGJlc3QgaW5ncmVkaWVudHM6ICcpLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywge30sICdmYXJtIGZyZXNoIHZlZ2V0YWJsZXMsIGxvY2FsbHkgaGFydmVzdGVkLCBoaWdoIHF1YWxpdHkgbW96emFyZWxsYSwgc2F2b3J5IGxvY2FsbHkgcHJvZHVjZWQgbWVhdHMuJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgLy8gQWRkcmVzc1xyXG4gICAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICAgICAnZGl2JywgXHJcbiAgICAgICAgICAgIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtaXRlbSd9LFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtbWlzYy1kYXRhLWxvZ28nfSksXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtdmFsdWUnfSwgJzEwNjEgUy4gR3JlZW4gVmFsbGV5IFJkLiBXYXRzb252aWxlLCBDQSA5NTA3NicpXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIC8vIEZhY2Vib29rXHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS1pdGVtJ30sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtbG9nbyd9KSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS12YWx1ZSd9LCAnQ29ycmFsaXRvcyBQaXp6YScpXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIC8vIFBob25lXHJcbiAgICAgICAgY29sdW1uLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgICAgICdkaXYnLCBcclxuICAgICAgICAgICAgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS1pdGVtJ30sXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtbG9nbyd9KSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS12YWx1ZSd9LCAnKDgzMSkgNzIyIDcyMjAnKSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgncCcsIHsnY2xhc3MnOiAnbWVudS1taXNjLWRhdGEtbm90ZSd9LCAnQ2FsbCBmb3IgY2Fycnkgb3V0IG9yIHNhZmUgZGVsaXZlcnkgd2UgZGVsaXZlciB0byBBcHRvcywgRnJlZWRvbSwgV2F0c29udmlsbGUsIFNhbiBBbmRyZWFzLCBDb3JyYWxpdG9zLCBMYXJraW4gVmFsbGV5LicpXHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgICAgIC8vIFdlYnNpdGVcclxuICAgICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgJ2RpdicsIFxyXG4gICAgICAgICAgICB7J2NsYXNzJzogJ21lbnUtbWlzYy1kYXRhLWl0ZW0nfSxcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnZGl2JywgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS1sb2dvJ30pLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdkaXYnLCB7J2NsYXNzJzogJ21lbnUtbWlzYy1kYXRhLXZhbHVlJ30sICdWaXNpdCBvdXQgd2Vic2l0ZScpLFxyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdwJywgeydjbGFzcyc6ICdtZW51LW1pc2MtZGF0YS1ub3RlJ30sICd3d3cuY29ycmFsaXRvc3BpenphZGVsaXZlcnkuY29tJylcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lbnVQYWdlO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlTWVudVBhZ2VCdXR0b25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiAnbWVudS1wYWdlLWJ0bi1jb250YWluZXInfSk7XHJcblxyXG4gICAgICAgIC8vIFBhZ2UgMVxyXG4gICAgICAgIGxldCBidG4gPSBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge30sICdQYWdlIDEnKSk7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwYWdlU2VsZWN0ZWQgPSAxO1xyXG4gICAgICAgICAgICBfdXBkYXRlTWVudSgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAvLyBQYWdlIDJcclxuICAgICAgICBidG4gPSBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge30sICdQYWdlIDInKSk7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwYWdlU2VsZWN0ZWQgPSAyO1xyXG4gICAgICAgICAgICBfdXBkYXRlTWVudSgpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgICAgICAvLyBQREZcclxuICAgICAgICBidG4gPSBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge30sICdQREYnKSk7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBidG5Db250YWluZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF91cGRhdGVNZW51ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXBhZ2UnKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKHBhZ2VTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKF9jcmVhdGVTZWNvbmRQYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IC8vIFNob3cgZmlyc3QgcGFnZSBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlcGxhY2VXaXRoKF9jcmVhdGVGaXJzdFBhZ2UoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cclxuICAgICAgICAvLyBNZW51IFBhZ2UgQnV0dG9uc1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZU1lbnVQYWdlQnV0dG9ucygpKTtcclxuXHJcbiAgICAgICAgLy8gTWVudSBQYWdlXHJcbiAgICAgICAgc3dpdGNoKHBhZ2VTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKF9jcmVhdGVTZWNvbmRQYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IC8vIFNob3cgZmlyc3QgcGFnZSBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKF9jcmVhdGVGaXJzdFBhZ2UoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge3JlbmRlcix9O1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy5qc1wiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuL2dhbGxlcnkuanNcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcbmltcG9ydCAnLi90b3AtbmF2LnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wTmF2KCkge1xyXG4gICAgY29uc3QgX2NyZWF0ZU5hdkFuY2hvciA9IGZ1bmN0aW9uKHRleHRDb250ZW50LCBocmVmID0gJycsIGJJc0FjdGl2ZVRhYiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgYW5jaG9yRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7J2hyZWYnOiBocmVmfSwgY3JlYXRlRWxlbWVudCgnc3BhbicsIHt9LCB0ZXh0Q29udGVudCkpO1xyXG5cclxuICAgICAgICBpZiAoYklzQWN0aXZlVGFiKVxyXG4gICAgICAgICAgICBhbmNob3JFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFuY2hvckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBfaGFuZGxlTmF2SXRlbUNsaWNrKGUsIHRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsnY2xhc3MnOiAnbmF2LWxpbmstY29udGFpbmVyJ30sIGFuY2hvckVsZW1lbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY2xlYXJNYWluID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICAgICAgd2hpbGUgKG1haW5FbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgbWFpbkVsZW1lbnQucmVtb3ZlQ2hpbGQobWFpbkVsZW1lbnQuZmlyc3RDaGlsZClcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9yZW1vdmVBY3RpdmVDbGFzc0Zyb21UYWJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3RvcG5hdiBhJykuZm9yRWFjaChcclxuICAgICAgICAgICAgdGFiID0+IHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9oYW5kbGVOYXZJdGVtQ2xpY2sgPSBmdW5jdGlvbihlLCB0eXBlKSB7XHJcbiAgICAgICAgc3dpdGNoKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnaG9tZSc6XHJcbiAgICAgICAgICAgICAgICBfcmVtb3ZlQWN0aXZlQ2xhc3NGcm9tVGFicygpO1xyXG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgX2NsZWFyTWFpbigpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLnJlcGxhY2VXaXRoKEhvbWUoKS5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ2FsbGVyeSc6XHJcbiAgICAgICAgICAgICAgICBfcmVtb3ZlQWN0aXZlQ2xhc3NGcm9tVGFicygpO1xyXG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgX2NsZWFyTWFpbigpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLnJlcGxhY2VXaXRoKEdhbGxlcnkoKS5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWVudSc6XHJcbiAgICAgICAgICAgICAgICBfcmVtb3ZlQWN0aXZlQ2xhc3NGcm9tVGFicygpO1xyXG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgX2NsZWFyTWFpbigpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLnJlcGxhY2VXaXRoKE1lbnUoKS5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY29udGFjdCc6XHJcbiAgICAgICAgICAgICAgICBfcmVtb3ZlQWN0aXZlQ2xhc3NGcm9tVGFicygpO1xyXG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgX2NsZWFyTWFpbigpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLnJlcGxhY2VXaXRoKENvbnRhY3QoKS5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCByZW5kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCB0YWJFbGVtZW50cyA9IFtcclxuICAgICAgICAgICAgX2NyZWF0ZU5hdkFuY2hvcignSG9tZScsICcnLCB0cnVlKSxcclxuICAgICAgICAgICAgX2NyZWF0ZU5hdkFuY2hvcignR2FsbGVyeScpLFxyXG4gICAgICAgICAgICBfY3JlYXRlTmF2QW5jaG9yKCdNZW51JyksXHJcbiAgICAgICAgICAgIF9jcmVhdGVOYXZBbmNob3IoJ0NvbnRhY3QnKSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCB0b3BOYXZFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAgICAgJ25hdicsIFxyXG4gICAgICAgICAgICB7aWQ6ICd0b3BuYXYnfSxcclxuICAgICAgICAgICAgLi4udGFiRWxlbWVudHNcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gdG9wTmF2RWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtyZW5kZXIsfVxyXG59IiwiLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAtIEVsZW1lbnQgdHlwZVxyXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBFbGVtZW50IGF0dHJpYnV0ZSBuYW1lcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyB2YWx1ZSBcclxuICogQHBhcmFtICB7Li4uTm9kZX0gY2hpbGRyZW4gLSBWYXJpYWJsZSBudW1iZXIgb2YgY2hpbGQgbm9kZXMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBwcm9wcyA9IHt9LCAuLi5jaGlsZHJlbikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcblxyXG4gICAgLy8gUHJvcHNcclxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENoaWxkcmVuIE5vZGVzXHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGVsZW1lbnQuYXBwZW5kKGNoaWxkKSk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tICcuL2luaXRpYWwtcGFnZS1sb2FkLmpzJztcclxuLy9pbXBvcnQgQW5pbWF0ZWRMb2dvQ29tcG9uZW50IGZyb20gJy4vYW5pbWF0ZWQtbG9nby5qcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuICAgIC8vcmV0dXJuIEFuaW1hdGVkTG9nb0NvbXBvbmVudCgpLnJlbmRlcigpO1xyXG4gICAgcmV0dXJuIGluaXRpYWxQYWdlTG9hZCgpO1xyXG59XHJcblxyXG4vL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG5pbml0aWFsUGFnZUxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=