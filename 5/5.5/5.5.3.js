let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr);

function filterRangeInPlace(arr, a, b) {
	if (!a || !b) return arr;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < a || arr[i] > b) {
			arr.splice(i, 1);
			i--;
		}
	}

	return arr;
}
