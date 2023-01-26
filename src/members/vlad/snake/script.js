const WIDTH = 800;
const HEIGHT = 400;

const CELL_SIZE = 20;
const INITIAL_SNAKE_LENGTH = 3;

let SNAKE = new Array(INITIAL_SNAKE_LENGTH)
	.fill(1)
	.map((_, i) => ({ x: (INITIAL_SNAKE_LENGTH - i) * CELL_SIZE, y: 0 }));

let APPLES = [{ x: 60, y: 20 }];

let context = null;
let speed = null;
let direction = null;

const fillRect = (x, y, w, h, color = 'green') => {
	context.fillStyle = color;
	context.fillRect(x, y, w, h);
};

const clearScreen = () => {
	context.clearRect(0, 0, WIDTH, HEIGHT);
};

const drawRect = (x, y, w, h) => {
	context.beginPath();
	context.rect(x, y, w, h);
	context.stroke();
	context.closePath();
};

const drawCells = () => {
	for (let x = 0; x < WIDTH; x += CELL_SIZE) {
		for (let y = 0; y < HEIGHT; y += CELL_SIZE) {
			drawRect(x, y, CELL_SIZE, CELL_SIZE);
		}
	}
};

const drawSnake = (source = SNAKE, color) => {
	for (const { x, y } of source) {
		fillRect(x, y, CELL_SIZE, CELL_SIZE, color);
	}
};

const drawApples = () => drawSnake(APPLES, 'red');

const getUpdatedCell = (direction, prevX, prevY) => {
	switch (direction) {
		case 'up': {
			let y = prevY - CELL_SIZE;
			if (y < 0) {
				y = HEIGHT - CELL_SIZE;
			}
			return { x: prevX, y };
		}
		case 'down': {
			let y = prevY + CELL_SIZE;
			if (y > HEIGHT) {
				y = 0;
			}
			return { x: prevX, y };
		}
		case 'left': {
			let x = prevX - CELL_SIZE;
			if (x < 0) {
				x = WIDTH - CELL_SIZE;
			}
			return { x, y: prevY };
		}
		case 'right': {
			let x = prevX + CELL_SIZE;
			if (x > WIDTH) {
				x = 0;
			}
			return { x, y: prevY };
		}
		default:
			throw new Error('Unknown direction');
	}
};

const updateSnake = (direction) => {
	SNAKE.pop();
	const head = getUpdatedCell(direction, SNAKE[0].x, SNAKE[0].y);
	SNAKE = [head, ...SNAKE];
	//   TODO: Add self-collision check
};

const checkCollision = (a, b) => a.x === b.x && a.y === b.y;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const updateApples = () => {
	APPLES = APPLES.map((apple) => {
		const isCollision = checkCollision(apple, SNAKE[0]);
		if (isCollision) {
			SNAKE.unshift(apple);
			const w = WIDTH / CELL_SIZE;
			const h = HEIGHT / CELL_SIZE;
			const x = getRandomInt(w);
			const y = getRandomInt(h);
			//   TODO: Prevent from spawning apples within the body of the snake
			return { x: x * CELL_SIZE, y: y * CELL_SIZE };
		}
		return apple;
	});
};

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const initCanvas = () => {
	const canvas = document.getElementById('canvas');
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	context = canvas.getContext('2d');
	return { canvas, context };
};

export const drawFrame = (direction) => {
	clearScreen();
	drawRect(0, 0, WIDTH, HEIGHT);
	drawCells();

	updateSnake(direction);
	drawSnake();

	updateApples();
	drawApples();
};

const getDirectionAndIgnoreOpposite = (newDirection, oldDirection) => {
	const opposites = [
		['up', 'down'],
		['left', 'right']
	];
	if (
		newDirection === direction ||
		opposites.some((opposite) => opposite.includes(direction) && opposite.includes(newDirection))
	) {
		return direction;
	}
	return newDirection;
};

export const onKeyDown = (e) => {
	if (['ArrowDown', 'ArrowLeft', 'ArrowUp', 'ArrowRight'].includes(e.code)) {
		const newDirection = e.code.toLowerCase().replace('arrow', '');
		direction = getDirectionAndIgnoreOpposite(newDirection, direction);
	}
	return direction;
};

export const runSnake = async () => {
	initCanvas();

	speed = 100;
	direction = 'right';

	document.addEventListener('keydown', onKeyDown);

	// eslint-disable-next-line
	while (true) {
		drawFrame(direction);
		await pause(speed);
	}
};

// window.addEventListener("load", runSnake);
