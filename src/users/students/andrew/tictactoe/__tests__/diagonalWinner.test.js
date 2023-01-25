import { describe, it, expect } from 'vitest';
import { printField } from '../tictactoe.js';
import { getDiagonalWinner, getDiagonalsWinner } from '../getWinner';

describe('getDiagonalsWinner', () => {
	it('diagonals', () => {
		const array = [
			['x', 'x', 'o', 'x'],
			['x', 'o', 'x', 'o'],
			['x', 'o', 'x', 'x'],
			['o', 'x', 'x', 'o']
		];

		const winner = getDiagonalsWinner(array, 3);
		expect(winner).toEqual({
			indexes: ['0|1', '1|2', '2|3'],
			winner: 'x'
		});
		expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "x|x̶|o|x
      x|o|x̶|o
      x|o|x|x̶
      o|x|x|o"
    `);
	});

	describe('getDiagonalWinner', () => {
		it('main diagonal', () => {
			const array = [
				['o', 'x', 'o', 'x'],
				['x', 'x', 'x', 'o'],
				['x', 'o', 'x', 'x'],
				['o', 'x', 'x', 'x']
			];

			expect(getDiagonalWinner(array, 0, 3)).toEqual({
				indexes: ['1|1', '2|2', '3|3'],
				winner: 'x'
			});
			expect(getDiagonalWinner(array, 0, 2)).toEqual({
				indexes: ['1|1', '2|2'],
				winner: 'x'
			});
		});

		it('shifted diagonal - positive', () => {
			const array = [
				['o', 'x', 'o', 'x'],
				['x', 'x', 'x', 'o'],
				['x', 'o', 'x', 'x'],
				['o', 'x', 'x', 'x']
			];

			expect(getDiagonalWinner(array, 1, 3)).toEqual({
				indexes: ['0|1', '1|2', '2|3'],
				winner: 'x'
			});
			expect(getDiagonalWinner(array, 2, 3)).toMatchObject({
				winner: null,
				indexes: []
			});
			expect(getDiagonalWinner(array, 4, 3)).toMatchObject({
				winner: null,
				indexes: []
			});
		});

		it('shifted diagonal - negative', () => {
			const array = [
				['o', 'x', 'o', 'x'],
				['o', 'x', 'x', 'o'],
				['x', 'o', 'x', 'x'],
				['o', 'x', 'o', 'x']
			];

			expect(getDiagonalWinner(array, -1, 3)).toEqual({
				indexes: ['1|0', '2|1', '3|2'],
				winner: 'o'
			});
			expect(getDiagonalWinner(array, -1, 4)).toMatchObject({
				winner: null,
				indexes: []
			});
			expect(getDiagonalWinner(array, -2, 2)).toEqual({
				indexes: ['2|0', '3|1'],
				winner: 'x'
			});
			expect(getDiagonalWinner(array, -4, 3)).toMatchObject({
				winner: null,
				indexes: []
			});
		});

		it('minimal lengths', () => {
			const array = [
				['o', 'x'],
				['x', 'o']
			];

			expect(printField(array, getDiagonalWinner(array, -1, 0).indexes)).toMatchInlineSnapshot(`
          "o|x
          x|o"
        `);

			expect(printField(array, getDiagonalWinner(array, 1, 1).indexes)).toMatchInlineSnapshot(`
          "o|x̶
          x|o"
        `);
		});
	});
});
