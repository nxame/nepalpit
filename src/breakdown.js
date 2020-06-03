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

import { data } from './data';

const breakdown = () => {
	return JSON.parse(data);
};

export { breakdown };
