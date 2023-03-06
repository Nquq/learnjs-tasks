// function User(name) {
// 	this.name = name;
// }

// let user = new User('Oleg');
// let user2 = new user.constructor('Pasha');

// console.log(user2.name); //Pasha

function User(name) {
	this.name = name;
}

User.prototype = {};

let user = new User('Oleg');
let user2 = new user.constructor('Pasha');

console.log(user2.name); //undefined
