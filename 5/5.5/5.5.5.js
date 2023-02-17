let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);

function copySorted(arr) {
	const sortedArr = arr.concat();

	return sortedArr.sort();
}
