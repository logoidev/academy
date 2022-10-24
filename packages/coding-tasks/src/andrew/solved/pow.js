// возведение числа в степень pow(3, 5)
function pow2(first, second) {
  let result = first;
  if (second < 0) {
    console.log("Сорян,калькулятор работает только со степенью > 0");
  } else if (second === 0) {
    console.log(1);
  } else {
    for (let i = 1; i < second; i++) {
      result *= first;
    }
    console.log(result);
  }
}
// pow2(2, 10);


function pow(number, exponent) {
    if (exponent < 1) {
        return 1
    }
    return number * pow(number, exponent - 1)
}

// console.log(pow(5, 3));
function f(x) {
    let y = 0;
    if (x > 0) {
        y = x^2 + 2*x - 1
    }
    if (x > 5) {
        y = -x;
    }
    y = 10;
    return y;
}

const y = f(3)
console.log(y)
