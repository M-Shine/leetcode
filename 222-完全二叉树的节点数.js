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
var countNodes = function(root) {
  if (!root) return 0;

  let depth = 0;
  let left = root;
  let right = root;
  while (left && right) {
    depth++;
    left = left.left;
    right = right.right;
  }
  
  // 满二叉树
  if (!left && !right) {
    return Math.pow(2, depth) - 1;
  }
  // 非满二叉树，递归计算左子树和右子树
  return 1 + countNodes(root.left) + countNodes(root.right);
};