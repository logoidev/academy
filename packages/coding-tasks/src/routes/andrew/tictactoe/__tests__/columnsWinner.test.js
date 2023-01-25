import { describe, it, expect } from 'vitest';
import { printField } from '../tictactoe.js';
import { getColumnsWinner } from '../getWinner';

describe('getColumnsWinner', () => {
	it('first column', () => {
		const array = [
			['o', 'x', 'o', 'x'],
			['x', 'o', 'o', 'o'],
			['x', 'o', 'x', 'x'],
			['x', 'x', 'o', 'o']
		];
		const winner = getColumnsWinner(array, 3);
		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|x|o|x
      x̶|o|o|o
      x̶|o|x|x
      x̶|x|o|o"
    `);
	});

	it('second column', () => {
		const array = [
			['o', 'x', 'o', 'x'],
			['x', 'o', 'x', 'o'],
			['o', 'o', 'o', 'x'],
			['x', 'x', 'x', 'o']
		];
		const winner = getColumnsWinner(array, 2);
		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|x|o|x
      x|o̶|x|o
      o|o̶|o|x
      x|x|x|o"
    `);
	});

	it('last column', () => {
		const array = [
			['o', 'x', 'o'],
			['x', 'o', 'x'],
			['o', 'o', 'x'],
			['x', 'x', 'x']
		];
		const winner = getColumnsWinner(array, 3);
		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|x|o
      x|o|x̶
      o|o|x̶
      x|x|x̶"
    `);
	});

	it('no winner', () => {
		const array = [
			['o', 'x', 'o', 'x'],
			['o', 'o', 'x', 'o'],
			['x', 'x', 'o', 'x'],
			['x', 'o', 'x', 'x']
		];
		const winner = getColumnsWinner(array, 3);
		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "o|x|o|x
      o|o|x|o
      x|x|o|x
      x|o|x|x"
    `);
	});

	it('minimal lengths', () => {
		const array = [
			['o', 'x'],
			['x', 'o']
		];

		expect(printField(array, getColumnsWinner(array, 0).indexes)).toMatchInlineSnapshot(`
        "o|x
        x|o"
      `);

		expect(printField(array, getColumnsWinner(array, 1).indexes)).toMatchInlineSnapshot(`
      "o̶|x
      x|o"
    `);
	});
});
