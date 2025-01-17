/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return 0;
  let left = 1;
  let right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const product = mid * mid;
    if (product === x) return mid;
    if (product < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};