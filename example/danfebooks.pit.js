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
/* harmony export */   "getTotalTaxableAmount": () => /* binding */ getTotalTaxableAmount,
/* harmony export */   "getTotalTaxAmountWithBrackets": () => /* binding */ getTotalTaxAmountWithBrackets
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
/**
 * Returns the total tax for tax band
 *
 * @param taxRate tax rate from selected tax data
 * @param totalTaxableIncome total income (can be carry left over from last bracket)
 */


var getTotalTaxForRateWithIncome = function getTotalTaxForRateWithIncome(taxRate, totalTaxableIncome) {
  var incomeTaxRateDifference = taxRate.end - taxRate.start;
  var totalMinusDifference = totalTaxableIncome - incomeTaxRateDifference;
  var carry = totalMinusDifference > 0 ? totalMinusDifference : 0;

  if (totalTaxableIncome > 0) {
    if (totalTaxableIncome >= incomeTaxRateDifference) {
      return {
        taxLiability: incomeTaxRateDifference * taxRate.rate,
        taxRate: taxRate.rate,
        assesibleIncome: incomeTaxRateDifference,
        carry: carry
      };
    }

    return {
      taxLiability: totalTaxableIncome * taxRate.rate,
      taxRate: taxRate.rate,
      assesibleIncome: totalTaxableIncome,
      carry: carry
    };
  }

  return {
    taxLiability: 0,
    taxRate: taxRate.rate,
    assesibleIncome: 0,
    carry: carry
  };
};
/**
 * Returns a all tax breakdown of income.
 * @param taxBrackets from selected tax data
 * @param totalTaxableAmount total calculated taxable amount
 */


function getTotalTaxAmountWithBrackets(taxBrackets, totalTaxableAmount) {
  var taxBreakDownArray = [];
  return taxBrackets.map(function (item, index) {
    var result = getTotalTaxForRateWithIncome(item, index === 0 ? totalTaxableAmount : taxBreakDownArray[index - 1].carry);
    taxBreakDownArray.push(result);
    return result;
  });
}



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
  var income = options.income,
      epf = options.epf,
      cit = options.cit,
      otherDeduction = options.otherDeduction,
      year = options.year,
      single = options.single;
  var meta = (0,_breakdown_js__WEBPACK_IMPORTED_MODULE_0__.breakdown)(year);
  console.log('Given year is', year);
  var taxableAmount = (0,_calculator__WEBPACK_IMPORTED_MODULE_1__.getTotalTaxableAmount)(income, epf, cit, otherDeduction, meta);
  console.log(taxableAmount, 'taxable Amount');
  var maritalStatus = single ? 'single' : 'married';
  var totalTaxAmountWithBrackets = (0,_calculator__WEBPACK_IMPORTED_MODULE_1__.getTotalTaxAmountWithBrackets)(meta.brackets[maritalStatus], taxableAmount);
  console.log(totalTaxAmountWithBrackets, 'calculated tax amount with rate');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2JyZWFrZG93bi5qcyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL2RhbmZlYm9va3MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RhbmZlYm9va3Mvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImJyZWFrZG93biIsInllYXIiLCJhbGxCcmFja2V0cyIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJicmFja2V0cyIsImdldFRvdGFsVGF4YWJsZUFtb3VudCIsInRvdGFsSW5jb21lIiwiZXBmIiwiY2l0Iiwib3RoZXJEZWR1Y3Rpb24iLCJ0YXhTZXR0aW5ncyIsIk1heEFubnVhbERlZHVjdGlvblJhdGUiLCJNYXhBbm51YWxEZWR1Y3Rpb25BbW91bnQiLCJNYXhBbm51YWxFUEZSYXRlIiwiRXJyb3IiLCJ0b3RhbERlZHVjdGlvbiIsIkVtcGxveWVlQW5udWFsRGVkdWN0aW9uQW1vdW50IiwiZ2V0VG90YWxUYXhGb3JSYXRlV2l0aEluY29tZSIsInRheFJhdGUiLCJ0b3RhbFRheGFibGVJbmNvbWUiLCJpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSIsImVuZCIsInN0YXJ0IiwidG90YWxNaW51c0RpZmZlcmVuY2UiLCJjYXJyeSIsInRheExpYWJpbGl0eSIsInJhdGUiLCJhc3Nlc2libGVJbmNvbWUiLCJnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyIsInRheEJyYWNrZXRzIiwidG90YWxUYXhhYmxlQW1vdW50IiwidGF4QnJlYWtEb3duQXJyYXkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZXN1bHQiLCJwdXNoIiwib2JqIiwiZnlTdGFydERhdGUiLCJmeVN0YXJ0RGF0ZU5lIiwiZnlFbmREYXRlIiwiZnlFbmREYXRlTmUiLCJzaW5nbGUiLCJtYXJyaWVkIiwic3RyaW5naWZ5IiwidGF4Iiwib3B0aW9ucyIsImluY29tZSIsIm1ldGEiLCJjb25zb2xlIiwibG9nIiwidGF4YWJsZUFtb3VudCIsIm1hcml0YWxTdGF0dXMiLCJ0b3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0FBQzNCLE1BQU1DLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLDBDQUFYLENBQXBCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSixXQUFXLENBQUNELElBQUQsQ0FBNUI7QUFFQSxTQUFPSyxRQUFQO0FBQ0EsQ0FMRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUM3QkMsV0FENkIsRUFFN0JDLEdB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QVksZUFBWixFQUE2Qm5ELElBQTdCO0FBQ0EsTUFBTW9ELGFBQWEsR0FBRzlDLGtFQUFxQixDQUMxQzBDLE1BRDBDLEVBRTFDeEMsR0FGMEMsRUFHMUNDLEdBSDBDLEVBSTFDQyxjQUowQyxFQUsxQ3VDLElBTDBDLENBQTNDO0FBT0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxhQUFaLEVBQTJCLGdCQUEzQjtBQUNBLE1BQU1DLGFBQWEsR0FBR1YsTUFBTSxHQUFHLFFBQUgsR0FBYyxTQUExQztBQUNBLE1BQU1XLDBCQUEwQixHQUFHekIsMEVBQTZCLENBQy9Eb0IsSUFBSSxDQUFDNUMsUUFBTCxDQUFjZ0QsYUFBZCxDQUQrRCxFQUUvREQsYUFGK0QsQ0FBaEU7QUFLQUYsU0FBTyxDQUFDQyxHQUFSLENBQVlHLDBCQUFaLEVBQXdDLGlDQUF4QztBQUNBLE1BQU1sQixNQUFNLEdBQUcsRUFBZjtBQUVBLFNBQU9BLE1BQVA7QUFDQSxDQXRCRDs7QUF3QkEsSUFBTWEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNsQixTQUFPLHdCQUFQO0FBQ0EsQ0FGRDs7Ozs7Ozs7VUMzQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImRhbmZlYm9va3MucGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkYW5mZWJvb2tzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRhbmZlYm9va3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGFuZmVib29rc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogVGF4IEJyZWFrZG93blxuICogVGhpcyBpcyB0aGUgbWV0YWRhdGEgZm9yIHRheCBicmFja2V0cyBpbiBOZXBhbCB3aXRoIEZZIGZ5U3RhcnREYXRlIGFuZCBmeUVuZERhdGVEYXRlXG4gKi9cblxuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vZGF0YS5qcyc7XG5cbmNvbnN0IGJyZWFrZG93biA9ICh5ZWFyKSA9PiB7XG5cdGNvbnN0IGFsbEJyYWNrZXRzID0gSlNPTi5wYXJzZShkYXRhKTtcblx0Y29uc3QgYnJhY2tldHMgPSBhbGxCcmFja2V0c1t5ZWFyXTtcblxuXHRyZXR1cm4gYnJhY2tldHM7XG59O1xuXG5leHBvcnQgeyBicmVha2Rvd24gfTtcbiIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogY2FsY3VsYXRvci5qc1xuICovXG5cbi8qKlxuICogUmV0dXJucyB0aGUgdG90YWwgdGF4YWJsZSB0b3RhbEluY29tZVxuICpcbiAqIEBwYXJhbSB0YXhTZXR0aW5ncyBmcm9tIHNsZWN0ZWQgdGF4IGRhdGFcbiAqIEBwYXJhbSB0b3RhbERlY3VjdGlvbiB0b3RhbCBkZWRjdXRpb24gYW1vdW50XG4gKiBAcGFyYW0gdG90YWxJbmNvbWUgdG90YWwgaW5jb21lXG4gKi9cbmNvbnN0IGdldFRvdGFsVGF4YWJsZUFtb3VudCA9IChcblx0dG90YWxJbmNvbWUsXG5cdGVwZixcblx0Y2l0LFxuXHRvdGhlckRlZHVjdGlvbixcblx0dGF4U2V0dGluZ3MsXG4pID0+IHtcblx0Y29uc3Qge1xuXHRcdE1heEFubnVhbERlZHVjdGlvblJhdGUsXG5cdFx0TWF4QW5udWFsRGVkdWN0aW9uQW1vdW50LFxuXHRcdE1heEFubnVhbEVQRlJhdGUsXG5cdH0gPSB0YXhTZXR0aW5ncztcblxuXHRpZiAoZXBmID4gdG90YWxJbmNvbWUgKiBNYXhBbm51YWxFUEZSYXRlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgRVBGIG11c3QgYmUgc21hbGxlciB0aGFuIDIwJSBvZiBzYWxhcnknKTtcblx0fVxuXG5cdGNvbnN0IHRvdGFsRGVkdWN0aW9uID0gZXBmICsgY2l0ICsgb3RoZXJEZWR1Y3Rpb247XG5cdGNvbnN0IEVtcGxveWVlQW5udWFsRGVkdWN0aW9uQW1vdW50ID0gdG90YWxJbmNvbWUgKiBNYXhBbm51YWxEZWR1Y3Rpb25SYXRlO1xuXG5cdGlmICh0b3RhbERlZHVjdGlvbiA8PSBFbXBsb3llZUFubnVhbERlZHVjdGlvbkFtb3VudCkge1xuXHRcdHJldHVybiB0b3RhbEluY29tZSAtIHRvdGFsRGVkdWN0aW9uO1xuXHR9XG5cblx0aWYgKEVtcGxveWVlQW5udWFsRGVkdWN0aW9uQW1vdW50IDw9IE1heEFubnVhbERlZHVjdGlvbkFtb3VudCkge1xuXHRcdHJldHVybiB0b3RhbEluY29tZSAtIEVtcGxveWVlQW5udWFsRGVkdWN0aW9uQW1vdW50O1xuXHR9XG5cblx0aWYgKFxuXHRcdEVtcGxveWVlQW5udWFsRGVkdWN0aW9uQW1vdW50ID4gTWF4QW5udWFsRGVkdWN0aW9uQW1vdW50ICYmXG5cdFx0dG90YWxEZWR1Y3Rpb24gPD0gTWF4QW5udWFsRGVkdWN0aW9uQW1vdW50XG5cdClcblx0XHRyZXR1cm4gdG90YWxJbmNvbWUgLSBNYXhBbm51YWxEZWR1Y3Rpb25BbW91bnQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHRvdGFsIHRheCBmb3IgdGF4IGJhbmRcbiAqXG4gKiBAcGFyYW0gdGF4UmF0ZSB0YXggcmF0ZSBmcm9tIHNlbGVjdGVkIHRheCBkYXRhXG4gKiBAcGFyYW0gdG90YWxUYXhhYmxlSW5jb21lIHRvdGFsIGluY29tZSAoY2FuIGJlIGNhcnJ5IGxlZnQgb3ZlciBmcm9tIGxhc3QgYnJhY2tldClcbiAqL1xuXG5jb25zdCBnZXRUb3RhbFRheEZvclJhdGVXaXRoSW5jb21lID0gKHRheFJhdGUsIHRvdGFsVGF4YWJsZUluY29tZSkgPT4ge1xuXHRjb25zdCBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSA9IHRheFJhdGUuZW5kIC0gdGF4UmF0ZS5zdGFydDtcblx0Y29uc3QgdG90YWxNaW51c0RpZmZlcmVuY2UgPSB0b3RhbFRheGFibGVJbmNvbWUgLSBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZTtcblx0Y29uc3QgY2FycnkgPSB0b3RhbE1pbnVzRGlmZmVyZW5jZSA+IDAgPyB0b3RhbE1pbnVzRGlmZmVyZW5jZSA6IDA7XG5cblx0aWYgKHRvdGFsVGF4YWJsZUluY29tZSA+IDApIHtcblx0XHRpZiAodG90YWxUYXhhYmxlSW5jb21lID49IGluY29tZVRheFJhdGVEaWZmZXJlbmNlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0YXhMaWFiaWxpdHk6IGluY29tZVRheFJhdGVEaWZmZXJlbmNlICogdGF4UmF0ZS5yYXRlLFxuXHRcdFx0XHR0YXhSYXRlOiB0YXhSYXRlLnJhdGUsXG5cdFx0XHRcdGFzc2VzaWJsZUluY29tZTogaW5jb21lVGF4UmF0ZURpZmZlcmVuY2UsXG5cdFx0XHRcdGNhcnJ5LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRheExpYWJpbGl0eTogdG90YWxUYXhhYmxlSW5jb21lICogdGF4UmF0ZS5yYXRlLFxuXHRcdFx0dGF4UmF0ZTogdGF4UmF0ZS5yYXRlLFxuXHRcdFx0YXNzZXNpYmxlSW5jb21lOiB0b3RhbFRheGFibGVJbmNvbWUsXG5cdFx0XHRjYXJyeSxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0YXhMaWFiaWxpdHk6IDAsXG5cdFx0dGF4UmF0ZTogdGF4UmF0ZS5yYXRlLFxuXHRcdGFzc2VzaWJsZUluY29tZTogMCxcblx0XHRjYXJyeTogY2FycnksXG5cdH07XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBhbGwgdGF4IGJyZWFrZG93biBvZiBpbmNvbWUuXG4gKiBAcGFyYW0gdGF4QnJhY2tldHMgZnJvbSBzZWxlY3RlZCB0YXggZGF0YVxuICogQHBhcmFtIHRvdGFsVGF4YWJsZUFtb3VudCB0b3RhbCBjYWxjdWxhdGVkIHRheGFibGUgYW1vdW50XG4gKi9cblxuZnVuY3Rpb24gZ2V0VG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHModGF4QnJhY2tldHMsIHRvdGFsVGF4YWJsZUFtb3VudCkge1xuXHRsZXQgdGF4QnJlYWtEb3duQXJyYXkgPSBbXTtcblx0cmV0dXJuIHRheEJyYWNrZXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSBnZXRUb3RhbFRheEZvclJhdGVXaXRoSW5jb21lKFxuXHRcdFx0aXRlbSxcblx0XHRcdGluZGV4ID09PSAwID8gdG90YWxUYXhhYmxlQW1vdW50IDogdGF4QnJlYWtEb3duQXJyYXlbaW5kZXggLSAxXS5jYXJyeSxcblx0XHQpO1xuXHRcdHRheEJyZWFrRG93bkFycmF5LnB1c2gocmVzdWx0KTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9KTtcbn1cblxuZXhwb3J0IHsgZ2V0VG90YWxUYXhhYmxlQW1vdW50LCBnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyB9O1xuIiwiLyohXG4gKlxuICogQGRhbmZlYm9va3MvbmVwYWxwaXRcbiAqIFBlcnNvbmFsIEluY29tZSBUYXggKFBJVCkgY2FsY3VsYXRvciB1dGlsaXR5IGZvciBOZXBhbFxuICogaHR0cHM6Ly93d3cuZGFuZmVib29rcy5jb20vZW4vY2FsY3VsYXRvcnMvbmVwYWwtcGVyc29uYWwtaW5jb21lLXRheFxuICpcbiAqXG4gKiBNSVQgTGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDIwIC0gMjAyMSBEYW5mZUJvb2tzwq5cbiAqXG4gKiBEYXRhXG4gKiBUYXggU2xhYiBEYXRhXG4gKi9cblxuY29uc3Qgb2JqID0ge1xuXHQnMjA3MC83MSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMTMnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzAnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMTQnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzIsIDIwNzEnLFxuXHRcdE1heEFubnVhbEVQRlJhdGU6IDAuMixcblx0XHRNYXhBbm51YWxEZWR1Y3Rpb25SYXRlOiAwLjMzLFxuXHRcdE1heEFubnVhbERlZHVjdGlvbkFtb3VudDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDcxLzcyJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxNCcsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxNScsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMSwgMjA3MicsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyAyNTAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbeyAzMDAwMDA6IDEgfSwgeyAxMDAwMDA6IDEgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDcyLzczJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxNScsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MicsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAxNicsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMSwgMjA3MycsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyAyNTAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbeyAzMDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDczLzc0Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAxNicsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MycsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAxNycsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMSwgMjA3NCcsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyAzNTAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbeyA0MDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc0Lzc1Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVsIDE2LCAyMDE3Jyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc0Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE4Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMyLCAyMDc1Jyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7IDM1MDAwMDogMSB9LCB7IDEwMDAwMDogMiB9XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFt7IDQwMDAwMDogMSB9LCB7IDEwMDAwMDogMiB9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzUvNzYnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDE4Jyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc1Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE5Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDc2Jyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7IDM1MDAwMDogMSB9LCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEzNTAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbeyA0MDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMzAwMDAwOiA0IH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHQnMjA3Ni83Nyc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTcsIDIwMTknLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzYnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMjAnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNhZGggMzEsIDIwNzcnLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgNDAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTMwMDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFs0NTAwMDAsIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTI1MDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzcvNzgnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE2LCAyMDEzJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDcwJyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE0Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzaGFkIDMyLCAyMDcxJyxcblx0XHRNYXhBbm51YWxFUEZSYXRlOiAwLjIsXG5cdFx0TWF4QW5udWFsRGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRNYXhBbm51YWxEZWR1Y3Rpb25BbW91bnQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3OC83OSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMjEnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzgnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMjInLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNhZGggMzIsIDIwNzknLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgNDAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTMwMDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFs0NTAwMDAsIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTI1MDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzkvODAnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDIyJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc5Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDIzJyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDgwJyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7IDQwMDAwMDogMSB9LCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEzMDAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDUwMDAwLCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEyNTAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDgwLzgxJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAyMycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA4MCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAyNCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMiwgMjA4MScsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyA0MDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMzAwMDAwOiA0IH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogWzQ1MDAwMCwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMjUwMDAwOiA0IH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxufTtcblxuY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG5leHBvcnQgeyBkYXRhIH07XG4iLCIvKiFcbiAqXG4gKiBAZGFuZmVib29rcy9uZXBhbHBpdFxuICogUGVyc29uYWwgSW5jb21lIFRheCAoUElUKSBjYWxjdWxhdG9yIHV0aWxpdHkgZm9yIE5lcGFsXG4gKiBodHRwczovL3d3dy5kYW5mZWJvb2tzLmNvbS9lbi9jYWxjdWxhdG9ycy9uZXBhbC1wZXJzb25hbC1pbmNvbWUtdGF4XG4gKlxuICpcbiAqIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgLSAyMDIxIERhbmZlQm9va3PCrlxuICpcbiAqIEluZGV4LmpzXG4gKi9cblxuaW1wb3J0IHsgYnJlYWtkb3duIH0gZnJvbSAnLi9icmVha2Rvd24uanMnO1xuaW1wb3J0IHtcblx0Z2V0VG90YWxUYXhhYmxlQW1vdW50LFxuXHRnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyxcbn0gZnJvbSAnLi9jYWxjdWxhdG9yJztcblxuY29uc3QgdGF4ID0gKG9wdGlvbnMpID0+IHtcblx0Y29uc3QgeyBpbmNvbWUsIGVwZiwgY2l0LCBvdGhlckRlZHVjdGlvbiwgeWVhciwgc2luZ2xlIH0gPSBvcHRpb25zO1xuXHRjb25zdCBtZXRhID0gYnJlYWtkb3duKHllYXIpO1xuXHRjb25zb2xlLmxvZygnR2l2ZW4geWVhciBpcycsIHllYXIpO1xuXHRjb25zdCB0YXhhYmxlQW1vdW50ID0gZ2V0VG90YWxUYXhhYmxlQW1vdW50KFxuXHRcdGluY29tZSxcblx0XHRlcGYsXG5cdFx0Y2l0LFxuXHRcdG90aGVyRGVkdWN0aW9uLFxuXHRcdG1ldGEsXG5cdCk7XG5cdGNvbnNvbGUubG9nKHRheGFibGVBbW91bnQsICd0YXhhYmxlIEFtb3VudCcpO1xuXHRjb25zdCBtYXJpdGFsU3RhdHVzID0gc2luZ2xlID8gJ3NpbmdsZScgOiAnbWFycmllZCc7XG5cdGNvbnN0IHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzID0gZ2V0VG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMoXG5cdFx0bWV0YS5icmFja2V0c1ttYXJpdGFsU3RhdHVzXSxcblx0XHR0YXhhYmxlQW1vdW50LFxuXHQpO1xuXG5cdGNvbnNvbGUubG9nKHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLCAnY2FsY3VsYXRlZCB0YXggYW1vdW50IHdpdGggcmF0ZScpO1xuXHRjb25zdCByZXN1bHQgPSB7fTtcblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgbWV0YSA9ICgpID0+IHtcblx0cmV0dXJuICdtZXRhIHdvcmsgaW4gcG9yb2dyZXNzJztcbn07XG5cbmV4cG9ydCB7IHRheCwgbWV0YSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9