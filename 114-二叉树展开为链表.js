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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return root;

  root.left = flatten(root.left);
  root.right = flatten(root.right);
  const left = root.left;
  if (left) {
    let p = left;
    while (p.right) {
      p = p.right;
    }
    p.right = root.right;
    root.right = left;
    root.left = null;
  }
  return root;
};
