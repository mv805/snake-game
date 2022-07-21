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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgb(27, 27, 27);\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.score {\r\n    color: white;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 5vw;\r\n}\r\n\r\n.header {\r\n    font-family: 'Lobster', cursive;\r\n    color: white;\r\n    font-size: 10vw;\r\n    margin: 1rem  0 0 0;\r\n}\r\n\r\n.grid {\r\n    position: relative;\r\n    height: 90vw;\r\n    width: 90vw;\r\n    background-color: rgb(48, 48, 48);\r\n    border-radius: 3%;\r\n    margin: 0.5rem 1rem;\r\n    display: grid;\r\n    grid-template: repeat(20, 1fr) / repeat(20, 1fr);\r\n    gap: 1px;\r\n    padding: 2%;\r\n    max-width: 600px;\r\n    max-height: 600px;\r\n}\r\n\r\n.cell {\r\n    background-color: rgb(32, 32, 32);\r\n    border-radius: 2px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.snake-cell {\r\n    background-color: rgb(87, 175, 53);\r\n    box-sizing: border-box;\r\n    border-radius: 2px;\r\n    height: 80%;\r\n    width: 80%;\r\n}\r\n\r\n.food-cell {\r\n    background-color: red;\r\n    box-sizing: border-box;\r\n    border-radius: 2px;\r\n    height: 80%;\r\n    width: 80%;\r\n}\r\n\r\n.game-over-bg {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.842);\r\n    z-index: 2;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.game-over-splash{\r\n    color: white;\r\n    background-color: rgb(49, 49, 49);\r\n    border-radius: 20px;\r\n    border: 5px solid gray;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 80%;\r\n    max-width: 500px;\r\n    height: 50%;\r\n    font-size: 5vw;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n.restart {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    width: 50%;\r\n    height: 20%;\r\n    font-weight: bold;\r\n    font-size: 5vw;\r\n    background-color: darkgray;\r\n    border-radius: 20px;\r\n    border: 3px solid rgb(20, 20, 20);\r\n    cursor: pointer;\r\n}\r\n\r\n.game-over-splash h1 {\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 10vw;\r\n}\r\n\r\n.control-board {\r\n    height: 30%;\r\n    width: 90vw;\r\n    background-color: rgb(48, 48, 48);\r\n    border-radius: 20px;\r\n    margin: 0.5rem 1rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr; \r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    grid-template-areas: \r\n    \"none up none\"\r\n    \"left none right\"\r\n    \"none down none\";\r\n    padding: 2%;\r\n    max-width: 600px;\r\n    max-height: 600px;\r\n}\r\n\r\n.control-button {\r\n    background-color: rgb(110, 110, 110);\r\n    border: none;\r\n    border-radius: 10px;\r\n}\r\n\r\n.control-button:active {\r\n    background-color: white;\r\n}\r\n\r\n.button-up {\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n}\r\n\r\n.button-left {\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n}\r\n.button-right {\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n}\r\n.button-down {\r\n    grid-column-start: 2;\r\n    grid-column-end:3;\r\n}\r\n\r\n@media screen and (min-width: 700px){\r\n    .score{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .header {\r\n        font-size: 3.5rem;\r\n    }\r\n\r\n    .game-over-splash h1 {\r\n        font-size: 5rem;\r\n    }\r\n\r\n    .game-over-splash{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .restart{\r\n        font-size: 2rem;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,YAAY;IACZ,iCAAiC;IACjC,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,8CAA8C;IAC9C,cAAc;AAClB;;AAEA;IACI,+BAA+B;IAC/B,YAAY;IACZ,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,iCAAiC;IACjC,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,gDAAgD;IAChD,QAAQ;IACR,WAAW;IACX,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;IAClC,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,gBAAgB;IAChB,WAAW;IACX,cAAc;IACd,8CAA8C;AAClD;;AAEA;IACI,8CAA8C;IAC9C,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,cAAc;IACd,0BAA0B;IAC1B,mBAAmB;IACnB,iCAAiC;IACjC,eAAe;AACnB;;AAEA;IACI,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,iCAAiC;IACjC,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,kCAAkC;IAClC,+BAA+B;IAC/B;;;oBAGgB;IAChB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,oBAAoB;IACpB,iBAAiB;AACrB;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\n\r\nbody {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgb(27, 27, 27);\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.score {\r\n    color: white;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 5vw;\r\n}\r\n\r\n.header {\r\n    font-family: 'Lobster', cursive;\r\n    color: white;\r\n    font-size: 10vw;\r\n    margin: 1rem  0 0 0;\r\n}\r\n\r\n.grid {\r\n    position: relative;\r\n    height: 90vw;\r\n    width: 90vw;\r\n    background-color: rgb(48, 48, 48);\r\n    border-radius: 3%;\r\n    margin: 0.5rem 1rem;\r\n    display: grid;\r\n    grid-template: repeat(20, 1fr) / repeat(20, 1fr);\r\n    gap: 1px;\r\n    padding: 2%;\r\n    max-width: 600px;\r\n    max-height: 600px;\r\n}\r\n\r\n.cell {\r\n    background-color: rgb(32, 32, 32);\r\n    border-radius: 2px;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.snake-cell {\r\n    background-color: rgb(87, 175, 53);\r\n    box-sizing: border-box;\r\n    border-radius: 2px;\r\n    height: 80%;\r\n    width: 80%;\r\n}\r\n\r\n.food-cell {\r\n    background-color: red;\r\n    box-sizing: border-box;\r\n    border-radius: 2px;\r\n    height: 80%;\r\n    width: 80%;\r\n}\r\n\r\n.game-over-bg {\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgba(0, 0, 0, 0.842);\r\n    z-index: 2;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.game-over-splash{\r\n    color: white;\r\n    background-color: rgb(49, 49, 49);\r\n    border-radius: 20px;\r\n    border: 5px solid gray;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 80%;\r\n    max-width: 500px;\r\n    height: 50%;\r\n    font-size: 5vw;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n.restart {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    width: 50%;\r\n    height: 20%;\r\n    font-weight: bold;\r\n    font-size: 5vw;\r\n    background-color: darkgray;\r\n    border-radius: 20px;\r\n    border: 3px solid rgb(20, 20, 20);\r\n    cursor: pointer;\r\n}\r\n\r\n.game-over-splash h1 {\r\n    font-family: 'Lobster', cursive;\r\n    font-size: 10vw;\r\n}\r\n\r\n.control-board {\r\n    height: 30%;\r\n    width: 90vw;\r\n    background-color: rgb(48, 48, 48);\r\n    border-radius: 20px;\r\n    margin: 0.5rem 1rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr; \r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    grid-template-areas: \r\n    \"none up none\"\r\n    \"left none right\"\r\n    \"none down none\";\r\n    padding: 2%;\r\n    max-width: 600px;\r\n    max-height: 600px;\r\n}\r\n\r\n.control-button {\r\n    background-color: rgb(110, 110, 110);\r\n    border: none;\r\n    border-radius: 10px;\r\n}\r\n\r\n.control-button:active {\r\n    background-color: white;\r\n}\r\n\r\n.button-up {\r\n    grid-column-start: 2;\r\n    grid-column-end: 3;\r\n}\r\n\r\n.button-left {\r\n    grid-column-start: 1;\r\n    grid-column-end: 2;\r\n}\r\n.button-right {\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n}\r\n.button-down {\r\n    grid-column-start: 2;\r\n    grid-column-end:3;\r\n}\r\n\r\n@media screen and (min-width: 700px){\r\n    .score{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .header {\r\n        font-size: 3.5rem;\r\n    }\r\n\r\n    .game-over-splash h1 {\r\n        font-size: 5rem;\r\n    }\r\n\r\n    .game-over-splash{\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .restart{\r\n        font-size: 2rem;\r\n    }\r\n}"],"sourceRoot":""}]);
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
const TIME_REDUCE_STEP = 0.5;
let gameSpeed = 140;
let gameUpdateInterval;

let headerElement = header();
let scoreBoardElement = scoreBoard();
let screenElement = screen.screenElement;
let gameOverSplashElement = gameOverSplash(score);
let controlBoardElement = controlListener.controlBoard;

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
        document.removeEventListener('keydown', start);
    } else if (e.target.localName === 'button') {
        gameUpdateInterval = setInterval(update, gameSpeed);
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

    screen = new _Screen__WEBPACK_IMPORTED_MODULE_1__.Screen();
    snake = new _Snake__WEBPACK_IMPORTED_MODULE_2__.Snake();
    renderElements = [snake, new _Food__WEBPACK_IMPORTED_MODULE_4__.Food()];
    controlListener = new _ControlListener__WEBPACK_IMPORTED_MODULE_3__.ControlListener(snake);
    controlBoardElement = controlListener.controlBoard;

    score = 0;

    document.body.appendChild(headerElement);
    document.body.appendChild(screenElement);
    document.body.appendChild(scoreBoardElement);
    document.body.appendChild(controlBoardElement);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBSTtBQUNyQywwQkFBMEIsNkRBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUNBQUk7QUFDeEM7QUFDQSx1REFBdUQsU0FBUztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsaUJBQWlCLGdCQUFnQixpQkFBaUI7QUFDaEg7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NuYWtlLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vc3JjL0NvbnRyb2xMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vc3JjL0Zvb2QuanMiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL3NyYy9TY3JlZW4uanMiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS8uL3NyYy9TbmFrZS5qcyIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NuYWtlLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc25ha2UtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NuYWtlLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zbmFrZS1nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjcsIDI3LCAyNyk7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDEwdnc7XFxyXFxuICAgIG1hcmdpbjogMXJlbSAgMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5ncmlkIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDkwdnc7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMlO1xcclxcbiAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMjAsIDFmcikgLyByZXBlYXQoMjAsIDFmcik7XFxyXFxuICAgIGdhcDogMXB4O1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLCAzMiwgMzIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc25ha2UtY2VsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgMTc1LCA1Myk7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5mb29kLWNlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXItYmcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0Mik7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1vdmVyLXNwbGFzaHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdyYXk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG4gICAgZm9udC1zaXplOiA1dnc7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXJ0IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMCU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDV2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMCwgMjAsIDIwKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1vdmVyLXNwbGFzaCBoMSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTB2dztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRyb2wtYm9hcmQge1xcclxcbiAgICBoZWlnaHQ6IDMwJTtcXHJcXG4gICAgd2lkdGg6IDkwdnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDgsIDQ4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgXFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwibm9uZSB1cCBub25lXFxcIlxcclxcbiAgICBcXFwibGVmdCBub25lIHJpZ2h0XFxcIlxcclxcbiAgICBcXFwibm9uZSBkb3duIG5vbmVcXFwiO1xcclxcbiAgICBwYWRkaW5nOiAyJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogNjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250cm9sLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbC1idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tdXAge1xcclxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWxlZnQge1xcclxcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcclxcbn1cXHJcXG4uYnV0dG9uLXJpZ2h0IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogNDtcXHJcXG59XFxyXFxuLmJ1dHRvbi1kb3duIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDozO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCl7XFxyXFxuICAgIC5zY29yZXtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5nYW1lLW92ZXItc3BsYXNoIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZ2FtZS1vdmVyLXNwbGFzaHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucmVzdGFydHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsU0FBUztJQUNULGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4Q0FBOEM7SUFDOUMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnREFBZ0Q7SUFDaEQsUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9COzs7b0JBR2dCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAyNywgMjcpO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDV2dztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxMHZ3O1xcclxcbiAgICBtYXJnaW46IDFyZW0gIDAgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiA5MHZ3O1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA0OCwgNDgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzJTtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW0gMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIwLCAxZnIpIC8gcmVwZWF0KDIwLCAxZnIpO1xcclxcbiAgICBnYXA6IDFweDtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNuYWtlLWNlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDE3NSwgNTMpO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZC1jZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1vdmVyLWJnIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NDIpO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtb3Zlci1zcGxhc2h7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCBncmF5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNXZ3O1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGFydCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiA1dnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjAsIDIwLCAyMCk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtb3Zlci1zcGxhc2ggaDEge1xcclxcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcclxcbiAgICBmb250LXNpemU6IDEwdnc7XFxyXFxufVxcclxcblxcclxcbi5jb250cm9sLWJvYXJkIHtcXHJcXG4gICAgaGVpZ2h0OiAzMCU7XFxyXFxuICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtIDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7IFxcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcIm5vbmUgdXAgbm9uZVxcXCJcXHJcXG4gICAgXFxcImxlZnQgbm9uZSByaWdodFxcXCJcXHJcXG4gICAgXFxcIm5vbmUgZG93biBub25lXFxcIjtcXHJcXG4gICAgcGFkZGluZzogMiU7XFxyXFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udHJvbC1idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEwLCAxMTAsIDExMCk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRyb2wtYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLXVwIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1sZWZ0IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxyXFxuICAgIGdyaWQtY29sdW1uLWVuZDogMjtcXHJcXG59XFxyXFxuLmJ1dHRvbi1yaWdodCB7XFxyXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDQ7XFxyXFxufVxcclxcbi5idXR0b24tZG93biB7XFxyXFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcclxcbiAgICBncmlkLWNvbHVtbi1lbmQ6MztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpe1xcclxcbiAgICAuc2NvcmV7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlYWRlciB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZ2FtZS1vdmVyLXNwbGFzaCBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmdhbWUtb3Zlci1zcGxhc2h7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJlc3RhcnR7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgQ29udHJvbExpc3RlbmVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzbmFrZSkge1xyXG4gICAgICAgIHRoaXMuI3NuYWtlID0gc25ha2U7XHJcbiAgICAgICAgdGhpcy4jc25ha2VEaXJlY3Rpb25MaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMuI2NvbnRyb2xCb2FyZCA9IHRoaXMuI2NyZWF0ZUNvbnRyb2xCb2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgICNzbmFrZTtcclxuICAgICNjb250cm9sQm9hcmQ7XHJcbiAgICAjY29udHJvbHMgPSB7XHJcbiAgICAgICAgJ0Fycm93TGVmdCc6ICdsZWZ0JyxcclxuICAgICAgICAnQXJyb3dSaWdodCc6ICdyaWdodCcsXHJcbiAgICAgICAgJ0Fycm93VXAnOiAndXAnLFxyXG4gICAgICAgICdBcnJvd0Rvd24nOiAnZG93bidcclxuICAgIH07XHJcblxyXG4gICAgI2NyZWF0ZUNvbnRyb2xCb2FyZCgpe1xyXG4gICAgICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wtYm9hcmQnKTtcclxuXHJcbiAgICAgICAgbGV0IGJ1dHRvblVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uVXAuY2xhc3NMaXN0LmFkZCgnY29udHJvbC1idXR0b24nLCAnYnV0dG9uLXVwJyk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b25MZWZ0LmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wtYnV0dG9uJywgJ2J1dHRvbi1sZWZ0Jyk7XHJcbiAgICAgICAgbGV0IGJ1dHRvblJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uUmlnaHQuY2xhc3NMaXN0LmFkZCgnY29udHJvbC1idXR0b24nLCAnYnV0dG9uLXJpZ2h0Jyk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbkRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b25Eb3duLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wtYnV0dG9uJywgJ2J1dHRvbi1kb3duJyk7XHJcblxyXG4gICAgICAgIGJ1dHRvblVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiNjaGFuZ2VEaXJlY3Rpb24oJ3VwJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuI3NuYWtlLmRyaXZpbmdEaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1dHRvbkRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLiNjaGFuZ2VEaXJlY3Rpb24oJ2Rvd24nKSk7XHJcbiAgICAgICAgYnV0dG9uTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuI2NoYW5nZURpcmVjdGlvbignbGVmdCcpKTtcclxuICAgICAgICBidXR0b25SaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuI2NoYW5nZURpcmVjdGlvbigncmlnaHQnKSk7XHJcblxyXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGJ1dHRvblVwKTtcclxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChidXR0b25MZWZ0KTtcclxuICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChidXR0b25SaWdodCk7XHJcbiAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoYnV0dG9uRG93bik7XHJcblxyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICAjY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgdGhpcy4jc25ha2UuZHJpdmluZ0RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAjc25ha2VEaXJlY3Rpb25MaXN0ZW5lcihkaXJlY3Rpb24pIHtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSBpbiB0aGlzLiNjb250cm9scykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4jc25ha2UuZHJpdmluZ0RpcmVjdGlvbiA9IHRoaXMuI2NvbnRyb2xzW2AkeyBldmVudC5rZXkgfWBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb250cm9sQm9hcmQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy4jY29udHJvbEJvYXJkO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBGb29kIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgICN4UG9zO1xyXG4gICAgI3lQb3M7XHJcblxyXG4gICAgI3NldFBvc2l0aW9uKCkge1xyXG5cclxuICAgICAgICBsZXQgeDtcclxuICAgICAgICBsZXQgeTtcclxuICAgICAgICBsZXQgY2VsbFRvQ2hlY2tGb3JFbGVtZW50O1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHggPSB0aGlzLiNnZXRSYW5kb21JbnQoMCwgMjApO1xyXG4gICAgICAgICAgICB5ID0gdGhpcy4jZ2V0UmFuZG9tSW50KDAsIDIwKTtcclxuXHJcbiAgICAgICAgICAgIGNlbGxUb0NoZWNrRm9yRWxlbWVudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHsgeSB9XCJdW2RhdGEtY29sPVwiJHsgeCB9XCJdYCk7XHJcbiAgICAgICAgfSB3aGlsZSAoY2VsbFRvQ2hlY2tGb3JFbGVtZW50ICYmIGNlbGxUb0NoZWNrRm9yRWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuI3hQb3MgPSB4O1xyXG4gICAgICAgIHRoaXMuI3lQb3MgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgICNnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxuICAgICAgICAvL1RoZSBtYXhpbXVtIGlzIGV4Y2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBvcygpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdGhpcy4jeFBvcyxcclxuICAgICAgICAgICAgeTogdGhpcy4jeVBvc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBmb29kQ2VsbEVsZW1lbnQoKSB7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmb29kLWNlbGwnKTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2NyZWVuIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNncmlkID0gdGhpcy4jZ2VuZXJhdGVHcmlkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgI3dpZHRoID0gMjA7XHJcbiAgICAjaGVpZ2h0ID0gMjA7XHJcbiAgICAjZ3JpZDtcclxuXHJcbiAgICAjZ2VuZXJhdGVHcmlkKCkge1xyXG5cclxuICAgICAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuI2hlaWdodDsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy4jd2lkdGg7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3cnLCByb3cpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJywgY29sKTtcclxuICAgICAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdyaWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICNjbGVhckdyaWQoKSB7XHJcbiAgICAgICAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xyXG4gICAgICAgIGZvciAobGV0IGNlbGwgb2YgZ3JpZENlbGxzKSB7XHJcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGdhbWVFbGVtZW50cykge1xyXG5cclxuICAgICAgICB0aGlzLiNjbGVhckdyaWQoKTtcclxuXHJcbiAgICAgICAgbGV0IGNlbGxUb1JlbmRlcjtcclxuICAgICAgICBnYW1lRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTbmFrZScpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBlbGVtZW50LmJvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsVG9SZW5kZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7IGNlbGwueSB9XCJdW2RhdGEtY29sPVwiJHsgY2VsbC54IH1cIl1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsVG9SZW5kZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5ib2R5Q2VsbEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuY29uc3RydWN0b3IubmFtZSA9PT0gJ0Zvb2QnKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsVG9SZW5kZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7IGVsZW1lbnQucG9zLnkgfVwiXVtkYXRhLWNvbD1cIiR7IGVsZW1lbnQucG9zLnggfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgY2VsbFRvUmVuZGVyLmFwcGVuZENoaWxkKGVsZW1lbnQuZm9vZENlbGxFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjcmVlbkVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2dyaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBTbmFrZSB7XHJcblxyXG4gICAgI2JvZHkgPSBbXHJcbiAgICAgICAgeyB4OiA5LCB5OiA5IH0sXHJcbiAgICBdO1xyXG5cclxuICAgICNkaXJlY3Rpb25PZmZzZXQgPSB7XHJcbiAgICAgICAgdXA6IHsgY29sOiAwLCByb3c6IC0xIH0sXHJcbiAgICAgICAgZG93bjogeyBjb2w6IDAsIHJvdzogMSB9LFxyXG4gICAgICAgIGxlZnQ6IHsgY29sOiAtMSwgcm93OiAwIH0sXHJcbiAgICAgICAgcmlnaHQ6IHsgY29sOiAxLCByb3c6IDAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAjZHJpdmluZ0RpcmVjdGlvbjtcclxuICAgICN4SGVhZCA9IHRoaXMuI2JvZHlbMF0ueDtcclxuICAgICN5SGVhZCA9IHRoaXMuI2JvZHlbMF0ueTtcclxuXHJcbiAgICAjYWRkTGVhZENlbGwoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuI2JvZHkudW5zaGlmdCh7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuI3hIZWFkICsgdGhpcy4jZGlyZWN0aW9uT2Zmc2V0W2AkeyB0aGlzLiNkcml2aW5nRGlyZWN0aW9uIH1gXS5jb2wsXHJcbiAgICAgICAgICAgIHk6IHRoaXMuI3lIZWFkICsgdGhpcy4jZGlyZWN0aW9uT2Zmc2V0W2AkeyB0aGlzLiNkcml2aW5nRGlyZWN0aW9uIH1gXS5yb3dcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy91cGRhdGUgdGhlIGxhdGVzdCBoZWFkIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy4jeEhlYWQgPSB0aGlzLiNib2R5WzBdLng7XHJcbiAgICAgICAgdGhpcy4jeUhlYWQgPSB0aGlzLiNib2R5WzBdLnk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNyZW1vdmVMYXN0Q2VsbCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy4jYm9keS5wb3AoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI2NoZWNrT3Bwb3NpdGVEaXJlY3Rpb24oZGlyZWN0aW9uKSB7XHJcblxyXG4gICAgICAgIGxldCBvcHBvc2l0ZXMgPSB7XHJcbiAgICAgICAgICAgICd1cCc6ICdkb3duJyxcclxuICAgICAgICAgICAgJ2Rvd24nOiAndXAnLFxyXG4gICAgICAgICAgICAnbGVmdCc6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICdyaWdodCc6ICdsZWZ0J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChvcHBvc2l0ZXNbYCR7IGRpcmVjdGlvbiB9YF0gPT09IHRoaXMuI2RyaXZpbmdEaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgLy9hZGQgb25lIGNlbGwgZm9yd2FyZCBhbmQgcmVtb3ZlIHRyYWlsaW5nIGNlbGxcclxuICAgICAgICB0aGlzLiNhZGRMZWFkQ2VsbCgpO1xyXG4gICAgICAgIHRoaXMuI3JlbW92ZUxhc3RDZWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ3JvdygpIHtcclxuICAgICAgICB0aGlzLiNhZGRMZWFkQ2VsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpdFdhbGwoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiN4SGVhZCA9PT0gMCB8fFxyXG4gICAgICAgICAgICB0aGlzLiN4SGVhZCA9PT0gMTkgfHxcclxuICAgICAgICAgICAgdGhpcy4jeUhlYWQgPT09IDAgfHxcclxuICAgICAgICAgICAgdGhpcy4jeUhlYWQgPT09IDE5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgYm9keUNlbGxFbGVtZW50KCkge1xyXG5cclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc25ha2UtY2VsbCcpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgbmV4dFBvcygpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogdGhpcy4jeEhlYWQgKyB0aGlzLiNkaXJlY3Rpb25PZmZzZXRbYCR7IHRoaXMuI2RyaXZpbmdEaXJlY3Rpb24gfWBdLmNvbCxcclxuICAgICAgICAgICAgeTogdGhpcy4jeUhlYWQgKyB0aGlzLiNkaXJlY3Rpb25PZmZzZXRbYCR7IHRoaXMuI2RyaXZpbmdEaXJlY3Rpb24gfWBdLnJvd1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBib2R5KCkge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4jYm9keTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGRyaXZpbmdEaXJlY3Rpb24obmV3RGlyZWN0aW9uKSB7XHJcblxyXG4gICAgICAgIGlmIChuZXdEaXJlY3Rpb24gPT09IHRoaXMuI2RyaXZpbmdEaXJlY3Rpb24gfHxcclxuICAgICAgICAgICAgdGhpcy4jY2hlY2tPcHBvc2l0ZURpcmVjdGlvbihuZXdEaXJlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuI2RyaXZpbmdEaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gJy4vU2NyZWVuJztcclxuaW1wb3J0IHsgU25ha2UgfSBmcm9tICcuL1NuYWtlJztcclxuaW1wb3J0IHsgQ29udHJvbExpc3RlbmVyIH0gZnJvbSAnLi9Db250cm9sTGlzdGVuZXInO1xyXG5pbXBvcnQgeyBGb29kIH0gZnJvbSAnLi9Gb29kJztcclxuXHJcbmxldCBzY3JlZW4gPSBuZXcgU2NyZWVuKCk7XHJcbmxldCBzbmFrZSA9IG5ldyBTbmFrZSgpO1xyXG5sZXQgcmVuZGVyRWxlbWVudHMgPSBbc25ha2UsIG5ldyBGb29kKCldO1xyXG5sZXQgY29udHJvbExpc3RlbmVyID0gbmV3IENvbnRyb2xMaXN0ZW5lcihzbmFrZSk7XHJcblxyXG5sZXQgc2NvcmUgPSAwO1xyXG5jb25zdCBUSU1FX1JFRFVDRV9TVEVQID0gMC41O1xyXG5sZXQgZ2FtZVNwZWVkID0gMTQwO1xyXG5sZXQgZ2FtZVVwZGF0ZUludGVydmFsO1xyXG5cclxubGV0IGhlYWRlckVsZW1lbnQgPSBoZWFkZXIoKTtcclxubGV0IHNjb3JlQm9hcmRFbGVtZW50ID0gc2NvcmVCb2FyZCgpO1xyXG5sZXQgc2NyZWVuRWxlbWVudCA9IHNjcmVlbi5zY3JlZW5FbGVtZW50O1xyXG5sZXQgZ2FtZU92ZXJTcGxhc2hFbGVtZW50ID0gZ2FtZU92ZXJTcGxhc2goc2NvcmUpO1xyXG5sZXQgY29udHJvbEJvYXJkRWxlbWVudCA9IGNvbnRyb2xMaXN0ZW5lci5jb250cm9sQm9hcmQ7XHJcblxyXG5jb25zdCBjb250cm9scyA9IHtcclxuICAgICdBcnJvd0xlZnQnOiAnbGVmdCcsXHJcbiAgICAnQXJyb3dSaWdodCc6ICdyaWdodCcsXHJcbiAgICAnQXJyb3dVcCc6ICd1cCcsXHJcbiAgICAnQXJyb3dEb3duJzogJ2Rvd24nXHJcbn07XHJcblxyXG4vL2luaXRpYWwgc2V0dXBcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJFbGVtZW50KTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JlZW5FbGVtZW50KTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY29yZUJvYXJkRWxlbWVudCk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udHJvbEJvYXJkRWxlbWVudCk7XHJcblxyXG5zY3JlZW4ucmVuZGVyKHJlbmRlckVsZW1lbnRzKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHN0YXJ0KTtcclxuXHJcbmxldCBjb250cm9sQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250cm9sLWJ1dHRvbicpO1xyXG5jb250cm9sQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2NvcmVCb2FyZCgpIHtcclxuICAgIGxldCBzY29yZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzY29yZUJvYXJkLnRleHRDb250ZW50ID0gYFNjb3JlOiAkeyBzY29yZSB9YDtcclxuICAgIHNjb3JlQm9hcmQuY2xhc3NMaXN0LmFkZCgnc2NvcmUnKTtcclxuXHJcbiAgICByZXR1cm4gc2NvcmVCb2FyZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGVhZGVyKCkge1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnU25ha2UhJztcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lT3ZlclNwbGFzaChzY29yZSkge1xyXG5cclxuICAgIGxldCBnYW1lT3ZlclNwbGFzaEJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdhbWVPdmVyU3BsYXNoQmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXItYmcnKTtcclxuICAgIGxldCBnYW1lT3ZlclNwbGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ2FtZU92ZXJTcGxhc2guY2xhc3NMaXN0LmFkZCgnZ2FtZS1vdmVyLXNwbGFzaCcpO1xyXG5cclxuXHJcbiAgICBsZXQgZ2FtZU92ZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgZ2FtZU92ZXJIZWFkZXIudGV4dENvbnRlbnQgPSAnR2FtZSBPdmVyISc7XHJcbiAgICBsZXQgZ2FtZU92ZXJTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGdhbWVPdmVyU2NvcmUudGV4dENvbnRlbnQgPSBgU2NvcmU6ICR7IHNjb3JlIH1gO1xyXG4gICAgbGV0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVzdGFydCcpO1xyXG4gICAgcmVzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXN0YXJ0JztcclxuICAgIHJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXN0YXJ0R2FtZSk7XHJcblxyXG4gICAgZ2FtZU92ZXJTcGxhc2guYXBwZW5kQ2hpbGQoZ2FtZU92ZXJIZWFkZXIpO1xyXG4gICAgZ2FtZU92ZXJTcGxhc2guYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY29yZSk7XHJcbiAgICBnYW1lT3ZlclNwbGFzaC5hcHBlbmRDaGlsZChyZXN0YXJ0QnV0dG9uKTtcclxuICAgIGdhbWVPdmVyU3BsYXNoQmFja2dyb3VuZC5hcHBlbmRDaGlsZChnYW1lT3ZlclNwbGFzaCk7XHJcblxyXG4gICAgcmV0dXJuIGdhbWVPdmVyU3BsYXNoQmFja2dyb3VuZDtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KGUpIHtcclxuXHJcbiAgICBpZiAoY29udHJvbHNbYCR7IGUua2V5IH1gXSkge1xyXG4gICAgICAgIGdhbWVVcGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZSwgZ2FtZVNwZWVkKTtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgc3RhcnQpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5sb2NhbE5hbWUgPT09ICdidXR0b24nKSB7XHJcbiAgICAgICAgZ2FtZVVwZGF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlLCBnYW1lU3BlZWQpO1xyXG4gICAgICAgIGNvbnRyb2xCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChoZWFkZXJFbGVtZW50KTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2NyZWVuRWxlbWVudCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjb3JlQm9hcmRFbGVtZW50KTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udHJvbEJvYXJkRWxlbWVudCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGdhbWVPdmVyU3BsYXNoRWxlbWVudCk7XHJcblxyXG4gICAgc2NyZWVuID0gbmV3IFNjcmVlbigpO1xyXG4gICAgc25ha2UgPSBuZXcgU25ha2UoKTtcclxuICAgIHJlbmRlckVsZW1lbnRzID0gW3NuYWtlLCBuZXcgRm9vZCgpXTtcclxuICAgIGNvbnRyb2xMaXN0ZW5lciA9IG5ldyBDb250cm9sTGlzdGVuZXIoc25ha2UpO1xyXG4gICAgY29udHJvbEJvYXJkRWxlbWVudCA9IGNvbnRyb2xMaXN0ZW5lci5jb250cm9sQm9hcmQ7XHJcblxyXG4gICAgc2NvcmUgPSAwO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmVlbkVsZW1lbnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY29yZUJvYXJkRWxlbWVudCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRyb2xCb2FyZEVsZW1lbnQpO1xyXG5cclxuICAgIHNjcmVlbi5yZW5kZXIocmVuZGVyRWxlbWVudHMpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBzdGFydCk7XHJcbiAgICBjb250cm9sQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250cm9sLWJ1dHRvbicpO1xyXG4gICAgY29uc29sZS5sb2coY29udHJvbEJ1dHRvbnMpO1xyXG4gICAgY29udHJvbEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoKSB7XHJcblxyXG4gICAgc3dpdGNoIChjaGVja0NvbGxpc2lvbihzbmFrZSkpIHtcclxuICAgICAgICBjYXNlICdXQUxMJzpcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lVXBkYXRlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGl0IHdhbGwnKTtcclxuICAgICAgICAgICAgZ2FtZU92ZXJTcGxhc2hFbGVtZW50ID0gZ2FtZU92ZXJTcGxhc2goc2NvcmUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVPdmVyU3BsYXNoRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1NFTEYnOlxyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGdhbWVVcGRhdGVJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaXQgc2VsZicpO1xyXG4gICAgICAgICAgICBnYW1lT3ZlclNwbGFzaEVsZW1lbnQgPSBnYW1lT3ZlclNwbGFzaChzY29yZSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTcGxhc2hFbGVtZW50KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnRk9PRCc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdGUgZm9vZCcpO1xyXG4gICAgICAgICAgICByZW5kZXJFbGVtZW50c1sxXSA9IG5ldyBGb29kKCk7XHJcbiAgICAgICAgICAgIGdhbWVTcGVlZCAtPSBUSU1FX1JFRFVDRV9TVEVQO1xyXG4gICAgICAgICAgICBzY29yZUJvYXJkRWxlbWVudC50ZXh0Q29udGVudCA9IGBTY29yZTogJHsgKytzY29yZSB9YDtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lVXBkYXRlSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICBnYW1lVXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGUsIGdhbWVTcGVlZCk7XHJcbiAgICAgICAgICAgIHNuYWtlLmdyb3coKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQ0xFQVInOlxyXG4gICAgICAgICAgICBzbmFrZS5tb3ZlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBzY3JlZW4ucmVuZGVyKHJlbmRlckVsZW1lbnRzKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ29sbGlzaW9uKHNuYWtlKSB7XHJcblxyXG4gICAgbGV0IG5leHRDZWxsID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIkeyBzbmFrZS5uZXh0UG9zLnkgfVwiXVtkYXRhLWNvbD1cIiR7IHNuYWtlLm5leHRQb3MueCB9XCJdYCk7XHJcblxyXG4gICAgaWYgKCFuZXh0Q2VsbCAmJiBzbmFrZS5oaXRXYWxsKCkpIHtcclxuICAgICAgICByZXR1cm4gJ1dBTEwnO1xyXG4gICAgfSBlbHNlIGlmIChuZXh0Q2VsbC5jaGlsZHJlblswXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuICdDTEVBUic7XHJcbiAgICB9IGVsc2UgaWYgKG5leHRDZWxsLmNoaWxkcmVuWzBdLmNsYXNzTmFtZSA9PT0gJ3NuYWtlLWNlbGwnKSB7XHJcbiAgICAgICAgcmV0dXJuICdTRUxGJztcclxuICAgIH0gZWxzZSBpZiAobmV4dENlbGwuY2hpbGRyZW5bMF0uY2xhc3NOYW1lID09PSAnZm9vZC1jZWxsJykge1xyXG4gICAgICAgIHJldHVybiAnRk9PRCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==