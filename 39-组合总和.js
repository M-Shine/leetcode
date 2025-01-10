/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];

  function backtrack(index = 0, arr = [], sum = 0) {
    if (sum > target) return;
    if (sum === target) {
      result.push(arr);
      return;
    }
    if (index === candidates.length) return;
    backtrack(index, [...arr, candidates[index]], sum + candidates[index]);
    backtrack(index + 1, arr, sum);
  }
  backtrack();

  return result;
};

const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target));