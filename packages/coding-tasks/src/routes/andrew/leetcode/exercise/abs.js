function abs(number) {
  let correction = 1;
  if (number < 0) {
    correction = -1;
  }
  // const correction = number < 0 ? -1 : 1; // Ternary
  console.log(number * correction);
}
abs(-9);
