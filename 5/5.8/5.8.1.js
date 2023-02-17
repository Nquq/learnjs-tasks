let messages = [
	{ text: 'Hello', from: 'John' },
	{ text: 'How goes?', from: 'John' },
	{ text: 'See you soon', from: 'Alice' },
];

// можно использовать WeakMap

let readMessages = new WeakSet();

readMessages.add(messages[2]);

// Когда мы добавил туда какое либо сообщение, то оно будет считать прочитанным, и если мы решим еще раз его прочитать, то readMessages не измениться, так как это Set-подобная коллекция, там хранятся только уникальные объекты
