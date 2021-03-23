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

import { breakdown } from './breakdown.js';
import {
	getTotalTaxableAmount,
	getTotalTaxAmountWithBrackets,
	getAmountRounded,
} from './calculator';

const tax = (options) => {
	const { income, epf, cit, otherDeduction, year, single } = options;
	const meta = breakdown(year);
	console.log('Given year is', year);
	const taxableAmount = getTotalTaxableAmount(
		income,
		epf,
		cit,
		otherDeduction,
		meta,
	);
	const maritalStatus = single ? 'single' : 'married';
	const totalTaxAmountWithBrackets = getTotalTaxAmountWithBrackets(
		meta.brackets[maritalStatus],
		taxableAmount,
	);

	const result = {
		sumOfEpfAndCit: epf + cit,
		totalIncome: income,
		totalDeduction: income - taxableAmount,
		netAssessable: taxableAmount,
		totalTaxWithBrackets: totalTaxAmountWithBrackets
			.filter((item) => item.assesibleIncome > 0)
			.map((item) => {
				const taxObj = {};
				taxObj.assesibleIncome = item.assesibleIncome;
				taxObj.rate = item.taxRate * 100;
				taxObj.taxLiability = item.taxLiability;
				return taxObj;
			}),
		totalAssesibleIncome: totalTaxAmountWithBrackets.reduce(
			(initialValue, value) => initialValue + value.assesibleIncome,
			0,
		),
		totalTaxLiability: totalTaxAmountWithBrackets.reduce(
			(initialValue, value) => initialValue + value.taxLiability,
			0,
		),
		netTaxLiabilityMonthly: getAmountRounded(
			totalTaxAmountWithBrackets.reduce(
				(initialValue, value) => initialValue + value.taxLiability,
				0,
			) / 12,
		),
	};

	return result;
};

const meta = () => {
	return 'meta work in porogress';
};

export { tax, meta };
