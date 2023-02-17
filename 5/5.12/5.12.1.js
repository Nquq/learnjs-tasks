let user = {
	name: 'Василий Иванович',
	age: 35,
};

let json = JSON.stringify(user);

let userFromJson = JSON.parse(json);

console.log(json);
console.log(userFromJson);
