import readline from 'readline';

const readlineInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

export const askQuestion = (question) =>
	new Promise((resolve) => readlineInterface.question(`${question} `, (answer) => resolve(answer)));

export const cleanup = () => readlineInterface.close();

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
