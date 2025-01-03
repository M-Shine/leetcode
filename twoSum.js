/**
 * 两数之和
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
 * 你可以按任意顺序返回答案。
 * 
 * 示例1：
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 
 * 示例2：
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 * 
 * 示例3：
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 * 
 * 提示：
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 只会存在一个有效答案
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  if (nums.length < 2) {
    return null;
  }

  const map = new Map();

  for (let i = 0, len = nums.length; i < len; i++) {
    const value = nums[i];
    const dif = target - value;
    if (map.has(dif)) {
      return [map.get(dif), i];
    }
    map.set(value, i);
  }

  return null;
};

const nums1 = [2, 7, 11, 15];
const target1 = 9;
const result1 = twoSum(nums1, target1);
console.log('1. result =', result1);

const nums2 = [3, 2, 4];
const target2 = 6;
const result2 = twoSum(nums2, target2);
console.log('2. result =', result2);

const nums3 = [3, 3];
const target3 = 6;
const result3 = twoSum(nums3, target3);
console.log('3. result =', result3);