var removeDuplicates = function(nums) {
  const len = nums.length;
  if (len <= 2) return len;

  let slow = 0, fast = 2;
  while (fast < len) {
    if (nums[slow] !== nums[fast]) {
      nums[slow + 2] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow + 2;
};

const nums = [1,1,1,1,2,2,3];
console.log(removeDuplicates(nums), nums);
