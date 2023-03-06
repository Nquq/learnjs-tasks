function factorial(num) {
	return num > 1 ? num * factorial(num - 1) : num;
}

console.log(factorial(5));
