/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
//   }
//   for (let [key, value] of map) {
//     if (value === 1) {
//       return key;
//     }
//   }
// };

var singleNumber = function(nums) {
  // 异或运算：任何数与0异或为任何数，与相同的数异或为0
  // 题目中只有一个数出现一次，其他都出现两次，所以将所有数异或，相同的数异或为0，最后剩下的就是只出现一次的数
  return nums.reduce((a, b) => a ^ b);
};