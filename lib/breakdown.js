"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breakdown = void 0;

var _data = require("./data");

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
 * Tax Breakdown
 * This is the metadata for tax brackets in Nepal with FY fyStartDate and fyEndDateDate
 */
var breakdown = function breakdown() {
  return JSON.parse(_data.data);
};

exports.breakdown = breakdown;