export function addTwoNumbers(l1, l2) {
  let n1 = num(l1);
  let n2 = num(l2);
  let result = [];
  function num(n) {
    let number = "";
    for (let i = n.length - 1; i >= 0; i--) {
      number += n[i];
    }
    return number;
  }
  const sum = (Number(n1) + Number(n2)).toString();
  for (let i = sum.length - 1; i >= 0; i--) {
    result.push(Number(sum[i]));
  }
  return result;
}
