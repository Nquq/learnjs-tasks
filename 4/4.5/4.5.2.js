let calculator = new Calculator();
calculator.read();

alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());

function Calculator() {
	this.read = () => {
		this.firstNumber = +prompt('Введите первое число', 0);
		this.secondNumber = +prompt('Введите второе число', 0);
	};
	this.sum = () => {
		return this.firstNumber + this.secondNumber;
	};
	this.mul = () => {
		return this.firstNumber * this.secondNumber;
	};
}
