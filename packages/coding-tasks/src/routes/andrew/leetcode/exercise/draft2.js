/* const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) =>
  new Promise((resolve) =>
    readline.question(`${question} `, (answer) => resolve(answer))
  );
let j = 1;
let array = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];
let isEmpty;
const askQuestions = async (question) => {
  for (let i = 1; !isEmpty; i++) {
    const absoluteCoordinate = await askQuestion(`Where?`);
    const coordinateX = Number(absoluteCoordinate.slice(0, 1));
    const coordinateY = Number(absoluteCoordinate.slice(1));
    if (
      isNaN(coordinateX && coordinateY) ||
      coordinateX < 0 ||
      coordinateX > 2 ||
      coordinateY < 0 ||
      coordinateY > 2
    ) {
      console.log("Skipped, not a valid number");
    } else {
      if (i % 2 == 1) {
        array[coordinateX][coordinateY] = "x";
        console.log(array[0]);
        console.log(array[1]);
        console.log(array[2]);
      }
      if (i % 2 == 0) {
        array[coordinateX][coordinateY] = "o";
        console.log(array[0]);
        console.log(array[1]);
        console.log(array[2]);
      }
    }
    const flatArray = array.flat();
    isEmpty = flatArray.every((value) => {
      return value !== "-";
    });
  }
  readline.close();
};
askQuestions(); */
console.log([1, 2, 3, 4, 4, 4, 5, 4, 1, 5, 4].filter((item) => item === 4).length);
