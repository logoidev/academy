import { Shape } from "./Shape.js";
import { getRandomInt } from "./utils.js";

export function I(context, offset, cellSizePx) {
  Shape.call(this, context, offset, cellSizePx, "cyan", [[1, 1, 1, 1]]);
}

export function O(context, offset, cellSizePx) {
  Shape.call(this, context, offset, cellSizePx, "yellow", [
    [1, 1],
    [1, 1],
  ]);
}

export function S(context, offset, cellSizePx) {
  Shape.call(this, context, offset, cellSizePx, "red", [
    [0, 1, 1],
    [1, 1, 0],
  ]);
}

export function Z(context, offset, cellSizePx) {
  Shape.call(this, context, offset, cellSizePx, "green", [
    [1, 1, 0],
    [0, 1, 1],
  ]);
}

export function T(context, offset, cellSizePx) {
  Shape.call(this, context, offset, cellSizePx, "purple", [
    [0, 1, 0],
    [1, 1, 1],
  ]);
}

export function L(context, offset, cellSizePx) {
  Shape.call(this, context, offset, cellSizePx, "orange", [
    [0, 0, 1],
    [1, 1, 1],
  ]);
}

export function J(context, offset, cellSizePx) {
  Shape.call(this, context, offset, cellSizePx, "pink", [
    [1, 0, 0],
    [1, 1, 1],
  ]);
}

export const SHAPES = [I, O, S, Z, T, L, J];

export function Shapes(context, cellSizePx) {
  this.context = context;
  this.shapes = SHAPES;
  this.getRandomShape = () => {
    const index = getRandomInt(this.shapes.length);
    const ShapeConstructor = this.shapes[index];
    return new ShapeConstructor(this.context, { x: 0, y: 0 }, cellSizePx);
  };
}
