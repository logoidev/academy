export class Cell {
	column?: number;
	row?: number;
	placed: boolean;
	player?: number;

	static COLORS = ['transparent', '#ef3330', '#f7de06'];
	static CLI_COLORS = ['⚪', '🔴', '🟡'];

	constructor(player?: number, column?: number, row?: number, placed = false) {
		this.player = player;
		this.column = column;
		this.row = row;
		this.placed = placed;
	}

	get opacity() {
		return this.placed ? 1 : 0.5;
	}

	get color() {
		return Cell.COLORS[(this.player ?? 0) + 1];
	}

	get cli() {
		return this.placed ? Cell.CLI_COLORS[(this.player ?? 0) + 1] : Cell.CLI_COLORS[0];
	}

	toString = () => this.cli;
}

export class Field {
	private columns: number;
	private rows: number;
	field: Array<Array<Cell>>;
	private playerCount: number;
	private winLength: number;
	currentPlayer: number;
	moves: Array<number> = [];

	constructor(columns: number, rows: number, playerCount = 2, winLength = 4) {
		this.columns = columns;
		this.rows = rows;
		this.playerCount = playerCount;
		this.currentPlayer = 0;
		this.winLength = winLength;
		this.field = this.makeField();
	}

	toString = () => this.field.map((cells) => this.cellsToString(cells)).join('\n');

	column = (index: number) => {
		return this.field[index];
	};

	getPlayerColor(player = this.currentPlayer) {
		return new Cell(player).color;
	}

	get cells() {
		return [...this.field];
	}

	private makeField = () =>
		new Array(this.columns)
			.fill(1)
			.map((_, column) =>
				new Array(this.rows).fill(1).map((_, row): Cell => new Cell(0, column, row))
			);

	private cellsToString = (cells: Array<Cell>) => cells.map((cell) => cell.toString()).join('|');

	clear = () => {
		this.field = this.makeField();
	};

	nextPlayer = () => {
		this.currentPlayer++;
		if (this.currentPlayer > this.playerCount - 1) {
			this.currentPlayer = 0;
		}
	};

	placeAt = (columnIndex: number, rowIndex: number, player: number) => {
		this.field[columnIndex][rowIndex].placed = true;
		this.field[columnIndex][rowIndex].player = player;
	};

	private getLastUnfilledCellIndexInColumn = (columnIndex: number) => {
		let cellIndex = this.field[columnIndex].length - 1;

		for (; cellIndex > 0; cellIndex--) {
			if (!this.field[columnIndex][cellIndex].placed) {
				break;
			}
		}

		return cellIndex;
	};

	placeAtColumn = (columnIndex: number, player = this.currentPlayer) => {
		const cellIndex = this.getLastUnfilledCellIndexInColumn(columnIndex);

		if (cellIndex === 0 && this.field[columnIndex][cellIndex].placed) {
			return;
		}

		this.placeAt(columnIndex, cellIndex, player);
		this.moves.push(columnIndex);
		this.nextPlayer();
	};

	replayMoves = (moves: Array<number>) => {
		moves.forEach((column, i) => this.placeAtColumn(column, i % this.playerCount));
	};

	checkColumnsWin = (field: Array<Array<Cell>> = this.field) => {
		return field.map((column) => checkSequence(column, this.winLength)).find((res) => res.win);
	};

	checkRowsWin = () => {
		const getRow = (row: number) => this.field.map((column) => column[row]);
		const rows = new Array(this.rows).fill(1).map((_, i) => getRow(i));
		return this.checkColumnsWin(rows);
	};

	checkDiagonalWin = (offset: number) => {
		const diagonal = [];

		for (let i = 0; i < this.columns; i++) {
			const column = i + offset;
			if (this.field[column]) {
				diagonal[i] = this.field[column][i];
			}
		}

		return diagonal.filter(Boolean);
	};

	checkReverseDiagonalWin = (offset: number) => {
		const diagonal = [];

		for (let i = 0; i < this.columns; i++) {
			const column = this.columns - (i + offset);
			if (this.field[column]) {
				diagonal[i] = this.field[column][i];
			}
		}

		return diagonal.filter(Boolean);
	};

	checkDiagonalsWin = () => {
		const diagonals = [];

		for (let offset = -this.columns; offset < this.rows; offset++) {
			const d = this.checkDiagonalWin(offset);
			if (d?.length) {
				diagonals.push(d);
			}
		}

		return this.checkColumnsWin(diagonals);
	};

	checkReverseDiagonalsWin = () => {
		const diagonals = [];

		for (let offset = -this.columns; offset < this.rows; offset++) {
			const d = this.checkReverseDiagonalWin(offset);
			if (d?.length) {
				diagonals.push(d);
			}
		}

		return this.checkColumnsWin(diagonals);
	};

	checkWin = () => {
		const checks = [
			this.checkColumnsWin,
			this.checkRowsWin,
			this.checkDiagonalsWin,
			this.checkReverseDiagonalsWin
		];

		const isWin = checks.reduce<Winner | undefined>(
			(previous, check) => previous || check(),
			undefined
		);

		return isWin;
	};
}

interface Winner {
	win: boolean;
	streak: number;
	winner?: number;
}

export const checkSequence = (array: Array<Cell>, winLength: number): Winner => {
	let i = array.length - 1;

	let currentStreak = 0;
	let maxStreak = 0;
	let maxPlayer: undefined | number = 0;

	for (; i >= 0; i--) {
		const placed = array[i].placed;
		const player = array[i].player;
		const previousPlayer = array[i + 1]?.player;

		if (placed) {
			if (player === previousPlayer) {
				currentStreak++;
			} else {
				currentStreak = 1;
			}
		} else {
			currentStreak = 0;
		}

		if (currentStreak > maxStreak) {
			maxStreak = currentStreak;
			maxPlayer = previousPlayer;
		}
	}

	return {
		win: maxStreak >= winLength,
		streak: maxStreak,
		winner: maxPlayer
	};
};
