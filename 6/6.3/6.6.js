let users = [
	{ name: 'John', age: 20, surname: 'Johnson' },
	{ name: 'Pete', age: 18, surname: 'Peterson' },
	{ name: 'Ann', age: 19, surname: 'Hathaway' },
];

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

function byField(field) {
	// if (field === 'name') {
	// 	return (a, b) => (a.name > b.name ? 1 : -1);
	// } else if (field === 'age') {
	// 	return (a, b) => a.age - b.age;
	// } else if (field === 'surname') {
	// 	return (a, b) => (a.surname > b.surname ? 1 : -1);
	// }

	return (a, b) => (a[field] > b[field] ? 1 : -1);
}
