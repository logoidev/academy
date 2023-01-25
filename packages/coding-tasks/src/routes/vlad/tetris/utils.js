export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const flipMajorDiagonal = (matrix) =>
	matrix[0].map((column, index) => matrix.map((row) => row[index]));

export const rotateMatrix = (matrix) => flipMajorDiagonal(matrix.reverse());

const arrayEquals = (a1, a2) => a1.length === a2.length && a1.every((e, i) => e === a2[i]);

export const twoDimensionalArrayEquals = (a1, a2) =>
	a1.length === a2.length && a1.every((e1, i) => arrayEquals(e1, a2[i]));
