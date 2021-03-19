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

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTotalTaxableAmount": () => /* binding */ getTotalTaxableAmount
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
 * calculator.js
 */

/**
 * Returns the total taxable totalIncome
 *
 * @param taxSettings from slected tax data
 * @param totalDecuction total dedcution amount
 * @param totalIncome total income
 */
var getTotalTaxableAmount = function getTotalTaxableAmount(totalIncome, epf, cit, otherDeduction, taxSettings) {
  var MaxAnnualDeductionRate = taxSettings.MaxAnnualDeductionRate,
      MaxAnnualDeductionAmount = taxSettings.MaxAnnualDeductionAmount,
      MaxAnnualEPFRate = taxSettings.MaxAnnualEPFRate;

  if (epf > totalIncome * MaxAnnualEPFRate) {
    throw new Error('The EPF must be smaller than 20% of salary');
  }

  var totalDeduction = epf + cit + otherDeduction;
  var EmployeeAnnualDeductionAmount = totalIncome * MaxAnnualDeductionRate;

  if (totalDeduction <= EmployeeAnnualDeductionAmount) {
    return totalIncome - totalDeduction;
  }

  if (EmployeeAnnualDeductionAmount <= MaxAnnualDeductionAmount) {
    return totalIncome - EmployeeAnnualDeductionAmount;
  }

  if (EmployeeAnnualDeductionAmount > MaxAnnualDeductionAmount && totalDeduction <= MaxAnnualDeductionAmount) return totalIncome - MaxAnnualDeductionAmount;
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
    MaxAnnualEPFRate: 0.2,
    MaxAnnualDeductionRate: 0.33,
    MaxAnnualDeductionAmount: 300000,
    brackets: {
      single: [{
        start: 0.0,
        end: 400000.0,
        rate: 0.01
      }, {
        start: 400000.0,
        end: 500000.0,
        rate: 0.1
      }, {
        start: 500000.0,
        end: 700000.0,
        rate: 0.2
      }, {
        start: 700000.0,
        end: 2000000.0,
        rate: 0.3
      }],
      married: [{
        start: 0.0,
        end: 450000.0,
        rate: 0.01
      }, {
        start: 450000.0,
        end: 550000.0,
        rate: 0.1
      }, {
        start: 550000.0,
        end: 750000.0,
        rate: 0.2
      }, {
        start: 750000.0,
        end: 2000000.0,
        rate: 0.3
      }]
    }
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
    fyStartDate: 'July 16, 2013',
    fyStartDateNe: 'Shrawan 1, 2070',
    fyEndDate: 'July 16, 2014',
    fyEndDateNe: 'Ashad 32, 2071',
    MaxAnnualEPFRate: 0.2,
    MaxAnnualDeductionRate: 0.33,
    MaxAnnualDeductionAmount: 300000,
    brackets: {
      single: [{
        start: 0.0,
        end: 400000.0,
        rate: 0.01
      }, {
        start: 400000.0,
        end: 500000.0,
        rate: 0.1
      }, {
        start: 500000.0,
        end: 700000.0,
        rate: 0.2
      }, {
        start: 700000.0,
        end: 2000000.0,
        rate: 0.3
      }],
      married: [{
        start: 0.0,
        end: 450000.0,
        rate: 0.01
      }, {
        start: 450000.0,
        end: 550000.0,
        rate: 0.1
      }, {
        start: 550000.0,
        end: 750000.0,
        rate: 0.2
      }, {
        start: 750000.0,
        end: 2000000.0,
        rate: 0.3
      }]
    }
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
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator */ "./src/calculator.js");
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



var tax = function tax(options) {
  var meta = (0,_breakdown_js__WEBPACK_IMPORTED_MODULE_0__.breakdown)(options.year);
  var income = options.income,
      epf = options.epf,
      cit = options.cit,
      otherDeduction = options.otherDeduction,
      year = options.year;
  console.log('Given year is', year);
  var taxableAmount = (0,_calculator__WEBPACK_IMPORTED_MODULE_1__.getTotalTaxableAmount)(income, epf, cit, otherDeduction, meta);
  console.log(taxableAmount, 'taxable Amount');
  var result = {};
  return result;
};

var meta = function meta() {
  return 'meta work in porogress';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2JyZWFrZG93bi5qcyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL2RhbmZlYm9va3MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RhbmZlYm9va3Mvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImJyZWFrZG93biIsInllYXIiLCJhbGxCcmFja2V0cyIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJicmFja2V0cyIsImdldFRvdGFsVGF4YWJsZUFtb3VudCIsInRvdGFsSW5jb21lIiwiZXBmIiwiY2l0Iiwib3RoZXJEZWR1Y3Rpb24iLCJ0YXhTZXR0aW5ncyIsIk1heEFubnVhbERlZHVjdGlvblJhdGUiLCJNYXhBbm51YWxEZWR1Y3Rpb25BbW91bnQiLCJNYXhBbm51YWxFUEZSYXRlIiwiRXJyb3IiLCJ0b3RhbERlZHVjdGlvbiIsIkVtcGxveWVlQW5udWFsRGVkdWN0aW9uQW1vdW50Iiwib2JqIiwiZnlTdGFydERhdGUiLCJmeVN0YXJ0RGF0ZU5lIiwiZnlFbmREYXRlIiwiZnlFbmREYXRlTmUiLCJzaW5nbGUiLCJzdGFydCIsImVuZCIsInJhdGUiLCJtYXJyaWVkIiwic3RyaW5naWZ5IiwidGF4Iiwib3B0aW9ucyIsIm1ldGEiLCJpbmNvbWUiLCJjb25zb2xlIiwibG9nIiwidGF4YWJsZUFtb3VudCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCLE1BQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLDBDQUFYLENBQXBCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSixXQUFXLENBQUNELElBQUQsQ0FBNUI7QUFFQSxTQUFPSyxRQUFQO0FBQ0EsQ0FMRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQzdCQyxXQUQ2QixFQUU3QkMsR0FGNkIsRUFHN0JDLEdBSDZCLEVBSTdCQyxjQUo2QixFQUs3QkMsV0FMNkIsRUFNekI7QUFBQSxNQUVIQyxzQkFGRyxHQUtBRCxXQUxBLENBRUhDLHNCQUZHO0FBQUEsTUFHSEMsd0JBSEcsR0FLQUYsV0FMQSxDQUdIRSx3QkFIRztBQUFBLE1BSUhDLGdCQUpHLEdBS0FILFdBTEEsQ0FJSEcsZ0JBSkc7O0FBT0osTUFBSU4sR0FBRyxHQUFHRCxXQUFXLEdBQUdPLGdCQUF4QixFQUEwQztBQUN6QyxVQUFNLElBQUlDLEtBQUosQ0FBVSw0Q0FBVixDQUFOO0FBQ0E7O0FBRUQsTUFBTUMsY0FBYyxHQUFHUixHQUFHLEdBQUdDLEdBQU4sR0FBWUMsY0FBbkM7QUFD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bnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkYW5mZWJvb2tzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRhbmZlYm9va3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGFuZmVib29rc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogVGF4IEJyZWFrZG93blxuICogVGhpcyBpcyB0aGUgbWV0YWRhdGEgZm9yIHRheCBicmFja2V0cyBpbiBOZXBhbCB3aXRoIEZZIGZ5U3RhcnREYXRlIGFuZCBmeUVuZERhdGVEYXRlXG4gKi9cblxuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vZGF0YS5qcyc7XG5cbmNvbnN0IGJyZWFrZG93biA9ICh5ZWFyKSA9PiB7XG5cdGNvbnN0IGFsbEJyYWNrZXRzID0gSlNPTi5wYXJzZShkYXRhKTtcblx0Y29uc3QgYnJhY2tldHMgPSBhbGxCcmFja2V0c1t5ZWFyXTtcblxuXHRyZXR1cm4gYnJhY2tldHM7XG59O1xuXG5leHBvcnQgeyBicmVha2Rvd24gfTtcbiIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogY2FsY3VsYXRvci5qc1xuICovXG5cbi8qKlxuICogUmV0dXJucyB0aGUgdG90YWwgdGF4YWJsZSB0b3RhbEluY29tZVxuICpcbiAqIEBwYXJhbSB0YXhTZXR0aW5ncyBmcm9tIHNsZWN0ZWQgdGF4IGRhdGFcbiAqIEBwYXJhbSB0b3RhbERlY3VjdGlvbiB0b3RhbCBkZWRjdXRpb24gYW1vdW50XG4gKiBAcGFyYW0gdG90YWxJbmNvbWUgdG90YWwgaW5jb21lXG4gKi9cbmNvbnN0IGdldFRvdGFsVGF4YWJsZUFtb3VudCA9IChcblx0dG90YWxJbmNvbWUsXG5cdGVwZixcblx0Y2l0LFxuXHRvdGhlckRlZHVjdGlvbixcblx0dGF4U2V0dGluZ3MsXG4pID0+IHtcblx0Y29uc3Qge1xuXHRcdE1heEFubnVhbERlZHVjdGlvblJhdGUsXG5cdFx0TWF4QW5udWFsRGVkdWN0aW9uQW1vdW50LFxuXHRcdE1heEFubnVhbEVQRlJhdGUsXG5cdH0gPSB0YXhTZXR0aW5ncztcblxuXHRpZiAoZXBmID4gdG90YWxJbmNvbWUgKiBNYXhBbm51YWxFUEZSYXRlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgRVBGIG11c3QgYmUgc21hbGxlciB0aGFuIDIwJSBvZiBzYWxhcnknKTtcblx0fVxuXG5cdGNvbnN0IHRvdGFsRGVkdWN0aW9uID0gZXBmICsgY2l0ICsgb3RoZXJEZWR1Y3Rpb247XG5cdGNvbnN0IEVtcGxveWVlQW5udWFsRGVkdWN0aW9uQW1vdW50ID0gdG90YWxJbmNvbWUgKiBNYXhBbm51YWxEZWR1Y3Rpb25SYXRlO1xuXG5cdGlmICh0b3RhbERlZHVjdGlvbiA8PSBFbXBsb3llZUFubnVhbERlZHVjdGlvbkFtb3VudCkge1xuXHRcdHJldHVybiB0b3RhbEluY29tZSAtIHRvdGFsRGVkdWN0aW9uO1xuXHR9XG5cblx0aWYgKEVtcGxveWVlQW5udWFsRGVkdWN0aW9uQW1vdW50IDw9IE1heEFubnVhbERlZHVjdGlvbkFtb3VudCkge1xuXHRcdHJldHVybiB0b3RhbEluY29tZSAtIEVtcGxveWVlQW5udWFsRGVkdWN0aW9uQW1vdW50O1xuXHR9XG5cblx0aWYgKFxuXHRcdEVtcGxveWVlQW5udWFsRGVkdWN0aW9uQW1vdW50ID4gTWF4QW5udWFsRGVkdWN0aW9uQW1vdW50ICYmXG5cdFx0dG90YWxEZWR1Y3Rpb24gPD0gTWF4QW5udWFsRGVkdWN0aW9uQW1vdW50XG5cdClcblx0XHRyZXR1cm4gdG90YWxJbmNvbWUgLSBNYXhBbm51YWxEZWR1Y3Rpb25BbW91bnQ7XG59O1xuXG5leHBvcnQgeyBnZXRUb3RhbFRheGFibGVBbW91bnQgfTtcbiIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogRGF0YVxuICogVGF4IFNsYWIgRGF0YVxuICovXG5cbmNvbnN0IG9iaiA9IHtcblx0JzIwNzAvNzEnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE2LCAyMDEzJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDcwJyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE0Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzaGFkIDMyLCAyMDcxJyxcblx0XHRNYXhBbm51YWxFUEZSYXRlOiAwLjIsXG5cdFx0TWF4QW5udWFsRGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRNYXhBbm51YWxEZWR1Y3Rpb25BbW91bnQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3MS83Mic6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTcsIDIwMTQnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzEnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMTUnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzInLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgMjUwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogW3sgMzAwMDAwOiAxIH0sIHsgMTAwMDAwOiAxIH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHQnMjA3Mi83Myc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTcsIDIwMTUnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzInLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMTYnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzMnLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgMjUwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogW3sgMzAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHQnMjA3My83NCc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMTYnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzMnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMTcnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzQnLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgMzUwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogW3sgNDAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHQnMjA3NC83NSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bCAxNiwgMjAxNycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxOCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMiwgMjA3NScsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyAzNTAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbeyA0MDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc1Lzc2Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxOCcsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxOScsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA3NicsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyAzNTAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMzUwMDAwOiA0IH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogW3sgNDAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTMwMDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzYvNzcnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDE5Jyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc2Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE1LCAyMDIwJyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDc3Jyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7IDQwMDAwMDogMSB9LCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEzMDAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDUwMDAwLCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEyNTAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc3Lzc4Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAxMycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxNCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMiwgMjA3MScsXG5cdFx0TWF4QW5udWFsRVBGUmF0ZTogMC4yLFxuXHRcdE1heEFubnVhbERlZHVjdGlvblJhdGU6IDAuMzMsXG5cdFx0TWF4QW5udWFsRGVkdWN0aW9uQW1vdW50OiAzMDAwMDAsXG5cdFx0YnJhY2tldHM6IHtcblx0XHRcdHNpbmdsZTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHRcdG1hcnJpZWQ6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0fSxcblx0JzIwNzgvNzknOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE2LCAyMDIxJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc4Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDIyJyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMyLCAyMDc5Jyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7IDQwMDAwMDogMSB9LCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEzMDAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDUwMDAwLCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEyNTAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc5LzgwJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAyMicsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3OScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAyMycsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA4MCcsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyA0MDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMzAwMDAwOiA0IH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogWzQ1MDAwMCwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMjUwMDAwOiA0IH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHQnMjA4MC84MSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTcsIDIwMjMnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwODAnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMjQnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNhZGggMzIsIDIwODEnLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgNDAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTMwMDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFs0NTAwMDAsIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTI1MDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcbn07XG5cbmNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuZXhwb3J0IHsgZGF0YSB9O1xuIiwiLyohXG4gKlxuICogQGRhbmZlYm9va3MvbmVwYWxwaXRcbiAqIFBlcnNvbmFsIEluY29tZSBUYXggKFBJVCkgY2FsY3VsYXRvciB1dGlsaXR5IGZvciBOZXBhbFxuICogaHR0cHM6Ly93d3cuZGFuZmVib29rcy5jb20vZW4vY2FsY3VsYXRvcnMvbmVwYWwtcGVyc29uYWwtaW5jb21lLXRheFxuICpcbiAqXG4gKiBNSVQgTGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDIwIC0gMjAyMSBEYW5mZUJvb2tzwq5cbiAqXG4gKiBJbmRleC5qc1xuICovXG5cbmltcG9ydCB7IGJyZWFrZG93biB9IGZyb20gJy4vYnJlYWtkb3duLmpzJztcbmltcG9ydCB7IGdldFRvdGFsVGF4YWJsZUFtb3VudCB9IGZyb20gJy4vY2FsY3VsYXRvcic7XG5cbmNvbnN0IHRheCA9IChvcHRpb25zKSA9PiB7XG5cdGNvbnN0IG1ldGEgPSBicmVha2Rvd24ob3B0aW9ucy55ZWFyKTtcblx0Y29uc3QgeyBpbmNvbWUsIGVwZiwgY2l0LCBvdGhlckRlZHVjdGlvbiwgeWVhciB9ID0gb3B0aW9ucztcblx0Y29uc29sZS5sb2coJ0dpdmVuIHllYXIgaXMnLCB5ZWFyKTtcblx0Y29uc3QgdGF4YWJsZUFtb3VudCA9IGdldFRvdGFsVGF4YWJsZUFtb3VudChcblx0XHRpbmNvbWUsXG5cdFx0ZXBmLFxuXHRcdGNpdCxcblx0XHRvdGhlckRlZHVjdGlvbixcblx0XHRtZXRhLFxuXHQpO1xuXHRjb25zb2xlLmxvZyh0YXhhYmxlQW1vdW50LCAndGF4YWJsZSBBbW91bnQnKTtcblx0Y29uc3QgcmVzdWx0ID0ge307XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IG1ldGEgPSAoKSA9PiB7XG5cdHJldHVybiAnbWV0YSB3b3JrIGluIHBvcm9ncmVzcyc7XG59O1xuXG5leHBvcnQgeyB0YXgsIG1ldGEgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==