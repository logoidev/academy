// prompt: "Enter number: " forever
// Unitl entered -1
// Fill array with answers
// If not a number - skip and print "Skipped, not a valid number"
// Print summary:
// - Smallest number
// - Largest number
// - Average
// - Median

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

const askQuestion = (question) =>
	new Promise((resolve, reject) => readline.question(`${question} `, (answer) => resolve(answer)));

const askQuestions = async (question) => {
	const array = [];

	for (let number; number !== -1; ) {
		const numberStr = await askQuestion(`Enter your number`);
		number = Number(numberStr);

		if (isNaN(number)) {
			console.log('Skipped, not a valid number');
		} else {
			array.push(number);
		}
	}

	console.log(array);
	readline.close();

	// getAbsoluteGetter
	// -> currying
	function getAbsoluteGetter(comparer) {
		return function (array) {
			let absolute = array[0];

			for (let i = 1; i < array.length; i++) {
				if (comparer(array[i], absolute)) {
					absolute = array[i];
				}
			}
			return absolute;
		};
	}

	const getMin = getAbsoluteGetter(
		(arrayElement, currentAbsolute) => arrayElement < currentAbsolute
	);

	const getMax = getAbsoluteGetter(
		(arrayElement, currentAbsolute) => arrayElement > currentAbsolute
	);

	function getAverage(array) {
		let sum = 0;
		let avg = 0;
		for (let i = 0; i < array.length; i++) {
			sum += array[i];
			avg = sum / array.length;
		}
		return avg;
	}
	function getMedian(array) {
		// Bubble sort
		for (let i = 0; i < array.length; i++) {
			for (let j = 0; j < array.length; j++) {
				if (array[j] > array[j + 1]) {
					let swap = array[j];
					array[j] = array[j + 1];
					array[j + 1] = swap;
				}
			}
		}
		const medianIndex = Math.floor(array.length / 2);
		let median = 0;
		if (array.length % 2 == 0) {
			median = (array[medianIndex] + array[medianIndex - 1]) / 2;
		} else {
			median = array[medianIndex];
		}
		return median;
	}
	//
	const min = getMin(array);
	console.log('Min', min);
	const max = getMax(array);
	console.log('Max', max);
	const avg = getAverage(array);
	console.log('Average', avg);
	const median = getMedian(array);
	console.log('Median', median);
};
askQuestions();
