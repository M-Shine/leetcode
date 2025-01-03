var rotate = function(nums, k) {
  const temp = [...nums];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const index = (i + k) % len;
    nums[index] = temp[i];
  }
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
console.log(nums);
