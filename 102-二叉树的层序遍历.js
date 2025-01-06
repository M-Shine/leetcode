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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
  let vals = [];
  let queue = [];
  let nextQueue = [];
  root && queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    vals.push(node.val);
    node.left && nextQueue.push(node.left);
    node.right && nextQueue.push(node.right);
    if (queue.length === 0) {
      result.push(vals);
      vals = [];
      queue = nextQueue;
      nextQueue = [];
    }
  }
  return result;
};