/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  function isPeak(index) {
    const curVal = nums[index];
    const leftVal = index - 1 >= 0 ? nums[index - 1] : -Infinity;
    const rightVal = index + 1 < nums.length ? nums[index + 1] : -Infinity;
    return curVal > leftVal && curVal > rightVal;
  }

  function find(left, right) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (isPeak(mid)) return mid;
    // 上坡的一侧一定有峰值
    return nums[mid] < nums[mid + 1] ? find(mid + 1, right) : find(left, mid - 1);
    
    // const leftPeak = find(left, mid - 1);
    // if (leftPeak !== -1) return leftPeak;
    // const rightPeak = find(mid + 1, right);
    // if (rightPeak !== -1) return rightPeak;
    // return -1;
  }

  return find(0, nums.length - 1);
};

const nums = [1,2,3,1];
console.log(findPeakElement(nums));