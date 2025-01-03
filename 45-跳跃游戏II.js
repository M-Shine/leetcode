var jump = function(nums) {
  let step = 0;
  let maxDistance = 0;
  let end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxDistance = Math.max(maxDistance, i + nums[i]);
    if (i === end) {
      end = maxDistance;
      step++;
    }
  }
  return step;
};

// 2
console.log(jump([2,3,1,1,4]));
// 2
console.log(jump([3,2,1,0,4]));
// 0
console.log(jump([1]));
// 2
console.log(jump([7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]));
