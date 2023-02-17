let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250,
};

console.log(sumSalaries(salaries));

function sumSalaries(sal) {
	return Object.values(sal).reduce(
		(prevValue, currValue) => prevValue + currValue,
		0
	);
}
