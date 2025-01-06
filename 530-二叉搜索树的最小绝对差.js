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
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let preVal = Infinity;
  let min = Infinity;
  function inorder(root) {
    if (!root) return;
    root.left && inorder(root.left);
    min = Math.min(min, Math.abs(root.val - preVal));
    preVal = root.val;
    root.right && inorder(root.right);
  }
  inorder(root);
  return min;
};

