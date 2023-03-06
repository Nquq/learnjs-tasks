let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

// function printReverseList(list) {
// 	let listArr = [];
// 	let temp = list;

// 	while (temp) {
// 		listArr.push(temp.value);
// 		temp = temp.next;
// 	}

// 	return listArr.reverse().map(item => console.log(item));
// }

function printReverseList(list) {
	if (list.next) {
		printReverseList(list.next);
	}

	console.log(list.value);
}

printReverseList(list);
