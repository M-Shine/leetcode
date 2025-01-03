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
var sumNumbers = function(root) {
  const nums = [];

  function dfs(root, str = '') {
    if (!root) return;
    if (!root.left && !root.right) {
      nums.push(Number(str + root.val));
      return;
    }
    dfs(root.left, str + root.val);
    dfs(root.right, str + root.val);
  }

  dfs(root);
  return nums.reduce((a, b) => a + b);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(sumNumbers(root));