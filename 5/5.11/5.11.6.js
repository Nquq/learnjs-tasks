function getSecondsToday() {
	let date = new Date();

	let hours = date.getHours();
	let minute = date.getMinutes();
	let seconds = date.getSeconds();

	return hours * 3600 + minute * 60 + seconds;
}

console.log(getSecondsToday());
