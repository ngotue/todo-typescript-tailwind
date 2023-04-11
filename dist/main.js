/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/templates/modal.html":
/*!**********************************!*\
  !*** ./src/templates/modal.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<div id=\\\"addTaskModal\\\" tabindex=\\\"-1\\\" aria-hidden=\\\"true\\\"\\r\\n    class=\\\"fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full\\\">\\r\\n    <div class=\\\"relative w-full h-full max-w-2xl md:h-auto\\\">\\r\\n        <!-- Modal content -->\\r\\n        <div class=\\\"relative bg-white rounded-lg shadow dark:bg-gray-700\\\">\\r\\n            <!-- Modal header -->\\r\\n            <div class=\\\"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600\\\">\\r\\n                <h3 class=\\\"text-xl font-semibold text-gray-900 dark:text-white\\\">\\r\\n                    New task\\r\\n                </h3>\\r\\n                <button id=\\\"close\\\" type=\\\"button\\\"\\r\\n                    class=\\\"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white\\\">\\r\\n                    <svg aria-hidden=\\\"true\\\" class=\\\"w-5 h-5\\\" fill=\\\"currentColor\\\" viewBox=\\\"0 0 20 20\\\"\\r\\n                        xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n                        <path fill-rule=\\\"evenodd\\\"\\r\\n                            d=\\\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\\\"\\r\\n                            clip-rule=\\\"evenodd\\\"></path>\\r\\n                    </svg>\\r\\n                    <span class=\\\"sr-only\\\">Close modal</span>\\r\\n                </button>\\r\\n            </div>\\r\\n            <!-- Modal body -->\\r\\n            <div class=\\\"p-6 space-y-6\\\">\\r\\n                <p class=\\\"text-base leading-relaxed text-gray-500 dark:text-gray-400\\\">\\r\\n                    With less than a month to go before the European Union enacts\\r\\n                    new consumer privacy laws for its citizens, companies around the\\r\\n                    world are updating their terms of service agreements to comply.\\r\\n                </p>\\r\\n                <p class=\\\"text-base leading-relaxed text-gray-500 dark:text-gray-400\\\">\\r\\n                    The European Union’s General Data Protection Regulation\\r\\n                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure a\\r\\n                    common set of data rights in the European Union. It requires\\r\\n                    organizations to notify users as soon as possible of high-risk\\r\\n                    data breaches that could personally affect them.\\r\\n                </p>\\r\\n            </div>\\r\\n            <!-- Modal footer -->\\r\\n            <div class=\\\"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600\\\">\\r\\n                <button id=\\\"add\\\" type=\\\"button\\\"\\r\\n                    class=\\\"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\\\">\\r\\n                    Add\\r\\n                </button>\\r\\n                <button id=\\\"cancel\\\" type=\\\"button\\\"\\r\\n                    class=\\\"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\\\">\\r\\n                    Cancel\\r\\n                </button>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\");\n\n//# sourceURL=webpack://my-webpack-project/./src/templates/modal.html?");

/***/ }),

/***/ "./src/classes/Modal.ts":
/*!******************************!*\
  !*** ./src/classes/Modal.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\nvar modalTemplate = \"\\n    <div\\n        id=\\\"addTaskModal\\\"\\n        tabindex=\\\"-1\\\"\\n        aria-hidden=\\\"true\\\"\\n        class=\\\"fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full\\\"\\n      >\\n        <div class=\\\"relative w-full h-full max-w-2xl md:h-auto\\\">\\n          <!-- Modal content -->\\n          <div class=\\\"relative bg-white rounded-lg shadow dark:bg-gray-700\\\">\\n            <!-- Modal header -->\\n            <div\\n              class=\\\"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600\\\"\\n            >\\n              <h3 class=\\\"text-xl font-semibold text-gray-900 dark:text-white\\\">\\n              New task\\n              </h3>\\n              <button\\n                id=\\\"close\\\"\\n                type=\\\"button\\\"\\n                class=\\\"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white\\\"\\n              >\\n                <svg\\n                  aria-hidden=\\\"true\\\"\\n                  class=\\\"w-5 h-5\\\"\\n                  fill=\\\"currentColor\\\"\\n                  viewBox=\\\"0 0 20 20\\\"\\n                  xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n                >\\n                  <path\\n                    fill-rule=\\\"evenodd\\\"\\n                    d=\\\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\\\"\\n                    clip-rule=\\\"evenodd\\\"\\n                  ></path>\\n                </svg>\\n                <span class=\\\"sr-only\\\">Close modal</span>\\n              </button>\\n            </div>\\n            <!-- Modal body -->\\n            <div class=\\\"p-6 space-y-6\\\">\\n              <p\\n                class=\\\"text-base leading-relaxed text-gray-500 dark:text-gray-400\\\"\\n              >\\n                With less than a month to go before the European Union enacts\\n                new consumer privacy laws for its citizens, companies around the\\n                world are updating their terms of service agreements to comply.\\n              </p>\\n              <p\\n                class=\\\"text-base leading-relaxed text-gray-500 dark:text-gray-400\\\"\\n              >\\n                The European Union\\u2019s General Data Protection Regulation\\n                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a\\n                common set of data rights in the European Union. It requires\\n                organizations to notify users as soon as possible of high-risk\\n                data breaches that could personally affect them.\\n              </p>\\n            </div>\\n            <!-- Modal footer -->\\n            <div\\n              class=\\\"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600\\\"\\n            >\\n              <button\\n                id=\\\"add\\\"\\n                type=\\\"button\\\"\\n                class=\\\"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\\\"\\n              >\\n                Add\\n              </button>\\n              <button\\n                id=\\\"cancel\\\"\\n                type=\\\"button\\\"\\n                class=\\\"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\\\"\\n              >\\n                Cancel\\n              </button>\\n            </div>\\n          </div>\\n        </div>\\n      </div>   \\n\";\nvar modalTemplate2 = __webpack_require__(/*! ../templates/modal.html */ \"./src/templates/modal.html\");\nconsole.log(modalTemplate2);\nvar Modal = /** @class */ (function () {\n    function Modal(container) {\n        this.container = container;\n        var modalContainer = document.createElement(\"div\");\n        modalContainer.innerHTML = modalTemplate;\n        this.modalTemplate = modalContainer;\n        this.initActionButtons();\n    }\n    Modal.prototype.initActionButtons = function () {\n        var _this = this;\n        var addButton = this.modalTemplate.querySelector(\"#add\");\n        var cancelButton = this.modalTemplate.querySelector(\"#cancel\");\n        var closeButton = this.modalTemplate.querySelector(\"#close\");\n        addButton.addEventListener(\"click\", function (e) {\n            _this.hideModal();\n        });\n        cancelButton.addEventListener(\"click\", function () {\n            _this.hideModal();\n        });\n        closeButton.addEventListener(\"click\", function () {\n            _this.hideModal();\n        });\n    };\n    Modal.prototype.openModal = function () {\n        this.modalTemplate\n            .querySelector(\"#addTaskModal\")\n            .classList.remove(\"hidden\");\n        this.render();\n    };\n    Modal.prototype.hideModal = function () {\n        this.modalTemplate.querySelector(\"#addTaskModal\").classList.add(\"hidden\");\n        this.render();\n    };\n    Modal.prototype.render = function () {\n        document.querySelector(this.container).append(this.modalTemplate);\n    };\n    return Modal;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/Modal.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Modal */ \"./src/classes/Modal.ts\");\n\nvar button = document.querySelector('button');\nvar modal = new _classes_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('#modal-container');\nbutton.addEventListener('click', function () {\n    modal.openModal();\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;