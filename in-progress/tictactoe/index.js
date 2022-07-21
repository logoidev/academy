import { askQuestion, cleanup } from "./utils.js";
import {
  printField,
  checkWinGame,
  getFilledSpaces,
  fillArray,
} from "./tictactoe.js";

const askQuestions = async () => {
  const SIZE = 3;
  // const array = new Array(SIZE * SIZE).fill("-");
  // const array = fillArray(SIZE * SIZE, SIZE);
  const array = [
    ["o", "o", "x"],
    ["x", "-", "x"],
    ["o", "x", "o"],
  ].flat();

  const size = Math.sqrt(array.length);

  checkWinGame(array);
  printField(array);

  const isValid = (coordinate) =>
    !Number.isNaN(coordinate) && coordinate >= 0 && coordinate <= size - 1;

  let filledSpaces = getFilledSpaces(array);

  while (filledSpaces !== size * size) {
    const player = filledSpaces % 2 === 0 ? "x" : "o";
    const stringAnswer = await askQuestion(`Place ${player}:`);
    const [i, j] = stringAnswer.split(" ").map(Number);

    if (isValid(i) && isValid(j)) {
      const targetIndex = i * size + j;
      if (array[targetIndex] === "-") {
        array[targetIndex] = player;
        filledSpaces = getFilledSpaces(array);
        if (checkWinGame(array)) {
          printField(array);
          break;
        } else {
          printField(array);
        }
      } else {
        console.log("Skipped, it's a used number");
      }
    } else {
      console.log("Skipped, not a valid number");
    }
  }
  cleanup();
};

askQuestions();
