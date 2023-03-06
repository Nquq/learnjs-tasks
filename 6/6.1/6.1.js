// function sumTo(number) {
// 	let sum = 0;
// 	for (let i = 1; i <= number; i++) {
// 		sum += i;
// 	}
// 	return sum;
// }

// function sumTo(number) {
// 	if (number > 1) {
// 		return number + sumTo(number - 1);
// 	} else {
// 		return number;
// 	}
// }

function sumTo(number) {
	return (number * (number + 1)) / 2;
}

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));
