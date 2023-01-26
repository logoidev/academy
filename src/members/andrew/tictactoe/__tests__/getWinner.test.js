import { describe, it, expect } from 'vitest';
import { printField } from '../tictactoe.js';
import { getWinner } from '../getWinner';

describe('getWinner', () => {
	it('finds winner in rows', () => {
		const array = [
			['x', 'o', 'o', 'x'],
			['x', 'x', 'o', 'o'],
			['o', 'x', 'x', 'x'],
			['x', 'o', 'x', 'o']
		];

		const winner = getWinner(array, 3);

		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "x|o|o|x
      x|x|o|o
      o|x̶|x̶|x̶
      x|o|x|o"
    `);
	});

	it('finds winner in columns', () => {
		const array = [
			['o', 'x', 'o', 'x'],
			['x', 'x', 'o', 'o'],
			['o', 'x', 'x', 'o'],
			['x', 'o', 'x', 'x']
		];

		const winner = getWinner(array, 3);

		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|x̶|o|x
      x|x̶|o|o
      o|x̶|x|o
      x|o|x|x"
    `);
	});

	it('finds winner in diagonals', () => {
		const array = [
			['o', 'o', 'x', 'x'],
			['x', 'x', 'o', 'x'],
			['o', 'o', 'x', 'o'],
			['x', 'o', 'x', 'o']
		];

		const winner = getWinner(array, 3);

		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|o̶|x|x
      x|x|o̶|x
      o|o|x|o̶
      x|o|x|o"
    `);
	});

	it('finds winner in inverse diagonals', () => {
		const array = [
			['o', 'o', 'x', 'x'],
			['o', 'x', 'o', 'o'],
			['x', 'o', 'o', 'x'],
			['x', 'o', 'x', 'o']
		];

		const winner = getWinner(array, 3);

		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|o|x̶|x
      o|x̶|o|o
      x̶|o|o|x
      x|o|x|o"
    `);
	});

	it('finds draw', () => {
		const array = [
			['o', 'o', 'x', 'x'],
			['x', 'x', 'o', 'o'],
			['o', 'o', 'x', 'x'],
			['x', 'o', 'x', 'o']
		];

		const winner = getWinner(array, 3);

		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|o|x|x
      x|x|o|o
      o|o|x|x
      x|o|x|o"
    `);
	});

	it('minimal lengths', () => {
		const array = [
			['o', 'x'],
			['x', 'o']
		];

		expect(printField(array, getWinner(array, 0).indexes)).toMatchInlineSnapshot(`
        "o|x
        x|o"
      `);

		expect(printField(array, getWinner(array, 1).indexes)).toMatchInlineSnapshot(`
        "o̶|x
        x|o"
      `);
	});
});
