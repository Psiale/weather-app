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
  // add the clause for else == haze
  const result = array.filter((weather) => weather.weatherName === iconCode);
  if (result.length > 0) {
    // console.log(result.length > 0);
    return result[0].weatherImage;
  }
  return array[6].weatherImage;
};

const weatherIconGetter = async (iconCode, element) => {
  const response = await fetch(`‘https://cors-anywhere.herokuapp.com/http://openweathermap.org/img/wn/${iconCode}@2x.png`, { mode: 'cors' });
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
  // console.log(value);
  return value;
}
const toggleColor = (toggleInput, value) => {
  (value === 'metric') ? toggleInput.checked = false : toggleInput.checked = true;
  // console.log(value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZm9udHMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvd2VhdGhlckltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL3dlYXRoZXJPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1FeHRyYUJvbGQud29mZiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvUm9ib3RvU2xhYi1FeHRyYUxpZ2h0LndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1JvYm90b1NsYWItUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9Sb2JvdG9TbGFiLVNlbWlCb2xkLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jbGVhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jbG91ZHMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZXJyb3IucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaGF6ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yYWluLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zbm93LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0b3JtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9hcGlGZXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzP2U1ZDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzRGO0FBQ1k7QUFDeEcsOEJBQThCLG1GQUEyQjtBQUN6RCwwQkFBMEIsc0ZBQWlDO0FBQzNEO0FBQ0EsOEJBQThCLFFBQVMsZUFBZSxnQkFBZ0IsaUJBQWlCLGNBQWMsR0FBRyxvQkFBb0IsZ0JBQWdCLGtCQUFrQixrQkFBa0IsOEJBQThCLDZCQUE2Qiw0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ZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb250cy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNtYWluQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhlMmVlO1xcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjbWFpbkNvbnRhaW5lclRvcENoaWxkLFxcbiNtYWluQ29udGFpbmVyICNtYWluQ29udGFpbmVyQm90dG9tQ2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI21haW5Db250YWluZXIgI21haW5Db250YWluZXJUb3BDaGlsZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzUlO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjbWFpbkNvbnRhaW5lckJvdHRvbUNoaWxkIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDc1JTtcXG59XFxuI21haW5Db250YWluZXIgI3NlYXJjaEJhckNvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI21haW5Db250YWluZXIgI3NlYXJjaEJhckNvbnRhaW5lciAjaW5wdXRDb250YWluZXIge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogOTQlO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjc2VhcmNoQmFyQ29udGFpbmVyICNpbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICBmb250LXNpemU6IDR2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2JhMTc2ZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjc2VhcmNoQmFyQ29udGFpbmVyICNpbnB1dENvbnRhaW5lciBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjc2VhcmNoQmFyQ29udGFpbmVyICNpbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tU2xhYi1SZWd1bGFyXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDR2dztcXG4gIGNvbG9yOiBncmV5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjc2VhcmNoQmFyQ29udGFpbmVyICNidXR0b25Db250YWluZXIge1xcbiAgd2lkdGg6IDIwJTtcXG4gIGhlaWdodDogOTElO1xcbiAgbWFyZ2luOiAwIDhweDtcXG4gIGJvcmRlcjogMDtcXG59XFxuI21haW5Db250YWluZXIgI3NlYXJjaEJhckNvbnRhaW5lciAjYnV0dG9uQ29udGFpbmVyIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDR2dztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYTE3NmY7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1TbGFiLVJlZ3VsYXJcXFwiLCBzZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgLnRlbXBUZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvLVNsYWItUmVndWxhclxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiA2dnc7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgI3N3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciAjdG9nZ2xlSW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjdG9nZ2xlQ29udGFpbmVyIC5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmU0MWZmO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuI21haW5Db250YWluZXIgI3RvZ2dsZUNvbnRhaW5lciAuc2xpZGVyOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjdG9nZ2xlQ29udGFpbmVyICN0b2dnbGVJbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExNzZmZmY7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgI3RvZ2dsZUlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgI3RvZ2dsZUlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcbiNtYWluQ29udGFpbmVyICN0b2dnbGVDb250YWluZXIgLnJvdW5kOjpiZWZvcmUge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjdG9nZ2xlQ29udGFpbmVyIGRpdiB7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuI21haW5Db250YWluZXIgI21haW5JbmZvQ29udGFpbmVyIHtcXG4gIGhlaWdodDogODAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjbWFpbkluZm9Db250YWluZXIgI2NpdHlOYW1lQ29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheS1GYWlyLURpc3BsYXlcXFwiLCBzZXJpZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuI21haW5Db250YWluZXIgI21haW5JbmZvQ29udGFpbmVyICNjaXR5TmFtZUNvbnRhaW5lciBwIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDh2dztcXG59XFxuI21haW5Db250YWluZXIgI21haW5JbmZvQ29udGFpbmVyICNtYWluV2VhdGhlciB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90by1TbGFiLVNlbWlCb2xkXFxcIiwgc2VyaWY7XFxufVxcbiNtYWluQ29udGFpbmVyICNtYWluSW5mb0NvbnRhaW5lciAjbWFpbldlYXRoZXIsICNtYWluQ29udGFpbmVyICNtYWluSW5mb0NvbnRhaW5lciAjbWFpblRlbXAge1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuI21haW5Db250YWluZXIgI21haW5JbmZvQ29udGFpbmVyICNtYWluV2VhdGhlciBwLCAjbWFpbkNvbnRhaW5lciAjbWFpbkluZm9Db250YWluZXIgI21haW5UZW1wIHAge1xcbiAgZm9udC1zaXplOiA3dnc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjaW1nQ29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MCU7XFxufVxcbiNtYWluQ29udGFpbmVyICNpbWdDb250YWluZXIgI2ltZ0FQSSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcbiNtYWluQ29udGFpbmVyICN3ZWF0aGVyRGVzY3JpcHRpb25Db250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8tU2xhYi1SZWd1bGFyXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYTE3NmY7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuI21haW5Db250YWluZXIgI3dlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lciBkaXYge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiAyOCU7XFxuICBtYXJnaW46IDIwcHggOHB4O1xcbn1cXG4jbWFpbkNvbnRhaW5lciAjd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyICN0ZW1wTWluTWF4Q29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDU1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbiNtYWluQ29udGFpbmVyICN3ZWF0aGVyRGVzY3JpcHRpb25Db250YWluZXIgI3dlYXRoZXJJY29uQ29udGFpbmVyIHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBSko7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhKO0FBSUk7O0VBRUksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFGUjtBQUtJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFIUjtBQUtJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFIUjtBQUtJO0VBQ0ksY0FBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKUjtBQUtRO0VBRUksVUFBQTtFQUNBLFdBQUE7QUFKWjtBQUtZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSGhCO0FBSWdCO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFGcEI7QUFLZ0I7RUFDSSx5Q0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFIcEI7QUFPUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUFMWjtBQU1ZO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSmhCO0FBU0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVFRO0VBQ0kseUNBQUE7RUFDQSxjQUFBO0FBTlo7QUFRUTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU5aO0FBUVE7RUFDSSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFOWjtBQVFRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQU5aO0FBT1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBTGhCO0FBUVE7RUFDSSwyQkFBQTtBQU5aO0FBUVE7RUFDSSwyQkFBQTtBQU5aO0FBU1E7RUFDSSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7QUFQWjtBQVNRO0VBQ0ksbUJBQUE7QUFQWjtBQVFZO0VBQ0ksa0JBQUE7QUFOaEI7QUFTUTtFQUNJLGNBQUE7QUFQWjtBQVVJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQVJSO0FBVVE7RUFDSSx1Q0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVJaO0FBU1k7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFQaEI7QUFVUTtFQUNJLDBDQUFBO0FBUlo7QUFVUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVJaO0FBU1k7RUFDSSxjQUFBO0VBQ0QsU0FBQTtFQUNBLFVBQUE7QUFQZjtBQVdJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFUUjtBQVVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVJaO0FBV0k7RUFDSSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVFI7QUFVUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVJaO0FBVVE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFSWjtBQVVRO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBUlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi4vc3R5bGVzL2ZvbnRzLmNzcyc7XFxyXFxuXFxyXFxuLy8gKiB7XFxyXFxuLy8gICAgIGJvcmRlcjogMXB4IHJlZCBzb2xpZDtcXHJcXG4vLyB9XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuI21haW5Db250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZTJlZTtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgI21haW5Db250YWluZXJUb3BDaGlsZCxcXHJcXG4gICAgI21haW5Db250YWluZXJCb3R0b21DaGlsZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNtYWluQ29udGFpbmVyVG9wQ2hpbGQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM1JTtcXHJcXG4gICAgfVxcclxcbiAgICAjbWFpbkNvbnRhaW5lckJvdHRvbUNoaWxkIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDc1JTtcXHJcXG4gICAgfVxcclxcbiAgICAjc2VhcmNoQmFyQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAjaW5wdXRDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA5NCU7XFxyXFxuICAgICAgICAgICAgaW5wdXQge1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDR2dztcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICNiYTE3NmY7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLVJlZ3VsYXInLCBzZXJpZiA7ICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjYnV0dG9uQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogOTElO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHZ3O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExNzZmO1xcclxcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLVJlZ3VsYXInLCBzZXJpZjtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdG9nZ2xlQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIC50ZW1wVGV4dCB7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tU2xhYi1SZWd1bGFyJywgc2VyaWYgO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnZ3O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI3N3aXRjaCB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjdG9nZ2xlSW5wdXQge1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDA7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnNsaWRlciB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmU0MWZmO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiA0cHg7XFxyXFxuICAgICAgICAgICAgICAgIGJvdHRvbTogNHB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjdG9nZ2xlSW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTE3NmZmZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICN0b2dnbGVJbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3RvZ2dsZUlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIC5yb3VuZCB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAjbWFpbkluZm9Db250YWluZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgICNjaXR5TmFtZUNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQbGF5LUZhaXItRGlzcGxheScsIHNlcmlmO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICAgICAgICBwIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDh2dztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjbWFpbldlYXRoZXIge1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVNsYWItU2VtaUJvbGQnLCBzZXJpZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNtYWluV2VhdGhlciwgI21haW5UZW1wIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3Z3O1xcclxcbiAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgICBwYWRkaW5nOiAwOyBcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgI2ltZ0NvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNDAlO1xcclxcbiAgICAgICAgI2ltZ0FQSSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgI3dlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLVJlZ3VsYXInLCBzZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXHJcXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTc2ZjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgICAgICAgZGl2IHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBtaW4tY29udGVudDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjglO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCA4cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjdGVtcE1pbk1heENvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA1NSU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjd2VhdGhlckljb25Db250YWluZXIge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vZm9udHMvUm9ib3RvU2xhYi1TZW1pQm9sZC53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL2ZvbnRzL1JvYm90b1NsYWItUmVndWxhci53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4uL2ZvbnRzL1JvYm90b1NsYWItRXh0cmFMaWdodC53b2ZmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4uL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1FeHRyYUJvbGQud29mZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiAgICBAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tU2xhYi1TZW1pQm9sZCc7XFxyXFxuICAgIHNyYzpcXHJcXG4gICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tU2xhYi1SZWd1bGFyJztcXHJcXG4gICAgc3JjOlxcclxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLVNsYWItRXh0cmFMaWdodCc7XFxyXFxuICAgICAgXFxyXFxuICAgICAgc3JjOlxcclxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAZm9udC1mYWNlIHtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ1BsYXktRmFpci1EaXNwbGF5JztcXHJcXG4gICAgICBzcmM6XFxyXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9mb250cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIklBQUk7SUFDQSxtQ0FBbUM7SUFDbkM7NERBQ3lEO0lBQ3pELGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtDQUFrQztJQUNsQzs4REFDMEQ7SUFDMUQsZ0JBQWdCO0VBQ2xCOztFQUVBO01BQ0kscUNBQXFDOztNQUVyQzsrQ0FDNEM7UUFDMUMsZ0JBQWdCO0VBQ3RCOztFQUVBO01BQ0ksZ0NBQWdDO01BQ2hDOytDQUNnRDtRQUM5QyxnQkFBZ0I7RUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiICAgIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLVNlbWlCb2xkJztcXHJcXG4gICAgc3JjOlxcclxcbiAgICAgIHVybCgnLi4vZm9udHMvUm9ib3RvU2xhYi1TZW1pQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLVJlZ3VsYXInO1xcclxcbiAgICBzcmM6XFxyXFxuICAgICAgICB1cmwoJy4uL2ZvbnRzL1JvYm90b1NsYWItUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAZm9udC1mYWNlIHtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ1JvYm90by1TbGFiLUV4dHJhTGlnaHQnO1xcclxcbiAgICAgIFxcclxcbiAgICAgIHNyYzpcXHJcXG4gICAgICAgIHVybCgnLi4vZm9udHMvUm9ib3RvU2xhYi1FeHRyYUxpZ2h0LndvZmYnKTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAZm9udC1mYWNlIHtcXHJcXG4gICAgICBmb250LWZhbWlseTogJ1BsYXktRmFpci1EaXNwbGF5JztcXHJcXG4gICAgICBzcmM6XFxyXFxuICAgICAgICB1cmwoJy4uL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1FeHRyYUJvbGQud29mZicpO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJmdW5jdGlvbiBXZWF0aGVySW1hZ2Uod2VhdGhlck5hbWUsIHdlYXRoZXJJbWFnZSkge1xuICByZXR1cm4ge1xuICAgIHdlYXRoZXJOYW1lLFxuICAgIHdlYXRoZXJJbWFnZSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlckltYWdlOyIsImZ1bmN0aW9uIFdlYXRoZXIobWFpbldlYXRoZXIsIHdlYXRoZXJEZXNjcmlwdGlvbiwgdGVtcCwgdGVtcE1pbiwgdGVtcE1heCwgaWNvbikge1xuICByZXR1cm4ge1xuICAgIG1haW5XZWF0aGVyLFxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbixcbiAgICB0ZW1wLFxuICAgIHRlbXBNaW4sXG4gICAgdGVtcE1heCxcbiAgICBpY29uLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiN2VkZjcyNDM4MmJkYTlhZjVlZjhhZjcxMzY0MmFlMjkud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyNTBjMWNkNzAxNWE5ZDZhZjBkNTg5NTYyNTIyM2ZjNS53b2ZmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZmMmM1NDRlYjFhMzcxOWY5OTI1ZWEzZDBjNDVhNmU4LndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYThiZTkwZTEyZTdiZDU4NDk4OWMxMzUzMzZmOTZhNjAud29mZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1MzJmYTUzMjFmZGNkODVhN2IzODM2MTZkMWQ3ZGUzMy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiODdiZTY1YjFhYmM5OTNiZGNlNzQ2NGIxMjQ0MjYwOWMucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImEzMmExOWQ3ZmVhZTE5MmZmM2NiNzNmMTdiZDBlY2VmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmZjhiMjVjY2FhNTg1NzI2MWQ0MWFhOTBlMjg1OTkzYS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzEyMWYxNDIzMGZjMGYzOWQ4YTIwNWM2YzVlZjRlMTkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk0Yjc2Y2UzN2YxNDVhNzU0ZTYxZjFlOGUzYWYwMzllLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhOTAxODNmMDlkMWI0ZTU1OWFiMjU3MmFhNDdhOGZiNy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzE4MDk1NzkxODZkM2E4ZmJiZTRkMjE0YWQ3YzY4NzYucG5nXCI7IiwiaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi4vY2xhc3Nlcy93ZWF0aGVyT2JqZWN0JztcblxuYXN5bmMgZnVuY3Rpb24gYXBpRmV0Y2hlcihiYXNlVXJsLCBzZWFyY2hRdWVyeSkge1xuICBjb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5HSVBIWV9LRVk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH1xPSR7c2VhcmNoUXVlcnl9JmFwcGlkPSR7YXBpS2V5fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XG59XG5jb25zdCBpY29uR2V0dGVyID0gKGljb25Db2RlLCBhcnJheSkgPT4ge1xuICAvLyBhZGQgdGhlIGNsYXVzZSBmb3IgZWxzZSA9PSBoYXplXG4gIGNvbnN0IHJlc3VsdCA9IGFycmF5LmZpbHRlcigod2VhdGhlcikgPT4gd2VhdGhlci53ZWF0aGVyTmFtZSA9PT0gaWNvbkNvZGUpO1xuICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQubGVuZ3RoID4gMCk7XG4gICAgcmV0dXJuIHJlc3VsdFswXS53ZWF0aGVySW1hZ2U7XG4gIH1cbiAgcmV0dXJuIGFycmF5WzZdLndlYXRoZXJJbWFnZTtcbn07XG5cbmNvbnN0IHdlYXRoZXJJY29uR2V0dGVyID0gYXN5bmMgKGljb25Db2RlLCBlbGVtZW50KSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYOKAmGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbkNvZGV9QDJ4LnBuZ2AsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBpZiAoaWNvbkNvZGUgPT09ICcxM2QnIHx8IGljb25Db2RlID09PSAnNTBkJykge1xuICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gJ2ludmVydCgxKSc7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlLnVybDtcbn07XG5cbmNvbnN0IGltZ0NyZWF0b3IgPSBhc3luYyAoY29udGFpbmVyLCBpbWFnZSwgc3JjKSA9PiB7XG4gIGltYWdlLnNyYyA9IGF3YWl0IHNyYztcbiAgcmV0dXJuIGNvbnRhaW5lci5hcHBlbmQoaW1hZ2UpO1xufTtcbmNvbnN0IHdlYXRoZXJPYmplY3RDb25zdHJ1Y3RvciA9IGFzeW5jIChhcGlEYXRhKSA9PiB7XG4gIGNvbnN0IHdlYXRoZXJPYmplY3QgPSBhd2FpdCBhcGlEYXRhO1xuICBjb25zdCB3ZWF0aGVyID0gV2VhdGhlcihcbiAgICBhd2FpdCB3ZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0ubWFpbixcbiAgICBhd2FpdCB3ZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgYXdhaXQgd2VhdGhlck9iamVjdC5tYWluLnRlbXAsXG4gICAgYXdhaXQgd2VhdGhlck9iamVjdC5tYWluLnRlbXBfbWluLFxuICAgIGF3YWl0IHdlYXRoZXJPYmplY3QubWFpbi50ZW1wX21heCxcbiAgICBhd2FpdCB3ZWF0aGVyT2JqZWN0LndlYXRoZXJbMF0uaWNvbixcbiAgKTtcbiAgcmV0dXJuIHdlYXRoZXI7XG59O1xuXG5jb25zdCB3ZWF0aGVyT2JqZWN0RXJyb3IgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRhdGE7XG4gIGNvbnN0IHdlYXRoZXIgPSBXZWF0aGVyKFxuICAgIGF3YWl0IHJlc3BvbnNlLm1lc3NhZ2UsXG4gICAgJycsXG4gICAgJycsXG4gICAgJycsXG4gICAgJycsXG4gICAgJycsXG4gICk7XG4gIHJldHVybiB3ZWF0aGVyO1xufTtcblxuY29uc3QgcHJvbWlzZVRvSnNvbiA9IGFzeW5jIChiYXNlVXJsLCBzZWFyY2hRdWVyeSwgdW5pdHMgPSAnaW1wZXJpYWwnKSA9PiB7XG4gIGNvbnN0IGFwaUtleSA9IHByb2Nlc3MuZW52LldFQVRIRVJfQVBJO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9cT0ke3NlYXJjaFF1ZXJ5fSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2FwaUtleX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgaWYgKGRhdGEuY29kID09PSAnNDA0JykgcmV0dXJuIHdlYXRoZXJPYmplY3RFcnJvcihkYXRhKTtcbiAgcmV0dXJuIHdlYXRoZXJPYmplY3RDb25zdHJ1Y3RvcihkYXRhKTtcbn07XG5cbmV4cG9ydCB7XG4gIGFwaUZldGNoZXIsIGltZ0NyZWF0b3IsIHByb21pc2VUb0pzb24sIHdlYXRoZXJPYmplY3RDb25zdHJ1Y3RvciwgaWNvbkdldHRlciwgd2VhdGhlckljb25HZXR0ZXIsXG59O1xuIiwiXG5jb25zdCBpbnB1dEhhbmRsZXIgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gIGlmIChpbnB1dEVsZW1lbnQudmFsdWUpIHtcbiAgICByZXR1cm4gaW5wdXRFbGVtZW50LnZhbHVlO1xuICB9XG4gIHJldHVybiBFcnJvcignTm8gaW5wdXQgZWxlbWVudCcpO1xufTtcbmNvbnN0IGVudGVyU2hvcnRjdXQgPSAoYnRuLCBlbGVtZW50KSA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBidG4uY2xpY2soKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgY2FwaXRhbGl6ZSA9IChzKSA9PiB7XG4gIGlmICh0eXBlb2YgcyAhPT0gJ3N0cmluZycpIHJldHVybiAnJztcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufTtcblxuY29uc3QgZWxlbWVudEdlbmVyYXRvciA9IChodG1sRWxlbSwgZWxlbUlkID0gbnVsbCwgZWxlbUNsYXNzID0gbnVsbCkgPT4ge1xuICBjb25zdCBjcmVhdGVkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7aHRtbEVsZW19YCk7XG4gIGlmIChlbGVtQ2xhc3MgIT09IG51bGwpIGNyZWF0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbUNsYXNzKTtcbiAgaWYgKGVsZW1JZCAhPT0gbnVsbCkgY3JlYXRlZEVsZW1lbnQuaWQgPSBlbGVtSWQ7XG4gIHJldHVybiBjcmVhdGVkRWxlbWVudDtcbn07XG5cbmNvbnN0IHRleHRHZW5lcmF0b3IgPSAodGV4dCkgPT4ge1xuICBjb25zdCB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaWYgKHRleHQgIT09ICcnKSB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiB0ZXh0RWxlbWVudDtcbn07XG5cblxuZnVuY3Rpb24gdW5pdENvbnZlcnRlcih2YWx1ZSwgdW5pdHMpIHtcbiAgaWYgKHVuaXRzID09PSAnbWV0cmljJykge1xuICAgIGNvbnN0IHJlc3VsdCA9ICh2YWx1ZSAqIDkgLyA1KSArIDMyO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHJlc3VsdCk7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gKHZhbHVlIC0gMzIpICogKDUgLyA5KTtcbiAgcmV0dXJuIE1hdGgucm91bmQocmVzdWx0KTtcbn1cblxuZnVuY3Rpb24gdW5pdFN3YXBwZXIodmFsdWUpIHtcbiAgKHZhbHVlID09PSAnbWV0cmljJykgPyB2YWx1ZSA9ICdpbXBlcmlhbCcgOiB2YWx1ZSA9ICdtZXRyaWMnO1xuICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cbmNvbnN0IHRvZ2dsZUNvbG9yID0gKHRvZ2dsZUlucHV0LCB2YWx1ZSkgPT4ge1xuICAodmFsdWUgPT09ICdtZXRyaWMnKSA/IHRvZ2dsZUlucHV0LmNoZWNrZWQgPSBmYWxzZSA6IHRvZ2dsZUlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG59O1xuXG5leHBvcnQge1xuICBpbnB1dEhhbmRsZXIsIGVudGVyU2hvcnRjdXQsXG4gIGVsZW1lbnRHZW5lcmF0b3IsIHRleHRHZW5lcmF0b3IsIGNhcGl0YWxpemUsIHVuaXRDb252ZXJ0ZXIsIHVuaXRTd2FwcGVyLFxuICB0b2dnbGVDb2xvcixcbn07IiwiaW1wb3J0IG1haW5Db250YWluZXIgZnJvbSAnLi9yZW5kZXInO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuc2Nzcyc7XG5cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbiIsImltcG9ydCAqIGFzIEFwaUNhbGwgZnJvbSAnLi4vc2NyZWVucy9hcGlGZXRjaGVyJztcbmltcG9ydCAqIGFzIERvbU1hbmlwdWxhdGlvbiBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XG5pbXBvcnQgV2VhdGhlckltYWdlIGZyb20gJy4uL2NsYXNzZXMvd2VhdGhlckltYWdlJztcbmltcG9ydCBjbG91ZHkgZnJvbSAnLi4vaW1hZ2VzL2Nsb3Vkcy5wbmcnO1xuaW1wb3J0IHN0b3JteSBmcm9tICcuLi9pbWFnZXMvc3Rvcm0ucG5nJztcbmltcG9ydCBzdW5ueSBmcm9tICcuLi9pbWFnZXMvY2xlYXIucG5nJztcbmltcG9ydCBoYXp5IGZyb20gJy4uL2ltYWdlcy9oYXplLnBuZyc7XG5pbXBvcnQgcmFpbnkgZnJvbSAnLi4vaW1hZ2VzL3JhaW4ucG5nJztcbmltcG9ydCBzbm93eSBmcm9tICcuLi9pbWFnZXMvc25vdy5wbmcnO1xuaW1wb3J0IGVycm9yIGZyb20gJy4uL2ltYWdlcy9lcnJvci5wbmcnO1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuLi9pbWFnZXMvc2VhcmNoLnBuZyc7XG5cbmNvbnN0IHdlYXRoZXJBcnJheSA9IFtXZWF0aGVySW1hZ2UoJ0Nsb3VkcycsIGNsb3VkeSksXG4gIFdlYXRoZXJJbWFnZSgnU25vdycsIHNub3d5KSxcbiAgV2VhdGhlckltYWdlKCdSYWluJywgcmFpbnkpLFxuICBXZWF0aGVySW1hZ2UoJ0RyaXp6bGUnLCByYWlueSksXG4gIFdlYXRoZXJJbWFnZSgnVGh1bmRlcnN0b3JtJywgc3Rvcm15KSxcbiAgV2VhdGhlckltYWdlKCdDbGVhcicsIHN1bm55KSxcbiAgV2VhdGhlckltYWdlKCdIYXplJywgaGF6eSksXG4gIFdlYXRoZXJJbWFnZSgnY2l0eSBub3QgZm91bmQnLCBlcnJvcildO1xuXG4vLyBDaGFuZ2UgYWxsIGRvY3VtZW50IGNyZWF0ZUVsZW1lbnQgYW5kIHRleHQgdG8gdXNlIHRoZSBnZW5lcmFsIHB1cnBvc2UgZnVuY3Rpb25zXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XG5tYWluQ29udGFpbmVyLmlkID0gJ21haW5Db250YWluZXInO1xuY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBtYWluQ29udGFpbmVyVG9wQ2hpbGQgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ21haW5Db250YWluZXJUb3BDaGlsZCcpO1xuY29uc3QgbWFpbkNvbnRhaW5lckJvdHRvbUNoaWxkID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICdtYWluQ29udGFpbmVyQm90dG9tQ2hpbGQnKTtcbmNvbnN0IHNlYXJjaEJhckNvbnRhaW5lciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnc2VhcmNoQmFyQ29udGFpbmVyJyk7XG5jb25zdCBpbnB1dENvbnRhaW5lciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnaW5wdXRDb250YWluZXInKTtcbmNvbnN0IHRvZ2dsZUNvbnRhaW5lciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAndG9nZ2xlQ29udGFpbmVyJyk7XG5jb25zdCBjZWxzaXVzQ29udGFpbmVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICdjZWxzaXVzQ29udGFpbmVyJywgJ3RlbXBUZXh0Jyk7XG5jZWxzaXVzQ29udGFpbmVyLmFwcGVuZChEb21NYW5pcHVsYXRpb24udGV4dEdlbmVyYXRvcignQ2Vsc2l1cycpKTtcbmNvbnN0IGZhaHJlbmhlaXRDb250YWluZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ2ZhaHJlbmhlaXRDb250YWluZXInLCAndGVtcFRleHQnKTtcbmZhaHJlbmhlaXRDb250YWluZXIuYXBwZW5kKERvbU1hbmlwdWxhdGlvbi50ZXh0R2VuZXJhdG9yKCdGYWhyZW5oZWl0JykpO1xuY29uc3QgdG9nZ2xlTGFiZWwgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignbGFiZWwnLCAnc3dpdGNoJyk7XG5jb25zdCB0b2dnbGVJbnB1dCA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdpbnB1dCcsICd0b2dnbGVJbnB1dCcpO1xuXG50b2dnbGVJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbmNvbnN0IHRvZ2dsZVNwYW4gPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignc3BhbicsICd0b2dnbGVTcGFuJywgJ3NsaWRlcicpO1xudG9nZ2xlU3Bhbi5jbGFzc0xpc3QuYWRkKCdyb3VuZCcpO1xudG9nZ2xlTGFiZWwuYXBwZW5kKHRvZ2dsZUlucHV0LCB0b2dnbGVTcGFuKTtcblxuY29uc3QgbWFpbkluZm9Db250YWluZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ21haW5JbmZvQ29udGFpbmVyJyk7XG5jb25zdCB3ZWF0aGVyRGVzY3JpcHRpb25Db250YWluZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ3dlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lcicpO1xuY29uc3Qgd2VhdGhlckljb25Db250YWluZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ3dlYXRoZXJJY29uQ29udGFpbmVyJyk7XG5jb25zdCB3ZWF0aGVySWNvbiA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdpbWcnLCAnd2VhdGhlckljb24nKTtcbmNvbnN0IHdlYXRoZXJJbmZvRGVzY3JpcHRpb25Db250YWluZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ3dlYXRoZXJJbmZvRGVzY3JpcHRpb25Db250YWluZXInKTtcbmNvbnN0IERBWVRFWFQgPSAnVG9kYXknO1xuY29uc3QgY2l0eU5hbWVDb250YWluZXIgPSBEb21NYW5pcHVsYXRpb24uZWxlbWVudEdlbmVyYXRvcignZGl2JywgJ2NpdHlOYW1lQ29udGFpbmVyJyk7XG5jb25zdCBtYWluV2VhdGhlciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAnbWFpbldlYXRoZXInKTtcbmNvbnN0IG1haW5UZW1wID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICdtYWluVGVtcCcpO1xuY29uc3QgdGVtcE1pbk1heENvbnRhaW5lciA9IERvbU1hbmlwdWxhdGlvbi5lbGVtZW50R2VuZXJhdG9yKCdkaXYnLCAndGVtcE1pbk1heENvbnRhaW5lcicpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuY29uc3QgYnV0dG9uQ29udGFpbmVyID0gRG9tTWFuaXB1bGF0aW9uLmVsZW1lbnRHZW5lcmF0b3IoJ2RpdicsICdidXR0b25Db250YWluZXInKTtcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYnV0dG9uLmlkID0gJ2FwaUJ1dHRvbic7XG5idXR0b24udGV4dENvbnRlbnQgPSAnU2VhcmNoJztcbmlucHV0LmlkID0gJ2FwaUlucHV0JztcbmlucHV0LnBsYWNlaG9sZGVyID0gJ1NvbWV3aGVyZSBvbmx5IHdlIGtub3cnO1xuYnV0dG9uQ29udGFpbmVyLmFwcGVuZChidXR0b24pO1xuaW5wdXRDb250YWluZXIuYXBwZW5kKGlucHV0KTtcbnNlYXJjaEJhckNvbnRhaW5lci5hcHBlbmQoaW5wdXRDb250YWluZXIsIGJ1dHRvbkNvbnRhaW5lcik7XG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmltZ0NvbnRhaW5lci5pZCA9ICdpbWdDb250YWluZXInO1xuaW1nLmlkID0gJ2ltZ0FQSSc7XG5BcGlDYWxsLmltZ0NyZWF0b3IoaW1nQ29udGFpbmVyLCBpbWcsIHNlYXJjaCk7XG5jaXR5TmFtZUNvbnRhaW5lci5hcHBlbmQoRG9tTWFuaXB1bGF0aW9uLnRleHRHZW5lcmF0b3IoJ1dlYXRoZXIgYXBwJykpO1xuY29uc3QgYmFzZVVybCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj8nO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjaXR5TmFtZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgbWFpbldlYXRoZXIuaW5uZXJIVE1MID0gJyc7XG4gIG1haW5UZW1wLmlubmVySFRNTCA9ICcnO1xuICB3ZWF0aGVySWNvbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgdGVtcE1pbk1heENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgd2VhdGhlckluZm9EZXNjcmlwdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgbGV0IHVuaXRzID0gJ21ldHJpYyc7XG4gIEFwaUNhbGwucHJvbWlzZVRvSnNvbihiYXNlVXJsLCBEb21NYW5pcHVsYXRpb24uaW5wdXRIYW5kbGVyKGlucHV0KSwgdW5pdHMpLnRoZW4oXG4gICAgKHdlYXRoZXIpID0+IHtcbiAgICAgIGlmICh3ZWF0aGVyLm1haW5XZWF0aGVyID09PSAnY2l0eSBub3QgZm91bmQnKSB7XG4gICAgICAgIHRvZ2dsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWQgPSBEb21NYW5pcHVsYXRpb24uY2FwaXRhbGl6ZSh3ZWF0aGVyLm1haW5XZWF0aGVyKTtcbiAgICAgICAgbWFpbldlYXRoZXIuYXBwZW5kKERvbU1hbmlwdWxhdGlvbi50ZXh0R2VuZXJhdG9yKERvbU1hbmlwdWxhdGlvbi5jYXBpdGFsaXplKGNhcGl0YWxpemVkKSkpO1xuICAgICAgICBtYWluSW5mb0NvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgbWFpbldlYXRoZXIsXG4gICAgICAgICk7XG4gICAgICAgIEFwaUNhbGwuaW1nQ3JlYXRvcihcbiAgICAgICAgICBpbWdDb250YWluZXIsIGltZywgQXBpQ2FsbC5pY29uR2V0dGVyKHdlYXRoZXIubWFpbldlYXRoZXIsIHdlYXRoZXJBcnJheSksXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGVJbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRvZ2dsZUNvbnRhaW5lci5hcHBlbmQoY2Vsc2l1c0NvbnRhaW5lciwgdG9nZ2xlTGFiZWwsIGZhaHJlbmhlaXRDb250YWluZXIpO1xuICAgICAgICBBcGlDYWxsLmltZ0NyZWF0b3IoXG4gICAgICAgICAgaW1nQ29udGFpbmVyLCBpbWcsIEFwaUNhbGwuaWNvbkdldHRlcih3ZWF0aGVyLm1haW5XZWF0aGVyLCB3ZWF0aGVyQXJyYXkpLFxuICAgICAgICApO1xuICAgICAgICBjaXR5TmFtZUNvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgRG9tTWFuaXB1bGF0aW9uLnRleHRHZW5lcmF0b3IoXG4gICAgICAgICAgICBEb21NYW5pcHVsYXRpb24uY2FwaXRhbGl6ZShEb21NYW5pcHVsYXRpb24uaW5wdXRIYW5kbGVyKGlucHV0KSksXG4gICAgICAgICAgKSxcbiAgICAgICAgKTtcbiAgICAgICAgbWFpbldlYXRoZXIuYXBwZW5kKERvbU1hbmlwdWxhdGlvbi50ZXh0R2VuZXJhdG9yKHdlYXRoZXIubWFpbldlYXRoZXIpKTtcbiAgICAgICAgbWFpblRlbXAuYXBwZW5kKERvbU1hbmlwdWxhdGlvbi50ZXh0R2VuZXJhdG9yKGAke01hdGgucm91bmQod2VhdGhlci50ZW1wKX3CsGApKTtcbiAgICAgICAgdG9nZ2xlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgd2VhdGhlci50ZW1wID0gRG9tTWFuaXB1bGF0aW9uLnVuaXRDb252ZXJ0ZXIod2VhdGhlci50ZW1wLCB1bml0cyk7XG4gICAgICAgICAgd2VhdGhlci50ZW1wTWluID0gRG9tTWFuaXB1bGF0aW9uLnVuaXRDb252ZXJ0ZXIod2VhdGhlci50ZW1wTWluLCB1bml0cyk7XG4gICAgICAgICAgd2VhdGhlci50ZW1wTWF4ID0gRG9tTWFuaXB1bGF0aW9uLnVuaXRDb252ZXJ0ZXIod2VhdGhlci50ZW1wTWF4LCB1bml0cyk7XG4gICAgICAgICAgdW5pdHMgPSBEb21NYW5pcHVsYXRpb24udW5pdFN3YXBwZXIodW5pdHMpO1xuICAgICAgICAgIERvbU1hbmlwdWxhdGlvbi50b2dnbGVDb2xvcih0b2dnbGVJbnB1dCwgdW5pdHMpO1xuICAgICAgICAgIG1haW5UZW1wLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIHRlbXBNaW5NYXhDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgbWFpblRlbXAuYXBwZW5kKERvbU1hbmlwdWxhdGlvbi50ZXh0R2VuZXJhdG9yKGAke3dlYXRoZXIudGVtcH3CsGApKTtcblxuICAgICAgICAgIHRlbXBNaW5NYXhDb250YWluZXIuYXBwZW5kKERvbU1hbmlwdWxhdGlvbi50ZXh0R2VuZXJhdG9yKFxuICAgICAgICAgICAgYCR7d2VhdGhlci50ZW1wTWF4fcKwIC8gJHt3ZWF0aGVyLnRlbXBNaW59wrBgLFxuICAgICAgICAgICkpO1xuICAgICAgICB9KTtcbiAgICAgICAgQXBpQ2FsbC5pbWdDcmVhdG9yKHdlYXRoZXJJY29uQ29udGFpbmVyLCB3ZWF0aGVySWNvbixcbiAgICAgICAgICBBcGlDYWxsLndlYXRoZXJJY29uR2V0dGVyKHdlYXRoZXIuaWNvbiwgd2VhdGhlckljb24pKTtcbiAgICAgICAgd2VhdGhlckluZm9EZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQoREFZVEVYVCxcbiAgICAgICAgICBEb21NYW5pcHVsYXRpb24udGV4dEdlbmVyYXRvcih3ZWF0aGVyLndlYXRoZXJEZXNjcmlwdGlvbikpO1xuICAgICAgICB0ZW1wTWluTWF4Q29udGFpbmVyLmFwcGVuZChEb21NYW5pcHVsYXRpb24udGV4dEdlbmVyYXRvcihcbiAgICAgICAgICBgJHtNYXRoLnJvdW5kKHdlYXRoZXIudGVtcE1heCl9wrAgLyAke01hdGgucm91bmQod2VhdGhlci50ZW1wTWluKX3CsGAsXG4gICAgICAgICkpO1xuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKFxuICAgICAgICAgIHdlYXRoZXJJY29uQ29udGFpbmVyLCB3ZWF0aGVySW5mb0Rlc2NyaXB0aW9uQ29udGFpbmVyLCB0ZW1wTWluTWF4Q29udGFpbmVyLFxuICAgICAgICApO1xuICAgICAgICBtYWluQ29udGFpbmVyQm90dG9tQ2hpbGQuYXBwZW5kKGltZ0NvbnRhaW5lciwgd2VhdGhlckRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICAgICAgLy8gbWFpbkNvbnRhaW5lclRvcENoaWxkLmluc2VydEJlZm9yZSh0b2dnbGVDb250YWluZXIsIG1haW5Db250YWluZXJUb3BDaGlsZC5jaGlsZE5vZGVzWzJdKTtcbiAgICAgICAgbWFpbkluZm9Db250YWluZXIuaW5zZXJ0QmVmb3JlKHRvZ2dsZUNvbnRhaW5lciwgbWFpbkluZm9Db250YWluZXIuY2hpbGROb2Rlc1sxXSk7XG4gICAgICB9XG4gICAgICB3ZWF0aGVyRGVzY3JpcHRpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICAgICxcbiAgKTtcbn0pO1xuRG9tTWFuaXB1bGF0aW9uLmVudGVyU2hvcnRjdXQoYnV0dG9uLCBpbnB1dCk7XG5tYWluSW5mb0NvbnRhaW5lci5hcHBlbmQoY2l0eU5hbWVDb250YWluZXIsIG1haW5XZWF0aGVyLCBtYWluVGVtcCk7XG53ZWF0aGVyRGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kKFxuICB3ZWF0aGVySWNvbkNvbnRhaW5lciwgd2VhdGhlckluZm9EZXNjcmlwdGlvbkNvbnRhaW5lciwgdGVtcE1pbk1heENvbnRhaW5lcixcbik7XG5tYWluQ29udGFpbmVyVG9wQ2hpbGQuYXBwZW5kKHNlYXJjaEJhckNvbnRhaW5lciwgbWFpbkluZm9Db250YWluZXIpO1xubWFpbkNvbnRhaW5lckJvdHRvbUNoaWxkLmFwcGVuZChpbWdDb250YWluZXIsIHdlYXRoZXJEZXNjcmlwdGlvbkNvbnRhaW5lcik7XG5tYWluQ29udGFpbmVyLmFwcGVuZChcbiAgbWFpbkNvbnRhaW5lclRvcENoaWxkLFxuICBtYWluQ29udGFpbmVyQm90dG9tQ2hpbGQsXG4pO1xuZXhwb3J0IGRlZmF1bHQgbWFpbkNvbnRhaW5lcjsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==