const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// readline.question(`What's your name? `, function (name) {
//   readline.question(`What's your last name? `, function (lastName) {
//     console.log(`Hi ${name} ${lastName}!`);
//     readline.question(`How old are you? `, function (age) {
//       const currentYear = new Date().getFullYear();
//       const yearOfBirth = currentYear - age;
//       console.log(`You were born on ${yearOfBirth}`);
//       readline.close();
//     });
//   });
// });

const askQuestion = (question) =>
  new Promise((resolve, reject) =>
    readline.question(`${question} `, (answer) => resolve(answer))
  );

// Lamda/Arrow function
const askQuestions = async (question) => {
  
  const age = await askQuestion(`What's your age?`);
  const currentYear = new Date().getFullYear();
  const yearOfBirth = currentYear - age;
  
  console.log(`Hey ${firstName} ${lastName}! You were born on ${yearOfBirth}`);
  readline.close();  
};

askQuestions();
