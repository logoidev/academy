import { getRandomInRange } from './utils.js';
import { EMPTY_CELL, makeIndex, getWinner } from './getWinner.js';

export { EMPTY_CELL };

const CROSS_OUT_CHAR = '̶';
const SEPARATOR_CHAR = '|';

export function getEmptySpaces(array) {
	return array.flat().filter((item) => item === EMPTY_CELL).length;
}

export function checkWinGame(array, winLength) {
	const { winner, indexes } = getWinner(array, winLength);
	printField(array, indexes);

	if (winner) {
		console.log(`${winner} wins`);
		return true;
	} else if (getEmptySpaces(array) === 0) {
		console.log('Draw');
		return false;
	} else {
		return false;
	}
}

export function printField(array, winningIndexes) {
	// console.clear();

	const result = array
		.map((row, i) =>
			row
				.map((cell, j) => {
					if (winningIndexes.includes(makeIndex(i, j))) {
						return cell + CROSS_OUT_CHAR;
					}
					return cell;
				})
				.join(SEPARATOR_CHAR)
		)
		.join('\n');

	console.log(result);

	return result;
}

export const getFilledArray = (moves, players, m, n = m) => {
	const size = m * n;
	if (moves > size) {
		throw new Error(`Too big, can fill array up to ${size} elements`);
	}

	const array = new Array(m).fill(1).map(() => new Array(n).fill(EMPTY_CELL));

	for (let l = 0; l < moves; ) {
		const i = getRandomInRange(0, m);
		const j = getRandomInRange(0, n);

		if (array[i][j] === EMPTY_CELL) {
			const player = l >= moves ? EMPTY_CELL : players[l % players.length];
			array[i][j] = player;
			l++;
		}
	}

	return array;
};
