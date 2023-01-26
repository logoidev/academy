// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest';
import { Field, checkSequence } from '../Field';

describe('Connect four test', () => {
	const field = new Field(6, 7, 2, 3);

	beforeEach(() => field.clear());

	describe('single sequence', () => {
		it('creates empty field', () => {
			expect(checkSequence(field.column(0), 4)).toEqual({
				streak: 0,
				win: false,
				winner: 0
			});
		});

		it('one chip', () => {
			field.placeAt(0, 0, 0);

			expect(checkSequence(field.column(0), 4)).toEqual({
				streak: 1,
				win: false,
				winner: 0
			});
		});

		it('two chips', () => {
			field.placeAt(0, 0, 0);
			field.placeAt(0, 1, 0);

			expect(checkSequence(field.column(0), 3)).toEqual({
				streak: 2,
				win: false,
				winner: 0
			});
		});

		it('win', () => {
			field.placeAt(0, 1, 1);
			field.placeAt(0, 2, 1);
			field.placeAt(0, 3, 1);

			expect(checkSequence(field.column(0), 3)).toEqual({
				streak: 3,
				win: true,
				winner: 1
			});
		});
	});

	describe('field.toString', () => {
		it('logs empty field', () => {
			expect(field.toString()).toMatchInlineSnapshot(
				`
				"⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪"
			`
			);
		});

		it('logs filled field', () => {
			field.placeAt(0, 5, 1);

			expect(field.toString()).toMatchInlineSnapshot(
				`
				"⚪|⚪|⚪|⚪|⚪|🟡|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪"
			`
			);
		});

		it('matches field', () => {
			field.replayMoves([0, 1, 0, 1, 1, 4]);

			expect(field.toString()).toMatchInlineSnapshot(
				`
				"⚪|⚪|⚪|⚪|⚪|🔴|🔴
				⚪|⚪|⚪|⚪|🔴|🟡|🟡
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|🟡
				⚪|⚪|⚪|⚪|⚪|⚪|⚪"
			`
			);
		});
	});

	describe('columns win', () => {
		it('creates empty field', () => {
			expect(field.checkColumnsWin()).toBeUndefined();
		});

		it('win', () => {
			field.placeAt(2, 3, 1);
			field.placeAt(2, 4, 1);
			field.placeAt(2, 5, 1);

			expect(field.toString()).toMatchInlineSnapshot(`
				"⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|🟡|🟡|🟡|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪"
			`);
			expect(field.checkColumnsWin()).toEqual({
				streak: 3,
				win: true,
				winner: 1
			});
		});
	});

	describe('rows win', () => {
		it('creates empty field', () => {
			expect(field.checkRowsWin()).toBeUndefined();
		});

		it('win', () => {
			field.placeAt(2, 0, 1);
			field.placeAt(3, 0, 1);
			field.placeAt(4, 0, 1);
			expect(field.checkRowsWin()).toEqual({
				streak: 3,
				win: true,
				winner: 1
			});
		});
	});

	describe('diagonals win', () => {
		it('creates empty field', () => {
			expect(field.checkDiagonalsWin()).toBeUndefined();
		});

		it('central win', () => {
			field.placeAt(0, 0, 1);
			field.placeAt(1, 1, 1);
			field.placeAt(2, 2, 1);

			expect(field.toString()).toMatchInlineSnapshot(`
				"🟡|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|🟡|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|🟡|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪"
			`);
			expect(field.checkDiagonalsWin()).toEqual({
				streak: 3,
				win: true,
				winner: 1
			});
		});

		it('negative offset', () => {
			field.placeAt(2, 1, 0);
			field.placeAt(3, 2, 0);
			field.placeAt(4, 3, 0);
			field.placeAt(5, 4, 0);

			expect(field.toString()).toMatchInlineSnapshot(`
				"⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|🔴|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|🔴|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|🔴|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|🔴|⚪|⚪"
			`);
			expect(field.checkDiagonalsWin()).toEqual({
				streak: 4,
				win: true,
				winner: 0
			});
		});

		it('reverse central win', () => {
			field.placeAt(2, 4, 0);
			field.placeAt(3, 3, 0);
			field.placeAt(4, 2, 0);
			field.placeAt(5, 1, 0);

			expect(field.toString()).toMatchInlineSnapshot(`
				"⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|⚪|⚪|⚪
				⚪|⚪|⚪|⚪|🔴|⚪|⚪
				⚪|⚪|⚪|🔴|⚪|⚪|⚪
				⚪|⚪|🔴|⚪|⚪|⚪|⚪
				⚪|🔴|⚪|⚪|⚪|⚪|⚪"
			`);
			expect(field.checkReverseDiagonalsWin()).toEqual({
				streak: 4,
				win: true,
				winner: 0
			});
		});
	});
});
