function Accumulator(initialValue) {
	this.value = initialValue;

	this.read = () => {
		this.value += +prompt('введите число', 0);
	};
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
