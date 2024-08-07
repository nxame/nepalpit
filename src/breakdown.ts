import data, { FiscalYear } from './data';
import cloneDeep from 'lodash.clonedeep';

const breakdown = (year: string): FiscalYear => {
	const brackets = cloneDeep(data[year]);
	return brackets;
};

export { breakdown };
