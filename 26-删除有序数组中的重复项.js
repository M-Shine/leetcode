var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let count = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === nums[count]) {
      i++
    } else {
      count++;
      nums[count] = nums[i];
    }
  }
  return count + 1;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));