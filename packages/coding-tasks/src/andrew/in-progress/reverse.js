// Еще одно задание тебе -
// напиши рекурсивную функцию которая будет делать реверс массива

// reverse([1, 2, 3]) -> [3, 2, 1]
// reverse(reverse([1, 2, 3])) -> [1, 2, 3]

export function reverseArray(array) {
  var result = [];
  function reverse(array) {
    if (array.length !== 0) {
      result.push(array.pop());
      reverse(array);
    }
  }
  reverse(array);
  return result;
}
console.log(reverseArray(reverseArray([1, 2, 3])));
console.log(reverseArray([1, 2, 3]));
