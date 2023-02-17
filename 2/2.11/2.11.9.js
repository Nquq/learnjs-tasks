'use strict';

let userRole = prompt('Кто там', '');

if (userRole === 'Админ') {
	let password = prompt('Пароль?', '');

	if (password === 'Я Главный') {
		alert('Здравствуйте!');
	} else if (password === null || password === '') {
		alert('Отменено');
	} else {
		alert('Неверный пароль');
	}
} else if (userRole === null || userRole === '') {
	alert('Отменено');
} else {
	alert('Я вас не знаю');
}
