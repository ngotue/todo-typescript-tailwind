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

/***/ "./src/templates/item.html":
/*!*********************************!*\
  !*** ./src/templates/item.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<div class=\\\"pb-2\\\">\\r\\n    <h3 class=\\\"font-bold\\\"><button>-</button></h3>\\r\\n    <p class=\\\"text-xs\\\"></p>\\r\\n</div>\");\n\n//# sourceURL=webpack://my-webpack-project/./src/templates/item.html?");

/***/ }),

/***/ "./src/templates/modal.html":
/*!**********************************!*\
  !*** ./src/templates/modal.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<div\\r\\n  id=\\\"addTaskModal\\\"\\r\\n  tabindex=\\\"-1\\\"\\r\\n  aria-hidden=\\\"true\\\"\\r\\n  class=\\\"fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full\\\"\\r\\n>\\r\\n  <div class=\\\"relative w-full h-full max-w-2xl md:h-auto\\\">\\r\\n    <!-- Modal content -->\\r\\n    <div class=\\\"relative bg-white rounded-lg shadow dark:bg-gray-700\\\">\\r\\n      <!-- Modal header -->\\r\\n      <div\\r\\n        class=\\\"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600\\\"\\r\\n      >\\r\\n        <h3 class=\\\"text-xl font-semibold text-gray-900 dark:text-white\\\">\\r\\n          New task\\r\\n        </h3>\\r\\n        <button\\r\\n          id=\\\"close\\\"\\r\\n          type=\\\"button\\\"\\r\\n          class=\\\"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white\\\"\\r\\n        >\\r\\n          <svg\\r\\n            aria-hidden=\\\"true\\\"\\r\\n            class=\\\"w-5 h-5\\\"\\r\\n            fill=\\\"currentColor\\\"\\r\\n            viewBox=\\\"0 0 20 20\\\"\\r\\n            xmlns=\\\"http://www.w3.org/2000/svg\\\"\\r\\n          >\\r\\n            <path\\r\\n              fill-rule=\\\"evenodd\\\"\\r\\n              d=\\\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\\\"\\r\\n              clip-rule=\\\"evenodd\\\"\\r\\n            ></path>\\r\\n          </svg>\\r\\n          <span class=\\\"sr-only\\\">Close modal</span>\\r\\n        </button>\\r\\n      </div>\\r\\n      <!-- Modal body -->\\r\\n      <form class=\\\"grid grid-template-area-2-3 gap-4 p-4\\\">\\r\\n        <label for=\\\"title\\\" class=\\\"text-slate-300 area-1-1\\\">Title</label>\\r\\n        <input id=\\\"title\\\" class=\\\"text-slate-900 area-2-1 rounded p-2\\\" />\\r\\n        <label for=\\\"status\\\" class=\\\"text-slate-300 area-1-2\\\">Status</label>\\r\\n        <select id=\\\"status\\\" class=\\\"text-slate-900 area-2-2 rounded p-2\\\">\\r\\n          <option class=\\\"text-fuchsia-600\\\" value=\\\"concept\\\" selected>\\r\\n            CONCEPT\\r\\n          </option>\\r\\n          <option class=\\\"text-lime-600\\\" value=\\\"ready\\\">READY</option>\\r\\n          <option class=\\\"text-sky-600\\\" value=\\\"doing\\\">DOING</option>\\r\\n          <option class=\\\"text-rose-600\\\" value=\\\"completed\\\">COMPLETED</option>\\r\\n        </select>\\r\\n        <label for=\\\"description\\\" class=\\\"text-slate-300 area-1-3\\\"\\r\\n          >Description</label\\r\\n        >\\r\\n        <textarea id=\\\"description\\\" class=\\\"text-slate-900 area-2-3 rounded p-2\\\"></textarea>\\r\\n      </form>\\r\\n      <!-- Modal footer -->\\r\\n      <div\\r\\n        class=\\\"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600\\\"\\r\\n      >\\r\\n        <button\\r\\n          id=\\\"add\\\"\\r\\n          type=\\\"button\\\"\\r\\n          class=\\\"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\\\"\\r\\n        >\\r\\n          Add\\r\\n        </button>\\r\\n        <button\\r\\n          id=\\\"cancel\\\"\\r\\n          type=\\\"button\\\"\\r\\n          class=\\\"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\\\"\\r\\n        >\\r\\n          Cancel\\r\\n        </button>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</div>\\r\\n\");\n\n//# sourceURL=webpack://my-webpack-project/./src/templates/modal.html?");

/***/ }),

/***/ "./src/classes/DataBase.ts":
/*!*********************************!*\
  !*** ./src/classes/DataBase.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataBase\": () => (/* binding */ DataBase)\n/* harmony export */ });\nvar DataBase = /** @class */ (function () {\n    function DataBase() {\n    }\n    DataBase.getFromStorage = function (status) {\n        var datas = DataBase.storage.getItem(status);\n        return datas ? JSON.parse(datas) : null;\n    };\n    DataBase.addToStorage = function (task) {\n        var datas;\n        datas = this.getFromStorage(task.status);\n        if (!datas)\n            datas = [];\n        datas.push(task);\n        DataBase.storage.setItem(task.status, JSON.stringify(datas));\n    };\n    DataBase.removeTask = function (task) {\n        var datas = this.getFromStorage(task.status);\n        if (datas) {\n            var taskToRemove = datas.filter(function (d) { return d.id === task.id; });\n            if (taskToRemove)\n                datas.splice(datas.indexOf(taskToRemove[0]), 1);\n        }\n    };\n    DataBase.storage = localStorage;\n    return DataBase;\n}());\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/DataBase.ts?");

/***/ }),

/***/ "./src/classes/Modal.ts":
/*!******************************!*\
  !*** ./src/classes/Modal.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/classes/Task.ts\");\n/* harmony import */ var _DataBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataBase */ \"./src/classes/DataBase.ts\");\n\n\nvar modalTemplate = (__webpack_require__(/*! ../templates/modal.html */ \"./src/templates/modal.html\")[\"default\"]);\nvar Modal = /** @class */ (function () {\n    function Modal(container) {\n        this.container = container;\n        var modalContainer = document.createElement(\"div\");\n        modalContainer.innerHTML = modalTemplate;\n        this.modalTemplate = modalContainer;\n        this.title = this.modalTemplate.querySelector(\"#title\");\n        this.status = this.modalTemplate.querySelector(\"#status\");\n        this.desc = this.modalTemplate.querySelector(\"#description\");\n        this.initActionButtons();\n    }\n    Modal.prototype.initActionButtons = function () {\n        var _this = this;\n        var addButton = this.modalTemplate.querySelector(\"#add\");\n        var cancelButton = this.modalTemplate.querySelector(\"#cancel\");\n        var closeButton = this.modalTemplate.querySelector(\"#close\");\n        addButton.addEventListener(\"click\", function (e) {\n            var submitted = _this.submit();\n            if (submitted) {\n                _this.title.value = '';\n                _this.desc.value = '';\n                _this.status.value = _Task__WEBPACK_IMPORTED_MODULE_0__.STATUS.CONCEPT;\n                _this.hideModal();\n            }\n        });\n        cancelButton.addEventListener(\"click\", function () {\n            _this.hideModal();\n        });\n        closeButton.addEventListener(\"click\", function () {\n            _this.hideModal();\n        });\n    };\n    Modal.prototype.openModal = function () {\n        this.modalTemplate\n            .querySelector(\"#addTaskModal\")\n            .classList.remove(\"hidden\");\n        this.render();\n    };\n    Modal.prototype.hideModal = function () {\n        this.modalTemplate.querySelector(\"#addTaskModal\").classList.add(\"hidden\");\n        this.render();\n    };\n    Modal.prototype.render = function () {\n        document.querySelector(this.container).append(this.modalTemplate);\n    };\n    Modal.prototype.submit = function () {\n        var title = this.title.value;\n        var status = this.status.value;\n        var desc = this.desc.value;\n        if (!title || !desc) {\n            alert(\"title or description is not defined\");\n            return false;\n        }\n        var task = new _Task__WEBPACK_IMPORTED_MODULE_0__.Task(title, desc, status);\n        _DataBase__WEBPACK_IMPORTED_MODULE_1__.DataBase.addToStorage(task);\n        return true;\n    };\n    return Modal;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/Modal.ts?");

/***/ }),

/***/ "./src/classes/Task.ts":
/*!*****************************!*\
  !*** ./src/classes/Task.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"STATUS\": () => (/* binding */ STATUS),\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nvar STATUS;\n(function (STATUS) {\n    STATUS[\"CONCEPT\"] = \"concept\";\n    STATUS[\"READY\"] = \"ready\";\n    STATUS[\"DOING\"] = \"doing\";\n    STATUS[\"COMPLETED\"] = \"completed\";\n})(STATUS || (STATUS = {}));\nvar Task = /** @class */ (function () {\n    function Task(title, desc, status) {\n        this.title = title;\n        this.desc = desc;\n        this.status = status;\n        this.id = Math.floor(Math.random() * 250);\n    }\n    return Task;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/Task.ts?");

/***/ }),

/***/ "./src/classes/TaskList.ts":
/*!*********************************!*\
  !*** ./src/classes/TaskList.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TaskList\": () => (/* binding */ TaskList)\n/* harmony export */ });\nvar itemTemplate = (__webpack_require__(/*! ../templates/item.html */ \"./src/templates/item.html\")[\"default\"]);\nvar TaskList = /** @class */ (function () {\n    function TaskList(tasks, status) {\n        this.tasks = tasks;\n        this.status = status;\n        this.render();\n    }\n    TaskList.prototype.render = function () {\n        var container = document.querySelector(\"#\".concat(this.status));\n        this.tasks.forEach(function (task) {\n            var newItem = document.createElement('div');\n            newItem.insertAdjacentHTML('afterbegin', itemTemplate);\n            newItem.querySelector('h3').innerHTML = task.title;\n            newItem.querySelector('p').innerHTML = task.desc;\n            container.appendChild(newItem);\n            console.log(newItem.innerHTML);\n        });\n    };\n    return TaskList;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/TaskList.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_DataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/DataBase */ \"./src/classes/DataBase.ts\");\n/* harmony import */ var _classes_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Modal */ \"./src/classes/Modal.ts\");\n/* harmony import */ var _classes_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Task */ \"./src/classes/Task.ts\");\n/* harmony import */ var _classes_TaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/TaskList */ \"./src/classes/TaskList.ts\");\n\n\n\n\nvar button = document.querySelector('button');\nvar modal = new _classes_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal('#modal-container');\nbutton.addEventListener('click', function () {\n    modal.openModal();\n});\nObject.values(_classes_Task__WEBPACK_IMPORTED_MODULE_2__.STATUS).forEach(function (value) {\n    new _classes_TaskList__WEBPACK_IMPORTED_MODULE_3__.TaskList(_classes_DataBase__WEBPACK_IMPORTED_MODULE_0__.DataBase.getFromStorage(value) || [], value);\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

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