/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/templates/item.html":
/*!*********************************!*\
  !*** ./src/templates/item.html ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"pb-4 relative\">\r\n    <button class=\"action-btn delete\" delete><span>-</span></button>\r\n    <button class=\"action-btn left\" delete><span left></span></button>\r\n    <button class=\"action-btn right\" delete><span right>-</span></button>\r\n    <h1 class=\"font-bold text-2xl cursor-pointer\"></h1>\r\n    <p class=\"text-xs\"></p>\r\n</div>");

/***/ }),

/***/ "./src/templates/modal.html":
/*!**********************************!*\
  !*** ./src/templates/modal.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div\r\n  id=\"addTaskModal\"\r\n  tabindex=\"-1\"\r\n  aria-hidden=\"true\"\r\n  class=\"fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full\"\r\n>\r\n  <div class=\"relative w-full h-full max-w-2xl md:h-auto\">\r\n    <!-- Modal content -->\r\n    <div class=\"relative bg-white rounded-lg shadow dark:bg-gray-700\">\r\n      <!-- Modal header -->\r\n      <div\r\n        class=\"flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600\"\r\n      >\r\n        <h3 class=\"text-xl font-semibold text-gray-900 dark:text-white\">\r\n          New task\r\n        </h3>\r\n        <button\r\n          id=\"close\"\r\n          type=\"button\"\r\n          class=\"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white\"\r\n        >\r\n          <svg\r\n            aria-hidden=\"true\"\r\n            class=\"w-5 h-5\"\r\n            fill=\"currentColor\"\r\n            viewBox=\"0 0 20 20\"\r\n            xmlns=\"http://www.w3.org/2000/svg\"\r\n          >\r\n            <path\r\n              fill-rule=\"evenodd\"\r\n              d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\"\r\n              clip-rule=\"evenodd\"\r\n            ></path>\r\n          </svg>\r\n          <span class=\"sr-only\">Close modal</span>\r\n        </button>\r\n      </div>\r\n      <!-- Modal body -->\r\n      <form class=\"grid grid-template-area-2-3 gap-4 p-4\">\r\n        <label for=\"title\" class=\"text-slate-300 area-1-1\">Title</label>\r\n        <input id=\"title\" class=\"text-slate-900 area-2-1 rounded p-2\" />\r\n        <label for=\"status\" class=\"text-slate-300 area-1-2\">Status</label>\r\n        <select id=\"status\" class=\"text-slate-900 area-2-2 rounded p-2\">\r\n          <option class=\"text-fuchsia-600\" value=\"concept\" selected>\r\n            CONCEPT\r\n          </option>\r\n          <option class=\"text-lime-600\" value=\"ready\">READY</option>\r\n          <option class=\"text-sky-600\" value=\"doing\">DOING</option>\r\n          <option class=\"text-rose-600\" value=\"completed\">COMPLETED</option>\r\n        </select>\r\n        <label for=\"description\" class=\"text-slate-300 area-1-3\"\r\n          >Description</label\r\n        >\r\n        <textarea id=\"description\" class=\"text-slate-900 area-2-3 rounded p-2\"></textarea>\r\n      </form>\r\n      <!-- Modal footer -->\r\n      <div\r\n        class=\"flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600\"\r\n      >\r\n        <button\r\n          id=\"add\"\r\n          type=\"button\"\r\n          class=\"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\"\r\n        >\r\n          Add\r\n        </button>\r\n        <button\r\n          id=\"cancel\"\r\n          type=\"button\"\r\n          class=\"text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600\"\r\n        >\r\n          Cancel\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/classes/DataBase.ts":
/*!*********************************!*\
  !*** ./src/classes/DataBase.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataBase": () => (/* binding */ DataBase)
/* harmony export */ });
var DataBase = /** @class */ (function () {
    function DataBase() {
    }
    DataBase.get = function (status) {
        var datas = DataBase.storage.getItem(status);
        console.log(datas);
        return datas ? JSON.parse(datas) : null;
    };
    DataBase.setStorage = function (status, tasks) {
        DataBase.storage.setItem(status, JSON.stringify(tasks));
    };
    DataBase.upsert = function (task) {
        var datas;
        datas = this.get(task.status);
        if (!datas)
            datas = [];
        var existed = false;
        datas = datas.map(function (t) {
            if (t.id === task.id) {
                existed = true;
                return task;
            }
            return t;
        });
        if (!existed)
            datas.push(task);
        DataBase.storage.setItem(task.status, JSON.stringify(datas));
    };
    DataBase.delete = function (task) {
        var datas = this.get(task.status);
        if (datas) {
            var taskToRemove = datas.find(function (d) { return d.id === task.id; });
            console.log(taskToRemove);
            if (taskToRemove) {
                datas.splice(datas.indexOf(taskToRemove), 1);
                this.setStorage(task.status, datas);
            }
        }
    };
    DataBase.storage = localStorage;
    return DataBase;
}());


/***/ }),

/***/ "./src/classes/Item.ts":
/*!*****************************!*\
  !*** ./src/classes/Item.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.ts");
/* harmony import */ var _DataBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataBase */ "./src/classes/DataBase.ts");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./src/classes/Modal.ts");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task */ "./src/classes/Task.ts");




var itemTemplate = (__webpack_require__(/*! ../templates/item.html */ "./src/templates/item.html")["default"]);
var statusList = Object.values(_Task__WEBPACK_IMPORTED_MODULE_3__.STATUS);
var Item = /** @class */ (function () {
    function Item(task) {
        this.task = task;
        this.template = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_0__.createElementFromString)(itemTemplate);
        this.initActionButtons();
        this.template.querySelector('h1').innerHTML = this.task.title;
        this.template.querySelector('p').innerHTML = this.task.desc;
    }
    Item.prototype.initActionButtons = function () {
        var _this = this;
        this.deleteButton = this.template.querySelector('button[delete]');
        this.title = this.template.querySelector('h1');
        this.left = this.template.querySelector('button[left]');
        this.right = this.template.querySelector('button[right]');
        this.deleteButton.addEventListener('click', function (e) {
            _DataBase__WEBPACK_IMPORTED_MODULE_1__.DataBase["delete"](_this.task);
            alert("task ".concat(_this.task.title, " was removed"));
            location.reload();
        });
        this.title.addEventListener('click', function () {
            var modal = new _Modal__WEBPACK_IMPORTED_MODULE_2__.Modal('#modal-container', _this.task);
            modal.openModal();
        });
        this.left.addEventListener('click', function () {
            var step = statusList.indexOf(_this.task.status);
            if (step > 0)
                _this.task.status = statusList[step - 1];
        });
        this.right.addEventListener('click', function () {
            var step = statusList.indexOf(_this.task.status);
            if (step < 3)
                _this.task.status = statusList[step + 1];
        });
    };
    Item.prototype.render = function (parentElement) {
        if (this.task.status === _Task__WEBPACK_IMPORTED_MODULE_3__.STATUS.CONCEPT)
            this.left.classList.add('hidden');
        if (this.task.status === _Task__WEBPACK_IMPORTED_MODULE_3__.STATUS.COMPLETED)
            this.right.classList.add('hidden');
        return parentElement.appendChild(this.template);
    };
    return Item;
}());



/***/ }),

/***/ "./src/classes/Modal.ts":
/*!******************************!*\
  !*** ./src/classes/Modal.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/classes/Task.ts");
/* harmony import */ var _DataBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataBase */ "./src/classes/DataBase.ts");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functions */ "./src/utils/functions.ts");



var modalTemplate = (__webpack_require__(/*! ../templates/modal.html */ "./src/templates/modal.html")["default"]);
var Modal = /** @class */ (function () {
    function Modal(container, task) {
        if (task === void 0) { task = new _Task__WEBPACK_IMPORTED_MODULE_0__.Task(); }
        this.container = container;
        this.task = task;
        this.modalTemplate = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.createElementFromString)(modalTemplate);
        this.title = this.modalTemplate.querySelector("#title");
        this.status = this.modalTemplate.querySelector("#status");
        this.desc = this.modalTemplate.querySelector("#description");
        this.title.value = this.task.title;
        this.status.value = this.task.status;
        this.desc.value = this.task.desc;
        this.initActionButtons();
    }
    Modal.prototype.initActionButtons = function () {
        var _this = this;
        var addButton = this.modalTemplate.querySelector("#add");
        var cancelButton = this.modalTemplate.querySelector("#cancel");
        var closeButton = this.modalTemplate.querySelector("#close");
        if (this.task.title)
            addButton.textContent = 'Update';
        addButton.addEventListener("click", function () {
            var submitted = _this.submit();
            if (submitted) {
                _this.hideModal();
            }
            location.reload();
        });
        cancelButton.addEventListener("click", function () {
            _this.hideModal();
        });
        closeButton.addEventListener("click", function () {
            _this.hideModal();
        });
    };
    Modal.prototype.openModal = function () {
        this.modalTemplate
            .querySelector("#addTaskModal")
            .classList.remove("hidden");
        this.render();
    };
    Modal.prototype.hideModal = function () {
        this.modalTemplate.querySelector("#addTaskModal").classList.add("hidden");
        this.render();
    };
    Modal.prototype.render = function () {
        document.querySelector(this.container).append(this.modalTemplate);
    };
    Modal.prototype.submit = function () {
        var title = this.title.value;
        var status = this.status.value;
        var desc = this.desc.value;
        if (!title || !desc) {
            alert("title or description is not defined");
            return false;
        }
        var task = new _Task__WEBPACK_IMPORTED_MODULE_0__.Task(title, desc, status, this.task.id);
        _DataBase__WEBPACK_IMPORTED_MODULE_1__.DataBase.upsert(task);
        return true;
    };
    return Modal;
}());



/***/ }),

/***/ "./src/classes/Task.ts":
/*!*****************************!*\
  !*** ./src/classes/Task.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATUS": () => (/* binding */ STATUS),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
var STATUS;
(function (STATUS) {
    STATUS["CONCEPT"] = "concept";
    STATUS["READY"] = "ready";
    STATUS["DOING"] = "doing";
    STATUS["COMPLETED"] = "completed";
})(STATUS || (STATUS = {}));
var Task = /** @class */ (function () {
    function Task(title, desc, status, id) {
        if (title === void 0) { title = ''; }
        if (desc === void 0) { desc = ''; }
        if (status === void 0) { status = STATUS.CONCEPT; }
        if (id === void 0) { id = Math.floor(Math.random() * 250); }
        this.title = title;
        this.desc = desc;
        this.status = status;
        this.id = id;
    }
    return Task;
}());



/***/ }),

/***/ "./src/classes/TaskList.ts":
/*!*********************************!*\
  !*** ./src/classes/TaskList.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskList": () => (/* binding */ TaskList)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/classes/Item.ts");

var TaskList = /** @class */ (function () {
    function TaskList(tasks, status) {
        this.tasks = tasks;
        this.status = status;
        this.container = document.querySelector("#".concat(this.status));
        this.render();
    }
    TaskList.prototype.render = function () {
        var _this = this;
        this.tasks.forEach(function (task) {
            var newItem = new _Item__WEBPACK_IMPORTED_MODULE_0__.Item(task);
            newItem.render(_this.container);
        });
    };
    return TaskList;
}());



/***/ }),

/***/ "./src/utils/functions.ts":
/*!********************************!*\
  !*** ./src/utils/functions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElementFromString": () => (/* binding */ createElementFromString)
/* harmony export */ });
function createElementFromString(template, position) {
    if (position === void 0) { position = 'beforeend'; }
    var newElement = document.createElement('div');
    newElement.insertAdjacentHTML(position, template);
    return newElement;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_DataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/DataBase */ "./src/classes/DataBase.ts");
/* harmony import */ var _classes_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Modal */ "./src/classes/Modal.ts");
/* harmony import */ var _classes_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Task */ "./src/classes/Task.ts");
/* harmony import */ var _classes_TaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/TaskList */ "./src/classes/TaskList.ts");




var button = document.querySelector('button');
button.addEventListener('click', function () {
    var modal = new _classes_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal('#modal-container');
    modal.openModal();
});
Object.values(_classes_Task__WEBPACK_IMPORTED_MODULE_2__.STATUS).forEach(function (value) {
    new _classes_TaskList__WEBPACK_IMPORTED_MODULE_3__.TaskList(_classes_DataBase__WEBPACK_IMPORTED_MODULE_0__.DataBase.get(value) || [], value);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXRlcy9pdGVtLmh0bWwiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3RlbXBsYXRlcy9tb2RhbC5odG1sIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9jbGFzc2VzL0RhdGFCYXNlLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9jbGFzc2VzL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2NsYXNzZXMvTW9kYWwudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2NsYXNzZXMvVGFzay50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvY2xhc3Nlcy9UYXNrTGlzdC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvdXRpbHMvZnVuY3Rpb25zLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcInBiLTQgcmVsYXRpdmVcXFwiPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJhY3Rpb24tYnRuIGRlbGV0ZVxcXCIgZGVsZXRlPjxzcGFuPi08L3NwYW4+PC9idXR0b24+XFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImFjdGlvbi1idG4gbGVmdFxcXCIgZGVsZXRlPjxzcGFuIGxlZnQ+PC9zcGFuPjwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJhY3Rpb24tYnRuIHJpZ2h0XFxcIiBkZWxldGU+PHNwYW4gcmlnaHQ+LTwvc3Bhbj48L2J1dHRvbj5cXHJcXG4gICAgPGgxIGNsYXNzPVxcXCJmb250LWJvbGQgdGV4dC0yeGwgY3Vyc29yLXBvaW50ZXJcXFwiPjwvaDE+XFxyXFxuICAgIDxwIGNsYXNzPVxcXCJ0ZXh0LXhzXFxcIj48L3A+XFxyXFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2XFxyXFxuICBpZD1cXFwiYWRkVGFza01vZGFsXFxcIlxcclxcbiAgdGFiaW5kZXg9XFxcIi0xXFxcIlxcclxcbiAgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiXFxyXFxuICBjbGFzcz1cXFwiZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei01MCBoaWRkZW4gdy1mdWxsIHAtNCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gbWQ6aW5zZXQtMCBoLVtjYWxjKDEwMCUtMXJlbSldIG1kOmgtZnVsbFxcXCJcXHJcXG4+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJyZWxhdGl2ZSB3LWZ1bGwgaC1mdWxsIG1heC13LTJ4bCBtZDpoLWF1dG9cXFwiPlxcclxcbiAgICA8IS0tIE1vZGFsIGNvbnRlbnQgLS0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInJlbGF0aXZlIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IGRhcms6YmctZ3JheS03MDBcXFwiPlxcclxcbiAgICAgIDwhLS0gTW9kYWwgaGVhZGVyIC0tPlxcclxcbiAgICAgIDxkaXZcXHJcXG4gICAgICAgIGNsYXNzPVxcXCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTQgYm9yZGVyLWIgcm91bmRlZC10IGRhcms6Ym9yZGVyLWdyYXktNjAwXFxcIlxcclxcbiAgICAgID5cXHJcXG4gICAgICAgIDxoMyBjbGFzcz1cXFwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXFxcIj5cXHJcXG4gICAgICAgICAgTmV3IHRhc2tcXHJcXG4gICAgICAgIDwvaDM+XFxyXFxuICAgICAgICA8YnV0dG9uXFxyXFxuICAgICAgICAgIGlkPVxcXCJjbG9zZVxcXCJcXHJcXG4gICAgICAgICAgdHlwZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICBjbGFzcz1cXFwidGV4dC1ncmF5LTQwMCBiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ncmF5LTIwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbGcgdGV4dC1zbSBwLTEuNSBtbC1hdXRvIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBkYXJrOmhvdmVyOmJnLWdyYXktNjAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZVxcXCJcXHJcXG4gICAgICAgID5cXHJcXG4gICAgICAgICAgPHN2Z1xcclxcbiAgICAgICAgICAgIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIlxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ3LTUgaC01XFxcIlxcclxcbiAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXHJcXG4gICAgICAgICAgICB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiXFxyXFxuICAgICAgICAgICAgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIlxcclxcbiAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgPHBhdGhcXHJcXG4gICAgICAgICAgICAgIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCJcXHJcXG4gICAgICAgICAgICAgIGQ9XFxcIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XFxcIlxcclxcbiAgICAgICAgICAgICAgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIlxcclxcbiAgICAgICAgICAgID48L3BhdGg+XFxyXFxuICAgICAgICAgIDwvc3ZnPlxcclxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+Q2xvc2UgbW9kYWw8L3NwYW4+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgICA8IS0tIE1vZGFsIGJvZHkgLS0+XFxyXFxuICAgICAgPGZvcm0gY2xhc3M9XFxcImdyaWQgZ3JpZC10ZW1wbGF0ZS1hcmVhLTItMyBnYXAtNCBwLTRcXFwiPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwidGl0bGVcXFwiIGNsYXNzPVxcXCJ0ZXh0LXNsYXRlLTMwMCBhcmVhLTEtMVxcXCI+VGl0bGU8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IGlkPVxcXCJ0aXRsZVxcXCIgY2xhc3M9XFxcInRleHQtc2xhdGUtOTAwIGFyZWEtMi0xIHJvdW5kZWQgcC0yXFxcIiAvPlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwic3RhdHVzXFxcIiBjbGFzcz1cXFwidGV4dC1zbGF0ZS0zMDAgYXJlYS0xLTJcXFwiPlN0YXR1czwvbGFiZWw+XFxyXFxuICAgICAgICA8c2VsZWN0IGlkPVxcXCJzdGF0dXNcXFwiIGNsYXNzPVxcXCJ0ZXh0LXNsYXRlLTkwMCBhcmVhLTItMiByb3VuZGVkIHAtMlxcXCI+XFxyXFxuICAgICAgICAgIDxvcHRpb24gY2xhc3M9XFxcInRleHQtZnVjaHNpYS02MDBcXFwiIHZhbHVlPVxcXCJjb25jZXB0XFxcIiBzZWxlY3RlZD5cXHJcXG4gICAgICAgICAgICBDT05DRVBUXFxyXFxuICAgICAgICAgIDwvb3B0aW9uPlxcclxcbiAgICAgICAgICA8b3B0aW9uIGNsYXNzPVxcXCJ0ZXh0LWxpbWUtNjAwXFxcIiB2YWx1ZT1cXFwicmVhZHlcXFwiPlJFQURZPC9vcHRpb24+XFxyXFxuICAgICAgICAgIDxvcHRpb24gY2xhc3M9XFxcInRleHQtc2t5LTYwMFxcXCIgdmFsdWU9XFxcImRvaW5nXFxcIj5ET0lORzwvb3B0aW9uPlxcclxcbiAgICAgICAgICA8b3B0aW9uIGNsYXNzPVxcXCJ0ZXh0LXJvc2UtNjAwXFxcIiB2YWx1ZT1cXFwiY29tcGxldGVkXFxcIj5DT01QTEVURUQ8L29wdGlvbj5cXHJcXG4gICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgPGxhYmVsIGZvcj1cXFwiZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJ0ZXh0LXNsYXRlLTMwMCBhcmVhLTEtM1xcXCJcXHJcXG4gICAgICAgICAgPkRlc2NyaXB0aW9uPC9sYWJlbFxcclxcbiAgICAgICAgPlxcclxcbiAgICAgICAgPHRleHRhcmVhIGlkPVxcXCJkZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcInRleHQtc2xhdGUtOTAwIGFyZWEtMi0zIHJvdW5kZWQgcC0yXFxcIj48L3RleHRhcmVhPlxcclxcbiAgICAgIDwvZm9ybT5cXHJcXG4gICAgICA8IS0tIE1vZGFsIGZvb3RlciAtLT5cXHJcXG4gICAgICA8ZGl2XFxyXFxuICAgICAgICBjbGFzcz1cXFwiZmxleCBpdGVtcy1jZW50ZXIgcC02IHNwYWNlLXgtMiBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1iIGRhcms6Ym9yZGVyLWdyYXktNjAwXFxcIlxcclxcbiAgICAgID5cXHJcXG4gICAgICAgIDxidXR0b25cXHJcXG4gICAgICAgICAgaWQ9XFxcImFkZFxcXCJcXHJcXG4gICAgICAgICAgdHlwZT1cXFwiYnV0dG9uXFxcIlxcclxcbiAgICAgICAgICBjbGFzcz1cXFwidGV4dC13aGl0ZSBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcXFwiXFxyXFxuICAgICAgICA+XFxyXFxuICAgICAgICAgIEFkZFxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uXFxyXFxuICAgICAgICAgIGlkPVxcXCJjYW5jZWxcXFwiXFxyXFxuICAgICAgICAgIHR5cGU9XFxcImJ1dHRvblxcXCJcXHJcXG4gICAgICAgICAgY2xhc3M9XFxcInRleHQtZ3JheS01MDAgYmctd2hpdGUgaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHB4LTUgcHktMi41IGhvdmVyOnRleHQtZ3JheS05MDAgZm9jdXM6ei0xMCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTMwMCBkYXJrOmJvcmRlci1ncmF5LTUwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1ncmF5LTYwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS02MDBcXFwiXFxyXFxuICAgICAgICA+XFxyXFxuICAgICAgICAgIENhbmNlbFxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCI7IiwiaW1wb3J0IHsgU1RBVFVTLCBUYXNrIH0gZnJvbSBcIi4vVGFza1wiXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUJhc2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3RvcmFnZTogU3RvcmFnZSA9IGxvY2FsU3RvcmFnZVxyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgc3RhdGljIGdldChzdGF0dXM6IFNUQVRVUyk6IFRhc2tbXSB8IG51bGx7XHJcbiAgICAgICAgY29uc3QgZGF0YXMgPSBEYXRhQmFzZS5zdG9yYWdlLmdldEl0ZW0oc3RhdHVzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFzKVxyXG4gICAgICAgIHJldHVybiBkYXRhcyA/IEpTT04ucGFyc2UoZGF0YXMpIDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRTdG9yYWdlKHN0YXR1czogU1RBVFVTLCB0YXNrczogVGFza1tdKSB7XHJcbiAgICAgICAgRGF0YUJhc2Uuc3RvcmFnZS5zZXRJdGVtKHN0YXR1cywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB1cHNlcnQodGFzazogVGFzaykge1xyXG4gICAgICAgIGxldCBkYXRhcyA6IFRhc2tbXSB8IG51bGxcclxuICAgICAgICBkYXRhcyA9IHRoaXMuZ2V0KHRhc2suc3RhdHVzKVxyXG5cclxuICAgICAgICBpZighZGF0YXMpIGRhdGFzID0gW11cclxuXHJcbiAgICAgICAgbGV0IGV4aXN0ZWQgPSBmYWxzZVxyXG5cclxuICAgICAgICBkYXRhcyA9IGRhdGFzLm1hcCh0ID0+IHtcclxuICAgICAgICAgICAgaWYodC5pZCA9PT0gdGFzay5pZCkge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFleGlzdGVkKSBkYXRhcy5wdXNoKHRhc2spXHJcbiAgICAgICAgRGF0YUJhc2Uuc3RvcmFnZS5zZXRJdGVtKHRhc2suc3RhdHVzLCBKU09OLnN0cmluZ2lmeShkYXRhcykpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRlbGV0ZSh0YXNrOiBUYXNrKXtcclxuICAgICAgICBjb25zdCBkYXRhcyA9IHRoaXMuZ2V0KHRhc2suc3RhdHVzKVxyXG4gICAgICAgIGlmKGRhdGFzKXtcclxuICAgICAgICAgICAgY29uc3QgdGFza1RvUmVtb3ZlID0gZGF0YXMuZmluZChkID0+IGQuaWQgPT09IHRhc2suaWQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tUb1JlbW92ZSlcclxuICAgICAgICAgICAgaWYodGFza1RvUmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhcy5zcGxpY2UoZGF0YXMuaW5kZXhPZih0YXNrVG9SZW1vdmUpLCAxKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdG9yYWdlKHRhc2suc3RhdHVzLCBkYXRhcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRGcm9tU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvZnVuY3Rpb25zJ1xyXG5pbXBvcnQgeyBEYXRhQmFzZSB9IGZyb20gJy4vRGF0YUJhc2UnXHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9Nb2RhbCdcclxuaW1wb3J0IHtTVEFUVVMsIFRhc2t9IGZyb20gJy4vVGFzaydcclxuXHJcbmNvbnN0IGl0ZW1UZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL3RlbXBsYXRlcy9pdGVtLmh0bWwnKS5kZWZhdWx0XHJcbmNvbnN0IHN0YXR1c0xpc3QgPSBPYmplY3QudmFsdWVzKFNUQVRVUylcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtIHtcclxuICAgIHByaXZhdGUgdGVtcGxhdGU6IEhUTUxEaXZFbGVtZW50XHJcbiAgICBwcml2YXRlIGRlbGV0ZUJ1dHRvbiA6IEhUTUxCdXR0b25FbGVtZW50XHJcbiAgICBwcml2YXRlIGxlZnQgOiBIVE1MQnV0dG9uRWxlbWVudFxyXG4gICAgcHJpdmF0ZSByaWdodCA6IEhUTUxCdXR0b25FbGVtZW50XHJcbiAgICBwcml2YXRlIHRpdGxlOiBIVE1MSGVhZGluZ0VsZW1lbnRcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhc2s6IFRhc2spe1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBjcmVhdGVFbGVtZW50RnJvbVN0cmluZyhpdGVtVGVtcGxhdGUpXHJcbiAgICAgICAgdGhpcy5pbml0QWN0aW9uQnV0dG9ucygpXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCdoMScpIS5pbm5lckhUTUwgPSB0aGlzLnRhc2sudGl0bGVcclxuICAgICAgICB0aGlzLnRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoJ3AnKSEuaW5uZXJIVE1MID0gdGhpcy50YXNrLmRlc2NcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRBY3Rpb25CdXR0b25zKCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQnV0dG9uID0gdGhpcy50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCdidXR0b25bZGVsZXRlXScpXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMudGVtcGxhdGUucXVlcnlTZWxlY3RvcignaDEnKVxyXG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMudGVtcGxhdGUucXVlcnlTZWxlY3RvcignYnV0dG9uW2xlZnRdJylcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy50ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKCdidXR0b25bcmlnaHRdJylcclxuXHJcbiAgICAgICAgdGhpcy5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBEYXRhQmFzZS5kZWxldGUodGhpcy50YXNrKVxyXG4gICAgICAgICAgICBhbGVydChgdGFzayAke3RoaXMudGFzay50aXRsZX0gd2FzIHJlbW92ZWRgKVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy50aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoJyNtb2RhbC1jb250YWluZXInLCB0aGlzLnRhc2spXHJcbiAgICAgICAgICAgIG1vZGFsLm9wZW5Nb2RhbCgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcCA9IHN0YXR1c0xpc3QuaW5kZXhPZih0aGlzLnRhc2suc3RhdHVzKVxyXG4gICAgICAgICAgICBpZihzdGVwID4gMCkgdGhpcy50YXNrLnN0YXR1cyA9IHN0YXR1c0xpc3Rbc3RlcCAtIDFdXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBzdGF0dXNMaXN0LmluZGV4T2YodGhpcy50YXNrLnN0YXR1cylcclxuICAgICAgICAgICAgaWYoc3RlcCA8IDMpIHRoaXMudGFzay5zdGF0dXMgPSBzdGF0dXNMaXN0W3N0ZXAgKyAxXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgaWYodGhpcy50YXNrLnN0YXR1cyA9PT0gU1RBVFVTLkNPTkNFUFQpIHRoaXMubGVmdC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gICAgICAgIGlmKHRoaXMudGFzay5zdGF0dXMgPT09IFNUQVRVUy5DT01QTEVURUQpIHRoaXMucmlnaHQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgICAgICByZXR1cm4gcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU1RBVFVTLCBUYXNrIH0gZnJvbSBcIi4vVGFza1wiO1xyXG5pbXBvcnQgeyBEYXRhQmFzZSB9IGZyb20gXCIuL0RhdGFCYXNlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnRGcm9tU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xyXG5cclxuY29uc3QgbW9kYWxUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuLi90ZW1wbGF0ZXMvbW9kYWwuaHRtbFwiKS5kZWZhdWx0O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcclxuICBwcml2YXRlIG1vZGFsVGVtcGxhdGU6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgdGl0bGUgOiBIVE1MSW5wdXRFbGVtZW50XHJcbiAgcHJpdmF0ZSBkZXNjIDogSFRNTFRleHRBcmVhRWxlbWVudFxyXG4gIHByaXZhdGUgc3RhdHVzOiBIVE1MU2VsZWN0RWxlbWVudFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogc3RyaW5nLCBwcml2YXRlIHRhc2s6IFRhc2sgPSBuZXcgVGFzaygpKSB7XHJcbiAgICB0aGlzLm1vZGFsVGVtcGxhdGUgPSBjcmVhdGVFbGVtZW50RnJvbVN0cmluZyhtb2RhbFRlbXBsYXRlKTtcclxuICAgIHRoaXMudGl0bGUgPSB0aGlzLm1vZGFsVGVtcGxhdGUucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLm1vZGFsVGVtcGxhdGUucXVlcnlTZWxlY3RvcihcIiNzdGF0dXNcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICB0aGlzLmRlc2MgPSB0aGlzLm1vZGFsVGVtcGxhdGUucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgdGhpcy50aXRsZS52YWx1ZSA9IHRoaXMudGFzay50aXRsZVxyXG4gICAgdGhpcy5zdGF0dXMudmFsdWUgPSB0aGlzLnRhc2suc3RhdHVzXHJcbiAgICB0aGlzLmRlc2MudmFsdWUgPSB0aGlzLnRhc2suZGVzY1xyXG4gICAgdGhpcy5pbml0QWN0aW9uQnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0QWN0aW9uQnV0dG9ucygpIHtcclxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IHRoaXMubW9kYWxUZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKFwiI2FkZFwiKTtcclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHRoaXMubW9kYWxUZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbFwiKTtcclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gdGhpcy5tb2RhbFRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VcIik7XHJcbiAgICBpZih0aGlzLnRhc2sudGl0bGUpIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9ICdVcGRhdGUnXHJcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3Qgc3VibWl0dGVkID0gdGhpcy5zdWJtaXQoKTtcclxuICAgICAgaWYgKHN1Ym1pdHRlZCkge1xyXG4gICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgIH0pO1xyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICB9KTtcclxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbCgpIHtcclxuICAgIHRoaXMubW9kYWxUZW1wbGF0ZVxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNhZGRUYXNrTW9kYWxcIilcclxuICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgaGlkZU1vZGFsKCkge1xyXG4gICAgdGhpcy5tb2RhbFRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVGFza01vZGFsXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGFpbmVyKS5hcHBlbmQodGhpcy5tb2RhbFRlbXBsYXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3VibWl0KCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLnRpdGxlLnZhbHVlO1xyXG4gICAgY29uc3Qgc3RhdHVzID0gdGhpcy5zdGF0dXMudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjID0gdGhpcy5kZXNjLnZhbHVlO1xyXG4gICAgaWYgKCF0aXRsZSB8fCAhZGVzYykge1xyXG4gICAgICBhbGVydChcInRpdGxlIG9yIGRlc2NyaXB0aW9uIGlzIG5vdCBkZWZpbmVkXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2MsIHN0YXR1cyBhcyBTVEFUVVMsIHRoaXMudGFzay5pZCk7XHJcbiAgICBEYXRhQmFzZS51cHNlcnQodGFzayk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gU1RBVFVTIHtcclxuICBDT05DRVBUID0gXCJjb25jZXB0XCIsXHJcbiAgUkVBRFkgPSBcInJlYWR5XCIsXHJcbiAgRE9JTkcgPSBcImRvaW5nXCIsXHJcbiAgQ09NUExFVEVEID0gXCJjb21wbGV0ZWRcIixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSAnJyxcclxuICAgIHB1YmxpYyBkZXNjOiBzdHJpbmcgPSAnJyxcclxuICAgIHB1YmxpYyBzdGF0dXM6IFNUQVRVUyA9IFNUQVRVUy5DT05DRVBULFxyXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTApXHJcbiAgKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IFNUQVRVUywgVGFzayB9IGZyb20gXCIuL1Rhc2tcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL0l0ZW1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrTGlzdCB7XHJcblxyXG4gIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudFxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhc2tzOiBUYXNrW10sIHByaXZhdGUgc3RhdHVzOiBTVEFUVVMpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5zdGF0dXN9YClcclxuICAgIHRoaXMucmVuZGVyKClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgSXRlbSh0YXNrKVxyXG4gICAgICAgIG5ld0l0ZW0ucmVuZGVyKHRoaXMuY29udGFpbmVyKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRGcm9tU3RyaW5nKHRlbXBsYXRlOiBzdHJpbmcgLCBwb3NpdGlvbjogSW5zZXJ0UG9zaXRpb24gPSAnYmVmb3JlZW5kJykge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBuZXdFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTChwb3NpdGlvbiwgdGVtcGxhdGUpXHJcbiAgICByZXR1cm4gbmV3RWxlbWVudFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBEYXRhQmFzZSB9IGZyb20gJy4vY2xhc3Nlcy9EYXRhQmFzZSdcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9jbGFzc2VzL01vZGFsJ1xuaW1wb3J0IHsgU1RBVFVTIH0gZnJvbSAnLi9jbGFzc2VzL1Rhc2snXG5pbXBvcnQge1Rhc2tMaXN0fSBmcm9tICcuL2NsYXNzZXMvVGFza0xpc3QnXG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXG5cblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCcjbW9kYWwtY29udGFpbmVyJylcbiAgICBtb2RhbC5vcGVuTW9kYWwoKVxufSlcblxuT2JqZWN0LnZhbHVlcyhTVEFUVVMpLmZvckVhY2godmFsdWUgPT4ge1xuICAgIG5ldyBUYXNrTGlzdChEYXRhQmFzZS5nZXQodmFsdWUpIHx8IFtdLCB2YWx1ZSlcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=