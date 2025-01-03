/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined? 0 : val)
  this.left = (left===undefined? null : left)
  this.right = (right===undefined? null : right)
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const val = preorder[0];
  if (val === undefined) return null;

  const node = new TreeNode(val);
  const index = inorder.indexOf(val);
  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1);
  node.left = buildTree(preorder.slice(1, leftInorder.length + 1), leftInorder);
  node.right = buildTree(preorder.slice(leftInorder.length + 1), rightInorder);
  return node;
};
