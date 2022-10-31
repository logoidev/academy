import { describe, it, expect } from "vitest";
import { printField } from "../tictactoe.js";
import { getInverseDiagonal, getDiagonalsWinner } from "../getWinner";

describe("getInverseDiagonal", () => {
  it("diagonals", () => {
    const array = [
      ["x", "o", "o", "x"],
      ["o", "o", "o", "o"],
      ["x", "x", "o", "x"],
      ["o", "o", "o", "x"],
    ];

    const winner = getDiagonalsWinner(array, 3);
    expect(winner).toEqual({
      indexes: ["1|3", "2|2", "3|1"],
      winner: "o",
    });
    expect(printField(array, winner.indexes)).toMatchInlineSnapshot(`
      "x|o|o|x
      o|o|o|o̶
      x|x|o̶|x
      o|o̶|o|x"
    `);
  });

  describe("getDiagonalWinner", () => {
    it("main diagonal", () => {
      const array = [
        ["x", "o", "o", "x"],
        ["o", "o", "x", "o"],
        ["x", "x", "o", "x"],
        ["o", "x", "o", "x"],
      ];

      expect(getInverseDiagonal(array, 0, 3)).toEqual({
        indexes: ["0|3", "1|2", "2|1"],
        winner: "x",
      });
      expect(getInverseDiagonal(array, 0, 2)).toEqual({
        indexes: ["0|3", "1|2"],
        winner: "x",
      });
    });

    it("shifted diagonal - positive ", () => {
      const array = [
        ["x", "o", "o", "x"],
        ["o", "o", "x", "o"],
        ["x", "x", "o", "x"],
        ["o", "o", "x", "x"],
      ];

      expect(getInverseDiagonal(array, 1, 3)).toEqual({
        indexes: ["1|3", "2|2", "3|1"],
        winner: "o",
      });
      expect(getInverseDiagonal(array, 2, 3)).toEqual({
        winner: null,
        indexes: [],
      });
      expect(getInverseDiagonal(array, 4, 3)).toMatchObject({
        winner: null,
        indexes: [],
      });
    });

    it("shifted diagonal - negative ", () => {
      const array = [
        ["x", "o", "o", "x"],
        ["o", "o", "x", "o"],
        ["o", "x", "o", "x"],
        ["o", "x", "o", "x"],
      ];

      expect(getInverseDiagonal(array, -1, 3)).toEqual({
        indexes: ["0|2", "1|1", "2|0"],
        winner: "o",
      });
      expect(getInverseDiagonal(array, -1, -4)).toEqual({
        winner: null,
        indexes: [],
      });
      expect(getInverseDiagonal(array, -2, 2)).toEqual({
        indexes: ["0|1", "1|0"],
        winner: "o",
      });
      expect(getInverseDiagonal(array, -4, 3)).toEqual({
        winner: null,
        indexes: [],
      });
    });

    it("minimal lengths", () => {
      const array = [
        ["o", "x"],
        ["x", "o"],
      ];
  
      expect(printField(array, getInverseDiagonal(array, 1, 0).indexes))
        .toMatchInlineSnapshot(`
          "o|x
          x|o"
        `);
  
      expect(printField(array, getInverseDiagonal(array, 1, 1).indexes))
        .toMatchInlineSnapshot(`
          "o|x
          x|o̶"
        `);
    });
  });
});
