const buildStarString = (n) => new Array(n).fill(1).join(' ');
const buildSpaceString = (n) => new Array(n).fill(' ').join('');

const pause = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const drawTriangle = async (height) => {
	console.clear();

	const heightAbs = Math.abs(height);

	for (let i = 0; i < heightAbs; i++) {
		const length = height < 0 ? heightAbs - i : i + 1;
		const spaceLength = height < 0 ? i : heightAbs - i;
		const spaces = buildSpaceString(spaceLength);
		const result = buildStarString(length);
		console.log(spaces + result);
		await pause(100);
	}
};

drawTriangle(5);
