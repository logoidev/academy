const lowerBound = Number(prompt("Enter lower bound"));
const upperBound = Number(prompt("Enter upper bound"));
function rangeBetweenBounds(number) {
  let step = 1;
  if (upperBound < lowerBound) {
    step = -1;
  }
  alert(number);
  if (number !== upperBound) {
    rangeBetweenBounds(number + step);
  }
}
rangeBetweenBounds(lowerBound);
