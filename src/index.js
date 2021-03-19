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
import { getTotalTaxableAmount } from './calculator';

const tax = (options) => {
	const meta = breakdown(options.year);
	const { income, epf, cit, otherDeduction, year } = options;
	console.log('Given year is', year);
	const taxableAmount = getTotalTaxableAmount(
		income,
		epf,
		cit,
		otherDeduction,
		meta,
	);
	console.log(taxableAmount, 'taxable Amount');
	const result = {};

	return result;
};

const meta = () => {
	return 'meta work in porogress';
};

export { tax, meta };
