let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));

function getAverageAge(arr) {
	return (
		arr.reduce((prevValue, currValue) => prevValue + currValue.age, 0) /
		arr.length
	);
}
