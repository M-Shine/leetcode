/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const map = new Map();
  
  function robIndex(index) {
    if (index >= nums.length) return 0;
    if (map.has(index)) return map.get(index);
    const max = Math.max(nums[index] + robIndex(index + 2), robIndex(index + 1));
    map.set(index, max);
    return max;
  }

  return robIndex(0);
};

const nums = [114,117,207,117,235,82,90,67,143,146,53,108,200,91,80,223,58,170,110,236,81,90,222,160,165,195,187,199,114,235,197,187,69,129,64,214,228,78,188,67,205,94,205,169,241,202,144,240];
console.log(rob(nums));