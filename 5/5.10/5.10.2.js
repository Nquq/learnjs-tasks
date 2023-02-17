let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250,
};

function topSalary(sal) {
	if (!sal) return null;

	let maxSalary = 0;
	let maxSalaryName = null;
	let salaryArr = Object.entries(sal);

	for (let i = 0; i < salaryArr.length; i++) {
		let [name, salary] = salaryArr[i];
		if (maxSalary < salary) {
			maxSalary = salary;
			maxSalaryName = name;
		}
	}

	return maxSalaryName;
}

console.log(topSalary(salaries));
