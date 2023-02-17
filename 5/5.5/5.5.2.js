let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);

console.log(arr);

function filterRange(arr, a, b) {
	if (!a || !b) return arr;

	const filteredArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= a && arr[i] <= b) filteredArr.push(arr[i]);
	}

	return filteredArr;
}
