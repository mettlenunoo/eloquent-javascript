//recursive version
function isEven(n) {
  n = Math.abs(n);
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);
}
