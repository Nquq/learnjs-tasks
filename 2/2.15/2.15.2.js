// 1 вариант с ?

function checkAge(age) {
	return age > 18 ? true : confirm('Родители разрешили?');
}

// 2 вариант с ||

function checkAge(age) {
	return age > 18 || confirm('Родители разрешили?');
}
