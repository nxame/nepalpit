export interface TaxParams {
	income: number;
	epf: number;
	cit: number;
	ssf: number;
	insurance: number;
	year: string;
	single: boolean;
	noOfMonths?: number;
}

export interface TaxResult {
	sumOfSsfEpfAndCit: number;
	insurance: number;
	totalIncome: number;
	totalDeduction: number;
	netAssessable: number;
	totalTaxWithBrackets: {
		assessibleIncome: number;
		rate: number;
		taxLiability: number;
	}[];
	totalAssessibleIncome: number;
	totalTaxLiability: number;
	netTaxLiabilityMonthly: number;
}
