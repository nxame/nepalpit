"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tax = void 0;

var _breakdown = require("./breakdown");

/*!
 *
 * @danfebooks/nepalpit
 * Personal Income Tax (PIT) calculator utility for Nepal
 * https://www.danfebooks.com/calculators/personal-income-tax
 *
 *
 * MIT License
 * Copyright (c) 2020 danfebooks™
 *
 * Index.js
 */
var tax = function tax() {
  return (0, _breakdown.breakdown)();
};

exports.tax = tax;