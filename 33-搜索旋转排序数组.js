/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // function find(left, right) {
  //   if (left > right) return -1;
  //   const mid = Math.floor((left + right) / 2);
  //   if (nums[mid] > target) {
  //     const index = find(left, mid - 1);
  //     if (index === -1) return find(mid + 1, right);
  //     return index;
  //   } else if (nums[mid] < target) {
  //     const index = find(mid + 1, right);
  //     if (index === -1) return  find(left, mid - 1);
  //     return index
  //   } else {
  //     return mid;
  //   }
  // }
  // return find(0, nums.length - 1);

  // 二分查找
  function findTarget(left, right) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      return findTarget(left, mid - 1);
    } else if (nums[mid] < target) {
      return findTarget(mid + 1, right);
    } else {
      return mid;
    }
  }

  // 有序数组旋转后，从任意位置分割，必然有一个区间是有序的，
  // 找到包裹target的那一个有序区间，在这个区间内查找target，将问题转化为有序数组的二分查找
  function findRange(left, right) {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
    const l = nums[left];
    const r = nums[right];
    const m = nums[mid];
    if (l <= m) {
      if (l <= target && target <= m) {
        return findTarget(left, mid);
      } else {
        return findRange(mid + 1, right);
      }
    } else if (m <= r) {
      if (m <= target && target <= r) {
        return findTarget(mid, right);
      } else {
        return findRange(left, mid - 1);
      }
    }
  }
  return findRange(0, nums.length - 1);
};

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(search(nums, target));
