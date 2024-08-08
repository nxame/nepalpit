/*!
 *
 * @danfebooks/nepalpit
 * Personal Income Tax (PIT) calculator utility for Nepal
 * https://www.danfebooks.com/en/calculators/nepal-personal-income-tax
 *
 *
 * MIT License
 * Copyright (c) 2020 - 2024 DanfeBooks®
 *
 * index.ts
 */

import { breakdown } from './breakdown';
import {
	getTotalTaxableAmount,
	getTotalTaxAmountWithBrackets,
	getAmountRounded,
} from './calculator';
import { TaxParams, TaxResult } from './types';

const tax = (options: TaxParams): TaxResult => {
	const {
		income,
		epf,
		cit,
		ssf,
		insurance,
		year,
		single,
		noOfMonths = 12,
	} = options;

	// Parameter validation - Check for negative values
	if (
		income < 0 ||
		epf < 0 ||
		cit < 0 ||
		ssf < 0 ||
		insurance < 0 ||
		noOfMonths < 0
	) {
		throw new Error(
			'Tax parameters (Income, EPF, CIT, SSF, Insurance) cannot be negative.',
		);
	}

	const meta = breakdown(year);

	const taxSettings = {
		maxDeductionRate: meta.maxDeductionRate,
		maxDeductionLimit: meta.maxDeductionLimit,
		maxDeductionLimitWithSSF: meta.maxDeductionLimitWithSSF,
		maxInsuranceDeductionLimit: meta.maxInsuranceDeductionLimit,
	};

	const {
		taxableIncome,
		sumOfSsfEpfAndCit,
		finalInsurance,
	} = getTotalTaxableAmount({
		totalIncome: income,
		epf,
		cit,
		ssf,
		insurance,
		taxSettings,
	});
	const maritalStatus = single ? 'single' : 'married';
	const totalTaxAmountWithBrackets = getTotalTaxAmountWithBrackets(
		meta.brackets[maritalStatus],
		taxableIncome,
		ssf > 0,
	);

	const result: TaxResult = {
		sumOfSsfEpfAndCit: sumOfSsfEpfAndCit,
		insurance: finalInsurance,
		totalIncome: income,
		totalDeduction: income - taxableIncome,
		netAssessable: taxableIncome,
		totalTaxWithBrackets: totalTaxAmountWithBrackets
			.filter((item) => item.assessibleIncome > 0)
			.map((item) => {
				const taxObj: {
					assessibleIncome: number;
					rate: number;
					taxLiability: number;
				} = {
					assessibleIncome: item.assessibleIncome,
					rate: item.taxRate * 100,
					taxLiability: item.taxLiability,
				};
				return taxObj;
			}),
		totalAssessibleIncome: totalTaxAmountWithBrackets.reduce(
			(initialValue, value) => initialValue + value.assessibleIncome,
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
			) / noOfMonths,
		),
	};

	return result;
};

export { tax };
