/**
 * 计算给定数组中的最大子数组和
 * 题解：https://www.bilibili.com/video/BV1ML4y1h7S8/?spm_id_from=333.337.search-card.all.click&vd_source=47cfa7c0fd2263e8cf71adcc21fbca17
 * @param {number[]} nums - 输入的整数数组
 * @return {number} - 最大子数组的和
 */
// var maxSubArray = function(nums) {
//   let max = nums[0];
//   let pre = 0;
//   for (let i = 0; i < nums.length; i++) {
//     pre = Math.max(pre + nums[i], nums[i]);
//     max = Math.max(max, pre);
//   }
//   return max;
// };


function Status(l, r, m, i) {
  // lSum 表示 [l,r] 内以 l 为左端点的最大子段和
  this.lSum = l;
  // rSum 表示 [l,r] 内以 r 为右端点的最大子段和
  this.rSum = r;
  // mSum 表示 [l,r] 内的最大子段和
  this.mSum = m;
  // iSum 表示 [l,r] 的区间和
  this.iSum = i;
}

const pushUp = (l, r) => {
  // 区间和
  const iSum = l.iSum + r.iSum;
  // 左端点最大子段和
  const lSum = Math.max(l.lSum, l.iSum + r.lSum);
  // 右端点最大子段和
  const rSum = Math.max(r.rSum, r.iSum + l.rSum);
  // 最大子段和
  const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
  return new Status(lSum, rSum, mSum, iSum);
}

const getInfo = (a, l, r) => {
  if (l === r) {
      return new Status(a[l], a[l], a[l], a[l]);
  }
  const m = (l + r) >> 1;
  const lSub = getInfo(a, l, m);
  const rSub = getInfo(a, m + 1, r);
  return pushUp(lSub, rSub);
}

var maxSubArray = function(nums) {
  return getInfo(nums, 0, nums.length - 1).mSum;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));

const nums2 = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums2));

const nums3 = [-2, 0, -1];
console.log(maxSubArray(nums3));