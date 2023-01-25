const buildStarString = (n) => new Array(n).fill('*').join(' ');
const buildSpaceString = (n) => new Array(n).join('.');

const pause = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

const drawTriangle = async (height) => {
	console.clear();

	const heightAbs = Math.abs(height);
	let spaceR = '';
	let space = '';
	//
	for (let i = 0; i < heightAbs; i++) {
		space += ' ';
	}
	//
	for (let i = 0; i < heightAbs; i++) {
		const length = height < 0 ? heightAbs - i : i + 1;
		const result = buildStarString(length);
		await pause(100);
		if (height < 0) {
			spaceR = space.slice(heightAbs - i);
			console.log(spaceR + result);
		} else {
			spaceR = space.slice(0, heightAbs - i);
			console.log(spaceR + result);
		}
	}
};

drawTriangle(3);
