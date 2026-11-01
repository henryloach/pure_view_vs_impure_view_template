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
const app = (initModel, view, update, rootNode) => {
    const dispatch = (message) => {
        console.log(message);
        const updatedModel = update(currentModel, message);
        const updatedView = view(updatedModel, dispatch);
        rootNode.replaceChild(updatedView, currentView);
        currentModel = updatedModel;
        currentView = updatedView;
    };
    let currentModel = initModel;
    let currentView = view(initModel, dispatch);
    rootNode.appendChild(currentView);
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

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.view = void 0;
const view = (model, dispatch) => {
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.textContent = 'this is p1';
    p2.textContent = 'this is p2';
    p3.textContent = 'this is p3';
    if (model.selected === 'p1')
        p1.style.textDecoration = 'underline';
    if (model.selected === 'p2')
        p2.style.textDecoration = 'underline';
    if (model.selected === 'p3')
        p3.style.textDecoration = 'underline';
    p1.addEventListener('click', () => dispatch('select p1'));
    p2.addEventListener('click', () => dispatch('select p2'));
    p3.addEventListener('click', () => dispatch('select p3'));
    const selected = document.createElement('p');
    selected.textContent = `${model.selected} is selected`;
    const pre = document.createElement('pre');
    pre.textContent = JSON.stringify(model, null, 2);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(selected);
    div.appendChild(pre);
    return div;
};
exports.view = view;


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
const view_1 = __webpack_require__(/*! ./view */ "./src/view.ts");
const rootNode = document.body;
(0, app_1.app)(model_1.initModel, view_1.view, update_1.update, rootNode);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7Ozs7Ozs7OztBQ2hCRTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7Ozs7Ozs7Ozs7O0FDTGE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsY0FBYzs7Ozs7Ozs7Ozs7QUNiRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOzs7Ozs7O1VDL0JaO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLDJCQUFPO0FBQzdCLGdCQUFnQixtQkFBTyxDQUFDLCtCQUFTO0FBQ2pDLGlCQUFpQixtQkFBTyxDQUFDLGlDQUFVO0FBQ25DLGVBQWUsbUJBQU8sQ0FBQyw2QkFBUTtBQUMvQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVyZS12aWV3LXZzLWltcHVyZS12aWV3Ly4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9wdXJlLXZpZXctdnMtaW1wdXJlLXZpZXcvLi9zcmMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcHVyZS12aWV3LXZzLWltcHVyZS12aWV3Ly4vc3JjL3VwZGF0ZS50cyIsIndlYnBhY2s6Ly9wdXJlLXZpZXctdnMtaW1wdXJlLXZpZXcvLi9zcmMvdmlldy50cyIsIndlYnBhY2s6Ly9wdXJlLXZpZXctdnMtaW1wdXJlLXZpZXcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHVyZS12aWV3LXZzLWltcHVyZS12aWV3Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5hcHAgPSB2b2lkIDA7XG5jb25zdCBhcHAgPSAoaW5pdE1vZGVsLCB2aWV3LCB1cGRhdGUsIHJvb3ROb2RlKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSAobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgdXBkYXRlZE1vZGVsID0gdXBkYXRlKGN1cnJlbnRNb2RlbCwgbWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRWaWV3ID0gdmlldyh1cGRhdGVkTW9kZWwsIGRpc3BhdGNoKTtcbiAgICAgICAgcm9vdE5vZGUucmVwbGFjZUNoaWxkKHVwZGF0ZWRWaWV3LCBjdXJyZW50Vmlldyk7XG4gICAgICAgIGN1cnJlbnRNb2RlbCA9IHVwZGF0ZWRNb2RlbDtcbiAgICAgICAgY3VycmVudFZpZXcgPSB1cGRhdGVkVmlldztcbiAgICB9O1xuICAgIGxldCBjdXJyZW50TW9kZWwgPSBpbml0TW9kZWw7XG4gICAgbGV0IGN1cnJlbnRWaWV3ID0gdmlldyhpbml0TW9kZWwsIGRpc3BhdGNoKTtcbiAgICByb290Tm9kZS5hcHBlbmRDaGlsZChjdXJyZW50Vmlldyk7XG59O1xuZXhwb3J0cy5hcHAgPSBhcHA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5pdE1vZGVsID0gdm9pZCAwO1xuZXhwb3J0cy5pbml0TW9kZWwgPSB7XG4gICAgc2VsZWN0ZWQ6ICdwMSdcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXBkYXRlID0gdm9pZCAwO1xuY29uc3QgdXBkYXRlID0gKG1vZGVsLCBtZXNzYWdlKSA9PiB7XG4gICAgc3dpdGNoIChtZXNzYWdlKSB7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCBwMSc6XG4gICAgICAgICAgICByZXR1cm4geyBzZWxlY3RlZDogJ3AxJyB9O1xuICAgICAgICBjYXNlICdzZWxlY3QgcDInOlxuICAgICAgICAgICAgcmV0dXJuIHsgc2VsZWN0ZWQ6ICdwMicgfTtcbiAgICAgICAgY2FzZSAnc2VsZWN0IHAzJzpcbiAgICAgICAgICAgIHJldHVybiB7IHNlbGVjdGVkOiAncDMnIH07XG4gICAgfVxufTtcbmV4cG9ydHMudXBkYXRlID0gdXBkYXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZpZXcgPSB2b2lkIDA7XG5jb25zdCB2aWV3ID0gKG1vZGVsLCBkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAxLnRleHRDb250ZW50ID0gJ3RoaXMgaXMgcDEnO1xuICAgIHAyLnRleHRDb250ZW50ID0gJ3RoaXMgaXMgcDInO1xuICAgIHAzLnRleHRDb250ZW50ID0gJ3RoaXMgaXMgcDMnO1xuICAgIGlmIChtb2RlbC5zZWxlY3RlZCA9PT0gJ3AxJylcbiAgICAgICAgcDEuc3R5bGUudGV4dERlY29yYXRpb24gPSAndW5kZXJsaW5lJztcbiAgICBpZiAobW9kZWwuc2VsZWN0ZWQgPT09ICdwMicpXG4gICAgICAgIHAyLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ3VuZGVybGluZSc7XG4gICAgaWYgKG1vZGVsLnNlbGVjdGVkID09PSAncDMnKVxuICAgICAgICBwMy5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICd1bmRlcmxpbmUnO1xuICAgIHAxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGF0Y2goJ3NlbGVjdCBwMScpKTtcbiAgICBwMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRpc3BhdGNoKCdzZWxlY3QgcDInKSk7XG4gICAgcDMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkaXNwYXRjaCgnc2VsZWN0IHAzJykpO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNlbGVjdGVkLnRleHRDb250ZW50ID0gYCR7bW9kZWwuc2VsZWN0ZWR9IGlzIHNlbGVjdGVkYDtcbiAgICBjb25zdCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgICBwcmUudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShtb2RlbCwgbnVsbCwgMik7XG4gICAgZGl2LmFwcGVuZENoaWxkKHAxKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocDIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwMyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNlbGVjdGVkKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJlKTtcbiAgICByZXR1cm4gZGl2O1xufTtcbmV4cG9ydHMudmlldyA9IHZpZXc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhcHBfMSA9IHJlcXVpcmUoXCIuL2FwcFwiKTtcbmNvbnN0IG1vZGVsXzEgPSByZXF1aXJlKFwiLi9tb2RlbFwiKTtcbmNvbnN0IHVwZGF0ZV8xID0gcmVxdWlyZShcIi4vdXBkYXRlXCIpO1xuY29uc3Qgdmlld18xID0gcmVxdWlyZShcIi4vdmlld1wiKTtcbmNvbnN0IHJvb3ROb2RlID0gZG9jdW1lbnQuYm9keTtcbigwLCBhcHBfMS5hcHApKG1vZGVsXzEuaW5pdE1vZGVsLCB2aWV3XzEudmlldywgdXBkYXRlXzEudXBkYXRlLCByb290Tm9kZSk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9