/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let maxV = 0;
  while (l < r) {
    const v = Math.min(height[l], height[r]) * (r - l);
    maxV = Math.max(maxV, v);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxV;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
