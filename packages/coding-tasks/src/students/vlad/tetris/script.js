import { Field } from './Field.js';
import { pause } from './utils.js';
import { initCanvas } from './canvas.js';

export const runTetris = async () => {
	const WIDTH = 300;
	const HEGHT = 500;
	const CELL_SIZE = 20;
	const INFO_WIDTH = 200;

	const { context } = initCanvas(WIDTH + INFO_WIDTH, HEGHT);

	const field = new Field(context, WIDTH, HEGHT, CELL_SIZE, INFO_WIDTH);

	field.initialize();

	document.addEventListener('keydown', (event) => {
		if (['ArrowRight', 'ArrowLeft'].includes(event.code)) {
			const direction = event.code.toLowerCase().replace('arrow', '');
			const x = direction === 'right' ? 1 : -1;
			field.moveCurrentShape(x);
		}
		if (['ArrowDown'].includes(event.code)) {
			field.moveCurrentShape(0, 1);
		}
		if (['ArrowUp'].includes(event.code)) {
			field.rotateCurrentShape();
		}
		if (['Space'].includes(event.code)) {
			field.placeCurrentShape();
		}
	});

	while (true) {
		field.draw();

		field.update();

		await pause(300);
	}
};
