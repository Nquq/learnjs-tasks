function delay(ms) {
	let promise = new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, ms);
	});

	return promise;
}

delay(5000).then(() => console.log('выполнилось через 5 секунды'));
