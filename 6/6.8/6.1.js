// function printNumbers(from, to) {
// 	let interval = setInterval(() => {
// 		console.log(from);
// 		if (from === to) {
// 			clearInterval(interval);
// 		}
// 		from++;
// 	}, 1000);
// }

function printNumber(from, to) {
	let interval = setTimeout(function next() {
		console.log(from);
		if (from < to) {
			setTimeout(next, 1000);
		}
		from++;
	}, 1000);
}

printNumbers(4, 10);
