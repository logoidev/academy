export const EMPTY_CELL = '-';

export const makeIndex = (i, j) => `${i}|${j}`;

export const getRowsWinner = (array, l) => {
	let previousCell = null;
	let rowIndexes = [];

	const m = array.length;
	const n = array[0].length;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			const cell = array[i][j];
			if (cell) {
				const index = makeIndex(i, j);

				if (j !== 0 && previousCell === cell) {
					rowIndexes.push(index);
				} else {
					rowIndexes = [index];
				}

				if (rowIndexes.length === l) {
					return {
						winner: cell,
						indexes: rowIndexes
					};
				}

				previousCell = cell;
			}
		}
	}

	return {
		winner: null,
		indexes: []
	};
};

export const getColumnsWinner = (array, l) => {
	let previousCell = null;
	let columnIndexes = [];

	const m = array.length;
	const n = array[0].length;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			const cell = array[j][i];

			if (cell) {
				const index = makeIndex(j, i);

				if (j !== 0 && previousCell === cell) {
					columnIndexes.push(index);
				} else {
					columnIndexes = [index];
				}

				if (columnIndexes.length === l) {
					return {
						winner: cell,
						indexes: columnIndexes
					};
				}

				previousCell = cell;
			}
		}
	}

	return {
		winner: null,
		indexes: []
	};
};

export const getDiagonalWinner = (array, shift, l) => {
	let previousCell = null;
	let diagonalIndexes = [];

	const m = array.length;
	const n = array[0].length;
	let maxLength = 0;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n - shift; j++) {
			const cell = array[i][j + shift];
			if (cell && i === j) {
				const index = makeIndex(i, j + shift);

				if (previousCell === cell) {
					maxLength++;
					diagonalIndexes.push(index);
				} else {
					maxLength = 1;
					diagonalIndexes = [index];
				}

				if (maxLength === l) {
					return {
						winner: cell,
						indexes: diagonalIndexes
					};
				}

				previousCell = cell;
			}
		}
	}
	return {
		winner: null,
		indexes: []
	};
};

export const getInverseDiagonal = (array, shift, l) => {
	let previousCell = null;
	let diagonalIndexes = [];

	const m = array.length;
	const n = array[0].length;
	let maxLength = 0;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n + shift; j++) {
			const cell = array[i][n - 1 - j + shift];
			if (cell && i === j) {
				const index = makeIndex(i, n - 1 - j + shift);

				if (previousCell === cell) {
					maxLength++;
					diagonalIndexes.push(index);
				} else {
					maxLength = 1;
					diagonalIndexes = [index];
				}

				if (maxLength === l) {
					return {
						winner: cell,
						indexes: diagonalIndexes
					};
				}

				previousCell = cell;
			}
		}
	}
	return {
		winner: null,
		indexes: []
	};
};

export const getDiagonalsWinner = (array, l) => {
	let current = { winner: null };
	const m = array.length;
	const n = array[0].length;
	const lShift = l - 1;

	for (let shift = -(m - 1 + lShift); shift < n - lShift; shift++) {
		current = getDiagonalWinner(array, shift, l);
		if (current.winner !== null) {
			return current;
		} else {
			current = getInverseDiagonal(array, shift, l);
		}
		if (current.winner !== null) {
			return current;
		}
	}

	return {
		winner: null,
		indexes: []
	};
};

export const getWinner = (array, winLength) => {
	const getWinnerFunctions = [getRowsWinner, getColumnsWinner, getDiagonalsWinner];

	for (const getPartialWinner of getWinnerFunctions) {
		const winner = getPartialWinner(array, winLength);

		if (![null, EMPTY_CELL].includes(winner.winner)) {
			return winner;
		}
	}

	return {
		winner: null,
		indexes: []
	};
};
