export const runSnake = () => {
	const canvas = document.getElementById('canvas');
	const context = canvas.getContext('2d');
	const WIDTH = 400;
	const HEIGHT = 400;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	let speed = 7;
	let tileCount = 20;
	let tileSize = canvas.width / tileCount;
	let directions = ['right'];
	let initialLength = 10;

	let snake = new Array(initialLength).fill(1).map((_, i) => ({
		x: (initialLength - i) * tileSize,
		y: tileSize
	}));

	let apple = makeNewApple();

	document.addEventListener('keydown', checkArrow);

	function clearScreen() {
		context.beginPath();
		context.fillStyle = 'black';
		context.fillRect(0, 0, WIDTH, HEIGHT);
		context.closePath();
	}

	function increaseSnakeSpeed() {
		if (snake.length % 5 === 0) {
			speed++;
			clearInterval(interval);
			interval = setInterval(drawFrame, 1000 / speed);
		}
	}

	function drawSnake() {
		for (const cell of snake) {
			drawCell(cell);
		}
		drawCell(snake[0], 'orange');
	}

	function drawCell(cell, fillStyle = 'green') {
		context.beginPath();
		context.fillStyle = fillStyle;
		context.fillRect(cell.x, cell.y, tileSize, tileSize);
		context.rect(cell.x, cell.y, tileSize, tileSize);
		context.stroke();
		context.closePath();
	}

	function drawApple() {
		context.beginPath();
		context.fillStyle = 'red';
		context.fillRect(apple.x, apple.y, tileSize, tileSize);
		context.closePath();
	}

	function getRandomInt(n) {
		return Math.floor(Math.random() * n) * n;
	}

	function makeNewApple() {
		const apple = {
			x: getRandomInt(tileSize),
			y: getRandomInt(tileSize)
		};

		if (collision(apple, snake)) {
			return makeNewApple();
		}

		return apple;
	}

	function updateApple() {
		const isCollision = collision(apple, snake);
		if (isCollision) {
			snake.unshift(apple);
			apple = makeNewApple();
			increaseSnakeSpeed();
		}
	}

	function checkArrow(e) {
		if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
			const newDirection = e.code.toLowerCase().replace('arrow', '');
			directions.push(checkOpposite(newDirection, directions[0]));
		}
	}

	function checkOpposite(newDirection, previousDirection) {
		const oppositeDirection = {
			up: 'down',
			down: 'up',
			left: 'right',
			right: 'left'
		};
		if (previousDirection !== oppositeDirection[newDirection]) {
			return newDirection;
		} else {
			return previousDirection;
		}
	}

	function moveSnake() {
		snake.pop();
		const newHead = getNewHead();
		if (collision(newHead, snake)) {
			clearInterval(interval);
		}
		snake.unshift(newHead);
	}

	function getNewHead() {
		const newHead = {
			x: snake[0].x,
			y: snake[0].y
		};

		const direction = directions[directions.length - 1];

		if (direction === 'right') newHead.x += tileSize;
		if (direction === 'left') newHead.x -= tileSize;
		if (direction === 'down') newHead.y += tileSize;
		if (direction === 'up') newHead.y -= tileSize;

		directions = [direction];

		if (newHead.x > WIDTH - tileSize) {
			newHead.x = 0;
		}
		if (newHead.y > HEIGHT - tileSize) {
			newHead.y = 0;
		}
		if (newHead.x < 0) {
			newHead.x = WIDTH - tileSize;
		}
		if (newHead.y < 0) {
			newHead.y = HEIGHT - tileSize;
		}
		return newHead;
	}

	function collision(head, array) {
		for (let i = 0; i < array.length; i++) {
			if (head.x === array[i].x && head.y === array[i].y) {
				return true;
			}
		}
		return false;
	}

	function drawFrame() {
		clearScreen();

		moveSnake();
		updateApple();

		drawSnake();
		drawApple();
	}

	let interval = setInterval(drawFrame, 1000 / speed);
};
