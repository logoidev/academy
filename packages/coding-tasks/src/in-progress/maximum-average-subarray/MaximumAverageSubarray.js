export function findMaxAverage(nums, k) {
  let result = null;
  const border = nums.length -1 - k;
  const array = nums.sort(function (a, b) {
    return Math.abs(a) - Math.abs(b);
  });
  for (let i = nums.length-1; i > border; i--) {
    result += nums[i];
  }
  return result / k;
}
