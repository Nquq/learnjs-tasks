let messages = [
	{ text: 'Hello', from: 'John' },
	{ text: 'How goes?', from: 'John' },
	{ text: 'See you soon', from: 'Alice' },
];

let readMessages = new WeakMap();

readMessages.add(new Date(), messages[1]);
