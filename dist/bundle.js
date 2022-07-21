/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgb(27, 27, 27);\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.score {\r\n    color: white;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 5vw;\r\n}\r\n\r\n.header {\r\n    font-family: 'Lobster', cursive;\r\n    color: white;\r\n    font-size: 10vw;\r\n    margin: 1rem  0 0 0;\r\n}\r\n\r\n.grid {\r\n    position: relative;\r\n    height: 90vw;\r\n    width: 90vw;\r\n    background-color: rgb(48, 48, 48);\r\n    border-radius: 3%;\r\n    margin: 0.5rem 1rem;\r\n    display: grid;\r\n    grid-template: repeat(20, 1fr) / repeat(20, 1fr);\r\n    gap: 1px;\r\n    padding: 2%;\r\n    max-width: 600px;\r\n    max-height: 600px;\r\n}\r\n\r\n.cell {\r\n    background-color: rgb(32, 32, 32);\r\n    border-radius: 2px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.snake-cell {\r\n    background-color: rgb(87, 175, 53);\r\n    box-sizing: border-box;\r\n    border-radius: 2px;\r\n    height: 80%;\r\n    width: 80%;\r\n}\r\n\r\n.food-cell {\r\n    background-color: red;\r\n    box-sizing: border-box;\r\n    border-radius: 2px;\r\n    height: 80%;\r\n    width: 80%;\r\n}\r\n\r\n.game-over-bg {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.842);\r\n    z-index: 2;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.game-over-splash{\r\n    color: white;\r\n    background-color: rgb(49, 49, 49);\r\n    border-radius: 20px;\r\n    border: 5px solid gray;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 80%;\r\n    max-width: 500px;\r\n    height: 50%;\r\n    font-size: 5vw;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n.restart {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    width: 50%;\r\n    height: 20%;\r\n    font-weight: bold;\r\n    font-size: 5vw;\r\n    background-color: darkgray;\r\n    border-radius: 20px;\r\n    border: 3px solid rgb(20, 20, 20);\r\n    cursor: pointer;\r\n}\r\n\r\n.game-over-splash h1 {\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 10vw;\r\n}\r\n\r\n.control-board {\r\n    height: 20%;\r\n    width: 40vw;\r\n    background-color: rgb(48, 48, 48);\r\n    border-radius: 20px;\r\n    margin: 0.5rem 1rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr; \r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    grid-template-areas: \r\n    \"none up none\"\r\n    \"left none right\"\r\n    \"none down none\";\r\n    padding: 2%;\r\n    max-width: 600px;\r\n    max-height: 600px;\r\n}\r\n\r\n.control-button {\r\n    background-color: rgb(110, 110, 110);\r\n    border: none;\r\n    border-radius: 10px;\r\n}\r\n\r\n.control-button:active {\r\n    background-color: white;\r\n}\r\n\r\n.button-up {\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n}\r\n\r\n.button-left {\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n}\r\n.button-right {\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n}\r\n.button-down {\r\n    grid-column-start: 2;\r\n    grid-column-end:3;\r\n}\r\n\r\n.footer {\r\n    margin-top: auto;\r\n    color: white;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n@media screen and (min-width: 700px){\r\n    .score{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .header {\r\n        font-size: 3.5rem;\r\n    }\r\n\r\n    .game-over-splash h1 {\r\n        font-size: 5rem;\r\n    }\r\n\r\n    .game-over-splash{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .restart{\r\n        font-size: 2rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,YAAY;IACZ,iCAAiC;IACjC,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,8CAA8C;IAC9C,cAAc;AAClB;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,iCAAiC;IACjC,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,gDAAgD;IAChD,QAAQ;IACR,WAAW;IACX,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,gBAAgB;IAChB,WAAW;IACX,cAAc;IACd,8CAA8C;AAClD;;AAEA;IACI,8CAA8C;IAC9C,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,cAAc;IACd,0BAA0B;IAC1B,mBAAmB;IACnB,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,iCAAiC;IACjC,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,kCAAkC;IAClC,+BAA+B;IAC/B;;;oBAGgB;IAChB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,8CAA8C;AAClD;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\n\r\nbody {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgb(27, 27, 27);\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.score {\r\n    color: white;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 5vw;\r\n}\r\n\r\n.header {\r\n    font-family: 'Lobster', cursive;\r\n    color: white;\r\n    font-size: 10vw;\r\n    margin: 1rem  0 0 0;\r\n}\r\n\r\n.grid {\r\n    position: relative;\r\n    height: 90vw;\r\n    width: 90vw;\r\n    background-color: rgb(48, 48, 48);\r\n    border-radius: 3%;\r\n    margin: 0.5rem 1rem;\r\n    display: grid;\r\n    grid-template: repeat(20, 1fr) / repeat(20, 1fr);\r\n    gap: 1px;\r\n    padding: 2%;\r\n    max-width: 600px;\r\n    max-height: 600px;\r\n}\r\n\r\n.cell {\r\n    background-color: rgb(32, 32, 32);\r\n    border-radius: 2px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.snake-cell {\r\n    background-color: rgb(87, 175, 53);\r\n    box-sizing: border-box;\r\n    border-radius: 2px;\r\n    height: 80%;\r\n    width: 80%;\r\n}\r\n\r\n.food-cell {\r\n    background-color: red;\r\n    box-sizing: border-box;\r\n    border-radius: 2px;\r\n    height: 80%;\r\n    width: 80%;\r\n}\r\n\r\n.game-over-bg {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.842);\r\n    z-index: 2;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.game-over-splash{\r\n    color: white;\r\n    background-color: rgb(49, 49, 49);\r\n    border-radius: 20px;\r\n    border: 5px solid gray;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 80%;\r\n    max-width: 500px;\r\n    height: 50%;\r\n    font-size: 5vw;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n.restart {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    width: 50%;\r\n    height: 20%;\r\n    font-weight: bold;\r\n    font-size: 5vw;\r\n    background-color: darkgray;\r\n    border-radius: 20px;\r\n    border: 3px solid rgb(20, 20, 20);\r\n    cursor: pointer;\r\n}\r\n\r\n.game-over-splash h1 {\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 10vw;\r\n}\r\n\r\n.control-board {\r\n    height: 20%;\r\n    width: 40vw;\r\n    background-color: rgb(48, 48, 48);\r\n    border-radius: 20px;\r\n    margin: 0.5rem 1rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr; \r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    grid-template-areas: \r\n    \"none up none\"\r\n    \"left none right\"\r\n    \"none down none\";\r\n    padding: 2%;\r\n    max-width: 600px;\r\n    max-height: 600px;\r\n}\r\n\r\n.control-button {\r\n    background-color: rgb(110, 110, 110);\r\n    border: none;\r\n    border-radius: 10px;\r\n}\r\n\r\n.control-button:active {\r\n    background-color: white;\r\n}\r\n\r\n.button-up {\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n}\r\n\r\n.button-left {\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n}\r\n.button-right {\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n}\r\n.button-down {\r\n    grid-column-start: 2;\r\n    grid-column-end:3;\r\n}\r\n\r\n.footer {\r\n    margin-top: auto;\r\n    color: white;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n@media screen and (min-width: 700px){\r\n    .score{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .header {\r\n        font-size: 3.5rem;\r\n    }\r\n\r\n    .game-over-splash h1 {\r\n        font-size: 5rem;\r\n    }\r\n\r\n    .game-over-splash{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .restart{\r\n        font-size: 2rem;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/ControlListener.js":
/*!********************************!*\
  !*** ./src/ControlListener.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlListener": () => (/* binding */ ControlListener)
/* harmony export */ });
class ControlListener {

    constructor(snake) {
        this.#snake = snake;
        this.#snakeDirectionListener();
        this.#controlBoard = this.#createControlBoard();
    }

    #snake;
    #controlBoard;
    #controls = {
        'ArrowLeft': 'left',
        'ArrowRight': 'right',
        'ArrowUp': 'up',
        'ArrowDown': 'down'
    };

    #createControlBoard(){
        let board = document.createElement('div');
        board.classList.add('control-board');

        let buttonUp = document.createElement('button');
        buttonUp.classList.add('control-button', 'button-up');
        let buttonLeft = document.createElement('button');
        buttonLeft.classList.add('control-button', 'button-left');
        let buttonRight = document.createElement('button');
        buttonRight.classList.add('control-button', 'button-right');
        let buttonDown = document.createElement('button');
        buttonDown.classList.add('control-button', 'button-down');

        buttonUp.addEventListener('click', () => {
            this.#changeDirection('up');
            console.log(this.#snake.drivingDirection);
        });
        buttonDown.addEventListener('click', () => this.#changeDirection('down'));
        buttonLeft.addEventListener('click', () => this.#changeDirection('left'));
        buttonRight.addEventListener('click', () => this.#changeDirection('right'));

        board.appendChild(buttonUp);
        board.appendChild(buttonLeft);
        board.appendChild(buttonRight);
        board.appendChild(buttonDown);

        return board;
    }

    #changeDirection(direction){
        this.#snake.drivingDirection = direction;
    }

    #snakeDirectionListener(direction) {

        document.addEventListener('keydown', event => {
            if (event.key in this.#controls) {
                this.#snake.drivingDirection = this.#controls[`${ event.key }`];
            }
        });

    }

    get controlBoard(){
        return this.#controlBoard;
    }

}

/***/ }),

/***/ "./src/Food.js":
/*!*********************!*\
  !*** ./src/Food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Food": () => (/* binding */ Food)
/* harmony export */ });
class Food {

    constructor() {
        this.#setPosition();
    }

    #xPos;
    #yPos;

    #setPosition() {

        let x;
        let y;
        let cellToCheckForElement;

        do {
            x = this.#getRandomInt(0, 20);
            y = this.#getRandomInt(0, 20);

            cellToCheckForElement = document.body.querySelector(`[data-row="${ y }"][data-col="${ x }"]`);
        } while (cellToCheckForElement && cellToCheckForElement.hasChildNodes());
        
        this.#xPos = x;
        this.#yPos = y;
    }

    #getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
        //The maximum is exclusive and the minimum is inclusive
    }

    get pos() {

        return {
            x: this.#xPos,
            y: this.#yPos
        };

    }

    get foodCellElement() {

        let element = document.createElement('div');
        element.classList.add('food-cell');
        return element;

    }
}

/***/ }),

/***/ "./src/Screen.js":
/*!***********************!*\
  !*** ./src/Screen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen": () => (/* binding */ Screen)
/* harmony export */ });
class Screen {

    constructor() {
        this.#grid = this.#generateGrid();
    }

    #width = 20;
    #height = 20;
    #grid;

    #generateGrid() {

        const grid = document.createElement('div');
        grid.classList.add('grid');

        for (let row = 0; row < this.#height; row++) {
            for (let col = 0; col < this.#width; col++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.setAttribute('data-row', row);
                cell.setAttribute('data-col', col);
                grid.appendChild(cell);
            }
        }
        return grid;
    }


    #clearGrid() {
        const gridCells = document.body.querySelectorAll('.cell');
        for (let cell of gridCells) {
            cell.textContent = '';
        }
    }

    render(gameElements) {

        this.#clearGrid();

        let cellToRender;
        gameElements.forEach(element => {
            
            if (element.constructor.name === 'Snake') {
                for (const cell of element.body) {
                    cellToRender = document.body.querySelector(`[data-row="${ cell.y }"][data-col="${ cell.x }"]`);
                    cellToRender.appendChild(element.bodyCellElement);
                }
            } else if (element.constructor.name === 'Food') {
                cellToRender = document.body.querySelector(`[data-row="${ element.pos.y }"][data-col="${ element.pos.x }"]`);
                cellToRender.appendChild(element.foodCellElement);
                return;
            }
        });


    }

    get screenElement() {
        return this.#grid;
    }
}



/***/ }),

/***/ "./src/Snake.js":
/*!**********************!*\
  !*** ./src/Snake.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Snake": () => (/* binding */ Snake)
/* harmony export */ });
class Snake {

    #body = [
        { x: 9, y: 9 },
    ];

    #directionOffset = {
        up: { col: 0, row: -1 },
        down: { col: 0, row: 1 },
        left: { col: -1, row: 0 },
        right: { col: 1, row: 0 }
    };

    #drivingDirection;
    #xHead = this.#body[0].x;
    #yHead = this.#body[0].y;

    #addLeadCell() {

        this.#body.unshift({
            x: this.#xHead + this.#directionOffset[`${ this.#drivingDirection }`].col,
            y: this.#yHead + this.#directionOffset[`${ this.#drivingDirection }`].row
        });

        //update the latest head position
        this.#xHead = this.#body[0].x;
        this.#yHead = this.#body[0].y;

    }

    #removeLastCell() {

        this.#body.pop();

    }

    #checkOppositeDirection(direction) {

        let opposites = {
            'up': 'down',
            'down': 'up',
            'left': 'right',
            'right': 'left'
        };

        if (opposites[`${ direction }`] === this.#drivingDirection) {
            return true;
        } else {
            return false;
        };

    }

    move() {
        //add one cell forward and remove trailing cell
        this.#addLeadCell();
        this.#removeLastCell();
    }

    grow() {
        this.#addLeadCell();
    }

    hitWall() {

        if (this.#xHead === 0 ||
            this.#xHead === 19 ||
            this.#yHead === 0 ||
            this.#yHead === 19) {
            return true;
        } else {
            return false;
        };

    }

    get bodyCellElement() {

        let element = document.createElement('div');
        element.classList.add('snake-cell');
        return element;

    }

    get nextPos() {

        return {
            x: this.#xHead + this.#directionOffset[`${ this.#drivingDirection }`].col,
            y: this.#yHead + this.#directionOffset[`${ this.#drivingDirection }`].row
        };

    }

    get body() {

        return this.#body;

    }

    set drivingDirection(newDirection) {

        if (newDirection === this.#drivingDirection ||
            this.#checkOppositeDirection(newDirection)) {
            return;
        }

        this.#drivingDirection = newDirection;
    }

}

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screen */ "./src/Screen.js");
/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Snake */ "./src/Snake.js");
/* harmony import */ var _ControlListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ControlListener */ "./src/ControlListener.js");
/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Food */ "./src/Food.js");






let screen = new _Screen__WEBPACK_IMPORTED_MODULE_1__.Screen();
let snake = new _Snake__WEBPACK_IMPORTED_MODULE_2__.Snake();
let renderElements = [snake, new _Food__WEBPACK_IMPORTED_MODULE_4__.Food()];
let controlListener = new _ControlListener__WEBPACK_IMPORTED_MODULE_3__.ControlListener(snake);

let score = 0;
const TIME_REDUCE_STEP = 2;
const BASE_SPEED = 200;
let gameSpeed = BASE_SPEED;
let gameUpdateInterval;

let headerElement = header();
let scoreBoardElement = scoreBoard();
let screenElement = screen.screenElement;
let gameOverSplashElement = gameOverSplash(score);
let controlBoardElement = controlListener.controlBoard;

let footer = document.createElement('footer');
footer.innerHTML = `
Coded by <a href="https://github.com/mv805">Matt Villa</a>. All rights reserved. V.1.0.0
`;
footer.classList.add('footer');

const controls = {
    'ArrowLeft': 'left',
    'ArrowRight': 'right',
    'ArrowUp': 'up',
    'ArrowDown': 'down'
};

//initial setup
document.body.appendChild(headerElement);
document.body.appendChild(screenElement);
document.body.appendChild(scoreBoardElement);
document.body.appendChild(controlBoardElement);
document.body.appendChild(footer);

screen.render(renderElements);
document.addEventListener('keydown', start);

let controlButtons = document.querySelectorAll('.control-button');
controlButtons.forEach(button => {
    button.addEventListener('click', start);
});

function scoreBoard() {
    let scoreBoard = document.createElement('div');
    scoreBoard.textContent = `Score: ${ score }`;
    scoreBoard.classList.add('score');

    return scoreBoard;
}

function header() {
    let header = document.createElement('h1');
    header.textContent = 'Snake!';
    header.classList.add('header');

    return header;
}

function gameOverSplash(score) {

    let gameOverSplashBackground = document.createElement('div');
    gameOverSplashBackground.classList.add('game-over-bg');
    let gameOverSplash = document.createElement('div');
    gameOverSplash.classList.add('game-over-splash');


    let gameOverHeader = document.createElement('h1');
    gameOverHeader.textContent = 'Game Over!';
    let gameOverScore = document.createElement('p');
    gameOverScore.textContent = `Score: ${ score }`;
    let restartButton = document.createElement('button');
    restartButton.classList.add('restart');
    restartButton.textContent = 'Restart';
    restartButton.addEventListener('click', restartGame);

    gameOverSplash.appendChild(gameOverHeader);
    gameOverSplash.appendChild(gameOverScore);
    gameOverSplash.appendChild(restartButton);
    gameOverSplashBackground.appendChild(gameOverSplash);

    return gameOverSplashBackground;

}

function start(e) {

    if (controls[`${ e.key }`]) {
        gameUpdateInterval = setInterval(update, gameSpeed);
        removeStartListeners();
    } else if (e.target.localName === 'button') {
        gameUpdateInterval = setInterval(update, gameSpeed);
        removeStartListeners();
    }

    function removeStartListeners(params) {
        document.removeEventListener('keydown', start);
        controlButtons.forEach(button => {
            button.removeEventListener('click', start);
        });
    }

}

function restartGame() {

    document.body.removeChild(headerElement);
    document.body.removeChild(screenElement);
    document.body.removeChild(scoreBoardElement);
    document.body.removeChild(controlBoardElement);
    document.body.removeChild(gameOverSplashElement);
    document.body.removeChild(footer);

    screen = new _Screen__WEBPACK_IMPORTED_MODULE_1__.Screen();
    snake = new _Snake__WEBPACK_IMPORTED_MODULE_2__.Snake();
    renderElements = [snake, new _Food__WEBPACK_IMPORTED_MODULE_4__.Food()];
    controlListener = new _ControlListener__WEBPACK_IMPORTED_MODULE_3__.ControlListener(snake);
    controlBoardElement = controlListener.controlBoard;

    gameSpeed=BASE_SPEED;
    score = 0;

    document.body.appendChild(headerElement);
    document.body.appendChild(screenElement);
    document.body.appendChild(scoreBoardElement);
    document.body.appendChild(controlBoardElement);
    document.body.appendChild(footer);

    screen.render(renderElements);

    document.addEventListener('keydown', start);
    controlButtons = document.querySelectorAll('.control-button');
    console.log(controlButtons);
    controlButtons.forEach(button => {
        button.addEventListener('click', start);
    });
}

function update() {

    switch (checkCollision(snake)) {
        case 'WALL':
            clearInterval(gameUpdateInterval);
            console.log('hit wall');
            gameOverSplashElement = gameOverSplash(score);
            document.body.appendChild(gameOverSplashElement);
            break;
        case 'SELF':
            clearInterval(gameUpdateInterval);
            console.log('hit self');
            gameOverSplashElement = gameOverSplash(score);
            document.body.appendChild(gameOverSplashElement);
            break;
        case 'FOOD':
            console.log('ate food');
            renderElements[1] = new _Food__WEBPACK_IMPORTED_MODULE_4__.Food();
            gameSpeed -= TIME_REDUCE_STEP;
            scoreBoardElement.textContent = `Score: ${ ++score }`;
            clearInterval(gameUpdateInterval);
            gameUpdateInterval = setInterval(update, gameSpeed);
            snake.grow();
            break;
        case 'CLEAR':
            snake.move();
            break;

        default:
            break;
    }

    screen.render(renderElements);

}

function checkCollision(snake) {

    let nextCell = document.body.querySelector(`[data-row="${ snake.nextPos.y }"][data-col="${ snake.nextPos.x }"]`);

    if (!nextCell && snake.hitWall()) {
        return 'WALL';
    } else if (nextCell.children[0] === undefined) {
        return 'CLEAR';
    } else if (nextCell.children[0].className === 'snake-cell') {
        return 'SELF';
    } else if (nextCell.children[0].className === 'food-cell') {
        return 'FOOD';
    }
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJDQUFNO0FBQ3ZCLGdCQUFnQix5Q0FBSztBQUNyQixpQ0FBaUMsdUNBQUk7QUFDckMsMEJBQTBCLDZEQUFlO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1Q0FBSTtBQUN4QztBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxpQkFBaUIsZ0JBQWdCLGlCQUFpQjtBQUNoSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9zcmMvQ29udHJvbExpc3RlbmVyLmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9zcmMvRm9vZC5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vc3JjL1NjcmVlbi5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vc3JjL1NuYWtlLmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NuYWtlLWdhbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMjcsIDI3KTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY29yZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiA1dnc7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTB2dztcXHJcXG4gICAgbWFyZ2luOiAxcmVtICAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogOTB2dztcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDgsIDQ4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMyU7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtIDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyMCwgMWZyKSAvIHJlcGVhdCgyMCwgMWZyKTtcXHJcXG4gICAgZ2FwOiAxcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zbmFrZS1jZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxNzUsIDUzKTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtY2VsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtb3Zlci1iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQyKTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXItc3BsYXNoe1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JheTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICBmb250LXNpemU6IDV2dztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhcnQge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDIwLCAyMCwgMjApO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXItc3BsYXNoIGgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbC1ib2FyZCB7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OCwgNDgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJub25lIHVwIG5vbmVcXFwiXFxyXFxuICAgIFxcXCJsZWZ0IG5vbmUgcmlnaHRcXFwiXFxyXFxuICAgIFxcXCJub25lIGRvd24gbm9uZVxcXCI7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRyb2wtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMCwgMTEwLCAxMTApO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250cm9sLWJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi11cCB7XFxyXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tbGVmdCB7XFxyXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxyXFxufVxcclxcbi5idXR0b24tcmlnaHQge1xcclxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcclxcbn1cXHJcXG4uYnV0dG9uLWRvd24ge1xcclxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOjM7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCl7XFxyXFxuICAgIC5zY29yZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5nYW1lLW92ZXItc3BsYXNoIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZ2FtZS1vdmVyLXNwbGFzaHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmVzdGFydHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4Q0FBOEM7SUFDOUMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnREFBZ0Q7SUFDaEQsUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9COzs7b0JBR2dCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNywgMjcsIDI3KTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY29yZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiA1dnc7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTB2dztcXHJcXG4gICAgbWFyZ2luOiAxcmVtICAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogOTB2dztcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDgsIDQ4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMyU7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtIDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyMCwgMWZyKSAvIHJlcGVhdCgyMCwgMWZyKTtcXHJcXG4gICAgZ2FwOiAxcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDMyLCAzMik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zbmFrZS1jZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxNzUsIDUzKTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb2QtY2VsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtb3Zlci1iZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQyKTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXItc3BsYXNoe1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgZ3JheTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICBmb250LXNpemU6IDV2dztcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3RhcnQge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDIwLCAyMCwgMjApO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXItc3BsYXNoIGgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbC1ib2FyZCB7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OCwgNDgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyBcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJub25lIHVwIG5vbmVcXFwiXFxyXFxuICAgIFxcXCJsZWZ0IG5vbmUgcmlnaHRcXFwiXFxyXFxuICAgIFxcXCJub25lIGRvd24gbm9uZVxcXCI7XFxyXFxuICAgIHBhZGRpbmc6IDIlO1xcclxcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRyb2wtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMCwgMTEwLCAxMTApO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250cm9sLWJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi11cCB7XFxyXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tbGVmdCB7XFxyXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxyXFxufVxcclxcbi5idXR0b24tcmlnaHQge1xcclxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiA0O1xcclxcbn1cXHJcXG4uYnV0dG9uLWRvd24ge1xcclxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOjM7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCl7XFxyXFxuICAgIC5zY29yZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5nYW1lLW92ZXItc3BsYXNoIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZ2FtZS1vdmVyLXNwbGFzaHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmVzdGFydHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjbGFzcyBDb250cm9sTGlzdGVuZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNuYWtlKSB7XHJcbiAgICAgICAgdGhpcy4jc25ha2UgPSBzbmFrZTtcclxuICAgICAgICB0aGlzLiNzbmFrZURpcmVjdGlvbkxpc3RlbmVyKCk7XHJcbiAgICAgICAgdGhpcy4jY29udHJvbEJvYXJkID0gdGhpcy4jY3JlYXRlQ29udHJvbEJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3NuYWtlO1xyXG4gICAgI2NvbnRyb2xCb2FyZDtcclxuICAgICNjb250cm9scyA9IHtcclxuICAgICAgICAnQXJyb3dMZWZ0JzogJ2xlZnQnLFxyXG4gICAgICAgICdBcnJvd1JpZ2h0JzogJ3JpZ2h0JyxcclxuICAgICAgICAnQXJyb3dVcCc6ICd1cCcsXHJcbiAgICAgICAgJ0Fycm93RG93bic6ICdkb3duJ1xyXG4gICAgfTtcclxuXHJcbiAgICAjY3JlYXRlQ29udHJvbEJvYXJkKCl7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnY29udHJvbC1ib2FyZCcpO1xyXG5cclxuICAgICAgICBsZXQgYnV0dG9uVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b25VcC5jbGFzc0xpc3QuYWRkKCdjb250cm9sLWJ1dHRvbicsICdidXR0b24tdXAnKTtcclxuICAgICAgICBsZXQgYnV0dG9uTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbkxlZnQuY2xhc3NMaXN0LmFkZCgnY29udHJvbC1idXR0b24nLCAnYnV0dG9uLWxlZnQnKTtcclxuICAgICAgICBsZXQgYnV0dG9uUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b25SaWdodC5jbGFzc0xpc3QuYWRkKCdjb250cm9sLWJ1dHRvbicsICdidXR0b24tcmlnaHQnKTtcclxuICAgICAgICBsZXQgYnV0dG9uRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbkRvd24uY2xhc3NMaXN0LmFkZCgnY29udHJvbC1idXR0b24nLCAnYnV0dG9uLWRvd24nKTtcclxuXHJcbiAgICAgICAgYnV0dG9uVXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuI2NoYW5nZURpcmVjdGlvbigndXAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4jc25ha2UuZHJpdmluZ0RpcmVjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnV0dG9uRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuI2NoYW5nZURpcmVjdGlvbignZG93bicpKTtcclxuICAgICAgICBidXR0b25MZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy4jY2hhbmdlRGlyZWN0aW9uKCdsZWZ0JykpO1xyXG4gICAgICAgIGJ1dHRvblJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy4jY2hhbmdlRGlyZWN0aW9uKCdyaWdodCcpKTtcclxuXHJcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYnV0dG9uVXApO1xyXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGJ1dHRvbkxlZnQpO1xyXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGJ1dHRvblJpZ2h0KTtcclxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChidXR0b25Eb3duKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgICNjaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uKXtcclxuICAgICAgICB0aGlzLiNzbmFrZS5kcml2aW5nRGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgICNzbmFrZURpcmVjdGlvbkxpc3RlbmVyKGRpcmVjdGlvbikge1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5IGluIHRoaXMuI2NvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNzbmFrZS5kcml2aW5nRGlyZWN0aW9uID0gdGhpcy4jY29udHJvbHNbYCR7IGV2ZW50LmtleSB9YF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbnRyb2xCb2FyZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNjb250cm9sQm9hcmQ7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIEZvb2Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI3NldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3hQb3M7XHJcbiAgICAjeVBvcztcclxuXHJcbiAgICAjc2V0UG9zaXRpb24oKSB7XHJcblxyXG4gICAgICAgIGxldCB4O1xyXG4gICAgICAgIGxldCB5O1xyXG4gICAgICAgIGxldCBjZWxsVG9DaGVja0ZvckVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeCA9IHRoaXMuI2dldFJhbmRvbUludCgwLCAyMCk7XHJcbiAgICAgICAgICAgIHkgPSB0aGlzLiNnZXRSYW5kb21JbnQoMCwgMjApO1xyXG5cclxuICAgICAgICAgICAgY2VsbFRvQ2hlY2tGb3JFbGVtZW50ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIkeyB5IH1cIl1bZGF0YS1jb2w9XCIkeyB4IH1cIl1gKTtcclxuICAgICAgICB9IHdoaWxlIChjZWxsVG9DaGVja0ZvckVsZW1lbnQgJiYgY2VsbFRvQ2hlY2tGb3JFbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy4jeFBvcyA9IHg7XHJcbiAgICAgICAgdGhpcy4jeVBvcyA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgI2dldFJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gICAgICAgIC8vVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcG9zKCkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLiN4UG9zLFxyXG4gICAgICAgICAgICB5OiB0aGlzLiN5UG9zXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZvb2RDZWxsRWxlbWVudCgpIHtcclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb2QtY2VsbCcpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY3JlZW4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuI2dyaWQgPSB0aGlzLiNnZW5lcmF0ZUdyaWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAjd2lkdGggPSAyMDtcclxuICAgICNoZWlnaHQgPSAyMDtcclxuICAgICNncmlkO1xyXG5cclxuICAgICNnZW5lcmF0ZUdyaWQoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWQnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy4jaGVpZ2h0OyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLiN3aWR0aDsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXJvdycsIHJvdyk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2wnLCBjb2wpO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ3JpZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgI2NsZWFyR3JpZCgpIHtcclxuICAgICAgICBjb25zdCBncmlkQ2VsbHMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbiAgICAgICAgZm9yIChsZXQgY2VsbCBvZiBncmlkQ2VsbHMpIHtcclxuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoZ2FtZUVsZW1lbnRzKSB7XHJcblxyXG4gICAgICAgIHRoaXMuI2NsZWFyR3JpZCgpO1xyXG5cclxuICAgICAgICBsZXQgY2VsbFRvUmVuZGVyO1xyXG4gICAgICAgIGdhbWVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ1NuYWtlJykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGVsZW1lbnQuYm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxUb1JlbmRlciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHsgY2VsbC55IH1cIl1bZGF0YS1jb2w9XCIkeyBjZWxsLnggfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGxUb1JlbmRlci5hcHBlbmRDaGlsZChlbGVtZW50LmJvZHlDZWxsRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRm9vZCcpIHtcclxuICAgICAgICAgICAgICAgIGNlbGxUb1JlbmRlciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHsgZWxlbWVudC5wb3MueSB9XCJdW2RhdGEtY29sPVwiJHsgZWxlbWVudC5wb3MueCB9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBjZWxsVG9SZW5kZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5mb29kQ2VsbEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2NyZWVuRWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jZ3JpZDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIFNuYWtlIHtcclxuXHJcbiAgICAjYm9keSA9IFtcclxuICAgICAgICB7IHg6IDksIHk6IDkgfSxcclxuICAgIF07XHJcblxyXG4gICAgI2RpcmVjdGlvbk9mZnNldCA9IHtcclxuICAgICAgICB1cDogeyBjb2w6IDAsIHJvdzogLTEgfSxcclxuICAgICAgICBkb3duOiB7IGNvbDogMCwgcm93OiAxIH0sXHJcbiAgICAgICAgbGVmdDogeyBjb2w6IC0xLCByb3c6IDAgfSxcclxuICAgICAgICByaWdodDogeyBjb2w6IDEsIHJvdzogMCB9XHJcbiAgICB9O1xyXG5cclxuICAgICNkcml2aW5nRGlyZWN0aW9uO1xyXG4gICAgI3hIZWFkID0gdGhpcy4jYm9keVswXS54O1xyXG4gICAgI3lIZWFkID0gdGhpcy4jYm9keVswXS55O1xyXG5cclxuICAgICNhZGRMZWFkQ2VsbCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy4jYm9keS51bnNoaWZ0KHtcclxuICAgICAgICAgICAgeDogdGhpcy4jeEhlYWQgKyB0aGlzLiNkaXJlY3Rpb25PZmZzZXRbYCR7IHRoaXMuI2RyaXZpbmdEaXJlY3Rpb24gfWBdLmNvbCxcclxuICAgICAgICAgICAgeTogdGhpcy4jeUhlYWQgKyB0aGlzLiNkaXJlY3Rpb25PZmZzZXRbYCR7IHRoaXMuI2RyaXZpbmdEaXJlY3Rpb24gfWBdLnJvd1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL3VwZGF0ZSB0aGUgbGF0ZXN0IGhlYWQgcG9zaXRpb25cclxuICAgICAgICB0aGlzLiN4SGVhZCA9IHRoaXMuI2JvZHlbMF0ueDtcclxuICAgICAgICB0aGlzLiN5SGVhZCA9IHRoaXMuI2JvZHlbMF0ueTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI3JlbW92ZUxhc3RDZWxsKCkge1xyXG5cclxuICAgICAgICB0aGlzLiNib2R5LnBvcCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAjY2hlY2tPcHBvc2l0ZURpcmVjdGlvbihkaXJlY3Rpb24pIHtcclxuXHJcbiAgICAgICAgbGV0IG9wcG9zaXRlcyA9IHtcclxuICAgICAgICAgICAgJ3VwJzogJ2Rvd24nLFxyXG4gICAgICAgICAgICAnZG93bic6ICd1cCcsXHJcbiAgICAgICAgICAgICdsZWZ0JzogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgJ3JpZ2h0JzogJ2xlZnQnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG9wcG9zaXRlc1tgJHsgZGlyZWN0aW9uIH1gXSA9PT0gdGhpcy4jZHJpdmluZ0RpcmVjdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICAvL2FkZCBvbmUgY2VsbCBmb3J3YXJkIGFuZCByZW1vdmUgdHJhaWxpbmcgY2VsbFxyXG4gICAgICAgIHRoaXMuI2FkZExlYWRDZWxsKCk7XHJcbiAgICAgICAgdGhpcy4jcmVtb3ZlTGFzdENlbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBncm93KCkge1xyXG4gICAgICAgIHRoaXMuI2FkZExlYWRDZWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0V2FsbCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuI3hIZWFkID09PSAwIHx8XHJcbiAgICAgICAgICAgIHRoaXMuI3hIZWFkID09PSAxOSB8fFxyXG4gICAgICAgICAgICB0aGlzLiN5SGVhZCA9PT0gMCB8fFxyXG4gICAgICAgICAgICB0aGlzLiN5SGVhZCA9PT0gMTkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBib2R5Q2VsbEVsZW1lbnQoKSB7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzbmFrZS1jZWxsJyk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBuZXh0UG9zKCkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLiN4SGVhZCArIHRoaXMuI2RpcmVjdGlvbk9mZnNldFtgJHsgdGhpcy4jZHJpdmluZ0RpcmVjdGlvbiB9YF0uY29sLFxyXG4gICAgICAgICAgICB5OiB0aGlzLiN5SGVhZCArIHRoaXMuI2RpcmVjdGlvbk9mZnNldFtgJHsgdGhpcy4jZHJpdmluZ0RpcmVjdGlvbiB9YF0ucm93XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJvZHkoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiNib2R5O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXQgZHJpdmluZ0RpcmVjdGlvbihuZXdEaXJlY3Rpb24pIHtcclxuXHJcbiAgICAgICAgaWYgKG5ld0RpcmVjdGlvbiA9PT0gdGhpcy4jZHJpdmluZ0RpcmVjdGlvbiB8fFxyXG4gICAgICAgICAgICB0aGlzLiNjaGVja09wcG9zaXRlRGlyZWN0aW9uKG5ld0RpcmVjdGlvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4jZHJpdmluZ0RpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSAnLi9TY3JlZW4nO1xyXG5pbXBvcnQgeyBTbmFrZSB9IGZyb20gJy4vU25ha2UnO1xyXG5pbXBvcnQgeyBDb250cm9sTGlzdGVuZXIgfSBmcm9tICcuL0NvbnRyb2xMaXN0ZW5lcic7XHJcbmltcG9ydCB7IEZvb2QgfSBmcm9tICcuL0Zvb2QnO1xyXG5cclxubGV0IHNjcmVlbiA9IG5ldyBTY3JlZW4oKTtcclxubGV0IHNuYWtlID0gbmV3IFNuYWtlKCk7XHJcbmxldCByZW5kZXJFbGVtZW50cyA9IFtzbmFrZSwgbmV3IEZvb2QoKV07XHJcbmxldCBjb250cm9sTGlzdGVuZXIgPSBuZXcgQ29udHJvbExpc3RlbmVyKHNuYWtlKTtcclxuXHJcbmxldCBzY29yZSA9IDA7XHJcbmNvbnN0IFRJTUVfUkVEVUNFX1NURVAgPSAyO1xyXG5jb25zdCBCQVNFX1NQRUVEID0gMjAwO1xyXG5sZXQgZ2FtZVNwZWVkID0gQkFTRV9TUEVFRDtcclxubGV0IGdhbWVVcGRhdGVJbnRlcnZhbDtcclxuXHJcbmxldCBoZWFkZXJFbGVtZW50ID0gaGVhZGVyKCk7XHJcbmxldCBzY29yZUJvYXJkRWxlbWVudCA9IHNjb3JlQm9hcmQoKTtcclxubGV0IHNjcmVlbkVsZW1lbnQgPSBzY3JlZW4uc2NyZWVuRWxlbWVudDtcclxubGV0IGdhbWVPdmVyU3BsYXNoRWxlbWVudCA9IGdhbWVPdmVyU3BsYXNoKHNjb3JlKTtcclxubGV0IGNvbnRyb2xCb2FyZEVsZW1lbnQgPSBjb250cm9sTGlzdGVuZXIuY29udHJvbEJvYXJkO1xyXG5cclxubGV0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5mb290ZXIuaW5uZXJIVE1MID0gYFxyXG5Db2RlZCBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL212ODA1XCI+TWF0dCBWaWxsYTwvYT4uIEFsbCByaWdodHMgcmVzZXJ2ZWQuIFYuMS4wLjBcclxuYDtcclxuZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG5cclxuY29uc3QgY29udHJvbHMgPSB7XHJcbiAgICAnQXJyb3dMZWZ0JzogJ2xlZnQnLFxyXG4gICAgJ0Fycm93UmlnaHQnOiAncmlnaHQnLFxyXG4gICAgJ0Fycm93VXAnOiAndXAnLFxyXG4gICAgJ0Fycm93RG93bic6ICdkb3duJ1xyXG59O1xyXG5cclxuLy9pbml0aWFsIHNldHVwXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyZWVuRWxlbWVudCk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NvcmVCb2FyZEVsZW1lbnQpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRyb2xCb2FyZEVsZW1lbnQpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG5zY3JlZW4ucmVuZGVyKHJlbmRlckVsZW1lbnRzKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0YXJ0KTtcclxuXHJcbmxldCBjb250cm9sQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250cm9sLWJ1dHRvbicpO1xyXG5jb250cm9sQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2NvcmVCb2FyZCgpIHtcclxuICAgIGxldCBzY29yZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gYFNjb3JlOiAkeyBzY29yZSB9YDtcclxuICAgIHNjb3JlQm9hcmQuY2xhc3NMaXN0LmFkZCgnc2NvcmUnKTtcclxuXHJcbiAgICByZXR1cm4gc2NvcmVCb2FyZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGVhZGVyKCkge1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnU25ha2UhJztcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lT3ZlclNwbGFzaChzY29yZSkge1xyXG5cclxuICAgIGxldCBnYW1lT3ZlclNwbGFzaEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdhbWVPdmVyU3BsYXNoQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXItYmcnKTtcclxuICAgIGxldCBnYW1lT3ZlclNwbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ2FtZU92ZXJTcGxhc2guY2xhc3NMaXN0LmFkZCgnZ2FtZS1vdmVyLXNwbGFzaCcpO1xyXG5cclxuXHJcbiAgICBsZXQgZ2FtZU92ZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgZ2FtZU92ZXJIZWFkZXIudGV4dENvbnRlbnQgPSAnR2FtZSBPdmVyISc7XHJcbiAgICBsZXQgZ2FtZU92ZXJTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGdhbWVPdmVyU2NvcmUudGV4dENvbnRlbnQgPSBgU2NvcmU6ICR7IHNjb3JlIH1gO1xyXG4gICAgbGV0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVzdGFydCcpO1xyXG4gICAgcmVzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXN0YXJ0JztcclxuICAgIHJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XHJcblxyXG4gICAgZ2FtZU92ZXJTcGxhc2guYXBwZW5kQ2hpbGQoZ2FtZU92ZXJIZWFkZXIpO1xyXG4gICAgZ2FtZU92ZXJTcGxhc2guYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY29yZSk7XHJcbiAgICBnYW1lT3ZlclNwbGFzaC5hcHBlbmRDaGlsZChyZXN0YXJ0QnV0dG9uKTtcclxuICAgIGdhbWVPdmVyU3BsYXNoQmFja2dyb3VuZC5hcHBlbmRDaGlsZChnYW1lT3ZlclNwbGFzaCk7XHJcblxyXG4gICAgcmV0dXJuIGdhbWVPdmVyU3BsYXNoQmFja2dyb3VuZDtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KGUpIHtcclxuXHJcbiAgICBpZiAoY29udHJvbHNbYCR7IGUua2V5IH1gXSkge1xyXG4gICAgICAgIGdhbWVVcGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZSwgZ2FtZVNwZWVkKTtcclxuICAgICAgICByZW1vdmVTdGFydExpc3RlbmVycygpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5sb2NhbE5hbWUgPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgZ2FtZVVwZGF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlLCBnYW1lU3BlZWQpO1xyXG4gICAgICAgIHJlbW92ZVN0YXJ0TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RhcnRMaXN0ZW5lcnMocGFyYW1zKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0YXJ0KTtcclxuICAgICAgICBjb250cm9sQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaGVhZGVyRWxlbWVudCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcmVlbkVsZW1lbnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY29yZUJvYXJkRWxlbWVudCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRyb2xCb2FyZEVsZW1lbnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChnYW1lT3ZlclNwbGFzaEVsZW1lbnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmb290ZXIpO1xyXG5cclxuICAgIHNjcmVlbiA9IG5ldyBTY3JlZW4oKTtcclxuICAgIHNuYWtlID0gbmV3IFNuYWtlKCk7XHJcbiAgICByZW5kZXJFbGVtZW50cyA9IFtzbmFrZSwgbmV3IEZvb2QoKV07XHJcbiAgICBjb250cm9sTGlzdGVuZXIgPSBuZXcgQ29udHJvbExpc3RlbmVyKHNuYWtlKTtcclxuICAgIGNvbnRyb2xCb2FyZEVsZW1lbnQgPSBjb250cm9sTGlzdGVuZXIuY29udHJvbEJvYXJkO1xyXG5cclxuICAgIGdhbWVTcGVlZD1CQVNFX1NQRUVEO1xyXG4gICAgc2NvcmUgPSAwO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmVlbkVsZW1lbnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY29yZUJvYXJkRWxlbWVudCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRyb2xCb2FyZEVsZW1lbnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxuICAgIHNjcmVlbi5yZW5kZXIocmVuZGVyRWxlbWVudHMpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzdGFydCk7XHJcbiAgICBjb250cm9sQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250cm9sLWJ1dHRvbicpO1xyXG4gICAgY29uc29sZS5sb2coY29udHJvbEJ1dHRvbnMpO1xyXG4gICAgY29udHJvbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoKSB7XHJcblxyXG4gICAgc3dpdGNoIChjaGVja0NvbGxpc2lvbihzbmFrZSkpIHtcclxuICAgICAgICBjYXNlICdXQUxMJzpcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lVXBkYXRlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGl0IHdhbGwnKTtcclxuICAgICAgICAgICAgZ2FtZU92ZXJTcGxhc2hFbGVtZW50ID0gZ2FtZU92ZXJTcGxhc2goc2NvcmUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVPdmVyU3BsYXNoRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1NFTEYnOlxyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGdhbWVVcGRhdGVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXQgc2VsZicpO1xyXG4gICAgICAgICAgICBnYW1lT3ZlclNwbGFzaEVsZW1lbnQgPSBnYW1lT3ZlclNwbGFzaChzY29yZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTcGxhc2hFbGVtZW50KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnRk9PRCc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdGUgZm9vZCcpO1xyXG4gICAgICAgICAgICByZW5kZXJFbGVtZW50c1sxXSA9IG5ldyBGb29kKCk7XHJcbiAgICAgICAgICAgIGdhbWVTcGVlZCAtPSBUSU1FX1JFRFVDRV9TVEVQO1xyXG4gICAgICAgICAgICBzY29yZUJvYXJkRWxlbWVudC50ZXh0Q29udGVudCA9IGBTY29yZTogJHsgKytzY29yZSB9YDtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lVXBkYXRlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICBnYW1lVXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGUsIGdhbWVTcGVlZCk7XHJcbiAgICAgICAgICAgIHNuYWtlLmdyb3coKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQ0xFQVInOlxyXG4gICAgICAgICAgICBzbmFrZS5tb3ZlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBzY3JlZW4ucmVuZGVyKHJlbmRlckVsZW1lbnRzKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ29sbGlzaW9uKHNuYWtlKSB7XHJcblxyXG4gICAgbGV0IG5leHRDZWxsID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIkeyBzbmFrZS5uZXh0UG9zLnkgfVwiXVtkYXRhLWNvbD1cIiR7IHNuYWtlLm5leHRQb3MueCB9XCJdYCk7XHJcblxyXG4gICAgaWYgKCFuZXh0Q2VsbCAmJiBzbmFrZS5oaXRXYWxsKCkpIHtcclxuICAgICAgICByZXR1cm4gJ1dBTEwnO1xyXG4gICAgfSBlbHNlIGlmIChuZXh0Q2VsbC5jaGlsZHJlblswXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuICdDTEVBUic7XHJcbiAgICB9IGVsc2UgaWYgKG5leHRDZWxsLmNoaWxkcmVuWzBdLmNsYXNzTmFtZSA9PT0gJ3NuYWtlLWNlbGwnKSB7XHJcbiAgICAgICAgcmV0dXJuICdTRUxGJztcclxuICAgIH0gZWxzZSBpZiAobmV4dENlbGwuY2hpbGRyZW5bMF0uY2xhc3NOYW1lID09PSAnZm9vZC1jZWxsJykge1xyXG4gICAgICAgIHJldHVybiAnRk9PRCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==