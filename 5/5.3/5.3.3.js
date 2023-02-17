function truncate(str, length) {
	return str.length > length ? `${str.slice(0, length - 1)}...` : str;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));

console.log(truncate('Всем привет!', 20));
