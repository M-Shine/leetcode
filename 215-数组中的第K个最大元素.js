/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  // 定义一个函数 heapify，用于维护最大堆的性质
  function heapify(i, len) {
    // 初始化 largest 为当前节点的索引，largest 表示当前节点及其子节点中值最大的节点的索引
    let largest = i; 
    // 左子节点的索引
    const left = i * 2 + 1; 
    // 右子节点的索引
    const right = i * 2 + 2; 
    if (left < len && nums[left] > nums[largest]) { 
      largest = left; 
    } 
    if (right < len && nums[right] > nums[largest]) { 
      largest = right; 
    } 
    // 如果 largest 不是当前节点的索引，说明当前节点不是最大节点，需要交换
    if (largest !== i) { 
      [nums[i], nums[largest]] = [nums[largest], nums[i]]; 
      // 递归调用 heapify 函数，继续维护以 largest 为根节点的子树的最大堆性质
      heapify(largest, len); 
    } 
  } 

  /**
   * 构建最大堆
   * 从最后一个非叶子节点开始，逐个向上调整堆，确保每个节点都满足最大堆的性质
   * 时间复杂度：O(n)
   */
  function buildMaxHeap() {
    // 从最后一个非叶子节点开始，逐个向上调整堆
    // 因为堆是完全二叉树，所以最后一个非叶子节点的索引为 (n/2 - 1)，其中 n 是数组长度
    for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
      // 调用 heapify 函数，调整以 i 为根节点的子树，使其满足最大堆的性质
      heapify(i, nums.length);
    }
  }

  buildMaxHeap();
  
  // 做 k - 1 次删除操作，即从堆中删除 k - 1 个最大元素，从而得到第 k 个最大元素
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    heapify(0, i);
  }
  
  // 返回第 k 个最大元素，即此时堆顶元素
  return nums[0];
};


const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k));

const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k2 = 4;
console.log(findKthLargest(nums2, k2));