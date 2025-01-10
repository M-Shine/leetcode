/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];

  function backtrack(path = []) {
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue;
      const p = [...path, nums[i]];
      if (p.length === nums.length) {
        result.push(p);
        continue;
      }
      backtrack(p);
    }
  }
  backtrack();

  return result;
};

const nums = [1, 2, 3];
console.log(permute(nums));