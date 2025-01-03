/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  function twoSum(arr, target) {
    const res = [];
    let left = 0;
    let right = arr.length - 1;
    function moveLeft() {
      while (left < right && arr[left] === arr[left + 1]) {
        left++;
      }
      left++;
    }
    function moveRight() {
      while (left < right && arr[right] === arr[right - 1]) {
        right--;
      }
      right--;
    }
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum > target) {
        moveRight();
      } else if (sum < target) {
        moveLeft();
      } else {
        res.push([arr[left], arr[right]]);
        moveLeft();
        moveRight();
      }
    }
    return res;
  }

  nums = nums.sort((a, b) => a - b);
  const resList = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }
    const arr = nums.slice(i + 1);
    const target = 0 - nums[i];
    const res = twoSum(arr, target);
    res.length && res.forEach(item => {
      item.unshift(nums[i]);
      resList.push(item);
    });
  }
  return resList;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-2, 0, 0, 2, 2]));