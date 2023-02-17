let date = new Date(2012, 0, 3); // 3 января 2012 года

console.log(getLocalDay(date));

function getLocalDay(date) {
	if (date.getDay() === 0) {
		return 7;
	}
	return date.getDay();
}
