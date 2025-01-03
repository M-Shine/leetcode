/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
    const dif = target - nums[i];
    if (map.has(dif)) {
      return [map.get(dif), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
