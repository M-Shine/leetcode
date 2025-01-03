var removeElement = function(nums, val) {
  let count = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }
  return count;
};

// 5
// const nums = [0,1,2,2,3,0,4,2];
// const val = 2;
// console.log(removeElement(nums, val), nums);

// 2
// const nums = [3,2,2,3];
// const val = 3;
// console.log(removeElement(nums, val), nums);

// 0
// const nums = [3,3,3,3];
// const val = 3;
// console.log(removeElement(nums, val), nums);

// 3
// const nums = [2,2,2];
// const val = 3;
// console.log(removeElement(nums, val), nums);

// 1
// const nums = [4,5];
// const val = 5;
// console.log(removeElement(nums, val), nums);

// 4
// const nums = [0,4,4,0,4,4,4,0,2];
// const val = 4;
// console.log(removeElement(nums, val), nums);

// 8
const nums = [4,2,0,2,2,1,4,4,1,4,3,2];
const val = 4;
console.log(removeElement(nums, val), nums);