(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("danfebooks", [], factory);
	else if(typeof exports === 'object')
		exports["danfebooks"] = factory();
	else
		root["danfebooks"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/breakdown.js":
/*!**************************!*\
  !*** ./src/breakdown.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakdown": () => /* binding */ breakdown
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/*!
 *
 * @danfebooks/nepalpit
 * Personal Income Tax (PIT) calculator utility for Nepal
 * https://www.danfebooks.com/calculators/personal-income-tax
 *
 *
 * MIT License
 * Copyright (c) 2020 - 2021 DanfeBooks®
 *
 * Tax Breakdown
 * This is the metadata for tax brackets in Nepal with FY fyStartDate and fyEndDateDate
 */


var breakdown = function breakdown() {
  return JSON.parse(_data_js__WEBPACK_IMPORTED_MODULE_0__.data);
};



/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => /* binding */ data
/* harmony export */ });
/*!
 *
 * @danfebooks/nepalpit
 * Personal Income Tax (PIT) calculator utility for Nepal
 * https://www.danfebooks.com/en/calculators/nepal-personal-income-tax
 *
 *
 * MIT License
 * Copyright (c) 2020 - 2021 DanfeBooks®
 *
 * Data
 * Tax Slab Data
 */
var obj = {
  '2070/71': {
    fyStartDate: 'July 16, 2013',
    fyStartDateNe: 'Shrawan 1, 2070',
    fyEndDate: 'July 16, 2014',
    fyEndDateNe: 'Ashad 32, 2071',
    brackets: [{
      single: [{
        200000: 1
      }, {
        100000: 15
      }, {
        0: 25
      }]
    }, {
      married: [250000, 100000]
    }]
  },
  '2071/72': {
    fyStartDate: 'July 17, 2014',
    fyStartDateNe: 'Shrawan 1, 2071',
    fyEndDate: 'July 16, 2015',
    fyEndDateNe: 'Ashad 31, 2072',
    brackets: [{
      single: [250000, 100000]
    }, {
      married: [300000, 100000]
    }]
  },
  '2072/73': {
    fyStartDate: 'July 17, 2015',
    fyStartDateNe: 'Shrawan 1, 2072',
    fyEndDate: 'July 15, 2016',
    fyEndDateNe: 'Ashad 31, 2073',
    brackets: [{
      single: [250000, 100000]
    }, {
      married: [300000, 100000]
    }]
  },
  '2073/74': {
    fyStartDate: 'July 16, 2016',
    fyStartDateNe: 'Shrawan 1, 2073',
    fyEndDate: 'July 15, 2017',
    fyEndDateNe: 'Ashad 31, 2074',
    brackets: [{
      single: [350000, 100000]
    }, {
      married: [400000, 100000]
    }]
  },
  '2074/75': {
    fyStartDate: 'Jul 16, 2017',
    fyStartDateNe: 'Shrawan 1, 2074',
    fyEndDate: 'July 16, 2018',
    fyEndDateNe: 'Asadh 32, 2075',
    brackets: [{
      single: [350000, 100000]
    }, {
      married: [400000, 100000]
    }]
  },
  '2075/76': {
    fyStartDate: 'July 17, 2018',
    fyStartDateNe: 'Shrawan 1, 2075',
    fyEndDate: 'July 16, 2019',
    fyEndDateNe: 'Asadh 31, 2076',
    brackets: [{
      single: [350000, 100000, 200000, 1350000]
    }, {
      married: [400000, 100000, 200000, 1300000]
    }]
  },
  '2076/77': {
    fyStartDate: 'July 17, 2019',
    fyStartDateNe: 'Shrawan 1, 2076',
    fyEndDate: 'July 15, 2020',
    fyEndDateNe: 'Asadh 31, 2077',
    brackets: [{
      single: [400000, 100000, 200000, 1300000]
    }, {
      married: [450000, 100000, 200000, 1250000]
    }]
  },
  '2077/78': {
    fyStartDate: 'July 16, 2020',
    fyStartDateNe: 'Shrawan 1, 2077',
    fyEndDate: 'July 15, 2021',
    fyEndDateNe: 'Asadh 31, 2078',
    brackets: [{
      single: [400000, 100000, 200000, 1300000]
    }, {
      married: [450000, 100000, 200000, 1250000]
    }]
  },
  '2078/79': {
    fyStartDate: 'July 16, 2021',
    fyStartDateNe: 'Shrawan 1, 2078',
    fyEndDate: 'July 16, 2022',
    fyEndDateNe: 'Asadh 32, 2079',
    brackets: [{
      single: [400000, 100000, 200000, 1300000]
    }, {
      married: [450000, 100000, 200000, 1250000]
    }]
  },
  '2079/80': {
    fyStartDate: 'July 17, 2022',
    fyStartDateNe: 'Shrawan 1, 2079',
    fyEndDate: 'July 16, 2023',
    fyEndDateNe: 'Asadh 31, 2080',
    brackets: [{
      single: [400000, 100000, 200000, 1300000]
    }, {
      married: [450000, 100000, 200000, 1250000]
    }]
  },
  '2080/81': {
    fyStartDate: 'July 17, 2023',
    fyStartDateNe: 'Shrawan 1, 2080',
    fyEndDate: 'July 15, 2024',
    fyEndDateNe: 'Asadh 32, 2081',
    brackets: [{
      single: [400000, 100000, 200000, 1300000]
    }, {
      married: [450000, 100000, 200000, 1250000]
    }]
  }
};
var data = JSON.stringify(obj);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tax": () => /* binding */ tax
/* harmony export */ });
/* harmony import */ var _breakdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakdown.js */ "./src/breakdown.js");
/*!
 *
 * @danfebooks/nepalpit
 * Personal Income Tax (PIT) calculator utility for Nepal
 * https://www.danfebooks.com/calculators/personal-income-tax
 *
 *
 * MIT License
 * Copyright (c) 2020 - 2021 DanfeBooks®
 *
 * Index.js
 */


var tax = function tax() {
  return (0,_breakdown_js__WEBPACK_IMPORTED_MODULE_0__.breakdown)();
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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2JyZWFrZG93bi5qcyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RhbmZlYm9va3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RhbmZlYm9va3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiYnJlYWtkb3duIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsIm9iaiIsImZ5U3RhcnREYXRlIiwiZnlTdGFydERhdGVOZSIsImZ5RW5kRGF0ZSIsImZ5RW5kRGF0ZU5lIiwiYnJhY2tldHMiLCJzaW5nbGUiLCJtYXJyaWVkIiwic3RyaW5naWZ5IiwidGF4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3ZCLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXQywwQ0FBWCxDQUFQO0FBQ0EsQ0FGRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FB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QyxhQUFTLEVBQUUsZUFIRDtBQUlWQyxlQUFXLEVBQUUsZ0JBSkg7QUFLVkMsWUFBUSxFQUFFLENBQ1Q7QUFDQ0MsWUFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsT0FBekI7QUFEVCxLQURTLEVBSVQ7QUFDQ0MsYUFBTyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsT0FBekI7QUFEVixLQUpTO0FBTEE7QUE3SUEsQ0FBWjtBQTZKQSxJQUFNUixJQUFJLEdBQUdGLElBQUksQ0FBQ1csU0FBTCxDQUFlUixHQUFmLENBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTVMsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxTQUFNYix3REFBUyxFQUFmO0FBQUEsQ0FBWjs7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZGFuZmVib29rcy5waXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRhbmZlYm9va3NcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGFuZmVib29rc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkYW5mZWJvb2tzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLyohXG4gKlxuICogQGRhbmZlYm9va3MvbmVwYWxwaXRcbiAqIFBlcnNvbmFsIEluY29tZSBUYXggKFBJVCkgY2FsY3VsYXRvciB1dGlsaXR5IGZvciBOZXBhbFxuICogaHR0cHM6Ly93d3cuZGFuZmVib29rcy5jb20vY2FsY3VsYXRvcnMvcGVyc29uYWwtaW5jb21lLXRheFxuICpcbiAqXG4gKiBNSVQgTGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDIwIC0gMjAyMSBEYW5mZUJvb2tzwq5cbiAqXG4gKiBUYXggQnJlYWtkb3duXG4gKiBUaGlzIGlzIHRoZSBtZXRhZGF0YSBmb3IgdGF4IGJyYWNrZXRzIGluIE5lcGFsIHdpdGggRlkgZnlTdGFydERhdGUgYW5kIGZ5RW5kRGF0ZURhdGVcbiAqL1xuXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi9kYXRhLmpzJztcblxuY29uc3QgYnJlYWtkb3duID0gKCkgPT4ge1xuXHRyZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbn07XG5cbmV4cG9ydCB7IGJyZWFrZG93biB9O1xuIiwiLyohXG4gKlxuICogQGRhbmZlYm9va3MvbmVwYWxwaXRcbiAqIFBlcnNvbmFsIEluY29tZSBUYXggKFBJVCkgY2FsY3VsYXRvciB1dGlsaXR5IGZvciBOZXBhbFxuICogaHR0cHM6Ly93d3cuZGFuZmVib29rcy5jb20vZW4vY2FsY3VsYXRvcnMvbmVwYWwtcGVyc29uYWwtaW5jb21lLXRheFxuICpcbiAqXG4gKiBNSVQgTGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDIwIC0gMjAyMSBEYW5mZUJvb2tzwq5cbiAqXG4gKiBEYXRhXG4gKiBUYXggU2xhYiBEYXRhXG4gKi9cblxuY29uc3Qgb2JqID0ge1xuXHQnMjA3MC83MSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMTMnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzAnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMTQnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzIsIDIwNzEnLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgMjAwMDAwOiAxIH0sIHsgMTAwMDAwOiAxNSB9LCB7IDA6IDI1IH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogWzI1MDAwMCwgMTAwMDAwXSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzEvNzInOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDE0Jyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDcxJyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE1Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzaGFkIDMxLCAyMDcyJyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFsyNTAwMDAsIDEwMDAwMF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbMzAwMDAwLCAxMDAwMDBdLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHQnMjA3Mi83Myc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTcsIDIwMTUnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzInLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMTYnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzMnLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogWzI1MDAwMCwgMTAwMDAwXSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFszMDAwMDAsIDEwMDAwMF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDczLzc0Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAxNicsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MycsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAxNycsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMSwgMjA3NCcsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbMzUwMDAwLCAxMDAwMDBdLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogWzQwMDAwMCwgMTAwMDAwXSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzQvNzUnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWwgMTYsIDIwMTcnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzQnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMTgnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNhZGggMzIsIDIwNzUnLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogWzM1MDAwMCwgMTAwMDAwXSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFs0MDAwMDAsIDEwMDAwMF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc1Lzc2Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxOCcsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxOScsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA3NicsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbMzUwMDAwLCAxMDAwMDAsIDIwMDAwMCwgMTM1MDAwMF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDAwMDAwLCAxMDAwMDAsIDIwMDAwMCwgMTMwMDAwMF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc2Lzc3Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxOScsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NicsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAyMCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA3NycsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbNDAwMDAwLCAxMDAwMDAsIDIwMDAwMCwgMTMwMDAwMF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDUwMDAwLCAxMDAwMDAsIDIwMDAwMCwgMTI1MDAwMF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc3Lzc4Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAyMCcsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NycsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAyMScsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA3OCcsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbNDAwMDAwLCAxMDAwMDAsIDIwMDAwMCwgMTMwMDAwMF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDUwMDAwLCAxMDAwMDAsIDIwMDAwMCwgMTI1MDAwMF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc4Lzc5Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAyMScsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3OCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAyMicsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMiwgMjA3OScsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbNDAwMDAwLCAxMDAwMDAsIDIwMDAwMCwgMTMwMDAwMF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDUwMDAwLCAxMDAwMDAsIDIwMDAwMCwgMTI1MDAwMF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc5LzgwJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAyMicsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3OScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAyMycsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA4MCcsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbNDAwMDAwLCAxMDAwMDAsIDIwMDAwMCwgMTMwMDAwMF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDUwMDAwLCAxMDAwMDAsIDIwMDAwMCwgMTI1MDAwMF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDgwLzgxJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAyMycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA4MCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAyNCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMiwgMjA4MScsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbNDAwMDAwLCAxMDAwMDAsIDIwMDAwMCwgMTMwMDAwMF0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDUwMDAwLCAxMDAwMDAsIDIwMDAwMCwgMTI1MDAwMF0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG59O1xuXG5jb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbmV4cG9ydCB7IGRhdGEgfTtcbiIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2NhbGN1bGF0b3JzL3BlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogSW5kZXguanNcbiAqL1xuXG5pbXBvcnQgeyBicmVha2Rvd24gfSBmcm9tICcuL2JyZWFrZG93bi5qcyc7XG5cbmNvbnN0IHRheCA9ICgpID0+IGJyZWFrZG93bigpO1xuXG5leHBvcnQgeyB0YXggfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==