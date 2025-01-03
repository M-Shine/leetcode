/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = nums1.length + nums2.length;
  const i = Math.ceil(len / 2);
  return len % 2 === 0 ? (arr[i - 1] + arr[i]) / 2 : arr[i - 1];
};

const nums1 = [1, 2];
const nums2 = [1, 2, 3];
console.log(findMedianSortedArrays(nums1, nums2));
