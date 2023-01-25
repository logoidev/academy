// @vitest-environment jsdom
import { describe, it, vi, expect, beforeAll, beforeEach } from "vitest";

// import { mockCanvasGetter } from "./__mocks__/canvas";

import { Field } from "../Field.js";
import { SHAPES, L, I, O, S, Z, T, J } from "../Shapes.js";

describe("Tetris - logic", () => {
  // beforeAll(() => mockCanvasGetter());

  const CELL_SIZE = 10;

  let field = null;

  beforeEach(() => {
    field = new Field(null, 50, 40, CELL_SIZE);
  });

  describe("adds shapes to the field", () => {
    it("creates empty field", () => {
      expect(field.toString()).toMatchInlineSnapshot(`
      "0|0|0|0|0
      0|0|0|0|0
      0|0|0|0|0
      0|0|0|0|0"
    `);
    });

    it("L", () => {
      const shape = new L(null, { x: 1, y: 0 }, CELL_SIZE);
      expect(shape.toString()).toMatchInlineSnapshot(`
        "0|0|1
        1|1|1"
      `);

      expect(shape.getBottomCoordinates()).toEqual([
        { x: 1, y: 1 },
        { x: 2, y: 1 },
        { x: 3, y: 1 },
      ]);
      const clone = shape.clone();
      expect(shape instanceof L).toBe(true);

      field.addShape(shape);

      expect(field.toString()).toMatchInlineSnapshot(`
        "0|0|0|0|0
        0|0|0|0|0
        0|0|0|1|0
        0|1|1|1|0"
      `);
    });

    it("I", () => {
      const shape = new I(null, { x: 1, y: 0 }, CELL_SIZE);
      expect(shape.toString()).toMatchInlineSnapshot(`
        "1|1|1|1"
      `);

      expect(shape.getBottomCoordinates()).toEqual([
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0 },
      ]);

      field.addShape(shape);

      expect(field.toString()).toMatchInlineSnapshot(`
        "0|0|0|0|0
        0|0|0|0|0
        0|0|0|0|0
        0|1|1|1|1"
      `);
    });

    it("O", () => {
      const shape = new O(null, { x: 2, y: 0 }, CELL_SIZE);
      expect(shape.toString()).toMatchInlineSnapshot(`
        "1|1
        1|1"
      `);

      expect(shape.getBottomCoordinates()).toEqual([
        { x: 2, y: 1 },
        { x: 3, y: 1 },
      ]);

      field.addShape(shape);

      expect(field.toString()).toMatchInlineSnapshot(`
        "0|0|0|0|0
        0|0|0|0|0
        0|0|1|1|0
        0|0|1|1|0"
      `);
    });

    it("S", () => {
      const shape = new S(null, { x: 1, y: 1 }, CELL_SIZE);
      expect(shape.toString()).toMatchInlineSnapshot(`
        "0|1|1
        1|1|0"
      `);

      expect(shape.getBottomCoordinates()).toEqual([
        { x: 1, y: 2 },
        { x: 2, y: 2 },
        { x: 3, y: 1 },
      ]);

      field.addShape(shape);

      expect(field.toString()).toMatchInlineSnapshot(`
        "0|0|0|0|0
        0|0|0|0|0
        0|0|1|1|0
        0|1|1|0|0"
      `);
    });

    it("Z", () => {
      const shape = new Z(null, { x: 0, y: 0 }, CELL_SIZE);
      expect(shape.toString()).toMatchInlineSnapshot(`
        "1|1|0
        0|1|1"
      `);

      expect(shape.getBottomCoordinates()).toEqual([
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ]);

      field.addShape(shape);

      expect(field.toString()).toMatchInlineSnapshot(`
        "0|0|0|0|0
        0|0|0|0|0
        1|1|0|0|0
        0|1|1|0|0"
      `);
    });

    it("T", () => {
      const shape = new T(null, { x: 0, y: 0 }, CELL_SIZE);
      expect(shape.toString()).toMatchInlineSnapshot(`
        "0|1|0
        1|1|1"
      `);

      expect(shape.getBottomCoordinates()).toEqual([
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
      ]);

      field.addShape(shape);

      expect(field.toString()).toMatchInlineSnapshot(`
        "0|0|0|0|0
        0|0|0|0|0
        0|1|0|0|0
        1|1|1|0|0"
      `);
    });

    it("J", () => {
      const shape = new J(null, { x: 2, y: 0 }, CELL_SIZE);
      expect(shape.toString()).toMatchInlineSnapshot(`
        "1|0|0
        1|1|1"
      `);

      expect(shape.getBottomCoordinates()).toEqual([
        { x: 2, y: 1 },
        { x: 3, y: 1 },
        { x: 4, y: 1 },
      ]);

      field.addShape(shape);

      expect(field.toString()).toMatchInlineSnapshot(`
        "0|0|0|0|0
        0|0|0|0|0
        0|0|1|0|0
        0|0|1|1|1"
      `);
    });
  });

  describe("utility functions", () => {
    it("clone + equals", () => {
      const shape = new L(null, undefined, CELL_SIZE);

      shape.move(1, 1);
      const clone = shape.clone();
      clone.move(0, 1);
      shape.move(0, 1);

      expect(shape.equals(clone)).toBe(true);
    });
  });

  describe("shapes can be rotated", () => {
    SHAPES.forEach((Shape) => {
      it(Shape.name, () => {
        const shape = new Shape(null, undefined, CELL_SIZE);

        new Array(4).fill(1).forEach(() => {
          shape.rotate();
          expect(shape.toString()).toMatchSnapshot();
        });
      });
    });
  });
});
