function sumInput() {
	let num;
	let sum = 0;
	const sumArr = [];

	while (true) {
		num = prompt('Введите число', 0);
		if (num === '' || num === null || !isFinite(num)) break;
		sumArr.push(+num);
	}

	for (let i = 0; i < sumArr.length; i++) {
		sum += sumArr[i];
	}

	return sum;
}

alert(sumInput());
console.log(sumArr);
