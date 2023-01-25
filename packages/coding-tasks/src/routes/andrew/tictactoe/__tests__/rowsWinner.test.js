import { describe, it, expect } from 'vitest';
import { printField } from '../tictactoe.js';
import { getRowsWinner } from '../getWinner';

describe('getRowWinner', () => {
	it('first row', () => {
		const array = [
			['o', 'x', 'x', 'x'],
			['x', 'o', 'x', 'o'],
			['x', 'o', 'x', 'x'],
			['o', 'x', 'o', 'o']
		];
		const winner = getRowsWinner(array, 3);
		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|x̶|x̶|x̶
      x|o|x|o
      x|o|x|x
      o|x|o|o"
    `);
	});

	it('second row', () => {
		const array = [
			['o', 'x', 'o', 'x'],
			['x', 'o', 'o', 'o'],
			['x', 'o', 'x', 'x'],
			['o', 'x', 'o', 'o']
		];
		const winner = getRowsWinner(array, 3);
		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|x|o|x
      x|o̶|o̶|o̶
      x|o|x|x
      o|x|o|o"
    `);
	});

	it('third row', () => {
		const array = [
			['o', 'x', 'o', 'x'],
			['x', 'o', 'x', 'o'],
			['x', 'o', 'x', 'x'],
			['o', 'x', 'o', 'o']
		];
		const winner = getRowsWinner(array, 2);
		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|x|o|x
      x|o|x|o
      x|o|x̶|x̶
      o|x|o|o"
    `);
	});

	it('last row', () => {
		const array = [
			['o', 'x', 'o', 'x'],
			['x', 'o', 'x', 'o'],
			['o', 'x', 'x', 'x']
		];
		const winner = getRowsWinner(array, 3);
		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|x|o|x
      x|o|x|o
      o|x̶|x̶|x̶"
    `);
	});

	it('no winner', () => {
		const array = [
			['o', 'x', 'o', 'x'],
			['x', 'o', 'x', 'o'],
			['x', 'o', 'x', 'x'],
			['x', 'o', 'x', 'x']
		];
		const winner = getRowsWinner(array, 3);
		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|x|o|x
      x|o|x|o
      x|o|x|x
      x|o|x|x"
    `);
	});

	it('minimal lengths', () => {
		const array = [
			['o', 'x'],
			['x', 'o']
		];

		expect(printField(array, getRowsWinner(array, 0).indexes)).toMatchInlineSnapshot(`
        "o|x
        x|o"
      `);

		expect(printField(array, getRowsWinner(array, 1).indexes)).toMatchInlineSnapshot(`
      "o̶|x
      x|o"
    `);
	});
});
