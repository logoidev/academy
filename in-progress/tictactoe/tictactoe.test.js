import { vi, beforeAll, describe, it, expect, afterAll } from "vitest";
import {
  printField,
  checkWinGame,
  getFilledSpaces,
  fillArray,
} from "./tictactoe.js";

describe("TicTacToe", () => {
  beforeAll(() => {
    console.log = vi.fn();
  });

  afterAll(() => {
    console.log.mockRestore();
  });

  it("finds winner in rows", () => {
    const array = [
      ["o", "o", "x"],
      ["x", "x", "x"],
      ["o", "x", "o"],
    ].flat();

    expect(checkWinGame(array)).toBe(true);
    expect(console.log).toHaveBeenCalledWith("x wins");
    expect(printField(array)).toMatchInlineSnapshot(`
      "o|o|x
      x̶|x̶|x̶
      o|x|o"
    `);
  });

  it("finds winner in columns", () => {
    const array = [
      ["x", "o", "o"],
      ["o", "x", "o"],
      ["x", "x", "o"],
    ].flat();

    expect(checkWinGame(array)).toBe(true);
    expect(printField(array)).toMatchInlineSnapshot(`
      "x|o|o̶
      o|x|o̶
      x|x|o̶"
    `);
  });

  it("finds winner in first diagonal", () => {
    const array = [
      ["x", "x", "o"],
      ["x", "x", "o"],
      ["o", "o", "x"],
    ].flat();

    expect(checkWinGame(array)).toBe(true);
    expect(printField(array)).toMatchInlineSnapshot(`
      "x̶|x|o
      x|x̶|o
      o|o|x̶"
    `);
  });

  it("finds winner in second diagonal", () => {
    const array = [
      ["x", "x", "o"],
      ["x", "o", "o"],
      ["o", "o", "x"],
    ].flat();

    expect(checkWinGame(array)).toBe(true);
    expect(printField(array)).toMatchInlineSnapshot(`
      "x|x|o̶
      x|o̶|o
      o̶|o|x"
    `);
  });

  it("finds a draw", () => {
    const array = [
      ["o", "x", "o"],
      ["x", "o", "o"],
      ["x", "o", "x"],
    ].flat();

    expect(checkWinGame(array)).toBe(false);
    expect(printField(array)).toMatchInlineSnapshot(`
      "o|x|o
      x|o|o
      x|o|x"
    `);
  });
});
