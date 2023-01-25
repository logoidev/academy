const bottom = -6;
const top = 4;

function logNumber(number) {
	let step = 1;
	if (bottom > top) {
		step = -1;
	}

	console.log(number);

	if (number !== top) {
		logNumber(number + step);
	}
}

logNumber(bottom);
