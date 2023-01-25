import { drawRect } from './canvas.js';
import { Info } from './Info.js';
import { Shapes } from './Shapes.js';

export function Field(context, widthPx, heightPx, cellSizePx, infoWidthPx) {
	this.context = context;
	this.widthPx = widthPx;
	this.heightPx = heightPx;
	this.cellSizePx = cellSizePx;
	this.shapes = new Shapes(this.context, this.cellSizePx);
	this.info = new Info(this.context, infoWidthPx, this.widthPx);

	this.width = Math.floor(this.widthPx / this.cellSizePx);
	this.height = Math.floor(this.heightPx / this.cellSizePx);
	this.currentShape = null;

	this.shadow = null;

	this.cells = new Array(this.height).fill(1).map(() => new Array(this.width).fill(0));

	this.initialize = () => {
		this.info.setNextShape(this.shapes.getRandomShape());
		this.setNewShape();
	};

	this.setNewShape = () => {
		this.setCurrentShape(this.info.nextShape.clone());
		this.info.setNextShape(this.shapes.getRandomShape());
	};

	this.draw = () => {
		this.context.clearRect(0, 0, this.widthPx, this.heightPx);

		this.cells.forEach((row, y) =>
			row.forEach((cell, x) => {
				drawRect(
					this.context,
					x * this.cellSizePx,
					y * this.cellSizePx,
					this.cellSizePx,
					this.cellSizePx,
					cell,
					2
				);
			})
		);

		this.currentShape.draw();
		this.drawShadow();
		this.info.draw();
	};

	this.update = () => {
		this.moveCurrentShape(0, 1);

		let linesCleared = 0;
		for (let y = this.height - 1; y >= 0; y--) {
			if (this.cells[y].every(Boolean)) {
				linesCleared++;
				for (let yy = y; yy > 0; yy--) {
					this.cells[yy] = [...this.cells[yy - 1]];
				}
				y = this.height - 1;
			}
		}

		if (linesCleared > 0) {
			const scores = { 1: 200, 2: 500, 3: 750, 4: 1000 };
			this.info.addScore(scores[linesCleared]);
		}

		linesCleared = 0;
	};

	this.toString = () =>
		this.cells.map((rows) => rows.map((cell) => (cell ? 1 : 0)).join('|')).join('\n');

	this.setCurrentShape = (shape) => {
		this.currentShape = shape;
		this.currentShape.move(Math.floor(this.width / 2) - 1, 0);
	};

	this.drawShadow = () => {
		this.shadow = this.getShapeAtTheBottom(this.currentShape);
		this.shadow.draw(0.25);
	};

	this.getShapeAtTheBottom = (shape) => {
		const clone = shape.clone();

		let canMoveDown = true;

		do {
			const bottomCoordinates = clone.getBottomCoordinates();
			canMoveDown = bottomCoordinates.every(
				({ x, y }) => this.cells[y + 1] && this.cells[y + 1][x] === 0
			);
			if (canMoveDown) {
				clone.move(0, 1);
			}
		} while (canMoveDown);

		return clone;
	};

	this.addShape = (shape) => {
		const clone = this.getShapeAtTheBottom(shape);

		clone.cells.forEach((shapeRow, shapeY) =>
			shapeRow.forEach((shapeCell, shapeX) => {
				if (shapeCell) {
					this.cells[shapeY + clone.offset.y][shapeX + clone.offset.x] = clone.color;
				}
			})
		);
	};

	this.placeCurrentShape = () => {
		this.addShape(this.currentShape);
		this.setNewShape();
	};

	this.moveCurrentShape = (x = 0, y = 0) => {
		if (
			x &&
			this.currentShape.offset.x + x >= 0 &&
			this.currentShape.offset.x + this.currentShape.width() + x <= this.width
		) {
			this.currentShape.move(x, 0);
		}

		if (y) {
			this.currentShape.move(0, y);
		}

		if (this.currentShape.equals(this.shadow)) {
			this.placeCurrentShape();
		}
	};

	this.rotateCurrentShape = () => {
		this.currentShape.rotate();
	};
}
