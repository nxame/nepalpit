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
 * https://www.danfebooks.com/en/calculators/nepal-personal-income-tax
 *
 *
 * MIT License
 * Copyright (c) 2020 - 2021 DanfeBooks®
 *
 * Tax Breakdown
 * This is the metadata for tax brackets in Nepal with FY fyStartDate and fyEndDateDate
 */


var breakdown = function breakdown(year) {
  var allBrackets = JSON.parse(_data_js__WEBPACK_IMPORTED_MODULE_0__.data);
  var brackets = allBrackets[year];
  return brackets;
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
        100000: 2
      }, {
        0: 3
      }]
    }, {
      married: [{
        250000: 1
      }, {
        100000: 2
      }]
    }]
  },
  '2071/72': {
    fyStartDate: 'July 17, 2014',
    fyStartDateNe: 'Shrawan 1, 2071',
    fyEndDate: 'July 16, 2015',
    fyEndDateNe: 'Ashad 31, 2072',
    brackets: [{
      single: [{
        250000: 1
      }, {
        100000: 2
      }]
    }, {
      married: [{
        300000: 1
      }, {
        100000: 1
      }]
    }]
  },
  '2072/73': {
    fyStartDate: 'July 17, 2015',
    fyStartDateNe: 'Shrawan 1, 2072',
    fyEndDate: 'July 15, 2016',
    fyEndDateNe: 'Ashad 31, 2073',
    brackets: [{
      single: [{
        250000: 1
      }, {
        100000: 2
      }]
    }, {
      married: [{
        300000: 1
      }, {
        100000: 2
      }]
    }]
  },
  '2073/74': {
    fyStartDate: 'July 16, 2016',
    fyStartDateNe: 'Shrawan 1, 2073',
    fyEndDate: 'July 15, 2017',
    fyEndDateNe: 'Ashad 31, 2074',
    brackets: [{
      single: [{
        350000: 1
      }, {
        100000: 2
      }]
    }, {
      married: [{
        400000: 1
      }, {
        100000: 2
      }]
    }]
  },
  '2074/75': {
    fyStartDate: 'Jul 16, 2017',
    fyStartDateNe: 'Shrawan 1, 2074',
    fyEndDate: 'July 16, 2018',
    fyEndDateNe: 'Asadh 32, 2075',
    brackets: [{
      single: [{
        350000: 1
      }, {
        100000: 2
      }]
    }, {
      married: [{
        400000: 1
      }, {
        100000: 2
      }]
    }]
  },
  '2075/76': {
    fyStartDate: 'July 17, 2018',
    fyStartDateNe: 'Shrawan 1, 2075',
    fyEndDate: 'July 16, 2019',
    fyEndDateNe: 'Asadh 31, 2076',
    brackets: [{
      single: [{
        350000: 1
      }, {
        100000: 2
      }, {
        200000: 3
      }, {
        1350000: 4
      }]
    }, {
      married: [{
        400000: 1
      }, {
        100000: 2
      }, {
        200000: 3
      }, {
        1300000: 4
      }]
    }]
  },
  '2076/77': {
    fyStartDate: 'July 17, 2019',
    fyStartDateNe: 'Shrawan 1, 2076',
    fyEndDate: 'July 15, 2020',
    fyEndDateNe: 'Asadh 31, 2077',
    brackets: [{
      single: [{
        400000: 1
      }, {
        100000: 2
      }, {
        200000: 3
      }, {
        1300000: 4
      }]
    }, {
      married: [450000, {
        100000: 2
      }, {
        200000: 3
      }, {
        1250000: 4
      }]
    }]
  },
  '2077/78': {
    fyStartDate: 'July 16, 2020',
    fyStartDateNe: 'Shrawan 1, 2077',
    fyEndDate: 'July 15, 2021',
    fyEndDateNe: 'Asadh 31, 2078',
    brackets: [{
      single: [{
        400000: 1
      }, {
        100000: 2
      }, {
        200000: 3
      }, {
        1300000: 4
      }]
    }, {
      married: [450000, {
        100000: 2
      }, {
        200000: 3
      }, {
        1250000: 4
      }]
    }]
  },
  '2078/79': {
    fyStartDate: 'July 16, 2021',
    fyStartDateNe: 'Shrawan 1, 2078',
    fyEndDate: 'July 16, 2022',
    fyEndDateNe: 'Asadh 32, 2079',
    brackets: [{
      single: [{
        400000: 1
      }, {
        100000: 2
      }, {
        200000: 3
      }, {
        1300000: 4
      }]
    }, {
      married: [450000, {
        100000: 2
      }, {
        200000: 3
      }, {
        1250000: 4
      }]
    }]
  },
  '2079/80': {
    fyStartDate: 'July 17, 2022',
    fyStartDateNe: 'Shrawan 1, 2079',
    fyEndDate: 'July 16, 2023',
    fyEndDateNe: 'Asadh 31, 2080',
    brackets: [{
      single: [{
        400000: 1
      }, {
        100000: 2
      }, {
        200000: 3
      }, {
        1300000: 4
      }]
    }, {
      married: [450000, {
        100000: 2
      }, {
        200000: 3
      }, {
        1250000: 4
      }]
    }]
  },
  '2080/81': {
    fyStartDate: 'July 17, 2023',
    fyStartDateNe: 'Shrawan 1, 2080',
    fyEndDate: 'July 15, 2024',
    fyEndDateNe: 'Asadh 32, 2081',
    brackets: [{
      single: [{
        400000: 1
      }, {
        100000: 2
      }, {
        200000: 3
      }, {
        1300000: 4
      }]
    }, {
      married: [450000, {
        100000: 2
      }, {
        200000: 3
      }, {
        1250000: 4
      }]
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
/* harmony export */   "tax": () => /* binding */ tax,
/* harmony export */   "meta": () => /* binding */ meta
/* harmony export */ });
/* harmony import */ var _breakdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakdown.js */ "./src/breakdown.js");
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
 * Index.js
 */


var tax = function tax(year) {
  var data = (0,_breakdown_js__WEBPACK_IMPORTED_MODULE_0__.breakdown)(year);
  return data;
};

var meta = function meta() {};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2JyZWFrZG93bi5qcyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RhbmZlYm9va3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RhbmZlYm9va3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiYnJlYWtkb3duIiwieWVhciIsImFsbEJyYWNrZXRzIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImJyYWNrZXRzIiwib2JqIiwiZnlTdGFydERhdGUiLCJmeVN0YXJ0RGF0ZU5lIiwiZnlFbmREYXRlIiwiZnlFbmREYXRlTmUiLCJzaW5nbGUiLCJtYXJyaWVkIiwic3RyaW5naWZ5IiwidGF4IiwibWV0YSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQUMsSUFBSSxFQUFJO0FBQ3pCLE1BQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdD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Q0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZGFuZmVib29rcy5waXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRhbmZlYm9va3NcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGFuZmVib29rc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkYW5mZWJvb2tzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLyohXG4gKlxuICogQGRhbmZlYm9va3MvbmVwYWxwaXRcbiAqIFBlcnNvbmFsIEluY29tZSBUYXggKFBJVCkgY2FsY3VsYXRvciB1dGlsaXR5IGZvciBOZXBhbFxuICogaHR0cHM6Ly93d3cuZGFuZmVib29rcy5jb20vZW4vY2FsY3VsYXRvcnMvbmVwYWwtcGVyc29uYWwtaW5jb21lLXRheFxuICpcbiAqXG4gKiBNSVQgTGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDIwIC0gMjAyMSBEYW5mZUJvb2tzwq5cbiAqXG4gKiBUYXggQnJlYWtkb3duXG4gKiBUaGlzIGlzIHRoZSBtZXRhZGF0YSBmb3IgdGF4IGJyYWNrZXRzIGluIE5lcGFsIHdpdGggRlkgZnlTdGFydERhdGUgYW5kIGZ5RW5kRGF0ZURhdGVcbiAqL1xuXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi9kYXRhLmpzJztcblxuY29uc3QgYnJlYWtkb3duID0geWVhciA9PiB7XG5cdGNvbnN0IGFsbEJyYWNrZXRzID0gSlNPTi5wYXJzZShkYXRhKTtcblx0Y29uc3QgYnJhY2tldHMgPSBhbGxCcmFja2V0c1t5ZWFyXTtcblxuXHRyZXR1cm4gYnJhY2tldHM7XG59O1xuXG5leHBvcnQgeyBicmVha2Rvd24gfTtcbiIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogRGF0YVxuICogVGF4IFNsYWIgRGF0YVxuICovXG5cbmNvbnN0IG9iaiA9IHtcblx0JzIwNzAvNzEnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE2LCAyMDEzJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDcwJyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE0Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzaGFkIDMyLCAyMDcxJyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7IDIwMDAwMDogMSB9LCB7IDEwMDAwMDogMiB9LCB7IDA6IDMgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbezI1MDAwMDogMX0sIHsxMDAwMDA6IDJ9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzEvNzInOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDE0Jyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDcxJyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE1Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzaGFkIDMxLCAyMDcyJyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7MjUwMDAwOiAxfSwgezEwMDAwMDogMn1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogW3szMDAwMDA6IDF9LCB7MTAwMDAwOiAxfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDcyLzczJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxNScsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MicsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAxNicsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMSwgMjA3MycsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbezI1MDAwMDogMX0sIHsxMDAwMDA6IDJ9XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFt7MzAwMDAwOiAxfSwgezEwMDAwMDogMn1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHQnMjA3My83NCc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMTYnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzMnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMTcnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzQnLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3szNTAwMDA6IDF9LCB7MTAwMDAwOiAyfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbezQwMDAwMDogMX0sIHsxMDAwMDA6IDJ9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzQvNzUnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWwgMTYsIDIwMTcnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzQnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMTgnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNhZGggMzIsIDIwNzUnLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3szNTAwMDA6IDF9LCB7MTAwMDAwOiAyfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbezQwMDAwMDogMX0sIHsxMDAwMDA6IDJ9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzUvNzYnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDE4Jyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc1Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE5Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDc2Jyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7MzUwMDAwOiAxfSwgezEwMDAwMDogMn0sIHsyMDAwMDA6IDN9LCB7MTM1MDAwMDogNH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogW3s0MDAwMDA6IDF9LCB7MTAwMDAwOiAyfSwgezIwMDAwMDogM30sIHsxMzAwMDAwOiA0fV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc2Lzc3Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxOScsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NicsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAyMCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA3NycsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbezQwMDAwMDogMX0sIHsxMDAwMDA6IDJ9LCB7MjAwMDAwOiAzfSwgezEzMDAwMDA6IDR9XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFs0NTAwMDAsIHsxMDAwMDA6IDJ9LCB7MjAwMDAwOiAzfSwgezEyNTAwMDA6IDR9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzcvNzgnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE2LCAyMDIwJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc3Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE1LCAyMDIxJyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDc4Jyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7NDAwMDAwOiAxfSwgezEwMDAwMDogMn0sIHsyMDAwMDA6IDN9LCB7MTMwMDAwMDogNH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogWzQ1MDAwMCwgezEwMDAwMDogMn0sIHsyMDAwMDA6IDN9LCB7MTI1MDAwMDogNH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHQnMjA3OC83OSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMjEnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzgnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMjInLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNhZGggMzIsIDIwNzknLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3s0MDAwMDA6IDF9LCB7MTAwMDAwOiAyfSwgezIwMDAwMDogM30sIHsxMzAwMDAwOiA0fV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDUwMDAwLCB7MTAwMDAwOiAyfSwgezIwMDAwMDogM30sIHsxMjUwMDAwOiA0fV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc5LzgwJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAyMicsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3OScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAyMycsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA4MCcsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbezQwMDAwMDogMX0sIHsxMDAwMDA6IDJ9LCB7MjAwMDAwOiAzfSwgezEzMDAwMDA6IDR9XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFs0NTAwMDAsIHsxMDAwMDA6IDJ9LCB7MjAwMDAwOiAzfSwgezEyNTAwMDA6IDR9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwODAvODEnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDIzJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDgwJyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE1LCAyMDI0Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMyLCAyMDgxJyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7NDAwMDAwOiAxfSwgezEwMDAwMDogMn0sIHsyMDAwMDA6IDN9LCB7MTMwMDAwMDogNH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogWzQ1MDAwMCwgezEwMDAwMDogMn0sIHsyMDAwMDA6IDN9LCB7MTI1MDAwMDogNH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxufTtcblxuY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG5leHBvcnQgeyBkYXRhIH07XG4iLCIvKiFcbiAqXG4gKiBAZGFuZmVib29rcy9uZXBhbHBpdFxuICogUGVyc29uYWwgSW5jb21lIFRheCAoUElUKSBjYWxjdWxhdG9yIHV0aWxpdHkgZm9yIE5lcGFsXG4gKiBodHRwczovL3d3dy5kYW5mZWJvb2tzLmNvbS9lbi9jYWxjdWxhdG9ycy9uZXBhbC1wZXJzb25hbC1pbmNvbWUtdGF4XG4gKlxuICpcbiAqIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgLSAyMDIxIERhbmZlQm9va3PCrlxuICpcbiAqIEluZGV4LmpzXG4gKi9cblxuaW1wb3J0IHsgYnJlYWtkb3duIH0gZnJvbSAnLi9icmVha2Rvd24uanMnO1xuXG5jb25zdCB0YXggPSAoeWVhcikgPT4ge1xuXHRjb25zdCBkYXRhID0gYnJlYWtkb3duKHllYXIpO1xuXG5cdHJldHVybiBkYXRhO1xufVxuXG5jb25zdCBtZXRhID0gKCkgPT4ge1xuXG59XG5cbmV4cG9ydCB7IHRheCwgbWV0YSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9