/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0;
  // 因为 nums[i] <= 2^31 - 1，所以只需要统计 32 位中 1 的个数即可
  for (let i = 0; i < 32; i++) {
    // 统计第 i 位中 1 的个数
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      nums[j] >> i & 1 && count++;
    }
    // 如果 1 的个数不是 3 的倍数，则说明那个只出现一次的数字的第 i 位是 1
    if (count % 3 !== 0) {
      // 将 result 的第 i 位设置为 1
      result |= 1 << i;
    }
  }
  return result;
};