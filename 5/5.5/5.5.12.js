// function unique(arr) {
// 	return Array.from(new Set(arr));
// }

// или

function unique(arr) {
	let uniqueArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (!uniqueArr.includes(arr[i])) {
			uniqueArr.push(arr[i]);
		}
	}

	return uniqueArr;
}

let strings = [
	'кришна',
	'кришна',
	'харе',
	'харе',
	'харе',
	'харе',
	'кришна',
	'кришна',
	':-O',
];

console.log(unique(strings));
