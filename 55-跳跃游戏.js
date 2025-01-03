var canJump = function(nums) {
  const marks = new Array(nums.length).fill(false);
  marks[marks.length - 1] = true;

  for (let i = nums.length - 2; i >=0; i--) {
    marks[i] = marks.slice(i, i + nums[i] + 1).some(item => item === true);
  }
  
  return marks[0];
};

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
