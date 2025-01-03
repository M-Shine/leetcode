/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const result = [];
  
  if (nums.length === 0) {
    return result;
  }

  function addResult(startIndex, endIndex) {
    const start = nums[startIndex];
    const end = nums[endIndex];
    result.push(start === end ? `${start}` : `${start}->${end}`);
  }

  let startIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 !== nums[i]) {
      addResult(startIndex, i - 1);
      startIndex = i;
    }
  }
  addResult(startIndex, nums.length - 1);

  return result;
};