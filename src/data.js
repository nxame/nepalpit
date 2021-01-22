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
 * Data
 * Tax Slab Data
 */

const obj = {
	'2070/71': {
		fyStartDate: 'July 16, 2013',
		fyStartDateNe: 'Shrawan 1, 2070',
		fyEndDate: 'July 16, 2014',
		fyEndDateNe: 'Ashad 32, 2071',
		brackets: [
			{
				single: [{ 200000: 1 }, { 100000: 15 }, { 0: 25 }],
			},
			{
				married: [250000, 100000],
			},
		],
	},
	'2071/72': {
		fyStartDate: 'July 17, 2014',
		fyStartDateNe: 'Shrawan 1, 2071',
		fyEndDate: 'July 16, 2015',
		fyEndDateNe: 'Ashad 31, 2072',
		brackets: [
			{
				single: [250000, 100000],
			},
			{
				married: [300000, 100000],
			},
		],
	},
	'2072/73': {
		fyStartDate: 'July 17, 2015',
		fyStartDateNe: 'Shrawan 1, 2072',
		fyEndDate: 'July 15, 2016',
		fyEndDateNe: 'Ashad 31, 2073',
		brackets: [
			{
				single: [250000, 100000],
			},
			{
				married: [300000, 100000],
			},
		],
	},
	'2073/74': {
		fyStartDate: 'July 16, 2016',
		fyStartDateNe: 'Shrawan 1, 2073',
		fyEndDate: 'July 15, 2017',
		fyEndDateNe: 'Ashad 31, 2074',
		brackets: [
			{
				single: [350000, 100000],
			},
			{
				married: [400000, 100000],
			},
		],
	},
	'2074/75': {
		fyStartDate: 'Jul 16, 2017',
		fyStartDateNe: 'Shrawan 1, 2074',
		fyEndDate: 'July 16, 2018',
		fyEndDateNe: 'Asadh 32, 2075',
		brackets: [
			{
				single: [350000, 100000],
			},
			{
				married: [400000, 100000],
			},
		],
	},
	'2075/76': {
		fyStartDate: 'July 17, 2018',
		fyStartDateNe: 'Shrawan 1, 2075',
		fyEndDate: 'July 16, 2019',
		fyEndDateNe: 'Asadh 31, 2076',
		brackets: [
			{
				single: [350000, 100000, 200000, 1350000],
			},
			{
				married: [400000, 100000, 200000, 1300000],
			},
		],
	},
	'2076/77': {
		fyStartDate: 'July 17, 2019',
		fyStartDateNe: 'Shrawan 1, 2076',
		fyEndDate: 'July 15, 2020',
		fyEndDateNe: 'Asadh 31, 2077',
		brackets: [
			{
				single: [400000, 100000, 200000, 1300000],
			},
			{
				married: [450000, 100000, 200000, 1250000],
			},
		],
	},
	'2077/78': {
		fyStartDate: 'July 16, 2020',
		fyStartDateNe: 'Shrawan 1, 2077',
		fyEndDate: 'July 15, 2021',
		fyEndDateNe: 'Asadh 31, 2078',
		brackets: [
			{
				single: [400000, 100000, 200000, 1300000],
			},
			{
				married: [450000, 100000, 200000, 1250000],
			},
		],
	},
	'2078/79': {
		fyStartDate: 'July 16, 2021',
		fyStartDateNe: 'Shrawan 1, 2078',
		fyEndDate: 'July 16, 2022',
		fyEndDateNe: 'Asadh 32, 2079',
		brackets: [
			{
				single: [400000, 100000, 200000, 1300000],
			},
			{
				married: [450000, 100000, 200000, 1250000],
			},
		],
	},
	'2079/80': {
		fyStartDate: 'July 17, 2022',
		fyStartDateNe: 'Shrawan 1, 2079',
		fyEndDate: 'July 16, 2023',
		fyEndDateNe: 'Asadh 31, 2080',
		brackets: [
			{
				single: [400000, 100000, 200000, 1300000],
			},
			{
				married: [450000, 100000, 200000, 1250000],
			},
		],
	},
	'2080/81': {
		fyStartDate: 'July 17, 2023',
		fyStartDateNe: 'Shrawan 1, 2080',
		fyEndDate: 'July 15, 2024',
		fyEndDateNe: 'Asadh 32, 2081',
		brackets: [
			{
				single: [400000, 100000, 200000, 1300000],
			},
			{
				married: [450000, 100000, 200000, 1250000],
			},
		],
	},
};

const data = JSON.stringify(obj);
export { data };
