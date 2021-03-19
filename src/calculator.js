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

export { getTotalTaxableAmount };
