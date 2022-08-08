import { askQuestion, cleanup } from "./utils.js";
import {
  EMPTY_CELL,
  checkWinGame,
  getEmptySpaces,
  getFilledArray,
} from "./tictactoe.js";

const ROWS_LENGTH = 7;
const COLUMNS_LENGTH = 7;
const WIN_LENGTH = 4;
const PRE_FILL_COUNT = 49;
const PLAYERS = ["😶", "👿", "😡", "🤢"];

const isValid = (coordinate, bound) =>
  !Number.isNaN(coordinate) && coordinate >= 0 && coordinate < bound;

const askQuestions = async () => {
  const array = getFilledArray(
    PRE_FILL_COUNT,
    PLAYERS,
    ROWS_LENGTH,
    COLUMNS_LENGTH
  );

  const m = array.length;
  const n = array[0].length;

  let emptySpaces = getEmptySpaces(array);

  while (!checkWinGame(array, WIN_LENGTH) && emptySpaces !== 0) {
    const player = PLAYERS[(m * n - emptySpaces) % PLAYERS.length];
    const stringAnswer = await askQuestion(`Place ${player}:`);
    const [i, j] = stringAnswer.split(" ").map(Number);

    if (isValid(i, m) && isValid(j, n)) {
      if (array[i][j] === EMPTY_CELL) {
        array[i][j] = player;
        emptySpaces = getEmptySpaces(array);
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
