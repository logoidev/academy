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
    //
    let absoluteOut = "";
    for (let i = 1; i <= Math.abs(height); i++) {
      absoluteOut += "* ";
      if (height > 0) {
        console.log(absoluteOut);
        await pauseForASecond();
      }
    }
    for (let i = 1; i <= Math.abs(height); i++) {
      if (height < 0) {
        console.log(absoluteOut);
        absoluteOut = absoluteOut.slice(0, -2);
        await pauseForASecond();
      }
    }
    //
  };

  drawAsync();

  readline.close();
};
askQuestions();

//
/* let out = "";
if (height > 0) {
  for (let i = 1; i <= height; i++) {
    out += " *";
    console.log(out);
  
  }
} else {
  for (let i = 0; i > height; i--) {
    
    out = absoluteOut.slice(0, i);
    console.log(out);

  }
} */
