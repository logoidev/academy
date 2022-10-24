function logNumber(number) {
  if (number >= 5) {
    console.log(number);
  }
  if (number < 10) {
    logNumber(number + 1);
  }
 
}

logNumber(-1)