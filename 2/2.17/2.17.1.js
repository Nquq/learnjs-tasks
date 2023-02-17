function ask(question, yes, no) {
	if (confirm(question)) yes();
	else no();
}

ask(
	'вы согласны',
	() => alert('Вы согласились.'),
	() => alert('Вы отменили выполнение.')
);
