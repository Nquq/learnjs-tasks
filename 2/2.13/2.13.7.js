'use strict';

let number = 10;

nextPrimeNumber: for (let i = 2; i < number; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j === 0) continue nextPrimeNumber;
	}
	console.log(i);
}
