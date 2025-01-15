/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let min = nums[0];
  function find(left, right) {
    if (left > right) return;
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= nums[left]) {
      min = Math.min(min, nums[left]);
      find(mid + 1, right);
      return;
    }
    if (nums[mid] <= nums[right]) {
      min = Math.min(min, nums[mid]);
      find(left, mid - 1);
      return;
    }
  }
  find(0, nums.length - 1);
  return min;
};