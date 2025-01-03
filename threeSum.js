/**
 * 三数之和
 * 
 * 给你一个整数数组 nums ，
 * 判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。
 * 请你返回所有和为 0 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 示例1：
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 * 
 * 示例2：
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 * 
 * 示例3：
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const twoSum = function(arr, target) {
    const result = [];
    
    let left = 0;
    let right = arr.length - 1;
    const moveLeft = () => {
      do {
        left++;
      } while (left < right && arr[left] === arr[left - 1])
    }
    const moveRight = () => {
      do {
        right--;
      } while (right > left && arr[right] === arr[right + 1])
    }
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum < target) {
        moveLeft();
      } else if (sum > target) {
        moveRight();
      } else {
        result.push([arr[left], arr[right]]);
        moveLeft();
        moveRight();
      }
    }

    return result;
  }

  nums = nums.sort((a, b) => a - b);
  
  const result = [];
  for(let i = 0, len = nums.length - 2; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const arr = nums.slice(i + 1);
    const target = 0 - nums[i];  
    const val = twoSum(arr, target);
    val.length && result.push(...val.map(v => [nums[i], ...v]));
  }
  return result;
};

const nums1 = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums1));

const nums2 = [0, 1, 1];
console.log(threeSum(nums2));

const nums3 = [0, 0, 0];
console.log(threeSum(nums3));

const nums4 = [0, 0, 0, 0, 0];
console.log(threeSum(nums4));

const nums5 = [-2, 0, 1, 1, 2];
console.log(threeSum(nums5));