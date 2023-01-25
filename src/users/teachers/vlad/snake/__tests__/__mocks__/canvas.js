import { expect, vi } from 'vitest';
import { createCanvas, Canvas } from 'canvas';

export const canvasToBuffer = (canvas) => {
	const base64 = canvas.toDataURL().split(',')[1];
	return Buffer.from(base64, 'base64');
};

expect.extend({
	toMatchImageSnapshot: function toMatchImageSnapshot(imageOrCanvas) {
		const isCanvas = imageOrCanvas instanceof Canvas;
		const normalised = isCanvas ? canvasToBuffer(imageOrCanvas) : imageOrCanvas;
		const result = toMatchImageSnapshot.bind(this)(normalised);
		return result;
	}
});

export const mockCanvasGetter = () => {
	const getElementById = document.getElementById;
	document.getElementById = vi.fn((id) => {
		if (id === 'canvas') {
			return createCanvas();
		}
		return getElementById(id);
	});
};
