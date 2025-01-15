/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  function findTargetIndex(left, right) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) return findTargetIndex(left, mid - 1);
    if (nums[mid] < target) return findTargetIndex(mid + 1, right);
  }

  const result = [-1, -1];
  if (nums.length === 0) return result;
  const targetIndex = findTargetIndex(0, nums.length - 1);
  if (targetIndex === -1) return result;
  let left = targetIndex;
  let right = targetIndex;
  while (nums[left] === target) left--;
  while (nums[right] === target) right++;
  result[0] = left + 1;
  result[1] = right - 1;
  return result;
};