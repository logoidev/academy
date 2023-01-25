function fibonacci(number) {
	let array = [0, 1];

	for (let i = array.length; i < number; i++) {
		array.push(array[i - 2] + array[i - 1]);
	}

	array = array.slice(0, number);

	console.log(array);
}
fibonacci(10);
