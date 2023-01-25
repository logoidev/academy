const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

const askQuestion = (question) =>
	new Promise((resolve) =>
		readline.question(`${question}: `, (answer) => {
			resolve(answer);
		})
	);

const askRepeatedQuestion = async (question, getValues, isValid) => {
	while (true) {
		try {
			const answer = await askQuestion(question);
			const values = getValues(answer);
			if (isValid(values)) {
				return values;
			} else {
				throw new Error('Invalid input...');
			}
		} catch (error) {
			console.log(error.message);
		}
	}
};

const FIELD_SIZE = 4;

const EMPTY_FIELD = new Array(FIELD_SIZE).fill(0).map(() => new Array(FIELD_SIZE).fill(0));

// const EMPTY_FIELD = [
//   [1, 2, 1],
//   [2, 0, 0],
//   [2, 1, 1],
// ];

// const indexToCharacter = (i) => (i === 0 ? "*" : i === 1 ? "X" : "O");
const indexToCharacter = (i) => (i === 0 ? ' • ' : i === 1 ? ' ❌' : ' ⭕');

const run = async () => {
	const field = EMPTY_FIELD;

	const checkRow = (rowIndex, checkFor = 1) => field[rowIndex].every((item) => item === checkFor);

	const checkColumn = (columnIndex, checkFor = 1) =>
		field.every((row) => row[columnIndex] === checkFor);

	const checkFirstDiagonal = (checkFor = 1) => field.every((_, i) => field[i][i] === checkFor);

	const checkSecondDiagonal = (checkFor = 1) =>
		field.every((_, i) => field[i][field.length - 1 - i] === checkFor);

	const checkWin = (checkFor = 1) => {
		if (
			checkFirstDiagonal(checkFor) ||
			checkSecondDiagonal(checkFor) ||
			field.some((_, i) => checkRow(i, checkFor) || checkColumn(i, checkFor))
		) {
			console.log('Win for', indexToCharacter(checkFor));
			return true;
		}
	};

	const drawField = () => {
		console.clear();
		const result = field.map((item) => item.map(indexToCharacter).join('|')).join('\n');
		console.log(result);
	};

	const checkWinAll = () => checkWin(1) || checkWin(2);

	const isValidIndex = (index) => {
		const n = Number(index);
		return !Number.isNaN(n) && n >= 0 && n < FIELD_SIZE;
	};

	const askForIndexes = (index) => {
		const getValues = (answer) => answer.split(' ').map(Number);
		const isValid = ([x, y, ...rest]) => {
			if (rest.length || !isValidIndex(x) || !isValidIndex(+y)) {
				throw new Error('Invalid input');
			}
			if (field[x][y] !== 0) {
				drawField();
				throw new Error(`Cell ${x} ${y} not empty -> ${indexToCharacter(field[x][y])}`);
			}
			return true;
		};
		const player = index % 2 === 0 ? 'X' : 'O';
		return askRepeatedQuestion(`Enter for ${player}`, getValues, isValid);
	};

	drawField();

	const flatField = field.flat();
	let totalCellCount = flatField.length;
	let filledCellCount = flatField.filter(Boolean).length;

	for (let i = filledCellCount; filledCellCount < totalCellCount; i++) {
		const [x, y] = await askForIndexes(i);
		field[x][y] = (i % 2) + 1;
		filledCellCount = field.flat().filter(Boolean).length;
		drawField();

		if (checkWinAll()) {
			break;
		}
	}

	readline.close();
};

run().catch((error) => console.error(error));
