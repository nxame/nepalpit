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
const getTotalTaxableAmount = (
	totalIncome,
	epf,
	cit,
	otherDeduction,
	taxSettings,
) => {
	const {
		MaxAnnualDeductionRate,
		MaxAnnualDeductionAmount,
		MaxAnnualEPFRate,
	} = taxSettings;

	if (epf > totalIncome * MaxAnnualEPFRate) {
		throw new Error('The EPF must be smaller than 20% of salary');
	}

	const totalDeduction = epf + cit + otherDeduction;
	const EmployeeAnnualDeductionAmount = totalIncome * MaxAnnualDeductionRate;

	if (totalDeduction <= EmployeeAnnualDeductionAmount) {
		return totalIncome - totalDeduction;
	}

	if (EmployeeAnnualDeductionAmount <= MaxAnnualDeductionAmount) {
		return totalIncome - EmployeeAnnualDeductionAmount;
	}

	if (
		EmployeeAnnualDeductionAmount > MaxAnnualDeductionAmount &&
		totalDeduction <= MaxAnnualDeductionAmount
	)
		return totalIncome - MaxAnnualDeductionAmount;
};

/**
 * Returns the total tax for tax band
 *
 * @param taxRate tax rate from selected tax data
 * @param totalTaxableIncome total income (can be carry left over from last bracket)
 */

const getTotalTaxForRateWithIncome = (taxRate, totalTaxableIncome) => {
	const incomeTaxRateDifference = taxRate.end - taxRate.start;
	const totalMinusDifference = totalTaxableIncome - incomeTaxRateDifference;
	const carry = totalMinusDifference > 0 ? totalMinusDifference : 0;

	if (totalTaxableIncome > 0) {
		if (totalTaxableIncome >= incomeTaxRateDifference) {
			return {
				taxLiability: incomeTaxRateDifference * taxRate.rate,
				taxRate: taxRate.rate,
				assesibleIncome: incomeTaxRateDifference,
				carry,
			};
		}
		return {
			taxLiability: totalTaxableIncome * taxRate.rate,
			taxRate: taxRate.rate,
			assesibleIncome: totalTaxableIncome,
			carry,
		};
	}

	return {
		taxLiability: 0,
		taxRate: taxRate.rate,
		assesibleIncome: 0,
		carry: carry,
	};
};

/**
 * Returns a all tax breakdown of income.
 * @param taxBrackets from selected tax data
 * @param totalTaxableAmount total calculated taxable amount
 */

function getTotalTaxAmountWithBrackets(taxBrackets, totalTaxableAmount) {
	let taxBreakDownArray = [];
	return taxBrackets.map((item, index) => {
		const result = getTotalTaxForRateWithIncome(
			item,
			index === 0 ? totalTaxableAmount : taxBreakDownArray[index - 1].carry,
		);
		taxBreakDownArray.push(result);
		return result;
	});
}

/**
 * Returns two decimal number converted from original input float number
 *
 * @param amount floating number
 */

const getAmountRounded = (amount) => {
	return Math.round(amount * 100) / 100;
};
export {
	getTotalTaxableAmount,
	getTotalTaxAmountWithBrackets,
	getAmountRounded,
};
