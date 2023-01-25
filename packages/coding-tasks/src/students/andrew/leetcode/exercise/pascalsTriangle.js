const buildPascalString = (n) =>
	new Array(n)
		.fill(1)
		.map((_, index) => getPascalsNumber(n - 1, index))
		.join(' ');

const buildSpaceString = (n) => new Array(n).fill(' ').join('');

const pause = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

function factorial(number) {
	if (number < 1) {
		return 1;
	}
	return number * factorial(number - 1);
}

function getPascalsNumber(x, y) {
	return factorial(x) / (factorial(y) * factorial(x - y));
}

// function getPascalsNumber(x, y) {
//   if (x == 0 || y == 0 || x === y) {
//     return 1;
//   }

//   return getPascalsNumber(x - 1, y - 1) + getPascalsNumber(x - 1, y);
// }

const drawPascalsTriangle = async (height) => {
	const heightAbs = Math.abs(height);

	for (let i = 0; i < heightAbs; i++) {
		const length = height < 0 ? heightAbs - i : i + 1;
		const spaceLength = height < 0 ? i : heightAbs - i;
		const spaces = buildSpaceString(spaceLength);
		const result = buildPascalString(length);
		// console.log(spaces + result);
		// await pause(100);
	}
};

const benchmark = () => {
	console.time('Start');
	drawPascalsTriangle(30);
	//   drawPascalsTriangle(150);
	//   drawPascalsTriangle(100);
	//   drawPascalsTriangle(120);
	//   drawPascalsTriangle(165);
	console.timeEnd('Start');
};

// benchmark()
