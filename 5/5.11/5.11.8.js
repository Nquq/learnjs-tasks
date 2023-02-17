console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

function formatDate(date) {
	let dayOfMonth = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let divMs = new Date() - date;
	let divSeconds = Math.round(divMs / 1000);
	let divMinute = divSeconds / 60;
	let divHour = divMinute / 60;

	year = year.toString().slice(-2);
	month = month < 10 ? `0${month}` : month;
	dayOfMonth = dayOfMonth < 10 ? `0${dayOfMonth}` : dayOfMonth;
	hour = hour < 10 ? `0 ${hour}` : hour;
	minutes = minutes < 10 ? `0${minutes}` : minutes;

	if (divSeconds < 1) {
		return 'прямо сейчас';
	} else if (divMinute < 1) {
		return `${divSeconds} сек. назад`;
	} else if (divHour < 1) {
		return `${divMinute} мин. назад`;
	} else {
		return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
	}
}
