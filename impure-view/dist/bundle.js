/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.app = void 0;
const app = (model, viewInit, viewUpdate, update, rootNode) => {
    const dispatch = (message) => {
        model = update(model, message);
        viewUpdate(model, dispatch);
    };
    viewInit(model, dispatch);
};
exports.app = app;


/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initModel = void 0;
exports.initModel = {
    selected: 'p1'
};


/***/ }),

/***/ "./src/update.ts":
/*!***********************!*\
  !*** ./src/update.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.update = void 0;
const update = (model, message) => {
    switch (message) {
        case 'select p1':
            return { selected: 'p1' };
        case 'select p2':
            return { selected: 'p2' };
        case 'select p3':
            return { selected: 'p3' };
    }
};
exports.update = update;


/***/ }),

/***/ "./src/viewInit.ts":
/*!*************************!*\
  !*** ./src/viewInit.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.viewInit = void 0;
const viewInit = (model, dispatch) => {
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    p1.addEventListener('click', () => dispatch('select p1'));
    p2.addEventListener('click', () => dispatch('select p2'));
    p3.addEventListener('click', () => dispatch('select p3'));
};
exports.viewInit = viewInit;


/***/ }),

/***/ "./src/viewUpdate.ts":
/*!***************************!*\
  !*** ./src/viewUpdate.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.viewUpdate = void 0;
const viewUpdate = (model, dispatch) => {
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    setDecoration(p1, model.selected === 'p1');
    setDecoration(p2, model.selected === 'p2');
    setDecoration(p3, model.selected === 'p3');
    const selected = document.getElementById('selected');
    selected.textContent = `${model.selected} is selected`;
    const pre = document.getElementById('pre');
    pre.textContent = JSON.stringify(model, null, 2);
};
exports.viewUpdate = viewUpdate;
const setDecoration = (el, active) => {
    if (active !== (el.dataset.active === 'true')) {
        el.style.textDecoration = active ? 'underline' : 'none';
        el.dataset.active = String(active);
    }
};


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
const model_1 = __webpack_require__(/*! ./model */ "./src/model.ts");
const update_1 = __webpack_require__(/*! ./update */ "./src/update.ts");
const viewInit_1 = __webpack_require__(/*! ./viewInit */ "./src/viewInit.ts");
const viewUpdate_1 = __webpack_require__(/*! ./viewUpdate */ "./src/viewUpdate.ts");
const rootNode = document.body;
(0, app_1.app)(model_1.initModel, viewInit_1.viewInit, viewUpdate_1.viewUpdate, update_1.update, rootNode);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7Ozs7Ozs7OztBQ1ZFO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTs7Ozs7Ozs7Ozs7QUNMYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxjQUFjOzs7Ozs7Ozs7OztBQ2JEO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOzs7Ozs7Ozs7OztBQ1hIO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDckJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLDJCQUFPO0FBQzdCLGdCQUFnQixtQkFBTyxDQUFDLCtCQUFTO0FBQ2pDLGlCQUFpQixtQkFBTyxDQUFDLGlDQUFVO0FBQ25DLG1CQUFtQixtQkFBTyxDQUFDLHFDQUFZO0FBQ3ZDLHFCQUFxQixtQkFBTyxDQUFDLHlDQUFjO0FBQzNDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXJlLXZpZXctdnMtaW1wdXJlLXZpZXcvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3B1cmUtdmlldy12cy1pbXB1cmUtdmlldy8uL3NyYy9tb2RlbC50cyIsIndlYnBhY2s6Ly9wdXJlLXZpZXctdnMtaW1wdXJlLXZpZXcvLi9zcmMvdXBkYXRlLnRzIiwid2VicGFjazovL3B1cmUtdmlldy12cy1pbXB1cmUtdmlldy8uL3NyYy92aWV3SW5pdC50cyIsIndlYnBhY2s6Ly9wdXJlLXZpZXctdnMtaW1wdXJlLXZpZXcvLi9zcmMvdmlld1VwZGF0ZS50cyIsIndlYnBhY2s6Ly9wdXJlLXZpZXctdnMtaW1wdXJlLXZpZXcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHVyZS12aWV3LXZzLWltcHVyZS12aWV3Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hcHAgPSB2b2lkIDA7XG5jb25zdCBhcHAgPSAobW9kZWwsIHZpZXdJbml0LCB2aWV3VXBkYXRlLCB1cGRhdGUsIHJvb3ROb2RlKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICBtb2RlbCA9IHVwZGF0ZShtb2RlbCwgbWVzc2FnZSk7XG4gICAgICAgIHZpZXdVcGRhdGUobW9kZWwsIGRpc3BhdGNoKTtcbiAgICB9O1xuICAgIHZpZXdJbml0KG1vZGVsLCBkaXNwYXRjaCk7XG59O1xuZXhwb3J0cy5hcHAgPSBhcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5pdE1vZGVsID0gdm9pZCAwO1xuZXhwb3J0cy5pbml0TW9kZWwgPSB7XG4gICAgc2VsZWN0ZWQ6ICdwMSdcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXBkYXRlID0gdm9pZCAwO1xuY29uc3QgdXBkYXRlID0gKG1vZGVsLCBtZXNzYWdlKSA9PiB7XG4gICAgc3dpdGNoIChtZXNzYWdlKSB7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCBwMSc6XG4gICAgICAgICAgICByZXR1cm4geyBzZWxlY3RlZDogJ3AxJyB9O1xuICAgICAgICBjYXNlICdzZWxlY3QgcDInOlxuICAgICAgICAgICAgcmV0dXJuIHsgc2VsZWN0ZWQ6ICdwMicgfTtcbiAgICAgICAgY2FzZSAnc2VsZWN0IHAzJzpcbiAgICAgICAgICAgIHJldHVybiB7IHNlbGVjdGVkOiAncDMnIH07XG4gICAgfVxufTtcbmV4cG9ydHMudXBkYXRlID0gdXBkYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZpZXdJbml0ID0gdm9pZCAwO1xuY29uc3Qgdmlld0luaXQgPSAobW9kZWwsIGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDEnKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMicpO1xuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AzJyk7XG4gICAgcDEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwYXRjaCgnc2VsZWN0IHAxJykpO1xuICAgIHAyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGF0Y2goJ3NlbGVjdCBwMicpKTtcbiAgICBwMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BhdGNoKCdzZWxlY3QgcDMnKSk7XG59O1xuZXhwb3J0cy52aWV3SW5pdCA9IHZpZXdJbml0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZpZXdVcGRhdGUgPSB2b2lkIDA7XG5jb25zdCB2aWV3VXBkYXRlID0gKG1vZGVsLCBkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3AxJyk7XG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncDInKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwMycpO1xuICAgIHNldERlY29yYXRpb24ocDEsIG1vZGVsLnNlbGVjdGVkID09PSAncDEnKTtcbiAgICBzZXREZWNvcmF0aW9uKHAyLCBtb2RlbC5zZWxlY3RlZCA9PT0gJ3AyJyk7XG4gICAgc2V0RGVjb3JhdGlvbihwMywgbW9kZWwuc2VsZWN0ZWQgPT09ICdwMycpO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdGVkJyk7XG4gICAgc2VsZWN0ZWQudGV4dENvbnRlbnQgPSBgJHttb2RlbC5zZWxlY3RlZH0gaXMgc2VsZWN0ZWRgO1xuICAgIGNvbnN0IHByZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmUnKTtcbiAgICBwcmUudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShtb2RlbCwgbnVsbCwgMik7XG59O1xuZXhwb3J0cy52aWV3VXBkYXRlID0gdmlld1VwZGF0ZTtcbmNvbnN0IHNldERlY29yYXRpb24gPSAoZWwsIGFjdGl2ZSkgPT4ge1xuICAgIGlmIChhY3RpdmUgIT09IChlbC5kYXRhc2V0LmFjdGl2ZSA9PT0gJ3RydWUnKSkge1xuICAgICAgICBlbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IGFjdGl2ZSA/ICd1bmRlcmxpbmUnIDogJ25vbmUnO1xuICAgICAgICBlbC5kYXRhc2V0LmFjdGl2ZSA9IFN0cmluZyhhY3RpdmUpO1xuICAgIH1cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhcHBfMSA9IHJlcXVpcmUoXCIuL2FwcFwiKTtcbmNvbnN0IG1vZGVsXzEgPSByZXF1aXJlKFwiLi9tb2RlbFwiKTtcbmNvbnN0IHVwZGF0ZV8xID0gcmVxdWlyZShcIi4vdXBkYXRlXCIpO1xuY29uc3Qgdmlld0luaXRfMSA9IHJlcXVpcmUoXCIuL3ZpZXdJbml0XCIpO1xuY29uc3Qgdmlld1VwZGF0ZV8xID0gcmVxdWlyZShcIi4vdmlld1VwZGF0ZVwiKTtcbmNvbnN0IHJvb3ROb2RlID0gZG9jdW1lbnQuYm9keTtcbigwLCBhcHBfMS5hcHApKG1vZGVsXzEuaW5pdE1vZGVsLCB2aWV3SW5pdF8xLnZpZXdJbml0LCB2aWV3VXBkYXRlXzEudmlld1VwZGF0ZSwgdXBkYXRlXzEudXBkYXRlLCByb290Tm9kZSk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9