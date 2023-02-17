function sumNumbers(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}

let firstNumber = +prompt('Введите первое число', 0);
let secondNumber = +prompt('Введите второе число', 0);

alert(sumNumbers(firstNumber, secondNumber));
