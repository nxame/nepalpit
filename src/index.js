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

const tax = (options) => {
	const meta = breakdown(options.year);

	console.log('Given year is', options.year);

	const result = {
		slab: [],
	};

	return meta;
};

const meta = () => {
	return 'meta work in porogress';
};

export { tax, meta };
