function toDecimal(binary) {
	let result = 0;
	for (let i = binary.length; i > 0; i--) {
		result += binary[binary.length - i] * 2 ** (i - 1);
	}
	return result;
}
console.log(toDecimal('1100'));
