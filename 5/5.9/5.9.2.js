let user = {
	name: 'John',
	age: 30,
};

console.log(count(user));

function count(user) {
	return Object.keys(user).length;
}
