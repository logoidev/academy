export function checkTree(root) {
  let sum = null;
  for (let i = 0; i < root.length; i++) {
    sum += root[i];
  }
  console.log('sum',sum);
  if (root[0] === sum - root[0]) {
    return true;
  }
  return false;
}
