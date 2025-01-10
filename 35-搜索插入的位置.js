/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  function find(left, right) {
    if (left > right) return left;
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      return find(left, mid - 1);
    } else if (nums[mid] < target) {
      return find(mid + 1, right);
    } else {
      return mid;
    }
  }
  return find(0, nums.length - 1);
};