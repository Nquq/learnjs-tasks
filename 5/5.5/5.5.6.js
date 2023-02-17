let calc = new Calculator();

console.log(calc.calculate('3 + 7'));

function Calculator() {
	this.methods = {
		'-': (firstNumber, secondNumber) => firstNumber - secondNumber,
		'+': (firstNumber, secondNumber) => firstNumber + secondNumber,
	};

	this.calculate = str => {
		let [firstNumber, sign, secondNumber] = str.split(' ');

		if (isNaN(firstNumber) || isNaN(secondNumber) || !this.methods[sign]) {
			return NaN;
		}

		return this.methods[sign](+firstNumber, +secondNumber);
	};

	this.addMethod = (name, func) => {
		this.methods[name] = func;
	};
}

let powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
console.log(result);
