let dictionary = Object.create(null, {
	toString: {
		value() {
			return Object.keys(dictionary).join();
		},
	},
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for (let key in dictionary) {
	console.log(key);
}

console.log(dictionary);
