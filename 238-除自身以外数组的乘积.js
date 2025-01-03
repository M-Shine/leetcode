/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const left = [];
  for (let i = 0; i < nums.length; i++) {
    left[i] = i === 0 ? 1: left[i - 1] * nums[i - 1];
  }

  const right = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    right[i] = i === nums.length - 1? 1: right[i + 1] * nums[i + 1];
  }

  const res = [];
  for (let i = 0; i < nums.length; i++) {
    res[i] = left[i] * right[i];
  }

  return res;
};

console.log(productExceptSelf([1,2,3,4]));