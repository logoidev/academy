const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) =>
  new Promise((resolve) =>
    readline.question(`${question} `, (answer) => resolve(answer))
  );
console.clear();
const askQuestions = async (question) => {
  let height = 0;

  const numberStr = await askQuestion(`Enter your number`);
  number = Number(numberStr);
  if (isNaN(number)) {
    console.log("Skipped, not a valid number");
    readline.close();
  } else {
    height += number;
  }
  const pauseForASecond = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });

  const drawAsync = async () => {
    let out = "";
    if (height > 0) {
      for (let i = 1; i <= height; i++) {
        out += " *";
        console.log(out);
        await pauseForASecond();
      }
    } else {
      for (let i = 1; i >= height + 2; i--) {
        out += " *";
      }
      for (let i = 0; i > height; i--) {
        console.log(out);
        out = out.slice(0, -2);
        await pauseForASecond();
      }
    }
  };

  drawAsync();

  readline.close();
};
askQuestions();
