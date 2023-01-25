function toBinary2(number) {
  let num = number;
  let binary = String(num % 2);

  while (num > 1) {
    num = Math.floor(num / 2);
    binary = (num % 2) + binary;
  }

  return binary;
}

function toBinary(number) {
  const rest = String(number % 2);
  if (number <= 1) {
    return rest;
  }
  return toBinary(Math.floor(number / 2)) + rest;
}

// 10 -> 1010
// 12 -> 1100
// 24 -> 11000
// 47 -> 101111
// 256 -> 100000000
// console.log(toBinary(0))
// console.log(toBinary(12))
// console.log(toBinary(24))
// console.log(toBinary(47))
// console.log(toBinary(256))

function toDecimal(binary) {
  let array= [];
  for(let i = binary.length-1; i >= 0; i--) {
    array.push(binary[i]);
}
  console.log(result)
}
toDecimal('1010');
//console.log(toDecimal(toBinary(12)))
//console.log(toDecimal(toBinary(23)))

function printChars(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

//printChars('101010101')
