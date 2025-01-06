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
var rightSideView = function(root) {
  const result = [];
  if (!root) return result;

  let queue = [];
  let nextQueue = [];
  result.push(root.val);
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    node.left && nextQueue.push(node.left);
    node.right && nextQueue.push(node.right);
    if (queue.length === 0) {
      queue = nextQueue;
      nextQueue = [];
      queue.length && result.push(queue[queue.length - 1].val);
    }
  }
  return result;
};