export const drawRect = (context, x, y, w, h, color, strokeWidth, opacity = 1) => {
	if (opacity !== 1) {
		context.globalAlpha = opacity;
	}
	context.beginPath();
	if (color) {
		context.fillStyle = color;
		context.fillRect(x, y, w, h);
	}
	context.rect(x, y, w, h);
	context.lineWidth = (color && strokeWidth) || 1;
	context.stroke();
	context.closePath();
	if (context.globalAlpha !== 1) {
		context.globalAlpha = 1;
	}
};

export const initCanvas = (width, height) => {
	const canvas = document.getElementById('canvas');
	canvas.width = width;
	canvas.height = height;

	const context = canvas.getContext('2d');

	return { canvas, context };
};
