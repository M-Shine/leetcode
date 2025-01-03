/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    // 因为是先后查找的，后边的数会被前边的数遍历，所以不需要再遍历
    if (set.has(nums[i] - 1)) {
      continue;
    }
    let num = nums[i];
    let len = 1;
    // 先后遍历连续的数
    while (set.has(num + 1)) {
      num++;
      len++;
    }
    max = Math.max(max, len);
  }
  return max;
}
