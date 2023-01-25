import { drawRect } from './canvas.js';

const LOCAL_STORAGE_HIGH_SCORE_KEY = 'teteris-high-score';

export function Info(context, infoWidthPx, fieldWidthPx) {
	this.context = context;
	this.infoWidthPx = infoWidthPx;
	this.fieldWidthPx = fieldWidthPx;
	this.currentScore = 0;
	this.highScore = +(localStorage.getItem(LOCAL_STORAGE_HIGH_SCORE_KEY) || 0);
	this.nextShape = null;

	this.draw = () => {
		this.context.clearRect(
			this.fieldWidthPx,
			0,
			this.infoWidthPx,
			this.context.canvas.clientHeight
		);

		drawRect(
			this.context,
			this.fieldWidthPx,
			0,
			this.infoWidthPx,
			this.context.canvas.clientHeight,
			undefined,
			2
		);

		this.drawCurrentScore();
		this.drawHighScore();
		this.drawNextShape();
	};

	this.setNextShape = (nextShape) => {
		this.nextShape = nextShape;
	};

	this.drawScore = (score, prefix, line) => {
		const fontSize = 24;
		this.context.font = `${fontSize}px Courier`;
		this.context.fillStyle = 'black';
		this.context.fillText(`${prefix}:`, this.fieldWidthPx + 10, fontSize * line);
		this.context.fillText(score, this.fieldWidthPx + 10, fontSize * (line + 1));
	};

	this.drawCurrentScore = () => this.drawScore(this.currentScore, 'Score', 1);

	this.drawHighScore = () => this.drawScore(this.highScore, 'High score', 3);

	this.drawNextShape = () => {
		this.drawScore('', 'Next shape', 6);
		this.nextShape.draw(1, { x: this.fieldWidthPx + 10, y: 160 }, false);
	};

	this.addScore = (score) => {
		this.currentScore += score;

		if (this.currentScore > this.highScore) {
			this.highScore = this.currentScore;
			localStorage.setItem(LOCAL_STORAGE_HIGH_SCORE_KEY, this.highScore);
		}
	};
}
