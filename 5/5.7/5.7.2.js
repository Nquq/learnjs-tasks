let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));

function aclean(words) {
	const sortedArr = new Map();

	for (let word of words) {
		let sortedWord = word.toLowerCase().split('').sort().join('');
		sortedArr.set(sortedWord, word);
	}

	return Array.from(sortedArr.values());
}
