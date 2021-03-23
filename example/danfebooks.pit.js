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
/* harmony export */   "getTotalTaxAmountWithBrackets": () => /* binding */ getTotalTaxAmountWithBrackets,
/* harmony export */   "getAmountRounded": () => /* binding */ getAmountRounded
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
/**
 * Returns two decimal number converted from original input float number
 *
 * @param amount floating number
 */


var getAmountRounded = function getAmountRounded(amount) {
  return Math.round(amount * 100) / 100;
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
  var income = options.income,
      epf = options.epf,
      cit = options.cit,
      otherDeduction = options.otherDeduction,
      year = options.year,
      single = options.single;
  var meta = (0,_breakdown_js__WEBPACK_IMPORTED_MODULE_0__.breakdown)(year);
  console.log('Given year is', year);
  var taxableAmount = (0,_calculator__WEBPACK_IMPORTED_MODULE_1__.getTotalTaxableAmount)(income, epf, cit, otherDeduction, meta);
  var maritalStatus = single ? 'single' : 'married';
  var totalTaxAmountWithBrackets = (0,_calculator__WEBPACK_IMPORTED_MODULE_1__.getTotalTaxAmountWithBrackets)(meta.brackets[maritalStatus], taxableAmount);
  var result = {
    sumOfEpfAndCit: epf + cit,
    totalIncome: income,
    totalDeduction: income - taxableAmount,
    netAssessable: taxableAmount,
    totalTaxWithBrackets: totalTaxAmountWithBrackets.filter(function (item) {
      return item.assesibleIncome > 0;
    }).map(function (item) {
      var taxObj = {};
      taxObj.assesibleIncome = item.assesibleIncome;
      taxObj.rate = item.taxRate * 100;
      taxObj.taxLiability = item.taxLiability;
      return taxObj;
    }),
    totalAssesibleIncome: totalTaxAmountWithBrackets.reduce(function (initialValue, value) {
      return initialValue + value.assesibleIncome;
    }, 0),
    totalTaxLiability: totalTaxAmountWithBrackets.reduce(function (initialValue, value) {
      return initialValue + value.taxLiability;
    }, 0),
    netTaxLiabilityMonthly: (0,_calculator__WEBPACK_IMPORTED_MODULE_1__.getAmountRounded)(totalTaxAmountWithBrackets.reduce(function (initialValue, value) {
      return initialValue + value.taxLiability;
    }, 0) / 12)
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2JyZWFrZG93bi5qcyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL2RhbmZlYm9va3MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RhbmZlYm9va3Mvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImJyZWFrZG93biIsInllYXIiLCJhbGxCcmFja2V0cyIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJicmFja2V0cyIsImdldFRvdGFsVGF4YWJsZUFtb3VudCIsInRvdGFsSW5jb21lIiwiZXBmIiwiY2l0Iiwib3RoZXJEZWR1Y3Rpb24iLCJ0YXhTZXR0aW5ncyIsIk1heEFubnVhbERlZHVjdGlvblJhdGUiLCJNYXhBbm51YWxEZWR1Y3Rpb25BbW91bnQiLCJNYXhBbm51YWxFUEZSYXRlIiwiRXJyb3IiLCJ0b3RhbERlZHVjdGlvbiIsIkVtcGxveWVlQW5udWFsRGVkdWN0aW9uQW1vdW50IiwiZ2V0VG90YWxUYXhGb3JSYXRlV2l0aEluY29tZSIsInRheFJhdGUiLCJ0b3RhbFRheGFibGVJbmNvbWUiLCJpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSIsImVuZCIsInN0YXJ0IiwidG90YWxNaW51c0RpZmZlcmVuY2UiLCJjYXJyeSIsInRheExpYWJpbGl0eSIsInJhdGUiLCJhc3Nlc2libGVJbmNvbWUiLCJnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyIsInRheEJyYWNrZXRzIiwidG90YWxUYXhhYmxlQW1vdW50IiwidGF4QnJlYWtEb3duQXJyYXkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZXN1bHQiLCJwdXNoIiwiZ2V0QW1vdW50Um91bmRlZCIsImFtb3VudCIsIk1hdGgiLCJyb3VuZCIsIm9iaiIsImZ5U3RhcnREYXRlIiwiZnlTdGFydERhdGVOZSIsImZ5RW5kRGF0ZSIsImZ5RW5kRGF0ZU5lIiwic2luZ2xlIiwibWFycmllZCIsInN0cmluZ2lmeSIsInRheCIsIm9wdGlvbnMiLCJpbmNvbWUiLCJtZXRhIiwiY29uc29sZSIsImxvZyIsInRheGFibGVBbW91bnQiLCJtYXJpdGFsU3RhdHVzIiwidG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMiLCJzdW1PZkVwZkFuZENpdCIsIm5ldEFzc2Vzc2FibGUiLCJ0b3RhbFRheFdpdGhCcmFja2V0cyIsImZpbHRlciIsInRheE9iaiIsInRvdGFsQXNzZXNpYmxlSW5jb21lIiwicmVkdWNlIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJ0b3RhbFRheExpYWJpbGl0eSIsIm5ldFRheExpYWJpbGl0eU1vbnRobHkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUMzQixNQUFNQyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQywwQ0FBWCxDQUFwQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0osV0FB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QUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJkYW5mZWJvb2tzLnBpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZGFuZmVib29rc1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkYW5mZWJvb2tzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRhbmZlYm9va3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvKiFcbiAqXG4gKiBAZGFuZmVib29rcy9uZXBhbHBpdFxuICogUGVyc29uYWwgSW5jb21lIFRheCAoUElUKSBjYWxjdWxhdG9yIHV0aWxpdHkgZm9yIE5lcGFsXG4gKiBodHRwczovL3d3dy5kYW5mZWJvb2tzLmNvbS9lbi9jYWxjdWxhdG9ycy9uZXBhbC1wZXJzb25hbC1pbmNvbWUtdGF4XG4gKlxuICpcbiAqIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgLSAyMDIxIERhbmZlQm9va3PCrlxuICpcbiAqIFRheCBCcmVha2Rvd25cbiAqIFRoaXMgaXMgdGhlIG1ldGFkYXRhIGZvciB0YXggYnJhY2tldHMgaW4gTmVwYWwgd2l0aCBGWSBmeVN0YXJ0RGF0ZSBhbmQgZnlFbmREYXRlRGF0ZVxuICovXG5cbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuL2RhdGEuanMnO1xuXG5jb25zdCBicmVha2Rvd24gPSAoeWVhcikgPT4ge1xuXHRjb25zdCBhbGxCcmFja2V0cyA9IEpTT04ucGFyc2UoZGF0YSk7XG5cdGNvbnN0IGJyYWNrZXRzID0gYWxsQnJhY2tldHNbeWVhcl07XG5cblx0cmV0dXJuIGJyYWNrZXRzO1xufTtcblxuZXhwb3J0IHsgYnJlYWtkb3duIH07XG4iLCIvKiFcbiAqXG4gKiBAZGFuZmVib29rcy9uZXBhbHBpdFxuICogUGVyc29uYWwgSW5jb21lIFRheCAoUElUKSBjYWxjdWxhdG9yIHV0aWxpdHkgZm9yIE5lcGFsXG4gKiBodHRwczovL3d3dy5kYW5mZWJvb2tzLmNvbS9lbi9jYWxjdWxhdG9ycy9uZXBhbC1wZXJzb25hbC1pbmNvbWUtdGF4XG4gKlxuICpcbiAqIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgLSAyMDIxIERhbmZlQm9va3PCrlxuICpcbiAqIGNhbGN1bGF0b3IuanNcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHRvdGFsIHRheGFibGUgdG90YWxJbmNvbWVcbiAqXG4gKiBAcGFyYW0gdGF4U2V0dGluZ3MgZnJvbSBzbGVjdGVkIHRheCBkYXRhXG4gKiBAcGFyYW0gdG90YWxEZWN1Y3Rpb24gdG90YWwgZGVkY3V0aW9uIGFtb3VudFxuICogQHBhcmFtIHRvdGFsSW5jb21lIHRvdGFsIGluY29tZVxuICovXG5jb25zdCBnZXRUb3RhbFRheGFibGVBbW91bnQgPSAoXG5cdHRvdGFsSW5jb21lLFxuXHRlcGYsXG5cdGNpdCxcblx0b3RoZXJEZWR1Y3Rpb24sXG5cdHRheFNldHRpbmdzLFxuKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRNYXhBbm51YWxEZWR1Y3Rpb25SYXRlLFxuXHRcdE1heEFubnVhbERlZHVjdGlvbkFtb3VudCxcblx0XHRNYXhBbm51YWxFUEZSYXRlLFxuXHR9ID0gdGF4U2V0dGluZ3M7XG5cblx0aWYgKGVwZiA+IHRvdGFsSW5jb21lICogTWF4QW5udWFsRVBGUmF0ZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIEVQRiBtdXN0IGJlIHNtYWxsZXIgdGhhbiAyMCUgb2Ygc2FsYXJ5Jyk7XG5cdH1cblxuXHRjb25zdCB0b3RhbERlZHVjdGlvbiA9IGVwZiArIGNpdCArIG90aGVyRGVkdWN0aW9uO1xuXHRjb25zdCBFbXBsb3llZUFubnVhbERlZHVjdGlvbkFtb3VudCA9IHRvdGFsSW5jb21lICogTWF4QW5udWFsRGVkdWN0aW9uUmF0ZTtcblxuXHRpZiAodG90YWxEZWR1Y3Rpb24gPD0gRW1wbG95ZWVBbm51YWxEZWR1Y3Rpb25BbW91bnQpIHtcblx0XHRyZXR1cm4gdG90YWxJbmNvbWUgLSB0b3RhbERlZHVjdGlvbjtcblx0fVxuXG5cdGlmIChFbXBsb3llZUFubnVhbERlZHVjdGlvbkFtb3VudCA8PSBNYXhBbm51YWxEZWR1Y3Rpb25BbW91bnQpIHtcblx0XHRyZXR1cm4gdG90YWxJbmNvbWUgLSBFbXBsb3llZUFubnVhbERlZHVjdGlvbkFtb3VudDtcblx0fVxuXG5cdGlmIChcblx0XHRFbXBsb3llZUFubnVhbERlZHVjdGlvbkFtb3VudCA+IE1heEFubnVhbERlZHVjdGlvbkFtb3VudCAmJlxuXHRcdHRvdGFsRGVkdWN0aW9uIDw9IE1heEFubnVhbERlZHVjdGlvbkFtb3VudFxuXHQpXG5cdFx0cmV0dXJuIHRvdGFsSW5jb21lIC0gTWF4QW5udWFsRGVkdWN0aW9uQW1vdW50O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0b3RhbCB0YXggZm9yIHRheCBiYW5kXG4gKlxuICogQHBhcmFtIHRheFJhdGUgdGF4IHJhdGUgZnJvbSBzZWxlY3RlZCB0YXggZGF0YVxuICogQHBhcmFtIHRvdGFsVGF4YWJsZUluY29tZSB0b3RhbCBpbmNvbWUgKGNhbiBiZSBjYXJyeSBsZWZ0IG92ZXIgZnJvbSBsYXN0IGJyYWNrZXQpXG4gKi9cblxuY29uc3QgZ2V0VG90YWxUYXhGb3JSYXRlV2l0aEluY29tZSA9ICh0YXhSYXRlLCB0b3RhbFRheGFibGVJbmNvbWUpID0+IHtcblx0Y29uc3QgaW5jb21lVGF4UmF0ZURpZmZlcmVuY2UgPSB0YXhSYXRlLmVuZCAtIHRheFJhdGUuc3RhcnQ7XG5cdGNvbnN0IHRvdGFsTWludXNEaWZmZXJlbmNlID0gdG90YWxUYXhhYmxlSW5jb21lIC0gaW5jb21lVGF4UmF0ZURpZmZlcmVuY2U7XG5cdGNvbnN0IGNhcnJ5ID0gdG90YWxNaW51c0RpZmZlcmVuY2UgPiAwID8gdG90YWxNaW51c0RpZmZlcmVuY2UgOiAwO1xuXG5cdGlmICh0b3RhbFRheGFibGVJbmNvbWUgPiAwKSB7XG5cdFx0aWYgKHRvdGFsVGF4YWJsZUluY29tZSA+PSBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGF4TGlhYmlsaXR5OiBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSAqIHRheFJhdGUucmF0ZSxcblx0XHRcdFx0dGF4UmF0ZTogdGF4UmF0ZS5yYXRlLFxuXHRcdFx0XHRhc3Nlc2libGVJbmNvbWU6IGluY29tZVRheFJhdGVEaWZmZXJlbmNlLFxuXHRcdFx0XHRjYXJyeSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR0YXhMaWFiaWxpdHk6IHRvdGFsVGF4YWJsZUluY29tZSAqIHRheFJhdGUucmF0ZSxcblx0XHRcdHRheFJhdGU6IHRheFJhdGUucmF0ZSxcblx0XHRcdGFzc2VzaWJsZUluY29tZTogdG90YWxUYXhhYmxlSW5jb21lLFxuXHRcdFx0Y2FycnksXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dGF4TGlhYmlsaXR5OiAwLFxuXHRcdHRheFJhdGU6IHRheFJhdGUucmF0ZSxcblx0XHRhc3Nlc2libGVJbmNvbWU6IDAsXG5cdFx0Y2Fycnk6IGNhcnJ5LFxuXHR9O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgYWxsIHRheCBicmVha2Rvd24gb2YgaW5jb21lLlxuICogQHBhcmFtIHRheEJyYWNrZXRzIGZyb20gc2VsZWN0ZWQgdGF4IGRhdGFcbiAqIEBwYXJhbSB0b3RhbFRheGFibGVBbW91bnQgdG90YWwgY2FsY3VsYXRlZCB0YXhhYmxlIGFtb3VudFxuICovXG5cbmZ1bmN0aW9uIGdldFRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzKHRheEJyYWNrZXRzLCB0b3RhbFRheGFibGVBbW91bnQpIHtcblx0bGV0IHRheEJyZWFrRG93bkFycmF5ID0gW107XG5cdHJldHVybiB0YXhCcmFja2V0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gZ2V0VG90YWxUYXhGb3JSYXRlV2l0aEluY29tZShcblx0XHRcdGl0ZW0sXG5cdFx0XHRpbmRleCA9PT0gMCA/IHRvdGFsVGF4YWJsZUFtb3VudCA6IHRheEJyZWFrRG93bkFycmF5W2luZGV4IC0gMV0uY2FycnksXG5cdFx0KTtcblx0XHR0YXhCcmVha0Rvd25BcnJheS5wdXNoKHJlc3VsdCk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0d28gZGVjaW1hbCBudW1iZXIgY29udmVydGVkIGZyb20gb3JpZ2luYWwgaW5wdXQgZmxvYXQgbnVtYmVyXG4gKlxuICogQHBhcmFtIGFtb3VudCBmbG9hdGluZyBudW1iZXJcbiAqL1xuXG5jb25zdCBnZXRBbW91bnRSb3VuZGVkID0gKGFtb3VudCkgPT4ge1xuXHRyZXR1cm4gTWF0aC5yb3VuZChhbW91bnQgKiAxMDApIC8gMTAwO1xufTtcbmV4cG9ydCB7XG5cdGdldFRvdGFsVGF4YWJsZUFtb3VudCxcblx0Z2V0VG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMsXG5cdGdldEFtb3VudFJvdW5kZWQsXG59O1xuIiwiLyohXG4gKlxuICogQGRhbmZlYm9va3MvbmVwYWxwaXRcbiAqIFBlcnNvbmFsIEluY29tZSBUYXggKFBJVCkgY2FsY3VsYXRvciB1dGlsaXR5IGZvciBOZXBhbFxuICogaHR0cHM6Ly93d3cuZGFuZmVib29rcy5jb20vZW4vY2FsY3VsYXRvcnMvbmVwYWwtcGVyc29uYWwtaW5jb21lLXRheFxuICpcbiAqXG4gKiBNSVQgTGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDIwIC0gMjAyMSBEYW5mZUJvb2tzwq5cbiAqXG4gKiBEYXRhXG4gKiBUYXggU2xhYiBEYXRhXG4gKi9cblxuY29uc3Qgb2JqID0ge1xuXHQnMjA3MC83MSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMTMnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzAnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMTQnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzIsIDIwNzEnLFxuXHRcdE1heEFubnVhbEVQRlJhdGU6IDAuMixcblx0XHRNYXhBbm51YWxEZWR1Y3Rpb25SYXRlOiAwLjMzLFxuXHRcdE1heEFubnVhbERlZHVjdGlvbkFtb3VudDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDcxLzcyJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxNCcsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxNScsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMSwgMjA3MicsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyAyNTAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbeyAzMDAwMDA6IDEgfSwgeyAxMDAwMDA6IDEgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDcyLzczJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxNScsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MicsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAxNicsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMSwgMjA3MycsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyAyNTAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbeyAzMDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDczLzc0Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAxNicsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MycsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAxNycsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMSwgMjA3NCcsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyAzNTAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbeyA0MDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc0Lzc1Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVsIDE2LCAyMDE3Jyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc0Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE4Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMyLCAyMDc1Jyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7IDM1MDAwMDogMSB9LCB7IDEwMDAwMDogMiB9XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFt7IDQwMDAwMDogMSB9LCB7IDEwMDAwMDogMiB9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzUvNzYnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDE4Jyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc1Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE5Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDc2Jyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7IDM1MDAwMDogMSB9LCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEzNTAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbeyA0MDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMzAwMDAwOiA0IH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHQnMjA3Ni83Nyc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTcsIDIwMTknLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzYnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMjAnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNhZGggMzEsIDIwNzcnLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgNDAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTMwMDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFs0NTAwMDAsIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTI1MDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzcvNzgnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE2LCAyMDEzJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDcwJyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDE0Jyxcblx0XHRmeUVuZERhdGVOZTogJ0FzaGFkIDMyLCAyMDcxJyxcblx0XHRNYXhBbm51YWxFUEZSYXRlOiAwLjIsXG5cdFx0TWF4QW5udWFsRGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRNYXhBbm51YWxEZWR1Y3Rpb25BbW91bnQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3OC83OSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMjEnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzgnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMjInLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNhZGggMzIsIDIwNzknLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgNDAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTMwMDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFs0NTAwMDAsIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTI1MDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzkvODAnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDIyJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc5Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDIzJyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDgwJyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7IDQwMDAwMDogMSB9LCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEzMDAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDUwMDAwLCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEyNTAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDgwLzgxJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAyMycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA4MCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAyNCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMiwgMjA4MScsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyA0MDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMzAwMDAwOiA0IH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogWzQ1MDAwMCwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMjUwMDAwOiA0IH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxufTtcblxuY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG5leHBvcnQgeyBkYXRhIH07XG4iLCIvKiFcbiAqXG4gKiBAZGFuZmVib29rcy9uZXBhbHBpdFxuICogUGVyc29uYWwgSW5jb21lIFRheCAoUElUKSBjYWxjdWxhdG9yIHV0aWxpdHkgZm9yIE5lcGFsXG4gKiBodHRwczovL3d3dy5kYW5mZWJvb2tzLmNvbS9lbi9jYWxjdWxhdG9ycy9uZXBhbC1wZXJzb25hbC1pbmNvbWUtdGF4XG4gKlxuICpcbiAqIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgLSAyMDIxIERhbmZlQm9va3PCrlxuICpcbiAqIEluZGV4LmpzXG4gKi9cblxuaW1wb3J0IHsgYnJlYWtkb3duIH0gZnJvbSAnLi9icmVha2Rvd24uanMnO1xuaW1wb3J0IHtcblx0Z2V0VG90YWxUYXhhYmxlQW1vdW50LFxuXHRnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyxcblx0Z2V0QW1vdW50Um91bmRlZCxcbn0gZnJvbSAnLi9jYWxjdWxhdG9yJztcblxuY29uc3QgdGF4ID0gKG9wdGlvbnMpID0+IHtcblx0Y29uc3QgeyBpbmNvbWUsIGVwZiwgY2l0LCBvdGhlckRlZHVjdGlvbiwgeWVhciwgc2luZ2xlIH0gPSBvcHRpb25zO1xuXHRjb25zdCBtZXRhID0gYnJlYWtkb3duKHllYXIpO1xuXHRjb25zb2xlLmxvZygnR2l2ZW4geWVhciBpcycsIHllYXIpO1xuXHRjb25zdCB0YXhhYmxlQW1vdW50ID0gZ2V0VG90YWxUYXhhYmxlQW1vdW50KFxuXHRcdGluY29tZSxcblx0XHRlcGYsXG5cdFx0Y2l0LFxuXHRcdG90aGVyRGVkdWN0aW9uLFxuXHRcdG1ldGEsXG5cdCk7XG5cdGNvbnN0IG1hcml0YWxTdGF0dXMgPSBzaW5nbGUgPyAnc2luZ2xlJyA6ICdtYXJyaWVkJztcblx0Y29uc3QgdG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMgPSBnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyhcblx0XHRtZXRhLmJyYWNrZXRzW21hcml0YWxTdGF0dXNdLFxuXHRcdHRheGFibGVBbW91bnQsXG5cdCk7XG5cblx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdHN1bU9mRXBmQW5kQ2l0OiBlcGYgKyBjaXQsXG5cdFx0dG90YWxJbmNvbWU6IGluY29tZSxcblx0XHR0b3RhbERlZHVjdGlvbjogaW5jb21lIC0gdGF4YWJsZUFtb3VudCxcblx0XHRuZXRBc3Nlc3NhYmxlOiB0YXhhYmxlQW1vdW50LFxuXHRcdHRvdGFsVGF4V2l0aEJyYWNrZXRzOiB0b3RhbFRheEFtb3VudFdpdGhCcmFja2V0c1xuXHRcdFx0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5hc3Nlc2libGVJbmNvbWUgPiAwKVxuXHRcdFx0Lm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRjb25zdCB0YXhPYmogPSB7fTtcblx0XHRcdFx0dGF4T2JqLmFzc2VzaWJsZUluY29tZSA9IGl0ZW0uYXNzZXNpYmxlSW5jb21lO1xuXHRcdFx0XHR0YXhPYmoucmF0ZSA9IGl0ZW0udGF4UmF0ZSAqIDEwMDtcblx0XHRcdFx0dGF4T2JqLnRheExpYWJpbGl0eSA9IGl0ZW0udGF4TGlhYmlsaXR5O1xuXHRcdFx0XHRyZXR1cm4gdGF4T2JqO1xuXHRcdFx0fSksXG5cdFx0dG90YWxBc3Nlc2libGVJbmNvbWU6IHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLnJlZHVjZShcblx0XHRcdChpbml0aWFsVmFsdWUsIHZhbHVlKSA9PiBpbml0aWFsVmFsdWUgKyB2YWx1ZS5hc3Nlc2libGVJbmNvbWUsXG5cdFx0XHQwLFxuXHRcdCksXG5cdFx0dG90YWxUYXhMaWFiaWxpdHk6IHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLnJlZHVjZShcblx0XHRcdChpbml0aWFsVmFsdWUsIHZhbHVlKSA9PiBpbml0aWFsVmFsdWUgKyB2YWx1ZS50YXhMaWFiaWxpdHksXG5cdFx0XHQwLFxuXHRcdCksXG5cdFx0bmV0VGF4TGlhYmlsaXR5TW9udGhseTogZ2V0QW1vdW50Um91bmRlZChcblx0XHRcdHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLnJlZHVjZShcblx0XHRcdFx0KGluaXRpYWxWYWx1ZSwgdmFsdWUpID0+IGluaXRpYWxWYWx1ZSArIHZhbHVlLnRheExpYWJpbGl0eSxcblx0XHRcdFx0MCxcblx0XHRcdCkgLyAxMixcblx0XHQpLFxuXHR9O1xuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBtZXRhID0gKCkgPT4ge1xuXHRyZXR1cm4gJ21ldGEgd29yayBpbiBwb3JvZ3Jlc3MnO1xufTtcblxuZXhwb3J0IHsgdGF4LCBtZXRhIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=