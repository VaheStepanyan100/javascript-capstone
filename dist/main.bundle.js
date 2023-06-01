"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjavascript_capstone"] = self["webpackChunkjavascript_capstone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  list-style-type: none;\\n}\\n\\nbody {\\n  font-family: 'Times New Roman', Times, serif;\\n  background-color: #ffd23f;\\n}\\n\\nheader {\\n  background-color: #393e41;\\n}\\n\\n.headerContainer {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 0.5em 2em;\\n  align-items: center;\\n}\\n\\n.nav {\\n  display: flex;\\n  gap: 2em;\\n  padding-right: 2em;\\n}\\n\\n.nav li {\\n  font-weight: 700;\\n  color: #ffd23f;\\n  cursor: pointer;\\n}\\n\\n.nav li:first-child {\\n  text-decoration: underline;\\n}\\n\\n.movieSection {\\n  padding: 1em;\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 3em;\\n  justify-content: center;\\n}\\n\\n.movieInfo {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.likes {\\n  cursor: pointer;\\n}\\n\\n.btnContainer {\\n  display: flex;\\n  justify-content: center;\\n  padding: 0.5em;\\n}\\n\\n.commentBtn {\\n  width: 70%;\\n  padding: 0.25em;\\n  cursor: pointer;\\n  font-weight: bold;\\n}\\n\\nfooter {\\n  background-color: #393e41;\\n  padding: 0.25em;\\n  position: fixed;\\n  bottom: 0;\\n  z-index: 10;\\n  width: 100%;\\n}\\n\\nfooter p {\\n  font-weight: 600;\\n  color: #ffd23f;\\n  padding-left: 2em;\\n}\\n\\n/* Style for Comment popup */\\n.popupContainer {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  height: 100vh;\\n  width: 100%;\\n  z-index: 2;\\n  overflow: auto;\\n  background-color: #ffd23fb7;\\n}\\n\\n.commentPopup {\\n  background: #e9e7ce;\\n  width: 50%;\\n  padding: 2rem;\\n  position: absolute;\\n  top: 0;\\n  left: 50%;\\n  transform: translate(-50%, 2%);\\n  z-index: 2;\\n  border-radius: 1em;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n/* .popupHeader {\\n  position: relative;\\n} */\\n\\n#closeBtn {\\n  font-family: sans-serif;\\n  font-size: 2rem;\\n  position: absolute;\\n  top: 1%;\\n  right: 5%;\\n  cursor: pointer;\\n  transition: 0.1s;\\n}\\n\\n#closeBtn:hover {\\n  scale: 1.3;\\n  font-weight: 700;\\n}\\n\\n.popupBody {\\n  margin-bottom: 1em;\\n  display: flex;\\n  justify-content: center;\\n  flex-direction: column;\\n}\\n\\n.popupBody .movieCover {\\n  width: 330px;\\n}\\n\\n.popupBody .movieTitle {\\n  text-align: center;\\n  padding: 0.25em;\\n}\\n\\n.movieDetails {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  gap: 0.25em;\\n}\\n\\n.movieDetails span {\\n  font-weight: bold;\\n}\\n\\n.commentContainer {\\n  margin-top: 0.5em;\\n  background-color: #f7f7f7;\\n  border-radius: 0.35em;\\n  padding: 0.35em;\\n}\\n\\n.commentTitle {\\n  padding-bottom: 0.15em;\\n  font-style: italic;\\n}\\n\\n.commentList {\\n  line-height: 1.5em;\\n}\\n\\n.AddComment {\\n  background-color: #f7f7f7;\\n  margin-top: 0.5em;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 0.35em;\\n  border-radius: 0.35em;\\n}\\n\\n.AddComment h4 {\\n  padding-bottom: 0.5em;\\n  text-align: center;\\n}\\n\\n.commentForm {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0.35em;\\n  align-items: center;\\n}\\n\\n.formControl {\\n  width: 80%;\\n  border: 0.5px solid #e9e7ce;\\n  padding: 0.25em 0.6em;\\n  border-radius: 0.25em;\\n  outline-color: #e9e7ce;\\n  font-family: 'Courier New', Courier, monospace;\\n}\\n\\n.addComtBtn {\\n  padding: 0.05em 0.5em;\\n  transition: 0.1s;\\n  background-color: #fff;\\n  border-color: #fff;\\n  cursor: pointer;\\n}\\n\\n.addComtBtn:hover {\\n  transform: scale(1.03);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header.js */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayMovies.js */ \"./src/modules/displayMovies.js\");\n\n\n\n\n(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComment.js */ \"./src/modules/displayComment.js\");\n\n\nconst addComment = async (id) => {\n  const username = document.getElementById('username');\n  const comment = document.getElementById('comment');\n\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/comments';\n  const data = {\n    item_id: `item${id}`,\n    username: username.value,\n    comment: comment.value,\n  };\n  await fetch(url, {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json',\n    },\n  });\n\n  username.value = '';\n  comment.value = '';\n\n  (0,_displayComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComment);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (arr) => arr.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/commentPopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComment.js */ \"./src/modules/displayComment.js\");\n/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComment.js */ \"./src/modules/addComment.js\");\n\n\n\nconst moviesURL = 'https://api.tvmaze.com/shows';\nconst body = document.querySelector('body');\nconst commentSection = document.createElement('section');\ncommentSection.classList.add('commentSection');\n\nconst commentPopup = async (id) => {\n  const result = await fetch(`${moviesURL}/${id}`);\n  const data = await result.json();\n  const commentContent = `\n    <div class=\"popupContainer\">\n      <div class=\"commentPopup\">\n        <div class=\"popupHeader\">\n          <p id=\"closeBtn\">x</p>\n        </div>\n        <div class=\"popupBody\">\n          <img src=${data.image.original} alt=\"movie image\" class=\"movieCover\" />\n          <h2 class=\"movieTitle\">${data.name}</h2>\n          <ul class=\"movieDetails\">\n            <li><span>Language:</span> ${data.language}</li>\n            <li><span>Premiered:</span> ${data.premiered}</li>\n            <li><span>Rating:</span> ${data.rating.average}</li>\n            <li><span>Runtime:</span> ${data.averageRuntime}</li>\n          </ul>\n          <div class='commentContainer'>\n            <h3 class='commentTitle'></h3>\n            <div class='commentList'></div>\n          </div>\n          <div class=\"AddComment\">\n              <h4>Add a comment</h4>\n              <form id=\"${id}\" class=\"commentForm\">\n                  <input type=\"text\" class=\"formControl\" id=\"username\" placeholder=\"Your name..\" required>\n                  <textarea name=\"comment\" class=\"formControl\" id=\"comment\" rows=\"5\" placeholder=\"Your insights..\" required></textarea>\n                  <button class=\"addComtBtn\">Add Comment</button>\n              </form>\n            </div>\n        </div>\n      </div>\n    </div>\n  `;\n  commentSection.innerHTML = commentContent;\n  body.appendChild(commentSection);\n  (0,_displayComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n\n  const commentForm = document.querySelector('.commentForm');\n  commentForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    (0,_addComment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.id);\n  });\n\n  const closeBtn = document.getElementById('closeBtn');\n  closeBtn.addEventListener('click', () => {\n    body.removeChild(commentSection);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentPopup);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/commentPopup.js?");

/***/ }),

/***/ "./src/modules/displayComment.js":
/*!***************************************!*\
  !*** ./src/modules/displayComment.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\nconst getComment = async (id) => {\n  const commentApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/comments?item_id=item${id}`;\n  const response = await fetch(commentApi);\n  const data = await response.json();\n  return data;\n};\n\nconst displayComment = async (id) => {\n  const comment = await getComment(id);\n  const commentList = document.querySelector('.commentList');\n\n  if (comment) {\n    commentList.innerHTML = '';\n    for (let i = comment.length - 1; i >= 0; i -= 1) {\n      commentList.innerHTML += `\n        <li class=\"show-comment\">\n        ${comment[i].creation_date} ${comment[i].username}: ${comment[i].comment}\n        </li>\n        `;\n    }\n  }\n  const commentTitle = document.querySelector('.commentTitle');\n  const showComment = document.querySelectorAll('.show-comment');\n  const count = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(showComment);\n  if (count > 0) {\n    commentTitle.innerHTML = `Comment (${count})`;\n  } else {\n    commentTitle.innerHTML = 'No Comments...';\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComment);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/displayComment.js?");

/***/ }),

/***/ "./src/modules/displayMovies.js":
/*!**************************************!*\
  !*** ./src/modules/displayMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentPopup.js */ \"./src/modules/commentPopup.js\");\n/* harmony import */ var _likesCount_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likesCount.js */ \"./src/modules/likesCount.js\");\n/* harmony import */ var _movieCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieCounter.js */ \"./src/modules/movieCounter.js\");\n\n\n\n\nconst moviesURL = 'https://api.tvmaze.com/shows';\nconst movieTemplate = document.getElementById('movie-template');\nconst movieSection = document.querySelector('.movieSection');\n\nconst getAllMovies = async () => {\n  const result = await fetch(moviesURL);\n  const data = await result.json();\n  const totalMovies = (0,_movieCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\n  data.forEach((movie) => {\n    const movieElement = document.importNode(movieTemplate.content, true);\n    const movieImage = movieElement.querySelector('.movieCover');\n    movieImage.src = movie.image.original;\n    movieImage.width = 220;\n    movieImage.height = 250;\n    const movieTitle = movieElement.querySelector('.movieTitle');\n    movieTitle.textContent = movie.name;\n    const commentBtn = movieElement.querySelector('button');\n    commentBtn.setAttribute('id', movie.id);\n    const movieLikes = movieElement.querySelector('.likeNo');\n    movieLikes.setAttribute('id', `${movie.id}`);\n    const likeBtn = movieElement.querySelector('.fa-regular');\n    likeBtn.setAttribute('id', `${movie.id}`);\n    const counter = document.querySelector('.movieCounter');\n    counter.textContent = `Total Movies (${totalMovies})`;\n    movieSection.appendChild(movieElement);\n  });\n  const commentButtons = document.querySelectorAll('.commentBtn');\n  commentButtons.forEach((btn) => btn.addEventListener('click', (e) => {\n    (0,_commentPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target.id);\n  }));\n\n  const updateLikesCount = async () => {\n    const likesData = await (0,_likesCount_js__WEBPACK_IMPORTED_MODULE_1__.getLikesCount)();\n    likesData.forEach((item) => {\n      const likesCount = item.likes;\n      const likesCountElement = document.getElementById(`${item.item_id}`);\n      likesCountElement.textContent = ` ${likesCount}`;\n    });\n  };\n  updateLikesCount();\n\n  const likeBtn = document.querySelectorAll('.likeButton');\n  likeBtn.forEach((button) => {\n    button.addEventListener('click', async (item) => {\n      if (item.target.classList.contains('likeButton')) {\n        const { id } = item.target;\n        await (0,_likesCount_js__WEBPACK_IMPORTED_MODULE_1__.postLikes)(id);\n        updateLikesCount();\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllMovies);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/displayMovies.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/logo.svg */ \"./src/assets/images/logo.svg\");\n\n\nconst header = document.querySelector('header');\nconst headerFunc = () => {\n  const mainContainer = document.createElement('div');\n  mainContainer.classList.add('headerContainer');\n  header.appendChild(mainContainer);\n\n  const logoImage = document.createElement('img');\n  logoImage.src = _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_0__;\n  logoImage.width = 200;\n  logoImage.height = 30;\n  mainContainer.appendChild(logoImage);\n\n  const navigationContainer = document.createElement('div');\n  const navUl = document.createElement('ul');\n  navUl.classList.add('nav');\n  const li1 = document.createElement('li');\n  const li2 = document.createElement('li');\n  const li3 = document.createElement('li');\n  li1.classList.add('movieCounter');\n  li2.textContent = 'Genre';\n  li3.textContent = 'Rating';\n  navUl.appendChild(li1);\n  navUl.appendChild(li2);\n  navUl.appendChild(li3);\n  navigationContainer.appendChild(navUl);\n  mainContainer.appendChild(navigationContainer);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerFunc);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/likesCount.js":
/*!***********************************!*\
  !*** ./src/modules/likesCount.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLikesCount: () => (/* binding */ getLikesCount),\n/* harmony export */   postLikes: () => (/* binding */ postLikes)\n/* harmony export */ });\nconst likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/likes';\n\nconst postLikes = async (id) => {\n  const test = { item_id: id };\n  await fetch(likesApi, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(test),\n  });\n};\n\nconst getLikesCount = async () => {\n  const likes = await fetch(likesApi);\n  const response = await likes.json();\n  return response;\n};\n\n\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/likesCount.js?");

/***/ }),

/***/ "./src/modules/movieCounter.js":
/*!*************************************!*\
  !*** ./src/modules/movieCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movieCounter = (arr) => arr.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieCounter);\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/movieCounter.js?");

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c81c9fb0e5c32d2f331b.svg\";\n\n//# sourceURL=webpack://javascript-capstone/./src/assets/images/logo.svg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);