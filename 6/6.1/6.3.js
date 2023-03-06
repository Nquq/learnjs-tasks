// function fib(num) {
// 	let f1 = 1;
// 	let f2 = 1;

// 	for (let i = 3; i <= num; i++) {
// 		let f3 = f1 + f2;
// 		f1 = f2;
// 		f2 = f3;
// 	}

// 	return f2;
// }

function fib(num) {
	return num <= 1 ? num : fib(num - 1) + fib(num - 2);
}

console.log(fib(7));
