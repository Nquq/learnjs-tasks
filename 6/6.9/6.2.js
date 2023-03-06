// создаём обёртки
let f1000 = delay(console.log, 1000);

f1000('test'); // показывает "test" после 1000 мс

function delay(func, ms) {
	return function () {
		setTimeout(() => func.apply(this, arguments), ms);
	};
}
