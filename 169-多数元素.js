var majorityElement = function(nums) {
  const len = nums.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  const flag = len / 2;
  for (const [key, value] of map) {
    if (value > flag) {
      return key;
    }
  }
};

