function sum(num) {
	let currentSum = num;

	function calc(b) {
		currentSum += b;
		return calc;
	}

	calc.toString = function () {
		return currentSum;
	};

	return calc;
}

console.log(JSON.parse(sum(1)(2)));
console.log(JSON.parse(sum(5)(-1)(2)));
console.log(JSON.parse(sum(6)(-1)(-2)(-3)));
console.log(JSON.parse(sum(0)(1)(2)(3)(4)(5)));
