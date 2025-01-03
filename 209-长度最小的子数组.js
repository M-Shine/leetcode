/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let min = Infinity;
  while (j < nums.length) {
    sum += nums[j];
    while (sum >= target) {
      min = Math.min(min, j - i + 1);
      sum -= nums[i];
      i++;
    }
    j++;
  }
  return min === Infinity? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(213, [12,28,83,4,25,26,25,2,25,25,25,12]));