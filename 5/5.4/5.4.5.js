function getMaxSubSum(arr) {
	let sum = 0;
	const sumArray = [];

	for (let num of arr) {
		sum += num;
		if (sum < 0) {
			sum = 0;
			sumArray.push(sum);
		} else sumArray.push(sum);
	}

	let maxSum = sumArray[0];
	for (let i = 1; i < sumArray.length; i++) {
		if (maxSum < sumArray[i]) maxSum = sumArray[i];
	}

	console.log(maxSum);
}

getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([-2, -1, 1, 2]);
getMaxSubSum([100, -9, 2, -3, 5]);
getMaxSubSum([1, 2, 3]);
