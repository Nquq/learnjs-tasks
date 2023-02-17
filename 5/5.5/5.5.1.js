function camelize(str) {
	let strArr = str.split('-');

	for (let i = 1; i < strArr.length; i++) {
		strArr[i] = strArr[i].at(0).toUpperCase() + strArr[i].slice(1);
	}

	return strArr.join('');
}

console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));
