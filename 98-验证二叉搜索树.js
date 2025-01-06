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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let flag = true;
  let preVal;

  function inorder(root) {
    if (!flag) return flag;
    root.left && inorder(root.left);
    if (preVal !== undefined && root.val <= preVal) {
      flag = false;
      return flag;
    }
    preVal = root.val;
    root.right && inorder(root.right);
  }

  inorder(root);
  return flag;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

// const node1 = new TreeNode(1);
// const node2 = new TreeNode(2);
// const node3 = new TreeNode(3);
// const node4 = new TreeNode(4);
// const node5 = new TreeNode(5);
// const node6 = new TreeNode(6);
// node5.left = node1;
// node5.right = node4;
// node4.left = node3;
// node4.right = node6;
// console.log(isValidBST(node5));

const node0 = new TreeNode(0);
const nodeMinus1 = new TreeNode(-1);
node0.right = nodeMinus1;
console.log(isValidBST(node0));