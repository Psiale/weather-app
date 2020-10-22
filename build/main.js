/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n#mainContainer {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  background-color: #f8e2ee;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n}\n#mainContainer #mainContainerTopChild,\n#mainContainer #mainContainerBottomChild {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n#mainContainer #mainContainerTopChild {\n  width: 100%;\n  height: 35%;\n}\n#mainContainer #mainContainerBottomChild {\n  width: 90%;\n  height: 65%;\n}\n#mainContainer #searchBarContainer {\n  margin: 20px 0;\n  width: 100%;\n  display: flex;\n  height: auto;\n  flex-flow: row wrap;\n  justify-content: center;\n}\n#mainContainer #searchBarContainer #inputContainer {\n  width: 60%;\n  height: 94%;\n}\n#mainContainer #searchBarContainer #inputContainer input {\n  font-size: 4vw;\n  text-align: center;\n  width: 100%;\n  padding: 10px 5px;\n  border: none;\n  color: #ba176f;\n  background-color: white;\n  border-radius: 8px;\n}\n#mainContainer #searchBarContainer #inputContainer input:focus {\n  outline: none;\n  border: none;\n}\n#mainContainer #searchBarContainer #inputContainer input::placeholder {\n  font-family: \"Roboto-Slab-Regular\", serif;\n  font-size: 4vw;\n  color: grey;\n  text-align: center;\n}\n#mainContainer #searchBarContainer #buttonContainer {\n  width: 20%;\n  height: 91%;\n  margin: 0 8px;\n  border: 0;\n}\n#mainContainer #searchBarContainer #buttonContainer button {\n  font-size: 4vw;\n  background-color: #ba176f;\n  font-family: \"Roboto-Slab-Regular\", serif;\n  color: white;\n  border: 0;\n  height: 100%;\n  border-bottom-right-radius: 8px;\n  border-top-right-radius: 8px;\n  width: 100%;\n  padding: 10px 5px;\n}\n#mainContainer #toggleContainer {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n#mainContainer #toggleContainer .tempText {\n  font-family: \"Roboto-Slab-Regular\", serif;\n  font-size: 6vw;\n}\n#mainContainer #toggleContainer #switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n#mainContainer #toggleContainer #toggleInput {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n#mainContainer #toggleContainer .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #2f2e41ff;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n#mainContainer #toggleContainer .slider::before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n#mainContainer #toggleContainer #toggleInput:checked + .slider {\n  background-color: #ba176fff;\n}\n#mainContainer #toggleContainer #toggleInput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n#mainContainer #toggleContainer #toggleInput:checked + .slider::before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n#mainContainer #toggleContainer .round {\n  border-radius: 34px;\n}\n#mainContainer #toggleContainer .round::before {\n  border-radius: 50%;\n}\n#mainContainer #toggleContainer div {\n  margin: 0 10px;\n}\n#mainContainer #mainInfoContainer {\n  height: 80%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n#mainContainer #mainInfoContainer #cityNameContainer {\n  font-family: \"Play-Fair-Display\", serif;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n#mainContainer #mainInfoContainer #cityNameContainer p {\n  padding: 0;\n  margin: 0;\n  font-size: 8vw;\n}\n#mainContainer #mainInfoContainer #mainWeather {\n  font-family: \"Roboto-Slab-SemiBold\", serif;\n}\n#mainContainer #mainInfoContainer #mainWeather,\n#mainContainer #mainInfoContainer #mainTemp {\n  width: min-content;\n  height: min-content;\n  padding-left: 20px;\n}\n#mainContainer #mainInfoContainer #mainWeather p,\n#mainContainer #mainInfoContainer #mainTemp p {\n  font-size: 7vw;\n  margin: 0;\n  padding: 0;\n}\n#mainContainer #imgContainer {\n  width: 100%;\n  height: 40%;\n}\n#mainContainer #imgContainer #imgAPI {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n#mainContainer #weatherDescriptionContainer {\n  font-family: \"Roboto-Slab-Regular\", serif;\n  font-size: 1.1rem;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  background-color: #ba176f;\n  display: none;\n  height: min-content;\n}\n#mainContainer #weatherDescriptionContainer div {\n  color: white;\n  height: min-content;\n  width: 28%;\n  margin: 20px 8px;\n}\n#mainContainer #weatherDescriptionContainer #tempMinMaxContainer {\n  font-size: 1rem;\n  width: 30%;\n  height: 55%;\n  display: flex;\n  align-items: flex-end;\n}\n#mainContainer #weatherDescriptionContainer #weatherIconContainer {\n  width: max-content;\n  margin: 20px 0;\n}", "",{"version":3,"sources":["webpack://src/styles/style.scss"],"names":[],"mappings":"AAEA;;EAEE,WAAA;EACA,YAAA;EACA,SAAA;AAAF;;AAGA;EACE,WAAA;EACA,aAAA;EACA,aAAA;EACA,yBAAA;EACA,wBAAA;EACA,uBAAA;EACA,mBAAA;AAAF;AAEE;;EAEE,aAAA;EACA,uBAAA;EACA,sBAAA;AAAJ;AAGE;EACE,WAAA;EACA,WAAA;AADJ;AAIE;EACE,UAAA;EACA,WAAA;AAFJ;AAKE;EACE,cAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AAHJ;AAKI;EACE,UAAA;EACA,WAAA;AAHN;AAKM;EACE,cAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,YAAA;EACA,cAAA;EACA,uBAAA;EACA,kBAAA;AAHR;AAKQ;EACE,aAAA;EACA,YAAA;AAHV;AAMQ;EACE,yCAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;AAJV;AASI;EACE,UAAA;EACA,WAAA;EACA,aAAA;EACA,SAAA;AAPN;AASM;EACE,cAAA;EACA,yBAAA;EACA,yCAAA;EACA,YAAA;EACA,SAAA;EACA,YAAA;EACA,+BAAA;EACA,4BAAA;EACA,WAAA;EACA,iBAAA;AAPR;AAYE;EACE,aAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;AAVJ;AAYI;EACE,yCAAA;EACA,cAAA;AAVN;AAaI;EACE,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AAXN;AAcI;EACE,UAAA;EACA,QAAA;EACA,SAAA;AAZN;AAeI;EACE,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,wBAAA;EACA,gBAAA;AAbN;AAeM;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EACA,wBAAA;EACA,gBAAA;AAbR;AAiBI;EACE,2BAAA;AAfN;AAkBI;EACE,2BAAA;AAhBN;AAmBI;EACE,mCAAA;EACA,+BAAA;EACA,2BAAA;AAjBN;AAoBI;EACE,mBAAA;AAlBN;AAoBM;EACE,kBAAA;AAlBR;AAsBI;EACE,cAAA;AApBN;AAwBE;EACE,WAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AAtBJ;AAwBI;EACE,uCAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAtBN;AAwBM;EACE,UAAA;EACA,SAAA;EACA,cAAA;AAtBR;AA0BI;EACE,0CAAA;AAxBN;AA2BI;;EAEE,kBAAA;EACA,mBAAA;EACA,kBAAA;AAzBN;AA2BM;;EACE,cAAA;EACA,SAAA;EACA,UAAA;AAxBR;AA6BE;EACE,WAAA;EACA,WAAA;AA3BJ;AA6BI;EACE,WAAA;EACA,YAAA;EACA,mBAAA;AA3BN;AA+BE;EACE,yCAAA;EACA,iBAAA;EACA,4BAAA;EACA,6BAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;AA7BJ;AA+BI;EACE,YAAA;EACA,mBAAA;EACA,UAAA;EACA,gBAAA;AA7BN;AAgCI;EACE,eAAA;EACA,UAAA;EACA,WAAA;EACA,aAAA;EACA,qBAAA;AA9BN;AAiCI;EACE,kBAAA;EACA,cAAA;AA/BN","sourcesContent":["@import '../styles/fonts.css';\r\n\r\nhtml,\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n\r\n#mainContainer {\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  background-color: #f8e2ee;\r\n  flex-flow: column nowrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  #mainContainerTopChild,\r\n  #mainContainerBottomChild {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n  }\r\n\r\n  #mainContainerTopChild {\r\n    width: 100%;\r\n    height: 35%;\r\n  }\r\n\r\n  #mainContainerBottomChild {\r\n    width: 90%;\r\n    height: 65%;\r\n  }\r\n\r\n  #searchBarContainer {\r\n    margin: 20px 0;\r\n    width: 100%;\r\n    display: flex;\r\n    height: auto;\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n\r\n    #inputContainer {\r\n      width: 60%;\r\n      height: 94%;\r\n\r\n      input {\r\n        font-size: 4vw;\r\n        text-align: center;\r\n        width: 100%;\r\n        padding: 10px 5px;\r\n        border: none;\r\n        color: #ba176f;\r\n        background-color: white;\r\n        border-radius: 8px;\r\n\r\n        &:focus {\r\n          outline: none;\r\n          border: none;\r\n        }\r\n\r\n        &::placeholder {\r\n          font-family: 'Roboto-Slab-Regular', serif;\r\n          font-size: 4vw;\r\n          color: grey;\r\n          text-align: center;\r\n        }\r\n      }\r\n    }\r\n\r\n    #buttonContainer {\r\n      width: 20%;\r\n      height: 91%;\r\n      margin: 0 8px;\r\n      border: 0;\r\n\r\n      button {\r\n        font-size: 4vw;\r\n        background-color: #ba176f;\r\n        font-family: 'Roboto-Slab-Regular', serif;\r\n        color: white;\r\n        border: 0;\r\n        height: 100%;\r\n        border-bottom-right-radius: 8px;\r\n        border-top-right-radius: 8px;\r\n        width: 100%;\r\n        padding: 10px 5px;\r\n      }\r\n    }\r\n  }\r\n\r\n  #toggleContainer {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    .tempText {\r\n      font-family: 'Roboto-Slab-Regular', serif;\r\n      font-size: 6vw;\r\n    }\r\n\r\n    #switch {\r\n      position: relative;\r\n      display: inline-block;\r\n      width: 60px;\r\n      height: 34px;\r\n    }\r\n\r\n    #toggleInput {\r\n      opacity: 0;\r\n      width: 0;\r\n      height: 0;\r\n    }\r\n\r\n    .slider {\r\n      position: absolute;\r\n      cursor: pointer;\r\n      top: 0;\r\n      left: 0;\r\n      right: 0;\r\n      bottom: 0;\r\n      background-color: #2f2e41ff;\r\n      -webkit-transition: 0.4s;\r\n      transition: 0.4s;\r\n\r\n      &::before {\r\n        position: absolute;\r\n        content: \"\";\r\n        height: 26px;\r\n        width: 26px;\r\n        left: 4px;\r\n        bottom: 4px;\r\n        background-color: white;\r\n        -webkit-transition: 0.4s;\r\n        transition: 0.4s;\r\n      }\r\n    }\r\n\r\n    #toggleInput:checked + .slider {\r\n      background-color: #ba176fff;\r\n    }\r\n\r\n    #toggleInput:focus + .slider {\r\n      box-shadow: 0 0 1px #2196f3;\r\n    }\r\n\r\n    #toggleInput:checked + .slider::before {\r\n      -webkit-transform: translateX(26px);\r\n      -ms-transform: translateX(26px);\r\n      transform: translateX(26px);\r\n    }\r\n\r\n    .round {\r\n      border-radius: 34px;\r\n\r\n      &::before {\r\n        border-radius: 50%;\r\n      }\r\n    }\r\n\r\n    div {\r\n      margin: 0 10px;\r\n    }\r\n  }\r\n\r\n  #mainInfoContainer {\r\n    height: 80%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n\r\n    #cityNameContainer {\r\n      font-family: 'Play-Fair-Display', serif;\r\n      width: 100%;\r\n      display: flex;\r\n      justify-content: center;\r\n      margin-bottom: 20px;\r\n\r\n      p {\r\n        padding: 0;\r\n        margin: 0;\r\n        font-size: 8vw;\r\n      }\r\n    }\r\n\r\n    #mainWeather {\r\n      font-family: 'Roboto-Slab-SemiBold', serif;\r\n    }\r\n\r\n    #mainWeather,\r\n    #mainTemp {\r\n      width: min-content;\r\n      height: min-content;\r\n      padding-left: 20px;\r\n\r\n      p {\r\n        font-size: 7vw;\r\n        margin: 0;\r\n        padding: 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  #imgContainer {\r\n    width: 100%;\r\n    height: 40%;\r\n\r\n    #imgAPI {\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: contain;\r\n    }\r\n  }\r\n\r\n  #weatherDescriptionContainer {\r\n    font-family: 'Roboto-Slab-Regular', serif;\r\n    font-size: 1.1rem;\r\n    border-top-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    background-color: #ba176f;\r\n    display: none;\r\n    height: min-content;\r\n\r\n    div {\r\n      color: white;\r\n      height: min-content;\r\n      width: 28%;\r\n      margin: 20px 8px;\r\n    }\r\n\r\n    #tempMinMaxContainer {\r\n      font-size: 1rem;\r\n      width: 30%;\r\n      height: 55%;\r\n      display: flex;\r\n      align-items: flex-end;\r\n    }\r\n\r\n    #weatherIconContainer {\r\n      width: max-content;\r\n      margin: 20px 0;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_RobotoSlab_SemiBold_woff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/RobotoSlab-SemiBold.woff */ "./src/fonts/RobotoSlab-SemiBold.woff");
/* harmony import */ var _fonts_RobotoSlab_Regular_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/RobotoSlab-Regular.woff */ "./src/fonts/RobotoSlab-Regular.woff");
/* harmony import */ var _fonts_RobotoSlab_ExtraLight_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/RobotoSlab-ExtraLight.woff */ "./src/fonts/RobotoSlab-ExtraLight.woff");
/* harmony import */ var _fonts_PlayfairDisplay_ExtraBold_woff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/PlayfairDisplay-ExtraBold.woff */ "./src/fonts/PlayfairDisplay-ExtraBold.woff");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_RobotoSlab_SemiBold_woff__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_RobotoSlab_Regular_woff__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_RobotoSlab_ExtraLight_woff__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_PlayfairDisplay_ExtraBold_woff__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@font-face {\r\n  font-family: 'Roboto-Slab-SemiBold';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\r\n  font-weight: 600;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto-Slab-Regular';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n  font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto-Slab-ExtraLight';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  font-weight: 200;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Play-Fair-Display';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  font-weight: 800;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/styles/fonts.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,2DAA4D;EAC5D,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;EAClC,2DAA2D;EAC3D,gBAAgB;AAClB;;AAEA;EACE,qCAAqC;EACrC,4CAA+C;EAC/C,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,4CAAmD;EACnD,gBAAgB;AAClB","sourcesContent":["@font-face {\r\n  font-family: 'Roboto-Slab-SemiBold';\r\n  src: url('../fonts/RobotoSlab-SemiBold.woff') format('woff');\r\n  font-weight: 600;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto-Slab-Regular';\r\n  src: url('../fonts/RobotoSlab-Regular.woff') format('woff');\r\n  font-weight: 400;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto-Slab-ExtraLight';\r\n  src: url('../fonts/RobotoSlab-ExtraLight.woff');\r\n  font-weight: 200;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Play-Fair-Display';\r\n  src: url('../fonts/PlayfairDisplay-ExtraBold.woff');\r\n  font-weight: 800;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/classes/weatherImage.js":
/*!*************************************!*\
  !*** ./src/classes/weatherImage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function WeatherImage(weatherName, weatherImage) {
  return {
    weatherName,
    weatherImage,
  };
}

/* harmony default export */ __webpack_exports__["default"] = (WeatherImage);

/***/ }),

/***/ "./src/classes/weatherObject.js":
/*!**************************************!*\
  !*** ./src/classes/weatherObject.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Weather(mainWeather, weatherDescription, temp, tempMin, tempMax, icon) {
  return {
    mainWeather,
    weatherDescription,
    temp,
    tempMin,
    tempMax,
    icon,
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Weather);

/***/ }),

/***/ "./src/fonts/PlayfairDisplay-ExtraBold.woff":
/*!**************************************************!*\
  !*** ./src/fonts/PlayfairDisplay-ExtraBold.woff ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7edf724382bda9af5ef8af713642ae29.woff");

/***/ }),

/***/ "./src/fonts/RobotoSlab-ExtraLight.woff":
/*!**********************************************!*\
  !*** ./src/fonts/RobotoSlab-ExtraLight.woff ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "250c1cd7015a9d6af0d5895625223fc5.woff");

/***/ }),

/***/ "./src/fonts/RobotoSlab-Regular.woff":
/*!*******************************************!*\
  !*** ./src/fonts/RobotoSlab-Regular.woff ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6f2c544eb1a3719f9925ea3d0c45a6e8.woff");

/***/ }),

/***/ "./src/fonts/RobotoSlab-SemiBold.woff":
/*!********************************************!*\
  !*** ./src/fonts/RobotoSlab-SemiBold.woff ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a8be90e12e7bd584989c135336f96a60.woff");

/***/ }),

/***/ "./src/images/clear.png":
/*!******************************!*\
  !*** ./src/images/clear.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "532fa5321fdcd85a7b383616d1d7de33.png");

/***/ }),

/***/ "./src/images/clouds.png":
/*!*******************************!*\
  !*** ./src/images/clouds.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "87be65b1abc993bdce7464b12442609c.png");

/***/ }),

/***/ "./src/images/error.png":
/*!******************************!*\
  !*** ./src/images/error.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a32a19d7feae192ff3cb73f17bd0ecef.png");

/***/ }),

/***/ "./src/images/haze.png":
/*!*****************************!*\
  !*** ./src/images/haze.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ff8b25ccaa5857261d41aa90e285993a.png");

/***/ }),

/***/ "./src/images/rain.png":
/*!*****************************!*\
  !*** ./src/images/rain.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3121f14230fc0f39d8a205c6c5ef4e19.png");

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "94b76ce37f145a754e61f1e8e3af039e.png");

/***/ }),

/***/ "./src/images/snow.png":
/*!*****************************!*\
  !*** ./src/images/snow.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a90183f09d1b4e559ab2572aa47a8fb7.png");

/***/ }),

/***/ "./src/images/storm.png":
/*!******************************!*\
  !*** ./src/images/storm.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "31809579186d3a8fbbe4d214ad7c6876.png");

/***/ }),

/***/ "./src/screens/apiFetcher.js":
/*!***********************************!*\
  !*** ./src/screens/apiFetcher.js ***!
  \***********************************/
/*! exports provided: apiFetcher, imgCreator, promiseToJson, weatherObjectConstructor, iconGetter, weatherIconGetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiFetcher", function() { return apiFetcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgCreator", function() { return imgCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseToJson", function() { return promiseToJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherObjectConstructor", function() { return weatherObjectConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconGetter", function() { return iconGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherIconGetter", function() { return weatherIconGetter; });
/* harmony import */ var _classes_weatherObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/weatherObject */ "./src/classes/weatherObject.js");


async function apiFetcher(baseUrl, searchQuery) {
  const apiKey = "NugrROQQ4DCqBqNviYzgvDib6kvifqf7";
  const response = await fetch(`${baseUrl}q=${searchQuery}&appid=${apiKey}`, { mode: 'cors' });
  const data = await response.json();
  return data.data.images.original.url;
}
const iconGetter = (iconCode, array) => {
  const result = array.filter((weather) => weather.weatherName === iconCode);
  if (result.length > 0) {
    return result[0].weatherImage;
  }
  return array[6].weatherImage;
};

const weatherIconGetter = async (iconCode, element) => {
  const response = await fetch(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);
  if (iconCode === '13d' || iconCode === '50d') {
    element.style.filter = 'invert(1)';
  } else {
    element.style.filter = 'none';
  }
  return response.url;
};

const imgCreator = async (container, image, src) => {
  image.src = await src;
  return container.append(image);
};
const weatherObjectConstructor = async (apiData) => {
  const weatherObject = await apiData;
  const weather = Object(_classes_weatherObject__WEBPACK_IMPORTED_MODULE_0__["default"])(
    await weatherObject.weather[0].main,
    await weatherObject.weather[0].description,
    await weatherObject.main.temp,
    await weatherObject.main.temp_min,
    await weatherObject.main.temp_max,
    await weatherObject.weather[0].icon,
  );
  return weather;
};

const weatherObjectError = async (data) => {
  const response = await data;
  const weather = Object(_classes_weatherObject__WEBPACK_IMPORTED_MODULE_0__["default"])(
    await response.message,
    '',
    '',
    '',
    '',
    '',
  );
  return weather;
};

const promiseToJson = async (baseUrl, searchQuery, units = 'imperial') => {
  const apiKey = "55b9e2fc241864ad1805c87262e98f50";
  const response = await fetch(`${baseUrl}q=${searchQuery}&units=${units}&appid=${apiKey}`, { mode: 'cors' });
  const data = await response.json();
  if (data.cod === '404') return weatherObjectError(data);
  return weatherObjectConstructor(data);
};




/***/ }),

/***/ "./src/scripts/domManipulation.js":
/*!****************************************!*\
  !*** ./src/scripts/domManipulation.js ***!
  \****************************************/
/*! exports provided: inputHandler, enterShortcut, elementGenerator, textGenerator, capitalize, unitConverter, unitSwapper, toggleColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputHandler", function() { return inputHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterShortcut", function() { return enterShortcut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementGenerator", function() { return elementGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textGenerator", function() { return textGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitConverter", function() { return unitConverter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitSwapper", function() { return unitSwapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleColor", function() { return toggleColor; });

const inputHandler = (inputElement) => {
  if (inputElement.value) {
    return inputElement.value;
  }
  return Error('No input element');
};
const enterShortcut = (btn, element) => {
  element.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      btn.click();
    }
  });
};

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const elementGenerator = (htmlElem, elemId = null, elemClass = null) => {
  const createdElement = document.createElement(`${htmlElem}`);
  if (elemClass !== null) createdElement.classList.add(elemClass);
  if (elemId !== null) createdElement.id = elemId;
  return createdElement;
};

const textGenerator = (text) => {
  const textElement = document.createElement('p');
  if (text !== '') textElement.textContent = text;
  return textElement;
};


function unitConverter(value, units) {
  if (units === 'metric') {
    const result = (value * 9 / 5) + 32;
    return Math.round(result);
  }
  const result = (value - 32) * (5 / 9);
  return Math.round(result);
}

function unitSwapper(value) {
  (value === 'metric') ? value = 'imperial' : value = 'metric';
  return value;
}
const toggleColor = (toggleInput, value) => {
  (value === 'metric') ? toggleInput.checked = false : toggleInput.checked = true;
};



/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/scripts/render.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");




document.body.appendChild(_render__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/scripts/render.js":
/*!*******************************!*\
  !*** ./src/scripts/render.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_apiFetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../screens/apiFetcher */ "./src/screens/apiFetcher.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ "./src/scripts/domManipulation.js");
/* harmony import */ var _classes_weatherImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/weatherImage */ "./src/classes/weatherImage.js");
/* harmony import */ var _images_clouds_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/clouds.png */ "./src/images/clouds.png");
/* harmony import */ var _images_storm_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/storm.png */ "./src/images/storm.png");
/* harmony import */ var _images_clear_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/clear.png */ "./src/images/clear.png");
/* harmony import */ var _images_haze_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/haze.png */ "./src/images/haze.png");
/* harmony import */ var _images_rain_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/rain.png */ "./src/images/rain.png");
/* harmony import */ var _images_snow_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/snow.png */ "./src/images/snow.png");
/* harmony import */ var _images_error_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/error.png */ "./src/images/error.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/search.png */ "./src/images/search.png");












const weatherArray = [Object(_classes_weatherImage__WEBPACK_IMPORTED_MODULE_2__["default"])('Clouds', _images_clouds_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
  Object(_classes_weatherImage__WEBPACK_IMPORTED_MODULE_2__["default"])('Snow', _images_snow_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
  Object(_classes_weatherImage__WEBPACK_IMPORTED_MODULE_2__["default"])('Rain', _images_rain_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
  Object(_classes_weatherImage__WEBPACK_IMPORTED_MODULE_2__["default"])('Drizzle', _images_rain_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
  Object(_classes_weatherImage__WEBPACK_IMPORTED_MODULE_2__["default"])('Thunderstorm', _images_storm_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
  Object(_classes_weatherImage__WEBPACK_IMPORTED_MODULE_2__["default"])('Clear', _images_clear_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
  Object(_classes_weatherImage__WEBPACK_IMPORTED_MODULE_2__["default"])('Haze', _images_haze_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
  Object(_classes_weatherImage__WEBPACK_IMPORTED_MODULE_2__["default"])('city not found', _images_error_png__WEBPACK_IMPORTED_MODULE_9__["default"])];

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
mainContainer.id = 'mainContainer';
const imgContainer = document.createElement('div');
const mainContainerTopChild = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'mainContainerTopChild');
const mainContainerBottomChild = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'mainContainerBottomChild');
const searchBarContainer = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'searchBarContainer');
const inputContainer = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'inputContainer');
const toggleContainer = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'toggleContainer');
const celsiusContainer = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'celsiusContainer', 'tempText');
celsiusContainer.append(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["textGenerator"]('Celsius'));
const fahrenheitContainer = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'fahrenheitContainer', 'tempText');
fahrenheitContainer.append(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["textGenerator"]('Fahrenheit'));
const toggleLabel = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('label', 'switch');
const toggleInput = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('input', 'toggleInput');

toggleInput.type = 'checkbox';
const toggleSpan = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('span', 'toggleSpan', 'slider');
toggleSpan.classList.add('round');
toggleLabel.append(toggleInput, toggleSpan);

const mainInfoContainer = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'mainInfoContainer');
const weatherDescriptionContainer = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'weatherDescriptionContainer');
const weatherIconContainer = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'weatherIconContainer');
const weatherIcon = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('img', 'weatherIcon');
const weatherInfoDescriptionContainer = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'weatherInfoDescriptionContainer');
const DAYTEXT = 'Today';
const cityNameContainer = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'cityNameContainer');
const mainWeather = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'mainWeather');
const mainTemp = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'mainTemp');
const tempMinMaxContainer = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'tempMinMaxContainer');
const input = document.createElement('input');
const buttonContainer = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["elementGenerator"]('div', 'buttonContainer');
const button = document.createElement('button');
button.id = 'apiButton';
button.textContent = 'Search';
input.id = 'apiInput';
input.placeholder = 'Somewhere only we know';
buttonContainer.append(button);
inputContainer.append(input);
searchBarContainer.append(inputContainer, buttonContainer);
const img = document.createElement('img');
imgContainer.id = 'imgContainer';
img.id = 'imgAPI';
_screens_apiFetcher__WEBPACK_IMPORTED_MODULE_0__["imgCreator"](imgContainer, img, _images_search_png__WEBPACK_IMPORTED_MODULE_10__["default"]);
cityNameContainer.append(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["textGenerator"]('Weather app'));
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
button.addEventListener('click', () => {
  cityNameContainer.innerHTML = '';
  mainWeather.innerHTML = '';
  mainTemp.innerHTML = '';
  weatherIconContainer.innerHTML = '';
  tempMinMaxContainer.innerHTML = '';
  weatherInfoDescriptionContainer.innerHTML = '';
  let units = 'metric';
  _screens_apiFetcher__WEBPACK_IMPORTED_MODULE_0__["promiseToJson"](baseUrl, _domManipulation__WEBPACK_IMPORTED_MODULE_1__["inputHandler"](input), units).then(
    (weather) => {
      if (weather.mainWeather === 'city not found') {
        toggleContainer.innerHTML = '';
        const capitalized = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["capitalize"](weather.mainWeather);
        mainWeather.append(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["textGenerator"](_domManipulation__WEBPACK_IMPORTED_MODULE_1__["capitalize"](capitalized)));
        mainInfoContainer.append(
          mainWeather,
        );
        _screens_apiFetcher__WEBPACK_IMPORTED_MODULE_0__["imgCreator"](
          imgContainer, img, _screens_apiFetcher__WEBPACK_IMPORTED_MODULE_0__["iconGetter"](weather.mainWeather, weatherArray),
        );
      } else {
        toggleInput.checked = false;
        toggleContainer.append(celsiusContainer, toggleLabel, fahrenheitContainer);
        _screens_apiFetcher__WEBPACK_IMPORTED_MODULE_0__["imgCreator"](
          imgContainer, img, _screens_apiFetcher__WEBPACK_IMPORTED_MODULE_0__["iconGetter"](weather.mainWeather, weatherArray),
        );
        cityNameContainer.append(
          _domManipulation__WEBPACK_IMPORTED_MODULE_1__["textGenerator"](
            _domManipulation__WEBPACK_IMPORTED_MODULE_1__["capitalize"](_domManipulation__WEBPACK_IMPORTED_MODULE_1__["inputHandler"](input)),
          ),
        );
        mainWeather.append(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["textGenerator"](weather.mainWeather));
        mainTemp.append(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["textGenerator"](`${Math.round(weather.temp)}°`));
        toggleInput.addEventListener('click', async () => {
          weather.temp = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["unitConverter"](weather.temp, units);
          weather.tempMin = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["unitConverter"](weather.tempMin, units);
          weather.tempMax = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["unitConverter"](weather.tempMax, units);
          units = _domManipulation__WEBPACK_IMPORTED_MODULE_1__["unitSwapper"](units);
          _domManipulation__WEBPACK_IMPORTED_MODULE_1__["toggleColor"](toggleInput, units);
          mainTemp.innerHTML = '';
          tempMinMaxContainer.innerHTML = '';
          mainTemp.append(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["textGenerator"](`${weather.temp}°`));

          tempMinMaxContainer.append(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["textGenerator"](
            `${weather.tempMax}° / ${weather.tempMin}°`,
          ));
        });
        _screens_apiFetcher__WEBPACK_IMPORTED_MODULE_0__["imgCreator"](weatherIconContainer, weatherIcon,
          _screens_apiFetcher__WEBPACK_IMPORTED_MODULE_0__["weatherIconGetter"](weather.icon, weatherIcon));
        weatherInfoDescriptionContainer.append(DAYTEXT,
          _domManipulation__WEBPACK_IMPORTED_MODULE_1__["textGenerator"](weather.weatherDescription));
        tempMinMaxContainer.append(_domManipulation__WEBPACK_IMPORTED_MODULE_1__["textGenerator"](
          `${Math.round(weather.tempMax)}° / ${Math.round(weather.tempMin)}°`,
        ));
        weatherDescriptionContainer.append(
          weatherIconContainer, weatherInfoDescriptionContainer, tempMinMaxContainer,
        );
        mainContainerBottomChild.append(imgContainer, weatherDescriptionContainer);
        mainInfoContainer.insertBefore(toggleContainer, mainInfoContainer.childNodes[1]);
      }
      weatherDescriptionContainer.style.display = 'flex';
      input.value = '';
    }
    ,
  );
});
_domManipulation__WEBPACK_IMPORTED_MODULE_1__["enterShortcut"](button, input);
mainInfoContainer.append(cityNameContainer, mainWeather, mainTemp);
weatherDescriptionContainer.append(
  weatherIconContainer, weatherInfoDescriptionContainer, tempMinMaxContainer,
);
mainContainerTopChild.append(searchBarContainer, mainInfoContainer);
mainContainerBottomChild.append(imgContainer, weatherDescriptionContainer);
mainContainer.append(
  mainContainerTopChild,
  mainContainerBottomChild,
);
/* harmony default export */ __webpack_exports__["default"] = (mainContainer);

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZm9udHMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvd2VhdGhlckltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL3dlYXRoZXJPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1FeHRyYUJvbGQud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvUm9ib3RvU2xhYi1FeHRyYUxpZ2h0LndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1JvYm90b1NsYWItUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9Sb2JvdG9TbGFiLVNlbWlCb2xkLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jbGVhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jbG91ZHMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZXJyb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGF6ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yYWluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zbm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0b3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9hcGlGZXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzRGO0FBQ1k7QUFDeEcsOEJBQThCLG1GQUEyQjtBQUN6RCwwQkFBMEIsc0ZBQWlDO0FBQzNEO0FBQ0EsOEJBQThCLFFBQVMsZ0JBQWdCLGdCQUFnQixpQkFBaUIsY0FBYyxHQUFHLG9CQUFvQixnQkFBZ0Isa0JBQWtCLGtCQUFrQiw4QkFBOEIsNkJBQTZC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QUNQO0FBQ0E7QUFDQSxRQUFRLDhEQUFrQjtBQUMxQiw2QkFBNkIsOERBQWtCO0FBQy9DO0FBQ0E7QUFDQSxVQUFVLDhEQUE2QjtBQUN2QyxZQUFZLDJEQUEwQixDQUFDLDZEQUE0QjtBQUNuRTtBQUNBO0FBQ0EsMkJBQTJCLDhEQUE2QjtBQUN4RCx3QkFBd0IsOERBQTZCLElBQUkseUJBQXlCO0FBQ2xGO0FBQ0EseUJBQXlCLDhEQUE2QjtBQUN0RCw0QkFBNEIsOERBQTZCO0FBQ3pELDRCQUE0Qiw4REFBNkI7QUFDekQsa0JBQWtCLDREQUEyQjtBQUM3QyxVQUFVLDREQUEyQjtBQUNyQztBQUNBO0FBQ0EsMEJBQTBCLDhEQUE2QixJQUFJLGFBQWE7O0FBRXhFLHFDQUFxQyw4REFBNkI7QUFDbEUsZUFBZSxnQkFBZ0IsTUFBTSxnQkFBZ0I7QUFDckQ7QUFDQSxTQUFTO0FBQ1QsUUFBUSw4REFBa0I7QUFDMUIsVUFBVSxxRUFBeUI7QUFDbkM7QUFDQSxVQUFVLDhEQUE2QjtBQUN2QyxtQ0FBbUMsOERBQTZCO0FBQ2hFLGFBQWEsNEJBQTRCLE1BQU0sNEJBQTRCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw4REFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSw0RUFBYSxFOzs7Ozs7Ozs7Ozs7QUNqSjVCO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzVGLFlBQXNJOztBQUV0STs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUlULDJMQUFPLGFBQWEsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb250cy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI21haW5Db250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGUyZWU7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNtYWluQ29udGFpbmVyICNtYWluQ29udGFpbmVyVG9wQ2hpbGQsXFxuI21haW5Db250YWluZXIgI21haW5Db250YWluZXJCb3R0b21DaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjbWFpbkNvbnRhaW5lclRvcENoaWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNSU7XFxufVxcbiNtYWluQ29udGFpbmVyICNtYWluQ29udGFpbmVyQm90dG9tQ2hpbGQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNjUlO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjc2VhcmNoQmFyQ29udGFpbmVyIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjc2VhcmNoQmFyQ29udGFpbmVyICNpbnB1dENvbnRhaW5lciB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA5NCU7XFxufVxcbiNtYWluQ29udGFpbmVyICNzZWFyY2hCYXJDb250YWluZXIgI2lucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogNHZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjYmExNzZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbiNtYWluQ29udGFpbmVyICNzZWFyY2hCYXJDb250YWluZXIgI2lucHV0Q29udGFpbmVyIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbiNtYWluQ29udGFpbmVyICNzZWFyY2hCYXJDb250YWluZXIgI2lucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1TbGFiLVJlZ3VsYXJcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogNHZ3O1xcbiAgY29sb3I6IGdyZXk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNtYWluQ29udGFpbmVyICNzZWFyY2hCYXJDb250YWluZXIgI2J1dHRvbkNvbnRhaW5lciB7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiA5MSU7XFxuICBtYXJnaW46IDAgOHB4O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjc2VhcmNoQmFyQ29udGFpbmVyICNidXR0b25Db250YWluZXIgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogNHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTc2ZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLVNsYWItUmVndWxhclxcXCIsIHNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjdG9nZ2xlQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciAudGVtcFRleHQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tU2xhYi1SZWd1bGFyXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDZ2dztcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciAjc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjdG9nZ2xlQ29udGFpbmVyICN0b2dnbGVJbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZTQxZmY7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjdG9nZ2xlQ29udGFpbmVyIC5zbGlkZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgI3RvZ2dsZUlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYTE3NmZmZjtcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciAjdG9nZ2xlSW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciAjdG9nZ2xlSW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgLnJvdW5kOjpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjdG9nZ2xlQ29udGFpbmVyIGRpdiB7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuI21haW5Db250YWluZXIgI21haW5JbmZvQ29udGFpbmVyIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjbWFpbkluZm9Db250YWluZXIgI2NpdHlOYW1lQ29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheS1GYWlyLURpc3BsYXlcXFwiLCBzZXJpZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuI21haW5Db250YWluZXIgI21haW5JbmZvQ29udGFpbmVyICNjaXR5TmFtZUNvbnRhaW5lciBwIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDh2dztcXG59XFxuI21haW5Db250YWluZXIgI21haW5JbmZvQ29udGFpbmVyICNtYWluV2VhdGhlciB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1TbGFiLVNlbWlCb2xkXFxcIiwgc2VyaWY7XFxufVxcbiNtYWluQ29udGFpbmVyICNtYWluSW5mb0NvbnRhaW5lciAjbWFpbldlYXRoZXIsXFxuI21haW5Db250YWluZXIgI21haW5JbmZvQ29udGFpbmVyICNtYWluVGVtcCB7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjbWFpbkluZm9Db250YWluZXIgI21haW5XZWF0aGVyIHAsXFxuI21haW5Db250YWluZXIgI21haW5JbmZvQ29udGFpbmVyICNtYWluVGVtcCBwIHtcXG4gIGZvbnQtc2l6ZTogN3Z3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuI21haW5Db250YWluZXIgI2ltZ0NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDAlO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjaW1nQ29udGFpbmVyICNpbWdBUEkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLVNsYWItUmVndWxhclxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExNzZmO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcbiNtYWluQ29udGFpbmVyICN3ZWF0aGVyRGVzY3JpcHRpb25Db250YWluZXIgZGl2IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogMjglO1xcbiAgbWFyZ2luOiAyMHB4IDhweDtcXG59XFxuI21haW5Db250YWluZXIgI3dlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lciAjdGVtcE1pbk1heENvbnRhaW5lciB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiA1NSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyICN3ZWF0aGVySWNvbkNvbnRhaW5lciB7XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTs7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQURKO0FBSUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUZKO0FBS0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhKO0FBS0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUhOO0FBS007RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQUtRO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFIVjtBQU1RO0VBQ0UseUNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSlY7QUFTSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFQTjtBQVNNO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUFI7QUFZRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVZKO0FBWUk7RUFDRSx5Q0FBQTtFQUNBLGNBQUE7QUFWTjtBQWFJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWE47QUFjSTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQVpOO0FBZUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBYk47QUFlTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFiUjtBQWlCSTtFQUNFLDJCQUFBO0FBZk47QUFrQkk7RUFDRSwyQkFBQTtBQWhCTjtBQW1CSTtFQUNFLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBQWpCTjtBQW9CSTtFQUNFLG1CQUFBO0FBbEJOO0FBb0JNO0VBQ0Usa0JBQUE7QUFsQlI7QUFzQkk7RUFDRSxjQUFBO0FBcEJOO0FBd0JFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQXRCSjtBQXdCSTtFQUNFLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdEJOO0FBd0JNO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBdEJSO0FBMEJJO0VBQ0UsMENBQUE7QUF4Qk47QUEyQkk7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBekJOO0FBMkJNOztFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQXhCUjtBQTZCRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBM0JKO0FBNkJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTNCTjtBQStCRTtFQUNFLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUE3Qko7QUErQkk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUE3Qk47QUFnQ0k7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUE5Qk47QUFpQ0k7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUEvQk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vc3R5bGVzL2ZvbnRzLmNzcyc7XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbkNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZTJlZTtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICNtYWluQ29udGFpbmVyVG9wQ2hpbGQsXFxyXFxuICAjbWFpbkNvbnRhaW5lckJvdHRvbUNoaWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbWFpbkNvbnRhaW5lclRvcENoaWxkIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI21haW5Db250YWluZXJCb3R0b21DaGlsZCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogNjUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3NlYXJjaEJhckNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogMjBweCAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgI2lucHV0Q29udGFpbmVyIHtcXHJcXG4gICAgICB3aWR0aDogNjAlO1xcclxcbiAgICAgIGhlaWdodDogOTQlO1xcclxcblxcclxcbiAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiAjYmExNzZmO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuXFxyXFxuICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLVJlZ3VsYXInLCBzZXJpZjtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiA0dnc7XFxyXFxuICAgICAgICAgIGNvbG9yOiBncmV5O1xcclxcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNidXR0b25Db250YWluZXIge1xcclxcbiAgICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgICAgaGVpZ2h0OiA5MSU7XFxyXFxuICAgICAgbWFyZ2luOiAwIDhweDtcXHJcXG4gICAgICBib3JkZXI6IDA7XFxyXFxuXFxyXFxuICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTc2ZjtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVNsYWItUmVndWxhcicsIHNlcmlmO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgI3RvZ2dsZUNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgLnRlbXBUZXh0IHtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLVJlZ3VsYXInLCBzZXJpZjtcXHJcXG4gICAgICBmb250LXNpemU6IDZ2dztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjc3dpdGNoIHtcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICAgIGhlaWdodDogMzRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdG9nZ2xlSW5wdXQge1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbGlkZXIge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgdG9wOiAwO1xcclxcbiAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjJlNDFmZjtcXHJcXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG5cXHJcXG4gICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI2cHg7XFxyXFxuICAgICAgICB3aWR0aDogMjZweDtcXHJcXG4gICAgICAgIGxlZnQ6IDRweDtcXHJcXG4gICAgICAgIGJvdHRvbTogNHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdG9nZ2xlSW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTE3NmZmZjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdG9nZ2xlSW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXHJcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2ZjM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3RvZ2dsZUlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOjpiZWZvcmUge1xcclxcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yb3VuZCB7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcXHJcXG5cXHJcXG4gICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXYge1xcclxcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbWFpbkluZm9Db250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcclxcbiAgICAjY2l0eU5hbWVDb250YWluZXIge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnUGxheS1GYWlyLURpc3BsYXknLCBzZXJpZjtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFxyXFxuICAgICAgcCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiA4dnc7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNtYWluV2VhdGhlciB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tU2xhYi1TZW1pQm9sZCcsIHNlcmlmO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNtYWluV2VhdGhlcixcXHJcXG4gICAgI21haW5UZW1wIHtcXHJcXG4gICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxyXFxuICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuXFxyXFxuICAgICAgcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDd2dztcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjaW1nQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDAlO1xcclxcblxcclxcbiAgICAjaW1nQVBJIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgI3dlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVNsYWItUmVndWxhcicsIHNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTE3NmY7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgIGRpdiB7XFxyXFxuICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICAgICAgd2lkdGg6IDI4JTtcXHJcXG4gICAgICBtYXJnaW46IDIwcHggOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN0ZW1wTWluTWF4Q29udGFpbmVyIHtcXHJcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDU1JTtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjd2VhdGhlckljb25Db250YWluZXIge1xcclxcbiAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgICBtYXJnaW46IDIwcHggMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vZm9udHMvUm9ib3RvU2xhYi1TZW1pQm9sZC53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL2ZvbnRzL1JvYm90b1NsYWItUmVndWxhci53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4uL2ZvbnRzL1JvYm90b1NsYWItRXh0cmFMaWdodC53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4uL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1FeHRyYUJvbGQud29mZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tU2xhYi1TZW1pQm9sZCc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVNsYWItUmVndWxhcic7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVNsYWItRXh0cmFMaWdodCc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGxheS1GYWlyLURpc3BsYXknO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvZm9udHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUNBQW1DO0VBQ25DLDJEQUE0RDtFQUM1RCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMkRBQTJEO0VBQzNELGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw0Q0FBK0M7RUFDL0MsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRDQUFtRDtFQUNuRCxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLVNlbWlCb2xkJztcXHJcXG4gIHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG9TbGFiLVNlbWlCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8tU2xhYi1SZWd1bGFyJztcXHJcXG4gIHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG9TbGFiLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLUV4dHJhTGlnaHQnO1xcclxcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1JvYm90b1NsYWItRXh0cmFMaWdodC53b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGxheS1GYWlyLURpc3BsYXknO1xcclxcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1FeHRyYUJvbGQud29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZnVuY3Rpb24gV2VhdGhlckltYWdlKHdlYXRoZXJOYW1lLCB3ZWF0aGVySW1hZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB3ZWF0aGVyTmFtZSxcbiAgICB3ZWF0aGVySW1hZ2UsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJJbWFnZTsiLCJmdW5jdGlvbiBXZWF0aGVyKG1haW5XZWF0aGVyLCB3ZWF0aGVyRGVzY3JpcHRpb24sIHRlbXAsIHRlbXBNaW4sIHRlbXBNYXgsIGljb24pIHtcbiAgcmV0dXJuIHtcbiAgICBtYWluV2VhdGhlcixcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24sXG4gICAgdGVtcCxcbiAgICB0ZW1wTWluLFxuICAgIHRlbXBNYXgsXG4gICAgaWNvbixcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdlZGY3MjQzODJiZGE5YWY1ZWY4YWY3MTM2NDJhZTI5LndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjUwYzFjZDcwMTVhOWQ2YWYwZDU4OTU2MjUyMjNmYzUud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI2ZjJjNTQ0ZWIxYTM3MTlmOTkyNWVhM2QwYzQ1YTZlOC53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE4YmU5MGUxMmU3YmQ1ODQ5ODljMTM1MzM2Zjk2YTYwLndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTMyZmE1MzIxZmRjZDg1YTdiMzgzNjE2ZDFkN2RlMzMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjg3YmU2NWIxYWJjOTkzYmRjZTc0NjRiMTI0NDI2MDljLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhMzJhMTlkN2ZlYWUxOTJmZjNjYjczZjE3YmQwZWNlZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmY4YjI1Y2NhYTU4NTcyNjFkNDFhYTkwZTI4NTk5M2EucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMxMjFmMTQyMzBmYzBmMzlkOGEyMDVjNmM1ZWY0ZTE5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI5NGI3NmNlMzdmMTQ1YTc1NGU2MWYxZThlM2FmMDM5ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTkwMTgzZjA5ZDFiNGU1NTlhYjI1NzJhYTQ3YThmYjcucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjMxODA5NTc5MTg2ZDNhOGZiYmU0ZDIxNGFkN2M2ODc2LnBuZ1wiOyIsImltcG9ydCBXZWF0aGVyIGZyb20gJy4uL2NsYXNzZXMvd2VhdGhlck9iamVjdCc7XG5cbmFzeW5jIGZ1bmN0aW9uIGFwaUZldGNoZXIoYmFzZVVybCwgc2VhcmNoUXVlcnkpIHtcbiAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuR0lQSFlfS0VZO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9cT0ke3NlYXJjaFF1ZXJ5fSZhcHBpZD0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGEuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsO1xufVxuY29uc3QgaWNvbkdldHRlciA9IChpY29uQ29kZSwgYXJyYXkpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXJyYXkuZmlsdGVyKCh3ZWF0aGVyKSA9PiB3ZWF0aGVyLndlYXRoZXJOYW1lID09PSBpY29uQ29kZSk7XG4gIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiByZXN1bHRbMF0ud2VhdGhlckltYWdlO1xuICB9XG4gIHJldHVybiBhcnJheVs2XS53ZWF0aGVySW1hZ2U7XG59O1xuXG5jb25zdCB3ZWF0aGVySWNvbkdldHRlciA9IGFzeW5jIChpY29uQ29kZSwgZWxlbWVudCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uQ29kZX1AMngucG5nYCk7XG4gIGlmIChpY29uQ29kZSA9PT0gJzEzZCcgfHwgaWNvbkNvZGUgPT09ICc1MGQnKSB7XG4gICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSAnaW52ZXJ0KDEpJztcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgfVxuICByZXR1cm4gcmVzcG9uc2UudXJsO1xufTtcblxuY29uc3QgaW1nQ3JlYXRvciA9IGFzeW5jIChjb250YWluZXIsIGltYWdlLCBzcmMpID0+IHtcbiAgaW1hZ2Uuc3JjID0gYXdhaXQgc3JjO1xuICByZXR1cm4gY29udGFpbmVyLmFwcGVuZChpbWFnZSk7XG59O1xuY29uc3Qgd2VhdGhlck9iamVjdENvbnN0cnVjdG9yID0gYXN5bmMgKGFwaURhdGEpID0+IHtcbiAgY29uc3Qgd2VhdGhlck9iamVjdCA9IGF3YWl0IGFwaURhdGE7XG4gIGNvbnN0IHdlYXRoZXIgPSBXZWF0aGVyKFxuICAgIGF3YWl0IHdlYXRoZXJPYmplY3Qud2VhdGhlclswXS5tYWluLFxuICAgIGF3YWl0IHdlYXRoZXJPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICBhd2FpdCB3ZWF0aGVyT2JqZWN0Lm1haW4udGVtcCxcbiAgICBhd2FpdCB3ZWF0aGVyT2JqZWN0Lm1haW4udGVtcF9taW4sXG4gICAgYXdhaXQgd2VhdGhlck9iamVjdC5tYWluLnRlbXBfbWF4LFxuICAgIGF3YWl0IHdlYXRoZXJPYmplY3Qud2VhdGhlclswXS5pY29uLFxuICApO1xuICByZXR1cm4gd2VhdGhlcjtcbn07XG5cbmNvbnN0IHdlYXRoZXJPYmplY3RFcnJvciA9IGFzeW5jIChkYXRhKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGF0YTtcbiAgY29uc3Qgd2VhdGhlciA9IFdlYXRoZXIoXG4gICAgYXdhaXQgcmVzcG9uc2UubWVzc2FnZSxcbiAgICAnJyxcbiAgICAnJyxcbiAgICAnJyxcbiAgICAnJyxcbiAgICAnJyxcbiAgKTtcbiAgcmV0dXJuIHdlYXRoZXI7XG59O1xuXG5jb25zdCBwcm9taXNlVG9Kc29uID0gYXN5bmMgKGJhc2VVcmwsIHNlYXJjaFF1ZXJ5LCB1bml0cyA9ICdpbXBlcmlhbCcpID0+IHtcbiAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH1xPSR7c2VhcmNoUXVlcnl9JnVuaXRzPSR7dW5pdHN9JmFwcGlkPSR7YXBpS2V5fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBpZiAoZGF0YS5jb2QgPT09ICc0MDQnKSByZXR1cm4gd2VhdGhlck9iamVjdEVycm9yKGRhdGEpO1xuICByZXR1cm4gd2VhdGhlck9iamVjdENvbnN0cnVjdG9yKGRhdGEpO1xufTtcblxuZXhwb3J0IHtcbiAgYXBpRmV0Y2hlciwgaW1nQ3JlYXRvciwgcHJvbWlzZVRvSnNvbiwgd2VhdGhlck9iamVjdENvbnN0cnVjdG9yLCBpY29uR2V0dGVyLCB3ZWF0aGVySWNvbkdldHRlcixcbn07XG4iLCJcbmNvbnN0IGlucHV0SGFuZGxlciA9IChpbnB1dEVsZW1lbnQpID0+IHtcbiAgaWYgKGlucHV0RWxlbWVudC52YWx1ZSkge1xuICAgIHJldHVybiBpbnB1dEVsZW1lbnQudmFsdWU7XG4gIH1cbiAgcmV0dXJuIEVycm9yKCdObyBpbnB1dCBlbGVtZW50Jyk7XG59O1xuY29uc3QgZW50ZXJTaG9ydGN1dCA9IChidG4sIGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGJ0bi5jbGljaygpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHtcbiAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykgcmV0dXJuICcnO1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59O1xuXG5jb25zdCBlbGVtZW50R2VuZXJhdG9yID0gKGh0bWxFbGVtLCBlbGVtSWQgPSBudWxsLCBlbGVtQ2xhc3MgPSBudWxsKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtodG1sRWxlbX1gKTtcbiAgaWYgKGVsZW1DbGFzcyAhPT0gbnVsbCkgY3JlYXRlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtQ2xhc3MpO1xuICBpZiAoZWxlbUlkICE9PSBudWxsKSBjcmVhdGVkRWxlbWVudC5pZCA9IGVsZW1JZDtcbiAgcmV0dXJuIGNyZWF0ZWRFbGVtZW50O1xufTtcblxuY29uc3QgdGV4dEdlbmVyYXRvciA9ICh0ZXh0KSA9PiB7XG4gIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpZiAodGV4dCAhPT0gJycpIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHRleHRFbGVtZW50O1xufTtcblxuXG5mdW5jdGlvbiB1bml0Q29udmVydGVyKHZhbHVlLCB1bml0cykge1xuICBpZiAodW5pdHMgPT09ICdtZXRyaWMnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gKHZhbHVlICogOSAvIDUpICsgMzI7XG4gICAgcmV0dXJuIE1hdGgucm91bmQocmVzdWx0KTtcbiAgfVxuICBjb25zdCByZXN1bHQgPSAodmFsdWUgLSAzMikgKiAoNSAvIDkpO1xuICByZXR1cm4gTWF0aC5yb3VuZChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiB1bml0U3dhcHBlcih2YWx1ZSkge1xuICAodmFsdWUgPT09ICdtZXRyaWMnKSA/IHZhbHVlID0gJ2ltcGVyaWFsJyA6IHZhbHVlID0gJ21ldHJpYyc7XG4gIHJldHVybiB2YWx1ZTtcbn1cbmNvbnN0IHRvZ2dsZUNvbG9yID0gKHRvZ2dsZUlucHV0LCB2YWx1ZSkgPT4ge1xuICAodmFsdWUgPT09ICdtZXRyaWMnKSA/IHRvZ2dsZUlucHV0LmNoZWNrZWQgPSBmYWxzZSA6IHRvZ2dsZUlucHV0LmNoZWNrZWQgPSB0cnVlO1xufTtcblxuZXhwb3J0IHtcbiAgaW5wdXRIYW5kbGVyLCBlbnRlclNob3J0Y3V0LFxuICBlbGVtZW50R2VuZXJhdG9yLCB0ZXh0R2VuZXJhdG9yLCBjYXBpdGFsaXplLCB1bml0Q29udmVydGVyLCB1bml0U3dhcHBlcixcbiAgdG9nZ2xlQ29sb3IsXG59OyIsImltcG9ydCBtYWluQ29udGFpbmVyIGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLnNjc3MnO1xuXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG4iLCJpbXBvcnQgKiBhcyBBcGlDYWxsIGZyb20gJy4uL3NjcmVlbnMvYXBpRmV0Y2hlcic7XG5pbXBvcnQgKiBhcyBEb21NYW5pcHVsYXRpb24gZnJvbSAnLi9kb21NYW5pcHVsYXRpb24nO1xuaW1wb3J0IFdlYXRoZXJJbWFnZSBmcm9tICcuLi9jbGFzc2VzL3dlYXRoZXJJbWFnZSc7XG5pbXBvcnQgY2xvdWR5IGZyb20gJy4uL2ltYWdlcy9jbG91ZHMucG5nJztcbmltcG9ydCBzdG9ybXkgZnJvbSAnLi4vaW1hZ2VzL3N0b3JtLnBuZyc7XG5pbXBvcnQgc3VubnkgZnJvbSAnLi4vaW1hZ2VzL2NsZWFyLnBuZyc7XG5pbXBvcnQgaGF6eSBmcm9tICcuLi9pbWFnZXMvaGF6ZS5wbmcnO1xuaW1wb3J0IHJhaW55IGZyb20gJy4uL2ltYWdlcy9yYWluLnBuZyc7XG5pbXBvcnQgc25vd3kgZnJvbSAnLi4vaW1hZ2VzL3Nub3cucG5nJztcbmltcG9ydCBlcnJvciBmcm9tICcuLi9pbWFnZXMvZXJyb3IucG5nJztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vaW1hZ2VzL3NlYXJjaC5wbmcnO1xuXG5jb25zdCB3ZWF0aGVyQXJyYXkgPSBbV2VhdGhlckltYWdlKCdDbG91ZHMnLCBjbG91ZHkpLFxuICBXZWF0aGVySW1hZ2UoJ1Nub3cnLCBzbm93eSksXG4gIFdlYXRoZXJJbWFnZSgnUmFpbicsIHJhaW55KSxcbiAgV2VhdGhlckltYWdlKCdEcml6emxlJywgcmFpbnkpLFxuICBXZWF0aGVySW1hZ2UoJ1RodW5kZXJzdG9ybScsIHN0b3JteSksXG4gIFdlYXRoZXJJbWFnZSgnQ2xlYXInLCBzdW5ueSksXG4gIFdlYXRoZXJJbWFnZSgnSGF6ZScsIGhhenkpLFxuICBXZWF0aGVySW1hZ2UoJ2NpdHkgbm90IGZvdW5kJywgZXJyb3IpXTtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xubWFpbkNvbnRhaW5lci5pZCA9ICdtYWluQ29udGFpbmVyJztcbmNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbWFpbkNvbnRhaW5lclRvcENoaWxkID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICdtYWluQ29udGFpbmVyVG9wQ2hpbGQnKTtcbmNvbnN0IG1haW5Db250YWluZXJCb3R0b21DaGlsZCA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnbWFpbkNvbnRhaW5lckJvdHRvbUNoaWxkJyk7XG5jb25zdCBzZWFyY2hCYXJDb250YWluZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ3NlYXJjaEJhckNvbnRhaW5lcicpO1xuY29uc3QgaW5wdXRDb250YWluZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ2lucHV0Q29udGFpbmVyJyk7XG5jb25zdCB0b2dnbGVDb250YWluZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ3RvZ2dsZUNvbnRhaW5lcicpO1xuY29uc3QgY2Vsc2l1c0NvbnRhaW5lciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnY2Vsc2l1c0NvbnRhaW5lcicsICd0ZW1wVGV4dCcpO1xuY2Vsc2l1c0NvbnRhaW5lci5hcHBlbmQoRG9tTWFuaXB1bGF0aW9uLnRleHRHZW5lcmF0b3IoJ0NlbHNpdXMnKSk7XG5jb25zdCBmYWhyZW5oZWl0Q29udGFpbmVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICdmYWhyZW5oZWl0Q29udGFpbmVyJywgJ3RlbXBUZXh0Jyk7XG5mYWhyZW5oZWl0Q29udGFpbmVyLmFwcGVuZChEb21NYW5pcHVsYXRpb24udGV4dEdlbmVyYXRvcignRmFocmVuaGVpdCcpKTtcbmNvbnN0IHRvZ2dsZUxhYmVsID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2xhYmVsJywgJ3N3aXRjaCcpO1xuY29uc3QgdG9nZ2xlSW5wdXQgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignaW5wdXQnLCAndG9nZ2xlSW5wdXQnKTtcblxudG9nZ2xlSW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG5jb25zdCB0b2dnbGVTcGFuID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ3NwYW4nLCAndG9nZ2xlU3BhbicsICdzbGlkZXInKTtcbnRvZ2dsZVNwYW4uY2xhc3NMaXN0LmFkZCgncm91bmQnKTtcbnRvZ2dsZUxhYmVsLmFwcGVuZCh0b2dnbGVJbnB1dCwgdG9nZ2xlU3Bhbik7XG5cbmNvbnN0IG1haW5JbmZvQ29udGFpbmVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICdtYWluSW5mb0NvbnRhaW5lcicpO1xuY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICd3ZWF0aGVyRGVzY3JpcHRpb25Db250YWluZXInKTtcbmNvbnN0IHdlYXRoZXJJY29uQ29udGFpbmVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICd3ZWF0aGVySWNvbkNvbnRhaW5lcicpO1xuY29uc3Qgd2VhdGhlckljb24gPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignaW1nJywgJ3dlYXRoZXJJY29uJyk7XG5jb25zdCB3ZWF0aGVySW5mb0Rlc2NyaXB0aW9uQ29udGFpbmVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICd3ZWF0aGVySW5mb0Rlc2NyaXB0aW9uQ29udGFpbmVyJyk7XG5jb25zdCBEQVlURVhUID0gJ1RvZGF5JztcbmNvbnN0IGNpdHlOYW1lQ29udGFpbmVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICdjaXR5TmFtZUNvbnRhaW5lcicpO1xuY29uc3QgbWFpbldlYXRoZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ21haW5XZWF0aGVyJyk7XG5jb25zdCBtYWluVGVtcCA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnbWFpblRlbXAnKTtcbmNvbnN0IHRlbXBNaW5NYXhDb250YWluZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ3RlbXBNaW5NYXhDb250YWluZXInKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnYnV0dG9uQ29udGFpbmVyJyk7XG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmJ1dHRvbi5pZCA9ICdhcGlCdXR0b24nO1xuYnV0dG9uLnRleHRDb250ZW50ID0gJ1NlYXJjaCc7XG5pbnB1dC5pZCA9ICdhcGlJbnB1dCc7XG5pbnB1dC5wbGFjZWhvbGRlciA9ICdTb21ld2hlcmUgb25seSB3ZSBrbm93JztcbmJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcbmlucHV0Q29udGFpbmVyLmFwcGVuZChpbnB1dCk7XG5zZWFyY2hCYXJDb250YWluZXIuYXBwZW5kKGlucHV0Q29udGFpbmVyLCBidXR0b25Db250YWluZXIpO1xuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5pbWdDb250YWluZXIuaWQgPSAnaW1nQ29udGFpbmVyJztcbmltZy5pZCA9ICdpbWdBUEknO1xuQXBpQ2FsbC5pbWdDcmVhdG9yKGltZ0NvbnRhaW5lciwgaW1nLCBzZWFyY2gpO1xuY2l0eU5hbWVDb250YWluZXIuYXBwZW5kKERvbU1hbmlwdWxhdGlvbi50ZXh0R2VuZXJhdG9yKCdXZWF0aGVyIGFwcCcpKTtcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/JztcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2l0eU5hbWVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5XZWF0aGVyLmlubmVySFRNTCA9ICcnO1xuICBtYWluVGVtcC5pbm5lckhUTUwgPSAnJztcbiAgd2VhdGhlckljb25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHRlbXBNaW5NYXhDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHdlYXRoZXJJbmZvRGVzY3JpcHRpb25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIGxldCB1bml0cyA9ICdtZXRyaWMnO1xuICBBcGlDYWxsLnByb21pc2VUb0pzb24oYmFzZVVybCwgRG9tTWFuaXB1bGF0aW9uLmlucHV0SGFuZGxlcihpbnB1dCksIHVuaXRzKS50aGVuKFxuICAgICh3ZWF0aGVyKSA9PiB7XG4gICAgICBpZiAod2VhdGhlci5tYWluV2VhdGhlciA9PT0gJ2NpdHkgbm90IGZvdW5kJykge1xuICAgICAgICB0b2dnbGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGNhcGl0YWxpemVkID0gRG9tTWFuaXB1bGF0aW9uLmNhcGl0YWxpemUod2VhdGhlci5tYWluV2VhdGhlcik7XG4gICAgICAgIG1haW5XZWF0aGVyLmFwcGVuZChEb21NYW5pcHVsYXRpb24udGV4dEdlbmVyYXRvcihEb21NYW5pcHVsYXRpb24uY2FwaXRhbGl6ZShjYXBpdGFsaXplZCkpKTtcbiAgICAgICAgbWFpbkluZm9Db250YWluZXIuYXBwZW5kKFxuICAgICAgICAgIG1haW5XZWF0aGVyLFxuICAgICAgICApO1xuICAgICAgICBBcGlDYWxsLmltZ0NyZWF0b3IoXG4gICAgICAgICAgaW1nQ29udGFpbmVyLCBpbWcsIEFwaUNhbGwuaWNvbkdldHRlcih3ZWF0aGVyLm1haW5XZWF0aGVyLCB3ZWF0aGVyQXJyYXkpLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9nZ2xlSW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0b2dnbGVDb250YWluZXIuYXBwZW5kKGNlbHNpdXNDb250YWluZXIsIHRvZ2dsZUxhYmVsLCBmYWhyZW5oZWl0Q29udGFpbmVyKTtcbiAgICAgICAgQXBpQ2FsbC5pbWdDcmVhdG9yKFxuICAgICAgICAgIGltZ0NvbnRhaW5lciwgaW1nLCBBcGlDYWxsLmljb25HZXR0ZXIod2VhdGhlci5tYWluV2VhdGhlciwgd2VhdGhlckFycmF5KSxcbiAgICAgICAgKTtcbiAgICAgICAgY2l0eU5hbWVDb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgIERvbU1hbmlwdWxhdGlvbi50ZXh0R2VuZXJhdG9yKFxuICAgICAgICAgICAgRG9tTWFuaXB1bGF0aW9uLmNhcGl0YWxpemUoRG9tTWFuaXB1bGF0aW9uLmlucHV0SGFuZGxlcihpbnB1dCkpLFxuICAgICAgICAgICksXG4gICAgICAgICk7XG4gICAgICAgIG1haW5XZWF0aGVyLmFwcGVuZChEb21NYW5pcHVsYXRpb24udGV4dEdlbmVyYXRvcih3ZWF0aGVyLm1haW5XZWF0aGVyKSk7XG4gICAgICAgIG1haW5UZW1wLmFwcGVuZChEb21NYW5pcHVsYXRpb24udGV4dEdlbmVyYXRvcihgJHtNYXRoLnJvdW5kKHdlYXRoZXIudGVtcCl9wrBgKSk7XG4gICAgICAgIHRvZ2dsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHdlYXRoZXIudGVtcCA9IERvbU1hbmlwdWxhdGlvbi51bml0Q29udmVydGVyKHdlYXRoZXIudGVtcCwgdW5pdHMpO1xuICAgICAgICAgIHdlYXRoZXIudGVtcE1pbiA9IERvbU1hbmlwdWxhdGlvbi51bml0Q29udmVydGVyKHdlYXRoZXIudGVtcE1pbiwgdW5pdHMpO1xuICAgICAgICAgIHdlYXRoZXIudGVtcE1heCA9IERvbU1hbmlwdWxhdGlvbi51bml0Q29udmVydGVyKHdlYXRoZXIudGVtcE1heCwgdW5pdHMpO1xuICAgICAgICAgIHVuaXRzID0gRG9tTWFuaXB1bGF0aW9uLnVuaXRTd2FwcGVyKHVuaXRzKTtcbiAgICAgICAgICBEb21NYW5pcHVsYXRpb24udG9nZ2xlQ29sb3IodG9nZ2xlSW5wdXQsIHVuaXRzKTtcbiAgICAgICAgICBtYWluVGVtcC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICB0ZW1wTWluTWF4Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIG1haW5UZW1wLmFwcGVuZChEb21NYW5pcHVsYXRpb24udGV4dEdlbmVyYXRvcihgJHt3ZWF0aGVyLnRlbXB9wrBgKSk7XG5cbiAgICAgICAgICB0ZW1wTWluTWF4Q29udGFpbmVyLmFwcGVuZChEb21NYW5pcHVsYXRpb24udGV4dEdlbmVyYXRvcihcbiAgICAgICAgICAgIGAke3dlYXRoZXIudGVtcE1heH3CsCAvICR7d2VhdGhlci50ZW1wTWlufcKwYCxcbiAgICAgICAgICApKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEFwaUNhbGwuaW1nQ3JlYXRvcih3ZWF0aGVySWNvbkNvbnRhaW5lciwgd2VhdGhlckljb24sXG4gICAgICAgICAgQXBpQ2FsbC53ZWF0aGVySWNvbkdldHRlcih3ZWF0aGVyLmljb24sIHdlYXRoZXJJY29uKSk7XG4gICAgICAgIHdlYXRoZXJJbmZvRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKERBWVRFWFQsXG4gICAgICAgICAgRG9tTWFuaXB1bGF0aW9uLnRleHRHZW5lcmF0b3Iod2VhdGhlci53ZWF0aGVyRGVzY3JpcHRpb24pKTtcbiAgICAgICAgdGVtcE1pbk1heENvbnRhaW5lci5hcHBlbmQoRG9tTWFuaXB1bGF0aW9uLnRleHRHZW5lcmF0b3IoXG4gICAgICAgICAgYCR7TWF0aC5yb3VuZCh3ZWF0aGVyLnRlbXBNYXgpfcKwIC8gJHtNYXRoLnJvdW5kKHdlYXRoZXIudGVtcE1pbil9wrBgLFxuICAgICAgICApKTtcbiAgICAgICAgd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgICB3ZWF0aGVySWNvbkNvbnRhaW5lciwgd2VhdGhlckluZm9EZXNjcmlwdGlvbkNvbnRhaW5lciwgdGVtcE1pbk1heENvbnRhaW5lcixcbiAgICAgICAgKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lckJvdHRvbUNoaWxkLmFwcGVuZChpbWdDb250YWluZXIsIHdlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gICAgICAgIG1haW5JbmZvQ29udGFpbmVyLmluc2VydEJlZm9yZSh0b2dnbGVDb250YWluZXIsIG1haW5JbmZvQ29udGFpbmVyLmNoaWxkTm9kZXNbMV0pO1xuICAgICAgfVxuICAgICAgd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICAsXG4gICk7XG59KTtcbkRvbU1hbmlwdWxhdGlvbi5lbnRlclNob3J0Y3V0KGJ1dHRvbiwgaW5wdXQpO1xubWFpbkluZm9Db250YWluZXIuYXBwZW5kKGNpdHlOYW1lQ29udGFpbmVyLCBtYWluV2VhdGhlciwgbWFpblRlbXApO1xud2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZChcbiAgd2VhdGhlckljb25Db250YWluZXIsIHdlYXRoZXJJbmZvRGVzY3JpcHRpb25Db250YWluZXIsIHRlbXBNaW5NYXhDb250YWluZXIsXG4pO1xubWFpbkNvbnRhaW5lclRvcENoaWxkLmFwcGVuZChzZWFyY2hCYXJDb250YWluZXIsIG1haW5JbmZvQ29udGFpbmVyKTtcbm1haW5Db250YWluZXJCb3R0b21DaGlsZC5hcHBlbmQoaW1nQ29udGFpbmVyLCB3ZWF0aGVyRGVzY3JpcHRpb25Db250YWluZXIpO1xubWFpbkNvbnRhaW5lci5hcHBlbmQoXG4gIG1haW5Db250YWluZXJUb3BDaGlsZCxcbiAgbWFpbkNvbnRhaW5lckJvdHRvbUNoaWxkLFxuKTtcbmV4cG9ydCBkZWZhdWx0IG1haW5Db250YWluZXI7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=