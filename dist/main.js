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
___CSS_LOADER_EXPORT___.push([module.i, "html, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n#mainContainer {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  background-color: #f8e2ee;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n}\n#mainContainer #mainContainerTopChild,\n#mainContainer #mainContainerBottomChild {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n#mainContainer #mainContainerTopChild {\n  width: 100%;\n  height: 35%;\n}\n#mainContainer #mainContainerBottomChild {\n  width: 90%;\n  height: 75%;\n}\n#mainContainer #searchBarContainer {\n  margin: 20px 0;\n  width: 100%;\n  display: flex;\n  height: auto;\n  flex-flow: row wrap;\n  justify-content: center;\n}\n#mainContainer #searchBarContainer #inputContainer {\n  width: 60%;\n  height: 94%;\n}\n#mainContainer #searchBarContainer #inputContainer input {\n  font-size: 4vw;\n  text-align: center;\n  width: 100%;\n  padding: 10px 5px;\n  border: none;\n  color: #ba176f;\n  background-color: white;\n  border-radius: 8px;\n}\n#mainContainer #searchBarContainer #inputContainer input:focus {\n  outline: none;\n  border: none;\n}\n#mainContainer #searchBarContainer #inputContainer input::placeholder {\n  font-family: \"Roboto-Slab-Regular\", serif;\n  font-size: 4vw;\n  color: grey;\n  text-align: center;\n}\n#mainContainer #searchBarContainer #buttonContainer {\n  width: 20%;\n  height: 91%;\n  margin: 0 8px;\n  border: 0;\n}\n#mainContainer #searchBarContainer #buttonContainer button {\n  font-size: 4vw;\n  background-color: #ba176f;\n  font-family: \"Roboto-Slab-Regular\", serif;\n  color: white;\n  border: 0;\n  height: 100%;\n  border-bottom-right-radius: 8px;\n  border-top-right-radius: 8px;\n  width: 100%;\n  padding: 10px 5px;\n}\n#mainContainer #toggleContainer {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n#mainContainer #toggleContainer .tempText {\n  font-family: \"Roboto-Slab-Regular\", serif;\n  font-size: 6vw;\n}\n#mainContainer #toggleContainer #switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n#mainContainer #toggleContainer #toggleInput {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n#mainContainer #toggleContainer .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #2f2e41ff;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n#mainContainer #toggleContainer .slider::before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n#mainContainer #toggleContainer #toggleInput:checked + .slider {\n  background-color: #ba176fff;\n}\n#mainContainer #toggleContainer #toggleInput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n#mainContainer #toggleContainer #toggleInput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n#mainContainer #toggleContainer .round {\n  border-radius: 34px;\n}\n#mainContainer #toggleContainer .round::before {\n  border-radius: 50%;\n}\n#mainContainer #toggleContainer div {\n  margin: 0 10px;\n}\n#mainContainer #mainInfoContainer {\n  height: 80%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n#mainContainer #mainInfoContainer #cityNameContainer {\n  font-family: \"Play-Fair-Display\", serif;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n#mainContainer #mainInfoContainer #cityNameContainer p {\n  padding: 0;\n  margin: 0;\n  font-size: 8vw;\n}\n#mainContainer #mainInfoContainer #mainWeather {\n  font-family: \"Roboto-Slab-SemiBold\", serif;\n}\n#mainContainer #mainInfoContainer #mainWeather, #mainContainer #mainInfoContainer #mainTemp {\n  width: min-content;\n  height: min-content;\n  padding-left: 20px;\n}\n#mainContainer #mainInfoContainer #mainWeather p, #mainContainer #mainInfoContainer #mainTemp p {\n  font-size: 7vw;\n  margin: 0;\n  padding: 0;\n}\n#mainContainer #imgContainer {\n  width: 100%;\n  height: 40%;\n}\n#mainContainer #imgContainer #imgAPI {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n#mainContainer #weatherDescriptionContainer {\n  font-family: \"Roboto-Slab-Regular\", serif;\n  font-size: 1.1rem;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  background-color: #ba176f;\n  display: none;\n  height: min-content;\n}\n#mainContainer #weatherDescriptionContainer div {\n  color: white;\n  height: min-content;\n  width: 28%;\n  margin: 20px 8px;\n}\n#mainContainer #weatherDescriptionContainer #tempMinMaxContainer {\n  font-size: 1rem;\n  width: 30%;\n  height: 55%;\n  display: flex;\n  align-items: flex-end;\n}\n#mainContainer #weatherDescriptionContainer #weatherIconContainer {\n  width: max-content;\n  margin: 20px 0;\n}", "",{"version":3,"sources":["webpack://src/styles/style.scss"],"names":[],"mappings":"AAMA;EACI,WAAA;EACA,YAAA;EACA,SAAA;AAJJ;;AAMA;EACI,WAAA;EACA,aAAA;EACA,aAAA;EACA,yBAAA;EACA,wBAAA;EACA,uBAAA;EACA,mBAAA;AAHJ;AAII;;EAEI,aAAA;EACA,uBAAA;EACA,sBAAA;AAFR;AAKI;EACI,WAAA;EACA,WAAA;AAHR;AAKI;EACI,UAAA;EACA,WAAA;AAHR;AAKI;EACI,cAAA;EAEA,WAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AAJR;AAKQ;EAEI,UAAA;EACA,WAAA;AAJZ;AAKY;EACI,cAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,YAAA;EACA,cAAA;EACA,uBAAA;EACA,kBAAA;AAHhB;AAIgB;EACI,aAAA;EACA,YAAA;AAFpB;AAKgB;EACI,yCAAA;EACA,cAAA;EACA,WAAA;EACA,kBAAA;AAHpB;AAOQ;EACI,UAAA;EACA,WAAA;EACA,aAAA;EACA,SAAA;AALZ;AAMY;EACI,cAAA;EACA,yBAAA;EACA,yCAAA;EACA,YAAA;EACA,SAAA;EACA,YAAA;EACA,+BAAA;EACA,4BAAA;EACA,WAAA;EACA,iBAAA;AAJhB;AASI;EACI,aAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;AAPR;AAQQ;EACI,yCAAA;EACA,cAAA;AANZ;AAQQ;EACI,kBAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;AANZ;AAQQ;EACI,UAAA;EACA,QAAA;EACA,SAAA;AANZ;AAQQ;EACI,kBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,2BAAA;EACA,wBAAA;EACA,gBAAA;AANZ;AAOY;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,uBAAA;EACA,wBAAA;EACA,gBAAA;AALhB;AAQQ;EACI,2BAAA;AANZ;AAQQ;EACI,2BAAA;AANZ;AASQ;EACI,mCAAA;EACA,+BAAA;EACA,2BAAA;AAPZ;AASQ;EACI,mBAAA;AAPZ;AAQY;EACI,kBAAA;AANhB;AASQ;EACI,cAAA;AAPZ;AAUI;EACI,WAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AARR;AAUQ;EACI,uCAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AARZ;AASY;EACI,UAAA;EACA,SAAA;EACA,cAAA;AAPhB;AAUQ;EACI,0CAAA;AARZ;AAUQ;EACI,kBAAA;EACA,mBAAA;EACA,kBAAA;AARZ;AASY;EACI,cAAA;EACD,SAAA;EACA,UAAA;AAPf;AAWI;EACI,WAAA;EACA,WAAA;AATR;AAUQ;EACI,WAAA;EACA,YAAA;EACA,mBAAA;AARZ;AAWI;EACI,yCAAA;EACA,iBAAA;EACA,4BAAA;EACA,6BAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;AATR;AAUQ;EACI,YAAA;EACA,mBAAA;EACA,UAAA;EACA,gBAAA;AARZ;AAUQ;EACI,eAAA;EACA,UAAA;EACA,WAAA;EACA,aAAA;EACA,qBAAA;AARZ;AAUQ;EACI,kBAAA;EACA,cAAA;AARZ","sourcesContent":["@import '../styles/fonts.css';\r\n\r\n// * {\r\n//     border: 1px red solid;\r\n// }\r\n\r\nhtml, body {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n#mainContainer {\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n    background-color: #f8e2ee;\r\n    flex-flow: column nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    #mainContainerTopChild,\r\n    #mainContainerBottomChild {\r\n        display: flex;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n    }\r\n\r\n    #mainContainerTopChild {\r\n        width: 100%;\r\n        height: 35%;\r\n    }\r\n    #mainContainerBottomChild {\r\n        width: 90%;\r\n        height: 75%;\r\n    }\r\n    #searchBarContainer {\r\n        margin: 20px 0;\r\n        \r\n        width: 100%;\r\n        display: flex;\r\n        height: auto;\r\n        flex-flow: row wrap;\r\n        justify-content: center;\r\n        #inputContainer {\r\n            \r\n            width: 60%;\r\n            height: 94%;\r\n            input {\r\n                font-size: 4vw;\r\n                text-align: center;\r\n                width: 100%;\r\n                padding: 10px 5px;\r\n                border: none;\r\n                color: #ba176f;\r\n                background-color: white;\r\n                border-radius: 8px;\r\n                &:focus {\r\n                    outline: none;\r\n                    border: none;\r\n\r\n                }\r\n                &::placeholder {\r\n                    font-family: 'Roboto-Slab-Regular', serif ;                    \r\n                    font-size: 4vw;\r\n                    color: grey;\r\n                    text-align: center;\r\n                }\r\n            }\r\n        }\r\n        #buttonContainer {\r\n            width: 20%;\r\n            height: 91%;\r\n            margin: 0 8px;\r\n            border: 0;\r\n            button {\r\n                font-size: 4vw;\r\n                background-color: #ba176f;\r\n                font-family: 'Roboto-Slab-Regular', serif;\r\n                color: white;\r\n                border: 0;\r\n                height: 100%;\r\n                border-bottom-right-radius: 8px;\r\n                border-top-right-radius: 8px;\r\n                width: 100%;\r\n                padding: 10px 5px;\r\n            }\r\n        }\r\n    }\r\n\r\n    #toggleContainer {\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: center;\r\n        align-items: center;\r\n        .tempText {\r\n            font-family: 'Roboto-Slab-Regular', serif ;\r\n            font-size: 6vw;\r\n        }\r\n        #switch {\r\n            position: relative;\r\n            display: inline-block;\r\n            width: 60px;\r\n            height: 34px;\r\n        }\r\n        #toggleInput {\r\n            opacity: 0;\r\n            width: 0;\r\n            height: 0;\r\n        }\r\n        .slider {\r\n            position: absolute;\r\n            cursor: pointer;\r\n            top: 0;\r\n            left: 0;\r\n            right: 0;\r\n            bottom: 0;\r\n            background-color: #2f2e41ff;\r\n            -webkit-transition: .4s;\r\n            transition: .4s;\r\n            &::before {\r\n                position: absolute;\r\n                content: \"\";\r\n                height: 26px;\r\n                width: 26px;\r\n                left: 4px;\r\n                bottom: 4px;\r\n                background-color: white;\r\n                -webkit-transition: .4s;\r\n                transition: .4s;\r\n            }\r\n        }\r\n        #toggleInput:checked + .slider {\r\n            background-color: #ba176fff;\r\n        }\r\n        #toggleInput:focus + .slider {\r\n            box-shadow: 0 0 1px #2196F3;\r\n          }\r\n\r\n        #toggleInput:checked + .slider:before {\r\n            -webkit-transform: translateX(26px);\r\n            -ms-transform: translateX(26px);\r\n            transform: translateX(26px);\r\n          }\r\n        .round {\r\n            border-radius: 34px;\r\n            &::before {\r\n                border-radius: 50%;\r\n            }\r\n        }\r\n        div {\r\n            margin: 0 10px;\r\n        }\r\n    }\r\n    #mainInfoContainer {\r\n        height: 80%;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        \r\n        #cityNameContainer {\r\n            font-family: 'Play-Fair-Display', serif;\r\n            width: 100%;\r\n            display: flex;\r\n            justify-content: center;\r\n            margin-bottom: 20px;\r\n            p {\r\n                padding: 0;\r\n                margin: 0;\r\n                font-size: 8vw;\r\n            }\r\n        }\r\n        #mainWeather {\r\n            font-family: 'Roboto-Slab-SemiBold', serif;\r\n        }\r\n        #mainWeather, #mainTemp {\r\n            width: min-content;\r\n            height: min-content;\r\n            padding-left: 20px;\r\n            p {\r\n                font-size: 7vw;\r\n               margin: 0;\r\n               padding: 0; \r\n            }\r\n        }\r\n    }\r\n    #imgContainer {\r\n        width: 100%;\r\n        height: 40%;\r\n        #imgAPI {\r\n            width: 100%;\r\n            height: 100%;\r\n            object-fit: contain;\r\n        }\r\n    }\r\n    #weatherDescriptionContainer {\r\n        font-family: 'Roboto-Slab-Regular', serif;\r\n        font-size: 1.1rem;\r\n        border-top-left-radius: 20px;\r\n        border-top-right-radius: 20px;\r\n        background-color: #ba176f;\r\n        display: none;\r\n        height: min-content;\r\n        div {\r\n            color: white;\r\n            height: min-content;\r\n            width: 28%;\r\n            margin: 20px 8px;\r\n        }\r\n        #tempMinMaxContainer {\r\n            font-size: 1rem;\r\n            width: 30%;\r\n            height: 55%;\r\n            display: flex;\r\n            align-items: flex-end;\r\n        }\r\n        #weatherIconContainer {\r\n            width: max-content;\r\n            margin: 20px 0;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "    @font-face {\r\n    font-family: 'Roboto-Slab-SemiBold';\r\n    src:\r\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\r\n    font-weight: 600;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: 'Roboto-Slab-Regular';\r\n    src:\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n    font-weight: 400;\r\n  }\r\n\r\n  @font-face {\r\n      font-family: 'Roboto-Slab-ExtraLight';\r\n      \r\n      src:\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n        font-weight: 200;\r\n  }\r\n\r\n  @font-face {\r\n      font-family: 'Play-Fair-Display';\r\n      src:\r\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n        font-weight: 800;\r\n  }", "",{"version":3,"sources":["webpack://src/styles/fonts.css"],"names":[],"mappings":"IAAI;IACA,mCAAmC;IACnC;4DACyD;IACzD,gBAAgB;EAClB;;EAEA;IACE,kCAAkC;IAClC;8DAC0D;IAC1D,gBAAgB;EAClB;;EAEA;MACI,qCAAqC;;MAErC;+CAC4C;QAC1C,gBAAgB;EACtB;;EAEA;MACI,gCAAgC;MAChC;+CACgD;QAC9C,gBAAgB;EACtB","sourcesContent":["    @font-face {\r\n    font-family: 'Roboto-Slab-SemiBold';\r\n    src:\r\n      url('../fonts/RobotoSlab-SemiBold.woff') format('woff');\r\n    font-weight: 600;\r\n  }\r\n  \r\n  @font-face {\r\n    font-family: 'Roboto-Slab-Regular';\r\n    src:\r\n        url('../fonts/RobotoSlab-Regular.woff') format('woff');\r\n    font-weight: 400;\r\n  }\r\n\r\n  @font-face {\r\n      font-family: 'Roboto-Slab-ExtraLight';\r\n      \r\n      src:\r\n        url('../fonts/RobotoSlab-ExtraLight.woff');\r\n        font-weight: 200;\r\n  }\r\n\r\n  @font-face {\r\n      font-family: 'Play-Fair-Display';\r\n      src:\r\n        url('../fonts/PlayfairDisplay-ExtraBold.woff');\r\n        font-weight: 800;\r\n  }"],"sourceRoot":""}]);
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
  const response = await fetch(`http://openweathermap.org/img/wn/${iconCode}@2x.png`);
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

// Change all document createElement and text to use the general purpose functions
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
        // mainContainerTopChild.insertBefore(toggleContainer, mainContainerTopChild.childNodes[2]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZm9udHMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvd2VhdGhlckltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL3dlYXRoZXJPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1FeHRyYUJvbGQud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvUm9ib3RvU2xhYi1FeHRyYUxpZ2h0LndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1JvYm90b1NsYWItUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9Sb2JvdG9TbGFiLVNlbWlCb2xkLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jbGVhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jbG91ZHMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZXJyb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGF6ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yYWluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zbm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0b3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9hcGlGZXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzRGO0FBQ1k7QUFDeEcsOEJBQThCLG1GQUEyQjtBQUN6RCwwQkFBMEIsc0ZBQWlDO0FBQzNEO0FBQ0EsOEJBQThCLFFBQVMsZUFBZSxnQkFBZ0IsaUJBQWlCLGNBQWMsR0FBRyxvQkFBb0IsZ0JBQWdCLGtCQUFrQixrQkFBa0IsOEJBQThCLDZCQUE2Qiw0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aW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZvbnRzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI21haW5Db250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGUyZWU7XFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNtYWluQ29udGFpbmVyICNtYWluQ29udGFpbmVyVG9wQ2hpbGQsXFxuI21haW5Db250YWluZXIgI21haW5Db250YWluZXJCb3R0b21DaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjbWFpbkNvbnRhaW5lclRvcENoaWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNSU7XFxufVxcbiNtYWluQ29udGFpbmVyICNtYWluQ29udGFpbmVyQm90dG9tQ2hpbGQge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogNzUlO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjc2VhcmNoQmFyQ29udGFpbmVyIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjc2VhcmNoQmFyQ29udGFpbmVyICNpbnB1dENvbnRhaW5lciB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA5NCU7XFxufVxcbiNtYWluQ29udGFpbmVyICNzZWFyY2hCYXJDb250YWluZXIgI2lucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gIGZvbnQtc2l6ZTogNHZ3O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjYmExNzZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbiNtYWluQ29udGFpbmVyICNzZWFyY2hCYXJDb250YWluZXIgI2lucHV0Q29udGFpbmVyIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbiNtYWluQ29udGFpbmVyICNzZWFyY2hCYXJDb250YWluZXIgI2lucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1TbGFiLVJlZ3VsYXJcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogNHZ3O1xcbiAgY29sb3I6IGdyZXk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNtYWluQ29udGFpbmVyICNzZWFyY2hCYXJDb250YWluZXIgI2J1dHRvbkNvbnRhaW5lciB7XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiA5MSU7XFxuICBtYXJnaW46IDAgOHB4O1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjc2VhcmNoQmFyQ29udGFpbmVyICNidXR0b25Db250YWluZXIgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogNHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTc2ZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLVNsYWItUmVndWxhclxcXCIsIHNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjdG9nZ2xlQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciAudGVtcFRleHQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tU2xhYi1SZWd1bGFyXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDZ2dztcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciAjc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjdG9nZ2xlQ29udGFpbmVyICN0b2dnbGVJbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZTQxZmY7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjdG9nZ2xlQ29udGFpbmVyIC5zbGlkZXI6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgI3RvZ2dsZUlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYTE3NmZmZjtcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciAjdG9nZ2xlSW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciAjdG9nZ2xlSW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciAucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciAucm91bmQ6OmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgZGl2IHtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjbWFpbkluZm9Db250YWluZXIge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbiNtYWluQ29udGFpbmVyICNtYWluSW5mb0NvbnRhaW5lciAjY2l0eU5hbWVDb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5LUZhaXItRGlzcGxheVxcXCIsIHNlcmlmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjbWFpbkluZm9Db250YWluZXIgI2NpdHlOYW1lQ29udGFpbmVyIHAge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogOHZ3O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjbWFpbkluZm9Db250YWluZXIgI21haW5XZWF0aGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLVNsYWItU2VtaUJvbGRcXFwiLCBzZXJpZjtcXG59XFxuI21haW5Db250YWluZXIgI21haW5JbmZvQ29udGFpbmVyICNtYWluV2VhdGhlciwgI21haW5Db250YWluZXIgI21haW5JbmZvQ29udGFpbmVyICNtYWluVGVtcCB7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjbWFpbkluZm9Db250YWluZXIgI21haW5XZWF0aGVyIHAsICNtYWluQ29udGFpbmVyICNtYWluSW5mb0NvbnRhaW5lciAjbWFpblRlbXAgcCB7XFxuICBmb250LXNpemU6IDd2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbiNtYWluQ29udGFpbmVyICNpbWdDb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwJTtcXG59XFxuI21haW5Db250YWluZXIgI2ltZ0NvbnRhaW5lciAjaW1nQVBJIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuI21haW5Db250YWluZXIgI3dlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1TbGFiLVJlZ3VsYXJcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTc2ZjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyIGRpdiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgd2lkdGg6IDI4JTtcXG4gIG1hcmdpbjogMjBweCA4cHg7XFxufVxcbiNtYWluQ29udGFpbmVyICN3ZWF0aGVyRGVzY3JpcHRpb25Db250YWluZXIgI3RlbXBNaW5NYXhDb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogNTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuI21haW5Db250YWluZXIgI3dlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lciAjd2VhdGhlckljb25Db250YWluZXIge1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFKSjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEo7QUFJSTs7RUFFSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUZSO0FBS0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUhSO0FBS0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUhSO0FBS0k7RUFDSSxjQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUpSO0FBS1E7RUFFSSxVQUFBO0VBQ0EsV0FBQTtBQUpaO0FBS1k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFIaEI7QUFJZ0I7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUZwQjtBQUtnQjtFQUNJLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUhwQjtBQU9RO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUxaO0FBTVk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFKaEI7QUFTSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVBSO0FBUVE7RUFDSSx5Q0FBQTtFQUNBLGNBQUE7QUFOWjtBQVFRO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTlo7QUFRUTtFQUNJLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQU5aO0FBUVE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBTlo7QUFPWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFMaEI7QUFRUTtFQUNJLDJCQUFBO0FBTlo7QUFRUTtFQUNJLDJCQUFBO0FBTlo7QUFTUTtFQUNJLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtBQVBaO0FBU1E7RUFDSSxtQkFBQTtBQVBaO0FBUVk7RUFDSSxrQkFBQTtBQU5oQjtBQVNRO0VBQ0ksY0FBQTtBQVBaO0FBVUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBUlI7QUFVUTtFQUNJLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUlo7QUFTWTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQVBoQjtBQVVRO0VBQ0ksMENBQUE7QUFSWjtBQVVRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUlo7QUFTWTtFQUNJLGNBQUE7RUFDRCxTQUFBO0VBQ0EsVUFBQTtBQVBmO0FBV0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQVRSO0FBVVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUlo7QUFXSTtFQUNJLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFUUjtBQVVRO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBUlo7QUFVUTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQVJaO0FBVVE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFSWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi9zdHlsZXMvZm9udHMuY3NzJztcXHJcXG5cXHJcXG4vLyAqIHtcXHJcXG4vLyAgICAgYm9yZGVyOiAxcHggcmVkIHNvbGlkO1xcclxcbi8vIH1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4jbWFpbkNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhlMmVlO1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAjbWFpbkNvbnRhaW5lclRvcENoaWxkLFxcclxcbiAgICAjbWFpbkNvbnRhaW5lckJvdHRvbUNoaWxkIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI21haW5Db250YWluZXJUb3BDaGlsZCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMzUlO1xcclxcbiAgICB9XFxyXFxuICAgICNtYWluQ29udGFpbmVyQm90dG9tQ2hpbGQge1xcclxcbiAgICAgICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNzUlO1xcclxcbiAgICB9XFxyXFxuICAgICNzZWFyY2hCYXJDb250YWluZXIge1xcclxcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICNpbnB1dENvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDk0JTtcXHJcXG4gICAgICAgICAgICBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogI2JhMTc2ZjtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgICAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVNsYWItUmVndWxhcicsIHNlcmlmIDsgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNidXR0b25Db250YWluZXIge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA5MSU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICAgICAgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0dnc7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTE3NmY7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVNsYWItUmVndWxhcicsIHNlcmlmO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN0b2dnbGVDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgLnRlbXBUZXh0IHtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLVJlZ3VsYXInLCBzZXJpZiA7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiA2dnc7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjc3dpdGNoIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICN0b2dnbGVJbnB1dCB7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuc2xpZGVyIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZTQxZmY7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2cHg7XFxyXFxuICAgICAgICAgICAgICAgIGxlZnQ6IDRweDtcXHJcXG4gICAgICAgICAgICAgICAgYm90dG9tOiA0cHg7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICN0b2dnbGVJbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTc2ZmZmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI3RvZ2dsZUlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdG9nZ2xlSW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgLnJvdW5kIHtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcclxcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBkaXYge1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICNtYWluSW5mb0NvbnRhaW5lciB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgI2NpdHlOYW1lQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BsYXktRmFpci1EaXNwbGF5Jywgc2VyaWY7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHZ3O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNtYWluV2VhdGhlciB7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tU2xhYi1TZW1pQm9sZCcsIHNlcmlmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI21haW5XZWF0aGVyLCAjbWFpblRlbXAge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3dnc7XFxyXFxuICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7IFxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAjaW1nQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MCU7XFxyXFxuICAgICAgICAjaW1nQVBJIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAjd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVNsYWItUmVndWxhcicsIHNlcmlmO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExNzZmO1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICAgICAgICBkaXYge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyOCU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDhweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICN0ZW1wTWluTWF4Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDU1JTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICN3ZWF0aGVySWNvbkNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9mb250cy9Sb2JvdG9TbGFiLVNlbWlCb2xkLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vZm9udHMvUm9ib3RvU2xhYi1SZWd1bGFyLndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi4vZm9udHMvUm9ib3RvU2xhYi1FeHRyYUxpZ2h0LndvZmZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyBmcm9tIFwiLi4vZm9udHMvUGxheWZhaXJEaXNwbGF5LUV4dHJhQm9sZC53b2ZmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiICAgIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLVNlbWlCb2xkJztcXHJcXG4gICAgc3JjOlxcclxcbiAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLVJlZ3VsYXInO1xcclxcbiAgICBzcmM6XFxyXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgQGZvbnQtZmFjZSB7XFxyXFxuICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tU2xhYi1FeHRyYUxpZ2h0JztcXHJcXG4gICAgICBcXHJcXG4gICAgICBzcmM6XFxyXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnUGxheS1GYWlyLURpc3BsYXknO1xcclxcbiAgICAgIHNyYzpcXHJcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2ZvbnRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiSUFBSTtJQUNBLG1DQUFtQztJQUNuQzs0REFDeUQ7SUFDekQsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDOzhEQUMwRDtJQUMxRCxnQkFBZ0I7RUFDbEI7O0VBRUE7TUFDSSxxQ0FBcUM7O01BRXJDOytDQUM0QztRQUMxQyxnQkFBZ0I7RUFDdEI7O0VBRUE7TUFDSSxnQ0FBZ0M7TUFDaEM7K0NBQ2dEO1FBQzlDLGdCQUFnQjtFQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgICAgQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVNsYWItU2VtaUJvbGQnO1xcclxcbiAgICBzcmM6XFxyXFxuICAgICAgdXJsKCcuLi9mb250cy9Sb2JvdG9TbGFiLVNlbWlCb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVNsYWItUmVndWxhcic7XFxyXFxuICAgIHNyYzpcXHJcXG4gICAgICAgIHVybCgnLi4vZm9udHMvUm9ib3RvU2xhYi1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVNsYWItRXh0cmFMaWdodCc7XFxyXFxuICAgICAgXFxyXFxuICAgICAgc3JjOlxcclxcbiAgICAgICAgdXJsKCcuLi9mb250cy9Sb2JvdG9TbGFiLUV4dHJhTGlnaHQud29mZicpO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnUGxheS1GYWlyLURpc3BsYXknO1xcclxcbiAgICAgIHNyYzpcXHJcXG4gICAgICAgIHVybCgnLi4vZm9udHMvUGxheWZhaXJEaXNwbGF5LUV4dHJhQm9sZC53b2ZmJyk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImZ1bmN0aW9uIFdlYXRoZXJJbWFnZSh3ZWF0aGVyTmFtZSwgd2VhdGhlckltYWdlKSB7XG4gIHJldHVybiB7XG4gICAgd2VhdGhlck5hbWUsXG4gICAgd2VhdGhlckltYWdlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVySW1hZ2U7IiwiZnVuY3Rpb24gV2VhdGhlcihtYWluV2VhdGhlciwgd2VhdGhlckRlc2NyaXB0aW9uLCB0ZW1wLCB0ZW1wTWluLCB0ZW1wTWF4LCBpY29uKSB7XG4gIHJldHVybiB7XG4gICAgbWFpbldlYXRoZXIsXG4gICAgd2VhdGhlckRlc2NyaXB0aW9uLFxuICAgIHRlbXAsXG4gICAgdGVtcE1pbixcbiAgICB0ZW1wTWF4LFxuICAgIGljb24sXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3ZWRmNzI0MzgyYmRhOWFmNWVmOGFmNzEzNjQyYWUyOS53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjI1MGMxY2Q3MDE1YTlkNmFmMGQ1ODk1NjI1MjIzZmM1LndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNmYyYzU0NGViMWEzNzE5Zjk5MjVlYTNkMGM0NWE2ZTgud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhOGJlOTBlMTJlN2JkNTg0OTg5YzEzNTMzNmY5NmE2MC53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjUzMmZhNTMyMWZkY2Q4NWE3YjM4MzYxNmQxZDdkZTMzLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4N2JlNjViMWFiYzk5M2JkY2U3NDY0YjEyNDQyNjA5Yy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTMyYTE5ZDdmZWFlMTkyZmYzY2I3M2YxN2JkMGVjZWYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZmOGIyNWNjYWE1ODU3MjYxZDQxYWE5MGUyODU5OTNhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMTIxZjE0MjMwZmMwZjM5ZDhhMjA1YzZjNWVmNGUxOS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTRiNzZjZTM3ZjE0NWE3NTRlNjFmMWU4ZTNhZjAzOWUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE5MDE4M2YwOWQxYjRlNTU5YWIyNTcyYWE0N2E4ZmI3LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMTgwOTU3OTE4NmQzYThmYmJlNGQyMTRhZDdjNjg3Ni5wbmdcIjsiLCJpbXBvcnQgV2VhdGhlciBmcm9tICcuLi9jbGFzc2VzL3dlYXRoZXJPYmplY3QnO1xuXG5hc3luYyBmdW5jdGlvbiBhcGlGZXRjaGVyKGJhc2VVcmwsIHNlYXJjaFF1ZXJ5KSB7XG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LkdJUEhZX0tFWTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfXE9JHtzZWFyY2hRdWVyeX0mYXBwaWQ9JHthcGlLZXl9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbn1cbmNvbnN0IGljb25HZXR0ZXIgPSAoaWNvbkNvZGUsIGFycmF5KSA9PiB7XG4gIC8vIGFkZCB0aGUgY2xhdXNlIGZvciBlbHNlID09IGhhemVcbiAgY29uc3QgcmVzdWx0ID0gYXJyYXkuZmlsdGVyKCh3ZWF0aGVyKSA9PiB3ZWF0aGVyLndlYXRoZXJOYW1lID09PSBpY29uQ29kZSk7XG4gIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5sZW5ndGggPiAwKTtcbiAgICByZXR1cm4gcmVzdWx0WzBdLndlYXRoZXJJbWFnZTtcbiAgfVxuICByZXR1cm4gYXJyYXlbNl0ud2VhdGhlckltYWdlO1xufTtcblxuY29uc3Qgd2VhdGhlckljb25HZXR0ZXIgPSBhc3luYyAoaWNvbkNvZGUsIGVsZW1lbnQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uQ29kZX1AMngucG5nYCk7XG4gIGlmIChpY29uQ29kZSA9PT0gJzEzZCcgfHwgaWNvbkNvZGUgPT09ICc1MGQnKSB7XG4gICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSAnaW52ZXJ0KDEpJztcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgfVxuICByZXR1cm4gcmVzcG9uc2UudXJsO1xufTtcblxuY29uc3QgaW1nQ3JlYXRvciA9IGFzeW5jIChjb250YWluZXIsIGltYWdlLCBzcmMpID0+IHtcbiAgaW1hZ2Uuc3JjID0gYXdhaXQgc3JjO1xuICByZXR1cm4gY29udGFpbmVyLmFwcGVuZChpbWFnZSk7XG59O1xuY29uc3Qgd2VhdGhlck9iamVjdENvbnN0cnVjdG9yID0gYXN5bmMgKGFwaURhdGEpID0+IHtcbiAgY29uc3Qgd2VhdGhlck9iamVjdCA9IGF3YWl0IGFwaURhdGE7XG4gIGNvbnN0IHdlYXRoZXIgPSBXZWF0aGVyKFxuICAgIGF3YWl0IHdlYXRoZXJPYmplY3Qud2VhdGhlclswXS5tYWluLFxuICAgIGF3YWl0IHdlYXRoZXJPYmplY3Qud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICBhd2FpdCB3ZWF0aGVyT2JqZWN0Lm1haW4udGVtcCxcbiAgICBhd2FpdCB3ZWF0aGVyT2JqZWN0Lm1haW4udGVtcF9taW4sXG4gICAgYXdhaXQgd2VhdGhlck9iamVjdC5tYWluLnRlbXBfbWF4LFxuICAgIGF3YWl0IHdlYXRoZXJPYmplY3Qud2VhdGhlclswXS5pY29uLFxuICApO1xuICByZXR1cm4gd2VhdGhlcjtcbn07XG5cbmNvbnN0IHdlYXRoZXJPYmplY3RFcnJvciA9IGFzeW5jIChkYXRhKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGF0YTtcbiAgY29uc3Qgd2VhdGhlciA9IFdlYXRoZXIoXG4gICAgYXdhaXQgcmVzcG9uc2UubWVzc2FnZSxcbiAgICAnJyxcbiAgICAnJyxcbiAgICAnJyxcbiAgICAnJyxcbiAgICAnJyxcbiAgKTtcbiAgcmV0dXJuIHdlYXRoZXI7XG59O1xuXG5jb25zdCBwcm9taXNlVG9Kc29uID0gYXN5bmMgKGJhc2VVcmwsIHNlYXJjaFF1ZXJ5LCB1bml0cyA9ICdpbXBlcmlhbCcpID0+IHtcbiAgY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH1xPSR7c2VhcmNoUXVlcnl9JnVuaXRzPSR7dW5pdHN9JmFwcGlkPSR7YXBpS2V5fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBpZiAoZGF0YS5jb2QgPT09ICc0MDQnKSByZXR1cm4gd2VhdGhlck9iamVjdEVycm9yKGRhdGEpO1xuICByZXR1cm4gd2VhdGhlck9iamVjdENvbnN0cnVjdG9yKGRhdGEpO1xufTtcblxuZXhwb3J0IHtcbiAgYXBpRmV0Y2hlciwgaW1nQ3JlYXRvciwgcHJvbWlzZVRvSnNvbiwgd2VhdGhlck9iamVjdENvbnN0cnVjdG9yLCBpY29uR2V0dGVyLCB3ZWF0aGVySWNvbkdldHRlcixcbn07XG4iLCJcbmNvbnN0IGlucHV0SGFuZGxlciA9IChpbnB1dEVsZW1lbnQpID0+IHtcbiAgaWYgKGlucHV0RWxlbWVudC52YWx1ZSkge1xuICAgIHJldHVybiBpbnB1dEVsZW1lbnQudmFsdWU7XG4gIH1cbiAgcmV0dXJuIEVycm9yKCdObyBpbnB1dCBlbGVtZW50Jyk7XG59O1xuY29uc3QgZW50ZXJTaG9ydGN1dCA9IChidG4sIGVsZW1lbnQpID0+IHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGJ0bi5jbGljaygpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjYXBpdGFsaXplID0gKHMpID0+IHtcbiAgaWYgKHR5cGVvZiBzICE9PSAnc3RyaW5nJykgcmV0dXJuICcnO1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59O1xuXG5jb25zdCBlbGVtZW50R2VuZXJhdG9yID0gKGh0bWxFbGVtLCBlbGVtSWQgPSBudWxsLCBlbGVtQ2xhc3MgPSBudWxsKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHtodG1sRWxlbX1gKTtcbiAgaWYgKGVsZW1DbGFzcyAhPT0gbnVsbCkgY3JlYXRlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtQ2xhc3MpO1xuICBpZiAoZWxlbUlkICE9PSBudWxsKSBjcmVhdGVkRWxlbWVudC5pZCA9IGVsZW1JZDtcbiAgcmV0dXJuIGNyZWF0ZWRFbGVtZW50O1xufTtcblxuY29uc3QgdGV4dEdlbmVyYXRvciA9ICh0ZXh0KSA9PiB7XG4gIGNvbnN0IHRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpZiAodGV4dCAhPT0gJycpIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHRleHRFbGVtZW50O1xufTtcblxuXG5mdW5jdGlvbiB1bml0Q29udmVydGVyKHZhbHVlLCB1bml0cykge1xuICBpZiAodW5pdHMgPT09ICdtZXRyaWMnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gKHZhbHVlICogOSAvIDUpICsgMzI7XG4gICAgcmV0dXJuIE1hdGgucm91bmQocmVzdWx0KTtcbiAgfVxuICBjb25zdCByZXN1bHQgPSAodmFsdWUgLSAzMikgKiAoNSAvIDkpO1xuICByZXR1cm4gTWF0aC5yb3VuZChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiB1bml0U3dhcHBlcih2YWx1ZSkge1xuICAodmFsdWUgPT09ICdtZXRyaWMnKSA/IHZhbHVlID0gJ2ltcGVyaWFsJyA6IHZhbHVlID0gJ21ldHJpYyc7XG4gIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuY29uc3QgdG9nZ2xlQ29sb3IgPSAodG9nZ2xlSW5wdXQsIHZhbHVlKSA9PiB7XG4gICh2YWx1ZSA9PT0gJ21ldHJpYycpID8gdG9nZ2xlSW5wdXQuY2hlY2tlZCA9IGZhbHNlIDogdG9nZ2xlSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcbn07XG5cbmV4cG9ydCB7XG4gIGlucHV0SGFuZGxlciwgZW50ZXJTaG9ydGN1dCxcbiAgZWxlbWVudEdlbmVyYXRvciwgdGV4dEdlbmVyYXRvciwgY2FwaXRhbGl6ZSwgdW5pdENvbnZlcnRlciwgdW5pdFN3YXBwZXIsXG4gIHRvZ2dsZUNvbG9yLFxufTsiLCJpbXBvcnQgbWFpbkNvbnRhaW5lciBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5zY3NzJztcblxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuIiwiaW1wb3J0ICogYXMgQXBpQ2FsbCBmcm9tICcuLi9zY3JlZW5zL2FwaUZldGNoZXInO1xuaW1wb3J0ICogYXMgRG9tTWFuaXB1bGF0aW9uIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcbmltcG9ydCBXZWF0aGVySW1hZ2UgZnJvbSAnLi4vY2xhc3Nlcy93ZWF0aGVySW1hZ2UnO1xuaW1wb3J0IGNsb3VkeSBmcm9tICcuLi9pbWFnZXMvY2xvdWRzLnBuZyc7XG5pbXBvcnQgc3Rvcm15IGZyb20gJy4uL2ltYWdlcy9zdG9ybS5wbmcnO1xuaW1wb3J0IHN1bm55IGZyb20gJy4uL2ltYWdlcy9jbGVhci5wbmcnO1xuaW1wb3J0IGhhenkgZnJvbSAnLi4vaW1hZ2VzL2hhemUucG5nJztcbmltcG9ydCByYWlueSBmcm9tICcuLi9pbWFnZXMvcmFpbi5wbmcnO1xuaW1wb3J0IHNub3d5IGZyb20gJy4uL2ltYWdlcy9zbm93LnBuZyc7XG5pbXBvcnQgZXJyb3IgZnJvbSAnLi4vaW1hZ2VzL2Vycm9yLnBuZyc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4uL2ltYWdlcy9zZWFyY2gucG5nJztcblxuY29uc3Qgd2VhdGhlckFycmF5ID0gW1dlYXRoZXJJbWFnZSgnQ2xvdWRzJywgY2xvdWR5KSxcbiAgV2VhdGhlckltYWdlKCdTbm93Jywgc25vd3kpLFxuICBXZWF0aGVySW1hZ2UoJ1JhaW4nLCByYWlueSksXG4gIFdlYXRoZXJJbWFnZSgnRHJpenpsZScsIHJhaW55KSxcbiAgV2VhdGhlckltYWdlKCdUaHVuZGVyc3Rvcm0nLCBzdG9ybXkpLFxuICBXZWF0aGVySW1hZ2UoJ0NsZWFyJywgc3VubnkpLFxuICBXZWF0aGVySW1hZ2UoJ0hhemUnLCBoYXp5KSxcbiAgV2VhdGhlckltYWdlKCdjaXR5IG5vdCBmb3VuZCcsIGVycm9yKV07XG5cbi8vIENoYW5nZSBhbGwgZG9jdW1lbnQgY3JlYXRlRWxlbWVudCBhbmQgdGV4dCB0byB1c2UgdGhlIGdlbmVyYWwgcHVycG9zZSBmdW5jdGlvbnNcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcbm1haW5Db250YWluZXIuaWQgPSAnbWFpbkNvbnRhaW5lcic7XG5jb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG1haW5Db250YWluZXJUb3BDaGlsZCA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnbWFpbkNvbnRhaW5lclRvcENoaWxkJyk7XG5jb25zdCBtYWluQ29udGFpbmVyQm90dG9tQ2hpbGQgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ21haW5Db250YWluZXJCb3R0b21DaGlsZCcpO1xuY29uc3Qgc2VhcmNoQmFyQ29udGFpbmVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICdzZWFyY2hCYXJDb250YWluZXInKTtcbmNvbnN0IGlucHV0Q29udGFpbmVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICdpbnB1dENvbnRhaW5lcicpO1xuY29uc3QgdG9nZ2xlQ29udGFpbmVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICd0b2dnbGVDb250YWluZXInKTtcbmNvbnN0IGNlbHNpdXNDb250YWluZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ2NlbHNpdXNDb250YWluZXInLCAndGVtcFRleHQnKTtcbmNlbHNpdXNDb250YWluZXIuYXBwZW5kKERvbU1hbmlwdWxhdGlvbi50ZXh0R2VuZXJhdG9yKCdDZWxzaXVzJykpO1xuY29uc3QgZmFocmVuaGVpdENvbnRhaW5lciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnZmFocmVuaGVpdENvbnRhaW5lcicsICd0ZW1wVGV4dCcpO1xuZmFocmVuaGVpdENvbnRhaW5lci5hcHBlbmQoRG9tTWFuaXB1bGF0aW9uLnRleHRHZW5lcmF0b3IoJ0ZhaHJlbmhlaXQnKSk7XG5jb25zdCB0b2dnbGVMYWJlbCA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdsYWJlbCcsICdzd2l0Y2gnKTtcbmNvbnN0IHRvZ2dsZUlucHV0ID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2lucHV0JywgJ3RvZ2dsZUlucHV0Jyk7XG5cbnRvZ2dsZUlucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuY29uc3QgdG9nZ2xlU3BhbiA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdzcGFuJywgJ3RvZ2dsZVNwYW4nLCAnc2xpZGVyJyk7XG50b2dnbGVTcGFuLmNsYXNzTGlzdC5hZGQoJ3JvdW5kJyk7XG50b2dnbGVMYWJlbC5hcHBlbmQodG9nZ2xlSW5wdXQsIHRvZ2dsZVNwYW4pO1xuXG5jb25zdCBtYWluSW5mb0NvbnRhaW5lciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnbWFpbkluZm9Db250YWluZXInKTtcbmNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyJyk7XG5jb25zdCB3ZWF0aGVySWNvbkNvbnRhaW5lciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnd2VhdGhlckljb25Db250YWluZXInKTtcbmNvbnN0IHdlYXRoZXJJY29uID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2ltZycsICd3ZWF0aGVySWNvbicpO1xuY29uc3Qgd2VhdGhlckluZm9EZXNjcmlwdGlvbkNvbnRhaW5lciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnd2VhdGhlckluZm9EZXNjcmlwdGlvbkNvbnRhaW5lcicpO1xuY29uc3QgREFZVEVYVCA9ICdUb2RheSc7XG5jb25zdCBjaXR5TmFtZUNvbnRhaW5lciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnY2l0eU5hbWVDb250YWluZXInKTtcbmNvbnN0IG1haW5XZWF0aGVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICdtYWluV2VhdGhlcicpO1xuY29uc3QgbWFpblRlbXAgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ21haW5UZW1wJyk7XG5jb25zdCB0ZW1wTWluTWF4Q29udGFpbmVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICd0ZW1wTWluTWF4Q29udGFpbmVyJyk7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5jb25zdCBidXR0b25Db250YWluZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ2J1dHRvbkNvbnRhaW5lcicpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5idXR0b24uaWQgPSAnYXBpQnV0dG9uJztcbmJ1dHRvbi50ZXh0Q29udGVudCA9ICdTZWFyY2gnO1xuaW5wdXQuaWQgPSAnYXBpSW5wdXQnO1xuaW5wdXQucGxhY2Vob2xkZXIgPSAnU29tZXdoZXJlIG9ubHkgd2Uga25vdyc7XG5idXR0b25Db250YWluZXIuYXBwZW5kKGJ1dHRvbik7XG5pbnB1dENvbnRhaW5lci5hcHBlbmQoaW5wdXQpO1xuc2VhcmNoQmFyQ29udGFpbmVyLmFwcGVuZChpbnB1dENvbnRhaW5lciwgYnV0dG9uQ29udGFpbmVyKTtcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuaW1nQ29udGFpbmVyLmlkID0gJ2ltZ0NvbnRhaW5lcic7XG5pbWcuaWQgPSAnaW1nQVBJJztcbkFwaUNhbGwuaW1nQ3JlYXRvcihpbWdDb250YWluZXIsIGltZywgc2VhcmNoKTtcbmNpdHlOYW1lQ29udGFpbmVyLmFwcGVuZChEb21NYW5pcHVsYXRpb24udGV4dEdlbmVyYXRvcignV2VhdGhlciBhcHAnKSk7XG5jb25zdCBiYXNlVXJsID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyPyc7XG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNpdHlOYW1lQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBtYWluV2VhdGhlci5pbm5lckhUTUwgPSAnJztcbiAgbWFpblRlbXAuaW5uZXJIVE1MID0gJyc7XG4gIHdlYXRoZXJJY29uQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB0ZW1wTWluTWF4Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB3ZWF0aGVySW5mb0Rlc2NyaXB0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBsZXQgdW5pdHMgPSAnbWV0cmljJztcbiAgQXBpQ2FsbC5wcm9taXNlVG9Kc29uKGJhc2VVcmwsIERvbU1hbmlwdWxhdGlvbi5pbnB1dEhhbmRsZXIoaW5wdXQpLCB1bml0cykudGhlbihcbiAgICAod2VhdGhlcikgPT4ge1xuICAgICAgaWYgKHdlYXRoZXIubWFpbldlYXRoZXIgPT09ICdjaXR5IG5vdCBmb3VuZCcpIHtcbiAgICAgICAgdG9nZ2xlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBjYXBpdGFsaXplZCA9IERvbU1hbmlwdWxhdGlvbi5jYXBpdGFsaXplKHdlYXRoZXIubWFpbldlYXRoZXIpO1xuICAgICAgICBtYWluV2VhdGhlci5hcHBlbmQoRG9tTWFuaXB1bGF0aW9uLnRleHRHZW5lcmF0b3IoRG9tTWFuaXB1bGF0aW9uLmNhcGl0YWxpemUoY2FwaXRhbGl6ZWQpKSk7XG4gICAgICAgIG1haW5JbmZvQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgICBtYWluV2VhdGhlcixcbiAgICAgICAgKTtcbiAgICAgICAgQXBpQ2FsbC5pbWdDcmVhdG9yKFxuICAgICAgICAgIGltZ0NvbnRhaW5lciwgaW1nLCBBcGlDYWxsLmljb25HZXR0ZXIod2VhdGhlci5tYWluV2VhdGhlciwgd2VhdGhlckFycmF5KSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZ2dsZUlucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdG9nZ2xlQ29udGFpbmVyLmFwcGVuZChjZWxzaXVzQ29udGFpbmVyLCB0b2dnbGVMYWJlbCwgZmFocmVuaGVpdENvbnRhaW5lcik7XG4gICAgICAgIEFwaUNhbGwuaW1nQ3JlYXRvcihcbiAgICAgICAgICBpbWdDb250YWluZXIsIGltZywgQXBpQ2FsbC5pY29uR2V0dGVyKHdlYXRoZXIubWFpbldlYXRoZXIsIHdlYXRoZXJBcnJheSksXG4gICAgICAgICk7XG4gICAgICAgIGNpdHlOYW1lQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgICBEb21NYW5pcHVsYXRpb24udGV4dEdlbmVyYXRvcihcbiAgICAgICAgICAgIERvbU1hbmlwdWxhdGlvbi5jYXBpdGFsaXplKERvbU1hbmlwdWxhdGlvbi5pbnB1dEhhbmRsZXIoaW5wdXQpKSxcbiAgICAgICAgICApLFxuICAgICAgICApO1xuICAgICAgICBtYWluV2VhdGhlci5hcHBlbmQoRG9tTWFuaXB1bGF0aW9uLnRleHRHZW5lcmF0b3Iod2VhdGhlci5tYWluV2VhdGhlcikpO1xuICAgICAgICBtYWluVGVtcC5hcHBlbmQoRG9tTWFuaXB1bGF0aW9uLnRleHRHZW5lcmF0b3IoYCR7TWF0aC5yb3VuZCh3ZWF0aGVyLnRlbXApfcKwYCkpO1xuICAgICAgICB0b2dnbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICB3ZWF0aGVyLnRlbXAgPSBEb21NYW5pcHVsYXRpb24udW5pdENvbnZlcnRlcih3ZWF0aGVyLnRlbXAsIHVuaXRzKTtcbiAgICAgICAgICB3ZWF0aGVyLnRlbXBNaW4gPSBEb21NYW5pcHVsYXRpb24udW5pdENvbnZlcnRlcih3ZWF0aGVyLnRlbXBNaW4sIHVuaXRzKTtcbiAgICAgICAgICB3ZWF0aGVyLnRlbXBNYXggPSBEb21NYW5pcHVsYXRpb24udW5pdENvbnZlcnRlcih3ZWF0aGVyLnRlbXBNYXgsIHVuaXRzKTtcbiAgICAgICAgICB1bml0cyA9IERvbU1hbmlwdWxhdGlvbi51bml0U3dhcHBlcih1bml0cyk7XG4gICAgICAgICAgRG9tTWFuaXB1bGF0aW9uLnRvZ2dsZUNvbG9yKHRvZ2dsZUlucHV0LCB1bml0cyk7XG4gICAgICAgICAgbWFpblRlbXAuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgdGVtcE1pbk1heENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICBtYWluVGVtcC5hcHBlbmQoRG9tTWFuaXB1bGF0aW9uLnRleHRHZW5lcmF0b3IoYCR7d2VhdGhlci50ZW1wfcKwYCkpO1xuXG4gICAgICAgICAgdGVtcE1pbk1heENvbnRhaW5lci5hcHBlbmQoRG9tTWFuaXB1bGF0aW9uLnRleHRHZW5lcmF0b3IoXG4gICAgICAgICAgICBgJHt3ZWF0aGVyLnRlbXBNYXh9wrAgLyAke3dlYXRoZXIudGVtcE1pbn3CsGAsXG4gICAgICAgICAgKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBBcGlDYWxsLmltZ0NyZWF0b3Iod2VhdGhlckljb25Db250YWluZXIsIHdlYXRoZXJJY29uLFxuICAgICAgICAgIEFwaUNhbGwud2VhdGhlckljb25HZXR0ZXIod2VhdGhlci5pY29uLCB3ZWF0aGVySWNvbikpO1xuICAgICAgICB3ZWF0aGVySW5mb0Rlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZChEQVlURVhULFxuICAgICAgICAgIERvbU1hbmlwdWxhdGlvbi50ZXh0R2VuZXJhdG9yKHdlYXRoZXIud2VhdGhlckRlc2NyaXB0aW9uKSk7XG4gICAgICAgIHRlbXBNaW5NYXhDb250YWluZXIuYXBwZW5kKERvbU1hbmlwdWxhdGlvbi50ZXh0R2VuZXJhdG9yKFxuICAgICAgICAgIGAke01hdGgucm91bmQod2VhdGhlci50ZW1wTWF4KX3CsCAvICR7TWF0aC5yb3VuZCh3ZWF0aGVyLnRlbXBNaW4pfcKwYCxcbiAgICAgICAgKSk7XG4gICAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgd2VhdGhlckljb25Db250YWluZXIsIHdlYXRoZXJJbmZvRGVzY3JpcHRpb25Db250YWluZXIsIHRlbXBNaW5NYXhDb250YWluZXIsXG4gICAgICAgICk7XG4gICAgICAgIG1haW5Db250YWluZXJCb3R0b21DaGlsZC5hcHBlbmQoaW1nQ29udGFpbmVyLCB3ZWF0aGVyRGVzY3JpcHRpb25Db250YWluZXIpO1xuICAgICAgICAvLyBtYWluQ29udGFpbmVyVG9wQ2hpbGQuaW5zZXJ0QmVmb3JlKHRvZ2dsZUNvbnRhaW5lciwgbWFpbkNvbnRhaW5lclRvcENoaWxkLmNoaWxkTm9kZXNbMl0pO1xuICAgICAgICBtYWluSW5mb0NvbnRhaW5lci5pbnNlcnRCZWZvcmUodG9nZ2xlQ29udGFpbmVyLCBtYWluSW5mb0NvbnRhaW5lci5jaGlsZE5vZGVzWzFdKTtcbiAgICAgIH1cbiAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gICAgLFxuICApO1xufSk7XG5Eb21NYW5pcHVsYXRpb24uZW50ZXJTaG9ydGN1dChidXR0b24sIGlucHV0KTtcbm1haW5JbmZvQ29udGFpbmVyLmFwcGVuZChjaXR5TmFtZUNvbnRhaW5lciwgbWFpbldlYXRoZXIsIG1haW5UZW1wKTtcbndlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQoXG4gIHdlYXRoZXJJY29uQ29udGFpbmVyLCB3ZWF0aGVySW5mb0Rlc2NyaXB0aW9uQ29udGFpbmVyLCB0ZW1wTWluTWF4Q29udGFpbmVyLFxuKTtcbm1haW5Db250YWluZXJUb3BDaGlsZC5hcHBlbmQoc2VhcmNoQmFyQ29udGFpbmVyLCBtYWluSW5mb0NvbnRhaW5lcik7XG5tYWluQ29udGFpbmVyQm90dG9tQ2hpbGQuYXBwZW5kKGltZ0NvbnRhaW5lciwgd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbm1haW5Db250YWluZXIuYXBwZW5kKFxuICBtYWluQ29udGFpbmVyVG9wQ2hpbGQsXG4gIG1haW5Db250YWluZXJCb3R0b21DaGlsZCxcbik7XG5leHBvcnQgZGVmYXVsdCBtYWluQ29udGFpbmVyOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9