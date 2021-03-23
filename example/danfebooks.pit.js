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
  var maxDeductionRate = taxSettings.maxDeductionRate,
      maxDeductionLimit = taxSettings.maxDeductionLimit,
      maxEPFRate = taxSettings.maxEPFRate;
  var totalDeduction = epf + cit + otherDeduction;
  var maxDeductableAmount = totalIncome * maxDeductionRate; // 33% of income

  var actualDeduction = 0;

  if (epf > totalIncome * maxEPFRate) {
    throw new Error('The EPF must be smaller than 20% of salary');
  } // if the given deduction is greater than 33 % if income (maxDeductableAmount) and also greater than 3 lakh (maxDeductionLimit)


  if (totalDeduction > maxDeductableAmount && totalDeduction > maxDeductionLimit) {
    actualDeduction = maxDeductableAmount;
  } else if ( //if the given deduction is less than 33 % (maxDeductableAmount) of income and also less than 3 lakh(maxDeductionLimit)
  totalDeduction <= maxDeductableAmount && totalDeduction <= maxDeductionLimit) {
    actualDeduction = totalDeduction;
  } else if ( //if the given deduction is less than 33 % (maxDeductableAmount) of income and greater than 3 lakh(maxDeductionLimit)
  totalDeduction <= maxDeductableAmount && totalDeduction >= maxDeductionLimit) {
    actualDeduction = maxDeductionLimit;
  } //if the given deduction is greater than 33 % of income (maxDeductableAmount) and less than 3 lakh (maxDeductionLimit)
  else {
      actualDeduction = maxDeductableAmount;
    }

  return totalIncome - actualDeduction;
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
    maxEPFRate: 0.2,
    maxDeductionRate: 0.33,
    maxDeductionLimit: 300000,
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
    maxEPFRate: 0.2,
    maxDeductionRate: 0.33,
    maxDeductionLimit: 300000,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2JyZWFrZG93bi5qcyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL2RhbmZlYm9va3MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RhbmZlYm9va3Mvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImJyZWFrZG93biIsInllYXIiLCJhbGxCcmFja2V0cyIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJicmFja2V0cyIsImdldFRvdGFsVGF4YWJsZUFtb3VudCIsInRvdGFsSW5jb21lIiwiZXBmIiwiY2l0Iiwib3RoZXJEZWR1Y3Rpb24iLCJ0YXhTZXR0aW5ncyIsIm1heERlZHVjdGlvblJhdGUiLCJtYXhEZWR1Y3Rpb25MaW1pdCIsIm1heEVQRlJhdGUiLCJ0b3RhbERlZHVjdGlvbiIsIm1heERlZHVjdGFibGVBbW91bnQiLCJhY3R1YWxEZWR1Y3Rpb24iLCJFcnJvciIsImdldFRvdGFsVGF4Rm9yUmF0ZVdpdGhJbmNvbWUiLCJ0YXhSYXRlIiwidG90YWxUYXhhYmxlSW5jb21lIiwiaW5jb21lVGF4UmF0ZURpZmZlcmVuY2UiLCJlbmQiLCJzdGFydCIsInRvdGFsTWludXNEaWZmZXJlbmNlIiwiY2FycnkiLCJ0YXhMaWFiaWxpdHkiLCJyYXRlIiwiYXNzZXNpYmxlSW5jb21lIiwiZ2V0VG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMiLCJ0YXhCcmFja2V0cyIsInRvdGFsVGF4YWJsZUFtb3VudCIsInRheEJyZWFrRG93bkFycmF5IiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVzdWx0IiwicHVzaCIsImdldEFtb3VudFJvdW5kZWQiLCJhbW91bnQiLCJNYXRoIiwicm91bmQiLCJvYmoiLCJmeVN0YXJ0RGF0ZSIsImZ5U3RhcnREYXRlTmUiLCJmeUVuZERhdGUiLCJmeUVuZERhdGVOZSIsInNpbmdsZSIsIm1hcnJpZWQiLCJzdHJpbmdpZnkiLCJ0YXgiLCJvcHRpb25zIiwiaW5jb21lIiwibWV0YSIsImNvbnNvbGUiLCJsb2ciLCJ0YXhhYmxlQW1vdW50IiwibWFyaXRhbFN0YXR1cyIsInRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzIiwic3VtT2ZFcGZBbmRDaXQiLCJuZXRBc3Nlc3NhYmxlIiwidG90YWxUYXhXaXRoQnJhY2tldHMiLCJmaWx0ZXIiLCJ0YXhPYmoiLCJ0b3RhbEFzc2VzaWJsZUluY29tZSIsInJlZHVjZSIsImluaXRpYWxWYWx1ZSIsInZhbHVlIiwidG90YWxUYXhMaWFiaWxpdHkiLCJuZXRUYXhMaWFiaWxpdHlNb250aGx5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVU7QUFDM0IsTUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsMENBQVgsQ0FBcEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdKLFdBQVcsQ0FBQ0QsSUFB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QUFHLFNBQVBBLElBQU8sR0FBTTtBQUNsQixTQUFPLHdCQUFQO0FBQ0EsQ0FGRDs7Ozs7Ozs7VUN0RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImRhbmZlYm9va3MucGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkYW5mZWJvb2tzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRhbmZlYm9va3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGFuZmVib29rc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogVGF4IEJyZWFrZG93blxuICogVGhpcyBpcyB0aGUgbWV0YWRhdGEgZm9yIHRheCBicmFja2V0cyBpbiBOZXBhbCB3aXRoIEZZIGZ5U3RhcnREYXRlIGFuZCBmeUVuZERhdGVEYXRlXG4gKi9cblxuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vZGF0YS5qcyc7XG5cbmNvbnN0IGJyZWFrZG93biA9ICh5ZWFyKSA9PiB7XG5cdGNvbnN0IGFsbEJyYWNrZXRzID0gSlNPTi5wYXJzZShkYXRhKTtcblx0Y29uc3QgYnJhY2tldHMgPSBhbGxCcmFja2V0c1t5ZWFyXTtcblxuXHRyZXR1cm4gYnJhY2tldHM7XG59O1xuXG5leHBvcnQgeyBicmVha2Rvd24gfTtcbiIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogY2FsY3VsYXRvci5qc1xuICovXG5cbi8qKlxuICogUmV0dXJucyB0aGUgdG90YWwgdGF4YWJsZSB0b3RhbEluY29tZVxuICpcbiAqIEBwYXJhbSB0YXhTZXR0aW5ncyBmcm9tIHNsZWN0ZWQgdGF4IGRhdGFcbiAqIEBwYXJhbSB0b3RhbERlY3VjdGlvbiB0b3RhbCBkZWRjdXRpb24gYW1vdW50XG4gKiBAcGFyYW0gdG90YWxJbmNvbWUgdG90YWwgaW5jb21lXG4gKi9cbmNvbnN0IGdldFRvdGFsVGF4YWJsZUFtb3VudCA9IChcblx0dG90YWxJbmNvbWUsXG5cdGVwZixcblx0Y2l0LFxuXHRvdGhlckRlZHVjdGlvbixcblx0dGF4U2V0dGluZ3MsXG4pID0+IHtcblx0Y29uc3QgeyBtYXhEZWR1Y3Rpb25SYXRlLCBtYXhEZWR1Y3Rpb25MaW1pdCwgbWF4RVBGUmF0ZSB9ID0gdGF4U2V0dGluZ3M7XG5cdGNvbnN0IHRvdGFsRGVkdWN0aW9uID0gZXBmICsgY2l0ICsgb3RoZXJEZWR1Y3Rpb247XG5cdGNvbnN0IG1heERlZHVjdGFibGVBbW91bnQgPSB0b3RhbEluY29tZSAqIG1heERlZHVjdGlvblJhdGU7IC8vIDMzJSBvZiBpbmNvbWVcblx0bGV0IGFjdHVhbERlZHVjdGlvbiA9IDA7XG5cblx0aWYgKGVwZiA+IHRvdGFsSW5jb21lICogbWF4RVBGUmF0ZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIEVQRiBtdXN0IGJlIHNtYWxsZXIgdGhhbiAyMCUgb2Ygc2FsYXJ5Jyk7XG5cdH1cblx0Ly8gaWYgdGhlIGdpdmVuIGRlZHVjdGlvbiBpcyBncmVhdGVyIHRoYW4gMzMgJSBpZiBpbmNvbWUgKG1heERlZHVjdGFibGVBbW91bnQpIGFuZCBhbHNvIGdyZWF0ZXIgdGhhbiAzIGxha2ggKG1heERlZHVjdGlvbkxpbWl0KVxuXHRpZiAoXG5cdFx0dG90YWxEZWR1Y3Rpb24gPiBtYXhEZWR1Y3RhYmxlQW1vdW50ICYmXG5cdFx0dG90YWxEZWR1Y3Rpb24gPiBtYXhEZWR1Y3Rpb25MaW1pdFxuXHQpIHtcblx0XHRhY3R1YWxEZWR1Y3Rpb24gPSBtYXhEZWR1Y3RhYmxlQW1vdW50O1xuXHR9IGVsc2UgaWYgKFxuXHRcdC8vaWYgdGhlIGdpdmVuIGRlZHVjdGlvbiBpcyBsZXNzIHRoYW4gMzMgJSAobWF4RGVkdWN0YWJsZUFtb3VudCkgb2YgaW5jb21lIGFuZCBhbHNvIGxlc3MgdGhhbiAzIGxha2gobWF4RGVkdWN0aW9uTGltaXQpXG5cdFx0dG90YWxEZWR1Y3Rpb24gPD0gbWF4RGVkdWN0YWJsZUFtb3VudCAmJlxuXHRcdHRvdGFsRGVkdWN0aW9uIDw9IG1heERlZHVjdGlvbkxpbWl0XG5cdCkge1xuXHRcdGFjdHVhbERlZHVjdGlvbiA9IHRvdGFsRGVkdWN0aW9uO1xuXHR9IGVsc2UgaWYgKFxuXHRcdC8vaWYgdGhlIGdpdmVuIGRlZHVjdGlvbiBpcyBsZXNzIHRoYW4gMzMgJSAobWF4RGVkdWN0YWJsZUFtb3VudCkgb2YgaW5jb21lIGFuZCBncmVhdGVyIHRoYW4gMyBsYWtoKG1heERlZHVjdGlvbkxpbWl0KVxuXHRcdHRvdGFsRGVkdWN0aW9uIDw9IG1heERlZHVjdGFibGVBbW91bnQgJiZcblx0XHR0b3RhbERlZHVjdGlvbiA+PSBtYXhEZWR1Y3Rpb25MaW1pdFxuXHQpIHtcblx0XHRhY3R1YWxEZWR1Y3Rpb24gPSBtYXhEZWR1Y3Rpb25MaW1pdDtcblx0fVxuXHQvL2lmIHRoZSBnaXZlbiBkZWR1Y3Rpb24gaXMgZ3JlYXRlciB0aGFuIDMzICUgb2YgaW5jb21lIChtYXhEZWR1Y3RhYmxlQW1vdW50KSBhbmQgbGVzcyB0aGFuIDMgbGFraCAobWF4RGVkdWN0aW9uTGltaXQpXG5cdGVsc2Uge1xuXHRcdGFjdHVhbERlZHVjdGlvbiA9IG1heERlZHVjdGFibGVBbW91bnQ7XG5cdH1cblxuXHRyZXR1cm4gdG90YWxJbmNvbWUgLSBhY3R1YWxEZWR1Y3Rpb247XG59O1xuLyoqXG4gKiBSZXR1cm5zIHRoZSB0b3RhbCB0YXggZm9yIHRheCBiYW5kXG4gKlxuICogQHBhcmFtIHRheFJhdGUgdGF4IHJhdGUgZnJvbSBzZWxlY3RlZCB0YXggZGF0YVxuICogQHBhcmFtIHRvdGFsVGF4YWJsZUluY29tZSB0b3RhbCBpbmNvbWUgKGNhbiBiZSBjYXJyeSBsZWZ0IG92ZXIgZnJvbSBsYXN0IGJyYWNrZXQpXG4gKi9cblxuY29uc3QgZ2V0VG90YWxUYXhGb3JSYXRlV2l0aEluY29tZSA9ICh0YXhSYXRlLCB0b3RhbFRheGFibGVJbmNvbWUpID0+IHtcblx0Y29uc3QgaW5jb21lVGF4UmF0ZURpZmZlcmVuY2UgPSB0YXhSYXRlLmVuZCAtIHRheFJhdGUuc3RhcnQ7XG5cdGNvbnN0IHRvdGFsTWludXNEaWZmZXJlbmNlID0gdG90YWxUYXhhYmxlSW5jb21lIC0gaW5jb21lVGF4UmF0ZURpZmZlcmVuY2U7XG5cdGNvbnN0IGNhcnJ5ID0gdG90YWxNaW51c0RpZmZlcmVuY2UgPiAwID8gdG90YWxNaW51c0RpZmZlcmVuY2UgOiAwO1xuXG5cdGlmICh0b3RhbFRheGFibGVJbmNvbWUgPiAwKSB7XG5cdFx0aWYgKHRvdGFsVGF4YWJsZUluY29tZSA+PSBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGF4TGlhYmlsaXR5OiBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSAqIHRheFJhdGUucmF0ZSxcblx0XHRcdFx0dGF4UmF0ZTogdGF4UmF0ZS5yYXRlLFxuXHRcdFx0XHRhc3Nlc2libGVJbmNvbWU6IGluY29tZVRheFJhdGVEaWZmZXJlbmNlLFxuXHRcdFx0XHRjYXJyeSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR0YXhMaWFiaWxpdHk6IHRvdGFsVGF4YWJsZUluY29tZSAqIHRheFJhdGUucmF0ZSxcblx0XHRcdHRheFJhdGU6IHRheFJhdGUucmF0ZSxcblx0XHRcdGFzc2VzaWJsZUluY29tZTogdG90YWxUYXhhYmxlSW5jb21lLFxuXHRcdFx0Y2FycnksXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0dGF4TGlhYmlsaXR5OiAwLFxuXHRcdHRheFJhdGU6IHRheFJhdGUucmF0ZSxcblx0XHRhc3Nlc2libGVJbmNvbWU6IDAsXG5cdFx0Y2Fycnk6IGNhcnJ5LFxuXHR9O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgYWxsIHRheCBicmVha2Rvd24gb2YgaW5jb21lLlxuICogQHBhcmFtIHRheEJyYWNrZXRzIGZyb20gc2VsZWN0ZWQgdGF4IGRhdGFcbiAqIEBwYXJhbSB0b3RhbFRheGFibGVBbW91bnQgdG90YWwgY2FsY3VsYXRlZCB0YXhhYmxlIGFtb3VudFxuICovXG5cbmZ1bmN0aW9uIGdldFRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzKHRheEJyYWNrZXRzLCB0b3RhbFRheGFibGVBbW91bnQpIHtcblx0bGV0IHRheEJyZWFrRG93bkFycmF5ID0gW107XG5cdHJldHVybiB0YXhCcmFja2V0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gZ2V0VG90YWxUYXhGb3JSYXRlV2l0aEluY29tZShcblx0XHRcdGl0ZW0sXG5cdFx0XHRpbmRleCA9PT0gMCA/IHRvdGFsVGF4YWJsZUFtb3VudCA6IHRheEJyZWFrRG93bkFycmF5W2luZGV4IC0gMV0uY2FycnksXG5cdFx0KTtcblx0XHR0YXhCcmVha0Rvd25BcnJheS5wdXNoKHJlc3VsdCk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0d28gZGVjaW1hbCBudW1iZXIgY29udmVydGVkIGZyb20gb3JpZ2luYWwgaW5wdXQgZmxvYXQgbnVtYmVyXG4gKlxuICogQHBhcmFtIGFtb3VudCBmbG9hdGluZyBudW1iZXJcbiAqL1xuXG5jb25zdCBnZXRBbW91bnRSb3VuZGVkID0gKGFtb3VudCkgPT4ge1xuXHRyZXR1cm4gTWF0aC5yb3VuZChhbW91bnQgKiAxMDApIC8gMTAwO1xufTtcblxuZXhwb3J0IHtcblx0Z2V0VG90YWxUYXhhYmxlQW1vdW50LFxuXHRnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyxcblx0Z2V0QW1vdW50Um91bmRlZCxcbn07XG4iLCIvKiFcbiAqXG4gKiBAZGFuZmVib29rcy9uZXBhbHBpdFxuICogUGVyc29uYWwgSW5jb21lIFRheCAoUElUKSBjYWxjdWxhdG9yIHV0aWxpdHkgZm9yIE5lcGFsXG4gKiBodHRwczovL3d3dy5kYW5mZWJvb2tzLmNvbS9lbi9jYWxjdWxhdG9ycy9uZXBhbC1wZXJzb25hbC1pbmNvbWUtdGF4XG4gKlxuICpcbiAqIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgLSAyMDIxIERhbmZlQm9va3PCrlxuICpcbiAqIERhdGFcbiAqIFRheCBTbGFiIERhdGFcbiAqL1xuXG5jb25zdCBvYmogPSB7XG5cdCcyMDcwLzcxJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAxMycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxNCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMiwgMjA3MScsXG5cdFx0bWF4RVBGUmF0ZTogMC4yLFxuXHRcdG1heERlZHVjdGlvblJhdGU6IDAuMzMsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3MS83Mic6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTcsIDIwMTQnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzEnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMTUnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzInLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgMjUwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogW3sgMzAwMDAwOiAxIH0sIHsgMTAwMDAwOiAxIH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHQnMjA3Mi83Myc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTcsIDIwMTUnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzInLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMTYnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzMnLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgMjUwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogW3sgMzAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHQnMjA3My83NCc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMTYnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzMnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMTcnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzQnLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgMzUwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogW3sgNDAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXHQnMjA3NC83NSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bCAxNiwgMjAxNycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxOCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMiwgMjA3NScsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyAzNTAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbeyA0MDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc1Lzc2Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxOCcsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxOScsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA3NicsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyAzNTAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMzUwMDAwOiA0IH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogW3sgNDAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTMwMDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzYvNzcnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDE5Jyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc2Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE1LCAyMDIwJyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDc3Jyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7IDQwMDAwMDogMSB9LCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEzMDAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDUwMDAwLCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEyNTAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDc3Lzc4Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAxMycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxNCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMiwgMjA3MScsXG5cdFx0bWF4RVBGUmF0ZTogMC4yLFxuXHRcdG1heERlZHVjdGlvblJhdGU6IDAuMzMsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3OC83OSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMjEnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzgnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMjInLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNhZGggMzIsIDIwNzknLFxuXHRcdGJyYWNrZXRzOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHNpbmdsZTogW3sgNDAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTMwMDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG1hcnJpZWQ6IFs0NTAwMDAsIHsgMTAwMDAwOiAyIH0sIHsgMjAwMDAwOiAzIH0sIHsgMTI1MDAwMDogNCB9XSxcblx0XHRcdH0sXG5cdFx0XSxcblx0fSxcblx0JzIwNzkvODAnOiB7XG5cdFx0ZnlTdGFydERhdGU6ICdKdWx5IDE3LCAyMDIyJyxcblx0XHRmeVN0YXJ0RGF0ZU5lOiAnU2hyYXdhbiAxLCAyMDc5Jyxcblx0XHRmeUVuZERhdGU6ICdKdWx5IDE2LCAyMDIzJyxcblx0XHRmeUVuZERhdGVOZTogJ0FzYWRoIDMxLCAyMDgwJyxcblx0XHRicmFja2V0czogW1xuXHRcdFx0e1xuXHRcdFx0XHRzaW5nbGU6IFt7IDQwMDAwMDogMSB9LCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEzMDAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtYXJyaWVkOiBbNDUwMDAwLCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEyNTAwMDA6IDQgfV0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5cdCcyMDgwLzgxJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAyMycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA4MCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAyNCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMiwgMjA4MScsXG5cdFx0YnJhY2tldHM6IFtcblx0XHRcdHtcblx0XHRcdFx0c2luZ2xlOiBbeyA0MDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMzAwMDAwOiA0IH1dLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bWFycmllZDogWzQ1MDAwMCwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMjUwMDAwOiA0IH1dLFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxufTtcblxuY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KG9iaik7XG5leHBvcnQgeyBkYXRhIH07XG4iLCIvKiFcbiAqXG4gKiBAZGFuZmVib29rcy9uZXBhbHBpdFxuICogUGVyc29uYWwgSW5jb21lIFRheCAoUElUKSBjYWxjdWxhdG9yIHV0aWxpdHkgZm9yIE5lcGFsXG4gKiBodHRwczovL3d3dy5kYW5mZWJvb2tzLmNvbS9lbi9jYWxjdWxhdG9ycy9uZXBhbC1wZXJzb25hbC1pbmNvbWUtdGF4XG4gKlxuICpcbiAqIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgLSAyMDIxIERhbmZlQm9va3PCrlxuICpcbiAqIEluZGV4LmpzXG4gKi9cblxuaW1wb3J0IHsgYnJlYWtkb3duIH0gZnJvbSAnLi9icmVha2Rvd24uanMnO1xuaW1wb3J0IHtcblx0Z2V0VG90YWxUYXhhYmxlQW1vdW50LFxuXHRnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyxcblx0Z2V0QW1vdW50Um91bmRlZCxcbn0gZnJvbSAnLi9jYWxjdWxhdG9yJztcblxuY29uc3QgdGF4ID0gKG9wdGlvbnMpID0+IHtcblx0Y29uc3QgeyBpbmNvbWUsIGVwZiwgY2l0LCBvdGhlckRlZHVjdGlvbiwgeWVhciwgc2luZ2xlIH0gPSBvcHRpb25zO1xuXHRjb25zdCBtZXRhID0gYnJlYWtkb3duKHllYXIpO1xuXHRjb25zb2xlLmxvZygnR2l2ZW4geWVhciBpcycsIHllYXIpO1xuXHRjb25zdCB0YXhhYmxlQW1vdW50ID0gZ2V0VG90YWxUYXhhYmxlQW1vdW50KFxuXHRcdGluY29tZSxcblx0XHRlcGYsXG5cdFx0Y2l0LFxuXHRcdG90aGVyRGVkdWN0aW9uLFxuXHRcdG1ldGEsXG5cdCk7XG5cdGNvbnN0IG1hcml0YWxTdGF0dXMgPSBzaW5nbGUgPyAnc2luZ2xlJyA6ICdtYXJyaWVkJztcblx0Y29uc3QgdG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMgPSBnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyhcblx0XHRtZXRhLmJyYWNrZXRzW21hcml0YWxTdGF0dXNdLFxuXHRcdHRheGFibGVBbW91bnQsXG5cdCk7XG5cblx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdHN1bU9mRXBmQW5kQ2l0OiBlcGYgKyBjaXQsXG5cdFx0dG90YWxJbmNvbWU6IGluY29tZSxcblx0XHR0b3RhbERlZHVjdGlvbjogaW5jb21lIC0gdGF4YWJsZUFtb3VudCxcblx0XHRuZXRBc3Nlc3NhYmxlOiB0YXhhYmxlQW1vdW50LFxuXHRcdHRvdGFsVGF4V2l0aEJyYWNrZXRzOiB0b3RhbFRheEFtb3VudFdpdGhCcmFja2V0c1xuXHRcdFx0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5hc3Nlc2libGVJbmNvbWUgPiAwKVxuXHRcdFx0Lm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRjb25zdCB0YXhPYmogPSB7fTtcblx0XHRcdFx0dGF4T2JqLmFzc2VzaWJsZUluY29tZSA9IGl0ZW0uYXNzZXNpYmxlSW5jb21lO1xuXHRcdFx0XHR0YXhPYmoucmF0ZSA9IGl0ZW0udGF4UmF0ZSAqIDEwMDtcblx0XHRcdFx0dGF4T2JqLnRheExpYWJpbGl0eSA9IGl0ZW0udGF4TGlhYmlsaXR5O1xuXHRcdFx0XHRyZXR1cm4gdGF4T2JqO1xuXHRcdFx0fSksXG5cdFx0dG90YWxBc3Nlc2libGVJbmNvbWU6IHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLnJlZHVjZShcblx0XHRcdChpbml0aWFsVmFsdWUsIHZhbHVlKSA9PiBpbml0aWFsVmFsdWUgKyB2YWx1ZS5hc3Nlc2libGVJbmNvbWUsXG5cdFx0XHQwLFxuXHRcdCksXG5cdFx0dG90YWxUYXhMaWFiaWxpdHk6IHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLnJlZHVjZShcblx0XHRcdChpbml0aWFsVmFsdWUsIHZhbHVlKSA9PiBpbml0aWFsVmFsdWUgKyB2YWx1ZS50YXhMaWFiaWxpdHksXG5cdFx0XHQwLFxuXHRcdCksXG5cdFx0bmV0VGF4TGlhYmlsaXR5TW9udGhseTogZ2V0QW1vdW50Um91bmRlZChcblx0XHRcdHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLnJlZHVjZShcblx0XHRcdFx0KGluaXRpYWxWYWx1ZSwgdmFsdWUpID0+IGluaXRpYWxWYWx1ZSArIHZhbHVlLnRheExpYWJpbGl0eSxcblx0XHRcdFx0MCxcblx0XHRcdCkgLyAxMixcblx0XHQpLFxuXHR9O1xuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBtZXRhID0gKCkgPT4ge1xuXHRyZXR1cm4gJ21ldGEgd29yayBpbiBwb3JvZ3Jlc3MnO1xufTtcblxuZXhwb3J0IHsgdGF4LCBtZXRhIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=