"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		return arr;
	}

	if (discriminant === 0) {
		const root = -b / (2 * a);
		arr.push(root);
		return arr;
	}

	if (discriminant > 0) {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2);
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyPercent = percent / 100 / 12;
	const loanBody = amount - contribution;

	if (loanBody === 0) {
		return 0;
	}

	const monthlyPayment = loanBody * (monthlyPercent * (1 + monthlyPercent) ** countMonths) / ((1 + monthlyPercent) ** countMonths - 1);

	const totalAmount = monthlyPayment * countMonths;

	return Number(totalAmount.toFixed(2));
}