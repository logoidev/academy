import { drawRect } from "./canvas.js";
import { rotateMatrix, twoDimensionalArrayEquals } from "./utils.js";

export function Shape(context, offset, cellSizePx, color, cells = []) {
  this.context = context;
  this.cellSizePx = cellSizePx;
  this.cells = cells;
  this.offset = offset || { x: 0, y: 0 };
  this.color = color;

  this.width = () => this.cells[0].length;

  this.height = () => this.cells.length;

  this.move = (x, y) => {
    this.offset.x += x;
    this.offset.y += y;
  };

  this.draw = (opacity, extraOffset, drawEmpty = true) => {
    this.cells.forEach((row, y) =>
      row.forEach((cell, x) => {
        if (!drawEmpty && !cell) {
          return;
        }
        drawRect(
          this.context,
          this.offset.x * this.cellSizePx +
            x * this.cellSizePx +
            (extraOffset?.x || 0),
          this.offset.y * this.cellSizePx +
            y * this.cellSizePx +
            (extraOffset?.y || 0),
          this.cellSizePx,
          this.cellSizePx,
          cell && this.color,
          2,
          opacity
        );
      })
    );
  };

  this.toString = () => this.cells.map((row) => row.join("|")).join("\n");

  this.getBottomCoordinates = () => {
    const result = [];
    for (let x = 0; x < this.width(); x++) {
      for (let y = this.height() - 1; y >= 0; y--) {
        if (this.cells[y][x] === 1) {
          result.push({ x: x + this.offset.x, y: y + this.offset.y });
          break;
        }
      }
    }
    return result;
  };

  this.clone = () =>
    new Shape(
      this.context,
      { ...this.offset },
      this.cellSizePx,
      this.color,
      this.cells.map((rows) => [...rows])
    );

  this.equals = (shape) =>
    this.offset.x === shape.offset.x &&
    this.offset.y === shape.offset.y &&
    twoDimensionalArrayEquals(this.cells, shape.cells);

  this.rotate = () => {
    this.cells = rotateMatrix(this.cells);
  };
}
