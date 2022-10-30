/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./TradeWinds-Regular.ttf */ "./src/scss/TradeWinds-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/mathematic.jpg */ "./src/assets/mathematic.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Abyssinica+SIL&family=Arvo:ital@1&family=Fascinate+Inline&family=Lemonada&family=Libre+Caslon+Display&family=Ms+Madi&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"TradeWinds-Regular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template-columns: repeat(2, 40% 60%);\n  grid-template-rows: repeat(1, 100%);\n}\n\n.logo-img {\n  width: 150px;\n  height: 150px;\n}\n\n.logo-container {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  padding-block-start: 26rem;\n}\n\n.logo {\n  background-color: rgba(22, 12, 32, 0.164);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.logo h1 {\n  color: rgb(255, 255, 255);\n  font-family: \"TradeWinds-Regular\";\n  font-weight: 900;\n  font-size: 3rem;\n}\n\n.motivation {\n  background-color: rgba(225, 227, 230, 0.418);\n  box-shadow: 0 5px 5px rgba(4, 31, 95, 0.5);\n}\n\nh2 {\n  padding-block-start: 3rem;\n  width: max(60%, 200px);\n  margin-left: 40px;\n  font-family: \"TradeWinds-Regular\";\n  text-align: justify;\n  font-size: 1.6rem;\n}\n\n.second-h2 {\n  padding-block-end: 1rem;\n}\n\n.form-container h1,\n.form-container p {\n  margin-left: 40px;\n}\n.form-container p {\n  color: rgb(90, 91, 94);\n  font-weight: 800;\n  font-size: 1.2rem;\n}\n\nspan {\n  color: red;\n}\n\nform label {\n  width: 200px;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: 700;\n}\nform input {\n  width: 220px;\n  height: 45px;\n  margin: 0.4rem 0;\n  border: none;\n  border-bottom: 2px solid rgb(184, 187, 189);\n  outline: none;\n  font-size: 1.3rem;\n  font-family: \"Abyssinica SIL\", serif;\n}\nform input::placeholder {\n  font-size: 1.2rem;\n  font-family: \"Libre Caslon Display\", serif;\n}\nform input:focus {\n  border-bottom: 4px solid rgb(103, 144, 170);\n}\n\nform[method=get] {\n  display: flex;\n  flex-direction: row;\n  margin: 20px 40px;\n}\n\nlabel {\n  padding: 1rem 0;\n}\n\n.left {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.right {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10rem;\n  flex-wrap: wrap;\n}\n\n.form-container {\n  box-shadow: 0 5px 5px rgba(4, 31, 95, 0.5);\n}\n.form-container h1 {\n  margin-block-start: 1rem;\n}\n\n.submit-section {\n  margin-left: 40px;\n}\n.submit-section a {\n  color: rgb(103, 144, 170);\n  display: inline-block;\n}\n.submit-section p {\n  font-size: 1.2rem;\n  padding-block-end: 0.4rem;\n}\n\nbutton {\n  padding: 0.5rem 1.4rem;\n  background-color: rgba(7, 7, 75, 0);\n  color: rgb(43, 41, 41);\n  border-radius: 10px;\n  border: 3px solid rgb(103, 144, 170);\n  font-size: 1.2rem;\n  margin-block-end: 0.4rem;\n  text-transform: uppercase;\n}\nbutton:hover {\n  cursor: pointer;\n  color: white;\n  background-color: rgb(103, 144, 170);\n}\n\ninput:focus::placeholder {\n  transform: translateY(-13px);\n  scale: 0.9;\n  transition: all 300ms linear;\n}\n\ninput[type=email]:invalid {\n  background-color: rgba(255, 0, 0, 0.329);\n}\n\ninput[type=email]:valid {\n  background-color: rgba(50, 205, 50, 0.466);\n}\n\nfooter {\n  background-color: rgba(22, 12, 32, 0.164);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\nfooter p {\n  font-size: 1.2rem;\n  padding: 0 0.1rem;\n}\n\n.gitImg {\n  width: 40px;\n  height: 40px;\n}", "",{"version":3,"sources":["webpack://./src/scss/_variables.scss","webpack://./src/scss/style.scss"],"names":[],"mappings":"AAKA;EACE,iCAAA;EACA,4CAAA;ACHF;AAHA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AAKF;;AAHA;EACE,aAAA;EACA,yCAAA;EACA,mCAAA;AAMF;;AAHA;EACE,YAAA;EACA,aAAA;AAMF;;AAJA;EACE,yDAAA;EACA,2BAAA;EACA,aAAA;EACA,sBAAA;EACA,0BAAA;AAOF;;AALA;EACE,yCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAQF;AAPE;EACE,yBD5BQ;EC6BR,iCAAA;EACA,gBAAA;EACA,eAAA;AASJ;;AAJA;EACE,4CAAA;EACA,0CAAA;AAOF;;AALA;EACE,yBAAA;EACA,sBAAA;EACA,iBAAA;EACA,iCAAA;EACA,mBAAA;EACA,iBAAA;AAQF;;AANA;EACE,uBAAA;AASF;;AANE;;EAEE,iBAAA;AASJ;AANE;EACE,sBDzDS;EC0DT,gBAAA;EACA,iBAAA;AAQJ;;AAJA;EACE,UAAA;AAOF;;AAJE;EACE,YAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;EACA,gBAAA;AAOJ;AALE;EACE,YAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,2CAAA;EACA,aAAA;EACA,iBAAA;EACA,oCDhFO;ACuFX;AALI;EACE,iBAAA;EACA,0CDrFO;AC4Fb;AAJE;EACE,2CAAA;AAMJ;;AAFA;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;AAKF;;AAHA;EACE,eAAA;AAMF;;AAHA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;AAMF;;AAJA;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AAOF;;AALA;EAIE,0CAAA;AAKF;AARE;EACE,wBAAA;AAUJ;;AANA;EACE,iBAAA;AASF;AARE;EACE,yBAAA;EACA,qBAAA;AAUJ;AAPE;EACE,iBAAA;EACA,yBAAA;AASJ;;AANA;EACE,sBAAA;EACA,mCAAA;EACA,sBAAA;EACA,mBAAA;EACA,oCAAA;EACA,iBAAA;EACA,wBAAA;EACA,yBAAA;AASF;AARE;EACE,eAAA;EACA,YAAA;EACA,oCAAA;AAUJ;;AAPA;EACE,4BAAA;EACA,UAAA;EACA,4BAAA;AAUF;;AAPA;EACE,wCAAA;AAUF;;AARA;EACE,0CAAA;AAWF;;AATA;EACE,yCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AAYF;AAVE;EACE,iBAAA;EACA,iBAAA;AAYJ;;AATA;EACE,WAAA;EACA,YAAA;AAYF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Abyssinica+SIL&family=Arvo:ital@1&family=Fascinate+Inline&family=Lemonada&family=Libre+Caslon+Display&family=Ms+Madi&display=swap\");\n$clr-light: rgb(255, 255, 255);\n$light-gray: rgb(90, 91, 94);\n$font-libre: \"Libre Caslon Display\", serif;\n$font-aby: \"Abyssinica SIL\", serif;\n@font-face {\n  font-family: \"TradeWinds-Regular\";\n  src: url(./TradeWinds-Regular.ttf);\n}\n","@use \"_variables\" as *;\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  display: grid;\n  grid-template-columns: repeat(2, 40% 60%);\n  grid-template-rows: repeat(1, 100%);\n}\n//beginning of the logo side\n.logo-img {\n  width: 150px;\n  height: 150px;\n}\n.logo-container {\n  background-image: url(../assets/mathematic.jpg);\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  padding-block-start: 26rem;\n}\n.logo {\n  background-color: rgba(22, 12, 32, 0.164);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  h1 {\n    color: $clr-light;\n    font-family: \"TradeWinds-Regular\";\n    font-weight: 900;\n    font-size: 3rem;\n  }\n}\n//end of the logo style\n\n.motivation {\n  background-color: rgba(225, 227, 230, 0.418);\n  box-shadow: 0 5px 5px rgb(4, 31, 95, 0.5);\n}\nh2 {\n  padding-block-start: 3rem;\n  width: max(60%, 200px);\n  margin-left: 40px;\n  font-family: \"TradeWinds-Regular\";\n  text-align: justify;\n  font-size: 1.6rem;\n}\n.second-h2 {\n  padding-block-end: 1rem;\n}\n.form-container {\n  h1,\n  p {\n    margin-left: 40px;\n  }\n\n  p {\n    color: $light-gray;\n    font-weight: 800;\n    font-size: 1.2rem;\n  }\n}\n//styling form\nspan {\n  color: red;\n}\nform {\n  label {\n    width: 200px;\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 1rem;\n    font-weight: 700;\n  }\n  input {\n    width: 220px;\n    height: 45px;\n    margin: 0.4rem 0;\n    border: none;\n    border-bottom: 2px solid rgb(184, 187, 189);\n    outline: none;\n    font-size: 1.3rem;\n    font-family: $font-aby;\n\n    &::placeholder {\n      font-size: 1.2rem;\n      font-family: $font-libre;\n    }\n  }\n  input:focus {\n    border-bottom: 4px solid rgb(103, 144, 170);\n    // animation: move 200ms linear;\n  }\n}\nform[method=\"get\"] {\n  display: flex;\n  flex-direction: row;\n  margin: 20px 40px;\n}\nlabel {\n  padding: 1rem 0;\n}\n\n.left {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n.right {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10rem;\n  flex-wrap: wrap;\n}\n.form-container {\n  h1 {\n    margin-block-start: 1rem;\n  }\n  box-shadow: 0 5px 5px rgb(4, 31, 95, 0.5);\n}\n.submit-section {\n  margin-left: 40px;\n  a {\n    color: rgb(103, 144, 170);\n    display: inline-block;\n  }\n\n  p {\n    font-size: 1.2rem;\n    padding-block-end: 0.4rem;\n  }\n}\nbutton {\n  padding: 0.5rem 1.4rem;\n  background-color: rgba(7, 7, 75, 0);\n  color: rgb(43, 41, 41);\n  border-radius: 10px;\n  border: 3px solid rgb(103, 144, 170);\n  font-size: 1.2rem;\n  margin-block-end: 0.4rem;\n  text-transform: uppercase;\n  &:hover {\n    cursor: pointer;\n    color: white;\n    background-color: rgb(103, 144, 170);\n  }\n}\ninput:focus::placeholder {\n  transform: translateY(-13px);\n  scale: 0.9;\n  transition: all 300ms linear;\n}\n\ninput[type=\"email\"]:invalid {\n  background-color: rgba(255, 0, 0, 0.329);\n}\ninput[type=\"email\"]:valid {\n  background-color: rgba(50, 205, 50, 0.466);\n}\nfooter {\n  background-color: rgba(22, 12, 32, 0.164);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n\n  p {\n    font-size: 1.2rem;\n    padding: 0 0.1rem;\n  }\n}\n.gitImg {\n  width: 40px;\n  height: 40px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/gitIcon.svg":
/*!********************************!*\
  !*** ./src/assets/gitIcon.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "gitIcon.svg";

/***/ }),

/***/ "./src/assets/mathematic.jpg":
/*!***********************************!*\
  !*** ./src/assets/mathematic.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mathematic.jpg";

/***/ }),

/***/ "./src/assets/odin-lined.png":
/*!***********************************!*\
  !*** ./src/assets/odin-lined.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "odin-lined.png";

/***/ }),

/***/ "./src/scss/TradeWinds-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/scss/TradeWinds-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "TradeWinds-Regular.ttf";

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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _assets_odin_lined_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/odin-lined.png */ "./src/assets/odin-lined.png");
/* harmony import */ var _assets_gitIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/gitIcon.svg */ "./src/assets/gitIcon.svg");



const img = document.querySelector(".logo-img");
img.src = _assets_odin_lined_png__WEBPACK_IMPORTED_MODULE_1__;
const git = document.querySelector(".gitImg");
git.src = _assets_gitIcon_svg__WEBPACK_IMPORTED_MODULE_2__;

})();

/******/ })()
;
//# sourceMappingURL=main29da1bafa5e9f6ef8fd0.js.map