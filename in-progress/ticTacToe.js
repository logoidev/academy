readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) =>
  new Promise((resolve) =>
    readline.question(`${question} `, (answer) => resolve(answer))
  );

let array = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
for (let i; arrayElements == "true"; i++) {
  const askQuestions = async (question) => {
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
      //
      array[coordinateX][coordinateY] = "x";
      console.log(array[0]);
      console.log(array[1]);
      console.log(array[2]);
      //
      //
      array[coordinateX][coordinateY] = "o";
      console.log(array[0]);
      console.log(array[1]);
      console.log(array[2]);
      //
    }
  
  };
  readline.close();
}
askQuestions();
