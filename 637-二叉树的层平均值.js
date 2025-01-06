/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const result = [];
  if (!root) return result;

  let queue = [];
  let nextQueue = [];
  let sum = 0;
  let count = 0;
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    sum += node.val;
    count++;
    node.left && nextQueue.push(node.left);
    node.right && nextQueue.push(node.right);
    if (queue.length === 0) {
      result.push(sum / count);
      sum = 0;
      count = 0;
      queue = nextQueue;
      nextQueue = [];
    }
  }
  return result;
};