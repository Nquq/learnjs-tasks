function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Родители разрешили?');
	}
}

// тут confirm сработает если age <= 18

function checkAge(age) {
	if (age > 18) {
		return true;
	}
	// ...
	return confirm('Родители разрешили?');
}

//тут также сработает если age <= 18
