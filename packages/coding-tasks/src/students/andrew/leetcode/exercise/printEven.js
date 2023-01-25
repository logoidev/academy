// console.log even (четные) numbers from 20 to 4
const top = 20;
const bottom = 4;

function even(number) {
	if (number >= bottom) {
		console.log(number);
		even(number - 2);
	}
}

even(8);
