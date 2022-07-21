import { getRandomInRange } from "./utils.js";

let winningIndexes = [];

function checkWin(array, player) {
  winningIndexes = [];

  const size = Math.sqrt(array.length);

  const winning = [[], [], [], []];

  for (let n = 0; n < array.length; n++) {
    const i = Math.floor(n / size);
    const j = n % size;

    const isNewRow = j === 0;

    const indexes = [
      i * size + j,
      i + size * j,
      (size + 1) * i,
      (size - 1) * (i + 1),
    ];

    for (let m = 0; m < indexes.length; m++) {
      if (isNewRow && m < 2) {
        winning[m] = [];
      }

      const extraCondition = m < 2 ? true : isNewRow;

      if (extraCondition && array[indexes[m]] === player) {
        winning[m].push(indexes[m]);
      }
    }

    const winningIndex = winning.findIndex((array) => array.length === size);

    if (winningIndex !== -1) {
      if (winning[winningIndex].length === size) {
        winningIndexes = winning[winningIndex];
        return true;
      }
    }
  }

  return false;
}

export function getFilledSpaces(array) {
  return array.filter((item) => item !== "-").length;
}

export function checkWinGame(array) {
  if (checkWin(array, "x")) {
    console.log(`x wins`);
    return true;
  } else if (checkWin(array, "o")) {
    console.log(`o wins`);
    return true;
  } else if (getFilledSpaces(array) === array.length) {
    console.log("Draw");
    return false;
  } else {
    return false;
  }
}

export function printField(array) {
  // console.clear();
  const result = [];
  const size = Math.sqrt(array.length);

  for (let i = 0; i < array.length; i += size) {
    const line = array
      .slice(i, i + size)
      .map((c, j) => {
        if (winningIndexes.includes(i + j)) {
          return c === "x" ? "x̶" : "o̶";
        }
        return c;
      })
      .join("|");
    result.push(line);
  }
  const final = result.join("\n");
  console.log(final);
  return final;
}

export const fillArray = (moves, size) => {
  if (moves > size * size) {
    console.log(`Too big, can fill array up to ${size * size} elements`);
    return [];
  }

  const array = [];

  for (let n = 0; n < size * size; ) {
    const i = getRandomInRange(0, size);
    const j = getRandomInRange(0, size);
    if (!array[i * size + j]) {
      const player = n >= moves ? "-" : n % 2 == 1 ? "o" : "x";
      array[i * size + j] = player;
      n++;
    }
  }

  return array;
};
