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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let count = 0;
  let min = null;

  function inorder(root) {
    if (!root || count >= k) return min;
    root.left && inorder(root.left);
    count++;
    if (count === k) {
      min = root.val;
      return min;
    }
    root.right && inorder(root.right);
    return min;
  }

  return inorder(root);
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined? null : left);
  this.right = (right===undefined? null : right);
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
node3.left = node1;
node3.right = node4;
node1.right = node2;
console.log(kthSmallest(node3, 1));