// write a factorial function

// 4 -> 4 * 3 * 2 * 1 -> 24
// 0 -> 1
// 1 -> 1
// 3 -> 3 * 2 * 1 -> 6

function factorial(number) {
	if (number < 1) {
		return 1;
	}
	return number * factorial(number - 1);
}
console.log(factorial(5));
