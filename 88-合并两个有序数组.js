var merge = function(nums1, m, nums2, n) {
  const arr = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }
  while (i < m) {
    arr.push(nums1[i]);
    i++;
  }
  while (j < n) {
    arr.push(nums2[j]);
    j++;
  }
  for (let k = 0; k < arr.length; k++) {
    nums1[k] = arr[k];
  }
};

const nums1 = [0,1,2,3,0,0,0,0];
const nums2 = [0,2,5,6];
merge(nums1,4,nums2,4);
console.log(nums1);