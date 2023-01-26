import { vi, beforeAll, describe, it, expect, afterAll, afterEach } from 'vitest';
import { checkWinGame } from './tictactoe.js';

describe('checkWinGame', () => {
	beforeAll(() => {
		console.log = vi.fn();
	});

	afterAll(() => {
		console.log.mockRestore();
	});

	afterEach(() => {
		console.log.mockReset();
	});

	it('finds winner', () => {
		const array = [
			['o', 'x', 'x', 'x'],
			['x', '-', 'o', '-'],
			['o', 'o', 'x', 'x'],
			['x', '-', 'x', 'o']
		];

		expect(checkWinGame(array, 3)).toBe(true);
		expect(console.log).toHaveBeenCalledWith('x wins');
		expect(console.log).toHaveBeenCalledTimes(2);

		const printedField = console.log.calls[0][0];
		expect(printedField).toMatchInlineSnapshot(`
      "o|x̶|x̶|x̶
      x|-|o|-
      o|o|x|x
      x|-|x|o"
    `);
	});

	it('empty field', () => {
		const array = [
			['-', '-', '-'],
			['-', '-', '-'],
			['-', '-', '-']
		];

		expect(checkWinGame(array, 3)).toBe(false);
		expect(console.log).toHaveBeenCalledTimes(1);

		const printedField = console.log.calls[0][0];
		expect(printedField).toMatchInlineSnapshot(`
      "-|-|-
      -|-|-
      -|-|-"
    `);
	});

	it('draw', () => {
		const array = [
			['x', 'o', 'x'],
			['o', 'x', 'o'],
			['o', 'x', 'o']
		];

		expect(checkWinGame(array, 3)).toBe(false);
		expect(console.log).toHaveBeenCalledWith('Draw');
		expect(console.log).toHaveBeenCalledTimes(2);

		const printedField = console.log.calls[0][0];
		expect(printedField).toMatchInlineSnapshot(`
      "x|o|x
      o|x|o
      o|x|o"
    `);
	});
});
